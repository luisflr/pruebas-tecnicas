function myAtoi(s: string): number {
  s = s.trim();
  const MAX = 2147483647;
  const MIN = -2147483648;
  let resultNumber = 0;
  let isPositive = true;
  for (let i = 0; i < s.length; i++) {
    if (i == 0 && s[i] == "-") {
      isPositive = false;
      continue;
    } else if (i == 0 && s[i] == "+") continue;
    else if ("0123456789".includes(s[i]))
      resultNumber = resultNumber * 10 + Number(s[i]);
    else break;
  }
  resultNumber = isPositive ? resultNumber : -resultNumber;
  if (resultNumber < MIN) return MIN;
  else if (resultNumber > MAX) return MAX;
  return resultNumber;
}
