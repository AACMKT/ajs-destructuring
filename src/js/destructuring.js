export default function getAttacSpecs(character) {
  const arr = [];
  character.special.forEach((el) => {
    const { description = 'Описание недоступно', ...val } = el;
    arr.push({ ...val, description });
  });
  return arr;
}
