const fs = require("fs");

// //write file 
// fs.writeFile("message.txt","Have a good day",(error)=>{
//     if(error){
//         console.log("unable to write data")
//     }
// });



// //appendFile
// fs.appendFile("message.txt"," Thanku",(error)=>{
//     if(error){
//         console.log("unable to write data")
//     }
// });




// //read data from file
// fs.readFile("message.txt","utf-8",(error,data)=>{
//     if (error){
//         console.log("unable to read");

//     }else{
//         console.log(data);
//     }
// });




//unlink
fs.unlink("message.txt",(error)=>{
        if(error){
            console.log("unable to write data")
        }
    });


//create folder
fs.mkdir("pages",(error)=>{
    if(error){
        console.log("unable to delete")
    }
});

//get all file from folder
fs.readdir("pages",(error,data)=>{
        if (error){
            console.log("unable to delete");
    
        }else{
            console.log(data);
        }
    });

    


