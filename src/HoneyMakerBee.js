var HoneyMakerBee = function() {
// 	Create a HoneyMakerBee class, in pseudoclassical style, with:
// call the Bee superclass
Bee.call(this);

// an age property that is set to 10
this.age = 10;
this.job = 'make honey';
// a job property that is set to make honey
// a color property inherited from bee that is set to yellow
// a food property that is inherited from grub
// an eat method that is inherited from grub
// a honeyPot property that is set to 0
this.honeyPot = 0;
};

// set the prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);
// set the constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// a makeHoney method that adds 1 to that honeyBee\'s honeyPot
HoneyMakerBee.prototype.makeHoney = function() {
	this.honeyPot += 1;

};
// a giveHoney method that subtracts 1 from that honeyBee\'s honeyPot
HoneyMakerBee.prototype.giveHoney = function() {
	if(this.honeyPot > 0) {
		this.honeyPot -= 1;
	}
} 