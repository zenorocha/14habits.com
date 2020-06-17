const requestIp = require('request-ip');
const geoip = require('geoip-lite');

export default (req, res) => {
  const clientIp = requestIp.getClientIp(req);
  const geo = geoip.lookup(clientIp);

  res.status(200).json({ geo });
};