import { environment as base } from './environment';

export const environment = {
    ...base,
    production: true,
    marvelPrivateKey: process.env.MARVEL_PRIVATE_KEY,
    marvelPublicKey: process.env.MARVEL_PUBLIC_KEY,
    backendUrl: 'https://simone.codenoob.dev/api/v1/',
    pokeapi: 'https://pokeapi.co/api/v2/',
    marvel: 'https://gateway.marvel.com/v1/',
}