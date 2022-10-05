import { NativeModule } from "../../types";

export namespace iOS {
  export enum IBGInvocationEvent {
    Screenshot,
  }

  export const Instabug: NativeModule = {
    name: "Instabug",
    startWithToken(token: string): void {},
  };
}
