const Country = require("./models.js"); //provides me with models.
const countryData = require("./data.json"); //gives me access to json file.

const languageData = countryData.map(item => {
  //declaring ld to be a map of cd item.
  const language = {
    name: item.name,
    capital: item.capital,
    language: item.languages[0].name
  };

  return language;
});
console.log(languageData);

Country.deleteMany({}).then(() => {
  Country.create(languageData).then(Country => {
    console.log(Country);
    process.exit();
  });
});
