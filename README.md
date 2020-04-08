# Shower In Place
Website to show upcoming meteor showers from your current location, or from user input

Team members:
 - Jeffery Hone
 - Brandon Bringhurst
 - Jonathan Meidell
 - Aaron Bertagnole

## Phase One
Create website to graph location using a location by IP API, taking the longitude and latitude that is provided and inputing it into meteor shower API to pull data when the user will beable to see the next meteor shower.

Tasks:
 - [ ] Create polished HTML layout with valid css and html
 - [ ] Grab users location by ip address and store it in varables *( userLat, userLong, userZip )*
 - [ ] Grab meteor showers events from api using the user location variables
 - [ ] Display when the next meteor shower is going to be within their area.

APIs Used:
 - https://ipdata.co/  *( Location By Ip Address )*
 - https://www.amsmeteors.org/members/imo_api/ *( Meteor Shower Events )*
 - https://ssd-api.jpl.nasa.gov/doc/cad.html *( Nasa Close Encouter Events )*

## Phase Two
Create feature to beable to search by zip, city/state and distance away from location to search for.

No new API's used


## Phase Three
Create feature to book hotel at city where shower is happening on the specific date

APIs Used:
 - https://developer.hotelbeds.com/docs/read/apitude_booking/Availability *( Hotel Availabity Checking )*

