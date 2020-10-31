
// const basic = require('./controllers/basic');
const login = require('./controllers/login');
const password = require('./controllers/password');
const common = require('./util/common');



module.exports = function(app) {    
   
    app.post("/login", login.login);
    app.get("/resetPassword", password.resetPassword);
    app.get("/forgotPassword", password.forgotPassword);
     app.get("/verifyToken",common.verifyToken);

};


























 // app.post("/Login", basic.Login); // 1
    // app.post("/registration", basic.registration);