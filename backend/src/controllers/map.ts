

import { Request, Response } from "express";
import Map from "../models/map";


export const getMarkers = async (req: Request, res: Response) => {
    const maps = await Map.findAll()
    
    res.status(200).json(maps)
 }
 
export const getMaps = async (req: Request, res: Response) => {
    const listMaps = await Map.findAll();

    res.json( listMaps );
}

export const getMap = async (req: Request, res: Response) => {
    const { id } = req.params;
    const map = await Map.findByPk(id);

    if (map) {
        res.json(map);
    } else {
        res.status(404).json({
            msg: `Oops! ERROR. There is no Map with the id${id}`
        });
    };
}

export const deleteMap = async (req: Request, res: Response) => {
    const { id } = req.params;
    const map = await Map.findByPk(id);

    if (!map) {
        return res.status(404).json({
            msg: `Oops! ERROR. There is no Map with the id ${id}!`
        });
    } else {
        await map.destroy();
        res.json({
            msg: `Map with id ${id} has been successfully deleted!`
        });
    }
}

export const postMap = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Map.create(body);

        res.json({
            msg: 'Map added successfully!',
        });

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Oops! Error adding Map'
        });
    }
}

export const updateMap = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    const map = await Map.findByPk(id);

    try {
        if (!map) {
            res.status(404).json({
                msg: `Oops! ERROR. There is no Map with the id ${id}`
            });
        } else {
            await map.update(body);
            res.json({
                msg: `The map was successfully updated!`
            });
        }

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Oops! some error occurred, contact support!'
        });
    }


}