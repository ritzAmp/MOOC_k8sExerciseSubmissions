function generateRandomString() {
  // Generate UUID-like random string
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function logRandomString() {
  const timestamp = new Date().toISOString();
  const randomString = generateRandomString();
  console.log(`${timestamp}: ${randomString}`);
}

logRandomString();

setInterval(logRandomString, 5000);

