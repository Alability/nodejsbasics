// import fs from 'fs';
import fs from 'fs/promises';

//readfile() - callback
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// readFileSync() - Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data);

// readfile() - Promise version .then()
// fs.readFile('./test.txt', 'utf-8')
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

// readfle() - async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8');
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
}

//writefile() 
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello, I am writing to this file');
        console.log("file written to...");
    } catch (error) {
        console.log(error);
    }
}

// appendFile()
const appendFile = async () => {
    try {
      await fs.appendFile('./test.txt', '\nThis is appended text');
      console.log('File appended to...');
    } catch (error) {
      console.log(error);
    }
  };
  
  writeFile();
  appendFile();
  readFile();