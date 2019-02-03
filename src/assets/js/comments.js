$(document).ready(function() {
  var monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "June", "July",
    "Aug", "Sept", "Oct",
    "Nov", "Dec"
  ];

  $("#comment-input").keyup(function(event) {
    if(event.keyCode == 13){
      var name = $("#author-input").val();
      var comment = $("#comment-input").val();

      var date = new Date();
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      var hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
      var ampm =date.getHours() < 12 ? "AM" : "PM";
      var minutes = date.getMinutes();
      var dateStr = monthNames[monthIndex] + " " + day + ", " + year + " " + hour + ":" + minutes + " " + ampm;

      url = window.location.href.split("/").filter(function(item) {return item !== ''})
      url = "/add_comment/" + url[url.length - 1]


      var data = {
        name: name || 'Anonymous',
        comment: comment
      }

      $("#author-input").val("");
      $("#comment-input").val("");

      $.post(url, data, function(response) {
        $( "#comments" ).prepend("<br/><h3>" + name + "</h3><h5>" + dateStr + "</h5><p>" + comment+"</p><br/>");
      })
    }
  });
});

