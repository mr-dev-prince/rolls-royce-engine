import sequelize from "./dbConnect";

const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ force: false });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export { connectDb };