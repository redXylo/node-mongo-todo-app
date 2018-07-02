const {ObjectID} = require('mongodb'); 
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo.js')
const {User} = require('./../server/models/user.js')

// var id = '5b398bf219fe0f2398b216fb';
var id = '5b3910f5b1d5643260d0ec7b';
// var userID = '5b3910f5b1d5643260d0ec7b'; 

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid'); 
// }
// Todo.find({
//     _id: id 
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id 
// }).then((todo) => {
//     console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo By ID', todo);
// }).catch((e) => {
//     console.log(e)
// });

User.findById(id).then((user) => {
    if(!user) {
        return console.log('ID not found');
    }
    console.log('Todo By ID', user);
}).catch((e) => {
    console.log(e);
});