function red() {
  return new Promise((resolve) => {
    console.log("red");
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

function yellow() {
  return new Promise((resolve) => {
    console.log("yellow");
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
function green() {
  return new Promise((resolve) => {
    console.log("green");
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

function step() {
  console.log("step=");
  Promise.resolve().then(red).then(yellow).then(green).then(step);
}
step();
let i = 0;
setInterval(() => {
  console.log(++i);
}, 1000);
