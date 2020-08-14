const proffys = [
    { name: "Diego Fernandes",
      avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
      whatsapp: "91919293",
      bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões,.",    
      subject: "Química",
      cost:"20",
      weekday: [0],  
      time_from: [720],
      time_to: [1220]
    },
    { name: "Daniele Silva",
      avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
      whatsapp: "91919293",
      bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões,.",    
      subject: "Química",
      cost:"20",
      weekday: [0],  
      time_from: [720],
      time_to: [1220]
    }
  ]

  const subjects = [
    "Artes",
    "Biologia", 
    "Ciências",
    "Educação Física" ,
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
  ]

  const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ]
// functions
function getSubject(subjectNumber){
  const position = +subjectNumber -1
  return subjects[position]
}

function pageLanding(req,res){
    return res.render('index.html')
}  
function pageStudy(req,res){
    const filters = req.query   
    return res.render('study.html',{proffys, subjects,weekdays, filters})
}  
function pageGiveClasses(req,res){
  const data = req.query
  // add proffy somente se conter daddos
  const isNotEmpty = Object.keys(data).length != 0

  if (isNotEmpty) {
    data.subject = getSubject(data.subject)
    proffys.push(data)
    return res.redirect('study')
  }
  // /se não, exibir pagina de cadastro
    return res.render('give-classes.html', {subjects, weekdays})
}  
// server config

const express = require('express')
const server = express()

// nunjucks config (template engine)

const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,

})

server
// renderizar arquivos estáticos (css, scripts, imagens)
.use(express.static('public'))

// routs
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)

//server Start 
.listen(5580)
console.log('servdor rodando')

