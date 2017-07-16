var iterations = document.getElementById("iterations");
var pi = document.getElementById("pi");
var error = document.getElementById("error");
var rate = document.getElementById("rate");
var ITERATIONS_PER_ESTIMATE = 30000000;
var totalCount = 0;
var insideCount = 0;

function estimate() {
  for (var i = 0; i < ITERATIONS_PER_ESTIMATE; i++) {
    var x = Math.random(), y = Math.random();
    totalCount++;
    if (x * x + y * y < 1.0) insideCount++;
  }
  iterations.innerHTML = totalCount;
  var piVal = 4 * insideCount / totalCount;
  pi.innerHTML = piVal;
  error.innerHTML = Math.round((piVal - Math.PI) / Math.PI * 10000) / 100;
  rate.innerHTML = totalCount / (performance.now() - start) * 1000;
}

var estimator = setInterval(estimate, 1000);
var start = performance.now();
