console.log("Javascript clientside file loaded")

fetch('https://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

fetch('http://localhost:3000/weather?address=boston+usa').then((response) => {
    response.json().then((data)=>{
        if (data.error){
            console.log("Error")
        } else {
            console.log(data.location)
            console.log(data.forecast)
    
        }

    })
})