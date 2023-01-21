import { test, expect } from "@playwright/test";

test("Remove duplicated from a sorted array", async ({ page }) => {
  let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; // Input array
  let expectedNums = [0, 1, 2, 3, 4]; // The expected answer with correct length
  let k = removeDuplicates(nums); // Calls your implementation
  expect(k).toBe(expectedNums.length); // Asserts the result
  for (let i = 0; i < k; i++) {
    expect(nums[i]).toBe(expectedNums[i]); // Asserts the result
  }
});

test("Pascal's Triangle", async ({ page }) => {
  //generate Pascal's Triangle for 6 rows
  let expected = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

  let result = generatePascalTraingle(5);
  expect(result).toEqual(expected);
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
function generatePascalTraingle(numRows: number): number[][] {
  if (numRows < 1 || numRows > 30) {
    return [];
  } else {
    let ar = [];

    while (ar.length < numRows) {
      let nextRowLength = ar.length + 1;
      let newRow = [];
      let j = 0;

      for (let i = 0; i < nextRowLength; i++) {
        newRow[i] = 1;
        if (i > 0 && i < nextRowLength - 1) {
          newRow[i] = ar[ar.length - 1][j] + ar[ar.length - 1][j + 1];
          j = j + 1;
        }
      }
      let copy = [...newRow];
      newRow.forEach(() => {
        newRow.pop();
      });

      ar.push(copy);
    }

    return ar;
  }
}
