import { Request, Response } from "express";

export const home = (req:Request, res:Response)=>{
    res.send('home do PageController')
    // res.render('pages/page');
}

export const dogs = (req:Request, res:Response) =>{
    res.send('dogs do PageController')
    // res.render('pages/dogs');
}

export const cats = (req:Request, res:Response) =>{
    res.send('cats do PageController')
    // res.render('pages/cats');
}

export const fishes = (req:Request, res:Response) =>{
    res.send('fishes do PageController')
    // res.render('pages/fishes');
}