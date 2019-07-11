var fs = require('fs')

var data = {
    name: 'Bob'
}

fs.write('data.json', JSON.stringify(name), (err) => {
    console.log('write finished', err)
})