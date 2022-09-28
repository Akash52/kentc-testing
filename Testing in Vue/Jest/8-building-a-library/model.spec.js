import Model from './model';

test('new works', () => {
  expect(new Model()).toBeInstanceOf(Model);
});

test('model structure', () => {
  expect(new Model()).toEqual(
    expect.objectContaining({
      $collection: expect.any(Array),
      record: expect.any(Function),
      all: expect.any(Function),
      find: expect.any(Function),
      update: expect.any(Function),
    })
  );
});

describe('record', () => {
  const heroes = [{ name: 'Batman' }, { name: 'Superman' }];
  test('should add a record to the collection', () => {
    const model = new Model();
    model.record(heroes);
    expect(model.$collection).toEqual(heroes);
  });

  test('gets called when data is passed to Model constructor', () => {
    const spy = jest.spyOn(Model.prototype, 'record');
    const model = new Model(heroes);
    expect(spy).toHaveBeenCalledWith(heroes);
    expect(model.$collection).toEqual(heroes);
    spy.mockRestore();
  });
});

describe('all', () => {
  test('return empty model', () => {
    const model = new Model();
    expect(model.all()).toEqual([]);
  });
  test('return model data', () => {
    const model = new Model([{ name: 'Batman' }, { name: 'Superman' }]);
    expect(model.all()).length.toBe(2);
  });

  test('original data stays inact', () => {
    const heroes = [{ name: 'Batman' }, { name: 'Superman' }];
    const model = new Model(heroes);
    expect(model.all()).toEqual(heroes);
    expect(model.all()).not.toBe(heroes);
  });
});
