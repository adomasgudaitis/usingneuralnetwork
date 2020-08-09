const net = new brain.NeuralNetwork();
let trainingData = [
  { input: { r: 0, g: 0, b: 0 }, output: [1] },
  { input: { r: 1, g: 1, b: 1 }, output: [0] },
  {
    input: {
      r: 0.18818435458638594,
      g: 0.7750535456668062,
      b: 0.13039479737340942,
    },
    output: [0],
  },
  {
    input: {
      r: 0.9760409737168958,
      g: 0.9144739148446601,
      b: 0.06536591215444432,
    },
    output: [1],
  },
  {
    input: {
      r: 0.6853306693093202,
      g: 0.23602348736006018,
      b: 0.3060762720535277,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8242297923271376,
      g: 0.6977180465006698,
      b: 0.3948094866047138,
    },
    output: [1],
  },
  {
    input: {
      r: 0.19770179925288467,
      g: 0.8084853410080599,
      b: 0.2559537579693476,
    },
    output: [0],
  },
  {
    input: {
      r: 0.08778710338761764,
      g: 0.1873494945631453,
      b: 0.5892356258540041,
    },
    output: [0],
  },
  {
    input: {
      r: 0.43607554889785183,
      g: 0.3667783311681425,
      b: 0.917242985495224,
    },
    output: [0],
  },
  {
    input: {
      r: 0.35885523860807567,
      g: 0.3608410271950442,
      b: 0.32504562500218537,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7551358705508258,
      g: 0.05591280582053337,
      b: 0.3320645811082845,
    },
    output: [0],
  },
  {
    input: {
      r: 0.9963087608854904,
      g: 0.6278375437061308,
      b: 0.4959044611393246,
    },
    output: [1],
  },
  {
    input: {
      r: 0.30412784385705316,
      g: 0.922666604158769,
      b: 0.16553885281635194,
    },
    output: [0],
  },
  {
    input: {
      r: 0.7391716816511587,
      g: 0.7324443072350861,
      b: 0.9032026387347407,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8275857639486537,
      g: 0.9971441978708315,
      b: 0.5763373072600153,
    },
    output: [1],
  },
  {
    input: {
      r: 0.3510258444928436,
      g: 0.07318375674786348,
      b: 0.553175661240302,
    },
    output: [0],
  },
  {
    input: {
      r: 0.2376106548845398,
      g: 0.9373486483212534,
      b: 0.6897477375773531,
    },
    output: [1],
  },
  {
    input: {
      r: 0.9566679799704949,
      g: 0.5886043099846474,
      b: 0.05591182973689368,
    },
    output: [1],
  },
  {
    input: {
      r: 0.43885539874900426,
      g: 0.5873271116647754,
      b: 0.3345716836152821,
    },
    output: [0],
  },
  {
    input: {
      r: 0.9776358873265647,
      g: 0.6324666803869032,
      b: 0.09081057299135176,
    },
    output: [1],
  },
  {
    input: {
      r: 0.09192057017624689,
      g: 0.11579610271217944,
      b: 0.5184757181379882,
    },
    output: [0],
  },
  {
    input: {
      r: 0.16260894422693828,
      g: 0.6730612522651922,
      b: 0.4927777032351932,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8560820861080798,
      g: 0.9843098367372811,
      b: 0.43190280267065173,
    },
    output: [1],
  },
  {
    input: {
      r: 0.035756660766364856,
      g: 0.5538064141001489,
      b: 0.24147030394241953,
    },
    output: [0],
  },
  {
    input: {
      r: 0.45653829201426643,
      g: 0.2348932573488336,
      b: 0.0056239709064236365,
    },
    output: [1],
  },
  {
    input: {
      r: 0.8022528813181338,
      g: 0.1332037365230474,
      b: 0.753637216796021,
    },
    output: [0],
  },
  {
    input: {
      r: 0.8547730707321415,
      g: 0.3153481830496756,
      b: 0.8197645375995779,
    },
    output: [0],
  },
];

net.train(trainingData);
const colorElement = document.getElementById('color');
const guessElement = document.getElementById('guess');
const whiteButton = document.getElementById('white-button');
const blackButton = document.getElementById('black-button');
const printButton = document.getElementById('print-button');
let color;

const setRandomColor = () => {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };

  const guess = net.run(color)[0];
  guessElement.style.color = guess < 0.5 ? '#FFF' : '#000';
  colorElement.style.backgroundColor = `rgba(${color.r * 255}, ${
    color.g * 255
  }, ${color.b * 255})`;
};
setRandomColor();

const chooseColor = (value) => {
  trainingData.push({
    input: color,
    output: [value],
  });
  setRandomColor();
};

whiteButton.addEventListener('click', () => {
  chooseColor(0);
});

blackButton.addEventListener('click', () => {
  chooseColor(1);
});

const print = () => {
  console.log(JSON.stringify(trainingData));
};
printButton.addEventListener('click', () => {
  print();
});
