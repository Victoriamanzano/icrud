import {Router} from 'express';
import {deleteMap, getMap, getMaps, getMarkers, postMap, updateMap} from '../controllers/map';

const routerMap = Router();

routerMap.get('/', getMarkers);
routerMap.get('/', getMaps);
routerMap.get('/:id', getMap);
routerMap.delete('/:id', deleteMap);
routerMap.post('/', postMap);
routerMap.put('/:id', updateMap);

export default routerMap;