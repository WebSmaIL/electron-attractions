const pg = require('pg');

const connectionIsCreate = false;
const submitButton = document.getElementById('button');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');

const createConnection = (login, password) => {
    try {
        const connectionData = {
            user: login,
            host: "localhost",
            database: "attractions_db",
            password: password,
            port: 5432,
        };
        
        const pool = new pg.Pool(connectionData);
        return pool;
    } catch (error) {
        return null;
    }
}

let connectionPool;
submitButton.addEventListener('click', async () => {
        connectionPool = createConnection(loginInput.value, passwordInput.value);
        connectionPool.connect().then(res=>console.log(res))
        
})




