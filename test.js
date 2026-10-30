const assert = require('assert');

function isValidTaskTitle(title) {
  return typeof title === 'string' && title.trim().length > 0;
}

try {
  assert.strictEqual(isValidTaskTitle("Build DevTask Hub UI"), true, "Valid task title should pass");
  assert.strictEqual(isValidTaskTitle("   "), false, "Empty whitespace title should fail");
  assert.strictEqual(isValidTaskTitle(""), false, "Empty string title should fail");
  assert.strictEqual(isValidTaskTitle(12345), false, "Non-string title should fail");
  console.log("All unit tests passed successfully!");
  process.exit(0);
} catch (error) {
  console.error("Test Assertion Failed:", error.message);
  process.exit(1);
}
