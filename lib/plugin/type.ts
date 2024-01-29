export enum Type {
  None,
  TriggerAndAction,
  PickAndThrow,
  InworldNpc,
  Media,
  Setting,
  Quest,
  GPUMeshInstancing,
}

export enum FunctionTypes {
  description = 'description',
  desc = 'desc',
  schema = 'schema',
  array = 'array',
  tags = 'tags',
  select = 'select',
  entityPicker = 'entityPicker',
}

type FunctionTypesMap = {
  [FunctionTypes.description]?: string;
  [FunctionTypes.desc]?: string;
  [FunctionTypes.array]?: boolean;
  [FunctionTypes.tags]?: boolean;
  [FunctionTypes.select]?: boolean;
  [FunctionTypes.entityPicker]?: boolean;
  [FunctionTypes.schema]?: Schemas;
};

type SchemaTypes = {
  number: number;
  string: string;
  boolean: boolean;
  json: string; // use string temporarily
  vec3: [number, number, number];
};

type Schema<K extends keyof SchemaTypes> = {
  name: string;
  type: K;
  default?: SchemaTypes[K];
  enum?: (string | number)[] | Record<string, string | number>;
} & FunctionTypesMap;

export type Schemas = (
  | Schema<'boolean'>
  | Schema<'number'>
  | Schema<'string'>
  | Schema<'json'>
  | Schema<'vec3'>
)[];

export type ConfigsType = {
  type: string;
  schema: Schemas;
};
