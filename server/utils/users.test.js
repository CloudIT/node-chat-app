const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Brandy',
      room: 'Test'
    },
    {
      id: '2',
      name: 'Jace',
      room: 'Test Room'
    },
    {
      id: '3',
      name: 'Jason',
      room: 'Test'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Jason',
      room: 'Test'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var user = users.removeUser('1');

    expect(user).toEqual(user);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var resUser = users.removeUser('99');

    expect(resUser).toBeUndefined();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var resUser = users.getUser('1');

    expect(resUser).toEqual([{
      id: '1',
      name: 'Brandy',
      room: 'Test'
    }]);
  });

  it('should not find a user', () => {
    var resUser = users.getUser('4');

    expect(resUser).toEqual([]);
  });

  it('should return names for room Test', () => {
    var userList = users.getUserList('Test');

    expect(userList).toEqual(['Brandy', 'Jason']);
  });

  it('should return names for room Test Room', () => {
    var userList = users.getUserList('Test Room');

    expect(userList).toEqual(['Jace']);
  });
});
