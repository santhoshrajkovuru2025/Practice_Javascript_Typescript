
class Animal{
  sound(){
console.log('makes sound')
 }
}

class Dog extends Animal{

    barks(){
        console.log('barks')
    }
}
let a = new Dog();
a.sound();
a.barks();