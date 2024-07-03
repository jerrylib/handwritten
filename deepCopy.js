function deepCopy(object) {
  if (!object || typeof object !== "object") return;
  const nextObj = Array.isArray(object) ? [] : {};

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key];
      nextObj[key] = typeof element === "object" ? deepCopy(element) : element;
    }
  }
  return nextObj;
}

const obj = {
  a: 1,
  b: {
    c: 1,
    d: 2,
  },
  e: function (a, b) {
    return a + b;
  },
};
const nextObj = deepCopy(obj);
console.log(nextObj.e === obj.e);
console.log(nextObj.b === obj.b);

console.log(nextObj.a === obj.a);

console.log(obj, nextObj);
