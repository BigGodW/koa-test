const Mongoose = require('mongoose')
module.exports = Mongoose.connect('mongodb://150.158.186.91/test',{
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(()=>{
  console.log('数据库连接成功')
}).catch(()=>{
  console.log('数据库连接失败')
})

