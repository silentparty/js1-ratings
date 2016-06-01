/*
JS1 Homework
https://gist.github.com/jesstelford/027ee367d6f56c94dfadb1924e408ae9
*/

var ages = [1, 23, 8, 12, 16];
var ratings = ['G', 'PG', 'M', 'MA'];
var minAgeForRating = [0, 9, 12, 15];

ages.forEach(function (age, index) {
  var canWatch = []
  minAgeForRating.forEach(function(min, index) {
    if (age >= min) {
      canWatch.push(ratings[index])
    }
  })
  var response = "Age " + age + " can watch movies rated " + canWatch;
  console.log(response);
});

// console.log(".filter() returns this for checkAge() — ", ages.filter(checkAge));
// console.log(".map() returns this for checkAge() — ", ages.map(checkAge));
// console.log(ages)

//ages.map(oflc);

/*

 .filter() will return all the true values from a function.
It'll allow me to use a function to see which ages meet the threshold.
It then returns the values that meet the threshold.

.map() will allow me to run a function on each object in the array, and return the full, modified array.

.()forEach will allow me to iterate through the array, and modify

0-8 is G
9-11 is PG
12-15 is M
> 15 is MA

Harry is 1. What can he watch?
check age against minAgeForRating
where age == minAgeForRating, return relevant rating from ratings

(ages[age] > minAgeForRating[age] && ages[age] < minAgeForRating[age])

ages.forEach(function (i,index) {
  var response = "Age " + ages[index] + " can watch movies rated " + minAgeForRating[index] + " " + ratings[index];
  console.log(response)
  i++;
});

For ech age, find all values that are true (meet age requirement) in minAgeForRating.
For those values

'+' when concatenating will convert to string

 */
