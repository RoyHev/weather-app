const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]
if (!location) {
    console.log("No location provided.")
} else {
    geocode(location, (error, data) => {
        if (error) {
            // instead of using an else to call the function
            return console.log(error)
        }
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecastData)
        })
    })
}
