// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract SevenDotsMetadata is
    Initializable,
    UUPSUpgradeable,
    AccessControlUpgradeable
{
    uint256 constant BASE = 7;
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");

    /**
     * @notice Overwrite for Upgradeblae
     */
    function _authorizeUpgrade(address)
        internal
        override
        onlyRole(OWNER_ROLE)
    {}

    /**
     * @notice Constructor for Upgradeable
     */
    function initialize() public initializer {
        __UUPSUpgradeable_init();
        __AccessControl_init();
        _setupRole(OWNER_ROLE, msg.sender);
    }

    /**
     * @notice Encodes the dna (an array of uints) into the seed phrase.
     * @dev The seed phrase is used outside of Metadata.
     * @dev The dna is used inside metadata to calculate the image
     * @param dna array of uints
     */
    function encode(uint256[7] memory dna) public pure returns (bytes32) {
        uint256 n;
        bytes32 encoded;
        for (uint256 i = 0; i < 7; i++) {
            n += colToInt(i, dna[i]);
        }
        bytes memory b = abi.encodePacked(n);
        assembly {
            encoded := mload(add(b, 32))
        }
        return encoded;
    }

    /**
     * @notice Decodes a seed phrase into an array of uints.
     * @param seed Bytes representing the token
     */
    function decode(bytes32 seed) public pure returns (uint256[7] memory) {
        uint256 dna = abi.decode(abi.encodePacked(seed), (uint256));
        uint256[7] memory cols;
        for (uint256 r = 0; r < 7; r++) {
            cols[r] = intToCol(r, dna);
        }
        return cols;
    }

    /**
     * @notice returns total amount of dots in the image.
     * @param seed Bytes representing the token.
     */
    function countDots(bytes32 seed) public pure returns (uint256) {
        uint256 dotCount = 0;
        uint256[7] memory cols = decode(seed);
        for (uint256 c = 0; c < 7; c++) {
            dotCount += getLength(cols[c]);
        }
        return dotCount;
    }

    /**
     * @notice Encodes a col like 113 into a dna to save bytes.
     * @param col_i Each char represents one dot.
     */
    function colToInt(uint256 col_i, uint256 dna)
        internal
        pure
        returns (uint256)
    {
        uint256 i = BASE - col_i - 1;
        return dna * 10**(BASE * i);
    }

    /**
     * @notice Decodes a number
     */
    function intToCol(uint256 col_i, uint256 col)
        internal
        pure
        returns (uint256)
    {
        uint256 i = BASE - col_i - 1;
        return (col % 10**(BASE * (i + 1))) / 10**(BASE * i);
    }

    /**
     * @notice stacks col2 on top of col1.
     * @dev Some dots of col2 may get lost.
     * @param col1 the bottom.
     * @param col2 the top.
     */
    function addCols(uint256 col1, uint256 col2) public pure returns (uint256) {
        return (col2 * 10**(getLength(col1)) + col1) % 10**BASE;
    }

    /**
     * @notice Stacks b2 on top of b1.
     * @dev Decodes them to dna and merges then.
     * @param b1 the bottom.
     * @param b2 the top.
     */
    function merge(bytes32 b1, bytes32 b2) public pure returns (bytes32) {
        return encode(mergeDna(decode(b1), decode(b2)));
    }

    /**
     * @notice Merges dna2 on top of dna1.
     * @dev adds col per col.
     * @param dna1 the bottom
     * @param dna2 the top
     */
    function mergeDna(uint256[7] memory dna1, uint256[7] memory dna2)
        public
        pure
        returns (uint256[7] memory)
    {
        uint256[7] memory newDna;
        for (uint256 i = 0; i < 7; i++) {
            newDna[i] = addCols(dna1[i], dna2[i]);
        }
        return newDna;
    }

    /**
     * @notice get the dot count of a col
     * @param col The col
     */
    function getLength(uint256 col) public pure returns (uint256) {
        uint256 length;
        for (uint256 l = 0; l < BASE; l++) {
            if (col / (10**l) > 0) {
                length = l + 1;
            }
        }
        return length;
    }

    function calcAttributes(bytes32 seed) public pure returns (string memory) {
        bytes memory b;
        bytes memory dna;
        b = abi.encodePacked(b, '"attributes":[');
        uint256[7] memory cols = decode(seed);
        for (uint256 i = 0; i < BASE; i++) {
            if (cols[i] > 0) {
                b = abi.encodePacked(
                    b,
                    '{"trait_type":"f',
                    StringsUpgradeable.toString(i + 1),
                    '","value":"c',
                    StringsUpgradeable.toString(cols[i]),
                    '"},'
                );
                dna = abi.encodePacked(
                    dna,
                    "f",
                    StringsUpgradeable.toString(i + 1),
                    "c",
                    StringsUpgradeable.toString(cols[i])
                );
            }
        }
        b = abi.encodePacked(
            b,
            '{"trait_type":"Dots","display_type":"number","value":',
            StringsUpgradeable.toString(countDots(seed)),
            "},"
        );
        b = abi.encodePacked(b, '{"trait_type":"DNA","value":"', dna, '"}');
        b = abi.encodePacked(b, "]");
        return string(b);
    }

    /**
     * @notice Takes a seed and calculates a base64 encoded svg.
     * @param seed the seed phrase of the token
     */
    function calcSvg(bytes32 seed) public pure returns (string memory) {
        bytes memory b;
        b = abi.encodePacked(
            b,
            "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='720' height='720' viewbox='0 0 720 720'>"
        );
        b = abi.encodePacked(b, "<style>");
        b = abi.encodePacked(b, "#bg {fill: #000}");
        b = abi.encodePacked(b, ".c1 {fill: #FF0000}");
        b = abi.encodePacked(b, ".c2 {fill: #FFB300}");
        b = abi.encodePacked(b, ".c3 {fill: #DDFF00}");
        b = abi.encodePacked(b, ".c4 {fill: #00FF5E}");
        b = abi.encodePacked(b, ".c5 {fill: #0091FF}");
        b = abi.encodePacked(b, ".c6 {fill: #4800FF}");
        b = abi.encodePacked(b, ".c7 {fill: #FF00D9}");
        b = abi.encodePacked(b, "</style>");
        b = abi.encodePacked(
            b,
            "<rect id='bg' x='0' y='0' width='720' height='720'/>"
        );
        b = abi.encodePacked(b, getDots(seed));
        b = abi.encodePacked(b, "</svg>");

        return string(b);
    }

    /**
     * @notice Calculates the dots on the SVG for
     * @param seed the seeh phrase.
     * @dev Gets the dots col per col.
     */
    function getDots(bytes32 seed) public pure returns (string memory) {
        bytes memory b;
        uint256[7] memory cols = decode(seed);
        for (uint256 i = 0; i < BASE; i++) {
            b = abi.encodePacked(b, getColDots(cols[i], i));
        }
        return string(b);
    }

    /**
     * @notice Returns Dots for one col
     * @param col The col
     */
    function getColDots(uint256 col, uint256 col_i)
        public
        pure
        returns (string memory)
    {
        bytes memory b;
        uint256 x = (2 + 3 * col_i) * 30;
        uint256 l = getLength(col);
        for (uint256 i = 0; i < l; i++) {
            uint256 y = (12 - (15 * l) / 10 + 3 * i) * 30;
            uint256 c = getColor(col, i);
            b = abi.encodePacked(b, getRect(x, y, c));
        }
        return string(b);
    }

    /**
     * @notice calculate the color of dot [i] in [col]
     * @param col the uint of the col
     * @param i index of the dot
     */
    function getColor(uint256 col, uint256 i) public pure returns (uint256) {
        return (col % 10**(getLength(col) - i)) / 10**(getLength(col) - i - 1);
    }

    /**
     * @notice Takes coordinates and color and returns a svg rect element
     * @param x coordinate
     * @param y coordinate
     * @param c color
     */
    function getRect(
        uint256 x,
        uint256 y,
        uint256 c
    ) public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    "<rect class='c",
                    StringsUpgradeable.toString(c),
                    "' x='",
                    StringsUpgradeable.toString(x),
                    "' y='",
                    StringsUpgradeable.toString(y),
                    "' width='60' height='60'/>"
                )
            );
    }
}
