const express = require('express')
const path = require('path')
const app = express()
const data = require('./models/item.json')
const bodyParser = require('body-parser')

//view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({
	extended : false
}))
app.use(express.static('public'))

//Middleware
// const middlewareSatu = (req, res, next) =>{
// 	console.log('Middleware Satu')
// 	next()
// }

// const middlewareDua = (req, res, next) =>{
// 	console.log('Middleware Dua')
// 	next()
// }

// app.use(middlewareSatu)
// app.use(middlewareDua)

app.get('/', (req, res) => {
	res.render('index', {
		items: data
	})
})

app.get('/echo', (req, res) =>{ 
	res.render('post')
})
 
app.post('/echo', (req, res) => {
	res.render('post', {
		name : req.body.name
	})

})

app.get('/detail/:id', (req, res) => {
	const item = data.find(d =>{
		return d.id === parseInt(req.params.id)
	})
	res.render('detail', {
		 item: item
	})
})

// app.get('/echo/:name', (req, res) => {
// 	res.send('This is form /echo, Hallo "'+ req.params.name +'"')
// })

// app.get('/pindah', (req, res) =>{
// 	res.redirect('http://localhost:3000/echo/')
// })

app.listen(3000, () => {
	console.log('Server is Running!!')
})
 

