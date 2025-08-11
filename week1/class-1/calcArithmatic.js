function sum(a, b){
  return a + b;
}

function sub(a, b){
  return a - b;
}


function calculateArithmetic(a, b, operation){
  const value = operation(a, b);
  return value;
}

const ans = calculateArithmetic(3, 4, sum);
console.log(ans);