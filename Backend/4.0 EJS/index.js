import express from "express";


const app = express();

app.get("/", (req, res) => {
    const date = new Date();
    const day = date.getDay()

    let type = "weekday";
    let advice = "Lets work";

    if (day === 0 || day === 6) {
        type = "weekend";
        advice = "Lets rest";
      }
  res.render("index.ejs", {
    dayType: type,
    advice: advice,
  })
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
  