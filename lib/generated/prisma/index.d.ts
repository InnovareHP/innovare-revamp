
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
 * Model Session_table
 * 
 */
export type Session_table = $Result.DefaultSelection<Prisma.$Session_tablePayload>
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
 * Model Organization_table
 * 
 */
export type Organization_table = $Result.DefaultSelection<Prisma.$Organization_tablePayload>
/**
 * Model Member_table
 * 
 */
export type Member_table = $Result.DefaultSelection<Prisma.$Member_tablePayload>
/**
 * Model Invitation_table
 * 
 */
export type Invitation_table = $Result.DefaultSelection<Prisma.$Invitation_tablePayload>
/**
 * Model company_log_table
 * 
 */
export type company_log_table = $Result.DefaultSelection<Prisma.$company_log_tablePayload>
/**
 * Model company_log_task_table
 * 
 */
export type company_log_task_table = $Result.DefaultSelection<Prisma.$company_log_task_tablePayload>

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
   * `prisma.session_table`: Exposes CRUD operations for the **Session_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Session_tables
    * const session_tables = await prisma.session_table.findMany()
    * ```
    */
  get session_table(): Prisma.Session_tableDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.organization_table`: Exposes CRUD operations for the **Organization_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organization_tables
    * const organization_tables = await prisma.organization_table.findMany()
    * ```
    */
  get organization_table(): Prisma.Organization_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member_table`: Exposes CRUD operations for the **Member_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Member_tables
    * const member_tables = await prisma.member_table.findMany()
    * ```
    */
  get member_table(): Prisma.Member_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitation_table`: Exposes CRUD operations for the **Invitation_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitation_tables
    * const invitation_tables = await prisma.invitation_table.findMany()
    * ```
    */
  get invitation_table(): Prisma.Invitation_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company_log_table`: Exposes CRUD operations for the **company_log_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Company_log_tables
    * const company_log_tables = await prisma.company_log_table.findMany()
    * ```
    */
  get company_log_table(): Prisma.company_log_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company_log_task_table`: Exposes CRUD operations for the **company_log_task_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Company_log_task_tables
    * const company_log_task_tables = await prisma.company_log_task_table.findMany()
    * ```
    */
  get company_log_task_table(): Prisma.company_log_task_tableDelegate<ExtArgs, ClientOptions>;
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
    Session_table: 'Session_table',
    User_account_table: 'User_account_table',
    Verification_table: 'Verification_table',
    Organization_table: 'Organization_table',
    Member_table: 'Member_table',
    Invitation_table: 'Invitation_table',
    company_log_table: 'company_log_table',
    company_log_task_table: 'company_log_task_table'
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
      modelProps: "user_table" | "session_table" | "user_account_table" | "verification_table" | "organization_table" | "member_table" | "invitation_table" | "company_log_table" | "company_log_task_table"
      txIsolationLevel: Prisma.TransactionIsolationLevel
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
          createManyAndReturn: {
            args: Prisma.User_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload>[]
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
          updateManyAndReturn: {
            args: Prisma.User_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_tablePayload>[]
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
          count: {
            args: Prisma.User_tableCountArgs<ExtArgs>
            result: $Utils.Optional<User_tableCountAggregateOutputType> | number
          }
        }
      }
      Session_table: {
        payload: Prisma.$Session_tablePayload<ExtArgs>
        fields: Prisma.Session_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Session_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Session_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Session_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Session_tablePayload>
          }
          findFirst: {
            args: Prisma.Session_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Session_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Session_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Session_tablePayload>
          }
          findMany: {
            args: Prisma.Session_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Session_tablePayload>[]
          }
          create: {
            args: Prisma.Session_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Session_tablePayload>
          }
          createMany: {
            args: Prisma.Session_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Session_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Session_tablePayload>[]
          }
          delete: {
            args: Prisma.Session_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Session_tablePayload>
          }
          update: {
            args: Prisma.Session_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Session_tablePayload>
          }
          deleteMany: {
            args: Prisma.Session_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Session_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Session_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Session_tablePayload>[]
          }
          upsert: {
            args: Prisma.Session_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Session_tablePayload>
          }
          aggregate: {
            args: Prisma.Session_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession_table>
          }
          groupBy: {
            args: Prisma.Session_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Session_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.Session_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Session_tableCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.User_account_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload>[]
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
          updateManyAndReturn: {
            args: Prisma.User_account_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_account_tablePayload>[]
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
          createManyAndReturn: {
            args: Prisma.Verification_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload>[]
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
          updateManyAndReturn: {
            args: Prisma.Verification_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Verification_tablePayload>[]
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
          count: {
            args: Prisma.Verification_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Verification_tableCountAggregateOutputType> | number
          }
        }
      }
      Organization_table: {
        payload: Prisma.$Organization_tablePayload<ExtArgs>
        fields: Prisma.Organization_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Organization_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Organization_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_tablePayload>
          }
          findFirst: {
            args: Prisma.Organization_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Organization_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_tablePayload>
          }
          findMany: {
            args: Prisma.Organization_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_tablePayload>[]
          }
          create: {
            args: Prisma.Organization_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_tablePayload>
          }
          createMany: {
            args: Prisma.Organization_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Organization_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_tablePayload>[]
          }
          delete: {
            args: Prisma.Organization_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_tablePayload>
          }
          update: {
            args: Prisma.Organization_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_tablePayload>
          }
          deleteMany: {
            args: Prisma.Organization_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Organization_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Organization_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_tablePayload>[]
          }
          upsert: {
            args: Prisma.Organization_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Organization_tablePayload>
          }
          aggregate: {
            args: Prisma.Organization_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization_table>
          }
          groupBy: {
            args: Prisma.Organization_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Organization_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.Organization_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Organization_tableCountAggregateOutputType> | number
          }
        }
      }
      Member_table: {
        payload: Prisma.$Member_tablePayload<ExtArgs>
        fields: Prisma.Member_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Member_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Member_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_tablePayload>
          }
          findFirst: {
            args: Prisma.Member_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Member_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_tablePayload>
          }
          findMany: {
            args: Prisma.Member_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_tablePayload>[]
          }
          create: {
            args: Prisma.Member_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_tablePayload>
          }
          createMany: {
            args: Prisma.Member_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Member_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_tablePayload>[]
          }
          delete: {
            args: Prisma.Member_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_tablePayload>
          }
          update: {
            args: Prisma.Member_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_tablePayload>
          }
          deleteMany: {
            args: Prisma.Member_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Member_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Member_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_tablePayload>[]
          }
          upsert: {
            args: Prisma.Member_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Member_tablePayload>
          }
          aggregate: {
            args: Prisma.Member_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember_table>
          }
          groupBy: {
            args: Prisma.Member_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Member_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.Member_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Member_tableCountAggregateOutputType> | number
          }
        }
      }
      Invitation_table: {
        payload: Prisma.$Invitation_tablePayload<ExtArgs>
        fields: Prisma.Invitation_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Invitation_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invitation_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Invitation_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invitation_tablePayload>
          }
          findFirst: {
            args: Prisma.Invitation_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invitation_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Invitation_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invitation_tablePayload>
          }
          findMany: {
            args: Prisma.Invitation_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invitation_tablePayload>[]
          }
          create: {
            args: Prisma.Invitation_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invitation_tablePayload>
          }
          createMany: {
            args: Prisma.Invitation_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Invitation_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invitation_tablePayload>[]
          }
          delete: {
            args: Prisma.Invitation_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invitation_tablePayload>
          }
          update: {
            args: Prisma.Invitation_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invitation_tablePayload>
          }
          deleteMany: {
            args: Prisma.Invitation_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Invitation_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Invitation_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invitation_tablePayload>[]
          }
          upsert: {
            args: Prisma.Invitation_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Invitation_tablePayload>
          }
          aggregate: {
            args: Prisma.Invitation_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitation_table>
          }
          groupBy: {
            args: Prisma.Invitation_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Invitation_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.Invitation_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Invitation_tableCountAggregateOutputType> | number
          }
        }
      }
      company_log_table: {
        payload: Prisma.$company_log_tablePayload<ExtArgs>
        fields: Prisma.company_log_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.company_log_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.company_log_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_tablePayload>
          }
          findFirst: {
            args: Prisma.company_log_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.company_log_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_tablePayload>
          }
          findMany: {
            args: Prisma.company_log_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_tablePayload>[]
          }
          create: {
            args: Prisma.company_log_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_tablePayload>
          }
          createMany: {
            args: Prisma.company_log_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.company_log_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_tablePayload>[]
          }
          delete: {
            args: Prisma.company_log_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_tablePayload>
          }
          update: {
            args: Prisma.company_log_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_tablePayload>
          }
          deleteMany: {
            args: Prisma.company_log_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.company_log_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.company_log_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_tablePayload>[]
          }
          upsert: {
            args: Prisma.company_log_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_tablePayload>
          }
          aggregate: {
            args: Prisma.Company_log_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany_log_table>
          }
          groupBy: {
            args: Prisma.company_log_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Company_log_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.company_log_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Company_log_tableCountAggregateOutputType> | number
          }
        }
      }
      company_log_task_table: {
        payload: Prisma.$company_log_task_tablePayload<ExtArgs>
        fields: Prisma.company_log_task_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.company_log_task_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_task_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.company_log_task_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_task_tablePayload>
          }
          findFirst: {
            args: Prisma.company_log_task_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_task_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.company_log_task_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_task_tablePayload>
          }
          findMany: {
            args: Prisma.company_log_task_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_task_tablePayload>[]
          }
          create: {
            args: Prisma.company_log_task_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_task_tablePayload>
          }
          createMany: {
            args: Prisma.company_log_task_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.company_log_task_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_task_tablePayload>[]
          }
          delete: {
            args: Prisma.company_log_task_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_task_tablePayload>
          }
          update: {
            args: Prisma.company_log_task_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_task_tablePayload>
          }
          deleteMany: {
            args: Prisma.company_log_task_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.company_log_task_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.company_log_task_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_task_tablePayload>[]
          }
          upsert: {
            args: Prisma.company_log_task_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_log_task_tablePayload>
          }
          aggregate: {
            args: Prisma.Company_log_task_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany_log_task_table>
          }
          groupBy: {
            args: Prisma.company_log_task_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Company_log_task_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.company_log_task_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Company_log_task_tableCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    session_table?: Session_tableOmit
    user_account_table?: User_account_tableOmit
    verification_table?: Verification_tableOmit
    organization_table?: Organization_tableOmit
    member_table?: Member_tableOmit
    invitation_table?: Invitation_tableOmit
    company_log_table?: company_log_tableOmit
    company_log_task_table?: company_log_task_tableOmit
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
    session_tables: number
    user_account_tables: number
    member_tables: number
    invitation_tables: number
  }

  export type User_tableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session_tables?: boolean | User_tableCountOutputTypeCountSession_tablesArgs
    user_account_tables?: boolean | User_tableCountOutputTypeCountUser_account_tablesArgs
    member_tables?: boolean | User_tableCountOutputTypeCountMember_tablesArgs
    invitation_tables?: boolean | User_tableCountOutputTypeCountInvitation_tablesArgs
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
  export type User_tableCountOutputTypeCountSession_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Session_tableWhereInput
  }

  /**
   * User_tableCountOutputType without action
   */
  export type User_tableCountOutputTypeCountUser_account_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_account_tableWhereInput
  }

  /**
   * User_tableCountOutputType without action
   */
  export type User_tableCountOutputTypeCountMember_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Member_tableWhereInput
  }

  /**
   * User_tableCountOutputType without action
   */
  export type User_tableCountOutputTypeCountInvitation_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Invitation_tableWhereInput
  }


  /**
   * Count Type Organization_tableCountOutputType
   */

  export type Organization_tableCountOutputType = {
    member_tables: number
    invitation_tables: number
  }

  export type Organization_tableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member_tables?: boolean | Organization_tableCountOutputTypeCountMember_tablesArgs
    invitation_tables?: boolean | Organization_tableCountOutputTypeCountInvitation_tablesArgs
  }

  // Custom InputTypes
  /**
   * Organization_tableCountOutputType without action
   */
  export type Organization_tableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_tableCountOutputType
     */
    select?: Organization_tableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Organization_tableCountOutputType without action
   */
  export type Organization_tableCountOutputTypeCountMember_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Member_tableWhereInput
  }

  /**
   * Organization_tableCountOutputType without action
   */
  export type Organization_tableCountOutputTypeCountInvitation_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Invitation_tableWhereInput
  }


  /**
   * Count Type Member_tableCountOutputType
   */

  export type Member_tableCountOutputType = {
    company_log_table: number
  }

  export type Member_tableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company_log_table?: boolean | Member_tableCountOutputTypeCountCompany_log_tableArgs
  }

  // Custom InputTypes
  /**
   * Member_tableCountOutputType without action
   */
  export type Member_tableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_tableCountOutputType
     */
    select?: Member_tableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Member_tableCountOutputType without action
   */
  export type Member_tableCountOutputTypeCountCompany_log_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: company_log_tableWhereInput
  }


  /**
   * Count Type Company_log_tableCountOutputType
   */

  export type Company_log_tableCountOutputType = {
    tasks: number
  }

  export type Company_log_tableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Company_log_tableCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * Company_log_tableCountOutputType without action
   */
  export type Company_log_tableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company_log_tableCountOutputType
     */
    select?: Company_log_tableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Company_log_tableCountOutputType without action
   */
  export type Company_log_tableCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: company_log_task_tableWhereInput
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
  }

  export type User_tableMaxAggregateOutputType = {
    id: string | null
    user_name: string | null
    user_email: string | null
    user_email_verified: boolean | null
    user_image: string | null
    user_created_at: Date | null
    user_updated_at: Date | null
  }

  export type User_tableCountAggregateOutputType = {
    id: number
    user_name: number
    user_email: number
    user_email_verified: number
    user_image: number
    user_created_at: number
    user_updated_at: number
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
  }

  export type User_tableMaxAggregateInputType = {
    id?: true
    user_name?: true
    user_email?: true
    user_email_verified?: true
    user_image?: true
    user_created_at?: true
    user_updated_at?: true
  }

  export type User_tableCountAggregateInputType = {
    id?: true
    user_name?: true
    user_email?: true
    user_email_verified?: true
    user_image?: true
    user_created_at?: true
    user_updated_at?: true
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
    session_tables?: boolean | User_table$session_tablesArgs<ExtArgs>
    user_account_tables?: boolean | User_table$user_account_tablesArgs<ExtArgs>
    member_tables?: boolean | User_table$member_tablesArgs<ExtArgs>
    invitation_tables?: boolean | User_table$invitation_tablesArgs<ExtArgs>
    _count?: boolean | User_tableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_table"]>

  export type User_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    user_email?: boolean
    user_email_verified?: boolean
    user_image?: boolean
    user_created_at?: boolean
    user_updated_at?: boolean
  }, ExtArgs["result"]["user_table"]>

  export type User_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    user_email?: boolean
    user_email_verified?: boolean
    user_image?: boolean
    user_created_at?: boolean
    user_updated_at?: boolean
  }, ExtArgs["result"]["user_table"]>

  export type User_tableSelectScalar = {
    id?: boolean
    user_name?: boolean
    user_email?: boolean
    user_email_verified?: boolean
    user_image?: boolean
    user_created_at?: boolean
    user_updated_at?: boolean
  }

  export type User_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_name" | "user_email" | "user_email_verified" | "user_image" | "user_created_at" | "user_updated_at", ExtArgs["result"]["user_table"]>
  export type User_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session_tables?: boolean | User_table$session_tablesArgs<ExtArgs>
    user_account_tables?: boolean | User_table$user_account_tablesArgs<ExtArgs>
    member_tables?: boolean | User_table$member_tablesArgs<ExtArgs>
    invitation_tables?: boolean | User_table$invitation_tablesArgs<ExtArgs>
    _count?: boolean | User_tableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type User_tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type User_tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $User_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_table"
    objects: {
      session_tables: Prisma.$Session_tablePayload<ExtArgs>[]
      user_account_tables: Prisma.$User_account_tablePayload<ExtArgs>[]
      member_tables: Prisma.$Member_tablePayload<ExtArgs>[]
      invitation_tables: Prisma.$Invitation_tablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_name: string
      user_email: string
      user_email_verified: boolean
      user_image: string | null
      user_created_at: Date
      user_updated_at: Date
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
     * Create many User_tables and returns the data saved in the database.
     * @param {User_tableCreateManyAndReturnArgs} args - Arguments to create many User_tables.
     * @example
     * // Create many User_tables
     * const user_table = await prisma.user_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_tables and only return the `id`
     * const user_tableWithIdOnly = await prisma.user_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends User_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, User_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more User_tables and returns the data updated in the database.
     * @param {User_tableUpdateManyAndReturnArgs} args - Arguments to update many User_tables.
     * @example
     * // Update many User_tables
     * const user_table = await prisma.user_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_tables and only return the `id`
     * const user_tableWithIdOnly = await prisma.user_table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends User_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, User_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    session_tables<T extends User_table$session_tablesArgs<ExtArgs> = {}>(args?: Subset<T, User_table$session_tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Session_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_account_tables<T extends User_table$user_account_tablesArgs<ExtArgs> = {}>(args?: Subset<T, User_table$user_account_tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    member_tables<T extends User_table$member_tablesArgs<ExtArgs> = {}>(args?: Subset<T, User_table$member_tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Member_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitation_tables<T extends User_table$invitation_tablesArgs<ExtArgs> = {}>(args?: Subset<T, User_table$invitation_tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invitation_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    skipDuplicates?: boolean
  }

  /**
   * User_table createManyAndReturn
   */
  export type User_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
    /**
     * The data used to create many User_tables.
     */
    data: User_tableCreateManyInput | User_tableCreateManyInput[]
    skipDuplicates?: boolean
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
   * User_table updateManyAndReturn
   */
  export type User_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_table
     */
    select?: User_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_table
     */
    omit?: User_tableOmit<ExtArgs> | null
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
   * User_table.session_tables
   */
  export type User_table$session_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session_table
     */
    select?: Session_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session_table
     */
    omit?: Session_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Session_tableInclude<ExtArgs> | null
    where?: Session_tableWhereInput
    orderBy?: Session_tableOrderByWithRelationInput | Session_tableOrderByWithRelationInput[]
    cursor?: Session_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Session_tableScalarFieldEnum | Session_tableScalarFieldEnum[]
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
   * User_table.member_tables
   */
  export type User_table$member_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_table
     */
    select?: Member_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_table
     */
    omit?: Member_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_tableInclude<ExtArgs> | null
    where?: Member_tableWhereInput
    orderBy?: Member_tableOrderByWithRelationInput | Member_tableOrderByWithRelationInput[]
    cursor?: Member_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Member_tableScalarFieldEnum | Member_tableScalarFieldEnum[]
  }

  /**
   * User_table.invitation_tables
   */
  export type User_table$invitation_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation_table
     */
    select?: Invitation_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation_table
     */
    omit?: Invitation_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invitation_tableInclude<ExtArgs> | null
    where?: Invitation_tableWhereInput
    orderBy?: Invitation_tableOrderByWithRelationInput | Invitation_tableOrderByWithRelationInput[]
    cursor?: Invitation_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invitation_tableScalarFieldEnum | Invitation_tableScalarFieldEnum[]
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
   * Model Session_table
   */

  export type AggregateSession_table = {
    _count: Session_tableCountAggregateOutputType | null
    _min: Session_tableMinAggregateOutputType | null
    _max: Session_tableMaxAggregateOutputType | null
  }

  export type Session_tableMinAggregateOutputType = {
    id: string | null
    session_expired_at: Date | null
    session_token: string | null
    session_created_at: Date | null
    session_updated_at: Date | null
    session_ip_address: string | null
    session_user_agent: string | null
    session_user_id: string | null
    session_active_organization_id: string | null
  }

  export type Session_tableMaxAggregateOutputType = {
    id: string | null
    session_expired_at: Date | null
    session_token: string | null
    session_created_at: Date | null
    session_updated_at: Date | null
    session_ip_address: string | null
    session_user_agent: string | null
    session_user_id: string | null
    session_active_organization_id: string | null
  }

  export type Session_tableCountAggregateOutputType = {
    id: number
    session_expired_at: number
    session_token: number
    session_created_at: number
    session_updated_at: number
    session_ip_address: number
    session_user_agent: number
    session_user_id: number
    session_active_organization_id: number
    _all: number
  }


  export type Session_tableMinAggregateInputType = {
    id?: true
    session_expired_at?: true
    session_token?: true
    session_created_at?: true
    session_updated_at?: true
    session_ip_address?: true
    session_user_agent?: true
    session_user_id?: true
    session_active_organization_id?: true
  }

  export type Session_tableMaxAggregateInputType = {
    id?: true
    session_expired_at?: true
    session_token?: true
    session_created_at?: true
    session_updated_at?: true
    session_ip_address?: true
    session_user_agent?: true
    session_user_id?: true
    session_active_organization_id?: true
  }

  export type Session_tableCountAggregateInputType = {
    id?: true
    session_expired_at?: true
    session_token?: true
    session_created_at?: true
    session_updated_at?: true
    session_ip_address?: true
    session_user_agent?: true
    session_user_id?: true
    session_active_organization_id?: true
    _all?: true
  }

  export type Session_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session_table to aggregate.
     */
    where?: Session_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Session_tables to fetch.
     */
    orderBy?: Session_tableOrderByWithRelationInput | Session_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Session_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Session_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Session_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Session_tables
    **/
    _count?: true | Session_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Session_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Session_tableMaxAggregateInputType
  }

  export type GetSession_tableAggregateType<T extends Session_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateSession_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession_table[P]>
      : GetScalarType<T[P], AggregateSession_table[P]>
  }




  export type Session_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Session_tableWhereInput
    orderBy?: Session_tableOrderByWithAggregationInput | Session_tableOrderByWithAggregationInput[]
    by: Session_tableScalarFieldEnum[] | Session_tableScalarFieldEnum
    having?: Session_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Session_tableCountAggregateInputType | true
    _min?: Session_tableMinAggregateInputType
    _max?: Session_tableMaxAggregateInputType
  }

  export type Session_tableGroupByOutputType = {
    id: string
    session_expired_at: Date
    session_token: string
    session_created_at: Date
    session_updated_at: Date
    session_ip_address: string | null
    session_user_agent: string | null
    session_user_id: string
    session_active_organization_id: string | null
    _count: Session_tableCountAggregateOutputType | null
    _min: Session_tableMinAggregateOutputType | null
    _max: Session_tableMaxAggregateOutputType | null
  }

  type GetSession_tableGroupByPayload<T extends Session_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Session_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Session_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Session_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Session_tableGroupByOutputType[P]>
        }
      >
    >


  export type Session_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_expired_at?: boolean
    session_token?: boolean
    session_created_at?: boolean
    session_updated_at?: boolean
    session_ip_address?: boolean
    session_user_agent?: boolean
    session_user_id?: boolean
    session_active_organization_id?: boolean
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session_table"]>

  export type Session_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_expired_at?: boolean
    session_token?: boolean
    session_created_at?: boolean
    session_updated_at?: boolean
    session_ip_address?: boolean
    session_user_agent?: boolean
    session_user_id?: boolean
    session_active_organization_id?: boolean
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session_table"]>

  export type Session_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_expired_at?: boolean
    session_token?: boolean
    session_created_at?: boolean
    session_updated_at?: boolean
    session_ip_address?: boolean
    session_user_agent?: boolean
    session_user_id?: boolean
    session_active_organization_id?: boolean
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session_table"]>

  export type Session_tableSelectScalar = {
    id?: boolean
    session_expired_at?: boolean
    session_token?: boolean
    session_created_at?: boolean
    session_updated_at?: boolean
    session_ip_address?: boolean
    session_user_agent?: boolean
    session_user_id?: boolean
    session_active_organization_id?: boolean
  }

  export type Session_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "session_expired_at" | "session_token" | "session_created_at" | "session_updated_at" | "session_ip_address" | "session_user_agent" | "session_user_id" | "session_active_organization_id", ExtArgs["result"]["session_table"]>
  export type Session_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }
  export type Session_tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }
  export type Session_tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }

  export type $Session_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session_table"
    objects: {
      user_table: Prisma.$User_tablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      session_expired_at: Date
      session_token: string
      session_created_at: Date
      session_updated_at: Date
      session_ip_address: string | null
      session_user_agent: string | null
      session_user_id: string
      session_active_organization_id: string | null
    }, ExtArgs["result"]["session_table"]>
    composites: {}
  }

  type Session_tableGetPayload<S extends boolean | null | undefined | Session_tableDefaultArgs> = $Result.GetResult<Prisma.$Session_tablePayload, S>

  type Session_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Session_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Session_tableCountAggregateInputType | true
    }

  export interface Session_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session_table'], meta: { name: 'Session_table' } }
    /**
     * Find zero or one Session_table that matches the filter.
     * @param {Session_tableFindUniqueArgs} args - Arguments to find a Session_table
     * @example
     * // Get one Session_table
     * const session_table = await prisma.session_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Session_tableFindUniqueArgs>(args: SelectSubset<T, Session_tableFindUniqueArgs<ExtArgs>>): Prisma__Session_tableClient<$Result.GetResult<Prisma.$Session_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Session_tableFindUniqueOrThrowArgs} args - Arguments to find a Session_table
     * @example
     * // Get one Session_table
     * const session_table = await prisma.session_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Session_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, Session_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Session_tableClient<$Result.GetResult<Prisma.$Session_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Session_tableFindFirstArgs} args - Arguments to find a Session_table
     * @example
     * // Get one Session_table
     * const session_table = await prisma.session_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Session_tableFindFirstArgs>(args?: SelectSubset<T, Session_tableFindFirstArgs<ExtArgs>>): Prisma__Session_tableClient<$Result.GetResult<Prisma.$Session_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Session_tableFindFirstOrThrowArgs} args - Arguments to find a Session_table
     * @example
     * // Get one Session_table
     * const session_table = await prisma.session_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Session_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, Session_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__Session_tableClient<$Result.GetResult<Prisma.$Session_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Session_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Session_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Session_tables
     * const session_tables = await prisma.session_table.findMany()
     * 
     * // Get first 10 Session_tables
     * const session_tables = await prisma.session_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const session_tableWithIdOnly = await prisma.session_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Session_tableFindManyArgs>(args?: SelectSubset<T, Session_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Session_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session_table.
     * @param {Session_tableCreateArgs} args - Arguments to create a Session_table.
     * @example
     * // Create one Session_table
     * const Session_table = await prisma.session_table.create({
     *   data: {
     *     // ... data to create a Session_table
     *   }
     * })
     * 
     */
    create<T extends Session_tableCreateArgs>(args: SelectSubset<T, Session_tableCreateArgs<ExtArgs>>): Prisma__Session_tableClient<$Result.GetResult<Prisma.$Session_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Session_tables.
     * @param {Session_tableCreateManyArgs} args - Arguments to create many Session_tables.
     * @example
     * // Create many Session_tables
     * const session_table = await prisma.session_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Session_tableCreateManyArgs>(args?: SelectSubset<T, Session_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Session_tables and returns the data saved in the database.
     * @param {Session_tableCreateManyAndReturnArgs} args - Arguments to create many Session_tables.
     * @example
     * // Create many Session_tables
     * const session_table = await prisma.session_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Session_tables and only return the `id`
     * const session_tableWithIdOnly = await prisma.session_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Session_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, Session_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Session_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session_table.
     * @param {Session_tableDeleteArgs} args - Arguments to delete one Session_table.
     * @example
     * // Delete one Session_table
     * const Session_table = await prisma.session_table.delete({
     *   where: {
     *     // ... filter to delete one Session_table
     *   }
     * })
     * 
     */
    delete<T extends Session_tableDeleteArgs>(args: SelectSubset<T, Session_tableDeleteArgs<ExtArgs>>): Prisma__Session_tableClient<$Result.GetResult<Prisma.$Session_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session_table.
     * @param {Session_tableUpdateArgs} args - Arguments to update one Session_table.
     * @example
     * // Update one Session_table
     * const session_table = await prisma.session_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Session_tableUpdateArgs>(args: SelectSubset<T, Session_tableUpdateArgs<ExtArgs>>): Prisma__Session_tableClient<$Result.GetResult<Prisma.$Session_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Session_tables.
     * @param {Session_tableDeleteManyArgs} args - Arguments to filter Session_tables to delete.
     * @example
     * // Delete a few Session_tables
     * const { count } = await prisma.session_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Session_tableDeleteManyArgs>(args?: SelectSubset<T, Session_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Session_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Session_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Session_tables
     * const session_table = await prisma.session_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Session_tableUpdateManyArgs>(args: SelectSubset<T, Session_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Session_tables and returns the data updated in the database.
     * @param {Session_tableUpdateManyAndReturnArgs} args - Arguments to update many Session_tables.
     * @example
     * // Update many Session_tables
     * const session_table = await prisma.session_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Session_tables and only return the `id`
     * const session_tableWithIdOnly = await prisma.session_table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Session_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, Session_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Session_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session_table.
     * @param {Session_tableUpsertArgs} args - Arguments to update or create a Session_table.
     * @example
     * // Update or create a Session_table
     * const session_table = await prisma.session_table.upsert({
     *   create: {
     *     // ... data to create a Session_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session_table we want to update
     *   }
     * })
     */
    upsert<T extends Session_tableUpsertArgs>(args: SelectSubset<T, Session_tableUpsertArgs<ExtArgs>>): Prisma__Session_tableClient<$Result.GetResult<Prisma.$Session_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Session_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Session_tableCountArgs} args - Arguments to filter Session_tables to count.
     * @example
     * // Count the number of Session_tables
     * const count = await prisma.session_table.count({
     *   where: {
     *     // ... the filter for the Session_tables we want to count
     *   }
     * })
    **/
    count<T extends Session_tableCountArgs>(
      args?: Subset<T, Session_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Session_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Session_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Session_tableAggregateArgs>(args: Subset<T, Session_tableAggregateArgs>): Prisma.PrismaPromise<GetSession_tableAggregateType<T>>

    /**
     * Group by Session_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Session_tableGroupByArgs} args - Group by arguments.
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
      T extends Session_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Session_tableGroupByArgs['orderBy'] }
        : { orderBy?: Session_tableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Session_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSession_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session_table model
   */
  readonly fields: Session_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Session_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session_table model
   */
  interface Session_tableFieldRefs {
    readonly id: FieldRef<"Session_table", 'String'>
    readonly session_expired_at: FieldRef<"Session_table", 'DateTime'>
    readonly session_token: FieldRef<"Session_table", 'String'>
    readonly session_created_at: FieldRef<"Session_table", 'DateTime'>
    readonly session_updated_at: FieldRef<"Session_table", 'DateTime'>
    readonly session_ip_address: FieldRef<"Session_table", 'String'>
    readonly session_user_agent: FieldRef<"Session_table", 'String'>
    readonly session_user_id: FieldRef<"Session_table", 'String'>
    readonly session_active_organization_id: FieldRef<"Session_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session_table findUnique
   */
  export type Session_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session_table
     */
    select?: Session_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session_table
     */
    omit?: Session_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Session_tableInclude<ExtArgs> | null
    /**
     * Filter, which Session_table to fetch.
     */
    where: Session_tableWhereUniqueInput
  }

  /**
   * Session_table findUniqueOrThrow
   */
  export type Session_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session_table
     */
    select?: Session_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session_table
     */
    omit?: Session_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Session_tableInclude<ExtArgs> | null
    /**
     * Filter, which Session_table to fetch.
     */
    where: Session_tableWhereUniqueInput
  }

  /**
   * Session_table findFirst
   */
  export type Session_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session_table
     */
    select?: Session_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session_table
     */
    omit?: Session_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Session_tableInclude<ExtArgs> | null
    /**
     * Filter, which Session_table to fetch.
     */
    where?: Session_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Session_tables to fetch.
     */
    orderBy?: Session_tableOrderByWithRelationInput | Session_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Session_tables.
     */
    cursor?: Session_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Session_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Session_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Session_tables.
     */
    distinct?: Session_tableScalarFieldEnum | Session_tableScalarFieldEnum[]
  }

  /**
   * Session_table findFirstOrThrow
   */
  export type Session_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session_table
     */
    select?: Session_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session_table
     */
    omit?: Session_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Session_tableInclude<ExtArgs> | null
    /**
     * Filter, which Session_table to fetch.
     */
    where?: Session_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Session_tables to fetch.
     */
    orderBy?: Session_tableOrderByWithRelationInput | Session_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Session_tables.
     */
    cursor?: Session_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Session_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Session_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Session_tables.
     */
    distinct?: Session_tableScalarFieldEnum | Session_tableScalarFieldEnum[]
  }

  /**
   * Session_table findMany
   */
  export type Session_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session_table
     */
    select?: Session_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session_table
     */
    omit?: Session_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Session_tableInclude<ExtArgs> | null
    /**
     * Filter, which Session_tables to fetch.
     */
    where?: Session_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Session_tables to fetch.
     */
    orderBy?: Session_tableOrderByWithRelationInput | Session_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Session_tables.
     */
    cursor?: Session_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Session_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Session_tables.
     */
    skip?: number
    distinct?: Session_tableScalarFieldEnum | Session_tableScalarFieldEnum[]
  }

  /**
   * Session_table create
   */
  export type Session_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session_table
     */
    select?: Session_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session_table
     */
    omit?: Session_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Session_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a Session_table.
     */
    data: XOR<Session_tableCreateInput, Session_tableUncheckedCreateInput>
  }

  /**
   * Session_table createMany
   */
  export type Session_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Session_tables.
     */
    data: Session_tableCreateManyInput | Session_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session_table createManyAndReturn
   */
  export type Session_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session_table
     */
    select?: Session_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session_table
     */
    omit?: Session_tableOmit<ExtArgs> | null
    /**
     * The data used to create many Session_tables.
     */
    data: Session_tableCreateManyInput | Session_tableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Session_tableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session_table update
   */
  export type Session_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session_table
     */
    select?: Session_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session_table
     */
    omit?: Session_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Session_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a Session_table.
     */
    data: XOR<Session_tableUpdateInput, Session_tableUncheckedUpdateInput>
    /**
     * Choose, which Session_table to update.
     */
    where: Session_tableWhereUniqueInput
  }

  /**
   * Session_table updateMany
   */
  export type Session_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Session_tables.
     */
    data: XOR<Session_tableUpdateManyMutationInput, Session_tableUncheckedUpdateManyInput>
    /**
     * Filter which Session_tables to update
     */
    where?: Session_tableWhereInput
    /**
     * Limit how many Session_tables to update.
     */
    limit?: number
  }

  /**
   * Session_table updateManyAndReturn
   */
  export type Session_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session_table
     */
    select?: Session_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session_table
     */
    omit?: Session_tableOmit<ExtArgs> | null
    /**
     * The data used to update Session_tables.
     */
    data: XOR<Session_tableUpdateManyMutationInput, Session_tableUncheckedUpdateManyInput>
    /**
     * Filter which Session_tables to update
     */
    where?: Session_tableWhereInput
    /**
     * Limit how many Session_tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Session_tableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session_table upsert
   */
  export type Session_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session_table
     */
    select?: Session_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session_table
     */
    omit?: Session_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Session_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the Session_table to update in case it exists.
     */
    where: Session_tableWhereUniqueInput
    /**
     * In case the Session_table found by the `where` argument doesn't exist, create a new Session_table with this data.
     */
    create: XOR<Session_tableCreateInput, Session_tableUncheckedCreateInput>
    /**
     * In case the Session_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Session_tableUpdateInput, Session_tableUncheckedUpdateInput>
  }

  /**
   * Session_table delete
   */
  export type Session_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session_table
     */
    select?: Session_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session_table
     */
    omit?: Session_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Session_tableInclude<ExtArgs> | null
    /**
     * Filter which Session_table to delete.
     */
    where: Session_tableWhereUniqueInput
  }

  /**
   * Session_table deleteMany
   */
  export type Session_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session_tables to delete
     */
    where?: Session_tableWhereInput
    /**
     * Limit how many Session_tables to delete.
     */
    limit?: number
  }

  /**
   * Session_table without action
   */
  export type Session_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session_table
     */
    select?: Session_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session_table
     */
    omit?: Session_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Session_tableInclude<ExtArgs> | null
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

  export type User_account_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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

  export type User_account_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  export type User_account_tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }
  export type User_account_tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
     * Create many User_account_tables and returns the data saved in the database.
     * @param {User_account_tableCreateManyAndReturnArgs} args - Arguments to create many User_account_tables.
     * @example
     * // Create many User_account_tables
     * const user_account_table = await prisma.user_account_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_account_tables and only return the `id`
     * const user_account_tableWithIdOnly = await prisma.user_account_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends User_account_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, User_account_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more User_account_tables and returns the data updated in the database.
     * @param {User_account_tableUpdateManyAndReturnArgs} args - Arguments to update many User_account_tables.
     * @example
     * // Update many User_account_tables
     * const user_account_table = await prisma.user_account_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_account_tables and only return the `id`
     * const user_account_tableWithIdOnly = await prisma.user_account_table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends User_account_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, User_account_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_account_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    skipDuplicates?: boolean
  }

  /**
   * User_account_table createManyAndReturn
   */
  export type User_account_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
    /**
     * The data used to create many User_account_tables.
     */
    data: User_account_tableCreateManyInput | User_account_tableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableIncludeCreateManyAndReturn<ExtArgs> | null
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
   * User_account_table updateManyAndReturn
   */
  export type User_account_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_account_table
     */
    select?: User_account_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_account_table
     */
    omit?: User_account_tableOmit<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_account_tableIncludeUpdateManyAndReturn<ExtArgs> | null
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

  export type Verification_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    verification_identifier?: boolean
    verification_value?: boolean
    verification_expires_at?: boolean
    verification_created_at?: boolean
    verification_updated_at?: boolean
  }, ExtArgs["result"]["verification_table"]>

  export type Verification_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
     * Create many Verification_tables and returns the data saved in the database.
     * @param {Verification_tableCreateManyAndReturnArgs} args - Arguments to create many Verification_tables.
     * @example
     * // Create many Verification_tables
     * const verification_table = await prisma.verification_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verification_tables and only return the `id`
     * const verification_tableWithIdOnly = await prisma.verification_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Verification_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, Verification_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Verification_tables and returns the data updated in the database.
     * @param {Verification_tableUpdateManyAndReturnArgs} args - Arguments to update many Verification_tables.
     * @example
     * // Update many Verification_tables
     * const verification_table = await prisma.verification_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verification_tables and only return the `id`
     * const verification_tableWithIdOnly = await prisma.verification_table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Verification_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, Verification_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Verification_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    skipDuplicates?: boolean
  }

  /**
   * Verification_table createManyAndReturn
   */
  export type Verification_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
    /**
     * The data used to create many Verification_tables.
     */
    data: Verification_tableCreateManyInput | Verification_tableCreateManyInput[]
    skipDuplicates?: boolean
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
   * Verification_table updateManyAndReturn
   */
  export type Verification_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification_table
     */
    select?: Verification_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification_table
     */
    omit?: Verification_tableOmit<ExtArgs> | null
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
   * Model Organization_table
   */

  export type AggregateOrganization_table = {
    _count: Organization_tableCountAggregateOutputType | null
    _min: Organization_tableMinAggregateOutputType | null
    _max: Organization_tableMaxAggregateOutputType | null
  }

  export type Organization_tableMinAggregateOutputType = {
    id: string | null
    organization_name: string | null
    organization_slug: string | null
    organization_logo: string | null
    organization_created_at: Date | null
    organization_metadata: string | null
  }

  export type Organization_tableMaxAggregateOutputType = {
    id: string | null
    organization_name: string | null
    organization_slug: string | null
    organization_logo: string | null
    organization_created_at: Date | null
    organization_metadata: string | null
  }

  export type Organization_tableCountAggregateOutputType = {
    id: number
    organization_name: number
    organization_slug: number
    organization_logo: number
    organization_created_at: number
    organization_metadata: number
    _all: number
  }


  export type Organization_tableMinAggregateInputType = {
    id?: true
    organization_name?: true
    organization_slug?: true
    organization_logo?: true
    organization_created_at?: true
    organization_metadata?: true
  }

  export type Organization_tableMaxAggregateInputType = {
    id?: true
    organization_name?: true
    organization_slug?: true
    organization_logo?: true
    organization_created_at?: true
    organization_metadata?: true
  }

  export type Organization_tableCountAggregateInputType = {
    id?: true
    organization_name?: true
    organization_slug?: true
    organization_logo?: true
    organization_created_at?: true
    organization_metadata?: true
    _all?: true
  }

  export type Organization_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization_table to aggregate.
     */
    where?: Organization_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organization_tables to fetch.
     */
    orderBy?: Organization_tableOrderByWithRelationInput | Organization_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Organization_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organization_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organization_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organization_tables
    **/
    _count?: true | Organization_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Organization_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Organization_tableMaxAggregateInputType
  }

  export type GetOrganization_tableAggregateType<T extends Organization_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization_table[P]>
      : GetScalarType<T[P], AggregateOrganization_table[P]>
  }




  export type Organization_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Organization_tableWhereInput
    orderBy?: Organization_tableOrderByWithAggregationInput | Organization_tableOrderByWithAggregationInput[]
    by: Organization_tableScalarFieldEnum[] | Organization_tableScalarFieldEnum
    having?: Organization_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Organization_tableCountAggregateInputType | true
    _min?: Organization_tableMinAggregateInputType
    _max?: Organization_tableMaxAggregateInputType
  }

  export type Organization_tableGroupByOutputType = {
    id: string
    organization_name: string
    organization_slug: string | null
    organization_logo: string | null
    organization_created_at: Date
    organization_metadata: string | null
    _count: Organization_tableCountAggregateOutputType | null
    _min: Organization_tableMinAggregateOutputType | null
    _max: Organization_tableMaxAggregateOutputType | null
  }

  type GetOrganization_tableGroupByPayload<T extends Organization_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Organization_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Organization_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Organization_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Organization_tableGroupByOutputType[P]>
        }
      >
    >


  export type Organization_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organization_name?: boolean
    organization_slug?: boolean
    organization_logo?: boolean
    organization_created_at?: boolean
    organization_metadata?: boolean
    member_tables?: boolean | Organization_table$member_tablesArgs<ExtArgs>
    invitation_tables?: boolean | Organization_table$invitation_tablesArgs<ExtArgs>
    _count?: boolean | Organization_tableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization_table"]>

  export type Organization_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organization_name?: boolean
    organization_slug?: boolean
    organization_logo?: boolean
    organization_created_at?: boolean
    organization_metadata?: boolean
  }, ExtArgs["result"]["organization_table"]>

  export type Organization_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organization_name?: boolean
    organization_slug?: boolean
    organization_logo?: boolean
    organization_created_at?: boolean
    organization_metadata?: boolean
  }, ExtArgs["result"]["organization_table"]>

  export type Organization_tableSelectScalar = {
    id?: boolean
    organization_name?: boolean
    organization_slug?: boolean
    organization_logo?: boolean
    organization_created_at?: boolean
    organization_metadata?: boolean
  }

  export type Organization_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organization_name" | "organization_slug" | "organization_logo" | "organization_created_at" | "organization_metadata", ExtArgs["result"]["organization_table"]>
  export type Organization_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member_tables?: boolean | Organization_table$member_tablesArgs<ExtArgs>
    invitation_tables?: boolean | Organization_table$invitation_tablesArgs<ExtArgs>
    _count?: boolean | Organization_tableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Organization_tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Organization_tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Organization_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization_table"
    objects: {
      member_tables: Prisma.$Member_tablePayload<ExtArgs>[]
      invitation_tables: Prisma.$Invitation_tablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organization_name: string
      organization_slug: string | null
      organization_logo: string | null
      organization_created_at: Date
      organization_metadata: string | null
    }, ExtArgs["result"]["organization_table"]>
    composites: {}
  }

  type Organization_tableGetPayload<S extends boolean | null | undefined | Organization_tableDefaultArgs> = $Result.GetResult<Prisma.$Organization_tablePayload, S>

  type Organization_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Organization_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Organization_tableCountAggregateInputType | true
    }

  export interface Organization_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization_table'], meta: { name: 'Organization_table' } }
    /**
     * Find zero or one Organization_table that matches the filter.
     * @param {Organization_tableFindUniqueArgs} args - Arguments to find a Organization_table
     * @example
     * // Get one Organization_table
     * const organization_table = await prisma.organization_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Organization_tableFindUniqueArgs>(args: SelectSubset<T, Organization_tableFindUniqueArgs<ExtArgs>>): Prisma__Organization_tableClient<$Result.GetResult<Prisma.$Organization_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Organization_tableFindUniqueOrThrowArgs} args - Arguments to find a Organization_table
     * @example
     * // Get one Organization_table
     * const organization_table = await prisma.organization_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Organization_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, Organization_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Organization_tableClient<$Result.GetResult<Prisma.$Organization_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_tableFindFirstArgs} args - Arguments to find a Organization_table
     * @example
     * // Get one Organization_table
     * const organization_table = await prisma.organization_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Organization_tableFindFirstArgs>(args?: SelectSubset<T, Organization_tableFindFirstArgs<ExtArgs>>): Prisma__Organization_tableClient<$Result.GetResult<Prisma.$Organization_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_tableFindFirstOrThrowArgs} args - Arguments to find a Organization_table
     * @example
     * // Get one Organization_table
     * const organization_table = await prisma.organization_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Organization_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, Organization_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__Organization_tableClient<$Result.GetResult<Prisma.$Organization_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organization_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organization_tables
     * const organization_tables = await prisma.organization_table.findMany()
     * 
     * // Get first 10 Organization_tables
     * const organization_tables = await prisma.organization_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organization_tableWithIdOnly = await prisma.organization_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Organization_tableFindManyArgs>(args?: SelectSubset<T, Organization_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Organization_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization_table.
     * @param {Organization_tableCreateArgs} args - Arguments to create a Organization_table.
     * @example
     * // Create one Organization_table
     * const Organization_table = await prisma.organization_table.create({
     *   data: {
     *     // ... data to create a Organization_table
     *   }
     * })
     * 
     */
    create<T extends Organization_tableCreateArgs>(args: SelectSubset<T, Organization_tableCreateArgs<ExtArgs>>): Prisma__Organization_tableClient<$Result.GetResult<Prisma.$Organization_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organization_tables.
     * @param {Organization_tableCreateManyArgs} args - Arguments to create many Organization_tables.
     * @example
     * // Create many Organization_tables
     * const organization_table = await prisma.organization_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Organization_tableCreateManyArgs>(args?: SelectSubset<T, Organization_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organization_tables and returns the data saved in the database.
     * @param {Organization_tableCreateManyAndReturnArgs} args - Arguments to create many Organization_tables.
     * @example
     * // Create many Organization_tables
     * const organization_table = await prisma.organization_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organization_tables and only return the `id`
     * const organization_tableWithIdOnly = await prisma.organization_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Organization_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, Organization_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Organization_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization_table.
     * @param {Organization_tableDeleteArgs} args - Arguments to delete one Organization_table.
     * @example
     * // Delete one Organization_table
     * const Organization_table = await prisma.organization_table.delete({
     *   where: {
     *     // ... filter to delete one Organization_table
     *   }
     * })
     * 
     */
    delete<T extends Organization_tableDeleteArgs>(args: SelectSubset<T, Organization_tableDeleteArgs<ExtArgs>>): Prisma__Organization_tableClient<$Result.GetResult<Prisma.$Organization_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization_table.
     * @param {Organization_tableUpdateArgs} args - Arguments to update one Organization_table.
     * @example
     * // Update one Organization_table
     * const organization_table = await prisma.organization_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Organization_tableUpdateArgs>(args: SelectSubset<T, Organization_tableUpdateArgs<ExtArgs>>): Prisma__Organization_tableClient<$Result.GetResult<Prisma.$Organization_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organization_tables.
     * @param {Organization_tableDeleteManyArgs} args - Arguments to filter Organization_tables to delete.
     * @example
     * // Delete a few Organization_tables
     * const { count } = await prisma.organization_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Organization_tableDeleteManyArgs>(args?: SelectSubset<T, Organization_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organization_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organization_tables
     * const organization_table = await prisma.organization_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Organization_tableUpdateManyArgs>(args: SelectSubset<T, Organization_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organization_tables and returns the data updated in the database.
     * @param {Organization_tableUpdateManyAndReturnArgs} args - Arguments to update many Organization_tables.
     * @example
     * // Update many Organization_tables
     * const organization_table = await prisma.organization_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organization_tables and only return the `id`
     * const organization_tableWithIdOnly = await prisma.organization_table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Organization_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, Organization_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Organization_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization_table.
     * @param {Organization_tableUpsertArgs} args - Arguments to update or create a Organization_table.
     * @example
     * // Update or create a Organization_table
     * const organization_table = await prisma.organization_table.upsert({
     *   create: {
     *     // ... data to create a Organization_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization_table we want to update
     *   }
     * })
     */
    upsert<T extends Organization_tableUpsertArgs>(args: SelectSubset<T, Organization_tableUpsertArgs<ExtArgs>>): Prisma__Organization_tableClient<$Result.GetResult<Prisma.$Organization_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organization_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_tableCountArgs} args - Arguments to filter Organization_tables to count.
     * @example
     * // Count the number of Organization_tables
     * const count = await prisma.organization_table.count({
     *   where: {
     *     // ... the filter for the Organization_tables we want to count
     *   }
     * })
    **/
    count<T extends Organization_tableCountArgs>(
      args?: Subset<T, Organization_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Organization_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Organization_tableAggregateArgs>(args: Subset<T, Organization_tableAggregateArgs>): Prisma.PrismaPromise<GetOrganization_tableAggregateType<T>>

    /**
     * Group by Organization_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Organization_tableGroupByArgs} args - Group by arguments.
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
      T extends Organization_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Organization_tableGroupByArgs['orderBy'] }
        : { orderBy?: Organization_tableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Organization_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganization_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization_table model
   */
  readonly fields: Organization_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Organization_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member_tables<T extends Organization_table$member_tablesArgs<ExtArgs> = {}>(args?: Subset<T, Organization_table$member_tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Member_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitation_tables<T extends Organization_table$invitation_tablesArgs<ExtArgs> = {}>(args?: Subset<T, Organization_table$invitation_tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invitation_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Organization_table model
   */
  interface Organization_tableFieldRefs {
    readonly id: FieldRef<"Organization_table", 'String'>
    readonly organization_name: FieldRef<"Organization_table", 'String'>
    readonly organization_slug: FieldRef<"Organization_table", 'String'>
    readonly organization_logo: FieldRef<"Organization_table", 'String'>
    readonly organization_created_at: FieldRef<"Organization_table", 'DateTime'>
    readonly organization_metadata: FieldRef<"Organization_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Organization_table findUnique
   */
  export type Organization_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_table
     */
    select?: Organization_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_table
     */
    omit?: Organization_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Organization_tableInclude<ExtArgs> | null
    /**
     * Filter, which Organization_table to fetch.
     */
    where: Organization_tableWhereUniqueInput
  }

  /**
   * Organization_table findUniqueOrThrow
   */
  export type Organization_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_table
     */
    select?: Organization_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_table
     */
    omit?: Organization_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Organization_tableInclude<ExtArgs> | null
    /**
     * Filter, which Organization_table to fetch.
     */
    where: Organization_tableWhereUniqueInput
  }

  /**
   * Organization_table findFirst
   */
  export type Organization_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_table
     */
    select?: Organization_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_table
     */
    omit?: Organization_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Organization_tableInclude<ExtArgs> | null
    /**
     * Filter, which Organization_table to fetch.
     */
    where?: Organization_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organization_tables to fetch.
     */
    orderBy?: Organization_tableOrderByWithRelationInput | Organization_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organization_tables.
     */
    cursor?: Organization_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organization_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organization_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organization_tables.
     */
    distinct?: Organization_tableScalarFieldEnum | Organization_tableScalarFieldEnum[]
  }

  /**
   * Organization_table findFirstOrThrow
   */
  export type Organization_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_table
     */
    select?: Organization_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_table
     */
    omit?: Organization_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Organization_tableInclude<ExtArgs> | null
    /**
     * Filter, which Organization_table to fetch.
     */
    where?: Organization_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organization_tables to fetch.
     */
    orderBy?: Organization_tableOrderByWithRelationInput | Organization_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organization_tables.
     */
    cursor?: Organization_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organization_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organization_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organization_tables.
     */
    distinct?: Organization_tableScalarFieldEnum | Organization_tableScalarFieldEnum[]
  }

  /**
   * Organization_table findMany
   */
  export type Organization_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_table
     */
    select?: Organization_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_table
     */
    omit?: Organization_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Organization_tableInclude<ExtArgs> | null
    /**
     * Filter, which Organization_tables to fetch.
     */
    where?: Organization_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organization_tables to fetch.
     */
    orderBy?: Organization_tableOrderByWithRelationInput | Organization_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organization_tables.
     */
    cursor?: Organization_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organization_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organization_tables.
     */
    skip?: number
    distinct?: Organization_tableScalarFieldEnum | Organization_tableScalarFieldEnum[]
  }

  /**
   * Organization_table create
   */
  export type Organization_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_table
     */
    select?: Organization_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_table
     */
    omit?: Organization_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Organization_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization_table.
     */
    data: XOR<Organization_tableCreateInput, Organization_tableUncheckedCreateInput>
  }

  /**
   * Organization_table createMany
   */
  export type Organization_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organization_tables.
     */
    data: Organization_tableCreateManyInput | Organization_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization_table createManyAndReturn
   */
  export type Organization_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_table
     */
    select?: Organization_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_table
     */
    omit?: Organization_tableOmit<ExtArgs> | null
    /**
     * The data used to create many Organization_tables.
     */
    data: Organization_tableCreateManyInput | Organization_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization_table update
   */
  export type Organization_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_table
     */
    select?: Organization_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_table
     */
    omit?: Organization_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Organization_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization_table.
     */
    data: XOR<Organization_tableUpdateInput, Organization_tableUncheckedUpdateInput>
    /**
     * Choose, which Organization_table to update.
     */
    where: Organization_tableWhereUniqueInput
  }

  /**
   * Organization_table updateMany
   */
  export type Organization_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organization_tables.
     */
    data: XOR<Organization_tableUpdateManyMutationInput, Organization_tableUncheckedUpdateManyInput>
    /**
     * Filter which Organization_tables to update
     */
    where?: Organization_tableWhereInput
    /**
     * Limit how many Organization_tables to update.
     */
    limit?: number
  }

  /**
   * Organization_table updateManyAndReturn
   */
  export type Organization_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_table
     */
    select?: Organization_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_table
     */
    omit?: Organization_tableOmit<ExtArgs> | null
    /**
     * The data used to update Organization_tables.
     */
    data: XOR<Organization_tableUpdateManyMutationInput, Organization_tableUncheckedUpdateManyInput>
    /**
     * Filter which Organization_tables to update
     */
    where?: Organization_tableWhereInput
    /**
     * Limit how many Organization_tables to update.
     */
    limit?: number
  }

  /**
   * Organization_table upsert
   */
  export type Organization_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_table
     */
    select?: Organization_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_table
     */
    omit?: Organization_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Organization_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization_table to update in case it exists.
     */
    where: Organization_tableWhereUniqueInput
    /**
     * In case the Organization_table found by the `where` argument doesn't exist, create a new Organization_table with this data.
     */
    create: XOR<Organization_tableCreateInput, Organization_tableUncheckedCreateInput>
    /**
     * In case the Organization_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Organization_tableUpdateInput, Organization_tableUncheckedUpdateInput>
  }

  /**
   * Organization_table delete
   */
  export type Organization_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_table
     */
    select?: Organization_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_table
     */
    omit?: Organization_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Organization_tableInclude<ExtArgs> | null
    /**
     * Filter which Organization_table to delete.
     */
    where: Organization_tableWhereUniqueInput
  }

  /**
   * Organization_table deleteMany
   */
  export type Organization_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization_tables to delete
     */
    where?: Organization_tableWhereInput
    /**
     * Limit how many Organization_tables to delete.
     */
    limit?: number
  }

  /**
   * Organization_table.member_tables
   */
  export type Organization_table$member_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_table
     */
    select?: Member_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_table
     */
    omit?: Member_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_tableInclude<ExtArgs> | null
    where?: Member_tableWhereInput
    orderBy?: Member_tableOrderByWithRelationInput | Member_tableOrderByWithRelationInput[]
    cursor?: Member_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Member_tableScalarFieldEnum | Member_tableScalarFieldEnum[]
  }

  /**
   * Organization_table.invitation_tables
   */
  export type Organization_table$invitation_tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation_table
     */
    select?: Invitation_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation_table
     */
    omit?: Invitation_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invitation_tableInclude<ExtArgs> | null
    where?: Invitation_tableWhereInput
    orderBy?: Invitation_tableOrderByWithRelationInput | Invitation_tableOrderByWithRelationInput[]
    cursor?: Invitation_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Invitation_tableScalarFieldEnum | Invitation_tableScalarFieldEnum[]
  }

  /**
   * Organization_table without action
   */
  export type Organization_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization_table
     */
    select?: Organization_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization_table
     */
    omit?: Organization_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Organization_tableInclude<ExtArgs> | null
  }


  /**
   * Model Member_table
   */

  export type AggregateMember_table = {
    _count: Member_tableCountAggregateOutputType | null
    _min: Member_tableMinAggregateOutputType | null
    _max: Member_tableMaxAggregateOutputType | null
  }

  export type Member_tableMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    userId: string | null
    member_role: string | null
    member_created_at: Date | null
    member_is_onboarded: boolean | null
    member_position: string | null
    member_bio: string | null
  }

  export type Member_tableMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    userId: string | null
    member_role: string | null
    member_created_at: Date | null
    member_is_onboarded: boolean | null
    member_position: string | null
    member_bio: string | null
  }

  export type Member_tableCountAggregateOutputType = {
    id: number
    organizationId: number
    userId: number
    member_role: number
    member_created_at: number
    member_is_onboarded: number
    member_position: number
    member_bio: number
    _all: number
  }


  export type Member_tableMinAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
    member_role?: true
    member_created_at?: true
    member_is_onboarded?: true
    member_position?: true
    member_bio?: true
  }

  export type Member_tableMaxAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
    member_role?: true
    member_created_at?: true
    member_is_onboarded?: true
    member_position?: true
    member_bio?: true
  }

  export type Member_tableCountAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
    member_role?: true
    member_created_at?: true
    member_is_onboarded?: true
    member_position?: true
    member_bio?: true
    _all?: true
  }

  export type Member_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member_table to aggregate.
     */
    where?: Member_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Member_tables to fetch.
     */
    orderBy?: Member_tableOrderByWithRelationInput | Member_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Member_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Member_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Member_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Member_tables
    **/
    _count?: true | Member_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Member_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Member_tableMaxAggregateInputType
  }

  export type GetMember_tableAggregateType<T extends Member_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateMember_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember_table[P]>
      : GetScalarType<T[P], AggregateMember_table[P]>
  }




  export type Member_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Member_tableWhereInput
    orderBy?: Member_tableOrderByWithAggregationInput | Member_tableOrderByWithAggregationInput[]
    by: Member_tableScalarFieldEnum[] | Member_tableScalarFieldEnum
    having?: Member_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Member_tableCountAggregateInputType | true
    _min?: Member_tableMinAggregateInputType
    _max?: Member_tableMaxAggregateInputType
  }

  export type Member_tableGroupByOutputType = {
    id: string
    organizationId: string
    userId: string
    member_role: string
    member_created_at: Date
    member_is_onboarded: boolean | null
    member_position: string | null
    member_bio: string | null
    _count: Member_tableCountAggregateOutputType | null
    _min: Member_tableMinAggregateOutputType | null
    _max: Member_tableMaxAggregateOutputType | null
  }

  type GetMember_tableGroupByPayload<T extends Member_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Member_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Member_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Member_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Member_tableGroupByOutputType[P]>
        }
      >
    >


  export type Member_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    member_role?: boolean
    member_created_at?: boolean
    member_is_onboarded?: boolean
    member_position?: boolean
    member_bio?: boolean
    organization_table?: boolean | Organization_tableDefaultArgs<ExtArgs>
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
    company_log_table?: boolean | Member_table$company_log_tableArgs<ExtArgs>
    _count?: boolean | Member_tableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member_table"]>

  export type Member_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    member_role?: boolean
    member_created_at?: boolean
    member_is_onboarded?: boolean
    member_position?: boolean
    member_bio?: boolean
    organization_table?: boolean | Organization_tableDefaultArgs<ExtArgs>
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member_table"]>

  export type Member_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    member_role?: boolean
    member_created_at?: boolean
    member_is_onboarded?: boolean
    member_position?: boolean
    member_bio?: boolean
    organization_table?: boolean | Organization_tableDefaultArgs<ExtArgs>
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member_table"]>

  export type Member_tableSelectScalar = {
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    member_role?: boolean
    member_created_at?: boolean
    member_is_onboarded?: boolean
    member_position?: boolean
    member_bio?: boolean
  }

  export type Member_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "userId" | "member_role" | "member_created_at" | "member_is_onboarded" | "member_position" | "member_bio", ExtArgs["result"]["member_table"]>
  export type Member_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization_table?: boolean | Organization_tableDefaultArgs<ExtArgs>
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
    company_log_table?: boolean | Member_table$company_log_tableArgs<ExtArgs>
    _count?: boolean | Member_tableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Member_tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization_table?: boolean | Organization_tableDefaultArgs<ExtArgs>
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }
  export type Member_tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization_table?: boolean | Organization_tableDefaultArgs<ExtArgs>
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }

  export type $Member_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member_table"
    objects: {
      organization_table: Prisma.$Organization_tablePayload<ExtArgs>
      user_table: Prisma.$User_tablePayload<ExtArgs>
      company_log_table: Prisma.$company_log_tablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      userId: string
      member_role: string
      member_created_at: Date
      member_is_onboarded: boolean | null
      member_position: string | null
      member_bio: string | null
    }, ExtArgs["result"]["member_table"]>
    composites: {}
  }

  type Member_tableGetPayload<S extends boolean | null | undefined | Member_tableDefaultArgs> = $Result.GetResult<Prisma.$Member_tablePayload, S>

  type Member_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Member_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Member_tableCountAggregateInputType | true
    }

  export interface Member_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member_table'], meta: { name: 'Member_table' } }
    /**
     * Find zero or one Member_table that matches the filter.
     * @param {Member_tableFindUniqueArgs} args - Arguments to find a Member_table
     * @example
     * // Get one Member_table
     * const member_table = await prisma.member_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Member_tableFindUniqueArgs>(args: SelectSubset<T, Member_tableFindUniqueArgs<ExtArgs>>): Prisma__Member_tableClient<$Result.GetResult<Prisma.$Member_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Member_tableFindUniqueOrThrowArgs} args - Arguments to find a Member_table
     * @example
     * // Get one Member_table
     * const member_table = await prisma.member_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Member_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, Member_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Member_tableClient<$Result.GetResult<Prisma.$Member_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_tableFindFirstArgs} args - Arguments to find a Member_table
     * @example
     * // Get one Member_table
     * const member_table = await prisma.member_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Member_tableFindFirstArgs>(args?: SelectSubset<T, Member_tableFindFirstArgs<ExtArgs>>): Prisma__Member_tableClient<$Result.GetResult<Prisma.$Member_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_tableFindFirstOrThrowArgs} args - Arguments to find a Member_table
     * @example
     * // Get one Member_table
     * const member_table = await prisma.member_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Member_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, Member_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__Member_tableClient<$Result.GetResult<Prisma.$Member_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Member_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Member_tables
     * const member_tables = await prisma.member_table.findMany()
     * 
     * // Get first 10 Member_tables
     * const member_tables = await prisma.member_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const member_tableWithIdOnly = await prisma.member_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Member_tableFindManyArgs>(args?: SelectSubset<T, Member_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Member_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member_table.
     * @param {Member_tableCreateArgs} args - Arguments to create a Member_table.
     * @example
     * // Create one Member_table
     * const Member_table = await prisma.member_table.create({
     *   data: {
     *     // ... data to create a Member_table
     *   }
     * })
     * 
     */
    create<T extends Member_tableCreateArgs>(args: SelectSubset<T, Member_tableCreateArgs<ExtArgs>>): Prisma__Member_tableClient<$Result.GetResult<Prisma.$Member_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Member_tables.
     * @param {Member_tableCreateManyArgs} args - Arguments to create many Member_tables.
     * @example
     * // Create many Member_tables
     * const member_table = await prisma.member_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Member_tableCreateManyArgs>(args?: SelectSubset<T, Member_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Member_tables and returns the data saved in the database.
     * @param {Member_tableCreateManyAndReturnArgs} args - Arguments to create many Member_tables.
     * @example
     * // Create many Member_tables
     * const member_table = await prisma.member_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Member_tables and only return the `id`
     * const member_tableWithIdOnly = await prisma.member_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Member_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, Member_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Member_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Member_table.
     * @param {Member_tableDeleteArgs} args - Arguments to delete one Member_table.
     * @example
     * // Delete one Member_table
     * const Member_table = await prisma.member_table.delete({
     *   where: {
     *     // ... filter to delete one Member_table
     *   }
     * })
     * 
     */
    delete<T extends Member_tableDeleteArgs>(args: SelectSubset<T, Member_tableDeleteArgs<ExtArgs>>): Prisma__Member_tableClient<$Result.GetResult<Prisma.$Member_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member_table.
     * @param {Member_tableUpdateArgs} args - Arguments to update one Member_table.
     * @example
     * // Update one Member_table
     * const member_table = await prisma.member_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Member_tableUpdateArgs>(args: SelectSubset<T, Member_tableUpdateArgs<ExtArgs>>): Prisma__Member_tableClient<$Result.GetResult<Prisma.$Member_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Member_tables.
     * @param {Member_tableDeleteManyArgs} args - Arguments to filter Member_tables to delete.
     * @example
     * // Delete a few Member_tables
     * const { count } = await prisma.member_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Member_tableDeleteManyArgs>(args?: SelectSubset<T, Member_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Member_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Member_tables
     * const member_table = await prisma.member_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Member_tableUpdateManyArgs>(args: SelectSubset<T, Member_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Member_tables and returns the data updated in the database.
     * @param {Member_tableUpdateManyAndReturnArgs} args - Arguments to update many Member_tables.
     * @example
     * // Update many Member_tables
     * const member_table = await prisma.member_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Member_tables and only return the `id`
     * const member_tableWithIdOnly = await prisma.member_table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Member_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, Member_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Member_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Member_table.
     * @param {Member_tableUpsertArgs} args - Arguments to update or create a Member_table.
     * @example
     * // Update or create a Member_table
     * const member_table = await prisma.member_table.upsert({
     *   create: {
     *     // ... data to create a Member_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member_table we want to update
     *   }
     * })
     */
    upsert<T extends Member_tableUpsertArgs>(args: SelectSubset<T, Member_tableUpsertArgs<ExtArgs>>): Prisma__Member_tableClient<$Result.GetResult<Prisma.$Member_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Member_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_tableCountArgs} args - Arguments to filter Member_tables to count.
     * @example
     * // Count the number of Member_tables
     * const count = await prisma.member_table.count({
     *   where: {
     *     // ... the filter for the Member_tables we want to count
     *   }
     * })
    **/
    count<T extends Member_tableCountArgs>(
      args?: Subset<T, Member_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Member_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Member_tableAggregateArgs>(args: Subset<T, Member_tableAggregateArgs>): Prisma.PrismaPromise<GetMember_tableAggregateType<T>>

    /**
     * Group by Member_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Member_tableGroupByArgs} args - Group by arguments.
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
      T extends Member_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Member_tableGroupByArgs['orderBy'] }
        : { orderBy?: Member_tableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Member_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMember_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member_table model
   */
  readonly fields: Member_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Member_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization_table<T extends Organization_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Organization_tableDefaultArgs<ExtArgs>>): Prisma__Organization_tableClient<$Result.GetResult<Prisma.$Organization_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_table<T extends User_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, User_tableDefaultArgs<ExtArgs>>): Prisma__User_tableClient<$Result.GetResult<Prisma.$User_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company_log_table<T extends Member_table$company_log_tableArgs<ExtArgs> = {}>(args?: Subset<T, Member_table$company_log_tableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$company_log_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Member_table model
   */
  interface Member_tableFieldRefs {
    readonly id: FieldRef<"Member_table", 'String'>
    readonly organizationId: FieldRef<"Member_table", 'String'>
    readonly userId: FieldRef<"Member_table", 'String'>
    readonly member_role: FieldRef<"Member_table", 'String'>
    readonly member_created_at: FieldRef<"Member_table", 'DateTime'>
    readonly member_is_onboarded: FieldRef<"Member_table", 'Boolean'>
    readonly member_position: FieldRef<"Member_table", 'String'>
    readonly member_bio: FieldRef<"Member_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Member_table findUnique
   */
  export type Member_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_table
     */
    select?: Member_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_table
     */
    omit?: Member_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_tableInclude<ExtArgs> | null
    /**
     * Filter, which Member_table to fetch.
     */
    where: Member_tableWhereUniqueInput
  }

  /**
   * Member_table findUniqueOrThrow
   */
  export type Member_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_table
     */
    select?: Member_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_table
     */
    omit?: Member_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_tableInclude<ExtArgs> | null
    /**
     * Filter, which Member_table to fetch.
     */
    where: Member_tableWhereUniqueInput
  }

  /**
   * Member_table findFirst
   */
  export type Member_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_table
     */
    select?: Member_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_table
     */
    omit?: Member_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_tableInclude<ExtArgs> | null
    /**
     * Filter, which Member_table to fetch.
     */
    where?: Member_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Member_tables to fetch.
     */
    orderBy?: Member_tableOrderByWithRelationInput | Member_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Member_tables.
     */
    cursor?: Member_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Member_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Member_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Member_tables.
     */
    distinct?: Member_tableScalarFieldEnum | Member_tableScalarFieldEnum[]
  }

  /**
   * Member_table findFirstOrThrow
   */
  export type Member_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_table
     */
    select?: Member_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_table
     */
    omit?: Member_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_tableInclude<ExtArgs> | null
    /**
     * Filter, which Member_table to fetch.
     */
    where?: Member_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Member_tables to fetch.
     */
    orderBy?: Member_tableOrderByWithRelationInput | Member_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Member_tables.
     */
    cursor?: Member_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Member_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Member_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Member_tables.
     */
    distinct?: Member_tableScalarFieldEnum | Member_tableScalarFieldEnum[]
  }

  /**
   * Member_table findMany
   */
  export type Member_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_table
     */
    select?: Member_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_table
     */
    omit?: Member_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_tableInclude<ExtArgs> | null
    /**
     * Filter, which Member_tables to fetch.
     */
    where?: Member_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Member_tables to fetch.
     */
    orderBy?: Member_tableOrderByWithRelationInput | Member_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Member_tables.
     */
    cursor?: Member_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Member_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Member_tables.
     */
    skip?: number
    distinct?: Member_tableScalarFieldEnum | Member_tableScalarFieldEnum[]
  }

  /**
   * Member_table create
   */
  export type Member_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_table
     */
    select?: Member_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_table
     */
    omit?: Member_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a Member_table.
     */
    data: XOR<Member_tableCreateInput, Member_tableUncheckedCreateInput>
  }

  /**
   * Member_table createMany
   */
  export type Member_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Member_tables.
     */
    data: Member_tableCreateManyInput | Member_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member_table createManyAndReturn
   */
  export type Member_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_table
     */
    select?: Member_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member_table
     */
    omit?: Member_tableOmit<ExtArgs> | null
    /**
     * The data used to create many Member_tables.
     */
    data: Member_tableCreateManyInput | Member_tableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_tableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member_table update
   */
  export type Member_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_table
     */
    select?: Member_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_table
     */
    omit?: Member_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a Member_table.
     */
    data: XOR<Member_tableUpdateInput, Member_tableUncheckedUpdateInput>
    /**
     * Choose, which Member_table to update.
     */
    where: Member_tableWhereUniqueInput
  }

  /**
   * Member_table updateMany
   */
  export type Member_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Member_tables.
     */
    data: XOR<Member_tableUpdateManyMutationInput, Member_tableUncheckedUpdateManyInput>
    /**
     * Filter which Member_tables to update
     */
    where?: Member_tableWhereInput
    /**
     * Limit how many Member_tables to update.
     */
    limit?: number
  }

  /**
   * Member_table updateManyAndReturn
   */
  export type Member_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_table
     */
    select?: Member_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member_table
     */
    omit?: Member_tableOmit<ExtArgs> | null
    /**
     * The data used to update Member_tables.
     */
    data: XOR<Member_tableUpdateManyMutationInput, Member_tableUncheckedUpdateManyInput>
    /**
     * Filter which Member_tables to update
     */
    where?: Member_tableWhereInput
    /**
     * Limit how many Member_tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_tableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member_table upsert
   */
  export type Member_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_table
     */
    select?: Member_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_table
     */
    omit?: Member_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the Member_table to update in case it exists.
     */
    where: Member_tableWhereUniqueInput
    /**
     * In case the Member_table found by the `where` argument doesn't exist, create a new Member_table with this data.
     */
    create: XOR<Member_tableCreateInput, Member_tableUncheckedCreateInput>
    /**
     * In case the Member_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Member_tableUpdateInput, Member_tableUncheckedUpdateInput>
  }

  /**
   * Member_table delete
   */
  export type Member_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_table
     */
    select?: Member_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_table
     */
    omit?: Member_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_tableInclude<ExtArgs> | null
    /**
     * Filter which Member_table to delete.
     */
    where: Member_tableWhereUniqueInput
  }

  /**
   * Member_table deleteMany
   */
  export type Member_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member_tables to delete
     */
    where?: Member_tableWhereInput
    /**
     * Limit how many Member_tables to delete.
     */
    limit?: number
  }

  /**
   * Member_table.company_log_table
   */
  export type Member_table$company_log_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_table
     */
    select?: company_log_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_table
     */
    omit?: company_log_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_tableInclude<ExtArgs> | null
    where?: company_log_tableWhereInput
    orderBy?: company_log_tableOrderByWithRelationInput | company_log_tableOrderByWithRelationInput[]
    cursor?: company_log_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Company_log_tableScalarFieldEnum | Company_log_tableScalarFieldEnum[]
  }

  /**
   * Member_table without action
   */
  export type Member_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member_table
     */
    select?: Member_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member_table
     */
    omit?: Member_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Member_tableInclude<ExtArgs> | null
  }


  /**
   * Model Invitation_table
   */

  export type AggregateInvitation_table = {
    _count: Invitation_tableCountAggregateOutputType | null
    _min: Invitation_tableMinAggregateOutputType | null
    _max: Invitation_tableMaxAggregateOutputType | null
  }

  export type Invitation_tableMinAggregateOutputType = {
    id: string | null
    organization_id: string | null
    invitation_email: string | null
    invitation_role: string | null
    invitation_status: string | null
    invitation_expires_at: Date | null
    invitation_inviter_id: string | null
  }

  export type Invitation_tableMaxAggregateOutputType = {
    id: string | null
    organization_id: string | null
    invitation_email: string | null
    invitation_role: string | null
    invitation_status: string | null
    invitation_expires_at: Date | null
    invitation_inviter_id: string | null
  }

  export type Invitation_tableCountAggregateOutputType = {
    id: number
    organization_id: number
    invitation_email: number
    invitation_role: number
    invitation_status: number
    invitation_expires_at: number
    invitation_inviter_id: number
    _all: number
  }


  export type Invitation_tableMinAggregateInputType = {
    id?: true
    organization_id?: true
    invitation_email?: true
    invitation_role?: true
    invitation_status?: true
    invitation_expires_at?: true
    invitation_inviter_id?: true
  }

  export type Invitation_tableMaxAggregateInputType = {
    id?: true
    organization_id?: true
    invitation_email?: true
    invitation_role?: true
    invitation_status?: true
    invitation_expires_at?: true
    invitation_inviter_id?: true
  }

  export type Invitation_tableCountAggregateInputType = {
    id?: true
    organization_id?: true
    invitation_email?: true
    invitation_role?: true
    invitation_status?: true
    invitation_expires_at?: true
    invitation_inviter_id?: true
    _all?: true
  }

  export type Invitation_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitation_table to aggregate.
     */
    where?: Invitation_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitation_tables to fetch.
     */
    orderBy?: Invitation_tableOrderByWithRelationInput | Invitation_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Invitation_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitation_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitation_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invitation_tables
    **/
    _count?: true | Invitation_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Invitation_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Invitation_tableMaxAggregateInputType
  }

  export type GetInvitation_tableAggregateType<T extends Invitation_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitation_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation_table[P]>
      : GetScalarType<T[P], AggregateInvitation_table[P]>
  }




  export type Invitation_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Invitation_tableWhereInput
    orderBy?: Invitation_tableOrderByWithAggregationInput | Invitation_tableOrderByWithAggregationInput[]
    by: Invitation_tableScalarFieldEnum[] | Invitation_tableScalarFieldEnum
    having?: Invitation_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Invitation_tableCountAggregateInputType | true
    _min?: Invitation_tableMinAggregateInputType
    _max?: Invitation_tableMaxAggregateInputType
  }

  export type Invitation_tableGroupByOutputType = {
    id: string
    organization_id: string
    invitation_email: string
    invitation_role: string | null
    invitation_status: string
    invitation_expires_at: Date
    invitation_inviter_id: string
    _count: Invitation_tableCountAggregateOutputType | null
    _min: Invitation_tableMinAggregateOutputType | null
    _max: Invitation_tableMaxAggregateOutputType | null
  }

  type GetInvitation_tableGroupByPayload<T extends Invitation_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Invitation_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Invitation_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Invitation_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Invitation_tableGroupByOutputType[P]>
        }
      >
    >


  export type Invitation_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organization_id?: boolean
    invitation_email?: boolean
    invitation_role?: boolean
    invitation_status?: boolean
    invitation_expires_at?: boolean
    invitation_inviter_id?: boolean
    organization_table?: boolean | Organization_tableDefaultArgs<ExtArgs>
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation_table"]>

  export type Invitation_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organization_id?: boolean
    invitation_email?: boolean
    invitation_role?: boolean
    invitation_status?: boolean
    invitation_expires_at?: boolean
    invitation_inviter_id?: boolean
    organization_table?: boolean | Organization_tableDefaultArgs<ExtArgs>
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation_table"]>

  export type Invitation_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organization_id?: boolean
    invitation_email?: boolean
    invitation_role?: boolean
    invitation_status?: boolean
    invitation_expires_at?: boolean
    invitation_inviter_id?: boolean
    organization_table?: boolean | Organization_tableDefaultArgs<ExtArgs>
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation_table"]>

  export type Invitation_tableSelectScalar = {
    id?: boolean
    organization_id?: boolean
    invitation_email?: boolean
    invitation_role?: boolean
    invitation_status?: boolean
    invitation_expires_at?: boolean
    invitation_inviter_id?: boolean
  }

  export type Invitation_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organization_id" | "invitation_email" | "invitation_role" | "invitation_status" | "invitation_expires_at" | "invitation_inviter_id", ExtArgs["result"]["invitation_table"]>
  export type Invitation_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization_table?: boolean | Organization_tableDefaultArgs<ExtArgs>
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }
  export type Invitation_tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization_table?: boolean | Organization_tableDefaultArgs<ExtArgs>
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }
  export type Invitation_tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization_table?: boolean | Organization_tableDefaultArgs<ExtArgs>
    user_table?: boolean | User_tableDefaultArgs<ExtArgs>
  }

  export type $Invitation_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invitation_table"
    objects: {
      organization_table: Prisma.$Organization_tablePayload<ExtArgs>
      user_table: Prisma.$User_tablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organization_id: string
      invitation_email: string
      invitation_role: string | null
      invitation_status: string
      invitation_expires_at: Date
      invitation_inviter_id: string
    }, ExtArgs["result"]["invitation_table"]>
    composites: {}
  }

  type Invitation_tableGetPayload<S extends boolean | null | undefined | Invitation_tableDefaultArgs> = $Result.GetResult<Prisma.$Invitation_tablePayload, S>

  type Invitation_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Invitation_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Invitation_tableCountAggregateInputType | true
    }

  export interface Invitation_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invitation_table'], meta: { name: 'Invitation_table' } }
    /**
     * Find zero or one Invitation_table that matches the filter.
     * @param {Invitation_tableFindUniqueArgs} args - Arguments to find a Invitation_table
     * @example
     * // Get one Invitation_table
     * const invitation_table = await prisma.invitation_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Invitation_tableFindUniqueArgs>(args: SelectSubset<T, Invitation_tableFindUniqueArgs<ExtArgs>>): Prisma__Invitation_tableClient<$Result.GetResult<Prisma.$Invitation_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invitation_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Invitation_tableFindUniqueOrThrowArgs} args - Arguments to find a Invitation_table
     * @example
     * // Get one Invitation_table
     * const invitation_table = await prisma.invitation_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Invitation_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, Invitation_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Invitation_tableClient<$Result.GetResult<Prisma.$Invitation_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invitation_tableFindFirstArgs} args - Arguments to find a Invitation_table
     * @example
     * // Get one Invitation_table
     * const invitation_table = await prisma.invitation_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Invitation_tableFindFirstArgs>(args?: SelectSubset<T, Invitation_tableFindFirstArgs<ExtArgs>>): Prisma__Invitation_tableClient<$Result.GetResult<Prisma.$Invitation_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invitation_tableFindFirstOrThrowArgs} args - Arguments to find a Invitation_table
     * @example
     * // Get one Invitation_table
     * const invitation_table = await prisma.invitation_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Invitation_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, Invitation_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__Invitation_tableClient<$Result.GetResult<Prisma.$Invitation_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invitation_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invitation_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitation_tables
     * const invitation_tables = await prisma.invitation_table.findMany()
     * 
     * // Get first 10 Invitation_tables
     * const invitation_tables = await prisma.invitation_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitation_tableWithIdOnly = await prisma.invitation_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Invitation_tableFindManyArgs>(args?: SelectSubset<T, Invitation_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invitation_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invitation_table.
     * @param {Invitation_tableCreateArgs} args - Arguments to create a Invitation_table.
     * @example
     * // Create one Invitation_table
     * const Invitation_table = await prisma.invitation_table.create({
     *   data: {
     *     // ... data to create a Invitation_table
     *   }
     * })
     * 
     */
    create<T extends Invitation_tableCreateArgs>(args: SelectSubset<T, Invitation_tableCreateArgs<ExtArgs>>): Prisma__Invitation_tableClient<$Result.GetResult<Prisma.$Invitation_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invitation_tables.
     * @param {Invitation_tableCreateManyArgs} args - Arguments to create many Invitation_tables.
     * @example
     * // Create many Invitation_tables
     * const invitation_table = await prisma.invitation_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Invitation_tableCreateManyArgs>(args?: SelectSubset<T, Invitation_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invitation_tables and returns the data saved in the database.
     * @param {Invitation_tableCreateManyAndReturnArgs} args - Arguments to create many Invitation_tables.
     * @example
     * // Create many Invitation_tables
     * const invitation_table = await prisma.invitation_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invitation_tables and only return the `id`
     * const invitation_tableWithIdOnly = await prisma.invitation_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Invitation_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, Invitation_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invitation_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invitation_table.
     * @param {Invitation_tableDeleteArgs} args - Arguments to delete one Invitation_table.
     * @example
     * // Delete one Invitation_table
     * const Invitation_table = await prisma.invitation_table.delete({
     *   where: {
     *     // ... filter to delete one Invitation_table
     *   }
     * })
     * 
     */
    delete<T extends Invitation_tableDeleteArgs>(args: SelectSubset<T, Invitation_tableDeleteArgs<ExtArgs>>): Prisma__Invitation_tableClient<$Result.GetResult<Prisma.$Invitation_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invitation_table.
     * @param {Invitation_tableUpdateArgs} args - Arguments to update one Invitation_table.
     * @example
     * // Update one Invitation_table
     * const invitation_table = await prisma.invitation_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Invitation_tableUpdateArgs>(args: SelectSubset<T, Invitation_tableUpdateArgs<ExtArgs>>): Prisma__Invitation_tableClient<$Result.GetResult<Prisma.$Invitation_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invitation_tables.
     * @param {Invitation_tableDeleteManyArgs} args - Arguments to filter Invitation_tables to delete.
     * @example
     * // Delete a few Invitation_tables
     * const { count } = await prisma.invitation_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Invitation_tableDeleteManyArgs>(args?: SelectSubset<T, Invitation_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitation_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invitation_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitation_tables
     * const invitation_table = await prisma.invitation_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Invitation_tableUpdateManyArgs>(args: SelectSubset<T, Invitation_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitation_tables and returns the data updated in the database.
     * @param {Invitation_tableUpdateManyAndReturnArgs} args - Arguments to update many Invitation_tables.
     * @example
     * // Update many Invitation_tables
     * const invitation_table = await prisma.invitation_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invitation_tables and only return the `id`
     * const invitation_tableWithIdOnly = await prisma.invitation_table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Invitation_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, Invitation_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Invitation_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invitation_table.
     * @param {Invitation_tableUpsertArgs} args - Arguments to update or create a Invitation_table.
     * @example
     * // Update or create a Invitation_table
     * const invitation_table = await prisma.invitation_table.upsert({
     *   create: {
     *     // ... data to create a Invitation_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation_table we want to update
     *   }
     * })
     */
    upsert<T extends Invitation_tableUpsertArgs>(args: SelectSubset<T, Invitation_tableUpsertArgs<ExtArgs>>): Prisma__Invitation_tableClient<$Result.GetResult<Prisma.$Invitation_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invitation_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invitation_tableCountArgs} args - Arguments to filter Invitation_tables to count.
     * @example
     * // Count the number of Invitation_tables
     * const count = await prisma.invitation_table.count({
     *   where: {
     *     // ... the filter for the Invitation_tables we want to count
     *   }
     * })
    **/
    count<T extends Invitation_tableCountArgs>(
      args?: Subset<T, Invitation_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Invitation_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitation_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invitation_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Invitation_tableAggregateArgs>(args: Subset<T, Invitation_tableAggregateArgs>): Prisma.PrismaPromise<GetInvitation_tableAggregateType<T>>

    /**
     * Group by Invitation_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invitation_tableGroupByArgs} args - Group by arguments.
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
      T extends Invitation_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Invitation_tableGroupByArgs['orderBy'] }
        : { orderBy?: Invitation_tableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Invitation_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitation_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invitation_table model
   */
  readonly fields: Invitation_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitation_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Invitation_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization_table<T extends Organization_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Organization_tableDefaultArgs<ExtArgs>>): Prisma__Organization_tableClient<$Result.GetResult<Prisma.$Organization_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Invitation_table model
   */
  interface Invitation_tableFieldRefs {
    readonly id: FieldRef<"Invitation_table", 'String'>
    readonly organization_id: FieldRef<"Invitation_table", 'String'>
    readonly invitation_email: FieldRef<"Invitation_table", 'String'>
    readonly invitation_role: FieldRef<"Invitation_table", 'String'>
    readonly invitation_status: FieldRef<"Invitation_table", 'String'>
    readonly invitation_expires_at: FieldRef<"Invitation_table", 'DateTime'>
    readonly invitation_inviter_id: FieldRef<"Invitation_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Invitation_table findUnique
   */
  export type Invitation_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation_table
     */
    select?: Invitation_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation_table
     */
    omit?: Invitation_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invitation_tableInclude<ExtArgs> | null
    /**
     * Filter, which Invitation_table to fetch.
     */
    where: Invitation_tableWhereUniqueInput
  }

  /**
   * Invitation_table findUniqueOrThrow
   */
  export type Invitation_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation_table
     */
    select?: Invitation_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation_table
     */
    omit?: Invitation_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invitation_tableInclude<ExtArgs> | null
    /**
     * Filter, which Invitation_table to fetch.
     */
    where: Invitation_tableWhereUniqueInput
  }

  /**
   * Invitation_table findFirst
   */
  export type Invitation_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation_table
     */
    select?: Invitation_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation_table
     */
    omit?: Invitation_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invitation_tableInclude<ExtArgs> | null
    /**
     * Filter, which Invitation_table to fetch.
     */
    where?: Invitation_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitation_tables to fetch.
     */
    orderBy?: Invitation_tableOrderByWithRelationInput | Invitation_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitation_tables.
     */
    cursor?: Invitation_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitation_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitation_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitation_tables.
     */
    distinct?: Invitation_tableScalarFieldEnum | Invitation_tableScalarFieldEnum[]
  }

  /**
   * Invitation_table findFirstOrThrow
   */
  export type Invitation_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation_table
     */
    select?: Invitation_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation_table
     */
    omit?: Invitation_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invitation_tableInclude<ExtArgs> | null
    /**
     * Filter, which Invitation_table to fetch.
     */
    where?: Invitation_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitation_tables to fetch.
     */
    orderBy?: Invitation_tableOrderByWithRelationInput | Invitation_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitation_tables.
     */
    cursor?: Invitation_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitation_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitation_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitation_tables.
     */
    distinct?: Invitation_tableScalarFieldEnum | Invitation_tableScalarFieldEnum[]
  }

  /**
   * Invitation_table findMany
   */
  export type Invitation_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation_table
     */
    select?: Invitation_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation_table
     */
    omit?: Invitation_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invitation_tableInclude<ExtArgs> | null
    /**
     * Filter, which Invitation_tables to fetch.
     */
    where?: Invitation_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitation_tables to fetch.
     */
    orderBy?: Invitation_tableOrderByWithRelationInput | Invitation_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invitation_tables.
     */
    cursor?: Invitation_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitation_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitation_tables.
     */
    skip?: number
    distinct?: Invitation_tableScalarFieldEnum | Invitation_tableScalarFieldEnum[]
  }

  /**
   * Invitation_table create
   */
  export type Invitation_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation_table
     */
    select?: Invitation_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation_table
     */
    omit?: Invitation_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invitation_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a Invitation_table.
     */
    data: XOR<Invitation_tableCreateInput, Invitation_tableUncheckedCreateInput>
  }

  /**
   * Invitation_table createMany
   */
  export type Invitation_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invitation_tables.
     */
    data: Invitation_tableCreateManyInput | Invitation_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invitation_table createManyAndReturn
   */
  export type Invitation_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation_table
     */
    select?: Invitation_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation_table
     */
    omit?: Invitation_tableOmit<ExtArgs> | null
    /**
     * The data used to create many Invitation_tables.
     */
    data: Invitation_tableCreateManyInput | Invitation_tableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invitation_tableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation_table update
   */
  export type Invitation_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation_table
     */
    select?: Invitation_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation_table
     */
    omit?: Invitation_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invitation_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a Invitation_table.
     */
    data: XOR<Invitation_tableUpdateInput, Invitation_tableUncheckedUpdateInput>
    /**
     * Choose, which Invitation_table to update.
     */
    where: Invitation_tableWhereUniqueInput
  }

  /**
   * Invitation_table updateMany
   */
  export type Invitation_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invitation_tables.
     */
    data: XOR<Invitation_tableUpdateManyMutationInput, Invitation_tableUncheckedUpdateManyInput>
    /**
     * Filter which Invitation_tables to update
     */
    where?: Invitation_tableWhereInput
    /**
     * Limit how many Invitation_tables to update.
     */
    limit?: number
  }

  /**
   * Invitation_table updateManyAndReturn
   */
  export type Invitation_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation_table
     */
    select?: Invitation_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation_table
     */
    omit?: Invitation_tableOmit<ExtArgs> | null
    /**
     * The data used to update Invitation_tables.
     */
    data: XOR<Invitation_tableUpdateManyMutationInput, Invitation_tableUncheckedUpdateManyInput>
    /**
     * Filter which Invitation_tables to update
     */
    where?: Invitation_tableWhereInput
    /**
     * Limit how many Invitation_tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invitation_tableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation_table upsert
   */
  export type Invitation_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation_table
     */
    select?: Invitation_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation_table
     */
    omit?: Invitation_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invitation_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the Invitation_table to update in case it exists.
     */
    where: Invitation_tableWhereUniqueInput
    /**
     * In case the Invitation_table found by the `where` argument doesn't exist, create a new Invitation_table with this data.
     */
    create: XOR<Invitation_tableCreateInput, Invitation_tableUncheckedCreateInput>
    /**
     * In case the Invitation_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Invitation_tableUpdateInput, Invitation_tableUncheckedUpdateInput>
  }

  /**
   * Invitation_table delete
   */
  export type Invitation_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation_table
     */
    select?: Invitation_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation_table
     */
    omit?: Invitation_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invitation_tableInclude<ExtArgs> | null
    /**
     * Filter which Invitation_table to delete.
     */
    where: Invitation_tableWhereUniqueInput
  }

  /**
   * Invitation_table deleteMany
   */
  export type Invitation_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitation_tables to delete
     */
    where?: Invitation_tableWhereInput
    /**
     * Limit how many Invitation_tables to delete.
     */
    limit?: number
  }

  /**
   * Invitation_table without action
   */
  export type Invitation_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation_table
     */
    select?: Invitation_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation_table
     */
    omit?: Invitation_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Invitation_tableInclude<ExtArgs> | null
  }


  /**
   * Model company_log_table
   */

  export type AggregateCompany_log_table = {
    _count: Company_log_tableCountAggregateOutputType | null
    _min: Company_log_tableMinAggregateOutputType | null
    _max: Company_log_tableMaxAggregateOutputType | null
  }

  export type Company_log_tableMinAggregateOutputType = {
    id: string | null
    company_log_created_at: Date | null
    company_log_time_in: Date | null
    company_log_time_out: Date | null
    company_log_member_id: string | null
  }

  export type Company_log_tableMaxAggregateOutputType = {
    id: string | null
    company_log_created_at: Date | null
    company_log_time_in: Date | null
    company_log_time_out: Date | null
    company_log_member_id: string | null
  }

  export type Company_log_tableCountAggregateOutputType = {
    id: number
    company_log_created_at: number
    company_log_time_in: number
    company_log_time_out: number
    company_log_member_id: number
    _all: number
  }


  export type Company_log_tableMinAggregateInputType = {
    id?: true
    company_log_created_at?: true
    company_log_time_in?: true
    company_log_time_out?: true
    company_log_member_id?: true
  }

  export type Company_log_tableMaxAggregateInputType = {
    id?: true
    company_log_created_at?: true
    company_log_time_in?: true
    company_log_time_out?: true
    company_log_member_id?: true
  }

  export type Company_log_tableCountAggregateInputType = {
    id?: true
    company_log_created_at?: true
    company_log_time_in?: true
    company_log_time_out?: true
    company_log_member_id?: true
    _all?: true
  }

  export type Company_log_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company_log_table to aggregate.
     */
    where?: company_log_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of company_log_tables to fetch.
     */
    orderBy?: company_log_tableOrderByWithRelationInput | company_log_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: company_log_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` company_log_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` company_log_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned company_log_tables
    **/
    _count?: true | Company_log_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Company_log_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Company_log_tableMaxAggregateInputType
  }

  export type GetCompany_log_tableAggregateType<T extends Company_log_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany_log_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany_log_table[P]>
      : GetScalarType<T[P], AggregateCompany_log_table[P]>
  }




  export type company_log_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: company_log_tableWhereInput
    orderBy?: company_log_tableOrderByWithAggregationInput | company_log_tableOrderByWithAggregationInput[]
    by: Company_log_tableScalarFieldEnum[] | Company_log_tableScalarFieldEnum
    having?: company_log_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Company_log_tableCountAggregateInputType | true
    _min?: Company_log_tableMinAggregateInputType
    _max?: Company_log_tableMaxAggregateInputType
  }

  export type Company_log_tableGroupByOutputType = {
    id: string
    company_log_created_at: Date
    company_log_time_in: Date
    company_log_time_out: Date | null
    company_log_member_id: string
    _count: Company_log_tableCountAggregateOutputType | null
    _min: Company_log_tableMinAggregateOutputType | null
    _max: Company_log_tableMaxAggregateOutputType | null
  }

  type GetCompany_log_tableGroupByPayload<T extends company_log_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Company_log_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Company_log_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Company_log_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Company_log_tableGroupByOutputType[P]>
        }
      >
    >


  export type company_log_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_log_created_at?: boolean
    company_log_time_in?: boolean
    company_log_time_out?: boolean
    company_log_member_id?: boolean
    member?: boolean | Member_tableDefaultArgs<ExtArgs>
    tasks?: boolean | company_log_table$tasksArgs<ExtArgs>
    _count?: boolean | Company_log_tableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company_log_table"]>

  export type company_log_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_log_created_at?: boolean
    company_log_time_in?: boolean
    company_log_time_out?: boolean
    company_log_member_id?: boolean
    member?: boolean | Member_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company_log_table"]>

  export type company_log_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_log_created_at?: boolean
    company_log_time_in?: boolean
    company_log_time_out?: boolean
    company_log_member_id?: boolean
    member?: boolean | Member_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company_log_table"]>

  export type company_log_tableSelectScalar = {
    id?: boolean
    company_log_created_at?: boolean
    company_log_time_in?: boolean
    company_log_time_out?: boolean
    company_log_member_id?: boolean
  }

  export type company_log_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_log_created_at" | "company_log_time_in" | "company_log_time_out" | "company_log_member_id", ExtArgs["result"]["company_log_table"]>
  export type company_log_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | Member_tableDefaultArgs<ExtArgs>
    tasks?: boolean | company_log_table$tasksArgs<ExtArgs>
    _count?: boolean | Company_log_tableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type company_log_tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | Member_tableDefaultArgs<ExtArgs>
  }
  export type company_log_tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | Member_tableDefaultArgs<ExtArgs>
  }

  export type $company_log_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "company_log_table"
    objects: {
      member: Prisma.$Member_tablePayload<ExtArgs>
      tasks: Prisma.$company_log_task_tablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_log_created_at: Date
      company_log_time_in: Date
      company_log_time_out: Date | null
      company_log_member_id: string
    }, ExtArgs["result"]["company_log_table"]>
    composites: {}
  }

  type company_log_tableGetPayload<S extends boolean | null | undefined | company_log_tableDefaultArgs> = $Result.GetResult<Prisma.$company_log_tablePayload, S>

  type company_log_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<company_log_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Company_log_tableCountAggregateInputType | true
    }

  export interface company_log_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company_log_table'], meta: { name: 'company_log_table' } }
    /**
     * Find zero or one Company_log_table that matches the filter.
     * @param {company_log_tableFindUniqueArgs} args - Arguments to find a Company_log_table
     * @example
     * // Get one Company_log_table
     * const company_log_table = await prisma.company_log_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends company_log_tableFindUniqueArgs>(args: SelectSubset<T, company_log_tableFindUniqueArgs<ExtArgs>>): Prisma__company_log_tableClient<$Result.GetResult<Prisma.$company_log_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company_log_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {company_log_tableFindUniqueOrThrowArgs} args - Arguments to find a Company_log_table
     * @example
     * // Get one Company_log_table
     * const company_log_table = await prisma.company_log_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends company_log_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, company_log_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__company_log_tableClient<$Result.GetResult<Prisma.$company_log_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company_log_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {company_log_tableFindFirstArgs} args - Arguments to find a Company_log_table
     * @example
     * // Get one Company_log_table
     * const company_log_table = await prisma.company_log_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends company_log_tableFindFirstArgs>(args?: SelectSubset<T, company_log_tableFindFirstArgs<ExtArgs>>): Prisma__company_log_tableClient<$Result.GetResult<Prisma.$company_log_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company_log_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {company_log_tableFindFirstOrThrowArgs} args - Arguments to find a Company_log_table
     * @example
     * // Get one Company_log_table
     * const company_log_table = await prisma.company_log_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends company_log_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, company_log_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__company_log_tableClient<$Result.GetResult<Prisma.$company_log_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Company_log_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {company_log_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Company_log_tables
     * const company_log_tables = await prisma.company_log_table.findMany()
     * 
     * // Get first 10 Company_log_tables
     * const company_log_tables = await prisma.company_log_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const company_log_tableWithIdOnly = await prisma.company_log_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends company_log_tableFindManyArgs>(args?: SelectSubset<T, company_log_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$company_log_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company_log_table.
     * @param {company_log_tableCreateArgs} args - Arguments to create a Company_log_table.
     * @example
     * // Create one Company_log_table
     * const Company_log_table = await prisma.company_log_table.create({
     *   data: {
     *     // ... data to create a Company_log_table
     *   }
     * })
     * 
     */
    create<T extends company_log_tableCreateArgs>(args: SelectSubset<T, company_log_tableCreateArgs<ExtArgs>>): Prisma__company_log_tableClient<$Result.GetResult<Prisma.$company_log_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Company_log_tables.
     * @param {company_log_tableCreateManyArgs} args - Arguments to create many Company_log_tables.
     * @example
     * // Create many Company_log_tables
     * const company_log_table = await prisma.company_log_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends company_log_tableCreateManyArgs>(args?: SelectSubset<T, company_log_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Company_log_tables and returns the data saved in the database.
     * @param {company_log_tableCreateManyAndReturnArgs} args - Arguments to create many Company_log_tables.
     * @example
     * // Create many Company_log_tables
     * const company_log_table = await prisma.company_log_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Company_log_tables and only return the `id`
     * const company_log_tableWithIdOnly = await prisma.company_log_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends company_log_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, company_log_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$company_log_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company_log_table.
     * @param {company_log_tableDeleteArgs} args - Arguments to delete one Company_log_table.
     * @example
     * // Delete one Company_log_table
     * const Company_log_table = await prisma.company_log_table.delete({
     *   where: {
     *     // ... filter to delete one Company_log_table
     *   }
     * })
     * 
     */
    delete<T extends company_log_tableDeleteArgs>(args: SelectSubset<T, company_log_tableDeleteArgs<ExtArgs>>): Prisma__company_log_tableClient<$Result.GetResult<Prisma.$company_log_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company_log_table.
     * @param {company_log_tableUpdateArgs} args - Arguments to update one Company_log_table.
     * @example
     * // Update one Company_log_table
     * const company_log_table = await prisma.company_log_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends company_log_tableUpdateArgs>(args: SelectSubset<T, company_log_tableUpdateArgs<ExtArgs>>): Prisma__company_log_tableClient<$Result.GetResult<Prisma.$company_log_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Company_log_tables.
     * @param {company_log_tableDeleteManyArgs} args - Arguments to filter Company_log_tables to delete.
     * @example
     * // Delete a few Company_log_tables
     * const { count } = await prisma.company_log_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends company_log_tableDeleteManyArgs>(args?: SelectSubset<T, company_log_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Company_log_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {company_log_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Company_log_tables
     * const company_log_table = await prisma.company_log_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends company_log_tableUpdateManyArgs>(args: SelectSubset<T, company_log_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Company_log_tables and returns the data updated in the database.
     * @param {company_log_tableUpdateManyAndReturnArgs} args - Arguments to update many Company_log_tables.
     * @example
     * // Update many Company_log_tables
     * const company_log_table = await prisma.company_log_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Company_log_tables and only return the `id`
     * const company_log_tableWithIdOnly = await prisma.company_log_table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends company_log_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, company_log_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$company_log_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company_log_table.
     * @param {company_log_tableUpsertArgs} args - Arguments to update or create a Company_log_table.
     * @example
     * // Update or create a Company_log_table
     * const company_log_table = await prisma.company_log_table.upsert({
     *   create: {
     *     // ... data to create a Company_log_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company_log_table we want to update
     *   }
     * })
     */
    upsert<T extends company_log_tableUpsertArgs>(args: SelectSubset<T, company_log_tableUpsertArgs<ExtArgs>>): Prisma__company_log_tableClient<$Result.GetResult<Prisma.$company_log_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Company_log_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {company_log_tableCountArgs} args - Arguments to filter Company_log_tables to count.
     * @example
     * // Count the number of Company_log_tables
     * const count = await prisma.company_log_table.count({
     *   where: {
     *     // ... the filter for the Company_log_tables we want to count
     *   }
     * })
    **/
    count<T extends company_log_tableCountArgs>(
      args?: Subset<T, company_log_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Company_log_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company_log_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Company_log_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Company_log_tableAggregateArgs>(args: Subset<T, Company_log_tableAggregateArgs>): Prisma.PrismaPromise<GetCompany_log_tableAggregateType<T>>

    /**
     * Group by Company_log_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {company_log_tableGroupByArgs} args - Group by arguments.
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
      T extends company_log_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: company_log_tableGroupByArgs['orderBy'] }
        : { orderBy?: company_log_tableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, company_log_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompany_log_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the company_log_table model
   */
  readonly fields: company_log_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company_log_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__company_log_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends Member_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Member_tableDefaultArgs<ExtArgs>>): Prisma__Member_tableClient<$Result.GetResult<Prisma.$Member_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends company_log_table$tasksArgs<ExtArgs> = {}>(args?: Subset<T, company_log_table$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$company_log_task_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the company_log_table model
   */
  interface company_log_tableFieldRefs {
    readonly id: FieldRef<"company_log_table", 'String'>
    readonly company_log_created_at: FieldRef<"company_log_table", 'DateTime'>
    readonly company_log_time_in: FieldRef<"company_log_table", 'DateTime'>
    readonly company_log_time_out: FieldRef<"company_log_table", 'DateTime'>
    readonly company_log_member_id: FieldRef<"company_log_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * company_log_table findUnique
   */
  export type company_log_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_table
     */
    select?: company_log_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_table
     */
    omit?: company_log_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_tableInclude<ExtArgs> | null
    /**
     * Filter, which company_log_table to fetch.
     */
    where: company_log_tableWhereUniqueInput
  }

  /**
   * company_log_table findUniqueOrThrow
   */
  export type company_log_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_table
     */
    select?: company_log_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_table
     */
    omit?: company_log_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_tableInclude<ExtArgs> | null
    /**
     * Filter, which company_log_table to fetch.
     */
    where: company_log_tableWhereUniqueInput
  }

  /**
   * company_log_table findFirst
   */
  export type company_log_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_table
     */
    select?: company_log_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_table
     */
    omit?: company_log_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_tableInclude<ExtArgs> | null
    /**
     * Filter, which company_log_table to fetch.
     */
    where?: company_log_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of company_log_tables to fetch.
     */
    orderBy?: company_log_tableOrderByWithRelationInput | company_log_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for company_log_tables.
     */
    cursor?: company_log_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` company_log_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` company_log_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of company_log_tables.
     */
    distinct?: Company_log_tableScalarFieldEnum | Company_log_tableScalarFieldEnum[]
  }

  /**
   * company_log_table findFirstOrThrow
   */
  export type company_log_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_table
     */
    select?: company_log_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_table
     */
    omit?: company_log_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_tableInclude<ExtArgs> | null
    /**
     * Filter, which company_log_table to fetch.
     */
    where?: company_log_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of company_log_tables to fetch.
     */
    orderBy?: company_log_tableOrderByWithRelationInput | company_log_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for company_log_tables.
     */
    cursor?: company_log_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` company_log_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` company_log_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of company_log_tables.
     */
    distinct?: Company_log_tableScalarFieldEnum | Company_log_tableScalarFieldEnum[]
  }

  /**
   * company_log_table findMany
   */
  export type company_log_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_table
     */
    select?: company_log_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_table
     */
    omit?: company_log_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_tableInclude<ExtArgs> | null
    /**
     * Filter, which company_log_tables to fetch.
     */
    where?: company_log_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of company_log_tables to fetch.
     */
    orderBy?: company_log_tableOrderByWithRelationInput | company_log_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing company_log_tables.
     */
    cursor?: company_log_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` company_log_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` company_log_tables.
     */
    skip?: number
    distinct?: Company_log_tableScalarFieldEnum | Company_log_tableScalarFieldEnum[]
  }

  /**
   * company_log_table create
   */
  export type company_log_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_table
     */
    select?: company_log_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_table
     */
    omit?: company_log_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a company_log_table.
     */
    data: XOR<company_log_tableCreateInput, company_log_tableUncheckedCreateInput>
  }

  /**
   * company_log_table createMany
   */
  export type company_log_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many company_log_tables.
     */
    data: company_log_tableCreateManyInput | company_log_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company_log_table createManyAndReturn
   */
  export type company_log_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_table
     */
    select?: company_log_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_table
     */
    omit?: company_log_tableOmit<ExtArgs> | null
    /**
     * The data used to create many company_log_tables.
     */
    data: company_log_tableCreateManyInput | company_log_tableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_tableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * company_log_table update
   */
  export type company_log_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_table
     */
    select?: company_log_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_table
     */
    omit?: company_log_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a company_log_table.
     */
    data: XOR<company_log_tableUpdateInput, company_log_tableUncheckedUpdateInput>
    /**
     * Choose, which company_log_table to update.
     */
    where: company_log_tableWhereUniqueInput
  }

  /**
   * company_log_table updateMany
   */
  export type company_log_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update company_log_tables.
     */
    data: XOR<company_log_tableUpdateManyMutationInput, company_log_tableUncheckedUpdateManyInput>
    /**
     * Filter which company_log_tables to update
     */
    where?: company_log_tableWhereInput
    /**
     * Limit how many company_log_tables to update.
     */
    limit?: number
  }

  /**
   * company_log_table updateManyAndReturn
   */
  export type company_log_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_table
     */
    select?: company_log_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_table
     */
    omit?: company_log_tableOmit<ExtArgs> | null
    /**
     * The data used to update company_log_tables.
     */
    data: XOR<company_log_tableUpdateManyMutationInput, company_log_tableUncheckedUpdateManyInput>
    /**
     * Filter which company_log_tables to update
     */
    where?: company_log_tableWhereInput
    /**
     * Limit how many company_log_tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_tableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * company_log_table upsert
   */
  export type company_log_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_table
     */
    select?: company_log_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_table
     */
    omit?: company_log_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the company_log_table to update in case it exists.
     */
    where: company_log_tableWhereUniqueInput
    /**
     * In case the company_log_table found by the `where` argument doesn't exist, create a new company_log_table with this data.
     */
    create: XOR<company_log_tableCreateInput, company_log_tableUncheckedCreateInput>
    /**
     * In case the company_log_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<company_log_tableUpdateInput, company_log_tableUncheckedUpdateInput>
  }

  /**
   * company_log_table delete
   */
  export type company_log_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_table
     */
    select?: company_log_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_table
     */
    omit?: company_log_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_tableInclude<ExtArgs> | null
    /**
     * Filter which company_log_table to delete.
     */
    where: company_log_tableWhereUniqueInput
  }

  /**
   * company_log_table deleteMany
   */
  export type company_log_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company_log_tables to delete
     */
    where?: company_log_tableWhereInput
    /**
     * Limit how many company_log_tables to delete.
     */
    limit?: number
  }

  /**
   * company_log_table.tasks
   */
  export type company_log_table$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_task_table
     */
    select?: company_log_task_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_task_table
     */
    omit?: company_log_task_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_task_tableInclude<ExtArgs> | null
    where?: company_log_task_tableWhereInput
    orderBy?: company_log_task_tableOrderByWithRelationInput | company_log_task_tableOrderByWithRelationInput[]
    cursor?: company_log_task_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Company_log_task_tableScalarFieldEnum | Company_log_task_tableScalarFieldEnum[]
  }

  /**
   * company_log_table without action
   */
  export type company_log_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_table
     */
    select?: company_log_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_table
     */
    omit?: company_log_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_tableInclude<ExtArgs> | null
  }


  /**
   * Model company_log_task_table
   */

  export type AggregateCompany_log_task_table = {
    _count: Company_log_task_tableCountAggregateOutputType | null
    _min: Company_log_task_tableMinAggregateOutputType | null
    _max: Company_log_task_tableMaxAggregateOutputType | null
  }

  export type Company_log_task_tableMinAggregateOutputType = {
    company_log_task_id: string | null
    company_log_task_log_id: string | null
    company_log_task_description: string | null
    company_log_task_created_at: Date | null
  }

  export type Company_log_task_tableMaxAggregateOutputType = {
    company_log_task_id: string | null
    company_log_task_log_id: string | null
    company_log_task_description: string | null
    company_log_task_created_at: Date | null
  }

  export type Company_log_task_tableCountAggregateOutputType = {
    company_log_task_id: number
    company_log_task_log_id: number
    company_log_task_description: number
    company_log_task_created_at: number
    _all: number
  }


  export type Company_log_task_tableMinAggregateInputType = {
    company_log_task_id?: true
    company_log_task_log_id?: true
    company_log_task_description?: true
    company_log_task_created_at?: true
  }

  export type Company_log_task_tableMaxAggregateInputType = {
    company_log_task_id?: true
    company_log_task_log_id?: true
    company_log_task_description?: true
    company_log_task_created_at?: true
  }

  export type Company_log_task_tableCountAggregateInputType = {
    company_log_task_id?: true
    company_log_task_log_id?: true
    company_log_task_description?: true
    company_log_task_created_at?: true
    _all?: true
  }

  export type Company_log_task_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company_log_task_table to aggregate.
     */
    where?: company_log_task_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of company_log_task_tables to fetch.
     */
    orderBy?: company_log_task_tableOrderByWithRelationInput | company_log_task_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: company_log_task_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` company_log_task_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` company_log_task_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned company_log_task_tables
    **/
    _count?: true | Company_log_task_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Company_log_task_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Company_log_task_tableMaxAggregateInputType
  }

  export type GetCompany_log_task_tableAggregateType<T extends Company_log_task_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany_log_task_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany_log_task_table[P]>
      : GetScalarType<T[P], AggregateCompany_log_task_table[P]>
  }




  export type company_log_task_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: company_log_task_tableWhereInput
    orderBy?: company_log_task_tableOrderByWithAggregationInput | company_log_task_tableOrderByWithAggregationInput[]
    by: Company_log_task_tableScalarFieldEnum[] | Company_log_task_tableScalarFieldEnum
    having?: company_log_task_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Company_log_task_tableCountAggregateInputType | true
    _min?: Company_log_task_tableMinAggregateInputType
    _max?: Company_log_task_tableMaxAggregateInputType
  }

  export type Company_log_task_tableGroupByOutputType = {
    company_log_task_id: string
    company_log_task_log_id: string
    company_log_task_description: string
    company_log_task_created_at: Date
    _count: Company_log_task_tableCountAggregateOutputType | null
    _min: Company_log_task_tableMinAggregateOutputType | null
    _max: Company_log_task_tableMaxAggregateOutputType | null
  }

  type GetCompany_log_task_tableGroupByPayload<T extends company_log_task_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Company_log_task_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Company_log_task_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Company_log_task_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Company_log_task_tableGroupByOutputType[P]>
        }
      >
    >


  export type company_log_task_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_log_task_id?: boolean
    company_log_task_log_id?: boolean
    company_log_task_description?: boolean
    company_log_task_created_at?: boolean
    log?: boolean | company_log_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company_log_task_table"]>

  export type company_log_task_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_log_task_id?: boolean
    company_log_task_log_id?: boolean
    company_log_task_description?: boolean
    company_log_task_created_at?: boolean
    log?: boolean | company_log_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company_log_task_table"]>

  export type company_log_task_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_log_task_id?: boolean
    company_log_task_log_id?: boolean
    company_log_task_description?: boolean
    company_log_task_created_at?: boolean
    log?: boolean | company_log_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company_log_task_table"]>

  export type company_log_task_tableSelectScalar = {
    company_log_task_id?: boolean
    company_log_task_log_id?: boolean
    company_log_task_description?: boolean
    company_log_task_created_at?: boolean
  }

  export type company_log_task_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"company_log_task_id" | "company_log_task_log_id" | "company_log_task_description" | "company_log_task_created_at", ExtArgs["result"]["company_log_task_table"]>
  export type company_log_task_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    log?: boolean | company_log_tableDefaultArgs<ExtArgs>
  }
  export type company_log_task_tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    log?: boolean | company_log_tableDefaultArgs<ExtArgs>
  }
  export type company_log_task_tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    log?: boolean | company_log_tableDefaultArgs<ExtArgs>
  }

  export type $company_log_task_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "company_log_task_table"
    objects: {
      log: Prisma.$company_log_tablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      company_log_task_id: string
      company_log_task_log_id: string
      company_log_task_description: string
      company_log_task_created_at: Date
    }, ExtArgs["result"]["company_log_task_table"]>
    composites: {}
  }

  type company_log_task_tableGetPayload<S extends boolean | null | undefined | company_log_task_tableDefaultArgs> = $Result.GetResult<Prisma.$company_log_task_tablePayload, S>

  type company_log_task_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<company_log_task_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Company_log_task_tableCountAggregateInputType | true
    }

  export interface company_log_task_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company_log_task_table'], meta: { name: 'company_log_task_table' } }
    /**
     * Find zero or one Company_log_task_table that matches the filter.
     * @param {company_log_task_tableFindUniqueArgs} args - Arguments to find a Company_log_task_table
     * @example
     * // Get one Company_log_task_table
     * const company_log_task_table = await prisma.company_log_task_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends company_log_task_tableFindUniqueArgs>(args: SelectSubset<T, company_log_task_tableFindUniqueArgs<ExtArgs>>): Prisma__company_log_task_tableClient<$Result.GetResult<Prisma.$company_log_task_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company_log_task_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {company_log_task_tableFindUniqueOrThrowArgs} args - Arguments to find a Company_log_task_table
     * @example
     * // Get one Company_log_task_table
     * const company_log_task_table = await prisma.company_log_task_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends company_log_task_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, company_log_task_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__company_log_task_tableClient<$Result.GetResult<Prisma.$company_log_task_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company_log_task_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {company_log_task_tableFindFirstArgs} args - Arguments to find a Company_log_task_table
     * @example
     * // Get one Company_log_task_table
     * const company_log_task_table = await prisma.company_log_task_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends company_log_task_tableFindFirstArgs>(args?: SelectSubset<T, company_log_task_tableFindFirstArgs<ExtArgs>>): Prisma__company_log_task_tableClient<$Result.GetResult<Prisma.$company_log_task_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company_log_task_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {company_log_task_tableFindFirstOrThrowArgs} args - Arguments to find a Company_log_task_table
     * @example
     * // Get one Company_log_task_table
     * const company_log_task_table = await prisma.company_log_task_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends company_log_task_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, company_log_task_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__company_log_task_tableClient<$Result.GetResult<Prisma.$company_log_task_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Company_log_task_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {company_log_task_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Company_log_task_tables
     * const company_log_task_tables = await prisma.company_log_task_table.findMany()
     * 
     * // Get first 10 Company_log_task_tables
     * const company_log_task_tables = await prisma.company_log_task_table.findMany({ take: 10 })
     * 
     * // Only select the `company_log_task_id`
     * const company_log_task_tableWithCompany_log_task_idOnly = await prisma.company_log_task_table.findMany({ select: { company_log_task_id: true } })
     * 
     */
    findMany<T extends company_log_task_tableFindManyArgs>(args?: SelectSubset<T, company_log_task_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$company_log_task_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company_log_task_table.
     * @param {company_log_task_tableCreateArgs} args - Arguments to create a Company_log_task_table.
     * @example
     * // Create one Company_log_task_table
     * const Company_log_task_table = await prisma.company_log_task_table.create({
     *   data: {
     *     // ... data to create a Company_log_task_table
     *   }
     * })
     * 
     */
    create<T extends company_log_task_tableCreateArgs>(args: SelectSubset<T, company_log_task_tableCreateArgs<ExtArgs>>): Prisma__company_log_task_tableClient<$Result.GetResult<Prisma.$company_log_task_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Company_log_task_tables.
     * @param {company_log_task_tableCreateManyArgs} args - Arguments to create many Company_log_task_tables.
     * @example
     * // Create many Company_log_task_tables
     * const company_log_task_table = await prisma.company_log_task_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends company_log_task_tableCreateManyArgs>(args?: SelectSubset<T, company_log_task_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Company_log_task_tables and returns the data saved in the database.
     * @param {company_log_task_tableCreateManyAndReturnArgs} args - Arguments to create many Company_log_task_tables.
     * @example
     * // Create many Company_log_task_tables
     * const company_log_task_table = await prisma.company_log_task_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Company_log_task_tables and only return the `company_log_task_id`
     * const company_log_task_tableWithCompany_log_task_idOnly = await prisma.company_log_task_table.createManyAndReturn({
     *   select: { company_log_task_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends company_log_task_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, company_log_task_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$company_log_task_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company_log_task_table.
     * @param {company_log_task_tableDeleteArgs} args - Arguments to delete one Company_log_task_table.
     * @example
     * // Delete one Company_log_task_table
     * const Company_log_task_table = await prisma.company_log_task_table.delete({
     *   where: {
     *     // ... filter to delete one Company_log_task_table
     *   }
     * })
     * 
     */
    delete<T extends company_log_task_tableDeleteArgs>(args: SelectSubset<T, company_log_task_tableDeleteArgs<ExtArgs>>): Prisma__company_log_task_tableClient<$Result.GetResult<Prisma.$company_log_task_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company_log_task_table.
     * @param {company_log_task_tableUpdateArgs} args - Arguments to update one Company_log_task_table.
     * @example
     * // Update one Company_log_task_table
     * const company_log_task_table = await prisma.company_log_task_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends company_log_task_tableUpdateArgs>(args: SelectSubset<T, company_log_task_tableUpdateArgs<ExtArgs>>): Prisma__company_log_task_tableClient<$Result.GetResult<Prisma.$company_log_task_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Company_log_task_tables.
     * @param {company_log_task_tableDeleteManyArgs} args - Arguments to filter Company_log_task_tables to delete.
     * @example
     * // Delete a few Company_log_task_tables
     * const { count } = await prisma.company_log_task_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends company_log_task_tableDeleteManyArgs>(args?: SelectSubset<T, company_log_task_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Company_log_task_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {company_log_task_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Company_log_task_tables
     * const company_log_task_table = await prisma.company_log_task_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends company_log_task_tableUpdateManyArgs>(args: SelectSubset<T, company_log_task_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Company_log_task_tables and returns the data updated in the database.
     * @param {company_log_task_tableUpdateManyAndReturnArgs} args - Arguments to update many Company_log_task_tables.
     * @example
     * // Update many Company_log_task_tables
     * const company_log_task_table = await prisma.company_log_task_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Company_log_task_tables and only return the `company_log_task_id`
     * const company_log_task_tableWithCompany_log_task_idOnly = await prisma.company_log_task_table.updateManyAndReturn({
     *   select: { company_log_task_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends company_log_task_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, company_log_task_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$company_log_task_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company_log_task_table.
     * @param {company_log_task_tableUpsertArgs} args - Arguments to update or create a Company_log_task_table.
     * @example
     * // Update or create a Company_log_task_table
     * const company_log_task_table = await prisma.company_log_task_table.upsert({
     *   create: {
     *     // ... data to create a Company_log_task_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company_log_task_table we want to update
     *   }
     * })
     */
    upsert<T extends company_log_task_tableUpsertArgs>(args: SelectSubset<T, company_log_task_tableUpsertArgs<ExtArgs>>): Prisma__company_log_task_tableClient<$Result.GetResult<Prisma.$company_log_task_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Company_log_task_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {company_log_task_tableCountArgs} args - Arguments to filter Company_log_task_tables to count.
     * @example
     * // Count the number of Company_log_task_tables
     * const count = await prisma.company_log_task_table.count({
     *   where: {
     *     // ... the filter for the Company_log_task_tables we want to count
     *   }
     * })
    **/
    count<T extends company_log_task_tableCountArgs>(
      args?: Subset<T, company_log_task_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Company_log_task_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company_log_task_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Company_log_task_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Company_log_task_tableAggregateArgs>(args: Subset<T, Company_log_task_tableAggregateArgs>): Prisma.PrismaPromise<GetCompany_log_task_tableAggregateType<T>>

    /**
     * Group by Company_log_task_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {company_log_task_tableGroupByArgs} args - Group by arguments.
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
      T extends company_log_task_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: company_log_task_tableGroupByArgs['orderBy'] }
        : { orderBy?: company_log_task_tableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, company_log_task_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompany_log_task_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the company_log_task_table model
   */
  readonly fields: company_log_task_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company_log_task_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__company_log_task_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    log<T extends company_log_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, company_log_tableDefaultArgs<ExtArgs>>): Prisma__company_log_tableClient<$Result.GetResult<Prisma.$company_log_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the company_log_task_table model
   */
  interface company_log_task_tableFieldRefs {
    readonly company_log_task_id: FieldRef<"company_log_task_table", 'String'>
    readonly company_log_task_log_id: FieldRef<"company_log_task_table", 'String'>
    readonly company_log_task_description: FieldRef<"company_log_task_table", 'String'>
    readonly company_log_task_created_at: FieldRef<"company_log_task_table", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * company_log_task_table findUnique
   */
  export type company_log_task_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_task_table
     */
    select?: company_log_task_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_task_table
     */
    omit?: company_log_task_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_task_tableInclude<ExtArgs> | null
    /**
     * Filter, which company_log_task_table to fetch.
     */
    where: company_log_task_tableWhereUniqueInput
  }

  /**
   * company_log_task_table findUniqueOrThrow
   */
  export type company_log_task_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_task_table
     */
    select?: company_log_task_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_task_table
     */
    omit?: company_log_task_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_task_tableInclude<ExtArgs> | null
    /**
     * Filter, which company_log_task_table to fetch.
     */
    where: company_log_task_tableWhereUniqueInput
  }

  /**
   * company_log_task_table findFirst
   */
  export type company_log_task_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_task_table
     */
    select?: company_log_task_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_task_table
     */
    omit?: company_log_task_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_task_tableInclude<ExtArgs> | null
    /**
     * Filter, which company_log_task_table to fetch.
     */
    where?: company_log_task_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of company_log_task_tables to fetch.
     */
    orderBy?: company_log_task_tableOrderByWithRelationInput | company_log_task_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for company_log_task_tables.
     */
    cursor?: company_log_task_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` company_log_task_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` company_log_task_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of company_log_task_tables.
     */
    distinct?: Company_log_task_tableScalarFieldEnum | Company_log_task_tableScalarFieldEnum[]
  }

  /**
   * company_log_task_table findFirstOrThrow
   */
  export type company_log_task_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_task_table
     */
    select?: company_log_task_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_task_table
     */
    omit?: company_log_task_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_task_tableInclude<ExtArgs> | null
    /**
     * Filter, which company_log_task_table to fetch.
     */
    where?: company_log_task_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of company_log_task_tables to fetch.
     */
    orderBy?: company_log_task_tableOrderByWithRelationInput | company_log_task_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for company_log_task_tables.
     */
    cursor?: company_log_task_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` company_log_task_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` company_log_task_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of company_log_task_tables.
     */
    distinct?: Company_log_task_tableScalarFieldEnum | Company_log_task_tableScalarFieldEnum[]
  }

  /**
   * company_log_task_table findMany
   */
  export type company_log_task_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_task_table
     */
    select?: company_log_task_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_task_table
     */
    omit?: company_log_task_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_task_tableInclude<ExtArgs> | null
    /**
     * Filter, which company_log_task_tables to fetch.
     */
    where?: company_log_task_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of company_log_task_tables to fetch.
     */
    orderBy?: company_log_task_tableOrderByWithRelationInput | company_log_task_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing company_log_task_tables.
     */
    cursor?: company_log_task_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` company_log_task_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` company_log_task_tables.
     */
    skip?: number
    distinct?: Company_log_task_tableScalarFieldEnum | Company_log_task_tableScalarFieldEnum[]
  }

  /**
   * company_log_task_table create
   */
  export type company_log_task_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_task_table
     */
    select?: company_log_task_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_task_table
     */
    omit?: company_log_task_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_task_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a company_log_task_table.
     */
    data: XOR<company_log_task_tableCreateInput, company_log_task_tableUncheckedCreateInput>
  }

  /**
   * company_log_task_table createMany
   */
  export type company_log_task_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many company_log_task_tables.
     */
    data: company_log_task_tableCreateManyInput | company_log_task_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company_log_task_table createManyAndReturn
   */
  export type company_log_task_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_task_table
     */
    select?: company_log_task_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_task_table
     */
    omit?: company_log_task_tableOmit<ExtArgs> | null
    /**
     * The data used to create many company_log_task_tables.
     */
    data: company_log_task_tableCreateManyInput | company_log_task_tableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_task_tableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * company_log_task_table update
   */
  export type company_log_task_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_task_table
     */
    select?: company_log_task_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_task_table
     */
    omit?: company_log_task_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_task_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a company_log_task_table.
     */
    data: XOR<company_log_task_tableUpdateInput, company_log_task_tableUncheckedUpdateInput>
    /**
     * Choose, which company_log_task_table to update.
     */
    where: company_log_task_tableWhereUniqueInput
  }

  /**
   * company_log_task_table updateMany
   */
  export type company_log_task_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update company_log_task_tables.
     */
    data: XOR<company_log_task_tableUpdateManyMutationInput, company_log_task_tableUncheckedUpdateManyInput>
    /**
     * Filter which company_log_task_tables to update
     */
    where?: company_log_task_tableWhereInput
    /**
     * Limit how many company_log_task_tables to update.
     */
    limit?: number
  }

  /**
   * company_log_task_table updateManyAndReturn
   */
  export type company_log_task_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_task_table
     */
    select?: company_log_task_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_task_table
     */
    omit?: company_log_task_tableOmit<ExtArgs> | null
    /**
     * The data used to update company_log_task_tables.
     */
    data: XOR<company_log_task_tableUpdateManyMutationInput, company_log_task_tableUncheckedUpdateManyInput>
    /**
     * Filter which company_log_task_tables to update
     */
    where?: company_log_task_tableWhereInput
    /**
     * Limit how many company_log_task_tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_task_tableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * company_log_task_table upsert
   */
  export type company_log_task_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_task_table
     */
    select?: company_log_task_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_task_table
     */
    omit?: company_log_task_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_task_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the company_log_task_table to update in case it exists.
     */
    where: company_log_task_tableWhereUniqueInput
    /**
     * In case the company_log_task_table found by the `where` argument doesn't exist, create a new company_log_task_table with this data.
     */
    create: XOR<company_log_task_tableCreateInput, company_log_task_tableUncheckedCreateInput>
    /**
     * In case the company_log_task_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<company_log_task_tableUpdateInput, company_log_task_tableUncheckedUpdateInput>
  }

  /**
   * company_log_task_table delete
   */
  export type company_log_task_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_task_table
     */
    select?: company_log_task_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_task_table
     */
    omit?: company_log_task_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_task_tableInclude<ExtArgs> | null
    /**
     * Filter which company_log_task_table to delete.
     */
    where: company_log_task_tableWhereUniqueInput
  }

  /**
   * company_log_task_table deleteMany
   */
  export type company_log_task_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company_log_task_tables to delete
     */
    where?: company_log_task_tableWhereInput
    /**
     * Limit how many company_log_task_tables to delete.
     */
    limit?: number
  }

  /**
   * company_log_task_table without action
   */
  export type company_log_task_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_log_task_table
     */
    select?: company_log_task_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_log_task_table
     */
    omit?: company_log_task_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_log_task_tableInclude<ExtArgs> | null
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


  export const User_tableScalarFieldEnum: {
    id: 'id',
    user_name: 'user_name',
    user_email: 'user_email',
    user_email_verified: 'user_email_verified',
    user_image: 'user_image',
    user_created_at: 'user_created_at',
    user_updated_at: 'user_updated_at'
  };

  export type User_tableScalarFieldEnum = (typeof User_tableScalarFieldEnum)[keyof typeof User_tableScalarFieldEnum]


  export const Session_tableScalarFieldEnum: {
    id: 'id',
    session_expired_at: 'session_expired_at',
    session_token: 'session_token',
    session_created_at: 'session_created_at',
    session_updated_at: 'session_updated_at',
    session_ip_address: 'session_ip_address',
    session_user_agent: 'session_user_agent',
    session_user_id: 'session_user_id',
    session_active_organization_id: 'session_active_organization_id'
  };

  export type Session_tableScalarFieldEnum = (typeof Session_tableScalarFieldEnum)[keyof typeof Session_tableScalarFieldEnum]


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


  export const Organization_tableScalarFieldEnum: {
    id: 'id',
    organization_name: 'organization_name',
    organization_slug: 'organization_slug',
    organization_logo: 'organization_logo',
    organization_created_at: 'organization_created_at',
    organization_metadata: 'organization_metadata'
  };

  export type Organization_tableScalarFieldEnum = (typeof Organization_tableScalarFieldEnum)[keyof typeof Organization_tableScalarFieldEnum]


  export const Member_tableScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    userId: 'userId',
    member_role: 'member_role',
    member_created_at: 'member_created_at',
    member_is_onboarded: 'member_is_onboarded',
    member_position: 'member_position',
    member_bio: 'member_bio'
  };

  export type Member_tableScalarFieldEnum = (typeof Member_tableScalarFieldEnum)[keyof typeof Member_tableScalarFieldEnum]


  export const Invitation_tableScalarFieldEnum: {
    id: 'id',
    organization_id: 'organization_id',
    invitation_email: 'invitation_email',
    invitation_role: 'invitation_role',
    invitation_status: 'invitation_status',
    invitation_expires_at: 'invitation_expires_at',
    invitation_inviter_id: 'invitation_inviter_id'
  };

  export type Invitation_tableScalarFieldEnum = (typeof Invitation_tableScalarFieldEnum)[keyof typeof Invitation_tableScalarFieldEnum]


  export const Company_log_tableScalarFieldEnum: {
    id: 'id',
    company_log_created_at: 'company_log_created_at',
    company_log_time_in: 'company_log_time_in',
    company_log_time_out: 'company_log_time_out',
    company_log_member_id: 'company_log_member_id'
  };

  export type Company_log_tableScalarFieldEnum = (typeof Company_log_tableScalarFieldEnum)[keyof typeof Company_log_tableScalarFieldEnum]


  export const Company_log_task_tableScalarFieldEnum: {
    company_log_task_id: 'company_log_task_id',
    company_log_task_log_id: 'company_log_task_log_id',
    company_log_task_description: 'company_log_task_description',
    company_log_task_created_at: 'company_log_task_created_at'
  };

  export type Company_log_task_tableScalarFieldEnum = (typeof Company_log_task_tableScalarFieldEnum)[keyof typeof Company_log_task_tableScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
    session_tables?: Session_tableListRelationFilter
    user_account_tables?: User_account_tableListRelationFilter
    member_tables?: Member_tableListRelationFilter
    invitation_tables?: Invitation_tableListRelationFilter
  }

  export type User_tableOrderByWithRelationInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_email_verified?: SortOrder
    user_image?: SortOrderInput | SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
    session_tables?: Session_tableOrderByRelationAggregateInput
    user_account_tables?: User_account_tableOrderByRelationAggregateInput
    member_tables?: Member_tableOrderByRelationAggregateInput
    invitation_tables?: Invitation_tableOrderByRelationAggregateInput
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
    session_tables?: Session_tableListRelationFilter
    user_account_tables?: User_account_tableListRelationFilter
    member_tables?: Member_tableListRelationFilter
    invitation_tables?: Invitation_tableListRelationFilter
  }, "id" | "user_email">

  export type User_tableOrderByWithAggregationInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_email_verified?: SortOrder
    user_image?: SortOrderInput | SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
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
  }

  export type Session_tableWhereInput = {
    AND?: Session_tableWhereInput | Session_tableWhereInput[]
    OR?: Session_tableWhereInput[]
    NOT?: Session_tableWhereInput | Session_tableWhereInput[]
    id?: StringFilter<"Session_table"> | string
    session_expired_at?: DateTimeFilter<"Session_table"> | Date | string
    session_token?: StringFilter<"Session_table"> | string
    session_created_at?: DateTimeFilter<"Session_table"> | Date | string
    session_updated_at?: DateTimeFilter<"Session_table"> | Date | string
    session_ip_address?: StringNullableFilter<"Session_table"> | string | null
    session_user_agent?: StringNullableFilter<"Session_table"> | string | null
    session_user_id?: StringFilter<"Session_table"> | string
    session_active_organization_id?: StringNullableFilter<"Session_table"> | string | null
    user_table?: XOR<User_tableScalarRelationFilter, User_tableWhereInput>
  }

  export type Session_tableOrderByWithRelationInput = {
    id?: SortOrder
    session_expired_at?: SortOrder
    session_token?: SortOrder
    session_created_at?: SortOrder
    session_updated_at?: SortOrder
    session_ip_address?: SortOrderInput | SortOrder
    session_user_agent?: SortOrderInput | SortOrder
    session_user_id?: SortOrder
    session_active_organization_id?: SortOrderInput | SortOrder
    user_table?: User_tableOrderByWithRelationInput
  }

  export type Session_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    session_token?: string
    AND?: Session_tableWhereInput | Session_tableWhereInput[]
    OR?: Session_tableWhereInput[]
    NOT?: Session_tableWhereInput | Session_tableWhereInput[]
    session_expired_at?: DateTimeFilter<"Session_table"> | Date | string
    session_created_at?: DateTimeFilter<"Session_table"> | Date | string
    session_updated_at?: DateTimeFilter<"Session_table"> | Date | string
    session_ip_address?: StringNullableFilter<"Session_table"> | string | null
    session_user_agent?: StringNullableFilter<"Session_table"> | string | null
    session_user_id?: StringFilter<"Session_table"> | string
    session_active_organization_id?: StringNullableFilter<"Session_table"> | string | null
    user_table?: XOR<User_tableScalarRelationFilter, User_tableWhereInput>
  }, "id" | "session_token">

  export type Session_tableOrderByWithAggregationInput = {
    id?: SortOrder
    session_expired_at?: SortOrder
    session_token?: SortOrder
    session_created_at?: SortOrder
    session_updated_at?: SortOrder
    session_ip_address?: SortOrderInput | SortOrder
    session_user_agent?: SortOrderInput | SortOrder
    session_user_id?: SortOrder
    session_active_organization_id?: SortOrderInput | SortOrder
    _count?: Session_tableCountOrderByAggregateInput
    _max?: Session_tableMaxOrderByAggregateInput
    _min?: Session_tableMinOrderByAggregateInput
  }

  export type Session_tableScalarWhereWithAggregatesInput = {
    AND?: Session_tableScalarWhereWithAggregatesInput | Session_tableScalarWhereWithAggregatesInput[]
    OR?: Session_tableScalarWhereWithAggregatesInput[]
    NOT?: Session_tableScalarWhereWithAggregatesInput | Session_tableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session_table"> | string
    session_expired_at?: DateTimeWithAggregatesFilter<"Session_table"> | Date | string
    session_token?: StringWithAggregatesFilter<"Session_table"> | string
    session_created_at?: DateTimeWithAggregatesFilter<"Session_table"> | Date | string
    session_updated_at?: DateTimeWithAggregatesFilter<"Session_table"> | Date | string
    session_ip_address?: StringNullableWithAggregatesFilter<"Session_table"> | string | null
    session_user_agent?: StringNullableWithAggregatesFilter<"Session_table"> | string | null
    session_user_id?: StringWithAggregatesFilter<"Session_table"> | string
    session_active_organization_id?: StringNullableWithAggregatesFilter<"Session_table"> | string | null
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
    user_account_access_token?: SortOrderInput | SortOrder
    user_account_refresh_token?: SortOrderInput | SortOrder
    user_account_id_token?: SortOrderInput | SortOrder
    user_account_access_token_expires_at?: SortOrderInput | SortOrder
    user_account_scope?: SortOrderInput | SortOrder
    user_account_password?: SortOrderInput | SortOrder
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
    user_account_access_token?: SortOrderInput | SortOrder
    user_account_refresh_token?: SortOrderInput | SortOrder
    user_account_id_token?: SortOrderInput | SortOrder
    user_account_access_token_expires_at?: SortOrderInput | SortOrder
    user_account_scope?: SortOrderInput | SortOrder
    user_account_password?: SortOrderInput | SortOrder
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
    verification_created_at?: SortOrderInput | SortOrder
    verification_updated_at?: SortOrderInput | SortOrder
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
    verification_created_at?: SortOrderInput | SortOrder
    verification_updated_at?: SortOrderInput | SortOrder
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

  export type Organization_tableWhereInput = {
    AND?: Organization_tableWhereInput | Organization_tableWhereInput[]
    OR?: Organization_tableWhereInput[]
    NOT?: Organization_tableWhereInput | Organization_tableWhereInput[]
    id?: StringFilter<"Organization_table"> | string
    organization_name?: StringFilter<"Organization_table"> | string
    organization_slug?: StringNullableFilter<"Organization_table"> | string | null
    organization_logo?: StringNullableFilter<"Organization_table"> | string | null
    organization_created_at?: DateTimeFilter<"Organization_table"> | Date | string
    organization_metadata?: StringNullableFilter<"Organization_table"> | string | null
    member_tables?: Member_tableListRelationFilter
    invitation_tables?: Invitation_tableListRelationFilter
  }

  export type Organization_tableOrderByWithRelationInput = {
    id?: SortOrder
    organization_name?: SortOrder
    organization_slug?: SortOrderInput | SortOrder
    organization_logo?: SortOrderInput | SortOrder
    organization_created_at?: SortOrder
    organization_metadata?: SortOrderInput | SortOrder
    member_tables?: Member_tableOrderByRelationAggregateInput
    invitation_tables?: Invitation_tableOrderByRelationAggregateInput
  }

  export type Organization_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    organization_slug?: string
    AND?: Organization_tableWhereInput | Organization_tableWhereInput[]
    OR?: Organization_tableWhereInput[]
    NOT?: Organization_tableWhereInput | Organization_tableWhereInput[]
    organization_name?: StringFilter<"Organization_table"> | string
    organization_logo?: StringNullableFilter<"Organization_table"> | string | null
    organization_created_at?: DateTimeFilter<"Organization_table"> | Date | string
    organization_metadata?: StringNullableFilter<"Organization_table"> | string | null
    member_tables?: Member_tableListRelationFilter
    invitation_tables?: Invitation_tableListRelationFilter
  }, "id" | "organization_slug">

  export type Organization_tableOrderByWithAggregationInput = {
    id?: SortOrder
    organization_name?: SortOrder
    organization_slug?: SortOrderInput | SortOrder
    organization_logo?: SortOrderInput | SortOrder
    organization_created_at?: SortOrder
    organization_metadata?: SortOrderInput | SortOrder
    _count?: Organization_tableCountOrderByAggregateInput
    _max?: Organization_tableMaxOrderByAggregateInput
    _min?: Organization_tableMinOrderByAggregateInput
  }

  export type Organization_tableScalarWhereWithAggregatesInput = {
    AND?: Organization_tableScalarWhereWithAggregatesInput | Organization_tableScalarWhereWithAggregatesInput[]
    OR?: Organization_tableScalarWhereWithAggregatesInput[]
    NOT?: Organization_tableScalarWhereWithAggregatesInput | Organization_tableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization_table"> | string
    organization_name?: StringWithAggregatesFilter<"Organization_table"> | string
    organization_slug?: StringNullableWithAggregatesFilter<"Organization_table"> | string | null
    organization_logo?: StringNullableWithAggregatesFilter<"Organization_table"> | string | null
    organization_created_at?: DateTimeWithAggregatesFilter<"Organization_table"> | Date | string
    organization_metadata?: StringNullableWithAggregatesFilter<"Organization_table"> | string | null
  }

  export type Member_tableWhereInput = {
    AND?: Member_tableWhereInput | Member_tableWhereInput[]
    OR?: Member_tableWhereInput[]
    NOT?: Member_tableWhereInput | Member_tableWhereInput[]
    id?: StringFilter<"Member_table"> | string
    organizationId?: StringFilter<"Member_table"> | string
    userId?: StringFilter<"Member_table"> | string
    member_role?: StringFilter<"Member_table"> | string
    member_created_at?: DateTimeFilter<"Member_table"> | Date | string
    member_is_onboarded?: BoolNullableFilter<"Member_table"> | boolean | null
    member_position?: StringNullableFilter<"Member_table"> | string | null
    member_bio?: StringNullableFilter<"Member_table"> | string | null
    organization_table?: XOR<Organization_tableScalarRelationFilter, Organization_tableWhereInput>
    user_table?: XOR<User_tableScalarRelationFilter, User_tableWhereInput>
    company_log_table?: Company_log_tableListRelationFilter
  }

  export type Member_tableOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    member_role?: SortOrder
    member_created_at?: SortOrder
    member_is_onboarded?: SortOrderInput | SortOrder
    member_position?: SortOrderInput | SortOrder
    member_bio?: SortOrderInput | SortOrder
    organization_table?: Organization_tableOrderByWithRelationInput
    user_table?: User_tableOrderByWithRelationInput
    company_log_table?: company_log_tableOrderByRelationAggregateInput
  }

  export type Member_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Member_tableWhereInput | Member_tableWhereInput[]
    OR?: Member_tableWhereInput[]
    NOT?: Member_tableWhereInput | Member_tableWhereInput[]
    organizationId?: StringFilter<"Member_table"> | string
    userId?: StringFilter<"Member_table"> | string
    member_role?: StringFilter<"Member_table"> | string
    member_created_at?: DateTimeFilter<"Member_table"> | Date | string
    member_is_onboarded?: BoolNullableFilter<"Member_table"> | boolean | null
    member_position?: StringNullableFilter<"Member_table"> | string | null
    member_bio?: StringNullableFilter<"Member_table"> | string | null
    organization_table?: XOR<Organization_tableScalarRelationFilter, Organization_tableWhereInput>
    user_table?: XOR<User_tableScalarRelationFilter, User_tableWhereInput>
    company_log_table?: Company_log_tableListRelationFilter
  }, "id">

  export type Member_tableOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    member_role?: SortOrder
    member_created_at?: SortOrder
    member_is_onboarded?: SortOrderInput | SortOrder
    member_position?: SortOrderInput | SortOrder
    member_bio?: SortOrderInput | SortOrder
    _count?: Member_tableCountOrderByAggregateInput
    _max?: Member_tableMaxOrderByAggregateInput
    _min?: Member_tableMinOrderByAggregateInput
  }

  export type Member_tableScalarWhereWithAggregatesInput = {
    AND?: Member_tableScalarWhereWithAggregatesInput | Member_tableScalarWhereWithAggregatesInput[]
    OR?: Member_tableScalarWhereWithAggregatesInput[]
    NOT?: Member_tableScalarWhereWithAggregatesInput | Member_tableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member_table"> | string
    organizationId?: StringWithAggregatesFilter<"Member_table"> | string
    userId?: StringWithAggregatesFilter<"Member_table"> | string
    member_role?: StringWithAggregatesFilter<"Member_table"> | string
    member_created_at?: DateTimeWithAggregatesFilter<"Member_table"> | Date | string
    member_is_onboarded?: BoolNullableWithAggregatesFilter<"Member_table"> | boolean | null
    member_position?: StringNullableWithAggregatesFilter<"Member_table"> | string | null
    member_bio?: StringNullableWithAggregatesFilter<"Member_table"> | string | null
  }

  export type Invitation_tableWhereInput = {
    AND?: Invitation_tableWhereInput | Invitation_tableWhereInput[]
    OR?: Invitation_tableWhereInput[]
    NOT?: Invitation_tableWhereInput | Invitation_tableWhereInput[]
    id?: StringFilter<"Invitation_table"> | string
    organization_id?: StringFilter<"Invitation_table"> | string
    invitation_email?: StringFilter<"Invitation_table"> | string
    invitation_role?: StringNullableFilter<"Invitation_table"> | string | null
    invitation_status?: StringFilter<"Invitation_table"> | string
    invitation_expires_at?: DateTimeFilter<"Invitation_table"> | Date | string
    invitation_inviter_id?: StringFilter<"Invitation_table"> | string
    organization_table?: XOR<Organization_tableScalarRelationFilter, Organization_tableWhereInput>
    user_table?: XOR<User_tableScalarRelationFilter, User_tableWhereInput>
  }

  export type Invitation_tableOrderByWithRelationInput = {
    id?: SortOrder
    organization_id?: SortOrder
    invitation_email?: SortOrder
    invitation_role?: SortOrderInput | SortOrder
    invitation_status?: SortOrder
    invitation_expires_at?: SortOrder
    invitation_inviter_id?: SortOrder
    organization_table?: Organization_tableOrderByWithRelationInput
    user_table?: User_tableOrderByWithRelationInput
  }

  export type Invitation_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Invitation_tableWhereInput | Invitation_tableWhereInput[]
    OR?: Invitation_tableWhereInput[]
    NOT?: Invitation_tableWhereInput | Invitation_tableWhereInput[]
    organization_id?: StringFilter<"Invitation_table"> | string
    invitation_email?: StringFilter<"Invitation_table"> | string
    invitation_role?: StringNullableFilter<"Invitation_table"> | string | null
    invitation_status?: StringFilter<"Invitation_table"> | string
    invitation_expires_at?: DateTimeFilter<"Invitation_table"> | Date | string
    invitation_inviter_id?: StringFilter<"Invitation_table"> | string
    organization_table?: XOR<Organization_tableScalarRelationFilter, Organization_tableWhereInput>
    user_table?: XOR<User_tableScalarRelationFilter, User_tableWhereInput>
  }, "id">

  export type Invitation_tableOrderByWithAggregationInput = {
    id?: SortOrder
    organization_id?: SortOrder
    invitation_email?: SortOrder
    invitation_role?: SortOrderInput | SortOrder
    invitation_status?: SortOrder
    invitation_expires_at?: SortOrder
    invitation_inviter_id?: SortOrder
    _count?: Invitation_tableCountOrderByAggregateInput
    _max?: Invitation_tableMaxOrderByAggregateInput
    _min?: Invitation_tableMinOrderByAggregateInput
  }

  export type Invitation_tableScalarWhereWithAggregatesInput = {
    AND?: Invitation_tableScalarWhereWithAggregatesInput | Invitation_tableScalarWhereWithAggregatesInput[]
    OR?: Invitation_tableScalarWhereWithAggregatesInput[]
    NOT?: Invitation_tableScalarWhereWithAggregatesInput | Invitation_tableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invitation_table"> | string
    organization_id?: StringWithAggregatesFilter<"Invitation_table"> | string
    invitation_email?: StringWithAggregatesFilter<"Invitation_table"> | string
    invitation_role?: StringNullableWithAggregatesFilter<"Invitation_table"> | string | null
    invitation_status?: StringWithAggregatesFilter<"Invitation_table"> | string
    invitation_expires_at?: DateTimeWithAggregatesFilter<"Invitation_table"> | Date | string
    invitation_inviter_id?: StringWithAggregatesFilter<"Invitation_table"> | string
  }

  export type company_log_tableWhereInput = {
    AND?: company_log_tableWhereInput | company_log_tableWhereInput[]
    OR?: company_log_tableWhereInput[]
    NOT?: company_log_tableWhereInput | company_log_tableWhereInput[]
    id?: StringFilter<"company_log_table"> | string
    company_log_created_at?: DateTimeFilter<"company_log_table"> | Date | string
    company_log_time_in?: DateTimeFilter<"company_log_table"> | Date | string
    company_log_time_out?: DateTimeNullableFilter<"company_log_table"> | Date | string | null
    company_log_member_id?: StringFilter<"company_log_table"> | string
    member?: XOR<Member_tableScalarRelationFilter, Member_tableWhereInput>
    tasks?: Company_log_task_tableListRelationFilter
  }

  export type company_log_tableOrderByWithRelationInput = {
    id?: SortOrder
    company_log_created_at?: SortOrder
    company_log_time_in?: SortOrder
    company_log_time_out?: SortOrderInput | SortOrder
    company_log_member_id?: SortOrder
    member?: Member_tableOrderByWithRelationInput
    tasks?: company_log_task_tableOrderByRelationAggregateInput
  }

  export type company_log_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: company_log_tableWhereInput | company_log_tableWhereInput[]
    OR?: company_log_tableWhereInput[]
    NOT?: company_log_tableWhereInput | company_log_tableWhereInput[]
    company_log_created_at?: DateTimeFilter<"company_log_table"> | Date | string
    company_log_time_in?: DateTimeFilter<"company_log_table"> | Date | string
    company_log_time_out?: DateTimeNullableFilter<"company_log_table"> | Date | string | null
    company_log_member_id?: StringFilter<"company_log_table"> | string
    member?: XOR<Member_tableScalarRelationFilter, Member_tableWhereInput>
    tasks?: Company_log_task_tableListRelationFilter
  }, "id">

  export type company_log_tableOrderByWithAggregationInput = {
    id?: SortOrder
    company_log_created_at?: SortOrder
    company_log_time_in?: SortOrder
    company_log_time_out?: SortOrderInput | SortOrder
    company_log_member_id?: SortOrder
    _count?: company_log_tableCountOrderByAggregateInput
    _max?: company_log_tableMaxOrderByAggregateInput
    _min?: company_log_tableMinOrderByAggregateInput
  }

  export type company_log_tableScalarWhereWithAggregatesInput = {
    AND?: company_log_tableScalarWhereWithAggregatesInput | company_log_tableScalarWhereWithAggregatesInput[]
    OR?: company_log_tableScalarWhereWithAggregatesInput[]
    NOT?: company_log_tableScalarWhereWithAggregatesInput | company_log_tableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"company_log_table"> | string
    company_log_created_at?: DateTimeWithAggregatesFilter<"company_log_table"> | Date | string
    company_log_time_in?: DateTimeWithAggregatesFilter<"company_log_table"> | Date | string
    company_log_time_out?: DateTimeNullableWithAggregatesFilter<"company_log_table"> | Date | string | null
    company_log_member_id?: StringWithAggregatesFilter<"company_log_table"> | string
  }

  export type company_log_task_tableWhereInput = {
    AND?: company_log_task_tableWhereInput | company_log_task_tableWhereInput[]
    OR?: company_log_task_tableWhereInput[]
    NOT?: company_log_task_tableWhereInput | company_log_task_tableWhereInput[]
    company_log_task_id?: StringFilter<"company_log_task_table"> | string
    company_log_task_log_id?: StringFilter<"company_log_task_table"> | string
    company_log_task_description?: StringFilter<"company_log_task_table"> | string
    company_log_task_created_at?: DateTimeFilter<"company_log_task_table"> | Date | string
    log?: XOR<Company_log_tableScalarRelationFilter, company_log_tableWhereInput>
  }

  export type company_log_task_tableOrderByWithRelationInput = {
    company_log_task_id?: SortOrder
    company_log_task_log_id?: SortOrder
    company_log_task_description?: SortOrder
    company_log_task_created_at?: SortOrder
    log?: company_log_tableOrderByWithRelationInput
  }

  export type company_log_task_tableWhereUniqueInput = Prisma.AtLeast<{
    company_log_task_id?: string
    AND?: company_log_task_tableWhereInput | company_log_task_tableWhereInput[]
    OR?: company_log_task_tableWhereInput[]
    NOT?: company_log_task_tableWhereInput | company_log_task_tableWhereInput[]
    company_log_task_log_id?: StringFilter<"company_log_task_table"> | string
    company_log_task_description?: StringFilter<"company_log_task_table"> | string
    company_log_task_created_at?: DateTimeFilter<"company_log_task_table"> | Date | string
    log?: XOR<Company_log_tableScalarRelationFilter, company_log_tableWhereInput>
  }, "company_log_task_id">

  export type company_log_task_tableOrderByWithAggregationInput = {
    company_log_task_id?: SortOrder
    company_log_task_log_id?: SortOrder
    company_log_task_description?: SortOrder
    company_log_task_created_at?: SortOrder
    _count?: company_log_task_tableCountOrderByAggregateInput
    _max?: company_log_task_tableMaxOrderByAggregateInput
    _min?: company_log_task_tableMinOrderByAggregateInput
  }

  export type company_log_task_tableScalarWhereWithAggregatesInput = {
    AND?: company_log_task_tableScalarWhereWithAggregatesInput | company_log_task_tableScalarWhereWithAggregatesInput[]
    OR?: company_log_task_tableScalarWhereWithAggregatesInput[]
    NOT?: company_log_task_tableScalarWhereWithAggregatesInput | company_log_task_tableScalarWhereWithAggregatesInput[]
    company_log_task_id?: StringWithAggregatesFilter<"company_log_task_table"> | string
    company_log_task_log_id?: StringWithAggregatesFilter<"company_log_task_table"> | string
    company_log_task_description?: StringWithAggregatesFilter<"company_log_task_table"> | string
    company_log_task_created_at?: DateTimeWithAggregatesFilter<"company_log_task_table"> | Date | string
  }

  export type User_tableCreateInput = {
    id?: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    session_tables?: Session_tableCreateNestedManyWithoutUser_tableInput
    user_account_tables?: User_account_tableCreateNestedManyWithoutUser_tableInput
    member_tables?: Member_tableCreateNestedManyWithoutUser_tableInput
    invitation_tables?: Invitation_tableCreateNestedManyWithoutUser_tableInput
  }

  export type User_tableUncheckedCreateInput = {
    id?: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    session_tables?: Session_tableUncheckedCreateNestedManyWithoutUser_tableInput
    user_account_tables?: User_account_tableUncheckedCreateNestedManyWithoutUser_tableInput
    member_tables?: Member_tableUncheckedCreateNestedManyWithoutUser_tableInput
    invitation_tables?: Invitation_tableUncheckedCreateNestedManyWithoutUser_tableInput
  }

  export type User_tableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_tables?: Session_tableUpdateManyWithoutUser_tableNestedInput
    user_account_tables?: User_account_tableUpdateManyWithoutUser_tableNestedInput
    member_tables?: Member_tableUpdateManyWithoutUser_tableNestedInput
    invitation_tables?: Invitation_tableUpdateManyWithoutUser_tableNestedInput
  }

  export type User_tableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_tables?: Session_tableUncheckedUpdateManyWithoutUser_tableNestedInput
    user_account_tables?: User_account_tableUncheckedUpdateManyWithoutUser_tableNestedInput
    member_tables?: Member_tableUncheckedUpdateManyWithoutUser_tableNestedInput
    invitation_tables?: Invitation_tableUncheckedUpdateManyWithoutUser_tableNestedInput
  }

  export type User_tableCreateManyInput = {
    id?: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
  }

  export type User_tableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_tableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Session_tableCreateInput = {
    id?: string
    session_expired_at: Date | string
    session_token: string
    session_created_at: Date | string
    session_updated_at: Date | string
    session_ip_address?: string | null
    session_user_agent?: string | null
    session_active_organization_id?: string | null
    user_table: User_tableCreateNestedOneWithoutSession_tablesInput
  }

  export type Session_tableUncheckedCreateInput = {
    id?: string
    session_expired_at: Date | string
    session_token: string
    session_created_at: Date | string
    session_updated_at: Date | string
    session_ip_address?: string | null
    session_user_agent?: string | null
    session_user_id: string
    session_active_organization_id?: string | null
  }

  export type Session_tableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_token?: StringFieldUpdateOperationsInput | string
    session_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    session_user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    session_active_organization_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_table?: User_tableUpdateOneRequiredWithoutSession_tablesNestedInput
  }

  export type Session_tableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_token?: StringFieldUpdateOperationsInput | string
    session_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    session_user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    session_user_id?: StringFieldUpdateOperationsInput | string
    session_active_organization_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Session_tableCreateManyInput = {
    id?: string
    session_expired_at: Date | string
    session_token: string
    session_created_at: Date | string
    session_updated_at: Date | string
    session_ip_address?: string | null
    session_user_agent?: string | null
    session_user_id: string
    session_active_organization_id?: string | null
  }

  export type Session_tableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_token?: StringFieldUpdateOperationsInput | string
    session_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    session_user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    session_active_organization_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Session_tableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_token?: StringFieldUpdateOperationsInput | string
    session_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    session_user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    session_user_id?: StringFieldUpdateOperationsInput | string
    session_active_organization_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_account_tableCreateInput = {
    id?: string
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
    id?: string
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
    id?: StringFieldUpdateOperationsInput | string
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
    id?: StringFieldUpdateOperationsInput | string
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
    id?: string
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
    id?: StringFieldUpdateOperationsInput | string
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
    id?: StringFieldUpdateOperationsInput | string
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
    id?: string
    verification_identifier: string
    verification_value: string
    verification_expires_at: Date | string
    verification_created_at?: Date | string | null
    verification_updated_at?: Date | string | null
  }

  export type Verification_tableUncheckedCreateInput = {
    id?: string
    verification_identifier: string
    verification_value: string
    verification_expires_at: Date | string
    verification_created_at?: Date | string | null
    verification_updated_at?: Date | string | null
  }

  export type Verification_tableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    verification_identifier?: StringFieldUpdateOperationsInput | string
    verification_value?: StringFieldUpdateOperationsInput | string
    verification_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Verification_tableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    verification_identifier?: StringFieldUpdateOperationsInput | string
    verification_value?: StringFieldUpdateOperationsInput | string
    verification_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Verification_tableCreateManyInput = {
    id?: string
    verification_identifier: string
    verification_value: string
    verification_expires_at: Date | string
    verification_created_at?: Date | string | null
    verification_updated_at?: Date | string | null
  }

  export type Verification_tableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    verification_identifier?: StringFieldUpdateOperationsInput | string
    verification_value?: StringFieldUpdateOperationsInput | string
    verification_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Verification_tableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    verification_identifier?: StringFieldUpdateOperationsInput | string
    verification_value?: StringFieldUpdateOperationsInput | string
    verification_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verification_updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Organization_tableCreateInput = {
    id?: string
    organization_name: string
    organization_slug?: string | null
    organization_logo?: string | null
    organization_created_at: Date | string
    organization_metadata?: string | null
    member_tables?: Member_tableCreateNestedManyWithoutOrganization_tableInput
    invitation_tables?: Invitation_tableCreateNestedManyWithoutOrganization_tableInput
  }

  export type Organization_tableUncheckedCreateInput = {
    id?: string
    organization_name: string
    organization_slug?: string | null
    organization_logo?: string | null
    organization_created_at: Date | string
    organization_metadata?: string | null
    member_tables?: Member_tableUncheckedCreateNestedManyWithoutOrganization_tableInput
    invitation_tables?: Invitation_tableUncheckedCreateNestedManyWithoutOrganization_tableInput
  }

  export type Organization_tableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_name?: StringFieldUpdateOperationsInput | string
    organization_slug?: NullableStringFieldUpdateOperationsInput | string | null
    organization_logo?: NullableStringFieldUpdateOperationsInput | string | null
    organization_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization_metadata?: NullableStringFieldUpdateOperationsInput | string | null
    member_tables?: Member_tableUpdateManyWithoutOrganization_tableNestedInput
    invitation_tables?: Invitation_tableUpdateManyWithoutOrganization_tableNestedInput
  }

  export type Organization_tableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_name?: StringFieldUpdateOperationsInput | string
    organization_slug?: NullableStringFieldUpdateOperationsInput | string | null
    organization_logo?: NullableStringFieldUpdateOperationsInput | string | null
    organization_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization_metadata?: NullableStringFieldUpdateOperationsInput | string | null
    member_tables?: Member_tableUncheckedUpdateManyWithoutOrganization_tableNestedInput
    invitation_tables?: Invitation_tableUncheckedUpdateManyWithoutOrganization_tableNestedInput
  }

  export type Organization_tableCreateManyInput = {
    id?: string
    organization_name: string
    organization_slug?: string | null
    organization_logo?: string | null
    organization_created_at: Date | string
    organization_metadata?: string | null
  }

  export type Organization_tableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_name?: StringFieldUpdateOperationsInput | string
    organization_slug?: NullableStringFieldUpdateOperationsInput | string | null
    organization_logo?: NullableStringFieldUpdateOperationsInput | string | null
    organization_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization_metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Organization_tableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_name?: StringFieldUpdateOperationsInput | string
    organization_slug?: NullableStringFieldUpdateOperationsInput | string | null
    organization_logo?: NullableStringFieldUpdateOperationsInput | string | null
    organization_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization_metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Member_tableCreateInput = {
    id?: string
    member_role: string
    member_created_at: Date | string
    member_is_onboarded?: boolean | null
    member_position?: string | null
    member_bio?: string | null
    organization_table: Organization_tableCreateNestedOneWithoutMember_tablesInput
    user_table: User_tableCreateNestedOneWithoutMember_tablesInput
    company_log_table?: company_log_tableCreateNestedManyWithoutMemberInput
  }

  export type Member_tableUncheckedCreateInput = {
    id?: string
    organizationId: string
    userId: string
    member_role: string
    member_created_at: Date | string
    member_is_onboarded?: boolean | null
    member_position?: string | null
    member_bio?: string | null
    company_log_table?: company_log_tableUncheckedCreateNestedManyWithoutMemberInput
  }

  export type Member_tableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_role?: StringFieldUpdateOperationsInput | string
    member_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    member_position?: NullableStringFieldUpdateOperationsInput | string | null
    member_bio?: NullableStringFieldUpdateOperationsInput | string | null
    organization_table?: Organization_tableUpdateOneRequiredWithoutMember_tablesNestedInput
    user_table?: User_tableUpdateOneRequiredWithoutMember_tablesNestedInput
    company_log_table?: company_log_tableUpdateManyWithoutMemberNestedInput
  }

  export type Member_tableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    member_role?: StringFieldUpdateOperationsInput | string
    member_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    member_position?: NullableStringFieldUpdateOperationsInput | string | null
    member_bio?: NullableStringFieldUpdateOperationsInput | string | null
    company_log_table?: company_log_tableUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type Member_tableCreateManyInput = {
    id?: string
    organizationId: string
    userId: string
    member_role: string
    member_created_at: Date | string
    member_is_onboarded?: boolean | null
    member_position?: string | null
    member_bio?: string | null
  }

  export type Member_tableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_role?: StringFieldUpdateOperationsInput | string
    member_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    member_position?: NullableStringFieldUpdateOperationsInput | string | null
    member_bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Member_tableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    member_role?: StringFieldUpdateOperationsInput | string
    member_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    member_position?: NullableStringFieldUpdateOperationsInput | string | null
    member_bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Invitation_tableCreateInput = {
    id?: string
    invitation_email: string
    invitation_role?: string | null
    invitation_status: string
    invitation_expires_at: Date | string
    organization_table: Organization_tableCreateNestedOneWithoutInvitation_tablesInput
    user_table: User_tableCreateNestedOneWithoutInvitation_tablesInput
  }

  export type Invitation_tableUncheckedCreateInput = {
    id?: string
    organization_id: string
    invitation_email: string
    invitation_role?: string | null
    invitation_status: string
    invitation_expires_at: Date | string
    invitation_inviter_id: string
  }

  export type Invitation_tableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitation_email?: StringFieldUpdateOperationsInput | string
    invitation_role?: NullableStringFieldUpdateOperationsInput | string | null
    invitation_status?: StringFieldUpdateOperationsInput | string
    invitation_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization_table?: Organization_tableUpdateOneRequiredWithoutInvitation_tablesNestedInput
    user_table?: User_tableUpdateOneRequiredWithoutInvitation_tablesNestedInput
  }

  export type Invitation_tableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    invitation_email?: StringFieldUpdateOperationsInput | string
    invitation_role?: NullableStringFieldUpdateOperationsInput | string | null
    invitation_status?: StringFieldUpdateOperationsInput | string
    invitation_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation_inviter_id?: StringFieldUpdateOperationsInput | string
  }

  export type Invitation_tableCreateManyInput = {
    id?: string
    organization_id: string
    invitation_email: string
    invitation_role?: string | null
    invitation_status: string
    invitation_expires_at: Date | string
    invitation_inviter_id: string
  }

  export type Invitation_tableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitation_email?: StringFieldUpdateOperationsInput | string
    invitation_role?: NullableStringFieldUpdateOperationsInput | string | null
    invitation_status?: StringFieldUpdateOperationsInput | string
    invitation_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Invitation_tableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    invitation_email?: StringFieldUpdateOperationsInput | string
    invitation_role?: NullableStringFieldUpdateOperationsInput | string | null
    invitation_status?: StringFieldUpdateOperationsInput | string
    invitation_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation_inviter_id?: StringFieldUpdateOperationsInput | string
  }

  export type company_log_tableCreateInput = {
    id?: string
    company_log_created_at?: Date | string
    company_log_time_in?: Date | string
    company_log_time_out?: Date | string | null
    member: Member_tableCreateNestedOneWithoutCompany_log_tableInput
    tasks?: company_log_task_tableCreateNestedManyWithoutLogInput
  }

  export type company_log_tableUncheckedCreateInput = {
    id?: string
    company_log_created_at?: Date | string
    company_log_time_in?: Date | string
    company_log_time_out?: Date | string | null
    company_log_member_id: string
    tasks?: company_log_task_tableUncheckedCreateNestedManyWithoutLogInput
  }

  export type company_log_tableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_log_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_log_time_in?: DateTimeFieldUpdateOperationsInput | Date | string
    company_log_time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: Member_tableUpdateOneRequiredWithoutCompany_log_tableNestedInput
    tasks?: company_log_task_tableUpdateManyWithoutLogNestedInput
  }

  export type company_log_tableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_log_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_log_time_in?: DateTimeFieldUpdateOperationsInput | Date | string
    company_log_time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_log_member_id?: StringFieldUpdateOperationsInput | string
    tasks?: company_log_task_tableUncheckedUpdateManyWithoutLogNestedInput
  }

  export type company_log_tableCreateManyInput = {
    id?: string
    company_log_created_at?: Date | string
    company_log_time_in?: Date | string
    company_log_time_out?: Date | string | null
    company_log_member_id: string
  }

  export type company_log_tableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_log_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_log_time_in?: DateTimeFieldUpdateOperationsInput | Date | string
    company_log_time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type company_log_tableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_log_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_log_time_in?: DateTimeFieldUpdateOperationsInput | Date | string
    company_log_time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_log_member_id?: StringFieldUpdateOperationsInput | string
  }

  export type company_log_task_tableCreateInput = {
    company_log_task_id?: string
    company_log_task_description: string
    company_log_task_created_at?: Date | string
    log: company_log_tableCreateNestedOneWithoutTasksInput
  }

  export type company_log_task_tableUncheckedCreateInput = {
    company_log_task_id?: string
    company_log_task_log_id: string
    company_log_task_description: string
    company_log_task_created_at?: Date | string
  }

  export type company_log_task_tableUpdateInput = {
    company_log_task_id?: StringFieldUpdateOperationsInput | string
    company_log_task_description?: StringFieldUpdateOperationsInput | string
    company_log_task_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: company_log_tableUpdateOneRequiredWithoutTasksNestedInput
  }

  export type company_log_task_tableUncheckedUpdateInput = {
    company_log_task_id?: StringFieldUpdateOperationsInput | string
    company_log_task_log_id?: StringFieldUpdateOperationsInput | string
    company_log_task_description?: StringFieldUpdateOperationsInput | string
    company_log_task_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type company_log_task_tableCreateManyInput = {
    company_log_task_id?: string
    company_log_task_log_id: string
    company_log_task_description: string
    company_log_task_created_at?: Date | string
  }

  export type company_log_task_tableUpdateManyMutationInput = {
    company_log_task_id?: StringFieldUpdateOperationsInput | string
    company_log_task_description?: StringFieldUpdateOperationsInput | string
    company_log_task_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type company_log_task_tableUncheckedUpdateManyInput = {
    company_log_task_id?: StringFieldUpdateOperationsInput | string
    company_log_task_log_id?: StringFieldUpdateOperationsInput | string
    company_log_task_description?: StringFieldUpdateOperationsInput | string
    company_log_task_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type Session_tableListRelationFilter = {
    every?: Session_tableWhereInput
    some?: Session_tableWhereInput
    none?: Session_tableWhereInput
  }

  export type User_account_tableListRelationFilter = {
    every?: User_account_tableWhereInput
    some?: User_account_tableWhereInput
    none?: User_account_tableWhereInput
  }

  export type Member_tableListRelationFilter = {
    every?: Member_tableWhereInput
    some?: Member_tableWhereInput
    none?: Member_tableWhereInput
  }

  export type Invitation_tableListRelationFilter = {
    every?: Invitation_tableWhereInput
    some?: Invitation_tableWhereInput
    none?: Invitation_tableWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Session_tableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type User_account_tableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Member_tableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Invitation_tableOrderByRelationAggregateInput = {
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
  }

  export type User_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_email_verified?: SortOrder
    user_image?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
  }

  export type User_tableMinOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    user_email?: SortOrder
    user_email_verified?: SortOrder
    user_image?: SortOrder
    user_created_at?: SortOrder
    user_updated_at?: SortOrder
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

  export type User_tableScalarRelationFilter = {
    is?: User_tableWhereInput
    isNot?: User_tableWhereInput
  }

  export type Session_tableCountOrderByAggregateInput = {
    id?: SortOrder
    session_expired_at?: SortOrder
    session_token?: SortOrder
    session_created_at?: SortOrder
    session_updated_at?: SortOrder
    session_ip_address?: SortOrder
    session_user_agent?: SortOrder
    session_user_id?: SortOrder
    session_active_organization_id?: SortOrder
  }

  export type Session_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    session_expired_at?: SortOrder
    session_token?: SortOrder
    session_created_at?: SortOrder
    session_updated_at?: SortOrder
    session_ip_address?: SortOrder
    session_user_agent?: SortOrder
    session_user_id?: SortOrder
    session_active_organization_id?: SortOrder
  }

  export type Session_tableMinOrderByAggregateInput = {
    id?: SortOrder
    session_expired_at?: SortOrder
    session_token?: SortOrder
    session_created_at?: SortOrder
    session_updated_at?: SortOrder
    session_ip_address?: SortOrder
    session_user_agent?: SortOrder
    session_user_id?: SortOrder
    session_active_organization_id?: SortOrder
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

  export type Organization_tableCountOrderByAggregateInput = {
    id?: SortOrder
    organization_name?: SortOrder
    organization_slug?: SortOrder
    organization_logo?: SortOrder
    organization_created_at?: SortOrder
    organization_metadata?: SortOrder
  }

  export type Organization_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    organization_name?: SortOrder
    organization_slug?: SortOrder
    organization_logo?: SortOrder
    organization_created_at?: SortOrder
    organization_metadata?: SortOrder
  }

  export type Organization_tableMinOrderByAggregateInput = {
    id?: SortOrder
    organization_name?: SortOrder
    organization_slug?: SortOrder
    organization_logo?: SortOrder
    organization_created_at?: SortOrder
    organization_metadata?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Organization_tableScalarRelationFilter = {
    is?: Organization_tableWhereInput
    isNot?: Organization_tableWhereInput
  }

  export type Company_log_tableListRelationFilter = {
    every?: company_log_tableWhereInput
    some?: company_log_tableWhereInput
    none?: company_log_tableWhereInput
  }

  export type company_log_tableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Member_tableCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    member_role?: SortOrder
    member_created_at?: SortOrder
    member_is_onboarded?: SortOrder
    member_position?: SortOrder
    member_bio?: SortOrder
  }

  export type Member_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    member_role?: SortOrder
    member_created_at?: SortOrder
    member_is_onboarded?: SortOrder
    member_position?: SortOrder
    member_bio?: SortOrder
  }

  export type Member_tableMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    member_role?: SortOrder
    member_created_at?: SortOrder
    member_is_onboarded?: SortOrder
    member_position?: SortOrder
    member_bio?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Invitation_tableCountOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
    invitation_email?: SortOrder
    invitation_role?: SortOrder
    invitation_status?: SortOrder
    invitation_expires_at?: SortOrder
    invitation_inviter_id?: SortOrder
  }

  export type Invitation_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
    invitation_email?: SortOrder
    invitation_role?: SortOrder
    invitation_status?: SortOrder
    invitation_expires_at?: SortOrder
    invitation_inviter_id?: SortOrder
  }

  export type Invitation_tableMinOrderByAggregateInput = {
    id?: SortOrder
    organization_id?: SortOrder
    invitation_email?: SortOrder
    invitation_role?: SortOrder
    invitation_status?: SortOrder
    invitation_expires_at?: SortOrder
    invitation_inviter_id?: SortOrder
  }

  export type Member_tableScalarRelationFilter = {
    is?: Member_tableWhereInput
    isNot?: Member_tableWhereInput
  }

  export type Company_log_task_tableListRelationFilter = {
    every?: company_log_task_tableWhereInput
    some?: company_log_task_tableWhereInput
    none?: company_log_task_tableWhereInput
  }

  export type company_log_task_tableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type company_log_tableCountOrderByAggregateInput = {
    id?: SortOrder
    company_log_created_at?: SortOrder
    company_log_time_in?: SortOrder
    company_log_time_out?: SortOrder
    company_log_member_id?: SortOrder
  }

  export type company_log_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    company_log_created_at?: SortOrder
    company_log_time_in?: SortOrder
    company_log_time_out?: SortOrder
    company_log_member_id?: SortOrder
  }

  export type company_log_tableMinOrderByAggregateInput = {
    id?: SortOrder
    company_log_created_at?: SortOrder
    company_log_time_in?: SortOrder
    company_log_time_out?: SortOrder
    company_log_member_id?: SortOrder
  }

  export type Company_log_tableScalarRelationFilter = {
    is?: company_log_tableWhereInput
    isNot?: company_log_tableWhereInput
  }

  export type company_log_task_tableCountOrderByAggregateInput = {
    company_log_task_id?: SortOrder
    company_log_task_log_id?: SortOrder
    company_log_task_description?: SortOrder
    company_log_task_created_at?: SortOrder
  }

  export type company_log_task_tableMaxOrderByAggregateInput = {
    company_log_task_id?: SortOrder
    company_log_task_log_id?: SortOrder
    company_log_task_description?: SortOrder
    company_log_task_created_at?: SortOrder
  }

  export type company_log_task_tableMinOrderByAggregateInput = {
    company_log_task_id?: SortOrder
    company_log_task_log_id?: SortOrder
    company_log_task_description?: SortOrder
    company_log_task_created_at?: SortOrder
  }

  export type Session_tableCreateNestedManyWithoutUser_tableInput = {
    create?: XOR<Session_tableCreateWithoutUser_tableInput, Session_tableUncheckedCreateWithoutUser_tableInput> | Session_tableCreateWithoutUser_tableInput[] | Session_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: Session_tableCreateOrConnectWithoutUser_tableInput | Session_tableCreateOrConnectWithoutUser_tableInput[]
    createMany?: Session_tableCreateManyUser_tableInputEnvelope
    connect?: Session_tableWhereUniqueInput | Session_tableWhereUniqueInput[]
  }

  export type User_account_tableCreateNestedManyWithoutUser_tableInput = {
    create?: XOR<User_account_tableCreateWithoutUser_tableInput, User_account_tableUncheckedCreateWithoutUser_tableInput> | User_account_tableCreateWithoutUser_tableInput[] | User_account_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: User_account_tableCreateOrConnectWithoutUser_tableInput | User_account_tableCreateOrConnectWithoutUser_tableInput[]
    createMany?: User_account_tableCreateManyUser_tableInputEnvelope
    connect?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
  }

  export type Member_tableCreateNestedManyWithoutUser_tableInput = {
    create?: XOR<Member_tableCreateWithoutUser_tableInput, Member_tableUncheckedCreateWithoutUser_tableInput> | Member_tableCreateWithoutUser_tableInput[] | Member_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: Member_tableCreateOrConnectWithoutUser_tableInput | Member_tableCreateOrConnectWithoutUser_tableInput[]
    createMany?: Member_tableCreateManyUser_tableInputEnvelope
    connect?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
  }

  export type Invitation_tableCreateNestedManyWithoutUser_tableInput = {
    create?: XOR<Invitation_tableCreateWithoutUser_tableInput, Invitation_tableUncheckedCreateWithoutUser_tableInput> | Invitation_tableCreateWithoutUser_tableInput[] | Invitation_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: Invitation_tableCreateOrConnectWithoutUser_tableInput | Invitation_tableCreateOrConnectWithoutUser_tableInput[]
    createMany?: Invitation_tableCreateManyUser_tableInputEnvelope
    connect?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
  }

  export type Session_tableUncheckedCreateNestedManyWithoutUser_tableInput = {
    create?: XOR<Session_tableCreateWithoutUser_tableInput, Session_tableUncheckedCreateWithoutUser_tableInput> | Session_tableCreateWithoutUser_tableInput[] | Session_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: Session_tableCreateOrConnectWithoutUser_tableInput | Session_tableCreateOrConnectWithoutUser_tableInput[]
    createMany?: Session_tableCreateManyUser_tableInputEnvelope
    connect?: Session_tableWhereUniqueInput | Session_tableWhereUniqueInput[]
  }

  export type User_account_tableUncheckedCreateNestedManyWithoutUser_tableInput = {
    create?: XOR<User_account_tableCreateWithoutUser_tableInput, User_account_tableUncheckedCreateWithoutUser_tableInput> | User_account_tableCreateWithoutUser_tableInput[] | User_account_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: User_account_tableCreateOrConnectWithoutUser_tableInput | User_account_tableCreateOrConnectWithoutUser_tableInput[]
    createMany?: User_account_tableCreateManyUser_tableInputEnvelope
    connect?: User_account_tableWhereUniqueInput | User_account_tableWhereUniqueInput[]
  }

  export type Member_tableUncheckedCreateNestedManyWithoutUser_tableInput = {
    create?: XOR<Member_tableCreateWithoutUser_tableInput, Member_tableUncheckedCreateWithoutUser_tableInput> | Member_tableCreateWithoutUser_tableInput[] | Member_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: Member_tableCreateOrConnectWithoutUser_tableInput | Member_tableCreateOrConnectWithoutUser_tableInput[]
    createMany?: Member_tableCreateManyUser_tableInputEnvelope
    connect?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
  }

  export type Invitation_tableUncheckedCreateNestedManyWithoutUser_tableInput = {
    create?: XOR<Invitation_tableCreateWithoutUser_tableInput, Invitation_tableUncheckedCreateWithoutUser_tableInput> | Invitation_tableCreateWithoutUser_tableInput[] | Invitation_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: Invitation_tableCreateOrConnectWithoutUser_tableInput | Invitation_tableCreateOrConnectWithoutUser_tableInput[]
    createMany?: Invitation_tableCreateManyUser_tableInputEnvelope
    connect?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Session_tableUpdateManyWithoutUser_tableNestedInput = {
    create?: XOR<Session_tableCreateWithoutUser_tableInput, Session_tableUncheckedCreateWithoutUser_tableInput> | Session_tableCreateWithoutUser_tableInput[] | Session_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: Session_tableCreateOrConnectWithoutUser_tableInput | Session_tableCreateOrConnectWithoutUser_tableInput[]
    upsert?: Session_tableUpsertWithWhereUniqueWithoutUser_tableInput | Session_tableUpsertWithWhereUniqueWithoutUser_tableInput[]
    createMany?: Session_tableCreateManyUser_tableInputEnvelope
    set?: Session_tableWhereUniqueInput | Session_tableWhereUniqueInput[]
    disconnect?: Session_tableWhereUniqueInput | Session_tableWhereUniqueInput[]
    delete?: Session_tableWhereUniqueInput | Session_tableWhereUniqueInput[]
    connect?: Session_tableWhereUniqueInput | Session_tableWhereUniqueInput[]
    update?: Session_tableUpdateWithWhereUniqueWithoutUser_tableInput | Session_tableUpdateWithWhereUniqueWithoutUser_tableInput[]
    updateMany?: Session_tableUpdateManyWithWhereWithoutUser_tableInput | Session_tableUpdateManyWithWhereWithoutUser_tableInput[]
    deleteMany?: Session_tableScalarWhereInput | Session_tableScalarWhereInput[]
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

  export type Member_tableUpdateManyWithoutUser_tableNestedInput = {
    create?: XOR<Member_tableCreateWithoutUser_tableInput, Member_tableUncheckedCreateWithoutUser_tableInput> | Member_tableCreateWithoutUser_tableInput[] | Member_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: Member_tableCreateOrConnectWithoutUser_tableInput | Member_tableCreateOrConnectWithoutUser_tableInput[]
    upsert?: Member_tableUpsertWithWhereUniqueWithoutUser_tableInput | Member_tableUpsertWithWhereUniqueWithoutUser_tableInput[]
    createMany?: Member_tableCreateManyUser_tableInputEnvelope
    set?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
    disconnect?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
    delete?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
    connect?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
    update?: Member_tableUpdateWithWhereUniqueWithoutUser_tableInput | Member_tableUpdateWithWhereUniqueWithoutUser_tableInput[]
    updateMany?: Member_tableUpdateManyWithWhereWithoutUser_tableInput | Member_tableUpdateManyWithWhereWithoutUser_tableInput[]
    deleteMany?: Member_tableScalarWhereInput | Member_tableScalarWhereInput[]
  }

  export type Invitation_tableUpdateManyWithoutUser_tableNestedInput = {
    create?: XOR<Invitation_tableCreateWithoutUser_tableInput, Invitation_tableUncheckedCreateWithoutUser_tableInput> | Invitation_tableCreateWithoutUser_tableInput[] | Invitation_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: Invitation_tableCreateOrConnectWithoutUser_tableInput | Invitation_tableCreateOrConnectWithoutUser_tableInput[]
    upsert?: Invitation_tableUpsertWithWhereUniqueWithoutUser_tableInput | Invitation_tableUpsertWithWhereUniqueWithoutUser_tableInput[]
    createMany?: Invitation_tableCreateManyUser_tableInputEnvelope
    set?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
    disconnect?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
    delete?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
    connect?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
    update?: Invitation_tableUpdateWithWhereUniqueWithoutUser_tableInput | Invitation_tableUpdateWithWhereUniqueWithoutUser_tableInput[]
    updateMany?: Invitation_tableUpdateManyWithWhereWithoutUser_tableInput | Invitation_tableUpdateManyWithWhereWithoutUser_tableInput[]
    deleteMany?: Invitation_tableScalarWhereInput | Invitation_tableScalarWhereInput[]
  }

  export type Session_tableUncheckedUpdateManyWithoutUser_tableNestedInput = {
    create?: XOR<Session_tableCreateWithoutUser_tableInput, Session_tableUncheckedCreateWithoutUser_tableInput> | Session_tableCreateWithoutUser_tableInput[] | Session_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: Session_tableCreateOrConnectWithoutUser_tableInput | Session_tableCreateOrConnectWithoutUser_tableInput[]
    upsert?: Session_tableUpsertWithWhereUniqueWithoutUser_tableInput | Session_tableUpsertWithWhereUniqueWithoutUser_tableInput[]
    createMany?: Session_tableCreateManyUser_tableInputEnvelope
    set?: Session_tableWhereUniqueInput | Session_tableWhereUniqueInput[]
    disconnect?: Session_tableWhereUniqueInput | Session_tableWhereUniqueInput[]
    delete?: Session_tableWhereUniqueInput | Session_tableWhereUniqueInput[]
    connect?: Session_tableWhereUniqueInput | Session_tableWhereUniqueInput[]
    update?: Session_tableUpdateWithWhereUniqueWithoutUser_tableInput | Session_tableUpdateWithWhereUniqueWithoutUser_tableInput[]
    updateMany?: Session_tableUpdateManyWithWhereWithoutUser_tableInput | Session_tableUpdateManyWithWhereWithoutUser_tableInput[]
    deleteMany?: Session_tableScalarWhereInput | Session_tableScalarWhereInput[]
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

  export type Member_tableUncheckedUpdateManyWithoutUser_tableNestedInput = {
    create?: XOR<Member_tableCreateWithoutUser_tableInput, Member_tableUncheckedCreateWithoutUser_tableInput> | Member_tableCreateWithoutUser_tableInput[] | Member_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: Member_tableCreateOrConnectWithoutUser_tableInput | Member_tableCreateOrConnectWithoutUser_tableInput[]
    upsert?: Member_tableUpsertWithWhereUniqueWithoutUser_tableInput | Member_tableUpsertWithWhereUniqueWithoutUser_tableInput[]
    createMany?: Member_tableCreateManyUser_tableInputEnvelope
    set?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
    disconnect?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
    delete?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
    connect?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
    update?: Member_tableUpdateWithWhereUniqueWithoutUser_tableInput | Member_tableUpdateWithWhereUniqueWithoutUser_tableInput[]
    updateMany?: Member_tableUpdateManyWithWhereWithoutUser_tableInput | Member_tableUpdateManyWithWhereWithoutUser_tableInput[]
    deleteMany?: Member_tableScalarWhereInput | Member_tableScalarWhereInput[]
  }

  export type Invitation_tableUncheckedUpdateManyWithoutUser_tableNestedInput = {
    create?: XOR<Invitation_tableCreateWithoutUser_tableInput, Invitation_tableUncheckedCreateWithoutUser_tableInput> | Invitation_tableCreateWithoutUser_tableInput[] | Invitation_tableUncheckedCreateWithoutUser_tableInput[]
    connectOrCreate?: Invitation_tableCreateOrConnectWithoutUser_tableInput | Invitation_tableCreateOrConnectWithoutUser_tableInput[]
    upsert?: Invitation_tableUpsertWithWhereUniqueWithoutUser_tableInput | Invitation_tableUpsertWithWhereUniqueWithoutUser_tableInput[]
    createMany?: Invitation_tableCreateManyUser_tableInputEnvelope
    set?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
    disconnect?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
    delete?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
    connect?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
    update?: Invitation_tableUpdateWithWhereUniqueWithoutUser_tableInput | Invitation_tableUpdateWithWhereUniqueWithoutUser_tableInput[]
    updateMany?: Invitation_tableUpdateManyWithWhereWithoutUser_tableInput | Invitation_tableUpdateManyWithWhereWithoutUser_tableInput[]
    deleteMany?: Invitation_tableScalarWhereInput | Invitation_tableScalarWhereInput[]
  }

  export type User_tableCreateNestedOneWithoutSession_tablesInput = {
    create?: XOR<User_tableCreateWithoutSession_tablesInput, User_tableUncheckedCreateWithoutSession_tablesInput>
    connectOrCreate?: User_tableCreateOrConnectWithoutSession_tablesInput
    connect?: User_tableWhereUniqueInput
  }

  export type User_tableUpdateOneRequiredWithoutSession_tablesNestedInput = {
    create?: XOR<User_tableCreateWithoutSession_tablesInput, User_tableUncheckedCreateWithoutSession_tablesInput>
    connectOrCreate?: User_tableCreateOrConnectWithoutSession_tablesInput
    upsert?: User_tableUpsertWithoutSession_tablesInput
    connect?: User_tableWhereUniqueInput
    update?: XOR<XOR<User_tableUpdateToOneWithWhereWithoutSession_tablesInput, User_tableUpdateWithoutSession_tablesInput>, User_tableUncheckedUpdateWithoutSession_tablesInput>
  }

  export type User_tableCreateNestedOneWithoutUser_account_tablesInput = {
    create?: XOR<User_tableCreateWithoutUser_account_tablesInput, User_tableUncheckedCreateWithoutUser_account_tablesInput>
    connectOrCreate?: User_tableCreateOrConnectWithoutUser_account_tablesInput
    connect?: User_tableWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type User_tableUpdateOneRequiredWithoutUser_account_tablesNestedInput = {
    create?: XOR<User_tableCreateWithoutUser_account_tablesInput, User_tableUncheckedCreateWithoutUser_account_tablesInput>
    connectOrCreate?: User_tableCreateOrConnectWithoutUser_account_tablesInput
    upsert?: User_tableUpsertWithoutUser_account_tablesInput
    connect?: User_tableWhereUniqueInput
    update?: XOR<XOR<User_tableUpdateToOneWithWhereWithoutUser_account_tablesInput, User_tableUpdateWithoutUser_account_tablesInput>, User_tableUncheckedUpdateWithoutUser_account_tablesInput>
  }

  export type Member_tableCreateNestedManyWithoutOrganization_tableInput = {
    create?: XOR<Member_tableCreateWithoutOrganization_tableInput, Member_tableUncheckedCreateWithoutOrganization_tableInput> | Member_tableCreateWithoutOrganization_tableInput[] | Member_tableUncheckedCreateWithoutOrganization_tableInput[]
    connectOrCreate?: Member_tableCreateOrConnectWithoutOrganization_tableInput | Member_tableCreateOrConnectWithoutOrganization_tableInput[]
    createMany?: Member_tableCreateManyOrganization_tableInputEnvelope
    connect?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
  }

  export type Invitation_tableCreateNestedManyWithoutOrganization_tableInput = {
    create?: XOR<Invitation_tableCreateWithoutOrganization_tableInput, Invitation_tableUncheckedCreateWithoutOrganization_tableInput> | Invitation_tableCreateWithoutOrganization_tableInput[] | Invitation_tableUncheckedCreateWithoutOrganization_tableInput[]
    connectOrCreate?: Invitation_tableCreateOrConnectWithoutOrganization_tableInput | Invitation_tableCreateOrConnectWithoutOrganization_tableInput[]
    createMany?: Invitation_tableCreateManyOrganization_tableInputEnvelope
    connect?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
  }

  export type Member_tableUncheckedCreateNestedManyWithoutOrganization_tableInput = {
    create?: XOR<Member_tableCreateWithoutOrganization_tableInput, Member_tableUncheckedCreateWithoutOrganization_tableInput> | Member_tableCreateWithoutOrganization_tableInput[] | Member_tableUncheckedCreateWithoutOrganization_tableInput[]
    connectOrCreate?: Member_tableCreateOrConnectWithoutOrganization_tableInput | Member_tableCreateOrConnectWithoutOrganization_tableInput[]
    createMany?: Member_tableCreateManyOrganization_tableInputEnvelope
    connect?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
  }

  export type Invitation_tableUncheckedCreateNestedManyWithoutOrganization_tableInput = {
    create?: XOR<Invitation_tableCreateWithoutOrganization_tableInput, Invitation_tableUncheckedCreateWithoutOrganization_tableInput> | Invitation_tableCreateWithoutOrganization_tableInput[] | Invitation_tableUncheckedCreateWithoutOrganization_tableInput[]
    connectOrCreate?: Invitation_tableCreateOrConnectWithoutOrganization_tableInput | Invitation_tableCreateOrConnectWithoutOrganization_tableInput[]
    createMany?: Invitation_tableCreateManyOrganization_tableInputEnvelope
    connect?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
  }

  export type Member_tableUpdateManyWithoutOrganization_tableNestedInput = {
    create?: XOR<Member_tableCreateWithoutOrganization_tableInput, Member_tableUncheckedCreateWithoutOrganization_tableInput> | Member_tableCreateWithoutOrganization_tableInput[] | Member_tableUncheckedCreateWithoutOrganization_tableInput[]
    connectOrCreate?: Member_tableCreateOrConnectWithoutOrganization_tableInput | Member_tableCreateOrConnectWithoutOrganization_tableInput[]
    upsert?: Member_tableUpsertWithWhereUniqueWithoutOrganization_tableInput | Member_tableUpsertWithWhereUniqueWithoutOrganization_tableInput[]
    createMany?: Member_tableCreateManyOrganization_tableInputEnvelope
    set?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
    disconnect?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
    delete?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
    connect?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
    update?: Member_tableUpdateWithWhereUniqueWithoutOrganization_tableInput | Member_tableUpdateWithWhereUniqueWithoutOrganization_tableInput[]
    updateMany?: Member_tableUpdateManyWithWhereWithoutOrganization_tableInput | Member_tableUpdateManyWithWhereWithoutOrganization_tableInput[]
    deleteMany?: Member_tableScalarWhereInput | Member_tableScalarWhereInput[]
  }

  export type Invitation_tableUpdateManyWithoutOrganization_tableNestedInput = {
    create?: XOR<Invitation_tableCreateWithoutOrganization_tableInput, Invitation_tableUncheckedCreateWithoutOrganization_tableInput> | Invitation_tableCreateWithoutOrganization_tableInput[] | Invitation_tableUncheckedCreateWithoutOrganization_tableInput[]
    connectOrCreate?: Invitation_tableCreateOrConnectWithoutOrganization_tableInput | Invitation_tableCreateOrConnectWithoutOrganization_tableInput[]
    upsert?: Invitation_tableUpsertWithWhereUniqueWithoutOrganization_tableInput | Invitation_tableUpsertWithWhereUniqueWithoutOrganization_tableInput[]
    createMany?: Invitation_tableCreateManyOrganization_tableInputEnvelope
    set?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
    disconnect?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
    delete?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
    connect?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
    update?: Invitation_tableUpdateWithWhereUniqueWithoutOrganization_tableInput | Invitation_tableUpdateWithWhereUniqueWithoutOrganization_tableInput[]
    updateMany?: Invitation_tableUpdateManyWithWhereWithoutOrganization_tableInput | Invitation_tableUpdateManyWithWhereWithoutOrganization_tableInput[]
    deleteMany?: Invitation_tableScalarWhereInput | Invitation_tableScalarWhereInput[]
  }

  export type Member_tableUncheckedUpdateManyWithoutOrganization_tableNestedInput = {
    create?: XOR<Member_tableCreateWithoutOrganization_tableInput, Member_tableUncheckedCreateWithoutOrganization_tableInput> | Member_tableCreateWithoutOrganization_tableInput[] | Member_tableUncheckedCreateWithoutOrganization_tableInput[]
    connectOrCreate?: Member_tableCreateOrConnectWithoutOrganization_tableInput | Member_tableCreateOrConnectWithoutOrganization_tableInput[]
    upsert?: Member_tableUpsertWithWhereUniqueWithoutOrganization_tableInput | Member_tableUpsertWithWhereUniqueWithoutOrganization_tableInput[]
    createMany?: Member_tableCreateManyOrganization_tableInputEnvelope
    set?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
    disconnect?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
    delete?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
    connect?: Member_tableWhereUniqueInput | Member_tableWhereUniqueInput[]
    update?: Member_tableUpdateWithWhereUniqueWithoutOrganization_tableInput | Member_tableUpdateWithWhereUniqueWithoutOrganization_tableInput[]
    updateMany?: Member_tableUpdateManyWithWhereWithoutOrganization_tableInput | Member_tableUpdateManyWithWhereWithoutOrganization_tableInput[]
    deleteMany?: Member_tableScalarWhereInput | Member_tableScalarWhereInput[]
  }

  export type Invitation_tableUncheckedUpdateManyWithoutOrganization_tableNestedInput = {
    create?: XOR<Invitation_tableCreateWithoutOrganization_tableInput, Invitation_tableUncheckedCreateWithoutOrganization_tableInput> | Invitation_tableCreateWithoutOrganization_tableInput[] | Invitation_tableUncheckedCreateWithoutOrganization_tableInput[]
    connectOrCreate?: Invitation_tableCreateOrConnectWithoutOrganization_tableInput | Invitation_tableCreateOrConnectWithoutOrganization_tableInput[]
    upsert?: Invitation_tableUpsertWithWhereUniqueWithoutOrganization_tableInput | Invitation_tableUpsertWithWhereUniqueWithoutOrganization_tableInput[]
    createMany?: Invitation_tableCreateManyOrganization_tableInputEnvelope
    set?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
    disconnect?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
    delete?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
    connect?: Invitation_tableWhereUniqueInput | Invitation_tableWhereUniqueInput[]
    update?: Invitation_tableUpdateWithWhereUniqueWithoutOrganization_tableInput | Invitation_tableUpdateWithWhereUniqueWithoutOrganization_tableInput[]
    updateMany?: Invitation_tableUpdateManyWithWhereWithoutOrganization_tableInput | Invitation_tableUpdateManyWithWhereWithoutOrganization_tableInput[]
    deleteMany?: Invitation_tableScalarWhereInput | Invitation_tableScalarWhereInput[]
  }

  export type Organization_tableCreateNestedOneWithoutMember_tablesInput = {
    create?: XOR<Organization_tableCreateWithoutMember_tablesInput, Organization_tableUncheckedCreateWithoutMember_tablesInput>
    connectOrCreate?: Organization_tableCreateOrConnectWithoutMember_tablesInput
    connect?: Organization_tableWhereUniqueInput
  }

  export type User_tableCreateNestedOneWithoutMember_tablesInput = {
    create?: XOR<User_tableCreateWithoutMember_tablesInput, User_tableUncheckedCreateWithoutMember_tablesInput>
    connectOrCreate?: User_tableCreateOrConnectWithoutMember_tablesInput
    connect?: User_tableWhereUniqueInput
  }

  export type company_log_tableCreateNestedManyWithoutMemberInput = {
    create?: XOR<company_log_tableCreateWithoutMemberInput, company_log_tableUncheckedCreateWithoutMemberInput> | company_log_tableCreateWithoutMemberInput[] | company_log_tableUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: company_log_tableCreateOrConnectWithoutMemberInput | company_log_tableCreateOrConnectWithoutMemberInput[]
    createMany?: company_log_tableCreateManyMemberInputEnvelope
    connect?: company_log_tableWhereUniqueInput | company_log_tableWhereUniqueInput[]
  }

  export type company_log_tableUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<company_log_tableCreateWithoutMemberInput, company_log_tableUncheckedCreateWithoutMemberInput> | company_log_tableCreateWithoutMemberInput[] | company_log_tableUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: company_log_tableCreateOrConnectWithoutMemberInput | company_log_tableCreateOrConnectWithoutMemberInput[]
    createMany?: company_log_tableCreateManyMemberInputEnvelope
    connect?: company_log_tableWhereUniqueInput | company_log_tableWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type Organization_tableUpdateOneRequiredWithoutMember_tablesNestedInput = {
    create?: XOR<Organization_tableCreateWithoutMember_tablesInput, Organization_tableUncheckedCreateWithoutMember_tablesInput>
    connectOrCreate?: Organization_tableCreateOrConnectWithoutMember_tablesInput
    upsert?: Organization_tableUpsertWithoutMember_tablesInput
    connect?: Organization_tableWhereUniqueInput
    update?: XOR<XOR<Organization_tableUpdateToOneWithWhereWithoutMember_tablesInput, Organization_tableUpdateWithoutMember_tablesInput>, Organization_tableUncheckedUpdateWithoutMember_tablesInput>
  }

  export type User_tableUpdateOneRequiredWithoutMember_tablesNestedInput = {
    create?: XOR<User_tableCreateWithoutMember_tablesInput, User_tableUncheckedCreateWithoutMember_tablesInput>
    connectOrCreate?: User_tableCreateOrConnectWithoutMember_tablesInput
    upsert?: User_tableUpsertWithoutMember_tablesInput
    connect?: User_tableWhereUniqueInput
    update?: XOR<XOR<User_tableUpdateToOneWithWhereWithoutMember_tablesInput, User_tableUpdateWithoutMember_tablesInput>, User_tableUncheckedUpdateWithoutMember_tablesInput>
  }

  export type company_log_tableUpdateManyWithoutMemberNestedInput = {
    create?: XOR<company_log_tableCreateWithoutMemberInput, company_log_tableUncheckedCreateWithoutMemberInput> | company_log_tableCreateWithoutMemberInput[] | company_log_tableUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: company_log_tableCreateOrConnectWithoutMemberInput | company_log_tableCreateOrConnectWithoutMemberInput[]
    upsert?: company_log_tableUpsertWithWhereUniqueWithoutMemberInput | company_log_tableUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: company_log_tableCreateManyMemberInputEnvelope
    set?: company_log_tableWhereUniqueInput | company_log_tableWhereUniqueInput[]
    disconnect?: company_log_tableWhereUniqueInput | company_log_tableWhereUniqueInput[]
    delete?: company_log_tableWhereUniqueInput | company_log_tableWhereUniqueInput[]
    connect?: company_log_tableWhereUniqueInput | company_log_tableWhereUniqueInput[]
    update?: company_log_tableUpdateWithWhereUniqueWithoutMemberInput | company_log_tableUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: company_log_tableUpdateManyWithWhereWithoutMemberInput | company_log_tableUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: company_log_tableScalarWhereInput | company_log_tableScalarWhereInput[]
  }

  export type company_log_tableUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<company_log_tableCreateWithoutMemberInput, company_log_tableUncheckedCreateWithoutMemberInput> | company_log_tableCreateWithoutMemberInput[] | company_log_tableUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: company_log_tableCreateOrConnectWithoutMemberInput | company_log_tableCreateOrConnectWithoutMemberInput[]
    upsert?: company_log_tableUpsertWithWhereUniqueWithoutMemberInput | company_log_tableUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: company_log_tableCreateManyMemberInputEnvelope
    set?: company_log_tableWhereUniqueInput | company_log_tableWhereUniqueInput[]
    disconnect?: company_log_tableWhereUniqueInput | company_log_tableWhereUniqueInput[]
    delete?: company_log_tableWhereUniqueInput | company_log_tableWhereUniqueInput[]
    connect?: company_log_tableWhereUniqueInput | company_log_tableWhereUniqueInput[]
    update?: company_log_tableUpdateWithWhereUniqueWithoutMemberInput | company_log_tableUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: company_log_tableUpdateManyWithWhereWithoutMemberInput | company_log_tableUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: company_log_tableScalarWhereInput | company_log_tableScalarWhereInput[]
  }

  export type Organization_tableCreateNestedOneWithoutInvitation_tablesInput = {
    create?: XOR<Organization_tableCreateWithoutInvitation_tablesInput, Organization_tableUncheckedCreateWithoutInvitation_tablesInput>
    connectOrCreate?: Organization_tableCreateOrConnectWithoutInvitation_tablesInput
    connect?: Organization_tableWhereUniqueInput
  }

  export type User_tableCreateNestedOneWithoutInvitation_tablesInput = {
    create?: XOR<User_tableCreateWithoutInvitation_tablesInput, User_tableUncheckedCreateWithoutInvitation_tablesInput>
    connectOrCreate?: User_tableCreateOrConnectWithoutInvitation_tablesInput
    connect?: User_tableWhereUniqueInput
  }

  export type Organization_tableUpdateOneRequiredWithoutInvitation_tablesNestedInput = {
    create?: XOR<Organization_tableCreateWithoutInvitation_tablesInput, Organization_tableUncheckedCreateWithoutInvitation_tablesInput>
    connectOrCreate?: Organization_tableCreateOrConnectWithoutInvitation_tablesInput
    upsert?: Organization_tableUpsertWithoutInvitation_tablesInput
    connect?: Organization_tableWhereUniqueInput
    update?: XOR<XOR<Organization_tableUpdateToOneWithWhereWithoutInvitation_tablesInput, Organization_tableUpdateWithoutInvitation_tablesInput>, Organization_tableUncheckedUpdateWithoutInvitation_tablesInput>
  }

  export type User_tableUpdateOneRequiredWithoutInvitation_tablesNestedInput = {
    create?: XOR<User_tableCreateWithoutInvitation_tablesInput, User_tableUncheckedCreateWithoutInvitation_tablesInput>
    connectOrCreate?: User_tableCreateOrConnectWithoutInvitation_tablesInput
    upsert?: User_tableUpsertWithoutInvitation_tablesInput
    connect?: User_tableWhereUniqueInput
    update?: XOR<XOR<User_tableUpdateToOneWithWhereWithoutInvitation_tablesInput, User_tableUpdateWithoutInvitation_tablesInput>, User_tableUncheckedUpdateWithoutInvitation_tablesInput>
  }

  export type Member_tableCreateNestedOneWithoutCompany_log_tableInput = {
    create?: XOR<Member_tableCreateWithoutCompany_log_tableInput, Member_tableUncheckedCreateWithoutCompany_log_tableInput>
    connectOrCreate?: Member_tableCreateOrConnectWithoutCompany_log_tableInput
    connect?: Member_tableWhereUniqueInput
  }

  export type company_log_task_tableCreateNestedManyWithoutLogInput = {
    create?: XOR<company_log_task_tableCreateWithoutLogInput, company_log_task_tableUncheckedCreateWithoutLogInput> | company_log_task_tableCreateWithoutLogInput[] | company_log_task_tableUncheckedCreateWithoutLogInput[]
    connectOrCreate?: company_log_task_tableCreateOrConnectWithoutLogInput | company_log_task_tableCreateOrConnectWithoutLogInput[]
    createMany?: company_log_task_tableCreateManyLogInputEnvelope
    connect?: company_log_task_tableWhereUniqueInput | company_log_task_tableWhereUniqueInput[]
  }

  export type company_log_task_tableUncheckedCreateNestedManyWithoutLogInput = {
    create?: XOR<company_log_task_tableCreateWithoutLogInput, company_log_task_tableUncheckedCreateWithoutLogInput> | company_log_task_tableCreateWithoutLogInput[] | company_log_task_tableUncheckedCreateWithoutLogInput[]
    connectOrCreate?: company_log_task_tableCreateOrConnectWithoutLogInput | company_log_task_tableCreateOrConnectWithoutLogInput[]
    createMany?: company_log_task_tableCreateManyLogInputEnvelope
    connect?: company_log_task_tableWhereUniqueInput | company_log_task_tableWhereUniqueInput[]
  }

  export type Member_tableUpdateOneRequiredWithoutCompany_log_tableNestedInput = {
    create?: XOR<Member_tableCreateWithoutCompany_log_tableInput, Member_tableUncheckedCreateWithoutCompany_log_tableInput>
    connectOrCreate?: Member_tableCreateOrConnectWithoutCompany_log_tableInput
    upsert?: Member_tableUpsertWithoutCompany_log_tableInput
    connect?: Member_tableWhereUniqueInput
    update?: XOR<XOR<Member_tableUpdateToOneWithWhereWithoutCompany_log_tableInput, Member_tableUpdateWithoutCompany_log_tableInput>, Member_tableUncheckedUpdateWithoutCompany_log_tableInput>
  }

  export type company_log_task_tableUpdateManyWithoutLogNestedInput = {
    create?: XOR<company_log_task_tableCreateWithoutLogInput, company_log_task_tableUncheckedCreateWithoutLogInput> | company_log_task_tableCreateWithoutLogInput[] | company_log_task_tableUncheckedCreateWithoutLogInput[]
    connectOrCreate?: company_log_task_tableCreateOrConnectWithoutLogInput | company_log_task_tableCreateOrConnectWithoutLogInput[]
    upsert?: company_log_task_tableUpsertWithWhereUniqueWithoutLogInput | company_log_task_tableUpsertWithWhereUniqueWithoutLogInput[]
    createMany?: company_log_task_tableCreateManyLogInputEnvelope
    set?: company_log_task_tableWhereUniqueInput | company_log_task_tableWhereUniqueInput[]
    disconnect?: company_log_task_tableWhereUniqueInput | company_log_task_tableWhereUniqueInput[]
    delete?: company_log_task_tableWhereUniqueInput | company_log_task_tableWhereUniqueInput[]
    connect?: company_log_task_tableWhereUniqueInput | company_log_task_tableWhereUniqueInput[]
    update?: company_log_task_tableUpdateWithWhereUniqueWithoutLogInput | company_log_task_tableUpdateWithWhereUniqueWithoutLogInput[]
    updateMany?: company_log_task_tableUpdateManyWithWhereWithoutLogInput | company_log_task_tableUpdateManyWithWhereWithoutLogInput[]
    deleteMany?: company_log_task_tableScalarWhereInput | company_log_task_tableScalarWhereInput[]
  }

  export type company_log_task_tableUncheckedUpdateManyWithoutLogNestedInput = {
    create?: XOR<company_log_task_tableCreateWithoutLogInput, company_log_task_tableUncheckedCreateWithoutLogInput> | company_log_task_tableCreateWithoutLogInput[] | company_log_task_tableUncheckedCreateWithoutLogInput[]
    connectOrCreate?: company_log_task_tableCreateOrConnectWithoutLogInput | company_log_task_tableCreateOrConnectWithoutLogInput[]
    upsert?: company_log_task_tableUpsertWithWhereUniqueWithoutLogInput | company_log_task_tableUpsertWithWhereUniqueWithoutLogInput[]
    createMany?: company_log_task_tableCreateManyLogInputEnvelope
    set?: company_log_task_tableWhereUniqueInput | company_log_task_tableWhereUniqueInput[]
    disconnect?: company_log_task_tableWhereUniqueInput | company_log_task_tableWhereUniqueInput[]
    delete?: company_log_task_tableWhereUniqueInput | company_log_task_tableWhereUniqueInput[]
    connect?: company_log_task_tableWhereUniqueInput | company_log_task_tableWhereUniqueInput[]
    update?: company_log_task_tableUpdateWithWhereUniqueWithoutLogInput | company_log_task_tableUpdateWithWhereUniqueWithoutLogInput[]
    updateMany?: company_log_task_tableUpdateManyWithWhereWithoutLogInput | company_log_task_tableUpdateManyWithWhereWithoutLogInput[]
    deleteMany?: company_log_task_tableScalarWhereInput | company_log_task_tableScalarWhereInput[]
  }

  export type company_log_tableCreateNestedOneWithoutTasksInput = {
    create?: XOR<company_log_tableCreateWithoutTasksInput, company_log_tableUncheckedCreateWithoutTasksInput>
    connectOrCreate?: company_log_tableCreateOrConnectWithoutTasksInput
    connect?: company_log_tableWhereUniqueInput
  }

  export type company_log_tableUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<company_log_tableCreateWithoutTasksInput, company_log_tableUncheckedCreateWithoutTasksInput>
    connectOrCreate?: company_log_tableCreateOrConnectWithoutTasksInput
    upsert?: company_log_tableUpsertWithoutTasksInput
    connect?: company_log_tableWhereUniqueInput
    update?: XOR<XOR<company_log_tableUpdateToOneWithWhereWithoutTasksInput, company_log_tableUpdateWithoutTasksInput>, company_log_tableUncheckedUpdateWithoutTasksInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Session_tableCreateWithoutUser_tableInput = {
    id?: string
    session_expired_at: Date | string
    session_token: string
    session_created_at: Date | string
    session_updated_at: Date | string
    session_ip_address?: string | null
    session_user_agent?: string | null
    session_active_organization_id?: string | null
  }

  export type Session_tableUncheckedCreateWithoutUser_tableInput = {
    id?: string
    session_expired_at: Date | string
    session_token: string
    session_created_at: Date | string
    session_updated_at: Date | string
    session_ip_address?: string | null
    session_user_agent?: string | null
    session_active_organization_id?: string | null
  }

  export type Session_tableCreateOrConnectWithoutUser_tableInput = {
    where: Session_tableWhereUniqueInput
    create: XOR<Session_tableCreateWithoutUser_tableInput, Session_tableUncheckedCreateWithoutUser_tableInput>
  }

  export type Session_tableCreateManyUser_tableInputEnvelope = {
    data: Session_tableCreateManyUser_tableInput | Session_tableCreateManyUser_tableInput[]
    skipDuplicates?: boolean
  }

  export type User_account_tableCreateWithoutUser_tableInput = {
    id?: string
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
    id?: string
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
    skipDuplicates?: boolean
  }

  export type Member_tableCreateWithoutUser_tableInput = {
    id?: string
    member_role: string
    member_created_at: Date | string
    member_is_onboarded?: boolean | null
    member_position?: string | null
    member_bio?: string | null
    organization_table: Organization_tableCreateNestedOneWithoutMember_tablesInput
    company_log_table?: company_log_tableCreateNestedManyWithoutMemberInput
  }

  export type Member_tableUncheckedCreateWithoutUser_tableInput = {
    id?: string
    organizationId: string
    member_role: string
    member_created_at: Date | string
    member_is_onboarded?: boolean | null
    member_position?: string | null
    member_bio?: string | null
    company_log_table?: company_log_tableUncheckedCreateNestedManyWithoutMemberInput
  }

  export type Member_tableCreateOrConnectWithoutUser_tableInput = {
    where: Member_tableWhereUniqueInput
    create: XOR<Member_tableCreateWithoutUser_tableInput, Member_tableUncheckedCreateWithoutUser_tableInput>
  }

  export type Member_tableCreateManyUser_tableInputEnvelope = {
    data: Member_tableCreateManyUser_tableInput | Member_tableCreateManyUser_tableInput[]
    skipDuplicates?: boolean
  }

  export type Invitation_tableCreateWithoutUser_tableInput = {
    id?: string
    invitation_email: string
    invitation_role?: string | null
    invitation_status: string
    invitation_expires_at: Date | string
    organization_table: Organization_tableCreateNestedOneWithoutInvitation_tablesInput
  }

  export type Invitation_tableUncheckedCreateWithoutUser_tableInput = {
    id?: string
    organization_id: string
    invitation_email: string
    invitation_role?: string | null
    invitation_status: string
    invitation_expires_at: Date | string
  }

  export type Invitation_tableCreateOrConnectWithoutUser_tableInput = {
    where: Invitation_tableWhereUniqueInput
    create: XOR<Invitation_tableCreateWithoutUser_tableInput, Invitation_tableUncheckedCreateWithoutUser_tableInput>
  }

  export type Invitation_tableCreateManyUser_tableInputEnvelope = {
    data: Invitation_tableCreateManyUser_tableInput | Invitation_tableCreateManyUser_tableInput[]
    skipDuplicates?: boolean
  }

  export type Session_tableUpsertWithWhereUniqueWithoutUser_tableInput = {
    where: Session_tableWhereUniqueInput
    update: XOR<Session_tableUpdateWithoutUser_tableInput, Session_tableUncheckedUpdateWithoutUser_tableInput>
    create: XOR<Session_tableCreateWithoutUser_tableInput, Session_tableUncheckedCreateWithoutUser_tableInput>
  }

  export type Session_tableUpdateWithWhereUniqueWithoutUser_tableInput = {
    where: Session_tableWhereUniqueInput
    data: XOR<Session_tableUpdateWithoutUser_tableInput, Session_tableUncheckedUpdateWithoutUser_tableInput>
  }

  export type Session_tableUpdateManyWithWhereWithoutUser_tableInput = {
    where: Session_tableScalarWhereInput
    data: XOR<Session_tableUpdateManyMutationInput, Session_tableUncheckedUpdateManyWithoutUser_tableInput>
  }

  export type Session_tableScalarWhereInput = {
    AND?: Session_tableScalarWhereInput | Session_tableScalarWhereInput[]
    OR?: Session_tableScalarWhereInput[]
    NOT?: Session_tableScalarWhereInput | Session_tableScalarWhereInput[]
    id?: StringFilter<"Session_table"> | string
    session_expired_at?: DateTimeFilter<"Session_table"> | Date | string
    session_token?: StringFilter<"Session_table"> | string
    session_created_at?: DateTimeFilter<"Session_table"> | Date | string
    session_updated_at?: DateTimeFilter<"Session_table"> | Date | string
    session_ip_address?: StringNullableFilter<"Session_table"> | string | null
    session_user_agent?: StringNullableFilter<"Session_table"> | string | null
    session_user_id?: StringFilter<"Session_table"> | string
    session_active_organization_id?: StringNullableFilter<"Session_table"> | string | null
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

  export type Member_tableUpsertWithWhereUniqueWithoutUser_tableInput = {
    where: Member_tableWhereUniqueInput
    update: XOR<Member_tableUpdateWithoutUser_tableInput, Member_tableUncheckedUpdateWithoutUser_tableInput>
    create: XOR<Member_tableCreateWithoutUser_tableInput, Member_tableUncheckedCreateWithoutUser_tableInput>
  }

  export type Member_tableUpdateWithWhereUniqueWithoutUser_tableInput = {
    where: Member_tableWhereUniqueInput
    data: XOR<Member_tableUpdateWithoutUser_tableInput, Member_tableUncheckedUpdateWithoutUser_tableInput>
  }

  export type Member_tableUpdateManyWithWhereWithoutUser_tableInput = {
    where: Member_tableScalarWhereInput
    data: XOR<Member_tableUpdateManyMutationInput, Member_tableUncheckedUpdateManyWithoutUser_tableInput>
  }

  export type Member_tableScalarWhereInput = {
    AND?: Member_tableScalarWhereInput | Member_tableScalarWhereInput[]
    OR?: Member_tableScalarWhereInput[]
    NOT?: Member_tableScalarWhereInput | Member_tableScalarWhereInput[]
    id?: StringFilter<"Member_table"> | string
    organizationId?: StringFilter<"Member_table"> | string
    userId?: StringFilter<"Member_table"> | string
    member_role?: StringFilter<"Member_table"> | string
    member_created_at?: DateTimeFilter<"Member_table"> | Date | string
    member_is_onboarded?: BoolNullableFilter<"Member_table"> | boolean | null
    member_position?: StringNullableFilter<"Member_table"> | string | null
    member_bio?: StringNullableFilter<"Member_table"> | string | null
  }

  export type Invitation_tableUpsertWithWhereUniqueWithoutUser_tableInput = {
    where: Invitation_tableWhereUniqueInput
    update: XOR<Invitation_tableUpdateWithoutUser_tableInput, Invitation_tableUncheckedUpdateWithoutUser_tableInput>
    create: XOR<Invitation_tableCreateWithoutUser_tableInput, Invitation_tableUncheckedCreateWithoutUser_tableInput>
  }

  export type Invitation_tableUpdateWithWhereUniqueWithoutUser_tableInput = {
    where: Invitation_tableWhereUniqueInput
    data: XOR<Invitation_tableUpdateWithoutUser_tableInput, Invitation_tableUncheckedUpdateWithoutUser_tableInput>
  }

  export type Invitation_tableUpdateManyWithWhereWithoutUser_tableInput = {
    where: Invitation_tableScalarWhereInput
    data: XOR<Invitation_tableUpdateManyMutationInput, Invitation_tableUncheckedUpdateManyWithoutUser_tableInput>
  }

  export type Invitation_tableScalarWhereInput = {
    AND?: Invitation_tableScalarWhereInput | Invitation_tableScalarWhereInput[]
    OR?: Invitation_tableScalarWhereInput[]
    NOT?: Invitation_tableScalarWhereInput | Invitation_tableScalarWhereInput[]
    id?: StringFilter<"Invitation_table"> | string
    organization_id?: StringFilter<"Invitation_table"> | string
    invitation_email?: StringFilter<"Invitation_table"> | string
    invitation_role?: StringNullableFilter<"Invitation_table"> | string | null
    invitation_status?: StringFilter<"Invitation_table"> | string
    invitation_expires_at?: DateTimeFilter<"Invitation_table"> | Date | string
    invitation_inviter_id?: StringFilter<"Invitation_table"> | string
  }

  export type User_tableCreateWithoutSession_tablesInput = {
    id?: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    user_account_tables?: User_account_tableCreateNestedManyWithoutUser_tableInput
    member_tables?: Member_tableCreateNestedManyWithoutUser_tableInput
    invitation_tables?: Invitation_tableCreateNestedManyWithoutUser_tableInput
  }

  export type User_tableUncheckedCreateWithoutSession_tablesInput = {
    id?: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    user_account_tables?: User_account_tableUncheckedCreateNestedManyWithoutUser_tableInput
    member_tables?: Member_tableUncheckedCreateNestedManyWithoutUser_tableInput
    invitation_tables?: Invitation_tableUncheckedCreateNestedManyWithoutUser_tableInput
  }

  export type User_tableCreateOrConnectWithoutSession_tablesInput = {
    where: User_tableWhereUniqueInput
    create: XOR<User_tableCreateWithoutSession_tablesInput, User_tableUncheckedCreateWithoutSession_tablesInput>
  }

  export type User_tableUpsertWithoutSession_tablesInput = {
    update: XOR<User_tableUpdateWithoutSession_tablesInput, User_tableUncheckedUpdateWithoutSession_tablesInput>
    create: XOR<User_tableCreateWithoutSession_tablesInput, User_tableUncheckedCreateWithoutSession_tablesInput>
    where?: User_tableWhereInput
  }

  export type User_tableUpdateToOneWithWhereWithoutSession_tablesInput = {
    where?: User_tableWhereInput
    data: XOR<User_tableUpdateWithoutSession_tablesInput, User_tableUncheckedUpdateWithoutSession_tablesInput>
  }

  export type User_tableUpdateWithoutSession_tablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_account_tables?: User_account_tableUpdateManyWithoutUser_tableNestedInput
    member_tables?: Member_tableUpdateManyWithoutUser_tableNestedInput
    invitation_tables?: Invitation_tableUpdateManyWithoutUser_tableNestedInput
  }

  export type User_tableUncheckedUpdateWithoutSession_tablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_account_tables?: User_account_tableUncheckedUpdateManyWithoutUser_tableNestedInput
    member_tables?: Member_tableUncheckedUpdateManyWithoutUser_tableNestedInput
    invitation_tables?: Invitation_tableUncheckedUpdateManyWithoutUser_tableNestedInput
  }

  export type User_tableCreateWithoutUser_account_tablesInput = {
    id?: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    session_tables?: Session_tableCreateNestedManyWithoutUser_tableInput
    member_tables?: Member_tableCreateNestedManyWithoutUser_tableInput
    invitation_tables?: Invitation_tableCreateNestedManyWithoutUser_tableInput
  }

  export type User_tableUncheckedCreateWithoutUser_account_tablesInput = {
    id?: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    session_tables?: Session_tableUncheckedCreateNestedManyWithoutUser_tableInput
    member_tables?: Member_tableUncheckedCreateNestedManyWithoutUser_tableInput
    invitation_tables?: Invitation_tableUncheckedCreateNestedManyWithoutUser_tableInput
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
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_tables?: Session_tableUpdateManyWithoutUser_tableNestedInput
    member_tables?: Member_tableUpdateManyWithoutUser_tableNestedInput
    invitation_tables?: Invitation_tableUpdateManyWithoutUser_tableNestedInput
  }

  export type User_tableUncheckedUpdateWithoutUser_account_tablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_tables?: Session_tableUncheckedUpdateManyWithoutUser_tableNestedInput
    member_tables?: Member_tableUncheckedUpdateManyWithoutUser_tableNestedInput
    invitation_tables?: Invitation_tableUncheckedUpdateManyWithoutUser_tableNestedInput
  }

  export type Member_tableCreateWithoutOrganization_tableInput = {
    id?: string
    member_role: string
    member_created_at: Date | string
    member_is_onboarded?: boolean | null
    member_position?: string | null
    member_bio?: string | null
    user_table: User_tableCreateNestedOneWithoutMember_tablesInput
    company_log_table?: company_log_tableCreateNestedManyWithoutMemberInput
  }

  export type Member_tableUncheckedCreateWithoutOrganization_tableInput = {
    id?: string
    userId: string
    member_role: string
    member_created_at: Date | string
    member_is_onboarded?: boolean | null
    member_position?: string | null
    member_bio?: string | null
    company_log_table?: company_log_tableUncheckedCreateNestedManyWithoutMemberInput
  }

  export type Member_tableCreateOrConnectWithoutOrganization_tableInput = {
    where: Member_tableWhereUniqueInput
    create: XOR<Member_tableCreateWithoutOrganization_tableInput, Member_tableUncheckedCreateWithoutOrganization_tableInput>
  }

  export type Member_tableCreateManyOrganization_tableInputEnvelope = {
    data: Member_tableCreateManyOrganization_tableInput | Member_tableCreateManyOrganization_tableInput[]
    skipDuplicates?: boolean
  }

  export type Invitation_tableCreateWithoutOrganization_tableInput = {
    id?: string
    invitation_email: string
    invitation_role?: string | null
    invitation_status: string
    invitation_expires_at: Date | string
    user_table: User_tableCreateNestedOneWithoutInvitation_tablesInput
  }

  export type Invitation_tableUncheckedCreateWithoutOrganization_tableInput = {
    id?: string
    invitation_email: string
    invitation_role?: string | null
    invitation_status: string
    invitation_expires_at: Date | string
    invitation_inviter_id: string
  }

  export type Invitation_tableCreateOrConnectWithoutOrganization_tableInput = {
    where: Invitation_tableWhereUniqueInput
    create: XOR<Invitation_tableCreateWithoutOrganization_tableInput, Invitation_tableUncheckedCreateWithoutOrganization_tableInput>
  }

  export type Invitation_tableCreateManyOrganization_tableInputEnvelope = {
    data: Invitation_tableCreateManyOrganization_tableInput | Invitation_tableCreateManyOrganization_tableInput[]
    skipDuplicates?: boolean
  }

  export type Member_tableUpsertWithWhereUniqueWithoutOrganization_tableInput = {
    where: Member_tableWhereUniqueInput
    update: XOR<Member_tableUpdateWithoutOrganization_tableInput, Member_tableUncheckedUpdateWithoutOrganization_tableInput>
    create: XOR<Member_tableCreateWithoutOrganization_tableInput, Member_tableUncheckedCreateWithoutOrganization_tableInput>
  }

  export type Member_tableUpdateWithWhereUniqueWithoutOrganization_tableInput = {
    where: Member_tableWhereUniqueInput
    data: XOR<Member_tableUpdateWithoutOrganization_tableInput, Member_tableUncheckedUpdateWithoutOrganization_tableInput>
  }

  export type Member_tableUpdateManyWithWhereWithoutOrganization_tableInput = {
    where: Member_tableScalarWhereInput
    data: XOR<Member_tableUpdateManyMutationInput, Member_tableUncheckedUpdateManyWithoutOrganization_tableInput>
  }

  export type Invitation_tableUpsertWithWhereUniqueWithoutOrganization_tableInput = {
    where: Invitation_tableWhereUniqueInput
    update: XOR<Invitation_tableUpdateWithoutOrganization_tableInput, Invitation_tableUncheckedUpdateWithoutOrganization_tableInput>
    create: XOR<Invitation_tableCreateWithoutOrganization_tableInput, Invitation_tableUncheckedCreateWithoutOrganization_tableInput>
  }

  export type Invitation_tableUpdateWithWhereUniqueWithoutOrganization_tableInput = {
    where: Invitation_tableWhereUniqueInput
    data: XOR<Invitation_tableUpdateWithoutOrganization_tableInput, Invitation_tableUncheckedUpdateWithoutOrganization_tableInput>
  }

  export type Invitation_tableUpdateManyWithWhereWithoutOrganization_tableInput = {
    where: Invitation_tableScalarWhereInput
    data: XOR<Invitation_tableUpdateManyMutationInput, Invitation_tableUncheckedUpdateManyWithoutOrganization_tableInput>
  }

  export type Organization_tableCreateWithoutMember_tablesInput = {
    id?: string
    organization_name: string
    organization_slug?: string | null
    organization_logo?: string | null
    organization_created_at: Date | string
    organization_metadata?: string | null
    invitation_tables?: Invitation_tableCreateNestedManyWithoutOrganization_tableInput
  }

  export type Organization_tableUncheckedCreateWithoutMember_tablesInput = {
    id?: string
    organization_name: string
    organization_slug?: string | null
    organization_logo?: string | null
    organization_created_at: Date | string
    organization_metadata?: string | null
    invitation_tables?: Invitation_tableUncheckedCreateNestedManyWithoutOrganization_tableInput
  }

  export type Organization_tableCreateOrConnectWithoutMember_tablesInput = {
    where: Organization_tableWhereUniqueInput
    create: XOR<Organization_tableCreateWithoutMember_tablesInput, Organization_tableUncheckedCreateWithoutMember_tablesInput>
  }

  export type User_tableCreateWithoutMember_tablesInput = {
    id?: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    session_tables?: Session_tableCreateNestedManyWithoutUser_tableInput
    user_account_tables?: User_account_tableCreateNestedManyWithoutUser_tableInput
    invitation_tables?: Invitation_tableCreateNestedManyWithoutUser_tableInput
  }

  export type User_tableUncheckedCreateWithoutMember_tablesInput = {
    id?: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    session_tables?: Session_tableUncheckedCreateNestedManyWithoutUser_tableInput
    user_account_tables?: User_account_tableUncheckedCreateNestedManyWithoutUser_tableInput
    invitation_tables?: Invitation_tableUncheckedCreateNestedManyWithoutUser_tableInput
  }

  export type User_tableCreateOrConnectWithoutMember_tablesInput = {
    where: User_tableWhereUniqueInput
    create: XOR<User_tableCreateWithoutMember_tablesInput, User_tableUncheckedCreateWithoutMember_tablesInput>
  }

  export type company_log_tableCreateWithoutMemberInput = {
    id?: string
    company_log_created_at?: Date | string
    company_log_time_in?: Date | string
    company_log_time_out?: Date | string | null
    tasks?: company_log_task_tableCreateNestedManyWithoutLogInput
  }

  export type company_log_tableUncheckedCreateWithoutMemberInput = {
    id?: string
    company_log_created_at?: Date | string
    company_log_time_in?: Date | string
    company_log_time_out?: Date | string | null
    tasks?: company_log_task_tableUncheckedCreateNestedManyWithoutLogInput
  }

  export type company_log_tableCreateOrConnectWithoutMemberInput = {
    where: company_log_tableWhereUniqueInput
    create: XOR<company_log_tableCreateWithoutMemberInput, company_log_tableUncheckedCreateWithoutMemberInput>
  }

  export type company_log_tableCreateManyMemberInputEnvelope = {
    data: company_log_tableCreateManyMemberInput | company_log_tableCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type Organization_tableUpsertWithoutMember_tablesInput = {
    update: XOR<Organization_tableUpdateWithoutMember_tablesInput, Organization_tableUncheckedUpdateWithoutMember_tablesInput>
    create: XOR<Organization_tableCreateWithoutMember_tablesInput, Organization_tableUncheckedCreateWithoutMember_tablesInput>
    where?: Organization_tableWhereInput
  }

  export type Organization_tableUpdateToOneWithWhereWithoutMember_tablesInput = {
    where?: Organization_tableWhereInput
    data: XOR<Organization_tableUpdateWithoutMember_tablesInput, Organization_tableUncheckedUpdateWithoutMember_tablesInput>
  }

  export type Organization_tableUpdateWithoutMember_tablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_name?: StringFieldUpdateOperationsInput | string
    organization_slug?: NullableStringFieldUpdateOperationsInput | string | null
    organization_logo?: NullableStringFieldUpdateOperationsInput | string | null
    organization_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization_metadata?: NullableStringFieldUpdateOperationsInput | string | null
    invitation_tables?: Invitation_tableUpdateManyWithoutOrganization_tableNestedInput
  }

  export type Organization_tableUncheckedUpdateWithoutMember_tablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_name?: StringFieldUpdateOperationsInput | string
    organization_slug?: NullableStringFieldUpdateOperationsInput | string | null
    organization_logo?: NullableStringFieldUpdateOperationsInput | string | null
    organization_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization_metadata?: NullableStringFieldUpdateOperationsInput | string | null
    invitation_tables?: Invitation_tableUncheckedUpdateManyWithoutOrganization_tableNestedInput
  }

  export type User_tableUpsertWithoutMember_tablesInput = {
    update: XOR<User_tableUpdateWithoutMember_tablesInput, User_tableUncheckedUpdateWithoutMember_tablesInput>
    create: XOR<User_tableCreateWithoutMember_tablesInput, User_tableUncheckedCreateWithoutMember_tablesInput>
    where?: User_tableWhereInput
  }

  export type User_tableUpdateToOneWithWhereWithoutMember_tablesInput = {
    where?: User_tableWhereInput
    data: XOR<User_tableUpdateWithoutMember_tablesInput, User_tableUncheckedUpdateWithoutMember_tablesInput>
  }

  export type User_tableUpdateWithoutMember_tablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_tables?: Session_tableUpdateManyWithoutUser_tableNestedInput
    user_account_tables?: User_account_tableUpdateManyWithoutUser_tableNestedInput
    invitation_tables?: Invitation_tableUpdateManyWithoutUser_tableNestedInput
  }

  export type User_tableUncheckedUpdateWithoutMember_tablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_tables?: Session_tableUncheckedUpdateManyWithoutUser_tableNestedInput
    user_account_tables?: User_account_tableUncheckedUpdateManyWithoutUser_tableNestedInput
    invitation_tables?: Invitation_tableUncheckedUpdateManyWithoutUser_tableNestedInput
  }

  export type company_log_tableUpsertWithWhereUniqueWithoutMemberInput = {
    where: company_log_tableWhereUniqueInput
    update: XOR<company_log_tableUpdateWithoutMemberInput, company_log_tableUncheckedUpdateWithoutMemberInput>
    create: XOR<company_log_tableCreateWithoutMemberInput, company_log_tableUncheckedCreateWithoutMemberInput>
  }

  export type company_log_tableUpdateWithWhereUniqueWithoutMemberInput = {
    where: company_log_tableWhereUniqueInput
    data: XOR<company_log_tableUpdateWithoutMemberInput, company_log_tableUncheckedUpdateWithoutMemberInput>
  }

  export type company_log_tableUpdateManyWithWhereWithoutMemberInput = {
    where: company_log_tableScalarWhereInput
    data: XOR<company_log_tableUpdateManyMutationInput, company_log_tableUncheckedUpdateManyWithoutMemberInput>
  }

  export type company_log_tableScalarWhereInput = {
    AND?: company_log_tableScalarWhereInput | company_log_tableScalarWhereInput[]
    OR?: company_log_tableScalarWhereInput[]
    NOT?: company_log_tableScalarWhereInput | company_log_tableScalarWhereInput[]
    id?: StringFilter<"company_log_table"> | string
    company_log_created_at?: DateTimeFilter<"company_log_table"> | Date | string
    company_log_time_in?: DateTimeFilter<"company_log_table"> | Date | string
    company_log_time_out?: DateTimeNullableFilter<"company_log_table"> | Date | string | null
    company_log_member_id?: StringFilter<"company_log_table"> | string
  }

  export type Organization_tableCreateWithoutInvitation_tablesInput = {
    id?: string
    organization_name: string
    organization_slug?: string | null
    organization_logo?: string | null
    organization_created_at: Date | string
    organization_metadata?: string | null
    member_tables?: Member_tableCreateNestedManyWithoutOrganization_tableInput
  }

  export type Organization_tableUncheckedCreateWithoutInvitation_tablesInput = {
    id?: string
    organization_name: string
    organization_slug?: string | null
    organization_logo?: string | null
    organization_created_at: Date | string
    organization_metadata?: string | null
    member_tables?: Member_tableUncheckedCreateNestedManyWithoutOrganization_tableInput
  }

  export type Organization_tableCreateOrConnectWithoutInvitation_tablesInput = {
    where: Organization_tableWhereUniqueInput
    create: XOR<Organization_tableCreateWithoutInvitation_tablesInput, Organization_tableUncheckedCreateWithoutInvitation_tablesInput>
  }

  export type User_tableCreateWithoutInvitation_tablesInput = {
    id?: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    session_tables?: Session_tableCreateNestedManyWithoutUser_tableInput
    user_account_tables?: User_account_tableCreateNestedManyWithoutUser_tableInput
    member_tables?: Member_tableCreateNestedManyWithoutUser_tableInput
  }

  export type User_tableUncheckedCreateWithoutInvitation_tablesInput = {
    id?: string
    user_name: string
    user_email: string
    user_email_verified: boolean
    user_image?: string | null
    user_created_at: Date | string
    user_updated_at: Date | string
    session_tables?: Session_tableUncheckedCreateNestedManyWithoutUser_tableInput
    user_account_tables?: User_account_tableUncheckedCreateNestedManyWithoutUser_tableInput
    member_tables?: Member_tableUncheckedCreateNestedManyWithoutUser_tableInput
  }

  export type User_tableCreateOrConnectWithoutInvitation_tablesInput = {
    where: User_tableWhereUniqueInput
    create: XOR<User_tableCreateWithoutInvitation_tablesInput, User_tableUncheckedCreateWithoutInvitation_tablesInput>
  }

  export type Organization_tableUpsertWithoutInvitation_tablesInput = {
    update: XOR<Organization_tableUpdateWithoutInvitation_tablesInput, Organization_tableUncheckedUpdateWithoutInvitation_tablesInput>
    create: XOR<Organization_tableCreateWithoutInvitation_tablesInput, Organization_tableUncheckedCreateWithoutInvitation_tablesInput>
    where?: Organization_tableWhereInput
  }

  export type Organization_tableUpdateToOneWithWhereWithoutInvitation_tablesInput = {
    where?: Organization_tableWhereInput
    data: XOR<Organization_tableUpdateWithoutInvitation_tablesInput, Organization_tableUncheckedUpdateWithoutInvitation_tablesInput>
  }

  export type Organization_tableUpdateWithoutInvitation_tablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_name?: StringFieldUpdateOperationsInput | string
    organization_slug?: NullableStringFieldUpdateOperationsInput | string | null
    organization_logo?: NullableStringFieldUpdateOperationsInput | string | null
    organization_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization_metadata?: NullableStringFieldUpdateOperationsInput | string | null
    member_tables?: Member_tableUpdateManyWithoutOrganization_tableNestedInput
  }

  export type Organization_tableUncheckedUpdateWithoutInvitation_tablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_name?: StringFieldUpdateOperationsInput | string
    organization_slug?: NullableStringFieldUpdateOperationsInput | string | null
    organization_logo?: NullableStringFieldUpdateOperationsInput | string | null
    organization_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization_metadata?: NullableStringFieldUpdateOperationsInput | string | null
    member_tables?: Member_tableUncheckedUpdateManyWithoutOrganization_tableNestedInput
  }

  export type User_tableUpsertWithoutInvitation_tablesInput = {
    update: XOR<User_tableUpdateWithoutInvitation_tablesInput, User_tableUncheckedUpdateWithoutInvitation_tablesInput>
    create: XOR<User_tableCreateWithoutInvitation_tablesInput, User_tableUncheckedCreateWithoutInvitation_tablesInput>
    where?: User_tableWhereInput
  }

  export type User_tableUpdateToOneWithWhereWithoutInvitation_tablesInput = {
    where?: User_tableWhereInput
    data: XOR<User_tableUpdateWithoutInvitation_tablesInput, User_tableUncheckedUpdateWithoutInvitation_tablesInput>
  }

  export type User_tableUpdateWithoutInvitation_tablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_tables?: Session_tableUpdateManyWithoutUser_tableNestedInput
    user_account_tables?: User_account_tableUpdateManyWithoutUser_tableNestedInput
    member_tables?: Member_tableUpdateManyWithoutUser_tableNestedInput
  }

  export type User_tableUncheckedUpdateWithoutInvitation_tablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    user_email_verified?: BoolFieldUpdateOperationsInput | boolean
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_tables?: Session_tableUncheckedUpdateManyWithoutUser_tableNestedInput
    user_account_tables?: User_account_tableUncheckedUpdateManyWithoutUser_tableNestedInput
    member_tables?: Member_tableUncheckedUpdateManyWithoutUser_tableNestedInput
  }

  export type Member_tableCreateWithoutCompany_log_tableInput = {
    id?: string
    member_role: string
    member_created_at: Date | string
    member_is_onboarded?: boolean | null
    member_position?: string | null
    member_bio?: string | null
    organization_table: Organization_tableCreateNestedOneWithoutMember_tablesInput
    user_table: User_tableCreateNestedOneWithoutMember_tablesInput
  }

  export type Member_tableUncheckedCreateWithoutCompany_log_tableInput = {
    id?: string
    organizationId: string
    userId: string
    member_role: string
    member_created_at: Date | string
    member_is_onboarded?: boolean | null
    member_position?: string | null
    member_bio?: string | null
  }

  export type Member_tableCreateOrConnectWithoutCompany_log_tableInput = {
    where: Member_tableWhereUniqueInput
    create: XOR<Member_tableCreateWithoutCompany_log_tableInput, Member_tableUncheckedCreateWithoutCompany_log_tableInput>
  }

  export type company_log_task_tableCreateWithoutLogInput = {
    company_log_task_id?: string
    company_log_task_description: string
    company_log_task_created_at?: Date | string
  }

  export type company_log_task_tableUncheckedCreateWithoutLogInput = {
    company_log_task_id?: string
    company_log_task_description: string
    company_log_task_created_at?: Date | string
  }

  export type company_log_task_tableCreateOrConnectWithoutLogInput = {
    where: company_log_task_tableWhereUniqueInput
    create: XOR<company_log_task_tableCreateWithoutLogInput, company_log_task_tableUncheckedCreateWithoutLogInput>
  }

  export type company_log_task_tableCreateManyLogInputEnvelope = {
    data: company_log_task_tableCreateManyLogInput | company_log_task_tableCreateManyLogInput[]
    skipDuplicates?: boolean
  }

  export type Member_tableUpsertWithoutCompany_log_tableInput = {
    update: XOR<Member_tableUpdateWithoutCompany_log_tableInput, Member_tableUncheckedUpdateWithoutCompany_log_tableInput>
    create: XOR<Member_tableCreateWithoutCompany_log_tableInput, Member_tableUncheckedCreateWithoutCompany_log_tableInput>
    where?: Member_tableWhereInput
  }

  export type Member_tableUpdateToOneWithWhereWithoutCompany_log_tableInput = {
    where?: Member_tableWhereInput
    data: XOR<Member_tableUpdateWithoutCompany_log_tableInput, Member_tableUncheckedUpdateWithoutCompany_log_tableInput>
  }

  export type Member_tableUpdateWithoutCompany_log_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_role?: StringFieldUpdateOperationsInput | string
    member_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    member_position?: NullableStringFieldUpdateOperationsInput | string | null
    member_bio?: NullableStringFieldUpdateOperationsInput | string | null
    organization_table?: Organization_tableUpdateOneRequiredWithoutMember_tablesNestedInput
    user_table?: User_tableUpdateOneRequiredWithoutMember_tablesNestedInput
  }

  export type Member_tableUncheckedUpdateWithoutCompany_log_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    member_role?: StringFieldUpdateOperationsInput | string
    member_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    member_position?: NullableStringFieldUpdateOperationsInput | string | null
    member_bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type company_log_task_tableUpsertWithWhereUniqueWithoutLogInput = {
    where: company_log_task_tableWhereUniqueInput
    update: XOR<company_log_task_tableUpdateWithoutLogInput, company_log_task_tableUncheckedUpdateWithoutLogInput>
    create: XOR<company_log_task_tableCreateWithoutLogInput, company_log_task_tableUncheckedCreateWithoutLogInput>
  }

  export type company_log_task_tableUpdateWithWhereUniqueWithoutLogInput = {
    where: company_log_task_tableWhereUniqueInput
    data: XOR<company_log_task_tableUpdateWithoutLogInput, company_log_task_tableUncheckedUpdateWithoutLogInput>
  }

  export type company_log_task_tableUpdateManyWithWhereWithoutLogInput = {
    where: company_log_task_tableScalarWhereInput
    data: XOR<company_log_task_tableUpdateManyMutationInput, company_log_task_tableUncheckedUpdateManyWithoutLogInput>
  }

  export type company_log_task_tableScalarWhereInput = {
    AND?: company_log_task_tableScalarWhereInput | company_log_task_tableScalarWhereInput[]
    OR?: company_log_task_tableScalarWhereInput[]
    NOT?: company_log_task_tableScalarWhereInput | company_log_task_tableScalarWhereInput[]
    company_log_task_id?: StringFilter<"company_log_task_table"> | string
    company_log_task_log_id?: StringFilter<"company_log_task_table"> | string
    company_log_task_description?: StringFilter<"company_log_task_table"> | string
    company_log_task_created_at?: DateTimeFilter<"company_log_task_table"> | Date | string
  }

  export type company_log_tableCreateWithoutTasksInput = {
    id?: string
    company_log_created_at?: Date | string
    company_log_time_in?: Date | string
    company_log_time_out?: Date | string | null
    member: Member_tableCreateNestedOneWithoutCompany_log_tableInput
  }

  export type company_log_tableUncheckedCreateWithoutTasksInput = {
    id?: string
    company_log_created_at?: Date | string
    company_log_time_in?: Date | string
    company_log_time_out?: Date | string | null
    company_log_member_id: string
  }

  export type company_log_tableCreateOrConnectWithoutTasksInput = {
    where: company_log_tableWhereUniqueInput
    create: XOR<company_log_tableCreateWithoutTasksInput, company_log_tableUncheckedCreateWithoutTasksInput>
  }

  export type company_log_tableUpsertWithoutTasksInput = {
    update: XOR<company_log_tableUpdateWithoutTasksInput, company_log_tableUncheckedUpdateWithoutTasksInput>
    create: XOR<company_log_tableCreateWithoutTasksInput, company_log_tableUncheckedCreateWithoutTasksInput>
    where?: company_log_tableWhereInput
  }

  export type company_log_tableUpdateToOneWithWhereWithoutTasksInput = {
    where?: company_log_tableWhereInput
    data: XOR<company_log_tableUpdateWithoutTasksInput, company_log_tableUncheckedUpdateWithoutTasksInput>
  }

  export type company_log_tableUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_log_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_log_time_in?: DateTimeFieldUpdateOperationsInput | Date | string
    company_log_time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: Member_tableUpdateOneRequiredWithoutCompany_log_tableNestedInput
  }

  export type company_log_tableUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_log_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_log_time_in?: DateTimeFieldUpdateOperationsInput | Date | string
    company_log_time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_log_member_id?: StringFieldUpdateOperationsInput | string
  }

  export type Session_tableCreateManyUser_tableInput = {
    id?: string
    session_expired_at: Date | string
    session_token: string
    session_created_at: Date | string
    session_updated_at: Date | string
    session_ip_address?: string | null
    session_user_agent?: string | null
    session_active_organization_id?: string | null
  }

  export type User_account_tableCreateManyUser_tableInput = {
    id?: string
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

  export type Member_tableCreateManyUser_tableInput = {
    id?: string
    organizationId: string
    member_role: string
    member_created_at: Date | string
    member_is_onboarded?: boolean | null
    member_position?: string | null
    member_bio?: string | null
  }

  export type Invitation_tableCreateManyUser_tableInput = {
    id?: string
    organization_id: string
    invitation_email: string
    invitation_role?: string | null
    invitation_status: string
    invitation_expires_at: Date | string
  }

  export type Session_tableUpdateWithoutUser_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_token?: StringFieldUpdateOperationsInput | string
    session_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    session_user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    session_active_organization_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Session_tableUncheckedUpdateWithoutUser_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_token?: StringFieldUpdateOperationsInput | string
    session_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    session_user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    session_active_organization_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Session_tableUncheckedUpdateManyWithoutUser_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_token?: StringFieldUpdateOperationsInput | string
    session_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    session_user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    session_active_organization_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_account_tableUpdateWithoutUser_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
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
    id?: StringFieldUpdateOperationsInput | string
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
    id?: StringFieldUpdateOperationsInput | string
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

  export type Member_tableUpdateWithoutUser_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_role?: StringFieldUpdateOperationsInput | string
    member_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    member_position?: NullableStringFieldUpdateOperationsInput | string | null
    member_bio?: NullableStringFieldUpdateOperationsInput | string | null
    organization_table?: Organization_tableUpdateOneRequiredWithoutMember_tablesNestedInput
    company_log_table?: company_log_tableUpdateManyWithoutMemberNestedInput
  }

  export type Member_tableUncheckedUpdateWithoutUser_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    member_role?: StringFieldUpdateOperationsInput | string
    member_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    member_position?: NullableStringFieldUpdateOperationsInput | string | null
    member_bio?: NullableStringFieldUpdateOperationsInput | string | null
    company_log_table?: company_log_tableUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type Member_tableUncheckedUpdateManyWithoutUser_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    member_role?: StringFieldUpdateOperationsInput | string
    member_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    member_position?: NullableStringFieldUpdateOperationsInput | string | null
    member_bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Invitation_tableUpdateWithoutUser_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitation_email?: StringFieldUpdateOperationsInput | string
    invitation_role?: NullableStringFieldUpdateOperationsInput | string | null
    invitation_status?: StringFieldUpdateOperationsInput | string
    invitation_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    organization_table?: Organization_tableUpdateOneRequiredWithoutInvitation_tablesNestedInput
  }

  export type Invitation_tableUncheckedUpdateWithoutUser_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    invitation_email?: StringFieldUpdateOperationsInput | string
    invitation_role?: NullableStringFieldUpdateOperationsInput | string | null
    invitation_status?: StringFieldUpdateOperationsInput | string
    invitation_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Invitation_tableUncheckedUpdateManyWithoutUser_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization_id?: StringFieldUpdateOperationsInput | string
    invitation_email?: StringFieldUpdateOperationsInput | string
    invitation_role?: NullableStringFieldUpdateOperationsInput | string | null
    invitation_status?: StringFieldUpdateOperationsInput | string
    invitation_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Member_tableCreateManyOrganization_tableInput = {
    id?: string
    userId: string
    member_role: string
    member_created_at: Date | string
    member_is_onboarded?: boolean | null
    member_position?: string | null
    member_bio?: string | null
  }

  export type Invitation_tableCreateManyOrganization_tableInput = {
    id?: string
    invitation_email: string
    invitation_role?: string | null
    invitation_status: string
    invitation_expires_at: Date | string
    invitation_inviter_id: string
  }

  export type Member_tableUpdateWithoutOrganization_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_role?: StringFieldUpdateOperationsInput | string
    member_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    member_position?: NullableStringFieldUpdateOperationsInput | string | null
    member_bio?: NullableStringFieldUpdateOperationsInput | string | null
    user_table?: User_tableUpdateOneRequiredWithoutMember_tablesNestedInput
    company_log_table?: company_log_tableUpdateManyWithoutMemberNestedInput
  }

  export type Member_tableUncheckedUpdateWithoutOrganization_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    member_role?: StringFieldUpdateOperationsInput | string
    member_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    member_position?: NullableStringFieldUpdateOperationsInput | string | null
    member_bio?: NullableStringFieldUpdateOperationsInput | string | null
    company_log_table?: company_log_tableUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type Member_tableUncheckedUpdateManyWithoutOrganization_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    member_role?: StringFieldUpdateOperationsInput | string
    member_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_is_onboarded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    member_position?: NullableStringFieldUpdateOperationsInput | string | null
    member_bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Invitation_tableUpdateWithoutOrganization_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitation_email?: StringFieldUpdateOperationsInput | string
    invitation_role?: NullableStringFieldUpdateOperationsInput | string | null
    invitation_status?: StringFieldUpdateOperationsInput | string
    invitation_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_table?: User_tableUpdateOneRequiredWithoutInvitation_tablesNestedInput
  }

  export type Invitation_tableUncheckedUpdateWithoutOrganization_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitation_email?: StringFieldUpdateOperationsInput | string
    invitation_role?: NullableStringFieldUpdateOperationsInput | string | null
    invitation_status?: StringFieldUpdateOperationsInput | string
    invitation_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation_inviter_id?: StringFieldUpdateOperationsInput | string
  }

  export type Invitation_tableUncheckedUpdateManyWithoutOrganization_tableInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitation_email?: StringFieldUpdateOperationsInput | string
    invitation_role?: NullableStringFieldUpdateOperationsInput | string | null
    invitation_status?: StringFieldUpdateOperationsInput | string
    invitation_expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation_inviter_id?: StringFieldUpdateOperationsInput | string
  }

  export type company_log_tableCreateManyMemberInput = {
    id?: string
    company_log_created_at?: Date | string
    company_log_time_in?: Date | string
    company_log_time_out?: Date | string | null
  }

  export type company_log_tableUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_log_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_log_time_in?: DateTimeFieldUpdateOperationsInput | Date | string
    company_log_time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: company_log_task_tableUpdateManyWithoutLogNestedInput
  }

  export type company_log_tableUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_log_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_log_time_in?: DateTimeFieldUpdateOperationsInput | Date | string
    company_log_time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: company_log_task_tableUncheckedUpdateManyWithoutLogNestedInput
  }

  export type company_log_tableUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_log_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_log_time_in?: DateTimeFieldUpdateOperationsInput | Date | string
    company_log_time_out?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type company_log_task_tableCreateManyLogInput = {
    company_log_task_id?: string
    company_log_task_description: string
    company_log_task_created_at?: Date | string
  }

  export type company_log_task_tableUpdateWithoutLogInput = {
    company_log_task_id?: StringFieldUpdateOperationsInput | string
    company_log_task_description?: StringFieldUpdateOperationsInput | string
    company_log_task_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type company_log_task_tableUncheckedUpdateWithoutLogInput = {
    company_log_task_id?: StringFieldUpdateOperationsInput | string
    company_log_task_description?: StringFieldUpdateOperationsInput | string
    company_log_task_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type company_log_task_tableUncheckedUpdateManyWithoutLogInput = {
    company_log_task_id?: StringFieldUpdateOperationsInput | string
    company_log_task_description?: StringFieldUpdateOperationsInput | string
    company_log_task_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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