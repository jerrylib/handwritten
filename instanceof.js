function instantof(left, right) {
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;
  while (true) {
    if (proto === null) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

// test

function A() {}

const a = new A();

console.log(instantof(a, A));

console.log(instantof(a, Function));

console.log(instantof(a, Object));
