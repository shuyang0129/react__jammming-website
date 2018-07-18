let access_token = '';
var client_id = '3ba5c157fd384a51913e7a1a8247c1d1'; // Your client id
var redirect_uri = 'http://localhost:3000/'; // Your redirect uri


// localStorage.setItem(stateKey, state);
var scope = 'user-read-private user-read-email';

let requestUrl = 'https://accounts.spotify.com/authorize';
requestUrl += '?response_type=token';
requestUrl += '&client_id=' + encodeURIComponent(client_id);
requestUrl += '&scope=' + encodeURIComponent(scope);
requestUrl += '&redirect_uri=' + encodeURIComponent(redirect_uri);
console.log(url);


const Spotify = {

    getAccessToken() {
        if(access_token) {
            return access_token;
        } else {
           const url = window.location.href;
           if(url.match(/access_token=([^&]*)/)[1] == null) {
                window.location = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`;
            } else {
                access_token = url.match(/access_token=([^&]*)/)[1];
                const expiresIn = parseInt(url.match(/expires_in=([^&]*)/)[1]);
                setTimeout(() => {
                    access_token = '';
                } , expiresIn * 1000);
                window.history.pushState('Access Token', null, '/');
            }
            return access_token;
        }
    }
};

Spotify.getAccessToken();


// export default Spotify;
access_token=[]