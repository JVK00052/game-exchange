export let APIURL = '';

switch (window.location.hostname) {
    // this is the deployed angular application
    case '':
        // this is the full url of your deployed API
        APIURL = 'https://naildit-serverside.herokuapp.com'
        break;
    default:
        // this is the local host name of your API
        APIURL = 'http://localhost:<Port of your local API>';
}