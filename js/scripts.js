
// Business Logic for TicketHolders
function TicketHolder(movieTitle, showTime, ticketHolderAge){
  this.movieTitle = movieTitle;
  this.showTime = showTime;
  this.ticketHolderAge = ticketHolderAge;
  this.price = "";
}

TicketHolder.prototype.ticketHolderprice = function() {
  return this.movieTitle + this.showTime - this.ticketHolderAge;
}



// User interface logic

$(document).ready(function() {
  $("form#ticketProfile").submit(function(event) {
    event.preventDefault();
    let movieTitle = parseInt($("#movieTitle").val());
    let showTime = parseInt($("#showtime").val());
    let ticketHolderAge = parseInt($("#age").val());
    let newTicketHolder = new TicketHolder(movieTitle, showTime, ticketHolderAge)
    $("#output").show();
    $("#ticketPrice").text(newTicketHolder.ticketHolderprice());
  });

});
