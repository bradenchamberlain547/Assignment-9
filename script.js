let movies = [];

document.getElementById("movieForm").addEventListener("submit", addMovie);

function addMovie(event){
    event.preventDefault();

    const title = document.getElementById("txtTitle").value;
    const director = document.getElementById("txtDirector").value;
    const rated = document.getElementById("txtRated").value;

    const movie = {
        title: title,
        director: director,
        rated: rated
    }

    movies.push(movie);
    updateTable();
    
    document.getElementById("txtTitle").value = '';
    document.getElementById("txtDirector").value = '';
    document.getElementById("txtRated").value = '';
}

function updateTable() {
    const tblBod = document.querySelector("#movieTable tbody");
    tblBod.innerHTML = "";

    movies.forEach((movie) => {
    const row = document.createElement("tr");
    row.innerHTML = 
    `<td>${movie.title}</td>
    <td>${movie.director}</td>
    <td>${movie.rated}</td>`;
    tblBod.appendChild(row);
})
}