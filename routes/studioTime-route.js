const route=require('express').Router()
const Controller=require('../controller/studiotimecontroller')

route.get('/',Controller.show)

route.get('/add',Controller.add)
route.post('/add',Controller.postData)
route.get('/:id/delete',Controller.del)

module.exports=route