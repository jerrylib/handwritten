function objectCreate(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

const obj = {
  name: "wallet",
  toString: function () {
    return `I am ${this.name}`;
  },
};

const newObj = objectCreate(obj);

newObj.name = "Mary";
console.log(newObj.toString());

console.log(newObj.__proto__ === obj);
