console.log("feroz");
var a = 3;
let b = 55;
let c = a + b;
console.log(c);
let array1 = [1, 2, 3, 4, 5];
let firstElement1 = array.splice(0, 1);
console.log(array1, firstElement1);
let array = [1, 2, 3, 4, 5];
let firstElement = array.shift();
console.log(array, firstElement);
let array_1 = [1, 2, 3, 4, 5];
let array_2 = array_1.filter((element, index) => index > 0);
console.log(array_1, array_2);
setTimeout(
  function (text) {
    console.log(text);
  },
  2000,
  "Hello, World 2 sec"
);
setTimeout(() => console.log("Hello, World after 3sec"), 3000);
setTimeout(console.log, 1500, "Hello, World 1");
function callbackExec(callback) {
  if (typeof callback === "function") {
    setTimeout(() => {
      callback();
      console.log("Callback is executed after 2 seconds");
    }, 2000);
  }
}

function displayHello() {
  console.log("Hello");
}

callbackExec(displayHello);

const num11 = 1,
  num21 = 10;
for (let i = num11; i <= num21; i++) {
  setTimeout(() => console.log(i), i * 1000);
}

const num1 = 1,
  num2 = 10;
+(function displayWithDelay(i) {
  console.log(i);
  if (i !== num2) setTimeout(displayWithDelay, 1000, ++i);
})(1);
