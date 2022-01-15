const mysql = require('mysql2')

const openConnection = ()=> {
    const connection = mysql.createConnection({
        uri: "mysql://db:3306",
        user: "root",
        password: "root",
        database: "JAN15"
        
    })

    connection.connect()

    return connection
    
}

module.exports = {
    openConnection,
}

