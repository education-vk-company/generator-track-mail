/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */


test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(/* ... */).toBe(/* ... */))
  // ...
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(/* ... */).toBe(/* ... */))
  // ...
});

// другая группа проверок
