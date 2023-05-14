
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Cake
 * 
 */
export type Cake = {
  id: bigint
  letterId: bigint | null
  cakeType: CakeType | null
}

/**
 * Model CustomCake
 * 
 */
export type CustomCake = {
  id: bigint
  shape: CakeShape | null
  color: string
  top_decorator: Prisma.JsonValue
  bottom_decorator: Prisma.JsonValue
  lettering: Prisma.JsonValue
  item: string[]
}

/**
 * Model Letter
 * 
 */
export type Letter = {
  id: bigint
  userId: bigint | null
  created_at: Date
  name: string
  content: string | null
  is_private: boolean
}

/**
 * Model User
 * 
 */
export type User = {
  id: bigint
  name: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const CakeShape: {
  ROUND: 'ROUND',
  SQUARE: 'SQUARE',
  HEART: 'HEART'
};

export type CakeShape = (typeof CakeShape)[keyof typeof CakeShape]


export const CakeType: {
  HARRYPOTTER: 'HARRYPOTTER',
  ANIMAL: 'ANIMAL',
  SOJU: 'SOJU',
  MONEY: 'MONEY',
  PLANT: 'PLANT',
  PRINCESS: 'PRINCESS'
};

export type CakeType = (typeof CakeType)[keyof typeof CakeType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cakes
 * const cakes = await prisma.cake.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cakes
   * const cakes = await prisma.cake.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.cake`: Exposes CRUD operations for the **Cake** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cakes
    * const cakes = await prisma.cake.findMany()
    * ```
    */
  get cake(): Prisma.CakeDelegate<GlobalReject>;

  /**
   * `prisma.customCake`: Exposes CRUD operations for the **CustomCake** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomCakes
    * const customCakes = await prisma.customCake.findMany()
    * ```
    */
  get customCake(): Prisma.CustomCakeDelegate<GlobalReject>;

  /**
   * `prisma.letter`: Exposes CRUD operations for the **Letter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Letters
    * const letters = await prisma.letter.findMany()
    * ```
    */
  get letter(): Prisma.LetterDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

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
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cake: 'Cake',
    CustomCake: 'CustomCake',
    Letter: 'Letter',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
    | 'findMany'
    | 'findFirst'
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LetterCountOutputType
   */


  export type LetterCountOutputType = {
    Cake: number
  }

  export type LetterCountOutputTypeSelect = {
    Cake?: boolean
  }

  export type LetterCountOutputTypeGetPayload<S extends boolean | null | undefined | LetterCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LetterCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (LetterCountOutputTypeArgs)
    ? LetterCountOutputType 
    : S extends { select: any } & (LetterCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof LetterCountOutputType ? LetterCountOutputType[P] : never
  } 
      : LetterCountOutputType




  // Custom InputTypes

  /**
   * LetterCountOutputType without action
   */
  export type LetterCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LetterCountOutputType
     */
    select?: LetterCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    Letter: number
  }

  export type UserCountOutputTypeSelect = {
    Letter?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Cake
   */


  export type AggregateCake = {
    _count: CakeCountAggregateOutputType | null
    _avg: CakeAvgAggregateOutputType | null
    _sum: CakeSumAggregateOutputType | null
    _min: CakeMinAggregateOutputType | null
    _max: CakeMaxAggregateOutputType | null
  }

  export type CakeAvgAggregateOutputType = {
    id: number | null
    letterId: number | null
  }

  export type CakeSumAggregateOutputType = {
    id: bigint | null
    letterId: bigint | null
  }

  export type CakeMinAggregateOutputType = {
    id: bigint | null
    letterId: bigint | null
    cakeType: CakeType | null
  }

  export type CakeMaxAggregateOutputType = {
    id: bigint | null
    letterId: bigint | null
    cakeType: CakeType | null
  }

  export type CakeCountAggregateOutputType = {
    id: number
    letterId: number
    cakeType: number
    _all: number
  }


  export type CakeAvgAggregateInputType = {
    id?: true
    letterId?: true
  }

  export type CakeSumAggregateInputType = {
    id?: true
    letterId?: true
  }

  export type CakeMinAggregateInputType = {
    id?: true
    letterId?: true
    cakeType?: true
  }

  export type CakeMaxAggregateInputType = {
    id?: true
    letterId?: true
    cakeType?: true
  }

  export type CakeCountAggregateInputType = {
    id?: true
    letterId?: true
    cakeType?: true
    _all?: true
  }

  export type CakeAggregateArgs = {
    /**
     * Filter which Cake to aggregate.
     */
    where?: CakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cakes to fetch.
     */
    orderBy?: Enumerable<CakeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cakes
    **/
    _count?: true | CakeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CakeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CakeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CakeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CakeMaxAggregateInputType
  }

  export type GetCakeAggregateType<T extends CakeAggregateArgs> = {
        [P in keyof T & keyof AggregateCake]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCake[P]>
      : GetScalarType<T[P], AggregateCake[P]>
  }




  export type CakeGroupByArgs = {
    where?: CakeWhereInput
    orderBy?: Enumerable<CakeOrderByWithAggregationInput>
    by: CakeScalarFieldEnum[]
    having?: CakeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CakeCountAggregateInputType | true
    _avg?: CakeAvgAggregateInputType
    _sum?: CakeSumAggregateInputType
    _min?: CakeMinAggregateInputType
    _max?: CakeMaxAggregateInputType
  }


  export type CakeGroupByOutputType = {
    id: bigint
    letterId: bigint | null
    cakeType: CakeType | null
    _count: CakeCountAggregateOutputType | null
    _avg: CakeAvgAggregateOutputType | null
    _sum: CakeSumAggregateOutputType | null
    _min: CakeMinAggregateOutputType | null
    _max: CakeMaxAggregateOutputType | null
  }

  type GetCakeGroupByPayload<T extends CakeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CakeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CakeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CakeGroupByOutputType[P]>
            : GetScalarType<T[P], CakeGroupByOutputType[P]>
        }
      >
    >


  export type CakeSelect = {
    id?: boolean
    letterId?: boolean
    cakeType?: boolean
    Letter?: boolean | LetterArgs
    CustomCake?: boolean | CustomCakeArgs
  }


  export type CakeInclude = {
    Letter?: boolean | LetterArgs
    CustomCake?: boolean | CustomCakeArgs
  }

  export type CakeGetPayload<S extends boolean | null | undefined | CakeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Cake :
    S extends undefined ? never :
    S extends { include: any } & (CakeArgs | CakeFindManyArgs)
    ? Cake  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Letter' ? LetterGetPayload<S['include'][P]> | null :
        P extends 'CustomCake' ? CustomCakeGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (CakeArgs | CakeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Letter' ? LetterGetPayload<S['select'][P]> | null :
        P extends 'CustomCake' ? CustomCakeGetPayload<S['select'][P]> | null :  P extends keyof Cake ? Cake[P] : never
  } 
      : Cake


  type CakeCountArgs = 
    Omit<CakeFindManyArgs, 'select' | 'include'> & {
      select?: CakeCountAggregateInputType | true
    }

  export interface CakeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Cake that matches the filter.
     * @param {CakeFindUniqueArgs} args - Arguments to find a Cake
     * @example
     * // Get one Cake
     * const cake = await prisma.cake.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CakeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CakeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Cake'> extends True ? Prisma__CakeClient<CakeGetPayload<T>> : Prisma__CakeClient<CakeGetPayload<T> | null, null>

    /**
     * Find one Cake that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CakeFindUniqueOrThrowArgs} args - Arguments to find a Cake
     * @example
     * // Get one Cake
     * const cake = await prisma.cake.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CakeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CakeFindUniqueOrThrowArgs>
    ): Prisma__CakeClient<CakeGetPayload<T>>

    /**
     * Find the first Cake that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CakeFindFirstArgs} args - Arguments to find a Cake
     * @example
     * // Get one Cake
     * const cake = await prisma.cake.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CakeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CakeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Cake'> extends True ? Prisma__CakeClient<CakeGetPayload<T>> : Prisma__CakeClient<CakeGetPayload<T> | null, null>

    /**
     * Find the first Cake that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CakeFindFirstOrThrowArgs} args - Arguments to find a Cake
     * @example
     * // Get one Cake
     * const cake = await prisma.cake.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CakeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CakeFindFirstOrThrowArgs>
    ): Prisma__CakeClient<CakeGetPayload<T>>

    /**
     * Find zero or more Cakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CakeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cakes
     * const cakes = await prisma.cake.findMany()
     * 
     * // Get first 10 Cakes
     * const cakes = await prisma.cake.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cakeWithIdOnly = await prisma.cake.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CakeFindManyArgs>(
      args?: SelectSubset<T, CakeFindManyArgs>
    ): Prisma.PrismaPromise<Array<CakeGetPayload<T>>>

    /**
     * Create a Cake.
     * @param {CakeCreateArgs} args - Arguments to create a Cake.
     * @example
     * // Create one Cake
     * const Cake = await prisma.cake.create({
     *   data: {
     *     // ... data to create a Cake
     *   }
     * })
     * 
    **/
    create<T extends CakeCreateArgs>(
      args: SelectSubset<T, CakeCreateArgs>
    ): Prisma__CakeClient<CakeGetPayload<T>>

    /**
     * Create many Cakes.
     *     @param {CakeCreateManyArgs} args - Arguments to create many Cakes.
     *     @example
     *     // Create many Cakes
     *     const cake = await prisma.cake.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CakeCreateManyArgs>(
      args?: SelectSubset<T, CakeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cake.
     * @param {CakeDeleteArgs} args - Arguments to delete one Cake.
     * @example
     * // Delete one Cake
     * const Cake = await prisma.cake.delete({
     *   where: {
     *     // ... filter to delete one Cake
     *   }
     * })
     * 
    **/
    delete<T extends CakeDeleteArgs>(
      args: SelectSubset<T, CakeDeleteArgs>
    ): Prisma__CakeClient<CakeGetPayload<T>>

    /**
     * Update one Cake.
     * @param {CakeUpdateArgs} args - Arguments to update one Cake.
     * @example
     * // Update one Cake
     * const cake = await prisma.cake.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CakeUpdateArgs>(
      args: SelectSubset<T, CakeUpdateArgs>
    ): Prisma__CakeClient<CakeGetPayload<T>>

    /**
     * Delete zero or more Cakes.
     * @param {CakeDeleteManyArgs} args - Arguments to filter Cakes to delete.
     * @example
     * // Delete a few Cakes
     * const { count } = await prisma.cake.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CakeDeleteManyArgs>(
      args?: SelectSubset<T, CakeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cakes
     * const cake = await prisma.cake.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CakeUpdateManyArgs>(
      args: SelectSubset<T, CakeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cake.
     * @param {CakeUpsertArgs} args - Arguments to update or create a Cake.
     * @example
     * // Update or create a Cake
     * const cake = await prisma.cake.upsert({
     *   create: {
     *     // ... data to create a Cake
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cake we want to update
     *   }
     * })
    **/
    upsert<T extends CakeUpsertArgs>(
      args: SelectSubset<T, CakeUpsertArgs>
    ): Prisma__CakeClient<CakeGetPayload<T>>

    /**
     * Count the number of Cakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CakeCountArgs} args - Arguments to filter Cakes to count.
     * @example
     * // Count the number of Cakes
     * const count = await prisma.cake.count({
     *   where: {
     *     // ... the filter for the Cakes we want to count
     *   }
     * })
    **/
    count<T extends CakeCountArgs>(
      args?: Subset<T, CakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CakeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CakeAggregateArgs>(args: Subset<T, CakeAggregateArgs>): Prisma.PrismaPromise<GetCakeAggregateType<T>>

    /**
     * Group by Cake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CakeGroupByArgs} args - Group by arguments.
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
      T extends CakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CakeGroupByArgs['orderBy'] }
        : { orderBy?: CakeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CakeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCakeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Cake.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CakeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Letter<T extends LetterArgs= {}>(args?: Subset<T, LetterArgs>): Prisma__LetterClient<LetterGetPayload<T> | Null>;

    CustomCake<T extends CustomCakeArgs= {}>(args?: Subset<T, CustomCakeArgs>): Prisma__CustomCakeClient<CustomCakeGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Cake base type for findUnique actions
   */
  export type CakeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Cake
     */
    select?: CakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CakeInclude | null
    /**
     * Filter, which Cake to fetch.
     */
    where: CakeWhereUniqueInput
  }

  /**
   * Cake findUnique
   */
  export interface CakeFindUniqueArgs extends CakeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cake findUniqueOrThrow
   */
  export type CakeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Cake
     */
    select?: CakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CakeInclude | null
    /**
     * Filter, which Cake to fetch.
     */
    where: CakeWhereUniqueInput
  }


  /**
   * Cake base type for findFirst actions
   */
  export type CakeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Cake
     */
    select?: CakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CakeInclude | null
    /**
     * Filter, which Cake to fetch.
     */
    where?: CakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cakes to fetch.
     */
    orderBy?: Enumerable<CakeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cakes.
     */
    cursor?: CakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cakes.
     */
    distinct?: Enumerable<CakeScalarFieldEnum>
  }

  /**
   * Cake findFirst
   */
  export interface CakeFindFirstArgs extends CakeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cake findFirstOrThrow
   */
  export type CakeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Cake
     */
    select?: CakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CakeInclude | null
    /**
     * Filter, which Cake to fetch.
     */
    where?: CakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cakes to fetch.
     */
    orderBy?: Enumerable<CakeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cakes.
     */
    cursor?: CakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cakes.
     */
    distinct?: Enumerable<CakeScalarFieldEnum>
  }


  /**
   * Cake findMany
   */
  export type CakeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Cake
     */
    select?: CakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CakeInclude | null
    /**
     * Filter, which Cakes to fetch.
     */
    where?: CakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cakes to fetch.
     */
    orderBy?: Enumerable<CakeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cakes.
     */
    cursor?: CakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cakes.
     */
    skip?: number
    distinct?: Enumerable<CakeScalarFieldEnum>
  }


  /**
   * Cake create
   */
  export type CakeCreateArgs = {
    /**
     * Select specific fields to fetch from the Cake
     */
    select?: CakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CakeInclude | null
    /**
     * The data needed to create a Cake.
     */
    data: XOR<CakeCreateInput, CakeUncheckedCreateInput>
  }


  /**
   * Cake createMany
   */
  export type CakeCreateManyArgs = {
    /**
     * The data used to create many Cakes.
     */
    data: Enumerable<CakeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Cake update
   */
  export type CakeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Cake
     */
    select?: CakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CakeInclude | null
    /**
     * The data needed to update a Cake.
     */
    data: XOR<CakeUpdateInput, CakeUncheckedUpdateInput>
    /**
     * Choose, which Cake to update.
     */
    where: CakeWhereUniqueInput
  }


  /**
   * Cake updateMany
   */
  export type CakeUpdateManyArgs = {
    /**
     * The data used to update Cakes.
     */
    data: XOR<CakeUpdateManyMutationInput, CakeUncheckedUpdateManyInput>
    /**
     * Filter which Cakes to update
     */
    where?: CakeWhereInput
  }


  /**
   * Cake upsert
   */
  export type CakeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Cake
     */
    select?: CakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CakeInclude | null
    /**
     * The filter to search for the Cake to update in case it exists.
     */
    where: CakeWhereUniqueInput
    /**
     * In case the Cake found by the `where` argument doesn't exist, create a new Cake with this data.
     */
    create: XOR<CakeCreateInput, CakeUncheckedCreateInput>
    /**
     * In case the Cake was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CakeUpdateInput, CakeUncheckedUpdateInput>
  }


  /**
   * Cake delete
   */
  export type CakeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Cake
     */
    select?: CakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CakeInclude | null
    /**
     * Filter which Cake to delete.
     */
    where: CakeWhereUniqueInput
  }


  /**
   * Cake deleteMany
   */
  export type CakeDeleteManyArgs = {
    /**
     * Filter which Cakes to delete
     */
    where?: CakeWhereInput
  }


  /**
   * Cake without action
   */
  export type CakeArgs = {
    /**
     * Select specific fields to fetch from the Cake
     */
    select?: CakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CakeInclude | null
  }



  /**
   * Model CustomCake
   */


  export type AggregateCustomCake = {
    _count: CustomCakeCountAggregateOutputType | null
    _avg: CustomCakeAvgAggregateOutputType | null
    _sum: CustomCakeSumAggregateOutputType | null
    _min: CustomCakeMinAggregateOutputType | null
    _max: CustomCakeMaxAggregateOutputType | null
  }

  export type CustomCakeAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomCakeSumAggregateOutputType = {
    id: bigint | null
  }

  export type CustomCakeMinAggregateOutputType = {
    id: bigint | null
    shape: CakeShape | null
    color: string | null
  }

  export type CustomCakeMaxAggregateOutputType = {
    id: bigint | null
    shape: CakeShape | null
    color: string | null
  }

  export type CustomCakeCountAggregateOutputType = {
    id: number
    shape: number
    color: number
    top_decorator: number
    bottom_decorator: number
    lettering: number
    item: number
    _all: number
  }


  export type CustomCakeAvgAggregateInputType = {
    id?: true
  }

  export type CustomCakeSumAggregateInputType = {
    id?: true
  }

  export type CustomCakeMinAggregateInputType = {
    id?: true
    shape?: true
    color?: true
  }

  export type CustomCakeMaxAggregateInputType = {
    id?: true
    shape?: true
    color?: true
  }

  export type CustomCakeCountAggregateInputType = {
    id?: true
    shape?: true
    color?: true
    top_decorator?: true
    bottom_decorator?: true
    lettering?: true
    item?: true
    _all?: true
  }

  export type CustomCakeAggregateArgs = {
    /**
     * Filter which CustomCake to aggregate.
     */
    where?: CustomCakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomCakes to fetch.
     */
    orderBy?: Enumerable<CustomCakeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomCakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomCakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomCakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomCakes
    **/
    _count?: true | CustomCakeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomCakeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomCakeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomCakeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomCakeMaxAggregateInputType
  }

  export type GetCustomCakeAggregateType<T extends CustomCakeAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomCake]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomCake[P]>
      : GetScalarType<T[P], AggregateCustomCake[P]>
  }




  export type CustomCakeGroupByArgs = {
    where?: CustomCakeWhereInput
    orderBy?: Enumerable<CustomCakeOrderByWithAggregationInput>
    by: CustomCakeScalarFieldEnum[]
    having?: CustomCakeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomCakeCountAggregateInputType | true
    _avg?: CustomCakeAvgAggregateInputType
    _sum?: CustomCakeSumAggregateInputType
    _min?: CustomCakeMinAggregateInputType
    _max?: CustomCakeMaxAggregateInputType
  }


  export type CustomCakeGroupByOutputType = {
    id: bigint
    shape: CakeShape | null
    color: string
    top_decorator: JsonValue
    bottom_decorator: JsonValue
    lettering: JsonValue
    item: string[]
    _count: CustomCakeCountAggregateOutputType | null
    _avg: CustomCakeAvgAggregateOutputType | null
    _sum: CustomCakeSumAggregateOutputType | null
    _min: CustomCakeMinAggregateOutputType | null
    _max: CustomCakeMaxAggregateOutputType | null
  }

  type GetCustomCakeGroupByPayload<T extends CustomCakeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CustomCakeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomCakeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomCakeGroupByOutputType[P]>
            : GetScalarType<T[P], CustomCakeGroupByOutputType[P]>
        }
      >
    >


  export type CustomCakeSelect = {
    id?: boolean
    shape?: boolean
    color?: boolean
    top_decorator?: boolean
    bottom_decorator?: boolean
    lettering?: boolean
    item?: boolean
    Cake?: boolean | CakeArgs
  }


  export type CustomCakeInclude = {
    Cake?: boolean | CakeArgs
  }

  export type CustomCakeGetPayload<S extends boolean | null | undefined | CustomCakeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CustomCake :
    S extends undefined ? never :
    S extends { include: any } & (CustomCakeArgs | CustomCakeFindManyArgs)
    ? CustomCake  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Cake' ? CakeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CustomCakeArgs | CustomCakeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Cake' ? CakeGetPayload<S['select'][P]> :  P extends keyof CustomCake ? CustomCake[P] : never
  } 
      : CustomCake


  type CustomCakeCountArgs = 
    Omit<CustomCakeFindManyArgs, 'select' | 'include'> & {
      select?: CustomCakeCountAggregateInputType | true
    }

  export interface CustomCakeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CustomCake that matches the filter.
     * @param {CustomCakeFindUniqueArgs} args - Arguments to find a CustomCake
     * @example
     * // Get one CustomCake
     * const customCake = await prisma.customCake.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomCakeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CustomCakeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CustomCake'> extends True ? Prisma__CustomCakeClient<CustomCakeGetPayload<T>> : Prisma__CustomCakeClient<CustomCakeGetPayload<T> | null, null>

    /**
     * Find one CustomCake that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomCakeFindUniqueOrThrowArgs} args - Arguments to find a CustomCake
     * @example
     * // Get one CustomCake
     * const customCake = await prisma.customCake.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomCakeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CustomCakeFindUniqueOrThrowArgs>
    ): Prisma__CustomCakeClient<CustomCakeGetPayload<T>>

    /**
     * Find the first CustomCake that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCakeFindFirstArgs} args - Arguments to find a CustomCake
     * @example
     * // Get one CustomCake
     * const customCake = await prisma.customCake.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomCakeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CustomCakeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CustomCake'> extends True ? Prisma__CustomCakeClient<CustomCakeGetPayload<T>> : Prisma__CustomCakeClient<CustomCakeGetPayload<T> | null, null>

    /**
     * Find the first CustomCake that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCakeFindFirstOrThrowArgs} args - Arguments to find a CustomCake
     * @example
     * // Get one CustomCake
     * const customCake = await prisma.customCake.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomCakeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CustomCakeFindFirstOrThrowArgs>
    ): Prisma__CustomCakeClient<CustomCakeGetPayload<T>>

    /**
     * Find zero or more CustomCakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCakeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomCakes
     * const customCakes = await prisma.customCake.findMany()
     * 
     * // Get first 10 CustomCakes
     * const customCakes = await prisma.customCake.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customCakeWithIdOnly = await prisma.customCake.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomCakeFindManyArgs>(
      args?: SelectSubset<T, CustomCakeFindManyArgs>
    ): Prisma.PrismaPromise<Array<CustomCakeGetPayload<T>>>

    /**
     * Create a CustomCake.
     * @param {CustomCakeCreateArgs} args - Arguments to create a CustomCake.
     * @example
     * // Create one CustomCake
     * const CustomCake = await prisma.customCake.create({
     *   data: {
     *     // ... data to create a CustomCake
     *   }
     * })
     * 
    **/
    create<T extends CustomCakeCreateArgs>(
      args: SelectSubset<T, CustomCakeCreateArgs>
    ): Prisma__CustomCakeClient<CustomCakeGetPayload<T>>

    /**
     * Create many CustomCakes.
     *     @param {CustomCakeCreateManyArgs} args - Arguments to create many CustomCakes.
     *     @example
     *     // Create many CustomCakes
     *     const customCake = await prisma.customCake.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomCakeCreateManyArgs>(
      args?: SelectSubset<T, CustomCakeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CustomCake.
     * @param {CustomCakeDeleteArgs} args - Arguments to delete one CustomCake.
     * @example
     * // Delete one CustomCake
     * const CustomCake = await prisma.customCake.delete({
     *   where: {
     *     // ... filter to delete one CustomCake
     *   }
     * })
     * 
    **/
    delete<T extends CustomCakeDeleteArgs>(
      args: SelectSubset<T, CustomCakeDeleteArgs>
    ): Prisma__CustomCakeClient<CustomCakeGetPayload<T>>

    /**
     * Update one CustomCake.
     * @param {CustomCakeUpdateArgs} args - Arguments to update one CustomCake.
     * @example
     * // Update one CustomCake
     * const customCake = await prisma.customCake.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomCakeUpdateArgs>(
      args: SelectSubset<T, CustomCakeUpdateArgs>
    ): Prisma__CustomCakeClient<CustomCakeGetPayload<T>>

    /**
     * Delete zero or more CustomCakes.
     * @param {CustomCakeDeleteManyArgs} args - Arguments to filter CustomCakes to delete.
     * @example
     * // Delete a few CustomCakes
     * const { count } = await prisma.customCake.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomCakeDeleteManyArgs>(
      args?: SelectSubset<T, CustomCakeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomCakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomCakes
     * const customCake = await prisma.customCake.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomCakeUpdateManyArgs>(
      args: SelectSubset<T, CustomCakeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomCake.
     * @param {CustomCakeUpsertArgs} args - Arguments to update or create a CustomCake.
     * @example
     * // Update or create a CustomCake
     * const customCake = await prisma.customCake.upsert({
     *   create: {
     *     // ... data to create a CustomCake
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomCake we want to update
     *   }
     * })
    **/
    upsert<T extends CustomCakeUpsertArgs>(
      args: SelectSubset<T, CustomCakeUpsertArgs>
    ): Prisma__CustomCakeClient<CustomCakeGetPayload<T>>

    /**
     * Count the number of CustomCakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCakeCountArgs} args - Arguments to filter CustomCakes to count.
     * @example
     * // Count the number of CustomCakes
     * const count = await prisma.customCake.count({
     *   where: {
     *     // ... the filter for the CustomCakes we want to count
     *   }
     * })
    **/
    count<T extends CustomCakeCountArgs>(
      args?: Subset<T, CustomCakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomCakeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomCake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomCakeAggregateArgs>(args: Subset<T, CustomCakeAggregateArgs>): Prisma.PrismaPromise<GetCustomCakeAggregateType<T>>

    /**
     * Group by CustomCake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCakeGroupByArgs} args - Group by arguments.
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
      T extends CustomCakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomCakeGroupByArgs['orderBy'] }
        : { orderBy?: CustomCakeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CustomCakeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomCakeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomCake.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CustomCakeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Cake<T extends CakeArgs= {}>(args?: Subset<T, CakeArgs>): Prisma__CakeClient<CakeGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CustomCake base type for findUnique actions
   */
  export type CustomCakeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CustomCake
     */
    select?: CustomCakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomCakeInclude | null
    /**
     * Filter, which CustomCake to fetch.
     */
    where: CustomCakeWhereUniqueInput
  }

  /**
   * CustomCake findUnique
   */
  export interface CustomCakeFindUniqueArgs extends CustomCakeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CustomCake findUniqueOrThrow
   */
  export type CustomCakeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CustomCake
     */
    select?: CustomCakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomCakeInclude | null
    /**
     * Filter, which CustomCake to fetch.
     */
    where: CustomCakeWhereUniqueInput
  }


  /**
   * CustomCake base type for findFirst actions
   */
  export type CustomCakeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CustomCake
     */
    select?: CustomCakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomCakeInclude | null
    /**
     * Filter, which CustomCake to fetch.
     */
    where?: CustomCakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomCakes to fetch.
     */
    orderBy?: Enumerable<CustomCakeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomCakes.
     */
    cursor?: CustomCakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomCakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomCakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomCakes.
     */
    distinct?: Enumerable<CustomCakeScalarFieldEnum>
  }

  /**
   * CustomCake findFirst
   */
  export interface CustomCakeFindFirstArgs extends CustomCakeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CustomCake findFirstOrThrow
   */
  export type CustomCakeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CustomCake
     */
    select?: CustomCakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomCakeInclude | null
    /**
     * Filter, which CustomCake to fetch.
     */
    where?: CustomCakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomCakes to fetch.
     */
    orderBy?: Enumerable<CustomCakeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomCakes.
     */
    cursor?: CustomCakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomCakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomCakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomCakes.
     */
    distinct?: Enumerable<CustomCakeScalarFieldEnum>
  }


  /**
   * CustomCake findMany
   */
  export type CustomCakeFindManyArgs = {
    /**
     * Select specific fields to fetch from the CustomCake
     */
    select?: CustomCakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomCakeInclude | null
    /**
     * Filter, which CustomCakes to fetch.
     */
    where?: CustomCakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomCakes to fetch.
     */
    orderBy?: Enumerable<CustomCakeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomCakes.
     */
    cursor?: CustomCakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomCakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomCakes.
     */
    skip?: number
    distinct?: Enumerable<CustomCakeScalarFieldEnum>
  }


  /**
   * CustomCake create
   */
  export type CustomCakeCreateArgs = {
    /**
     * Select specific fields to fetch from the CustomCake
     */
    select?: CustomCakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomCakeInclude | null
    /**
     * The data needed to create a CustomCake.
     */
    data: XOR<CustomCakeCreateInput, CustomCakeUncheckedCreateInput>
  }


  /**
   * CustomCake createMany
   */
  export type CustomCakeCreateManyArgs = {
    /**
     * The data used to create many CustomCakes.
     */
    data: Enumerable<CustomCakeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CustomCake update
   */
  export type CustomCakeUpdateArgs = {
    /**
     * Select specific fields to fetch from the CustomCake
     */
    select?: CustomCakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomCakeInclude | null
    /**
     * The data needed to update a CustomCake.
     */
    data: XOR<CustomCakeUpdateInput, CustomCakeUncheckedUpdateInput>
    /**
     * Choose, which CustomCake to update.
     */
    where: CustomCakeWhereUniqueInput
  }


  /**
   * CustomCake updateMany
   */
  export type CustomCakeUpdateManyArgs = {
    /**
     * The data used to update CustomCakes.
     */
    data: XOR<CustomCakeUpdateManyMutationInput, CustomCakeUncheckedUpdateManyInput>
    /**
     * Filter which CustomCakes to update
     */
    where?: CustomCakeWhereInput
  }


  /**
   * CustomCake upsert
   */
  export type CustomCakeUpsertArgs = {
    /**
     * Select specific fields to fetch from the CustomCake
     */
    select?: CustomCakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomCakeInclude | null
    /**
     * The filter to search for the CustomCake to update in case it exists.
     */
    where: CustomCakeWhereUniqueInput
    /**
     * In case the CustomCake found by the `where` argument doesn't exist, create a new CustomCake with this data.
     */
    create: XOR<CustomCakeCreateInput, CustomCakeUncheckedCreateInput>
    /**
     * In case the CustomCake was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomCakeUpdateInput, CustomCakeUncheckedUpdateInput>
  }


  /**
   * CustomCake delete
   */
  export type CustomCakeDeleteArgs = {
    /**
     * Select specific fields to fetch from the CustomCake
     */
    select?: CustomCakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomCakeInclude | null
    /**
     * Filter which CustomCake to delete.
     */
    where: CustomCakeWhereUniqueInput
  }


  /**
   * CustomCake deleteMany
   */
  export type CustomCakeDeleteManyArgs = {
    /**
     * Filter which CustomCakes to delete
     */
    where?: CustomCakeWhereInput
  }


  /**
   * CustomCake without action
   */
  export type CustomCakeArgs = {
    /**
     * Select specific fields to fetch from the CustomCake
     */
    select?: CustomCakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomCakeInclude | null
  }



  /**
   * Model Letter
   */


  export type AggregateLetter = {
    _count: LetterCountAggregateOutputType | null
    _avg: LetterAvgAggregateOutputType | null
    _sum: LetterSumAggregateOutputType | null
    _min: LetterMinAggregateOutputType | null
    _max: LetterMaxAggregateOutputType | null
  }

  export type LetterAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LetterSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
  }

  export type LetterMinAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    created_at: Date | null
    name: string | null
    content: string | null
    is_private: boolean | null
  }

  export type LetterMaxAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    created_at: Date | null
    name: string | null
    content: string | null
    is_private: boolean | null
  }

  export type LetterCountAggregateOutputType = {
    id: number
    userId: number
    created_at: number
    name: number
    content: number
    is_private: number
    _all: number
  }


  export type LetterAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LetterSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LetterMinAggregateInputType = {
    id?: true
    userId?: true
    created_at?: true
    name?: true
    content?: true
    is_private?: true
  }

  export type LetterMaxAggregateInputType = {
    id?: true
    userId?: true
    created_at?: true
    name?: true
    content?: true
    is_private?: true
  }

  export type LetterCountAggregateInputType = {
    id?: true
    userId?: true
    created_at?: true
    name?: true
    content?: true
    is_private?: true
    _all?: true
  }

  export type LetterAggregateArgs = {
    /**
     * Filter which Letter to aggregate.
     */
    where?: LetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Letters to fetch.
     */
    orderBy?: Enumerable<LetterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Letters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Letters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Letters
    **/
    _count?: true | LetterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LetterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LetterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LetterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LetterMaxAggregateInputType
  }

  export type GetLetterAggregateType<T extends LetterAggregateArgs> = {
        [P in keyof T & keyof AggregateLetter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLetter[P]>
      : GetScalarType<T[P], AggregateLetter[P]>
  }




  export type LetterGroupByArgs = {
    where?: LetterWhereInput
    orderBy?: Enumerable<LetterOrderByWithAggregationInput>
    by: LetterScalarFieldEnum[]
    having?: LetterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LetterCountAggregateInputType | true
    _avg?: LetterAvgAggregateInputType
    _sum?: LetterSumAggregateInputType
    _min?: LetterMinAggregateInputType
    _max?: LetterMaxAggregateInputType
  }


  export type LetterGroupByOutputType = {
    id: bigint
    userId: bigint | null
    created_at: Date
    name: string
    content: string | null
    is_private: boolean
    _count: LetterCountAggregateOutputType | null
    _avg: LetterAvgAggregateOutputType | null
    _sum: LetterSumAggregateOutputType | null
    _min: LetterMinAggregateOutputType | null
    _max: LetterMaxAggregateOutputType | null
  }

  type GetLetterGroupByPayload<T extends LetterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LetterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LetterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LetterGroupByOutputType[P]>
            : GetScalarType<T[P], LetterGroupByOutputType[P]>
        }
      >
    >


  export type LetterSelect = {
    id?: boolean
    userId?: boolean
    created_at?: boolean
    name?: boolean
    content?: boolean
    is_private?: boolean
    Cake?: boolean | Letter$CakeArgs
    User?: boolean | UserArgs
    _count?: boolean | LetterCountOutputTypeArgs
  }


  export type LetterInclude = {
    Cake?: boolean | Letter$CakeArgs
    User?: boolean | UserArgs
    _count?: boolean | LetterCountOutputTypeArgs
  }

  export type LetterGetPayload<S extends boolean | null | undefined | LetterArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Letter :
    S extends undefined ? never :
    S extends { include: any } & (LetterArgs | LetterFindManyArgs)
    ? Letter  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Cake' ? Array < CakeGetPayload<S['include'][P]>>  :
        P extends 'User' ? UserGetPayload<S['include'][P]> | null :
        P extends '_count' ? LetterCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (LetterArgs | LetterFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Cake' ? Array < CakeGetPayload<S['select'][P]>>  :
        P extends 'User' ? UserGetPayload<S['select'][P]> | null :
        P extends '_count' ? LetterCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Letter ? Letter[P] : never
  } 
      : Letter


  type LetterCountArgs = 
    Omit<LetterFindManyArgs, 'select' | 'include'> & {
      select?: LetterCountAggregateInputType | true
    }

  export interface LetterDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Letter that matches the filter.
     * @param {LetterFindUniqueArgs} args - Arguments to find a Letter
     * @example
     * // Get one Letter
     * const letter = await prisma.letter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LetterFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LetterFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Letter'> extends True ? Prisma__LetterClient<LetterGetPayload<T>> : Prisma__LetterClient<LetterGetPayload<T> | null, null>

    /**
     * Find one Letter that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LetterFindUniqueOrThrowArgs} args - Arguments to find a Letter
     * @example
     * // Get one Letter
     * const letter = await prisma.letter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LetterFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LetterFindUniqueOrThrowArgs>
    ): Prisma__LetterClient<LetterGetPayload<T>>

    /**
     * Find the first Letter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterFindFirstArgs} args - Arguments to find a Letter
     * @example
     * // Get one Letter
     * const letter = await prisma.letter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LetterFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LetterFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Letter'> extends True ? Prisma__LetterClient<LetterGetPayload<T>> : Prisma__LetterClient<LetterGetPayload<T> | null, null>

    /**
     * Find the first Letter that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterFindFirstOrThrowArgs} args - Arguments to find a Letter
     * @example
     * // Get one Letter
     * const letter = await prisma.letter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LetterFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LetterFindFirstOrThrowArgs>
    ): Prisma__LetterClient<LetterGetPayload<T>>

    /**
     * Find zero or more Letters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Letters
     * const letters = await prisma.letter.findMany()
     * 
     * // Get first 10 Letters
     * const letters = await prisma.letter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const letterWithIdOnly = await prisma.letter.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LetterFindManyArgs>(
      args?: SelectSubset<T, LetterFindManyArgs>
    ): Prisma.PrismaPromise<Array<LetterGetPayload<T>>>

    /**
     * Create a Letter.
     * @param {LetterCreateArgs} args - Arguments to create a Letter.
     * @example
     * // Create one Letter
     * const Letter = await prisma.letter.create({
     *   data: {
     *     // ... data to create a Letter
     *   }
     * })
     * 
    **/
    create<T extends LetterCreateArgs>(
      args: SelectSubset<T, LetterCreateArgs>
    ): Prisma__LetterClient<LetterGetPayload<T>>

    /**
     * Create many Letters.
     *     @param {LetterCreateManyArgs} args - Arguments to create many Letters.
     *     @example
     *     // Create many Letters
     *     const letter = await prisma.letter.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LetterCreateManyArgs>(
      args?: SelectSubset<T, LetterCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Letter.
     * @param {LetterDeleteArgs} args - Arguments to delete one Letter.
     * @example
     * // Delete one Letter
     * const Letter = await prisma.letter.delete({
     *   where: {
     *     // ... filter to delete one Letter
     *   }
     * })
     * 
    **/
    delete<T extends LetterDeleteArgs>(
      args: SelectSubset<T, LetterDeleteArgs>
    ): Prisma__LetterClient<LetterGetPayload<T>>

    /**
     * Update one Letter.
     * @param {LetterUpdateArgs} args - Arguments to update one Letter.
     * @example
     * // Update one Letter
     * const letter = await prisma.letter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LetterUpdateArgs>(
      args: SelectSubset<T, LetterUpdateArgs>
    ): Prisma__LetterClient<LetterGetPayload<T>>

    /**
     * Delete zero or more Letters.
     * @param {LetterDeleteManyArgs} args - Arguments to filter Letters to delete.
     * @example
     * // Delete a few Letters
     * const { count } = await prisma.letter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LetterDeleteManyArgs>(
      args?: SelectSubset<T, LetterDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Letters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Letters
     * const letter = await prisma.letter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LetterUpdateManyArgs>(
      args: SelectSubset<T, LetterUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Letter.
     * @param {LetterUpsertArgs} args - Arguments to update or create a Letter.
     * @example
     * // Update or create a Letter
     * const letter = await prisma.letter.upsert({
     *   create: {
     *     // ... data to create a Letter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Letter we want to update
     *   }
     * })
    **/
    upsert<T extends LetterUpsertArgs>(
      args: SelectSubset<T, LetterUpsertArgs>
    ): Prisma__LetterClient<LetterGetPayload<T>>

    /**
     * Count the number of Letters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterCountArgs} args - Arguments to filter Letters to count.
     * @example
     * // Count the number of Letters
     * const count = await prisma.letter.count({
     *   where: {
     *     // ... the filter for the Letters we want to count
     *   }
     * })
    **/
    count<T extends LetterCountArgs>(
      args?: Subset<T, LetterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LetterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Letter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LetterAggregateArgs>(args: Subset<T, LetterAggregateArgs>): Prisma.PrismaPromise<GetLetterAggregateType<T>>

    /**
     * Group by Letter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterGroupByArgs} args - Group by arguments.
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
      T extends LetterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LetterGroupByArgs['orderBy'] }
        : { orderBy?: LetterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LetterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLetterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Letter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LetterClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Cake<T extends Letter$CakeArgs= {}>(args?: Subset<T, Letter$CakeArgs>): Prisma.PrismaPromise<Array<CakeGetPayload<T>>| Null>;

    User<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Letter base type for findUnique actions
   */
  export type LetterFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude | null
    /**
     * Filter, which Letter to fetch.
     */
    where: LetterWhereUniqueInput
  }

  /**
   * Letter findUnique
   */
  export interface LetterFindUniqueArgs extends LetterFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Letter findUniqueOrThrow
   */
  export type LetterFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude | null
    /**
     * Filter, which Letter to fetch.
     */
    where: LetterWhereUniqueInput
  }


  /**
   * Letter base type for findFirst actions
   */
  export type LetterFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude | null
    /**
     * Filter, which Letter to fetch.
     */
    where?: LetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Letters to fetch.
     */
    orderBy?: Enumerable<LetterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Letters.
     */
    cursor?: LetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Letters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Letters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Letters.
     */
    distinct?: Enumerable<LetterScalarFieldEnum>
  }

  /**
   * Letter findFirst
   */
  export interface LetterFindFirstArgs extends LetterFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Letter findFirstOrThrow
   */
  export type LetterFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude | null
    /**
     * Filter, which Letter to fetch.
     */
    where?: LetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Letters to fetch.
     */
    orderBy?: Enumerable<LetterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Letters.
     */
    cursor?: LetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Letters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Letters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Letters.
     */
    distinct?: Enumerable<LetterScalarFieldEnum>
  }


  /**
   * Letter findMany
   */
  export type LetterFindManyArgs = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude | null
    /**
     * Filter, which Letters to fetch.
     */
    where?: LetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Letters to fetch.
     */
    orderBy?: Enumerable<LetterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Letters.
     */
    cursor?: LetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Letters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Letters.
     */
    skip?: number
    distinct?: Enumerable<LetterScalarFieldEnum>
  }


  /**
   * Letter create
   */
  export type LetterCreateArgs = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude | null
    /**
     * The data needed to create a Letter.
     */
    data: XOR<LetterCreateInput, LetterUncheckedCreateInput>
  }


  /**
   * Letter createMany
   */
  export type LetterCreateManyArgs = {
    /**
     * The data used to create many Letters.
     */
    data: Enumerable<LetterCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Letter update
   */
  export type LetterUpdateArgs = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude | null
    /**
     * The data needed to update a Letter.
     */
    data: XOR<LetterUpdateInput, LetterUncheckedUpdateInput>
    /**
     * Choose, which Letter to update.
     */
    where: LetterWhereUniqueInput
  }


  /**
   * Letter updateMany
   */
  export type LetterUpdateManyArgs = {
    /**
     * The data used to update Letters.
     */
    data: XOR<LetterUpdateManyMutationInput, LetterUncheckedUpdateManyInput>
    /**
     * Filter which Letters to update
     */
    where?: LetterWhereInput
  }


  /**
   * Letter upsert
   */
  export type LetterUpsertArgs = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude | null
    /**
     * The filter to search for the Letter to update in case it exists.
     */
    where: LetterWhereUniqueInput
    /**
     * In case the Letter found by the `where` argument doesn't exist, create a new Letter with this data.
     */
    create: XOR<LetterCreateInput, LetterUncheckedCreateInput>
    /**
     * In case the Letter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LetterUpdateInput, LetterUncheckedUpdateInput>
  }


  /**
   * Letter delete
   */
  export type LetterDeleteArgs = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude | null
    /**
     * Filter which Letter to delete.
     */
    where: LetterWhereUniqueInput
  }


  /**
   * Letter deleteMany
   */
  export type LetterDeleteManyArgs = {
    /**
     * Filter which Letters to delete
     */
    where?: LetterWhereInput
  }


  /**
   * Letter.Cake
   */
  export type Letter$CakeArgs = {
    /**
     * Select specific fields to fetch from the Cake
     */
    select?: CakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CakeInclude | null
    where?: CakeWhereInput
    orderBy?: Enumerable<CakeOrderByWithRelationInput>
    cursor?: CakeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CakeScalarFieldEnum>
  }


  /**
   * Letter without action
   */
  export type LetterArgs = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude | null
  }



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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
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
    id: bigint
    name: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    Letter?: boolean | User$LetterArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    Letter?: boolean | User$LetterArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Letter' ? Array < LetterGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Letter' ? Array < LetterGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

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
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
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
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
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
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
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
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

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
      T extends _Record<'select', any>
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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Letter<T extends User$LetterArgs= {}>(args?: Subset<T, User$LetterArgs>): Prisma.PrismaPromise<Array<LetterGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
  export type UserUpdateManyArgs = {
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
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
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
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.Letter
   */
  export type User$LetterArgs = {
    /**
     * Select specific fields to fetch from the Letter
     */
    select?: LetterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterInclude | null
    where?: LetterWhereInput
    orderBy?: Enumerable<LetterOrderByWithRelationInput>
    cursor?: LetterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LetterScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CakeScalarFieldEnum: {
    id: 'id',
    letterId: 'letterId',
    cakeType: 'cakeType'
  };

  export type CakeScalarFieldEnum = (typeof CakeScalarFieldEnum)[keyof typeof CakeScalarFieldEnum]


  export const CustomCakeScalarFieldEnum: {
    id: 'id',
    shape: 'shape',
    color: 'color',
    top_decorator: 'top_decorator',
    bottom_decorator: 'bottom_decorator',
    lettering: 'lettering',
    item: 'item'
  };

  export type CustomCakeScalarFieldEnum = (typeof CustomCakeScalarFieldEnum)[keyof typeof CustomCakeScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const LetterScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    created_at: 'created_at',
    name: 'name',
    content: 'content',
    is_private: 'is_private'
  };

  export type LetterScalarFieldEnum = (typeof LetterScalarFieldEnum)[keyof typeof LetterScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type CakeWhereInput = {
    AND?: Enumerable<CakeWhereInput>
    OR?: Enumerable<CakeWhereInput>
    NOT?: Enumerable<CakeWhereInput>
    id?: BigIntFilter | bigint | number
    letterId?: BigIntNullableFilter | bigint | number | null
    cakeType?: EnumCakeTypeNullableFilter | CakeType | null
    Letter?: XOR<LetterRelationFilter, LetterWhereInput> | null
    CustomCake?: XOR<CustomCakeRelationFilter, CustomCakeWhereInput> | null
  }

  export type CakeOrderByWithRelationInput = {
    id?: SortOrder
    letterId?: SortOrder
    cakeType?: SortOrder
    Letter?: LetterOrderByWithRelationInput
    CustomCake?: CustomCakeOrderByWithRelationInput
  }

  export type CakeWhereUniqueInput = {
    id?: bigint | number
  }

  export type CakeOrderByWithAggregationInput = {
    id?: SortOrder
    letterId?: SortOrder
    cakeType?: SortOrder
    _count?: CakeCountOrderByAggregateInput
    _avg?: CakeAvgOrderByAggregateInput
    _max?: CakeMaxOrderByAggregateInput
    _min?: CakeMinOrderByAggregateInput
    _sum?: CakeSumOrderByAggregateInput
  }

  export type CakeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CakeScalarWhereWithAggregatesInput>
    OR?: Enumerable<CakeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CakeScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    letterId?: BigIntNullableWithAggregatesFilter | bigint | number | null
    cakeType?: EnumCakeTypeNullableWithAggregatesFilter | CakeType | null
  }

  export type CustomCakeWhereInput = {
    AND?: Enumerable<CustomCakeWhereInput>
    OR?: Enumerable<CustomCakeWhereInput>
    NOT?: Enumerable<CustomCakeWhereInput>
    id?: BigIntFilter | bigint | number
    shape?: EnumCakeShapeNullableFilter | CakeShape | null
    color?: StringFilter | string
    top_decorator?: JsonFilter
    bottom_decorator?: JsonFilter
    lettering?: JsonFilter
    item?: StringNullableListFilter
    Cake?: XOR<CakeRelationFilter, CakeWhereInput>
  }

  export type CustomCakeOrderByWithRelationInput = {
    id?: SortOrder
    shape?: SortOrder
    color?: SortOrder
    top_decorator?: SortOrder
    bottom_decorator?: SortOrder
    lettering?: SortOrder
    item?: SortOrder
    Cake?: CakeOrderByWithRelationInput
  }

  export type CustomCakeWhereUniqueInput = {
    id?: bigint | number
  }

  export type CustomCakeOrderByWithAggregationInput = {
    id?: SortOrder
    shape?: SortOrder
    color?: SortOrder
    top_decorator?: SortOrder
    bottom_decorator?: SortOrder
    lettering?: SortOrder
    item?: SortOrder
    _count?: CustomCakeCountOrderByAggregateInput
    _avg?: CustomCakeAvgOrderByAggregateInput
    _max?: CustomCakeMaxOrderByAggregateInput
    _min?: CustomCakeMinOrderByAggregateInput
    _sum?: CustomCakeSumOrderByAggregateInput
  }

  export type CustomCakeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CustomCakeScalarWhereWithAggregatesInput>
    OR?: Enumerable<CustomCakeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CustomCakeScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    shape?: EnumCakeShapeNullableWithAggregatesFilter | CakeShape | null
    color?: StringWithAggregatesFilter | string
    top_decorator?: JsonWithAggregatesFilter
    bottom_decorator?: JsonWithAggregatesFilter
    lettering?: JsonWithAggregatesFilter
    item?: StringNullableListFilter
  }

  export type LetterWhereInput = {
    AND?: Enumerable<LetterWhereInput>
    OR?: Enumerable<LetterWhereInput>
    NOT?: Enumerable<LetterWhereInput>
    id?: BigIntFilter | bigint | number
    userId?: BigIntNullableFilter | bigint | number | null
    created_at?: DateTimeFilter | Date | string
    name?: StringFilter | string
    content?: StringNullableFilter | string | null
    is_private?: BoolFilter | boolean
    Cake?: CakeListRelationFilter
    User?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type LetterOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    content?: SortOrder
    is_private?: SortOrder
    Cake?: CakeOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type LetterWhereUniqueInput = {
    id?: bigint | number
  }

  export type LetterOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    content?: SortOrder
    is_private?: SortOrder
    _count?: LetterCountOrderByAggregateInput
    _avg?: LetterAvgOrderByAggregateInput
    _max?: LetterMaxOrderByAggregateInput
    _min?: LetterMinOrderByAggregateInput
    _sum?: LetterSumOrderByAggregateInput
  }

  export type LetterScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LetterScalarWhereWithAggregatesInput>
    OR?: Enumerable<LetterScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LetterScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    userId?: BigIntNullableWithAggregatesFilter | bigint | number | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    content?: StringNullableWithAggregatesFilter | string | null
    is_private?: BoolWithAggregatesFilter | boolean
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: BigIntFilter | bigint | number
    name?: StringFilter | string
    Letter?: LetterListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Letter?: LetterOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: bigint | number
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    name?: StringWithAggregatesFilter | string
  }

  export type CakeCreateInput = {
    id?: bigint | number
    cakeType?: CakeType | null
    Letter?: LetterCreateNestedOneWithoutCakeInput
    CustomCake?: CustomCakeCreateNestedOneWithoutCakeInput
  }

  export type CakeUncheckedCreateInput = {
    id?: bigint | number
    letterId?: bigint | number | null
    cakeType?: CakeType | null
    CustomCake?: CustomCakeUncheckedCreateNestedOneWithoutCakeInput
  }

  export type CakeUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cakeType?: NullableEnumCakeTypeFieldUpdateOperationsInput | CakeType | null
    Letter?: LetterUpdateOneWithoutCakeNestedInput
    CustomCake?: CustomCakeUpdateOneWithoutCakeNestedInput
  }

  export type CakeUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    letterId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cakeType?: NullableEnumCakeTypeFieldUpdateOperationsInput | CakeType | null
    CustomCake?: CustomCakeUncheckedUpdateOneWithoutCakeNestedInput
  }

  export type CakeCreateManyInput = {
    id?: bigint | number
    letterId?: bigint | number | null
    cakeType?: CakeType | null
  }

  export type CakeUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cakeType?: NullableEnumCakeTypeFieldUpdateOperationsInput | CakeType | null
  }

  export type CakeUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    letterId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cakeType?: NullableEnumCakeTypeFieldUpdateOperationsInput | CakeType | null
  }

  export type CustomCakeCreateInput = {
    shape?: CakeShape | null
    color: string
    top_decorator: JsonNullValueInput | InputJsonValue
    bottom_decorator: JsonNullValueInput | InputJsonValue
    lettering: JsonNullValueInput | InputJsonValue
    item?: CustomCakeCreateitemInput | Enumerable<string>
    Cake?: CakeCreateNestedOneWithoutCustomCakeInput
  }

  export type CustomCakeUncheckedCreateInput = {
    id?: bigint | number
    shape?: CakeShape | null
    color: string
    top_decorator: JsonNullValueInput | InputJsonValue
    bottom_decorator: JsonNullValueInput | InputJsonValue
    lettering: JsonNullValueInput | InputJsonValue
    item?: CustomCakeCreateitemInput | Enumerable<string>
  }

  export type CustomCakeUpdateInput = {
    shape?: NullableEnumCakeShapeFieldUpdateOperationsInput | CakeShape | null
    color?: StringFieldUpdateOperationsInput | string
    top_decorator?: JsonNullValueInput | InputJsonValue
    bottom_decorator?: JsonNullValueInput | InputJsonValue
    lettering?: JsonNullValueInput | InputJsonValue
    item?: CustomCakeUpdateitemInput | Enumerable<string>
    Cake?: CakeUpdateOneRequiredWithoutCustomCakeNestedInput
  }

  export type CustomCakeUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    shape?: NullableEnumCakeShapeFieldUpdateOperationsInput | CakeShape | null
    color?: StringFieldUpdateOperationsInput | string
    top_decorator?: JsonNullValueInput | InputJsonValue
    bottom_decorator?: JsonNullValueInput | InputJsonValue
    lettering?: JsonNullValueInput | InputJsonValue
    item?: CustomCakeUpdateitemInput | Enumerable<string>
  }

  export type CustomCakeCreateManyInput = {
    id?: bigint | number
    shape?: CakeShape | null
    color: string
    top_decorator: JsonNullValueInput | InputJsonValue
    bottom_decorator: JsonNullValueInput | InputJsonValue
    lettering: JsonNullValueInput | InputJsonValue
    item?: CustomCakeCreateitemInput | Enumerable<string>
  }

  export type CustomCakeUpdateManyMutationInput = {
    shape?: NullableEnumCakeShapeFieldUpdateOperationsInput | CakeShape | null
    color?: StringFieldUpdateOperationsInput | string
    top_decorator?: JsonNullValueInput | InputJsonValue
    bottom_decorator?: JsonNullValueInput | InputJsonValue
    lettering?: JsonNullValueInput | InputJsonValue
    item?: CustomCakeUpdateitemInput | Enumerable<string>
  }

  export type CustomCakeUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    shape?: NullableEnumCakeShapeFieldUpdateOperationsInput | CakeShape | null
    color?: StringFieldUpdateOperationsInput | string
    top_decorator?: JsonNullValueInput | InputJsonValue
    bottom_decorator?: JsonNullValueInput | InputJsonValue
    lettering?: JsonNullValueInput | InputJsonValue
    item?: CustomCakeUpdateitemInput | Enumerable<string>
  }

  export type LetterCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    name: string
    content?: string | null
    is_private: boolean
    Cake?: CakeCreateNestedManyWithoutLetterInput
    User?: UserCreateNestedOneWithoutLetterInput
  }

  export type LetterUncheckedCreateInput = {
    id?: bigint | number
    userId?: bigint | number | null
    created_at?: Date | string
    name: string
    content?: string | null
    is_private: boolean
    Cake?: CakeUncheckedCreateNestedManyWithoutLetterInput
  }

  export type LetterUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    Cake?: CakeUpdateManyWithoutLetterNestedInput
    User?: UserUpdateOneWithoutLetterNestedInput
  }

  export type LetterUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    Cake?: CakeUncheckedUpdateManyWithoutLetterNestedInput
  }

  export type LetterCreateManyInput = {
    id?: bigint | number
    userId?: bigint | number | null
    created_at?: Date | string
    name: string
    content?: string | null
    is_private: boolean
  }

  export type LetterUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LetterUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateInput = {
    id?: bigint | number
    name?: string
    Letter?: LetterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    name?: string
    Letter?: LetterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    Letter?: LetterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    Letter?: LetterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    name?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type BigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type EnumCakeTypeNullableFilter = {
    equals?: CakeType | null
    in?: Enumerable<CakeType> | null
    notIn?: Enumerable<CakeType> | null
    not?: NestedEnumCakeTypeNullableFilter | CakeType | null
  }

  export type LetterRelationFilter = {
    is?: LetterWhereInput | null
    isNot?: LetterWhereInput | null
  }

  export type CustomCakeRelationFilter = {
    is?: CustomCakeWhereInput | null
    isNot?: CustomCakeWhereInput | null
  }

  export type CakeCountOrderByAggregateInput = {
    id?: SortOrder
    letterId?: SortOrder
    cakeType?: SortOrder
  }

  export type CakeAvgOrderByAggregateInput = {
    id?: SortOrder
    letterId?: SortOrder
  }

  export type CakeMaxOrderByAggregateInput = {
    id?: SortOrder
    letterId?: SortOrder
    cakeType?: SortOrder
  }

  export type CakeMinOrderByAggregateInput = {
    id?: SortOrder
    letterId?: SortOrder
    cakeType?: SortOrder
  }

  export type CakeSumOrderByAggregateInput = {
    id?: SortOrder
    letterId?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type BigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
  }

  export type EnumCakeTypeNullableWithAggregatesFilter = {
    equals?: CakeType | null
    in?: Enumerable<CakeType> | null
    notIn?: Enumerable<CakeType> | null
    not?: NestedEnumCakeTypeNullableWithAggregatesFilter | CakeType | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumCakeTypeNullableFilter
    _max?: NestedEnumCakeTypeNullableFilter
  }

  export type EnumCakeShapeNullableFilter = {
    equals?: CakeShape | null
    in?: Enumerable<CakeShape> | null
    notIn?: Enumerable<CakeShape> | null
    not?: NestedEnumCakeShapeNullableFilter | CakeShape | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type CakeRelationFilter = {
    is?: CakeWhereInput
    isNot?: CakeWhereInput
  }

  export type CustomCakeCountOrderByAggregateInput = {
    id?: SortOrder
    shape?: SortOrder
    color?: SortOrder
    top_decorator?: SortOrder
    bottom_decorator?: SortOrder
    lettering?: SortOrder
    item?: SortOrder
  }

  export type CustomCakeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomCakeMaxOrderByAggregateInput = {
    id?: SortOrder
    shape?: SortOrder
    color?: SortOrder
  }

  export type CustomCakeMinOrderByAggregateInput = {
    id?: SortOrder
    shape?: SortOrder
    color?: SortOrder
  }

  export type CustomCakeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCakeShapeNullableWithAggregatesFilter = {
    equals?: CakeShape | null
    in?: Enumerable<CakeShape> | null
    notIn?: Enumerable<CakeShape> | null
    not?: NestedEnumCakeShapeNullableWithAggregatesFilter | CakeShape | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumCakeShapeNullableFilter
    _max?: NestedEnumCakeShapeNullableFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type CakeListRelationFilter = {
    every?: CakeWhereInput
    some?: CakeWhereInput
    none?: CakeWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CakeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LetterCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    content?: SortOrder
    is_private?: SortOrder
  }

  export type LetterAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LetterMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    content?: SortOrder
    is_private?: SortOrder
  }

  export type LetterMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    content?: SortOrder
    is_private?: SortOrder
  }

  export type LetterSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type LetterListRelationFilter = {
    every?: LetterWhereInput
    some?: LetterWhereInput
    none?: LetterWhereInput
  }

  export type LetterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LetterCreateNestedOneWithoutCakeInput = {
    create?: XOR<LetterCreateWithoutCakeInput, LetterUncheckedCreateWithoutCakeInput>
    connectOrCreate?: LetterCreateOrConnectWithoutCakeInput
    connect?: LetterWhereUniqueInput
  }

  export type CustomCakeCreateNestedOneWithoutCakeInput = {
    create?: XOR<CustomCakeCreateWithoutCakeInput, CustomCakeUncheckedCreateWithoutCakeInput>
    connectOrCreate?: CustomCakeCreateOrConnectWithoutCakeInput
    connect?: CustomCakeWhereUniqueInput
  }

  export type CustomCakeUncheckedCreateNestedOneWithoutCakeInput = {
    create?: XOR<CustomCakeCreateWithoutCakeInput, CustomCakeUncheckedCreateWithoutCakeInput>
    connectOrCreate?: CustomCakeCreateOrConnectWithoutCakeInput
    connect?: CustomCakeWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableEnumCakeTypeFieldUpdateOperationsInput = {
    set?: CakeType | null
  }

  export type LetterUpdateOneWithoutCakeNestedInput = {
    create?: XOR<LetterCreateWithoutCakeInput, LetterUncheckedCreateWithoutCakeInput>
    connectOrCreate?: LetterCreateOrConnectWithoutCakeInput
    upsert?: LetterUpsertWithoutCakeInput
    disconnect?: boolean
    delete?: boolean
    connect?: LetterWhereUniqueInput
    update?: XOR<LetterUpdateWithoutCakeInput, LetterUncheckedUpdateWithoutCakeInput>
  }

  export type CustomCakeUpdateOneWithoutCakeNestedInput = {
    create?: XOR<CustomCakeCreateWithoutCakeInput, CustomCakeUncheckedCreateWithoutCakeInput>
    connectOrCreate?: CustomCakeCreateOrConnectWithoutCakeInput
    upsert?: CustomCakeUpsertWithoutCakeInput
    disconnect?: boolean
    delete?: boolean
    connect?: CustomCakeWhereUniqueInput
    update?: XOR<CustomCakeUpdateWithoutCakeInput, CustomCakeUncheckedUpdateWithoutCakeInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type CustomCakeUncheckedUpdateOneWithoutCakeNestedInput = {
    create?: XOR<CustomCakeCreateWithoutCakeInput, CustomCakeUncheckedCreateWithoutCakeInput>
    connectOrCreate?: CustomCakeCreateOrConnectWithoutCakeInput
    upsert?: CustomCakeUpsertWithoutCakeInput
    disconnect?: boolean
    delete?: boolean
    connect?: CustomCakeWhereUniqueInput
    update?: XOR<CustomCakeUpdateWithoutCakeInput, CustomCakeUncheckedUpdateWithoutCakeInput>
  }

  export type CustomCakeCreateitemInput = {
    set: Enumerable<string>
  }

  export type CakeCreateNestedOneWithoutCustomCakeInput = {
    create?: XOR<CakeCreateWithoutCustomCakeInput, CakeUncheckedCreateWithoutCustomCakeInput>
    connectOrCreate?: CakeCreateOrConnectWithoutCustomCakeInput
    connect?: CakeWhereUniqueInput
  }

  export type NullableEnumCakeShapeFieldUpdateOperationsInput = {
    set?: CakeShape | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CustomCakeUpdateitemInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type CakeUpdateOneRequiredWithoutCustomCakeNestedInput = {
    create?: XOR<CakeCreateWithoutCustomCakeInput, CakeUncheckedCreateWithoutCustomCakeInput>
    connectOrCreate?: CakeCreateOrConnectWithoutCustomCakeInput
    upsert?: CakeUpsertWithoutCustomCakeInput
    connect?: CakeWhereUniqueInput
    update?: XOR<CakeUpdateWithoutCustomCakeInput, CakeUncheckedUpdateWithoutCustomCakeInput>
  }

  export type CakeCreateNestedManyWithoutLetterInput = {
    create?: XOR<Enumerable<CakeCreateWithoutLetterInput>, Enumerable<CakeUncheckedCreateWithoutLetterInput>>
    connectOrCreate?: Enumerable<CakeCreateOrConnectWithoutLetterInput>
    createMany?: CakeCreateManyLetterInputEnvelope
    connect?: Enumerable<CakeWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutLetterInput = {
    create?: XOR<UserCreateWithoutLetterInput, UserUncheckedCreateWithoutLetterInput>
    connectOrCreate?: UserCreateOrConnectWithoutLetterInput
    connect?: UserWhereUniqueInput
  }

  export type CakeUncheckedCreateNestedManyWithoutLetterInput = {
    create?: XOR<Enumerable<CakeCreateWithoutLetterInput>, Enumerable<CakeUncheckedCreateWithoutLetterInput>>
    connectOrCreate?: Enumerable<CakeCreateOrConnectWithoutLetterInput>
    createMany?: CakeCreateManyLetterInputEnvelope
    connect?: Enumerable<CakeWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CakeUpdateManyWithoutLetterNestedInput = {
    create?: XOR<Enumerable<CakeCreateWithoutLetterInput>, Enumerable<CakeUncheckedCreateWithoutLetterInput>>
    connectOrCreate?: Enumerable<CakeCreateOrConnectWithoutLetterInput>
    upsert?: Enumerable<CakeUpsertWithWhereUniqueWithoutLetterInput>
    createMany?: CakeCreateManyLetterInputEnvelope
    set?: Enumerable<CakeWhereUniqueInput>
    disconnect?: Enumerable<CakeWhereUniqueInput>
    delete?: Enumerable<CakeWhereUniqueInput>
    connect?: Enumerable<CakeWhereUniqueInput>
    update?: Enumerable<CakeUpdateWithWhereUniqueWithoutLetterInput>
    updateMany?: Enumerable<CakeUpdateManyWithWhereWithoutLetterInput>
    deleteMany?: Enumerable<CakeScalarWhereInput>
  }

  export type UserUpdateOneWithoutLetterNestedInput = {
    create?: XOR<UserCreateWithoutLetterInput, UserUncheckedCreateWithoutLetterInput>
    connectOrCreate?: UserCreateOrConnectWithoutLetterInput
    upsert?: UserUpsertWithoutLetterInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutLetterInput, UserUncheckedUpdateWithoutLetterInput>
  }

  export type CakeUncheckedUpdateManyWithoutLetterNestedInput = {
    create?: XOR<Enumerable<CakeCreateWithoutLetterInput>, Enumerable<CakeUncheckedCreateWithoutLetterInput>>
    connectOrCreate?: Enumerable<CakeCreateOrConnectWithoutLetterInput>
    upsert?: Enumerable<CakeUpsertWithWhereUniqueWithoutLetterInput>
    createMany?: CakeCreateManyLetterInputEnvelope
    set?: Enumerable<CakeWhereUniqueInput>
    disconnect?: Enumerable<CakeWhereUniqueInput>
    delete?: Enumerable<CakeWhereUniqueInput>
    connect?: Enumerable<CakeWhereUniqueInput>
    update?: Enumerable<CakeUpdateWithWhereUniqueWithoutLetterInput>
    updateMany?: Enumerable<CakeUpdateManyWithWhereWithoutLetterInput>
    deleteMany?: Enumerable<CakeScalarWhereInput>
  }

  export type LetterCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<LetterCreateWithoutUserInput>, Enumerable<LetterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LetterCreateOrConnectWithoutUserInput>
    createMany?: LetterCreateManyUserInputEnvelope
    connect?: Enumerable<LetterWhereUniqueInput>
  }

  export type LetterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<LetterCreateWithoutUserInput>, Enumerable<LetterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LetterCreateOrConnectWithoutUserInput>
    createMany?: LetterCreateManyUserInputEnvelope
    connect?: Enumerable<LetterWhereUniqueInput>
  }

  export type LetterUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<LetterCreateWithoutUserInput>, Enumerable<LetterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LetterCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<LetterUpsertWithWhereUniqueWithoutUserInput>
    createMany?: LetterCreateManyUserInputEnvelope
    set?: Enumerable<LetterWhereUniqueInput>
    disconnect?: Enumerable<LetterWhereUniqueInput>
    delete?: Enumerable<LetterWhereUniqueInput>
    connect?: Enumerable<LetterWhereUniqueInput>
    update?: Enumerable<LetterUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<LetterUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<LetterScalarWhereInput>
  }

  export type LetterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<LetterCreateWithoutUserInput>, Enumerable<LetterUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LetterCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<LetterUpsertWithWhereUniqueWithoutUserInput>
    createMany?: LetterCreateManyUserInputEnvelope
    set?: Enumerable<LetterWhereUniqueInput>
    disconnect?: Enumerable<LetterWhereUniqueInput>
    delete?: Enumerable<LetterWhereUniqueInput>
    connect?: Enumerable<LetterWhereUniqueInput>
    update?: Enumerable<LetterUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<LetterUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<LetterScalarWhereInput>
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedBigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type NestedEnumCakeTypeNullableFilter = {
    equals?: CakeType | null
    in?: Enumerable<CakeType> | null
    notIn?: Enumerable<CakeType> | null
    not?: NestedEnumCakeTypeNullableFilter | CakeType | null
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedEnumCakeTypeNullableWithAggregatesFilter = {
    equals?: CakeType | null
    in?: Enumerable<CakeType> | null
    notIn?: Enumerable<CakeType> | null
    not?: NestedEnumCakeTypeNullableWithAggregatesFilter | CakeType | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumCakeTypeNullableFilter
    _max?: NestedEnumCakeTypeNullableFilter
  }

  export type NestedEnumCakeShapeNullableFilter = {
    equals?: CakeShape | null
    in?: Enumerable<CakeShape> | null
    notIn?: Enumerable<CakeShape> | null
    not?: NestedEnumCakeShapeNullableFilter | CakeShape | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumCakeShapeNullableWithAggregatesFilter = {
    equals?: CakeShape | null
    in?: Enumerable<CakeShape> | null
    notIn?: Enumerable<CakeShape> | null
    not?: NestedEnumCakeShapeNullableWithAggregatesFilter | CakeShape | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumCakeShapeNullableFilter
    _max?: NestedEnumCakeShapeNullableFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type LetterCreateWithoutCakeInput = {
    id?: bigint | number
    created_at?: Date | string
    name: string
    content?: string | null
    is_private: boolean
    User?: UserCreateNestedOneWithoutLetterInput
  }

  export type LetterUncheckedCreateWithoutCakeInput = {
    id?: bigint | number
    userId?: bigint | number | null
    created_at?: Date | string
    name: string
    content?: string | null
    is_private: boolean
  }

  export type LetterCreateOrConnectWithoutCakeInput = {
    where: LetterWhereUniqueInput
    create: XOR<LetterCreateWithoutCakeInput, LetterUncheckedCreateWithoutCakeInput>
  }

  export type CustomCakeCreateWithoutCakeInput = {
    shape?: CakeShape | null
    color: string
    top_decorator: JsonNullValueInput | InputJsonValue
    bottom_decorator: JsonNullValueInput | InputJsonValue
    lettering: JsonNullValueInput | InputJsonValue
    item?: CustomCakeCreateitemInput | Enumerable<string>
  }

  export type CustomCakeUncheckedCreateWithoutCakeInput = {
    shape?: CakeShape | null
    color: string
    top_decorator: JsonNullValueInput | InputJsonValue
    bottom_decorator: JsonNullValueInput | InputJsonValue
    lettering: JsonNullValueInput | InputJsonValue
    item?: CustomCakeCreateitemInput | Enumerable<string>
  }

  export type CustomCakeCreateOrConnectWithoutCakeInput = {
    where: CustomCakeWhereUniqueInput
    create: XOR<CustomCakeCreateWithoutCakeInput, CustomCakeUncheckedCreateWithoutCakeInput>
  }

  export type LetterUpsertWithoutCakeInput = {
    update: XOR<LetterUpdateWithoutCakeInput, LetterUncheckedUpdateWithoutCakeInput>
    create: XOR<LetterCreateWithoutCakeInput, LetterUncheckedCreateWithoutCakeInput>
  }

  export type LetterUpdateWithoutCakeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutLetterNestedInput
  }

  export type LetterUncheckedUpdateWithoutCakeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomCakeUpsertWithoutCakeInput = {
    update: XOR<CustomCakeUpdateWithoutCakeInput, CustomCakeUncheckedUpdateWithoutCakeInput>
    create: XOR<CustomCakeCreateWithoutCakeInput, CustomCakeUncheckedCreateWithoutCakeInput>
  }

  export type CustomCakeUpdateWithoutCakeInput = {
    shape?: NullableEnumCakeShapeFieldUpdateOperationsInput | CakeShape | null
    color?: StringFieldUpdateOperationsInput | string
    top_decorator?: JsonNullValueInput | InputJsonValue
    bottom_decorator?: JsonNullValueInput | InputJsonValue
    lettering?: JsonNullValueInput | InputJsonValue
    item?: CustomCakeUpdateitemInput | Enumerable<string>
  }

  export type CustomCakeUncheckedUpdateWithoutCakeInput = {
    shape?: NullableEnumCakeShapeFieldUpdateOperationsInput | CakeShape | null
    color?: StringFieldUpdateOperationsInput | string
    top_decorator?: JsonNullValueInput | InputJsonValue
    bottom_decorator?: JsonNullValueInput | InputJsonValue
    lettering?: JsonNullValueInput | InputJsonValue
    item?: CustomCakeUpdateitemInput | Enumerable<string>
  }

  export type CakeCreateWithoutCustomCakeInput = {
    id?: bigint | number
    cakeType?: CakeType | null
    Letter?: LetterCreateNestedOneWithoutCakeInput
  }

  export type CakeUncheckedCreateWithoutCustomCakeInput = {
    id?: bigint | number
    letterId?: bigint | number | null
    cakeType?: CakeType | null
  }

  export type CakeCreateOrConnectWithoutCustomCakeInput = {
    where: CakeWhereUniqueInput
    create: XOR<CakeCreateWithoutCustomCakeInput, CakeUncheckedCreateWithoutCustomCakeInput>
  }

  export type CakeUpsertWithoutCustomCakeInput = {
    update: XOR<CakeUpdateWithoutCustomCakeInput, CakeUncheckedUpdateWithoutCustomCakeInput>
    create: XOR<CakeCreateWithoutCustomCakeInput, CakeUncheckedCreateWithoutCustomCakeInput>
  }

  export type CakeUpdateWithoutCustomCakeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cakeType?: NullableEnumCakeTypeFieldUpdateOperationsInput | CakeType | null
    Letter?: LetterUpdateOneWithoutCakeNestedInput
  }

  export type CakeUncheckedUpdateWithoutCustomCakeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    letterId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    cakeType?: NullableEnumCakeTypeFieldUpdateOperationsInput | CakeType | null
  }

  export type CakeCreateWithoutLetterInput = {
    id?: bigint | number
    cakeType?: CakeType | null
    CustomCake?: CustomCakeCreateNestedOneWithoutCakeInput
  }

  export type CakeUncheckedCreateWithoutLetterInput = {
    id?: bigint | number
    cakeType?: CakeType | null
    CustomCake?: CustomCakeUncheckedCreateNestedOneWithoutCakeInput
  }

  export type CakeCreateOrConnectWithoutLetterInput = {
    where: CakeWhereUniqueInput
    create: XOR<CakeCreateWithoutLetterInput, CakeUncheckedCreateWithoutLetterInput>
  }

  export type CakeCreateManyLetterInputEnvelope = {
    data: Enumerable<CakeCreateManyLetterInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutLetterInput = {
    id?: bigint | number
    name?: string
  }

  export type UserUncheckedCreateWithoutLetterInput = {
    id?: bigint | number
    name?: string
  }

  export type UserCreateOrConnectWithoutLetterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLetterInput, UserUncheckedCreateWithoutLetterInput>
  }

  export type CakeUpsertWithWhereUniqueWithoutLetterInput = {
    where: CakeWhereUniqueInput
    update: XOR<CakeUpdateWithoutLetterInput, CakeUncheckedUpdateWithoutLetterInput>
    create: XOR<CakeCreateWithoutLetterInput, CakeUncheckedCreateWithoutLetterInput>
  }

  export type CakeUpdateWithWhereUniqueWithoutLetterInput = {
    where: CakeWhereUniqueInput
    data: XOR<CakeUpdateWithoutLetterInput, CakeUncheckedUpdateWithoutLetterInput>
  }

  export type CakeUpdateManyWithWhereWithoutLetterInput = {
    where: CakeScalarWhereInput
    data: XOR<CakeUpdateManyMutationInput, CakeUncheckedUpdateManyWithoutCakeInput>
  }

  export type CakeScalarWhereInput = {
    AND?: Enumerable<CakeScalarWhereInput>
    OR?: Enumerable<CakeScalarWhereInput>
    NOT?: Enumerable<CakeScalarWhereInput>
    id?: BigIntFilter | bigint | number
    letterId?: BigIntNullableFilter | bigint | number | null
    cakeType?: EnumCakeTypeNullableFilter | CakeType | null
  }

  export type UserUpsertWithoutLetterInput = {
    update: XOR<UserUpdateWithoutLetterInput, UserUncheckedUpdateWithoutLetterInput>
    create: XOR<UserCreateWithoutLetterInput, UserUncheckedCreateWithoutLetterInput>
  }

  export type UserUpdateWithoutLetterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutLetterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LetterCreateWithoutUserInput = {
    id?: bigint | number
    created_at?: Date | string
    name: string
    content?: string | null
    is_private: boolean
    Cake?: CakeCreateNestedManyWithoutLetterInput
  }

  export type LetterUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    created_at?: Date | string
    name: string
    content?: string | null
    is_private: boolean
    Cake?: CakeUncheckedCreateNestedManyWithoutLetterInput
  }

  export type LetterCreateOrConnectWithoutUserInput = {
    where: LetterWhereUniqueInput
    create: XOR<LetterCreateWithoutUserInput, LetterUncheckedCreateWithoutUserInput>
  }

  export type LetterCreateManyUserInputEnvelope = {
    data: Enumerable<LetterCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type LetterUpsertWithWhereUniqueWithoutUserInput = {
    where: LetterWhereUniqueInput
    update: XOR<LetterUpdateWithoutUserInput, LetterUncheckedUpdateWithoutUserInput>
    create: XOR<LetterCreateWithoutUserInput, LetterUncheckedCreateWithoutUserInput>
  }

  export type LetterUpdateWithWhereUniqueWithoutUserInput = {
    where: LetterWhereUniqueInput
    data: XOR<LetterUpdateWithoutUserInput, LetterUncheckedUpdateWithoutUserInput>
  }

  export type LetterUpdateManyWithWhereWithoutUserInput = {
    where: LetterScalarWhereInput
    data: XOR<LetterUpdateManyMutationInput, LetterUncheckedUpdateManyWithoutLetterInput>
  }

  export type LetterScalarWhereInput = {
    AND?: Enumerable<LetterScalarWhereInput>
    OR?: Enumerable<LetterScalarWhereInput>
    NOT?: Enumerable<LetterScalarWhereInput>
    id?: BigIntFilter | bigint | number
    userId?: BigIntNullableFilter | bigint | number | null
    created_at?: DateTimeFilter | Date | string
    name?: StringFilter | string
    content?: StringNullableFilter | string | null
    is_private?: BoolFilter | boolean
  }

  export type CakeCreateManyLetterInput = {
    id?: bigint | number
    cakeType?: CakeType | null
  }

  export type CakeUpdateWithoutLetterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cakeType?: NullableEnumCakeTypeFieldUpdateOperationsInput | CakeType | null
    CustomCake?: CustomCakeUpdateOneWithoutCakeNestedInput
  }

  export type CakeUncheckedUpdateWithoutLetterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cakeType?: NullableEnumCakeTypeFieldUpdateOperationsInput | CakeType | null
    CustomCake?: CustomCakeUncheckedUpdateOneWithoutCakeNestedInput
  }

  export type CakeUncheckedUpdateManyWithoutCakeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cakeType?: NullableEnumCakeTypeFieldUpdateOperationsInput | CakeType | null
  }

  export type LetterCreateManyUserInput = {
    id?: bigint | number
    created_at?: Date | string
    name: string
    content?: string | null
    is_private: boolean
  }

  export type LetterUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    Cake?: CakeUpdateManyWithoutLetterNestedInput
  }

  export type LetterUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    Cake?: CakeUncheckedUpdateManyWithoutLetterNestedInput
  }

  export type LetterUncheckedUpdateManyWithoutLetterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
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