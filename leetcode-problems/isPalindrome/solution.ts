function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let tempnum = x;
  let newnum = 0;
  while (tempnum != 0) {
    const digit = tempnum % 10;
    newnum = newnum * 10 + digit;
    tempnum = Math.floor(tempnum / 10);
  }

  return newnum == x;
}
