
let target = {};
let proxy = new Proxy(target, {}); // пустой handler

proxy.test = 5; // записываем в прокси (1)

console.log('proxy.test', proxy.test)
console.log('target.test', target.test)