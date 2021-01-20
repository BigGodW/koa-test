const router = new require('koa-router')()
const {addUser} = require('../utils/user')

router.get('/add',async(ctx)=>{
  ctx.body = await addUser()
})


module.exports = router