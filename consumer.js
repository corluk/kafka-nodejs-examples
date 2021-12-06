import  KafkaNode from "kafka-node" 

const client = new KafkaNode.KafkaClient({
    KafkaHost : "localhost:9091,localhost:9092"
})
const consumer = new KafkaNode.Consumer(
    client,
    [
        { topic: 'topic1', partition: 0 } 
    ],
    {
        autoCommit: false
    }
);
consumer.on('message', function (message) {
    console.log(message);
});