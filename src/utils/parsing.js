export const trimAddress = (address) => {
  return address.substring(0, 4) + "..." + address.slice(-4);
};
