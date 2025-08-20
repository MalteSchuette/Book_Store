function init() {
  getFromLocalStorage()
  renderContent("all")
}

function renderContent(mode) {
  let contentRef = document.getElementById("main_content");
  contentRef.innerHTML = "";

  document.getElementById("button_all_books").classList.remove("active_rn");
  document.getElementById("button_favorites").classList.remove("active_rn");
  document.getElementById("button_random").classList.remove("active_rn");

  if (mode === "all") {
    document.getElementById("button_all_books").classList.add("active_rn");
  }
  else if (mode === "favorites") {
    document.getElementById("button_favorites").classList.add("active_rn");
  }

  for (let index = 0; index < books.length; index++) {
    let myContent = books[index];

    if (mode === "favorites" && !myContent.liked) {
      continue
    }

    contentRef.innerHTML += getMainContent(index);

    for (let i = 0; i < books[index].comments.length;i++) {
      document.getElementById(`comments_window_${index}`).innerHTML += getCommentSection(index, i);
    }
  }
}

function sendComment(index) {
  let userName = document.getElementById(`user_name_input_${index}`).value
  let userInput = document.getElementById(`user_input_${index}`).value

  books[index].comments.push({name: userName, comment: userInput})
  saveToLocalStorage()
  renderContent(`all`)
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
    renderContent(`all`);
  }
  else {
    books[index].liked = true;
    books[index].likes++
    saveToLocalStorage()
    renderContent()`all`;
  }
}

function saveToLocalStorage() {
  localStorage.setItem("myBooks",JSON.stringify(books))
}

function getFromLocalStorage() {
  let savedData = localStorage.getItem("myBooks")
  if (savedData !== null && savedData !== "") {
    books = JSON.parse(savedData)
  }
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

function showBurgerMenu() {
  document.getElementById("burger_menu").classList.toggle('active')
  document.getElementById("burger_nav").classList.toggle("d_none")
}