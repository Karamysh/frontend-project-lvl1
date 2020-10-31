#!/usr/bin/env node
import promptly from 'promptly';

(async () => {
  console.log('Welcome to the Brain games!');

  const name = await promptly.prompt('May I have your name? ');

  console.log(`Hello, ${name}!`);
})();
