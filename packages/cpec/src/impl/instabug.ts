import { ModuleSpec } from "../types";

export const instabugModule: ModuleSpec = {
  name: "Instabug",
  description: "lorem ipusm",

  methods: [
    {
      name: "setEnabled",
      description: "lorem ipusm",
      returnType: "void",
      params: [
        {
          name: "isEnabled",
          description: "lorem ipusm",
          defaultValue: true,
        },
      ],
    },
  ],
};
