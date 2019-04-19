'use strict';

const apiKey = 'NLuX9WG7xN6ccrlNQPYq88OeUPE5ubhv4sigYpUk';
const searchUrl = 'https://api-gate2.movieglu.com/filmLiveSearch/';
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

function getMovies(query, maxResults){
const params = {
  apikey: apiKey,
  q: query,
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
    let query = $('#js-search-term').val();
    maxResults = $('#js-max-results').val();
    console.log(query+" "+maxResults);
    getMovies(query, maxResults);
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

function openCalendar(){
  console.log("openCalendar ran.")
  $('.calendar').on('click', function(){
    $('main').html(`<div id="calendarContainer"><div class="month">
    <ul>
      <li class="prev">&#10094;</li>
      <li class="next">&#10095;</li>
      <li>August<br><span style="font-size:18px">2017</span></li>
    </ul>
  </div>
  <ul class="weekdays">
    <li>Mo</li>
    <li>Tu</li>
    <li>We</li>
    <li>Th</li>
    <li>Fr</li>
    <li>Sa</li>
    <li>Su</li>
  </ul>
  <ul class="days">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li><span class="active">10</span></li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
    <li>19</li>
    <li>20</li>
    <li>21</li>
    <li>22</li>
    <li>23</li>
    <li>24</li>
    <li>25</li>
    <li>26</li>
    <li>27</li>
    <li>28</li>
    <li>29</li>
    <li>30</li>
  </ul>
  </div>`)
  })
}
/*
twttr.widgets.createTimeline(
    {
      sourceType: "profile",
      screenName: "LanternCinema"
    },
    document.getElementById("twitter-timeline")
  );
*/
openCalendar();
  
  