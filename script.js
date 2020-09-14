let picture = document.getElementById("picture");
let title = document.getElementById("title");
let credits = document.getElementById("credits");
let explanation = document.getElementById("explanation");

function renderPic(data) {
  picture.src = data.url;
  title.innerText = `Astronomy Picture of the Day: ${data.date}`;
  credits.innerText = `${data.title} by ${data.copyright}`;
  explanation.innerText = data.explanation;
}


fetch("https://api.nasa.gov/planetary/apod?api_key=2prpAx9yQyfGubyZGxw7CJwoB38HRhs3V0NUG1Tp")
.then(res => res.json())
.then(data => renderPic(data))