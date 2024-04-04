import { Router } from 'express';
import { chartjsValidations } from '../validations/chartjs';
import { getChartjs, getChartsjs, postChartjs } from '../controllers/chartjs';

const routerChartjs = Router();

routerChartjs.get('/', getChartsjs);
routerChartjs.get('/:id', getChartjs);
routerChartjs.post('/', chartjsValidations, postChartjs);

export default routerChartjs;