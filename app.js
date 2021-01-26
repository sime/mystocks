const si = require('stock-info');
const stocks = ['DHER.DE', 'BTC-EUR', 'LTC-EUR', 'ETH-EUR', 'DOGE-EUR']
si.getStocksInfo(stocks).then(prices => {
  prices.forEach(price => {
    let marketPrice = parseFloat(price.regularMarketPrice.toPrecision(4));
    let marketChange = parseFloat(price.regularMarketChangePercent.toPrecision(2));
    marketChange = marketChange > 0 ? '+' + marketChange : marketChange;
    console.log(price.symbol, marketPrice, marketChange + '%');
  });
});

