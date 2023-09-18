
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Players
 * 
 */
export type Players = $Result.DefaultSelection<Prisma.$PlayersPayload>
/**
 * Model Targets
 * 
 */
export type Targets = $Result.DefaultSelection<Prisma.$TargetsPayload>
/**
 * Model PendingTargets
 * 
 */
export type PendingTargets = $Result.DefaultSelection<Prisma.$PendingTargetsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Players
 * const players = await prisma.players.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Players
   * const players = await prisma.players.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.players`: Exposes CRUD operations for the **Players** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.players.findMany()
    * ```
    */
  get players(): Prisma.PlayersDelegate<ExtArgs>;

  /**
   * `prisma.targets`: Exposes CRUD operations for the **Targets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Targets
    * const targets = await prisma.targets.findMany()
    * ```
    */
  get targets(): Prisma.TargetsDelegate<ExtArgs>;

  /**
   * `prisma.pendingTargets`: Exposes CRUD operations for the **PendingTargets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PendingTargets
    * const pendingTargets = await prisma.pendingTargets.findMany()
    * ```
    */
  get pendingTargets(): Prisma.PendingTargetsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Players: 'Players',
    Targets: 'Targets',
    PendingTargets: 'PendingTargets'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'players' | 'targets' | 'pendingTargets'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Players: {
        payload: Prisma.$PlayersPayload<ExtArgs>
        fields: Prisma.PlayersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          findFirst: {
            args: Prisma.PlayersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          findMany: {
            args: Prisma.PlayersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>[]
          }
          create: {
            args: Prisma.PlayersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          createMany: {
            args: Prisma.PlayersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlayersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          update: {
            args: Prisma.PlayersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          deleteMany: {
            args: Prisma.PlayersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlayersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlayersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          aggregate: {
            args: Prisma.PlayersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlayers>
          }
          groupBy: {
            args: Prisma.PlayersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlayersGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayersCountArgs<ExtArgs>,
            result: $Utils.Optional<PlayersCountAggregateOutputType> | number
          }
        }
      }
      Targets: {
        payload: Prisma.$TargetsPayload<ExtArgs>
        fields: Prisma.TargetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TargetsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TargetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TargetsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TargetsPayload>
          }
          findFirst: {
            args: Prisma.TargetsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TargetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TargetsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TargetsPayload>
          }
          findMany: {
            args: Prisma.TargetsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TargetsPayload>[]
          }
          create: {
            args: Prisma.TargetsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TargetsPayload>
          }
          createMany: {
            args: Prisma.TargetsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TargetsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TargetsPayload>
          }
          update: {
            args: Prisma.TargetsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TargetsPayload>
          }
          deleteMany: {
            args: Prisma.TargetsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TargetsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TargetsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TargetsPayload>
          }
          aggregate: {
            args: Prisma.TargetsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTargets>
          }
          groupBy: {
            args: Prisma.TargetsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TargetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TargetsCountArgs<ExtArgs>,
            result: $Utils.Optional<TargetsCountAggregateOutputType> | number
          }
        }
      }
      PendingTargets: {
        payload: Prisma.$PendingTargetsPayload<ExtArgs>
        fields: Prisma.PendingTargetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendingTargetsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PendingTargetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendingTargetsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PendingTargetsPayload>
          }
          findFirst: {
            args: Prisma.PendingTargetsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PendingTargetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendingTargetsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PendingTargetsPayload>
          }
          findMany: {
            args: Prisma.PendingTargetsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PendingTargetsPayload>[]
          }
          create: {
            args: Prisma.PendingTargetsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PendingTargetsPayload>
          }
          createMany: {
            args: Prisma.PendingTargetsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PendingTargetsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PendingTargetsPayload>
          }
          update: {
            args: Prisma.PendingTargetsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PendingTargetsPayload>
          }
          deleteMany: {
            args: Prisma.PendingTargetsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PendingTargetsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PendingTargetsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PendingTargetsPayload>
          }
          aggregate: {
            args: Prisma.PendingTargetsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePendingTargets>
          }
          groupBy: {
            args: Prisma.PendingTargetsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PendingTargetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendingTargetsCountArgs<ExtArgs>,
            result: $Utils.Optional<PendingTargetsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Players
   */

  export type AggregatePlayers = {
    _count: PlayersCountAggregateOutputType | null
    _avg: PlayersAvgAggregateOutputType | null
    _sum: PlayersSumAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  export type PlayersAvgAggregateOutputType = {
    rent: number | null
  }

  export type PlayersSumAggregateOutputType = {
    rent: number | null
  }

  export type PlayersMinAggregateOutputType = {
    wallet: string | null
    rent: number | null
  }

  export type PlayersMaxAggregateOutputType = {
    wallet: string | null
    rent: number | null
  }

  export type PlayersCountAggregateOutputType = {
    wallet: number
    rent: number
    _all: number
  }


  export type PlayersAvgAggregateInputType = {
    rent?: true
  }

  export type PlayersSumAggregateInputType = {
    rent?: true
  }

  export type PlayersMinAggregateInputType = {
    wallet?: true
    rent?: true
  }

  export type PlayersMaxAggregateInputType = {
    wallet?: true
    rent?: true
  }

  export type PlayersCountAggregateInputType = {
    wallet?: true
    rent?: true
    _all?: true
  }

  export type PlayersAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to aggregate.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayersMaxAggregateInputType
  }

  export type GetPlayersAggregateType<T extends PlayersAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayers[P]>
      : GetScalarType<T[P], AggregatePlayers[P]>
  }




  export type PlayersGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PlayersWhereInput
    orderBy?: PlayersOrderByWithAggregationInput | PlayersOrderByWithAggregationInput[]
    by: PlayersScalarFieldEnum[] | PlayersScalarFieldEnum
    having?: PlayersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayersCountAggregateInputType | true
    _avg?: PlayersAvgAggregateInputType
    _sum?: PlayersSumAggregateInputType
    _min?: PlayersMinAggregateInputType
    _max?: PlayersMaxAggregateInputType
  }

  export type PlayersGroupByOutputType = {
    wallet: string
    rent: number
    _count: PlayersCountAggregateOutputType | null
    _avg: PlayersAvgAggregateOutputType | null
    _sum: PlayersSumAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  type GetPlayersGroupByPayload<T extends PlayersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayersGroupByOutputType[P]>
            : GetScalarType<T[P], PlayersGroupByOutputType[P]>
        }
      >
    >


  export type PlayersSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wallet?: boolean
    rent?: boolean
  }, ExtArgs["result"]["players"]>

  export type PlayersSelectScalar = {
    wallet?: boolean
    rent?: boolean
  }


  export type $PlayersPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Players"
    objects: {}
    scalars: $Extensions.GetResult<{
      wallet: string
      rent: number
    }, ExtArgs["result"]["players"]>
    composites: {}
  }


  type PlayersGetPayload<S extends boolean | null | undefined | PlayersDefaultArgs> = $Result.GetResult<Prisma.$PlayersPayload, S>

  type PlayersCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PlayersFindManyArgs, 'select' | 'include'> & {
      select?: PlayersCountAggregateInputType | true
    }

  export interface PlayersDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Players'], meta: { name: 'Players' } }
    /**
     * Find zero or one Players that matches the filter.
     * @param {PlayersFindUniqueArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlayersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlayersFindUniqueArgs<ExtArgs>>
    ): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Players that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlayersFindUniqueOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlayersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindFirstArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlayersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayersFindFirstArgs<ExtArgs>>
    ): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Players that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindFirstOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlayersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.players.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.players.findMany({ take: 10 })
     * 
     * // Only select the `wallet`
     * const playersWithWalletOnly = await prisma.players.findMany({ select: { wallet: true } })
     * 
    **/
    findMany<T extends PlayersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Players.
     * @param {PlayersCreateArgs} args - Arguments to create a Players.
     * @example
     * // Create one Players
     * const Players = await prisma.players.create({
     *   data: {
     *     // ... data to create a Players
     *   }
     * })
     * 
    **/
    create<T extends PlayersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlayersCreateArgs<ExtArgs>>
    ): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Players.
     *     @param {PlayersCreateManyArgs} args - Arguments to create many Players.
     *     @example
     *     // Create many Players
     *     const players = await prisma.players.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlayersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Players.
     * @param {PlayersDeleteArgs} args - Arguments to delete one Players.
     * @example
     * // Delete one Players
     * const Players = await prisma.players.delete({
     *   where: {
     *     // ... filter to delete one Players
     *   }
     * })
     * 
    **/
    delete<T extends PlayersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlayersDeleteArgs<ExtArgs>>
    ): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Players.
     * @param {PlayersUpdateArgs} args - Arguments to update one Players.
     * @example
     * // Update one Players
     * const players = await prisma.players.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlayersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlayersUpdateArgs<ExtArgs>>
    ): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Players.
     * @param {PlayersDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.players.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlayersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const players = await prisma.players.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlayersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlayersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Players.
     * @param {PlayersUpsertArgs} args - Arguments to update or create a Players.
     * @example
     * // Update or create a Players
     * const players = await prisma.players.upsert({
     *   create: {
     *     // ... data to create a Players
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Players we want to update
     *   }
     * })
    **/
    upsert<T extends PlayersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlayersUpsertArgs<ExtArgs>>
    ): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.players.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayersCountArgs>(
      args?: Subset<T, PlayersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayersAggregateArgs>(args: Subset<T, PlayersAggregateArgs>): Prisma.PrismaPromise<GetPlayersAggregateType<T>>

    /**
     * Group by Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayersGroupByArgs['orderBy'] }
        : { orderBy?: PlayersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Players model
   */
  readonly fields: PlayersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Players.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayersClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Players model
   */ 
  interface PlayersFieldRefs {
    readonly wallet: FieldRef<"Players", 'String'>
    readonly rent: FieldRef<"Players", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Players findUnique
   */
  export type PlayersFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where: PlayersWhereUniqueInput
  }


  /**
   * Players findUniqueOrThrow
   */
  export type PlayersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where: PlayersWhereUniqueInput
  }


  /**
   * Players findFirst
   */
  export type PlayersFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }


  /**
   * Players findFirstOrThrow
   */
  export type PlayersFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }


  /**
   * Players findMany
   */
  export type PlayersFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }


  /**
   * Players create
   */
  export type PlayersCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * The data needed to create a Players.
     */
    data: XOR<PlayersCreateInput, PlayersUncheckedCreateInput>
  }


  /**
   * Players createMany
   */
  export type PlayersCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayersCreateManyInput | PlayersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Players update
   */
  export type PlayersUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * The data needed to update a Players.
     */
    data: XOR<PlayersUpdateInput, PlayersUncheckedUpdateInput>
    /**
     * Choose, which Players to update.
     */
    where: PlayersWhereUniqueInput
  }


  /**
   * Players updateMany
   */
  export type PlayersUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayersUpdateManyMutationInput, PlayersUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayersWhereInput
  }


  /**
   * Players upsert
   */
  export type PlayersUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * The filter to search for the Players to update in case it exists.
     */
    where: PlayersWhereUniqueInput
    /**
     * In case the Players found by the `where` argument doesn't exist, create a new Players with this data.
     */
    create: XOR<PlayersCreateInput, PlayersUncheckedCreateInput>
    /**
     * In case the Players was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayersUpdateInput, PlayersUncheckedUpdateInput>
  }


  /**
   * Players delete
   */
  export type PlayersDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Filter which Players to delete.
     */
    where: PlayersWhereUniqueInput
  }


  /**
   * Players deleteMany
   */
  export type PlayersDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayersWhereInput
  }


  /**
   * Players without action
   */
  export type PlayersDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
  }



  /**
   * Model Targets
   */

  export type AggregateTargets = {
    _count: TargetsCountAggregateOutputType | null
    _min: TargetsMinAggregateOutputType | null
    _max: TargetsMaxAggregateOutputType | null
  }

  export type TargetsMinAggregateOutputType = {
    id: string | null
    owner: string | null
    programId: string | null
    instruction: string | null
    targetType: string | null
    targetAddress: string | null
  }

  export type TargetsMaxAggregateOutputType = {
    id: string | null
    owner: string | null
    programId: string | null
    instruction: string | null
    targetType: string | null
    targetAddress: string | null
  }

  export type TargetsCountAggregateOutputType = {
    id: number
    owner: number
    programId: number
    instruction: number
    targetType: number
    targetAddress: number
    _all: number
  }


  export type TargetsMinAggregateInputType = {
    id?: true
    owner?: true
    programId?: true
    instruction?: true
    targetType?: true
    targetAddress?: true
  }

  export type TargetsMaxAggregateInputType = {
    id?: true
    owner?: true
    programId?: true
    instruction?: true
    targetType?: true
    targetAddress?: true
  }

  export type TargetsCountAggregateInputType = {
    id?: true
    owner?: true
    programId?: true
    instruction?: true
    targetType?: true
    targetAddress?: true
    _all?: true
  }

  export type TargetsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Targets to aggregate.
     */
    where?: TargetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Targets to fetch.
     */
    orderBy?: TargetsOrderByWithRelationInput | TargetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TargetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Targets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Targets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Targets
    **/
    _count?: true | TargetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TargetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TargetsMaxAggregateInputType
  }

  export type GetTargetsAggregateType<T extends TargetsAggregateArgs> = {
        [P in keyof T & keyof AggregateTargets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTargets[P]>
      : GetScalarType<T[P], AggregateTargets[P]>
  }




  export type TargetsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TargetsWhereInput
    orderBy?: TargetsOrderByWithAggregationInput | TargetsOrderByWithAggregationInput[]
    by: TargetsScalarFieldEnum[] | TargetsScalarFieldEnum
    having?: TargetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TargetsCountAggregateInputType | true
    _min?: TargetsMinAggregateInputType
    _max?: TargetsMaxAggregateInputType
  }

  export type TargetsGroupByOutputType = {
    id: string
    owner: string
    programId: string
    instruction: string
    targetType: string
    targetAddress: string
    _count: TargetsCountAggregateOutputType | null
    _min: TargetsMinAggregateOutputType | null
    _max: TargetsMaxAggregateOutputType | null
  }

  type GetTargetsGroupByPayload<T extends TargetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TargetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TargetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TargetsGroupByOutputType[P]>
            : GetScalarType<T[P], TargetsGroupByOutputType[P]>
        }
      >
    >


  export type TargetsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    programId?: boolean
    instruction?: boolean
    targetType?: boolean
    targetAddress?: boolean
  }, ExtArgs["result"]["targets"]>

  export type TargetsSelectScalar = {
    id?: boolean
    owner?: boolean
    programId?: boolean
    instruction?: boolean
    targetType?: boolean
    targetAddress?: boolean
  }


  export type $TargetsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Targets"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: string
      owner: string
      programId: string
      instruction: string
      targetType: string
      targetAddress: string
    }, ExtArgs["result"]["targets"]>
    composites: {}
  }


  type TargetsGetPayload<S extends boolean | null | undefined | TargetsDefaultArgs> = $Result.GetResult<Prisma.$TargetsPayload, S>

  type TargetsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TargetsFindManyArgs, 'select' | 'include'> & {
      select?: TargetsCountAggregateInputType | true
    }

  export interface TargetsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Targets'], meta: { name: 'Targets' } }
    /**
     * Find zero or one Targets that matches the filter.
     * @param {TargetsFindUniqueArgs} args - Arguments to find a Targets
     * @example
     * // Get one Targets
     * const targets = await prisma.targets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TargetsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TargetsFindUniqueArgs<ExtArgs>>
    ): Prisma__TargetsClient<$Result.GetResult<Prisma.$TargetsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Targets that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TargetsFindUniqueOrThrowArgs} args - Arguments to find a Targets
     * @example
     * // Get one Targets
     * const targets = await prisma.targets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TargetsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TargetsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TargetsClient<$Result.GetResult<Prisma.$TargetsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Targets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetsFindFirstArgs} args - Arguments to find a Targets
     * @example
     * // Get one Targets
     * const targets = await prisma.targets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TargetsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TargetsFindFirstArgs<ExtArgs>>
    ): Prisma__TargetsClient<$Result.GetResult<Prisma.$TargetsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Targets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetsFindFirstOrThrowArgs} args - Arguments to find a Targets
     * @example
     * // Get one Targets
     * const targets = await prisma.targets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TargetsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TargetsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TargetsClient<$Result.GetResult<Prisma.$TargetsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Targets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Targets
     * const targets = await prisma.targets.findMany()
     * 
     * // Get first 10 Targets
     * const targets = await prisma.targets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const targetsWithIdOnly = await prisma.targets.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TargetsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TargetsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Targets.
     * @param {TargetsCreateArgs} args - Arguments to create a Targets.
     * @example
     * // Create one Targets
     * const Targets = await prisma.targets.create({
     *   data: {
     *     // ... data to create a Targets
     *   }
     * })
     * 
    **/
    create<T extends TargetsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TargetsCreateArgs<ExtArgs>>
    ): Prisma__TargetsClient<$Result.GetResult<Prisma.$TargetsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Targets.
     *     @param {TargetsCreateManyArgs} args - Arguments to create many Targets.
     *     @example
     *     // Create many Targets
     *     const targets = await prisma.targets.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TargetsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TargetsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Targets.
     * @param {TargetsDeleteArgs} args - Arguments to delete one Targets.
     * @example
     * // Delete one Targets
     * const Targets = await prisma.targets.delete({
     *   where: {
     *     // ... filter to delete one Targets
     *   }
     * })
     * 
    **/
    delete<T extends TargetsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TargetsDeleteArgs<ExtArgs>>
    ): Prisma__TargetsClient<$Result.GetResult<Prisma.$TargetsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Targets.
     * @param {TargetsUpdateArgs} args - Arguments to update one Targets.
     * @example
     * // Update one Targets
     * const targets = await prisma.targets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TargetsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TargetsUpdateArgs<ExtArgs>>
    ): Prisma__TargetsClient<$Result.GetResult<Prisma.$TargetsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Targets.
     * @param {TargetsDeleteManyArgs} args - Arguments to filter Targets to delete.
     * @example
     * // Delete a few Targets
     * const { count } = await prisma.targets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TargetsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TargetsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Targets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Targets
     * const targets = await prisma.targets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TargetsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TargetsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Targets.
     * @param {TargetsUpsertArgs} args - Arguments to update or create a Targets.
     * @example
     * // Update or create a Targets
     * const targets = await prisma.targets.upsert({
     *   create: {
     *     // ... data to create a Targets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Targets we want to update
     *   }
     * })
    **/
    upsert<T extends TargetsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TargetsUpsertArgs<ExtArgs>>
    ): Prisma__TargetsClient<$Result.GetResult<Prisma.$TargetsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Targets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetsCountArgs} args - Arguments to filter Targets to count.
     * @example
     * // Count the number of Targets
     * const count = await prisma.targets.count({
     *   where: {
     *     // ... the filter for the Targets we want to count
     *   }
     * })
    **/
    count<T extends TargetsCountArgs>(
      args?: Subset<T, TargetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TargetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Targets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TargetsAggregateArgs>(args: Subset<T, TargetsAggregateArgs>): Prisma.PrismaPromise<GetTargetsAggregateType<T>>

    /**
     * Group by Targets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TargetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TargetsGroupByArgs['orderBy'] }
        : { orderBy?: TargetsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TargetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTargetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Targets model
   */
  readonly fields: TargetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Targets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TargetsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Targets model
   */ 
  interface TargetsFieldRefs {
    readonly id: FieldRef<"Targets", 'String'>
    readonly owner: FieldRef<"Targets", 'String'>
    readonly programId: FieldRef<"Targets", 'String'>
    readonly instruction: FieldRef<"Targets", 'String'>
    readonly targetType: FieldRef<"Targets", 'String'>
    readonly targetAddress: FieldRef<"Targets", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Targets findUnique
   */
  export type TargetsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Targets
     */
    select?: TargetsSelect<ExtArgs> | null
    /**
     * Filter, which Targets to fetch.
     */
    where: TargetsWhereUniqueInput
  }


  /**
   * Targets findUniqueOrThrow
   */
  export type TargetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Targets
     */
    select?: TargetsSelect<ExtArgs> | null
    /**
     * Filter, which Targets to fetch.
     */
    where: TargetsWhereUniqueInput
  }


  /**
   * Targets findFirst
   */
  export type TargetsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Targets
     */
    select?: TargetsSelect<ExtArgs> | null
    /**
     * Filter, which Targets to fetch.
     */
    where?: TargetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Targets to fetch.
     */
    orderBy?: TargetsOrderByWithRelationInput | TargetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Targets.
     */
    cursor?: TargetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Targets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Targets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Targets.
     */
    distinct?: TargetsScalarFieldEnum | TargetsScalarFieldEnum[]
  }


  /**
   * Targets findFirstOrThrow
   */
  export type TargetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Targets
     */
    select?: TargetsSelect<ExtArgs> | null
    /**
     * Filter, which Targets to fetch.
     */
    where?: TargetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Targets to fetch.
     */
    orderBy?: TargetsOrderByWithRelationInput | TargetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Targets.
     */
    cursor?: TargetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Targets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Targets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Targets.
     */
    distinct?: TargetsScalarFieldEnum | TargetsScalarFieldEnum[]
  }


  /**
   * Targets findMany
   */
  export type TargetsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Targets
     */
    select?: TargetsSelect<ExtArgs> | null
    /**
     * Filter, which Targets to fetch.
     */
    where?: TargetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Targets to fetch.
     */
    orderBy?: TargetsOrderByWithRelationInput | TargetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Targets.
     */
    cursor?: TargetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Targets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Targets.
     */
    skip?: number
    distinct?: TargetsScalarFieldEnum | TargetsScalarFieldEnum[]
  }


  /**
   * Targets create
   */
  export type TargetsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Targets
     */
    select?: TargetsSelect<ExtArgs> | null
    /**
     * The data needed to create a Targets.
     */
    data: XOR<TargetsCreateInput, TargetsUncheckedCreateInput>
  }


  /**
   * Targets createMany
   */
  export type TargetsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Targets.
     */
    data: TargetsCreateManyInput | TargetsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Targets update
   */
  export type TargetsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Targets
     */
    select?: TargetsSelect<ExtArgs> | null
    /**
     * The data needed to update a Targets.
     */
    data: XOR<TargetsUpdateInput, TargetsUncheckedUpdateInput>
    /**
     * Choose, which Targets to update.
     */
    where: TargetsWhereUniqueInput
  }


  /**
   * Targets updateMany
   */
  export type TargetsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Targets.
     */
    data: XOR<TargetsUpdateManyMutationInput, TargetsUncheckedUpdateManyInput>
    /**
     * Filter which Targets to update
     */
    where?: TargetsWhereInput
  }


  /**
   * Targets upsert
   */
  export type TargetsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Targets
     */
    select?: TargetsSelect<ExtArgs> | null
    /**
     * The filter to search for the Targets to update in case it exists.
     */
    where: TargetsWhereUniqueInput
    /**
     * In case the Targets found by the `where` argument doesn't exist, create a new Targets with this data.
     */
    create: XOR<TargetsCreateInput, TargetsUncheckedCreateInput>
    /**
     * In case the Targets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TargetsUpdateInput, TargetsUncheckedUpdateInput>
  }


  /**
   * Targets delete
   */
  export type TargetsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Targets
     */
    select?: TargetsSelect<ExtArgs> | null
    /**
     * Filter which Targets to delete.
     */
    where: TargetsWhereUniqueInput
  }


  /**
   * Targets deleteMany
   */
  export type TargetsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Targets to delete
     */
    where?: TargetsWhereInput
  }


  /**
   * Targets without action
   */
  export type TargetsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Targets
     */
    select?: TargetsSelect<ExtArgs> | null
  }



  /**
   * Model PendingTargets
   */

  export type AggregatePendingTargets = {
    _count: PendingTargetsCountAggregateOutputType | null
    _min: PendingTargetsMinAggregateOutputType | null
    _max: PendingTargetsMaxAggregateOutputType | null
  }

  export type PendingTargetsMinAggregateOutputType = {
    id: string | null
    owner: string | null
    programId: string | null
    instruction: string | null
    targetType: string | null
  }

  export type PendingTargetsMaxAggregateOutputType = {
    id: string | null
    owner: string | null
    programId: string | null
    instruction: string | null
    targetType: string | null
  }

  export type PendingTargetsCountAggregateOutputType = {
    id: number
    owner: number
    programId: number
    instruction: number
    targetType: number
    _all: number
  }


  export type PendingTargetsMinAggregateInputType = {
    id?: true
    owner?: true
    programId?: true
    instruction?: true
    targetType?: true
  }

  export type PendingTargetsMaxAggregateInputType = {
    id?: true
    owner?: true
    programId?: true
    instruction?: true
    targetType?: true
  }

  export type PendingTargetsCountAggregateInputType = {
    id?: true
    owner?: true
    programId?: true
    instruction?: true
    targetType?: true
    _all?: true
  }

  export type PendingTargetsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingTargets to aggregate.
     */
    where?: PendingTargetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingTargets to fetch.
     */
    orderBy?: PendingTargetsOrderByWithRelationInput | PendingTargetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendingTargetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PendingTargets
    **/
    _count?: true | PendingTargetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendingTargetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendingTargetsMaxAggregateInputType
  }

  export type GetPendingTargetsAggregateType<T extends PendingTargetsAggregateArgs> = {
        [P in keyof T & keyof AggregatePendingTargets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendingTargets[P]>
      : GetScalarType<T[P], AggregatePendingTargets[P]>
  }




  export type PendingTargetsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PendingTargetsWhereInput
    orderBy?: PendingTargetsOrderByWithAggregationInput | PendingTargetsOrderByWithAggregationInput[]
    by: PendingTargetsScalarFieldEnum[] | PendingTargetsScalarFieldEnum
    having?: PendingTargetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendingTargetsCountAggregateInputType | true
    _min?: PendingTargetsMinAggregateInputType
    _max?: PendingTargetsMaxAggregateInputType
  }

  export type PendingTargetsGroupByOutputType = {
    id: string
    owner: string
    programId: string
    instruction: string
    targetType: string
    _count: PendingTargetsCountAggregateOutputType | null
    _min: PendingTargetsMinAggregateOutputType | null
    _max: PendingTargetsMaxAggregateOutputType | null
  }

  type GetPendingTargetsGroupByPayload<T extends PendingTargetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendingTargetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendingTargetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendingTargetsGroupByOutputType[P]>
            : GetScalarType<T[P], PendingTargetsGroupByOutputType[P]>
        }
      >
    >


  export type PendingTargetsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    programId?: boolean
    instruction?: boolean
    targetType?: boolean
  }, ExtArgs["result"]["pendingTargets"]>

  export type PendingTargetsSelectScalar = {
    id?: boolean
    owner?: boolean
    programId?: boolean
    instruction?: boolean
    targetType?: boolean
  }


  export type $PendingTargetsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "PendingTargets"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: string
      owner: string
      programId: string
      instruction: string
      targetType: string
    }, ExtArgs["result"]["pendingTargets"]>
    composites: {}
  }


  type PendingTargetsGetPayload<S extends boolean | null | undefined | PendingTargetsDefaultArgs> = $Result.GetResult<Prisma.$PendingTargetsPayload, S>

  type PendingTargetsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PendingTargetsFindManyArgs, 'select' | 'include'> & {
      select?: PendingTargetsCountAggregateInputType | true
    }

  export interface PendingTargetsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PendingTargets'], meta: { name: 'PendingTargets' } }
    /**
     * Find zero or one PendingTargets that matches the filter.
     * @param {PendingTargetsFindUniqueArgs} args - Arguments to find a PendingTargets
     * @example
     * // Get one PendingTargets
     * const pendingTargets = await prisma.pendingTargets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PendingTargetsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PendingTargetsFindUniqueArgs<ExtArgs>>
    ): Prisma__PendingTargetsClient<$Result.GetResult<Prisma.$PendingTargetsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PendingTargets that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PendingTargetsFindUniqueOrThrowArgs} args - Arguments to find a PendingTargets
     * @example
     * // Get one PendingTargets
     * const pendingTargets = await prisma.pendingTargets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PendingTargetsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PendingTargetsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PendingTargetsClient<$Result.GetResult<Prisma.$PendingTargetsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PendingTargets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingTargetsFindFirstArgs} args - Arguments to find a PendingTargets
     * @example
     * // Get one PendingTargets
     * const pendingTargets = await prisma.pendingTargets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PendingTargetsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PendingTargetsFindFirstArgs<ExtArgs>>
    ): Prisma__PendingTargetsClient<$Result.GetResult<Prisma.$PendingTargetsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PendingTargets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingTargetsFindFirstOrThrowArgs} args - Arguments to find a PendingTargets
     * @example
     * // Get one PendingTargets
     * const pendingTargets = await prisma.pendingTargets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PendingTargetsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PendingTargetsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PendingTargetsClient<$Result.GetResult<Prisma.$PendingTargetsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PendingTargets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingTargetsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PendingTargets
     * const pendingTargets = await prisma.pendingTargets.findMany()
     * 
     * // Get first 10 PendingTargets
     * const pendingTargets = await prisma.pendingTargets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendingTargetsWithIdOnly = await prisma.pendingTargets.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PendingTargetsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PendingTargetsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingTargetsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PendingTargets.
     * @param {PendingTargetsCreateArgs} args - Arguments to create a PendingTargets.
     * @example
     * // Create one PendingTargets
     * const PendingTargets = await prisma.pendingTargets.create({
     *   data: {
     *     // ... data to create a PendingTargets
     *   }
     * })
     * 
    **/
    create<T extends PendingTargetsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PendingTargetsCreateArgs<ExtArgs>>
    ): Prisma__PendingTargetsClient<$Result.GetResult<Prisma.$PendingTargetsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PendingTargets.
     *     @param {PendingTargetsCreateManyArgs} args - Arguments to create many PendingTargets.
     *     @example
     *     // Create many PendingTargets
     *     const pendingTargets = await prisma.pendingTargets.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PendingTargetsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PendingTargetsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PendingTargets.
     * @param {PendingTargetsDeleteArgs} args - Arguments to delete one PendingTargets.
     * @example
     * // Delete one PendingTargets
     * const PendingTargets = await prisma.pendingTargets.delete({
     *   where: {
     *     // ... filter to delete one PendingTargets
     *   }
     * })
     * 
    **/
    delete<T extends PendingTargetsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PendingTargetsDeleteArgs<ExtArgs>>
    ): Prisma__PendingTargetsClient<$Result.GetResult<Prisma.$PendingTargetsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PendingTargets.
     * @param {PendingTargetsUpdateArgs} args - Arguments to update one PendingTargets.
     * @example
     * // Update one PendingTargets
     * const pendingTargets = await prisma.pendingTargets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PendingTargetsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PendingTargetsUpdateArgs<ExtArgs>>
    ): Prisma__PendingTargetsClient<$Result.GetResult<Prisma.$PendingTargetsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PendingTargets.
     * @param {PendingTargetsDeleteManyArgs} args - Arguments to filter PendingTargets to delete.
     * @example
     * // Delete a few PendingTargets
     * const { count } = await prisma.pendingTargets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PendingTargetsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PendingTargetsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendingTargets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingTargetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PendingTargets
     * const pendingTargets = await prisma.pendingTargets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PendingTargetsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PendingTargetsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PendingTargets.
     * @param {PendingTargetsUpsertArgs} args - Arguments to update or create a PendingTargets.
     * @example
     * // Update or create a PendingTargets
     * const pendingTargets = await prisma.pendingTargets.upsert({
     *   create: {
     *     // ... data to create a PendingTargets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PendingTargets we want to update
     *   }
     * })
    **/
    upsert<T extends PendingTargetsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PendingTargetsUpsertArgs<ExtArgs>>
    ): Prisma__PendingTargetsClient<$Result.GetResult<Prisma.$PendingTargetsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PendingTargets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingTargetsCountArgs} args - Arguments to filter PendingTargets to count.
     * @example
     * // Count the number of PendingTargets
     * const count = await prisma.pendingTargets.count({
     *   where: {
     *     // ... the filter for the PendingTargets we want to count
     *   }
     * })
    **/
    count<T extends PendingTargetsCountArgs>(
      args?: Subset<T, PendingTargetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendingTargetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PendingTargets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingTargetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PendingTargetsAggregateArgs>(args: Subset<T, PendingTargetsAggregateArgs>): Prisma.PrismaPromise<GetPendingTargetsAggregateType<T>>

    /**
     * Group by PendingTargets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingTargetsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PendingTargetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendingTargetsGroupByArgs['orderBy'] }
        : { orderBy?: PendingTargetsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PendingTargetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendingTargetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PendingTargets model
   */
  readonly fields: PendingTargetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PendingTargets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendingTargetsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PendingTargets model
   */ 
  interface PendingTargetsFieldRefs {
    readonly id: FieldRef<"PendingTargets", 'String'>
    readonly owner: FieldRef<"PendingTargets", 'String'>
    readonly programId: FieldRef<"PendingTargets", 'String'>
    readonly instruction: FieldRef<"PendingTargets", 'String'>
    readonly targetType: FieldRef<"PendingTargets", 'String'>
  }
    

  // Custom InputTypes

  /**
   * PendingTargets findUnique
   */
  export type PendingTargetsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTargets
     */
    select?: PendingTargetsSelect<ExtArgs> | null
    /**
     * Filter, which PendingTargets to fetch.
     */
    where: PendingTargetsWhereUniqueInput
  }


  /**
   * PendingTargets findUniqueOrThrow
   */
  export type PendingTargetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTargets
     */
    select?: PendingTargetsSelect<ExtArgs> | null
    /**
     * Filter, which PendingTargets to fetch.
     */
    where: PendingTargetsWhereUniqueInput
  }


  /**
   * PendingTargets findFirst
   */
  export type PendingTargetsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTargets
     */
    select?: PendingTargetsSelect<ExtArgs> | null
    /**
     * Filter, which PendingTargets to fetch.
     */
    where?: PendingTargetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingTargets to fetch.
     */
    orderBy?: PendingTargetsOrderByWithRelationInput | PendingTargetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingTargets.
     */
    cursor?: PendingTargetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingTargets.
     */
    distinct?: PendingTargetsScalarFieldEnum | PendingTargetsScalarFieldEnum[]
  }


  /**
   * PendingTargets findFirstOrThrow
   */
  export type PendingTargetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTargets
     */
    select?: PendingTargetsSelect<ExtArgs> | null
    /**
     * Filter, which PendingTargets to fetch.
     */
    where?: PendingTargetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingTargets to fetch.
     */
    orderBy?: PendingTargetsOrderByWithRelationInput | PendingTargetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingTargets.
     */
    cursor?: PendingTargetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingTargets.
     */
    distinct?: PendingTargetsScalarFieldEnum | PendingTargetsScalarFieldEnum[]
  }


  /**
   * PendingTargets findMany
   */
  export type PendingTargetsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTargets
     */
    select?: PendingTargetsSelect<ExtArgs> | null
    /**
     * Filter, which PendingTargets to fetch.
     */
    where?: PendingTargetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingTargets to fetch.
     */
    orderBy?: PendingTargetsOrderByWithRelationInput | PendingTargetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PendingTargets.
     */
    cursor?: PendingTargetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingTargets.
     */
    skip?: number
    distinct?: PendingTargetsScalarFieldEnum | PendingTargetsScalarFieldEnum[]
  }


  /**
   * PendingTargets create
   */
  export type PendingTargetsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTargets
     */
    select?: PendingTargetsSelect<ExtArgs> | null
    /**
     * The data needed to create a PendingTargets.
     */
    data: XOR<PendingTargetsCreateInput, PendingTargetsUncheckedCreateInput>
  }


  /**
   * PendingTargets createMany
   */
  export type PendingTargetsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PendingTargets.
     */
    data: PendingTargetsCreateManyInput | PendingTargetsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PendingTargets update
   */
  export type PendingTargetsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTargets
     */
    select?: PendingTargetsSelect<ExtArgs> | null
    /**
     * The data needed to update a PendingTargets.
     */
    data: XOR<PendingTargetsUpdateInput, PendingTargetsUncheckedUpdateInput>
    /**
     * Choose, which PendingTargets to update.
     */
    where: PendingTargetsWhereUniqueInput
  }


  /**
   * PendingTargets updateMany
   */
  export type PendingTargetsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PendingTargets.
     */
    data: XOR<PendingTargetsUpdateManyMutationInput, PendingTargetsUncheckedUpdateManyInput>
    /**
     * Filter which PendingTargets to update
     */
    where?: PendingTargetsWhereInput
  }


  /**
   * PendingTargets upsert
   */
  export type PendingTargetsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTargets
     */
    select?: PendingTargetsSelect<ExtArgs> | null
    /**
     * The filter to search for the PendingTargets to update in case it exists.
     */
    where: PendingTargetsWhereUniqueInput
    /**
     * In case the PendingTargets found by the `where` argument doesn't exist, create a new PendingTargets with this data.
     */
    create: XOR<PendingTargetsCreateInput, PendingTargetsUncheckedCreateInput>
    /**
     * In case the PendingTargets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendingTargetsUpdateInput, PendingTargetsUncheckedUpdateInput>
  }


  /**
   * PendingTargets delete
   */
  export type PendingTargetsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTargets
     */
    select?: PendingTargetsSelect<ExtArgs> | null
    /**
     * Filter which PendingTargets to delete.
     */
    where: PendingTargetsWhereUniqueInput
  }


  /**
   * PendingTargets deleteMany
   */
  export type PendingTargetsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingTargets to delete
     */
    where?: PendingTargetsWhereInput
  }


  /**
   * PendingTargets without action
   */
  export type PendingTargetsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingTargets
     */
    select?: PendingTargetsSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PlayersScalarFieldEnum: {
    wallet: 'wallet',
    rent: 'rent'
  };

  export type PlayersScalarFieldEnum = (typeof PlayersScalarFieldEnum)[keyof typeof PlayersScalarFieldEnum]


  export const TargetsScalarFieldEnum: {
    id: 'id',
    owner: 'owner',
    programId: 'programId',
    instruction: 'instruction',
    targetType: 'targetType',
    targetAddress: 'targetAddress'
  };

  export type TargetsScalarFieldEnum = (typeof TargetsScalarFieldEnum)[keyof typeof TargetsScalarFieldEnum]


  export const PendingTargetsScalarFieldEnum: {
    id: 'id',
    owner: 'owner',
    programId: 'programId',
    instruction: 'instruction',
    targetType: 'targetType'
  };

  export type PendingTargetsScalarFieldEnum = (typeof PendingTargetsScalarFieldEnum)[keyof typeof PendingTargetsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PlayersWhereInput = {
    AND?: PlayersWhereInput | PlayersWhereInput[]
    OR?: PlayersWhereInput[]
    NOT?: PlayersWhereInput | PlayersWhereInput[]
    wallet?: StringFilter<"Players"> | string
    rent?: IntFilter<"Players"> | number
  }

  export type PlayersOrderByWithRelationInput = {
    wallet?: SortOrder
    rent?: SortOrder
  }

  export type PlayersWhereUniqueInput = Prisma.AtLeast<{
    wallet?: string
    AND?: PlayersWhereInput | PlayersWhereInput[]
    OR?: PlayersWhereInput[]
    NOT?: PlayersWhereInput | PlayersWhereInput[]
    rent?: IntFilter<"Players"> | number
  }, "wallet">

  export type PlayersOrderByWithAggregationInput = {
    wallet?: SortOrder
    rent?: SortOrder
    _count?: PlayersCountOrderByAggregateInput
    _avg?: PlayersAvgOrderByAggregateInput
    _max?: PlayersMaxOrderByAggregateInput
    _min?: PlayersMinOrderByAggregateInput
    _sum?: PlayersSumOrderByAggregateInput
  }

  export type PlayersScalarWhereWithAggregatesInput = {
    AND?: PlayersScalarWhereWithAggregatesInput | PlayersScalarWhereWithAggregatesInput[]
    OR?: PlayersScalarWhereWithAggregatesInput[]
    NOT?: PlayersScalarWhereWithAggregatesInput | PlayersScalarWhereWithAggregatesInput[]
    wallet?: StringWithAggregatesFilter<"Players"> | string
    rent?: IntWithAggregatesFilter<"Players"> | number
  }

  export type TargetsWhereInput = {
    AND?: TargetsWhereInput | TargetsWhereInput[]
    OR?: TargetsWhereInput[]
    NOT?: TargetsWhereInput | TargetsWhereInput[]
    id?: StringFilter<"Targets"> | string
    owner?: StringFilter<"Targets"> | string
    programId?: StringFilter<"Targets"> | string
    instruction?: StringFilter<"Targets"> | string
    targetType?: StringFilter<"Targets"> | string
    targetAddress?: StringFilter<"Targets"> | string
  }

  export type TargetsOrderByWithRelationInput = {
    id?: SortOrder
    owner?: SortOrder
    programId?: SortOrder
    instruction?: SortOrder
    targetType?: SortOrder
    targetAddress?: SortOrder
  }

  export type TargetsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TargetsWhereInput | TargetsWhereInput[]
    OR?: TargetsWhereInput[]
    NOT?: TargetsWhereInput | TargetsWhereInput[]
    owner?: StringFilter<"Targets"> | string
    programId?: StringFilter<"Targets"> | string
    instruction?: StringFilter<"Targets"> | string
    targetType?: StringFilter<"Targets"> | string
    targetAddress?: StringFilter<"Targets"> | string
  }, "id">

  export type TargetsOrderByWithAggregationInput = {
    id?: SortOrder
    owner?: SortOrder
    programId?: SortOrder
    instruction?: SortOrder
    targetType?: SortOrder
    targetAddress?: SortOrder
    _count?: TargetsCountOrderByAggregateInput
    _max?: TargetsMaxOrderByAggregateInput
    _min?: TargetsMinOrderByAggregateInput
  }

  export type TargetsScalarWhereWithAggregatesInput = {
    AND?: TargetsScalarWhereWithAggregatesInput | TargetsScalarWhereWithAggregatesInput[]
    OR?: TargetsScalarWhereWithAggregatesInput[]
    NOT?: TargetsScalarWhereWithAggregatesInput | TargetsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Targets"> | string
    owner?: StringWithAggregatesFilter<"Targets"> | string
    programId?: StringWithAggregatesFilter<"Targets"> | string
    instruction?: StringWithAggregatesFilter<"Targets"> | string
    targetType?: StringWithAggregatesFilter<"Targets"> | string
    targetAddress?: StringWithAggregatesFilter<"Targets"> | string
  }

  export type PendingTargetsWhereInput = {
    AND?: PendingTargetsWhereInput | PendingTargetsWhereInput[]
    OR?: PendingTargetsWhereInput[]
    NOT?: PendingTargetsWhereInput | PendingTargetsWhereInput[]
    id?: StringFilter<"PendingTargets"> | string
    owner?: StringFilter<"PendingTargets"> | string
    programId?: StringFilter<"PendingTargets"> | string
    instruction?: StringFilter<"PendingTargets"> | string
    targetType?: StringFilter<"PendingTargets"> | string
  }

  export type PendingTargetsOrderByWithRelationInput = {
    id?: SortOrder
    owner?: SortOrder
    programId?: SortOrder
    instruction?: SortOrder
    targetType?: SortOrder
  }

  export type PendingTargetsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PendingTargetsWhereInput | PendingTargetsWhereInput[]
    OR?: PendingTargetsWhereInput[]
    NOT?: PendingTargetsWhereInput | PendingTargetsWhereInput[]
    owner?: StringFilter<"PendingTargets"> | string
    programId?: StringFilter<"PendingTargets"> | string
    instruction?: StringFilter<"PendingTargets"> | string
    targetType?: StringFilter<"PendingTargets"> | string
  }, "id">

  export type PendingTargetsOrderByWithAggregationInput = {
    id?: SortOrder
    owner?: SortOrder
    programId?: SortOrder
    instruction?: SortOrder
    targetType?: SortOrder
    _count?: PendingTargetsCountOrderByAggregateInput
    _max?: PendingTargetsMaxOrderByAggregateInput
    _min?: PendingTargetsMinOrderByAggregateInput
  }

  export type PendingTargetsScalarWhereWithAggregatesInput = {
    AND?: PendingTargetsScalarWhereWithAggregatesInput | PendingTargetsScalarWhereWithAggregatesInput[]
    OR?: PendingTargetsScalarWhereWithAggregatesInput[]
    NOT?: PendingTargetsScalarWhereWithAggregatesInput | PendingTargetsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PendingTargets"> | string
    owner?: StringWithAggregatesFilter<"PendingTargets"> | string
    programId?: StringWithAggregatesFilter<"PendingTargets"> | string
    instruction?: StringWithAggregatesFilter<"PendingTargets"> | string
    targetType?: StringWithAggregatesFilter<"PendingTargets"> | string
  }

  export type PlayersCreateInput = {
    wallet: string
    rent: number
  }

  export type PlayersUncheckedCreateInput = {
    wallet: string
    rent: number
  }

  export type PlayersUpdateInput = {
    wallet?: StringFieldUpdateOperationsInput | string
    rent?: IntFieldUpdateOperationsInput | number
  }

  export type PlayersUncheckedUpdateInput = {
    wallet?: StringFieldUpdateOperationsInput | string
    rent?: IntFieldUpdateOperationsInput | number
  }

  export type PlayersCreateManyInput = {
    wallet: string
    rent: number
  }

  export type PlayersUpdateManyMutationInput = {
    wallet?: StringFieldUpdateOperationsInput | string
    rent?: IntFieldUpdateOperationsInput | number
  }

  export type PlayersUncheckedUpdateManyInput = {
    wallet?: StringFieldUpdateOperationsInput | string
    rent?: IntFieldUpdateOperationsInput | number
  }

  export type TargetsCreateInput = {
    id?: string
    owner: string
    programId: string
    instruction: string
    targetType: string
    targetAddress: string
  }

  export type TargetsUncheckedCreateInput = {
    id?: string
    owner: string
    programId: string
    instruction: string
    targetType: string
    targetAddress: string
  }

  export type TargetsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetAddress?: StringFieldUpdateOperationsInput | string
  }

  export type TargetsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetAddress?: StringFieldUpdateOperationsInput | string
  }

  export type TargetsCreateManyInput = {
    id?: string
    owner: string
    programId: string
    instruction: string
    targetType: string
    targetAddress: string
  }

  export type TargetsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetAddress?: StringFieldUpdateOperationsInput | string
  }

  export type TargetsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetAddress?: StringFieldUpdateOperationsInput | string
  }

  export type PendingTargetsCreateInput = {
    id?: string
    owner: string
    programId: string
    instruction: string
    targetType: string
  }

  export type PendingTargetsUncheckedCreateInput = {
    id?: string
    owner: string
    programId: string
    instruction: string
    targetType: string
  }

  export type PendingTargetsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
  }

  export type PendingTargetsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
  }

  export type PendingTargetsCreateManyInput = {
    id?: string
    owner: string
    programId: string
    instruction: string
    targetType: string
  }

  export type PendingTargetsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
  }

  export type PendingTargetsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PlayersCountOrderByAggregateInput = {
    wallet?: SortOrder
    rent?: SortOrder
  }

  export type PlayersAvgOrderByAggregateInput = {
    rent?: SortOrder
  }

  export type PlayersMaxOrderByAggregateInput = {
    wallet?: SortOrder
    rent?: SortOrder
  }

  export type PlayersMinOrderByAggregateInput = {
    wallet?: SortOrder
    rent?: SortOrder
  }

  export type PlayersSumOrderByAggregateInput = {
    rent?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TargetsCountOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    programId?: SortOrder
    instruction?: SortOrder
    targetType?: SortOrder
    targetAddress?: SortOrder
  }

  export type TargetsMaxOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    programId?: SortOrder
    instruction?: SortOrder
    targetType?: SortOrder
    targetAddress?: SortOrder
  }

  export type TargetsMinOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    programId?: SortOrder
    instruction?: SortOrder
    targetType?: SortOrder
    targetAddress?: SortOrder
  }

  export type PendingTargetsCountOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    programId?: SortOrder
    instruction?: SortOrder
    targetType?: SortOrder
  }

  export type PendingTargetsMaxOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    programId?: SortOrder
    instruction?: SortOrder
    targetType?: SortOrder
  }

  export type PendingTargetsMinOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    programId?: SortOrder
    instruction?: SortOrder
    targetType?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PlayersDefaultArgs instead
     */
    export type PlayersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PlayersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TargetsDefaultArgs instead
     */
    export type TargetsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TargetsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PendingTargetsDefaultArgs instead
     */
    export type PendingTargetsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PendingTargetsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}