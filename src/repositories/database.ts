import sqlite3 from 'sqlite3'

const DBSOURCE = 'db.sqlite3'

const SQL_ITENS_CREATE = `
        CREATE TABLE itens (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            descricao TEXT
        )`

        const database = new sqlite3.Database(DBSOURCE, (err) => {
            if (err) {
                console.error(err.message)
                throw err
            } else {
                console.log('Base de dados conectada com sucesso.')
                database.run(SQL_ITENS_CREATE, (err) => {
                    if (err) {
                    } else {
                        console.log('Tabela itens criada com sucesso.')
                    }
                })
            }
        })
        export default database