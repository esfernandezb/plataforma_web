const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'admi',
    database: 'tienda',
    port: '5432'
});

const getUsers = async (req, res)=>{
    console.log('hola')
    const response = await pool.query('SELECT * FROM cliente');
    res.status(200).json(response.rows)
}

const createUser = async (req, res)=>{
    const {cedula, nombre, apellido} = req.body;
    var quer = 'INSERT INTO cliente (cedula, nombre, apellido) VALUES (\''+cedula+'\',\''+nombre+'\',\''+apellido+'\')';
    console.log(quer)
    const response = await pool.query(quer);
    console.log(response)
    res.send('usuario creado')
}





module.exports = {
    getUsers,
    createUser
   
};