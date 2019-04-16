var Bee = function() {
// 	Create a Bee class(subclass), in pseudoclassical style, with:
// call the Grub superclass
 Grub.call(this);
 // an age property that is set to 5
 this.age = 5;
 // a color property that is set to yellow
 this.color = 'yellow';
// a food property that is inherited from grub
//if wo do nothing here, will inherit this.food from superclass.
// an eat method that is inherited from grub
// a job property that is set to keep on growing
this.job = 'keep on growing';
};

// subclass extends superclass
//set the prototype
Bee.prototype = Object.create(Grub.prototype);
// set the constructor
Bee.prototype.constructor = Bee;




