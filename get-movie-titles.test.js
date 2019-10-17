const movies = require('./movies');
const getMoviesTitles = require('./get-movie-titles');

function test(description, fn) {
  console.log(`TEST: ${description}`)
  try {
    fn();
  } catch(e) {
    console.error(`TEST ERROR: ${e.message}`)
  }
}

test('getMovieTest is defined', () => {
  if(getMoviesTitles === undefined) {
    throw new Error('getMovieTest is not defined')
  }
});

test('getMovieTest is a function', () => {
  if(typeof getMoviesTitles !== 'function') {
    throw new Error('getMovieTest is not a function')
  }
});

test('The movieTitles is an array', () => {
  const moviesTitles = getMoviesTitles(movies);

  if(!Array.isArray(moviesTitles)) {
    throw new Error('The movieTitles is not an array')
  }
});


// test('The movieTitles an array with string', () => {
//   if(!moviesTitles.every(item => typeof item === 'string')) {
//     throw new Error('The movieTitles does not an array with string');
//   }
// });
//
// test('The movieTitles is not empty', () => {
//   if(moviesTitles.length === 0) {
//     throw new Error('The movieTitles is empty')
//   }
// });
//
//
