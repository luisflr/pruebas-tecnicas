function longestPalindrome(s: string): string {
  if (!s || s.length == 0) return "";

  let start = 0,
    end = 0;

  function expandResultString(left: number, right: number) {
    while (left > -1 && right < s.length && s[left] == s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    let firstLen = expandResultString(i, i);
    let secondLen = expandResultString(i, i + 1);
    let len = Math.max(firstLen, secondLen);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}
