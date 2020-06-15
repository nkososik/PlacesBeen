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

//pseudo form code
let placeList = new PlaceList();
let place1 = new Place("Portland", "United States", ["St. John's Bridge", " Burnside Skatepark", " Multnomah Falls"], "Spring");
let place2 = new Place("Seattle", "United States", ["Space Needle", " Pike Place Market", " CHAZ"], "Summer");
placeList.addPlace(place1);
placeList.addPlace(place2);

// User Interface Logic
$(document).ready(function() {
  $("#place1").click(function() {
    $("#placeProperties").append("<li>" + place1.city +"</li>");
    $("#placeProperties").append("<li>" + place1.country +"</li>");
    $("#placeProperties").append("<li>" + "Landmarks: " + place1.landmarks +"</li>");
    $("#placeProperties").append("<li>" + place1.season +"</li>");
  });
  $("#place2").click(function() {
    $("#placeProperties").append("<li>" + place2.city +"</li>");
    $("#placeProperties").append("<li>" + place2.country +"</li>");
    $("#placeProperties").append("<li>" + "Landmarks: " + place2.landmarks +"</li>");
    $("#placeProperties").append("<li>" + place2.season +"</li>");
  });
});