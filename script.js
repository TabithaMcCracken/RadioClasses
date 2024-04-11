// Done with classes
class Radio {
  constructor(stations) {
    this.stations = stations;
  }

  selectRadioStationAndSong() {
    // Randomly select a station
    const selectedStation = this.stations[Math.floor(Math.random() * this.stations.length)];
    console.log("Randomly selected radio station: " + selectedStation.station_name);
    // Radomly select a song from the selected station
    const selectedSong = selectedStation.station_songs[Math.floor(Math.random() * selectedStation.station_songs.length)];
    console.log("Now Playing: " + selectedSong.title + " by " + selectedSong.artist);
  }
}

class RadioStation {
  constructor(station_name, station_songs) {
    this.station_name = station_name;
    this.station_songs = station_songs;
  }
}

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
}

// Create songs playlists
const songs1 = [
  new Song("Born in the USA", "Bruce Springsteen"),
  new Song("Love Will Find A Way", "Pablo Cruise"),
  new Song("Who's Crying Now", "Journey")
];

const songs2 = [
  new Song("Where the Green Grass Grows", "Tim McGraw"),
  new Song("Love You, Miss You, Mean It", "Luke Bryan"),
  new Song("Blue Tacoma", "Russell Dickerson")
];

// Create radio stations with playlists
const radioStations = [
  new RadioStation('Kool 105.1', songs1),
  new RadioStation('KYGO 98.5', songs2)
];

// Create radio instance
const todays_radio = new Radio(radioStations);

// Select and play a song
todays_radio.selectRadioStationAndSong();

// Done without classes
let radio = {
    stations: [
    {
      station_name: 'Kool 105.1',
      station_songs: [
        {title: "Born in the USA", artist: "Bruce Springsteen"}, 
        {title: "Love Will Find A Way", artist: "Pablo Cruise"},
        {title: "Who's Crying Now", artist: "Journey"}
      ]
    },
    {
      station_name: 'KYGO 98.5',
      station_songs: [
        {title: 'Where the Green Grass Grows', artist: 'Tim McGraw'},
        {title: 'Love You, Miss You, Mean It', artist: 'Luke Bryan'},
        {title: "Blue Tacoma", artist: 'Russell Dickerson'}
      ]
    }
    ]
  }

  function select_RadioStation_And_Song (){
  const selected_station = radio.stations[Math.floor(Math.random()*radio.stations.length)];
  console.log ("Randomly selected radio station: " + selected_station.station_name);

  const selected_song = selected_station.station_songs[Math.floor(Math.random()*selected_station.station_songs.length)];
  console.log("Now Playing: " + selected_song.title + " by " + selected_song.artist);
  }

  select_RadioStation_And_Song();

