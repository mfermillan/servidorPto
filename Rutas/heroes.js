const Router =require("express")
const rutaheroes = Router()

rutaheroes.get('/prueba',function(req,res){
    res.json({
        "superhero":"Batman", 
        "publisher":"DC Comics", 
        "alter_ego":"Bruce Wayne",
        "first_appearance":"Detective Comics #27",
        "characters":"Bruce Wayne"
    })
})
rutaheroes.get('/prueba/:heroe',function(req,res){
    res.send("el super heroes que elegiste es " + req.params.heroe)
})

module.exports = rutaheroes