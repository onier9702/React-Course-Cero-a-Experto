
// Now to not lose the intelligence help here, you can make this
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateJWT } = require('../helpers/JWT');
// const bcrypt = require('bcryptjs/dist/bcrypt');


const createUser = async(req ,res = express.response) => {

    const { email, password} = req.body;

    try {

        let user = await User.findOne({email});

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'The email already exists',
            })
        }

        user = new User(req.body);

        // Encrypt password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);
        
        await user.save();

        // Until this point all is correct and then we have to generate a web token JWT
        // generating jwt
        const token = await generateJWT(user.id, user.name);

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
            
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Please Contact Admin',
            
        });
    }

    // const user = new User(req.body);
    // user.save()
    //     .then( doc => {
    //         console.log(doc);
    //         res.status(201).json({
    //             ok: true,
    //             msg: 'register',
                
    //         });
    //     } )
    //     .catch( err => {
    //         console.log(err);
    //         res.status(500).json({
    //             ok: false,
    //             msg: 'Please Contact Admin',
                
    //         });
    //     })
    

};

const loginUser =  async(req, res = express.response) => {

    const { email, password} = req.body;

    try {

        const user = await User.findOne({email});

        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'The email does not exists',
            })
        }

        // Confirm the passwords

        const validPassword = bcrypt.compareSync(password, user.password);

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'The password is incorrect',
            })
        }

        // Until this point all is correct and then we have to generate a web token JWT
        // generating jwt
        const token = await generateJWT(user.id, user.name);

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });

        
    } catch (error) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Please Contact Admin',
            
        });
    }

};

const revalidateToken = async(req, res = express.response) => {

    
    const {uid, name} = req;
    console.log(req.uid,req.name);

    // generating jwt
    const token = await generateJWT(uid, name);    

    res.status(201).json({
        ok: true,
        uid,
        name,
        token
    });
}

module.exports = {

    createUser,
    loginUser,
    revalidateToken,
}