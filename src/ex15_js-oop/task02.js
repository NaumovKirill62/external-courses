class Flat {
  constructor(...items) {
    this.space = [];
    if(Array.isArray(items)) {
      this.space.push(...items);
    }
  }

  currentElectricPower(...area) {
    let power = 0;
    if (area.length === 0) {
      power = this.space.reduce( function (sum, elem) {
        if (elem.plug === true) {
          // eslint-disable-next-line no-param-reassign
          sum += elem.power;
        }
        return sum;
      }, 0)
    }
    if (Array.isArray(area)) {
      area.forEach( (room) => {
        for (const elem of this.space) {
          if(elem.position === room){
            if (elem.plug === true) {
              power += elem.power;
            }
          }
        }
      });
    };

    return power;
  }
}

class ElectricalAppliance {
  constructor(name, power, plug = false, position) {
    this.name = name;
    this.plug = plug;
    this.power = power;
    this.position = position;
  }
}
const kettle = new ElectricalAppliance('kettle', 30, true, 'My Room');
const tv = new ElectricalAppliance('tv', 100, true, 'My Room');
const hairDryer = new ElectricalAppliance('hair dryer', 40, 'My Room');

const myRoom = new Flat(kettle, tv, hairDryer); 