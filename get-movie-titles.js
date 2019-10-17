function getMoviesTitles(movies) {
  return movies.map((item, index) => {
    return item.title
  })
}

module.exports = getMoviesTitles;