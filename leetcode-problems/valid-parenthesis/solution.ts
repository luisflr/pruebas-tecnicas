function checkValidString(s: string): boolean {
  let startParenthesis = 0;
  let endParenthesis = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      startParenthesis++;
      endParenthesis++;
    } else if (s[i] == ")") {
      startParenthesis--;
      endParenthesis--;
    } else {
      startParenthesis--;
      endParenthesis++;
    }

    if (endParenthesis < 0) return false;
    if (startParenthesis < 0) startParenthesis = 0;
  }

  return startParenthesis == 0;
}
