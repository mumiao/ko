export type Options = {
  ts: boolean;
  hash?: boolean;
  port?: string;
  host?: string;
  analyzer?: boolean;
  esbuild?: boolean;
};

export type MFSU = {
  name?: string;
  lib?: string;
};

export interface PlainObject {
  [key: string]: any;
}

export interface PlainObjectWithStringValue {
  [key: string]: string;
}
