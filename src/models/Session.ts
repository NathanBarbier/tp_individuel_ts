import { IFilm, FilmSchema } from "./Film";
import mongoose from "mongoose";

export interface ISession {
    film: IFilm;
    date: Date;
    time: string;
    availableSeats: number;
}

export const SessionSchema = new mongoose.Schema<ISession>({
    film: FilmSchema,
    date: Date,
    time: String,
    availableSeats: Number,
});

const SessionModel = mongoose.model<ISession>("Session", SessionSchema);
export default SessionModel;