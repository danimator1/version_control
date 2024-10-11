const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const app = express()


app.use(express.json())

app.use(cors())

app.post('/login', (req, res) => {
    const { username } = req.body
    if (!username) {
        return res.status(400).json({ error: 'Username is required' })
    }

    const token = jwt.sign({ username }, 'secret_key')
    res.json({ token })
})

app.get('/dashboard', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome to the dashboard!' })
})


function authenticateToken(req, res, next) {
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) return res.sendStatus(401)

    jwt.verify(token, 'secret_key', (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}


app.listen(5000, () => console.log('Server running on port 5000'))
