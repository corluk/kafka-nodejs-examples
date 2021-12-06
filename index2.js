import  KafkaNode from "kafka-node" 

const client = new KafkaNode.KafkaClient({
    KafkaHost : "localhost:9091,localhost:9092",
   
})
const producer = new KafkaNode.Producer(client)
 
const payloads = [
    { topic: 'topic1', messages: 'hi', partition: 0 },
    { topic: 'topic2', messages: ['hello', 'world', "km"] }
];

producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log("sended")
        console.log(data);
    });
});