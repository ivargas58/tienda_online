const dotenv= require('dotenv')
dotenv.config()

const{MongoClient}= require('mongodb')

const client = new MongoClient(process.env.MONGO_URL) 

async function connectToMongoDB()
{
    try
    {
        await client.connect()
        console.log("Conectado a MONGODB");
        return client
    }catch(error)
    {
        console.log('Error al conectar con Mongo DB');
        return null
    }
    
}

async function disconnecttoMongoDB() {
    try {
        await client.close();
        console.log("Desconectado de MongoDB");
    } catch (error) {
        console.log("Error al desconectar de MongoDB", error);
    }
}

module.exports = {connectToMongoDB, disconnecttoMongoDB}