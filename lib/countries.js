function hasTranslation(country) {
  let path;

  if (!country) return;

  if (country === 'BR') {
    path = 'br';
  }

  if (country === 'AR' ||
      country === 'BO' ||
      country === 'CL' ||
      country === 'CO' ||
      country === 'CR' ||
      country === 'CU' ||
      country === 'DO' ||
      country === 'EC' ||
      country === 'ES' ||
      country === 'GT' ||
      country === 'HN' ||
      country === 'MX' ||
      country === 'NI' ||
      country === 'PA' ||
      country === 'PE' ||
      country === 'PY' ||
      country === 'SV' ||
      country === 'UY' ||
      country === 'VE') {
    path = 'es'
  }

  return path;
}

export default hasTranslation;