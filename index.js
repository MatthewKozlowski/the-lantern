function openFilmSearch(){
  console.log("openFilmSearch ran.")
  $('.links').on('click', function(){
    $('main').html(`<h1>It Work!</h1>`);
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
openFilmSearch();
  
  