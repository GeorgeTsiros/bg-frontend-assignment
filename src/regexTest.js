/** @const {!RegExp} Code pattern to validate. */
const CODE_PATTERN = /[a-zA-Z0-9]{2,8}@[0-9]{4}\.[a-z]{2}/;


const validateCode = function(code) {
  return CODE_PATTERN.test(code);
};



// Test sample of codes.
const testCodes = [
  'A-01-13A',
  'A-01-13',
  'B-13-99',
  'B-14-11A',
  'B-13-100'
];
for (code of testCodes) {
  const isValidCode = validateCode(code);
  console.log(isValidCode);
}