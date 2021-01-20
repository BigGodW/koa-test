const Koa = require('koa')
const Router = require('koa-router')

require('./dao/connect')

// 引入路由文件
const index = require('./routes/index')
const user = require('./routes/user')
const test = require('./routes/test')

const app = new Koa()
const router = new Router()

// 添加路由
router.use('/',index.routes())
router.use('/user',user.routes())
router.use('/test',test.routes())


// 挂载路由
app.use(router.routes()).use(router.allowedMethods())

app.listen('3000',()=>{
  console.log('running http://localhost:3000')
})
