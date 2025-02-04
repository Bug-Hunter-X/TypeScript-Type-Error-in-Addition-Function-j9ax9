function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error('Error: Both inputs must be numbers.');
    return 0; // Or handle the error as needed 
  }
}

const result1 = addSafe(5, 10); // Correct: 15
const result2 = addSafe(5, '10'); // Error Handling
const result3 = addSafe(5, 10 as number); //Type Assertion