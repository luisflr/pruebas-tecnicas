function reverse(x: number): number {
  const MAX = 2147483647; // 2^31 - 1
  const MIN = -2147483648; // -2^31
  if (x > MAX || x < MIN) {
    return 0;
  }
  let reverseNum = 0;
  let absNumber = Math.abs(x);
  while (absNumber != 0) {
    reverseNum = reverseNum * 10 + (absNumber % 10);
    absNumber = Math.floor(absNumber / 10);
  }
  if (reverseNum > MAX) return 0;
  return x < 0 ? -reverseNum : reverseNum;
}
