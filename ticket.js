class Ticket {
  constructor(id, title, assignee) {
    this.id = id;
    this.title = title;
    this.assignee = assignee;
    this._status = "Open";
  }

  getStatus() {
    return this._status;
  }

  printDetails() {
    console.log(
      `[ID: ${this.id}] ${this.title} | Assigned to: ${this.assignee}`,
    );
  }

  resolveTask() {
    this._status = "Resolved";
    console.log(`Ticket #${this.id} is now Resolved!`);
  }
}

class TicketBoard {
  constructor(boardName) {
    this.boardName = boardName;
    this.tickets = [];
  }

  addTicket(ticket) {
    this.tickets.push(ticket);
    console.log(`Added Ticket #${ticket.id} to the ${this.boardName}`);
  }

  renderDashboard() {
    console.log(`\n=== Dashboard: ${this.boardName} ===`);

    this.tickets.forEach((ticket) => {
      ticket.printDetails();
      console.log(`Current Status: ${ticket.getStatus()}`);
      ticket.resolveTask();
      console.log("-------------------------");
    });
  }
}

const sprintBoard = new TicketBoard("Weekly Sprint Board");

const loginBug = new Ticket(101, "User cannot log in", "Alice");
const uiTask = new Ticket(102, "Change button color to blue", "Bob");

sprintBoard.addTicket(loginBug);
sprintBoard.addTicket(uiTask);

sprintBoard.renderDashboard();