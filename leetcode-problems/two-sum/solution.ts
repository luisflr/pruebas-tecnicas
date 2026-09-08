function twoSum(nums: number[], target: number): number[] {
  if (nums.length == 2) return [0, 1];
  const formattedNums = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (formattedNums.has(target - nums[i])) {
      return [formattedNums.get(target - nums[i]), i];
    }
    formattedNums.set(nums[i], i);
  }
  return [];
}
