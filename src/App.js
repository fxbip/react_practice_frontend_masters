const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed)
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt me!'),
    React.createElement(Pet, {
      name: 'Douggie',
      animal: 'Dog',
      breed: 'Maltese Shih-Tzu'
    }),
    React.createElement(Pet, {
      name: 'Gerald',
      animal: 'Dog',
      breed: 'German Shepherd'
    }),
    React.createElement(Pet, {
      name: 'Bryce',
      animal: 'Bird',
      breed: 'African Parrot'
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
