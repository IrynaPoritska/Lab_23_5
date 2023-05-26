'use strict'

const mongoose = require('mongoose')

let _db = null

module.exports = function (config) {
  const dbUrl = "mongodb+srv://iruskaporitska:N8tk6wpH6GJRgjhb@cluster0.ba80lgj.mongodb.net/ ";
  // 'mongodb://uname:upwd@host:port/dbname'
  // console.log(dbUrl)
  mongoose.connect(dbUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .catch(error => {
      console.error(error.message)
    })

  if (_db === null) {
    _db = mongoose.connection
  }

  return _db
}