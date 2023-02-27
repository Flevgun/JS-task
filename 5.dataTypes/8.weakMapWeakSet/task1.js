let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let read = new WeakSet();
read.add(messages[0]);
console.log("Read message 0: " + read.has(messages[0]));
messages.shift();
