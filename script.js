//pojedyńczy film

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function()  {
    return React.createElement('li', {},
      React.createElement(MovieTitle, {title: this.props.movie.title}),
      React.createElement(MovieDescriptions, {desc: this.props.movie.desc}),
      React.createElement(MovieImg, {img: this.props.movie.img})
    );
  }
});

//tablica z filmami i ich opisami
var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    img: './img/harry_potter.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: './img/krol_lew.jpg'
  },
  {
    id: 3,
    title: 'Ojciec chrzestny',
    desc: 'Film o szefie nowojorskiej mafii',
    img: './img/ojciec_chrzestny.jpg'
  },
  {
    id: 4,
    title: 'Człowiek który poznał nieskończonść',
    desc: 'Film o genialnym matematyku-samouku Srinivasa Ramanujan',
    img: './img/człowiek_nieskonczonosc.jpg'
  }
];

//tytuł filmu

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render: function() {
    return React.createElement('h2', {}, this.props.title);
  },
});

//opis filmu

var MovieDescriptions = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },
  render: function () {
    return React.createElement('p', {}, this.props.desc);
  },
});

//plakat filmu

var MovieImg = React.createClass({
  propTypes: {
    img: React.PropTypes.string.isRequired,
  },
  render: function () {
    return React.createElement('img', {src: this.props.img});
  },
});


var moviesElements = movies.map(function(movie) {
  return React.createElement(Movie, {key: movie.id, movie: movie});
});

//lista filmów

var MovieList = React.createClass({
  render: function() {
    return React.createElement('ul', {}, moviesElements);
  }
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {})
  );

ReactDOM.render(element, document.getElementById('app'));