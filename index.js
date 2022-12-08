const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());

const allCategory = require('./Data/category.json')
const allNews = require('./Data/informations.json')

app.get('/allcategory',(req,res)=>{
   res.send(allCategory)
})

app.get("/allcategory/news", (req, res) => {
  res.send(allNews);
});

app.get("/categories/:id", (req, res) => {
  id = req.params.id;
  if (id === "1") {
    res.send(allNews);
  } else {
    const category_news = allNews.filter((news) => news.category === id);
    console.log(allNews);
    res.send(category_news);
  }
});

app.get("/", (req, res) => {
  res.send("Groups server is running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
