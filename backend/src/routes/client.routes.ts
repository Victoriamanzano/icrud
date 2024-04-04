import { Router } from 'express';
import { postClient ,deleteClient, getClient, getClients, updateClient } from '../controllers/client';

const routerClient = Router(); 

routerClient.get('/', getClients);
routerClient.get('/:id', getClient);
routerClient.delete('/:id', deleteClient);
routerClient.post('/', postClient);
routerClient.put('/:id', updateClient);

export default routerClient;