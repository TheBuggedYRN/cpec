type Type = EnumSpec | "void" | "string" | "number";

interface PlatformSpecific<T> {
  android: T;
  ios: T;
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
}

export interface MethodSpec<T = any> extends Spec {
  params: ParamSpec[];
  returnType?: ParamSpec<T>;
}

export interface EnumSpec extends Spec {
  values: {
    [key: string]: PlatformSpecific<string>;
  };
}

export interface ParamSpec<T = any> extends Spec {
  defaultValue?: T;
  type: Type | Type[];
}
