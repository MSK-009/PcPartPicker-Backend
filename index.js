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
app.use('/api/gpu', require('./routes/gpu'))
app.use('/api/ram', require('./routes/ram'))
app.use('/api/ssd', require('./routes/ssd'))



app.listen(port, () => {
  console.log(`PcPartPicker backend listening on port http://localhost:${port}`)
})