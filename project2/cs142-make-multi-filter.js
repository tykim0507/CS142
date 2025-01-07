"use strict";

function cs142MakeMultiFilter(originalArray) {
    let currentArray = originalArray;

    function arrayFilterer(filterCriteria, callback) {
        let filteredArray = [];
        if(typeof(filterCriteria) === "function") {
            currentArray.forEach(element => {
                if(filterCriteria(element)) {
                    filteredArray.push(element);
                }
            });

            currentArray = filteredArray;

            if(callback) {
                callback.call(originalArray, currentArray);
            }

            return arrayFilterer;
        }
        else {
            return currentArray;
        }
    }

    return arrayFilterer;

}