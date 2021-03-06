import compiler from './compiler';

test('Inserts name and outputs JavaScript', async () => {
  const stats = await compiler('example.txt', {name: 'Sakura'});
  const output = stats.toJson().modules[0].source;

  expect(output).toBe('export default "Hey Sakura\\n"');
})