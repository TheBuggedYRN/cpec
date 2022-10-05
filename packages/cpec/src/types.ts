type Type<TAndroid, TiOS> =
  | EnumSpec<TAndroid, TiOS>
  | "void"
  | "string"
  | "number";

export interface NativeModule extends Record<any, any> {
  name: string;
}

export interface PlatformSpecific<TAndroid, TiOS> {
  android: TAndroid;
  ios: TiOS;
}

export interface Spec {
  name: string;
  description: string;
}

export interface LibrarySpec extends Spec {
  version: string;
  modules: ModuleSpec[];
}

export interface ModuleSpec extends Spec {
  methods: MethodSpec[];
  native: PlatformSpecific<NativeModule, NativeModule>;
}

export interface MethodSpec<T = any> extends Spec {
  params: ParamSpec[];
  returnType?: ParamSpec<T>;
  native: PlatformSpecific<Function, Function>;
}

export interface EnumSpec<TAndroid, TiOS> extends Spec {
  values: {
    [key: string]: PlatformSpecific<TAndroid, TiOS>;
  };
}

export interface ParamSpec<T = any> extends Spec {
  defaultValue?: T;
  type: Type<any, any> | Type<any, any>[];
}
