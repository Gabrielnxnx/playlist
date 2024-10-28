let currentPlaylist = [];
let currentIndex = 0;
let isRepeat = false;

// Dados das playlists
const playlists = {
  playlist1: [
    {
      title: "Comuna - prod _offPadrin",
      src: "music/Comuna - prod _offPadrin(MP3_160K).mp3",
      cover: "images/1.jpg",
    },
    {
      title: "Eu memo   -   Prod _patriciosid",
      src: "music/Eu memo   -   Prod _patriciosid(MP3_160K).mp3",
      cover: "images/2.jpg",
    },
    {
      title: "30K-Prod_patriciosid",
      src: "music/30K-Prod_patriciosid(MP3_160K).mp3",
      cover: "images/4.jpg",
    },
    {
      title: "ÉOHIPHOP  -  Prod _patriciosid",
      src: "music/ÉOHIPHOP  -  Prod _patriciosid(MP3_160K).mp3",
      cover: "images/talvez.jpg",
    },
    {
      title: "Gente Boa Também Mata - Prod _offpadrin",
      src: "music/Gente Boa Também Mata - Prod _offpadrin(MP3_160K).mp3",
      cover: "images/5.jpg",
    },
  ],
  playlist2: [
    {
      title: "Música 3 - Artista 3",
      src: "music/song3.mp3",
      cover: "images/cover3.jpg",
    },
    {
      title: "Música 4 - Artista 4",
      src: "music/song4.mp3",
      cover: "images/cover4.jpg",
    },
  ],
  playlist3: [
    {
      title: "Música 5 - Artista 5",
      src: "music/song5.mp3",
      cover: "images/cover5.jpg",
    },
    {
      title: "Música 6 - Artista 6",
      src: "music/song6.mp3",
      cover: "images/cover6.jpg",
    },
  ],
};

// Carrega a playlist selecionada
function loadPlaylist(playlistName) {
  currentPlaylist = playlists[playlistName];
  currentIndex = 0; // Começa da primeira música
  const musicList = document.getElementById("music-list");
  musicList.innerHTML = ""; // Limpa a lista de músicas

  currentPlaylist.forEach((music, index) => {
    const li = document.createElement("li");
    li.textContent = music.title;
    li.onclick = () => playMusic(index);
    musicList.appendChild(li);
  });

  // Carrega a primeira música por padrão
  playMusic(currentIndex);
}

// Toca a música e atualiza a imagem de capa
function playMusic(index) {
  const audioPlayer = document.getElementById("audioPlayer");
  const coverImage = document.getElementById("coverImage");

  currentIndex = index;
  audioPlayer.src = currentPlaylist[currentIndex].src;
  coverImage.src = currentPlaylist[currentIndex].cover;
  audioPlayer.play();
}

// Avança para a próxima música
function nextMusic() {
  currentIndex = (currentIndex + 1) % currentPlaylist.length;
  playMusic(currentIndex);
}

// Volta para a música anterior
function prevMusic() {
  currentIndex =
    (currentIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
  playMusic(currentIndex);
}

// Alterna o modo de repetição
function toggleRepeat() {
  isRepeat = !isRepeat;
  const audioPlayer = document.getElementById("audioPlayer");
  audioPlayer.loop = isRepeat;
  alert(isRepeat ? "Repetição ativada" : "Repetição desativada");
}

// Carrega a primeira playlist ao abrir a página
window.onload = () => loadPlaylist("playlist1");
