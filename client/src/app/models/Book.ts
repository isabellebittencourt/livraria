import { Categorie } from './Categorie';

export class Book{
    _id?: string;
    titulo?: string;
    autor?: string;
    editora?: string;
    edicao?: Date;
    anoPublicacao?:Date;
    preco?: Number;
    quantidade?: Number;
    categoria?: Categorie[];
}