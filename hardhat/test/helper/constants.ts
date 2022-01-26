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
  },
  tokenURI: {
    "0": JSON.stringify({
      name: "#0",
      description: "Seven Dots Token",
      attributes: [
        { trait_type: "f1", value: "c1" },
        { trait_type: "Dots", display_type: "number", value: "1" },
        { trait_type: "DNA", value: "f1c1" },
      ],
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Ym94PScwIDAgMjQgMjQnPjxzdHlsZT4jYmcge2ZpbGw6ICMwMDB9LmMxIHtmaWxsOiAjRkYwMDAwfS5jMiB7ZmlsbDogI0ZGQjMwMH0uYzMge2ZpbGw6ICNEREZGMDB9LmM0IHtmaWxsOiAjMDBGRjVFfS5jNSB7ZmlsbDogIzAwOTFGRn0uYzYge2ZpbGw6ICM0ODAwRkZ9LmM3IHtmaWxsOiAjRkYwMEQ5fTwvc3R5bGU+PHJlY3QgaWQ9J2JnJyB4PScwJyB5PScwJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnLz48cmVjdCBjbGFzcz0nYzEnIHg9JzInIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PC9zdmc+",
    }),
    "1": "data:application/json;base64,eyJpbWFnZSI6ICJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY25JSFpsY25OcGIyNDlKekV1TVNjZ2QybGtkR2c5SnpJMEp5Qm9aV2xuYUhROUp6STBKeUIyYVdWM1ltOTRQU2N3SURBZ01qUWdNalFuUGp4emRIbHNaVDRqWW1jZ2UyWnBiR3c2SUNNd01EQjlMbU14SUh0bWFXeHNPaUFqUmtZd01EQXdmUzVqTWlCN1ptbHNiRG9nSTBaR1FqTXdNSDB1WXpNZ2UyWnBiR3c2SUNORVJFWkdNREI5TG1NMElIdG1hV3hzT2lBak1EQkdSalZGZlM1ak5TQjdabWxzYkRvZ0l6QXdPVEZHUm4wdVl6WWdlMlpwYkd3NklDTTBPREF3UmtaOUxtTTNJSHRtYVd4c09pQWpSa1l3TUVRNWZUd3ZjM1I1YkdVK1BISmxZM1FnYVdROUoySm5KeUI0UFNjd0p5QjVQU2N3SnlCM2FXUjBhRDBuTWpRbklHaGxhV2RvZEQwbk1qUW5MejQ4Y21WamRDQmpiR0Z6Y3owbll6SW5JSGc5SnpJbklIazlKekV4SnlCM2FXUjBhRDBuTWljZ2FHVnBaMmgwUFNjeUp5OCtQQzl6ZG1jKyJ9",
    "28": JSON.stringify({
      name: "#28",
      description: "Seven Dots Token",
      attributes: [
        { trait_type: "f2", value: "c2" },
        { trait_type: "Dots", display_type: "number", value: "1" },
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
        { trait_type: "Dots", display_type: "number", value: "1" },
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
        { trait_type: "Dots", display_type: "number", value: "1" },
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
        { trait_type: "Dots", display_type: "number", value: "1" },
        { trait_type: "DNA", value: "f4c1" },
      ],
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Ym94PScwIDAgMjQgMjQnPjxzdHlsZT4jYmcge2ZpbGw6ICMwMDB9LmMxIHtmaWxsOiAjRkYwMDAwfS5jMiB7ZmlsbDogI0ZGQjMwMH0uYzMge2ZpbGw6ICNEREZGMDB9LmM0IHtmaWxsOiAjMDBGRjVFfS5jNSB7ZmlsbDogIzAwOTFGRn0uYzYge2ZpbGw6ICM0ODAwRkZ9LmM3IHtmaWxsOiAjRkYwMEQ5fTwvc3R5bGU+PHJlY3QgaWQ9J2JnJyB4PScwJyB5PScwJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnLz48cmVjdCBjbGFzcz0nYzEnIHg9JzExJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjwvc3ZnPg==",
    }),
    rareRainbowOne:
      "data:application/json;base64,eyJpbWFnZSI6ICJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY25JSFpsY25OcGIyNDlKekV1TVNjZ2QybGtkR2c5SnpJMEp5Qm9aV2xuYUhROUp6STBKeUIyYVdWM1ltOTRQU2N3SURBZ01qUWdNalFuUGp4emRIbHNaVDRqWW1jZ2UyWnBiR3c2SUNNd01EQjlMbU14SUh0bWFXeHNPaUFqUmtZd01EQXdmUzVqTWlCN1ptbHNiRG9nSTBaR1FqTXdNSDB1WXpNZ2UyWnBiR3c2SUNORVJFWkdNREI5TG1NMElIdG1hV3hzT2lBak1EQkdSalZGZlM1ak5TQjdabWxzYkRvZ0l6QXdPVEZHUm4wdVl6WWdlMlpwYkd3NklDTTBPREF3UmtaOUxtTTNJSHRtYVd4c09pQWpSa1l3TUVRNWZUd3ZjM1I1YkdVK1BISmxZM1FnYVdROUoySm5KeUI0UFNjd0p5QjVQU2N3SnlCM2FXUjBhRDBuTWpRbklHaGxhV2RvZEQwbk1qUW5MejQ4Y21WamRDQmpiR0Z6Y3owbll6RW5JSGc5SnpFeEp5QjVQU2N4TVNjZ2QybGtkR2c5SnpJbklHaGxhV2RvZEQwbk1pY3ZQand2YzNablBnPT0ifQ==",
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
        { trait_type: "Dots", display_type: "number", value: "14" },
        { trait_type: "DNA", value: "f1c11f2c22f3c33f4c44f5c55f6c66f7c77" },
      ],
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Ym94PScwIDAgMjQgMjQnPjxzdHlsZT4jYmcge2ZpbGw6ICMwMDB9LmMxIHtmaWxsOiAjRkYwMDAwfS5jMiB7ZmlsbDogI0ZGQjMwMH0uYzMge2ZpbGw6ICNEREZGMDB9LmM0IHtmaWxsOiAjMDBGRjVFfS5jNSB7ZmlsbDogIzAwOTFGRn0uYzYge2ZpbGw6ICM0ODAwRkZ9LmM3IHtmaWxsOiAjRkYwMEQ5fTwvc3R5bGU+PHJlY3QgaWQ9J2JnJyB4PScwJyB5PScwJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnLz48cmVjdCBjbGFzcz0nYzEnIHg9JzInIHk9JzknIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzEnIHg9JzInIHk9JzEyJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2MyJyB4PSc1JyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2MyJyB4PSc1JyB5PScxMicgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjMycgeD0nOCcgeT0nOScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjMycgeD0nOCcgeT0nMTInIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzQnIHg9JzExJyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M0JyB4PScxMScgeT0nMTInIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzUnIHg9JzE0JyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M1JyB4PScxNCcgeT0nMTInIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzYnIHg9JzE3JyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M2JyB4PScxNycgeT0nMTInIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzcnIHg9JzIwJyB5PSc5JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M3JyB4PScyMCcgeT0nMTInIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48L3N2Zz4=",
    }),
    commonRainbowOne:
      "data:application/json;base64,eyJpbWFnZSI6ICJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY25JSFpsY25OcGIyNDlKekV1TVNjZ2QybGtkR2c5SnpJMEp5Qm9aV2xuYUhROUp6STBKeUIyYVdWM1ltOTRQU2N3SURBZ01qUWdNalFuUGp4emRIbHNaVDRqWW1jZ2UyWnBiR3c2SUNNd01EQjlMbU14SUh0bWFXeHNPaUFqUmtZd01EQXdmUzVqTWlCN1ptbHNiRG9nSTBaR1FqTXdNSDB1WXpNZ2UyWnBiR3c2SUNORVJFWkdNREI5TG1NMElIdG1hV3hzT2lBak1EQkdSalZGZlM1ak5TQjdabWxzYkRvZ0l6QXdPVEZHUm4wdVl6WWdlMlpwYkd3NklDTTBPREF3UmtaOUxtTTNJSHRtYVd4c09pQWpSa1l3TUVRNWZUd3ZjM1I1YkdVK1BISmxZM1FnYVdROUoySm5KeUI0UFNjd0p5QjVQU2N3SnlCM2FXUjBhRDBuTWpRbklHaGxhV2RvZEQwbk1qUW5MejQ4Y21WamRDQmpiR0Z6Y3owbll6RW5JSGc5SnpFeEp5QjVQU2N4TVNjZ2QybGtkR2c5SnpJbklHaGxhV2RvZEQwbk1pY3ZQand2YzNablBnPT0ifQ==",
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
        { trait_type: "Dots", display_type: "number", value: "49" },
        {
          trait_type: "DNA",
          value:
            "f1c1111111f2c2222222f3c3333333f4c4444444f5c5555555f6c6666666f7c7777777",
        },
      ],
      image:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZlcnNpb249JzEuMScgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Ym94PScwIDAgMjQgMjQnPjxzdHlsZT4jYmcge2ZpbGw6ICMwMDB9LmMxIHtmaWxsOiAjRkYwMDAwfS5jMiB7ZmlsbDogI0ZGQjMwMH0uYzMge2ZpbGw6ICNEREZGMDB9LmM0IHtmaWxsOiAjMDBGRjVFfS5jNSB7ZmlsbDogIzAwOTFGRn0uYzYge2ZpbGw6ICM0ODAwRkZ9LmM3IHtmaWxsOiAjRkYwMEQ5fTwvc3R5bGU+PHJlY3QgaWQ9J2JnJyB4PScwJyB5PScwJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnLz48cmVjdCBjbGFzcz0nYzEnIHg9JzInIHk9JzInIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzEnIHg9JzInIHk9JzUnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzEnIHg9JzInIHk9JzgnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzEnIHg9JzInIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2MxJyB4PScyJyB5PScxNCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjMScgeD0nMicgeT0nMTcnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzEnIHg9JzInIHk9JzIwJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2MyJyB4PSc1JyB5PScyJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2MyJyB4PSc1JyB5PSc1JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2MyJyB4PSc1JyB5PSc4JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2MyJyB4PSc1JyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjMicgeD0nNScgeT0nMTQnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzInIHg9JzUnIHk9JzE3JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2MyJyB4PSc1JyB5PScyMCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjMycgeD0nOCcgeT0nMicgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjMycgeD0nOCcgeT0nNScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjMycgeD0nOCcgeT0nOCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjMycgeD0nOCcgeT0nMTEnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzMnIHg9JzgnIHk9JzE0JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2MzJyB4PSc4JyB5PScxNycgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjMycgeD0nOCcgeT0nMjAnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzQnIHg9JzExJyB5PScyJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M0JyB4PScxMScgeT0nNScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjNCcgeD0nMTEnIHk9JzgnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzQnIHg9JzExJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjNCcgeD0nMTEnIHk9JzE0JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M0JyB4PScxMScgeT0nMTcnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzQnIHg9JzExJyB5PScyMCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjNScgeD0nMTQnIHk9JzInIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzUnIHg9JzE0JyB5PSc1JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M1JyB4PScxNCcgeT0nOCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjNScgeD0nMTQnIHk9JzExJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M1JyB4PScxNCcgeT0nMTQnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzUnIHg9JzE0JyB5PScxNycgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjNScgeD0nMTQnIHk9JzIwJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M2JyB4PScxNycgeT0nMicgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjNicgeD0nMTcnIHk9JzUnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzYnIHg9JzE3JyB5PSc4JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M2JyB4PScxNycgeT0nMTEnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzYnIHg9JzE3JyB5PScxNCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjNicgeD0nMTcnIHk9JzE3JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M2JyB4PScxNycgeT0nMjAnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzcnIHg9JzIwJyB5PScyJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M3JyB4PScyMCcgeT0nNScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjNycgeD0nMjAnIHk9JzgnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzcnIHg9JzIwJyB5PScxMScgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0IGNsYXNzPSdjNycgeD0nMjAnIHk9JzE0JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgY2xhc3M9J2M3JyB4PScyMCcgeT0nMTcnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCBjbGFzcz0nYzcnIHg9JzIwJyB5PScyMCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjwvc3ZnPg==",
    }),
  },
  time: {
    auctionDuration: 24 * 60 * 60,
    stackDuration: 2 * 60 * 60,
  },
  seed: {
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
      "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='24' height='24' viewbox='0 0 24 24'><style>#bg {fill: #000}.c1 {fill: #FF0000}.c2 {fill: #FFB300}.c3 {fill: #DDFF00}.c4 {fill: #00FF5E}.c5 {fill: #0091FF}.c6 {fill: #4800FF}.c7 {fill: #FF00D9}</style><rect id='bg' x='0' y='0' width='24' height='24'/><rect class='c1' x='2' y='11' width='2' height='2'/><rect class='c2' x='5' y='8' width='2' height='2'/><rect class='c2' x='5' y='11' width='2' height='2'/><rect class='c2' x='5' y='14' width='2' height='2'/><rect class='c3' x='8' y='5' width='2' height='2'/><rect class='c3' x='8' y='8' width='2' height='2'/><rect class='c3' x='8' y='11' width='2' height='2'/><rect class='c3' x='8' y='14' width='2' height='2'/><rect class='c3' x='8' y='17' width='2' height='2'/><rect class='c4' x='11' y='2' width='2' height='2'/><rect class='c4' x='11' y='5' width='2' height='2'/><rect class='c4' x='11' y='8' width='2' height='2'/><rect class='c4' x='11' y='11' width='2' height='2'/><rect class='c4' x='11' y='14' width='2' height='2'/><rect class='c4' x='11' y='17' width='2' height='2'/><rect class='c4' x='11' y='20' width='2' height='2'/><rect class='c5' x='14' y='5' width='2' height='2'/><rect class='c5' x='14' y='8' width='2' height='2'/><rect class='c5' x='14' y='11' width='2' height='2'/><rect class='c5' x='14' y='14' width='2' height='2'/><rect class='c5' x='14' y='17' width='2' height='2'/><rect class='c6' x='17' y='3' width='2' height='2'/><rect class='c6' x='17' y='6' width='2' height='2'/><rect class='c6' x='17' y='9' width='2' height='2'/><rect class='c6' x='17' y='12' width='2' height='2'/><rect class='c6' x='17' y='15' width='2' height='2'/><rect class='c6' x='17' y='18' width='2' height='2'/></svg>",
  },
};
