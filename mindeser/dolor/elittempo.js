// Optimized Save Function
function saveFile(content, filename) {
  // Check if content and filename are provided
  if (!content || !filename) {
    console.error('Error: Content or filename is missing.');
    return false;
  }

  try {
    // Use the File System module for I/O operations
    const fs = require('fs');

    // Write content to the file asynchronously
    fs.writeFile(filename, content, 'utf8', (err) => {
      if (err) {
        console.error('Error saving the file:', err);
        return false;
      }
      console.log('File saved successfully!');
    });

    return true;
  } catch (error) {
    console.error('An error occurred:', error);
    return false;
  }
}

// Example usage:
// saveFile('Hello, world!', 'greeting.txt');
