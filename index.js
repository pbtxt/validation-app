const express = require('express')
const morgan = require('morgan')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')
//config
const port = 3000
app.set('views', path.join(__dirname, 'src/views'))
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs',
    helpers: require('./src/lib/handlebars.js')
}))

app.set('view engine', '.hbs');
app.use(morgan('dev'));
app.use(require('./src/routes'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./src/routes'));
app.use(require('./src/routes/auth'));

app.listen(port, () => {
  console.log(`Validation app listening at http://localhost:${port}`)
})