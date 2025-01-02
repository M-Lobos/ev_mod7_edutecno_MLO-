import { dbConfig } from "../config/db.config.js";
import { initModels } from "../utils/db/initModel.js";
import { setupAssociation } from "../utils/db/setupAssociations.js";

export const dbConnect = async () => {
    try {
        await dbConfig.authenticate();
        initModels(dbConfig);
        setupAssociation();
        await dbConfig.sync({ alter: true })

        console.log('Conexión a Postgres desde de Sequelize 🦊')
    } catch (error) {
        console.error('No pudimos conectarnos a la DB 💀', error);
        process.exit(1)
    }
}


