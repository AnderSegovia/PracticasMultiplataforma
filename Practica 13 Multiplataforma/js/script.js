//arreglo de canciones con informacion como titulo, artista, ruta de archivo y portada
const songs =[
{title: 'Azrael ( عزرائیل )', artist: 'TRIVAX', src:'music/1 TRIVAX - Azrael ( عزرائیل ).mp3', cover:'img/1.jpeg'},
{title: 'Wherever May Roam', artist: 'Metallica', src:'music/2 Metallica_Wherever May Roam.mp3', cover:'img/2.jpg'},
{title: 'Deutschland', artist: 'Rammstein', src:'music/3 Rammstein - Deutschland.mp3', cover:'img/3.jpg'},
{title: 'Psychosocial', artist: 'Slipknot', src:'music/4 Slipknot - Psychosocial.mp3', cover:'img/4.jpg'},
];

//indice de la cancion actual en reproduccion
let currentSongIndex = 0;

//variable para rastrear si la musica esta reproduciendose o no
let isPlaying = false;

//objeto que representa la instancia de reproduccion de audio usando la biblioteca Howler.js
let audio;
// funcion para cargar y reproducir la cancion actual
function playCurrentSong(){
    //deten la reproduccion si hay una instacncia de audio previa
    if (audio) {
        audio.stop();
    }

    //crean una nueva instancia de reproduccion de audio con la cancion actual
    audio = new Howl({
        src: [songs[currentSongIndex].src],
        autoplay: isPlaying, //reproduce automaticamente si la musica esta en reproduccion
        volume: volumeSlider.value, //establece el volumen inicial
        onde: function(){
            //cuando la cancion actual termina, reproduce la siguiente
            playNextSong();
        }
    });
    //actualiza la informacion de la cancion en la interfaz
    updateSongInfo();
}

//elementos de la interfaz obtenidos por su ID
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const volumeSlider = document.getElementById('volume');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const albumCover = document.getElementById('albumCover');

//evento para el boton de reproduccion
playButton.addEventListener('click', () => {
    isPlaying = true;
    playCurrentSong();
});

//evento para el boton de pausa
pauseButton.addEventListener('click', () => {
    isPlaying = false;
    audio.pause();
});

//evento para el boton de siguiente cancion
nextButton.addEventListener('click', () => {
    playNextSong();
});


//evento para el boton de cancion anterior
prevButton.addEventListener('click', () => {
if(audio.seek()> 5){
    audio.seek(0);
} else {

    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length
    playCurrentSong();
}   
});

//evento para el deslizador de volumen
volumeSlider.addEventListener('input',() => {

    audio.volume(volumeSlider.value);
});

//funcion para actualizar la informacion de la cancion actual en la interfaz
function updateSongInfo() {
    songTitle.textContent = songs[currentSongIndex].title;
    songArtist.textContent = songs[currentSongIndex].artist;
    albumCover.src= songs[currentSongIndex].cover;
}

//funcion para reproducir la siguiente cancion
function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playCurrentSong();
}

//reproduce la primera cancion al cargar la pagina
playCurrentSong();