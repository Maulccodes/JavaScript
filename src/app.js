const express = require('express') //load the express package
const app = express() // make an instance of express package
const port = 3000
const path = require('path');

//console.log("Starting server now.")
//app.com - Home Page
//app.com/about - ABOUT page
//app.com/help - HELP page

//app.get(path, callback)
//callback => (req, res)// req->Request - handles requests headers and other
//parameters
//res -> Response has lot of methods in it, res.send()

//console.log(_dirname);
const publicDirectoryPath = path.join(__dirname,'../public')
console.log(publicDirectoryPath)

const viewsDirectoryPath = path.join(__dirname, '../templates/views');
app.set('view engine','ejs');
app.set('views', viewsDirectoryPath);

/*Setup static directory to serve
*You can tell Express which directory contains your static
*files (HTML, CSS, images, and client-side JavaScript)
using app.use(express.static(path))
*/

app.use(express.static(publicDirectoryPath));

//HOME Page -> '/' or ''
app.get('', (req, res) => {
  res.render('index',{
    title: "Home",
    name: "Jamal Clair",
    course: 'CSC 174'
  });
})

//ABOUT Page -> /about
app.get('/about', (req, res) => {
  res.render('about',{
    title:'About Page',
    name:'Jamal Clair',
    course:'CSC 174'
  })
})


//HELP Page -> '/help
app.get('/help', (req, res) => {
  res.render('help',{
    title:'Help Page',
    helpText:'This is a helpful text on Help Page',
    name:'Jamal Clair',
    course:'CSC 174'
  })
})


//WEATHER Page -> '/weather
app.get('/weather', (req, res) => {
  res.send('Hello Welcome to my Express App WEATHER page!!')
})

//404 errors
app.use('/help', (req,res)=>{
  res.status(404).render('404',{
    title:"404 Page",
    errorType:"Help Page Article not Found!",
    name:'Jamal Clair',
    course:'CSC 174'
  })
})

app.use((req,res)=>{
  res.status(404).render('404',{
    title:"404 Page",
    errorType:"Page not Found!",
    name:'Jamal Clair',
    course:'CSC 174'
  })
})


//Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log('In order to stop the server hit CTRL + C')
})
