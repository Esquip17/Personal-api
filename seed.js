const Country = require("./models.js"); //take me to models
const countryData = require("./data.json"); //take me to models.
Country.deleteMany({}).then(() => {
  Country.create(countryData).then(Country => {
    console.log(Country);
    process.exit();
  });
});
