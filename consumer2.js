import { Kafka } from "kafkajs"; 
(async ()=>{
     
    
            const kafka = new Kafka({
                clientId : "consumer1",
                brokers:["192.168.1.26:9094"]
            }) 
        const consumer = kafka.consumer({groupId:"group1"})
        await consumer.connect()
        await consumer.subscribe({ topic: 'test-topic_x', fromBeginning: true })

        await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
            value: message.value.toString(),
            })
        },
        })
})()
