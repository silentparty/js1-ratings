var ages = [1, 23, 8, 12, 16];
var ratings = ['G', 'PG', 'M', 'MA'];
var minAgeForRating = [0, 9, 12, 15];

var ratingsAllowed = ages.map(function (age) {
  return ratings.filter(function (rating, index) {
    return age >= minAgeForRating[index]
  })
})

ages.forEach(function(age, index) {
    console.log('Age' + age + ' is allowed to see: ' + ratingsAllowed[index].toString())
})
