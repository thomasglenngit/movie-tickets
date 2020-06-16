//function TicketBucket
  //this.ticketHolders =
  // this.ticketId = 0


//TicketBucket.prototype.addTicketHolder = function(ticketHolder) {
  // ticketHolder.id = this.assignId();
  //this.ticketHolder.push(ticketHolder);



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



//if ("form#movieTime" === "12pm") moviePrice === -

// User interface logic

$(document).ready(function() {
  $("form#ticketProfile").submit(function(event) {
    event.preventDefault();
    let movieTitle = parseInt($("#movieTitle").val());
    let showTime = parseInt($("#showtime").val());
    let ticketHolderAge = parseInt($("#age").val());
    let newTicketHolder = new TicketHolder(movieTitle, showTime, ticketHolderAge)
    //newTicketHolder.ticketHolderp
    $("#output").show();
    $("#ticketPrice").text(newTicketHolder.ticketHolderprice());
  });

});


  //let ticketBucket = new TicketBucket();
  // attachTicketHolderListeners(ticketBucket);
  //$("form#ticket-profile").submit(function(event) {
    //event.prevent(Default();
    // input variables
    // output variables
    //let newTicketHolder = new ticketHolder(movieTitle, showTime, ticketHolderAge);
    //ticketBucket.addTicketHolder(newTicketHolder)
