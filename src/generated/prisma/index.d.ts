
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model WaterBody
 * 
 */
export type WaterBody = $Result.DefaultSelection<Prisma.$WaterBodyPayload>
/**
 * Model WaterBodyPassport
 * 
 */
export type WaterBodyPassport = $Result.DefaultSelection<Prisma.$WaterBodyPassportPayload>
/**
 * Model BioindicationRecord
 * 
 */
export type BioindicationRecord = $Result.DefaultSelection<Prisma.$BioindicationRecordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  CLIENT: 'CLIENT'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waterBody`: Exposes CRUD operations for the **WaterBody** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaterBodies
    * const waterBodies = await prisma.waterBody.findMany()
    * ```
    */
  get waterBody(): Prisma.WaterBodyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waterBodyPassport`: Exposes CRUD operations for the **WaterBodyPassport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaterBodyPassports
    * const waterBodyPassports = await prisma.waterBodyPassport.findMany()
    * ```
    */
  get waterBodyPassport(): Prisma.WaterBodyPassportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bioindicationRecord`: Exposes CRUD operations for the **BioindicationRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BioindicationRecords
    * const bioindicationRecords = await prisma.bioindicationRecord.findMany()
    * ```
    */
  get bioindicationRecord(): Prisma.BioindicationRecordDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    WaterBody: 'WaterBody',
    WaterBodyPassport: 'WaterBodyPassport',
    BioindicationRecord: 'BioindicationRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "waterBody" | "waterBodyPassport" | "bioindicationRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      WaterBody: {
        payload: Prisma.$WaterBodyPayload<ExtArgs>
        fields: Prisma.WaterBodyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaterBodyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaterBodyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPayload>
          }
          findFirst: {
            args: Prisma.WaterBodyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaterBodyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPayload>
          }
          findMany: {
            args: Prisma.WaterBodyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPayload>[]
          }
          create: {
            args: Prisma.WaterBodyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPayload>
          }
          createMany: {
            args: Prisma.WaterBodyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaterBodyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPayload>[]
          }
          delete: {
            args: Prisma.WaterBodyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPayload>
          }
          update: {
            args: Prisma.WaterBodyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPayload>
          }
          deleteMany: {
            args: Prisma.WaterBodyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaterBodyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaterBodyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPayload>[]
          }
          upsert: {
            args: Prisma.WaterBodyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPayload>
          }
          aggregate: {
            args: Prisma.WaterBodyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaterBody>
          }
          groupBy: {
            args: Prisma.WaterBodyGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaterBodyGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaterBodyCountArgs<ExtArgs>
            result: $Utils.Optional<WaterBodyCountAggregateOutputType> | number
          }
        }
      }
      WaterBodyPassport: {
        payload: Prisma.$WaterBodyPassportPayload<ExtArgs>
        fields: Prisma.WaterBodyPassportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaterBodyPassportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPassportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaterBodyPassportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPassportPayload>
          }
          findFirst: {
            args: Prisma.WaterBodyPassportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPassportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaterBodyPassportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPassportPayload>
          }
          findMany: {
            args: Prisma.WaterBodyPassportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPassportPayload>[]
          }
          create: {
            args: Prisma.WaterBodyPassportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPassportPayload>
          }
          createMany: {
            args: Prisma.WaterBodyPassportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaterBodyPassportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPassportPayload>[]
          }
          delete: {
            args: Prisma.WaterBodyPassportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPassportPayload>
          }
          update: {
            args: Prisma.WaterBodyPassportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPassportPayload>
          }
          deleteMany: {
            args: Prisma.WaterBodyPassportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaterBodyPassportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaterBodyPassportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPassportPayload>[]
          }
          upsert: {
            args: Prisma.WaterBodyPassportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterBodyPassportPayload>
          }
          aggregate: {
            args: Prisma.WaterBodyPassportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaterBodyPassport>
          }
          groupBy: {
            args: Prisma.WaterBodyPassportGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaterBodyPassportGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaterBodyPassportCountArgs<ExtArgs>
            result: $Utils.Optional<WaterBodyPassportCountAggregateOutputType> | number
          }
        }
      }
      BioindicationRecord: {
        payload: Prisma.$BioindicationRecordPayload<ExtArgs>
        fields: Prisma.BioindicationRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BioindicationRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioindicationRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BioindicationRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioindicationRecordPayload>
          }
          findFirst: {
            args: Prisma.BioindicationRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioindicationRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BioindicationRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioindicationRecordPayload>
          }
          findMany: {
            args: Prisma.BioindicationRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioindicationRecordPayload>[]
          }
          create: {
            args: Prisma.BioindicationRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioindicationRecordPayload>
          }
          createMany: {
            args: Prisma.BioindicationRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BioindicationRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioindicationRecordPayload>[]
          }
          delete: {
            args: Prisma.BioindicationRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioindicationRecordPayload>
          }
          update: {
            args: Prisma.BioindicationRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioindicationRecordPayload>
          }
          deleteMany: {
            args: Prisma.BioindicationRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BioindicationRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BioindicationRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioindicationRecordPayload>[]
          }
          upsert: {
            args: Prisma.BioindicationRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BioindicationRecordPayload>
          }
          aggregate: {
            args: Prisma.BioindicationRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBioindicationRecord>
          }
          groupBy: {
            args: Prisma.BioindicationRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<BioindicationRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.BioindicationRecordCountArgs<ExtArgs>
            result: $Utils.Optional<BioindicationRecordCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    waterBody?: WaterBodyOmit
    waterBodyPassport?: WaterBodyPassportOmit
    bioindicationRecord?: BioindicationRecordOmit
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
   * Count Type WaterBodyCountOutputType
   */

  export type WaterBodyCountOutputType = {
    measurements: number
  }

  export type WaterBodyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    measurements?: boolean | WaterBodyCountOutputTypeCountMeasurementsArgs
  }

  // Custom InputTypes
  /**
   * WaterBodyCountOutputType without action
   */
  export type WaterBodyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBodyCountOutputType
     */
    select?: WaterBodyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WaterBodyCountOutputType without action
   */
  export type WaterBodyCountOutputTypeCountMeasurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BioindicationRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    login: string | null
    email: string | null
    password: string | null
    avatarUrl: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    login: string | null
    email: string | null
    password: string | null
    avatarUrl: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    login: number
    email: number
    password: number
    avatarUrl: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    login?: true
    email?: true
    password?: true
    avatarUrl?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    login?: true
    email?: true
    password?: true
    avatarUrl?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    login?: true
    email?: true
    password?: true
    avatarUrl?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    login: string
    email: string
    password: string
    avatarUrl: string | null
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    login?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    login?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    login?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    login?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "login" | "email" | "password" | "avatarUrl" | "role", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      login: string
      email: string
      password: string
      avatarUrl: string | null
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly login: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model WaterBody
   */

  export type AggregateWaterBody = {
    _count: WaterBodyCountAggregateOutputType | null
    _avg: WaterBodyAvgAggregateOutputType | null
    _sum: WaterBodySumAggregateOutputType | null
    _min: WaterBodyMinAggregateOutputType | null
    _max: WaterBodyMaxAggregateOutputType | null
  }

  export type WaterBodyAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type WaterBodySumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type WaterBodyMinAggregateOutputType = {
    id: string | null
    name: string | null
    district: string | null
    locationDesc: string | null
    latitude: number | null
    longitude: number | null
    cadastralNumber: string | null
  }

  export type WaterBodyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    district: string | null
    locationDesc: string | null
    latitude: number | null
    longitude: number | null
    cadastralNumber: string | null
  }

  export type WaterBodyCountAggregateOutputType = {
    id: number
    name: number
    district: number
    locationDesc: number
    latitude: number
    longitude: number
    boundaries: number
    cadastralNumber: number
    _all: number
  }


  export type WaterBodyAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type WaterBodySumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type WaterBodyMinAggregateInputType = {
    id?: true
    name?: true
    district?: true
    locationDesc?: true
    latitude?: true
    longitude?: true
    cadastralNumber?: true
  }

  export type WaterBodyMaxAggregateInputType = {
    id?: true
    name?: true
    district?: true
    locationDesc?: true
    latitude?: true
    longitude?: true
    cadastralNumber?: true
  }

  export type WaterBodyCountAggregateInputType = {
    id?: true
    name?: true
    district?: true
    locationDesc?: true
    latitude?: true
    longitude?: true
    boundaries?: true
    cadastralNumber?: true
    _all?: true
  }

  export type WaterBodyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaterBody to aggregate.
     */
    where?: WaterBodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterBodies to fetch.
     */
    orderBy?: WaterBodyOrderByWithRelationInput | WaterBodyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaterBodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterBodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterBodies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaterBodies
    **/
    _count?: true | WaterBodyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaterBodyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaterBodySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaterBodyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaterBodyMaxAggregateInputType
  }

  export type GetWaterBodyAggregateType<T extends WaterBodyAggregateArgs> = {
        [P in keyof T & keyof AggregateWaterBody]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaterBody[P]>
      : GetScalarType<T[P], AggregateWaterBody[P]>
  }




  export type WaterBodyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterBodyWhereInput
    orderBy?: WaterBodyOrderByWithAggregationInput | WaterBodyOrderByWithAggregationInput[]
    by: WaterBodyScalarFieldEnum[] | WaterBodyScalarFieldEnum
    having?: WaterBodyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaterBodyCountAggregateInputType | true
    _avg?: WaterBodyAvgAggregateInputType
    _sum?: WaterBodySumAggregateInputType
    _min?: WaterBodyMinAggregateInputType
    _max?: WaterBodyMaxAggregateInputType
  }

  export type WaterBodyGroupByOutputType = {
    id: string
    name: string
    district: string | null
    locationDesc: string | null
    latitude: number | null
    longitude: number | null
    boundaries: JsonValue | null
    cadastralNumber: string | null
    _count: WaterBodyCountAggregateOutputType | null
    _avg: WaterBodyAvgAggregateOutputType | null
    _sum: WaterBodySumAggregateOutputType | null
    _min: WaterBodyMinAggregateOutputType | null
    _max: WaterBodyMaxAggregateOutputType | null
  }

  type GetWaterBodyGroupByPayload<T extends WaterBodyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaterBodyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaterBodyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaterBodyGroupByOutputType[P]>
            : GetScalarType<T[P], WaterBodyGroupByOutputType[P]>
        }
      >
    >


  export type WaterBodySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    district?: boolean
    locationDesc?: boolean
    latitude?: boolean
    longitude?: boolean
    boundaries?: boolean
    cadastralNumber?: boolean
    passport?: boolean | WaterBody$passportArgs<ExtArgs>
    measurements?: boolean | WaterBody$measurementsArgs<ExtArgs>
    _count?: boolean | WaterBodyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waterBody"]>

  export type WaterBodySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    district?: boolean
    locationDesc?: boolean
    latitude?: boolean
    longitude?: boolean
    boundaries?: boolean
    cadastralNumber?: boolean
  }, ExtArgs["result"]["waterBody"]>

  export type WaterBodySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    district?: boolean
    locationDesc?: boolean
    latitude?: boolean
    longitude?: boolean
    boundaries?: boolean
    cadastralNumber?: boolean
  }, ExtArgs["result"]["waterBody"]>

  export type WaterBodySelectScalar = {
    id?: boolean
    name?: boolean
    district?: boolean
    locationDesc?: boolean
    latitude?: boolean
    longitude?: boolean
    boundaries?: boolean
    cadastralNumber?: boolean
  }

  export type WaterBodyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "district" | "locationDesc" | "latitude" | "longitude" | "boundaries" | "cadastralNumber", ExtArgs["result"]["waterBody"]>
  export type WaterBodyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passport?: boolean | WaterBody$passportArgs<ExtArgs>
    measurements?: boolean | WaterBody$measurementsArgs<ExtArgs>
    _count?: boolean | WaterBodyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WaterBodyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WaterBodyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WaterBodyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaterBody"
    objects: {
      passport: Prisma.$WaterBodyPassportPayload<ExtArgs> | null
      measurements: Prisma.$BioindicationRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      district: string | null
      locationDesc: string | null
      latitude: number | null
      longitude: number | null
      boundaries: Prisma.JsonValue | null
      cadastralNumber: string | null
    }, ExtArgs["result"]["waterBody"]>
    composites: {}
  }

  type WaterBodyGetPayload<S extends boolean | null | undefined | WaterBodyDefaultArgs> = $Result.GetResult<Prisma.$WaterBodyPayload, S>

  type WaterBodyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaterBodyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaterBodyCountAggregateInputType | true
    }

  export interface WaterBodyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaterBody'], meta: { name: 'WaterBody' } }
    /**
     * Find zero or one WaterBody that matches the filter.
     * @param {WaterBodyFindUniqueArgs} args - Arguments to find a WaterBody
     * @example
     * // Get one WaterBody
     * const waterBody = await prisma.waterBody.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaterBodyFindUniqueArgs>(args: SelectSubset<T, WaterBodyFindUniqueArgs<ExtArgs>>): Prisma__WaterBodyClient<$Result.GetResult<Prisma.$WaterBodyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaterBody that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaterBodyFindUniqueOrThrowArgs} args - Arguments to find a WaterBody
     * @example
     * // Get one WaterBody
     * const waterBody = await prisma.waterBody.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaterBodyFindUniqueOrThrowArgs>(args: SelectSubset<T, WaterBodyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaterBodyClient<$Result.GetResult<Prisma.$WaterBodyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaterBody that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterBodyFindFirstArgs} args - Arguments to find a WaterBody
     * @example
     * // Get one WaterBody
     * const waterBody = await prisma.waterBody.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaterBodyFindFirstArgs>(args?: SelectSubset<T, WaterBodyFindFirstArgs<ExtArgs>>): Prisma__WaterBodyClient<$Result.GetResult<Prisma.$WaterBodyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaterBody that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterBodyFindFirstOrThrowArgs} args - Arguments to find a WaterBody
     * @example
     * // Get one WaterBody
     * const waterBody = await prisma.waterBody.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaterBodyFindFirstOrThrowArgs>(args?: SelectSubset<T, WaterBodyFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaterBodyClient<$Result.GetResult<Prisma.$WaterBodyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaterBodies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterBodyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaterBodies
     * const waterBodies = await prisma.waterBody.findMany()
     * 
     * // Get first 10 WaterBodies
     * const waterBodies = await prisma.waterBody.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waterBodyWithIdOnly = await prisma.waterBody.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaterBodyFindManyArgs>(args?: SelectSubset<T, WaterBodyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterBodyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaterBody.
     * @param {WaterBodyCreateArgs} args - Arguments to create a WaterBody.
     * @example
     * // Create one WaterBody
     * const WaterBody = await prisma.waterBody.create({
     *   data: {
     *     // ... data to create a WaterBody
     *   }
     * })
     * 
     */
    create<T extends WaterBodyCreateArgs>(args: SelectSubset<T, WaterBodyCreateArgs<ExtArgs>>): Prisma__WaterBodyClient<$Result.GetResult<Prisma.$WaterBodyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaterBodies.
     * @param {WaterBodyCreateManyArgs} args - Arguments to create many WaterBodies.
     * @example
     * // Create many WaterBodies
     * const waterBody = await prisma.waterBody.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaterBodyCreateManyArgs>(args?: SelectSubset<T, WaterBodyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaterBodies and returns the data saved in the database.
     * @param {WaterBodyCreateManyAndReturnArgs} args - Arguments to create many WaterBodies.
     * @example
     * // Create many WaterBodies
     * const waterBody = await prisma.waterBody.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaterBodies and only return the `id`
     * const waterBodyWithIdOnly = await prisma.waterBody.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaterBodyCreateManyAndReturnArgs>(args?: SelectSubset<T, WaterBodyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterBodyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WaterBody.
     * @param {WaterBodyDeleteArgs} args - Arguments to delete one WaterBody.
     * @example
     * // Delete one WaterBody
     * const WaterBody = await prisma.waterBody.delete({
     *   where: {
     *     // ... filter to delete one WaterBody
     *   }
     * })
     * 
     */
    delete<T extends WaterBodyDeleteArgs>(args: SelectSubset<T, WaterBodyDeleteArgs<ExtArgs>>): Prisma__WaterBodyClient<$Result.GetResult<Prisma.$WaterBodyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaterBody.
     * @param {WaterBodyUpdateArgs} args - Arguments to update one WaterBody.
     * @example
     * // Update one WaterBody
     * const waterBody = await prisma.waterBody.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaterBodyUpdateArgs>(args: SelectSubset<T, WaterBodyUpdateArgs<ExtArgs>>): Prisma__WaterBodyClient<$Result.GetResult<Prisma.$WaterBodyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaterBodies.
     * @param {WaterBodyDeleteManyArgs} args - Arguments to filter WaterBodies to delete.
     * @example
     * // Delete a few WaterBodies
     * const { count } = await prisma.waterBody.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaterBodyDeleteManyArgs>(args?: SelectSubset<T, WaterBodyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaterBodies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterBodyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaterBodies
     * const waterBody = await prisma.waterBody.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaterBodyUpdateManyArgs>(args: SelectSubset<T, WaterBodyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaterBodies and returns the data updated in the database.
     * @param {WaterBodyUpdateManyAndReturnArgs} args - Arguments to update many WaterBodies.
     * @example
     * // Update many WaterBodies
     * const waterBody = await prisma.waterBody.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WaterBodies and only return the `id`
     * const waterBodyWithIdOnly = await prisma.waterBody.updateManyAndReturn({
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
    updateManyAndReturn<T extends WaterBodyUpdateManyAndReturnArgs>(args: SelectSubset<T, WaterBodyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterBodyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WaterBody.
     * @param {WaterBodyUpsertArgs} args - Arguments to update or create a WaterBody.
     * @example
     * // Update or create a WaterBody
     * const waterBody = await prisma.waterBody.upsert({
     *   create: {
     *     // ... data to create a WaterBody
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaterBody we want to update
     *   }
     * })
     */
    upsert<T extends WaterBodyUpsertArgs>(args: SelectSubset<T, WaterBodyUpsertArgs<ExtArgs>>): Prisma__WaterBodyClient<$Result.GetResult<Prisma.$WaterBodyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WaterBodies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterBodyCountArgs} args - Arguments to filter WaterBodies to count.
     * @example
     * // Count the number of WaterBodies
     * const count = await prisma.waterBody.count({
     *   where: {
     *     // ... the filter for the WaterBodies we want to count
     *   }
     * })
    **/
    count<T extends WaterBodyCountArgs>(
      args?: Subset<T, WaterBodyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaterBodyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaterBody.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterBodyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaterBodyAggregateArgs>(args: Subset<T, WaterBodyAggregateArgs>): Prisma.PrismaPromise<GetWaterBodyAggregateType<T>>

    /**
     * Group by WaterBody.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterBodyGroupByArgs} args - Group by arguments.
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
      T extends WaterBodyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaterBodyGroupByArgs['orderBy'] }
        : { orderBy?: WaterBodyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WaterBodyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaterBodyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaterBody model
   */
  readonly fields: WaterBodyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaterBody.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaterBodyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    passport<T extends WaterBody$passportArgs<ExtArgs> = {}>(args?: Subset<T, WaterBody$passportArgs<ExtArgs>>): Prisma__WaterBodyPassportClient<$Result.GetResult<Prisma.$WaterBodyPassportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    measurements<T extends WaterBody$measurementsArgs<ExtArgs> = {}>(args?: Subset<T, WaterBody$measurementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BioindicationRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WaterBody model
   */
  interface WaterBodyFieldRefs {
    readonly id: FieldRef<"WaterBody", 'String'>
    readonly name: FieldRef<"WaterBody", 'String'>
    readonly district: FieldRef<"WaterBody", 'String'>
    readonly locationDesc: FieldRef<"WaterBody", 'String'>
    readonly latitude: FieldRef<"WaterBody", 'Float'>
    readonly longitude: FieldRef<"WaterBody", 'Float'>
    readonly boundaries: FieldRef<"WaterBody", 'Json'>
    readonly cadastralNumber: FieldRef<"WaterBody", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WaterBody findUnique
   */
  export type WaterBodyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBody
     */
    select?: WaterBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBody
     */
    omit?: WaterBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyInclude<ExtArgs> | null
    /**
     * Filter, which WaterBody to fetch.
     */
    where: WaterBodyWhereUniqueInput
  }

  /**
   * WaterBody findUniqueOrThrow
   */
  export type WaterBodyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBody
     */
    select?: WaterBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBody
     */
    omit?: WaterBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyInclude<ExtArgs> | null
    /**
     * Filter, which WaterBody to fetch.
     */
    where: WaterBodyWhereUniqueInput
  }

  /**
   * WaterBody findFirst
   */
  export type WaterBodyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBody
     */
    select?: WaterBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBody
     */
    omit?: WaterBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyInclude<ExtArgs> | null
    /**
     * Filter, which WaterBody to fetch.
     */
    where?: WaterBodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterBodies to fetch.
     */
    orderBy?: WaterBodyOrderByWithRelationInput | WaterBodyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaterBodies.
     */
    cursor?: WaterBodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterBodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterBodies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterBodies.
     */
    distinct?: WaterBodyScalarFieldEnum | WaterBodyScalarFieldEnum[]
  }

  /**
   * WaterBody findFirstOrThrow
   */
  export type WaterBodyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBody
     */
    select?: WaterBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBody
     */
    omit?: WaterBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyInclude<ExtArgs> | null
    /**
     * Filter, which WaterBody to fetch.
     */
    where?: WaterBodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterBodies to fetch.
     */
    orderBy?: WaterBodyOrderByWithRelationInput | WaterBodyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaterBodies.
     */
    cursor?: WaterBodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterBodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterBodies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterBodies.
     */
    distinct?: WaterBodyScalarFieldEnum | WaterBodyScalarFieldEnum[]
  }

  /**
   * WaterBody findMany
   */
  export type WaterBodyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBody
     */
    select?: WaterBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBody
     */
    omit?: WaterBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyInclude<ExtArgs> | null
    /**
     * Filter, which WaterBodies to fetch.
     */
    where?: WaterBodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterBodies to fetch.
     */
    orderBy?: WaterBodyOrderByWithRelationInput | WaterBodyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaterBodies.
     */
    cursor?: WaterBodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterBodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterBodies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterBodies.
     */
    distinct?: WaterBodyScalarFieldEnum | WaterBodyScalarFieldEnum[]
  }

  /**
   * WaterBody create
   */
  export type WaterBodyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBody
     */
    select?: WaterBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBody
     */
    omit?: WaterBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyInclude<ExtArgs> | null
    /**
     * The data needed to create a WaterBody.
     */
    data: XOR<WaterBodyCreateInput, WaterBodyUncheckedCreateInput>
  }

  /**
   * WaterBody createMany
   */
  export type WaterBodyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaterBodies.
     */
    data: WaterBodyCreateManyInput | WaterBodyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaterBody createManyAndReturn
   */
  export type WaterBodyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBody
     */
    select?: WaterBodySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBody
     */
    omit?: WaterBodyOmit<ExtArgs> | null
    /**
     * The data used to create many WaterBodies.
     */
    data: WaterBodyCreateManyInput | WaterBodyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaterBody update
   */
  export type WaterBodyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBody
     */
    select?: WaterBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBody
     */
    omit?: WaterBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyInclude<ExtArgs> | null
    /**
     * The data needed to update a WaterBody.
     */
    data: XOR<WaterBodyUpdateInput, WaterBodyUncheckedUpdateInput>
    /**
     * Choose, which WaterBody to update.
     */
    where: WaterBodyWhereUniqueInput
  }

  /**
   * WaterBody updateMany
   */
  export type WaterBodyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaterBodies.
     */
    data: XOR<WaterBodyUpdateManyMutationInput, WaterBodyUncheckedUpdateManyInput>
    /**
     * Filter which WaterBodies to update
     */
    where?: WaterBodyWhereInput
    /**
     * Limit how many WaterBodies to update.
     */
    limit?: number
  }

  /**
   * WaterBody updateManyAndReturn
   */
  export type WaterBodyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBody
     */
    select?: WaterBodySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBody
     */
    omit?: WaterBodyOmit<ExtArgs> | null
    /**
     * The data used to update WaterBodies.
     */
    data: XOR<WaterBodyUpdateManyMutationInput, WaterBodyUncheckedUpdateManyInput>
    /**
     * Filter which WaterBodies to update
     */
    where?: WaterBodyWhereInput
    /**
     * Limit how many WaterBodies to update.
     */
    limit?: number
  }

  /**
   * WaterBody upsert
   */
  export type WaterBodyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBody
     */
    select?: WaterBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBody
     */
    omit?: WaterBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyInclude<ExtArgs> | null
    /**
     * The filter to search for the WaterBody to update in case it exists.
     */
    where: WaterBodyWhereUniqueInput
    /**
     * In case the WaterBody found by the `where` argument doesn't exist, create a new WaterBody with this data.
     */
    create: XOR<WaterBodyCreateInput, WaterBodyUncheckedCreateInput>
    /**
     * In case the WaterBody was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaterBodyUpdateInput, WaterBodyUncheckedUpdateInput>
  }

  /**
   * WaterBody delete
   */
  export type WaterBodyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBody
     */
    select?: WaterBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBody
     */
    omit?: WaterBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyInclude<ExtArgs> | null
    /**
     * Filter which WaterBody to delete.
     */
    where: WaterBodyWhereUniqueInput
  }

  /**
   * WaterBody deleteMany
   */
  export type WaterBodyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaterBodies to delete
     */
    where?: WaterBodyWhereInput
    /**
     * Limit how many WaterBodies to delete.
     */
    limit?: number
  }

  /**
   * WaterBody.passport
   */
  export type WaterBody$passportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBodyPassport
     */
    select?: WaterBodyPassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBodyPassport
     */
    omit?: WaterBodyPassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyPassportInclude<ExtArgs> | null
    where?: WaterBodyPassportWhereInput
  }

  /**
   * WaterBody.measurements
   */
  export type WaterBody$measurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioindicationRecord
     */
    select?: BioindicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioindicationRecord
     */
    omit?: BioindicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioindicationRecordInclude<ExtArgs> | null
    where?: BioindicationRecordWhereInput
    orderBy?: BioindicationRecordOrderByWithRelationInput | BioindicationRecordOrderByWithRelationInput[]
    cursor?: BioindicationRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BioindicationRecordScalarFieldEnum | BioindicationRecordScalarFieldEnum[]
  }

  /**
   * WaterBody without action
   */
  export type WaterBodyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBody
     */
    select?: WaterBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBody
     */
    omit?: WaterBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyInclude<ExtArgs> | null
  }


  /**
   * Model WaterBodyPassport
   */

  export type AggregateWaterBodyPassport = {
    _count: WaterBodyPassportCountAggregateOutputType | null
    _avg: WaterBodyPassportAvgAggregateOutputType | null
    _sum: WaterBodyPassportSumAggregateOutputType | null
    _min: WaterBodyPassportMinAggregateOutputType | null
    _max: WaterBodyPassportMaxAggregateOutputType | null
  }

  export type WaterBodyPassportAvgAggregateOutputType = {
    area: number | null
    overgrowthArea: number | null
    altitude: number | null
    length: number | null
    maxWidth: number | null
    coastlineLength: number | null
    coastlineDev: number | null
    catchmentArea: number | null
    currentDepth: number | null
    maxDepth: number | null
    avgDepth: number | null
    volume: number | null
    fishProductivity: number | null
  }

  export type WaterBodyPassportSumAggregateOutputType = {
    area: number | null
    overgrowthArea: number | null
    altitude: number | null
    length: number | null
    maxWidth: number | null
    coastlineLength: number | null
    coastlineDev: number | null
    catchmentArea: number | null
    currentDepth: number | null
    maxDepth: number | null
    avgDepth: number | null
    volume: number | null
    fishProductivity: number | null
  }

  export type WaterBodyPassportMinAggregateOutputType = {
    id: string | null
    waterBodyId: string | null
    area: number | null
    overgrowthArea: number | null
    altitude: number | null
    length: number | null
    maxWidth: number | null
    coastlineLength: number | null
    coastlineDev: number | null
    catchmentArea: number | null
    currentDepth: number | null
    maxDepth: number | null
    avgDepth: number | null
    volume: number | null
    fisheryType: string | null
    fishProductivity: number | null
    economicDesc: string | null
    waterProtectionZone: string | null
    waterProtectionStrip: string | null
    ichthyofauna: string | null
    mammals: string | null
    invertebrates: string | null
  }

  export type WaterBodyPassportMaxAggregateOutputType = {
    id: string | null
    waterBodyId: string | null
    area: number | null
    overgrowthArea: number | null
    altitude: number | null
    length: number | null
    maxWidth: number | null
    coastlineLength: number | null
    coastlineDev: number | null
    catchmentArea: number | null
    currentDepth: number | null
    maxDepth: number | null
    avgDepth: number | null
    volume: number | null
    fisheryType: string | null
    fishProductivity: number | null
    economicDesc: string | null
    waterProtectionZone: string | null
    waterProtectionStrip: string | null
    ichthyofauna: string | null
    mammals: string | null
    invertebrates: string | null
  }

  export type WaterBodyPassportCountAggregateOutputType = {
    id: number
    waterBodyId: number
    area: number
    overgrowthArea: number
    altitude: number
    length: number
    maxWidth: number
    coastlineLength: number
    coastlineDev: number
    catchmentArea: number
    currentDepth: number
    maxDepth: number
    avgDepth: number
    volume: number
    fisheryType: number
    fishProductivity: number
    economicDesc: number
    waterProtectionZone: number
    waterProtectionStrip: number
    ichthyofauna: number
    mammals: number
    invertebrates: number
    _all: number
  }


  export type WaterBodyPassportAvgAggregateInputType = {
    area?: true
    overgrowthArea?: true
    altitude?: true
    length?: true
    maxWidth?: true
    coastlineLength?: true
    coastlineDev?: true
    catchmentArea?: true
    currentDepth?: true
    maxDepth?: true
    avgDepth?: true
    volume?: true
    fishProductivity?: true
  }

  export type WaterBodyPassportSumAggregateInputType = {
    area?: true
    overgrowthArea?: true
    altitude?: true
    length?: true
    maxWidth?: true
    coastlineLength?: true
    coastlineDev?: true
    catchmentArea?: true
    currentDepth?: true
    maxDepth?: true
    avgDepth?: true
    volume?: true
    fishProductivity?: true
  }

  export type WaterBodyPassportMinAggregateInputType = {
    id?: true
    waterBodyId?: true
    area?: true
    overgrowthArea?: true
    altitude?: true
    length?: true
    maxWidth?: true
    coastlineLength?: true
    coastlineDev?: true
    catchmentArea?: true
    currentDepth?: true
    maxDepth?: true
    avgDepth?: true
    volume?: true
    fisheryType?: true
    fishProductivity?: true
    economicDesc?: true
    waterProtectionZone?: true
    waterProtectionStrip?: true
    ichthyofauna?: true
    mammals?: true
    invertebrates?: true
  }

  export type WaterBodyPassportMaxAggregateInputType = {
    id?: true
    waterBodyId?: true
    area?: true
    overgrowthArea?: true
    altitude?: true
    length?: true
    maxWidth?: true
    coastlineLength?: true
    coastlineDev?: true
    catchmentArea?: true
    currentDepth?: true
    maxDepth?: true
    avgDepth?: true
    volume?: true
    fisheryType?: true
    fishProductivity?: true
    economicDesc?: true
    waterProtectionZone?: true
    waterProtectionStrip?: true
    ichthyofauna?: true
    mammals?: true
    invertebrates?: true
  }

  export type WaterBodyPassportCountAggregateInputType = {
    id?: true
    waterBodyId?: true
    area?: true
    overgrowthArea?: true
    altitude?: true
    length?: true
    maxWidth?: true
    coastlineLength?: true
    coastlineDev?: true
    catchmentArea?: true
    currentDepth?: true
    maxDepth?: true
    avgDepth?: true
    volume?: true
    fisheryType?: true
    fishProductivity?: true
    economicDesc?: true
    waterProtectionZone?: true
    waterProtectionStrip?: true
    ichthyofauna?: true
    mammals?: true
    invertebrates?: true
    _all?: true
  }

  export type WaterBodyPassportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaterBodyPassport to aggregate.
     */
    where?: WaterBodyPassportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterBodyPassports to fetch.
     */
    orderBy?: WaterBodyPassportOrderByWithRelationInput | WaterBodyPassportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaterBodyPassportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterBodyPassports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterBodyPassports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaterBodyPassports
    **/
    _count?: true | WaterBodyPassportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaterBodyPassportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaterBodyPassportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaterBodyPassportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaterBodyPassportMaxAggregateInputType
  }

  export type GetWaterBodyPassportAggregateType<T extends WaterBodyPassportAggregateArgs> = {
        [P in keyof T & keyof AggregateWaterBodyPassport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaterBodyPassport[P]>
      : GetScalarType<T[P], AggregateWaterBodyPassport[P]>
  }




  export type WaterBodyPassportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterBodyPassportWhereInput
    orderBy?: WaterBodyPassportOrderByWithAggregationInput | WaterBodyPassportOrderByWithAggregationInput[]
    by: WaterBodyPassportScalarFieldEnum[] | WaterBodyPassportScalarFieldEnum
    having?: WaterBodyPassportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaterBodyPassportCountAggregateInputType | true
    _avg?: WaterBodyPassportAvgAggregateInputType
    _sum?: WaterBodyPassportSumAggregateInputType
    _min?: WaterBodyPassportMinAggregateInputType
    _max?: WaterBodyPassportMaxAggregateInputType
  }

  export type WaterBodyPassportGroupByOutputType = {
    id: string
    waterBodyId: string
    area: number | null
    overgrowthArea: number | null
    altitude: number | null
    length: number | null
    maxWidth: number | null
    coastlineLength: number | null
    coastlineDev: number | null
    catchmentArea: number | null
    currentDepth: number | null
    maxDepth: number | null
    avgDepth: number | null
    volume: number | null
    fisheryType: string | null
    fishProductivity: number | null
    economicDesc: string | null
    waterProtectionZone: string | null
    waterProtectionStrip: string | null
    ichthyofauna: string | null
    mammals: string | null
    invertebrates: string | null
    _count: WaterBodyPassportCountAggregateOutputType | null
    _avg: WaterBodyPassportAvgAggregateOutputType | null
    _sum: WaterBodyPassportSumAggregateOutputType | null
    _min: WaterBodyPassportMinAggregateOutputType | null
    _max: WaterBodyPassportMaxAggregateOutputType | null
  }

  type GetWaterBodyPassportGroupByPayload<T extends WaterBodyPassportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaterBodyPassportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaterBodyPassportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaterBodyPassportGroupByOutputType[P]>
            : GetScalarType<T[P], WaterBodyPassportGroupByOutputType[P]>
        }
      >
    >


  export type WaterBodyPassportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waterBodyId?: boolean
    area?: boolean
    overgrowthArea?: boolean
    altitude?: boolean
    length?: boolean
    maxWidth?: boolean
    coastlineLength?: boolean
    coastlineDev?: boolean
    catchmentArea?: boolean
    currentDepth?: boolean
    maxDepth?: boolean
    avgDepth?: boolean
    volume?: boolean
    fisheryType?: boolean
    fishProductivity?: boolean
    economicDesc?: boolean
    waterProtectionZone?: boolean
    waterProtectionStrip?: boolean
    ichthyofauna?: boolean
    mammals?: boolean
    invertebrates?: boolean
    waterBody?: boolean | WaterBodyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waterBodyPassport"]>

  export type WaterBodyPassportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waterBodyId?: boolean
    area?: boolean
    overgrowthArea?: boolean
    altitude?: boolean
    length?: boolean
    maxWidth?: boolean
    coastlineLength?: boolean
    coastlineDev?: boolean
    catchmentArea?: boolean
    currentDepth?: boolean
    maxDepth?: boolean
    avgDepth?: boolean
    volume?: boolean
    fisheryType?: boolean
    fishProductivity?: boolean
    economicDesc?: boolean
    waterProtectionZone?: boolean
    waterProtectionStrip?: boolean
    ichthyofauna?: boolean
    mammals?: boolean
    invertebrates?: boolean
    waterBody?: boolean | WaterBodyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waterBodyPassport"]>

  export type WaterBodyPassportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waterBodyId?: boolean
    area?: boolean
    overgrowthArea?: boolean
    altitude?: boolean
    length?: boolean
    maxWidth?: boolean
    coastlineLength?: boolean
    coastlineDev?: boolean
    catchmentArea?: boolean
    currentDepth?: boolean
    maxDepth?: boolean
    avgDepth?: boolean
    volume?: boolean
    fisheryType?: boolean
    fishProductivity?: boolean
    economicDesc?: boolean
    waterProtectionZone?: boolean
    waterProtectionStrip?: boolean
    ichthyofauna?: boolean
    mammals?: boolean
    invertebrates?: boolean
    waterBody?: boolean | WaterBodyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waterBodyPassport"]>

  export type WaterBodyPassportSelectScalar = {
    id?: boolean
    waterBodyId?: boolean
    area?: boolean
    overgrowthArea?: boolean
    altitude?: boolean
    length?: boolean
    maxWidth?: boolean
    coastlineLength?: boolean
    coastlineDev?: boolean
    catchmentArea?: boolean
    currentDepth?: boolean
    maxDepth?: boolean
    avgDepth?: boolean
    volume?: boolean
    fisheryType?: boolean
    fishProductivity?: boolean
    economicDesc?: boolean
    waterProtectionZone?: boolean
    waterProtectionStrip?: boolean
    ichthyofauna?: boolean
    mammals?: boolean
    invertebrates?: boolean
  }

  export type WaterBodyPassportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "waterBodyId" | "area" | "overgrowthArea" | "altitude" | "length" | "maxWidth" | "coastlineLength" | "coastlineDev" | "catchmentArea" | "currentDepth" | "maxDepth" | "avgDepth" | "volume" | "fisheryType" | "fishProductivity" | "economicDesc" | "waterProtectionZone" | "waterProtectionStrip" | "ichthyofauna" | "mammals" | "invertebrates", ExtArgs["result"]["waterBodyPassport"]>
  export type WaterBodyPassportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waterBody?: boolean | WaterBodyDefaultArgs<ExtArgs>
  }
  export type WaterBodyPassportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waterBody?: boolean | WaterBodyDefaultArgs<ExtArgs>
  }
  export type WaterBodyPassportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waterBody?: boolean | WaterBodyDefaultArgs<ExtArgs>
  }

  export type $WaterBodyPassportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaterBodyPassport"
    objects: {
      waterBody: Prisma.$WaterBodyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      waterBodyId: string
      area: number | null
      overgrowthArea: number | null
      altitude: number | null
      length: number | null
      maxWidth: number | null
      coastlineLength: number | null
      coastlineDev: number | null
      catchmentArea: number | null
      currentDepth: number | null
      maxDepth: number | null
      avgDepth: number | null
      volume: number | null
      fisheryType: string | null
      fishProductivity: number | null
      economicDesc: string | null
      waterProtectionZone: string | null
      waterProtectionStrip: string | null
      ichthyofauna: string | null
      mammals: string | null
      invertebrates: string | null
    }, ExtArgs["result"]["waterBodyPassport"]>
    composites: {}
  }

  type WaterBodyPassportGetPayload<S extends boolean | null | undefined | WaterBodyPassportDefaultArgs> = $Result.GetResult<Prisma.$WaterBodyPassportPayload, S>

  type WaterBodyPassportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaterBodyPassportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaterBodyPassportCountAggregateInputType | true
    }

  export interface WaterBodyPassportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaterBodyPassport'], meta: { name: 'WaterBodyPassport' } }
    /**
     * Find zero or one WaterBodyPassport that matches the filter.
     * @param {WaterBodyPassportFindUniqueArgs} args - Arguments to find a WaterBodyPassport
     * @example
     * // Get one WaterBodyPassport
     * const waterBodyPassport = await prisma.waterBodyPassport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaterBodyPassportFindUniqueArgs>(args: SelectSubset<T, WaterBodyPassportFindUniqueArgs<ExtArgs>>): Prisma__WaterBodyPassportClient<$Result.GetResult<Prisma.$WaterBodyPassportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaterBodyPassport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaterBodyPassportFindUniqueOrThrowArgs} args - Arguments to find a WaterBodyPassport
     * @example
     * // Get one WaterBodyPassport
     * const waterBodyPassport = await prisma.waterBodyPassport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaterBodyPassportFindUniqueOrThrowArgs>(args: SelectSubset<T, WaterBodyPassportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaterBodyPassportClient<$Result.GetResult<Prisma.$WaterBodyPassportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaterBodyPassport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterBodyPassportFindFirstArgs} args - Arguments to find a WaterBodyPassport
     * @example
     * // Get one WaterBodyPassport
     * const waterBodyPassport = await prisma.waterBodyPassport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaterBodyPassportFindFirstArgs>(args?: SelectSubset<T, WaterBodyPassportFindFirstArgs<ExtArgs>>): Prisma__WaterBodyPassportClient<$Result.GetResult<Prisma.$WaterBodyPassportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaterBodyPassport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterBodyPassportFindFirstOrThrowArgs} args - Arguments to find a WaterBodyPassport
     * @example
     * // Get one WaterBodyPassport
     * const waterBodyPassport = await prisma.waterBodyPassport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaterBodyPassportFindFirstOrThrowArgs>(args?: SelectSubset<T, WaterBodyPassportFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaterBodyPassportClient<$Result.GetResult<Prisma.$WaterBodyPassportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaterBodyPassports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterBodyPassportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaterBodyPassports
     * const waterBodyPassports = await prisma.waterBodyPassport.findMany()
     * 
     * // Get first 10 WaterBodyPassports
     * const waterBodyPassports = await prisma.waterBodyPassport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waterBodyPassportWithIdOnly = await prisma.waterBodyPassport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaterBodyPassportFindManyArgs>(args?: SelectSubset<T, WaterBodyPassportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterBodyPassportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaterBodyPassport.
     * @param {WaterBodyPassportCreateArgs} args - Arguments to create a WaterBodyPassport.
     * @example
     * // Create one WaterBodyPassport
     * const WaterBodyPassport = await prisma.waterBodyPassport.create({
     *   data: {
     *     // ... data to create a WaterBodyPassport
     *   }
     * })
     * 
     */
    create<T extends WaterBodyPassportCreateArgs>(args: SelectSubset<T, WaterBodyPassportCreateArgs<ExtArgs>>): Prisma__WaterBodyPassportClient<$Result.GetResult<Prisma.$WaterBodyPassportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaterBodyPassports.
     * @param {WaterBodyPassportCreateManyArgs} args - Arguments to create many WaterBodyPassports.
     * @example
     * // Create many WaterBodyPassports
     * const waterBodyPassport = await prisma.waterBodyPassport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaterBodyPassportCreateManyArgs>(args?: SelectSubset<T, WaterBodyPassportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaterBodyPassports and returns the data saved in the database.
     * @param {WaterBodyPassportCreateManyAndReturnArgs} args - Arguments to create many WaterBodyPassports.
     * @example
     * // Create many WaterBodyPassports
     * const waterBodyPassport = await prisma.waterBodyPassport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaterBodyPassports and only return the `id`
     * const waterBodyPassportWithIdOnly = await prisma.waterBodyPassport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaterBodyPassportCreateManyAndReturnArgs>(args?: SelectSubset<T, WaterBodyPassportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterBodyPassportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WaterBodyPassport.
     * @param {WaterBodyPassportDeleteArgs} args - Arguments to delete one WaterBodyPassport.
     * @example
     * // Delete one WaterBodyPassport
     * const WaterBodyPassport = await prisma.waterBodyPassport.delete({
     *   where: {
     *     // ... filter to delete one WaterBodyPassport
     *   }
     * })
     * 
     */
    delete<T extends WaterBodyPassportDeleteArgs>(args: SelectSubset<T, WaterBodyPassportDeleteArgs<ExtArgs>>): Prisma__WaterBodyPassportClient<$Result.GetResult<Prisma.$WaterBodyPassportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaterBodyPassport.
     * @param {WaterBodyPassportUpdateArgs} args - Arguments to update one WaterBodyPassport.
     * @example
     * // Update one WaterBodyPassport
     * const waterBodyPassport = await prisma.waterBodyPassport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaterBodyPassportUpdateArgs>(args: SelectSubset<T, WaterBodyPassportUpdateArgs<ExtArgs>>): Prisma__WaterBodyPassportClient<$Result.GetResult<Prisma.$WaterBodyPassportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaterBodyPassports.
     * @param {WaterBodyPassportDeleteManyArgs} args - Arguments to filter WaterBodyPassports to delete.
     * @example
     * // Delete a few WaterBodyPassports
     * const { count } = await prisma.waterBodyPassport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaterBodyPassportDeleteManyArgs>(args?: SelectSubset<T, WaterBodyPassportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaterBodyPassports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterBodyPassportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaterBodyPassports
     * const waterBodyPassport = await prisma.waterBodyPassport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaterBodyPassportUpdateManyArgs>(args: SelectSubset<T, WaterBodyPassportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaterBodyPassports and returns the data updated in the database.
     * @param {WaterBodyPassportUpdateManyAndReturnArgs} args - Arguments to update many WaterBodyPassports.
     * @example
     * // Update many WaterBodyPassports
     * const waterBodyPassport = await prisma.waterBodyPassport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WaterBodyPassports and only return the `id`
     * const waterBodyPassportWithIdOnly = await prisma.waterBodyPassport.updateManyAndReturn({
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
    updateManyAndReturn<T extends WaterBodyPassportUpdateManyAndReturnArgs>(args: SelectSubset<T, WaterBodyPassportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterBodyPassportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WaterBodyPassport.
     * @param {WaterBodyPassportUpsertArgs} args - Arguments to update or create a WaterBodyPassport.
     * @example
     * // Update or create a WaterBodyPassport
     * const waterBodyPassport = await prisma.waterBodyPassport.upsert({
     *   create: {
     *     // ... data to create a WaterBodyPassport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaterBodyPassport we want to update
     *   }
     * })
     */
    upsert<T extends WaterBodyPassportUpsertArgs>(args: SelectSubset<T, WaterBodyPassportUpsertArgs<ExtArgs>>): Prisma__WaterBodyPassportClient<$Result.GetResult<Prisma.$WaterBodyPassportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WaterBodyPassports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterBodyPassportCountArgs} args - Arguments to filter WaterBodyPassports to count.
     * @example
     * // Count the number of WaterBodyPassports
     * const count = await prisma.waterBodyPassport.count({
     *   where: {
     *     // ... the filter for the WaterBodyPassports we want to count
     *   }
     * })
    **/
    count<T extends WaterBodyPassportCountArgs>(
      args?: Subset<T, WaterBodyPassportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaterBodyPassportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaterBodyPassport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterBodyPassportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaterBodyPassportAggregateArgs>(args: Subset<T, WaterBodyPassportAggregateArgs>): Prisma.PrismaPromise<GetWaterBodyPassportAggregateType<T>>

    /**
     * Group by WaterBodyPassport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterBodyPassportGroupByArgs} args - Group by arguments.
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
      T extends WaterBodyPassportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaterBodyPassportGroupByArgs['orderBy'] }
        : { orderBy?: WaterBodyPassportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WaterBodyPassportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaterBodyPassportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaterBodyPassport model
   */
  readonly fields: WaterBodyPassportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaterBodyPassport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaterBodyPassportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    waterBody<T extends WaterBodyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WaterBodyDefaultArgs<ExtArgs>>): Prisma__WaterBodyClient<$Result.GetResult<Prisma.$WaterBodyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WaterBodyPassport model
   */
  interface WaterBodyPassportFieldRefs {
    readonly id: FieldRef<"WaterBodyPassport", 'String'>
    readonly waterBodyId: FieldRef<"WaterBodyPassport", 'String'>
    readonly area: FieldRef<"WaterBodyPassport", 'Float'>
    readonly overgrowthArea: FieldRef<"WaterBodyPassport", 'Float'>
    readonly altitude: FieldRef<"WaterBodyPassport", 'Float'>
    readonly length: FieldRef<"WaterBodyPassport", 'Float'>
    readonly maxWidth: FieldRef<"WaterBodyPassport", 'Float'>
    readonly coastlineLength: FieldRef<"WaterBodyPassport", 'Float'>
    readonly coastlineDev: FieldRef<"WaterBodyPassport", 'Float'>
    readonly catchmentArea: FieldRef<"WaterBodyPassport", 'Float'>
    readonly currentDepth: FieldRef<"WaterBodyPassport", 'Float'>
    readonly maxDepth: FieldRef<"WaterBodyPassport", 'Float'>
    readonly avgDepth: FieldRef<"WaterBodyPassport", 'Float'>
    readonly volume: FieldRef<"WaterBodyPassport", 'Float'>
    readonly fisheryType: FieldRef<"WaterBodyPassport", 'String'>
    readonly fishProductivity: FieldRef<"WaterBodyPassport", 'Float'>
    readonly economicDesc: FieldRef<"WaterBodyPassport", 'String'>
    readonly waterProtectionZone: FieldRef<"WaterBodyPassport", 'String'>
    readonly waterProtectionStrip: FieldRef<"WaterBodyPassport", 'String'>
    readonly ichthyofauna: FieldRef<"WaterBodyPassport", 'String'>
    readonly mammals: FieldRef<"WaterBodyPassport", 'String'>
    readonly invertebrates: FieldRef<"WaterBodyPassport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WaterBodyPassport findUnique
   */
  export type WaterBodyPassportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBodyPassport
     */
    select?: WaterBodyPassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBodyPassport
     */
    omit?: WaterBodyPassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyPassportInclude<ExtArgs> | null
    /**
     * Filter, which WaterBodyPassport to fetch.
     */
    where: WaterBodyPassportWhereUniqueInput
  }

  /**
   * WaterBodyPassport findUniqueOrThrow
   */
  export type WaterBodyPassportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBodyPassport
     */
    select?: WaterBodyPassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBodyPassport
     */
    omit?: WaterBodyPassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyPassportInclude<ExtArgs> | null
    /**
     * Filter, which WaterBodyPassport to fetch.
     */
    where: WaterBodyPassportWhereUniqueInput
  }

  /**
   * WaterBodyPassport findFirst
   */
  export type WaterBodyPassportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBodyPassport
     */
    select?: WaterBodyPassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBodyPassport
     */
    omit?: WaterBodyPassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyPassportInclude<ExtArgs> | null
    /**
     * Filter, which WaterBodyPassport to fetch.
     */
    where?: WaterBodyPassportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterBodyPassports to fetch.
     */
    orderBy?: WaterBodyPassportOrderByWithRelationInput | WaterBodyPassportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaterBodyPassports.
     */
    cursor?: WaterBodyPassportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterBodyPassports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterBodyPassports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterBodyPassports.
     */
    distinct?: WaterBodyPassportScalarFieldEnum | WaterBodyPassportScalarFieldEnum[]
  }

  /**
   * WaterBodyPassport findFirstOrThrow
   */
  export type WaterBodyPassportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBodyPassport
     */
    select?: WaterBodyPassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBodyPassport
     */
    omit?: WaterBodyPassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyPassportInclude<ExtArgs> | null
    /**
     * Filter, which WaterBodyPassport to fetch.
     */
    where?: WaterBodyPassportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterBodyPassports to fetch.
     */
    orderBy?: WaterBodyPassportOrderByWithRelationInput | WaterBodyPassportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaterBodyPassports.
     */
    cursor?: WaterBodyPassportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterBodyPassports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterBodyPassports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterBodyPassports.
     */
    distinct?: WaterBodyPassportScalarFieldEnum | WaterBodyPassportScalarFieldEnum[]
  }

  /**
   * WaterBodyPassport findMany
   */
  export type WaterBodyPassportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBodyPassport
     */
    select?: WaterBodyPassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBodyPassport
     */
    omit?: WaterBodyPassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyPassportInclude<ExtArgs> | null
    /**
     * Filter, which WaterBodyPassports to fetch.
     */
    where?: WaterBodyPassportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterBodyPassports to fetch.
     */
    orderBy?: WaterBodyPassportOrderByWithRelationInput | WaterBodyPassportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaterBodyPassports.
     */
    cursor?: WaterBodyPassportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterBodyPassports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterBodyPassports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterBodyPassports.
     */
    distinct?: WaterBodyPassportScalarFieldEnum | WaterBodyPassportScalarFieldEnum[]
  }

  /**
   * WaterBodyPassport create
   */
  export type WaterBodyPassportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBodyPassport
     */
    select?: WaterBodyPassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBodyPassport
     */
    omit?: WaterBodyPassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyPassportInclude<ExtArgs> | null
    /**
     * The data needed to create a WaterBodyPassport.
     */
    data: XOR<WaterBodyPassportCreateInput, WaterBodyPassportUncheckedCreateInput>
  }

  /**
   * WaterBodyPassport createMany
   */
  export type WaterBodyPassportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaterBodyPassports.
     */
    data: WaterBodyPassportCreateManyInput | WaterBodyPassportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaterBodyPassport createManyAndReturn
   */
  export type WaterBodyPassportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBodyPassport
     */
    select?: WaterBodyPassportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBodyPassport
     */
    omit?: WaterBodyPassportOmit<ExtArgs> | null
    /**
     * The data used to create many WaterBodyPassports.
     */
    data: WaterBodyPassportCreateManyInput | WaterBodyPassportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyPassportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaterBodyPassport update
   */
  export type WaterBodyPassportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBodyPassport
     */
    select?: WaterBodyPassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBodyPassport
     */
    omit?: WaterBodyPassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyPassportInclude<ExtArgs> | null
    /**
     * The data needed to update a WaterBodyPassport.
     */
    data: XOR<WaterBodyPassportUpdateInput, WaterBodyPassportUncheckedUpdateInput>
    /**
     * Choose, which WaterBodyPassport to update.
     */
    where: WaterBodyPassportWhereUniqueInput
  }

  /**
   * WaterBodyPassport updateMany
   */
  export type WaterBodyPassportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaterBodyPassports.
     */
    data: XOR<WaterBodyPassportUpdateManyMutationInput, WaterBodyPassportUncheckedUpdateManyInput>
    /**
     * Filter which WaterBodyPassports to update
     */
    where?: WaterBodyPassportWhereInput
    /**
     * Limit how many WaterBodyPassports to update.
     */
    limit?: number
  }

  /**
   * WaterBodyPassport updateManyAndReturn
   */
  export type WaterBodyPassportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBodyPassport
     */
    select?: WaterBodyPassportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBodyPassport
     */
    omit?: WaterBodyPassportOmit<ExtArgs> | null
    /**
     * The data used to update WaterBodyPassports.
     */
    data: XOR<WaterBodyPassportUpdateManyMutationInput, WaterBodyPassportUncheckedUpdateManyInput>
    /**
     * Filter which WaterBodyPassports to update
     */
    where?: WaterBodyPassportWhereInput
    /**
     * Limit how many WaterBodyPassports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyPassportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaterBodyPassport upsert
   */
  export type WaterBodyPassportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBodyPassport
     */
    select?: WaterBodyPassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBodyPassport
     */
    omit?: WaterBodyPassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyPassportInclude<ExtArgs> | null
    /**
     * The filter to search for the WaterBodyPassport to update in case it exists.
     */
    where: WaterBodyPassportWhereUniqueInput
    /**
     * In case the WaterBodyPassport found by the `where` argument doesn't exist, create a new WaterBodyPassport with this data.
     */
    create: XOR<WaterBodyPassportCreateInput, WaterBodyPassportUncheckedCreateInput>
    /**
     * In case the WaterBodyPassport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaterBodyPassportUpdateInput, WaterBodyPassportUncheckedUpdateInput>
  }

  /**
   * WaterBodyPassport delete
   */
  export type WaterBodyPassportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBodyPassport
     */
    select?: WaterBodyPassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBodyPassport
     */
    omit?: WaterBodyPassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyPassportInclude<ExtArgs> | null
    /**
     * Filter which WaterBodyPassport to delete.
     */
    where: WaterBodyPassportWhereUniqueInput
  }

  /**
   * WaterBodyPassport deleteMany
   */
  export type WaterBodyPassportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaterBodyPassports to delete
     */
    where?: WaterBodyPassportWhereInput
    /**
     * Limit how many WaterBodyPassports to delete.
     */
    limit?: number
  }

  /**
   * WaterBodyPassport without action
   */
  export type WaterBodyPassportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterBodyPassport
     */
    select?: WaterBodyPassportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterBodyPassport
     */
    omit?: WaterBodyPassportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterBodyPassportInclude<ExtArgs> | null
  }


  /**
   * Model BioindicationRecord
   */

  export type AggregateBioindicationRecord = {
    _count: BioindicationRecordCountAggregateOutputType | null
    _avg: BioindicationRecordAvgAggregateOutputType | null
    _sum: BioindicationRecordSumAggregateOutputType | null
    _min: BioindicationRecordMinAggregateOutputType | null
    _max: BioindicationRecordMaxAggregateOutputType | null
  }

  export type BioindicationRecordAvgAggregateOutputType = {
    ph: number | null
    turbidity: number | null
    permanganateOxid: number | null
    mineralization: number | null
    salinity: number | null
    hardness: number | null
    calcium: number | null
    magnesium: number | null
    chlorides: number | null
    sulfates: number | null
    hydrocarbonates: number | null
    potassiumSodium: number | null
    overgrowthPercent: number | null
  }

  export type BioindicationRecordSumAggregateOutputType = {
    ph: number | null
    turbidity: number | null
    permanganateOxid: number | null
    mineralization: number | null
    salinity: number | null
    hardness: number | null
    calcium: number | null
    magnesium: number | null
    chlorides: number | null
    sulfates: number | null
    hydrocarbonates: number | null
    potassiumSodium: number | null
    overgrowthPercent: number | null
  }

  export type BioindicationRecordMinAggregateOutputType = {
    id: string | null
    waterBodyId: string | null
    recordDate: Date | null
    ph: number | null
    turbidity: number | null
    dissolvedGases: string | null
    biogenicCompounds: string | null
    permanganateOxid: number | null
    mineralization: number | null
    salinity: number | null
    hardness: number | null
    calcium: number | null
    magnesium: number | null
    chlorides: number | null
    sulfates: number | null
    hydrocarbonates: number | null
    potassiumSodium: number | null
    overgrowthPercent: number | null
    overgrowthDegree: string | null
    phytoplanktonDev: string | null
    zooplanktonTaxa: string | null
    zooplanktonGroups: string | null
    zoobenthosTaxa: string | null
    zoobenthosGroups: string | null
    trophicStatus: string | null
  }

  export type BioindicationRecordMaxAggregateOutputType = {
    id: string | null
    waterBodyId: string | null
    recordDate: Date | null
    ph: number | null
    turbidity: number | null
    dissolvedGases: string | null
    biogenicCompounds: string | null
    permanganateOxid: number | null
    mineralization: number | null
    salinity: number | null
    hardness: number | null
    calcium: number | null
    magnesium: number | null
    chlorides: number | null
    sulfates: number | null
    hydrocarbonates: number | null
    potassiumSodium: number | null
    overgrowthPercent: number | null
    overgrowthDegree: string | null
    phytoplanktonDev: string | null
    zooplanktonTaxa: string | null
    zooplanktonGroups: string | null
    zoobenthosTaxa: string | null
    zoobenthosGroups: string | null
    trophicStatus: string | null
  }

  export type BioindicationRecordCountAggregateOutputType = {
    id: number
    waterBodyId: number
    recordDate: number
    ph: number
    turbidity: number
    dissolvedGases: number
    biogenicCompounds: number
    permanganateOxid: number
    mineralization: number
    salinity: number
    hardness: number
    calcium: number
    magnesium: number
    chlorides: number
    sulfates: number
    hydrocarbonates: number
    potassiumSodium: number
    overgrowthPercent: number
    overgrowthDegree: number
    phytoplanktonDev: number
    zooplanktonTaxa: number
    zooplanktonGroups: number
    zoobenthosTaxa: number
    zoobenthosGroups: number
    trophicStatus: number
    _all: number
  }


  export type BioindicationRecordAvgAggregateInputType = {
    ph?: true
    turbidity?: true
    permanganateOxid?: true
    mineralization?: true
    salinity?: true
    hardness?: true
    calcium?: true
    magnesium?: true
    chlorides?: true
    sulfates?: true
    hydrocarbonates?: true
    potassiumSodium?: true
    overgrowthPercent?: true
  }

  export type BioindicationRecordSumAggregateInputType = {
    ph?: true
    turbidity?: true
    permanganateOxid?: true
    mineralization?: true
    salinity?: true
    hardness?: true
    calcium?: true
    magnesium?: true
    chlorides?: true
    sulfates?: true
    hydrocarbonates?: true
    potassiumSodium?: true
    overgrowthPercent?: true
  }

  export type BioindicationRecordMinAggregateInputType = {
    id?: true
    waterBodyId?: true
    recordDate?: true
    ph?: true
    turbidity?: true
    dissolvedGases?: true
    biogenicCompounds?: true
    permanganateOxid?: true
    mineralization?: true
    salinity?: true
    hardness?: true
    calcium?: true
    magnesium?: true
    chlorides?: true
    sulfates?: true
    hydrocarbonates?: true
    potassiumSodium?: true
    overgrowthPercent?: true
    overgrowthDegree?: true
    phytoplanktonDev?: true
    zooplanktonTaxa?: true
    zooplanktonGroups?: true
    zoobenthosTaxa?: true
    zoobenthosGroups?: true
    trophicStatus?: true
  }

  export type BioindicationRecordMaxAggregateInputType = {
    id?: true
    waterBodyId?: true
    recordDate?: true
    ph?: true
    turbidity?: true
    dissolvedGases?: true
    biogenicCompounds?: true
    permanganateOxid?: true
    mineralization?: true
    salinity?: true
    hardness?: true
    calcium?: true
    magnesium?: true
    chlorides?: true
    sulfates?: true
    hydrocarbonates?: true
    potassiumSodium?: true
    overgrowthPercent?: true
    overgrowthDegree?: true
    phytoplanktonDev?: true
    zooplanktonTaxa?: true
    zooplanktonGroups?: true
    zoobenthosTaxa?: true
    zoobenthosGroups?: true
    trophicStatus?: true
  }

  export type BioindicationRecordCountAggregateInputType = {
    id?: true
    waterBodyId?: true
    recordDate?: true
    ph?: true
    turbidity?: true
    dissolvedGases?: true
    biogenicCompounds?: true
    permanganateOxid?: true
    mineralization?: true
    salinity?: true
    hardness?: true
    calcium?: true
    magnesium?: true
    chlorides?: true
    sulfates?: true
    hydrocarbonates?: true
    potassiumSodium?: true
    overgrowthPercent?: true
    overgrowthDegree?: true
    phytoplanktonDev?: true
    zooplanktonTaxa?: true
    zooplanktonGroups?: true
    zoobenthosTaxa?: true
    zoobenthosGroups?: true
    trophicStatus?: true
    _all?: true
  }

  export type BioindicationRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BioindicationRecord to aggregate.
     */
    where?: BioindicationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BioindicationRecords to fetch.
     */
    orderBy?: BioindicationRecordOrderByWithRelationInput | BioindicationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BioindicationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BioindicationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BioindicationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BioindicationRecords
    **/
    _count?: true | BioindicationRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BioindicationRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BioindicationRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BioindicationRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BioindicationRecordMaxAggregateInputType
  }

  export type GetBioindicationRecordAggregateType<T extends BioindicationRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateBioindicationRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBioindicationRecord[P]>
      : GetScalarType<T[P], AggregateBioindicationRecord[P]>
  }




  export type BioindicationRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BioindicationRecordWhereInput
    orderBy?: BioindicationRecordOrderByWithAggregationInput | BioindicationRecordOrderByWithAggregationInput[]
    by: BioindicationRecordScalarFieldEnum[] | BioindicationRecordScalarFieldEnum
    having?: BioindicationRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BioindicationRecordCountAggregateInputType | true
    _avg?: BioindicationRecordAvgAggregateInputType
    _sum?: BioindicationRecordSumAggregateInputType
    _min?: BioindicationRecordMinAggregateInputType
    _max?: BioindicationRecordMaxAggregateInputType
  }

  export type BioindicationRecordGroupByOutputType = {
    id: string
    waterBodyId: string
    recordDate: Date
    ph: number | null
    turbidity: number | null
    dissolvedGases: string | null
    biogenicCompounds: string | null
    permanganateOxid: number | null
    mineralization: number | null
    salinity: number | null
    hardness: number | null
    calcium: number | null
    magnesium: number | null
    chlorides: number | null
    sulfates: number | null
    hydrocarbonates: number | null
    potassiumSodium: number | null
    overgrowthPercent: number | null
    overgrowthDegree: string | null
    phytoplanktonDev: string | null
    zooplanktonTaxa: string | null
    zooplanktonGroups: string | null
    zoobenthosTaxa: string | null
    zoobenthosGroups: string | null
    trophicStatus: string | null
    _count: BioindicationRecordCountAggregateOutputType | null
    _avg: BioindicationRecordAvgAggregateOutputType | null
    _sum: BioindicationRecordSumAggregateOutputType | null
    _min: BioindicationRecordMinAggregateOutputType | null
    _max: BioindicationRecordMaxAggregateOutputType | null
  }

  type GetBioindicationRecordGroupByPayload<T extends BioindicationRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BioindicationRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BioindicationRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BioindicationRecordGroupByOutputType[P]>
            : GetScalarType<T[P], BioindicationRecordGroupByOutputType[P]>
        }
      >
    >


  export type BioindicationRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waterBodyId?: boolean
    recordDate?: boolean
    ph?: boolean
    turbidity?: boolean
    dissolvedGases?: boolean
    biogenicCompounds?: boolean
    permanganateOxid?: boolean
    mineralization?: boolean
    salinity?: boolean
    hardness?: boolean
    calcium?: boolean
    magnesium?: boolean
    chlorides?: boolean
    sulfates?: boolean
    hydrocarbonates?: boolean
    potassiumSodium?: boolean
    overgrowthPercent?: boolean
    overgrowthDegree?: boolean
    phytoplanktonDev?: boolean
    zooplanktonTaxa?: boolean
    zooplanktonGroups?: boolean
    zoobenthosTaxa?: boolean
    zoobenthosGroups?: boolean
    trophicStatus?: boolean
    waterBody?: boolean | WaterBodyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bioindicationRecord"]>

  export type BioindicationRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waterBodyId?: boolean
    recordDate?: boolean
    ph?: boolean
    turbidity?: boolean
    dissolvedGases?: boolean
    biogenicCompounds?: boolean
    permanganateOxid?: boolean
    mineralization?: boolean
    salinity?: boolean
    hardness?: boolean
    calcium?: boolean
    magnesium?: boolean
    chlorides?: boolean
    sulfates?: boolean
    hydrocarbonates?: boolean
    potassiumSodium?: boolean
    overgrowthPercent?: boolean
    overgrowthDegree?: boolean
    phytoplanktonDev?: boolean
    zooplanktonTaxa?: boolean
    zooplanktonGroups?: boolean
    zoobenthosTaxa?: boolean
    zoobenthosGroups?: boolean
    trophicStatus?: boolean
    waterBody?: boolean | WaterBodyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bioindicationRecord"]>

  export type BioindicationRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waterBodyId?: boolean
    recordDate?: boolean
    ph?: boolean
    turbidity?: boolean
    dissolvedGases?: boolean
    biogenicCompounds?: boolean
    permanganateOxid?: boolean
    mineralization?: boolean
    salinity?: boolean
    hardness?: boolean
    calcium?: boolean
    magnesium?: boolean
    chlorides?: boolean
    sulfates?: boolean
    hydrocarbonates?: boolean
    potassiumSodium?: boolean
    overgrowthPercent?: boolean
    overgrowthDegree?: boolean
    phytoplanktonDev?: boolean
    zooplanktonTaxa?: boolean
    zooplanktonGroups?: boolean
    zoobenthosTaxa?: boolean
    zoobenthosGroups?: boolean
    trophicStatus?: boolean
    waterBody?: boolean | WaterBodyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bioindicationRecord"]>

  export type BioindicationRecordSelectScalar = {
    id?: boolean
    waterBodyId?: boolean
    recordDate?: boolean
    ph?: boolean
    turbidity?: boolean
    dissolvedGases?: boolean
    biogenicCompounds?: boolean
    permanganateOxid?: boolean
    mineralization?: boolean
    salinity?: boolean
    hardness?: boolean
    calcium?: boolean
    magnesium?: boolean
    chlorides?: boolean
    sulfates?: boolean
    hydrocarbonates?: boolean
    potassiumSodium?: boolean
    overgrowthPercent?: boolean
    overgrowthDegree?: boolean
    phytoplanktonDev?: boolean
    zooplanktonTaxa?: boolean
    zooplanktonGroups?: boolean
    zoobenthosTaxa?: boolean
    zoobenthosGroups?: boolean
    trophicStatus?: boolean
  }

  export type BioindicationRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "waterBodyId" | "recordDate" | "ph" | "turbidity" | "dissolvedGases" | "biogenicCompounds" | "permanganateOxid" | "mineralization" | "salinity" | "hardness" | "calcium" | "magnesium" | "chlorides" | "sulfates" | "hydrocarbonates" | "potassiumSodium" | "overgrowthPercent" | "overgrowthDegree" | "phytoplanktonDev" | "zooplanktonTaxa" | "zooplanktonGroups" | "zoobenthosTaxa" | "zoobenthosGroups" | "trophicStatus", ExtArgs["result"]["bioindicationRecord"]>
  export type BioindicationRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waterBody?: boolean | WaterBodyDefaultArgs<ExtArgs>
  }
  export type BioindicationRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waterBody?: boolean | WaterBodyDefaultArgs<ExtArgs>
  }
  export type BioindicationRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waterBody?: boolean | WaterBodyDefaultArgs<ExtArgs>
  }

  export type $BioindicationRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BioindicationRecord"
    objects: {
      waterBody: Prisma.$WaterBodyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      waterBodyId: string
      recordDate: Date
      ph: number | null
      turbidity: number | null
      dissolvedGases: string | null
      biogenicCompounds: string | null
      permanganateOxid: number | null
      mineralization: number | null
      salinity: number | null
      hardness: number | null
      calcium: number | null
      magnesium: number | null
      chlorides: number | null
      sulfates: number | null
      hydrocarbonates: number | null
      potassiumSodium: number | null
      overgrowthPercent: number | null
      overgrowthDegree: string | null
      phytoplanktonDev: string | null
      zooplanktonTaxa: string | null
      zooplanktonGroups: string | null
      zoobenthosTaxa: string | null
      zoobenthosGroups: string | null
      trophicStatus: string | null
    }, ExtArgs["result"]["bioindicationRecord"]>
    composites: {}
  }

  type BioindicationRecordGetPayload<S extends boolean | null | undefined | BioindicationRecordDefaultArgs> = $Result.GetResult<Prisma.$BioindicationRecordPayload, S>

  type BioindicationRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BioindicationRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BioindicationRecordCountAggregateInputType | true
    }

  export interface BioindicationRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BioindicationRecord'], meta: { name: 'BioindicationRecord' } }
    /**
     * Find zero or one BioindicationRecord that matches the filter.
     * @param {BioindicationRecordFindUniqueArgs} args - Arguments to find a BioindicationRecord
     * @example
     * // Get one BioindicationRecord
     * const bioindicationRecord = await prisma.bioindicationRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BioindicationRecordFindUniqueArgs>(args: SelectSubset<T, BioindicationRecordFindUniqueArgs<ExtArgs>>): Prisma__BioindicationRecordClient<$Result.GetResult<Prisma.$BioindicationRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BioindicationRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BioindicationRecordFindUniqueOrThrowArgs} args - Arguments to find a BioindicationRecord
     * @example
     * // Get one BioindicationRecord
     * const bioindicationRecord = await prisma.bioindicationRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BioindicationRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, BioindicationRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BioindicationRecordClient<$Result.GetResult<Prisma.$BioindicationRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BioindicationRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BioindicationRecordFindFirstArgs} args - Arguments to find a BioindicationRecord
     * @example
     * // Get one BioindicationRecord
     * const bioindicationRecord = await prisma.bioindicationRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BioindicationRecordFindFirstArgs>(args?: SelectSubset<T, BioindicationRecordFindFirstArgs<ExtArgs>>): Prisma__BioindicationRecordClient<$Result.GetResult<Prisma.$BioindicationRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BioindicationRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BioindicationRecordFindFirstOrThrowArgs} args - Arguments to find a BioindicationRecord
     * @example
     * // Get one BioindicationRecord
     * const bioindicationRecord = await prisma.bioindicationRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BioindicationRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, BioindicationRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__BioindicationRecordClient<$Result.GetResult<Prisma.$BioindicationRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BioindicationRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BioindicationRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BioindicationRecords
     * const bioindicationRecords = await prisma.bioindicationRecord.findMany()
     * 
     * // Get first 10 BioindicationRecords
     * const bioindicationRecords = await prisma.bioindicationRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bioindicationRecordWithIdOnly = await prisma.bioindicationRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BioindicationRecordFindManyArgs>(args?: SelectSubset<T, BioindicationRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BioindicationRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BioindicationRecord.
     * @param {BioindicationRecordCreateArgs} args - Arguments to create a BioindicationRecord.
     * @example
     * // Create one BioindicationRecord
     * const BioindicationRecord = await prisma.bioindicationRecord.create({
     *   data: {
     *     // ... data to create a BioindicationRecord
     *   }
     * })
     * 
     */
    create<T extends BioindicationRecordCreateArgs>(args: SelectSubset<T, BioindicationRecordCreateArgs<ExtArgs>>): Prisma__BioindicationRecordClient<$Result.GetResult<Prisma.$BioindicationRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BioindicationRecords.
     * @param {BioindicationRecordCreateManyArgs} args - Arguments to create many BioindicationRecords.
     * @example
     * // Create many BioindicationRecords
     * const bioindicationRecord = await prisma.bioindicationRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BioindicationRecordCreateManyArgs>(args?: SelectSubset<T, BioindicationRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BioindicationRecords and returns the data saved in the database.
     * @param {BioindicationRecordCreateManyAndReturnArgs} args - Arguments to create many BioindicationRecords.
     * @example
     * // Create many BioindicationRecords
     * const bioindicationRecord = await prisma.bioindicationRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BioindicationRecords and only return the `id`
     * const bioindicationRecordWithIdOnly = await prisma.bioindicationRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BioindicationRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, BioindicationRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BioindicationRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BioindicationRecord.
     * @param {BioindicationRecordDeleteArgs} args - Arguments to delete one BioindicationRecord.
     * @example
     * // Delete one BioindicationRecord
     * const BioindicationRecord = await prisma.bioindicationRecord.delete({
     *   where: {
     *     // ... filter to delete one BioindicationRecord
     *   }
     * })
     * 
     */
    delete<T extends BioindicationRecordDeleteArgs>(args: SelectSubset<T, BioindicationRecordDeleteArgs<ExtArgs>>): Prisma__BioindicationRecordClient<$Result.GetResult<Prisma.$BioindicationRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BioindicationRecord.
     * @param {BioindicationRecordUpdateArgs} args - Arguments to update one BioindicationRecord.
     * @example
     * // Update one BioindicationRecord
     * const bioindicationRecord = await prisma.bioindicationRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BioindicationRecordUpdateArgs>(args: SelectSubset<T, BioindicationRecordUpdateArgs<ExtArgs>>): Prisma__BioindicationRecordClient<$Result.GetResult<Prisma.$BioindicationRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BioindicationRecords.
     * @param {BioindicationRecordDeleteManyArgs} args - Arguments to filter BioindicationRecords to delete.
     * @example
     * // Delete a few BioindicationRecords
     * const { count } = await prisma.bioindicationRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BioindicationRecordDeleteManyArgs>(args?: SelectSubset<T, BioindicationRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BioindicationRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BioindicationRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BioindicationRecords
     * const bioindicationRecord = await prisma.bioindicationRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BioindicationRecordUpdateManyArgs>(args: SelectSubset<T, BioindicationRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BioindicationRecords and returns the data updated in the database.
     * @param {BioindicationRecordUpdateManyAndReturnArgs} args - Arguments to update many BioindicationRecords.
     * @example
     * // Update many BioindicationRecords
     * const bioindicationRecord = await prisma.bioindicationRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BioindicationRecords and only return the `id`
     * const bioindicationRecordWithIdOnly = await prisma.bioindicationRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends BioindicationRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, BioindicationRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BioindicationRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BioindicationRecord.
     * @param {BioindicationRecordUpsertArgs} args - Arguments to update or create a BioindicationRecord.
     * @example
     * // Update or create a BioindicationRecord
     * const bioindicationRecord = await prisma.bioindicationRecord.upsert({
     *   create: {
     *     // ... data to create a BioindicationRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BioindicationRecord we want to update
     *   }
     * })
     */
    upsert<T extends BioindicationRecordUpsertArgs>(args: SelectSubset<T, BioindicationRecordUpsertArgs<ExtArgs>>): Prisma__BioindicationRecordClient<$Result.GetResult<Prisma.$BioindicationRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BioindicationRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BioindicationRecordCountArgs} args - Arguments to filter BioindicationRecords to count.
     * @example
     * // Count the number of BioindicationRecords
     * const count = await prisma.bioindicationRecord.count({
     *   where: {
     *     // ... the filter for the BioindicationRecords we want to count
     *   }
     * })
    **/
    count<T extends BioindicationRecordCountArgs>(
      args?: Subset<T, BioindicationRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BioindicationRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BioindicationRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BioindicationRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BioindicationRecordAggregateArgs>(args: Subset<T, BioindicationRecordAggregateArgs>): Prisma.PrismaPromise<GetBioindicationRecordAggregateType<T>>

    /**
     * Group by BioindicationRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BioindicationRecordGroupByArgs} args - Group by arguments.
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
      T extends BioindicationRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BioindicationRecordGroupByArgs['orderBy'] }
        : { orderBy?: BioindicationRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BioindicationRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBioindicationRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BioindicationRecord model
   */
  readonly fields: BioindicationRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BioindicationRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BioindicationRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    waterBody<T extends WaterBodyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WaterBodyDefaultArgs<ExtArgs>>): Prisma__WaterBodyClient<$Result.GetResult<Prisma.$WaterBodyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BioindicationRecord model
   */
  interface BioindicationRecordFieldRefs {
    readonly id: FieldRef<"BioindicationRecord", 'String'>
    readonly waterBodyId: FieldRef<"BioindicationRecord", 'String'>
    readonly recordDate: FieldRef<"BioindicationRecord", 'DateTime'>
    readonly ph: FieldRef<"BioindicationRecord", 'Float'>
    readonly turbidity: FieldRef<"BioindicationRecord", 'Float'>
    readonly dissolvedGases: FieldRef<"BioindicationRecord", 'String'>
    readonly biogenicCompounds: FieldRef<"BioindicationRecord", 'String'>
    readonly permanganateOxid: FieldRef<"BioindicationRecord", 'Float'>
    readonly mineralization: FieldRef<"BioindicationRecord", 'Float'>
    readonly salinity: FieldRef<"BioindicationRecord", 'Float'>
    readonly hardness: FieldRef<"BioindicationRecord", 'Float'>
    readonly calcium: FieldRef<"BioindicationRecord", 'Float'>
    readonly magnesium: FieldRef<"BioindicationRecord", 'Float'>
    readonly chlorides: FieldRef<"BioindicationRecord", 'Float'>
    readonly sulfates: FieldRef<"BioindicationRecord", 'Float'>
    readonly hydrocarbonates: FieldRef<"BioindicationRecord", 'Float'>
    readonly potassiumSodium: FieldRef<"BioindicationRecord", 'Float'>
    readonly overgrowthPercent: FieldRef<"BioindicationRecord", 'Float'>
    readonly overgrowthDegree: FieldRef<"BioindicationRecord", 'String'>
    readonly phytoplanktonDev: FieldRef<"BioindicationRecord", 'String'>
    readonly zooplanktonTaxa: FieldRef<"BioindicationRecord", 'String'>
    readonly zooplanktonGroups: FieldRef<"BioindicationRecord", 'String'>
    readonly zoobenthosTaxa: FieldRef<"BioindicationRecord", 'String'>
    readonly zoobenthosGroups: FieldRef<"BioindicationRecord", 'String'>
    readonly trophicStatus: FieldRef<"BioindicationRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BioindicationRecord findUnique
   */
  export type BioindicationRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioindicationRecord
     */
    select?: BioindicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioindicationRecord
     */
    omit?: BioindicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioindicationRecordInclude<ExtArgs> | null
    /**
     * Filter, which BioindicationRecord to fetch.
     */
    where: BioindicationRecordWhereUniqueInput
  }

  /**
   * BioindicationRecord findUniqueOrThrow
   */
  export type BioindicationRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioindicationRecord
     */
    select?: BioindicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioindicationRecord
     */
    omit?: BioindicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioindicationRecordInclude<ExtArgs> | null
    /**
     * Filter, which BioindicationRecord to fetch.
     */
    where: BioindicationRecordWhereUniqueInput
  }

  /**
   * BioindicationRecord findFirst
   */
  export type BioindicationRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioindicationRecord
     */
    select?: BioindicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioindicationRecord
     */
    omit?: BioindicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioindicationRecordInclude<ExtArgs> | null
    /**
     * Filter, which BioindicationRecord to fetch.
     */
    where?: BioindicationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BioindicationRecords to fetch.
     */
    orderBy?: BioindicationRecordOrderByWithRelationInput | BioindicationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BioindicationRecords.
     */
    cursor?: BioindicationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BioindicationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BioindicationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BioindicationRecords.
     */
    distinct?: BioindicationRecordScalarFieldEnum | BioindicationRecordScalarFieldEnum[]
  }

  /**
   * BioindicationRecord findFirstOrThrow
   */
  export type BioindicationRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioindicationRecord
     */
    select?: BioindicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioindicationRecord
     */
    omit?: BioindicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioindicationRecordInclude<ExtArgs> | null
    /**
     * Filter, which BioindicationRecord to fetch.
     */
    where?: BioindicationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BioindicationRecords to fetch.
     */
    orderBy?: BioindicationRecordOrderByWithRelationInput | BioindicationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BioindicationRecords.
     */
    cursor?: BioindicationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BioindicationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BioindicationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BioindicationRecords.
     */
    distinct?: BioindicationRecordScalarFieldEnum | BioindicationRecordScalarFieldEnum[]
  }

  /**
   * BioindicationRecord findMany
   */
  export type BioindicationRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioindicationRecord
     */
    select?: BioindicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioindicationRecord
     */
    omit?: BioindicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioindicationRecordInclude<ExtArgs> | null
    /**
     * Filter, which BioindicationRecords to fetch.
     */
    where?: BioindicationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BioindicationRecords to fetch.
     */
    orderBy?: BioindicationRecordOrderByWithRelationInput | BioindicationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BioindicationRecords.
     */
    cursor?: BioindicationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BioindicationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BioindicationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BioindicationRecords.
     */
    distinct?: BioindicationRecordScalarFieldEnum | BioindicationRecordScalarFieldEnum[]
  }

  /**
   * BioindicationRecord create
   */
  export type BioindicationRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioindicationRecord
     */
    select?: BioindicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioindicationRecord
     */
    omit?: BioindicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioindicationRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a BioindicationRecord.
     */
    data: XOR<BioindicationRecordCreateInput, BioindicationRecordUncheckedCreateInput>
  }

  /**
   * BioindicationRecord createMany
   */
  export type BioindicationRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BioindicationRecords.
     */
    data: BioindicationRecordCreateManyInput | BioindicationRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BioindicationRecord createManyAndReturn
   */
  export type BioindicationRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioindicationRecord
     */
    select?: BioindicationRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BioindicationRecord
     */
    omit?: BioindicationRecordOmit<ExtArgs> | null
    /**
     * The data used to create many BioindicationRecords.
     */
    data: BioindicationRecordCreateManyInput | BioindicationRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioindicationRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BioindicationRecord update
   */
  export type BioindicationRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioindicationRecord
     */
    select?: BioindicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioindicationRecord
     */
    omit?: BioindicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioindicationRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a BioindicationRecord.
     */
    data: XOR<BioindicationRecordUpdateInput, BioindicationRecordUncheckedUpdateInput>
    /**
     * Choose, which BioindicationRecord to update.
     */
    where: BioindicationRecordWhereUniqueInput
  }

  /**
   * BioindicationRecord updateMany
   */
  export type BioindicationRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BioindicationRecords.
     */
    data: XOR<BioindicationRecordUpdateManyMutationInput, BioindicationRecordUncheckedUpdateManyInput>
    /**
     * Filter which BioindicationRecords to update
     */
    where?: BioindicationRecordWhereInput
    /**
     * Limit how many BioindicationRecords to update.
     */
    limit?: number
  }

  /**
   * BioindicationRecord updateManyAndReturn
   */
  export type BioindicationRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioindicationRecord
     */
    select?: BioindicationRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BioindicationRecord
     */
    omit?: BioindicationRecordOmit<ExtArgs> | null
    /**
     * The data used to update BioindicationRecords.
     */
    data: XOR<BioindicationRecordUpdateManyMutationInput, BioindicationRecordUncheckedUpdateManyInput>
    /**
     * Filter which BioindicationRecords to update
     */
    where?: BioindicationRecordWhereInput
    /**
     * Limit how many BioindicationRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioindicationRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BioindicationRecord upsert
   */
  export type BioindicationRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioindicationRecord
     */
    select?: BioindicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioindicationRecord
     */
    omit?: BioindicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioindicationRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the BioindicationRecord to update in case it exists.
     */
    where: BioindicationRecordWhereUniqueInput
    /**
     * In case the BioindicationRecord found by the `where` argument doesn't exist, create a new BioindicationRecord with this data.
     */
    create: XOR<BioindicationRecordCreateInput, BioindicationRecordUncheckedCreateInput>
    /**
     * In case the BioindicationRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BioindicationRecordUpdateInput, BioindicationRecordUncheckedUpdateInput>
  }

  /**
   * BioindicationRecord delete
   */
  export type BioindicationRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioindicationRecord
     */
    select?: BioindicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioindicationRecord
     */
    omit?: BioindicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioindicationRecordInclude<ExtArgs> | null
    /**
     * Filter which BioindicationRecord to delete.
     */
    where: BioindicationRecordWhereUniqueInput
  }

  /**
   * BioindicationRecord deleteMany
   */
  export type BioindicationRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BioindicationRecords to delete
     */
    where?: BioindicationRecordWhereInput
    /**
     * Limit how many BioindicationRecords to delete.
     */
    limit?: number
  }

  /**
   * BioindicationRecord without action
   */
  export type BioindicationRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BioindicationRecord
     */
    select?: BioindicationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BioindicationRecord
     */
    omit?: BioindicationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BioindicationRecordInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    login: 'login',
    email: 'email',
    password: 'password',
    avatarUrl: 'avatarUrl',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WaterBodyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    district: 'district',
    locationDesc: 'locationDesc',
    latitude: 'latitude',
    longitude: 'longitude',
    boundaries: 'boundaries',
    cadastralNumber: 'cadastralNumber'
  };

  export type WaterBodyScalarFieldEnum = (typeof WaterBodyScalarFieldEnum)[keyof typeof WaterBodyScalarFieldEnum]


  export const WaterBodyPassportScalarFieldEnum: {
    id: 'id',
    waterBodyId: 'waterBodyId',
    area: 'area',
    overgrowthArea: 'overgrowthArea',
    altitude: 'altitude',
    length: 'length',
    maxWidth: 'maxWidth',
    coastlineLength: 'coastlineLength',
    coastlineDev: 'coastlineDev',
    catchmentArea: 'catchmentArea',
    currentDepth: 'currentDepth',
    maxDepth: 'maxDepth',
    avgDepth: 'avgDepth',
    volume: 'volume',
    fisheryType: 'fisheryType',
    fishProductivity: 'fishProductivity',
    economicDesc: 'economicDesc',
    waterProtectionZone: 'waterProtectionZone',
    waterProtectionStrip: 'waterProtectionStrip',
    ichthyofauna: 'ichthyofauna',
    mammals: 'mammals',
    invertebrates: 'invertebrates'
  };

  export type WaterBodyPassportScalarFieldEnum = (typeof WaterBodyPassportScalarFieldEnum)[keyof typeof WaterBodyPassportScalarFieldEnum]


  export const BioindicationRecordScalarFieldEnum: {
    id: 'id',
    waterBodyId: 'waterBodyId',
    recordDate: 'recordDate',
    ph: 'ph',
    turbidity: 'turbidity',
    dissolvedGases: 'dissolvedGases',
    biogenicCompounds: 'biogenicCompounds',
    permanganateOxid: 'permanganateOxid',
    mineralization: 'mineralization',
    salinity: 'salinity',
    hardness: 'hardness',
    calcium: 'calcium',
    magnesium: 'magnesium',
    chlorides: 'chlorides',
    sulfates: 'sulfates',
    hydrocarbonates: 'hydrocarbonates',
    potassiumSodium: 'potassiumSodium',
    overgrowthPercent: 'overgrowthPercent',
    overgrowthDegree: 'overgrowthDegree',
    phytoplanktonDev: 'phytoplanktonDev',
    zooplanktonTaxa: 'zooplanktonTaxa',
    zooplanktonGroups: 'zooplanktonGroups',
    zoobenthosTaxa: 'zoobenthosTaxa',
    zoobenthosGroups: 'zoobenthosGroups',
    trophicStatus: 'trophicStatus'
  };

  export type BioindicationRecordScalarFieldEnum = (typeof BioindicationRecordScalarFieldEnum)[keyof typeof BioindicationRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    login?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    login?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    role?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    login?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }, "id" | "login" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    login?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    login?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type WaterBodyWhereInput = {
    AND?: WaterBodyWhereInput | WaterBodyWhereInput[]
    OR?: WaterBodyWhereInput[]
    NOT?: WaterBodyWhereInput | WaterBodyWhereInput[]
    id?: StringFilter<"WaterBody"> | string
    name?: StringFilter<"WaterBody"> | string
    district?: StringNullableFilter<"WaterBody"> | string | null
    locationDesc?: StringNullableFilter<"WaterBody"> | string | null
    latitude?: FloatNullableFilter<"WaterBody"> | number | null
    longitude?: FloatNullableFilter<"WaterBody"> | number | null
    boundaries?: JsonNullableFilter<"WaterBody">
    cadastralNumber?: StringNullableFilter<"WaterBody"> | string | null
    passport?: XOR<WaterBodyPassportNullableScalarRelationFilter, WaterBodyPassportWhereInput> | null
    measurements?: BioindicationRecordListRelationFilter
  }

  export type WaterBodyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    district?: SortOrderInput | SortOrder
    locationDesc?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    boundaries?: SortOrderInput | SortOrder
    cadastralNumber?: SortOrderInput | SortOrder
    passport?: WaterBodyPassportOrderByWithRelationInput
    measurements?: BioindicationRecordOrderByRelationAggregateInput
  }

  export type WaterBodyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WaterBodyWhereInput | WaterBodyWhereInput[]
    OR?: WaterBodyWhereInput[]
    NOT?: WaterBodyWhereInput | WaterBodyWhereInput[]
    name?: StringFilter<"WaterBody"> | string
    district?: StringNullableFilter<"WaterBody"> | string | null
    locationDesc?: StringNullableFilter<"WaterBody"> | string | null
    latitude?: FloatNullableFilter<"WaterBody"> | number | null
    longitude?: FloatNullableFilter<"WaterBody"> | number | null
    boundaries?: JsonNullableFilter<"WaterBody">
    cadastralNumber?: StringNullableFilter<"WaterBody"> | string | null
    passport?: XOR<WaterBodyPassportNullableScalarRelationFilter, WaterBodyPassportWhereInput> | null
    measurements?: BioindicationRecordListRelationFilter
  }, "id">

  export type WaterBodyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    district?: SortOrderInput | SortOrder
    locationDesc?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    boundaries?: SortOrderInput | SortOrder
    cadastralNumber?: SortOrderInput | SortOrder
    _count?: WaterBodyCountOrderByAggregateInput
    _avg?: WaterBodyAvgOrderByAggregateInput
    _max?: WaterBodyMaxOrderByAggregateInput
    _min?: WaterBodyMinOrderByAggregateInput
    _sum?: WaterBodySumOrderByAggregateInput
  }

  export type WaterBodyScalarWhereWithAggregatesInput = {
    AND?: WaterBodyScalarWhereWithAggregatesInput | WaterBodyScalarWhereWithAggregatesInput[]
    OR?: WaterBodyScalarWhereWithAggregatesInput[]
    NOT?: WaterBodyScalarWhereWithAggregatesInput | WaterBodyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WaterBody"> | string
    name?: StringWithAggregatesFilter<"WaterBody"> | string
    district?: StringNullableWithAggregatesFilter<"WaterBody"> | string | null
    locationDesc?: StringNullableWithAggregatesFilter<"WaterBody"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"WaterBody"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"WaterBody"> | number | null
    boundaries?: JsonNullableWithAggregatesFilter<"WaterBody">
    cadastralNumber?: StringNullableWithAggregatesFilter<"WaterBody"> | string | null
  }

  export type WaterBodyPassportWhereInput = {
    AND?: WaterBodyPassportWhereInput | WaterBodyPassportWhereInput[]
    OR?: WaterBodyPassportWhereInput[]
    NOT?: WaterBodyPassportWhereInput | WaterBodyPassportWhereInput[]
    id?: StringFilter<"WaterBodyPassport"> | string
    waterBodyId?: StringFilter<"WaterBodyPassport"> | string
    area?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    overgrowthArea?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    altitude?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    length?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    maxWidth?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    coastlineLength?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    coastlineDev?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    catchmentArea?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    currentDepth?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    maxDepth?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    avgDepth?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    volume?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    fisheryType?: StringNullableFilter<"WaterBodyPassport"> | string | null
    fishProductivity?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    economicDesc?: StringNullableFilter<"WaterBodyPassport"> | string | null
    waterProtectionZone?: StringNullableFilter<"WaterBodyPassport"> | string | null
    waterProtectionStrip?: StringNullableFilter<"WaterBodyPassport"> | string | null
    ichthyofauna?: StringNullableFilter<"WaterBodyPassport"> | string | null
    mammals?: StringNullableFilter<"WaterBodyPassport"> | string | null
    invertebrates?: StringNullableFilter<"WaterBodyPassport"> | string | null
    waterBody?: XOR<WaterBodyScalarRelationFilter, WaterBodyWhereInput>
  }

  export type WaterBodyPassportOrderByWithRelationInput = {
    id?: SortOrder
    waterBodyId?: SortOrder
    area?: SortOrderInput | SortOrder
    overgrowthArea?: SortOrderInput | SortOrder
    altitude?: SortOrderInput | SortOrder
    length?: SortOrderInput | SortOrder
    maxWidth?: SortOrderInput | SortOrder
    coastlineLength?: SortOrderInput | SortOrder
    coastlineDev?: SortOrderInput | SortOrder
    catchmentArea?: SortOrderInput | SortOrder
    currentDepth?: SortOrderInput | SortOrder
    maxDepth?: SortOrderInput | SortOrder
    avgDepth?: SortOrderInput | SortOrder
    volume?: SortOrderInput | SortOrder
    fisheryType?: SortOrderInput | SortOrder
    fishProductivity?: SortOrderInput | SortOrder
    economicDesc?: SortOrderInput | SortOrder
    waterProtectionZone?: SortOrderInput | SortOrder
    waterProtectionStrip?: SortOrderInput | SortOrder
    ichthyofauna?: SortOrderInput | SortOrder
    mammals?: SortOrderInput | SortOrder
    invertebrates?: SortOrderInput | SortOrder
    waterBody?: WaterBodyOrderByWithRelationInput
  }

  export type WaterBodyPassportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    waterBodyId?: string
    AND?: WaterBodyPassportWhereInput | WaterBodyPassportWhereInput[]
    OR?: WaterBodyPassportWhereInput[]
    NOT?: WaterBodyPassportWhereInput | WaterBodyPassportWhereInput[]
    area?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    overgrowthArea?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    altitude?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    length?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    maxWidth?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    coastlineLength?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    coastlineDev?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    catchmentArea?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    currentDepth?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    maxDepth?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    avgDepth?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    volume?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    fisheryType?: StringNullableFilter<"WaterBodyPassport"> | string | null
    fishProductivity?: FloatNullableFilter<"WaterBodyPassport"> | number | null
    economicDesc?: StringNullableFilter<"WaterBodyPassport"> | string | null
    waterProtectionZone?: StringNullableFilter<"WaterBodyPassport"> | string | null
    waterProtectionStrip?: StringNullableFilter<"WaterBodyPassport"> | string | null
    ichthyofauna?: StringNullableFilter<"WaterBodyPassport"> | string | null
    mammals?: StringNullableFilter<"WaterBodyPassport"> | string | null
    invertebrates?: StringNullableFilter<"WaterBodyPassport"> | string | null
    waterBody?: XOR<WaterBodyScalarRelationFilter, WaterBodyWhereInput>
  }, "id" | "waterBodyId">

  export type WaterBodyPassportOrderByWithAggregationInput = {
    id?: SortOrder
    waterBodyId?: SortOrder
    area?: SortOrderInput | SortOrder
    overgrowthArea?: SortOrderInput | SortOrder
    altitude?: SortOrderInput | SortOrder
    length?: SortOrderInput | SortOrder
    maxWidth?: SortOrderInput | SortOrder
    coastlineLength?: SortOrderInput | SortOrder
    coastlineDev?: SortOrderInput | SortOrder
    catchmentArea?: SortOrderInput | SortOrder
    currentDepth?: SortOrderInput | SortOrder
    maxDepth?: SortOrderInput | SortOrder
    avgDepth?: SortOrderInput | SortOrder
    volume?: SortOrderInput | SortOrder
    fisheryType?: SortOrderInput | SortOrder
    fishProductivity?: SortOrderInput | SortOrder
    economicDesc?: SortOrderInput | SortOrder
    waterProtectionZone?: SortOrderInput | SortOrder
    waterProtectionStrip?: SortOrderInput | SortOrder
    ichthyofauna?: SortOrderInput | SortOrder
    mammals?: SortOrderInput | SortOrder
    invertebrates?: SortOrderInput | SortOrder
    _count?: WaterBodyPassportCountOrderByAggregateInput
    _avg?: WaterBodyPassportAvgOrderByAggregateInput
    _max?: WaterBodyPassportMaxOrderByAggregateInput
    _min?: WaterBodyPassportMinOrderByAggregateInput
    _sum?: WaterBodyPassportSumOrderByAggregateInput
  }

  export type WaterBodyPassportScalarWhereWithAggregatesInput = {
    AND?: WaterBodyPassportScalarWhereWithAggregatesInput | WaterBodyPassportScalarWhereWithAggregatesInput[]
    OR?: WaterBodyPassportScalarWhereWithAggregatesInput[]
    NOT?: WaterBodyPassportScalarWhereWithAggregatesInput | WaterBodyPassportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WaterBodyPassport"> | string
    waterBodyId?: StringWithAggregatesFilter<"WaterBodyPassport"> | string
    area?: FloatNullableWithAggregatesFilter<"WaterBodyPassport"> | number | null
    overgrowthArea?: FloatNullableWithAggregatesFilter<"WaterBodyPassport"> | number | null
    altitude?: FloatNullableWithAggregatesFilter<"WaterBodyPassport"> | number | null
    length?: FloatNullableWithAggregatesFilter<"WaterBodyPassport"> | number | null
    maxWidth?: FloatNullableWithAggregatesFilter<"WaterBodyPassport"> | number | null
    coastlineLength?: FloatNullableWithAggregatesFilter<"WaterBodyPassport"> | number | null
    coastlineDev?: FloatNullableWithAggregatesFilter<"WaterBodyPassport"> | number | null
    catchmentArea?: FloatNullableWithAggregatesFilter<"WaterBodyPassport"> | number | null
    currentDepth?: FloatNullableWithAggregatesFilter<"WaterBodyPassport"> | number | null
    maxDepth?: FloatNullableWithAggregatesFilter<"WaterBodyPassport"> | number | null
    avgDepth?: FloatNullableWithAggregatesFilter<"WaterBodyPassport"> | number | null
    volume?: FloatNullableWithAggregatesFilter<"WaterBodyPassport"> | number | null
    fisheryType?: StringNullableWithAggregatesFilter<"WaterBodyPassport"> | string | null
    fishProductivity?: FloatNullableWithAggregatesFilter<"WaterBodyPassport"> | number | null
    economicDesc?: StringNullableWithAggregatesFilter<"WaterBodyPassport"> | string | null
    waterProtectionZone?: StringNullableWithAggregatesFilter<"WaterBodyPassport"> | string | null
    waterProtectionStrip?: StringNullableWithAggregatesFilter<"WaterBodyPassport"> | string | null
    ichthyofauna?: StringNullableWithAggregatesFilter<"WaterBodyPassport"> | string | null
    mammals?: StringNullableWithAggregatesFilter<"WaterBodyPassport"> | string | null
    invertebrates?: StringNullableWithAggregatesFilter<"WaterBodyPassport"> | string | null
  }

  export type BioindicationRecordWhereInput = {
    AND?: BioindicationRecordWhereInput | BioindicationRecordWhereInput[]
    OR?: BioindicationRecordWhereInput[]
    NOT?: BioindicationRecordWhereInput | BioindicationRecordWhereInput[]
    id?: StringFilter<"BioindicationRecord"> | string
    waterBodyId?: StringFilter<"BioindicationRecord"> | string
    recordDate?: DateTimeFilter<"BioindicationRecord"> | Date | string
    ph?: FloatNullableFilter<"BioindicationRecord"> | number | null
    turbidity?: FloatNullableFilter<"BioindicationRecord"> | number | null
    dissolvedGases?: StringNullableFilter<"BioindicationRecord"> | string | null
    biogenicCompounds?: StringNullableFilter<"BioindicationRecord"> | string | null
    permanganateOxid?: FloatNullableFilter<"BioindicationRecord"> | number | null
    mineralization?: FloatNullableFilter<"BioindicationRecord"> | number | null
    salinity?: FloatNullableFilter<"BioindicationRecord"> | number | null
    hardness?: FloatNullableFilter<"BioindicationRecord"> | number | null
    calcium?: FloatNullableFilter<"BioindicationRecord"> | number | null
    magnesium?: FloatNullableFilter<"BioindicationRecord"> | number | null
    chlorides?: FloatNullableFilter<"BioindicationRecord"> | number | null
    sulfates?: FloatNullableFilter<"BioindicationRecord"> | number | null
    hydrocarbonates?: FloatNullableFilter<"BioindicationRecord"> | number | null
    potassiumSodium?: FloatNullableFilter<"BioindicationRecord"> | number | null
    overgrowthPercent?: FloatNullableFilter<"BioindicationRecord"> | number | null
    overgrowthDegree?: StringNullableFilter<"BioindicationRecord"> | string | null
    phytoplanktonDev?: StringNullableFilter<"BioindicationRecord"> | string | null
    zooplanktonTaxa?: StringNullableFilter<"BioindicationRecord"> | string | null
    zooplanktonGroups?: StringNullableFilter<"BioindicationRecord"> | string | null
    zoobenthosTaxa?: StringNullableFilter<"BioindicationRecord"> | string | null
    zoobenthosGroups?: StringNullableFilter<"BioindicationRecord"> | string | null
    trophicStatus?: StringNullableFilter<"BioindicationRecord"> | string | null
    waterBody?: XOR<WaterBodyScalarRelationFilter, WaterBodyWhereInput>
  }

  export type BioindicationRecordOrderByWithRelationInput = {
    id?: SortOrder
    waterBodyId?: SortOrder
    recordDate?: SortOrder
    ph?: SortOrderInput | SortOrder
    turbidity?: SortOrderInput | SortOrder
    dissolvedGases?: SortOrderInput | SortOrder
    biogenicCompounds?: SortOrderInput | SortOrder
    permanganateOxid?: SortOrderInput | SortOrder
    mineralization?: SortOrderInput | SortOrder
    salinity?: SortOrderInput | SortOrder
    hardness?: SortOrderInput | SortOrder
    calcium?: SortOrderInput | SortOrder
    magnesium?: SortOrderInput | SortOrder
    chlorides?: SortOrderInput | SortOrder
    sulfates?: SortOrderInput | SortOrder
    hydrocarbonates?: SortOrderInput | SortOrder
    potassiumSodium?: SortOrderInput | SortOrder
    overgrowthPercent?: SortOrderInput | SortOrder
    overgrowthDegree?: SortOrderInput | SortOrder
    phytoplanktonDev?: SortOrderInput | SortOrder
    zooplanktonTaxa?: SortOrderInput | SortOrder
    zooplanktonGroups?: SortOrderInput | SortOrder
    zoobenthosTaxa?: SortOrderInput | SortOrder
    zoobenthosGroups?: SortOrderInput | SortOrder
    trophicStatus?: SortOrderInput | SortOrder
    waterBody?: WaterBodyOrderByWithRelationInput
  }

  export type BioindicationRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BioindicationRecordWhereInput | BioindicationRecordWhereInput[]
    OR?: BioindicationRecordWhereInput[]
    NOT?: BioindicationRecordWhereInput | BioindicationRecordWhereInput[]
    waterBodyId?: StringFilter<"BioindicationRecord"> | string
    recordDate?: DateTimeFilter<"BioindicationRecord"> | Date | string
    ph?: FloatNullableFilter<"BioindicationRecord"> | number | null
    turbidity?: FloatNullableFilter<"BioindicationRecord"> | number | null
    dissolvedGases?: StringNullableFilter<"BioindicationRecord"> | string | null
    biogenicCompounds?: StringNullableFilter<"BioindicationRecord"> | string | null
    permanganateOxid?: FloatNullableFilter<"BioindicationRecord"> | number | null
    mineralization?: FloatNullableFilter<"BioindicationRecord"> | number | null
    salinity?: FloatNullableFilter<"BioindicationRecord"> | number | null
    hardness?: FloatNullableFilter<"BioindicationRecord"> | number | null
    calcium?: FloatNullableFilter<"BioindicationRecord"> | number | null
    magnesium?: FloatNullableFilter<"BioindicationRecord"> | number | null
    chlorides?: FloatNullableFilter<"BioindicationRecord"> | number | null
    sulfates?: FloatNullableFilter<"BioindicationRecord"> | number | null
    hydrocarbonates?: FloatNullableFilter<"BioindicationRecord"> | number | null
    potassiumSodium?: FloatNullableFilter<"BioindicationRecord"> | number | null
    overgrowthPercent?: FloatNullableFilter<"BioindicationRecord"> | number | null
    overgrowthDegree?: StringNullableFilter<"BioindicationRecord"> | string | null
    phytoplanktonDev?: StringNullableFilter<"BioindicationRecord"> | string | null
    zooplanktonTaxa?: StringNullableFilter<"BioindicationRecord"> | string | null
    zooplanktonGroups?: StringNullableFilter<"BioindicationRecord"> | string | null
    zoobenthosTaxa?: StringNullableFilter<"BioindicationRecord"> | string | null
    zoobenthosGroups?: StringNullableFilter<"BioindicationRecord"> | string | null
    trophicStatus?: StringNullableFilter<"BioindicationRecord"> | string | null
    waterBody?: XOR<WaterBodyScalarRelationFilter, WaterBodyWhereInput>
  }, "id">

  export type BioindicationRecordOrderByWithAggregationInput = {
    id?: SortOrder
    waterBodyId?: SortOrder
    recordDate?: SortOrder
    ph?: SortOrderInput | SortOrder
    turbidity?: SortOrderInput | SortOrder
    dissolvedGases?: SortOrderInput | SortOrder
    biogenicCompounds?: SortOrderInput | SortOrder
    permanganateOxid?: SortOrderInput | SortOrder
    mineralization?: SortOrderInput | SortOrder
    salinity?: SortOrderInput | SortOrder
    hardness?: SortOrderInput | SortOrder
    calcium?: SortOrderInput | SortOrder
    magnesium?: SortOrderInput | SortOrder
    chlorides?: SortOrderInput | SortOrder
    sulfates?: SortOrderInput | SortOrder
    hydrocarbonates?: SortOrderInput | SortOrder
    potassiumSodium?: SortOrderInput | SortOrder
    overgrowthPercent?: SortOrderInput | SortOrder
    overgrowthDegree?: SortOrderInput | SortOrder
    phytoplanktonDev?: SortOrderInput | SortOrder
    zooplanktonTaxa?: SortOrderInput | SortOrder
    zooplanktonGroups?: SortOrderInput | SortOrder
    zoobenthosTaxa?: SortOrderInput | SortOrder
    zoobenthosGroups?: SortOrderInput | SortOrder
    trophicStatus?: SortOrderInput | SortOrder
    _count?: BioindicationRecordCountOrderByAggregateInput
    _avg?: BioindicationRecordAvgOrderByAggregateInput
    _max?: BioindicationRecordMaxOrderByAggregateInput
    _min?: BioindicationRecordMinOrderByAggregateInput
    _sum?: BioindicationRecordSumOrderByAggregateInput
  }

  export type BioindicationRecordScalarWhereWithAggregatesInput = {
    AND?: BioindicationRecordScalarWhereWithAggregatesInput | BioindicationRecordScalarWhereWithAggregatesInput[]
    OR?: BioindicationRecordScalarWhereWithAggregatesInput[]
    NOT?: BioindicationRecordScalarWhereWithAggregatesInput | BioindicationRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BioindicationRecord"> | string
    waterBodyId?: StringWithAggregatesFilter<"BioindicationRecord"> | string
    recordDate?: DateTimeWithAggregatesFilter<"BioindicationRecord"> | Date | string
    ph?: FloatNullableWithAggregatesFilter<"BioindicationRecord"> | number | null
    turbidity?: FloatNullableWithAggregatesFilter<"BioindicationRecord"> | number | null
    dissolvedGases?: StringNullableWithAggregatesFilter<"BioindicationRecord"> | string | null
    biogenicCompounds?: StringNullableWithAggregatesFilter<"BioindicationRecord"> | string | null
    permanganateOxid?: FloatNullableWithAggregatesFilter<"BioindicationRecord"> | number | null
    mineralization?: FloatNullableWithAggregatesFilter<"BioindicationRecord"> | number | null
    salinity?: FloatNullableWithAggregatesFilter<"BioindicationRecord"> | number | null
    hardness?: FloatNullableWithAggregatesFilter<"BioindicationRecord"> | number | null
    calcium?: FloatNullableWithAggregatesFilter<"BioindicationRecord"> | number | null
    magnesium?: FloatNullableWithAggregatesFilter<"BioindicationRecord"> | number | null
    chlorides?: FloatNullableWithAggregatesFilter<"BioindicationRecord"> | number | null
    sulfates?: FloatNullableWithAggregatesFilter<"BioindicationRecord"> | number | null
    hydrocarbonates?: FloatNullableWithAggregatesFilter<"BioindicationRecord"> | number | null
    potassiumSodium?: FloatNullableWithAggregatesFilter<"BioindicationRecord"> | number | null
    overgrowthPercent?: FloatNullableWithAggregatesFilter<"BioindicationRecord"> | number | null
    overgrowthDegree?: StringNullableWithAggregatesFilter<"BioindicationRecord"> | string | null
    phytoplanktonDev?: StringNullableWithAggregatesFilter<"BioindicationRecord"> | string | null
    zooplanktonTaxa?: StringNullableWithAggregatesFilter<"BioindicationRecord"> | string | null
    zooplanktonGroups?: StringNullableWithAggregatesFilter<"BioindicationRecord"> | string | null
    zoobenthosTaxa?: StringNullableWithAggregatesFilter<"BioindicationRecord"> | string | null
    zoobenthosGroups?: StringNullableWithAggregatesFilter<"BioindicationRecord"> | string | null
    trophicStatus?: StringNullableWithAggregatesFilter<"BioindicationRecord"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    login: string
    email: string
    password: string
    avatarUrl?: string | null
    role?: $Enums.Role
  }

  export type UserUncheckedCreateInput = {
    id?: string
    login: string
    email: string
    password: string
    avatarUrl?: string | null
    role?: $Enums.Role
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserCreateManyInput = {
    id?: string
    login: string
    email: string
    password: string
    avatarUrl?: string | null
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type WaterBodyCreateInput = {
    id?: string
    name: string
    district?: string | null
    locationDesc?: string | null
    latitude?: number | null
    longitude?: number | null
    boundaries?: NullableJsonNullValueInput | InputJsonValue
    cadastralNumber?: string | null
    passport?: WaterBodyPassportCreateNestedOneWithoutWaterBodyInput
    measurements?: BioindicationRecordCreateNestedManyWithoutWaterBodyInput
  }

  export type WaterBodyUncheckedCreateInput = {
    id?: string
    name: string
    district?: string | null
    locationDesc?: string | null
    latitude?: number | null
    longitude?: number | null
    boundaries?: NullableJsonNullValueInput | InputJsonValue
    cadastralNumber?: string | null
    passport?: WaterBodyPassportUncheckedCreateNestedOneWithoutWaterBodyInput
    measurements?: BioindicationRecordUncheckedCreateNestedManyWithoutWaterBodyInput
  }

  export type WaterBodyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    locationDesc?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    boundaries?: NullableJsonNullValueInput | InputJsonValue
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: WaterBodyPassportUpdateOneWithoutWaterBodyNestedInput
    measurements?: BioindicationRecordUpdateManyWithoutWaterBodyNestedInput
  }

  export type WaterBodyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    locationDesc?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    boundaries?: NullableJsonNullValueInput | InputJsonValue
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: WaterBodyPassportUncheckedUpdateOneWithoutWaterBodyNestedInput
    measurements?: BioindicationRecordUncheckedUpdateManyWithoutWaterBodyNestedInput
  }

  export type WaterBodyCreateManyInput = {
    id?: string
    name: string
    district?: string | null
    locationDesc?: string | null
    latitude?: number | null
    longitude?: number | null
    boundaries?: NullableJsonNullValueInput | InputJsonValue
    cadastralNumber?: string | null
  }

  export type WaterBodyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    locationDesc?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    boundaries?: NullableJsonNullValueInput | InputJsonValue
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WaterBodyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    locationDesc?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    boundaries?: NullableJsonNullValueInput | InputJsonValue
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WaterBodyPassportCreateInput = {
    id?: string
    area?: number | null
    overgrowthArea?: number | null
    altitude?: number | null
    length?: number | null
    maxWidth?: number | null
    coastlineLength?: number | null
    coastlineDev?: number | null
    catchmentArea?: number | null
    currentDepth?: number | null
    maxDepth?: number | null
    avgDepth?: number | null
    volume?: number | null
    fisheryType?: string | null
    fishProductivity?: number | null
    economicDesc?: string | null
    waterProtectionZone?: string | null
    waterProtectionStrip?: string | null
    ichthyofauna?: string | null
    mammals?: string | null
    invertebrates?: string | null
    waterBody: WaterBodyCreateNestedOneWithoutPassportInput
  }

  export type WaterBodyPassportUncheckedCreateInput = {
    id?: string
    waterBodyId: string
    area?: number | null
    overgrowthArea?: number | null
    altitude?: number | null
    length?: number | null
    maxWidth?: number | null
    coastlineLength?: number | null
    coastlineDev?: number | null
    catchmentArea?: number | null
    currentDepth?: number | null
    maxDepth?: number | null
    avgDepth?: number | null
    volume?: number | null
    fisheryType?: string | null
    fishProductivity?: number | null
    economicDesc?: string | null
    waterProtectionZone?: string | null
    waterProtectionStrip?: string | null
    ichthyofauna?: string | null
    mammals?: string | null
    invertebrates?: string | null
  }

  export type WaterBodyPassportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthArea?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    maxWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    coastlineLength?: NullableFloatFieldUpdateOperationsInput | number | null
    coastlineDev?: NullableFloatFieldUpdateOperationsInput | number | null
    catchmentArea?: NullableFloatFieldUpdateOperationsInput | number | null
    currentDepth?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDepth?: NullableFloatFieldUpdateOperationsInput | number | null
    avgDepth?: NullableFloatFieldUpdateOperationsInput | number | null
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    fisheryType?: NullableStringFieldUpdateOperationsInput | string | null
    fishProductivity?: NullableFloatFieldUpdateOperationsInput | number | null
    economicDesc?: NullableStringFieldUpdateOperationsInput | string | null
    waterProtectionZone?: NullableStringFieldUpdateOperationsInput | string | null
    waterProtectionStrip?: NullableStringFieldUpdateOperationsInput | string | null
    ichthyofauna?: NullableStringFieldUpdateOperationsInput | string | null
    mammals?: NullableStringFieldUpdateOperationsInput | string | null
    invertebrates?: NullableStringFieldUpdateOperationsInput | string | null
    waterBody?: WaterBodyUpdateOneRequiredWithoutPassportNestedInput
  }

  export type WaterBodyPassportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    waterBodyId?: StringFieldUpdateOperationsInput | string
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthArea?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    maxWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    coastlineLength?: NullableFloatFieldUpdateOperationsInput | number | null
    coastlineDev?: NullableFloatFieldUpdateOperationsInput | number | null
    catchmentArea?: NullableFloatFieldUpdateOperationsInput | number | null
    currentDepth?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDepth?: NullableFloatFieldUpdateOperationsInput | number | null
    avgDepth?: NullableFloatFieldUpdateOperationsInput | number | null
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    fisheryType?: NullableStringFieldUpdateOperationsInput | string | null
    fishProductivity?: NullableFloatFieldUpdateOperationsInput | number | null
    economicDesc?: NullableStringFieldUpdateOperationsInput | string | null
    waterProtectionZone?: NullableStringFieldUpdateOperationsInput | string | null
    waterProtectionStrip?: NullableStringFieldUpdateOperationsInput | string | null
    ichthyofauna?: NullableStringFieldUpdateOperationsInput | string | null
    mammals?: NullableStringFieldUpdateOperationsInput | string | null
    invertebrates?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WaterBodyPassportCreateManyInput = {
    id?: string
    waterBodyId: string
    area?: number | null
    overgrowthArea?: number | null
    altitude?: number | null
    length?: number | null
    maxWidth?: number | null
    coastlineLength?: number | null
    coastlineDev?: number | null
    catchmentArea?: number | null
    currentDepth?: number | null
    maxDepth?: number | null
    avgDepth?: number | null
    volume?: number | null
    fisheryType?: string | null
    fishProductivity?: number | null
    economicDesc?: string | null
    waterProtectionZone?: string | null
    waterProtectionStrip?: string | null
    ichthyofauna?: string | null
    mammals?: string | null
    invertebrates?: string | null
  }

  export type WaterBodyPassportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthArea?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    maxWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    coastlineLength?: NullableFloatFieldUpdateOperationsInput | number | null
    coastlineDev?: NullableFloatFieldUpdateOperationsInput | number | null
    catchmentArea?: NullableFloatFieldUpdateOperationsInput | number | null
    currentDepth?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDepth?: NullableFloatFieldUpdateOperationsInput | number | null
    avgDepth?: NullableFloatFieldUpdateOperationsInput | number | null
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    fisheryType?: NullableStringFieldUpdateOperationsInput | string | null
    fishProductivity?: NullableFloatFieldUpdateOperationsInput | number | null
    economicDesc?: NullableStringFieldUpdateOperationsInput | string | null
    waterProtectionZone?: NullableStringFieldUpdateOperationsInput | string | null
    waterProtectionStrip?: NullableStringFieldUpdateOperationsInput | string | null
    ichthyofauna?: NullableStringFieldUpdateOperationsInput | string | null
    mammals?: NullableStringFieldUpdateOperationsInput | string | null
    invertebrates?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WaterBodyPassportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    waterBodyId?: StringFieldUpdateOperationsInput | string
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthArea?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    maxWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    coastlineLength?: NullableFloatFieldUpdateOperationsInput | number | null
    coastlineDev?: NullableFloatFieldUpdateOperationsInput | number | null
    catchmentArea?: NullableFloatFieldUpdateOperationsInput | number | null
    currentDepth?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDepth?: NullableFloatFieldUpdateOperationsInput | number | null
    avgDepth?: NullableFloatFieldUpdateOperationsInput | number | null
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    fisheryType?: NullableStringFieldUpdateOperationsInput | string | null
    fishProductivity?: NullableFloatFieldUpdateOperationsInput | number | null
    economicDesc?: NullableStringFieldUpdateOperationsInput | string | null
    waterProtectionZone?: NullableStringFieldUpdateOperationsInput | string | null
    waterProtectionStrip?: NullableStringFieldUpdateOperationsInput | string | null
    ichthyofauna?: NullableStringFieldUpdateOperationsInput | string | null
    mammals?: NullableStringFieldUpdateOperationsInput | string | null
    invertebrates?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BioindicationRecordCreateInput = {
    id?: string
    recordDate?: Date | string
    ph?: number | null
    turbidity?: number | null
    dissolvedGases?: string | null
    biogenicCompounds?: string | null
    permanganateOxid?: number | null
    mineralization?: number | null
    salinity?: number | null
    hardness?: number | null
    calcium?: number | null
    magnesium?: number | null
    chlorides?: number | null
    sulfates?: number | null
    hydrocarbonates?: number | null
    potassiumSodium?: number | null
    overgrowthPercent?: number | null
    overgrowthDegree?: string | null
    phytoplanktonDev?: string | null
    zooplanktonTaxa?: string | null
    zooplanktonGroups?: string | null
    zoobenthosTaxa?: string | null
    zoobenthosGroups?: string | null
    trophicStatus?: string | null
    waterBody: WaterBodyCreateNestedOneWithoutMeasurementsInput
  }

  export type BioindicationRecordUncheckedCreateInput = {
    id?: string
    waterBodyId: string
    recordDate?: Date | string
    ph?: number | null
    turbidity?: number | null
    dissolvedGases?: string | null
    biogenicCompounds?: string | null
    permanganateOxid?: number | null
    mineralization?: number | null
    salinity?: number | null
    hardness?: number | null
    calcium?: number | null
    magnesium?: number | null
    chlorides?: number | null
    sulfates?: number | null
    hydrocarbonates?: number | null
    potassiumSodium?: number | null
    overgrowthPercent?: number | null
    overgrowthDegree?: string | null
    phytoplanktonDev?: string | null
    zooplanktonTaxa?: string | null
    zooplanktonGroups?: string | null
    zoobenthosTaxa?: string | null
    zoobenthosGroups?: string | null
    trophicStatus?: string | null
  }

  export type BioindicationRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ph?: NullableFloatFieldUpdateOperationsInput | number | null
    turbidity?: NullableFloatFieldUpdateOperationsInput | number | null
    dissolvedGases?: NullableStringFieldUpdateOperationsInput | string | null
    biogenicCompounds?: NullableStringFieldUpdateOperationsInput | string | null
    permanganateOxid?: NullableFloatFieldUpdateOperationsInput | number | null
    mineralization?: NullableFloatFieldUpdateOperationsInput | number | null
    salinity?: NullableFloatFieldUpdateOperationsInput | number | null
    hardness?: NullableFloatFieldUpdateOperationsInput | number | null
    calcium?: NullableFloatFieldUpdateOperationsInput | number | null
    magnesium?: NullableFloatFieldUpdateOperationsInput | number | null
    chlorides?: NullableFloatFieldUpdateOperationsInput | number | null
    sulfates?: NullableFloatFieldUpdateOperationsInput | number | null
    hydrocarbonates?: NullableFloatFieldUpdateOperationsInput | number | null
    potassiumSodium?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthDegree?: NullableStringFieldUpdateOperationsInput | string | null
    phytoplanktonDev?: NullableStringFieldUpdateOperationsInput | string | null
    zooplanktonTaxa?: NullableStringFieldUpdateOperationsInput | string | null
    zooplanktonGroups?: NullableStringFieldUpdateOperationsInput | string | null
    zoobenthosTaxa?: NullableStringFieldUpdateOperationsInput | string | null
    zoobenthosGroups?: NullableStringFieldUpdateOperationsInput | string | null
    trophicStatus?: NullableStringFieldUpdateOperationsInput | string | null
    waterBody?: WaterBodyUpdateOneRequiredWithoutMeasurementsNestedInput
  }

  export type BioindicationRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    waterBodyId?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ph?: NullableFloatFieldUpdateOperationsInput | number | null
    turbidity?: NullableFloatFieldUpdateOperationsInput | number | null
    dissolvedGases?: NullableStringFieldUpdateOperationsInput | string | null
    biogenicCompounds?: NullableStringFieldUpdateOperationsInput | string | null
    permanganateOxid?: NullableFloatFieldUpdateOperationsInput | number | null
    mineralization?: NullableFloatFieldUpdateOperationsInput | number | null
    salinity?: NullableFloatFieldUpdateOperationsInput | number | null
    hardness?: NullableFloatFieldUpdateOperationsInput | number | null
    calcium?: NullableFloatFieldUpdateOperationsInput | number | null
    magnesium?: NullableFloatFieldUpdateOperationsInput | number | null
    chlorides?: NullableFloatFieldUpdateOperationsInput | number | null
    sulfates?: NullableFloatFieldUpdateOperationsInput | number | null
    hydrocarbonates?: NullableFloatFieldUpdateOperationsInput | number | null
    potassiumSodium?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthDegree?: NullableStringFieldUpdateOperationsInput | string | null
    phytoplanktonDev?: NullableStringFieldUpdateOperationsInput | string | null
    zooplanktonTaxa?: NullableStringFieldUpdateOperationsInput | string | null
    zooplanktonGroups?: NullableStringFieldUpdateOperationsInput | string | null
    zoobenthosTaxa?: NullableStringFieldUpdateOperationsInput | string | null
    zoobenthosGroups?: NullableStringFieldUpdateOperationsInput | string | null
    trophicStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BioindicationRecordCreateManyInput = {
    id?: string
    waterBodyId: string
    recordDate?: Date | string
    ph?: number | null
    turbidity?: number | null
    dissolvedGases?: string | null
    biogenicCompounds?: string | null
    permanganateOxid?: number | null
    mineralization?: number | null
    salinity?: number | null
    hardness?: number | null
    calcium?: number | null
    magnesium?: number | null
    chlorides?: number | null
    sulfates?: number | null
    hydrocarbonates?: number | null
    potassiumSodium?: number | null
    overgrowthPercent?: number | null
    overgrowthDegree?: string | null
    phytoplanktonDev?: string | null
    zooplanktonTaxa?: string | null
    zooplanktonGroups?: string | null
    zoobenthosTaxa?: string | null
    zoobenthosGroups?: string | null
    trophicStatus?: string | null
  }

  export type BioindicationRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ph?: NullableFloatFieldUpdateOperationsInput | number | null
    turbidity?: NullableFloatFieldUpdateOperationsInput | number | null
    dissolvedGases?: NullableStringFieldUpdateOperationsInput | string | null
    biogenicCompounds?: NullableStringFieldUpdateOperationsInput | string | null
    permanganateOxid?: NullableFloatFieldUpdateOperationsInput | number | null
    mineralization?: NullableFloatFieldUpdateOperationsInput | number | null
    salinity?: NullableFloatFieldUpdateOperationsInput | number | null
    hardness?: NullableFloatFieldUpdateOperationsInput | number | null
    calcium?: NullableFloatFieldUpdateOperationsInput | number | null
    magnesium?: NullableFloatFieldUpdateOperationsInput | number | null
    chlorides?: NullableFloatFieldUpdateOperationsInput | number | null
    sulfates?: NullableFloatFieldUpdateOperationsInput | number | null
    hydrocarbonates?: NullableFloatFieldUpdateOperationsInput | number | null
    potassiumSodium?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthDegree?: NullableStringFieldUpdateOperationsInput | string | null
    phytoplanktonDev?: NullableStringFieldUpdateOperationsInput | string | null
    zooplanktonTaxa?: NullableStringFieldUpdateOperationsInput | string | null
    zooplanktonGroups?: NullableStringFieldUpdateOperationsInput | string | null
    zoobenthosTaxa?: NullableStringFieldUpdateOperationsInput | string | null
    zoobenthosGroups?: NullableStringFieldUpdateOperationsInput | string | null
    trophicStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BioindicationRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    waterBodyId?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ph?: NullableFloatFieldUpdateOperationsInput | number | null
    turbidity?: NullableFloatFieldUpdateOperationsInput | number | null
    dissolvedGases?: NullableStringFieldUpdateOperationsInput | string | null
    biogenicCompounds?: NullableStringFieldUpdateOperationsInput | string | null
    permanganateOxid?: NullableFloatFieldUpdateOperationsInput | number | null
    mineralization?: NullableFloatFieldUpdateOperationsInput | number | null
    salinity?: NullableFloatFieldUpdateOperationsInput | number | null
    hardness?: NullableFloatFieldUpdateOperationsInput | number | null
    calcium?: NullableFloatFieldUpdateOperationsInput | number | null
    magnesium?: NullableFloatFieldUpdateOperationsInput | number | null
    chlorides?: NullableFloatFieldUpdateOperationsInput | number | null
    sulfates?: NullableFloatFieldUpdateOperationsInput | number | null
    hydrocarbonates?: NullableFloatFieldUpdateOperationsInput | number | null
    potassiumSodium?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthDegree?: NullableStringFieldUpdateOperationsInput | string | null
    phytoplanktonDev?: NullableStringFieldUpdateOperationsInput | string | null
    zooplanktonTaxa?: NullableStringFieldUpdateOperationsInput | string | null
    zooplanktonGroups?: NullableStringFieldUpdateOperationsInput | string | null
    zoobenthosTaxa?: NullableStringFieldUpdateOperationsInput | string | null
    zoobenthosGroups?: NullableStringFieldUpdateOperationsInput | string | null
    trophicStatus?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    login?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WaterBodyPassportNullableScalarRelationFilter = {
    is?: WaterBodyPassportWhereInput | null
    isNot?: WaterBodyPassportWhereInput | null
  }

  export type BioindicationRecordListRelationFilter = {
    every?: BioindicationRecordWhereInput
    some?: BioindicationRecordWhereInput
    none?: BioindicationRecordWhereInput
  }

  export type BioindicationRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WaterBodyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    district?: SortOrder
    locationDesc?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    boundaries?: SortOrder
    cadastralNumber?: SortOrder
  }

  export type WaterBodyAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type WaterBodyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    district?: SortOrder
    locationDesc?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cadastralNumber?: SortOrder
  }

  export type WaterBodyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    district?: SortOrder
    locationDesc?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cadastralNumber?: SortOrder
  }

  export type WaterBodySumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type WaterBodyScalarRelationFilter = {
    is?: WaterBodyWhereInput
    isNot?: WaterBodyWhereInput
  }

  export type WaterBodyPassportCountOrderByAggregateInput = {
    id?: SortOrder
    waterBodyId?: SortOrder
    area?: SortOrder
    overgrowthArea?: SortOrder
    altitude?: SortOrder
    length?: SortOrder
    maxWidth?: SortOrder
    coastlineLength?: SortOrder
    coastlineDev?: SortOrder
    catchmentArea?: SortOrder
    currentDepth?: SortOrder
    maxDepth?: SortOrder
    avgDepth?: SortOrder
    volume?: SortOrder
    fisheryType?: SortOrder
    fishProductivity?: SortOrder
    economicDesc?: SortOrder
    waterProtectionZone?: SortOrder
    waterProtectionStrip?: SortOrder
    ichthyofauna?: SortOrder
    mammals?: SortOrder
    invertebrates?: SortOrder
  }

  export type WaterBodyPassportAvgOrderByAggregateInput = {
    area?: SortOrder
    overgrowthArea?: SortOrder
    altitude?: SortOrder
    length?: SortOrder
    maxWidth?: SortOrder
    coastlineLength?: SortOrder
    coastlineDev?: SortOrder
    catchmentArea?: SortOrder
    currentDepth?: SortOrder
    maxDepth?: SortOrder
    avgDepth?: SortOrder
    volume?: SortOrder
    fishProductivity?: SortOrder
  }

  export type WaterBodyPassportMaxOrderByAggregateInput = {
    id?: SortOrder
    waterBodyId?: SortOrder
    area?: SortOrder
    overgrowthArea?: SortOrder
    altitude?: SortOrder
    length?: SortOrder
    maxWidth?: SortOrder
    coastlineLength?: SortOrder
    coastlineDev?: SortOrder
    catchmentArea?: SortOrder
    currentDepth?: SortOrder
    maxDepth?: SortOrder
    avgDepth?: SortOrder
    volume?: SortOrder
    fisheryType?: SortOrder
    fishProductivity?: SortOrder
    economicDesc?: SortOrder
    waterProtectionZone?: SortOrder
    waterProtectionStrip?: SortOrder
    ichthyofauna?: SortOrder
    mammals?: SortOrder
    invertebrates?: SortOrder
  }

  export type WaterBodyPassportMinOrderByAggregateInput = {
    id?: SortOrder
    waterBodyId?: SortOrder
    area?: SortOrder
    overgrowthArea?: SortOrder
    altitude?: SortOrder
    length?: SortOrder
    maxWidth?: SortOrder
    coastlineLength?: SortOrder
    coastlineDev?: SortOrder
    catchmentArea?: SortOrder
    currentDepth?: SortOrder
    maxDepth?: SortOrder
    avgDepth?: SortOrder
    volume?: SortOrder
    fisheryType?: SortOrder
    fishProductivity?: SortOrder
    economicDesc?: SortOrder
    waterProtectionZone?: SortOrder
    waterProtectionStrip?: SortOrder
    ichthyofauna?: SortOrder
    mammals?: SortOrder
    invertebrates?: SortOrder
  }

  export type WaterBodyPassportSumOrderByAggregateInput = {
    area?: SortOrder
    overgrowthArea?: SortOrder
    altitude?: SortOrder
    length?: SortOrder
    maxWidth?: SortOrder
    coastlineLength?: SortOrder
    coastlineDev?: SortOrder
    catchmentArea?: SortOrder
    currentDepth?: SortOrder
    maxDepth?: SortOrder
    avgDepth?: SortOrder
    volume?: SortOrder
    fishProductivity?: SortOrder
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

  export type BioindicationRecordCountOrderByAggregateInput = {
    id?: SortOrder
    waterBodyId?: SortOrder
    recordDate?: SortOrder
    ph?: SortOrder
    turbidity?: SortOrder
    dissolvedGases?: SortOrder
    biogenicCompounds?: SortOrder
    permanganateOxid?: SortOrder
    mineralization?: SortOrder
    salinity?: SortOrder
    hardness?: SortOrder
    calcium?: SortOrder
    magnesium?: SortOrder
    chlorides?: SortOrder
    sulfates?: SortOrder
    hydrocarbonates?: SortOrder
    potassiumSodium?: SortOrder
    overgrowthPercent?: SortOrder
    overgrowthDegree?: SortOrder
    phytoplanktonDev?: SortOrder
    zooplanktonTaxa?: SortOrder
    zooplanktonGroups?: SortOrder
    zoobenthosTaxa?: SortOrder
    zoobenthosGroups?: SortOrder
    trophicStatus?: SortOrder
  }

  export type BioindicationRecordAvgOrderByAggregateInput = {
    ph?: SortOrder
    turbidity?: SortOrder
    permanganateOxid?: SortOrder
    mineralization?: SortOrder
    salinity?: SortOrder
    hardness?: SortOrder
    calcium?: SortOrder
    magnesium?: SortOrder
    chlorides?: SortOrder
    sulfates?: SortOrder
    hydrocarbonates?: SortOrder
    potassiumSodium?: SortOrder
    overgrowthPercent?: SortOrder
  }

  export type BioindicationRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    waterBodyId?: SortOrder
    recordDate?: SortOrder
    ph?: SortOrder
    turbidity?: SortOrder
    dissolvedGases?: SortOrder
    biogenicCompounds?: SortOrder
    permanganateOxid?: SortOrder
    mineralization?: SortOrder
    salinity?: SortOrder
    hardness?: SortOrder
    calcium?: SortOrder
    magnesium?: SortOrder
    chlorides?: SortOrder
    sulfates?: SortOrder
    hydrocarbonates?: SortOrder
    potassiumSodium?: SortOrder
    overgrowthPercent?: SortOrder
    overgrowthDegree?: SortOrder
    phytoplanktonDev?: SortOrder
    zooplanktonTaxa?: SortOrder
    zooplanktonGroups?: SortOrder
    zoobenthosTaxa?: SortOrder
    zoobenthosGroups?: SortOrder
    trophicStatus?: SortOrder
  }

  export type BioindicationRecordMinOrderByAggregateInput = {
    id?: SortOrder
    waterBodyId?: SortOrder
    recordDate?: SortOrder
    ph?: SortOrder
    turbidity?: SortOrder
    dissolvedGases?: SortOrder
    biogenicCompounds?: SortOrder
    permanganateOxid?: SortOrder
    mineralization?: SortOrder
    salinity?: SortOrder
    hardness?: SortOrder
    calcium?: SortOrder
    magnesium?: SortOrder
    chlorides?: SortOrder
    sulfates?: SortOrder
    hydrocarbonates?: SortOrder
    potassiumSodium?: SortOrder
    overgrowthPercent?: SortOrder
    overgrowthDegree?: SortOrder
    phytoplanktonDev?: SortOrder
    zooplanktonTaxa?: SortOrder
    zooplanktonGroups?: SortOrder
    zoobenthosTaxa?: SortOrder
    zoobenthosGroups?: SortOrder
    trophicStatus?: SortOrder
  }

  export type BioindicationRecordSumOrderByAggregateInput = {
    ph?: SortOrder
    turbidity?: SortOrder
    permanganateOxid?: SortOrder
    mineralization?: SortOrder
    salinity?: SortOrder
    hardness?: SortOrder
    calcium?: SortOrder
    magnesium?: SortOrder
    chlorides?: SortOrder
    sulfates?: SortOrder
    hydrocarbonates?: SortOrder
    potassiumSodium?: SortOrder
    overgrowthPercent?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type WaterBodyPassportCreateNestedOneWithoutWaterBodyInput = {
    create?: XOR<WaterBodyPassportCreateWithoutWaterBodyInput, WaterBodyPassportUncheckedCreateWithoutWaterBodyInput>
    connectOrCreate?: WaterBodyPassportCreateOrConnectWithoutWaterBodyInput
    connect?: WaterBodyPassportWhereUniqueInput
  }

  export type BioindicationRecordCreateNestedManyWithoutWaterBodyInput = {
    create?: XOR<BioindicationRecordCreateWithoutWaterBodyInput, BioindicationRecordUncheckedCreateWithoutWaterBodyInput> | BioindicationRecordCreateWithoutWaterBodyInput[] | BioindicationRecordUncheckedCreateWithoutWaterBodyInput[]
    connectOrCreate?: BioindicationRecordCreateOrConnectWithoutWaterBodyInput | BioindicationRecordCreateOrConnectWithoutWaterBodyInput[]
    createMany?: BioindicationRecordCreateManyWaterBodyInputEnvelope
    connect?: BioindicationRecordWhereUniqueInput | BioindicationRecordWhereUniqueInput[]
  }

  export type WaterBodyPassportUncheckedCreateNestedOneWithoutWaterBodyInput = {
    create?: XOR<WaterBodyPassportCreateWithoutWaterBodyInput, WaterBodyPassportUncheckedCreateWithoutWaterBodyInput>
    connectOrCreate?: WaterBodyPassportCreateOrConnectWithoutWaterBodyInput
    connect?: WaterBodyPassportWhereUniqueInput
  }

  export type BioindicationRecordUncheckedCreateNestedManyWithoutWaterBodyInput = {
    create?: XOR<BioindicationRecordCreateWithoutWaterBodyInput, BioindicationRecordUncheckedCreateWithoutWaterBodyInput> | BioindicationRecordCreateWithoutWaterBodyInput[] | BioindicationRecordUncheckedCreateWithoutWaterBodyInput[]
    connectOrCreate?: BioindicationRecordCreateOrConnectWithoutWaterBodyInput | BioindicationRecordCreateOrConnectWithoutWaterBodyInput[]
    createMany?: BioindicationRecordCreateManyWaterBodyInputEnvelope
    connect?: BioindicationRecordWhereUniqueInput | BioindicationRecordWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WaterBodyPassportUpdateOneWithoutWaterBodyNestedInput = {
    create?: XOR<WaterBodyPassportCreateWithoutWaterBodyInput, WaterBodyPassportUncheckedCreateWithoutWaterBodyInput>
    connectOrCreate?: WaterBodyPassportCreateOrConnectWithoutWaterBodyInput
    upsert?: WaterBodyPassportUpsertWithoutWaterBodyInput
    disconnect?: WaterBodyPassportWhereInput | boolean
    delete?: WaterBodyPassportWhereInput | boolean
    connect?: WaterBodyPassportWhereUniqueInput
    update?: XOR<XOR<WaterBodyPassportUpdateToOneWithWhereWithoutWaterBodyInput, WaterBodyPassportUpdateWithoutWaterBodyInput>, WaterBodyPassportUncheckedUpdateWithoutWaterBodyInput>
  }

  export type BioindicationRecordUpdateManyWithoutWaterBodyNestedInput = {
    create?: XOR<BioindicationRecordCreateWithoutWaterBodyInput, BioindicationRecordUncheckedCreateWithoutWaterBodyInput> | BioindicationRecordCreateWithoutWaterBodyInput[] | BioindicationRecordUncheckedCreateWithoutWaterBodyInput[]
    connectOrCreate?: BioindicationRecordCreateOrConnectWithoutWaterBodyInput | BioindicationRecordCreateOrConnectWithoutWaterBodyInput[]
    upsert?: BioindicationRecordUpsertWithWhereUniqueWithoutWaterBodyInput | BioindicationRecordUpsertWithWhereUniqueWithoutWaterBodyInput[]
    createMany?: BioindicationRecordCreateManyWaterBodyInputEnvelope
    set?: BioindicationRecordWhereUniqueInput | BioindicationRecordWhereUniqueInput[]
    disconnect?: BioindicationRecordWhereUniqueInput | BioindicationRecordWhereUniqueInput[]
    delete?: BioindicationRecordWhereUniqueInput | BioindicationRecordWhereUniqueInput[]
    connect?: BioindicationRecordWhereUniqueInput | BioindicationRecordWhereUniqueInput[]
    update?: BioindicationRecordUpdateWithWhereUniqueWithoutWaterBodyInput | BioindicationRecordUpdateWithWhereUniqueWithoutWaterBodyInput[]
    updateMany?: BioindicationRecordUpdateManyWithWhereWithoutWaterBodyInput | BioindicationRecordUpdateManyWithWhereWithoutWaterBodyInput[]
    deleteMany?: BioindicationRecordScalarWhereInput | BioindicationRecordScalarWhereInput[]
  }

  export type WaterBodyPassportUncheckedUpdateOneWithoutWaterBodyNestedInput = {
    create?: XOR<WaterBodyPassportCreateWithoutWaterBodyInput, WaterBodyPassportUncheckedCreateWithoutWaterBodyInput>
    connectOrCreate?: WaterBodyPassportCreateOrConnectWithoutWaterBodyInput
    upsert?: WaterBodyPassportUpsertWithoutWaterBodyInput
    disconnect?: WaterBodyPassportWhereInput | boolean
    delete?: WaterBodyPassportWhereInput | boolean
    connect?: WaterBodyPassportWhereUniqueInput
    update?: XOR<XOR<WaterBodyPassportUpdateToOneWithWhereWithoutWaterBodyInput, WaterBodyPassportUpdateWithoutWaterBodyInput>, WaterBodyPassportUncheckedUpdateWithoutWaterBodyInput>
  }

  export type BioindicationRecordUncheckedUpdateManyWithoutWaterBodyNestedInput = {
    create?: XOR<BioindicationRecordCreateWithoutWaterBodyInput, BioindicationRecordUncheckedCreateWithoutWaterBodyInput> | BioindicationRecordCreateWithoutWaterBodyInput[] | BioindicationRecordUncheckedCreateWithoutWaterBodyInput[]
    connectOrCreate?: BioindicationRecordCreateOrConnectWithoutWaterBodyInput | BioindicationRecordCreateOrConnectWithoutWaterBodyInput[]
    upsert?: BioindicationRecordUpsertWithWhereUniqueWithoutWaterBodyInput | BioindicationRecordUpsertWithWhereUniqueWithoutWaterBodyInput[]
    createMany?: BioindicationRecordCreateManyWaterBodyInputEnvelope
    set?: BioindicationRecordWhereUniqueInput | BioindicationRecordWhereUniqueInput[]
    disconnect?: BioindicationRecordWhereUniqueInput | BioindicationRecordWhereUniqueInput[]
    delete?: BioindicationRecordWhereUniqueInput | BioindicationRecordWhereUniqueInput[]
    connect?: BioindicationRecordWhereUniqueInput | BioindicationRecordWhereUniqueInput[]
    update?: BioindicationRecordUpdateWithWhereUniqueWithoutWaterBodyInput | BioindicationRecordUpdateWithWhereUniqueWithoutWaterBodyInput[]
    updateMany?: BioindicationRecordUpdateManyWithWhereWithoutWaterBodyInput | BioindicationRecordUpdateManyWithWhereWithoutWaterBodyInput[]
    deleteMany?: BioindicationRecordScalarWhereInput | BioindicationRecordScalarWhereInput[]
  }

  export type WaterBodyCreateNestedOneWithoutPassportInput = {
    create?: XOR<WaterBodyCreateWithoutPassportInput, WaterBodyUncheckedCreateWithoutPassportInput>
    connectOrCreate?: WaterBodyCreateOrConnectWithoutPassportInput
    connect?: WaterBodyWhereUniqueInput
  }

  export type WaterBodyUpdateOneRequiredWithoutPassportNestedInput = {
    create?: XOR<WaterBodyCreateWithoutPassportInput, WaterBodyUncheckedCreateWithoutPassportInput>
    connectOrCreate?: WaterBodyCreateOrConnectWithoutPassportInput
    upsert?: WaterBodyUpsertWithoutPassportInput
    connect?: WaterBodyWhereUniqueInput
    update?: XOR<XOR<WaterBodyUpdateToOneWithWhereWithoutPassportInput, WaterBodyUpdateWithoutPassportInput>, WaterBodyUncheckedUpdateWithoutPassportInput>
  }

  export type WaterBodyCreateNestedOneWithoutMeasurementsInput = {
    create?: XOR<WaterBodyCreateWithoutMeasurementsInput, WaterBodyUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: WaterBodyCreateOrConnectWithoutMeasurementsInput
    connect?: WaterBodyWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WaterBodyUpdateOneRequiredWithoutMeasurementsNestedInput = {
    create?: XOR<WaterBodyCreateWithoutMeasurementsInput, WaterBodyUncheckedCreateWithoutMeasurementsInput>
    connectOrCreate?: WaterBodyCreateOrConnectWithoutMeasurementsInput
    upsert?: WaterBodyUpsertWithoutMeasurementsInput
    connect?: WaterBodyWhereUniqueInput
    update?: XOR<XOR<WaterBodyUpdateToOneWithWhereWithoutMeasurementsInput, WaterBodyUpdateWithoutMeasurementsInput>, WaterBodyUncheckedUpdateWithoutMeasurementsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type WaterBodyPassportCreateWithoutWaterBodyInput = {
    id?: string
    area?: number | null
    overgrowthArea?: number | null
    altitude?: number | null
    length?: number | null
    maxWidth?: number | null
    coastlineLength?: number | null
    coastlineDev?: number | null
    catchmentArea?: number | null
    currentDepth?: number | null
    maxDepth?: number | null
    avgDepth?: number | null
    volume?: number | null
    fisheryType?: string | null
    fishProductivity?: number | null
    economicDesc?: string | null
    waterProtectionZone?: string | null
    waterProtectionStrip?: string | null
    ichthyofauna?: string | null
    mammals?: string | null
    invertebrates?: string | null
  }

  export type WaterBodyPassportUncheckedCreateWithoutWaterBodyInput = {
    id?: string
    area?: number | null
    overgrowthArea?: number | null
    altitude?: number | null
    length?: number | null
    maxWidth?: number | null
    coastlineLength?: number | null
    coastlineDev?: number | null
    catchmentArea?: number | null
    currentDepth?: number | null
    maxDepth?: number | null
    avgDepth?: number | null
    volume?: number | null
    fisheryType?: string | null
    fishProductivity?: number | null
    economicDesc?: string | null
    waterProtectionZone?: string | null
    waterProtectionStrip?: string | null
    ichthyofauna?: string | null
    mammals?: string | null
    invertebrates?: string | null
  }

  export type WaterBodyPassportCreateOrConnectWithoutWaterBodyInput = {
    where: WaterBodyPassportWhereUniqueInput
    create: XOR<WaterBodyPassportCreateWithoutWaterBodyInput, WaterBodyPassportUncheckedCreateWithoutWaterBodyInput>
  }

  export type BioindicationRecordCreateWithoutWaterBodyInput = {
    id?: string
    recordDate?: Date | string
    ph?: number | null
    turbidity?: number | null
    dissolvedGases?: string | null
    biogenicCompounds?: string | null
    permanganateOxid?: number | null
    mineralization?: number | null
    salinity?: number | null
    hardness?: number | null
    calcium?: number | null
    magnesium?: number | null
    chlorides?: number | null
    sulfates?: number | null
    hydrocarbonates?: number | null
    potassiumSodium?: number | null
    overgrowthPercent?: number | null
    overgrowthDegree?: string | null
    phytoplanktonDev?: string | null
    zooplanktonTaxa?: string | null
    zooplanktonGroups?: string | null
    zoobenthosTaxa?: string | null
    zoobenthosGroups?: string | null
    trophicStatus?: string | null
  }

  export type BioindicationRecordUncheckedCreateWithoutWaterBodyInput = {
    id?: string
    recordDate?: Date | string
    ph?: number | null
    turbidity?: number | null
    dissolvedGases?: string | null
    biogenicCompounds?: string | null
    permanganateOxid?: number | null
    mineralization?: number | null
    salinity?: number | null
    hardness?: number | null
    calcium?: number | null
    magnesium?: number | null
    chlorides?: number | null
    sulfates?: number | null
    hydrocarbonates?: number | null
    potassiumSodium?: number | null
    overgrowthPercent?: number | null
    overgrowthDegree?: string | null
    phytoplanktonDev?: string | null
    zooplanktonTaxa?: string | null
    zooplanktonGroups?: string | null
    zoobenthosTaxa?: string | null
    zoobenthosGroups?: string | null
    trophicStatus?: string | null
  }

  export type BioindicationRecordCreateOrConnectWithoutWaterBodyInput = {
    where: BioindicationRecordWhereUniqueInput
    create: XOR<BioindicationRecordCreateWithoutWaterBodyInput, BioindicationRecordUncheckedCreateWithoutWaterBodyInput>
  }

  export type BioindicationRecordCreateManyWaterBodyInputEnvelope = {
    data: BioindicationRecordCreateManyWaterBodyInput | BioindicationRecordCreateManyWaterBodyInput[]
    skipDuplicates?: boolean
  }

  export type WaterBodyPassportUpsertWithoutWaterBodyInput = {
    update: XOR<WaterBodyPassportUpdateWithoutWaterBodyInput, WaterBodyPassportUncheckedUpdateWithoutWaterBodyInput>
    create: XOR<WaterBodyPassportCreateWithoutWaterBodyInput, WaterBodyPassportUncheckedCreateWithoutWaterBodyInput>
    where?: WaterBodyPassportWhereInput
  }

  export type WaterBodyPassportUpdateToOneWithWhereWithoutWaterBodyInput = {
    where?: WaterBodyPassportWhereInput
    data: XOR<WaterBodyPassportUpdateWithoutWaterBodyInput, WaterBodyPassportUncheckedUpdateWithoutWaterBodyInput>
  }

  export type WaterBodyPassportUpdateWithoutWaterBodyInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthArea?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    maxWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    coastlineLength?: NullableFloatFieldUpdateOperationsInput | number | null
    coastlineDev?: NullableFloatFieldUpdateOperationsInput | number | null
    catchmentArea?: NullableFloatFieldUpdateOperationsInput | number | null
    currentDepth?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDepth?: NullableFloatFieldUpdateOperationsInput | number | null
    avgDepth?: NullableFloatFieldUpdateOperationsInput | number | null
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    fisheryType?: NullableStringFieldUpdateOperationsInput | string | null
    fishProductivity?: NullableFloatFieldUpdateOperationsInput | number | null
    economicDesc?: NullableStringFieldUpdateOperationsInput | string | null
    waterProtectionZone?: NullableStringFieldUpdateOperationsInput | string | null
    waterProtectionStrip?: NullableStringFieldUpdateOperationsInput | string | null
    ichthyofauna?: NullableStringFieldUpdateOperationsInput | string | null
    mammals?: NullableStringFieldUpdateOperationsInput | string | null
    invertebrates?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WaterBodyPassportUncheckedUpdateWithoutWaterBodyInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthArea?: NullableFloatFieldUpdateOperationsInput | number | null
    altitude?: NullableFloatFieldUpdateOperationsInput | number | null
    length?: NullableFloatFieldUpdateOperationsInput | number | null
    maxWidth?: NullableFloatFieldUpdateOperationsInput | number | null
    coastlineLength?: NullableFloatFieldUpdateOperationsInput | number | null
    coastlineDev?: NullableFloatFieldUpdateOperationsInput | number | null
    catchmentArea?: NullableFloatFieldUpdateOperationsInput | number | null
    currentDepth?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDepth?: NullableFloatFieldUpdateOperationsInput | number | null
    avgDepth?: NullableFloatFieldUpdateOperationsInput | number | null
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    fisheryType?: NullableStringFieldUpdateOperationsInput | string | null
    fishProductivity?: NullableFloatFieldUpdateOperationsInput | number | null
    economicDesc?: NullableStringFieldUpdateOperationsInput | string | null
    waterProtectionZone?: NullableStringFieldUpdateOperationsInput | string | null
    waterProtectionStrip?: NullableStringFieldUpdateOperationsInput | string | null
    ichthyofauna?: NullableStringFieldUpdateOperationsInput | string | null
    mammals?: NullableStringFieldUpdateOperationsInput | string | null
    invertebrates?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BioindicationRecordUpsertWithWhereUniqueWithoutWaterBodyInput = {
    where: BioindicationRecordWhereUniqueInput
    update: XOR<BioindicationRecordUpdateWithoutWaterBodyInput, BioindicationRecordUncheckedUpdateWithoutWaterBodyInput>
    create: XOR<BioindicationRecordCreateWithoutWaterBodyInput, BioindicationRecordUncheckedCreateWithoutWaterBodyInput>
  }

  export type BioindicationRecordUpdateWithWhereUniqueWithoutWaterBodyInput = {
    where: BioindicationRecordWhereUniqueInput
    data: XOR<BioindicationRecordUpdateWithoutWaterBodyInput, BioindicationRecordUncheckedUpdateWithoutWaterBodyInput>
  }

  export type BioindicationRecordUpdateManyWithWhereWithoutWaterBodyInput = {
    where: BioindicationRecordScalarWhereInput
    data: XOR<BioindicationRecordUpdateManyMutationInput, BioindicationRecordUncheckedUpdateManyWithoutWaterBodyInput>
  }

  export type BioindicationRecordScalarWhereInput = {
    AND?: BioindicationRecordScalarWhereInput | BioindicationRecordScalarWhereInput[]
    OR?: BioindicationRecordScalarWhereInput[]
    NOT?: BioindicationRecordScalarWhereInput | BioindicationRecordScalarWhereInput[]
    id?: StringFilter<"BioindicationRecord"> | string
    waterBodyId?: StringFilter<"BioindicationRecord"> | string
    recordDate?: DateTimeFilter<"BioindicationRecord"> | Date | string
    ph?: FloatNullableFilter<"BioindicationRecord"> | number | null
    turbidity?: FloatNullableFilter<"BioindicationRecord"> | number | null
    dissolvedGases?: StringNullableFilter<"BioindicationRecord"> | string | null
    biogenicCompounds?: StringNullableFilter<"BioindicationRecord"> | string | null
    permanganateOxid?: FloatNullableFilter<"BioindicationRecord"> | number | null
    mineralization?: FloatNullableFilter<"BioindicationRecord"> | number | null
    salinity?: FloatNullableFilter<"BioindicationRecord"> | number | null
    hardness?: FloatNullableFilter<"BioindicationRecord"> | number | null
    calcium?: FloatNullableFilter<"BioindicationRecord"> | number | null
    magnesium?: FloatNullableFilter<"BioindicationRecord"> | number | null
    chlorides?: FloatNullableFilter<"BioindicationRecord"> | number | null
    sulfates?: FloatNullableFilter<"BioindicationRecord"> | number | null
    hydrocarbonates?: FloatNullableFilter<"BioindicationRecord"> | number | null
    potassiumSodium?: FloatNullableFilter<"BioindicationRecord"> | number | null
    overgrowthPercent?: FloatNullableFilter<"BioindicationRecord"> | number | null
    overgrowthDegree?: StringNullableFilter<"BioindicationRecord"> | string | null
    phytoplanktonDev?: StringNullableFilter<"BioindicationRecord"> | string | null
    zooplanktonTaxa?: StringNullableFilter<"BioindicationRecord"> | string | null
    zooplanktonGroups?: StringNullableFilter<"BioindicationRecord"> | string | null
    zoobenthosTaxa?: StringNullableFilter<"BioindicationRecord"> | string | null
    zoobenthosGroups?: StringNullableFilter<"BioindicationRecord"> | string | null
    trophicStatus?: StringNullableFilter<"BioindicationRecord"> | string | null
  }

  export type WaterBodyCreateWithoutPassportInput = {
    id?: string
    name: string
    district?: string | null
    locationDesc?: string | null
    latitude?: number | null
    longitude?: number | null
    boundaries?: NullableJsonNullValueInput | InputJsonValue
    cadastralNumber?: string | null
    measurements?: BioindicationRecordCreateNestedManyWithoutWaterBodyInput
  }

  export type WaterBodyUncheckedCreateWithoutPassportInput = {
    id?: string
    name: string
    district?: string | null
    locationDesc?: string | null
    latitude?: number | null
    longitude?: number | null
    boundaries?: NullableJsonNullValueInput | InputJsonValue
    cadastralNumber?: string | null
    measurements?: BioindicationRecordUncheckedCreateNestedManyWithoutWaterBodyInput
  }

  export type WaterBodyCreateOrConnectWithoutPassportInput = {
    where: WaterBodyWhereUniqueInput
    create: XOR<WaterBodyCreateWithoutPassportInput, WaterBodyUncheckedCreateWithoutPassportInput>
  }

  export type WaterBodyUpsertWithoutPassportInput = {
    update: XOR<WaterBodyUpdateWithoutPassportInput, WaterBodyUncheckedUpdateWithoutPassportInput>
    create: XOR<WaterBodyCreateWithoutPassportInput, WaterBodyUncheckedCreateWithoutPassportInput>
    where?: WaterBodyWhereInput
  }

  export type WaterBodyUpdateToOneWithWhereWithoutPassportInput = {
    where?: WaterBodyWhereInput
    data: XOR<WaterBodyUpdateWithoutPassportInput, WaterBodyUncheckedUpdateWithoutPassportInput>
  }

  export type WaterBodyUpdateWithoutPassportInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    locationDesc?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    boundaries?: NullableJsonNullValueInput | InputJsonValue
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    measurements?: BioindicationRecordUpdateManyWithoutWaterBodyNestedInput
  }

  export type WaterBodyUncheckedUpdateWithoutPassportInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    locationDesc?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    boundaries?: NullableJsonNullValueInput | InputJsonValue
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    measurements?: BioindicationRecordUncheckedUpdateManyWithoutWaterBodyNestedInput
  }

  export type WaterBodyCreateWithoutMeasurementsInput = {
    id?: string
    name: string
    district?: string | null
    locationDesc?: string | null
    latitude?: number | null
    longitude?: number | null
    boundaries?: NullableJsonNullValueInput | InputJsonValue
    cadastralNumber?: string | null
    passport?: WaterBodyPassportCreateNestedOneWithoutWaterBodyInput
  }

  export type WaterBodyUncheckedCreateWithoutMeasurementsInput = {
    id?: string
    name: string
    district?: string | null
    locationDesc?: string | null
    latitude?: number | null
    longitude?: number | null
    boundaries?: NullableJsonNullValueInput | InputJsonValue
    cadastralNumber?: string | null
    passport?: WaterBodyPassportUncheckedCreateNestedOneWithoutWaterBodyInput
  }

  export type WaterBodyCreateOrConnectWithoutMeasurementsInput = {
    where: WaterBodyWhereUniqueInput
    create: XOR<WaterBodyCreateWithoutMeasurementsInput, WaterBodyUncheckedCreateWithoutMeasurementsInput>
  }

  export type WaterBodyUpsertWithoutMeasurementsInput = {
    update: XOR<WaterBodyUpdateWithoutMeasurementsInput, WaterBodyUncheckedUpdateWithoutMeasurementsInput>
    create: XOR<WaterBodyCreateWithoutMeasurementsInput, WaterBodyUncheckedCreateWithoutMeasurementsInput>
    where?: WaterBodyWhereInput
  }

  export type WaterBodyUpdateToOneWithWhereWithoutMeasurementsInput = {
    where?: WaterBodyWhereInput
    data: XOR<WaterBodyUpdateWithoutMeasurementsInput, WaterBodyUncheckedUpdateWithoutMeasurementsInput>
  }

  export type WaterBodyUpdateWithoutMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    locationDesc?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    boundaries?: NullableJsonNullValueInput | InputJsonValue
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: WaterBodyPassportUpdateOneWithoutWaterBodyNestedInput
  }

  export type WaterBodyUncheckedUpdateWithoutMeasurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    locationDesc?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    boundaries?: NullableJsonNullValueInput | InputJsonValue
    cadastralNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passport?: WaterBodyPassportUncheckedUpdateOneWithoutWaterBodyNestedInput
  }

  export type BioindicationRecordCreateManyWaterBodyInput = {
    id?: string
    recordDate?: Date | string
    ph?: number | null
    turbidity?: number | null
    dissolvedGases?: string | null
    biogenicCompounds?: string | null
    permanganateOxid?: number | null
    mineralization?: number | null
    salinity?: number | null
    hardness?: number | null
    calcium?: number | null
    magnesium?: number | null
    chlorides?: number | null
    sulfates?: number | null
    hydrocarbonates?: number | null
    potassiumSodium?: number | null
    overgrowthPercent?: number | null
    overgrowthDegree?: string | null
    phytoplanktonDev?: string | null
    zooplanktonTaxa?: string | null
    zooplanktonGroups?: string | null
    zoobenthosTaxa?: string | null
    zoobenthosGroups?: string | null
    trophicStatus?: string | null
  }

  export type BioindicationRecordUpdateWithoutWaterBodyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ph?: NullableFloatFieldUpdateOperationsInput | number | null
    turbidity?: NullableFloatFieldUpdateOperationsInput | number | null
    dissolvedGases?: NullableStringFieldUpdateOperationsInput | string | null
    biogenicCompounds?: NullableStringFieldUpdateOperationsInput | string | null
    permanganateOxid?: NullableFloatFieldUpdateOperationsInput | number | null
    mineralization?: NullableFloatFieldUpdateOperationsInput | number | null
    salinity?: NullableFloatFieldUpdateOperationsInput | number | null
    hardness?: NullableFloatFieldUpdateOperationsInput | number | null
    calcium?: NullableFloatFieldUpdateOperationsInput | number | null
    magnesium?: NullableFloatFieldUpdateOperationsInput | number | null
    chlorides?: NullableFloatFieldUpdateOperationsInput | number | null
    sulfates?: NullableFloatFieldUpdateOperationsInput | number | null
    hydrocarbonates?: NullableFloatFieldUpdateOperationsInput | number | null
    potassiumSodium?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthDegree?: NullableStringFieldUpdateOperationsInput | string | null
    phytoplanktonDev?: NullableStringFieldUpdateOperationsInput | string | null
    zooplanktonTaxa?: NullableStringFieldUpdateOperationsInput | string | null
    zooplanktonGroups?: NullableStringFieldUpdateOperationsInput | string | null
    zoobenthosTaxa?: NullableStringFieldUpdateOperationsInput | string | null
    zoobenthosGroups?: NullableStringFieldUpdateOperationsInput | string | null
    trophicStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BioindicationRecordUncheckedUpdateWithoutWaterBodyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ph?: NullableFloatFieldUpdateOperationsInput | number | null
    turbidity?: NullableFloatFieldUpdateOperationsInput | number | null
    dissolvedGases?: NullableStringFieldUpdateOperationsInput | string | null
    biogenicCompounds?: NullableStringFieldUpdateOperationsInput | string | null
    permanganateOxid?: NullableFloatFieldUpdateOperationsInput | number | null
    mineralization?: NullableFloatFieldUpdateOperationsInput | number | null
    salinity?: NullableFloatFieldUpdateOperationsInput | number | null
    hardness?: NullableFloatFieldUpdateOperationsInput | number | null
    calcium?: NullableFloatFieldUpdateOperationsInput | number | null
    magnesium?: NullableFloatFieldUpdateOperationsInput | number | null
    chlorides?: NullableFloatFieldUpdateOperationsInput | number | null
    sulfates?: NullableFloatFieldUpdateOperationsInput | number | null
    hydrocarbonates?: NullableFloatFieldUpdateOperationsInput | number | null
    potassiumSodium?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthDegree?: NullableStringFieldUpdateOperationsInput | string | null
    phytoplanktonDev?: NullableStringFieldUpdateOperationsInput | string | null
    zooplanktonTaxa?: NullableStringFieldUpdateOperationsInput | string | null
    zooplanktonGroups?: NullableStringFieldUpdateOperationsInput | string | null
    zoobenthosTaxa?: NullableStringFieldUpdateOperationsInput | string | null
    zoobenthosGroups?: NullableStringFieldUpdateOperationsInput | string | null
    trophicStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BioindicationRecordUncheckedUpdateManyWithoutWaterBodyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ph?: NullableFloatFieldUpdateOperationsInput | number | null
    turbidity?: NullableFloatFieldUpdateOperationsInput | number | null
    dissolvedGases?: NullableStringFieldUpdateOperationsInput | string | null
    biogenicCompounds?: NullableStringFieldUpdateOperationsInput | string | null
    permanganateOxid?: NullableFloatFieldUpdateOperationsInput | number | null
    mineralization?: NullableFloatFieldUpdateOperationsInput | number | null
    salinity?: NullableFloatFieldUpdateOperationsInput | number | null
    hardness?: NullableFloatFieldUpdateOperationsInput | number | null
    calcium?: NullableFloatFieldUpdateOperationsInput | number | null
    magnesium?: NullableFloatFieldUpdateOperationsInput | number | null
    chlorides?: NullableFloatFieldUpdateOperationsInput | number | null
    sulfates?: NullableFloatFieldUpdateOperationsInput | number | null
    hydrocarbonates?: NullableFloatFieldUpdateOperationsInput | number | null
    potassiumSodium?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthPercent?: NullableFloatFieldUpdateOperationsInput | number | null
    overgrowthDegree?: NullableStringFieldUpdateOperationsInput | string | null
    phytoplanktonDev?: NullableStringFieldUpdateOperationsInput | string | null
    zooplanktonTaxa?: NullableStringFieldUpdateOperationsInput | string | null
    zooplanktonGroups?: NullableStringFieldUpdateOperationsInput | string | null
    zoobenthosTaxa?: NullableStringFieldUpdateOperationsInput | string | null
    zoobenthosGroups?: NullableStringFieldUpdateOperationsInput | string | null
    trophicStatus?: NullableStringFieldUpdateOperationsInput | string | null
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