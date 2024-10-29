const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')


connectToMongo();

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/processor', require('./routes/processor'));
app.use('/api/psu', require('./routes/psu'))



app.listen(port, () => {
  console.log(`PcPartPicker backend listening on port http://localhost:${port}`)
})