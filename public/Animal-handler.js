class AnimalHandler {
    constructor(AnimalRepository, AnimalRender) {
        this.AnimalRepository = AnimalRepository;
        this.AnimalRender = AnimalRender;
        this.$animals = $(".animals");
    }
    onLoad() {
        this.AnimalRepository.getAnimal().then(() => {
            this.AnimalRender.render(this.AnimalRepository.animals)
        });

    }

    registerAddAnimal() {
        $('#addAnimal').on('click', () =>{
            let $input = $("#animalText");
            let $input1 = $("#magicText");
            if ($input.val() === "" || $input1.val() === ""){
                alert ("Please enter text!")
            }
            else {
                this.AnimalRepository.addAnimal($input.val(), $input1.val()).then(()=>{
                    this.AnimalRender.render(this.AnimalRepository.animals)
                })
                $input.val("");
                $input1.val("");
            }
        })
    }
    registerRemoveAnimal(){
        this.$animals.on('click', '.remove-animal', (event)=>{
            let index = $(event.currentTarget).closest('#animal').index();
            this.AnimalRepository.removeAnimal(index).then(()=>{
                this.AnimalRender.render(this.AnimalRepository.animals);
            })
            .fail((err)=>{
                if (err) alert( err)
        })
    });
}
}

export default AnimalHandler;

