const SlotService = require('./slotService.js');
const slotService = new SlotService();
const { doctors } = require('./utils.js');

class DoctorManagementService {
  constructor() {}

  getDoctors() {
    return doctors;
  }

  addDoctors(slot) {
    doctors.push(slot);
  }

  onboardDoctor(doctor) {
    const doctorName = doctor.name;
    const index = doctors.findIndex((doctor) => {
      return doctor.name == doctorName;
    });

    if (index == -1) {
      this.addDoctors(doctor);
      console.log(`Doctor ${doctorName} onboarded succesfully\n`);
    } else {
      console.log(`Doctor ${doctorName} is already present in the system\n`);
    }
  }

  giveAvailability(slot) {
    if (slotService.checkSlotValidity(slot)) {
      slotService.addSlot(slot);
      console.log(`Slot added succesfully, slotId: ${slot.id}\n`);
    } else {
      console.log(`Slot invalid\n`);
    }
  }
}

module.exports = DoctorManagementService;
