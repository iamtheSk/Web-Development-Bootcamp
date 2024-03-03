//jshint esversion:6

//On learn 27/07/23

//01 For import mongoose
const { log } = require('console');
const mongoose = require('mongoose');
// To use ES6 Import method
// import mongoose from 'mongoose';

//02 Connection(along access or create dbs) Use connect method inside we give our local host link
//at last we provdide - /fruitsDB - if exist this Database we can access else this will create
//use this url parser true at the end for prevend from deprecation warnings and errors
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB',{useNewUrlParser :true});


// 03 Create a new Schema(Blueprint)
// const fruitSchema = new mongoose.Schema({
//     name:String,
//     rating:Number,
//     review:String
// });
// ------------------------------------------------------------------------------------------------------------------------------------------
// 298. Data Validation with Mongoose
// Same thing above that will provide a validation below
const fruitSchema = new mongoose.Schema({

    //In the Required value as square inside first value as true then second value as a message when the required value not provide
    name:{
        type : String,
        required :[true,"Please Check the data, There is no name is specified"],
    },
    rating : {
        type : Number,
        min : 1,
        max : 10,
    },
    review:String
});


// ------------------------------------------------------------------------------------------------------------------------------------------


//04 use the Scheme we would create Mongoose Model(collection)
//First paramter of model method as string in singluar form second of schema
//In creation the name are in singular form but in behind the scene in time to change collection it into plurarl
const Fruit = mongoose.model('Fruit',fruitSchema);

//05 Create a new fruit document from the model
//provide data to the collection
// const fruit = new Fruit({
//     name : 'Apple',
//     rating : 8,
//     review : 'Pretty Soild as a fruit'
// })

//05 Save method use to save fruit document into Fruit collection on inside the fruitsDB
// fruit.save();

//Create a new collection for people
//In the schema we would create a two field name and age
// create a model from schema model named as person
//provide person data name as john and age as 37
//save the data into database using save method and shown in mongoshell

//100 favoriteFruit key add the value as fruit scheme this changes for last lesson
const personSchema = new mongoose.Schema({
    name : String,
    age : Number,
    favoriteFruit : fruitSchema
})

// Automatically signullar form person into plural form people
const Person = mongoose.model('Person',personSchema)

const John = new Person({
    name : 'John',
    age : 37
})

// John.save();


// 06 Push bunch of fruits into our collection

// const kiwi = new Fruit({
//     name : 'Kiwi',
//     rating : 10,
//     review : 'Sour and Sweet'
// })

// const orange = new Fruit({
//     name : 'Orange',
//     rating : 8,
//     review : 'Good for Skin'
// })

// const banana = new Fruit({
//     name : 'Banana',
//     rating : 9,
//     review : 'sweet'
// })

//07 For insert many thing
//This insermany method first paramter is array provide fruit names
//Second parameter is a callback it allow us to log any errors

//Warning
//The recent update of moongoose insermany methof that not accept second paramter of callback function
//instead of that using then you would catch the error

// Instead of this

// Fruit.insertMany([kiwi,orange,banana],function(err){
//     if(err){
//         console.log(err)
//         console.log( "This error will  able to resolve");
//     }else{
//         console.log("Sucessfully saved all to fruitsDB");
//     }
// })

//Use Like This

// Fruit.insertMany([kiwi,orange,banana]).then(function(){
//     console.log("Sucessfully saved all to fruitsDB")
// }).catch(function(err){
//     console.log(err)
//     console.log( "This error will  able to resolve")
// })


//----------------------------------------------------------------------------------------------------------------------------------------

// 297. Reading from Your Database with Mongoose

//01 Use find method to get or read the value

//Instead of this
//This is older version of mongoose but it won't work it throw error like find method can't accepts callback
// Fruit.find({},function(err,fruits){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(fruits);
//     }
// })

//Use This
//So the new version below use this

