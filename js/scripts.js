//Business Logic for List of Places
function PlaceList() {
  this.places = [];
  this.currentId = 0;
}



// Business Logic for Places
function Place(name, location, landmarks, season) {
  this.name = name;
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
}