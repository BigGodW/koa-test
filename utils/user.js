const UserModel = require('../models/user')

// 添加用户
const addUser = async()=>{
  const user = await UserModel.create({
    username:"admin",
    password: '123456'
  })
  console.log(user)
  return user
}




module.exports = {
  addUser
}