export const seachCards = (movies, line, checkbox) => {
    line = line.toLowerCase();
    const findMovies = [];
    movies.forEach((item) => {
      if (
        checkbox
          ? item.nameRU.toLowerCase().includes(line) & (item.duration < 50) ||
            item.nameEN.toLowerCase().includes(line) & (item.duration < 50)
          : item.nameRU.toLowerCase().includes(line) ||
            item.nameEN.toLowerCase().includes(line)
      ) {
        findMovies.push(item);

      }
    });
    localStorage.setItem('findMovies', JSON.stringify(findMovies));
    localStorage.setItem('line', JSON.stringify(line));
    localStorage.setItem('checkbox', JSON.stringify(checkbox));
    return findMovies
  };
