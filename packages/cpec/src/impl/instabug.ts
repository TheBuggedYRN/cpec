import { EnumSpec, ModuleSpec } from "../types";

export const invocationEventsEnum: EnumSpec = {
  name: "InvocationEvent",
  description: "The events that trigger Instabug SDK's invocation",
  values: {
    "screenshot": {
      android: "InstabugInvocationEvent.SCREENSHOT",
      ios: "IBGInvocationEventScreenshot",
    }
  }
};

export const instabugModule: ModuleSpec = {
  name: "Instabug",
  description: "Module for Instabug's core methods",
  methods: [
    {
      name: "start",
      description: "Initialized Instabug SDK. Must be called as early as possible in the app lifecycle.",
      params: [
        {
          name: "appToken",
          description: "App's unique token. You can get it from the dashboard.",
          type: "string",
        },
        {
          name: "invocationEvents",
          description: "Events triggering the SDK invocation",
          type: [invocationEventsEnum],
        }
      ],
    },
  ],
};
