import { IArtista } from "../Interfaces/IArtista";
import { IMusica } from "../Interfaces/IMusica";
import { IPlaylist } from "../Interfaces/IPlaylist";

export function newArtista(): IArtista {
  return {
    id: '',
    imageUrl: '',
    nome: '',
    musicas: []
  };
}

export function newMusica(): IMusica {
  return {
    id: '',
    album: {
      id: '',
      imageUrl: '',
      nome: ''
    },
    artistas: [],
    tempo: '',
    titulo: ''
  }
}

export function newPlaylist(): IPlaylist {
  return {
    id: '',
    imageUrl: '',
    nome: '',
    musicas: []
  }
}