const StandingTicket = require("./StandingTicket");


class StadiumG {
    constructor(name,ticket) {
        this.name = name;
        this.ticket = [];
    }
    
    addTicket(ticket) {
        this.ticket.push(ticket);
        console.log(`Added ${ticket.name} to the ${this.StadiumGName}`);
    }
}

module.exports = StadiumG;


