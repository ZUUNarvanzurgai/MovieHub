const movies = [
  {
    name: "GODZILLA VS KONG",
    releaseDate: "2021, March, 31",
    imdbScore: "6.3",
    poster: "https://i.ebayimg.com/images/g/uHoAAOSwSktk3jMI/s-l1200.jpg",
  },
  {
    name: "Transformers: Dark of the Moon",
    releaseDate: "2011, June, 28",
    imdbScore: "6.2",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBggSkmmeDA9WLRXK7XbmqqKUCGH4VpJl_mqVGyNOiY90PYVPqnH4EAuQ&s=10",
  },
  {
    name: "American Sniper",
    releaseDate: "2014, December, 25",
    imdbScore: "7.1",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Fast & Furios",
    releaseDate: "2015, April, 2",
    imdbScore: "7.1",
    poster:
      "https://m.media-amazon.com/images/I/81qSIqOes-L._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Avengers: Endgame",
    releaseDate: "2019, April, 26",
    imdbScore: "8.4",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_XB-D8sL9KHIz-5gjeGPcu-Wf-ZJJR-D3xPMNUj_abz79VgWf4s9slVam&s=10",
  },
  {
    name: "Маш нууц 2",
    releaseDate: "2016, August, 13",
    imdbScore: "9.9",
    poster:
      "https://cdn.greensoft.mn/uploads/users/45/images/Mash%20nuuts%202.jpg",
  },
  {
    name: "Rush Hour",
    releaseDate: "2007, August, 10",
    imdbScore: "6.3",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNt9_fSh8CXjhgl6l03zotzsNibc3CoOIrBNv1Sc-exUItLRK8oU5I0Ne8&s=10",
  },
  {
    name: "The Boss Baby",
    releaseDate: "2017, March, 31",
    imdbScore: "6.3",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_xwncQFDMkMnFTU07TJ2aGd0jEtwqIQSsWwfaB5Cr2Uka8kHefr9Sh1-HSDLgynp3C_dS&s=10",
  },
  {
    name: "The Godfather",
    releaseDate: "1972, March, 24",
    imdbScore: "9.2",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0LPDMN92cFHzaZTfGMFDApucM3dTSPO7htjdQXYwj_J8w5msIFmFmRQ4&s=10",
  },
  {
    name: "The Dark Knight",
    releaseDate: "2008, july, 18",
    imdbScore: "9.1",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  },
];
const container = document.getElementById("movies-container");

for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];

  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.classList.add("poster");
  image.src = movie.poster;
  image.alt = movie.name;
  image.loading = "lazy";
  image.onerror = () => card.classList.add("no-poster");

  const score = document.createElement("div");
  score.classList.add("score");
  const value = parseFloat(movie.imdbScore);
  if (value >= 8) score.classList.add("top");
  else if (value < 6.5) score.classList.add("mid");
  score.textContent = "★ " + movie.imdbScore;

  const info = document.createElement("div");
  info.classList.add("info");

  const title = document.createElement("h3");
  title.classList.add("title");
  title.textContent = movie.name;

  const releaseDate = document.createElement("p");
  releaseDate.classList.add("date");
  releaseDate.textContent = movie.releaseDate;

  info.appendChild(title);
  info.appendChild(releaseDate);

  card.appendChild(image);
  card.appendChild(score);
  card.appendChild(info);

  container.appendChild(card);
}
