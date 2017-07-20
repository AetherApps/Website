	//Timer
	var targetDate = new Date("Aug 12, 2017 00:00:00").getTime();
	var x = setInterval(function() {
	    // Get todays date and time
	    var now = new Date().getTime();
	    // Find the distance between now an the count down date
	    var distance = targetDate - now;
	    // Time calculations for days, hours, minutes and seconds
	    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	    // Output the result in an element with id="demo"
	    document.getElementById("day").innerHTML = days;
	    document.getElementById("hour").innerHTML = hours;
	    document.getElementById("minute").innerHTML = minutes;
	    document.getElementById("second").innerHTML = seconds;
	    // If the count down is over, write some text 
	    if (distance < 0) {
			clearInterval(x);
	    	document.getElementById("day").innerHTML = "00";
			document.getElementById("hour").innerHTML = "00";
			document.getElementById("minute").innerHTML = "00";
			document.getElementById("second").innerHTML = "00";
	    }
	}, 1000);


	//NavBar
	window.onscroll = () => {
	  const nav = document.querySelector('#navi');
	  if(this.scrollY < 50){
	  	nav.className = 'navbar navbar-default navbar-fixed-top';
	  }
	  else{
	  	nav.className = 'navbar navbar-inverse navbar-fixed-top';
	  }
	};