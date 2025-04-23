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
  InworldIntegration,
  Seat,
  Physic,
  Minimap,
  PostEffect,
}

export enum FunctionTypes {
  Description = 'description',
  Desc = 'desc',
  Schema = 'schema',
  Array = 'array',
  Tags = 'tags',
  Select = 'select',
  EntityPicker = 'entityPicker',
  LayersPicker = 'layersPicker',
}

type FunctionTypesMap = {
  [FunctionTypes.Description]?: string;
  [FunctionTypes.Desc]?: string;
  [FunctionTypes.Array]?: boolean;
  [FunctionTypes.Tags]?: boolean;
  [FunctionTypes.Select]?: boolean;
  [FunctionTypes.EntityPicker]?: boolean;
  [FunctionTypes.LayersPicker]?: boolean;
  [FunctionTypes.Schema]?: Schemas;
};

type SchemaTypes = {
  number: number | number[];
  string: string | string[];
  boolean: boolean | boolean[];
  json: string | string[]; // use string temporarily
  vec3: [number, number, number];
  vec2: [number, number];
  unixEpochMs: string;
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
  | Schema<'unixEpochMs'>
)[];

export type ConfigsType = {
  type: string;
  schema: Schemas;
};
