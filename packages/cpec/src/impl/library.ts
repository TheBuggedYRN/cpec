import { LibrarySpec } from "../types";
import { instabugModule } from "./instabug";

export const library: LibrarySpec = {
  name: "Instabug",
  description: "lorem ipusm",
  version: "11.X.X",
  modules: [instabugModule],
};
