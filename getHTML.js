function getMainContent(index) {
  return `
            <div class="book_display">
              <div class="book_information">
                <div class="book_cover">
                    <img src="./assets/img/cover/${index}.jpg" alt="Bild des Buchcovers">
                </div>
                <div class="book_details">
                    <h2 id="book_name">${books[index].name}</h2>
                    <p id="book_author"><b>Autor: </b> ${books[index].author}</p>
                    <p id="book_year"><b>Erscheinungsjahr: </b> ${books[index].publishedYear}</p>
                    <p id="book_genre"><b>Genre :</b> ${books[index].genre}</p>
                    <span id="book_price"> ${books[index].price.toFixed(2).replace(`.`, `,`)} €</span>
                    <div class="blur">
                      <button id="book_likes" class="liked_${books[index].liked}" onclick="toggleLikes(${index})"> ${books[index].likes} ♥</button>
                    </div>
                  </div>
              </div>
              <button id="comment_headline" onclick="toggleComments(${index})">Kommentare (${books[index].comments.length})</button>
              <div id="comment_section_${index}" class="d_none">
                <div id="comments_window_${index}" class="comments_window"> </div>
                <div id="comments_inputs">
                  <input id="user_name_input_${index}" class="user_input_name" type="text" placeholder="Name...">
                  <input id="user_input_${index}" class="user_input" type="text" placeholder="Verfasse einen Kommentar...">
                </div>
                <button id="button_send_user_input_${index}" class="button_send_user_input" onclick="sendComment(${index})">Senden</button>
              </div>
            </div>
          `
}

function getCommentSection(index, i) {
return `
<p> <span class="user_name" >${books[index].comments[i].name} : </span> <br> ${books[index].comments[i].comment} </p>
`
}