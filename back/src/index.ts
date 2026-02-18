import server from './server';
import { PORT } from './config/envs';
import "reflect-metadata";
import { AppDataSource } from './config/data-source';

AppDataSource.initialize()
    .then(() => {
        console.log('Conexion a la Base de Datos lograda con exito');
        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    })
    .catch((error) => {
        console.error('Error al conectar a la Base de Datos:', error);
    });