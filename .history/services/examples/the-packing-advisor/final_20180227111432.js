const weather = require("weather-js");

weather.find({ search: "Israel", degreeType: "C" }, function(
  err,
  result
) {
  let youNeedCoat = false;
  result.forEach(location => {
    location.forecast.forEach(specificDay => {
      if (specificDay.low < 15) {
        youNeedCoat = true;
      }
    });
  });
  console.log(youNeedCoat ? "You need a coat" : "Leave your coat");
});
