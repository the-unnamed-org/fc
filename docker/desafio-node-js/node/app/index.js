const express = require('express')
const app = express()
const people = require('./people-service')
const nameService = require('./name-service')
const port = 3000

app.get('/', (req, res) => {
    people.getAll().then(results => {
        console.log(results)
        const names = results.map(result => `<li>${result.name}</li>`).join('')
        res.send(`<h1>Full Cycle Rocks!</h1>
              <ul>
                ${names}
              </ul>`)
    })
})

app.listen(port, () => {
    console.log(`starting db...`)
    people.init()
    people.insert(nameService.getRandom())
    console.log(`db started!`)
    console.log(`running in port ${port}`)
})
