import inquirer from 'inquirer';

function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

async function main() {
  const { n } = await inquirer.prompt({
    type: 'number',
    name: 'n',
    message: 'Please enter the value to find the nth Fibonacci number:',
    validate: (input: any) => {
      const num = Number.parseInt(input);
      return Number.isInteger(num) && num >= 0
        ? true
        : 'Please enter a positive integer.';
    },
  });

  const result = fibonacci(n);
  console.log(`The ${n}th Fibonacci number is: ${result}`);
}

main();
