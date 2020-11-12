/*
File: appConfig.js
Purpose: Configuration Part for Server and Database
 */

'use strict'
module.exports = {
    "db": { //Database Configuration
        "port": 27017,
        "dbName": 'meandemo',
        "authDb": 'admin',
        "url": 'mongodb://localhost:27017/meandemo',
        "host": 'localhost',
        "user": "mean",
        "passkey": "$3cRE@t",
        "encrypt": "save210"
    },
    "server": { //Server Configuration
        "name": "Xunison Application",
        "port": 3000,
        "considerPort": true
    },
    "token": {
        secret: "Xunison@123"
    }
}