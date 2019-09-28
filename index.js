'use strict'

const apiKey='z8Ocb94Fyc6Ni5Utk5tPFYJww405HsOPYVqfhNXV';
const searchURl= 'https://developer.nps.gov/api/v1/parks';



getNationalParks(query, maxResults=10){
  const param ={
    key: apiKey, 
    q: query, 
    max: maxResults
  };
  const queryString = formatQueryParams(param);
  const url = searchURL + '?' + queryString;

  console.log(url);

  fetch(url)
    .then(response => {
      if(response.ok) {
        return response.json();
      }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(reponseJson))
    .catch(err =>{
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function watchForm(){
  $('form').submit(event =>{
    event.preventDefault();
    const searchTerm = $('#js-search-term').val();
    const maxResult = $('#js-max-results').val();
    getNationalParks(searchTerm, maxResult);
  });
}

$(watchForm);