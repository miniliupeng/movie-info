const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { sequelize } = require('./models')

const app = express()
app.use(bodyParser.json())
app.use(morgan('combined'))

require('./router')(app)

sequelize
  .sync()
  .then(() => {
    console.log('数据库连接成功')
    app.listen(3000, () => console.log('服务在3000端口启动'))
  })
  .catch(err => {
    console.log('据库连接失败原因：', err)
  })
