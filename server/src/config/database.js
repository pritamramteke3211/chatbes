// getting-started.js
const mongoose = require('mongoose');

main().then(res => console.log("db connected successfully...!!!"))
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/chatbes_server');
}