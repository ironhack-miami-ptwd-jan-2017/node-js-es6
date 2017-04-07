class Animal {
  constructor(theSpecies, theLegs, theHair, theName, theGender) {
    this.species = theSpecies;
    this.legs = theLegs;
    this.hair = theHair;
    this.name = theName;
    this.gender = theGender;
  }

  speak(){
    console.log('Rawr');
  }

  breathe() {
    console.log('Breathe in, breathe out');
  }

  eat() {
    console.log(this.name + ' eats a antelope');
  }
}

var dog = new Animal('cannis familiaris', 4, true, 'Bao', 'cisfemale');
dog.speak();
dog.breathe();
dog.eat();



class Product {
  constructor (name, price) {
    this.name = name;
    this.price = price;
  }

  nameAndPrice () {
    console.log(
      "The product's name is: " + this.name,
      "The product's price is: " + this.price
    );
  }
}


// ----------------------------------------------


var banana = new Product('Banana', 2);
banana.nameAndPrice();

var beer = new Product('Sweetwater 420 APA', 6);
beer.nameAndPrice();
