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
  returnType: "void" | ParamSpec<T>;
}

export interface ParamSpec<T = any> extends Spec {
  defaultValue: T;
}
