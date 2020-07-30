const {Movie}=require('../models')

class Controller{
    static show(req,res){
        Movie.findAll()
        .then(data=>{
            res.render('movies.ejs',{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static add(req,res){
        res.render('movie-add.ejs')
    }
    static postData(req,res){
        let obj={
            name:req.body.name,
            released_year:req.body.released_year,
            createdAt:new Date(),
            updatedAt:new Date()
        }
        Movie.create(obj)
        .then(data=>{
            res.redirect('/movies')
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static del (req,res){
        Movie.destroy({where:{id:req.params.id}})
        .then(data=>{
            res.redirect('/movies')
        })
        .catch(err=>{
            res.send(err)
        })
    }
}
module.exports=Controller