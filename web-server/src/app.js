const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()

// making sure that index.html is loaded in the root.
app.use(express.static(path.join(__dirname, '../public')))

app.get('/weather', (req, res) => {
    res.send({
        temparature: 30,
        feelslike: 28,
        description: "partly cloudy",
        location: "Los Angeles"
    })
})
app.listen(3000, () => {
    console.log("Server is up on port 3000.")
})

