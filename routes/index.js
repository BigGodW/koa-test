const router = new require('koa-router')()

router.get('/',async(ctx,next)=>{
  ctx.body ='koa router'
})

module.exports = router