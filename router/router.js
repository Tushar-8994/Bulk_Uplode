const express = require('express');
const router = express.Router();
const DataService = require('../service/service');
const multer = require('multer');
const xlsx = require('xlsx');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/bulk-save', upload.single('files'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
  
      const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
  
  
      const data = xlsx.utils.sheet_to_json(sheet, { header: ['name', 'age'], range: 1 });

      const savedData = await DataService.saveData(data);
  
      res.status(201).json({ message: 'File data saved successfully', data: savedData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  module.exports = router;