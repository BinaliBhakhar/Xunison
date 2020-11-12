
const basic = require('./controllers/basic');
const login = require('./controllers/login');
const password = require('./controllers/password');
const common = require('./util/common');
const users = require('./controllers/users');



module.exports = function(app) {    
    // app.post("/registration", basic.registration); // 1
    // app.post("/registration", basic.addUser); // 1
    app.post("/login", basic.Login); // 2

    app.post("/login", login.login);// 1
    app.get("/resetPassword", password.resetPassword);// 2
    app.get("/forgotPassword", password.forgotPassword);// 3
     app.get("/verifyToken",common.verifyToken);// 4

     app.get("/getUserList", users.getUserList); // 5
     app.get("/getUser", users.getUser); // 6
     app.put("/updateUser",users.updateUser); // 7
     app.post("/addUser",users.addUser); // 8
     app.delete("/deleteUser",users.deleteUser);//9 
      

};


























 // app.post("/Login", basic.Login); // 1
    // app.post("/registration", basic.registration);