export default function checkApiStatus(apiStatus) {
  return {
    _200: apiStatus === 200,
    _401: apiStatus === 401,
    _403: apiStatus === 403,
  };
}
