import GameSavingLoader from './index';

test('promise', () => {
  GameSavingLoader.load().then((item) => {
    json(item).then((i) => {
      expect(i).toEqual({
        id: 9,
        created: 1546300800,
        userInfo: {
          id: 1, name: 'Hitman', level: 10, points: 2000,
        },
      });
    });
  });
});