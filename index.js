// on appelle la librairie express
const express=require("express")

const port =process.env.PORT || 500

// on appelle express pour démaré le serveur
const app=express()
// res =requeste c'est que l'on envoie, res=response c'est que l'on reçoi
app.get('/',(req,res)=>{
// res.send("hello ")
res.json({
    message:"hello fac"
})
})


const users=require("./routes/users")
app.use("/users",users)





// on écoute sur app
app.listen(port,()=>{
 console.log('server on ligne')

} )