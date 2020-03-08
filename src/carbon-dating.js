const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!isString(sampleActivity) || isOutOfRange(sampleActivity) || !isNumberValue(sampleActivity)) {
    return false;
  }

  let rate = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;
  let years = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / rate;

  return Math.ceil(years);
};

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function isNumberValue(value) {
  return !(/[A-Za-z]/.test(value));
}

function isOutOfRange(value) {
  return value <= 0 || value > MODERN_ACTIVITY
}