import { Request, Response } from "express";

import { createMenuObject } from '../helpers/createMenuObject'
import { Pet } from '../models/Pet';

export const home = (req:  Request, res: Response)=>{
    let list = Pet.getAllPets();
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg',
            active: 'active'
        },
        list
    })
}

export const dogs = (req: Request, res: Response) =>{
    let list = Pet.getFromType('dog');
    res.render('pages/page', {
        menu: createMenuObject('dogs'),
        banner: {
            title: "Cachorros",
            background: "banner_dog.jpg",
            active: 'active'
        },
        list
    });
}

export const cats = (req: Request, res: Response) =>{
    let list = Pet.getFromType('cat')
    res.render('pages/page', {
        menu: createMenuObject('cats'),
        banner: {
            title: "Gatos",
            background: "banner_cat.jpg",
            active: 'active'
        },
        list
    })
}

export const fishes = (req: Request, res: Response) =>{
    let list = Pet.getFromType('fish');
    res.render('pages/page', {
        menu: createMenuObject('fishes'),
        banner: {
            title: "Peixes",
            background: "banner_fish.jpg",
            active: 'active'
        },
        list
    });
}