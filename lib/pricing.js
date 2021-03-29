export const getAudiobookPrice = geo => {
  let price = {
    value: '$14',
    cents: '.95'
  };

  if (!geo) return price;

  if (geo.country === 'BR') {
    price = { value: 'R$49', cents: '.99' };
  }

  return price;
}

export const getDigitalBookPrice = geo => {
  let price = {
    value: '$9',
    cents: '.99',
    baseUrl: 'https://www.amazon.com/dp/',
  };

  if (!geo) return price;

  if (geo.country === 'BR') {
    price = { value: 'R$24', cents: '.99', baseUrl: 'https://www.amazon.com.br/dp/', };
  }
  else if (geo.country === 'IN') {
    price = { value: '₹449', cents: null, baseUrl: 'https://www.amazon.in/dp/', };
  }
  else if (geo.country === 'GB') {
    price = { value: '£7', cents: '.95', baseUrl: 'https://www.amazon.co.uk/dp/', };
  }
  else if (geo.country === 'DE') {
    price = { value: '€8', cents: '.87', baseUrl: 'https://www.amazon.de/dp/', };
  }
  else if (geo.country === 'FR') {
    price = { value: '€8', cents: '.87', baseUrl: 'https://www.amazon.fr/dp/', };
  }
  else if (geo.country === 'ES') {
    price = { value: '€8', cents: '.87', baseUrl: 'https://www.amazon.es/dp/', };
  }
  else if (geo.country === 'IT') {
    price = { value: '€8', cents: '.87', baseUrl: 'https://www.amazon.it/dp/', };
  }
  else if (geo.country === 'NL') {
    price = { value: '€8', cents: '.87', baseUrl: 'https://www.amazon.nl/dp/', };
  }
  else if (geo.country === 'JP') {
    price = { value: '¥1072', cents: null, baseUrl: 'https://www.amazon.co.jp/dp/', };
  }
  else if (geo.country === 'MX') {
    price = { value: '$149', cents: '.99', baseUrl: 'https://www.amazon.com.mx/dp/', };
  }
  else if (geo.country === 'AU') {
    price = { value: '$11', cents: '.99', baseUrl: 'https://www.amazon.com.au/dp/', };
  }

  return price;
}

export const getPhysicalBookPrice = geo => {
  let price = {
    value: '$19',
    cents: '.99',
    baseUrl: 'https://www.amazon.com/dp/',
  };

  if (!geo) return price;

  if (geo.country === 'BR') {
    price = { value: 'R$108', cents: '.78', baseUrl: 'https://www.amazon.com.br/dp/', };
  }
  else if (geo.country === 'IN') {
    price = { value: '₹1567', cents: null, baseUrl: 'https://www.amazon.in/dp/', };
  }
  else if (geo.country === 'GB') {
    price = { value: '£14', cents: '.99', baseUrl: 'https://www.amazon.co.uk/dp/', };
  }
  else if (geo.country === 'DE') {
    price = { value: '€19', cents: '.35', baseUrl: 'https://www.amazon.de/dp/', };
  }
  else if (geo.country === 'FR') {
    price = { value: '€30', cents: '.53', baseUrl: 'https://www.amazon.fr/dp/', };
  }
  else if (geo.country === 'ES') {
    price = { value: '€23', cents: '.40', baseUrl: 'https://www.amazon.es/dp/', };
  }
  else if (geo.country === 'IT') {
    price = { value: '€17', cents: '.53', baseUrl: 'https://www.amazon.it/dp/', };
  }
  else if (geo.country === 'NL') {
    price = { value: '€23', cents: '.40', baseUrl: 'https://www.amazon.nl/dp/', };
  }
  else if (geo.country === 'JP') {
    price = { value: '¥2343', cents: null, baseUrl: 'https://www.amazon.co.jp/dp/', };
  }
  else if (geo.country === 'MX') {
    price = { value: '$626', cents: '.55', baseUrl: 'https://www.amazon.com.mx/dp/', };
  }
  else if (geo.country === 'AU') {
    price = { value: '$26', cents: '.85', baseUrl: 'https://www.amazon.com.au/dp/', };
  }

  return price;
}