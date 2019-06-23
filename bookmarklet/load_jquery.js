javascript:(function() { 
  console.log("LOG-START----------");
  jquery_url = "https://code.jquery.com/jquery-3.1.0.slim.min.js";

  if (typeof jQuery == "undefined") {
      console.log("jquery not loaded.");
  } else {
      console.log("jquery is already loaded.");
      console.log("LOG-END------------");
      return true;
  }

  var s = document.createElement("script"); 
  s.type = "text/javascript"; 
  s.src = jquery_url; 
  console.log(s);
  document.body.appendChild(s);

  s.onload = function() { 
      if (typeof jQuery == "undefined") { 
          console.log("jquery load failed!");
      } else { 
          console.log("jquery load success!");
      } 
      console.log("LOG-END------------");
  }; 
})();
