"use strict";
/**
 * type keyword is used to define complex data types which could
 * be used to define types using union/intersection of existing types
 * wheres as interface keyword is used mainly to create types for
 * object or class
 */
let username = 'Suraj';
username = 'Raj';
// enum
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 2] = "Inactive";
    Status[Status["Cancelled"] = 3] = "Cancelled";
})(Status || (Status = {}));
let myStatus = Status['Active'];
