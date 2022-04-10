export function shortAddress(address: string) {
  const addressHead = address?.slice(0, 4);
  const addressTail = address?.slice(-4);

  return `${addressHead}...${addressTail}`;
}
