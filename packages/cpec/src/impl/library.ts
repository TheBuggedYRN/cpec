import { LibrarySpec } from "../types";
import { instabugModule } from "./instabug";

export const instabugLibrary: LibrarySpec = {
  name: "instabug",
  description: "lorem ipusm",
  version: "11.X.X",
  modules: [instabugModule],
};
