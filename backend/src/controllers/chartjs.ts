import { Request, Response } from "express";
import { validationResult } from 'express-validator';
import Chartjs from "../models/chartjs";
import { chartjsValidations } from "../validations/chartjs";


export const getChartsjs = async (req: Request, res: Response) => {
    const listChard = await Chartjs.findAll();

    res.json( listChard );
}

export const getChartjs = async (req: Request, res: Response) => {
    const { id } = req.params;
    const chartjs = await Chartjs.findByPk(id);

    if (chartjs) {
        res.json(chartjs);
    } else {
        res.status(404).json({
            msg: `Oops! ERROR. There is no Chart with the id${id}!`
        });
    };
}

export const postChartjs = [
    ...chartjsValidations,

    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { body } = req;

        try {
            await Chartjs.create(body);

            res.json({
                msg: 'Chart added successfully!',
            });

        } catch (error) {
            console.log(error);
            res.json({
                msg: 'Oops! Error adding Chartjs'
            });
        }
    }
];









