class AnimalRender{
    constructor() {
        this.$animals = $(".animals");
        // this.animalsTemplate = $('#animals-template').html();
    }
render (animals){
    this.$animals.empty();
    const animal = $('#animals-template').html();
    const template = Handlebars.compile(animal)
    let newHTML = template({text: animals})
    $('.animals').append(newHTML)
   }
}
export default AnimalRender;