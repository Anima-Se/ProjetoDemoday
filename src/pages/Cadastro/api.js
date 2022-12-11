const fakeApi = (cb, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(cb());
    }, delay);
  });

export default fakeApi;
