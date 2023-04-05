import { ISceance } from "./isceance";

export interface IMovie {
    title : string;
    description : string;
    duration : number;
    poster_url : string;
    sceances : ISceance[];
}
