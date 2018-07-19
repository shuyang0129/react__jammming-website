let access_token = '';
const client_id = '3ba5c157fd384a51913e7a1a8247c1d1'; // Your client id
const redirect_uri = 'http://localhost:3000/'; // Your redirect uri

const Spotify = {
    getAccessToken() {
        if(access_token) {
            return access_token;
        } else {
           const url = window.location.href;
           if(url.match(/access_token=([^&]*)/) == null) {
                window.location = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`;
            } else {
                access_token = url.match(/access_token=([^&]*)/)[1];
                const expiresIn = parseInt(url.match(/expires_in=([^&]*)/)[1], 10);
                setTimeout(() => {
                    access_token = '';
                } , expiresIn * 1000);
                window.history.pushState('Access Token', null, '/');
            }
            return access_token;
        }
    },

    search(term) {
        this.getAccessToken();
        
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: { Authorization: `Bearer ${access_token}`}
        }).then(response => {
            if(response.ok) {
                return response.json();
            }
        }).then(jsonResponse => {
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                title: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        });

        // fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        //     headers: { Authorization: `Bearer ${this.accessToken}`}
        // }).then(response => {
        //     if(response.ok) {
        //         return response.json();
        //     }
        //     throw new Error('Request failed!');
        // }, networkError => console.log(networkError.message))
        //     .then(jsonResponse => {
        //         if(jsonResponse === undefined || jsonResponse.length == 0) {
        //             return [];
        //         } else {
        //             console.log(jsonResponse);
        //         }
        //     });
    }
};

export default Spotify;