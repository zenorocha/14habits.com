function getPrice(geo) {
  let price = {
    price: '$9',
    cents: '.99',
    baseUrl: 'https://www.amazon.com/dp/',
  };

  if (!geo) return price;

  if (geo.country === 'BR') {
    price = { price: 'R$24', cents: '.99', baseUrl: 'https://www.amazon.com.br/dp/', };
  }
  else if (geo.country === 'IN') {
    price = { price: '₹449', cents: null, baseUrl: 'https://www.amazon.in/dp/', };
  }
  else if (geo.country === 'GB') {
    price = { price: '£7', cents: '.95', baseUrl: 'https://www.amazon.co.uk/dp/', };
  }
  else if (geo.country === 'DE') {
    price = { price: '€8', cents: '.87', baseUrl: 'https://www.amazon.de/dp/', };
  }
  else if (geo.country === 'FR') {
    price = { price: '€8', cents: '.87', baseUrl: 'https://www.amazon.fr/dp/', };
  }
  else if (geo.country === 'ES') {
    price = { price: '€8', cents: '.87', baseUrl: 'https://www.amazon.es/dp/', };
  }
  else if (geo.country === 'IT') {
    price = { price: '€8', cents: '.87', baseUrl: 'https://www.amazon.it/dp/', };
  }
  else if (geo.country === 'NL') {
    price = { price: '€8', cents: '.87', baseUrl: 'https://www.amazon.nl/dp/', };
  }
  else if (geo.country === 'JP') {
    price = { price: '¥1072', cents: null, baseUrl: 'https://www.amazon.co.jp/dp/', };
  }
  else if (geo.country === 'MX') {
    price = { price: '$149', cents: '.99', baseUrl: 'https://www.amazon.com.mx/dp/', };
  }
  else if (geo.country === 'AU') {
    price = { price: '$11', cents: '.99', baseUrl: 'https://www.amazon.com.au/dp/', };
  }

  return price;
}

export default getPrice;