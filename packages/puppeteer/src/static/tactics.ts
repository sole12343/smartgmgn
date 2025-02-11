export const violence = {
  "chain": "solana",
  // 交易地址
  "pair": '',
  "walletId": '',
  "type": "buy",
  // - 优先费 (SOL)，对Solana有效，空字符串表示使用自动优先费
  "priorityFee": "0.00006",
  // evn额外gas费
  "gasFeeDelta": 0,
  // env最大gas费
  "maxFeePerGas": 100,
  // 开启防夹模式
  "jitoEnabled": true,
  // 防夹模式最大贿赂
  "jitoTip": 0.00004,
  // !最大滑点
  "maxSlippage": 0.1,
  // 并发数量
  "concurrentNodes": 2,
  // 失败后的重启次数(1-10)
  "retries": 5,

  // !买入/卖出 金额 ETH/SOL/BNB/TRX(0.00-1.00)
  // 交易类型为sell时，填写卖出比例（0.00-1.00）
  "amountOrPercent":(+process.env.VIO_BUY_TIME),
  // Raydium开盘卖出比例（0.00-1.00），对Pump代币有效，0表示不自动卖
  "migrateSellPercent": 1,
  // 触发比例 (0-1)，当Dev卖出超过这个比例时卖出你的代币
  "minDevSellPercent": 0.5,
  // 当跟随Dev卖出任务触发时，你卖出的比例，为0表示不创建跟随Dev卖出任务
  "devSellPercent": 0,
  // !止盈比例，0.5表示上涨50%时卖出
  // "stopEarnPercent": '',
  // !止损比例（0.00-1.00），0.5表示下跌50%时卖出
  // "stopLossPercent": '',
  // !止盈分组，在快速买卖的type为“buy”时，和跟单的卖出设置中有效，最多支持设置6个，
  "stopEarnGroup": [
      {
        // 价格涨跌百分比 (0.5表示50%)，当在止盈分组里时，表示上涨多少卖出，当在止损分组里时，表示下跌多少卖出
          "pricePercent": 3,
          // 卖出比例 (0-1，0.5表示50%)
          "amountPercent": 0.2
      },
      {
          "pricePercent": 5,
          "amountPercent": 0.1875
      },
      {
          "pricePercent": 7,
          "amountPercent": 0.23
      },
      {
          "pricePercent": 10,
          "amountPercent": 0.5
      },
      {
          "pricePercent": 15,
          "amountPercent": 0.4
      },
      {
          "pricePercent": 25,
          "amountPercent": 0.667
      }
  ],

  // 止盈止损任务的过期时间，最大值为864000000 (毫秒) /10天
  "pnlOrderExpireDelta": 172800000, // 2天
  // "true"表示止盈止损任务创建后若有效期内未触发，则在任务结束时自动执行
  "pnlOrderExpireExecute": false,
  // “true”表示将使用自定义参数创建止盈止损任务，否则将使用买入的参数
  "pnlCustomConfigEnabled": true,
  // 自定义的止盈止损参数
  "pnlCustomConfig": {
      "priorityFee": "0.00006",
      "gasFeeDelta": 5,
      "maxFeePerGas": 100,
      "jitoEnabled": true,
      "jitoTip": 0.00004,
      "maxSlippage": 0.5,
      "concurrentNodes": 2,
      "retries": 5
  }
}

export const orderStopEarnBaseConfig = {
  "enabled": true,
  "tradeType": "sell",
  // 触发买入/卖出的价格（美元）
  "triggerPriceUsd": "",
  "triggerDirection": "up",
  // 卖出比例
  "currencyAmountUI": "",
  "priorityFee": "0.00006",
  "gasFeeDelta": 5,
  "maxFeePerGas": 100,
  "jitoEnabled": true,
  "jitoTip": 0.00004,
  // 24小时
  "expireDelta": 86400000,
  // 任务过期仍未触发时，会按过期时的实时价格买入或卖出代币
  "expireExecute": true,
  "maxSlippage": 0.5,
  "concurrentNodes": 2,
  "retries": 5
}