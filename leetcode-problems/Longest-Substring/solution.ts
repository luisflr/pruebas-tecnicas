function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  let left = 0;
  let maxSize = 0;
  const tempMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (tempMap.has(s[i])) {
      left = Math.max(left, tempMap.get(s[i]) + 1);
    }
    tempMap.set(s[i], i);
    maxSize = Math.max(maxSize, i - left + 1);
  }

  return maxSize;
}
