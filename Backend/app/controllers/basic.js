// const dbConfig = require("../config/appConfig").db;
// let md5 = require('md5');
// console.log(md5('message'));


// module.exports = {   
//     Login,
//     registration
// }

// async function registration(req, res) {
//     try {
//         let newUser = req.body;

//         let recordExist = await query(`SELECT username,contact,firstname,lastname FROM USER WHERE username='${newUser.username}' OR contact='${newUser.contact}'`);
       

//         if (recordExist.length) {
//             res.send({
//                 'success': false,
//                 'message': 'Oops! Already Registered!'
//             });
//         } else {
           
//             newUser.dob = new Date(newUser.dob).getFullYear() + '-' + (new Date(newUser.dob).getMonth() + 1) + '-' + new Date(newUser.dob).getDate();
            
//             let result = await query(`INSERT INTO USER(firstname,lastname,username,contact,password,dob,address) VALUES('${newUser.firstname}','${newUser.lastname}','${newUser.username}','${newUser.contact}','${md5(newUser.password)}','${newUser.dob}','${newUser.address}')`);
            
//             res.send({
//                 'success': true,
//                 'message': 'Registration Successful',
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

// /*
//     Purpose: To register user details  // 1
// */


// async function Login(req, res) {
//     try {
//         let user = req.body;        
//         let recordExist = await query(`SELECT username, password FROM USER WHERE username='${user.username}' `);       

//         if (recordExist.length) {
//             if (recordExist[0].password === md5(user.password)) {                               
//                 const userName = user.username;                               
//                 res.send({
//                     'success': true,                   
//                     username: userName,                    
//                     'message': 'Login Successful!'
//                 });
//             } else {
//                 res.send({
//                     'success': false,
//                     'message': 'Invalid Credentials'
//                 });
//             }
//         } else {
//             res.send({
//                 'success': false,
//                 'message': 'User not Registered'
//             }); 
//         }

//     } catch (error) {        
//         res.sendStatus(500).send({
//             'success': false,
//             'message': 'Error! invalid',
//             'error': error
//         });
//     }
// }

