
var apiBaseUrl = 'https://api.spotify.com';

GET /v1/albums/{id}	Get an album	album	OAuth
GET	/v1/albums?ids={ids} Get several albums	albums	OAuth
GET	/v1/albums/{id}/tracks	Get an albums tracks	tracks*	OAuth
GET /v1/artists/{id} Get an artist	artist	OAuth
GET /v1/artists?ids={ids} Get several artists	artists	OAuth
GET	/v1/artists/{id}/albums	Get an artists albums	albums*	OAuth
GET	/v1/artists/{id}/top-tracks	Get an artists top tracks	tracks	OAuth
GET	/v1/artists/{id}/related-artists	Get an artists related artists	artists	OAuth
GET	v1/audio-analysis/{id}	Get Audio Analysis for a Track	audio analysis object	OAuth
GET	/v1/audio-features/{id}	Get audio features for a track	audio features	OAuth
GET	/v1/audio-features?ids={ids}	Get audio features for several tracks	audio features	OAuth
GET	/v1/browse/featured-playlists	Get a list of featured playlists	playlists	OAuth
GET	/v1/browse/new-releases	Get a list of new releases	albums*	OAuth
GET	/v1/browse/categories	Get a list of categories	categories	OAuth
GET	/v1/browse/categories/{id}	Get a category	category	OAuth
GET	/v1/browse/categories/{id}/playlists	Get a categorys playlists	playlists*	OAuth
GET	/v1/me	Get current users profile	user	OAuth
GET	/v1/me/following	Get Followed Artists	artists	OAuth
GET	/v1/me/following/contains	Check if User Follows Users or Artists	true/false	OAuth
PUT	/v1/me/following	Follow Artists or Users	-	OAuth
PUT	/v1/users/{owner_id}/playlists/{playlist_id}/followers	Follow a Playlist	-	OAuth
DELETE	/v1/me/following	Unfollow Artists or Users	-	OAuth
DELETE	/v1/users/{owner_id}/playlists/{playlist_id}/followers	Unfollow a Playlist	-	OAuth
PUT	/v1/me/tracks?ids={ids}Save tracks for user	-	OAuth
GET /v1/me/tracks Get users saved tracks	saved tracks	OAuth
DELETE	/v1/me/tracks?ids={ids}	Remove users saved tracks	-	OAuth
GET /v1/me/tracks/contains?ids={ids} Check users saved tracks	true/false	OAuth
PUT	/v1/me/albums?ids={ids} Save albums for user	-	OAuth
GET /v1/me/albums Get users saved albums	saved albums	OAuth
DELETE	/v1/me/albums?ids={ids}	Remove users saved albums	-	OAuth
GET /v1/me/albums/contains?ids={ids} Check users saved albums	true/false	OAuth
GET	/v1/me/top/{type}	Get a users top artists or tracks	artists or tracks	OAuth
GET	/v1/recommendations	Get recommendations based on seeds	recommendations object	OAuth
GET /v1/search?type=album	Search for an album	albums*	OAuth
GET /v1/search?type=artist Search for an artist	artists	OAuth
GET	/v1/search?type=playlist	Search for a playlist	playlists*	OAuth
GET	/v1/search?type=track	Search for a track	tracks	OAuth
GET /v1/tracks/{id} Get a track	tracks	OAuth
GET /v1/tracks?ids={ids} Get several tracks	tracks	OAuth
GET /v1/users/{user_id} Get a users profile	user*	OAuth
GET	/v1/users/{user_id}/playlists	Get a list of a users playlists	playlists*	OAuth
GET	/v1/me/playlists	Get a list of the current users playlists	playlists*	OAuth
GET	/v1/users/{user_id}/playlists/{playlist_id}	Get a playlist	playlist	OAuth
GET	/v1/users/{user_id}/playlists/{playlist_id}/tracks	Get a playlists tracks	tracks	OAuth
POST	/v1/users/{user_id}/playlists	Create a playlist	playlist	OAuth
PUT	/v1/users/{user_id}/playlists/{playlist_id}	Change a playlists details	-	OAuth
POST	/v1/users/{user_id}/playlists/{playlist_id}/tracks	Add tracks to a playlist	-	OAuth
DELETE	/v1/users/{user_id}/playlists/{playlist_id}/tracks	Remove tracks from a playlist	snapshot_id	OAuth
PUT	/v1/users/{user_id}/playlists/{playlist_id}/tracks	Reorder a playlists tracks	snapshot_id	OAuth
PUT	/v1/users/{user_id}/playlists/{playlist_id}/tracks	Replace a playlists tracks	-	OAuth
GET	/v1/users/{user_id}/playlists/{playlist_id}/followers/contains	Check if Users Follow a Playlist	true/false	OAuth
PUT	/v1/users/{user_id}/playlists/{playlist_id}/images	Upload a Custom Playlist Cover Image		OAuth
GET	v1/me/player/recently-played	Get Current User’s Recently Played Tracks	play history object	OAuth
GET	/v1/me/player/devices	Get a User’s Available Devices		OAuth
GET	/v1/me/player	Get Information About The User’s Current Playback		OAuth
GET	/v1/me/player/currently-playing	Get the User’s Currently Playing Track		OAuth
PUT	/v1/me/player	Transfer a User’s Playback		OAuth
PUT	/v1/me/player/play	Start/Resume a User’s Playback		OAuth
PUT	/v1/me/player/pause	Pause a User’s Playback		OAuth
POST	/v1/me/player/next	Skip User’s Playback To Next Track		OAuth
POST	/v1/me/player/previous	Skip User’s Playback To Previous Track		OAuth
PUT	v1/me/player/seek	Seek To Position In Currently Playing Track		OAuth
PUT	/v1/me/player/repeat	Set Repeat Mode On User’s Playback		OAuth
PUT	/v1/me/player/volume	Set Volume For User’s Playback		OAuth
PUT	/v1/me/player/shuffle	Toggle Shuffle For User’s Playback		OAuth
* Simplified objects

Authorization
Endpoints marked “OAuth” above require application registration and user authorization via the Spotify Accounts Service to access certain data.

var accountsServiceBaseUrl = 'https://accounts.spotify.com'       Authorization Guide | Using Scopes | Tutorial
METHOD
ENDPOINT
USAGE
GET
/authorize
Get an authorization code
POST
/api/token
Get an access token (or an access token and refresh token)
Note that all endpoints benefit from increased rate limits when a valid access token is passed in the call.
API Specification
We have made available a specification of our API using RAML that you can find on the Web API GitHub repo.

RAML is a YAML-based language that describes RESTful APIs and provides all the information necessary to describe RESTful APIs, create API client-code and API server-code generators, and create API user documentation from RAML API definitions.

Spotify
COMPANY

About
Jobs
Press
News
Twitter Facebook
Legal Cookies
© 2016 Spotify AB
