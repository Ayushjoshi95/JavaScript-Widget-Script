function loadTokenDetails(tokenName) {
  const apiUrl = `https://api.coingecko.com/api/v3/coins/${tokenName}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const tokenDetails = {
        name: data.name,
        marketCap: data.market_data.market_cap.usd,
        currentPrice: data.market_data.current_price.usd,
        tradingVolume: data.market_data.total_volume.usd,
        logoUrl: data.image.small,
      };
      renderTokenDetails(tokenDetails);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

function renderTokenDetails(tokenDetails) {
  const widgetContainer = document.getElementById("coinGeckoWidget");
  widgetContainer.innerHTML = `
    <div class="card">
      <img src="${tokenDetails.logoUrl}" alt="${tokenDetails.name}">
      <div class="main">
        <h2>${tokenDetails.name}</h2>
        <p>Current Price: $${tokenDetails.currentPrice}</p>
      </div>
    </div>
    <div class="details">
      <div class="cap">
        <p>MARKET CAP</p>
        <p>$${tokenDetails.marketCap.toLocaleString()}</p>
      </div>
      <div class="volume">
        <p>24 HOUR TRADING VOLUME </p>
        <p> $${tokenDetails.tradingVolume.toLocaleString()}</p>
      </div>   
    </div>
`;
}
