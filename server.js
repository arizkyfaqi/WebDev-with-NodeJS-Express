const express = require('express')

const app = express()

//Middleware
const middlewareSatu = (req, res, next) =>{
	console.log('Middleware Satu')
	next()
}

const middlewareDua = (req, res, next) =>{
	console.log('Middleware Dua')
	next()
}

app.use(middlewareSatu)
app.use(middlewareDua)

app.get('/', (req, res) => {
	res.send('Hello Hacktive8!')
})

app.get('/echo/:name', (req, res) => {
	res.send('This is form /echo, Hallo "'+ req.params.name +'"')
})

app.listen(3000, () => {
	console.log('Server is Running!!')
})
 

