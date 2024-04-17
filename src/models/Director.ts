import mongoose from "mongoose";

export interface IDirector { 
    name: string; 
    birthDate: Date; 
    biography: string;
}

export const DirectorSchema = new mongoose.Schema<IDirector>({
    name: String,
    birthDate: Date,
    biography: String,
});
  
const DirectorModel = mongoose.model<IDirector>("Director", DirectorSchema);
export default DirectorModel;