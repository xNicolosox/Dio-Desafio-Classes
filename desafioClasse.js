class hero{
    constructor(name, age, type){
    this.name = name
    this.age = age
    this.type = type
    }
      
    atack(){
    let atacks
    if(this.type == "mago"){
        atacks = "magia"
    } else if(this.type  == "guerreiro"){
        atacks = "espada"
    } else if(this.type  == "monge"){
        atacks = "artes marcias"
    } else if(this.type  == "ninja"){
        atacks = "shuriken"
    } else {
          atacks = "as mãos"
    }
        
      console.log(`o ${this.type} atacou usando ${atacks}`)
        
      }
  }
  
const heroes = [
    new hero("wirna", 22, "mago"),
    new hero("Nicolas", 20, "guerreiro"),
]


for (let hero of heroes) {
    hero.atack();
}
