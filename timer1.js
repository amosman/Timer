
const beep = (arr) => {
  let numArr = [];
  for (const element of arr) {
    if (typeof element === 'number' && element > 0 ) {
    numArr.push(element);
      }
  }
  if (numArr.length === 0) {
    return;
  }
  const timer = numArr.sort(function(a, b) {
    return a-b
  }); 
  console.log(timer); 
  for (let seconds of timer) {
    setTimeout(() => {
      process.stdout.write('\x07');
    
    }, seconds * 1000)
  }
}

beep([9,10,15,3,5,-7,'HelloWorld'])