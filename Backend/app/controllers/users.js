let md5 = require('md5');
console.log(md5('message'));
module.exports = {
    getUserList,
    getUser,
    addUser,
    updateUser,
    deleteUser
}

/*
    Purpose: Get all registered  user's details // 9
*/
async function getUserList(req, res) {
    try {
        let newUser = req.body;
        let recordExist = await query(`SELECT * FROM USERS `);
        res.send({
            'success': true,
            'msg': 'User recieved',
            Userdata: recordExist
        });

    } catch (error) {
        res.status(500).send({
            'success': false,
            'msg': 'Error! getting User',
            'error': error
        });
    }
}

/*
    Purpose: Get particular user details  // 10
*/
async function getUser(req, res) {
    try {
        let newUser = req.body;
        let recordExist = await query(`SELECT *, DATE_FORMAT(createdOn,'%Y/%m/%d') as createdOn  FROM USERS WHERE email='${newUser.email}' `);
        res.send({
            'success': true,
            'msg': 'User recieved',
            Userdata: recordExist
        });

    } catch (error) {
        res.status(500).send({
            'success': false,
            'msg': 'Error! getting User',
            'error': error
        });
    }
}



/*
    Purpose: Update user details  // 11
*/

async function updateUser(req, res) {
    try {
        let newUser = req.body;
        newUser.createdOn = new Date(newUser.createdOn).getFullYear() + '-' + (new Date(newUser.createdOn).getMonth() + 1) + '-' + new Date(newUser.createdOn).getDate();
        let recordExist = await query(`UPDATE USERS SET fullName='${newUser.fullName}',companyName='${newUser.companyName}',email='${newUser.email}',phoneNo='${newUser.phoneNo}',userName='${newUser.userName}',appAdded='${newUser.appAdded}',createdOn='${newUser.createdOn}' WHERE id='${newUser.id}'`);
        res.send({
            'success': true,
            'msg': 'User Update',
            Userdata: recordExist
        });

    } catch (error) {
        res.status(500).send({
            'success': false,
            'msg': 'Error! updatting User',
            'error': error
        });
    }
}

async function addUser(req, res) {
    try {
        let newUser = req.body;

        let recordExist = await query(`SELECT userName,phoneNo,fullName,companyName,email FROM USERS WHERE userName='${newUser.userName}' OR phoneNo='${newUser.phoneNo}'`);


        if (recordExist.length) {
            res.send({
                'success': false,
                'message': 'Oops! Already Add!'
            });
        } else {
            newUser.createdOn = new Date(newUser.createdOn).getFullYear() + '-' + (new Date(newUser.createdOn).getMonth() + 1) + '-' + new Date(newUser.createdOn).getDate();
            let result = await query(`INSERT INTO USERS(fullName,companyName,email,userName,phoneNo,createdOn,appAdded) VALUES('${newUser.fullName}','${newUser.companyName}','${newUser.email}','${newUser.userName}','${newUser.phoneNo}','${newUser.createdOn}','${newUser.appAdded}')`);

            res.send({
                'success': true,
                'message': 'User add Successfully',
                value: result
            });
        }

    } catch (error) {

        res.status(500).send({
            'success': false,
            'message': 'Error! invalid',
            'error': error
        });
    }
}

async function deleteUser(req, res) {
    try {
        // let id = req.params.id;
        let newUser = req.body;
        console.log(newUser);
        let recordExist = await query(`DELETE FROM USERS WHERE id='${newUser.id}'`);
        console.log(recordExist);
        res.send({
            'success': true,
            'msg': 'User deleted',
            Userdata: recordExist
        });
        console.log(Userdata);
        console.log(error);
    } catch (error) {
        res.status(500).send({
            'success': false,
            'msg': 'Error! deleting User',
            'error': error
        });
    }
}

