
let books = [
    {
      "name": "Die Geheimnisse des Ozeans",
      "author": "Clara Meer",
      "likes": 1250,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2018,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
        },
        {
          "name": "Bookworm84",
          "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
        },
        {
          "name": "FantasyFanatic",
          "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
        },
        {
          "name": "SciFiGuru",
          "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
        },
        {
          "name": "NovelLover",
          "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
        }
      ]
    },
    {
      "name": "Der vergessene Pfad",
      "author": "Maximilian Schwarz",
      "likes": 980,
      "liked": false,
      "price": 14.50,
      "publishedYear": 2021,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Die Farben des Himmels",
      "author": "Laura Blau",
      "likes": 1520,
      "liked": true,
      "price": 22.95,
      "publishedYear": 2019,
      "genre": "Romantik",
      "comments": [
        {
          "name": "LeserPeter",
          "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
        },
        {
          "name": "BookLover21",
          "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
        },
        {
          "name": "FantasyNerd",
          "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
        },
        {
          "name": "SciFiEnthusiast",
          "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
        },
        {
          "name": "ReadingAddict",
          "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
        }
      ]
    },
    {
      "name": "Das Rätsel der Zeit",
      "author": "Alexander Weiss",
      "likes": 750,
      "liked": false,
      "price": 18.00,
      "publishedYear": 2020,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BuchKenner",
          "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
        },
        {
          "name": "LeseWurm",
          "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
        }
      ]
    },
    {
      "name": "Der letzte Wächter",
      "author": "Sabine Grün",
      "likes": 1300,
      "liked": true,
      "price": 16.75,
      "publishedYear": 2017,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Im Schatten des Mondes",
      "author": "Philipp Silber",
      "likes": 890,
      "liked": false,
      "price": 12.30,
      "publishedYear": 2022,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BücherLiebhaber",
          "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
        },
        {
          "name": "Leseratte",
          "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
        }
      ]
    },
    {
      "name": "Jenseits der Sterne",
      "author": "Oliver Schwarz",
      "likes": 1450,
      "liked": true,
      "price": 21.00,
      "publishedYear": 2015,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
        }
      ]
    },
    {
      "name": "Das verborgene Königreich",
      "author": "Elena Gold",
      "likes": 920,
      "liked": false,
      "price": 17.50,
      "publishedYear": 2020,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Bookworm92",
          "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
        }
      ]
    },
    {
      "name": "Liebe in Zeiten des Krieges",
      "author": "Emilia Rot",
      "likes": 1800,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2016,
      "genre": "Romantik",
      "comments": [
        {
          "name": "Bibliophile23",
          "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
        },
        {
          "name": "StorySeeker",
          "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
        },
        {
          "name": "SciFiExplorer",
          "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
        }
      ]
    }
  ]



function init() {
  getFromLocalStorage()
  renderMainContent()
}

function renderMainContent() {
  contentRef = document.getElementById("main_content")
  contentRef.innerHTML = ""
  document.getElementById("button_all_books").classList.add("active_rn")
  document.getElementById("button_favorites").classList.remove("active_rn")
  document.getElementById("button_random").classList.remove("active_rn")
  for (let index = 0; index < books.length; index++) {
    let myContent = books[index];
    contentRef.innerHTML += getMainContent(index);
    for (let i=0; i< books[index].comments.length;i++) {
      let myName = books[index].comments[i].name;
      let myComment = books[index].comments[i].comment;
      document.getElementById(`comments_window_${index}`).innerHTML += getCommentSection(myName, myComment);
    }
  }
}

function getMainContent(index) {
  return `
            <div class="book_display">
              <div class="book_information">
                <div class="book_cover">
                    <img src="./assets/img/cover/${index}.jpg" alt="">
                </div>
                <div class="book_details">
                    <h2 id="book_name">${books[index].name}</h2>
                    <p id="book_author"><b>Autor: </b> ${books[index].author}</p>
                    <p id="book_year"><b>Erscheinungsjahr: </b> ${books[index].publishedYear}</p>
                    <p id="book_genre"><b>Genre :</b> ${books[index].genre}</p>
                    <span id="book_price"> ${books[index].price.toFixed(2).replace(`.`, `,`)} €</span>
                    <button id="book_likes" class="liked_${books[index].liked}" onclick="toggleLikes(${index})"> ${books[index].likes} ♥</button>
                </div>
              </div>
              <button id="comment_headline" onclick="toggleComments(${index})">Kommentare (${books[index].comments.length})</button>
              <div id="comment_section_${index}" class="d_none">
                <div id="comments_window_${index}" class="comments_window"> </div>
                <div id="comments_inputs">
                  <input id="user_name_input_${index}" class="user_input" type="text" placeholder="Name...">
                  <input id="user_input_${index}" class="user_input" type="text" placeholder="Verfasse einen Kommentar...">
                </div>
                <button id="button_send_user_input_${index}" class="button_send_user_input" onclick="sendComment(${index})">Senden</button>
              </div>
            </div>

  `
}

function getCommentSection(myName, myComment) {
return `
<p> <span class="user_name" >${myName} : </span> ${myComment} </p>
`
}

function sendComment(index) {
  let userName = document.getElementById(`user_name_input_${index}`).value
  let userInput = document.getElementById(`user_input_${index}`).value

  books[index].comments.push({name: userName, comment: userInput})
  console.log(books[index].comments);
  saveToLocalStorage()
  renderMainContent()
  toggleComments(index)
}


function toggleComments(index) {
  document.getElementById(`comment_section_${index}`).classList.toggle("d_none")
}

function toggleLikes(index) {
  if (books[index].liked == true) {
    books[index].liked = false;
    books[index].likes--
    saveToLocalStorage()
    renderMainContent();
  }
  else {
    books[index].liked = true;
    books[index].likes++
    saveToLocalStorage()
    renderMainContent();
  }
}

function renderFavoriteContent() {
  contentRef = document.getElementById("main_content")
  contentRef.innerHTML = ""
  document.getElementById("button_all_books").classList.remove("active_rn")
  document.getElementById("button_favorites").classList.add("active_rn")
  document.getElementById("button_random").classList.remove("active_rn")

  for (let index = 0; index < books.length; index++) {
    let myContent = books[index];
    if (books[index].liked == true) {
      contentRef.innerHTML += getMainContent(index);
      for (let i=0; i< books[index].comments.length;i++) {
        let myName = books[index].comments[i].name;
        let myComment = books[index].comments[i].comment;
        document.getElementById(`comments_window_${index}`).innerHTML += getCommentSection(myName, myComment);
      }
    }  
  }
}


function saveToLocalStorage() {
  localStorage.setItem("myBooks",JSON.stringify(books))
}

function getFromLocalStorage() {
  let savedData = localStorage.getItem("myBooks")
  books = JSON.parse(savedData)
}

function renderRandomBook() {
  contentRef = document.getElementById("main_content")
  contentRef.innerHTML = ""
  document.getElementById("button_all_books").classList.remove("active_rn")
  document.getElementById("button_favorites").classList.remove("active_rn")
  document.getElementById("button_random").classList.add("active_rn")

  let randomBook = Math.floor(Math.random() * books.length);
  document.getElementById("main_content").innerHTML += getMainContent(randomBook);
}