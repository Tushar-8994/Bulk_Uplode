const express = require('express');
const DataModel = require('../model/schema');

class DataService {
  static async saveData(data) {
    try {
      const result = await DataModel.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }


}

module.exports = DataService;