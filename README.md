## Jammming



### Introduction
This project is about a React web application called Jammming. By interacting with the Spotify API to build a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.

### Features
Below is a list of the website's features:

- Spotify Login — the first time a user searches for a song, album, or artist, Spotify will ask them to log in or set up a new account. You will need to follow the steps in the Spotify Developer Guide to register your application.
- Search by Song, Album, or Artist — a user can type the name of a song, artist, or album into the search bar and click the SEARCH button. The app will request song data about the user's input from the Spotify library (find Spotify endpoints here).
- Populate Results List — Jammming displays the list of returned tracks from the user's query.
- Add Song to a Custom Playlist — users can add a track to their playlist by selecting a + sign on the right side of the track's display container.
- Remove Song from Custom Playlist — users can remove a track from their playlist by selecting a - sign on the right side of the track's display container.
- Change Playlist Title — users can change the title of their custom playlist.
- Save Playlist to Account — users can save their custom playlist by clicking a button called SAVE TO SPOTIFY.

### Screenshot
![alt tag](https://github.com/shuyang0129/react__jammming-website/blob/master/jammming.png?raw=true "Jamming Project")


### How to use
1. Input A song title
2. Click search button
3. Authorizing spotify access token (Do not need the step if you already authorized)
4. Add songs you like from search result to playlist
5. Repeat step 1 - 4 until you satisfy your playlist
6. Name a title for the playlist
7. Click the button "Save to Spotify"
8. You will see in your Spotify account, there is a new playlist added

### Where to use Jammming

The project is deployed by using Surge. It is available from:
http://jammming-by-shuyang.surge.sh/




