import { IMusica } from "./IMusica";

export interface IArtista {
    id: string,
    nome: string,
    imageUrl: string,
    musicas?: IMusica[]
}