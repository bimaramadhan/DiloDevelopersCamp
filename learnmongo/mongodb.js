const {MongoClient, ObjectID} = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

function debugHandler(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);   
    }
}
MongoClient.connect(connectionURL,
    {useNewUrlParser:true},
    (error, client) => {
        if(error) {
            return console.log('unable to connect');
            
        }
        const db = client.db(databaseName)
        // Mulai bermain2 dengan database
        // db.collection('users').insertMany([
        //     {
        //         name: 'Bima',
        //         age: 21,
        //         status: 'single'
        //     },
        //     {
        //         name: 'Satria',
        //         age: 20,
        //         status: 'jomblo'
        //     }
            
        // ], (error, result) => {
        //     if(error) {
        //     return console.log('Terjadi kesalahan');
        // }
        // console.log(result.ops);
        // console.log(result.insertedCount);
        // console.log(result.insertedId);
        // })

        // db.collection('users').findOne(
        //     {_id: new ObjectID('5de510c462a6203a4478f780')},   
        //     (error, task) => {
        //     console.log(task);   
        // })
        // insert data
        // db.collection('tasks').insertMany([
        //     {description: 'makan', completed: true},
        //     {description: 'mandi', completed: false},
        //     {description: 'jalan', completed: true}
        // ], (error, result) => {
        //     if(error) {
        //         console.log('gagal menyimpan');
                
        //     }
        //     console.error(result.ops);
            
        // })

        // ambil data true
        // db.collection('tasks')
        //     .find({completed: true})
        //     .toArray((error, task) => {
        //         console.log(task);
                
        //     })

        // ambil data user
        // db.collection('users')
        //     .find({age: {$gte: 21}}) 
        //     .toArray((error, user) => {
        //         console.log(user);
                
        //     })

        // update data
        // db.collection('users').updateOne({
        //     _id: new ObjectID('5de510c462a6203a4478f77f')
        // }, {
        //     $set: {name: "Ramadhan", age: 10}
        // }, (error, result) => {
        //     console.log(result);
            
        // })

        // db.collection('tasks').updateMany({
        //     completed: false
        // }, {
        //     $set: {
        //         completed: true
        //     }
        // }, (error, result) => {
        //     console.log(result);
            
        // })

        // Hapus Kenangan
        // db.collection('users').deleteMany({
        //     status: "jomblo"
        // }, (error, result) => {
        //     console.log(result);
            
        // })

        db.collection('tasks').deleteOne({
            description: "mandi"
        }, (error, result) => {
            console.log(result);
            
        })
    }
)