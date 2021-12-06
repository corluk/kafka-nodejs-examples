import { Kafka } from "kafkajs"; 
(async ()=>{
    const kafka = new Kafka({
        clientId: 'my-app',
        brokers: ['pkc-lzoyy.europe-west6.gcp.confluent.cloud:9092'],
        ssl: true , 
        sasl:{
            mechanism:"plain" ,
            username: "LE3X2QKGA7HETUGC",
            password:"Jyj7DEKob3OmLXAAJpnAP4+fJ1HbxZcRAAEq8XJBSwbLFgmnKMkE2uhJDvH46s/a"
        }

      }) 
      const producer = kafka.producer()
      await producer.connect()
      
      await producer.send({
        topic: 'test-topic3',
        messages: [
          { value: 'Hello KafkaJS user!' },
        ],
      })
      producer.disconnect()
})()
