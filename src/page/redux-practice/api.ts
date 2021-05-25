const sleep = (timeout: number) =>
  new Promise(resolve => setTimeout(resolve, timeout));

export const login = async () => {
  await sleep(3000);
  return await 'token';
};

export const clearToken = () => {
  console.log('clear token');
};
