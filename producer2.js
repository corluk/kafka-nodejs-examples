import { Kafka } from "kafkajs"; 
(async ()=>{
    const kafka = new Kafka({
        clientId: 'my-app',
        brokers: ['192.168.1.26:9094'],
        

      }) 
      const producer = kafka.producer()
      await producer.connect()
      
      await producer.send({
        topic: 'test-topic_x',
        messages: [
          { value: 'Hello KafkaJS user!' },
        ],
      }) 
      producer.disconnect()
})()
