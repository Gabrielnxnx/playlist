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
    {
      title: "Fé nas Maluca.mp3",
      src: "music/Fé nas Maluca(MP3_160K).mp3",
      cover: "images/6.jpg",
    },
    {
      title: "LinoMC - Trono 🚽",
      src: "music/LinoMC - Trono 🚽 ( Prod. Custic )(MP3_160K).mp3",
      cover: "images/trono.jpg",
    },
    {
      title: "Pode não mano kk😂",
      src: "music/Pode não mano kk😂(MP3_160K).mp3",
      cover: "images/mm.jpg",
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
      cover: "images/5.jpg",
    },
    {
      title: "Viralata  -  Prod _patriciosid",
      src: "music/Viralata  -  Prod _patriciosid(MP3_160K).mp3",
      cover: "images/5.jpg",
    },
  ],
  playlist2: [
    {
      title: "Barreto - Não Fala de Amor ",
      src: "music2/Barreto - Não Fala de Amor (Sadstation)(MP3_160K).mp3",
      cover: "images/cover3.jpg",
    },
    {
      title: "CB13 - Feito Passarinho ",
      src: "music2/CB13 - Feito Passarinho (Official Music)(MP3_160K).mp3",
      cover: "images/cover4.jpg",
    },
    {
      title: "DKZ - Desespero ",
      src: "music2/DKZ - Desespero (Official Music)(MP3_160K).mp3",
      cover: "images/cover4.jpg",
    },
    {
      title: "Hiosaki - Eu odeio amar você (prod. Pdr0sa)",
      src: "music2/Hiosaki - Eu odeio amar você (prod. Pdr0sa)(MP3_160K).mp3",
      cover: "images/cover4.jpg",
    },
    {
      title: "Hiosaki - Meu Coração Está Morrendo (prod. pdr0sa)",
      src: "music2/Hiosaki - Meu Coração Está Morrendo (prod. pdr0sa)(MP3_160K).mp3",
      cover: "images/cover4.jpg",
    },
    {
      title: "Hiosaki - Por nós dois (prod. Pdr0sa)",
      src: "music2/Hiosaki - Por nós dois (prod. Pdr0sa)(MP3_160K).mp3",
      cover: "images/cover4.jpg",
    },
    {
      title: "Hiosaki - Preciso conversar (Prod. pdr0sa)",
      src: "music2/Hiosaki - Preciso conversar (Prod. pdr0sa)(MP3_160K).mp3",
      cover: "images/cover4.jpg",
    },
    {
      title: "Hiosaki - Seu Jogo ",
      src: "music2/Hiosaki - Seu Jogo (Clipe Oficial)(MP3_160K).mp3",
      cover: "images/cover4.jpg",
    },
    {
      title: "Madrugada Fria-Knust_LuizLins_Hiosaki_LilChainz",
      src: "music2/Madrugada Fria - Knust_ Luiz Lins_ Hiosaki_ Lil Chainz(MP3_160K).mp3",
      cover: "images/cover4.jpg",
    },
    {
      title: "Novac - É tarde demais ",
      src: "music2/Novac - É tarde demais (Sadstation)(MP3_160K).mp3",
      cover: "images/cover4.jpg",
    },
    {
      title: "Sobral - Ainda Lembro (Prod. Yusei)",
      src: "music2/Sobral - Ainda Lembro (Prod. Yusei)(MP3_160K).mp3",
      cover: "images/cover4.jpg",
    },
    {
      title: "stéfano loscalzo - você",
      src: "music2/stéfano loscalzo - você(MP3_160K).mp3",
      cover: "images/cover4.jpg",
    },
    {
      title: "Tuono - Transbordando ",
      src: "music2/Tuono - Transbordando (Sadstation)(MP3_160K).mp3",
      cover: "images/cover4.jpg",
    },
    {
      title: "VMZ - A Prova de Balas",
      src: "music2/VMZ - A Prova de Balas(MP3_160K).mp3",
      cover: "images/cover4.jpg",
    },
    {
      title: "VMZ - Sem Vibe (prod. MISERY)",
      src: "music2/VMZ - Sem Vibe (prod. MISERY)(MP3_160K).mp3",
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
  displayPlaylist(currentPlaylist);
}

// Exibe a playlist no DOM
function displayPlaylist(playlist) {
  const musicList = document.getElementById("music-list");
  musicList.innerHTML = ""; // Limpa a lista de músicas

  playlist.forEach((music, index) => {
    const li = document.createElement("li");
    li.textContent = music.title;
    li.onclick = () => playMusic(index);
    musicList.appendChild(li);
  });
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

// Função para filtrar músicas com base na pesquisa
function filterMusic(event) {
  const searchTerm = event.target.value.toLowerCase();
  const filteredPlaylist = currentPlaylist.filter((music) =>
    music.title.toLowerCase().includes(searchTerm)
  );
  displayPlaylist(filteredPlaylist); // Exibe apenas as músicas filtradas
}

// Carrega a primeira playlist ao abrir a página
window.onload = () => {
  loadPlaylist("playlist1");

  // Adiciona o evento de input à barra de pesquisa
  const searchBar = document.querySelector(".search-bar");
  searchBar.addEventListener("input", filterMusic);

  // Adiciona o evento "ended" ao player de áudio para mudar automaticamente
  const audioPlayer = document.getElementById("audioPlayer");
  audioPlayer.addEventListener("ended", () => {
    // Se o modo de repetição não estiver ativado, avança para a próxima música
    if (!isRepeat) {
      nextMusic();
    } else {
      playMusic(currentIndex); // Reproduz a música atual novamente
    }
  });
};
