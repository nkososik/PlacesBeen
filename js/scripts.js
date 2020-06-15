//Business Logic for List of Places
function PlaceList() {
  this.places = [];
}

PlaceList.prototype.addPlace = function(place) {
  this.places.push(place);
}

// Business Logic for Places
function Place(city, country, landmarks, season) {
  this.city = city;
  this.country = country;
  this.landmarks = landmarks;
  this.season = season;
}

Place.prototype.fullLocation = function() {
  return this.city + ", " + this.country;
}

Place.prototype.iLove = function() {
  return "I Love " + this.city + "!!";
}

let placeList = new PlaceList();
let place = new Place("Portland", "United States", ["St. John's Bridge", "Burnside Skatepark", "Multnomah Falls"], "Spring");
let place2 = new Place("Seattle", "United States", ["Space Needle", "Pike Place Market", "CHAZ"], "Summer");
placeList.addPlace(place);
placeList.addPlace(place2);

// User Interface Logic