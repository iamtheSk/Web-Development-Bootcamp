
const fs = require("fs"); // IMPORT FileSystem(fs) using require method and save in fs variable

//using fs module we can call writeFile method
// this module as takes 3 parameter first fileName, second in file we provide message , 
//3rd call back fun for if error throw err
// fs.writeFile("message.txt","Hello iam sk i create this file using node file system",(err)=>{
//     if (err) throw err;
//         console.log("The file is saved");
    
// });

// lastly call this js file using node filename the file save and write inside message

//To readfile you can use readFile Method inside this method parameter we need to mention 'FilePath or name' 
// mention 'Utf-8' because this reads some characters ans symbol also without mention it throw error and call back function at last
fs.readFile('message.txt','utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data);
});