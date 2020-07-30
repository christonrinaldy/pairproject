const route=require('express').Router()
const movieroute=require('./film-route')
const studioTimeroute=require('./studioTime-route')
const jadwalroute=require('./jadwal-route')

route.get('/',(req,res)=>{
    res.render('home.ejs')
})
route.use('/movies',movieroute)
route.use('/studioTime',studioTimeroute)
route.use('/jadwal',jadwalroute)

module.exports=route