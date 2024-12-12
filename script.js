let mydata = `Google is a great place to work. google offers great services and  google services many amenities to the employees` ;

// let newData = mydata.replaceAll("google, amazon");
let newData = mydata.replace(/google/ig, "amazon");
// i is for case - sensitiive search g is for global search
console.log(newData);