'use strict';

const apiKey = '584d20c1';
const searchUrl = 'http://www.omdbapi.com/';
let maxResults = 10;

function displayMovieResults(responseJson){
  console.log(responseJson);
  $('ol').remove();
  $('#results-container').append('<ol></ol>');
  for(let i = 0; i < maxResults; i++){
    $('ol').append(`
        <li>
        <p>Movie Title: ${responseJson.Search[i].Title}</p>
        <p>Year Released: ${responseJson.Search[i].Year} </p>
        <img class="moviePosters" src="${responseJson.Search[i].Poster}" alt="Oops! Looks like we're missing this poster!">
        </li>`);
  }
  
}

function formatQueryParams(params){
  const queryItems = Object.keys(params)
  .map(key => `${key}=${params[key]}`)
  return queryItems.join('&');
}

function getMovies(searchTerm, maxResults){
const params = {
  apikey: apiKey,
  s: searchTerm,
  maxResults
};

const queryString = formatQueryParams(params);
const url = searchUrl + '?' + queryString;

fetch(url)
.then(response =>response.json())
.then(responseJson => displayMovieResults(responseJson))
}

function watchForm(){
  $('#search-form').submit(function(event){
    event.preventDefault();
    let searchTerm = $('#js-search-term').val();
    maxResults = $('#js-max-results').val();
    console.log(searchTerm+" "+maxResults);
    getMovies(searchTerm, maxResults);
  })
}

function openFilmSearch(){
  console.log("openFilmSearch ran.")
  $('.movieSearch').on('click', function(){
    $('main').html(`<h1 class="searchTitle">Search for a movie</h1>
      <form id="search-form">
            <label for="search-term">Search by Name</label>
            <input type="text" name="search-term" id="js-search-term" value="Labyrinth">

            <label for="max-results">Maximum results to return</label>
            <input type="number" name="max-results" id="js-max-results" value="10">
  
            <input type="submit" value="Submit">
        </form>
        <div id="results-container"></div>`)
        watchForm();
  })
}


$(function(){
  console.log('Movie Search App loaded! Waiting for user input.')
  openFilmSearch();
})

  
  