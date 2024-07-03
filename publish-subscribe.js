// - 订阅事件
// - 事件广播
// - 取消订阅事件
//  - 移除事件队列
//  - 移除回调方法
//  -

class PublishSubscribePatten {
  constructor() {
    this.queueMap = {};
  }

  subscribe(queueName, handle) {
    if (!this.queueMap[queueName]) {
      this.queueMap[queueName] = [];
    }
    this.queueMap[queueName].push(handle);
    console.log("subscribe=", this.queueMap);
  }

  unSubscribe(queueName, handle) {
    if (handle) {
      this.queueMap[queueName] = this.queueMap[queueName].filter(
        (v) => v !== handle
      );
      if (this.queueMap[queueName].length === 0) {
        delete this.queueMap[queueName];
      }
    } else {
      delete this.queueMap[queueName];
    }
    console.log("unSubscribe=", this.queueMap);
  }

  notify(queueName, text) {
    this.queueMap[queueName]?.forEach((element) => {
      element(text);
    });
  }
}

const psp = new PublishSubscribePatten();

function handle1(text) {
  console.log("handle1=", text);
}
function handle2(text) {
  console.log("handle2=", text);
}
function handle3(text) {
  console.log("handle3=", text);
}
psp.subscribe("test1", handle1);
psp.subscribe("test1", handle2);
psp.subscribe("test2", handle3);
psp.notify("test1", "goodjob");

psp.unSubscribe("test1", handle2);

psp.unSubscribe("test2");

psp.notify("test1", "goodjob1");
