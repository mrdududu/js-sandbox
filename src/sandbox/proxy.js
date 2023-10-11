
let obj = {child1: { child2: "test" }};

let proxy = new Proxy(obj, {
  set(target, prop, val) {
    console.log("set", {target, prop, val})
    target[prop] = val;
    return true
  }
});



proxy.child1.child2 = 5; // записываем в прокси (1)

console.log('proxy.child1.child2', proxy.child1.child2)
// console.log('target.test', target.test)