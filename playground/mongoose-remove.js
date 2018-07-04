const {ObjectID} = require('mongodb'); 

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo.js')
const {User} = require('./../server/models/user.js')

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

// Todo.findOneAndRemove({_id:'5b3c47ffe3548891a79dcbcc'}).then((result) => {

// })

// Todo.findByIdAndRemove('5b3c47ffe3548891a79dcbcc').then((todo) => {
// console.log(todo);
// })