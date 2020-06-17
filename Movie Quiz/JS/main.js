var quiz = document.querySelector('h1');
var answer = document.querySelectorAll('h3');
var correctField = document.getElementsByClassName('answer');
var btn = document.querySelector('button');

function getID(){
     return Math.floor((Math.random() * 20000) + 10000)
    } 
function getRandom(){
  return Math.floor((Math.random() * 4) + 0)}

btn.addEventListener('click', function(){
    iDsearch = getID();
    imdb = " http://www.omdbapi.com/?i=tt00" + iDsearch + "&apikey=55dbdfed";
     myRequest = new XMLHttpRequest();
      myRequest.open('GET', imdb);
      myRequest.onload = function(){
       ourData = JSON.parse(myRequest.responseText);
        movieData = ourData.Actors;
        movieYear = ourData.Year;
         getActor = movieData.split(',', 4);
         correct = getActor[0];

function shuffle(arr) {
  var ctr = arr.length, temp, index;
   while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arr[ctr];
    arr[ctr] = arr[index];
    arr[index] = temp;
  } return arr;
}

var myArray = [0, 1, 2, 3];
var mixedArr = shuffle(getActor);

for(var i = 0; i < mixedArr.length; i++){
answer[i].innerHTML = mixedArr[i];   

function getCorrect() {
  if(getActor[i] === correct){
    return correctField[i];
  } 
}
  correctAnswer = getCorrect();
   
if(getActor.length < 4){
   quiz.innerHTML = 'Out of film stock, skip to the next one';
   for(var i = 0; i < 4; i++){
     answer[i].innerHTML = '';
 }
} else if(movieYear < 1933  && movieYear > 1927 && getActor.length >= 4){
    quiz.innerHTML = ourData.Title + ' from ' + ourData.Year + ' was directed by?';
    answer[getRandom()].innerHTML = ourData.Director;
} else if(movieYear < 1926 && getActor.length >= 4){
    quiz.innerHTML = 'The lead in ' + ourData.Director + "'s classic " + ourData.Title + ' was played by?';
} else {
  quiz.innerHTML = 'Who plays the leading role in the movie  ' + ourData.Title + ' from ' + ourData.Year + '?';
  
    }
  }
}
   myRequest.send();
});
