import { deleteEvent } from './../controllers/calendar';
import {Router} from 'express';
import { getEvent, getEvents, postEvent, updateEvent} from '../controllers/calendar';
import { calendarValidations } from '../validations/calendar-validations';
import { idValidations } from '../validations/validations';

const routerCalendar = Router();

routerCalendar.get('/', getEvents);
routerCalendar.get('/:id', getEvent);
routerCalendar.post('/', calendarValidations, postEvent);
routerCalendar.delete('/:id',idValidations, deleteEvent);
routerCalendar.post('/', calendarValidations, postEvent);
routerCalendar.put('/:id', idValidations, calendarValidations, updateEvent);

export default routerCalendar;