export function fromDecimalToHex(number: number) {
  if (typeof number !== "number") throw "The input provided should be a number";

  return `0x${number.toString(16)}`;
}
