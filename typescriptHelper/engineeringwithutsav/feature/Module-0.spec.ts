import { test, expect } from "@playwright/test";

test("Remove duplicated from a sorted array", async ({ page }) => {
  console.log("Remove duplicated from a sorted array");

  let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; // Input array
  let expectedNums = [0, 1, 2, 3, 4]; // The expected answer with correct length

  let k = removeDuplicates(nums); // Calls your implementation

  expect(k).toBe(expectedNums.length); // Asserts the result

  for (let i = 0; i < k; i++) {
    expect(nums[i]).toBe(expectedNums[i]); // Asserts the result
  }
});

function removeDuplicates(nums: number[]): number {
  let uniqueArray = [...new Set(nums)];
  //pop operation counter
  let popCounter = nums.length;
  for (let i = 0; i <= popCounter; i++) {
    nums.pop();
  }
  uniqueArray.forEach((element, index) => {
    nums.push(element); // Adds the last element of the array
  });
  return nums.length;
}
