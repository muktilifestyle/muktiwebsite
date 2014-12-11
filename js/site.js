
	jQuery(document).ready(function($) {

		    //$('#nav-main').scrollspy()
		    
		    // Localscrolling 
    		$('#nav-main, .brand').localScroll();
     		$('#news, .container').localScroll();

	});
	
	

      var side_bar_html = "";

      // arrays to hold copies of the markers and html used by the side_bar
      // because the function closure trick doesnt work there
      var gmarkers = [];
      var map = null;

function initialize() {
  // create the map
  var myOptions = {
    zoom: 3,
    center: new google.maps.LatLng(30.3833666,11.0267334),
    mapTypeControl: true,
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById("map_canvas"),
                                myOptions);

  google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
        });

  // Add markers to the map
  // Set up three markers with info windows
  // add the points
  var point = new google.maps.LatLng(40.781266,-73.825461);
  var marker = createMarker(point,"United States","Harlem's Alive,<br> 275 Malcolm X Blvd, New York, NY 10027, <br>United States<br>(212) 665-7010<br>T: +1-212-532-2011<br>E: contact@muktilifestyle.com");


  var point = new google.maps.LatLng(12.9624445,77.649002);
  var marker = createMarker(point,"India","<strong>Mukti Lifestyle (India)</strong><br>Global INcubation SERVices (GINSERV)<br>, CA Site No 1, JSS Institution Campus, HAL III Stage, <br>Behind Hotel Leela Palace, Kodihalli Bangalore - 560 008<br>T: +91-80-2520 0916 / 2520 0500<br>E: contact@muktilifestyle.com");




  // put the assembled side_bar_html contents into the side_bar div
  //document.getElementById("side_bar").innerHTML = side_bar_html;
}

var infowindow = new google.maps.InfoWindow(
  {
    size: new google.maps.Size(150,50)
  });

// This function picks up the click and opens the corresponding info window
function myclick(i) {
  google.maps.event.trigger(gmarkers[i], "click");
}

// A function to create the marker and set up the event window function
function createMarker(latlng, name, html) {
    var contentString = html;
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        zIndex: Math.round(latlng.lat()*-100000)<<5
        });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(contentString);
        infowindow.open(map,marker);
        });
    // save the info we need to use later for the side_bar
    gmarkers.push(marker);
    // add a line to the side_bar html
    //side_bar_html += '<ul class="locations"><li><a href="javascript:myclick(' + (gmarkers.length-1) + ')">' + name + '<\/a></li></ul>';
}