import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://alessandrabaruki:<db_password>@web2.m87xe.mongodb.net/?retryWrites=true&w=majority&appName=WEB2');
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Erro ao conectar ao MongoDB: ${error.message}`);
    } else {
      console.error("Erro desconhecido ao conectar ao MongoDB");
    }
    process.exit(1);
  }
};

export default connectDB;
