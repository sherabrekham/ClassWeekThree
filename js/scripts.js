console.log('is it working?');

//I will make an array with tha things that i like about winter
var winterArray = ['morningcoffe','Lesstraffic','Leatherjacket','Rooftopsmoking'];

// this variable will find the first thing i like about winter
var firstwinter = winterArray[0];

console.log(firstwinter);

// i will make an if ... else conditinal that that will test to
// see whether the first item in my winter Array is Coolbreeze
// we will also test whether the third winter is a Leatherjacket winter
if (firstwinter == 'Coolbreeze') {
  console.log('the first winter is cool breeze winter');
} else if (winterArray[2] == 'Leatherjacket'){
  console.log('the third winter is a Leather jacket.')
} else {
  console.log('the first winter is not a Coolbreeze winter');
  console.log('Actually, the first winter is '+firstwinter);
}
