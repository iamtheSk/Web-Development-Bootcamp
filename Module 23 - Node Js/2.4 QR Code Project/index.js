/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// 1. qr- code generator

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

//before you provide value you must need documententaion
// because the inquirer is pre-build js file there are create pre-builds variables and objects
//here message for get the input of url , name for store the url , answer check and call the url
// qrl image is the method from qr-image package inside we provide url
//pipe method use to write and createWriteStream() method used for create and store files 
inquirer
  .prompt([  // provide inside braces because of this is js objects
    {
        message : "Enter the url:",
        name : "url" 
    }
  ])
  .then((answers) => {
    const URL = answers.url
    var qr_svg = qr.image(URL); // convert into image store in the variable 'qr-svg'
    qr_svg.pipe(fs.createWriteStream('output-qr-images/qr_image-1.png')); //file name change before you run you get each qr each file

    //writefile create and store url in text file
    fs.writeFile("url.text",URL,(err)=>{
        if (err) throw err;
        console.log("your File is saved");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

