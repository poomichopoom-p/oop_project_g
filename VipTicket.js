class VipTicket extends ConcertTicket {
  constructor(zone, price, benefits) {
    super(zone, price);
    this.benefits = benefits;
  }

  pize(price) {
    if (price >= 100000) {
      console.log(`${this.price} Free Beer 1 tower.`);
    } else if (this.price <= 99999) {
      console.log(`${this.price} wallpaper`);
    }

    return console.log(`${this.price} next time.`);
  }
  Verify(zone) {
    if (zone === VipTicket) {
      console.log(`${this.zone} is VIP`);
    } else {
      console.log(`${this.zone} You Not VIP`);
    }
  }
}

Module.exports = VipTicket;

// const seat = new68(Vip,120000,kiss)

// class StadiumG (StadiumGname){
//     this.StadiumGname = StadiumGname
// }
