console.log("\n");
const Doctor = require("./models/doctor.js");
const Slot = require("./models/slot.js");
const Patient = require("./models/patient.js");
const Appointment = require("./models/appointment.js");

const DoctorManagementService = require("./services/doctorManagementService.js");
const SlotService = require("./services/slotService.js");
const PatientManagementService = require("./services/patientManagementService.js");
const AppointmentManagementService = require("./services/appointmentManagementService.js");

const doctorManagementService = new DoctorManagementService();
const slotService = new SlotService();
const patientManagementService = new PatientManagementService();
const appointmentManagementService = new AppointmentManagementService();

const doctor1 = new Doctor("doctor1", "cardiology", 4);
doctorManagementService.onboardDoctor(doctor1);

const slot = new Slot(1, "doctor1", "12.00", "13.00", "NOT_BOOKED");
doctorManagementService.giveAvailability(slot);

const patient1 = new Patient("patient1");
patientManagementService.registerPatient(patient1);

const appointment1 = new Appointment(1, "patient1", "doctor1", 1);

appointmentManagementService.bookAppointment(appointment1);
patientManagementService.viewAppointments("patient1");
appointmentManagementService.cancelAppointment(1);

slotService.getSlotsOnParameter("cardiology");
