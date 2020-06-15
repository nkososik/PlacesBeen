//Business Logic for List of Places
function PlaceList() {
  this.places = [];
}

PlaceList.prototype.addPlace = function(place) {
  this.places.push(place);
}

// Business Logic for Places
function Place(name, location, landmarks, season) {
  this.name = name;
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
}