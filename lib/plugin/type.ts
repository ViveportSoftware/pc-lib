export enum Type {
  None,
  TriggerAndAction,
  PickAndThrow,
  InworldNpc,
  Media,
  Setting,
  Quest,
  GPUMeshInstancing,
  Networked,
  AnimatePath,
}

export enum FunctionTypes {
  Description = 'description',
  Desc = 'desc',
  Schema = 'schema',
  Array = 'array',
  Tags = 'tags',
  Select = 'select',
  EntityPicker = 'entityPicker',
}

type FunctionTypesMap = {
  [FunctionTypes.Description]?: string;
  [FunctionTypes.Desc]?: string;
  [FunctionTypes.Array]?: boolean;
  [FunctionTypes.Tags]?: boolean;
  [FunctionTypes.Select]?: boolean;
  [FunctionTypes.EntityPicker]?: boolean;
  [FunctionTypes.Schema]?: Schemas;
};

type SchemaTypes = {
  number: number;
  string: string;
  boolean: boolean;
  json: string; // use string temporarily
  vec3: [number, number, number];
  vec2: [number, number];
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
  | Schema<'vec2'>
)[];

export type ConfigsType = {
  type: string;
  schema: Schemas;
};
