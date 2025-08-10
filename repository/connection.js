import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '12345678',
    database: 'robsonMysql'
})

const connection2 = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '12345678',
    database: 'musicas'
})



export {connection}
export {connection2}