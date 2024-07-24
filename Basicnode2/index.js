const path = require("path");
const fs = require("fs");
const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];
const readFile = (file) =>{
    fs.readFile(file, "utf-8", (err, data) =>{
     if (err) {
         console.log(err);
     }else{
         console.log(data);
     }
    })
   };

   const deleteFile = (path) =>{
    fs.unlink(path, (err) =>{
        if(err){
            console.log(err);
        }
    })
   }
   const createFile = (file) =>{
    fs.writeFile(file, "utf-8", (err, data) =>{
     if (err) {
         console.log(err);
     }else{
         console.log("created sucessfull");
     }
    })
   };
   
   const appendFile = (path) =>{
    fs.appendFile(path,`\n`+ "Hello - Developer", (err, data) =>{
     if (err) {
         console.log(err);
     }else{
         console.log("Data append sucessfully");
     }
    })
   };

//    const oldFileName = "./delete.txt";
//     const NewFileName = "./newfile"
   const renameFile = () =>{
const oldFileName = "./delete.txt";
    const NewFileName = "./newfile"
    fs.rename(oldFileName,NewFileName, (err)=>{
        if (err) {
            console.log(err);
        }else{
            console.log("rename sucessfully");
        }
    })
   }

switch (operation) {
  // complete the fillowing function.
 
    case "read":
        if (file) {
            readFile(file)
        }
  
  break;
  case "delete":
    if (file) {
        deleteFile(file)
    }
    break;
    case "create":
    if (file) {
        createFile(file)
    }
    break;
    case "append":
    if (file) {
        appendFile(file)
    }
    break;
    case "rename":
    if (file) {
        renameFile(file)
    }
    break;
    case "list":
    if (file) {
        listFile(file)
    }
    break;
    
  default:
    console.log(`Invalid operation '${operation}'`);
}
