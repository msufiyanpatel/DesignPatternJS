function TicketPrice() {
    this.request = function(start, end, overweightLuggage) {
        return 150.24
    }
}

function newTicketPrice() {
    this.login = function(credentials) {};
    this.setStart = function(start) {};
    this.setDestination = function(destination) {};
    this.calculate = function(overweightLuggage) {
        return 120.56
    };
}

function TicketAdapter(credentials) {
    var pricing = new newTicketPrice();

    pricing.login(credentials);

    return {
        request: function(start, end, overweightLuggage) {
            pricing.setStart(start);
            pricing.setDestination(end);
            return pricing.calculate(overweightLuggage);
        }
    };
}

var pricing = new TicketPrice();
var credentials = { token: "30a8-6ee1" };
var adapter = new TicketAdapter(credentials);

var price = pricing.request("Bern", "London", 20);
console.log("Old price: " + price);

price = adapter.request("Bern", "London", 20);
console.log("New price: " + price);