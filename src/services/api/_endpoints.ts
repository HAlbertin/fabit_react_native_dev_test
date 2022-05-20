const ACCESS_DOMAIN = 'access/';
const ACCESS = {
  MONITOR_SESSION: `${ACCESS_DOMAIN}magic/{0}`, // session_key
  LOGIN: `${ACCESS_DOMAIN}login`,
  CREATE: `${ACCESS_DOMAIN}create`,
};

const ENDPOINTS = {
  ACCESS,
};

export default ENDPOINTS;
