const express = require('express')
const app = express()
require ('dotenv').config();

const hbs = require('hbs');


//servir contenido estático
app.use(express.static('public'));
app.set('view engine', 'hbs');

const port = process.env.PORT;


hbs.registerPartials(__dirname + '/views/partials');


app.get('/',  (req, res)=> {
  res.render('home', {nombre: 'Nuri',
                      titulo: 'Curso de Node'});
});
app.get('/generic',  (req, res)=> {
  res.render('generic', {nombre: 'Nuri',
                      titulo: 'Curso de Node'});
});
app.get('/elements',  (req, res)=> {
  res.render('elements', {nombre: 'Nuri',
                      titulo: 'Curso de Node'});
});

// app.get('/generic',  (req, res)=> {
//   res.render('generic' + '/view/generic.hbs')
// });
// app.get('/elements',  (req, res)=> {
//   res.sendFile(__dirname + '/public/elements.html')
// });
// app.get('/',  (req, res)=> {
//   res.send('Hola')
// });

app.get('/generic',  (req, res)=> {
    res.sendFile(__dirname + '/public/generic.html')
  });
  app.get('/elements',  (req, res)=> {
    res.sendFile(__dirname + '/public/elements.html')
  });
  app.get('*',  (req, res)=> {
    res.sendFile(__dirname + '/public/404.html')
  });

app.listen(port, ()=>{
    console.log (`Example app listening at http://localhost:${port}`);
});