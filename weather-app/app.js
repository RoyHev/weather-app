const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]
if (!location) {
    console.log("No location provided.")
} else {
    geocode(location, (error,{longitude, latitude, location} = {}) => {
        if (error) {
            // instead of using an else to call the function
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}
