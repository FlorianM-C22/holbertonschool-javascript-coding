process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.resume();

process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
