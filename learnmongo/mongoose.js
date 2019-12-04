// init mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
})

// Membuat model USER
const User = mongoose.model('User', {
    name: String,
    age: Number
})

// Penyimpanan Kenangan
const me = new User({
    name: 'Bima',
    age: 20
})

me.save().then(() => {
    console.log(me);
    
}).catch((error) => {
    console.log(error);
    
})