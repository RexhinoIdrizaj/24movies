import {getGenreName, getGenreIds} from '../src/utils/helpers';
const genres = [
  {
    id: 1,
    name: 'Action',
  },
  {
    id: 2,
    name: 'Family',
  },
  {
    id: 3,
    name: 'Documentary',
  },
];

describe('Utils helpers', () => {
  it('Generate genre name from given id', () => {
    const genreId = 1;
    const result = getGenreName(genres, genreId);
    const expected = 'Action';

    expect(result).toEqual(expected);
  });

  it('Get ids from an array of genre names', () => {
    const genreNames = ['Action', 'Documentary'];

    const result = getGenreIds(genres, genreNames);
    const expected = [1, 3];

    expect(result).toEqual(expected);
  });
});
