const { slots, Parameters, doctors } = require('./utils.js');

class SlotService {
  constructor() {}

  getSlots() {
    return slots;
  }

  addSlot(slot) {
    slots.push(slot);
  }

  getSlotsOnParameter(parameter) {
    const validDoctors = doctors.filter((doctor) => {
      return doctor.speciality == parameter;
    });

    const doctorNames = validDoctors.map((doctor) => {
      return doctor.name;
    });

    const validSlots = slots.filter((slot) => {
      return doctorNames.includes(slot.doctorName);
    });

    console.log(`slots for speciality ${parameter}: \n`);
    console.log(validSlots, "\n");
  }

  checkSlotValidity(slot) {
    // check if slot is 1 hour
    const start = parseInt(slot.startTime);
    const end = parseInt(slot.endTime);
    const time = end - start;

    if (time != 1) {
      console.log(`Invalid time slot, please enter a correct time slot\n`);
      return false;
    }

    // check same doctor slot conflict

    const doctorName = slot.doctorName;

    const slotsForDoctor = slots.filter((slot) => {
      return slot.doctorName == doctorName;
    });

    if (slotsForDoctor == []) {
      return true;
    }

    slotsForDoctor.forEach((slotForDoctor) => {
      const slotForDoctorStart = parseInt(slotForDoctor.startTime);
      const diffStart = slotForDoctorStart - start;
      if (Math.abs(diffStart) < 1) {
        return false;
      }
    });

    return true;
  }
}

module.exports = SlotService;
