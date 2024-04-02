const { Parser } = require('@json2csv/plainjs');
const {unwind} = require('@json2csv/transforms')

const data = [
  { "carModel": "Audi", "price": 0, "colors": ["blue","green","yellow"] },
  { "carModel": "BMW", "price": 15000, "colors": ["red","blue"] },
  { "carModel": "Mercedes", "price": 20000, "colors": "yellow" },
  { "carModel": "Porsche", "price": 30000, "colors": ["green","teal","aqua"] },
  { "carModel": "Tesla", "price": 50000, "colors": []}
];

try {
  const opts = {
    transforms: [
      unwind({ paths: ['colors'] })
    ]
  };
  const parser = new Parser(opts);
  const csv = parser.parse(data);
  console.log(csv);
} catch (err) {
  console.error(err);
}
