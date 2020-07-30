const {Movie}=require('../models')
const {Studio,Time,StudioTime}=require('../models')

class Controller{
    static show(req,res){
        StudioTime.findAll({include:[Studio,Time],where:{status:null}})
        .then(data=>{
            res.render('studio-time.ejs',{data})
            //res.send(data)
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static add(req,res){
        Studio.findAll()
        .then(data=>{
            Time.findAll()
            .then(data1=>{
                res.render('studioTime-add.ejs',{data,data1})
            })
        })
        .catch(err=>{
            res.send(err)
        })
        
    }
    static postData(req,res){
        let obj={
            TimeId:req.body.time,
            StudioId:req.body.studio,
            createdAt:new Date(),
            updatedAt:new Date()
        }
        Studio.findByPk(req.body.studio)
        .then(data=>{
            Time.findByPk(req.body.time)
            .then(data1=>{
                obj["name"]=`${data.name} ${data1.time}`
                StudioTime.create(obj)
                .then(data=>{
                res.redirect('/studioTime')
                })
            })
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static del (req,res){
        StudioTime.destroy({where:{id:req.params.id}})
        .then(data=>{
            res.redirect('/studioTime')
        })
        .catch(err=>{
            res.send(err)
        })
    }
    
}
module.exports=Controller