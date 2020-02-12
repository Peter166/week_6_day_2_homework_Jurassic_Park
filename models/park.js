const Park = function(name, ticketPrice){
  this.name = name
  this.ticketPrice = ticketPrice
  this.dinosaurs = []
};

Park.prototype.addDinasour = function(dinosaur){
  this.dinosaurs.push(dinosaur)
};
Park.prototype.deleteDinasour = function(dinosaur){
  this.dinosaurs.splice(this.dinosaurs.indexOf(dinosaur), 1);
}

Park.prototype.count = function () {
  return this.dinosaurs.length;
};
Park.prototype.mostAttracts = function(){
  best = 0
  for (dino of this.dinosaurs){
    if (dino.guestsAttractedPerDay >= best || best.guestsAttractedPerDay >= dino.guestsAttractedPerDay){
      best = dino
    }
  }
  return best
};

Park.prototype.findSpecie = function(specie){
  array =[]
  for( dino of this.dinosaurs){
    if (dino.species === specie){
    array.push(dino)
  }
  }
  return array
};


Park.prototype.totalNumberOfVisitors = function(){
  total =0
  for (dino of this.dinosaurs){
    total += dino.guestsAttractedPerDay
  }
  return total
}

Park.prototype.totalNumberOfVisitorsPerYear = function(){

   return this.totalNumberOfVisitors * 365
}


Park.prototype.totalRevenueOfTheYear = function(){
  return (this.totalNumberOfVisitors * 365) * 5
}
module.exports = Park
