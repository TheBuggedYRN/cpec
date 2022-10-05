import { EnumSpec, ModuleSpec } from "../types";
import { Android } from "./native/android";
import { iOS } from "./native/ios";

export const invocationEventsEnum: EnumSpec<
  Android.InvocationEvent,
  iOS.IBGInvocationEvent
> = {
  name: "InvocationEvent",
  description: "The events that trigger Instabug SDK's invocation",
  values: {
    screenshot: {
      android: Android.InvocationEvent.SCREENSHOT,
      ios: iOS.IBGInvocationEvent.Screenshot,
    },
  },
};

export const instabugModule: ModuleSpec = {
  name: "Instabug",
  description: "Module for Instabug's core methods",
  native: {
    android: Android.Instabug,
    ios: iOS.Instabug,
  },
  methods: [
    {
      name: "start",
      description:
        "Initialized Instabug SDK. Must be called as early as possible in the app lifecycle.",
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
        },
      ],
      native: {
        android: Android.Instabug.Builder,
        ios: iOS.Instabug.startWithToken,
      },
    },
  ],
};
