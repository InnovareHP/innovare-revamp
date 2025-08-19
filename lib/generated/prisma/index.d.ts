
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User_table
 * 
 */
export type User_table = $Result.DefaultSelection<Prisma.$User_tablePayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User_account_table
 * 
 */
export type User_account_table = $Result.DefaultSelection<Prisma.$User_account_tablePayload>
/**
 * Model Verification_table
 * 
 */
export type Verification_table = $Result.DefaultSelection<Prisma.$Verification_tablePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more User_tables
 * const user_tables = await prisma.user_table.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more User_tables
   * const user_tables = await prisma.user_table.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user_table`: Exposes CRUD operations for the **User_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_tables
    * const user_tables = await prisma.user_table.findMany()
    * ```
    */
  get user_table(): Prisma.User_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_account_table`: Exposes CRUD operations for the **User_account_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_account_tables
    * const user_account_tables = await prisma.user_account_table.findMany()
    * ```
    */
  get user_account_table(): Prisma.User_account_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification_table`: Exposes CRUD operations for the **Verification_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verification_tables
    * const verification_tables = await prisma.verification_table.findMany()
    * ```
    */
  get verification_table(): Prisma.Verification_tableDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User_table: 'User_table',
    Session: 'Session',
    User_account_table: 'User_account_table',
    Verification_table: 'Verification_table'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user_table" | "session" | "user_account_table" | "verification_table"
      txIsolationLevel: never
    }
    model: {
      User_table: {
        payload: Prisma.$User_tablePayload<ExtArgs>
        fields: Prisma.User_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload>
          }
          findFirst: {
            args: Prisma.User_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload>
          }
          findMany: {
            args: Prisma.User_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload>[]
          }
          create: {
            args: Prisma.User_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload>
          }
          createMany: {
            args: Prisma.User_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.User_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload>
          }
          update: {
            args: Prisma.User_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload>
          }
          deleteMany: {
            args: Prisma.User_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.User_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload>
          }
          aggregate: {
            args: Prisma.User_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_table>
          }
          groupBy: {
            args: Prisma.User_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_tableGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.User_tableFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.User_tableAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.User_tableCountArgs<ExtArgs>
            result: $Utils.Optional<User_tableCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SessionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SessionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User_account_table: {
        payload: Prisma.$User_account_tablePayload<ExtArgs>
        fields: Prisma.User_account_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_account_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_account_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload>
          }
          findFirst: {
            args: Prisma.User_account_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_account_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload>
          }
          findMany: {
            args: Prisma.User_account_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload>[]
          }
          create: {
            args: Prisma.User_account_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload>
          }
          createMany: {
            args: Prisma.User_account_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.User_account_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload>
          }
          update: {
            args: Prisma.User_account_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload>
          }
          deleteMany: {
            args: Prisma.User_account_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_account_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.User_account_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload>
          }
          aggregate: {
            args: Prisma.User_account_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_account_table>
          }
          groupBy: {
            args: Prisma.User_account_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_account_tableGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.User_account_tableFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.User_account_tableAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.User_account_tableCountArgs<ExtArgs>
            result: $Utils.Optional<User_account_tableCountAggregateOutputType> | number
          }
        }
      }
      Verification_table: {
        payload: Prisma.$Verification_tablePayload<ExtArgs>
        fields: Prisma.Verification_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Verification_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Verification_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload>
          }
          findFirst: {
            args: Prisma.Verification_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Verification_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload>
          }
          findMany: {
            args: Prisma.Verification_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload>[]
          }
          create: {
            args: Prisma.Verification_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload>
          }
          createMany: {
            args: Prisma.Verification_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Verification_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload>
          }
          update: {
            args: Prisma.Verification_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload>
          }
          deleteMany: {
            args: Prisma.Verification_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Verification_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Verification_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload>
          }
          aggregate: {
            args: Prisma.Verification_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification_table>
          }
          groupBy: {
            args: Prisma.Verification_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Verification_tableGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Verification_tableFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.Verification_tableAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.Verification_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Verification_tableCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user_table?: User_tableOmit
    session?: SessionOmit
    user_account_table?: User_account_tableOmit
    verification_table?: Verification_tableOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type User_tableCountOutputType
   */

  export type User_tableCountOutputType = {
    sessions: number
    user_account_tables: number
  }

  export type User_tableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User_tableCountOutputTypeCountSessionsArgs
    user_account_tables?: boolean | User_tableCountOutputTypeCountUser_account_tablesArgs
  }

  // Custom InputTypes
  /**
   * User_tableCountOutputType without action
   */
  export type User_tableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_tableCountOutputType
     */
    select?: User_tableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_tableCountOutputType without action
   */
  export type User_tableCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * User_tableCountOutputType without action
   */
  export type User_tableCountOutputTypeCountUser_account_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_account_tableWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User_table
   */

  export type AggregateUser_table = {
    _count: User_tableCountAggregateOutputType | null
    _min: User_tableMinAggregateOutputType | null
    _max: User_tableMaxAggregateOutputType | null
  }

  export type User_tableMinAggregateOutputType = {
    id: string | null
    user_name: string | null
    user_email: string | null
    user_email_verified: boolean | null
    user_image: string | null
    user_created_at: Date | null
    user_updated_at: Date | null
    user_role: string | null
    user_banned: boolean | null
    user_ban_reason: string | null
    user_ban_expires: Date | null
    user_is_onboarded: boolean | null
    user_phone_number: string | null
  }

  export type User_tableMaxAggregateOutputType = {
    id: string | null
    user_name: string | null
    user_email: string | null
    user_email_verified: boolean | null
    user_image: string | null
    user_created_at: Date | null
    user_updated_at: Date | null
    user_role: string | null
    user_banned: boolean | null
    user_ban_reason: string | null
    user_ban_expires: Date | null
    user_is_onboarded: boolean | null
    user_phone_number: string | null
  }

  export type User_tableCountAggregateOutputType = {
    id: number
    user_name: number
    user_email: number
    user_email_verified: number
    user_image: number
    user_created_at: number
    user_updated_at: number
    user_role: number
    user_banned: number
    user_ban_reason: number
    user_ban_expires: number
    user_is_onboarded: number
    user_phone_number: number
    _all: number
  }


  export type User_tableMinAggregateInputType = {
    id?: true
    user_name?: true
    user_email?: true
    user_email_verified?: true
    user_image?: true
    user_created_at?: true
    user_updated_at?: true
    user_role?: true
    user_banned?: true
    user_ban_reason?: true
    user_ban_expires?: true
    user_is_onboarded?: true
    user_phone_number?: true
  }

  export type User_tableMaxAggregateInputType = {
    id?: true
    user_name?: true
    user_email?: true
    user_email_verified?: true
    user_image?: true
    user_created_at?: true
    user_updated_at?: true
    user_role?: true
    user_banned?: true
    user_ban_reason?: true
    user_ban_expires?: true
    user_is_onboarded?: true
    user_phone_number?: true
  }

  export type User_tableCountAggregateInputType = {
    id?: true
    user_name?: true
    user_email?: true
    user_email_verified?: true
    user_image?: true
    user_created_at?: true
    user_updated_at?: true
    user_role?: true
    user_banned?: true
    user_ban_reason?: true
    user_ban_expires?: true
    user_is_onboarded?: true
    user_phone_number?: true
    _all?: true
  }

  export type User_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_table to aggregate.
     */
    where?: User_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_tables to fetch.
     */
    orderBy?: User_tableOrderByWithRelationInput | User_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_tables
    **/
    _count?: true | User_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_tableMaxAggregateInputType
  }

  export type GetUser_tableAggregateType<T extends User_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_table[P]>
      : GetScalarType<T[P], AggregateUser_table[P]>
  }




  export type User_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_tableWhereInput
    orderBy?: User_tableOrderByWithAggregationInput | User_tableOrderByWithAggregationInput[]
    by: User_tableScalarFieldEnum[] | User_tableScalarFieldEnum
    having?: User_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_tableCountAggregateInputType | true
    _min?: User_tableMinAggregateInputType
    _max?: User_tableMaxAggregateInputType
  }

  export type User_tableGroupByOutputType = {
    id: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image: string | null
    user_created_at: Date
    user_updated_at: Date
    user_role: string | null
    user_banned: boolean | null
    user_ban_reason: string | null
    user_ban_expires: Date | null
    user_is_onboarded: boolean | null
    user_phone_number: string | null
    _count: User_tableCountAggregateOutputType | null
    _min: User_tableMinAggregateOutputType | null
    _max: User_tableMaxAggregateOutputType | null
  }

  type GetUser_tableGroupByPayload<T extends User_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_tableGroupByOutputType[P]>
            : GetScalarType<T[P], User_tableGroupByOutputType[P]>
        }
      >
    >


  export type User_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    user_email?: boolean
    user_email_verified?: boolean
    user_image?: boolean
    user_created_at?: boolean
    user_updated_at?: boolean
    user_role?: boolean
    user_banned?: boolean
    user_ban_reason?: boolean
    user_ban_expires?: boolean
    user_is_onboarded?: boolean
    user_phone_number?: boolean
    sessions?: boolean | User_table$sessionsArgs<ExtArgs>
    user_account_tables?: boolean | User_table$user_account_tablesArgs<ExtArgs>
    _count?: boolean | User_tableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_table"]>



  export type User_tableSelectScalar = {
    id?: boolean
    user_name?: boolean
    user_email?: boolean
    user_email_verified?: boolean
    user_image?: boolean
    user_created_at?: boolean
    user_updated_at?: boolean
    user_role?: boolean
    user_banned?: boolean
    user_ban_reason?: boolean
    user_ban_expires?: boolean
    user_is_onboarded?: boolean
    user_phone_number?: boolean
  }

  export type User_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_name" | "user_email" | "user_email_verified" | "user_image" | "user_created_at" | "user_updated_at" | "user_role" | "user_banned" | "user_ban_reason" | "user_ban_expires" | "user_is_onboarded" | "user_phone_number", ExtArgs["result"]["user_table"]>
  export type User_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User_table$sessionsArgs<ExtArgs>
    user_account_tables?: boolean | User_table$user_account_tablesArgs<ExtArgs>
    _count?: boolean | User_tableCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $User_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_table"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      user_account_tables: Prisma.$User_account_tablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_name: string
      user_email: string
      user_email_verified: boolean
      user_image: string | null
      user_created_at: Date
      user_updated_at: Date
      user_role: string | null
      user_banned: boolean | null
      user_ban_reason: string | null
      user_ban_expires: Date | null
      user_is_onboarded: boolean | null
      user_phone_number: string | null
    }, ExtArgs["result"]["user_table"]>
    composites: {}
  }

  type User_tableGetPayload<S extends boolean | null | undefined | User_tableDefaultArgs> = $Result.GetResult<Prisma.$User_tablePayload, S>

  type User_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<User_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_tableCountAggregateInputType | true
    }

  export interface User_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_table'], meta: { name: 'User_table' } }
    /**
     * Find zero or one User_table that matches the filter.
     * @param {User_tableFindUniqueArgs} args - Arguments to find a User_table
     * @example
     * // Get one User_table
     * const user_table = await prisma.user_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_tableFindUniqueArgs>(args: SelectSubset<T, User_tableFindUniqueArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {User_tableFindUniqueOrThrowArgs} args - Arguments to find a User_table
     * @example
     * // Get one User_table
     * const user_table = await prisma.user_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, User_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tableFindFirstArgs} args - Arguments to find a User_table
     * @example
     * // Get one User_table
     * const user_table = await prisma.user_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_tableFindFirstArgs>(args?: SelectSubset<T, User_tableFindFirstArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tableFindFirstOrThrowArgs} args - Arguments to find a User_table
     * @example
     * // Get one User_table
     * const user_table = await prisma.user_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, User_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_tables
     * const user_tables = await prisma.user_table.findMany()
     * 
     * // Get first 10 User_tables
     * const user_tables = await prisma.user_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_tableWithIdOnly = await prisma.user_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends User_tableFindManyArgs>(args?: SelectSubset<T, User_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_table.
     * @param {User_tableCreateArgs} args - Arguments to create a User_table.
     * @example
     * // Create one User_table
     * const User_table = await prisma.user_table.create({
     *   data: {
     *     // ... data to create a User_table
     *   }
     * })
     * 
     */
    create<T extends User_tableCreateArgs>(args: SelectSubset<T, User_tableCreateArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_tables.
     * @param {User_tableCreateManyArgs} args - Arguments to create many User_tables.
     * @example
     * // Create many User_tables
     * const user_table = await prisma.user_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_tableCreateManyArgs>(args?: SelectSubset<T, User_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_table.
     * @param {User_tableDeleteArgs} args - Arguments to delete one User_table.
     * @example
     * // Delete one User_table
     * const User_table = await prisma.user_table.delete({
     *   where: {
     *     // ... filter to delete one User_table
     *   }
     * })
     * 
     */
    delete<T extends User_tableDeleteArgs>(args: SelectSubset<T, User_tableDeleteArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_table.
     * @param {User_tableUpdateArgs} args - Arguments to update one User_table.
     * @example
     * // Update one User_table
     * const user_table = await prisma.user_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_tableUpdateArgs>(args: SelectSubset<T, User_tableUpdateArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_tables.
     * @param {User_tableDeleteManyArgs} args - Arguments to filter User_tables to delete.
     * @example
     * // Delete a few User_tables
     * const { count } = await prisma.user_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_tableDeleteManyArgs>(args?: SelectSubset<T, User_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_tables
     * const user_table = await prisma.user_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_tableUpdateManyArgs>(args: SelectSubset<T, User_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_table.
     * @param {User_tableUpsertArgs} args - Arguments to update or create a User_table.
     * @example
     * // Update or create a User_table
     * const user_table = await prisma.user_table.upsert({
     *   create: {
     *     // ... data to create a User_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_table we want to update
     *   }
     * })
     */
    upsert<T extends User_tableUpsertArgs>(args: SelectSubset<T, User_tableUpsertArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_tables that matches the filter.
     * @param {User_tableFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user_table = await prisma.user_table.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: User_tableFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User_table.
     * @param {User_tableAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user_table = await prisma.user_table.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: User_tableAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of User_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tableCountArgs} args - Arguments to filter User_tables to count.
     * @example
     * // Count the number of User_tables
     * const count = await prisma.user_table.count({
     *   where: {
     *     // ... the filter for the User_tables we want to count
     *   }
     * })
    **/
    count<T extends User_tableCountArgs>(
      args?: Subset<T, User_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_tableAggregateArgs>(args: Subset<T, User_tableAggregateArgs>): Prisma.PrismaPromise<GetUser_tableAggregateType<T>>

    /**
     * Group by User_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tableGroupByArgs} args - Group by arguments.
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
      T extends User_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_tableGroupByArgs['orderBy'] }
        : { orderBy?: User_tableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, User_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_table model
   */
  readonly fields: User_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User_table$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User_table$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_account_tables<T extends User_table$user_account_tablesArgs<ExtArgs> = {}>(args?: Subset<T, User_table$user_account_tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User_table model
   */
  interface User_tableFieldRefs {
    readonly id: FieldRef<"User_table", 'String'>
    readonly user_name: FieldRef<"User_table", 'String'>
    readonly user_email: FieldRef<"User_table", 'String'>
    readonly user_email_verified: FieldRef<"User_table", 'Boolean'>
    readonly user_image: FieldRef<"User_table", 'String'>
    readonly user_created_at: FieldRef<"User_table", 'DateTime'>
    readonly user_updated_at: FieldRef<"User_table", 'DateTime'>
    readonly user_role: FieldRef<"User_table", 'String'>
    readonly user_banned: FieldRef<"User_table", 'Boolean'>
    readonly user_ban_reason: FieldRef<"User_table", 'String'>
    readonly user_ban_expires: FieldRef<"User_table", 'DateTime'>
    readonly user_is_onboarded: FieldRef<"User_table", 'Boolean'>
    readonly user_phone_number: FieldRef<"User_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User_table findUnique
   */
  export type User_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_table to fetch.
     */
    where: User_tableWhereUniqueInput
  }

  /**
   * User_table findUniqueOrThrow
   */
  export type User_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_table to fetch.
     */
    where: User_tableWhereUniqueInput
  }

  /**
   * User_table findFirst
   */
  export type User_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_table to fetch.
     */
    where?: User_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_tables to fetch.
     */
    orderBy?: User_tableOrderByWithRelationInput | User_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_tables.
     */
    cursor?: User_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_tables.
     */
    distinct?: User_tableScalarFieldEnum | User_tableScalarFieldEnum[]
  }

  /**
   * User_table findFirstOrThrow
   */
  export type User_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_table to fetch.
     */
    where?: User_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_tables to fetch.
     */
    orderBy?: User_tableOrderByWithRelationInput | User_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_tables.
     */
    cursor?: User_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_tables.
     */
    distinct?: User_tableScalarFieldEnum | User_tableScalarFieldEnum[]
  }

  /**
   * User_table findMany
   */
  export type User_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_tables to fetch.
     */
    where?: User_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_tables to fetch.
     */
    orderBy?: User_tableOrderByWithRelationInput | User_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_tables.
     */
    cursor?: User_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_tables.
     */
    skip?: number
    distinct?: User_tableScalarFieldEnum | User_tableScalarFieldEnum[]
  }

  /**
   * User_table create
   */
  export type User_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a User_table.
     */
    data: XOR<User_tableCreateInput, User_tableUncheckedCreateInput>
  }

  /**
   * User_table createMany
   */
  export type User_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_tables.
     */
    data: User_tableCreateManyInput | User_tableCreateManyInput[]
  }

  /**
   * User_table update
   */
  export type User_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a User_table.
     */
    data: XOR<User_tableUpdateInput, User_tableUncheckedUpdateInput>
    /**
     * Choose, which User_table to update.
     */
    where: User_tableWhereUniqueInput
  }

  /**
   * User_table updateMany
   */
  export type User_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_tables.
     */
    data: XOR<User_tableUpdateManyMutationInput, User_tableUncheckedUpdateManyInput>
    /**
     * Filter which User_tables to update
     */
    where?: User_tableWhereInput
    /**
     * Limit how many User_tables to update.
     */
    limit?: number
  }

  /**
   * User_table upsert
   */
  export type User_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the User_table to update in case it exists.
     */
    where: User_tableWhereUniqueInput
    /**
     * In case the User_table found by the `where` argument doesn't exist, create a new User_table with this data.
     */
    create: XOR<User_tableCreateInput, User_tableUncheckedCreateInput>
    /**
     * In case the User_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_tableUpdateInput, User_tableUncheckedUpdateInput>
  }

  /**
   * User_table delete
   */
  export type User_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
    /**
     * Filter which User_table to delete.
     */
    where: User_tableWhereUniqueInput
  }

  /**
   * User_table deleteMany
   */
  export type User_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_tables to delete
     */
    where?: User_tableWhereInput
    /**
     * Limit how many User_tables to delete.
     */
    limit?: number
  }

  /**
   * User_table findRaw
   */
  export type User_tableFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User_table aggregateRaw
   */
  export type User_tableAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User_table.sessions
   */
  export type User_table$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User_table.user_account_tables
   */
  export type User_table$user_account_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    where?: User_account_tableWhereInput
    orderBy?: User_account_tableOrderByWithRelationInput | User_account_tableOrderByWithRelationInput[]
    cursor?: User_account_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_account_tableScalarFieldEnum | User_account_tableScalarFieldEnum[]
  }

  /**
   * User_table without action
   */
  export type User_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_tableInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    impersonatedBy: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    impersonatedBy: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    impersonatedBy: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    impersonatedBy: string | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId" | "impersonatedBy", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user_table: Prisma.$User_tablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
      impersonatedBy: string | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * @param {SessionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const session = await prisma.session.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SessionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Session.
     * @param {SessionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const session = await prisma.session.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SessionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_table<T extends User_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, User_tableDefaultArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly impersonatedBy: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session findRaw
   */
  export type SessionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session aggregateRaw
   */
  export type SessionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User_account_table
   */

  export type AggregateUser_account_table = {
    _count: User_account_tableCountAggregateOutputType | null
    _min: User_account_tableMinAggregateOutputType | null
    _max: User_account_tableMaxAggregateOutputType | null
  }

  export type User_account_tableMinAggregateOutputType = {
    id: string | null
    user_account_account_id: string | null
    user_account_provider_id: string | null
    user_account_user_id: string | null
    user_account_access_token: string | null
    user_account_refresh_token: string | null
    user_account_id_token: string | null
    user_account_access_token_expires_at: Date | null
    user_account_scope: string | null
    user_account_password: string | null
    user_account_created_at: Date | null
    user_account_updated_at: Date | null
  }

  export type User_account_tableMaxAggregateOutputType = {
    id: string | null
    user_account_account_id: string | null
    user_account_provider_id: string | null
    user_account_user_id: string | null
    user_account_access_token: string | null
    user_account_refresh_token: string | null
    user_account_id_token: string | null
    user_account_access_token_expires_at: Date | null
    user_account_scope: string | null
    user_account_password: string | null
    user_account_created_at: Date | null
    user_account_updated_at: Date | null
  }

  export type User_account_tableCountAggregateOutputType = {
    id: number
    user_account_account_id: number
    user_account_provider_id: number
    user_account_user_id: number
    user_account_access_token: number
    user_account_refresh_token: number
    user_account_id_token: number
    user_account_access_token_expires_at: number
    user_account_scope: number
    user_account_password: number
    user_account_created_at: number
    user_account_updated_at: number
    _all: number
  }


  export type User_account_tableMinAggregateInputType = {
    id?: true
    user_account_account_id?: true
    user_account_provider_id?: true
    user_account_user_id?: true
    user_account_access_token?: true
    user_account_refresh_token?: true
    user_account_id_token?: true
    user_account_access_token_expires_at?: true
    user_account_scope?: true
    user_account_password?: true
    user_account_created_at?: true
    user_account_updated_at?: true
  }

  export type User_account_tableMaxAggregateInputType = {
    id?: true
    user_account_account_id?: true
    user_account_provider_id?: true
    user_account_user_id?: true
    user_account_access_token?: true
    user_account_refresh_token?: true
    user_account_id_token?: true
    user_account_access_token_expires_at?: true
    user_account_scope?: true
    user_account_password?: true
    user_account_created_at?: true
    user_account_updated_at?: true
  }

  export type User_account_tableCountAggregateInputType = {
    id?: true
    user_account_account_id?: true
    user_account_provider_id?: true
    user_account_user_id?: true
    user_account_access_token?: true
    user_account_refresh_token?: true
    user_account_id_token?: true
    user_account_access_token_expires_at?: true
    user_account_scope?: true
    user_account_password?: true
    user_account_created_at?: true
    user_account_updated_at?: true
    _all?: true
  }

  export type User_account_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_account_table to aggregate.
     */
    where?: User_account_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_account_tables to fetch.
     */
    orderBy?: User_account_tableOrderByWithRelationInput | User_account_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_account_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_account_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_account_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_account_tables
    **/
    _count?: true | User_account_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_account_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_account_tableMaxAggregateInputType
  }

  export type GetUser_account_tableAggregateType<T extends User_account_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_account_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_account_table[P]>
      : GetScalarType<T[P], AggregateUser_account_table[P]>
  }




  export type User_account_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_account_tableWhereInput
    orderBy?: User_account_tableOrderByWithAggregationInput | User_account_tableOrderByWithAggregationInput[]
    by: User_account_tableScalarFieldEnum[] | User_account_tableScalarFieldEnum
    having?: User_account_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_account_tableCountAggregateInputType | true
    _min?: User_account_tableMinAggregateInputType
    _max?: User_account_tableMaxAggregateInputType
  }

  export type User_account_tableGroupByOutputType = {
    id: string
    user_account_account_id: string
    user_account_provider_id: string
    user_account_user_id: string
    user_account_access_token: string | null
    user_account_refresh_token: string | null
    user_account_id_token: string | null
    user_account_access_token_expires_at: Date | null
    user_account_scope: string | null
    user_account_password: string | null
    user_account_created_at: Date
    user_account_updated_at: Date
    _count: User_account_tableCountAggregateOutputType | null
    _min: User_account_tableMinAggregateOutputType | null
    _max: User_account_tableMaxAggregateOutputType | null
  }

  type GetUser_account_tableGroupByPayload<T extends User_account_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_account_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_account_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_account_tableGroupByOutputType[P]>
            : GetScalarType<T[P], User_account_tableGroupByOutputType[P]>
        }
      >
    >


  export type User_account_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_account_account_id?: boolean
    user_account_provider_id?: boolean
    user_account_user_id?: boolean
    user_account_access_token?: boolean
    user_account_refresh_token?: boolean
    user_account_id_token?: boolean
    user_account_access_token_expires_at?: boolean
    user_account_scope?: boolean
    user_account_password?: boolean
    user_account_created_at?: boolean
    user_account_updated_at?: boolean
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_account_table"]>



  export type User_account_tableSelectScalar = {
    id?: boolean
    user_account_account_id?: boolean
    user_account_provider_id?: boolean
    user_account_user_id?: boolean
    user_account_access_token?: boolean
    user_account_refresh_token?: boolean
    user_account_id_token?: boolean
    user_account_access_token_expires_at?: boolean
    user_account_scope?: boolean
    user_account_password?: boolean
    user_account_created_at?: boolean
    user_account_updated_at?: boolean
  }

  export type User_account_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_account_account_id" | "user_account_provider_id" | "user_account_user_id" | "user_account_access_token" | "user_account_refresh_token" | "user_account_id_token" | "user_account_access_token_expires_at" | "user_account_scope" | "user_account_password" | "user_account_created_at" | "user_account_updated_at", ExtArgs["result"]["user_account_table"]>
  export type User_account_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }

  export type $User_account_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_account_table"
    objects: {
      user_table: Prisma.$User_tablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_account_account_id: string
      user_account_provider_id: string
      user_account_user_id: string
      user_account_access_token: string | null
      user_account_refresh_token: string | null
      user_account_id_token: string | null
      user_account_access_token_expires_at: Date | null
      user_account_scope: string | null
      user_account_password: string | null
      user_account_created_at: Date
      user_account_updated_at: Date
    }, ExtArgs["result"]["user_account_table"]>
    composites: {}
  }

  type User_account_tableGetPayload<S extends boolean | null | undefined | User_account_tableDefaultArgs> = $Result.GetResult<Prisma.$User_account_tablePayload, S>

  type User_account_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<User_account_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_account_tableCountAggregateInputType | true
    }

  export interface User_account_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_account_table'], meta: { name: 'User_account_table' } }
    /**
     * Find zero or one User_account_table that matches the filter.
     * @param {User_account_tableFindUniqueArgs} args - Arguments to find a User_account_table
     * @example
     * // Get one User_account_table
     * const user_account_table = await prisma.user_account_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_account_tableFindUniqueArgs>(args: SelectSubset<T, User_account_tableFindUniqueArgs<ExtArgs>>): Prisma__User_account_tableClient<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_account_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {User_account_tableFindUniqueOrThrowArgs} args - Arguments to find a User_account_table
     * @example
     * // Get one User_account_table
     * const user_account_table = await prisma.user_account_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_account_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, User_account_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_account_tableClient<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_account_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_account_tableFindFirstArgs} args - Arguments to find a User_account_table
     * @example
     * // Get one User_account_table
     * const user_account_table = await prisma.user_account_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_account_tableFindFirstArgs>(args?: SelectSubset<T, User_account_tableFindFirstArgs<ExtArgs>>): Prisma__User_account_tableClient<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_account_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_account_tableFindFirstOrThrowArgs} args - Arguments to find a User_account_table
     * @example
     * // Get one User_account_table
     * const user_account_table = await prisma.user_account_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_account_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, User_account_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_account_tableClient<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_account_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_account_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_account_tables
     * const user_account_tables = await prisma.user_account_table.findMany()
     * 
     * // Get first 10 User_account_tables
     * const user_account_tables = await prisma.user_account_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_account_tableWithIdOnly = await prisma.user_account_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends User_account_tableFindManyArgs>(args?: SelectSubset<T, User_account_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_account_table.
     * @param {User_account_tableCreateArgs} args - Arguments to create a User_account_table.
     * @example
     * // Create one User_account_table
     * const User_account_table = await prisma.user_account_table.create({
     *   data: {
     *     // ... data to create a User_account_table
     *   }
     * })
     * 
     */
    create<T extends User_account_tableCreateArgs>(args: SelectSubset<T, User_account_tableCreateArgs<ExtArgs>>): Prisma__User_account_tableClient<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_account_tables.
     * @param {User_account_tableCreateManyArgs} args - Arguments to create many User_account_tables.
     * @example
     * // Create many User_account_tables
     * const user_account_table = await prisma.user_account_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_account_tableCreateManyArgs>(args?: SelectSubset<T, User_account_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_account_table.
     * @param {User_account_tableDeleteArgs} args - Arguments to delete one User_account_table.
     * @example
     * // Delete one User_account_table
     * const User_account_table = await prisma.user_account_table.delete({
     *   where: {
     *     // ... filter to delete one User_account_table
     *   }
     * })
     * 
     */
    delete<T extends User_account_tableDeleteArgs>(args: SelectSubset<T, User_account_tableDeleteArgs<ExtArgs>>): Prisma__User_account_tableClient<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_account_table.
     * @param {User_account_tableUpdateArgs} args - Arguments to update one User_account_table.
     * @example
     * // Update one User_account_table
     * const user_account_table = await prisma.user_account_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_account_tableUpdateArgs>(args: SelectSubset<T, User_account_tableUpdateArgs<ExtArgs>>): Prisma__User_account_tableClient<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_account_tables.
     * @param {User_account_tableDeleteManyArgs} args - Arguments to filter User_account_tables to delete.
     * @example
     * // Delete a few User_account_tables
     * const { count } = await prisma.user_account_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_account_tableDeleteManyArgs>(args?: SelectSubset<T, User_account_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_account_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_account_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_account_tables
     * const user_account_table = await prisma.user_account_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_account_tableUpdateManyArgs>(args: SelectSubset<T, User_account_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_account_table.
     * @param {User_account_tableUpsertArgs} args - Arguments to update or create a User_account_table.
     * @example
     * // Update or create a User_account_table
     * const user_account_table = await prisma.user_account_table.upsert({
     *   create: {
     *     // ... data to create a User_account_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_account_table we want to update
     *   }
     * })
     */
    upsert<T extends User_account_tableUpsertArgs>(args: SelectSubset<T, User_account_tableUpsertArgs<ExtArgs>>): Prisma__User_account_tableClient<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_account_tables that matches the filter.
     * @param {User_account_tableFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user_account_table = await prisma.user_account_table.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: User_account_tableFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User_account_table.
     * @param {User_account_tableAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user_account_table = await prisma.user_account_table.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: User_account_tableAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of User_account_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_account_tableCountArgs} args - Arguments to filter User_account_tables to count.
     * @example
     * // Count the number of User_account_tables
     * const count = await prisma.user_account_table.count({
     *   where: {
     *     // ... the filter for the User_account_tables we want to count
     *   }
     * })
    **/
    count<T extends User_account_tableCountArgs>(
      args?: Subset<T, User_account_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_account_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_account_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_account_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_account_tableAggregateArgs>(args: Subset<T, User_account_tableAggregateArgs>): Prisma.PrismaPromise<GetUser_account_tableAggregateType<T>>

    /**
     * Group by User_account_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_account_tableGroupByArgs} args - Group by arguments.
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
      T extends User_account_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_account_tableGroupByArgs['orderBy'] }
        : { orderBy?: User_account_tableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, User_account_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_account_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_account_table model
   */
  readonly fields: User_account_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_account_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_account_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_table<T extends User_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, User_tableDefaultArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User_account_table model
   */
  interface User_account_tableFieldRefs {
    readonly id: FieldRef<"User_account_table", 'String'>
    readonly user_account_account_id: FieldRef<"User_account_table", 'String'>
    readonly user_account_provider_id: FieldRef<"User_account_table", 'String'>
    readonly user_account_user_id: FieldRef<"User_account_table", 'String'>
    readonly user_account_access_token: FieldRef<"User_account_table", 'String'>
    readonly user_account_refresh_token: FieldRef<"User_account_table", 'String'>
    readonly user_account_id_token: FieldRef<"User_account_table", 'String'>
    readonly user_account_access_token_expires_at: FieldRef<"User_account_table", 'DateTime'>
    readonly user_account_scope: FieldRef<"User_account_table", 'String'>
    readonly user_account_password: FieldRef<"User_account_table", 'String'>
    readonly user_account_created_at: FieldRef<"User_account_table", 'DateTime'>
    readonly user_account_updated_at: FieldRef<"User_account_table", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User_account_table findUnique
   */
  export type User_account_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_account_table to fetch.
     */
    where: User_account_tableWhereUniqueInput
  }

  /**
   * User_account_table findUniqueOrThrow
   */
  export type User_account_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_account_table to fetch.
     */
    where: User_account_tableWhereUniqueInput
  }

  /**
   * User_account_table findFirst
   */
  export type User_account_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_account_table to fetch.
     */
    where?: User_account_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_account_tables to fetch.
     */
    orderBy?: User_account_tableOrderByWithRelationInput | User_account_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_account_tables.
     */
    cursor?: User_account_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_account_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_account_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_account_tables.
     */
    distinct?: User_account_tableScalarFieldEnum | User_account_tableScalarFieldEnum[]
  }

  /**
   * User_account_table findFirstOrThrow
   */
  export type User_account_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_account_table to fetch.
     */
    where?: User_account_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_account_tables to fetch.
     */
    orderBy?: User_account_tableOrderByWithRelationInput | User_account_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_account_tables.
     */
    cursor?: User_account_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_account_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_account_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_account_tables.
     */
    distinct?: User_account_tableScalarFieldEnum | User_account_tableScalarFieldEnum[]
  }

  /**
   * User_account_table findMany
   */
  export type User_account_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    /**
     * Filter, which User_account_tables to fetch.
     */
    where?: User_account_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_account_tables to fetch.
     */
    orderBy?: User_account_tableOrderByWithRelationInput | User_account_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_account_tables.
     */
    cursor?: User_account_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_account_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_account_tables.
     */
    skip?: number
    distinct?: User_account_tableScalarFieldEnum | User_account_tableScalarFieldEnum[]
  }

  /**
   * User_account_table create
   */
  export type User_account_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a User_account_table.
     */
    data: XOR<User_account_tableCreateInput, User_account_tableUncheckedCreateInput>
  }

  /**
   * User_account_table createMany
   */
  export type User_account_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_account_tables.
     */
    data: User_account_tableCreateManyInput | User_account_tableCreateManyInput[]
  }

  /**
   * User_account_table update
   */
  export type User_account_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a User_account_table.
     */
    data: XOR<User_account_tableUpdateInput, User_account_tableUncheckedUpdateInput>
    /**
     * Choose, which User_account_table to update.
     */
    where: User_account_tableWhereUniqueInput
  }

  /**
   * User_account_table updateMany
   */
  export type User_account_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_account_tables.
     */
    data: XOR<User_account_tableUpdateManyMutationInput, User_account_tableUncheckedUpdateManyInput>
    /**
     * Filter which User_account_tables to update
     */
    where?: User_account_tableWhereInput
    /**
     * Limit how many User_account_tables to update.
     */
    limit?: number
  }

  /**
   * User_account_table upsert
   */
  export type User_account_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the User_account_table to update in case it exists.
     */
    where: User_account_tableWhereUniqueInput
    /**
     * In case the User_account_table found by the `where` argument doesn't exist, create a new User_account_table with this data.
     */
    create: XOR<User_account_tableCreateInput, User_account_tableUncheckedCreateInput>
    /**
     * In case the User_account_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_account_tableUpdateInput, User_account_tableUncheckedUpdateInput>
  }

  /**
   * User_account_table delete
   */
  export type User_account_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
    /**
     * Filter which User_account_table to delete.
     */
    where: User_account_tableWhereUniqueInput
  }

  /**
   * User_account_table deleteMany
   */
  export type User_account_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_account_tables to delete
     */
    where?: User_account_tableWhereInput
    /**
     * Limit how many User_account_tables to delete.
     */
    limit?: number
  }

  /**
   * User_account_table findRaw
   */
  export type User_account_tableFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User_account_table aggregateRaw
   */
  export type User_account_tableAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User_account_table without action
   */
  export type User_account_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableInclude<ExtArgs> | null
  }


  /**
   * Model Verification_table
   */

  export type AggregateVerification_table = {
    _count: Verification_tableCountAggregateOutputType | null
    _min: Verification_tableMinAggregateOutputType | null
    _max: Verification_tableMaxAggregateOutputType | null
  }

  export type Verification_tableMinAggregateOutputType = {
    id: string | null
    verification_identifier: string | null
    verification_value: string | null
    verification_expires_at: Date | null
    verification_created_at: Date | null
    verification_updated_at: Date | null
  }

  export type Verification_tableMaxAggregateOutputType = {
    id: string | null
    verification_identifier: string | null
    verification_value: string | null
    verification_expires_at: Date | null
    verification_created_at: Date | null
    verification_updated_at: Date | null
  }

  export type Verification_tableCountAggregateOutputType = {
    id: number
    verification_identifier: number
    verification_value: number
    verification_expires_at: number
    verification_created_at: number
    verification_updated_at: number
    _all: number
  }


  export type Verification_tableMinAggregateInputType = {
    id?: true
    verification_identifier?: true
    verification_value?: true
    verification_expires_at?: true
    verification_created_at?: true
    verification_updated_at?: true
  }

  export type Verification_tableMaxAggregateInputType = {
    id?: true
    verification_identifier?: true
    verification_value?: true
    verification_expires_at?: true
    verification_created_at?: true
    verification_updated_at?: true
  }

  export type Verification_tableCountAggregateInputType = {
    id?: true
    verification_identifier?: true
    verification_value?: true
    verification_expires_at?: true
    verification_created_at?: true
    verification_updated_at?: true
    _all?: true
  }

  export type Verification_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification_table to aggregate.
     */
    where?: Verification_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verification_tables to fetch.
     */
    orderBy?: Verification_tableOrderByWithRelationInput | Verification_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Verification_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verification_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verification_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verification_tables
    **/
    _count?: true | Verification_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Verification_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Verification_tableMaxAggregateInputType
  }

  export type GetVerification_tableAggregateType<T extends Verification_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification_table[P]>
      : GetScalarType<T[P], AggregateVerification_table[P]>
  }




  export type Verification_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Verification_tableWhereInput
    orderBy?: Verification_tableOrderByWithAggregationInput | Verification_tableOrderByWithAggregationInput[]
    by: Verification_tableScalarFieldEnum[] | Verification_tableScalarFieldEnum
    having?: Verification_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Verification_tableCountAggregateInputType | true
    _min?: Verification_tableMinAggregateInputType
    _max?: Verification_tableMaxAggregateInputType
  }

  export type Verification_tableGroupByOutputType = {
    id: string
    verification_identifier: string
    verification_value: string
    verification_expires_at: Date
    verification_created_at: Date | null
    verification_updated_at: Date | null
    _count: Verification_tableCountAggregateOutputType | null
    _min: Verification_tableMinAggregateOutputType | null
    _max: Verification_tableMaxAggregateOutputType | null
  }

  type GetVerification_tableGroupByPayload<T extends Verification_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Verification_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Verification_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Verification_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Verification_tableGroupByOutputType[P]>
        }
      >
    >


  export type Verification_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verification_identifier?: boolean
    verification_value?: boolean
    verification_expires_at?: boolean
    verification_created_at?: boolean
    verification_updated_at?: boolean
  }, ExtArgs["result"]["verification_table"]>



  export type Verification_tableSelectScalar = {
    id?: boolean
    verification_identifier?: boolean
    verification_value?: boolean
    verification_expires_at?: boolean
    verification_created_at?: boolean
    verification_updated_at?: boolean
  }

  export type Verification_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "verification_identifier" | "verification_value" | "verification_expires_at" | "verification_created_at" | "verification_updated_at", ExtArgs["result"]["verification_table"]>

  export type $Verification_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification_table"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      verification_identifier: string
      verification_value: string
      verification_expires_at: Date
      verification_created_at: Date | null
      verification_updated_at: Date | null
    }, ExtArgs["result"]["verification_table"]>
    composites: {}
  }

  type Verification_tableGetPayload<S extends boolean | null | undefined | Verification_tableDefaultArgs> = $Result.GetResult<Prisma.$Verification_tablePayload, S>

  type Verification_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Verification_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Verification_tableCountAggregateInputType | true
    }

  export interface Verification_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification_table'], meta: { name: 'Verification_table' } }
    /**
     * Find zero or one Verification_table that matches the filter.
     * @param {Verification_tableFindUniqueArgs} args - Arguments to find a Verification_table
     * @example
     * // Get one Verification_table
     * const verification_table = await prisma.verification_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Verification_tableFindUniqueArgs>(args: SelectSubset<T, Verification_tableFindUniqueArgs<ExtArgs>>): Prisma__Verification_tableClient<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Verification_tableFindUniqueOrThrowArgs} args - Arguments to find a Verification_table
     * @example
     * // Get one Verification_table
     * const verification_table = await prisma.verification_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Verification_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, Verification_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Verification_tableClient<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verification_tableFindFirstArgs} args - Arguments to find a Verification_table
     * @example
     * // Get one Verification_table
     * const verification_table = await prisma.verification_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Verification_tableFindFirstArgs>(args?: SelectSubset<T, Verification_tableFindFirstArgs<ExtArgs>>): Prisma__Verification_tableClient<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verification_tableFindFirstOrThrowArgs} args - Arguments to find a Verification_table
     * @example
     * // Get one Verification_table
     * const verification_table = await prisma.verification_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Verification_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, Verification_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__Verification_tableClient<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verification_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verification_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verification_tables
     * const verification_tables = await prisma.verification_table.findMany()
     * 
     * // Get first 10 Verification_tables
     * const verification_tables = await prisma.verification_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verification_tableWithIdOnly = await prisma.verification_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Verification_tableFindManyArgs>(args?: SelectSubset<T, Verification_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification_table.
     * @param {Verification_tableCreateArgs} args - Arguments to create a Verification_table.
     * @example
     * // Create one Verification_table
     * const Verification_table = await prisma.verification_table.create({
     *   data: {
     *     // ... data to create a Verification_table
     *   }
     * })
     * 
     */
    create<T extends Verification_tableCreateArgs>(args: SelectSubset<T, Verification_tableCreateArgs<ExtArgs>>): Prisma__Verification_tableClient<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verification_tables.
     * @param {Verification_tableCreateManyArgs} args - Arguments to create many Verification_tables.
     * @example
     * // Create many Verification_tables
     * const verification_table = await prisma.verification_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Verification_tableCreateManyArgs>(args?: SelectSubset<T, Verification_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Verification_table.
     * @param {Verification_tableDeleteArgs} args - Arguments to delete one Verification_table.
     * @example
     * // Delete one Verification_table
     * const Verification_table = await prisma.verification_table.delete({
     *   where: {
     *     // ... filter to delete one Verification_table
     *   }
     * })
     * 
     */
    delete<T extends Verification_tableDeleteArgs>(args: SelectSubset<T, Verification_tableDeleteArgs<ExtArgs>>): Prisma__Verification_tableClient<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification_table.
     * @param {Verification_tableUpdateArgs} args - Arguments to update one Verification_table.
     * @example
     * // Update one Verification_table
     * const verification_table = await prisma.verification_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Verification_tableUpdateArgs>(args: SelectSubset<T, Verification_tableUpdateArgs<ExtArgs>>): Prisma__Verification_tableClient<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verification_tables.
     * @param {Verification_tableDeleteManyArgs} args - Arguments to filter Verification_tables to delete.
     * @example
     * // Delete a few Verification_tables
     * const { count } = await prisma.verification_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Verification_tableDeleteManyArgs>(args?: SelectSubset<T, Verification_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verification_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verification_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verification_tables
     * const verification_table = await prisma.verification_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Verification_tableUpdateManyArgs>(args: SelectSubset<T, Verification_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Verification_table.
     * @param {Verification_tableUpsertArgs} args - Arguments to update or create a Verification_table.
     * @example
     * // Update or create a Verification_table
     * const verification_table = await prisma.verification_table.upsert({
     *   create: {
     *     // ... data to create a Verification_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification_table we want to update
     *   }
     * })
     */
    upsert<T extends Verification_tableUpsertArgs>(args: SelectSubset<T, Verification_tableUpsertArgs<ExtArgs>>): Prisma__Verification_tableClient<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verification_tables that matches the filter.
     * @param {Verification_tableFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const verification_table = await prisma.verification_table.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Verification_tableFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Verification_table.
     * @param {Verification_tableAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const verification_table = await prisma.verification_table.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Verification_tableAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Verification_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verification_tableCountArgs} args - Arguments to filter Verification_tables to count.
     * @example
     * // Count the number of Verification_tables
     * const count = await prisma.verification_table.count({
     *   where: {
     *     // ... the filter for the Verification_tables we want to count
     *   }
     * })
    **/
    count<T extends Verification_tableCountArgs>(
      args?: Subset<T, Verification_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Verification_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verification_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Verification_tableAggregateArgs>(args: Subset<T, Verification_tableAggregateArgs>): Prisma.PrismaPromise<GetVerification_tableAggregateType<T>>

    /**
     * Group by Verification_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verification_tableGroupByArgs} args - Group by arguments.
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
      T extends Verification_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Verification_tableGroupByArgs['orderBy'] }
        : { orderBy?: Verification_tableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Verification_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerification_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification_table model
   */
  readonly fields: Verification_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Verification_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification_table model
   */
  interface Verification_tableFieldRefs {
    readonly id: FieldRef<"Verification_table", 'String'>
    readonly verification_identifier: FieldRef<"Verification_table", 'String'>
    readonly verification_value: FieldRef<"Verification_table", 'String'>
    readonly verification_expires_at: FieldRef<"Verification_table", 'DateTime'>
    readonly verification_created_at: FieldRef<"Verification_table", 'DateTime'>
    readonly verification_updated_at: FieldRef<"Verification_table", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification_table findUnique
   */
  export type Verification_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * Filter, which Verification_table to fetch.
     */
    where: Verification_tableWhereUniqueInput
  }

  /**
   * Verification_table findUniqueOrThrow
   */
  export type Verification_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * Filter, which Verification_table to fetch.
     */
    where: Verification_tableWhereUniqueInput
  }

  /**
   * Verification_table findFirst
   */
  export type Verification_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * Filter, which Verification_table to fetch.
     */
    where?: Verification_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verification_tables to fetch.
     */
    orderBy?: Verification_tableOrderByWithRelationInput | Verification_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verification_tables.
     */
    cursor?: Verification_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verification_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verification_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verification_tables.
     */
    distinct?: Verification_tableScalarFieldEnum | Verification_tableScalarFieldEnum[]
  }

  /**
   * Verification_table findFirstOrThrow
   */
  export type Verification_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * Filter, which Verification_table to fetch.
     */
    where?: Verification_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verification_tables to fetch.
     */
    orderBy?: Verification_tableOrderByWithRelationInput | Verification_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verification_tables.
     */
    cursor?: Verification_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verification_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verification_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verification_tables.
     */
    distinct?: Verification_tableScalarFieldEnum | Verification_tableScalarFieldEnum[]
  }

  /**
   * Verification_table findMany
   */
  export type Verification_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * Filter, which Verification_tables to fetch.
     */
    where?: Verification_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verification_tables to fetch.
     */
    orderBy?: Verification_tableOrderByWithRelationInput | Verification_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verification_tables.
     */
    cursor?: Verification_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verification_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verification_tables.
     */
    skip?: number
    distinct?: Verification_tableScalarFieldEnum | Verification_tableScalarFieldEnum[]
  }

  /**
   * Verification_table create
   */
  export type Verification_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification_table.
     */
    data: XOR<Verification_tableCreateInput, Verification_tableUncheckedCreateInput>
  }

  /**
   * Verification_table createMany
   */
  export type Verification_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verification_tables.
     */
    data: Verification_tableCreateManyInput | Verification_tableCreateManyInput[]
  }

  /**
   * Verification_table update
   */
  export type Verification_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification_table.
     */
    data: XOR<Verification_tableUpdateInput, Verification_tableUncheckedUpdateInput>
    /**
     * Choose, which Verification_table to update.
     */
    where: Verification_tableWhereUniqueInput
  }

  /**
   * Verification_table updateMany
   */
  export type Verification_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verification_tables.
     */
    data: XOR<Verification_tableUpdateManyMutationInput, Verification_tableUncheckedUpdateManyInput>
    /**
     * Filter which Verification_tables to update
     */
    where?: Verification_tableWhereInput
    /**
     * Limit how many Verification_tables to update.
     */
    limit?: number
  }

  /**
   * Verification_table upsert
   */
  export type Verification_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification_table to update in case it exists.
     */
    where: Verification_tableWhereUniqueInput
    /**
     * In case the Verification_table found by the `where` argument doesn't exist, create a new Verification_table with this data.
     */
    create: XOR<Verification_tableCreateInput, Verification_tableUncheckedCreateInput>
    /**
     * In case the Verification_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Verification_tableUpdateInput, Verification_tableUncheckedUpdateInput>
  }

  /**
   * Verification_table delete
   */
  export type Verification_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * Filter which Verification_table to delete.
     */
    where: Verification_tableWhereUniqueInput
  }

  /**
   * Verification_table deleteMany
   */
  export type Verification_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification_tables to delete
     */
    where?: Verification_tableWhereInput
    /**
     * Limit how many Verification_tables to delete.
     */
    limit?: number
  }

  /**
   * Verification_table findRaw
   */
  export type Verification_tableFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Verification_table aggregateRaw
   */
  export type Verification_tableAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Verification_table without action
   */
  export type Verification_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const User_tableScalarFieldEnum: {
    id: 'id',
    user_name: 'user_name',
    user_email: 'user_email',
    user_email_verified: 'user_email_verified',
    user_image: 'user_image',
    user_created_at: 'user_created_at',
    user_updated_at: 'user_updated_at',
    user_role: 'user_role',
    user_banned: 'user_banned',
    user_ban_reason: 'user_ban_reason',
    user_ban_expires: 'user_ban_expires',
    user_is_onboarded: 'user_is_onboarded',
    user_phone_number: 'user_phone_number'
  };

  export type User_tableScalarFieldEnum = (typeof User_tableScalarFieldEnum)[keyof typeof User_tableScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId',
    impersonatedBy: 'impersonatedBy'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const User_account_tableScalarFieldEnum: {
    id: 'id',
    user_account_account_id: 'user_account_account_id',
    user_account_provider_id: 'user_account_provider_id',
    user_account_user_id: 'user_account_user_id',
    user_account_access_token: 'user_account_access_token',
    user_account_refresh_token: 'user_account_refresh_token',
    user_account_id_token: 'user_account_id_token',
    user_account_access_token_expires_at: 'user_account_access_token_expires_at',
    user_account_scope: 'user_account_scope',
    user_account_password: 'user_account_password',
    user_account_created_at: 'user_account_created_at',
    user_account_updated_at: 'user_account_updated_at'
  };

  export type User_account_tableScalarFieldEnum = (typeof User_account_tableScalarFieldEnum)[keyof typeof User_account_tableScalarFieldEnum]


  export const Verification_tableScalarFieldEnum: {
    id: 'id',
    verification_identifier: 'verification_identifier',
    verification_value: 'verification_value',
    verification_expires_at: 'verification_expires_at',
    verification_created_at: 'verification_created_at',
    verification_updated_at: 'verification_updated_at'
  };

  export type Verification_tableScalarFieldEnum = (typeof Verification_tableScalarFieldEnum)[keyof typeof Verification_tableScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type User_tableWhereInput = {
    AND?: User_tableWhereInput | User_tableWhereInput[]
    OR?: User_tableWhereInput[]
    NOT?: User_tableWhereInput | User_tableWhereInput[]
    id?: StringFilter<"User_table"> | string
    user_name?: StringFilter<"User_table"> | string
    user_email?: StringFilter<"User_table"> | string
    user_email_verified?: BoolFilter<"User_table"> | boolean
    user_image?: StringNullableFilter<"User_table"> | string | null
    user_created_at?: DateTimeFilter<"User_table"> | Date | string
    user_updated_at?: DateTimeFilter<"User_table"> | Date | string
    user_role?: StringNullableFilter<"User_table"> | string | null
    user_banned?: BoolNullableFilter<"User_table"> | boolean | null
    user_ban_reason?: StringNullableFilter<"User_table"> | string | null
    user_ban_expires?: DateTimeNullableFilter<"User_table"> | Date | string | null
    user_is_onboarded?: BoolNullableFilter<"User_table"> | boolean | null
    user_phone_number?: StringNullableFilter<"User_table"> | string | null
    sessions?: SessionListRelationFilter
    user_account_tables?: User_account_tableListRelationFilter
  }

  export type User_tableOrderByWithRelationInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_email_verified?: SortOrder
    user_image?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
    user_role?: SortOrder
    user_banned?: SortOrder
    user_ban_reason?: SortOrder
    user_ban_expires?: SortOrder
    user_is_onboarded?: SortOrder
    user_phone_number?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    user_account_tables?: User_account_tableOrderByRelationAggregateInput
  }

  export type User_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_email?: string
    AND?: User_tableWhereInput | User_tableWhereInput[]
    OR?: User_tableWhereInput[]
    NOT?: User_tableWhereInput | User_tableWhereInput[]
    user_name?: StringFilter<"User_table"> | string
    user_email_verified?: BoolFilter<"User_table"> | boolean
    user_image?: StringNullableFilter<"User_table"> | string | null
    user_created_at?: DateTimeFilter<"User_table"> | Date | string
    user_updated_at?: DateTimeFilter<"User_table"> | Date | string
    user_role?: StringNullableFilter<"User_table"> | string | null
    user_banned?: BoolNullableFilter<"User_table"> | boolean | null
    user_ban_reason?: StringNullableFilter<"User_table"> | string | null
    user_ban_expires?: DateTimeNullableFilter<"User_table"> | Date | string | null
    user_is_onboarded?: BoolNullableFilter<"User_table"> | boolean | null
    user_phone_number?: StringNullableFilter<"User_table"> | string | null
    sessions?: SessionListRelationFilter
    user_account_tables?: User_account_tableListRelationFilter
  }, "id" | "user_email">

  export type User_tableOrderByWithAggregationInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_email_verified?: SortOrder
    user_image?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
    user_role?: SortOrder
    user_banned?: SortOrder
    user_ban_reason?: SortOrder
    user_ban_expires?: SortOrder
    user_is_onboarded?: SortOrder
    user_phone_number?: SortOrder
    _count?: User_tableCountOrderByAggregateInput
    _max?: User_tableMaxOrderByAggregateInput
    _min?: User_tableMinOrderByAggregateInput
  }

  export type User_tableScalarWhereWithAggregatesInput = {
    AND?: User_tableScalarWhereWithAggregatesInput | User_tableScalarWhereWithAggregatesInput[]
    OR?: User_tableScalarWhereWithAggregatesInput[]
    NOT?: User_tableScalarWhereWithAggregatesInput | User_tableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User_table"> | string
    user_name?: StringWithAggregatesFilter<"User_table"> | string
    user_email?: StringWithAggregatesFilter<"User_table"> | string
    user_email_verified?: BoolWithAggregatesFilter<"User_table"> | boolean
    user_image?: StringNullableWithAggregatesFilter<"User_table"> | string | null
    user_created_at?: DateTimeWithAggregatesFilter<"User_table"> | Date | string
    user_updated_at?: DateTimeWithAggregatesFilter<"User_table"> | Date | string
    user_role?: StringNullableWithAggregatesFilter<"User_table"> | string | null
    user_banned?: BoolNullableWithAggregatesFilter<"User_table"> | boolean | null
    user_ban_reason?: StringNullableWithAggregatesFilter<"User_table"> | string | null
    user_ban_expires?: DateTimeNullableWithAggregatesFilter<"User_table"> | Date | string | null
    user_is_onboarded?: BoolNullableWithAggregatesFilter<"User_table"> | boolean | null
    user_phone_number?: StringNullableWithAggregatesFilter<"User_table"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
    user_table?: XOR<User_tableScalarRelationFilter, User_tableWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
    user_table?: User_tableOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
    user_table?: XOR<User_tableScalarRelationFilter, User_tableWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
    impersonatedBy?: StringNullableWithAggregatesFilter<"Session"> | string | null
  }

  export type User_account_tableWhereInput = {
    AND?: User_account_tableWhereInput | User_account_tableWhereInput[]
    OR?: User_account_tableWhereInput[]
    NOT?: User_account_tableWhereInput | User_account_tableWhereInput[]
    id?: StringFilter<"User_account_table"> | string
    user_account_account_id?: StringFilter<"User_account_table"> | string
    user_account_provider_id?: StringFilter<"User_account_table"> | string
    user_account_user_id?: StringFilter<"User_account_table"> | string
    user_account_access_token?: StringNullableFilter<"User_account_table"> | string | null
    user_account_refresh_token?: StringNullableFilter<"User_account_table"> | string | null
    user_account_id_token?: StringNullableFilter<"User_account_table"> | string | null
    user_account_access_token_expires_at?: DateTimeNullableFilter<"User_account_table"> | Date | string | null
    user_account_scope?: StringNullableFilter<"User_account_table"> | string | null
    user_account_password?: StringNullableFilter<"User_account_table"> | string | null
    user_account_created_at?: DateTimeFilter<"User_account_table"> | Date | string
    user_account_updated_at?: DateTimeFilter<"User_account_table"> | Date | string
    user_table?: XOR<User_tableScalarRelationFilter, User_tableWhereInput>
  }

  export type User_account_tableOrderByWithRelationInput = {
    id?: SortOrder
    user_account_account_id?: SortOrder
    user_account_provider_id?: SortOrder
    user_account_user_id?: SortOrder
    user_account_access_token?: SortOrder
    user_account_refresh_token?: SortOrder
    user_account_id_token?: SortOrder
    user_account_access_token_expires_at?: SortOrder
    user_account_scope?: SortOrder
    user_account_password?: SortOrder
    user_account_created_at?: SortOrder
    user_account_updated_at?: SortOrder
    user_table?: User_tableOrderByWithRelationInput
  }

  export type User_account_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: User_account_tableWhereInput | User_account_tableWhereInput[]
    OR?: User_account_tableWhereInput[]
    NOT?: User_account_tableWhereInput | User_account_tableWhereInput[]
    user_account_account_id?: StringFilter<"User_account_table"> | string
    user_account_provider_id?: StringFilter<"User_account_table"> | string
    user_account_user_id?: StringFilter<"User_account_table"> | string
    user_account_access_token?: StringNullableFilter<"User_account_table"> | string | null
    user_account_refresh_token?: StringNullableFilter<"User_account_table"> | string | null
    user_account_id_token?: StringNullableFilter<"User_account_table"> | string | null
    user_account_access_token_expires_at?: DateTimeNullableFilter<"User_account_table"> | Date | string | null
    user_account_scope?: StringNullableFilter<"User_account_table"> | string | null
    user_account_password?: StringNullableFilter<"User_account_table"> | string | null
    user_account_created_at?: DateTimeFilter<"User_account_table"> | Date | string
    user_account_updated_at?: DateTimeFilter<"User_account_table"> | Date | string
    user_table?: XOR<User_tableScalarRelationFilter, User_tableWhereInput>
  }, "id">

  export type User_account_tableOrderByWithAggregationInput = {
    id?: SortOrder
    user_account_account_id?: SortOrder
    user_account_provider_id?: SortOrder
    user_account_user_id?: SortOrder
    user_account_access_token?: SortOrder
    user_account_refresh_token?: SortOrder
    user_account_id_token?: SortOrder
    user_account_access_token_expires_at?: SortOrder
    user_account_scope?: SortOrder
    user_account_password?: SortOrder
    user_account_created_at?: SortOrder
    user_account_updated_at?: SortOrder
    _count?: User_account_tableCountOrderByAggregateInput
    _max?: User_account_tableMaxOrderByAggregateInput
    _min?: User_account_tableMinOrderByAggregateInput
  }

  export type User_account_tableScalarWhereWithAggregatesInput = {
    AND?: User_account_tableScalarWhereWithAggregatesInput | User_account_tableScalarWhereWithAggregatesInput[]
    OR?: User_account_tableScalarWhereWithAggregatesInput[]
    NOT?: User_account_tableScalarWhereWithAggregatesInput | User_account_tableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User_account_table"> | string
    user_account_account_id?: StringWithAggregatesFilter<"User_account_table"> | string
    user_account_provider_id?: StringWithAggregatesFilter<"User_account_table"> | string
    user_account_user_id?: StringWithAggregatesFilter<"User_account_table"> | string
    user_account_access_token?: StringNullableWithAggregatesFilter<"User_account_table"> | string | null
    user_account_refresh_token?: StringNullableWithAggregatesFilter<"User_account_table"> | string | null
    user_account_id_token?: StringNullableWithAggregatesFilter<"User_account_table"> | string | null
    user_account_access_token_expires_at?: DateTimeNullableWithAggregatesFilter<"User_account_table"> | Date | string | null
    user_account_scope?: StringNullableWithAggregatesFilter<"User_account_table"> | string | null
    user_account_password?: StringNullableWithAggregatesFilter<"User_account_table"> | string | null
    user_account_created_at?: DateTimeWithAggregatesFilter<"User_account_table"> | Date | string
    user_account_updated_at?: DateTimeWithAggregatesFilter<"User_account_table"> | Date | string
  }

  export type Verification_tableWhereInput = {
    AND?: Verification_tableWhereInput | Verification_tableWhereInput[]
    OR?: Verification_tableWhereInput[]
    NOT?: Verification_tableWhereInput | Verification_tableWhereInput[]
    id?: StringFilter<"Verification_table"> | string
    verification_identifier?: StringFilter<"Verification_table"> | string
    verification_value?: StringFilter<"Verification_table"> | string
    verification_expires_at?: DateTimeFilter<"Verification_table"> | Date | string
    verification_created_at?: DateTimeNullableFilter<"Verification_table"> | Date | string | null
    verification_updated_at?: DateTimeNullableFilter<"Verification_table"> | Date | string | null
  }

  export type Verification_tableOrderByWithRelationInput = {
    id?: SortOrder
    verification_identifier?: SortOrder
    verification_value?: SortOrder
    verification_expires_at?: SortOrder
    verification_created_at?: SortOrder
    verification_updated_at?: SortOrder
  }

  export type Verification_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Verification_tableWhereInput | Verification_tableWhereInput[]
    OR?: Verification_tableWhereInput[]
    NOT?: Verification_tableWhereInput | Verification_tableWhereInput[]
    verification_identifier?: StringFilter<"Verification_table"> | string
    verification_value?: StringFilter<"Verification_table"> | string
    verification_expires_at?: DateTimeFilter<"Verification_table"> | Date | string
    verification_created_at?: DateTimeNullableFilter<"Verification_table"> | Date | string | null
    verification_updated_at?: DateTimeNullableFilter<"Verification_table"> | Date | string | null
  }, "id">

  export type Verification_tableOrderByWithAggregationInput = {
    id?: SortOrder
    verification_identifier?: SortOrder
    verification_value?: SortOrder
    verification_expires_at?: SortOrder
    verification_created_at?: SortOrder
    verification_updated_at?: SortOrder
    _count?: Verification_tableCountOrderByAggregateInput
    _max?: Verification_tableMaxOrderByAggregateInput
    _min?: Verification_tableMinOrderByAggregateInput
  }

  export type Verification_tableScalarWhereWithAggregatesInput = {
    AND?: Verification_tableScalarWhereWithAggregatesInput | Verification_tableScalarWhereWithAggregatesInput[]
    OR?: Verification_tableScalarWhereWithAggregatesInput[]
    NOT?: Verification_tableScalarWhereWithAggregatesInput | Verification_tableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification_table"> | string
    verification_identifier?: StringWithAggregatesFilter<"Verification_table"> | string
    verification_value?: StringWithAggregatesFilter<"Verification_table"> | string
    verification_expires_at?: DateTimeWithAggregatesFilter<"Verification_table"> | Date | string
    verification_created_at?: DateTimeNullableWithAggregatesFilter<"Verification_table"> | Date | string | null
    verification_updated_at?: DateTimeNullableWithAggregatesFilter<"Verification_table"> | Date | string | null
  }

  export type User_tableCreateInput = {
    id: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    user_role?: string | null
    user_banned?: boolean | null
    user_ban_reason?: string | null
    user_ban_expires?: Date | string | null
    user_is_onboarded?: boolean | null
    user_phone_number?: string | null
    sessions?: SessionCreateNestedManyWithoutUser_tableInput
    user_account_tables?: User_account_tableCreateNestedManyWithoutUser_tableInput
  }

  export type User_tableUncheckedCreateInput = {
    id: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    user_role?: string | null
    user_banned?: boolean | null
    user_ban_reason?: string | null
    user_ban_expires?: Date | string | null
    user_is_onboarded?: boolean | null
    user_phone_number?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUser_tableInput
    user_account_tables?: User_account_tableUncheckedCreateNestedManyWithoutUser_tableInput
  }

  export type User_tableUpdateInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_role?: NullableStringFieldUpdateOperationsInput | string | null
    user_banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    user_ban_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUser_tableNestedInput
    user_account_tables?: User_account_tableUpdateManyWithoutUser_tableNestedInput
  }

  export type User_tableUncheckedUpdateInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_role?: NullableStringFieldUpdateOperationsInput | string | null
    user_banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    user_ban_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUser_tableNestedInput
    user_account_tables?: User_account_tableUncheckedUpdateManyWithoutUser_tableNestedInput
  }

  export type User_tableCreateManyInput = {
    id: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    user_role?: string | null
    user_banned?: boolean | null
    user_ban_reason?: string | null
    user_ban_expires?: Date | string | null
    user_is_onboarded?: boolean | null
    user_phone_number?: string | null
  }

  export type User_tableUpdateManyMutationInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_role?: NullableStringFieldUpdateOperationsInput | string | null
    user_banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    user_ban_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_tableUncheckedUpdateManyInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_role?: NullableStringFieldUpdateOperationsInput | string | null
    user_banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    user_ban_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
    user_table: User_tableCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    impersonatedBy?: string | null
  }

  export type SessionUpdateInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    user_table?: User_tableUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    impersonatedBy?: string | null
  }

  export type SessionUpdateManyMutationInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_account_tableCreateInput = {
    id: string
    user_account_account_id: string
    user_account_provider_id: string
    user_account_access_token?: string | null
    user_account_refresh_token?: string | null
    user_account_id_token?: string | null
    user_account_access_token_expires_at?: Date | string | null
    user_account_scope?: string | null
    user_account_password?: string | null
    user_account_created_at: Date | string
    user_account_updated_at: Date | string
    user_table: User_tableCreateNestedOneWithoutUser_account_tablesInput
  }

  export type User_account_tableUncheckedCreateInput = {
    id: string
    user_account_account_id: string
    user_account_provider_id: string
    user_account_user_id: string
    user_account_access_token?: string | null
    user_account_refresh_token?: string | null
    user_account_id_token?: string | null
    user_account_access_token_expires_at?: Date | string | null
    user_account_scope?: string | null
    user_account_password?: string | null
    user_account_created_at: Date | string
    user_account_updated_at: Date | string
  }

  export type User_account_tableUpdateInput = {
    user_account_account_id?: StringFieldUpdateOperationsInput | string
    user_account_provider_id?: StringFieldUpdateOperationsInput | string
    user_account_access_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_id_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_account_scope?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_password?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_account_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_table?: User_tableUpdateOneRequiredWithoutUser_account_tablesNestedInput
  }

  export type User_account_tableUncheckedUpdateInput = {
    user_account_account_id?: StringFieldUpdateOperationsInput | string
    user_account_provider_id?: StringFieldUpdateOperationsInput | string
    user_account_user_id?: StringFieldUpdateOperationsInput | string
    user_account_access_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_id_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_account_scope?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_password?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_account_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_account_tableCreateManyInput = {
    id: string
    user_account_account_id: string
    user_account_provider_id: string
    user_account_user_id: string
    user_account_access_token?: string | null
    user_account_refresh_token?: string | null
    user_account_id_token?: string | null
    user_account_access_token_expires_at?: Date | string | null
    user_account_scope?: string | null
    user_account_password?: string | null
    user_account_created_at: Date | string
    user_account_updated_at: Date | string
  }

  export type User_account_tableUpdateManyMutationInput = {
    user_account_account_id?: StringFieldUpdateOperationsInput | string
    user_account_provider_id?: StringFieldUpdateOperationsInput | string
    user_account_access_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_id_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_account_scope?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_password?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_account_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_account_tableUncheckedUpdateManyInput = {
    user_account_account_id?: StringFieldUpdateOperationsInput | string
    user_account_provider_id?: StringFieldUpdateOperationsInput | string
    user_account_user_id?: StringFieldUpdateOperationsInput | string
    user_account_access_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_id_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_account_scope?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_password?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_account_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Verification_tableCreateInput = {
    id: string
    verification_identifier: string
    verification_value: string
    verification_expires_at: Date | string
    verification_created_at?: Date | string | null
    verification_updated_at?: Date | string | null
  }

  export type Verification_tableUncheckedCreateInput = {
    id: string
    verification_identifier: string
    verification_value: string
    verification_expires_at: Date | string
    verification_created_at?: Date | string | null
    verification_updated_at?: Date | string | null
  }

  export type Verification_tableUpdateInput = {
    verification_identifier?: StringFieldUpdateOperationsInput | string
    verification_value?: StringFieldUpdateOperationsInput | string
    verification_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Verification_tableUncheckedUpdateInput = {
    verification_identifier?: StringFieldUpdateOperationsInput | string
    verification_value?: StringFieldUpdateOperationsInput | string
    verification_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Verification_tableCreateManyInput = {
    id: string
    verification_identifier: string
    verification_value: string
    verification_expires_at: Date | string
    verification_created_at?: Date | string | null
    verification_updated_at?: Date | string | null
  }

  export type Verification_tableUpdateManyMutationInput = {
    verification_identifier?: StringFieldUpdateOperationsInput | string
    verification_value?: StringFieldUpdateOperationsInput | string
    verification_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Verification_tableUncheckedUpdateManyInput = {
    verification_identifier?: StringFieldUpdateOperationsInput | string
    verification_value?: StringFieldUpdateOperationsInput | string
    verification_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type User_account_tableListRelationFilter = {
    every?: User_account_tableWhereInput
    some?: User_account_tableWhereInput
    none?: User_account_tableWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type User_account_tableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type User_tableCountOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_email_verified?: SortOrder
    user_image?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
    user_role?: SortOrder
    user_banned?: SortOrder
    user_ban_reason?: SortOrder
    user_ban_expires?: SortOrder
    user_is_onboarded?: SortOrder
    user_phone_number?: SortOrder
  }

  export type User_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_email_verified?: SortOrder
    user_image?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
    user_role?: SortOrder
    user_banned?: SortOrder
    user_ban_reason?: SortOrder
    user_ban_expires?: SortOrder
    user_is_onboarded?: SortOrder
    user_phone_number?: SortOrder
  }

  export type User_tableMinOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_email_verified?: SortOrder
    user_image?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
    user_role?: SortOrder
    user_banned?: SortOrder
    user_ban_reason?: SortOrder
    user_ban_expires?: SortOrder
    user_is_onboarded?: SortOrder
    user_phone_number?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type User_tableScalarRelationFilter = {
    is?: User_tableWhereInput
    isNot?: User_tableWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type User_account_tableCountOrderByAggregateInput = {
    id?: SortOrder
    user_account_account_id?: SortOrder
    user_account_provider_id?: SortOrder
    user_account_user_id?: SortOrder
    user_account_access_token?: SortOrder
    user_account_refresh_token?: SortOrder
    user_account_id_token?: SortOrder
    user_account_access_token_expires_at?: SortOrder
    user_account_scope?: SortOrder
    user_account_password?: SortOrder
    user_account_created_at?: SortOrder
    user_account_updated_at?: SortOrder
  }

  export type User_account_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    user_account_account_id?: SortOrder
    user_account_provider_id?: SortOrder
    user_account_user_id?: SortOrder
    user_account_access_token?: SortOrder
    user_account_refresh_token?: SortOrder
    user_account_id_token?: SortOrder
    user_account_access_token_expires_at?: SortOrder
    user_account_scope?: SortOrder
    user_account_password?: SortOrder
    user_account_created_at?: SortOrder
    user_account_updated_at?: SortOrder
  }

  export type User_account_tableMinOrderByAggregateInput = {
    id?: SortOrder
    user_account_account_id?: SortOrder
    user_account_provider_id?: SortOrder
    user_account_user_id?: SortOrder
    user_account_access_token?: SortOrder
    user_account_refresh_token?: SortOrder
    user_account_id_token?: SortOrder
    user_account_access_token_expires_at?: SortOrder
    user_account_scope?: SortOrder
    user_account_password?: SortOrder
    user_account_created_at?: SortOrder
    user_account_updated_at?: SortOrder
  }

  export type Verification_tableCountOrderByAggregateInput = {
    id?: SortOrder
    verification_identifier?: SortOrder
    verification_value?: SortOrder
    verification_expires_at?: SortOrder
    verification_created_at?: SortOrder
    verification_updated_at?: SortOrder
  }

  export type Verification_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    verification_identifier?: SortOrder
    verification_value?: SortOrder
    verification_expires_at?: SortOrder
    verification_created_at?: SortOrder
    verification_updated_at?: SortOrder
  }

  export type Verification_tableMinOrderByAggregateInput = {
    id?: SortOrder
    verification_identifier?: SortOrder
    verification_value?: SortOrder
    verification_expires_at?: SortOrder
    verification_created_at?: SortOrder
    verification_updated_at?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUser_tableInput = {
    create?: XOR<SessionCreateWithoutUser_tableInput, SessionUncheckedCreateWithoutUser_tableInput> | SessionCreateWithoutUser_tableInput[] | SessionUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUser_tableInput | SessionCreateOrConnectWithoutUser_tableInput[]
    createMany?: SessionCreateManyUser_tableInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type User_account_tableCreateNestedManyWithoutUser_tableInput = {
    create?: XOR<User_account_tableCreateWithoutUser_tableInput, User_account_tableUncheckedCreateWithoutUser_tableInput> | User_account_tableCreateWithoutUser_tableInput[] | User_account_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: User_account_tableCreateOrConnectWithoutUser_tableInput | User_account_tableCreateOrConnectWithoutUser_tableInput[]
    createMany?: User_account_tableCreateManyUser_tableInputEnvelope
    connect?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUser_tableInput = {
    create?: XOR<SessionCreateWithoutUser_tableInput, SessionUncheckedCreateWithoutUser_tableInput> | SessionCreateWithoutUser_tableInput[] | SessionUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUser_tableInput | SessionCreateOrConnectWithoutUser_tableInput[]
    createMany?: SessionCreateManyUser_tableInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type User_account_tableUncheckedCreateNestedManyWithoutUser_tableInput = {
    create?: XOR<User_account_tableCreateWithoutUser_tableInput, User_account_tableUncheckedCreateWithoutUser_tableInput> | User_account_tableCreateWithoutUser_tableInput[] | User_account_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: User_account_tableCreateOrConnectWithoutUser_tableInput | User_account_tableCreateOrConnectWithoutUser_tableInput[]
    createMany?: User_account_tableCreateManyUser_tableInputEnvelope
    connect?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type SessionUpdateManyWithoutUser_tableNestedInput = {
    create?: XOR<SessionCreateWithoutUser_tableInput, SessionUncheckedCreateWithoutUser_tableInput> | SessionCreateWithoutUser_tableInput[] | SessionUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUser_tableInput | SessionCreateOrConnectWithoutUser_tableInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUser_tableInput | SessionUpsertWithWhereUniqueWithoutUser_tableInput[]
    createMany?: SessionCreateManyUser_tableInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUser_tableInput | SessionUpdateWithWhereUniqueWithoutUser_tableInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUser_tableInput | SessionUpdateManyWithWhereWithoutUser_tableInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type User_account_tableUpdateManyWithoutUser_tableNestedInput = {
    create?: XOR<User_account_tableCreateWithoutUser_tableInput, User_account_tableUncheckedCreateWithoutUser_tableInput> | User_account_tableCreateWithoutUser_tableInput[] | User_account_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: User_account_tableCreateOrConnectWithoutUser_tableInput | User_account_tableCreateOrConnectWithoutUser_tableInput[]
    upsert?: User_account_tableUpsertWithWhereUniqueWithoutUser_tableInput | User_account_tableUpsertWithWhereUniqueWithoutUser_tableInput[]
    createMany?: User_account_tableCreateManyUser_tableInputEnvelope
    set?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
    disconnect?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
    delete?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
    connect?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
    update?: User_account_tableUpdateWithWhereUniqueWithoutUser_tableInput | User_account_tableUpdateWithWhereUniqueWithoutUser_tableInput[]
    updateMany?: User_account_tableUpdateManyWithWhereWithoutUser_tableInput | User_account_tableUpdateManyWithWhereWithoutUser_tableInput[]
    deleteMany?: User_account_tableScalarWhereInput | User_account_tableScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUser_tableNestedInput = {
    create?: XOR<SessionCreateWithoutUser_tableInput, SessionUncheckedCreateWithoutUser_tableInput> | SessionCreateWithoutUser_tableInput[] | SessionUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUser_tableInput | SessionCreateOrConnectWithoutUser_tableInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUser_tableInput | SessionUpsertWithWhereUniqueWithoutUser_tableInput[]
    createMany?: SessionCreateManyUser_tableInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUser_tableInput | SessionUpdateWithWhereUniqueWithoutUser_tableInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUser_tableInput | SessionUpdateManyWithWhereWithoutUser_tableInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type User_account_tableUncheckedUpdateManyWithoutUser_tableNestedInput = {
    create?: XOR<User_account_tableCreateWithoutUser_tableInput, User_account_tableUncheckedCreateWithoutUser_tableInput> | User_account_tableCreateWithoutUser_tableInput[] | User_account_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: User_account_tableCreateOrConnectWithoutUser_tableInput | User_account_tableCreateOrConnectWithoutUser_tableInput[]
    upsert?: User_account_tableUpsertWithWhereUniqueWithoutUser_tableInput | User_account_tableUpsertWithWhereUniqueWithoutUser_tableInput[]
    createMany?: User_account_tableCreateManyUser_tableInputEnvelope
    set?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
    disconnect?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
    delete?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
    connect?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
    update?: User_account_tableUpdateWithWhereUniqueWithoutUser_tableInput | User_account_tableUpdateWithWhereUniqueWithoutUser_tableInput[]
    updateMany?: User_account_tableUpdateManyWithWhereWithoutUser_tableInput | User_account_tableUpdateManyWithWhereWithoutUser_tableInput[]
    deleteMany?: User_account_tableScalarWhereInput | User_account_tableScalarWhereInput[]
  }

  export type User_tableCreateNestedOneWithoutSessionsInput = {
    create?: XOR<User_tableCreateWithoutSessionsInput, User_tableUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: User_tableCreateOrConnectWithoutSessionsInput
    connect?: User_tableWhereUniqueInput
  }

  export type User_tableUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<User_tableCreateWithoutSessionsInput, User_tableUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: User_tableCreateOrConnectWithoutSessionsInput
    upsert?: User_tableUpsertWithoutSessionsInput
    connect?: User_tableWhereUniqueInput
    update?: XOR<XOR<User_tableUpdateToOneWithWhereWithoutSessionsInput, User_tableUpdateWithoutSessionsInput>, User_tableUncheckedUpdateWithoutSessionsInput>
  }

  export type User_tableCreateNestedOneWithoutUser_account_tablesInput = {
    create?: XOR<User_tableCreateWithoutUser_account_tablesInput, User_tableUncheckedCreateWithoutUser_account_tablesInput>
    connectOrCreate?: User_tableCreateOrConnectWithoutUser_account_tablesInput
    connect?: User_tableWhereUniqueInput
  }

  export type User_tableUpdateOneRequiredWithoutUser_account_tablesNestedInput = {
    create?: XOR<User_tableCreateWithoutUser_account_tablesInput, User_tableUncheckedCreateWithoutUser_account_tablesInput>
    connectOrCreate?: User_tableCreateOrConnectWithoutUser_account_tablesInput
    upsert?: User_tableUpsertWithoutUser_account_tablesInput
    connect?: User_tableWhereUniqueInput
    update?: XOR<XOR<User_tableUpdateToOneWithWhereWithoutUser_account_tablesInput, User_tableUpdateWithoutUser_account_tablesInput>, User_tableUncheckedUpdateWithoutUser_account_tablesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type SessionCreateWithoutUser_tableInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type SessionUncheckedCreateWithoutUser_tableInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type SessionCreateOrConnectWithoutUser_tableInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUser_tableInput, SessionUncheckedCreateWithoutUser_tableInput>
  }

  export type SessionCreateManyUser_tableInputEnvelope = {
    data: SessionCreateManyUser_tableInput | SessionCreateManyUser_tableInput[]
  }

  export type User_account_tableCreateWithoutUser_tableInput = {
    id: string
    user_account_account_id: string
    user_account_provider_id: string
    user_account_access_token?: string | null
    user_account_refresh_token?: string | null
    user_account_id_token?: string | null
    user_account_access_token_expires_at?: Date | string | null
    user_account_scope?: string | null
    user_account_password?: string | null
    user_account_created_at: Date | string
    user_account_updated_at: Date | string
  }

  export type User_account_tableUncheckedCreateWithoutUser_tableInput = {
    id: string
    user_account_account_id: string
    user_account_provider_id: string
    user_account_access_token?: string | null
    user_account_refresh_token?: string | null
    user_account_id_token?: string | null
    user_account_access_token_expires_at?: Date | string | null
    user_account_scope?: string | null
    user_account_password?: string | null
    user_account_created_at: Date | string
    user_account_updated_at: Date | string
  }

  export type User_account_tableCreateOrConnectWithoutUser_tableInput = {
    where: User_account_tableWhereUniqueInput
    create: XOR<User_account_tableCreateWithoutUser_tableInput, User_account_tableUncheckedCreateWithoutUser_tableInput>
  }

  export type User_account_tableCreateManyUser_tableInputEnvelope = {
    data: User_account_tableCreateManyUser_tableInput | User_account_tableCreateManyUser_tableInput[]
  }

  export type SessionUpsertWithWhereUniqueWithoutUser_tableInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUser_tableInput, SessionUncheckedUpdateWithoutUser_tableInput>
    create: XOR<SessionCreateWithoutUser_tableInput, SessionUncheckedCreateWithoutUser_tableInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUser_tableInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUser_tableInput, SessionUncheckedUpdateWithoutUser_tableInput>
  }

  export type SessionUpdateManyWithWhereWithoutUser_tableInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUser_tableInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
  }

  export type User_account_tableUpsertWithWhereUniqueWithoutUser_tableInput = {
    where: User_account_tableWhereUniqueInput
    update: XOR<User_account_tableUpdateWithoutUser_tableInput, User_account_tableUncheckedUpdateWithoutUser_tableInput>
    create: XOR<User_account_tableCreateWithoutUser_tableInput, User_account_tableUncheckedCreateWithoutUser_tableInput>
  }

  export type User_account_tableUpdateWithWhereUniqueWithoutUser_tableInput = {
    where: User_account_tableWhereUniqueInput
    data: XOR<User_account_tableUpdateWithoutUser_tableInput, User_account_tableUncheckedUpdateWithoutUser_tableInput>
  }

  export type User_account_tableUpdateManyWithWhereWithoutUser_tableInput = {
    where: User_account_tableScalarWhereInput
    data: XOR<User_account_tableUpdateManyMutationInput, User_account_tableUncheckedUpdateManyWithoutUser_tableInput>
  }

  export type User_account_tableScalarWhereInput = {
    AND?: User_account_tableScalarWhereInput | User_account_tableScalarWhereInput[]
    OR?: User_account_tableScalarWhereInput[]
    NOT?: User_account_tableScalarWhereInput | User_account_tableScalarWhereInput[]
    id?: StringFilter<"User_account_table"> | string
    user_account_account_id?: StringFilter<"User_account_table"> | string
    user_account_provider_id?: StringFilter<"User_account_table"> | string
    user_account_user_id?: StringFilter<"User_account_table"> | string
    user_account_access_token?: StringNullableFilter<"User_account_table"> | string | null
    user_account_refresh_token?: StringNullableFilter<"User_account_table"> | string | null
    user_account_id_token?: StringNullableFilter<"User_account_table"> | string | null
    user_account_access_token_expires_at?: DateTimeNullableFilter<"User_account_table"> | Date | string | null
    user_account_scope?: StringNullableFilter<"User_account_table"> | string | null
    user_account_password?: StringNullableFilter<"User_account_table"> | string | null
    user_account_created_at?: DateTimeFilter<"User_account_table"> | Date | string
    user_account_updated_at?: DateTimeFilter<"User_account_table"> | Date | string
  }

  export type User_tableCreateWithoutSessionsInput = {
    id: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    user_role?: string | null
    user_banned?: boolean | null
    user_ban_reason?: string | null
    user_ban_expires?: Date | string | null
    user_is_onboarded?: boolean | null
    user_phone_number?: string | null
    user_account_tables?: User_account_tableCreateNestedManyWithoutUser_tableInput
  }

  export type User_tableUncheckedCreateWithoutSessionsInput = {
    id: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    user_role?: string | null
    user_banned?: boolean | null
    user_ban_reason?: string | null
    user_ban_expires?: Date | string | null
    user_is_onboarded?: boolean | null
    user_phone_number?: string | null
    user_account_tables?: User_account_tableUncheckedCreateNestedManyWithoutUser_tableInput
  }

  export type User_tableCreateOrConnectWithoutSessionsInput = {
    where: User_tableWhereUniqueInput
    create: XOR<User_tableCreateWithoutSessionsInput, User_tableUncheckedCreateWithoutSessionsInput>
  }

  export type User_tableUpsertWithoutSessionsInput = {
    update: XOR<User_tableUpdateWithoutSessionsInput, User_tableUncheckedUpdateWithoutSessionsInput>
    create: XOR<User_tableCreateWithoutSessionsInput, User_tableUncheckedCreateWithoutSessionsInput>
    where?: User_tableWhereInput
  }

  export type User_tableUpdateToOneWithWhereWithoutSessionsInput = {
    where?: User_tableWhereInput
    data: XOR<User_tableUpdateWithoutSessionsInput, User_tableUncheckedUpdateWithoutSessionsInput>
  }

  export type User_tableUpdateWithoutSessionsInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_role?: NullableStringFieldUpdateOperationsInput | string | null
    user_banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    user_ban_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_tables?: User_account_tableUpdateManyWithoutUser_tableNestedInput
  }

  export type User_tableUncheckedUpdateWithoutSessionsInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_role?: NullableStringFieldUpdateOperationsInput | string | null
    user_banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    user_ban_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_tables?: User_account_tableUncheckedUpdateManyWithoutUser_tableNestedInput
  }

  export type User_tableCreateWithoutUser_account_tablesInput = {
    id: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    user_role?: string | null
    user_banned?: boolean | null
    user_ban_reason?: string | null
    user_ban_expires?: Date | string | null
    user_is_onboarded?: boolean | null
    user_phone_number?: string | null
    sessions?: SessionCreateNestedManyWithoutUser_tableInput
  }

  export type User_tableUncheckedCreateWithoutUser_account_tablesInput = {
    id: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    user_role?: string | null
    user_banned?: boolean | null
    user_ban_reason?: string | null
    user_ban_expires?: Date | string | null
    user_is_onboarded?: boolean | null
    user_phone_number?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUser_tableInput
  }

  export type User_tableCreateOrConnectWithoutUser_account_tablesInput = {
    where: User_tableWhereUniqueInput
    create: XOR<User_tableCreateWithoutUser_account_tablesInput, User_tableUncheckedCreateWithoutUser_account_tablesInput>
  }

  export type User_tableUpsertWithoutUser_account_tablesInput = {
    update: XOR<User_tableUpdateWithoutUser_account_tablesInput, User_tableUncheckedUpdateWithoutUser_account_tablesInput>
    create: XOR<User_tableCreateWithoutUser_account_tablesInput, User_tableUncheckedCreateWithoutUser_account_tablesInput>
    where?: User_tableWhereInput
  }

  export type User_tableUpdateToOneWithWhereWithoutUser_account_tablesInput = {
    where?: User_tableWhereInput
    data: XOR<User_tableUpdateWithoutUser_account_tablesInput, User_tableUncheckedUpdateWithoutUser_account_tablesInput>
  }

  export type User_tableUpdateWithoutUser_account_tablesInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_role?: NullableStringFieldUpdateOperationsInput | string | null
    user_banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    user_ban_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUser_tableNestedInput
  }

  export type User_tableUncheckedUpdateWithoutUser_account_tablesInput = {
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_role?: NullableStringFieldUpdateOperationsInput | string | null
    user_banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    user_ban_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUser_tableNestedInput
  }

  export type SessionCreateManyUser_tableInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type User_account_tableCreateManyUser_tableInput = {
    id: string
    user_account_account_id: string
    user_account_provider_id: string
    user_account_access_token?: string | null
    user_account_refresh_token?: string | null
    user_account_id_token?: string | null
    user_account_access_token_expires_at?: Date | string | null
    user_account_scope?: string | null
    user_account_password?: string | null
    user_account_created_at: Date | string
    user_account_updated_at: Date | string
  }

  export type SessionUpdateWithoutUser_tableInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUser_tableInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUser_tableInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_account_tableUpdateWithoutUser_tableInput = {
    user_account_account_id?: StringFieldUpdateOperationsInput | string
    user_account_provider_id?: StringFieldUpdateOperationsInput | string
    user_account_access_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_id_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_account_scope?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_password?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_account_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_account_tableUncheckedUpdateWithoutUser_tableInput = {
    user_account_account_id?: StringFieldUpdateOperationsInput | string
    user_account_provider_id?: StringFieldUpdateOperationsInput | string
    user_account_access_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_id_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_account_scope?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_password?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_account_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_account_tableUncheckedUpdateManyWithoutUser_tableInput = {
    user_account_account_id?: StringFieldUpdateOperationsInput | string
    user_account_provider_id?: StringFieldUpdateOperationsInput | string
    user_account_access_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_id_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_access_token_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_account_scope?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_password?: NullableStringFieldUpdateOperationsInput | string | null
    user_account_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_account_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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