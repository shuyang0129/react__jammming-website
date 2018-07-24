let access_token = '';
let playlistId = '';
const client_id = '3ba5c157fd384a51913e7a1a8247c1d1'; // Your client id
const redirect_uri = 'http://localhost:3000'; // Your redirect uri ex http://localhost:3000/ https://jammming-by-shuyang.surge.sh

const Spotify = {
    async getAccessToken() {       
        try {
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
        } catch(error) {
            console.log(error);
        }
    },

    async search(term) {       
        try {
            await this.getAccessToken();
            const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
                headers: { Authorization: `Bearer ${access_token}` }
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    title: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }));
            }
            throw new Error('Request failed');
        } catch(error) {
            console.log(error);
        }
    },

    async getUserId() {
        try {
            const response = await fetch(`https://api.spotify.com/v1/me`, {
                headers: { Authorization: `Bearer ${access_token}` }
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.id;
            }
            throw new Error('Request failed');
        } catch(error) {
            console.log(error);
        }
    },

    async createPlaylist(playlistTitle) {
        try {
            const userId = await this.getUserId();
            const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                method: 'POST',
                headers: { Authorization: `Bearer ${access_token}` },
                "Content-Type": "application/json",
                body: JSON.stringify({
                    name: playlistTitle
                }),
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                playlistId = await jsonResponse.id;
                // this.addTracksToPlaylist();
                return playlistId;
            }
            throw new Error('Request failed');
        } catch(error) {
            console.log(error);
        }
    },

    async addTracksToPlaylist(uris) {
        try {
            const userId = await this.getUserId();
            const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks` ,{
                method: 'POST',
                headers: { Authorization: `Bearer ${access_token}` },
                "Content-Type": "application/json",
                body: JSON.stringify({
                    uris: uris
                })
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            throw new Error('Request failed');
        } catch(error) {
            console.log(error);
        }
    },

    async savePlaylist(playlistTitle, uris) {
        this.getAccessToken();
        await this.createPlaylist(playlistTitle);
        await this.addTracksToPlaylist(uris);
    }
};

export default Spotify;