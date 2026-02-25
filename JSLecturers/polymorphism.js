
class Animal {

    sound(){
        console.log('Some Sound');
    }
}
class Dog extends Animal{
     sound(){
        console.log('Bow Bow')
     }
}
class Cat extends Animal{
    sound(){
        console.log('Meow Meow')
    }
}
let animals = [new Dog(), new Cat()];
animals.forEach(a=>a.sound()); // using forEach loop

