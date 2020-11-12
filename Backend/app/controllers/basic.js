const dbConfig = require("../config/appConfig").db;
let md5 = require('md5');
console.log(md5('message'));


module.exports = {   
    Login,
    // registration,
}

// async function addUser(req, res) {
//     try {
//         let newUser = req.body;

//         let recordExist = await query(`SELECT userName,phoneNo,fullName,companyName,email FROM USERS1 WHERE userName='${newUser.userName}' OR phoneNo='${newUser.phoneNo}'`);
       

//         if (recordExist.length) {
//             res.send({
//                 'success': false,
//                 'message': 'Oops! Already Add!'
//             });
//         } else {           
//             newUser.createdOn = new Date(newUser.createdOn).getFullYear() + '-' + (new Date(newUser.createdOn).getMonth() + 1) + '-' + new Date(newUser.createdOn).getDate();
//             let result = await query(`INSERT INTO USERS1(fullName,companyName,email,userName,phoneNo,password,createdOn,appAdded) VALUES('${newUser.fullName}','${newUser.companyName}','${newUser.email}','${newUser.userName}','${newUser.phoneNo}','${md5(newUser.password)}','${newUser.createdOn}','${newUser.appAdded}')`);
            
//             res.send({
//                 'success': true,
//                 'message': 'User add Successfully',
//                 value: result
//             });
//         }

//     } catch (error) {
        
//         res.status(500).send({
//             'success': false,
//             'message': 'Error! invalid',
//             'error': error
//         });
//     }
// }

/*
    Purpose: To register user details  // 1
*/


async function Login(req, res) {
    try {
        let user = req.body;        
        let recordExist = await query(`SELECT userName, password FROM USER WHERE userName='${user.userName}' `);       

        if (recordExist.length) {
            if (recordExist[0].password === md5(user.password)) {                               
                const userName = user.userName;                               
                res.send({
                    'success': true,                   
                    userName: userName,                    
                    'message': 'Login Successful!'
                });
            } else {
                res.send({
                    'success': false,
                    'message': 'Invalid Credentials'
                });
            }
        } else {
            res.send({
                'success': false,
                'message': 'User not Registered'
            }); 
        }

    } catch (error) {        
        res.sendStatus(500).send({
            'success': false,
            'message': 'Error! invalid',
            'error': error
        });
    }
}

