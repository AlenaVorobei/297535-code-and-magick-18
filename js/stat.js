'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

var GISTO_HEIGHT = 150;
var GISTO_WIDTH = 40;
var GISTO_GAP = 50;
var GISTO_Y = 250;
var GISTO_X = 100;
var GISTO_START = GISTO_X + GISTO_GAP;

// var FONT_GAP = 5;

var FONT_X = 270;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};


window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  // ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  // ctx.fillRect(110, 20, 420, 270);

  // ctx.fillStyle = '#fff';
  // ctx.fillRect(100, 10, 420, 270);

  var maxTime = getMaxElement(times);

  // ctx.fillStyle = '#000';
  // var players = ['Вы', 'Иван', 'Юлия', 'Кекс'];

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], GISTO_START + (GISTO_WIDTH + GISTO_GAP) * i, FONT_X);
    ctx.fillStyle = (names[i] !== 'Вы') ? 'hsl(250, ' + (Math.floor(Math.random() * 100)) + '%, 50%)' : 'rgba(255, 0, 0, 1)';
    ctx.fillRect(GISTO_START + (GISTO_WIDTH + GISTO_GAP) * i, GISTO_Y, GISTO_WIDTH, (-(GISTO_HEIGHT * times[i]) / maxTime));
    ctx.fillText([Math.floor(times[i])], GISTO_START + (GISTO_WIDTH + GISTO_GAP) * i, ((GISTO_Y - GAP) - (GISTO_HEIGHT * times[i]) / maxTime));
  }

  // ctx.fillStyle = '#000';
  // ctx.fillText('Вы', GISTO_START + (GISTO_WIDTH + GISTO_GAP)*0, FONT_X);
  // ctx.fillRect(GISTO_START + (GISTO_WIDTH + GISTO_GAP)*0, GISTO_X, GISTO_WIDTH, GISTO_HEIGHT);

  // ctx.fillStyle = '#000';
  // ctx.fillText('Иван', GISTO_START + (GISTO_WIDTH + GISTO_GAP)*1, FONT_X);
  // ctx.fillRect(GISTO_START + (GISTO_WIDTH + GISTO_GAP)*1, GISTO_X, GISTO_WIDTH, GISTO_HEIGHT);

  // ctx.fillStyle = '#000';
  // ctx.fillText('Юлия', GISTO_START + (GISTO_WIDTH + GISTO_GAP)*2, FONT_X);
  // ctx.fillRect(GISTO_START + (GISTO_WIDTH + GISTO_GAP)*2, GISTO_X, GISTO_WIDTH, GISTO_HEIGHT);

  // ctx.fillStyle = '#000';
  // ctx.fillText('Кекс', GISTO_START + (GISTO_WIDTH + GISTO_GAP)*3, FONT_X);
  // ctx.fillRect(GISTO_START + (GISTO_WIDTH + GISTO_GAP)*3, GISTO_X, GISTO_WIDTH, GISTO_HEIGHT);

  ctx.fillStyle = 'black';
  ctx.font = '16px  PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 150, 40);
  ctx.fillText('Список результатов:', 150, 60);
};
