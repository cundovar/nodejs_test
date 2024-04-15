const express=require("express")
const router=express.Router()


//choisir method put get delete post... req=request recupérér des data
router.get("/",(req,res)=>{
res.status(200).json({
    message:"users ici"
})
} )


router.get("/:id",(req,res)=>{
    const id=req.params.id
    res.status(200..json({
        id:id
    }))
})

//exporter les fichier reutilisable dans autre fichiers
module.exports=router