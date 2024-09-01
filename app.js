const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Helper function to get random items from an array
const getRandomItems = (array, count) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Load data from JSON files
const keywordsloadData = (filename) => {
  const filePath = path.join(__dirname, 'keyworddata', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

const storysloadData = (filename) => {
  const filePath = path.join(__dirname, 'storydata', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

// Define route for extracting keywords
app.post('/keywords', (req, res) => {
  const { selections } = req.body;

  if (!selections || selections.length === 0) {
    return res.status(400).json({ error: 'No selections provided' });
  }

  const dataFiles = {
    직업: 'jobs.json',
    장소: 'place.json',
    장르: 'genres.json',
    시간: 'time.json',
    추상적개념: 'abstraction.json',
    랜덤단어: 'anyword.json',
    판타지직업: 'ujobs.json',
    판타지장소: 'uplace.json'
  };

  const result = {};

  // Process each selection and get random items from the corresponding file
  selections.forEach(({ keyword, count }) => {
    if (dataFiles[keyword]) {
      try {
        const data = keywordsloadData(dataFiles[keyword]);
        result[keyword] = getRandomItems(data, count);
      } catch (error) {
        console.error(`Error reading data file for ${keyword}:`, error);
        result[keyword] = 'Error loading data';
      }
    }
  });

  res.json(result);
});

app.post('/storys', (req, res) => {
  const { selections } = req.body;

  if (!selections || selections.length === 0) {
    return res.status(400).json({ error: 'No selections provided' });
  }

  const dataFiles = {
    학원물: 'academy.json',
    일상물: 'daily.json',
    판타지: 'fantasy.json',
    무협지: 'martial.json',
    로멘스: 'romance.json',
    스포츠: 'sports.json',
    미스터리: 'mystery.json'
  };

  const result = {};

  selections.forEach(({ storys, count }) => {
    if (dataFiles[storys]) {
      try {
        const data = storysloadData(dataFiles[storys]);
        if (data.length === 0) {
          result[storys] = 'No data available';
        } else {
          result[storys] = getRandomItems(data, count);
        }
      } catch (error) {
        console.error(`Error reading data file for ${storys}:`, error);
        result[storys] = 'Error loading data';
      }
    } else {
      result[storys] = 'Invalid story type';
    }
  });

  res.json(result);
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
