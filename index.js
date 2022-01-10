const express = require('express');
const app = express();
const mqtt = require('mqtt');

const portMqtt = 1883;
const host = '54.175.203.118';
const clientId = `mqtt_${ Math .random (). toString ( 16 ) .slice ( 3 )} `
const port = 80;

const client = mqtt.connect( 'mqtt://54.175.203.118:1883' , {
    
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: '',
    password: '',
    reconnectPeriod: 1000,

} );
const topic = 'led'

client.on('connect', () => {
    console.log('Connected')
    client.subscribe( topic , () => {
    console.log(`Subscribe to topic ${topic}`)
    })
  })

  client.on('message', (topic, payload) => {
    console.log('Received Message:', payload.toString())
  })



app.get('/', (req, res) => {
    res.status(200).send("ok");
    console.log('Ok!');
});



app.listen(port, ( req, res ) => {
    console.log('Serve listener');
} );
