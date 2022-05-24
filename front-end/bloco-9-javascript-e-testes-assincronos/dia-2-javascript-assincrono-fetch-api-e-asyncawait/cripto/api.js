const fetchCoins = () => {
  fetch('https://api.coincap.io/v2/assets')
    .then(response => response.json())
    .then( coins => {
      const coinContainer = document.querySelector('#coins');

      coins.data.forEach((coin) => {
        const coinInfo = document.createElement('div');
        coinInfo.innerHTML = `${coin.name} (${coin.symbol}): ${parseInt(coin.priceUsd).toFixed(2)}`
        coinInfo.classList.add('coin');
        coinContainer.appendChild(coinInfo);
      })
    })
}

window.onload = () => fetchCoins();