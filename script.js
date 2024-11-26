let currentPlaylist = [];
let currentIndex = 0;
let isRepeat = false;
let isShuffle = false;
const audioPlayer = document.getElementById("audioPlayer");
const miniPlayerTitle = document.getElementById("miniPlayerTitle");
const themeToggle = document.getElementById("themeToggle");
const searchBar = document.querySelector(".search-bar");

// Dados das playlists
const playlists = {
  GABRIEL: [
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
    {
      title: "Fé nas Maluca",
      src: "music/Fé nas Maluca(MP3_160K).mp3",
      cover: "images/6.jpg",
    },
    {
      title: "LinoMC - Trono 🚽",
      src: "music/LinoMC - Trono 🚽 ( Prod. Custic )(MP3_160K).mp3",
      cover: "images/trono.jpg",
    },
    {
      title: "Zona Norte  -  Prod _patriciosid",
      src: "music/Zona Norte  -  Prod _patriciosid(MP3_160K).mp3",
      cover: "images/zn.jpg",
    },
    {
      title: "Quadrado  -  Prod _patriciosid",
      src: "music/Quadrado feat._Banda Enversos -  Prod _patriciosid(MP3_160K).mp3",
      cover: "images/8.jpg",
    },
    {
      title: "Vadio   -   Prod _patriciosid",
      src: "music/Vadio   -   Prod _patriciosid(MP3_160K).mp3",
      cover: "images/9.jpg",
    },
    {
      title: "Viralata  -  Prod _patriciosid",
      src: "music/Viralata  -  Prod _patriciosid(MP3_160K).mp3",
      cover: "images/10.jpg",
    },
  ],
  playlist2: [
    {
      title: "Barreto - Não Fala de Amor ",
      src: "music2/Barreto - Não Fala de Amor (Sadstation)(MP3_160K).mp3",
      cover: "images/11.jpg",
    },
    {
      title: "CB13 - Feito Passarinho ",
      src: "music2/CB13 - Feito Passarinho (Official Music)(MP3_160K).mp3",
      cover: "images/12.jpg",
    },
    {
      title: "DKZ - Desespero ",
      src: "music2/DKZ - Desespero (Official Music)(MP3_160K).mp3",
      cover: "images/13.jpg",
    },
    {
      title: "Hiosaki - Eu odeio amar você (prod. Pdr0sa)",
      src: "music2/Hiosaki - Eu odeio amar você (prod. Pdr0sa)(MP3_160K).mp3",
      cover: "images/14.jpg",
    },
    {
      title: "Hiosaki - Meu Coração Está Morrendo (prod. pdr0sa)",
      src: "music2/Hiosaki - Meu Coração Está Morrendo (prod. pdr0sa)(MP3_160K).mp3",
      cover: "images/15.jpg",
    },
    {
      title: "Hiosaki - Por nós dois (prod. Pdr0sa)",
      src: "music2/Hiosaki - Por nós dois (prod. Pdr0sa)(MP3_160K).mp3",
      cover: "images/16.jpg",
    },
    {
      title: "Hiosaki - Preciso conversar (Prod. pdr0sa)",
      src: "music2/Hiosaki - Preciso conversar (Prod. pdr0sa)(MP3_160K).mp3",
      cover: "images/17.jpg",
    },
    {
      title: "Hiosaki - Seu Jogo ",
      src: "music2/Hiosaki - Seu Jogo (Clipe Oficial)(MP3_160K).mp3",
      cover: "images/18.jpg",
    },
    {
      title: "Madrugada Fria-Knust_LuizLins_Hiosaki_LilChainz",
      src: "music2/Madrugada Fria - Knust_ Luiz Lins_ Hiosaki_ Lil Chainz(MP3_160K).mp3",
      cover: "images/19.jpg",
    },
    {
      title: "Novac - É tarde demais ",
      src: "music2/Novac - É tarde demais (Sadstation)(MP3_160K).mp3",
      cover: "images/20.jpg",
    },
    {
      title: "Sobral - Ainda Lembro (Prod. Yusei)",
      src: "music2/Sobral - Ainda Lembro (Prod. Yusei)(MP3_160K).mp3",
      cover: "images/21.jpg",
    },
    {
      title: "stéfano loscalzo - você",
      src: "music2/stéfano loscalzo - você(MP3_160K).mp3",
      cover: "images/22.jpg",
    },
    {
      title: "Tuono - Transbordando ",
      src: "music2/Tuono - Transbordando (Sadstation)(MP3_160K).mp3",
      cover: "images/23.jpg",
    },
    {
      title: "VMZ - A Prova de Balas",
      src: "music2/VMZ - A Prova de Balas(MP3_160K).mp3",
      cover: "images/24.jpg",
    },
    {
      title: "VMZ - Sem Vibe (prod. MISERY)",
      src: "music2/VMZ - Sem Vibe (prod. MISERY)(MP3_160K).mp3",
      cover: "images/25.jpg",
    },
  ],
  DAVID: [
    {
      title: "boiadeira-em-shibuya",
      src: "music/boiadeira-em-shibuya-jujutsu-kaisen--vitch-lairtonteclas.mp3",
      cover: "images/cover5.jpg",
    },
    {
      title: "Música 6 - Artista 6",
      src: "music/song6.mp3",
      cover: "images/cover6.jpg",
    },
    
  ],
  ERIK: [
     {
      title: "Música 6 - Artista 6",
      src: "music/song6.mp3",
      cover: "images/cover6.jpg",
    },
  ]
};

