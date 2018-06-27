const {MongoClient, ObjectID} = require('mongodb'); 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongDB server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp'); 
 
    // db.collection('Todos').findOneAndUpdate(
    // {_id: new ObjectID("5b32fb523267058465961ad6")
    // }, {
    //    $set: {
    //        completed: true
    //    } 
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })


    
    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID("5b32f89632670584659619ee")
        }, {
           $set: {
               name: "Mae"
           },
           $inc: {
               age: 1
           } 
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        })

        

    client.close();
});