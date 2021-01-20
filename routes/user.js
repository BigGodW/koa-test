const router = new require('koa-router')()

router.get('/',async(ctx,next)=>{
  ctx.body ='user router'
})

module.exports = router