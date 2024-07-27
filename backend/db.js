const mongoose = require('mongoose');

const mongoDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/GoFoodMERN', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
    
    const db = mongoose.connection.db;

    const fetched_data = db.collection('food_items');
    const data = await fetched_data.find({}).toArray();
    if (data) {
      global.food_items = data;
      //console.log('Fetched data:', global.food_items);
    } else {
      console.log('No data found in collection.');
    }
  
    const foodCategory = db.collection('foodCategory');
    const catData = await foodCategory.find({}).toArray();
    if (catData) {
      global.foodCategory = catData;
      
    } else {
      console.log('No data found in collection.');
    }
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

module.exports = mongoDB;
