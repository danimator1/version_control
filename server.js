const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()


app.post('/login', (req,res) => {
    const token = jwt.sign({username: req.body.username }, 'secret_key')
    res.json({ token })

})

app.get('/dashboard', authenticateToken, (req,res) => {
    res.json({ message: 'Welcome to the dashboard!' })

})

function authenticateToken (req,res, next) {
    const token = req.header('Authorization')
    if (!token) return res.sendStatus(401)
    jwt.verify(token, 'secret_key', (err,user) => {
     if (err) return res.sendStatus(403)
        req.user = user
        next()

        })
}


app.listen(3000, () => console.log('Server running on port 3000'))