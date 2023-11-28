class Slot {

    constructor(id, doctorName, startTime, endTime, bookingStatus){
        this.id = id;
        this.doctorName = doctorName;
        this.startTime = startTime;
        this.endTime = endTime;
        this.bookingStatus = bookingStatus;
    }

}

module.exports = Slot
