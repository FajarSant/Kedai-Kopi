
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Produk
 * 
 */
export type Produk = $Result.DefaultSelection<Prisma.$ProdukPayload>
/**
 * Model Pembelian
 * 
 */
export type Pembelian = $Result.DefaultSelection<Prisma.$PembelianPayload>
/**
 * Model DetailPembelian
 * 
 */
export type DetailPembelian = $Result.DefaultSelection<Prisma.$DetailPembelianPayload>
/**
 * Model Reservasi
 * 
 */
export type Reservasi = $Result.DefaultSelection<Prisma.$ReservasiPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const KategoriEnum: {
  MAKANAN: 'MAKANAN',
  MINUMAN: 'MINUMAN',
  KOFEE: 'KOFEE',
  ICE_DRINK: 'ICE_DRINK',
  SNACK: 'SNACK',
  PAKET: 'PAKET'
};

export type KategoriEnum = (typeof KategoriEnum)[keyof typeof KategoriEnum]

}

export type KategoriEnum = $Enums.KategoriEnum

export const KategoriEnum: typeof $Enums.KategoriEnum

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.produk`: Exposes CRUD operations for the **Produk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produks
    * const produks = await prisma.produk.findMany()
    * ```
    */
  get produk(): Prisma.ProdukDelegate<ExtArgs>;

  /**
   * `prisma.pembelian`: Exposes CRUD operations for the **Pembelian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pembelians
    * const pembelians = await prisma.pembelian.findMany()
    * ```
    */
  get pembelian(): Prisma.PembelianDelegate<ExtArgs>;

  /**
   * `prisma.detailPembelian`: Exposes CRUD operations for the **DetailPembelian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailPembelians
    * const detailPembelians = await prisma.detailPembelian.findMany()
    * ```
    */
  get detailPembelian(): Prisma.DetailPembelianDelegate<ExtArgs>;

  /**
   * `prisma.reservasi`: Exposes CRUD operations for the **Reservasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservasis
    * const reservasis = await prisma.reservasi.findMany()
    * ```
    */
  get reservasi(): Prisma.ReservasiDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
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
    User: 'User',
    Produk: 'Produk',
    Pembelian: 'Pembelian',
    DetailPembelian: 'DetailPembelian',
    Reservasi: 'Reservasi'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'produk' | 'pembelian' | 'detailPembelian' | 'reservasi'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Produk: {
        payload: Prisma.$ProdukPayload<ExtArgs>
        fields: Prisma.ProdukFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdukFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdukFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          findFirst: {
            args: Prisma.ProdukFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdukFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          findMany: {
            args: Prisma.ProdukFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>[]
          }
          create: {
            args: Prisma.ProdukCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          createMany: {
            args: Prisma.ProdukCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProdukDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          update: {
            args: Prisma.ProdukUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          deleteMany: {
            args: Prisma.ProdukDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProdukUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProdukUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          aggregate: {
            args: Prisma.ProdukAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduk>
          }
          groupBy: {
            args: Prisma.ProdukGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProdukGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdukCountArgs<ExtArgs>,
            result: $Utils.Optional<ProdukCountAggregateOutputType> | number
          }
        }
      }
      Pembelian: {
        payload: Prisma.$PembelianPayload<ExtArgs>
        fields: Prisma.PembelianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PembelianFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PembelianFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>
          }
          findFirst: {
            args: Prisma.PembelianFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PembelianFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>
          }
          findMany: {
            args: Prisma.PembelianFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>[]
          }
          create: {
            args: Prisma.PembelianCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>
          }
          createMany: {
            args: Prisma.PembelianCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PembelianDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>
          }
          update: {
            args: Prisma.PembelianUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>
          }
          deleteMany: {
            args: Prisma.PembelianDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PembelianUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PembelianUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>
          }
          aggregate: {
            args: Prisma.PembelianAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePembelian>
          }
          groupBy: {
            args: Prisma.PembelianGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PembelianGroupByOutputType>[]
          }
          count: {
            args: Prisma.PembelianCountArgs<ExtArgs>,
            result: $Utils.Optional<PembelianCountAggregateOutputType> | number
          }
        }
      }
      DetailPembelian: {
        payload: Prisma.$DetailPembelianPayload<ExtArgs>
        fields: Prisma.DetailPembelianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetailPembelianFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetailPembelianFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload>
          }
          findFirst: {
            args: Prisma.DetailPembelianFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetailPembelianFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload>
          }
          findMany: {
            args: Prisma.DetailPembelianFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload>[]
          }
          create: {
            args: Prisma.DetailPembelianCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload>
          }
          createMany: {
            args: Prisma.DetailPembelianCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DetailPembelianDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload>
          }
          update: {
            args: Prisma.DetailPembelianUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload>
          }
          deleteMany: {
            args: Prisma.DetailPembelianDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DetailPembelianUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DetailPembelianUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload>
          }
          aggregate: {
            args: Prisma.DetailPembelianAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDetailPembelian>
          }
          groupBy: {
            args: Prisma.DetailPembelianGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DetailPembelianGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetailPembelianCountArgs<ExtArgs>,
            result: $Utils.Optional<DetailPembelianCountAggregateOutputType> | number
          }
        }
      }
      Reservasi: {
        payload: Prisma.$ReservasiPayload<ExtArgs>
        fields: Prisma.ReservasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservasiFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservasiFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasiPayload>
          }
          findFirst: {
            args: Prisma.ReservasiFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservasiFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasiPayload>
          }
          findMany: {
            args: Prisma.ReservasiFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasiPayload>[]
          }
          create: {
            args: Prisma.ReservasiCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasiPayload>
          }
          createMany: {
            args: Prisma.ReservasiCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReservasiDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasiPayload>
          }
          update: {
            args: Prisma.ReservasiUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasiPayload>
          }
          deleteMany: {
            args: Prisma.ReservasiDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReservasiUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReservasiUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservasiPayload>
          }
          aggregate: {
            args: Prisma.ReservasiAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReservasi>
          }
          groupBy: {
            args: Prisma.ReservasiGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReservasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservasiCountArgs<ExtArgs>,
            result: $Utils.Optional<ReservasiCountAggregateOutputType> | number
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Pembelian: number
    Reservasi: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pembelian?: boolean | UserCountOutputTypeCountPembelianArgs
    Reservasi?: boolean | UserCountOutputTypeCountReservasiArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembelianWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReservasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasiWhereInput
  }



  /**
   * Count Type ProdukCountOutputType
   */

  export type ProdukCountOutputType = {
    DetailPembelian: number
  }

  export type ProdukCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DetailPembelian?: boolean | ProdukCountOutputTypeCountDetailPembelianArgs
  }

  // Custom InputTypes

  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukCountOutputType
     */
    select?: ProdukCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeCountDetailPembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailPembelianWhereInput
  }



  /**
   * Count Type PembelianCountOutputType
   */

  export type PembelianCountOutputType = {
    DetailPembelian: number
  }

  export type PembelianCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DetailPembelian?: boolean | PembelianCountOutputTypeCountDetailPembelianArgs
  }

  // Custom InputTypes

  /**
   * PembelianCountOutputType without action
   */
  export type PembelianCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembelianCountOutputType
     */
    select?: PembelianCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PembelianCountOutputType without action
   */
  export type PembelianCountOutputTypeCountDetailPembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailPembelianWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    UserID: number | null
  }

  export type UserSumAggregateOutputType = {
    UserID: number | null
  }

  export type UserMinAggregateOutputType = {
    UserID: number | null
    Nama: string | null
    Email: string | null
    PasswordHash: string | null
    Role: string | null
    Alamat: string | null
    JenisKelamin: string | null
    Username: string | null
  }

  export type UserMaxAggregateOutputType = {
    UserID: number | null
    Nama: string | null
    Email: string | null
    PasswordHash: string | null
    Role: string | null
    Alamat: string | null
    JenisKelamin: string | null
    Username: string | null
  }

  export type UserCountAggregateOutputType = {
    UserID: number
    Nama: number
    Email: number
    PasswordHash: number
    Role: number
    Alamat: number
    JenisKelamin: number
    Username: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    UserID?: true
  }

  export type UserSumAggregateInputType = {
    UserID?: true
  }

  export type UserMinAggregateInputType = {
    UserID?: true
    Nama?: true
    Email?: true
    PasswordHash?: true
    Role?: true
    Alamat?: true
    JenisKelamin?: true
    Username?: true
  }

  export type UserMaxAggregateInputType = {
    UserID?: true
    Nama?: true
    Email?: true
    PasswordHash?: true
    Role?: true
    Alamat?: true
    JenisKelamin?: true
    Username?: true
  }

  export type UserCountAggregateInputType = {
    UserID?: true
    Nama?: true
    Email?: true
    PasswordHash?: true
    Role?: true
    Alamat?: true
    JenisKelamin?: true
    Username?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    UserID: number
    Nama: string
    Email: string
    PasswordHash: string
    Role: string
    Alamat: string | null
    JenisKelamin: string | null
    Username: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    UserID?: boolean
    Nama?: boolean
    Email?: boolean
    PasswordHash?: boolean
    Role?: boolean
    Alamat?: boolean
    JenisKelamin?: boolean
    Username?: boolean
    Pembelian?: boolean | User$PembelianArgs<ExtArgs>
    Reservasi?: boolean | User$ReservasiArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    UserID?: boolean
    Nama?: boolean
    Email?: boolean
    PasswordHash?: boolean
    Role?: boolean
    Alamat?: boolean
    JenisKelamin?: boolean
    Username?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pembelian?: boolean | User$PembelianArgs<ExtArgs>
    Reservasi?: boolean | User$ReservasiArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Pembelian: Prisma.$PembelianPayload<ExtArgs>[]
      Reservasi: Prisma.$ReservasiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      UserID: number
      Nama: string
      Email: string
      PasswordHash: string
      Role: string
      Alamat: string | null
      JenisKelamin: string | null
      Username: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `UserID`
     * const userWithUserIDOnly = await prisma.user.findMany({ select: { UserID: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Pembelian<T extends User$PembelianArgs<ExtArgs> = {}>(args?: Subset<T, User$PembelianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, 'findMany'> | Null>;

    Reservasi<T extends User$ReservasiArgs<ExtArgs> = {}>(args?: Subset<T, User$ReservasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasiPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly UserID: FieldRef<"User", 'Int'>
    readonly Nama: FieldRef<"User", 'String'>
    readonly Email: FieldRef<"User", 'String'>
    readonly PasswordHash: FieldRef<"User", 'String'>
    readonly Role: FieldRef<"User", 'String'>
    readonly Alamat: FieldRef<"User", 'String'>
    readonly JenisKelamin: FieldRef<"User", 'String'>
    readonly Username: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
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
  }


  /**
   * User.Pembelian
   */
  export type User$PembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PembelianInclude<ExtArgs> | null
    where?: PembelianWhereInput
    orderBy?: PembelianOrderByWithRelationInput | PembelianOrderByWithRelationInput[]
    cursor?: PembelianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PembelianScalarFieldEnum | PembelianScalarFieldEnum[]
  }


  /**
   * User.Reservasi
   */
  export type User$ReservasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasi
     */
    select?: ReservasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasiInclude<ExtArgs> | null
    where?: ReservasiWhereInput
    orderBy?: ReservasiOrderByWithRelationInput | ReservasiOrderByWithRelationInput[]
    cursor?: ReservasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasiScalarFieldEnum | ReservasiScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Produk
   */

  export type AggregateProduk = {
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  export type ProdukAvgAggregateOutputType = {
    ProdukID: number | null
    Harga: number | null
    Stok: number | null
  }

  export type ProdukSumAggregateOutputType = {
    ProdukID: number | null
    Harga: number | null
    Stok: number | null
  }

  export type ProdukMinAggregateOutputType = {
    ProdukID: number | null
    NamaProduk: string | null
    Deskripsi: string | null
    Harga: number | null
    Stok: number | null
    Kategori: $Enums.KategoriEnum | null
  }

  export type ProdukMaxAggregateOutputType = {
    ProdukID: number | null
    NamaProduk: string | null
    Deskripsi: string | null
    Harga: number | null
    Stok: number | null
    Kategori: $Enums.KategoriEnum | null
  }

  export type ProdukCountAggregateOutputType = {
    ProdukID: number
    NamaProduk: number
    Deskripsi: number
    Harga: number
    Stok: number
    Kategori: number
    _all: number
  }


  export type ProdukAvgAggregateInputType = {
    ProdukID?: true
    Harga?: true
    Stok?: true
  }

  export type ProdukSumAggregateInputType = {
    ProdukID?: true
    Harga?: true
    Stok?: true
  }

  export type ProdukMinAggregateInputType = {
    ProdukID?: true
    NamaProduk?: true
    Deskripsi?: true
    Harga?: true
    Stok?: true
    Kategori?: true
  }

  export type ProdukMaxAggregateInputType = {
    ProdukID?: true
    NamaProduk?: true
    Deskripsi?: true
    Harga?: true
    Stok?: true
    Kategori?: true
  }

  export type ProdukCountAggregateInputType = {
    ProdukID?: true
    NamaProduk?: true
    Deskripsi?: true
    Harga?: true
    Stok?: true
    Kategori?: true
    _all?: true
  }

  export type ProdukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produk to aggregate.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produks
    **/
    _count?: true | ProdukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdukMaxAggregateInputType
  }

  export type GetProdukAggregateType<T extends ProdukAggregateArgs> = {
        [P in keyof T & keyof AggregateProduk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduk[P]>
      : GetScalarType<T[P], AggregateProduk[P]>
  }




  export type ProdukGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdukWhereInput
    orderBy?: ProdukOrderByWithAggregationInput | ProdukOrderByWithAggregationInput[]
    by: ProdukScalarFieldEnum[] | ProdukScalarFieldEnum
    having?: ProdukScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdukCountAggregateInputType | true
    _avg?: ProdukAvgAggregateInputType
    _sum?: ProdukSumAggregateInputType
    _min?: ProdukMinAggregateInputType
    _max?: ProdukMaxAggregateInputType
  }

  export type ProdukGroupByOutputType = {
    ProdukID: number
    NamaProduk: string
    Deskripsi: string
    Harga: number
    Stok: number
    Kategori: $Enums.KategoriEnum
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  type GetProdukGroupByPayload<T extends ProdukGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdukGroupByOutputType[P]>
            : GetScalarType<T[P], ProdukGroupByOutputType[P]>
        }
      >
    >


  export type ProdukSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProdukID?: boolean
    NamaProduk?: boolean
    Deskripsi?: boolean
    Harga?: boolean
    Stok?: boolean
    Kategori?: boolean
    DetailPembelian?: boolean | Produk$DetailPembelianArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>

  export type ProdukSelectScalar = {
    ProdukID?: boolean
    NamaProduk?: boolean
    Deskripsi?: boolean
    Harga?: boolean
    Stok?: boolean
    Kategori?: boolean
  }

  export type ProdukInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DetailPembelian?: boolean | Produk$DetailPembelianArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProdukPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produk"
    objects: {
      DetailPembelian: Prisma.$DetailPembelianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ProdukID: number
      NamaProduk: string
      Deskripsi: string
      Harga: number
      Stok: number
      Kategori: $Enums.KategoriEnum
    }, ExtArgs["result"]["produk"]>
    composites: {}
  }


  type ProdukGetPayload<S extends boolean | null | undefined | ProdukDefaultArgs> = $Result.GetResult<Prisma.$ProdukPayload, S>

  type ProdukCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProdukFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProdukCountAggregateInputType | true
    }

  export interface ProdukDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produk'], meta: { name: 'Produk' } }
    /**
     * Find zero or one Produk that matches the filter.
     * @param {ProdukFindUniqueArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProdukFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProdukFindUniqueArgs<ExtArgs>>
    ): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Produk that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProdukFindUniqueOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProdukFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProdukFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Produk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindFirstArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProdukFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProdukFindFirstArgs<ExtArgs>>
    ): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Produk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindFirstOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProdukFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProdukFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Produks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produks
     * const produks = await prisma.produk.findMany()
     * 
     * // Get first 10 Produks
     * const produks = await prisma.produk.findMany({ take: 10 })
     * 
     * // Only select the `ProdukID`
     * const produkWithProdukIDOnly = await prisma.produk.findMany({ select: { ProdukID: true } })
     * 
    **/
    findMany<T extends ProdukFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProdukFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Produk.
     * @param {ProdukCreateArgs} args - Arguments to create a Produk.
     * @example
     * // Create one Produk
     * const Produk = await prisma.produk.create({
     *   data: {
     *     // ... data to create a Produk
     *   }
     * })
     * 
    **/
    create<T extends ProdukCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProdukCreateArgs<ExtArgs>>
    ): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Produks.
     *     @param {ProdukCreateManyArgs} args - Arguments to create many Produks.
     *     @example
     *     // Create many Produks
     *     const produk = await prisma.produk.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProdukCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProdukCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produk.
     * @param {ProdukDeleteArgs} args - Arguments to delete one Produk.
     * @example
     * // Delete one Produk
     * const Produk = await prisma.produk.delete({
     *   where: {
     *     // ... filter to delete one Produk
     *   }
     * })
     * 
    **/
    delete<T extends ProdukDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProdukDeleteArgs<ExtArgs>>
    ): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Produk.
     * @param {ProdukUpdateArgs} args - Arguments to update one Produk.
     * @example
     * // Update one Produk
     * const produk = await prisma.produk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProdukUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProdukUpdateArgs<ExtArgs>>
    ): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Produks.
     * @param {ProdukDeleteManyArgs} args - Arguments to filter Produks to delete.
     * @example
     * // Delete a few Produks
     * const { count } = await prisma.produk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProdukDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProdukDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProdukUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProdukUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produk.
     * @param {ProdukUpsertArgs} args - Arguments to update or create a Produk.
     * @example
     * // Update or create a Produk
     * const produk = await prisma.produk.upsert({
     *   create: {
     *     // ... data to create a Produk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produk we want to update
     *   }
     * })
    **/
    upsert<T extends ProdukUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProdukUpsertArgs<ExtArgs>>
    ): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukCountArgs} args - Arguments to filter Produks to count.
     * @example
     * // Count the number of Produks
     * const count = await prisma.produk.count({
     *   where: {
     *     // ... the filter for the Produks we want to count
     *   }
     * })
    **/
    count<T extends ProdukCountArgs>(
      args?: Subset<T, ProdukCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdukAggregateArgs>(args: Subset<T, ProdukAggregateArgs>): Prisma.PrismaPromise<GetProdukAggregateType<T>>

    /**
     * Group by Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukGroupByArgs} args - Group by arguments.
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
      T extends ProdukGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdukGroupByArgs['orderBy'] }
        : { orderBy?: ProdukGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdukGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produk model
   */
  readonly fields: ProdukFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdukClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    DetailPembelian<T extends Produk$DetailPembelianArgs<ExtArgs> = {}>(args?: Subset<T, Produk$DetailPembelianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Produk model
   */ 
  interface ProdukFieldRefs {
    readonly ProdukID: FieldRef<"Produk", 'Int'>
    readonly NamaProduk: FieldRef<"Produk", 'String'>
    readonly Deskripsi: FieldRef<"Produk", 'String'>
    readonly Harga: FieldRef<"Produk", 'Float'>
    readonly Stok: FieldRef<"Produk", 'Int'>
    readonly Kategori: FieldRef<"Produk", 'KategoriEnum'>
  }
    

  // Custom InputTypes

  /**
   * Produk findUnique
   */
  export type ProdukFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where: ProdukWhereUniqueInput
  }


  /**
   * Produk findUniqueOrThrow
   */
  export type ProdukFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where: ProdukWhereUniqueInput
  }


  /**
   * Produk findFirst
   */
  export type ProdukFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produks.
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }


  /**
   * Produk findFirstOrThrow
   */
  export type ProdukFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produks.
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }


  /**
   * Produk findMany
   */
  export type ProdukFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produks to fetch.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produks.
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }


  /**
   * Produk create
   */
  export type ProdukCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * The data needed to create a Produk.
     */
    data: XOR<ProdukCreateInput, ProdukUncheckedCreateInput>
  }


  /**
   * Produk createMany
   */
  export type ProdukCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produks.
     */
    data: ProdukCreateManyInput | ProdukCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Produk update
   */
  export type ProdukUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * The data needed to update a Produk.
     */
    data: XOR<ProdukUpdateInput, ProdukUncheckedUpdateInput>
    /**
     * Choose, which Produk to update.
     */
    where: ProdukWhereUniqueInput
  }


  /**
   * Produk updateMany
   */
  export type ProdukUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produks.
     */
    data: XOR<ProdukUpdateManyMutationInput, ProdukUncheckedUpdateManyInput>
    /**
     * Filter which Produks to update
     */
    where?: ProdukWhereInput
  }


  /**
   * Produk upsert
   */
  export type ProdukUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * The filter to search for the Produk to update in case it exists.
     */
    where: ProdukWhereUniqueInput
    /**
     * In case the Produk found by the `where` argument doesn't exist, create a new Produk with this data.
     */
    create: XOR<ProdukCreateInput, ProdukUncheckedCreateInput>
    /**
     * In case the Produk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdukUpdateInput, ProdukUncheckedUpdateInput>
  }


  /**
   * Produk delete
   */
  export type ProdukDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter which Produk to delete.
     */
    where: ProdukWhereUniqueInput
  }


  /**
   * Produk deleteMany
   */
  export type ProdukDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produks to delete
     */
    where?: ProdukWhereInput
  }


  /**
   * Produk.DetailPembelian
   */
  export type Produk$DetailPembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    where?: DetailPembelianWhereInput
    orderBy?: DetailPembelianOrderByWithRelationInput | DetailPembelianOrderByWithRelationInput[]
    cursor?: DetailPembelianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailPembelianScalarFieldEnum | DetailPembelianScalarFieldEnum[]
  }


  /**
   * Produk without action
   */
  export type ProdukDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProdukInclude<ExtArgs> | null
  }



  /**
   * Model Pembelian
   */

  export type AggregatePembelian = {
    _count: PembelianCountAggregateOutputType | null
    _avg: PembelianAvgAggregateOutputType | null
    _sum: PembelianSumAggregateOutputType | null
    _min: PembelianMinAggregateOutputType | null
    _max: PembelianMaxAggregateOutputType | null
  }

  export type PembelianAvgAggregateOutputType = {
    PembelianID: number | null
    UserID: number | null
    TotalHarga: number | null
  }

  export type PembelianSumAggregateOutputType = {
    PembelianID: number | null
    UserID: number | null
    TotalHarga: number | null
  }

  export type PembelianMinAggregateOutputType = {
    PembelianID: number | null
    TanggalPembelian: Date | null
    UserID: number | null
    TotalHarga: number | null
  }

  export type PembelianMaxAggregateOutputType = {
    PembelianID: number | null
    TanggalPembelian: Date | null
    UserID: number | null
    TotalHarga: number | null
  }

  export type PembelianCountAggregateOutputType = {
    PembelianID: number
    TanggalPembelian: number
    UserID: number
    TotalHarga: number
    _all: number
  }


  export type PembelianAvgAggregateInputType = {
    PembelianID?: true
    UserID?: true
    TotalHarga?: true
  }

  export type PembelianSumAggregateInputType = {
    PembelianID?: true
    UserID?: true
    TotalHarga?: true
  }

  export type PembelianMinAggregateInputType = {
    PembelianID?: true
    TanggalPembelian?: true
    UserID?: true
    TotalHarga?: true
  }

  export type PembelianMaxAggregateInputType = {
    PembelianID?: true
    TanggalPembelian?: true
    UserID?: true
    TotalHarga?: true
  }

  export type PembelianCountAggregateInputType = {
    PembelianID?: true
    TanggalPembelian?: true
    UserID?: true
    TotalHarga?: true
    _all?: true
  }

  export type PembelianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembelian to aggregate.
     */
    where?: PembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelians to fetch.
     */
    orderBy?: PembelianOrderByWithRelationInput | PembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pembelians
    **/
    _count?: true | PembelianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PembelianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PembelianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PembelianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PembelianMaxAggregateInputType
  }

  export type GetPembelianAggregateType<T extends PembelianAggregateArgs> = {
        [P in keyof T & keyof AggregatePembelian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePembelian[P]>
      : GetScalarType<T[P], AggregatePembelian[P]>
  }




  export type PembelianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembelianWhereInput
    orderBy?: PembelianOrderByWithAggregationInput | PembelianOrderByWithAggregationInput[]
    by: PembelianScalarFieldEnum[] | PembelianScalarFieldEnum
    having?: PembelianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PembelianCountAggregateInputType | true
    _avg?: PembelianAvgAggregateInputType
    _sum?: PembelianSumAggregateInputType
    _min?: PembelianMinAggregateInputType
    _max?: PembelianMaxAggregateInputType
  }

  export type PembelianGroupByOutputType = {
    PembelianID: number
    TanggalPembelian: Date
    UserID: number
    TotalHarga: number
    _count: PembelianCountAggregateOutputType | null
    _avg: PembelianAvgAggregateOutputType | null
    _sum: PembelianSumAggregateOutputType | null
    _min: PembelianMinAggregateOutputType | null
    _max: PembelianMaxAggregateOutputType | null
  }

  type GetPembelianGroupByPayload<T extends PembelianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PembelianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PembelianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PembelianGroupByOutputType[P]>
            : GetScalarType<T[P], PembelianGroupByOutputType[P]>
        }
      >
    >


  export type PembelianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PembelianID?: boolean
    TanggalPembelian?: boolean
    UserID?: boolean
    TotalHarga?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    DetailPembelian?: boolean | Pembelian$DetailPembelianArgs<ExtArgs>
    _count?: boolean | PembelianCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembelian"]>

  export type PembelianSelectScalar = {
    PembelianID?: boolean
    TanggalPembelian?: boolean
    UserID?: boolean
    TotalHarga?: boolean
  }

  export type PembelianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    DetailPembelian?: boolean | Pembelian$DetailPembelianArgs<ExtArgs>
    _count?: boolean | PembelianCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PembelianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pembelian"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      DetailPembelian: Prisma.$DetailPembelianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      PembelianID: number
      TanggalPembelian: Date
      UserID: number
      TotalHarga: number
    }, ExtArgs["result"]["pembelian"]>
    composites: {}
  }


  type PembelianGetPayload<S extends boolean | null | undefined | PembelianDefaultArgs> = $Result.GetResult<Prisma.$PembelianPayload, S>

  type PembelianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PembelianFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PembelianCountAggregateInputType | true
    }

  export interface PembelianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pembelian'], meta: { name: 'Pembelian' } }
    /**
     * Find zero or one Pembelian that matches the filter.
     * @param {PembelianFindUniqueArgs} args - Arguments to find a Pembelian
     * @example
     * // Get one Pembelian
     * const pembelian = await prisma.pembelian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PembelianFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PembelianFindUniqueArgs<ExtArgs>>
    ): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pembelian that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PembelianFindUniqueOrThrowArgs} args - Arguments to find a Pembelian
     * @example
     * // Get one Pembelian
     * const pembelian = await prisma.pembelian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PembelianFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PembelianFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pembelian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianFindFirstArgs} args - Arguments to find a Pembelian
     * @example
     * // Get one Pembelian
     * const pembelian = await prisma.pembelian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PembelianFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PembelianFindFirstArgs<ExtArgs>>
    ): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pembelian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianFindFirstOrThrowArgs} args - Arguments to find a Pembelian
     * @example
     * // Get one Pembelian
     * const pembelian = await prisma.pembelian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PembelianFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PembelianFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pembelians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pembelians
     * const pembelians = await prisma.pembelian.findMany()
     * 
     * // Get first 10 Pembelians
     * const pembelians = await prisma.pembelian.findMany({ take: 10 })
     * 
     * // Only select the `PembelianID`
     * const pembelianWithPembelianIDOnly = await prisma.pembelian.findMany({ select: { PembelianID: true } })
     * 
    **/
    findMany<T extends PembelianFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PembelianFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pembelian.
     * @param {PembelianCreateArgs} args - Arguments to create a Pembelian.
     * @example
     * // Create one Pembelian
     * const Pembelian = await prisma.pembelian.create({
     *   data: {
     *     // ... data to create a Pembelian
     *   }
     * })
     * 
    **/
    create<T extends PembelianCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PembelianCreateArgs<ExtArgs>>
    ): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pembelians.
     *     @param {PembelianCreateManyArgs} args - Arguments to create many Pembelians.
     *     @example
     *     // Create many Pembelians
     *     const pembelian = await prisma.pembelian.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PembelianCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PembelianCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pembelian.
     * @param {PembelianDeleteArgs} args - Arguments to delete one Pembelian.
     * @example
     * // Delete one Pembelian
     * const Pembelian = await prisma.pembelian.delete({
     *   where: {
     *     // ... filter to delete one Pembelian
     *   }
     * })
     * 
    **/
    delete<T extends PembelianDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PembelianDeleteArgs<ExtArgs>>
    ): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pembelian.
     * @param {PembelianUpdateArgs} args - Arguments to update one Pembelian.
     * @example
     * // Update one Pembelian
     * const pembelian = await prisma.pembelian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PembelianUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PembelianUpdateArgs<ExtArgs>>
    ): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pembelians.
     * @param {PembelianDeleteManyArgs} args - Arguments to filter Pembelians to delete.
     * @example
     * // Delete a few Pembelians
     * const { count } = await prisma.pembelian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PembelianDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PembelianDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembelians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pembelians
     * const pembelian = await prisma.pembelian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PembelianUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PembelianUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pembelian.
     * @param {PembelianUpsertArgs} args - Arguments to update or create a Pembelian.
     * @example
     * // Update or create a Pembelian
     * const pembelian = await prisma.pembelian.upsert({
     *   create: {
     *     // ... data to create a Pembelian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pembelian we want to update
     *   }
     * })
    **/
    upsert<T extends PembelianUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PembelianUpsertArgs<ExtArgs>>
    ): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pembelians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianCountArgs} args - Arguments to filter Pembelians to count.
     * @example
     * // Count the number of Pembelians
     * const count = await prisma.pembelian.count({
     *   where: {
     *     // ... the filter for the Pembelians we want to count
     *   }
     * })
    **/
    count<T extends PembelianCountArgs>(
      args?: Subset<T, PembelianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PembelianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pembelian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PembelianAggregateArgs>(args: Subset<T, PembelianAggregateArgs>): Prisma.PrismaPromise<GetPembelianAggregateType<T>>

    /**
     * Group by Pembelian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianGroupByArgs} args - Group by arguments.
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
      T extends PembelianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PembelianGroupByArgs['orderBy'] }
        : { orderBy?: PembelianGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PembelianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPembelianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pembelian model
   */
  readonly fields: PembelianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pembelian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PembelianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    DetailPembelian<T extends Pembelian$DetailPembelianArgs<ExtArgs> = {}>(args?: Subset<T, Pembelian$DetailPembelianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Pembelian model
   */ 
  interface PembelianFieldRefs {
    readonly PembelianID: FieldRef<"Pembelian", 'Int'>
    readonly TanggalPembelian: FieldRef<"Pembelian", 'DateTime'>
    readonly UserID: FieldRef<"Pembelian", 'Int'>
    readonly TotalHarga: FieldRef<"Pembelian", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * Pembelian findUnique
   */
  export type PembelianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * Filter, which Pembelian to fetch.
     */
    where: PembelianWhereUniqueInput
  }


  /**
   * Pembelian findUniqueOrThrow
   */
  export type PembelianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * Filter, which Pembelian to fetch.
     */
    where: PembelianWhereUniqueInput
  }


  /**
   * Pembelian findFirst
   */
  export type PembelianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * Filter, which Pembelian to fetch.
     */
    where?: PembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelians to fetch.
     */
    orderBy?: PembelianOrderByWithRelationInput | PembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembelians.
     */
    cursor?: PembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembelians.
     */
    distinct?: PembelianScalarFieldEnum | PembelianScalarFieldEnum[]
  }


  /**
   * Pembelian findFirstOrThrow
   */
  export type PembelianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * Filter, which Pembelian to fetch.
     */
    where?: PembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelians to fetch.
     */
    orderBy?: PembelianOrderByWithRelationInput | PembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembelians.
     */
    cursor?: PembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembelians.
     */
    distinct?: PembelianScalarFieldEnum | PembelianScalarFieldEnum[]
  }


  /**
   * Pembelian findMany
   */
  export type PembelianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * Filter, which Pembelians to fetch.
     */
    where?: PembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelians to fetch.
     */
    orderBy?: PembelianOrderByWithRelationInput | PembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pembelians.
     */
    cursor?: PembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelians.
     */
    skip?: number
    distinct?: PembelianScalarFieldEnum | PembelianScalarFieldEnum[]
  }


  /**
   * Pembelian create
   */
  export type PembelianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * The data needed to create a Pembelian.
     */
    data: XOR<PembelianCreateInput, PembelianUncheckedCreateInput>
  }


  /**
   * Pembelian createMany
   */
  export type PembelianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pembelians.
     */
    data: PembelianCreateManyInput | PembelianCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Pembelian update
   */
  export type PembelianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * The data needed to update a Pembelian.
     */
    data: XOR<PembelianUpdateInput, PembelianUncheckedUpdateInput>
    /**
     * Choose, which Pembelian to update.
     */
    where: PembelianWhereUniqueInput
  }


  /**
   * Pembelian updateMany
   */
  export type PembelianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pembelians.
     */
    data: XOR<PembelianUpdateManyMutationInput, PembelianUncheckedUpdateManyInput>
    /**
     * Filter which Pembelians to update
     */
    where?: PembelianWhereInput
  }


  /**
   * Pembelian upsert
   */
  export type PembelianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * The filter to search for the Pembelian to update in case it exists.
     */
    where: PembelianWhereUniqueInput
    /**
     * In case the Pembelian found by the `where` argument doesn't exist, create a new Pembelian with this data.
     */
    create: XOR<PembelianCreateInput, PembelianUncheckedCreateInput>
    /**
     * In case the Pembelian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PembelianUpdateInput, PembelianUncheckedUpdateInput>
  }


  /**
   * Pembelian delete
   */
  export type PembelianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * Filter which Pembelian to delete.
     */
    where: PembelianWhereUniqueInput
  }


  /**
   * Pembelian deleteMany
   */
  export type PembelianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembelians to delete
     */
    where?: PembelianWhereInput
  }


  /**
   * Pembelian.DetailPembelian
   */
  export type Pembelian$DetailPembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    where?: DetailPembelianWhereInput
    orderBy?: DetailPembelianOrderByWithRelationInput | DetailPembelianOrderByWithRelationInput[]
    cursor?: DetailPembelianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailPembelianScalarFieldEnum | DetailPembelianScalarFieldEnum[]
  }


  /**
   * Pembelian without action
   */
  export type PembelianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PembelianInclude<ExtArgs> | null
  }



  /**
   * Model DetailPembelian
   */

  export type AggregateDetailPembelian = {
    _count: DetailPembelianCountAggregateOutputType | null
    _avg: DetailPembelianAvgAggregateOutputType | null
    _sum: DetailPembelianSumAggregateOutputType | null
    _min: DetailPembelianMinAggregateOutputType | null
    _max: DetailPembelianMaxAggregateOutputType | null
  }

  export type DetailPembelianAvgAggregateOutputType = {
    DetailID: number | null
    PembelianID: number | null
    ProdukID: number | null
    Jumlah: number | null
    Subtotal: number | null
  }

  export type DetailPembelianSumAggregateOutputType = {
    DetailID: number | null
    PembelianID: number | null
    ProdukID: number | null
    Jumlah: number | null
    Subtotal: number | null
  }

  export type DetailPembelianMinAggregateOutputType = {
    DetailID: number | null
    PembelianID: number | null
    ProdukID: number | null
    Jumlah: number | null
    Subtotal: number | null
  }

  export type DetailPembelianMaxAggregateOutputType = {
    DetailID: number | null
    PembelianID: number | null
    ProdukID: number | null
    Jumlah: number | null
    Subtotal: number | null
  }

  export type DetailPembelianCountAggregateOutputType = {
    DetailID: number
    PembelianID: number
    ProdukID: number
    Jumlah: number
    Subtotal: number
    _all: number
  }


  export type DetailPembelianAvgAggregateInputType = {
    DetailID?: true
    PembelianID?: true
    ProdukID?: true
    Jumlah?: true
    Subtotal?: true
  }

  export type DetailPembelianSumAggregateInputType = {
    DetailID?: true
    PembelianID?: true
    ProdukID?: true
    Jumlah?: true
    Subtotal?: true
  }

  export type DetailPembelianMinAggregateInputType = {
    DetailID?: true
    PembelianID?: true
    ProdukID?: true
    Jumlah?: true
    Subtotal?: true
  }

  export type DetailPembelianMaxAggregateInputType = {
    DetailID?: true
    PembelianID?: true
    ProdukID?: true
    Jumlah?: true
    Subtotal?: true
  }

  export type DetailPembelianCountAggregateInputType = {
    DetailID?: true
    PembelianID?: true
    ProdukID?: true
    Jumlah?: true
    Subtotal?: true
    _all?: true
  }

  export type DetailPembelianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailPembelian to aggregate.
     */
    where?: DetailPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPembelians to fetch.
     */
    orderBy?: DetailPembelianOrderByWithRelationInput | DetailPembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetailPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetailPembelians
    **/
    _count?: true | DetailPembelianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetailPembelianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetailPembelianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailPembelianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailPembelianMaxAggregateInputType
  }

  export type GetDetailPembelianAggregateType<T extends DetailPembelianAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailPembelian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailPembelian[P]>
      : GetScalarType<T[P], AggregateDetailPembelian[P]>
  }




  export type DetailPembelianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailPembelianWhereInput
    orderBy?: DetailPembelianOrderByWithAggregationInput | DetailPembelianOrderByWithAggregationInput[]
    by: DetailPembelianScalarFieldEnum[] | DetailPembelianScalarFieldEnum
    having?: DetailPembelianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailPembelianCountAggregateInputType | true
    _avg?: DetailPembelianAvgAggregateInputType
    _sum?: DetailPembelianSumAggregateInputType
    _min?: DetailPembelianMinAggregateInputType
    _max?: DetailPembelianMaxAggregateInputType
  }

  export type DetailPembelianGroupByOutputType = {
    DetailID: number
    PembelianID: number
    ProdukID: number
    Jumlah: number
    Subtotal: number
    _count: DetailPembelianCountAggregateOutputType | null
    _avg: DetailPembelianAvgAggregateOutputType | null
    _sum: DetailPembelianSumAggregateOutputType | null
    _min: DetailPembelianMinAggregateOutputType | null
    _max: DetailPembelianMaxAggregateOutputType | null
  }

  type GetDetailPembelianGroupByPayload<T extends DetailPembelianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailPembelianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailPembelianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailPembelianGroupByOutputType[P]>
            : GetScalarType<T[P], DetailPembelianGroupByOutputType[P]>
        }
      >
    >


  export type DetailPembelianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DetailID?: boolean
    PembelianID?: boolean
    ProdukID?: boolean
    Jumlah?: boolean
    Subtotal?: boolean
    Produk?: boolean | ProdukDefaultArgs<ExtArgs>
    Pembelian?: boolean | PembelianDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailPembelian"]>

  export type DetailPembelianSelectScalar = {
    DetailID?: boolean
    PembelianID?: boolean
    ProdukID?: boolean
    Jumlah?: boolean
    Subtotal?: boolean
  }

  export type DetailPembelianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produk?: boolean | ProdukDefaultArgs<ExtArgs>
    Pembelian?: boolean | PembelianDefaultArgs<ExtArgs>
  }


  export type $DetailPembelianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetailPembelian"
    objects: {
      Produk: Prisma.$ProdukPayload<ExtArgs>
      Pembelian: Prisma.$PembelianPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      DetailID: number
      PembelianID: number
      ProdukID: number
      Jumlah: number
      Subtotal: number
    }, ExtArgs["result"]["detailPembelian"]>
    composites: {}
  }


  type DetailPembelianGetPayload<S extends boolean | null | undefined | DetailPembelianDefaultArgs> = $Result.GetResult<Prisma.$DetailPembelianPayload, S>

  type DetailPembelianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DetailPembelianFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DetailPembelianCountAggregateInputType | true
    }

  export interface DetailPembelianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetailPembelian'], meta: { name: 'DetailPembelian' } }
    /**
     * Find zero or one DetailPembelian that matches the filter.
     * @param {DetailPembelianFindUniqueArgs} args - Arguments to find a DetailPembelian
     * @example
     * // Get one DetailPembelian
     * const detailPembelian = await prisma.detailPembelian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DetailPembelianFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DetailPembelianFindUniqueArgs<ExtArgs>>
    ): Prisma__DetailPembelianClient<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DetailPembelian that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DetailPembelianFindUniqueOrThrowArgs} args - Arguments to find a DetailPembelian
     * @example
     * // Get one DetailPembelian
     * const detailPembelian = await prisma.detailPembelian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DetailPembelianFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DetailPembelianFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DetailPembelianClient<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DetailPembelian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPembelianFindFirstArgs} args - Arguments to find a DetailPembelian
     * @example
     * // Get one DetailPembelian
     * const detailPembelian = await prisma.detailPembelian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DetailPembelianFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DetailPembelianFindFirstArgs<ExtArgs>>
    ): Prisma__DetailPembelianClient<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DetailPembelian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPembelianFindFirstOrThrowArgs} args - Arguments to find a DetailPembelian
     * @example
     * // Get one DetailPembelian
     * const detailPembelian = await prisma.detailPembelian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DetailPembelianFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DetailPembelianFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DetailPembelianClient<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DetailPembelians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPembelianFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailPembelians
     * const detailPembelians = await prisma.detailPembelian.findMany()
     * 
     * // Get first 10 DetailPembelians
     * const detailPembelians = await prisma.detailPembelian.findMany({ take: 10 })
     * 
     * // Only select the `DetailID`
     * const detailPembelianWithDetailIDOnly = await prisma.detailPembelian.findMany({ select: { DetailID: true } })
     * 
    **/
    findMany<T extends DetailPembelianFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DetailPembelianFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DetailPembelian.
     * @param {DetailPembelianCreateArgs} args - Arguments to create a DetailPembelian.
     * @example
     * // Create one DetailPembelian
     * const DetailPembelian = await prisma.detailPembelian.create({
     *   data: {
     *     // ... data to create a DetailPembelian
     *   }
     * })
     * 
    **/
    create<T extends DetailPembelianCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DetailPembelianCreateArgs<ExtArgs>>
    ): Prisma__DetailPembelianClient<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DetailPembelians.
     *     @param {DetailPembelianCreateManyArgs} args - Arguments to create many DetailPembelians.
     *     @example
     *     // Create many DetailPembelians
     *     const detailPembelian = await prisma.detailPembelian.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DetailPembelianCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DetailPembelianCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetailPembelian.
     * @param {DetailPembelianDeleteArgs} args - Arguments to delete one DetailPembelian.
     * @example
     * // Delete one DetailPembelian
     * const DetailPembelian = await prisma.detailPembelian.delete({
     *   where: {
     *     // ... filter to delete one DetailPembelian
     *   }
     * })
     * 
    **/
    delete<T extends DetailPembelianDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DetailPembelianDeleteArgs<ExtArgs>>
    ): Prisma__DetailPembelianClient<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DetailPembelian.
     * @param {DetailPembelianUpdateArgs} args - Arguments to update one DetailPembelian.
     * @example
     * // Update one DetailPembelian
     * const detailPembelian = await prisma.detailPembelian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DetailPembelianUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DetailPembelianUpdateArgs<ExtArgs>>
    ): Prisma__DetailPembelianClient<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DetailPembelians.
     * @param {DetailPembelianDeleteManyArgs} args - Arguments to filter DetailPembelians to delete.
     * @example
     * // Delete a few DetailPembelians
     * const { count } = await prisma.detailPembelian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DetailPembelianDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DetailPembelianDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailPembelians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPembelianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailPembelians
     * const detailPembelian = await prisma.detailPembelian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DetailPembelianUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DetailPembelianUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetailPembelian.
     * @param {DetailPembelianUpsertArgs} args - Arguments to update or create a DetailPembelian.
     * @example
     * // Update or create a DetailPembelian
     * const detailPembelian = await prisma.detailPembelian.upsert({
     *   create: {
     *     // ... data to create a DetailPembelian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailPembelian we want to update
     *   }
     * })
    **/
    upsert<T extends DetailPembelianUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DetailPembelianUpsertArgs<ExtArgs>>
    ): Prisma__DetailPembelianClient<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DetailPembelians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPembelianCountArgs} args - Arguments to filter DetailPembelians to count.
     * @example
     * // Count the number of DetailPembelians
     * const count = await prisma.detailPembelian.count({
     *   where: {
     *     // ... the filter for the DetailPembelians we want to count
     *   }
     * })
    **/
    count<T extends DetailPembelianCountArgs>(
      args?: Subset<T, DetailPembelianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailPembelianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailPembelian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPembelianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetailPembelianAggregateArgs>(args: Subset<T, DetailPembelianAggregateArgs>): Prisma.PrismaPromise<GetDetailPembelianAggregateType<T>>

    /**
     * Group by DetailPembelian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPembelianGroupByArgs} args - Group by arguments.
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
      T extends DetailPembelianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailPembelianGroupByArgs['orderBy'] }
        : { orderBy?: DetailPembelianGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetailPembelianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailPembelianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetailPembelian model
   */
  readonly fields: DetailPembelianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetailPembelian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetailPembelianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Produk<T extends ProdukDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdukDefaultArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Pembelian<T extends PembelianDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PembelianDefaultArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the DetailPembelian model
   */ 
  interface DetailPembelianFieldRefs {
    readonly DetailID: FieldRef<"DetailPembelian", 'Int'>
    readonly PembelianID: FieldRef<"DetailPembelian", 'Int'>
    readonly ProdukID: FieldRef<"DetailPembelian", 'Int'>
    readonly Jumlah: FieldRef<"DetailPembelian", 'Int'>
    readonly Subtotal: FieldRef<"DetailPembelian", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * DetailPembelian findUnique
   */
  export type DetailPembelianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    /**
     * Filter, which DetailPembelian to fetch.
     */
    where: DetailPembelianWhereUniqueInput
  }


  /**
   * DetailPembelian findUniqueOrThrow
   */
  export type DetailPembelianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    /**
     * Filter, which DetailPembelian to fetch.
     */
    where: DetailPembelianWhereUniqueInput
  }


  /**
   * DetailPembelian findFirst
   */
  export type DetailPembelianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    /**
     * Filter, which DetailPembelian to fetch.
     */
    where?: DetailPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPembelians to fetch.
     */
    orderBy?: DetailPembelianOrderByWithRelationInput | DetailPembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailPembelians.
     */
    cursor?: DetailPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailPembelians.
     */
    distinct?: DetailPembelianScalarFieldEnum | DetailPembelianScalarFieldEnum[]
  }


  /**
   * DetailPembelian findFirstOrThrow
   */
  export type DetailPembelianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    /**
     * Filter, which DetailPembelian to fetch.
     */
    where?: DetailPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPembelians to fetch.
     */
    orderBy?: DetailPembelianOrderByWithRelationInput | DetailPembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailPembelians.
     */
    cursor?: DetailPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailPembelians.
     */
    distinct?: DetailPembelianScalarFieldEnum | DetailPembelianScalarFieldEnum[]
  }


  /**
   * DetailPembelian findMany
   */
  export type DetailPembelianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    /**
     * Filter, which DetailPembelians to fetch.
     */
    where?: DetailPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPembelians to fetch.
     */
    orderBy?: DetailPembelianOrderByWithRelationInput | DetailPembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetailPembelians.
     */
    cursor?: DetailPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPembelians.
     */
    skip?: number
    distinct?: DetailPembelianScalarFieldEnum | DetailPembelianScalarFieldEnum[]
  }


  /**
   * DetailPembelian create
   */
  export type DetailPembelianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    /**
     * The data needed to create a DetailPembelian.
     */
    data: XOR<DetailPembelianCreateInput, DetailPembelianUncheckedCreateInput>
  }


  /**
   * DetailPembelian createMany
   */
  export type DetailPembelianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetailPembelians.
     */
    data: DetailPembelianCreateManyInput | DetailPembelianCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DetailPembelian update
   */
  export type DetailPembelianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    /**
     * The data needed to update a DetailPembelian.
     */
    data: XOR<DetailPembelianUpdateInput, DetailPembelianUncheckedUpdateInput>
    /**
     * Choose, which DetailPembelian to update.
     */
    where: DetailPembelianWhereUniqueInput
  }


  /**
   * DetailPembelian updateMany
   */
  export type DetailPembelianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetailPembelians.
     */
    data: XOR<DetailPembelianUpdateManyMutationInput, DetailPembelianUncheckedUpdateManyInput>
    /**
     * Filter which DetailPembelians to update
     */
    where?: DetailPembelianWhereInput
  }


  /**
   * DetailPembelian upsert
   */
  export type DetailPembelianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    /**
     * The filter to search for the DetailPembelian to update in case it exists.
     */
    where: DetailPembelianWhereUniqueInput
    /**
     * In case the DetailPembelian found by the `where` argument doesn't exist, create a new DetailPembelian with this data.
     */
    create: XOR<DetailPembelianCreateInput, DetailPembelianUncheckedCreateInput>
    /**
     * In case the DetailPembelian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetailPembelianUpdateInput, DetailPembelianUncheckedUpdateInput>
  }


  /**
   * DetailPembelian delete
   */
  export type DetailPembelianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    /**
     * Filter which DetailPembelian to delete.
     */
    where: DetailPembelianWhereUniqueInput
  }


  /**
   * DetailPembelian deleteMany
   */
  export type DetailPembelianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailPembelians to delete
     */
    where?: DetailPembelianWhereInput
  }


  /**
   * DetailPembelian without action
   */
  export type DetailPembelianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DetailPembelianInclude<ExtArgs> | null
  }



  /**
   * Model Reservasi
   */

  export type AggregateReservasi = {
    _count: ReservasiCountAggregateOutputType | null
    _avg: ReservasiAvgAggregateOutputType | null
    _sum: ReservasiSumAggregateOutputType | null
    _min: ReservasiMinAggregateOutputType | null
    _max: ReservasiMaxAggregateOutputType | null
  }

  export type ReservasiAvgAggregateOutputType = {
    ReservasiID: number | null
    UserID: number | null
    JumlahOrang: number | null
  }

  export type ReservasiSumAggregateOutputType = {
    ReservasiID: number | null
    UserID: number | null
    JumlahOrang: number | null
  }

  export type ReservasiMinAggregateOutputType = {
    ReservasiID: number | null
    TanggalReservasi: Date | null
    UserID: number | null
    JumlahOrang: number | null
    Status: string | null
  }

  export type ReservasiMaxAggregateOutputType = {
    ReservasiID: number | null
    TanggalReservasi: Date | null
    UserID: number | null
    JumlahOrang: number | null
    Status: string | null
  }

  export type ReservasiCountAggregateOutputType = {
    ReservasiID: number
    TanggalReservasi: number
    UserID: number
    JumlahOrang: number
    Status: number
    _all: number
  }


  export type ReservasiAvgAggregateInputType = {
    ReservasiID?: true
    UserID?: true
    JumlahOrang?: true
  }

  export type ReservasiSumAggregateInputType = {
    ReservasiID?: true
    UserID?: true
    JumlahOrang?: true
  }

  export type ReservasiMinAggregateInputType = {
    ReservasiID?: true
    TanggalReservasi?: true
    UserID?: true
    JumlahOrang?: true
    Status?: true
  }

  export type ReservasiMaxAggregateInputType = {
    ReservasiID?: true
    TanggalReservasi?: true
    UserID?: true
    JumlahOrang?: true
    Status?: true
  }

  export type ReservasiCountAggregateInputType = {
    ReservasiID?: true
    TanggalReservasi?: true
    UserID?: true
    JumlahOrang?: true
    Status?: true
    _all?: true
  }

  export type ReservasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservasi to aggregate.
     */
    where?: ReservasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservasis to fetch.
     */
    orderBy?: ReservasiOrderByWithRelationInput | ReservasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservasis
    **/
    _count?: true | ReservasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservasiMaxAggregateInputType
  }

  export type GetReservasiAggregateType<T extends ReservasiAggregateArgs> = {
        [P in keyof T & keyof AggregateReservasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservasi[P]>
      : GetScalarType<T[P], AggregateReservasi[P]>
  }




  export type ReservasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasiWhereInput
    orderBy?: ReservasiOrderByWithAggregationInput | ReservasiOrderByWithAggregationInput[]
    by: ReservasiScalarFieldEnum[] | ReservasiScalarFieldEnum
    having?: ReservasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservasiCountAggregateInputType | true
    _avg?: ReservasiAvgAggregateInputType
    _sum?: ReservasiSumAggregateInputType
    _min?: ReservasiMinAggregateInputType
    _max?: ReservasiMaxAggregateInputType
  }

  export type ReservasiGroupByOutputType = {
    ReservasiID: number
    TanggalReservasi: Date
    UserID: number
    JumlahOrang: number
    Status: string
    _count: ReservasiCountAggregateOutputType | null
    _avg: ReservasiAvgAggregateOutputType | null
    _sum: ReservasiSumAggregateOutputType | null
    _min: ReservasiMinAggregateOutputType | null
    _max: ReservasiMaxAggregateOutputType | null
  }

  type GetReservasiGroupByPayload<T extends ReservasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservasiGroupByOutputType[P]>
            : GetScalarType<T[P], ReservasiGroupByOutputType[P]>
        }
      >
    >


  export type ReservasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ReservasiID?: boolean
    TanggalReservasi?: boolean
    UserID?: boolean
    JumlahOrang?: boolean
    Status?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservasi"]>

  export type ReservasiSelectScalar = {
    ReservasiID?: boolean
    TanggalReservasi?: boolean
    UserID?: boolean
    JumlahOrang?: boolean
    Status?: boolean
  }

  export type ReservasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ReservasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservasi"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ReservasiID: number
      TanggalReservasi: Date
      UserID: number
      JumlahOrang: number
      Status: string
    }, ExtArgs["result"]["reservasi"]>
    composites: {}
  }


  type ReservasiGetPayload<S extends boolean | null | undefined | ReservasiDefaultArgs> = $Result.GetResult<Prisma.$ReservasiPayload, S>

  type ReservasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReservasiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReservasiCountAggregateInputType | true
    }

  export interface ReservasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservasi'], meta: { name: 'Reservasi' } }
    /**
     * Find zero or one Reservasi that matches the filter.
     * @param {ReservasiFindUniqueArgs} args - Arguments to find a Reservasi
     * @example
     * // Get one Reservasi
     * const reservasi = await prisma.reservasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReservasiFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReservasiFindUniqueArgs<ExtArgs>>
    ): Prisma__ReservasiClient<$Result.GetResult<Prisma.$ReservasiPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Reservasi that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReservasiFindUniqueOrThrowArgs} args - Arguments to find a Reservasi
     * @example
     * // Get one Reservasi
     * const reservasi = await prisma.reservasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReservasiFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservasiFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReservasiClient<$Result.GetResult<Prisma.$ReservasiPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Reservasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasiFindFirstArgs} args - Arguments to find a Reservasi
     * @example
     * // Get one Reservasi
     * const reservasi = await prisma.reservasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReservasiFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservasiFindFirstArgs<ExtArgs>>
    ): Prisma__ReservasiClient<$Result.GetResult<Prisma.$ReservasiPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Reservasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasiFindFirstOrThrowArgs} args - Arguments to find a Reservasi
     * @example
     * // Get one Reservasi
     * const reservasi = await prisma.reservasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReservasiFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservasiFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReservasiClient<$Result.GetResult<Prisma.$ReservasiPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reservasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasiFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservasis
     * const reservasis = await prisma.reservasi.findMany()
     * 
     * // Get first 10 Reservasis
     * const reservasis = await prisma.reservasi.findMany({ take: 10 })
     * 
     * // Only select the `ReservasiID`
     * const reservasiWithReservasiIDOnly = await prisma.reservasi.findMany({ select: { ReservasiID: true } })
     * 
    **/
    findMany<T extends ReservasiFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservasiFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasiPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Reservasi.
     * @param {ReservasiCreateArgs} args - Arguments to create a Reservasi.
     * @example
     * // Create one Reservasi
     * const Reservasi = await prisma.reservasi.create({
     *   data: {
     *     // ... data to create a Reservasi
     *   }
     * })
     * 
    **/
    create<T extends ReservasiCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReservasiCreateArgs<ExtArgs>>
    ): Prisma__ReservasiClient<$Result.GetResult<Prisma.$ReservasiPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reservasis.
     *     @param {ReservasiCreateManyArgs} args - Arguments to create many Reservasis.
     *     @example
     *     // Create many Reservasis
     *     const reservasi = await prisma.reservasi.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReservasiCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservasiCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reservasi.
     * @param {ReservasiDeleteArgs} args - Arguments to delete one Reservasi.
     * @example
     * // Delete one Reservasi
     * const Reservasi = await prisma.reservasi.delete({
     *   where: {
     *     // ... filter to delete one Reservasi
     *   }
     * })
     * 
    **/
    delete<T extends ReservasiDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReservasiDeleteArgs<ExtArgs>>
    ): Prisma__ReservasiClient<$Result.GetResult<Prisma.$ReservasiPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Reservasi.
     * @param {ReservasiUpdateArgs} args - Arguments to update one Reservasi.
     * @example
     * // Update one Reservasi
     * const reservasi = await prisma.reservasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReservasiUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReservasiUpdateArgs<ExtArgs>>
    ): Prisma__ReservasiClient<$Result.GetResult<Prisma.$ReservasiPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reservasis.
     * @param {ReservasiDeleteManyArgs} args - Arguments to filter Reservasis to delete.
     * @example
     * // Delete a few Reservasis
     * const { count } = await prisma.reservasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReservasiDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservasiDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservasis
     * const reservasi = await prisma.reservasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReservasiUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReservasiUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservasi.
     * @param {ReservasiUpsertArgs} args - Arguments to update or create a Reservasi.
     * @example
     * // Update or create a Reservasi
     * const reservasi = await prisma.reservasi.upsert({
     *   create: {
     *     // ... data to create a Reservasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservasi we want to update
     *   }
     * })
    **/
    upsert<T extends ReservasiUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReservasiUpsertArgs<ExtArgs>>
    ): Prisma__ReservasiClient<$Result.GetResult<Prisma.$ReservasiPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reservasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasiCountArgs} args - Arguments to filter Reservasis to count.
     * @example
     * // Count the number of Reservasis
     * const count = await prisma.reservasi.count({
     *   where: {
     *     // ... the filter for the Reservasis we want to count
     *   }
     * })
    **/
    count<T extends ReservasiCountArgs>(
      args?: Subset<T, ReservasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservasiAggregateArgs>(args: Subset<T, ReservasiAggregateArgs>): Prisma.PrismaPromise<GetReservasiAggregateType<T>>

    /**
     * Group by Reservasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasiGroupByArgs} args - Group by arguments.
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
      T extends ReservasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservasiGroupByArgs['orderBy'] }
        : { orderBy?: ReservasiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservasi model
   */
  readonly fields: ReservasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Reservasi model
   */ 
  interface ReservasiFieldRefs {
    readonly ReservasiID: FieldRef<"Reservasi", 'Int'>
    readonly TanggalReservasi: FieldRef<"Reservasi", 'DateTime'>
    readonly UserID: FieldRef<"Reservasi", 'Int'>
    readonly JumlahOrang: FieldRef<"Reservasi", 'Int'>
    readonly Status: FieldRef<"Reservasi", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Reservasi findUnique
   */
  export type ReservasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasi
     */
    select?: ReservasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasiInclude<ExtArgs> | null
    /**
     * Filter, which Reservasi to fetch.
     */
    where: ReservasiWhereUniqueInput
  }


  /**
   * Reservasi findUniqueOrThrow
   */
  export type ReservasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasi
     */
    select?: ReservasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasiInclude<ExtArgs> | null
    /**
     * Filter, which Reservasi to fetch.
     */
    where: ReservasiWhereUniqueInput
  }


  /**
   * Reservasi findFirst
   */
  export type ReservasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasi
     */
    select?: ReservasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasiInclude<ExtArgs> | null
    /**
     * Filter, which Reservasi to fetch.
     */
    where?: ReservasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservasis to fetch.
     */
    orderBy?: ReservasiOrderByWithRelationInput | ReservasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservasis.
     */
    cursor?: ReservasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservasis.
     */
    distinct?: ReservasiScalarFieldEnum | ReservasiScalarFieldEnum[]
  }


  /**
   * Reservasi findFirstOrThrow
   */
  export type ReservasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasi
     */
    select?: ReservasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasiInclude<ExtArgs> | null
    /**
     * Filter, which Reservasi to fetch.
     */
    where?: ReservasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservasis to fetch.
     */
    orderBy?: ReservasiOrderByWithRelationInput | ReservasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservasis.
     */
    cursor?: ReservasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservasis.
     */
    distinct?: ReservasiScalarFieldEnum | ReservasiScalarFieldEnum[]
  }


  /**
   * Reservasi findMany
   */
  export type ReservasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasi
     */
    select?: ReservasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasiInclude<ExtArgs> | null
    /**
     * Filter, which Reservasis to fetch.
     */
    where?: ReservasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservasis to fetch.
     */
    orderBy?: ReservasiOrderByWithRelationInput | ReservasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservasis.
     */
    cursor?: ReservasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservasis.
     */
    skip?: number
    distinct?: ReservasiScalarFieldEnum | ReservasiScalarFieldEnum[]
  }


  /**
   * Reservasi create
   */
  export type ReservasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasi
     */
    select?: ReservasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasiInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservasi.
     */
    data: XOR<ReservasiCreateInput, ReservasiUncheckedCreateInput>
  }


  /**
   * Reservasi createMany
   */
  export type ReservasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservasis.
     */
    data: ReservasiCreateManyInput | ReservasiCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Reservasi update
   */
  export type ReservasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasi
     */
    select?: ReservasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasiInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservasi.
     */
    data: XOR<ReservasiUpdateInput, ReservasiUncheckedUpdateInput>
    /**
     * Choose, which Reservasi to update.
     */
    where: ReservasiWhereUniqueInput
  }


  /**
   * Reservasi updateMany
   */
  export type ReservasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservasis.
     */
    data: XOR<ReservasiUpdateManyMutationInput, ReservasiUncheckedUpdateManyInput>
    /**
     * Filter which Reservasis to update
     */
    where?: ReservasiWhereInput
  }


  /**
   * Reservasi upsert
   */
  export type ReservasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasi
     */
    select?: ReservasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasiInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservasi to update in case it exists.
     */
    where: ReservasiWhereUniqueInput
    /**
     * In case the Reservasi found by the `where` argument doesn't exist, create a new Reservasi with this data.
     */
    create: XOR<ReservasiCreateInput, ReservasiUncheckedCreateInput>
    /**
     * In case the Reservasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservasiUpdateInput, ReservasiUncheckedUpdateInput>
  }


  /**
   * Reservasi delete
   */
  export type ReservasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasi
     */
    select?: ReservasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasiInclude<ExtArgs> | null
    /**
     * Filter which Reservasi to delete.
     */
    where: ReservasiWhereUniqueInput
  }


  /**
   * Reservasi deleteMany
   */
  export type ReservasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservasis to delete
     */
    where?: ReservasiWhereInput
  }


  /**
   * Reservasi without action
   */
  export type ReservasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservasi
     */
    select?: ReservasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservasiInclude<ExtArgs> | null
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
    UserID: 'UserID',
    Nama: 'Nama',
    Email: 'Email',
    PasswordHash: 'PasswordHash',
    Role: 'Role',
    Alamat: 'Alamat',
    JenisKelamin: 'JenisKelamin',
    Username: 'Username'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProdukScalarFieldEnum: {
    ProdukID: 'ProdukID',
    NamaProduk: 'NamaProduk',
    Deskripsi: 'Deskripsi',
    Harga: 'Harga',
    Stok: 'Stok',
    Kategori: 'Kategori'
  };

  export type ProdukScalarFieldEnum = (typeof ProdukScalarFieldEnum)[keyof typeof ProdukScalarFieldEnum]


  export const PembelianScalarFieldEnum: {
    PembelianID: 'PembelianID',
    TanggalPembelian: 'TanggalPembelian',
    UserID: 'UserID',
    TotalHarga: 'TotalHarga'
  };

  export type PembelianScalarFieldEnum = (typeof PembelianScalarFieldEnum)[keyof typeof PembelianScalarFieldEnum]


  export const DetailPembelianScalarFieldEnum: {
    DetailID: 'DetailID',
    PembelianID: 'PembelianID',
    ProdukID: 'ProdukID',
    Jumlah: 'Jumlah',
    Subtotal: 'Subtotal'
  };

  export type DetailPembelianScalarFieldEnum = (typeof DetailPembelianScalarFieldEnum)[keyof typeof DetailPembelianScalarFieldEnum]


  export const ReservasiScalarFieldEnum: {
    ReservasiID: 'ReservasiID',
    TanggalReservasi: 'TanggalReservasi',
    UserID: 'UserID',
    JumlahOrang: 'JumlahOrang',
    Status: 'Status'
  };

  export type ReservasiScalarFieldEnum = (typeof ReservasiScalarFieldEnum)[keyof typeof ReservasiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'KategoriEnum'
   */
  export type EnumKategoriEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KategoriEnum'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    UserID?: IntFilter<"User"> | number
    Nama?: StringFilter<"User"> | string
    Email?: StringFilter<"User"> | string
    PasswordHash?: StringFilter<"User"> | string
    Role?: StringFilter<"User"> | string
    Alamat?: StringNullableFilter<"User"> | string | null
    JenisKelamin?: StringNullableFilter<"User"> | string | null
    Username?: StringFilter<"User"> | string
    Pembelian?: PembelianListRelationFilter
    Reservasi?: ReservasiListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    UserID?: SortOrder
    Nama?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    Role?: SortOrder
    Alamat?: SortOrderInput | SortOrder
    JenisKelamin?: SortOrderInput | SortOrder
    Username?: SortOrder
    Pembelian?: PembelianOrderByRelationAggregateInput
    Reservasi?: ReservasiOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    UserID?: number
    Email?: string
    Username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    Nama?: StringFilter<"User"> | string
    PasswordHash?: StringFilter<"User"> | string
    Role?: StringFilter<"User"> | string
    Alamat?: StringNullableFilter<"User"> | string | null
    JenisKelamin?: StringNullableFilter<"User"> | string | null
    Pembelian?: PembelianListRelationFilter
    Reservasi?: ReservasiListRelationFilter
  }, "UserID" | "Email" | "Username">

  export type UserOrderByWithAggregationInput = {
    UserID?: SortOrder
    Nama?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    Role?: SortOrder
    Alamat?: SortOrderInput | SortOrder
    JenisKelamin?: SortOrderInput | SortOrder
    Username?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    UserID?: IntWithAggregatesFilter<"User"> | number
    Nama?: StringWithAggregatesFilter<"User"> | string
    Email?: StringWithAggregatesFilter<"User"> | string
    PasswordHash?: StringWithAggregatesFilter<"User"> | string
    Role?: StringWithAggregatesFilter<"User"> | string
    Alamat?: StringNullableWithAggregatesFilter<"User"> | string | null
    JenisKelamin?: StringNullableWithAggregatesFilter<"User"> | string | null
    Username?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProdukWhereInput = {
    AND?: ProdukWhereInput | ProdukWhereInput[]
    OR?: ProdukWhereInput[]
    NOT?: ProdukWhereInput | ProdukWhereInput[]
    ProdukID?: IntFilter<"Produk"> | number
    NamaProduk?: StringFilter<"Produk"> | string
    Deskripsi?: StringFilter<"Produk"> | string
    Harga?: FloatFilter<"Produk"> | number
    Stok?: IntFilter<"Produk"> | number
    Kategori?: EnumKategoriEnumFilter<"Produk"> | $Enums.KategoriEnum
    DetailPembelian?: DetailPembelianListRelationFilter
  }

  export type ProdukOrderByWithRelationInput = {
    ProdukID?: SortOrder
    NamaProduk?: SortOrder
    Deskripsi?: SortOrder
    Harga?: SortOrder
    Stok?: SortOrder
    Kategori?: SortOrder
    DetailPembelian?: DetailPembelianOrderByRelationAggregateInput
  }

  export type ProdukWhereUniqueInput = Prisma.AtLeast<{
    ProdukID?: number
    AND?: ProdukWhereInput | ProdukWhereInput[]
    OR?: ProdukWhereInput[]
    NOT?: ProdukWhereInput | ProdukWhereInput[]
    NamaProduk?: StringFilter<"Produk"> | string
    Deskripsi?: StringFilter<"Produk"> | string
    Harga?: FloatFilter<"Produk"> | number
    Stok?: IntFilter<"Produk"> | number
    Kategori?: EnumKategoriEnumFilter<"Produk"> | $Enums.KategoriEnum
    DetailPembelian?: DetailPembelianListRelationFilter
  }, "ProdukID">

  export type ProdukOrderByWithAggregationInput = {
    ProdukID?: SortOrder
    NamaProduk?: SortOrder
    Deskripsi?: SortOrder
    Harga?: SortOrder
    Stok?: SortOrder
    Kategori?: SortOrder
    _count?: ProdukCountOrderByAggregateInput
    _avg?: ProdukAvgOrderByAggregateInput
    _max?: ProdukMaxOrderByAggregateInput
    _min?: ProdukMinOrderByAggregateInput
    _sum?: ProdukSumOrderByAggregateInput
  }

  export type ProdukScalarWhereWithAggregatesInput = {
    AND?: ProdukScalarWhereWithAggregatesInput | ProdukScalarWhereWithAggregatesInput[]
    OR?: ProdukScalarWhereWithAggregatesInput[]
    NOT?: ProdukScalarWhereWithAggregatesInput | ProdukScalarWhereWithAggregatesInput[]
    ProdukID?: IntWithAggregatesFilter<"Produk"> | number
    NamaProduk?: StringWithAggregatesFilter<"Produk"> | string
    Deskripsi?: StringWithAggregatesFilter<"Produk"> | string
    Harga?: FloatWithAggregatesFilter<"Produk"> | number
    Stok?: IntWithAggregatesFilter<"Produk"> | number
    Kategori?: EnumKategoriEnumWithAggregatesFilter<"Produk"> | $Enums.KategoriEnum
  }

  export type PembelianWhereInput = {
    AND?: PembelianWhereInput | PembelianWhereInput[]
    OR?: PembelianWhereInput[]
    NOT?: PembelianWhereInput | PembelianWhereInput[]
    PembelianID?: IntFilter<"Pembelian"> | number
    TanggalPembelian?: DateTimeFilter<"Pembelian"> | Date | string
    UserID?: IntFilter<"Pembelian"> | number
    TotalHarga?: FloatFilter<"Pembelian"> | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    DetailPembelian?: DetailPembelianListRelationFilter
  }

  export type PembelianOrderByWithRelationInput = {
    PembelianID?: SortOrder
    TanggalPembelian?: SortOrder
    UserID?: SortOrder
    TotalHarga?: SortOrder
    User?: UserOrderByWithRelationInput
    DetailPembelian?: DetailPembelianOrderByRelationAggregateInput
  }

  export type PembelianWhereUniqueInput = Prisma.AtLeast<{
    PembelianID?: number
    AND?: PembelianWhereInput | PembelianWhereInput[]
    OR?: PembelianWhereInput[]
    NOT?: PembelianWhereInput | PembelianWhereInput[]
    TanggalPembelian?: DateTimeFilter<"Pembelian"> | Date | string
    UserID?: IntFilter<"Pembelian"> | number
    TotalHarga?: FloatFilter<"Pembelian"> | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    DetailPembelian?: DetailPembelianListRelationFilter
  }, "PembelianID">

  export type PembelianOrderByWithAggregationInput = {
    PembelianID?: SortOrder
    TanggalPembelian?: SortOrder
    UserID?: SortOrder
    TotalHarga?: SortOrder
    _count?: PembelianCountOrderByAggregateInput
    _avg?: PembelianAvgOrderByAggregateInput
    _max?: PembelianMaxOrderByAggregateInput
    _min?: PembelianMinOrderByAggregateInput
    _sum?: PembelianSumOrderByAggregateInput
  }

  export type PembelianScalarWhereWithAggregatesInput = {
    AND?: PembelianScalarWhereWithAggregatesInput | PembelianScalarWhereWithAggregatesInput[]
    OR?: PembelianScalarWhereWithAggregatesInput[]
    NOT?: PembelianScalarWhereWithAggregatesInput | PembelianScalarWhereWithAggregatesInput[]
    PembelianID?: IntWithAggregatesFilter<"Pembelian"> | number
    TanggalPembelian?: DateTimeWithAggregatesFilter<"Pembelian"> | Date | string
    UserID?: IntWithAggregatesFilter<"Pembelian"> | number
    TotalHarga?: FloatWithAggregatesFilter<"Pembelian"> | number
  }

  export type DetailPembelianWhereInput = {
    AND?: DetailPembelianWhereInput | DetailPembelianWhereInput[]
    OR?: DetailPembelianWhereInput[]
    NOT?: DetailPembelianWhereInput | DetailPembelianWhereInput[]
    DetailID?: IntFilter<"DetailPembelian"> | number
    PembelianID?: IntFilter<"DetailPembelian"> | number
    ProdukID?: IntFilter<"DetailPembelian"> | number
    Jumlah?: IntFilter<"DetailPembelian"> | number
    Subtotal?: FloatFilter<"DetailPembelian"> | number
    Produk?: XOR<ProdukRelationFilter, ProdukWhereInput>
    Pembelian?: XOR<PembelianRelationFilter, PembelianWhereInput>
  }

  export type DetailPembelianOrderByWithRelationInput = {
    DetailID?: SortOrder
    PembelianID?: SortOrder
    ProdukID?: SortOrder
    Jumlah?: SortOrder
    Subtotal?: SortOrder
    Produk?: ProdukOrderByWithRelationInput
    Pembelian?: PembelianOrderByWithRelationInput
  }

  export type DetailPembelianWhereUniqueInput = Prisma.AtLeast<{
    DetailID?: number
    AND?: DetailPembelianWhereInput | DetailPembelianWhereInput[]
    OR?: DetailPembelianWhereInput[]
    NOT?: DetailPembelianWhereInput | DetailPembelianWhereInput[]
    PembelianID?: IntFilter<"DetailPembelian"> | number
    ProdukID?: IntFilter<"DetailPembelian"> | number
    Jumlah?: IntFilter<"DetailPembelian"> | number
    Subtotal?: FloatFilter<"DetailPembelian"> | number
    Produk?: XOR<ProdukRelationFilter, ProdukWhereInput>
    Pembelian?: XOR<PembelianRelationFilter, PembelianWhereInput>
  }, "DetailID">

  export type DetailPembelianOrderByWithAggregationInput = {
    DetailID?: SortOrder
    PembelianID?: SortOrder
    ProdukID?: SortOrder
    Jumlah?: SortOrder
    Subtotal?: SortOrder
    _count?: DetailPembelianCountOrderByAggregateInput
    _avg?: DetailPembelianAvgOrderByAggregateInput
    _max?: DetailPembelianMaxOrderByAggregateInput
    _min?: DetailPembelianMinOrderByAggregateInput
    _sum?: DetailPembelianSumOrderByAggregateInput
  }

  export type DetailPembelianScalarWhereWithAggregatesInput = {
    AND?: DetailPembelianScalarWhereWithAggregatesInput | DetailPembelianScalarWhereWithAggregatesInput[]
    OR?: DetailPembelianScalarWhereWithAggregatesInput[]
    NOT?: DetailPembelianScalarWhereWithAggregatesInput | DetailPembelianScalarWhereWithAggregatesInput[]
    DetailID?: IntWithAggregatesFilter<"DetailPembelian"> | number
    PembelianID?: IntWithAggregatesFilter<"DetailPembelian"> | number
    ProdukID?: IntWithAggregatesFilter<"DetailPembelian"> | number
    Jumlah?: IntWithAggregatesFilter<"DetailPembelian"> | number
    Subtotal?: FloatWithAggregatesFilter<"DetailPembelian"> | number
  }

  export type ReservasiWhereInput = {
    AND?: ReservasiWhereInput | ReservasiWhereInput[]
    OR?: ReservasiWhereInput[]
    NOT?: ReservasiWhereInput | ReservasiWhereInput[]
    ReservasiID?: IntFilter<"Reservasi"> | number
    TanggalReservasi?: DateTimeFilter<"Reservasi"> | Date | string
    UserID?: IntFilter<"Reservasi"> | number
    JumlahOrang?: IntFilter<"Reservasi"> | number
    Status?: StringFilter<"Reservasi"> | string
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ReservasiOrderByWithRelationInput = {
    ReservasiID?: SortOrder
    TanggalReservasi?: SortOrder
    UserID?: SortOrder
    JumlahOrang?: SortOrder
    Status?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type ReservasiWhereUniqueInput = Prisma.AtLeast<{
    ReservasiID?: number
    AND?: ReservasiWhereInput | ReservasiWhereInput[]
    OR?: ReservasiWhereInput[]
    NOT?: ReservasiWhereInput | ReservasiWhereInput[]
    TanggalReservasi?: DateTimeFilter<"Reservasi"> | Date | string
    UserID?: IntFilter<"Reservasi"> | number
    JumlahOrang?: IntFilter<"Reservasi"> | number
    Status?: StringFilter<"Reservasi"> | string
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "ReservasiID">

  export type ReservasiOrderByWithAggregationInput = {
    ReservasiID?: SortOrder
    TanggalReservasi?: SortOrder
    UserID?: SortOrder
    JumlahOrang?: SortOrder
    Status?: SortOrder
    _count?: ReservasiCountOrderByAggregateInput
    _avg?: ReservasiAvgOrderByAggregateInput
    _max?: ReservasiMaxOrderByAggregateInput
    _min?: ReservasiMinOrderByAggregateInput
    _sum?: ReservasiSumOrderByAggregateInput
  }

  export type ReservasiScalarWhereWithAggregatesInput = {
    AND?: ReservasiScalarWhereWithAggregatesInput | ReservasiScalarWhereWithAggregatesInput[]
    OR?: ReservasiScalarWhereWithAggregatesInput[]
    NOT?: ReservasiScalarWhereWithAggregatesInput | ReservasiScalarWhereWithAggregatesInput[]
    ReservasiID?: IntWithAggregatesFilter<"Reservasi"> | number
    TanggalReservasi?: DateTimeWithAggregatesFilter<"Reservasi"> | Date | string
    UserID?: IntWithAggregatesFilter<"Reservasi"> | number
    JumlahOrang?: IntWithAggregatesFilter<"Reservasi"> | number
    Status?: StringWithAggregatesFilter<"Reservasi"> | string
  }

  export type UserCreateInput = {
    Nama: string
    Email: string
    PasswordHash: string
    Role: string
    Alamat?: string | null
    JenisKelamin?: string | null
    Username: string
    Pembelian?: PembelianCreateNestedManyWithoutUserInput
    Reservasi?: ReservasiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    UserID?: number
    Nama: string
    Email: string
    PasswordHash: string
    Role: string
    Alamat?: string | null
    JenisKelamin?: string | null
    Username: string
    Pembelian?: PembelianUncheckedCreateNestedManyWithoutUserInput
    Reservasi?: ReservasiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    Nama?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Alamat?: NullableStringFieldUpdateOperationsInput | string | null
    JenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: StringFieldUpdateOperationsInput | string
    Pembelian?: PembelianUpdateManyWithoutUserNestedInput
    Reservasi?: ReservasiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Nama?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Alamat?: NullableStringFieldUpdateOperationsInput | string | null
    JenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: StringFieldUpdateOperationsInput | string
    Pembelian?: PembelianUncheckedUpdateManyWithoutUserNestedInput
    Reservasi?: ReservasiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    UserID?: number
    Nama: string
    Email: string
    PasswordHash: string
    Role: string
    Alamat?: string | null
    JenisKelamin?: string | null
    Username: string
  }

  export type UserUpdateManyMutationInput = {
    Nama?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Alamat?: NullableStringFieldUpdateOperationsInput | string | null
    JenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Nama?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Alamat?: NullableStringFieldUpdateOperationsInput | string | null
    JenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: StringFieldUpdateOperationsInput | string
  }

  export type ProdukCreateInput = {
    NamaProduk: string
    Deskripsi: string
    Harga: number
    Stok: number
    Kategori: $Enums.KategoriEnum
    DetailPembelian?: DetailPembelianCreateNestedManyWithoutProdukInput
  }

  export type ProdukUncheckedCreateInput = {
    ProdukID?: number
    NamaProduk: string
    Deskripsi: string
    Harga: number
    Stok: number
    Kategori: $Enums.KategoriEnum
    DetailPembelian?: DetailPembelianUncheckedCreateNestedManyWithoutProdukInput
  }

  export type ProdukUpdateInput = {
    NamaProduk?: StringFieldUpdateOperationsInput | string
    Deskripsi?: StringFieldUpdateOperationsInput | string
    Harga?: FloatFieldUpdateOperationsInput | number
    Stok?: IntFieldUpdateOperationsInput | number
    Kategori?: EnumKategoriEnumFieldUpdateOperationsInput | $Enums.KategoriEnum
    DetailPembelian?: DetailPembelianUpdateManyWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateInput = {
    ProdukID?: IntFieldUpdateOperationsInput | number
    NamaProduk?: StringFieldUpdateOperationsInput | string
    Deskripsi?: StringFieldUpdateOperationsInput | string
    Harga?: FloatFieldUpdateOperationsInput | number
    Stok?: IntFieldUpdateOperationsInput | number
    Kategori?: EnumKategoriEnumFieldUpdateOperationsInput | $Enums.KategoriEnum
    DetailPembelian?: DetailPembelianUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type ProdukCreateManyInput = {
    ProdukID?: number
    NamaProduk: string
    Deskripsi: string
    Harga: number
    Stok: number
    Kategori: $Enums.KategoriEnum
  }

  export type ProdukUpdateManyMutationInput = {
    NamaProduk?: StringFieldUpdateOperationsInput | string
    Deskripsi?: StringFieldUpdateOperationsInput | string
    Harga?: FloatFieldUpdateOperationsInput | number
    Stok?: IntFieldUpdateOperationsInput | number
    Kategori?: EnumKategoriEnumFieldUpdateOperationsInput | $Enums.KategoriEnum
  }

  export type ProdukUncheckedUpdateManyInput = {
    ProdukID?: IntFieldUpdateOperationsInput | number
    NamaProduk?: StringFieldUpdateOperationsInput | string
    Deskripsi?: StringFieldUpdateOperationsInput | string
    Harga?: FloatFieldUpdateOperationsInput | number
    Stok?: IntFieldUpdateOperationsInput | number
    Kategori?: EnumKategoriEnumFieldUpdateOperationsInput | $Enums.KategoriEnum
  }

  export type PembelianCreateInput = {
    TanggalPembelian: Date | string
    TotalHarga: number
    User: UserCreateNestedOneWithoutPembelianInput
    DetailPembelian?: DetailPembelianCreateNestedManyWithoutPembelianInput
  }

  export type PembelianUncheckedCreateInput = {
    PembelianID?: number
    TanggalPembelian: Date | string
    UserID: number
    TotalHarga: number
    DetailPembelian?: DetailPembelianUncheckedCreateNestedManyWithoutPembelianInput
  }

  export type PembelianUpdateInput = {
    TanggalPembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    TotalHarga?: FloatFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutPembelianNestedInput
    DetailPembelian?: DetailPembelianUpdateManyWithoutPembelianNestedInput
  }

  export type PembelianUncheckedUpdateInput = {
    PembelianID?: IntFieldUpdateOperationsInput | number
    TanggalPembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    UserID?: IntFieldUpdateOperationsInput | number
    TotalHarga?: FloatFieldUpdateOperationsInput | number
    DetailPembelian?: DetailPembelianUncheckedUpdateManyWithoutPembelianNestedInput
  }

  export type PembelianCreateManyInput = {
    PembelianID?: number
    TanggalPembelian: Date | string
    UserID: number
    TotalHarga: number
  }

  export type PembelianUpdateManyMutationInput = {
    TanggalPembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    TotalHarga?: FloatFieldUpdateOperationsInput | number
  }

  export type PembelianUncheckedUpdateManyInput = {
    PembelianID?: IntFieldUpdateOperationsInput | number
    TanggalPembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    UserID?: IntFieldUpdateOperationsInput | number
    TotalHarga?: FloatFieldUpdateOperationsInput | number
  }

  export type DetailPembelianCreateInput = {
    Jumlah: number
    Subtotal: number
    Produk: ProdukCreateNestedOneWithoutDetailPembelianInput
    Pembelian: PembelianCreateNestedOneWithoutDetailPembelianInput
  }

  export type DetailPembelianUncheckedCreateInput = {
    DetailID?: number
    PembelianID: number
    ProdukID: number
    Jumlah: number
    Subtotal: number
  }

  export type DetailPembelianUpdateInput = {
    Jumlah?: IntFieldUpdateOperationsInput | number
    Subtotal?: FloatFieldUpdateOperationsInput | number
    Produk?: ProdukUpdateOneRequiredWithoutDetailPembelianNestedInput
    Pembelian?: PembelianUpdateOneRequiredWithoutDetailPembelianNestedInput
  }

  export type DetailPembelianUncheckedUpdateInput = {
    DetailID?: IntFieldUpdateOperationsInput | number
    PembelianID?: IntFieldUpdateOperationsInput | number
    ProdukID?: IntFieldUpdateOperationsInput | number
    Jumlah?: IntFieldUpdateOperationsInput | number
    Subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type DetailPembelianCreateManyInput = {
    DetailID?: number
    PembelianID: number
    ProdukID: number
    Jumlah: number
    Subtotal: number
  }

  export type DetailPembelianUpdateManyMutationInput = {
    Jumlah?: IntFieldUpdateOperationsInput | number
    Subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type DetailPembelianUncheckedUpdateManyInput = {
    DetailID?: IntFieldUpdateOperationsInput | number
    PembelianID?: IntFieldUpdateOperationsInput | number
    ProdukID?: IntFieldUpdateOperationsInput | number
    Jumlah?: IntFieldUpdateOperationsInput | number
    Subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type ReservasiCreateInput = {
    TanggalReservasi: Date | string
    JumlahOrang: number
    Status: string
    User: UserCreateNestedOneWithoutReservasiInput
  }

  export type ReservasiUncheckedCreateInput = {
    ReservasiID?: number
    TanggalReservasi: Date | string
    UserID: number
    JumlahOrang: number
    Status: string
  }

  export type ReservasiUpdateInput = {
    TanggalReservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    JumlahOrang?: IntFieldUpdateOperationsInput | number
    Status?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutReservasiNestedInput
  }

  export type ReservasiUncheckedUpdateInput = {
    ReservasiID?: IntFieldUpdateOperationsInput | number
    TanggalReservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    UserID?: IntFieldUpdateOperationsInput | number
    JumlahOrang?: IntFieldUpdateOperationsInput | number
    Status?: StringFieldUpdateOperationsInput | string
  }

  export type ReservasiCreateManyInput = {
    ReservasiID?: number
    TanggalReservasi: Date | string
    UserID: number
    JumlahOrang: number
    Status: string
  }

  export type ReservasiUpdateManyMutationInput = {
    TanggalReservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    JumlahOrang?: IntFieldUpdateOperationsInput | number
    Status?: StringFieldUpdateOperationsInput | string
  }

  export type ReservasiUncheckedUpdateManyInput = {
    ReservasiID?: IntFieldUpdateOperationsInput | number
    TanggalReservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    UserID?: IntFieldUpdateOperationsInput | number
    JumlahOrang?: IntFieldUpdateOperationsInput | number
    Status?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PembelianListRelationFilter = {
    every?: PembelianWhereInput
    some?: PembelianWhereInput
    none?: PembelianWhereInput
  }

  export type ReservasiListRelationFilter = {
    every?: ReservasiWhereInput
    some?: ReservasiWhereInput
    none?: ReservasiWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PembelianOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservasiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    UserID?: SortOrder
    Nama?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    Role?: SortOrder
    Alamat?: SortOrder
    JenisKelamin?: SortOrder
    Username?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    UserID?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    UserID?: SortOrder
    Nama?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    Role?: SortOrder
    Alamat?: SortOrder
    JenisKelamin?: SortOrder
    Username?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    UserID?: SortOrder
    Nama?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    Role?: SortOrder
    Alamat?: SortOrder
    JenisKelamin?: SortOrder
    Username?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    UserID?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumKategoriEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.KategoriEnum | EnumKategoriEnumFieldRefInput<$PrismaModel>
    in?: $Enums.KategoriEnum[]
    notIn?: $Enums.KategoriEnum[]
    not?: NestedEnumKategoriEnumFilter<$PrismaModel> | $Enums.KategoriEnum
  }

  export type DetailPembelianListRelationFilter = {
    every?: DetailPembelianWhereInput
    some?: DetailPembelianWhereInput
    none?: DetailPembelianWhereInput
  }

  export type DetailPembelianOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdukCountOrderByAggregateInput = {
    ProdukID?: SortOrder
    NamaProduk?: SortOrder
    Deskripsi?: SortOrder
    Harga?: SortOrder
    Stok?: SortOrder
    Kategori?: SortOrder
  }

  export type ProdukAvgOrderByAggregateInput = {
    ProdukID?: SortOrder
    Harga?: SortOrder
    Stok?: SortOrder
  }

  export type ProdukMaxOrderByAggregateInput = {
    ProdukID?: SortOrder
    NamaProduk?: SortOrder
    Deskripsi?: SortOrder
    Harga?: SortOrder
    Stok?: SortOrder
    Kategori?: SortOrder
  }

  export type ProdukMinOrderByAggregateInput = {
    ProdukID?: SortOrder
    NamaProduk?: SortOrder
    Deskripsi?: SortOrder
    Harga?: SortOrder
    Stok?: SortOrder
    Kategori?: SortOrder
  }

  export type ProdukSumOrderByAggregateInput = {
    ProdukID?: SortOrder
    Harga?: SortOrder
    Stok?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumKategoriEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KategoriEnum | EnumKategoriEnumFieldRefInput<$PrismaModel>
    in?: $Enums.KategoriEnum[]
    notIn?: $Enums.KategoriEnum[]
    not?: NestedEnumKategoriEnumWithAggregatesFilter<$PrismaModel> | $Enums.KategoriEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKategoriEnumFilter<$PrismaModel>
    _max?: NestedEnumKategoriEnumFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PembelianCountOrderByAggregateInput = {
    PembelianID?: SortOrder
    TanggalPembelian?: SortOrder
    UserID?: SortOrder
    TotalHarga?: SortOrder
  }

  export type PembelianAvgOrderByAggregateInput = {
    PembelianID?: SortOrder
    UserID?: SortOrder
    TotalHarga?: SortOrder
  }

  export type PembelianMaxOrderByAggregateInput = {
    PembelianID?: SortOrder
    TanggalPembelian?: SortOrder
    UserID?: SortOrder
    TotalHarga?: SortOrder
  }

  export type PembelianMinOrderByAggregateInput = {
    PembelianID?: SortOrder
    TanggalPembelian?: SortOrder
    UserID?: SortOrder
    TotalHarga?: SortOrder
  }

  export type PembelianSumOrderByAggregateInput = {
    PembelianID?: SortOrder
    UserID?: SortOrder
    TotalHarga?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProdukRelationFilter = {
    is?: ProdukWhereInput
    isNot?: ProdukWhereInput
  }

  export type PembelianRelationFilter = {
    is?: PembelianWhereInput
    isNot?: PembelianWhereInput
  }

  export type DetailPembelianCountOrderByAggregateInput = {
    DetailID?: SortOrder
    PembelianID?: SortOrder
    ProdukID?: SortOrder
    Jumlah?: SortOrder
    Subtotal?: SortOrder
  }

  export type DetailPembelianAvgOrderByAggregateInput = {
    DetailID?: SortOrder
    PembelianID?: SortOrder
    ProdukID?: SortOrder
    Jumlah?: SortOrder
    Subtotal?: SortOrder
  }

  export type DetailPembelianMaxOrderByAggregateInput = {
    DetailID?: SortOrder
    PembelianID?: SortOrder
    ProdukID?: SortOrder
    Jumlah?: SortOrder
    Subtotal?: SortOrder
  }

  export type DetailPembelianMinOrderByAggregateInput = {
    DetailID?: SortOrder
    PembelianID?: SortOrder
    ProdukID?: SortOrder
    Jumlah?: SortOrder
    Subtotal?: SortOrder
  }

  export type DetailPembelianSumOrderByAggregateInput = {
    DetailID?: SortOrder
    PembelianID?: SortOrder
    ProdukID?: SortOrder
    Jumlah?: SortOrder
    Subtotal?: SortOrder
  }

  export type ReservasiCountOrderByAggregateInput = {
    ReservasiID?: SortOrder
    TanggalReservasi?: SortOrder
    UserID?: SortOrder
    JumlahOrang?: SortOrder
    Status?: SortOrder
  }

  export type ReservasiAvgOrderByAggregateInput = {
    ReservasiID?: SortOrder
    UserID?: SortOrder
    JumlahOrang?: SortOrder
  }

  export type ReservasiMaxOrderByAggregateInput = {
    ReservasiID?: SortOrder
    TanggalReservasi?: SortOrder
    UserID?: SortOrder
    JumlahOrang?: SortOrder
    Status?: SortOrder
  }

  export type ReservasiMinOrderByAggregateInput = {
    ReservasiID?: SortOrder
    TanggalReservasi?: SortOrder
    UserID?: SortOrder
    JumlahOrang?: SortOrder
    Status?: SortOrder
  }

  export type ReservasiSumOrderByAggregateInput = {
    ReservasiID?: SortOrder
    UserID?: SortOrder
    JumlahOrang?: SortOrder
  }

  export type PembelianCreateNestedManyWithoutUserInput = {
    create?: XOR<PembelianCreateWithoutUserInput, PembelianUncheckedCreateWithoutUserInput> | PembelianCreateWithoutUserInput[] | PembelianUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PembelianCreateOrConnectWithoutUserInput | PembelianCreateOrConnectWithoutUserInput[]
    createMany?: PembelianCreateManyUserInputEnvelope
    connect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
  }

  export type ReservasiCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservasiCreateWithoutUserInput, ReservasiUncheckedCreateWithoutUserInput> | ReservasiCreateWithoutUserInput[] | ReservasiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservasiCreateOrConnectWithoutUserInput | ReservasiCreateOrConnectWithoutUserInput[]
    createMany?: ReservasiCreateManyUserInputEnvelope
    connect?: ReservasiWhereUniqueInput | ReservasiWhereUniqueInput[]
  }

  export type PembelianUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PembelianCreateWithoutUserInput, PembelianUncheckedCreateWithoutUserInput> | PembelianCreateWithoutUserInput[] | PembelianUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PembelianCreateOrConnectWithoutUserInput | PembelianCreateOrConnectWithoutUserInput[]
    createMany?: PembelianCreateManyUserInputEnvelope
    connect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
  }

  export type ReservasiUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservasiCreateWithoutUserInput, ReservasiUncheckedCreateWithoutUserInput> | ReservasiCreateWithoutUserInput[] | ReservasiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservasiCreateOrConnectWithoutUserInput | ReservasiCreateOrConnectWithoutUserInput[]
    createMany?: ReservasiCreateManyUserInputEnvelope
    connect?: ReservasiWhereUniqueInput | ReservasiWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PembelianUpdateManyWithoutUserNestedInput = {
    create?: XOR<PembelianCreateWithoutUserInput, PembelianUncheckedCreateWithoutUserInput> | PembelianCreateWithoutUserInput[] | PembelianUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PembelianCreateOrConnectWithoutUserInput | PembelianCreateOrConnectWithoutUserInput[]
    upsert?: PembelianUpsertWithWhereUniqueWithoutUserInput | PembelianUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PembelianCreateManyUserInputEnvelope
    set?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    disconnect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    delete?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    connect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    update?: PembelianUpdateWithWhereUniqueWithoutUserInput | PembelianUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PembelianUpdateManyWithWhereWithoutUserInput | PembelianUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PembelianScalarWhereInput | PembelianScalarWhereInput[]
  }

  export type ReservasiUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservasiCreateWithoutUserInput, ReservasiUncheckedCreateWithoutUserInput> | ReservasiCreateWithoutUserInput[] | ReservasiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservasiCreateOrConnectWithoutUserInput | ReservasiCreateOrConnectWithoutUserInput[]
    upsert?: ReservasiUpsertWithWhereUniqueWithoutUserInput | ReservasiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservasiCreateManyUserInputEnvelope
    set?: ReservasiWhereUniqueInput | ReservasiWhereUniqueInput[]
    disconnect?: ReservasiWhereUniqueInput | ReservasiWhereUniqueInput[]
    delete?: ReservasiWhereUniqueInput | ReservasiWhereUniqueInput[]
    connect?: ReservasiWhereUniqueInput | ReservasiWhereUniqueInput[]
    update?: ReservasiUpdateWithWhereUniqueWithoutUserInput | ReservasiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservasiUpdateManyWithWhereWithoutUserInput | ReservasiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservasiScalarWhereInput | ReservasiScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PembelianUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PembelianCreateWithoutUserInput, PembelianUncheckedCreateWithoutUserInput> | PembelianCreateWithoutUserInput[] | PembelianUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PembelianCreateOrConnectWithoutUserInput | PembelianCreateOrConnectWithoutUserInput[]
    upsert?: PembelianUpsertWithWhereUniqueWithoutUserInput | PembelianUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PembelianCreateManyUserInputEnvelope
    set?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    disconnect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    delete?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    connect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    update?: PembelianUpdateWithWhereUniqueWithoutUserInput | PembelianUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PembelianUpdateManyWithWhereWithoutUserInput | PembelianUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PembelianScalarWhereInput | PembelianScalarWhereInput[]
  }

  export type ReservasiUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservasiCreateWithoutUserInput, ReservasiUncheckedCreateWithoutUserInput> | ReservasiCreateWithoutUserInput[] | ReservasiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservasiCreateOrConnectWithoutUserInput | ReservasiCreateOrConnectWithoutUserInput[]
    upsert?: ReservasiUpsertWithWhereUniqueWithoutUserInput | ReservasiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservasiCreateManyUserInputEnvelope
    set?: ReservasiWhereUniqueInput | ReservasiWhereUniqueInput[]
    disconnect?: ReservasiWhereUniqueInput | ReservasiWhereUniqueInput[]
    delete?: ReservasiWhereUniqueInput | ReservasiWhereUniqueInput[]
    connect?: ReservasiWhereUniqueInput | ReservasiWhereUniqueInput[]
    update?: ReservasiUpdateWithWhereUniqueWithoutUserInput | ReservasiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservasiUpdateManyWithWhereWithoutUserInput | ReservasiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservasiScalarWhereInput | ReservasiScalarWhereInput[]
  }

  export type DetailPembelianCreateNestedManyWithoutProdukInput = {
    create?: XOR<DetailPembelianCreateWithoutProdukInput, DetailPembelianUncheckedCreateWithoutProdukInput> | DetailPembelianCreateWithoutProdukInput[] | DetailPembelianUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: DetailPembelianCreateOrConnectWithoutProdukInput | DetailPembelianCreateOrConnectWithoutProdukInput[]
    createMany?: DetailPembelianCreateManyProdukInputEnvelope
    connect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
  }

  export type DetailPembelianUncheckedCreateNestedManyWithoutProdukInput = {
    create?: XOR<DetailPembelianCreateWithoutProdukInput, DetailPembelianUncheckedCreateWithoutProdukInput> | DetailPembelianCreateWithoutProdukInput[] | DetailPembelianUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: DetailPembelianCreateOrConnectWithoutProdukInput | DetailPembelianCreateOrConnectWithoutProdukInput[]
    createMany?: DetailPembelianCreateManyProdukInputEnvelope
    connect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumKategoriEnumFieldUpdateOperationsInput = {
    set?: $Enums.KategoriEnum
  }

  export type DetailPembelianUpdateManyWithoutProdukNestedInput = {
    create?: XOR<DetailPembelianCreateWithoutProdukInput, DetailPembelianUncheckedCreateWithoutProdukInput> | DetailPembelianCreateWithoutProdukInput[] | DetailPembelianUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: DetailPembelianCreateOrConnectWithoutProdukInput | DetailPembelianCreateOrConnectWithoutProdukInput[]
    upsert?: DetailPembelianUpsertWithWhereUniqueWithoutProdukInput | DetailPembelianUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: DetailPembelianCreateManyProdukInputEnvelope
    set?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    disconnect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    delete?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    connect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    update?: DetailPembelianUpdateWithWhereUniqueWithoutProdukInput | DetailPembelianUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: DetailPembelianUpdateManyWithWhereWithoutProdukInput | DetailPembelianUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: DetailPembelianScalarWhereInput | DetailPembelianScalarWhereInput[]
  }

  export type DetailPembelianUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: XOR<DetailPembelianCreateWithoutProdukInput, DetailPembelianUncheckedCreateWithoutProdukInput> | DetailPembelianCreateWithoutProdukInput[] | DetailPembelianUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: DetailPembelianCreateOrConnectWithoutProdukInput | DetailPembelianCreateOrConnectWithoutProdukInput[]
    upsert?: DetailPembelianUpsertWithWhereUniqueWithoutProdukInput | DetailPembelianUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: DetailPembelianCreateManyProdukInputEnvelope
    set?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    disconnect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    delete?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    connect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    update?: DetailPembelianUpdateWithWhereUniqueWithoutProdukInput | DetailPembelianUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: DetailPembelianUpdateManyWithWhereWithoutProdukInput | DetailPembelianUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: DetailPembelianScalarWhereInput | DetailPembelianScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPembelianInput = {
    create?: XOR<UserCreateWithoutPembelianInput, UserUncheckedCreateWithoutPembelianInput>
    connectOrCreate?: UserCreateOrConnectWithoutPembelianInput
    connect?: UserWhereUniqueInput
  }

  export type DetailPembelianCreateNestedManyWithoutPembelianInput = {
    create?: XOR<DetailPembelianCreateWithoutPembelianInput, DetailPembelianUncheckedCreateWithoutPembelianInput> | DetailPembelianCreateWithoutPembelianInput[] | DetailPembelianUncheckedCreateWithoutPembelianInput[]
    connectOrCreate?: DetailPembelianCreateOrConnectWithoutPembelianInput | DetailPembelianCreateOrConnectWithoutPembelianInput[]
    createMany?: DetailPembelianCreateManyPembelianInputEnvelope
    connect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
  }

  export type DetailPembelianUncheckedCreateNestedManyWithoutPembelianInput = {
    create?: XOR<DetailPembelianCreateWithoutPembelianInput, DetailPembelianUncheckedCreateWithoutPembelianInput> | DetailPembelianCreateWithoutPembelianInput[] | DetailPembelianUncheckedCreateWithoutPembelianInput[]
    connectOrCreate?: DetailPembelianCreateOrConnectWithoutPembelianInput | DetailPembelianCreateOrConnectWithoutPembelianInput[]
    createMany?: DetailPembelianCreateManyPembelianInputEnvelope
    connect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPembelianNestedInput = {
    create?: XOR<UserCreateWithoutPembelianInput, UserUncheckedCreateWithoutPembelianInput>
    connectOrCreate?: UserCreateOrConnectWithoutPembelianInput
    upsert?: UserUpsertWithoutPembelianInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPembelianInput, UserUpdateWithoutPembelianInput>, UserUncheckedUpdateWithoutPembelianInput>
  }

  export type DetailPembelianUpdateManyWithoutPembelianNestedInput = {
    create?: XOR<DetailPembelianCreateWithoutPembelianInput, DetailPembelianUncheckedCreateWithoutPembelianInput> | DetailPembelianCreateWithoutPembelianInput[] | DetailPembelianUncheckedCreateWithoutPembelianInput[]
    connectOrCreate?: DetailPembelianCreateOrConnectWithoutPembelianInput | DetailPembelianCreateOrConnectWithoutPembelianInput[]
    upsert?: DetailPembelianUpsertWithWhereUniqueWithoutPembelianInput | DetailPembelianUpsertWithWhereUniqueWithoutPembelianInput[]
    createMany?: DetailPembelianCreateManyPembelianInputEnvelope
    set?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    disconnect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    delete?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    connect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    update?: DetailPembelianUpdateWithWhereUniqueWithoutPembelianInput | DetailPembelianUpdateWithWhereUniqueWithoutPembelianInput[]
    updateMany?: DetailPembelianUpdateManyWithWhereWithoutPembelianInput | DetailPembelianUpdateManyWithWhereWithoutPembelianInput[]
    deleteMany?: DetailPembelianScalarWhereInput | DetailPembelianScalarWhereInput[]
  }

  export type DetailPembelianUncheckedUpdateManyWithoutPembelianNestedInput = {
    create?: XOR<DetailPembelianCreateWithoutPembelianInput, DetailPembelianUncheckedCreateWithoutPembelianInput> | DetailPembelianCreateWithoutPembelianInput[] | DetailPembelianUncheckedCreateWithoutPembelianInput[]
    connectOrCreate?: DetailPembelianCreateOrConnectWithoutPembelianInput | DetailPembelianCreateOrConnectWithoutPembelianInput[]
    upsert?: DetailPembelianUpsertWithWhereUniqueWithoutPembelianInput | DetailPembelianUpsertWithWhereUniqueWithoutPembelianInput[]
    createMany?: DetailPembelianCreateManyPembelianInputEnvelope
    set?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    disconnect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    delete?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    connect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    update?: DetailPembelianUpdateWithWhereUniqueWithoutPembelianInput | DetailPembelianUpdateWithWhereUniqueWithoutPembelianInput[]
    updateMany?: DetailPembelianUpdateManyWithWhereWithoutPembelianInput | DetailPembelianUpdateManyWithWhereWithoutPembelianInput[]
    deleteMany?: DetailPembelianScalarWhereInput | DetailPembelianScalarWhereInput[]
  }

  export type ProdukCreateNestedOneWithoutDetailPembelianInput = {
    create?: XOR<ProdukCreateWithoutDetailPembelianInput, ProdukUncheckedCreateWithoutDetailPembelianInput>
    connectOrCreate?: ProdukCreateOrConnectWithoutDetailPembelianInput
    connect?: ProdukWhereUniqueInput
  }

  export type PembelianCreateNestedOneWithoutDetailPembelianInput = {
    create?: XOR<PembelianCreateWithoutDetailPembelianInput, PembelianUncheckedCreateWithoutDetailPembelianInput>
    connectOrCreate?: PembelianCreateOrConnectWithoutDetailPembelianInput
    connect?: PembelianWhereUniqueInput
  }

  export type ProdukUpdateOneRequiredWithoutDetailPembelianNestedInput = {
    create?: XOR<ProdukCreateWithoutDetailPembelianInput, ProdukUncheckedCreateWithoutDetailPembelianInput>
    connectOrCreate?: ProdukCreateOrConnectWithoutDetailPembelianInput
    upsert?: ProdukUpsertWithoutDetailPembelianInput
    connect?: ProdukWhereUniqueInput
    update?: XOR<XOR<ProdukUpdateToOneWithWhereWithoutDetailPembelianInput, ProdukUpdateWithoutDetailPembelianInput>, ProdukUncheckedUpdateWithoutDetailPembelianInput>
  }

  export type PembelianUpdateOneRequiredWithoutDetailPembelianNestedInput = {
    create?: XOR<PembelianCreateWithoutDetailPembelianInput, PembelianUncheckedCreateWithoutDetailPembelianInput>
    connectOrCreate?: PembelianCreateOrConnectWithoutDetailPembelianInput
    upsert?: PembelianUpsertWithoutDetailPembelianInput
    connect?: PembelianWhereUniqueInput
    update?: XOR<XOR<PembelianUpdateToOneWithWhereWithoutDetailPembelianInput, PembelianUpdateWithoutDetailPembelianInput>, PembelianUncheckedUpdateWithoutDetailPembelianInput>
  }

  export type UserCreateNestedOneWithoutReservasiInput = {
    create?: XOR<UserCreateWithoutReservasiInput, UserUncheckedCreateWithoutReservasiInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservasiInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReservasiNestedInput = {
    create?: XOR<UserCreateWithoutReservasiInput, UserUncheckedCreateWithoutReservasiInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservasiInput
    upsert?: UserUpsertWithoutReservasiInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReservasiInput, UserUpdateWithoutReservasiInput>, UserUncheckedUpdateWithoutReservasiInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumKategoriEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.KategoriEnum | EnumKategoriEnumFieldRefInput<$PrismaModel>
    in?: $Enums.KategoriEnum[]
    notIn?: $Enums.KategoriEnum[]
    not?: NestedEnumKategoriEnumFilter<$PrismaModel> | $Enums.KategoriEnum
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumKategoriEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KategoriEnum | EnumKategoriEnumFieldRefInput<$PrismaModel>
    in?: $Enums.KategoriEnum[]
    notIn?: $Enums.KategoriEnum[]
    not?: NestedEnumKategoriEnumWithAggregatesFilter<$PrismaModel> | $Enums.KategoriEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKategoriEnumFilter<$PrismaModel>
    _max?: NestedEnumKategoriEnumFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PembelianCreateWithoutUserInput = {
    TanggalPembelian: Date | string
    TotalHarga: number
    DetailPembelian?: DetailPembelianCreateNestedManyWithoutPembelianInput
  }

  export type PembelianUncheckedCreateWithoutUserInput = {
    PembelianID?: number
    TanggalPembelian: Date | string
    TotalHarga: number
    DetailPembelian?: DetailPembelianUncheckedCreateNestedManyWithoutPembelianInput
  }

  export type PembelianCreateOrConnectWithoutUserInput = {
    where: PembelianWhereUniqueInput
    create: XOR<PembelianCreateWithoutUserInput, PembelianUncheckedCreateWithoutUserInput>
  }

  export type PembelianCreateManyUserInputEnvelope = {
    data: PembelianCreateManyUserInput | PembelianCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReservasiCreateWithoutUserInput = {
    TanggalReservasi: Date | string
    JumlahOrang: number
    Status: string
  }

  export type ReservasiUncheckedCreateWithoutUserInput = {
    ReservasiID?: number
    TanggalReservasi: Date | string
    JumlahOrang: number
    Status: string
  }

  export type ReservasiCreateOrConnectWithoutUserInput = {
    where: ReservasiWhereUniqueInput
    create: XOR<ReservasiCreateWithoutUserInput, ReservasiUncheckedCreateWithoutUserInput>
  }

  export type ReservasiCreateManyUserInputEnvelope = {
    data: ReservasiCreateManyUserInput | ReservasiCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PembelianUpsertWithWhereUniqueWithoutUserInput = {
    where: PembelianWhereUniqueInput
    update: XOR<PembelianUpdateWithoutUserInput, PembelianUncheckedUpdateWithoutUserInput>
    create: XOR<PembelianCreateWithoutUserInput, PembelianUncheckedCreateWithoutUserInput>
  }

  export type PembelianUpdateWithWhereUniqueWithoutUserInput = {
    where: PembelianWhereUniqueInput
    data: XOR<PembelianUpdateWithoutUserInput, PembelianUncheckedUpdateWithoutUserInput>
  }

  export type PembelianUpdateManyWithWhereWithoutUserInput = {
    where: PembelianScalarWhereInput
    data: XOR<PembelianUpdateManyMutationInput, PembelianUncheckedUpdateManyWithoutUserInput>
  }

  export type PembelianScalarWhereInput = {
    AND?: PembelianScalarWhereInput | PembelianScalarWhereInput[]
    OR?: PembelianScalarWhereInput[]
    NOT?: PembelianScalarWhereInput | PembelianScalarWhereInput[]
    PembelianID?: IntFilter<"Pembelian"> | number
    TanggalPembelian?: DateTimeFilter<"Pembelian"> | Date | string
    UserID?: IntFilter<"Pembelian"> | number
    TotalHarga?: FloatFilter<"Pembelian"> | number
  }

  export type ReservasiUpsertWithWhereUniqueWithoutUserInput = {
    where: ReservasiWhereUniqueInput
    update: XOR<ReservasiUpdateWithoutUserInput, ReservasiUncheckedUpdateWithoutUserInput>
    create: XOR<ReservasiCreateWithoutUserInput, ReservasiUncheckedCreateWithoutUserInput>
  }

  export type ReservasiUpdateWithWhereUniqueWithoutUserInput = {
    where: ReservasiWhereUniqueInput
    data: XOR<ReservasiUpdateWithoutUserInput, ReservasiUncheckedUpdateWithoutUserInput>
  }

  export type ReservasiUpdateManyWithWhereWithoutUserInput = {
    where: ReservasiScalarWhereInput
    data: XOR<ReservasiUpdateManyMutationInput, ReservasiUncheckedUpdateManyWithoutUserInput>
  }

  export type ReservasiScalarWhereInput = {
    AND?: ReservasiScalarWhereInput | ReservasiScalarWhereInput[]
    OR?: ReservasiScalarWhereInput[]
    NOT?: ReservasiScalarWhereInput | ReservasiScalarWhereInput[]
    ReservasiID?: IntFilter<"Reservasi"> | number
    TanggalReservasi?: DateTimeFilter<"Reservasi"> | Date | string
    UserID?: IntFilter<"Reservasi"> | number
    JumlahOrang?: IntFilter<"Reservasi"> | number
    Status?: StringFilter<"Reservasi"> | string
  }

  export type DetailPembelianCreateWithoutProdukInput = {
    Jumlah: number
    Subtotal: number
    Pembelian: PembelianCreateNestedOneWithoutDetailPembelianInput
  }

  export type DetailPembelianUncheckedCreateWithoutProdukInput = {
    DetailID?: number
    PembelianID: number
    Jumlah: number
    Subtotal: number
  }

  export type DetailPembelianCreateOrConnectWithoutProdukInput = {
    where: DetailPembelianWhereUniqueInput
    create: XOR<DetailPembelianCreateWithoutProdukInput, DetailPembelianUncheckedCreateWithoutProdukInput>
  }

  export type DetailPembelianCreateManyProdukInputEnvelope = {
    data: DetailPembelianCreateManyProdukInput | DetailPembelianCreateManyProdukInput[]
    skipDuplicates?: boolean
  }

  export type DetailPembelianUpsertWithWhereUniqueWithoutProdukInput = {
    where: DetailPembelianWhereUniqueInput
    update: XOR<DetailPembelianUpdateWithoutProdukInput, DetailPembelianUncheckedUpdateWithoutProdukInput>
    create: XOR<DetailPembelianCreateWithoutProdukInput, DetailPembelianUncheckedCreateWithoutProdukInput>
  }

  export type DetailPembelianUpdateWithWhereUniqueWithoutProdukInput = {
    where: DetailPembelianWhereUniqueInput
    data: XOR<DetailPembelianUpdateWithoutProdukInput, DetailPembelianUncheckedUpdateWithoutProdukInput>
  }

  export type DetailPembelianUpdateManyWithWhereWithoutProdukInput = {
    where: DetailPembelianScalarWhereInput
    data: XOR<DetailPembelianUpdateManyMutationInput, DetailPembelianUncheckedUpdateManyWithoutProdukInput>
  }

  export type DetailPembelianScalarWhereInput = {
    AND?: DetailPembelianScalarWhereInput | DetailPembelianScalarWhereInput[]
    OR?: DetailPembelianScalarWhereInput[]
    NOT?: DetailPembelianScalarWhereInput | DetailPembelianScalarWhereInput[]
    DetailID?: IntFilter<"DetailPembelian"> | number
    PembelianID?: IntFilter<"DetailPembelian"> | number
    ProdukID?: IntFilter<"DetailPembelian"> | number
    Jumlah?: IntFilter<"DetailPembelian"> | number
    Subtotal?: FloatFilter<"DetailPembelian"> | number
  }

  export type UserCreateWithoutPembelianInput = {
    Nama: string
    Email: string
    PasswordHash: string
    Role: string
    Alamat?: string | null
    JenisKelamin?: string | null
    Username: string
    Reservasi?: ReservasiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPembelianInput = {
    UserID?: number
    Nama: string
    Email: string
    PasswordHash: string
    Role: string
    Alamat?: string | null
    JenisKelamin?: string | null
    Username: string
    Reservasi?: ReservasiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPembelianInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPembelianInput, UserUncheckedCreateWithoutPembelianInput>
  }

  export type DetailPembelianCreateWithoutPembelianInput = {
    Jumlah: number
    Subtotal: number
    Produk: ProdukCreateNestedOneWithoutDetailPembelianInput
  }

  export type DetailPembelianUncheckedCreateWithoutPembelianInput = {
    DetailID?: number
    ProdukID: number
    Jumlah: number
    Subtotal: number
  }

  export type DetailPembelianCreateOrConnectWithoutPembelianInput = {
    where: DetailPembelianWhereUniqueInput
    create: XOR<DetailPembelianCreateWithoutPembelianInput, DetailPembelianUncheckedCreateWithoutPembelianInput>
  }

  export type DetailPembelianCreateManyPembelianInputEnvelope = {
    data: DetailPembelianCreateManyPembelianInput | DetailPembelianCreateManyPembelianInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPembelianInput = {
    update: XOR<UserUpdateWithoutPembelianInput, UserUncheckedUpdateWithoutPembelianInput>
    create: XOR<UserCreateWithoutPembelianInput, UserUncheckedCreateWithoutPembelianInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPembelianInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPembelianInput, UserUncheckedUpdateWithoutPembelianInput>
  }

  export type UserUpdateWithoutPembelianInput = {
    Nama?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Alamat?: NullableStringFieldUpdateOperationsInput | string | null
    JenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: StringFieldUpdateOperationsInput | string
    Reservasi?: ReservasiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPembelianInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Nama?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Alamat?: NullableStringFieldUpdateOperationsInput | string | null
    JenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: StringFieldUpdateOperationsInput | string
    Reservasi?: ReservasiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DetailPembelianUpsertWithWhereUniqueWithoutPembelianInput = {
    where: DetailPembelianWhereUniqueInput
    update: XOR<DetailPembelianUpdateWithoutPembelianInput, DetailPembelianUncheckedUpdateWithoutPembelianInput>
    create: XOR<DetailPembelianCreateWithoutPembelianInput, DetailPembelianUncheckedCreateWithoutPembelianInput>
  }

  export type DetailPembelianUpdateWithWhereUniqueWithoutPembelianInput = {
    where: DetailPembelianWhereUniqueInput
    data: XOR<DetailPembelianUpdateWithoutPembelianInput, DetailPembelianUncheckedUpdateWithoutPembelianInput>
  }

  export type DetailPembelianUpdateManyWithWhereWithoutPembelianInput = {
    where: DetailPembelianScalarWhereInput
    data: XOR<DetailPembelianUpdateManyMutationInput, DetailPembelianUncheckedUpdateManyWithoutPembelianInput>
  }

  export type ProdukCreateWithoutDetailPembelianInput = {
    NamaProduk: string
    Deskripsi: string
    Harga: number
    Stok: number
    Kategori: $Enums.KategoriEnum
  }

  export type ProdukUncheckedCreateWithoutDetailPembelianInput = {
    ProdukID?: number
    NamaProduk: string
    Deskripsi: string
    Harga: number
    Stok: number
    Kategori: $Enums.KategoriEnum
  }

  export type ProdukCreateOrConnectWithoutDetailPembelianInput = {
    where: ProdukWhereUniqueInput
    create: XOR<ProdukCreateWithoutDetailPembelianInput, ProdukUncheckedCreateWithoutDetailPembelianInput>
  }

  export type PembelianCreateWithoutDetailPembelianInput = {
    TanggalPembelian: Date | string
    TotalHarga: number
    User: UserCreateNestedOneWithoutPembelianInput
  }

  export type PembelianUncheckedCreateWithoutDetailPembelianInput = {
    PembelianID?: number
    TanggalPembelian: Date | string
    UserID: number
    TotalHarga: number
  }

  export type PembelianCreateOrConnectWithoutDetailPembelianInput = {
    where: PembelianWhereUniqueInput
    create: XOR<PembelianCreateWithoutDetailPembelianInput, PembelianUncheckedCreateWithoutDetailPembelianInput>
  }

  export type ProdukUpsertWithoutDetailPembelianInput = {
    update: XOR<ProdukUpdateWithoutDetailPembelianInput, ProdukUncheckedUpdateWithoutDetailPembelianInput>
    create: XOR<ProdukCreateWithoutDetailPembelianInput, ProdukUncheckedCreateWithoutDetailPembelianInput>
    where?: ProdukWhereInput
  }

  export type ProdukUpdateToOneWithWhereWithoutDetailPembelianInput = {
    where?: ProdukWhereInput
    data: XOR<ProdukUpdateWithoutDetailPembelianInput, ProdukUncheckedUpdateWithoutDetailPembelianInput>
  }

  export type ProdukUpdateWithoutDetailPembelianInput = {
    NamaProduk?: StringFieldUpdateOperationsInput | string
    Deskripsi?: StringFieldUpdateOperationsInput | string
    Harga?: FloatFieldUpdateOperationsInput | number
    Stok?: IntFieldUpdateOperationsInput | number
    Kategori?: EnumKategoriEnumFieldUpdateOperationsInput | $Enums.KategoriEnum
  }

  export type ProdukUncheckedUpdateWithoutDetailPembelianInput = {
    ProdukID?: IntFieldUpdateOperationsInput | number
    NamaProduk?: StringFieldUpdateOperationsInput | string
    Deskripsi?: StringFieldUpdateOperationsInput | string
    Harga?: FloatFieldUpdateOperationsInput | number
    Stok?: IntFieldUpdateOperationsInput | number
    Kategori?: EnumKategoriEnumFieldUpdateOperationsInput | $Enums.KategoriEnum
  }

  export type PembelianUpsertWithoutDetailPembelianInput = {
    update: XOR<PembelianUpdateWithoutDetailPembelianInput, PembelianUncheckedUpdateWithoutDetailPembelianInput>
    create: XOR<PembelianCreateWithoutDetailPembelianInput, PembelianUncheckedCreateWithoutDetailPembelianInput>
    where?: PembelianWhereInput
  }

  export type PembelianUpdateToOneWithWhereWithoutDetailPembelianInput = {
    where?: PembelianWhereInput
    data: XOR<PembelianUpdateWithoutDetailPembelianInput, PembelianUncheckedUpdateWithoutDetailPembelianInput>
  }

  export type PembelianUpdateWithoutDetailPembelianInput = {
    TanggalPembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    TotalHarga?: FloatFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutPembelianNestedInput
  }

  export type PembelianUncheckedUpdateWithoutDetailPembelianInput = {
    PembelianID?: IntFieldUpdateOperationsInput | number
    TanggalPembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    UserID?: IntFieldUpdateOperationsInput | number
    TotalHarga?: FloatFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutReservasiInput = {
    Nama: string
    Email: string
    PasswordHash: string
    Role: string
    Alamat?: string | null
    JenisKelamin?: string | null
    Username: string
    Pembelian?: PembelianCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReservasiInput = {
    UserID?: number
    Nama: string
    Email: string
    PasswordHash: string
    Role: string
    Alamat?: string | null
    JenisKelamin?: string | null
    Username: string
    Pembelian?: PembelianUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReservasiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReservasiInput, UserUncheckedCreateWithoutReservasiInput>
  }

  export type UserUpsertWithoutReservasiInput = {
    update: XOR<UserUpdateWithoutReservasiInput, UserUncheckedUpdateWithoutReservasiInput>
    create: XOR<UserCreateWithoutReservasiInput, UserUncheckedCreateWithoutReservasiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReservasiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReservasiInput, UserUncheckedUpdateWithoutReservasiInput>
  }

  export type UserUpdateWithoutReservasiInput = {
    Nama?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Alamat?: NullableStringFieldUpdateOperationsInput | string | null
    JenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: StringFieldUpdateOperationsInput | string
    Pembelian?: PembelianUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReservasiInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Nama?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Alamat?: NullableStringFieldUpdateOperationsInput | string | null
    JenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    Username?: StringFieldUpdateOperationsInput | string
    Pembelian?: PembelianUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PembelianCreateManyUserInput = {
    PembelianID?: number
    TanggalPembelian: Date | string
    TotalHarga: number
  }

  export type ReservasiCreateManyUserInput = {
    ReservasiID?: number
    TanggalReservasi: Date | string
    JumlahOrang: number
    Status: string
  }

  export type PembelianUpdateWithoutUserInput = {
    TanggalPembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    TotalHarga?: FloatFieldUpdateOperationsInput | number
    DetailPembelian?: DetailPembelianUpdateManyWithoutPembelianNestedInput
  }

  export type PembelianUncheckedUpdateWithoutUserInput = {
    PembelianID?: IntFieldUpdateOperationsInput | number
    TanggalPembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    TotalHarga?: FloatFieldUpdateOperationsInput | number
    DetailPembelian?: DetailPembelianUncheckedUpdateManyWithoutPembelianNestedInput
  }

  export type PembelianUncheckedUpdateManyWithoutUserInput = {
    PembelianID?: IntFieldUpdateOperationsInput | number
    TanggalPembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    TotalHarga?: FloatFieldUpdateOperationsInput | number
  }

  export type ReservasiUpdateWithoutUserInput = {
    TanggalReservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    JumlahOrang?: IntFieldUpdateOperationsInput | number
    Status?: StringFieldUpdateOperationsInput | string
  }

  export type ReservasiUncheckedUpdateWithoutUserInput = {
    ReservasiID?: IntFieldUpdateOperationsInput | number
    TanggalReservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    JumlahOrang?: IntFieldUpdateOperationsInput | number
    Status?: StringFieldUpdateOperationsInput | string
  }

  export type ReservasiUncheckedUpdateManyWithoutUserInput = {
    ReservasiID?: IntFieldUpdateOperationsInput | number
    TanggalReservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    JumlahOrang?: IntFieldUpdateOperationsInput | number
    Status?: StringFieldUpdateOperationsInput | string
  }

  export type DetailPembelianCreateManyProdukInput = {
    DetailID?: number
    PembelianID: number
    Jumlah: number
    Subtotal: number
  }

  export type DetailPembelianUpdateWithoutProdukInput = {
    Jumlah?: IntFieldUpdateOperationsInput | number
    Subtotal?: FloatFieldUpdateOperationsInput | number
    Pembelian?: PembelianUpdateOneRequiredWithoutDetailPembelianNestedInput
  }

  export type DetailPembelianUncheckedUpdateWithoutProdukInput = {
    DetailID?: IntFieldUpdateOperationsInput | number
    PembelianID?: IntFieldUpdateOperationsInput | number
    Jumlah?: IntFieldUpdateOperationsInput | number
    Subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type DetailPembelianUncheckedUpdateManyWithoutProdukInput = {
    DetailID?: IntFieldUpdateOperationsInput | number
    PembelianID?: IntFieldUpdateOperationsInput | number
    Jumlah?: IntFieldUpdateOperationsInput | number
    Subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type DetailPembelianCreateManyPembelianInput = {
    DetailID?: number
    ProdukID: number
    Jumlah: number
    Subtotal: number
  }

  export type DetailPembelianUpdateWithoutPembelianInput = {
    Jumlah?: IntFieldUpdateOperationsInput | number
    Subtotal?: FloatFieldUpdateOperationsInput | number
    Produk?: ProdukUpdateOneRequiredWithoutDetailPembelianNestedInput
  }

  export type DetailPembelianUncheckedUpdateWithoutPembelianInput = {
    DetailID?: IntFieldUpdateOperationsInput | number
    ProdukID?: IntFieldUpdateOperationsInput | number
    Jumlah?: IntFieldUpdateOperationsInput | number
    Subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type DetailPembelianUncheckedUpdateManyWithoutPembelianInput = {
    DetailID?: IntFieldUpdateOperationsInput | number
    ProdukID?: IntFieldUpdateOperationsInput | number
    Jumlah?: IntFieldUpdateOperationsInput | number
    Subtotal?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProdukCountOutputTypeDefaultArgs instead
     */
    export type ProdukCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProdukCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PembelianCountOutputTypeDefaultArgs instead
     */
    export type PembelianCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PembelianCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProdukDefaultArgs instead
     */
    export type ProdukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProdukDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PembelianDefaultArgs instead
     */
    export type PembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PembelianDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DetailPembelianDefaultArgs instead
     */
    export type DetailPembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DetailPembelianDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservasiDefaultArgs instead
     */
    export type ReservasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservasiDefaultArgs<ExtArgs>

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