// colaborated with @dasha Frumovitch

const stdin = process.stdin;
// don’t worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');
////////////
// Event Handling for User Input
stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("thanks for using me, ciao");
    process.exit();
  }
  //  process.stdout.write(‘.’);
  if (key === '\u0062'){
    process.stdout.write('\x07');
    console.log('alarm sounded at touch of b');
  }
  if (key <= '\u0039'&& key >'\u0030') {
    console.log('setting timer for', key);
    setTimeout(() => {
        process.stdout.write('\x07');
        console.log(`The alarm rang after ${key} seconds`);
      }, key*1000);
   }
});
console.log("Welcome to the alarm. Please use 1-9 to set the timer. press b to immediately sound alarm. Use <ctrl>c to exit");


// // Alarm function
// // let args = process.argv;
// // args = args.slice(2);
// let num = [];

// const alarm = function(time){
//   if (time === undefined){
//     return;
//   }
// setTimeout(() => {
//     process.stdout.write('\x07');
//     console.log('alarm rang', time);
//   }, time*1000);
// }

// for (let letter of args){
// letter = Number(letter);
//   if(letter >= 1){
//   num.push(letter); 
//   } 
// }
// // console.log(num);

// const ringAlarm = function (array, callback, stop){
//   for(let item of array){
//     callback(item);
//     // console.log('!!!!', item);
//   }
// }

// // ringAlarm(num,alarm,)
