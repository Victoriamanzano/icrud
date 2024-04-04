import { Request, Response} from 'express';
import Client  from '../models/client';
import { validationResult } from 'express-validator';
import { clientValidations } from '../validations/client';



export const getClients = async(req: Request, res: Response) => {
    const listClients = await Client.findAll() 
    res.json(listClients)

}

export const getClient = async (req: Request, res: Response) => {
    const { id } = req.params;
     const client = await Client.findByPk(id);

     if(client) {
        res.json(client) 
     } else {
        res.status(404).json({
            msg: `There is no client with the id!${id}`
        })
     }
    
}

export const deleteClient = async (req: Request, res: Response) => {
    const { id } = req.params;
    const client = await Client.findByPk(id);
     if(!client) {
        res.status(404).json({
            msg: `There is no client with the id!${id}`
        })
     } else {
        await client.destroy();
        res.json({
            msg: `The client was successfully deleted!`
        })
     }
}

export const postClient = [ ...clientValidations, async (req: Request, res: Response) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

        const { body } = req;
             
        try{
            await Client.create(body);
    
            res.json({
                msg: `The client was added successfully!`
           })
        }catch (error) {
            console.log(error);
            res.json({
                msg: `Oops some error occurred, contact support!`
           })
        }
        
    }
]

export const updateClient = [ ...clientValidations, async (req: Request, res: Response) => {
        const errors = validationResult(req);
    
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    
        const { id } = req.params;
        const { body } = req;
        const client = await Client.findByPk(id);
        
         try {
          
            if(!client) {
               res.status(404).json({
                    msg: `There is no client with the id!${id}`
                });

            } else {
               await client.update(body);  
                res.json({
                    msg: `The client was successfully updated!`
                });
            }
             
         } catch (error) {
                res.json({
                msg: `Oops some error occurred, contact support!`
           });
         }
    
    }
    ]
    