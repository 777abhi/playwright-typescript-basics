
```typescript
import * as XLSX from 'xlsx';
import { writeFile } from 'fs';

// Function to generate a random value
const generateRandomValue = () => {
  return Math.random().toString(36).substring(2, 15);
};

// Function to read the Excel file and update sheets
const updateSheetsWithRandomValues = (filePath: string) => {
  // Read the workbook
  const workbook = XLSX.readFile(filePath);
  const masterSheetName = 'Master'; // Replace with your actual master sheet name
  const masterSheet = workbook.Sheets[masterSheetName];

  // Get sheet names and update status from the master sheet
  const sheetNamesToUpdate = XLSX.utils.sheet_to_json(masterSheet).map((row: any) => {
    if (row.Update === 'Yes') {
      return row.SheetName;
    }
  }).filter(Boolean);

  // Loop through each sheet name and update if marked 'Yes'
  sheetNamesToUpdate.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    const range = XLSX.utils.decode_range(sheet['!ref']!);
    
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const headerCell = XLSX.utils.encode_col(C) + '1'; // Assuming headers are in the first row
      const headerCellValue = sheet[headerCell].v;
      
      for (let R = range.s.r + 1; R <= range.e.r; ++R) {
        const cellRef = XLSX.utils.encode_cell({c: C, r: R});
        if (sheet[cellRef]) {
          sheet[cellRef].v = generateRandomValue(); // Replace with random value
        }
      }
    }
  });

  // Write the updated workbook
  writeFile(filePath, XLSX.write(workbook, {type: 'buffer', bookType: 'xlsx'}), (err) => {
    if (err) throw err;
    console.log('Excel file has been updated with random values.');
  });
};

// Usage
const filePath = 'path/to/your/excel/file.xlsx'; // Replace with the path to your Excel file
updateSheetsWithRandomValues(filePath);
```

This script will:
1. Read the master sheet to get the names of all sheets and whether they should be updated.
2. For each sheet marked 'Yes' for update, it will replace the values under each column header with an auto-generated random value.

Make sure to install the `xlsx` package using npm or yarn before running this script, and replace `'Master'` and `'path/to/your/excel/file.xlsx'` with your actual master sheet name and file path respectively.

**Note**: This code assumes that the headers are in the first row of each sheet and that the 'Update' column in the master sheet is labeled exactly as 'Update'. Adjust the code accordingly if your Excel file has a different structure.