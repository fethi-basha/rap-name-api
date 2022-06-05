const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 Savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joeseph',
        'birthlocation': 'London, England'
    },
    'Chance the Rapper': {
        'age':29,
        'BirthName': 'Chancelor Bennett',
        'BirthLocation': 'Chicago, USA'
    },
    'unknown': {
        'age':'unknown',
        'BirthName': 'unknown',
        'BirthLocation': 'unknown'
    }
}

app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/index.html')

})

app.get('/api/:name', (request,response)=> {
    const rapperName = request.params.name.toLocaleLowerCase()
    if(rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
    
})


app.listen(PORT, ()=> {
    console.log(`The server is running on port ${PORT}`)

})