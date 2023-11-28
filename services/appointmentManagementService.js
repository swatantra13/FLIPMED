const SlotService = require('./slotService.js');
const slotService = new SlotService();
const { appointments, slots } = require('./utils.js');

class AppointmentManagementService {
  constructor() {}

  getAppointment() {
    return appointments;
  }

  addAppointment(appointment) {
    appointments.push(appointment);
  }

  bookAppointment(appointment) {
    const slotId = appointment.slotId;

    let slotIndex = slots.findIndex((slot) => {
      return slot.id == slotId;
    });

    if (slotIndex == -1) {
      console.log(`Slot does not exist\n`);
      return;
    }

    slots[slotIndex].bookingStatus = "BOOKED";
    this.addAppointment(appointment);
    console.log(`Appointment booked successfully\n`);
    return;
  }

  cancelAppointment(appointmentId) {
    const index = appointments.findIndex((appointment) => {
      return appointment.id == appointmentId;
    });

    if (index == -1) {
      console.log(`Appointment does not exist\n`);
      return;
    }

    const slotId = appointments[index].slotId;

    const slotIndex = slots.findIndex((slot) => {
      return slot.id == slotId;
    });

    slots[slotIndex].bookingStatus = "NOT_BOOKED";
    appointments.splice(index, 1);

    console.log(`Appointment cancelled successfully\n`);
  }
}

module.exports = AppointmentManagementService;
