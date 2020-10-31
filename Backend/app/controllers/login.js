const dbConfig = require("../config/appConfig").db;
const jwt = require('jsonwebtoken');
const tokenConfig = require("../config/appConfig").token;
let md5 = require('md5');
console.log(md5('message'));
module.exports = {
    login,
}

/*
    Purpose: To login user // 2
*/

async function login(req, res) {
    try {
        let newUser = req.body;
        console.log('login called', req.body);
        console.log(newUser)
        
        let recordExist = await query(`SELECT username,password FROM USER WHERE username='${newUser.username}' `);
         console.log(recordExist)          
        if (recordExist.length) {  
            const token = jwt.sign(JSON.parse(JSON.stringify(recordExist[0])), tokenConfig.secret);             
            res.send({
                'success': true,
                token,
                'msg': 'login Successful'
            });
        } else {                    
            res.send({
                'success': false,
                'msg': 'error',
            });
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({
            'success': false,
            'msg': 'Error! invalid',
            'error': error
        });
    }
}

