(function () {
    /*
   * Interfaces
   */

    //interface describing what attributes and methods a traveler should have
    interface ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;







    }





    //interface describing attributes and methods a wagon should have
    interface IWagon {
        capacity: number;
        passengerArray: Traveler[];



    }

    /*
    * Classes
    */

    //The traveler class that implements the ITraveler interface
    //Create the code required to satisfy the contract with the interface
    class Traveler implements ITraveler {

        food: number;
        name: string;
        isHealthy: boolean;

        constructor(food: number, name: string, isHealthy: boolean) {
            this.name = name;
            this.food = food;
            this.isHealthy = isHealthy;
        }

        function
        hunt(): number {
            //when implemented, There should be 50% chance to increase the traveler's food by 100.
            if (Math.random() > 0.5) {
                this.food += 100;
            }
            //return the travelers new food value
            return this.food;
        }


        eat(): boolean {
            //when implemented, we should check to see if the traveler has a food supply of 20
            if (this.food >= 20) {
                //If they do then we should consume 20 of the available food supply
                this.food = this.food - 20;
            } else {
                //If they don't have 20 food then we should change isHealthy to false
                this.isHealthy = false;
            }
            //return the travelers health after attempting to eat
            return this.isHealthy
        };


    }




    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    class Wagon implements IWagon {
        capacity: number;
        passengerArray: Traveler[];

        constructor(capacity: number, passengerArray: Traveler[]) {
            this.capacity = capacity;
            this.passengerArray = passengerArray;
        }
        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        addPassenger(traveler: Traveler): string {
            if (this.capacity > this.passengerArray.length) {
                this.passengerArray.push(traveler);
                return "added";
            }
            return "sorry";
        };

        //this should return true if there is at least one unhealthy person in the wagon
        //need a for loop
        //if everyone is healthy false should be returned
        isQuarantined(): boolean {
            //    class example
            //    for(let traveler of this.passengerArray){
            //       if(!traveler.isHealthy){
            //          return true;
            //       }
            //    return false;
            //   }
            for (let i = 0; i < this.passengerArray.length; i++) {

                if (this.passengerArray[i].isHealthy == false) {
                    return true;
                }

            }
            return false;
        };

        //Return the total amount of food among all passengers of the wagon.
        getFood(): number {
            let totalfood = 0;
            for (let i = 0; i < this.passengerArray.length; i++) {
                totalfood += this.passengerArray[i].food;
            }
            return totalfood
        };

    }
    /*
     Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
     * Make 3 of 5 the travelers eat by calling their eat methods
     * Make the remaining 2 travelers hunt
     */
    let traveler1 = new Traveler(20, "Dick", true);
    console.log("eat: " + traveler1.eat());
    let traveler2 = new Traveler(50, "Sally", true);
    console.log(traveler2.eat());
    let traveler3 = new Traveler(92, "Jane", true, );
    console.log(traveler3.eat());
    let traveler4 = new Traveler(5, "Ted", true, );
    console.log(traveler4.hunt());
    let traveler5 = new Traveler(77, "Harry", true, );
    console.log(traveler5.hunt());

    /*
     * Create wagon with an empty passenger list and a capacity of 4.
     * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance of attempting to be added to the wagon using the wagons addPassenger method.
     */
    let wagon = new Wagon(4, []);
    let travelers = [traveler1, traveler2, traveler3, traveler4, traveler5];
    for (let traveler of travelers) {
        if (Math.random() > .5) {
            console.log(`Add passenger(${traveler.name}): ${wagon.addPassenger(traveler)}`);
        }

    }
    /*
     * the console.log statements should not live inside any methods on the objects 
     * Run the isQuarantined method for the wagon
     */
    console.log(`Wagon is quarantined? ${wagon.isQuarantined()}`);
    /*
      Run the getFood method for the wagon
     */
    console.log(`Wagon total food: ${wagon.getFood()}`);
    /*
    * Play the game
    * the return values of all the methods should be displayed in the console using console.log()
    
    *
    */

})();
