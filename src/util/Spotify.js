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
    },

    search(term) {
        fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: { Authorization: `Bearer ${this.accessToken}`}
        });
    }
};

export default Spotify;