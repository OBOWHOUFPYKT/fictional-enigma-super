function doNum(number, fn) {
  if (fn === undefined) {
    return number;
  } else {
    return fn(number);
  }
}

function zero(fn) {
  return doNum(0, fn);
}
function one(fn) {
  return doNum(1, fn);
}
function two(fn) {
  return doNum(2, fn);
}
function three(fn) {
  return doNum(3, fn);
}
function four(fn) {
  return doNum(4, fn);
}
function five(fn) {
  return doNum(5, fn);
}
function six(fn) {
  return doNum(6, fn);
}
function seven(fn) {
  return doNum(7, fn);
}
function eight(fn) {
  return doNum(8, fn);
}
function nine(fn) {
  return doNum(9, fn);
}

function plus(second) {
  return (first) => {
    return first + second;
  };
}
function minus(second) {
  return (first) => {
    return first - second;
  };
}
function times(second) {
  return (first) => {
    return first * second;
  };
}
function dividedBy(second) {
  return (first) => {
    return Math.floor(first / second);
  };
}
