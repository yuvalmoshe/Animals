import AnimalRepository from './Animal-respository.js'
import AnimalRender from './Animal-render.js'
import AnimalHandler from './Animal-handler.js'

let animalRepository = new AnimalRepository();
let animalRender = new AnimalRender();
let animalHandler = new AnimalHandler(animalRepository, animalRender);

animalHandler.onLoad();
animalHandler.registerAddAnimal();
animalHandler.registerRemoveAnimal();
