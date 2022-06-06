import { Endereco } from "./endereco";

export class Pessoa {
    id!:number;
    nome!:string;
    telefone!:string;
    sexo!:string;
    email!:string;
    cpf!:string;
    dataNascimento!:Date;
    endereco: Endereco = new Endereco;
}