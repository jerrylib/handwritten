function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new TypeError("promises must be a array!");
    }

    let result = [];
    let successCount = 0;
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(
        (rs) => {
          result[i] = rs;
          successCount++;
          if (successCount === promises.length) {
            resolve(result);
          }
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
}

// test

let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2);
  }, 2000);
});
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3);
  }, 3000);
});

let p4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(4);
  }, 4000);
});
promiseAll([p3, p1, p2]).then((res) => {
  console.log(res); // [3, 1, 2]
});

promiseAll([p4, p1, p2]).catch((res) => {
  console.error(res); // error
});
