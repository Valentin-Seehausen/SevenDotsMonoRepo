import { ethers } from "hardhat";

export default {
  contracts: {
    maticWETH: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    artist: "0x5C8bFea4893541a3A38d7A844094BB92Fa5456ca",
  },
  bids: {
    firstSuccess: ethers.utils.parseEther("0.002"),
    firstArtistReward: ethers.utils.parseEther("0.0004"),
    firstTreasuryReward: ethers.utils.parseEther("0.0016"),
    secondSuccess: ethers.utils.parseEther("0.004"),
    startBid: ethers.utils.parseEther("0.001"),
    lowBid: ethers.utils.parseEther("0.0019"),
  },
  amounts: {
    auctionCreatorReward: ethers.utils.parseEther("0.1"),
    stackReward: ethers.utils.parseEther("7.0"),
    one: ethers.utils.parseEther("1.0"),
    two: ethers.utils.parseEther("2.0"),
    five: ethers.utils.parseEther("5.0"),
    eight: ethers.utils.parseEther("8.0"),
    nine: ethers.utils.parseEther("9.0"),
    ten: ethers.utils.parseEther("10.0"),
    million: ethers.utils.parseEther("1000000.0"),
    firstBidStakingInRoundTwo: ethers.utils.parseEther("0.001999949601270047"),
    firstBidAfterStaking: ethers.utils.parseEther("0.0020000504"),
    firstBidAfterStaking2: ethers.utils.parseEther("0.00200010080127008"),
    stakingFaktor1: ethers.utils.parseEther("1.0000252"),
    stakingFaktor2: ethers.utils.parseEther("1.00005040063504"),
    fillRewardPerAuction: ethers.utils.parseEther("0.05"),
  },
  tokenURI: {
    "0": JSON.stringify({
      name: "#0",
      description: "Seven Dots Token",
      attributes: [
        { trait_type: "f1", value: "c1" },
        { trait_type: "Dots", display_type: "number", value: 1 },
        { trait_type: "Rarity Points", display_type: "number", value: 7 },
        { trait_type: "DNA", value: "f1c1" },
      ],
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzcyMCcgaGVpZ2h0PSc3MjAnIHZpZXdib3g9JzAgMCA3MjAgNzIwJz48c3R5bGU+I2JnIHtmaWxsOiAjMDAwfS5jMSB7ZmlsbDogI0ZGMDAwMH0uYzIge2ZpbGw6ICNGRkIzMDB9LmMzIHtmaWxsOiAjRERGRjAwfS5jNCB7ZmlsbDogIzAwRkY1RX0uYzUge2ZpbGw6ICMwMDkxRkZ9LmM2IHtmaWxsOiAjNDgwMEZGfS5jNyB7ZmlsbDogI0ZGMDBEOX08L3N0eWxlPjxyZWN0IGlkPSdiZycgeD0nMCcgeT0nMCcgd2lkdGg9JzcyMCcgaGVpZ2h0PSc3MjAnLz48cmVjdCBjbGFzcz0nYzEnIHg9JzYwJyB5PSczMzAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjwvc3ZnPg==",
    }),
    "28": JSON.stringify({
      name: "#28",
      description: "Seven Dots Token",
      attributes: [
        { trait_type: "f2", value: "c2" },
        { trait_type: "Dots", display_type: "number", value: 1 },
        { trait_type: "Rarity Points", display_type: "number", value: 7 },
        { trait_type: "DNA", value: "f2c2" },
      ],
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Ym94PScwIDAgMjQgMjQnPjxzdHlsZT4jYmcge2ZpbGw6ICMwMDB9LmMxIHtmaWxsOiAjRkYwMDAwfS5jMiB7ZmlsbDogI0ZGQjMwMH0uYzMge2ZpbGw6ICNEREZGMDB9LmM0IHtmaWxsOiAjMDBGRjVFfS5jNSB7ZmlsbDogIzAwOTFGRn0uYzYge2ZpbGw6ICM0ODAwRkZ9LmM3IHtmaWxsOiAjRkYwMEQ5fTwvc3R5bGU+PHJlY3QgaWQ9J2JnJyB4PScwJyB5PScwJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnLz48cmVjdCBjbGFzcz0nYzInIHg9JzUnIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PC9zdmc+",
    }),
    "195": JSON.stringify({
      name: "#195",
      description: "Seven Dots Token",
      attributes: [
        { trait_type: "f7", value: "c6" },
        { trait_type: "Dots", display_type: "number", value: 1 },
        { trait_type: "Rarity Points", display_type: "number", value: 1 },
        { trait_type: "DNA", value: "f7c5" },
      ],
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Ym94PScwIDAgMjQgMjQnPjxzdHlsZT4jYmcge2ZpbGw6ICMwMDB9LmMxIHtmaWxsOiAjRkYwMDAwfS5jMiB7ZmlsbDogI0ZGQjMwMH0uYzMge2ZpbGw6ICNEREZGMDB9LmM0IHtmaWxsOiAjMDBGRjVFfS5jNSB7ZmlsbDogIzAwOTFGRn0uYzYge2ZpbGw6ICM0ODAwRkZ9LmM3IHtmaWxsOiAjRkYwMEQ5fTwvc3R5bGU+PHJlY3QgaWQ9J2JnJyB4PScwJyB5PScwJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnLz48cmVjdCBjbGFzcz0nYzYnIHg9JzIwJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjwvc3ZnPg==",
    }),
    "196": JSON.stringify({
      name: "#196",
      description: "Seven Dots Token",
      attributes: [
        { trait_type: "f1", value: "c1" },
        { trait_type: "Dots", display_type: "number", value: 1 },
        { trait_type: "Rarity Points", display_type: "number", value: 7 },
        { trait_type: "DNA", value: "f1c1" },
      ],
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Ym94PScwIDAgMjQgMjQnPjxzdHlsZT4jYmcge2ZpbGw6ICMwMDB9LmMxIHtmaWxsOiAjRkYwMDAwfS5jMiB7ZmlsbDogI0ZGQjMwMH0uYzMge2ZpbGw6ICNEREZGMDB9LmM0IHtmaWxsOiAjMDBGRjVFfS5jNSB7ZmlsbDogIzAwOTFGRn0uYzYge2ZpbGw6ICM0ODAwRkZ9LmM3IHtmaWxsOiAjRkYwMEQ5fTwvc3R5bGU+PHJlY3QgaWQ9J2JnJyB4PScwJyB5PScwJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnLz48cmVjdCBjbGFzcz0nYzEnIHg9JzInIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PC9zdmc+",
    }),
    f4c1: JSON.stringify({
      name: "#0",
      description: "Seven Dots Token",
      attributes: [
        { trait_type: "f4", value: "c1" },
        { trait_type: "Dots", display_type: "number", value: 1 },
        { trait_type: "Rarity Points", display_type: "number", value: 3 },
        { trait_type: "DNA", value: "f4c1" },
      ],
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzcyMCcgaGVpZ2h0PSc3MjAnIHZpZXdib3g9JzAgMCA3MjAgNzIwJz48c3R5bGU+I2JnIHtmaWxsOiAjMDAwfS5jMSB7ZmlsbDogI0ZGMDAwMH0uYzIge2ZpbGw6ICNGRkIzMDB9LmMzIHtmaWxsOiAjRERGRjAwfS5jNCB7ZmlsbDogIzAwRkY1RX0uYzUge2ZpbGw6ICMwMDkxRkZ9LmM2IHtmaWxsOiAjNDgwMEZGfS5jNyB7ZmlsbDogI0ZGMDBEOX08L3N0eWxlPjxyZWN0IGlkPSdiZycgeD0nMCcgeT0nMCcgd2lkdGg9JzcyMCcgaGVpZ2h0PSc3MjAnLz48cmVjdCBjbGFzcz0nYzEnIHg9JzMzMCcgeT0nMzMwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnLz48L3N2Zz4=",
    }),
    rareRainbowOne: JSON.stringify({
      name: "#0",
      description: "Seven Dots Token",
      attributes: [
        { trait_type: "f1", value: "c1" },
        { trait_type: "f2", value: "c2" },
        { trait_type: "f3", value: "c3" },
        { trait_type: "f4", value: "c4" },
        { trait_type: "f5", value: "c5" },
        { trait_type: "f6", value: "c6" },
        { trait_type: "f7", value: "c7" },
        { trait_type: "Dots", display_type: "number", value: 7 },
        { trait_type: "Rarity Points", display_type: "number", value: 49 },
        { trait_type: "DNA", value: "f1c1f2c2f3c3f4c4f5c5f6c6f7c7" },
      ],
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Ym94PScwIDAgMjQgMjQnPjxzdHlsZT4jYmcge2ZpbGw6ICMwMDB9LmMxIHtmaWxsOiAjRkYwMDAwfS5jMiB7ZmlsbDogI0ZGQjMwMH0uYzMge2ZpbGw6ICNEREZGMDB9LmM0IHtmaWxsOiAjMDBGRjVFfS5jNSB7ZmlsbDogIzAwOTFGRn0uYzYge2ZpbGw6ICM0ODAwRkZ9LmM3IHtmaWxsOiAjRkYwMEQ5fTwvc3R5bGU+PHJlY3QgaWQ9J2JnJyB4PScwJyB5PScwJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnLz48cmVjdCBjbGFzcz0nYzEnIHg9JzInIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2MyJyB4PSc1JyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjMycgeD0nOCcgeT0nMTEnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzQnIHg9JzExJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjNScgeD0nMTQnIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M2JyB4PScxNycgeT0nMTEnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzcnIHg9JzIwJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjwvc3ZnPg==",
    }),
    rareRainbowTwo: JSON.stringify({
      name: "#0",
      description: "Seven Dots Token",
      attributes: [
        { trait_type: "f1", value: "c11" },
        { trait_type: "f2", value: "c22" },
        { trait_type: "f3", value: "c33" },
        { trait_type: "f4", value: "c44" },
        { trait_type: "f5", value: "c55" },
        { trait_type: "f6", value: "c66" },
        { trait_type: "f7", value: "c77" },
        { trait_type: "Dots", display_type: "number", value: 14 },
        { trait_type: "Rarity Points", display_type: "number", value: 98 },
        { trait_type: "DNA", value: "f1c11f2c22f3c33f4c44f5c55f6c66f7c77" },
      ],
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzcyMCcgaGVpZ2h0PSc3MjAnIHZpZXdib3g9JzAgMCA3MjAgNzIwJz48c3R5bGU+I2JnIHtmaWxsOiAjMDAwfS5jMSB7ZmlsbDogI0ZGMDAwMH0uYzIge2ZpbGw6ICNGRkIzMDB9LmMzIHtmaWxsOiAjRERGRjAwfS5jNCB7ZmlsbDogIzAwRkY1RX0uYzUge2ZpbGw6ICMwMDkxRkZ9LmM2IHtmaWxsOiAjNDgwMEZGfS5jNyB7ZmlsbDogI0ZGMDBEOX08L3N0eWxlPjxyZWN0IGlkPSdiZycgeD0nMCcgeT0nMCcgd2lkdGg9JzcyMCcgaGVpZ2h0PSc3MjAnLz48cmVjdCBjbGFzcz0nYzEnIHg9JzYwJyB5PScyNzAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjMScgeD0nNjAnIHk9JzM2MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2MyJyB4PScxNTAnIHk9JzI3MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2MyJyB4PScxNTAnIHk9JzM2MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2MzJyB4PScyNDAnIHk9JzI3MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2MzJyB4PScyNDAnIHk9JzM2MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M0JyB4PSczMzAnIHk9JzI3MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M0JyB4PSczMzAnIHk9JzM2MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M1JyB4PSc0MjAnIHk9JzI3MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M1JyB4PSc0MjAnIHk9JzM2MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M2JyB4PSc1MTAnIHk9JzI3MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M2JyB4PSc1MTAnIHk9JzM2MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M3JyB4PSc2MDAnIHk9JzI3MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M3JyB4PSc2MDAnIHk9JzM2MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PC9zdmc+",
    }),
    commonRainbowOne: JSON.stringify({
      name: "#0",
      description: "Seven Dots Token",
      attributes: [
        { trait_type: "f1", value: "c7" },
        { trait_type: "f2", value: "c6" },
        { trait_type: "f3", value: "c5" },
        { trait_type: "f4", value: "c4" },
        { trait_type: "f5", value: "c3" },
        { trait_type: "f6", value: "c2" },
        { trait_type: "f7", value: "c1" },
        { trait_type: "Dots", display_type: "number", value: 7 },
        { trait_type: "Rarity Points", display_type: "number", value: 28 },
        { trait_type: "DNA", value: "f1c7f2c6f3c5f4c4f5c3f6c2f7c1" },
      ],
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzcyMCcgaGVpZ2h0PSc3MjAnIHZpZXdib3g9JzAgMCA3MjAgNzIwJz48c3R5bGU+I2JnIHtmaWxsOiAjMDAwfS5jMSB7ZmlsbDogI0ZGMDAwMH0uYzIge2ZpbGw6ICNGRkIzMDB9LmMzIHtmaWxsOiAjRERGRjAwfS5jNCB7ZmlsbDogIzAwRkY1RX0uYzUge2ZpbGw6ICMwMDkxRkZ9LmM2IHtmaWxsOiAjNDgwMEZGfS5jNyB7ZmlsbDogI0ZGMDBEOX08L3N0eWxlPjxyZWN0IGlkPSdiZycgeD0nMCcgeT0nMCcgd2lkdGg9JzcyMCcgaGVpZ2h0PSc3MjAnLz48cmVjdCBjbGFzcz0nYzcnIHg9JzYwJyB5PSczMzAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjNicgeD0nMTUwJyB5PSczMzAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjNScgeD0nMjQwJyB5PSczMzAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjNCcgeD0nMzMwJyB5PSczMzAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjMycgeD0nNDIwJyB5PSczMzAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjMicgeD0nNTEwJyB5PSczMzAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjMScgeD0nNjAwJyB5PSczMzAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjwvc3ZnPg==",
    }),
    rareRainbowSeven: JSON.stringify({
      name: "#0",
      description: "Seven Dots Token",
      attributes: [
        { trait_type: "f1", value: "c1111111" },
        { trait_type: "f2", value: "c2222222" },
        { trait_type: "f3", value: "c3333333" },
        { trait_type: "f4", value: "c4444444" },
        { trait_type: "f5", value: "c5555555" },
        { trait_type: "f6", value: "c6666666" },
        { trait_type: "f7", value: "c7777777" },
        { trait_type: "Dots", display_type: "number", value: 49 },
        { trait_type: "Rarity Points", display_type: "number", value: 343 },
        {
          trait_type: "DNA",
          value:
            "f1c1111111f2c2222222f3c3333333f4c4444444f5c5555555f6c6666666f7c7777777",
        },
      ],
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzcyMCcgaGVpZ2h0PSc3MjAnIHZpZXdib3g9JzAgMCA3MjAgNzIwJz48c3R5bGU+I2JnIHtmaWxsOiAjMDAwfS5jMSB7ZmlsbDogI0ZGMDAwMH0uYzIge2ZpbGw6ICNGRkIzMDB9LmMzIHtmaWxsOiAjRERGRjAwfS5jNCB7ZmlsbDogIzAwRkY1RX0uYzUge2ZpbGw6ICMwMDkxRkZ9LmM2IHtmaWxsOiAjNDgwMEZGfS5jNyB7ZmlsbDogI0ZGMDBEOX08L3N0eWxlPjxyZWN0IGlkPSdiZycgeD0nMCcgeT0nMCcgd2lkdGg9JzcyMCcgaGVpZ2h0PSc3MjAnLz48cmVjdCBjbGFzcz0nYzEnIHg9JzYwJyB5PSc2MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2MxJyB4PSc2MCcgeT0nMTUwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnLz48cmVjdCBjbGFzcz0nYzEnIHg9JzYwJyB5PScyNDAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjMScgeD0nNjAnIHk9JzMzMCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2MxJyB4PSc2MCcgeT0nNDIwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnLz48cmVjdCBjbGFzcz0nYzEnIHg9JzYwJyB5PSc1MTAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjMScgeD0nNjAnIHk9JzYwMCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2MyJyB4PScxNTAnIHk9JzYwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnLz48cmVjdCBjbGFzcz0nYzInIHg9JzE1MCcgeT0nMTUwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnLz48cmVjdCBjbGFzcz0nYzInIHg9JzE1MCcgeT0nMjQwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnLz48cmVjdCBjbGFzcz0nYzInIHg9JzE1MCcgeT0nMzMwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnLz48cmVjdCBjbGFzcz0nYzInIHg9JzE1MCcgeT0nNDIwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnLz48cmVjdCBjbGFzcz0nYzInIHg9JzE1MCcgeT0nNTEwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnLz48cmVjdCBjbGFzcz0nYzInIHg9JzE1MCcgeT0nNjAwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnLz48cmVjdCBjbGFzcz0nYzMnIHg9JzI0MCcgeT0nNjAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjMycgeD0nMjQwJyB5PScxNTAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjMycgeD0nMjQwJyB5PScyNDAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjMycgeD0nMjQwJyB5PSczMzAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjMycgeD0nMjQwJyB5PSc0MjAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjMycgeD0nMjQwJyB5PSc1MTAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjMycgeD0nMjQwJyB5PSc2MDAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjNCcgeD0nMzMwJyB5PSc2MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M0JyB4PSczMzAnIHk9JzE1MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M0JyB4PSczMzAnIHk9JzI0MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M0JyB4PSczMzAnIHk9JzMzMCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M0JyB4PSczMzAnIHk9JzQyMCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M0JyB4PSczMzAnIHk9JzUxMCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M0JyB4PSczMzAnIHk9JzYwMCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M1JyB4PSc0MjAnIHk9JzYwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnLz48cmVjdCBjbGFzcz0nYzUnIHg9JzQyMCcgeT0nMTUwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnLz48cmVjdCBjbGFzcz0nYzUnIHg9JzQyMCcgeT0nMjQwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnLz48cmVjdCBjbGFzcz0nYzUnIHg9JzQyMCcgeT0nMzMwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnLz48cmVjdCBjbGFzcz0nYzUnIHg9JzQyMCcgeT0nNDIwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnLz48cmVjdCBjbGFzcz0nYzUnIHg9JzQyMCcgeT0nNTEwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnLz48cmVjdCBjbGFzcz0nYzUnIHg9JzQyMCcgeT0nNjAwJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnLz48cmVjdCBjbGFzcz0nYzYnIHg9JzUxMCcgeT0nNjAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjNicgeD0nNTEwJyB5PScxNTAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjNicgeD0nNTEwJyB5PScyNDAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjNicgeD0nNTEwJyB5PSczMzAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjNicgeD0nNTEwJyB5PSc0MjAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjNicgeD0nNTEwJyB5PSc1MTAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjNicgeD0nNTEwJyB5PSc2MDAnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcvPjxyZWN0IGNsYXNzPSdjNycgeD0nNjAwJyB5PSc2MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M3JyB4PSc2MDAnIHk9JzE1MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M3JyB4PSc2MDAnIHk9JzI0MCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M3JyB4PSc2MDAnIHk9JzMzMCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M3JyB4PSc2MDAnIHk9JzQyMCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M3JyB4PSc2MDAnIHk9JzUxMCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PHJlY3QgY2xhc3M9J2M3JyB4PSc2MDAnIHk9JzYwMCcgd2lkdGg9JzYwJyBoZWlnaHQ9JzYwJy8+PC9zdmc+",
    }),
  },
  time: {
    auctionDuration: 24 * 60 * 60,
    stackDuration: 2 * 60 * 60,
  },
  seed: {
    /** Usual dot #0 */
    0: "0x00000000000000000000000000000b7abc627050305adf14a3d9e40000000000",
    /** Usual dot #1 */
    1: "0x000000000000000000000000000016f578c4e0a060b5be2947b3c80000000000",
    /** Merge of #0 and #1 */
    2: "0x000000000000000000000000000089c0d49d43c2444274f7ae36b00000000000",
    /** Field 4 Color 1 */
    f4c1: "0x00000000000000000000000000000000000000000000003635c9adc5dea00000",
    /** Field 4 Color 1, 1 */
    f4c11: "0x0000000000000000000000000000000000000000000002544faa778090e00000",
    /** Common rainbow with one row */
    commonRainbowOne:
      "0x0000000000000000000000000000505b2724a07aa4b6f34d8e036f45fd1fed01",
    /** Rare rainbow with one row */
    rareRainbowOne:
      "0x00000000000000000000000000000b7abc88f51376d8e60c8c8088ca0076c707",
    /** Rare rainbow with two rows */
    rareRainbowTwo:
      "0x00000000000000000000000000007e4619e287d61b51e28a0985e0ae051a8d4d",
    /** Rare rainbow with five rows */
    rareRainbowFive:
      "0x00000000000000000000000001f23c0cdc44dfcb3fe8aaa61eb0f75a233840d1",
    /** Rare rainbow with six rows */
    rareRainbowSix:
      "0x000000000000000000000000137663fb5739b303f5ef9089bf6a324f60a94f31",
    /** Full rare rainbow with seven rows */
    rareRainbowSeven:
      "0x000000000000000000000000c29ff34c24c9f33b12348b6e06a67fe3c713def1",
  },
  svg: {
    fullSpectrum:
      "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='720' height='720' viewbox='0 0 720 720'><style>#bg {fill: #000}.c1 {fill: #FF0000}.c2 {fill: #FFB300}.c3 {fill: #DDFF00}.c4 {fill: #00FF5E}.c5 {fill: #0091FF}.c6 {fill: #4800FF}.c7 {fill: #FF00D9}</style><rect id='bg' x='0' y='0' width='720' height='720'/><rect class='c1' x='60' y='330' width='60' height='60'/><rect class='c2' x='150' y='240' width='60' height='60'/><rect class='c2' x='150' y='330' width='60' height='60'/><rect class='c2' x='150' y='420' width='60' height='60'/><rect class='c3' x='240' y='150' width='60' height='60'/><rect class='c3' x='240' y='240' width='60' height='60'/><rect class='c3' x='240' y='330' width='60' height='60'/><rect class='c3' x='240' y='420' width='60' height='60'/><rect class='c3' x='240' y='510' width='60' height='60'/><rect class='c4' x='330' y='60' width='60' height='60'/><rect class='c4' x='330' y='150' width='60' height='60'/><rect class='c4' x='330' y='240' width='60' height='60'/><rect class='c4' x='330' y='330' width='60' height='60'/><rect class='c4' x='330' y='420' width='60' height='60'/><rect class='c4' x='330' y='510' width='60' height='60'/><rect class='c4' x='330' y='600' width='60' height='60'/><rect class='c5' x='420' y='150' width='60' height='60'/><rect class='c5' x='420' y='240' width='60' height='60'/><rect class='c5' x='420' y='330' width='60' height='60'/><rect class='c5' x='420' y='420' width='60' height='60'/><rect class='c5' x='420' y='510' width='60' height='60'/><rect class='c6' x='510' y='90' width='60' height='60'/><rect class='c6' x='510' y='180' width='60' height='60'/><rect class='c6' x='510' y='270' width='60' height='60'/><rect class='c6' x='510' y='360' width='60' height='60'/><rect class='c6' x='510' y='450' width='60' height='60'/><rect class='c6' x='510' y='540' width='60' height='60'/></svg>",
  },
};
