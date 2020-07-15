'use strict';
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var SHADOW_GAP = 10;
var GAP = 20;
var FONT_GAP = 16;

var COL_MAX_HEIGHT = 150;
var COL_WIDTH = 40;
var COL_GAP = 50;
var YOU_COLOR = 'rgba(255, 0, 0, 1)';


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return Math.floor(maxElement);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP + (COL_WIDTH + COL_GAP) * i, CLOUD_HEIGHT - GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = YOU_COLOR;
    } else {
      ctx.fillStyle = 'hsla(240, ' + (Math.random() * 100) + '%, 50%, 1)';
    }
    ctx.fillRect(CLOUD_X + GAP + (COL_WIDTH + COL_GAP) * i, CLOUD_HEIGHT - GAP - FONT_GAP - Math.floor((COL_MAX_HEIGHT / maxTime) * times[i]), COL_WIDTH, Math.floor((COL_MAX_HEIGHT / maxTime) * times[i]));
    ctx.fillStyle = '#000000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + (COL_WIDTH + COL_GAP) * i, CLOUD_HEIGHT - GAP - FONT_GAP - Math.floor((COL_MAX_HEIGHT / maxTime) * times[i]) - FONT_GAP);
  }
};
