const request = require('request');                             //imports the 'request' library which makes http requests to send request to web servers and recieve responses

console.log('Request library loaded successfully');

const apiURL = 'https://api.thecatapi.com/v1/breeds/search';  // defining the API enpoint URL
const breedName = process.argv[2];

if (!breedName) {
  console.error('Provide a breed name.');
  process.exit(1);
}

const URL = `${apiURL}?q=${breedName}`;                //creating the URL w query parameters

request(URL, (error, response, body) => {             // API request
  if (error) {
    console.error('Error fetching breed data:', error.message);
    return;
  }

  const data = JSON.parse(body);                   //parse the JSON reponse
  console.log(data);
  console.log(typeof data);

  if (data.length === 0) {                      // check if breed found
    console.log(`Breed "${breedName}" not found`);
    return;
  }

  // console.log(data[0].description);

});



