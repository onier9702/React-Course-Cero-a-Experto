const {response} = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = ( req, res = response, next ) => {

    // x-token headers

    const token = req.header('x-token');
    // console.log(token);

    if(!token) {
        return res.status(401).json({
            ok: false,
            msg: 'There is no token in petition',
        })
    };

    try {

        const payload = jwt.verify(
            token, 
            process.env.SECRET_JWT_SEED
        );
        // console.log(payload);
        req.uid = payload.uid;
        req.name = payload.name;
        
    } catch (err) {
        console.log(err);
        return res.status(401).json({
            ok: false,
            msg: 'Token not valid',
        })
    }


    next();


};



module.exports = {
    validateJWT,
}