// Carrega uma playlist e exibe no DOM
function loadPlaylist(playlistName) {
  currentPlaylist = playlists[playlistName];
  currentIndex = 0; // Começa da primeira música
  displayPlaylist(currentPlaylist);
  playMusic(currentIndex);
}

// Exibe a playlist
function displayPlaylist(playlist) {
  const musicList = document.getElementById("music-list");
  musicList.innerHTML = "";

  playlist.forEach((music, index) => {
    const li = document.createElement("li");
    li.textContent = music.title;
    li.onclick = () => playMusic(index);
    musicList.appendChild(li);
  });
}

// Função para tocar a música e atualizar o mini player
function playMusic(index) {
  currentIndex = index;
  const music = currentPlaylist[currentIndex];
  audioPlayer.src = music.src;
  document.getElementById("coverImage").src = music.cover;
  audioPlayer.play();
  updateMiniPlayer(music.title);
}

// Atualiza o título no mini player
function updateMiniPlayer(title) {
  miniPlayerTitle.textContent = title;
}

// Próxima música com modo aleatório
function nextMusic() {
  if (isShuffle) {
    currentIndex = Math.floor(Math.random() * currentPlaylist.length);
  } else {
    currentIndex = (currentIndex + 1) % currentPlaylist.length;
  }
  playMusic(currentIndex);
}

// Função para música anterior
function prevMusic() {
  currentIndex =
    (currentIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
  playMusic(currentIndex);
}

// Alternância de tema claro/escuro
function toggleTheme() {
  const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
  document.body.classList.toggle("dark", newTheme === "dark");
  document.body.classList.toggle("light", newTheme === "light");
  localStorage.setItem("theme", newTheme);
}

themeToggle.addEventListener("click", toggleTheme);

// Carrega o tema salvo no carregamento da página
function loadSavedTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.body.classList.add(savedTheme);
}

// Alterna o modo de repetição
function toggleRepeat() {
  isRepeat = !isRepeat;
  audioPlayer.loop = isRepeat;
  alert(isRepeat ? "Repetição ativada" : "Repetição desativada");
}

// Alterna o modo de reprodução aleatória
function toggleShuffle() {
  isShuffle = !isShuffle;
  alert(isShuffle ? "Modo aleatório ativado" : "Modo aleatório desativado");
}

// Função para busca dinâmica
function filterMusic(event) {
  const searchTerm = event.target.value.toLowerCase();
  const filteredPlaylist = currentPlaylist.filter((music) =>
    music.title.toLowerCase().includes(searchTerm)
  );
  displayPlaylist(filteredPlaylist);
}

// Inicializa o áudio e configura eventos de controle
window.onload = () => {
  loadSavedTheme(); // Carrega o tema salvo
  const playlistParam =
    new URLSearchParams(window.location.search).get("playlist") || "playlist1";
  loadPlaylist(playlistParam);

  searchBar.addEventListener("input", filterMusic);

  // Avança automaticamente para a próxima música
  audioPlayer.addEventListener("ended", () => {
    if (!isRepeat) {
      nextMusic();
    } else {
      playMusic(currentIndex);
    }
  });
};
