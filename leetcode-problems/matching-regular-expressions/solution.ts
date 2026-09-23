function isMatch(s: string, p: string): boolean {
  const memo = new Map<string, boolean>();

  function dp(i: number, j: number): boolean {
    const key = `${i},${j}`;
    if (memo.has(key)) return memo.get(key)!;

    // Caso base: si el patrón llega al final, s también debe haber terminado
    if (j === p.length) {
      return i === s.length;
    }

    // Verificamos si los caracteres actuales coinciden
    const firstMatch = i < s.length && (p[j] === s[i] || p[j] === ".");

    let result: boolean;

    // Si el siguiente carácter en el patrón es '*'
    if (j + 1 < p.length && p[j + 1] === "*") {
      result =
        dp(i, j + 2) || // Opción 1: Tratar '*' como 0 ocurrencias
        (firstMatch && dp(i + 1, j)); // Opción 2: Consumir carácter si coincide
    } else {
      result = firstMatch && dp(i + 1, j + 1);
    }

    memo.set(key, result);
    return result;
  }

  return dp(0, 0);
}
