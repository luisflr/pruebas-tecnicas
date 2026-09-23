function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // Nos aseguramos de que nums1 sea el arreglo más corto para minimizar la búsqueda O(log(min(m, n)))
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;
  const halfLen = Math.floor((m + n + 1) / 2);

  let low = 0;
  let high = m;

  while (low <= high) {
    // Punto de corte i en nums1 y j en nums2
    const i = Math.floor((low + high) / 2);
    const j = halfLen - i;

    // Elementos frontera (manejando los bordes con Infinity / -Infinity)
    const maxLeftA = i === 0 ? -Infinity : nums1[i - 1];
    const minRightA = i === m ? Infinity : nums1[i];

    const maxLeftB = j === 0 ? -Infinity : nums2[j - 1];
    const minRightB = j === n ? Infinity : nums2[j];

    // Verificamos si la partición es correcta
    if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
      // Caso 1: Longitud total impar -> La mediana es el máximo de los lados izquierdos
      if ((m + n) % 2 === 1) {
        return Math.max(maxLeftA, maxLeftB);
      }
      // Caso 2: Longitud total par -> Promedio de los dos elementos centrales
      return (
        (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
      );
    }
    // Si maxLeftA > minRightB, nos pasamos hacia la derecha en nums1 -> Mover corte i a la izquierda
    else if (maxLeftA > minRightB) {
      high = i - 1;
    }
    // Si maxLeftB > minRightA, el corte i está muy a la izquierda -> Mover corte i a la derecha
    else {
      low = i + 1;
    }
  }

  throw new Error("Los arreglos de entrada no están ordenados correctamente.");
}