// Fruit.find().then(function(fruits){
//     // console.log(fruits)
//     // Using for Each we get only name of the fruits
//     fruits.forEach(function(fruit){
//         console.log(fruit.name);
//     });
//     //After the work done we need to close the mongo Collection
//     mongoose.connection.close();
// }).catch(function(err){
//     console.log("This method will throw the error check that" + err)
// })

// --------------------------------------------------------------------------------------------------------------------------------

// 298. Data Validation with Mongoose
 //01 min and maximum value validator checked
//  const fruit = new Fruit({
//         name : 'Avacado',
//         rating : 8,
//         review : 'It like a fruit but it also consider in vegatable section'
//     });

//     fruit.save();

//02 Challange make the name section into required if won't give it shown error
// const fruit = new Fruit({
//             name : "papaya",
//             rating : 8,
//             review : 'It like a fruit but it also consider in vegatable section'
//         });

        // fruit.save();

//find That will shown inside our fruits name and close the collection after print the names
// Fruit.find().then(function(fruits){
//     // console.log(fruits)
//     // Using for Each we get only name of the fruits
//     fruits.forEach(function(fruit){
//         console.log(fruit.name);
//     });
//     //After the work done we need to close the mongo Collection
//     // mongoose.connection.close();
// }).catch(function(err){
//     console.log("This method will throw the error check that" + err)
// })



//-----------------------------------------------------------------------------------------------------------------------------------------

// 299. Updating and Deleting Data Using Mongoose

// I gonna update the papaya fruit review because it is already exist in avacado
// This update first parameter taken as filter(id) which data need to update
// Second parameter is we need to define and provide the updatation of which attribute in the object

// Fruit.updateOne({_id :"64c142fa4cda9a27f75b872e"},{review : "papaya is good in taste"}).then(function(){
//     console.log("The Updation will success");
// }).catch(function(err){
//     console.log("This is a error"+err);
// })


// -----
// Delete

// Fruit.deleteOne({_id : "64c16e0ee6b74d7b4868c86c"}).then(function(){
//     console.log("Delete the provided object successfully");
// }).catch(function(err){
//     console.log(err);
// })

// ---
// DeleteMany

// Used to deleteMany using by id the in operator help much for selecting many id's
// Fruit.deleteMany({_id : {
//     $in : [ "64c13c82dbe16bced3370aaf",
//             "64c0e222c266a429ca391531",
//             "64c0e222c266a429ca391532",
//             "64c0e222c266a429ca391533"]} }).then(function(){
//     console.log("Delete the provided object successfully");
// }).catch(function(err){
//     console.log(err);
// })

//-----------------

//Now Challange is Delete all the person's data from people collection using name

// Person.deleteMany({name: 'John'}).then(function(){
//         console.log("Delete the provided object successfully");
//     }).catch(function(err){
//         console.log(err);
//     })

// -------------------------------------------------------------------------------------------------------------------

// 300. Establishing Relationships and Embedding Documents using Mongoose

//connect relationship between two collections

//for that we can add the schema to another schema's value

// Here fruitscehema is object value of person's new object(key) value

// Re calling the schema for Spreate topic understanding

// create a new fruit and create a new person data for merger both 

// const pineapple = new Fruit({
//     name : 'pineapple',
//     rating : 10,
//     review : "This fruit is much sweet"
// })

// pineapple.save()

// //set the pineapple value into another collection's object value
// const person = new Person({
//     name : "Amy",
//     age : 23,
//     favoriteFruit : pineapple
// })

// person.save()

//Challenge person john does'nt have any favFruit value with that so we create one fruit and update into that document\

const mango = new Fruit({
    name : "mango",
    rating : 9.5,
    review : "This is much sweetest that all fruit"
})

// mango.save()

Person.updateOne({_id: "64c16d5dd6ec3cbf62581dd8"},{favoriteFruit : mango}).then(function(){
    console.log("Updation Successfully");
    mongoose.connection.close()
}).catch(function(err){
    console.log(err);
})