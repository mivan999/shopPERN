require('dotenv').config()
const express =require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors =require('cors')
const router = require('./routes/index')
const PORT = process.env.PORT || 5000
const errorHandler=require('./middleware/ErrorHandlingMiddleware')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api',router)

//обработка ошибок
app.use(errorHandler)
const start =async()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()//сверяет состояние бд со схемой данных
        app.listen(PORT,()=>console.log(`Server start on port ${PORT}`))
    } catch(e){
        console.log(e)
    }
}

start()