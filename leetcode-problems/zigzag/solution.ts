function convert(s: string, numRows: number): string {
  if (numRows === 1 || s.length <= numRows) {
    return s;
  }

  const rows = Array(numRows).fill("");
  let currentRow = 0;
  let goDown = false;

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    rows[currentRow] += currentChar;

    if (currentRow === 0 || currentRow === numRows - 1) {
      goDown = !goDown;
    }
    currentRow += goDown ? 1 : -1;
  }

  return rows.join("");
}
