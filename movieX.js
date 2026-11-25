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
];

const container = document.getElementById("movies-container");

for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];

  const card = document.createElement("div");

  card.classList.add("card");

  const title = document.createElement("h2");
  const releaseDate = document.createElement("p");
  const score = document.createElement("div");
  const image = document.createElement("img");

  title.classList.add("title", "is-1");
  image.classList.add("image", "image");

  title.textContent = movie.name;
  releaseDate.textContent = movie.releaseDate;
  score.textContent = movie.imdbScore;
  image.src = movie.poster;

  card.appendChild(title);
  card.appendChild(releaseDate);
  card.appendChild(score);
  card.appendChild(image);

  container.appendChild(card);
}
