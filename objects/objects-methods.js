let restaurant = {
    name : 'Bacardi',
    guestCapacity : 75,
    guestCount : 0,
    checkAvailability : function (partySize){
        //console.log(partySize) //console an obj by JS and log is a property/method to dump value to console
        //console.log(this) // this is a way to access our object properties inside of a method so we can access.
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft  //true

    },

    seatParty : function(partySize){
        this.guestCount = this.guestCount + partySize
    },

    removeParty : function(partySize){
        this.guestCount = this.guestCount - partySize
    }
}




//restaurant.checkAvailability(5)
//let status = restaurant.checkAvailability(5);
restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))


