"use strict";

let num =  50;

if (num < 50)  {
  console.log('False!');
} else if (num > 50) {
  console.log('A lot!');
} else {
  console.log('True!');
}

num == 50 ? console.log('True!') : console.log('False!');
console.log(num == 50 ? 'True!' : 'False!');

switch (num) {
  case num < 50:
  case num < 50:
    console.log('False!');
  break;
  case num > 100:
    console.log('A lot!');
    break;
  case num > 80:
    console.log('Still a lot!');
    break;
  case 50:
    console.log('True!');
    break;
  default:
    console.log('WTH!');  
}

// while (num < 55) {
//   console.log(num++);
// }

do {
  console.log(num);
} while (++num < 55);

for (let i = 1; i < 8; i++) {
  if (i == 6) {
    continue;
  }
  console.log(i);
}
