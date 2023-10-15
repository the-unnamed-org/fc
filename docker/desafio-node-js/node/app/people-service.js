const mysql = require('mysql')
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
}

let connection;

const init = () => {
    connection = mysql.createConnection(config)
    connection.query(`CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))`)
}

const insert = (name) => {
    connection.query(`INSERT INTO people(name) values('${name}')`)
}

const getAll = () => {
    return new Promise(function(resolve, reject) {
        connection.query(`SELECT id, name FROM people`, function (err, result, fields) {
            if (err) throw reject(err)
            resolve(result)
        })
    })
}

exports.init = init;
exports.insert = insert;
exports.getAll = getAll;
