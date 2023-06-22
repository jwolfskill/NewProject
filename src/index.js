import c3 from "c3";

const json = [
  {
    "month": "Jan",
    "Apples": 327,
    "Peaches": 437,
    "Pears": 111
  },
  {
    "month": "Feb",
    "Apples": 555,
    "Peaches": 454,
    "Pears": 222
  },
  {
    "month": "Mar",
    "Apples": 242,
    "Peaches": 864,
    "Pears": 343
  },
  {
    "month": "Apr",
    "Apples": 222,
    "Peaches": 454,
    "Pears": 434
  }
]

const options = {
  bindto: '#chart',
  size: {
    height: 500,
    width: 1200
  },
  color: { pattern: ['#4287f5','#753b6b']},
  data: {
    json: json,
    labels: true,
    keys: { value: ['month','Apples','Peaches','Pears']},
  },
  axis: {
    x: { type: 'month'}
  }
}
const chart = c3.generate(options);