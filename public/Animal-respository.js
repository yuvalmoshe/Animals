class AnimalRepository {
    constructor(){
        this.animals = [];
    }

getAnimal(){
    return $.get('/animal').then((data)=>{
        this.animals = data;
    })
};

addAnimal(animalText, magicText){
    return $.post ('/animal', {text: animalText, magic: magicText}).then((data)=>{
        this.animals.push(data)
    })
}

removeAnimal(magicIndex){
    let id= this.animals[magicIndex]._id
    return $.ajax({
        method: "DELETE",
        url: '/animal/' + id
    })
    .then(()=>{
        this.animals.splice(magicIndex, 1)
    }).fail((err)=>{
        if (err) {console.log(err)}
    })
    
}
}

export default AnimalRepository;