const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const location = latitude + ',' + longitude
    const url = 'http://api.weatherstack.com/current?access_key=3d0490aa5b7f8130b44b9fd122bc4aa7&query=' + latitude + ',' + longitude
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to web service.", undefined)
        } else if (response.body.error) {
            callback(response.body.error.info, undefined)
        } else {
            callback(undefined, {
                description: response.body.current.weather_descriptions[0],
                temperature: response.body.current.temperature,
                feelslike: response.body.current.feelslike
            })
        }
    })
}

module.exports = forecast