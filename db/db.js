const mongoose=require("mongoose")




const conn=()=>{
    mongoose.connect("mongodb+srv://aman_mybcd:ifFRHtmuUfLnsZ4j@cluster0.pml9veb.mongodb.net/book").then((data)=>{
        console.log("connection is successfullly..")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports=conn