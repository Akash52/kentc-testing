import User from './user';

describe('User', () => {
  test('should have a full name', () => {
    const user = new User({ firstName: 'John', lastName: 'Doe' });
    expect(user.fullName).toBe('John Doe');
  });
});
