const express=require("express");

const router=express.Router();

const Prediction=require("../models/Prediction");


router.get("/:userId", async(req,res)=>{

    try{

        const history =
        await Prediction.find({
            user:req.params.userId
        })
        .sort({
            createdAt:-1
        });


        res.json(history);


    }
    catch(error){

        res.status(500).json({
            message:"Failed to fetch history"
        });

    }

});


module.exports=router;