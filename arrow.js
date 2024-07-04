const obj = {
  name: "张三",
  getName() {
    return this.name;
  },
  getName1: () => {
    return this.name;
  },
};
obj.__proto__.getName2 = function () {
  return this.name;
};
obj.__proto__.getName3 = () => {
  return this.name;
};
console.log("普通函数", obj.getName());
console.log("普通函数", obj.getName2());
console.log("箭头函数", obj.getName1());
console.log("箭头函数", obj.getName3());

const fn1 = () => {
  console.log("arguments", arguments);
};
fn1(100, 200);

function fn2() {
  console.log("arguments", arguments);
}
fn2(100, 200);

const fn3 = (...values) => {
  console.log("values", values);
};
fn3(100, 200);
