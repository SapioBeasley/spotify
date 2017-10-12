var request = require('request');

var apiBaseUrl = 'https://api.spotify.com';

module.exports = class Spotify {
  constructor(clientId, clientSecret) {
    this.token = 'Basic ' + new Buffer(clientId + ':' + clientSecret).toString('base64');
  }

  getAlbum(body, callback) {
    request({
      uri: 'https://accounts.spotify.com/api/token',
      method: "POST",
      headers: {
        authorization: this.token,
      },
      form: {
        grant_type: 'client_credentials',
      },
      json: true
    }, (err, res) => {
      var options = {
        uri: apiBaseUrl + '/v1/albums/' + body,
        method: 'GET',
        headers: {
          authorization: 'Bearer ' + res.body.access_token,
          content_type: 'application/json'
        },
        body: body,
        json: true
      };

      return request(options, callback);
    });
  }

  getSeveralAlbums(body, callback) {
    request({
      uri: 'https://accounts.spotify.com/api/token',
      method: "POST",
      headers: {
        authorization: this.token,
      },
      form: {
        grant_type: 'client_credentials',
      },
      json: true
    }, (err, res) => {
      var options = {
        uri: apiBaseUrl + '/v1/albums?ids=' + body,
        method: 'GET',
        headers: {
          authorization: 'Bearer ' + res.body.access_token,
          content_type: 'application/json'
        },
        json: true
      };

      return request(options, callback);
    });
  }

  getAlbumTracks() {
    request({
      uri: 'https://accounts.spotify.com/api/token',
      method: "POST",
      headers: {
        authorization: this.token,
      },
      form: {
        grant_type: 'client_credentials',
      },
      json: true
    }, (err, res) => {
      var options = {
        uri: apiBaseUrl + '/v1/albums/' + body + '/tracks',
        method: 'GET',
        headers: {
          authorization: 'Bearer ' + res.body.access_token,
          content_type: 'application/json'
        },
        json: true
      };

      return request(options, callback);
    });
  }

  getArtist() {
    request({
      uri: 'https://accounts.spotify.com/api/token',
      method: "POST",
      headers: {
        authorization: this.token,
      },
      form: {
        grant_type: 'client_credentials',
      },
      json: true
    }, (err, res) => {
      var options = {
        uri: apiBaseUrl + '/v1/artists/' + body,
        method: 'GET',
        headers: {
          authorization: 'Bearer ' + res.body.access_token,
          content_type: 'application/json'
        },
        json: true
      };

      return request(options, callback);
    });
  }

  getSeveralArtists() {
    request({
      uri: 'https://accounts.spotify.com/api/token',
      method: "POST",
      headers: {
        authorization: this.token,
      },
      form: {
        grant_type: 'client_credentials',
      },
      json: true
    }, (err, res) => {
      var options = {
        uri: apiBaseUrl + '/v1/artists?ids=' + body,
        method: 'GET',
        headers: {
          authorization: 'Bearer ' + res.body.access_token,
          content_type: 'application/json'
        },
        json: true
      };

      return request(options, callback);
    });
  }

  getArtistAlbums() {
    request({
      uri: 'https://accounts.spotify.com/api/token',
      method: "POST",
      headers: {
        authorization: this.token,
      },
      form: {
        grant_type: 'client_credentials',
      },
      json: true
    }, (err, res) => {
      var options = {
        uri: apiBaseUrl + '/v1/artists?ids=' + body,
        method: 'GET',
        headers: {
          authorization: 'Bearer ' + res.body.access_token,
          content_type: 'application/json'
        },
        json: true
      };

      return request(options, callback);
    });
    // GET	/v1/artists/{id}/albums	Get an artists albums	albums*	OAuth
  }

  followArtistOrUser() {
    request({
      uri: 'https://accounts.spotify.com/api/token',
      method: "POST",
      headers: {
        authorization: this.token,
      },
      form: {
        grant_type: 'client_credentials',
      },
      json: true
    }, (err, res) => {
      var options = {
        uri: apiBaseUrl + '/v1/artists?ids=' + body,
        method: 'GET',
        headers: {
          authorization: 'Bearer ' + res.body.access_token,
          content_type: 'application/json'
        },
        json: true
      };

      return request(options, callback);
    });
    // PUT	/v1/me/following	Follow Artists or Users	-	OAuth
  }

  followPlaylist() {
    request({
      uri: 'https://accounts.spotify.com/api/token',
      method: "POST",
      headers: {
        authorization: this.token,
      },
      form: {
        grant_type: 'client_credentials',
      },
      json: true
    }, (err, res) => {
      var options = {
        uri: apiBaseUrl + '/v1/artists?ids=' + body,
        method: 'GET',
        headers: {
          authorization: 'Bearer ' + res.body.access_token,
          content_type: 'application/json'
        },
        json: true
      };

      return request(options, callback);
    });
    // PUT	/v1/users/{owner_id}/playlists/{playlist_id}/followers	Follow a Playlist	-	OAuth
  }

  createPlaylist() {
    request({
      uri: 'https://accounts.spotify.com/api/token',
      method: "POST",
      headers: {
        authorization: this.token,
      },
      form: {
        grant_type: 'client_credentials',
      },
      json: true
    }, (err, res) => {
      var options = {
        uri: apiBaseUrl + '/v1/artists?ids=' + body,
        method: 'GET',
        headers: {
          authorization: 'Bearer ' + res.body.access_token,
          content_type: 'application/json'
        },
        json: true
      };

      return request(options, callback);
    });
    // POST	/v1/users/{user_id}/playlists	Create a playlist	playlist	OAuth
  }

  addTracksToPlaylist() {
    request({
      uri: 'https://accounts.spotify.com/api/token',
      method: "POST",
      headers: {
        authorization: this.token,
      },
      form: {
        grant_type: 'client_credentials',
      },
      json: true
    }, (err, res) => {
      var options = {
        uri: apiBaseUrl + '/v1/artists?ids=' + body,
        method: 'GET',
        headers: {
          authorization: 'Bearer ' + res.body.access_token,
          content_type: 'application/json'
        },
        json: true
      };

      return request(options, callback);
    });
    // POST	/v1/users/{user_id}/playlists/{playlist_id}/tracks	Add tracks to a playlist	-	OAuth
  }

  skipUsersPlaybackToNextTrack() {
    request({
      uri: 'https://accounts.spotify.com/api/token',
      method: "POST",
      headers: {
        authorization: this.token,
      },
      form: {
        grant_type: 'client_credentials',
      },
      json: true
    }, (err, res) => {
      var options = {
        uri: apiBaseUrl + '/v1/artists?ids=' + body,
        method: 'GET',
        headers: {
          authorization: 'Bearer ' + res.body.access_token,
          content_type: 'application/json'
        },
        json: true
      };

      return request(options, callback);
    });
    // POST	/v1/me/player/next	Skip User’s Playback To Next Track		OAuth
  }

  skipUsersPlaybackToPrevTrack() {
    request({
      uri: 'https://accounts.spotify.com/api/token',
      method: "POST",
      headers: {
        authorization: this.token,
      },
      form: {
        grant_type: 'client_credentials',
      },
      json: true
    }, (err, res) => {
      var options = {
        uri: apiBaseUrl + '/v1/artists?ids=' + body,
        method: 'GET',
        headers: {
          authorization: 'Bearer ' + res.body.access_token,
          content_type: 'application/json'
        },
        json: true
      };

      return request(options, callback);
    });
    // POST	/v1/me/player/previous	Skip User’s Playback To Previous Track		OAuth
  }

  /**
   * Get an access token (or an access token and refresh token)
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  getAccessToken(basicToken) {
    var  options = {
      uri: 'https://accounts.spotify.com/api/token',
      method: "POST",
      headers: {
        authorization: basicToken,
      },
      form: {
        grant_type: 'client_credentials',
      },
      json: true
    }

    return request(options);
  }

  getArtistTopTracks() {
    // GET	/v1/artists/{id}/top-tracks	Get an artists top tracks	tracks	OAuth
  }

  getRelatedArtists() {
    // GET	/v1/artists/{id}/related-artists	Get an artists related artists	artists	OAuth
  }

  getAudioAnalysisForTrack() {}
  // GET	v1/audio-analysis/{id}	Get Audio Analysis for a Track	audio analysis object	OAuth

  getAudioFeaturesForTrack() {}
  // GET	/v1/audio-features/{id}	Get audio features for a track	audio features	OAuth

  getAudioFeatureForSeveralTracks() {}
  // GET	/v1/audio-features?ids={ids}	Get audio features for several tracks	audio features	OAuth

  getListOfFeaturedPlaylists() {}
  // GET	/v1/browse/featured-playlists	Get a list of featured playlists	playlists	OAuth

  getListOfNewReleases() {}
  // GET	/v1/browse/new-releases	Get a list of new releases	albums*	OAuth

  getListOfCategories() {}
  // GET	/v1/browse/categories	Get a list of categories	categories	OAuth

  getCategory() {}
  // GET	/v1/browse/categories/{id}	Get a category	category	OAuth

  getCategoryPlaylist() {}
  // GET	/v1/browse/categories/{id}/playlists	Get a categorys playlists	playlists*	OAuth

  getCurrentUsersProfile() {}
  // GET	/v1/me	Get current users profile	user	OAuth

  getFollowedArtists() {}
  // GET	/v1/me/following	Get Followed Artists	artists	OAuth

  () {}
  // GET	/v1/me/following/contains	Check if User Follows Users or Artists	true/false	OAuth

  () {}
  // GET /v1/me/tracks Get users saved tracks	saved tracks	OAuth

  () {}
  // GET /v1/me/tracks/contains?ids={ids} Check users saved tracks	true/false	OAuth

  () {}
  // GET /v1/me/albums Get users saved albums	saved albums	OAuth

  () {}
  // GET /v1/me/albums/contains?ids={ids} Check users saved albums	true/false	OAuth

  () {}
  // GET	/v1/me/top/{type}	Get a users top artists or tracks	artists or tracks	OAuth

  () {}
  // GET	/v1/recommendations	Get recommendations based on seeds	recommendations object	OAuth

  () {}
  // GET /v1/search?type=album	Search for an album	albums*	OAuth

  () {}
  // GET /v1/search?type=artist Search for an artist	artists	OAuth

  () {}
  // GET	/v1/search?type=playlist	Search for a playlist	playlists*	OAuth

  () {}
  // GET	/v1/search?type=track	Search for a track	tracks	OAuth

  () {}
  // GET /v1/tracks/{id} Get a track	tracks	OAuth

  () {}
  // GET /v1/tracks?ids={ids} Get several tracks	tracks	OAuth

  () {}
  // GET /v1/users/{user_id} Get a users profile	user*	OAuth

  () {}
  // GET	/v1/users/{user_id}/playlists	Get a list of a users playlists	playlists*	OAuth

  () {}
  // GET	/v1/me/playlists	Get a list of the current users playlists	playlists*	OAuth

  () {}
  // GET	/v1/users/{user_id}/playlists/{playlist_id}	Get a playlist	playlist	OAuth

  () {}
  // GET	/v1/users/{user_id}/playlists/{playlist_id}/followers/contains	Check if Users Follow a Playlist	true/false	OAuth

  () {}
  // GET	v1/me/player/recently-played	Get Current User’s Recently Played Tracks	play history object	OAuth

  () {}
  // GET	/v1/me/player/devices	Get a User’s Available Devices		OAuth

  () {}
  // GET	/v1/me/player	Get Information About The User’s Current Playback		OAuth

  () {}
  // GET	/v1/me/player/currently-playing	Get the User’s Currently Playing Track		OAuth

  () {}
  // GET	/v1/users/{user_id}/playlists/{playlist_id}/tracks	Get a playlists tracks	tracks	OAuth

  () {}
  // DELETE	/v1/me/following	Unfollow Artists or Users	-	OAuth

  () {}
  // DELETE	/v1/users/{owner_id}/playlists/{playlist_id}/followers	Unfollow a Playlist	-	OAuth

  () {}
  // DELETE	/v1/me/tracks?ids={ids}	Remove users saved tracks	-	OAuth

  () {}
  // DELETE	/v1/me/albums?ids={ids}	Remove users saved albums	-	OAuth

  () {}
  // DELETE	/v1/users/{user_id}/playlists/{playlist_id}/tracks	Remove tracks from a playlist	snapshot_id	OAuth

  () {}
  // PUT	/v1/me/tracks?ids={ids}Save tracks for user	-	OAuth

  () {}
  // PUT	/v1/me/albums?ids={ids} Save albums for user	-	OAuth

  () {}
  // PUT	/v1/users/{user_id}/playlists/{playlist_id}	Change a playlists details	-	OAuth

  () {}
  // PUT	/v1/users/{user_id}/playlists/{playlist_id}/tracks	Reorder a playlists tracks	snapshot_id	OAuth

  () {}
  // PUT	/v1/users/{user_id}/playlists/{playlist_id}/tracks	Replace a playlists tracks	-	OAuth

  () {}
  // PUT	/v1/users/{user_id}/playlists/{playlist_id}/images	Upload a Custom Playlist Cover Image		OAuth

  () {}
  // PUT	/v1/me/player	Transfer a User’s Playback		OAuth

  () {}
  // PUT	/v1/me/player/play	Start/Resume a User’s Playback		OAuth

  () {}
  // PUT	/v1/me/player/pause	Pause a User’s Playback		OAuth

  () {}
  // PUT	v1/me/player/seek	Seek To Position In Currently Playing Track		OAuth

  () {}
  // PUT	/v1/me/player/repeat	Set Repeat Mode On User’s Playback		OAuth

  () {}
  // PUT	/v1/me/player/volume	Set Volume For User’s Playback		OAuth

  () {}
  // PUT	/v1/me/player/shuffle	Toggle Shuffle For User’s Playback		OAuth
}
