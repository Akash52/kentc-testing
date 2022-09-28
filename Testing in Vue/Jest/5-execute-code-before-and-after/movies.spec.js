import movies from './movies';

describe('Favorite Movies', () => {
  let myMovies = [];
  beforeEach(() => {
    myMovies = [
      {
        title: 'Age of Ultron',
        rate: null,
      },
    ];
  });

  test('should add a movie to the collection', () => {
    movies
      .add(myMovies, 'The Avengers')
      .add(myMovies, 'The Dark Knight')
      .add(myMovies, 'The Godfather');

    expect(myMovies).toEqual([
      {
        title: 'Age of Ultron',
        rate: null,
      },
      {
        title: 'The Avengers',
        rate: null,
      },
      {
        title: 'The Dark Knight',
        rate: null,
      },
      {
        title: 'The Godfather',
        rate: null,
      },
    ]);
  });
  test('should rate a movie', () => {
    movies.rate(myMovies[0], 5);

    expect(myMovies[0].rate).toBe(5);
  });
});
