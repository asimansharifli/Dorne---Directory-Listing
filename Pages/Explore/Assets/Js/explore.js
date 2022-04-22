document.getElementById('nav_places_table').onclick =function searchForm() {
	document.getElementById("nav_places_table").classList.add("active");
	document.getElementById("nav_events_table").classList.remove("active");
	document.getElementById("nav_places").classList.add("active");
	document.getElementById("nav_events").classList.remove("active");
	document.getElementById("nav_places").classList.add("show");
	document.getElementById("nav_events").classList.remove("show");

}
document.getElementById('nav_events_table').onclick =function searchForm() {
	document.getElementById("nav_events_table").classList.add("active");
	document.getElementById("nav_places_table").classList.remove("active");
	document.getElementById("nav_events").classList.add("active");
	document.getElementById("nav_places").classList.remove("active");
	document.getElementById("nav_events").classList.add("show");
	document.getElementById("nav_places").classList.remove("show");
}

document.getElementById('credits').addEventListener('click', function(event) {
    event.preventDefault();
    var target = document.getElementById('credits_control');
    if (target.classList.contains('check')) {
      target.classList.remove('check');
    } else {
      target.classList.add('check');
    }
  });
  document.getElementById('parking').addEventListener('click', function(event) {
    event.preventDefault();
    var targetParking = document.getElementById('parking_control');
    if ( targetParking.classList.contains('check')) {
        targetParking.classList.remove('check');
    } else {
        targetParking.classList.add('check');
    }
  });
  document.getElementById('internet').addEventListener('click', function(event) {
    event.preventDefault();
    var target = document.getElementById('internet_control');
    if (target.classList.contains('check')) {
      target.classList.remove('check');
    } else {
      target.classList.add('check');
    }
  });
  document.getElementById('reservation').addEventListener('click', function(event) {
    event.preventDefault();
    var targetParking = document.getElementById('reservation_control');
    if ( targetParking.classList.contains('check')) {
        targetParking.classList.remove('check');
    } else {
        targetParking.classList.add('check');
    }
  });
  document.getElementById('private').addEventListener('click', function(event) {
    event.preventDefault();
    var targetParking = document.getElementById('private_control');
    if ( targetParking.classList.contains('check')) {
        targetParking.classList.remove('check');
    } else {
        targetParking.classList.add('check');
    }
  });
  document.getElementById('smoking').addEventListener('click', function(event) {
    event.preventDefault();
    var targetParking = document.getElementById('smoking_control');
    if ( targetParking.classList.contains('check')) {
        targetParking.classList.remove('check');
    } else {
        targetParking.classList.add('check');
    }
  });
  document.getElementById('whellchair').addEventListener('click', function(event) {
    event.preventDefault();
    var targetParking = document.getElementById('whellchair_control');
    if ( targetParking.classList.contains('check')) {
        targetParking.classList.remove('check');
    } else {
        targetParking.classList.add('check');
    }
  });

  document.getElementById('coupons').addEventListener('click', function(event) {
    event.preventDefault();
    var targetParking = document.getElementById('coupons_control');
    if ( targetParking.classList.contains('check')) {
        targetParking.classList.remove('check');
    } else {
        targetParking.classList.add('check');
    }
  });