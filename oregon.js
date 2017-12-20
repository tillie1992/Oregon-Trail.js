(function () {
    /*
   * Interfaces
   */
    /*
    * Classes
    */
    //The traveler class that implements the ITraveler interface
    //Create the code required to satisfy the contract with the interface
    var Traveler = /** @class */ (function () {
        function Traveler(food, name, isHealthy) {
            this.name = name;
            this.food = food;
            this.isHealthy = isHealthy;
        }
        Traveler.prototype.hunt = function () {
            //when implemented, There should be 50% chance to increase the traveler's food by 100.
            if (Math.random() > 0.5) {
                this.food += 100;
            }
            //return the travelers new food value
            return this.food;
        };
        Traveler.prototype.eat = function () {
            //when implemented, we should check to see if the traveler has a food supply of 20
            if (this.food >= 20) {
                //If they do then we should consume 20 of the available food supply
                this.food = this.food - 20;
            }
            else {
                //If they don't have 20 food then we should change isHealthy to false
                this.isHealthy = false;
            }
            //return the travelers health after attempting to eat
            return this.isHealthy;
        };
        ;
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = /** @class */ (function () {
        function Wagon(capacity, passengerArray) {
            this.capacity = capacity;
            this.passengerArray = passengerArray;
        }
        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.capacity > this.passengerArray.length) {
                this.passengerArray.push(traveler);
                return "added";
            }
            return "sorry";
        };
        ;
        //this should return true if there is at least one unhealthy person in the wagon
        //need a for loop
        //if everyone is healthy false should be returned
        Wagon.prototype.isQuarantined = function () {
            //    class example
            //    for(let traveler of this.passengerArray){
            //       if(!traveler.isHealthy){
            //          return true;
            //       }
            //    return false;
            //   }
            for (var i = 0; i < this.passengerArray.length; i++) {
                if (this.passengerArray[i].isHealthy == false) {
                    return true;
                }
            }
            return false;
        };
        ;
        //Return the total amount of food among all passengers of the wagon.
        Wagon.prototype.getFood = function () {
            var totalfood = 0;
            for (var i = 0; i < this.passengerArray.length; i++) {
                totalfood += this.passengerArray[i].food;
            }
            return totalfood;
        };
        ;
        return Wagon;
    }());
    /*
     Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
     * Make 3 of 5 the travelers eat by calling their eat methods
     * Make the remaining 2 travelers hunt
     */
    var traveler1 = new Traveler(20, "Dick", true);
    console.log("eat: " + traveler1.eat());
    var traveler2 = new Traveler(50, "Sally", true);
    console.log(traveler2.eat());
    var traveler3 = new Traveler(92, "Jane", true);
    console.log(traveler3.eat());
    var traveler4 = new Traveler(5, "Ted", true);
    console.log(traveler4.hunt());
    var traveler5 = new Traveler(77, "Harry", true);
    console.log(traveler5.hunt());
    /*
     * Create wagon with an empty passenger list and a capacity of 4.
     * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance of attempting to be added to the wagon using the wagons addPassenger method.
     */
    var wagon = new Wagon(4, []);
    var travelers = [traveler1, traveler2, traveler3, traveler4, traveler5];
    for (var _i = 0, travelers_1 = travelers; _i < travelers_1.length; _i++) {
        var traveler = travelers_1[_i];
        if (Math.random() > .5) {
            console.log("Add passenger(" + traveler.name + "): " + wagon.addPassenger(traveler));
        }
    }
    /*
     * the console.log statements should not live inside any methods on the objects
     * Run the isQuarantined method for the wagon
     */
    console.log("Wagon is quarantined? " + wagon.isQuarantined());
    /*
      Run the getFood method for the wagon
     */
    console.log("Wagon total food: " + wagon.getFood());
    /*
    * Play the game
    * the return values of all the methods should be displayed in the console using console.log()
    
    *
    */
})();
