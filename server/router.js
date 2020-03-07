const UserController = require('./controllers/userController')

module.exports = app => {
  app.get('/api', (req, res) => {
    res.send({
      msg: 'Hello Node'
    })
  })

  app.get('/users/:id', UserController.getUserById)
  app.put('/users/:id', UserController.update)
  app.delete('/users/:id', UserController.delete)
  app.post('/users', UserController.register)
}
