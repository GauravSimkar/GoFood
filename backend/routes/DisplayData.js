const express = require("express");
const router = express.Router();


router.post("/foodData",(req,res)=>{
    try {
        if (global.food_items) {
            res.send([global.food_items,global.foodCategory]);
          } else {
            res.send("Data not available yet. Please try again later.");
          }
    } catch (error) {
        console.log(error.message);
        res.send("server error")
    }
})
module.exports = router;