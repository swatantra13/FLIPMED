const { patients, appointments } = require('./utils.js');

class PatientManagementService {
  constructor() {}

  getPatients() {
    return patients;
  }

  addPatients(patient) {
    patients.push(patient);
  }

  registerPatient(patient) {
    const patientName = patient.name;
    const index = patients.findIndex((patient) => {
      return patient.name == patientName;
    });

    if (index == -1) {
      patients.push(patient);
      console.log(`Patient ${patientName} onboarded succesfully\n`);
    } else {
      console.log(`Patient ${patientName} is already present in the system\n`);
    }
  }

  viewAppointments(patientName) {
    const validApps = appointments.filter((appointment) => {
      return appointment.patient == patientName;
    });

    console.log(`Appointments for patient ${patientName} are: \n`);
    console.log(validApps, "\n");
  }
}

module.exports = PatientManagementService;
