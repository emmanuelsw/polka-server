const polka = require('polka');

const { PORT=3000 } = process.env;
const app = polka();

const json = [
  {
    name: "Emmanuel",
    age: 21
  },
  {
    name: "Jesús",
    age: 23
  },
  {
    name: "Miguel",
    age: 21
  }
]

app.get('/', (req, res) => {
  res.end(JSON.stringify(json));
})

app.get('/:name', (req, res) => {
  res.end(JSON.stringify({name: req.params.name}));
})

app.listen(PORT).then(_ => {
  console.log(`Server running on localhost:${PORT}`);
})