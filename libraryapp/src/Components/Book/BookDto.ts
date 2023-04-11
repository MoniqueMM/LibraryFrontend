import { Genres } from "../../Const/Genres";
import exp from "constants";

export type BookDto = {
  id: string;
  title: string;
  authors: string[];
  releaseDate: string;
  genre: string;
  quantity: number;
  src: string;
};
