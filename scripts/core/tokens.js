// price feeds https://docs.chain.link/docs/binance-smart-chain-addresses/
const addressZero = '0x0000000000000000000000000000000000000000'

module.exports = {
  localhost: {
    btc: {
      name: "btc",
      address: addressZero,
      decimals: 8,
      priceFeed: addressZero,
      priceDecimals: 8,
      fastPricePrecision: 1000,
      maxCumulativeDeltaDiff: 0.1 * 10 * 1000 * 1000, // 10%
      stable: false,
      tokenWeight: 15000,
      minProfitBps: 0,
      maxUsdgAmount: 85 * 1000 * 1000,
      bufferAmount: 2500,
      isStable: false,
      isShortable: true,
      maxGlobalLongSize: 30 * 1000 * 1000,
      maxGlobalShortSize: 15 * 1000 * 1000,
      openInterestLimitLong: 80 * 1000 * 1000,
      openInterestLimitShort: 50 * 1000 * 1000,
      maxOpenInterestLong: 75 * 1000 * 1000,
      maxOpenInterestShort: 50 * 1000 * 1000,
      openInterestIncrementLong: 100 * 1000,
      openInterestIncrementShort: 50 * 1000,
      maxLiquidityThresholdLong: 15 * 1000 * 1000,
      maxLiquidityThresholdShort: 8 * 1000 * 1000,
      minLiquidityThresholdLong: 12 * 1000 * 1000,
      minLiquidityThresholdShort: 5 * 1000 * 1000,
    },
    eth: {
      name: "eth",
      address: addressZero,
      decimals: 18,
      priceFeed: addressZero,
      priceDecimals: 8,
      fastPricePrecision: 1000,
      maxCumulativeDeltaDiff: 0.1 * 10 * 1000 * 1000, // 10%
      stable: false,
      tokenWeight: 40000,
      minProfitBps: 0,
      maxUsdgAmount: 120 * 1000 * 1000,
      bufferAmount: 50000,
      isStable: false,
      isShortable: true,
      maxGlobalLongSize: 35 * 1000 * 1000,
      maxGlobalShortSize: 20 * 1000 * 1000,
      openInterestLimitLong: 110 * 1000 * 1000,
      openInterestLimitShort: 70 * 1000 * 1000,
      maxOpenInterestLong: 95 * 1000 * 1000,
      maxOpenInterestShort: 70 * 1000 * 1000,
      openInterestIncrementLong: 100 * 1000,
      openInterestIncrementShort: 50 * 1000,
      maxLiquidityThresholdLong: 15 * 1000 * 1000,
      maxLiquidityThresholdShort: 8 * 1000 * 1000,
      minLiquidityThresholdLong: 12 * 1000 * 1000,
      minLiquidityThresholdShort: 5 * 1000 * 1000,
    },
  },
  core: {
    weth: {
      name: "weth",
      address: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
      decimals: 18,
      priceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
      priceDecimals: 8,
      fastPricePrecision: 1000,
      maxCumulativeDeltaDiff: 0.1 * 10 * 1000 * 1000, // 10%
      stable: false,
      tokenWeight: 30000,
      minProfitBps: 0,
      maxUsdgAmount: 120 * 1000 * 1000,
      bufferAmount: 50000,
      isStable: false,
      isShortable: true,
      maxGlobalLongSize: 35 * 1000 * 1000,
      maxGlobalShortSize: 20 * 1000 * 1000,
      openInterestLimitLong: 110 * 1000 * 1000,
      openInterestLimitShort: 70 * 1000 * 1000,
      maxOpenInterestLong: 95 * 1000 * 1000,
      maxOpenInterestShort: 70 * 1000 * 1000,
      openInterestIncrementLong: 100 * 1000,
      openInterestIncrementShort: 50 * 1000,
      maxLiquidityThresholdLong: 15 * 1000 * 1000,
      maxLiquidityThresholdShort: 8 * 1000 * 1000,
      minLiquidityThresholdLong: 12 * 1000 * 1000,
      minLiquidityThresholdShort: 5 * 1000 * 1000,
    },
    wbtc: {
      name: "wbtc",
      address: "0xC04B0d3107736C32e19F1c62b2aF67BE61d63a05",
      decimals: 18,
      priceFeed: "0xA39434A63A52E749F02807ae27335515BA4b07F7",
      priceDecimals: 8,
      fastPricePrecision: 1000,
      maxCumulativeDeltaDiff: 0.1 * 10 * 1000 * 1000, // 10%
      stable: true,
      tokenWeight: 25000,
      minProfitBps: 0,
      maxUsdgAmount: 120 * 1000 * 1000,
      bufferAmount: 50000,
      isStable: true,
      isShortable: true,
      maxGlobalLongSize: 35 * 1000 * 1000,
      maxGlobalShortSize: 20 * 1000 * 1000,
      openInterestLimitLong: 110 * 1000 * 1000,
      openInterestLimitShort: 70 * 1000 * 1000,
      maxOpenInterestLong: 95 * 1000 * 1000,
      maxOpenInterestShort: 70 * 1000 * 1000,
      openInterestIncrementLong: 100 * 1000,
      openInterestIncrementShort: 50 * 1000,
      maxLiquidityThresholdLong: 15 * 1000 * 1000,
      maxLiquidityThresholdShort: 8 * 1000 * 1000,
      minLiquidityThresholdLong: 12 * 1000 * 1000,
      minLiquidityThresholdShort: 5 * 1000 * 1000,
    },
    uni: {
      name: "uni",
      address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
      decimals: 18,
      priceFeed: "0xAb5c49580294Aff77670F839ea425f5b78ab3Ae7",
      priceDecimals: 8,
      fastPricePrecision: 1000,
      maxCumulativeDeltaDiff: 0.1 * 10 * 1000 * 1000, // 10%
      stable: true,
      tokenWeight: 1000,
      minProfitBps: 0,
      maxUsdgAmount: 120 * 1000 * 1000,
      bufferAmount: 50000,
      isStable: true,
      isShortable: true,
      maxGlobalLongSize: 35 * 1000 * 1000,
      maxGlobalShortSize: 20 * 1000 * 1000,
      openInterestLimitLong: 110 * 1000 * 1000,
      openInterestLimitShort: 70 * 1000 * 1000,
      maxOpenInterestLong: 95 * 1000 * 1000,
      maxOpenInterestShort: 70 * 1000 * 1000,
      openInterestIncrementLong: 100 * 1000,
      openInterestIncrementShort: 50 * 1000,
      maxLiquidityThresholdLong: 15 * 1000 * 1000,
      maxLiquidityThresholdShort: 8 * 1000 * 1000,
      minLiquidityThresholdLong: 12 * 1000 * 1000,
      minLiquidityThresholdShort: 5 * 1000 * 1000,
    },
    link: {
      name: "link",
      address: "0x63bfb2118771bd0da7A6936667A7BB705A06c1bA", // TODO
      decimals: 18,
      priceFeed: "0x48731cF7e84dc94C5f84577882c14Be11a5B7456",
      priceDecimals: 8,
      stable: false,
      tokenWeight: 1000,
      minProfitBps: 0,
      maxUsdgAmount: 0, // 20 * 1000 * 1000,
      bufferAmount: 1 * 1000 * 1000,
      isStable: false,
      isShortable: false,
      fastPricePrecision: 1000,
      maxCumulativeDeltaDiff: 0.1 * 10 * 1000 * 1000, // 10%
      maxGlobalLongSize: 30 * 1000 * 1000,
      maxGlobalShortSize: 15 * 1000 * 1000,
      openInterestLimitLong: 80 * 1000 * 1000,
      openInterestLimitShort: 50 * 1000 * 1000,
      maxOpenInterestLong: 75 * 1000 * 1000,
      maxOpenInterestShort: 50 * 1000 * 1000,
      openInterestIncrementLong: 100 * 1000,
      openInterestIncrementShort: 50 * 1000,
      maxLiquidityThresholdLong: 15 * 1000 * 1000,
      maxLiquidityThresholdShort: 8 * 1000 * 1000,
      minLiquidityThresholdLong: 12 * 1000 * 1000,
      minLiquidityThresholdShort: 5 * 1000 * 1000,
    },
    usdt: {
      name: "usdt",
      address: "0x509Ee0d083DdF8AC028f2a56731412edD63223B9", // TODO
      decimals: 6,
      priceFeed: "0xAb5c49580294Aff77670F839ea425f5b78ab3Ae7",
      priceDecimals: 8,
      stable: false,
      tokenWeight: 2000,
      minProfitBps: 0,
      maxUsdgAmount: 0, // 20 * 1000 * 1000,
      bufferAmount: 1 * 1000 * 1000,
      isStable: false,
      isShortable: false,
      fastPricePrecision: 1000,
      maxCumulativeDeltaDiff: 0.1 * 10 * 1000 * 1000, // 10%
      maxGlobalLongSize: 30 * 1000 * 1000,
      maxGlobalShortSize: 15 * 1000 * 1000,
      openInterestLimitLong: 80 * 1000 * 1000,
      openInterestLimitShort: 50 * 1000 * 1000,
      maxOpenInterestLong: 75 * 1000 * 1000,
      maxOpenInterestShort: 50 * 1000 * 1000,
      openInterestIncrementLong: 100 * 1000,
      openInterestIncrementShort: 50 * 1000,
      maxLiquidityThresholdLong: 15 * 1000 * 1000,
      maxLiquidityThresholdShort: 8 * 1000 * 1000,
      minLiquidityThresholdLong: 12 * 1000 * 1000,
      minLiquidityThresholdShort: 5 * 1000 * 1000,
    },
    usdc: {
      name: "usdc",
      address: "0x2f3A40A3db8a7e3D09B0adfEfbCe4f6F81927557", // TODO
      decimals: 6,
      priceFeed: "0xAb5c49580294Aff77670F839ea425f5b78ab3Ae7",
      priceDecimals: 8,
      stable: false,
      tokenWeight: 34000,
      minProfitBps: 0,
      maxUsdgAmount: 0, // 20 * 1000 * 1000,
      bufferAmount: 1 * 1000 * 1000,
      isStable: false,
      isShortable: false,
      fastPricePrecision: 1000,
      maxCumulativeDeltaDiff: 0.1 * 10 * 1000 * 1000, // 10%
      maxGlobalLongSize: 30 * 1000 * 1000,
      maxGlobalShortSize: 15 * 1000 * 1000,
      openInterestLimitLong: 80 * 1000 * 1000,
      openInterestLimitShort: 50 * 1000 * 1000,
      maxOpenInterestLong: 75 * 1000 * 1000,
      maxOpenInterestShort: 50 * 1000 * 1000,
      openInterestIncrementLong: 100 * 1000,
      openInterestIncrementShort: 50 * 1000,
      maxLiquidityThresholdLong: 15 * 1000 * 1000,
      maxLiquidityThresholdShort: 8 * 1000 * 1000,
      minLiquidityThresholdLong: 12 * 1000 * 1000,
      minLiquidityThresholdShort: 5 * 1000 * 1000,
    },
    dai: {
      name: "dai",
      address: "0x73967c6a0904aA032C103b4104747E88c566B1A2", // TODO
      decimals: 18,
      priceFeed: "0x0d79df66BE487753B02D015Fb622DED7f0E9798d",
      priceDecimals: 8,
      stable: false,
      tokenWeight: 5000,
      minProfitBps: 0,
      maxUsdgAmount: 0, // 20 * 1000 * 1000,
      bufferAmount: 1 * 1000 * 1000,
      isStable: false,
      isShortable: false,
      fastPricePrecision: 1000,
      maxCumulativeDeltaDiff: 0.1 * 10 * 1000 * 1000, // 10%
      maxGlobalLongSize: 30 * 1000 * 1000,
      maxGlobalShortSize: 15 * 1000 * 1000,
      openInterestLimitLong: 80 * 1000 * 1000,
      openInterestLimitShort: 50 * 1000 * 1000,
      maxOpenInterestLong: 75 * 1000 * 1000,
      maxOpenInterestShort: 50 * 1000 * 1000,
      openInterestIncrementLong: 100 * 1000,
      openInterestIncrementShort: 50 * 1000,
      maxLiquidityThresholdLong: 15 * 1000 * 1000,
      maxLiquidityThresholdShort: 8 * 1000 * 1000,
      minLiquidityThresholdLong: 12 * 1000 * 1000,
      minLiquidityThresholdShort: 5 * 1000 * 1000,
    },
    frax: {
      name: "frax",
      address: "0x92d43093959C7DDa89896418bCE9DE0B87879646", // TODO
      decimals: 18,
      priceFeed: "0x7A65Cf6C2ACE993f09231EC1Ea7363fb29C13f2F",
      priceDecimals: 8,
      stable: false,
      tokenWeight: 2000,
      minProfitBps: 0,
      maxUsdgAmount: 0, // 20 * 1000 * 1000,
      bufferAmount: 1 * 1000 * 1000,
      isStable: false,
      isShortable: false,
      fastPricePrecision: 1000,
      maxCumulativeDeltaDiff: 0.1 * 10 * 1000 * 1000, // 10%
      maxGlobalLongSize: 30 * 1000 * 1000,
      maxGlobalShortSize: 15 * 1000 * 1000,
      openInterestLimitLong: 80 * 1000 * 1000,
      openInterestLimitShort: 50 * 1000 * 1000,
      maxOpenInterestLong: 75 * 1000 * 1000,
      maxOpenInterestShort: 50 * 1000 * 1000,
      openInterestIncrementLong: 100 * 1000,
      openInterestIncrementShort: 50 * 1000,
      maxLiquidityThresholdLong: 15 * 1000 * 1000,
      maxLiquidityThresholdShort: 8 * 1000 * 1000,
      minLiquidityThresholdLong: 12 * 1000 * 1000,
      minLiquidityThresholdShort: 5 * 1000 * 1000,
    },
  }
};
