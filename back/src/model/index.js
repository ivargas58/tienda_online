const { connectToMongoDB, disconnecttoMongoDB } = require('../config/index');

class ProductosModel {
    static async getAll() {
        try {
            const clientMongo = await connectToMongoDB();
            if (!clientMongo) {
                throw new Error('Error al conectar con Mongo');
            }
            const result = await clientMongo.db('tienda').collection('productos').find().toArray();
            await disconnecttoMongoDB();
            console.log(result);
            if (!result) return { data: null, error: true };
            return { data: result, error: false };
        } catch (error) {
            console.error(error);
            return { data: null, error: true };
        }
    }
}

module.exports = ProductosModel;
