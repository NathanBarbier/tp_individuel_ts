import {IDirector, DirectorSchema} from "./Director";
import mongoose from "mongoose";

export interface IFilm { 
    title: string; 
    releaseYear: number; 
    genre: string; 
    directors: IDirector[];
}

export const FilmSchema = new mongoose.Schema({
    title: String,
    releaseYear: Number,
    genre: String,
    directors: [DirectorSchema],
});
  
const FilmModel = mongoose.model("Film", FilmSchema);
export default FilmModel;