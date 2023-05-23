"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const createMenuObject_1 = require("../helpers/createMenuObject");
const Pet_1 = require("../models/Pet");
const home = (req, res) => {
    let list = Pet_1.Pet.getAllPets();
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg',
            active: 'active'
        },
        list
    });
};
exports.home = home;
const dogs = (req, res) => {
    let list = Pet_1.Pet.getFromType('dog');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('dogs'),
        banner: {
            title: "Cachorros",
            background: "banner_dog.jpg",
            active: 'active'
        },
        list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = Pet_1.Pet.getFromType('cat');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('cats'),
        banner: {
            title: "Gatos",
            background: "banner_cat.jpg",
            active: 'active'
        },
        list
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    let list = Pet_1.Pet.getFromType('fish');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('fishes'),
        banner: {
            title: "Peixes",
            background: "banner_fish.jpg",
            active: 'active'
        },
        list
    });
};
exports.fishes = fishes;
