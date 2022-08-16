const ApiCall = (url) => {
  return fetch(url).then((res) => res.json());
};
export default ApiCall;
