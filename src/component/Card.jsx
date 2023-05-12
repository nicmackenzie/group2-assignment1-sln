export function Card() {
  const cardObj = {
    title: 'mini-project',
    description: 'This is a mini project using React js',
    image:
      'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&fit=crop&w=1080&q=80&fit=max',
  };
  return (
    <div className="card">
      <img src={cardObj.image} alt={cardObj.title} />
      <div className="card-content">
        <h1>{cardObj.title}</h1>
        <p>{cardObj.description}</p>
      </div>
    </div>
  );
}
