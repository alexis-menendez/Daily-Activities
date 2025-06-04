import Card from './Card';

const feline = {
  name: 'Fluffykins',
  description: 'A cat that acts like a dog',
  id: 1,
};

export default function Display() {
  return (
    <div>
        <Card name={feline.name} description={feline.description} id={feline.id} />
    </div>
  );
}
