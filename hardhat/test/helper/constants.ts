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
    "0": "data:application/json;base64,eyJpbWFnZSI6ICJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY25JSFpsY25OcGIyNDlKekV1TVNjZ2QybGtkR2c5SnpJMEp5Qm9aV2xuYUhROUp6STBKeUIyYVdWM1ltOTRQU2N3SURBZ01qUWdNalFuUGp4emRIbHNaVDRqWW1jZ2UyWnBiR3c2SUNNd01EQjlMbU14SUh0bWFXeHNPaUFqUmtZd01EQXdmUzVqTWlCN1ptbHNiRG9nSTBaR1FqTXdNSDB1WXpNZ2UyWnBiR3c2SUNORVJFWkdNREI5TG1NMElIdG1hV3hzT2lBak1EQkdSalZGZlM1ak5TQjdabWxzYkRvZ0l6QXdPVEZHUm4wdVl6WWdlMlpwYkd3NklDTTBPREF3UmtaOUxtTTNJSHRtYVd4c09pQWpSa1l3TUVRNWZUd3ZjM1I1YkdVK1BISmxZM1FnYVdROUoySm5KeUI0UFNjd0p5QjVQU2N3SnlCM2FXUjBhRDBuTWpRbklHaGxhV2RvZEQwbk1qUW5MejQ4Y21WamRDQmpiR0Z6Y3owbll6RW5JSGc5SnpJbklIazlKekV4SnlCM2FXUjBhRDBuTWljZ2FHVnBaMmgwUFNjeUp5OCtQQzl6ZG1jKyJ9",
    "1": "data:application/json;base64,eyJpbWFnZSI6ICJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY25JSFpsY25OcGIyNDlKekV1TVNjZ2QybGtkR2c5SnpJMEp5Qm9aV2xuYUhROUp6STBKeUIyYVdWM1ltOTRQU2N3SURBZ01qUWdNalFuUGp4emRIbHNaVDRqWW1jZ2UyWnBiR3c2SUNNd01EQjlMbU14SUh0bWFXeHNPaUFqUmtZd01EQXdmUzVqTWlCN1ptbHNiRG9nSTBaR1FqTXdNSDB1WXpNZ2UyWnBiR3c2SUNORVJFWkdNREI5TG1NMElIdG1hV3hzT2lBak1EQkdSalZGZlM1ak5TQjdabWxzYkRvZ0l6QXdPVEZHUm4wdVl6WWdlMlpwYkd3NklDTTBPREF3UmtaOUxtTTNJSHRtYVd4c09pQWpSa1l3TUVRNWZUd3ZjM1I1YkdVK1BISmxZM1FnYVdROUoySm5KeUI0UFNjd0p5QjVQU2N3SnlCM2FXUjBhRDBuTWpRbklHaGxhV2RvZEQwbk1qUW5MejQ4Y21WamRDQmpiR0Z6Y3owbll6SW5JSGc5SnpJbklIazlKekV4SnlCM2FXUjBhRDBuTWljZ2FHVnBaMmgwUFNjeUp5OCtQQzl6ZG1jKyJ9",
    "28": "data:application/json;base64,eyJpbWFnZSI6ICJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY25JSFpsY25OcGIyNDlKekV1TVNjZ2QybGtkR2c5SnpJMEp5Qm9aV2xuYUhROUp6STBKeUIyYVdWM1ltOTRQU2N3SURBZ01qUWdNalFuUGp4emRIbHNaVDRqWW1jZ2UyWnBiR3c2SUNNd01EQjlMbU14SUh0bWFXeHNPaUFqUmtZd01EQXdmUzVqTWlCN1ptbHNiRG9nSTBaR1FqTXdNSDB1WXpNZ2UyWnBiR3c2SUNORVJFWkdNREI5TG1NMElIdG1hV3hzT2lBak1EQkdSalZGZlM1ak5TQjdabWxzYkRvZ0l6QXdPVEZHUm4wdVl6WWdlMlpwYkd3NklDTTBPREF3UmtaOUxtTTNJSHRtYVd4c09pQWpSa1l3TUVRNWZUd3ZjM1I1YkdVK1BISmxZM1FnYVdROUoySm5KeUI0UFNjd0p5QjVQU2N3SnlCM2FXUjBhRDBuTWpRbklHaGxhV2RvZEQwbk1qUW5MejQ4Y21WamRDQmpiR0Z6Y3owbll6SW5JSGc5SnpVbklIazlKekV4SnlCM2FXUjBhRDBuTWljZ2FHVnBaMmgwUFNjeUp5OCtQQzl6ZG1jKyJ9",
    "195":
      "data:application/json;base64,eyJpbWFnZSI6ICJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY25JSFpsY25OcGIyNDlKekV1TVNjZ2QybGtkR2c5SnpJMEp5Qm9aV2xuYUhROUp6STBKeUIyYVdWM1ltOTRQU2N3SURBZ01qUWdNalFuUGp4emRIbHNaVDRqWW1jZ2UyWnBiR3c2SUNNd01EQjlMbU14SUh0bWFXeHNPaUFqUmtZd01EQXdmUzVqTWlCN1ptbHNiRG9nSTBaR1FqTXdNSDB1WXpNZ2UyWnBiR3c2SUNORVJFWkdNREI5TG1NMElIdG1hV3hzT2lBak1EQkdSalZGZlM1ak5TQjdabWxzYkRvZ0l6QXdPVEZHUm4wdVl6WWdlMlpwYkd3NklDTTBPREF3UmtaOUxtTTNJSHRtYVd4c09pQWpSa1l3TUVRNWZUd3ZjM1I1YkdVK1BISmxZM1FnYVdROUoySm5KeUI0UFNjd0p5QjVQU2N3SnlCM2FXUjBhRDBuTWpRbklHaGxhV2RvZEQwbk1qUW5MejQ4Y21WamRDQmpiR0Z6Y3owbll6WW5JSGc5SnpJd0p5QjVQU2N4TVNjZ2QybGtkR2c5SnpJbklHaGxhV2RvZEQwbk1pY3ZQand2YzNablBnPT0ifQ==",
    f4c1: "data:application/json;base64,eyJpbWFnZSI6ICJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY25JSFpsY25OcGIyNDlKekV1TVNjZ2QybGtkR2c5SnpJMEp5Qm9aV2xuYUhROUp6STBKeUIyYVdWM1ltOTRQU2N3SURBZ01qUWdNalFuUGp4emRIbHNaVDRqWW1jZ2UyWnBiR3c2SUNNd01EQjlMbU14SUh0bWFXeHNPaUFqUmtZd01EQXdmUzVqTWlCN1ptbHNiRG9nSTBaR1FqTXdNSDB1WXpNZ2UyWnBiR3c2SUNORVJFWkdNREI5TG1NMElIdG1hV3hzT2lBak1EQkdSalZGZlM1ak5TQjdabWxzYkRvZ0l6QXdPVEZHUm4wdVl6WWdlMlpwYkd3NklDTTBPREF3UmtaOUxtTTNJSHRtYVd4c09pQWpSa1l3TUVRNWZUd3ZjM1I1YkdVK1BISmxZM1FnYVdROUoySm5KeUI0UFNjd0p5QjVQU2N3SnlCM2FXUjBhRDBuTWpRbklHaGxhV2RvZEQwbk1qUW5MejQ4Y21WamRDQmpiR0Z6Y3owbll6RW5JSGc5SnpFeEp5QjVQU2N4TVNjZ2QybGtkR2c5SnpJbklHaGxhV2RvZEQwbk1pY3ZQand2YzNablBnPT0ifQ==",
  },
  time: {
    auctionDuration: 24 * 60 * 60,
    stackDuration: 7 * 24 * 60 * 60,
  },
  seed: {
    /** Field 4 Color 1 */
    f4c1: "0x00000000000000000000000000000000000000000000003635c9adc5dea00000",
    /** Field 4 Color 1, 1 */
    f4c11: "0x0000000000000000000000000000000000000000000002544faa778090e00000",
    /** Common rainbow with one row */
    commonRainbowOne:
      "0x00000000000000000000000000007e4619e287d61b51e28a0985e0ae051a8d4d",
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
