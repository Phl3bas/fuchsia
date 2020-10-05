import { DatabaseAdapter } from '@fuchsiajs/orm/adapter.abstract';
import { ConnectionOptions } from 'mongoose';

export interface IConfigOptions {
  [key: string]: any;
  port: number;
  urlEncoded: Partial<IUrlEncodedOptions>;
  json: Partial<IJsonOptions> | boolean;
  static: Partial<IStaticOptions> | string;
  'case sensitive routing': boolean;
  env: string;
  etag: string[];
  'jsonp callback Name': string;
  'json escape': boolean;
  'json replacer': string;
  'json spaces': number;
  'query parser': string;
  'strict routing': Boolean;
  'subdomain offset': number;
  'trust proxy': string;
  views: string;
  viewCache: boolean;
  'view engine': string;
  'x-powered-by': boolean;
}

export interface IUrlEncodedOptions {
  extended: boolean;
  inflate: boolean;
  limit: number | string;
  parameterLimit: number;
  type: string | string[] | any;
}

export interface IJsonOptions {
  strict: boolean;
  inflate: boolean;
  limit: number;
  type: string;
}

export interface IStaticOptions {
  root: string;
  dotfiles: 'allow' | 'deny' | 'ignore';
  etag: boolean;
  extensions: string[];
  fallthrough: boolean;
  immutable: boolean;
  index: string;
  lastModified: boolean;
  maxAge: number;
  redirect: boolean;
}

export interface IDatabaseParams {
  adapter: DatabaseAdapter;
  uri: any;
  options?: ConnectionOptions;
}
