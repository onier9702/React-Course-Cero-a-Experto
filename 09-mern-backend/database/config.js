
const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log('DB Connected successfully');
    
    } catch (error) {
        console.log('DB NOT Connected');
        console.log(error);
    }
                
    // OTHER SOLUTION
    // mongoose.connect(process.env.DB_CNN, {useNewUrlParser: true,useUnifiedTopology: true})
    //     .then(()=> {
    //         console.log("mongodb is connected");
    //     }).catch((error)=>{
    //         console.log("mondb not connected");
    //         console.log(error);
    //     });
                
};


module.exports = {
    dbConnection
}



