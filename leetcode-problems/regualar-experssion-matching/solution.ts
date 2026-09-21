function isMatch(s: string, p: string): boolean {
  const m = s.length;
  const n = p.length;

  // Matriz DP de (m + 1) x (n + 1) inicializada en false
  const dp: boolean[][] = Array.from({ length: m + 1 }, () =>
    new Array(n + 1).fill(false)
  );

  // Caso base: string vacío coincide con patrón vacío
  dp[0][0] = true;

  // Caso base: patrones con '*' que coinciden con string vacío (ej. "a*", "a*b*")
  for (let j = 2; j <= n; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2];
    }
  }

  // Llenar la tabla DP
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const charPattern = p[j - 1];
      const charString = s[i - 1];

      if (charPattern === "." || charPattern === charString) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (charPattern === "*") {
        // 0 ocurrencias del elemento previo al '*'
        dp[i][j] = dp[i][j - 2];

        // 1 o más ocurrencias si el carácter previo coincide
        const prevPatternChar = p[j - 2];
        if (prevPatternChar === "." || prevPatternChar === charString) {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      }
    }
  }

  return dp[m][n];
}
