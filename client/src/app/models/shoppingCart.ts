import { Book } from './Book';
import { User } from './User';

export class shoppingCart{
    _id?: string;
    quantidade?: Number;
    precoTotal?: Number;
    usuario?:[User];
    livro?:[Book];

}