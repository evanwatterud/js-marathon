function CrewMember(name) {
  this.name = name;
}

function launchpad(ship, crewMembers, rocket) {
  console.log("Initializing pre-flight procedures... I think?");
  ship.mountPropulsion(rocket);
  console.log("We will now begin the launch of " + ship.name);
  ship.loadCrew(crewMembers);
  console.log("The captain of this voyage will be " + ship.captain().name);
  ship.fuelShip(10);
  countdown(10);
};

function trainCrew(names) {
  var arr = [];
  names.forEach(function(name) {
    var crewMember = new CrewMember(name);
    arr.push(crewMember);
  });
  return arr;
};

var countdown = function (start, fn) {
  if (start == 0) {
    console.log("Blasting off!");
    ship.takeoff();
  } else {
    setTimeout(function() {
      console.log(start);
      countdown(start - 1);
    }, 1000);
  }
}

var ship = {
  name: "Apollo",
  crew: [],
  loadCrew: function(crewMembers) {
    crewMembers.forEach(function(crewMember) {
      crew.push(crewMember);
      console.log(crewMember.name + " has boarded the ship.");
    });
  },
  captain: function() {
    var number = crew.length;
    var random_number = Math.floor(Math.random() * number);
    return crew[random_number];
  },
  propulsion: null,
  mountPropulsion: function(rocket) {
    propulsion = rocket;
    console.log("Engines mounted successfully.");
  },
  fuelShip: function(fuelAmount) {
    propulsion.fuel += fuelAmount;
    console.log("Added " + fuelAmount + " tons of fuel to the ships engines.");
  },
  takeoff: function() {
    if (propulsion.fire()) {
      console.log("Takeoff successful!");
    } else {
      console.log("Takeoff unsuccessful!");
    }
  }
}

var rocket = {
  fuel: 0,
  fire: function() {
    if (this.fuel > 0) {
      this.fuel--;
      console.log("Engines fired.\nCurrent fuel: " + this.fuel);
      return true;
    } else {
      console.log("Engines failed to fire, no fuel.");
      return false;
    }
  }
}

var crewNames = ["Evan", "George", "Sam", "Gustavo", "Fring"];

crew = trainCrew(crewNames);
launchpad(ship, crew, rocket);
