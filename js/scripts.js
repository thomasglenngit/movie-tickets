function TicketBucket() {
  this.ticketHolders = []
  // this.ticketId = 0
}

TicketBucket.prototype.addTicketHolder = function(ticketHolder) {
  // ticketHolder.id = this.assignId();
  this.ticketHolder.push(ticketHolder);
}


// Business Logic for TicketHolders
function ticketHolder(movieTitle, showTime, ticketHolderAge){
  this.movieTitle = movieTitle;
  this.showTime = showTime;
  this.ticketHolderAge = ticketHolderAge;
  this.ticketPrice = "";
}

ticketHolder.prototype.ticketPrice = function() {
  return this.movieTitle + this.showTime - this.ticketHolderAge;
}



//if ("form#movieTime" === "12pm") moviePrice === -

// User interface logic

$(document).ready(function() {
  $("form#ticketProfile").submit(function(event) {
    let movieTitle = parseInt($("#movieTitle").val());
    let showTime = parseInt($("#showTime").val());
    let ticketHolderAge = parseInt($("#ticketHolderAge").val());
    let newTicketPrice = new TicketPrice(movieTitle, showTime, ticketHolderAge)

    $("#output").text(newTicketPrice.ticketPrice());
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
    )
