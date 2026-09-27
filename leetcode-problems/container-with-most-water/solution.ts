function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    // Calculamos el alto del contenedor (limitado por la barra más baja)
    const currentHeight = Math.min(height[left], height[right]);
    const currentWidth = right - left;
    const currentArea = currentHeight * currentWidth;

    // Actualizamos el área máxima encontrada
    maxWater = Math.max(maxWater, currentArea);

    // Movemos el puntero con la altura menor
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}
