const express = require('express')
const database = require('../db')
const utils = require('../utils')
const router = express.Router()

router.get("/", (request, response) => {
    const connection = database.openConnection()
    const statement = ` SELECT * FROM movie `
    
    connection.query(statement, (error, result) => {
        response.send(utils.checkresult(error, result))
        connection.end()
    })
})

router.post("/add", (request, response) => {
    const {movie_title,movie_release_date ,movie_time,director_name}=request.body
    const connection = database.openConnection()
    const statement = ` INSERT INTO movie VALUES(default,'${movie_title}','${movie_release_date}','${movie_time}','${director_name}')`
    
    connection.query(statement, (error, result) => {
        response.send(utils.checkresult(error, result))
        connection.end()
    })
})

router.put("/edit/:movie_id", (request, response) => {
    const { movie_id } = request.params
    const{movie_release_date ,movie_time}=request.body
    const connection = database.openConnection()
    const statement = ` UPDATE movie SET  movie_release_date= '${movie_release_date}',  movie_time='${movie_time}' WHERE movie_id= '${movie_id}' `
    
    connection.query(statement, (error, result) => {
        response.send(utils.checkresult(error, result))
        connection.end()
    })
})

router.delete("/delete/:movie_id", (request, response) => {
    const { movie_id } = request.params
    
    const connection = database.openConnection()
    const statement = `DELETE FROM movie WHERE movie_id= '${movie_id}' `
    
    connection.query(statement, (error, result) => {
        response.send(utils.checkresult(error, result))
        connection.end()
    })
})

module.exports=router