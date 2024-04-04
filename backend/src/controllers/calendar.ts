import { Request, Response} from 'express';
import { validationResult } from 'express-validator';
import { calendarValidations } from '../validations/calendar-validations';
import events from '../models/calendar';



export const getEvents = async(req: Request, res: Response) => {
    const listEvents = await events.findAll() 
    res.json(listEvents)

}

export const getEvent = async (req: Request, res: Response) => {
    const { id } = req.params;
     const event = await events.findByPk(id);

     if(event) {
        res.json(event) 
     } else {
        res.status(404).json({
            msg: `There is no event with the id!${id}`
        })
     }
    
}

export const deleteEvent = async (req: Request, res: Response) => {
    const { id } = req.params;
    const event = await events.findByPk(id);
     if(!event) {
        res.status(404).json({
            msg: `There is no event with the id!${id}`
        })
     } else {
        await event.destroy();
        res.json({
            msg: `The client was successfully deleted!`
        })
     }
}

export const postEvent = [ ...calendarValidations, async (req: Request, res: Response) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

        const { body } = req;
             
        try{
            await events.create(body);
    
            res.json({
                msg: `The event was added successfully!`
           })
        }catch (error) {
            console.log(error);
            res.json({
                msg: `Oops some error occurred, contact support!`
           })
        }
        
    }
]

export const updateEvent = [ ...calendarValidations, async (req: Request, res: Response) => {
        const errors = validationResult(req);
    
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    
        const { id } = req.params;
        const { body } = req;
        const event = await events.findByPk(id);
        
         try {
          
            if(!event) {
               res.status(404).json({
                    msg: `There is no event with the id!${id}`
                });

            } else {
               await event.update(body);  
                res.json({
                    msg: `The event was successfully updated!`
                });
            }
             
         } catch (error) {
                res.json({
                msg: `Oops some error occurred, contact support!`
           });
         }
    
    }
    ]
    