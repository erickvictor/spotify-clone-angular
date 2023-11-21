import { IArtista } from "../Interfaces/IArtista";
import { IMusica } from "../Interfaces/IMusica";

export function newArtista(): IArtista {
  return {
    id: '',
    imageUrl: '',
    nome: ''
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