let count = 1;

function counter(number) {
  if (number === 0 || number < 0) return;

  if (count > number) {
    return;
  }

  setTimeout(() => {
    console.log(count);
    count++;
    counter(number);
  }, 1000);
}

counter(10); // Adjust the target number as needed
