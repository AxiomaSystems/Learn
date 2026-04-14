
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
 * Model Institution
 * 
 */
export type Institution = $Result.DefaultSelection<Prisma.$InstitutionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model Coursework
 * 
 */
export type Coursework = $Result.DefaultSelection<Prisma.$CourseworkPayload>
/**
 * Model Resource
 * 
 */
export type Resource = $Result.DefaultSelection<Prisma.$ResourcePayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model OfficeHourSlot
 * 
 */
export type OfficeHourSlot = $Result.DefaultSelection<Prisma.$OfficeHourSlotPayload>
/**
 * Model OfficeHourBooking
 * 
 */
export type OfficeHourBooking = $Result.DefaultSelection<Prisma.$OfficeHourBookingPayload>
/**
 * Model AuditEvent
 * 
 */
export type AuditEvent = $Result.DefaultSelection<Prisma.$AuditEventPayload>
/**
 * Model AIInteraction
 * 
 */
export type AIInteraction = $Result.DefaultSelection<Prisma.$AIInteractionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AppRole: {
  STUDENT: 'STUDENT',
  EDUCATOR: 'EDUCATOR',
  TEACHING_ASSISTANT: 'TEACHING_ASSISTANT',
  INSTITUTION_ADMIN: 'INSTITUTION_ADMIN',
  PLATFORM_ADMIN: 'PLATFORM_ADMIN'
};

export type AppRole = (typeof AppRole)[keyof typeof AppRole]


export const CourseworkKind: {
  READING: 'READING',
  ASSIGNMENT: 'ASSIGNMENT',
  DISCUSSION: 'DISCUSSION',
  PREP: 'PREP',
  QUIZ: 'QUIZ',
  PROJECT: 'PROJECT'
};

export type CourseworkKind = (typeof CourseworkKind)[keyof typeof CourseworkKind]


export const SubmissionStatus: {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  RETURNED: 'RETURNED'
};

export type SubmissionStatus = (typeof SubmissionStatus)[keyof typeof SubmissionStatus]


export const BookingStatus: {
  BOOKED: 'BOOKED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]

}

export type AppRole = $Enums.AppRole

export const AppRole: typeof $Enums.AppRole

export type CourseworkKind = $Enums.CourseworkKind

export const CourseworkKind: typeof $Enums.CourseworkKind

export type SubmissionStatus = $Enums.SubmissionStatus

export const SubmissionStatus: typeof $Enums.SubmissionStatus

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Institutions
 * const institutions = await prisma.institution.findMany()
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
   * // Fetch zero or more Institutions
   * const institutions = await prisma.institution.findMany()
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
   * `prisma.institution`: Exposes CRUD operations for the **Institution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Institutions
    * const institutions = await prisma.institution.findMany()
    * ```
    */
  get institution(): Prisma.InstitutionDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coursework`: Exposes CRUD operations for the **Coursework** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courseworks
    * const courseworks = await prisma.coursework.findMany()
    * ```
    */
  get coursework(): Prisma.CourseworkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resource`: Exposes CRUD operations for the **Resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resources
    * const resources = await prisma.resource.findMany()
    * ```
    */
  get resource(): Prisma.ResourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.officeHourSlot`: Exposes CRUD operations for the **OfficeHourSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OfficeHourSlots
    * const officeHourSlots = await prisma.officeHourSlot.findMany()
    * ```
    */
  get officeHourSlot(): Prisma.OfficeHourSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.officeHourBooking`: Exposes CRUD operations for the **OfficeHourBooking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OfficeHourBookings
    * const officeHourBookings = await prisma.officeHourBooking.findMany()
    * ```
    */
  get officeHourBooking(): Prisma.OfficeHourBookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditEvent`: Exposes CRUD operations for the **AuditEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditEvents
    * const auditEvents = await prisma.auditEvent.findMany()
    * ```
    */
  get auditEvent(): Prisma.AuditEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIInteraction`: Exposes CRUD operations for the **AIInteraction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIInteractions
    * const aIInteractions = await prisma.aIInteraction.findMany()
    * ```
    */
  get aIInteraction(): Prisma.AIInteractionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    Institution: 'Institution',
    User: 'User',
    Class: 'Class',
    Coursework: 'Coursework',
    Resource: 'Resource',
    Submission: 'Submission',
    OfficeHourSlot: 'OfficeHourSlot',
    OfficeHourBooking: 'OfficeHourBooking',
    AuditEvent: 'AuditEvent',
    AIInteraction: 'AIInteraction'
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
      modelProps: "institution" | "user" | "class" | "coursework" | "resource" | "submission" | "officeHourSlot" | "officeHourBooking" | "auditEvent" | "aIInteraction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Institution: {
        payload: Prisma.$InstitutionPayload<ExtArgs>
        fields: Prisma.InstitutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstitutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstitutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          findFirst: {
            args: Prisma.InstitutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstitutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          findMany: {
            args: Prisma.InstitutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          create: {
            args: Prisma.InstitutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          createMany: {
            args: Prisma.InstitutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstitutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          delete: {
            args: Prisma.InstitutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          update: {
            args: Prisma.InstitutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          deleteMany: {
            args: Prisma.InstitutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstitutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstitutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          upsert: {
            args: Prisma.InstitutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          aggregate: {
            args: Prisma.InstitutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstitution>
          }
          groupBy: {
            args: Prisma.InstitutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstitutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstitutionCountArgs<ExtArgs>
            result: $Utils.Optional<InstitutionCountAggregateOutputType> | number
          }
        }
      }
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
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      Coursework: {
        payload: Prisma.$CourseworkPayload<ExtArgs>
        fields: Prisma.CourseworkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseworkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseworkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload>
          }
          findFirst: {
            args: Prisma.CourseworkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseworkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload>
          }
          findMany: {
            args: Prisma.CourseworkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload>[]
          }
          create: {
            args: Prisma.CourseworkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload>
          }
          createMany: {
            args: Prisma.CourseworkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseworkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload>[]
          }
          delete: {
            args: Prisma.CourseworkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload>
          }
          update: {
            args: Prisma.CourseworkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload>
          }
          deleteMany: {
            args: Prisma.CourseworkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseworkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseworkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload>[]
          }
          upsert: {
            args: Prisma.CourseworkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload>
          }
          aggregate: {
            args: Prisma.CourseworkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoursework>
          }
          groupBy: {
            args: Prisma.CourseworkGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseworkGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseworkCountArgs<ExtArgs>
            result: $Utils.Optional<CourseworkCountAggregateOutputType> | number
          }
        }
      }
      Resource: {
        payload: Prisma.$ResourcePayload<ExtArgs>
        fields: Prisma.ResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findFirst: {
            args: Prisma.ResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findMany: {
            args: Prisma.ResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          create: {
            args: Prisma.ResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          createMany: {
            args: Prisma.ResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          delete: {
            args: Prisma.ResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          update: {
            args: Prisma.ResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          deleteMany: {
            args: Prisma.ResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          upsert: {
            args: Prisma.ResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          aggregate: {
            args: Prisma.ResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResource>
          }
          groupBy: {
            args: Prisma.ResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      OfficeHourSlot: {
        payload: Prisma.$OfficeHourSlotPayload<ExtArgs>
        fields: Prisma.OfficeHourSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfficeHourSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfficeHourSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourSlotPayload>
          }
          findFirst: {
            args: Prisma.OfficeHourSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfficeHourSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourSlotPayload>
          }
          findMany: {
            args: Prisma.OfficeHourSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourSlotPayload>[]
          }
          create: {
            args: Prisma.OfficeHourSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourSlotPayload>
          }
          createMany: {
            args: Prisma.OfficeHourSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfficeHourSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourSlotPayload>[]
          }
          delete: {
            args: Prisma.OfficeHourSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourSlotPayload>
          }
          update: {
            args: Prisma.OfficeHourSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourSlotPayload>
          }
          deleteMany: {
            args: Prisma.OfficeHourSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfficeHourSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfficeHourSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourSlotPayload>[]
          }
          upsert: {
            args: Prisma.OfficeHourSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourSlotPayload>
          }
          aggregate: {
            args: Prisma.OfficeHourSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOfficeHourSlot>
          }
          groupBy: {
            args: Prisma.OfficeHourSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfficeHourSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfficeHourSlotCountArgs<ExtArgs>
            result: $Utils.Optional<OfficeHourSlotCountAggregateOutputType> | number
          }
        }
      }
      OfficeHourBooking: {
        payload: Prisma.$OfficeHourBookingPayload<ExtArgs>
        fields: Prisma.OfficeHourBookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfficeHourBookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourBookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfficeHourBookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourBookingPayload>
          }
          findFirst: {
            args: Prisma.OfficeHourBookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourBookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfficeHourBookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourBookingPayload>
          }
          findMany: {
            args: Prisma.OfficeHourBookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourBookingPayload>[]
          }
          create: {
            args: Prisma.OfficeHourBookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourBookingPayload>
          }
          createMany: {
            args: Prisma.OfficeHourBookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfficeHourBookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourBookingPayload>[]
          }
          delete: {
            args: Prisma.OfficeHourBookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourBookingPayload>
          }
          update: {
            args: Prisma.OfficeHourBookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourBookingPayload>
          }
          deleteMany: {
            args: Prisma.OfficeHourBookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfficeHourBookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfficeHourBookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourBookingPayload>[]
          }
          upsert: {
            args: Prisma.OfficeHourBookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficeHourBookingPayload>
          }
          aggregate: {
            args: Prisma.OfficeHourBookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOfficeHourBooking>
          }
          groupBy: {
            args: Prisma.OfficeHourBookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfficeHourBookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfficeHourBookingCountArgs<ExtArgs>
            result: $Utils.Optional<OfficeHourBookingCountAggregateOutputType> | number
          }
        }
      }
      AuditEvent: {
        payload: Prisma.$AuditEventPayload<ExtArgs>
        fields: Prisma.AuditEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          findFirst: {
            args: Prisma.AuditEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          findMany: {
            args: Prisma.AuditEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>[]
          }
          create: {
            args: Prisma.AuditEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          createMany: {
            args: Prisma.AuditEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>[]
          }
          delete: {
            args: Prisma.AuditEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          update: {
            args: Prisma.AuditEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          deleteMany: {
            args: Prisma.AuditEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>[]
          }
          upsert: {
            args: Prisma.AuditEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          aggregate: {
            args: Prisma.AuditEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditEvent>
          }
          groupBy: {
            args: Prisma.AuditEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditEventCountArgs<ExtArgs>
            result: $Utils.Optional<AuditEventCountAggregateOutputType> | number
          }
        }
      }
      AIInteraction: {
        payload: Prisma.$AIInteractionPayload<ExtArgs>
        fields: Prisma.AIInteractionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIInteractionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIInteractionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload>
          }
          findFirst: {
            args: Prisma.AIInteractionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIInteractionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload>
          }
          findMany: {
            args: Prisma.AIInteractionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload>[]
          }
          create: {
            args: Prisma.AIInteractionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload>
          }
          createMany: {
            args: Prisma.AIInteractionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIInteractionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload>[]
          }
          delete: {
            args: Prisma.AIInteractionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload>
          }
          update: {
            args: Prisma.AIInteractionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload>
          }
          deleteMany: {
            args: Prisma.AIInteractionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIInteractionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIInteractionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload>[]
          }
          upsert: {
            args: Prisma.AIInteractionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionPayload>
          }
          aggregate: {
            args: Prisma.AIInteractionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIInteraction>
          }
          groupBy: {
            args: Prisma.AIInteractionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIInteractionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIInteractionCountArgs<ExtArgs>
            result: $Utils.Optional<AIInteractionCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    institution?: InstitutionOmit
    user?: UserOmit
    class?: ClassOmit
    coursework?: CourseworkOmit
    resource?: ResourceOmit
    submission?: SubmissionOmit
    officeHourSlot?: OfficeHourSlotOmit
    officeHourBooking?: OfficeHourBookingOmit
    auditEvent?: AuditEventOmit
    aIInteraction?: AIInteractionOmit
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
   * Count Type InstitutionCountOutputType
   */

  export type InstitutionCountOutputType = {
    users: number
    classes: number
  }

  export type InstitutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | InstitutionCountOutputTypeCountUsersArgs
    classes?: boolean | InstitutionCountOutputTypeCountClassesArgs
  }

  // Custom InputTypes
  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionCountOutputType
     */
    select?: InstitutionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    taughtClasses: number
    submissions: number
    officeHourBookings: number
    createdOfficeHourSlots: number
    auditEvents: number
    aiInteractions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taughtClasses?: boolean | UserCountOutputTypeCountTaughtClassesArgs
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
    officeHourBookings?: boolean | UserCountOutputTypeCountOfficeHourBookingsArgs
    createdOfficeHourSlots?: boolean | UserCountOutputTypeCountCreatedOfficeHourSlotsArgs
    auditEvents?: boolean | UserCountOutputTypeCountAuditEventsArgs
    aiInteractions?: boolean | UserCountOutputTypeCountAiInteractionsArgs
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
  export type UserCountOutputTypeCountTaughtClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOfficeHourBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficeHourBookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedOfficeHourSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficeHourSlotWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIInteractionWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    courseworkItems: number
    resources: number
    officeHourSlots: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseworkItems?: boolean | ClassCountOutputTypeCountCourseworkItemsArgs
    resources?: boolean | ClassCountOutputTypeCountResourcesArgs
    officeHourSlots?: boolean | ClassCountOutputTypeCountOfficeHourSlotsArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountCourseworkItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseworkWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountOfficeHourSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficeHourSlotWhereInput
  }


  /**
   * Count Type CourseworkCountOutputType
   */

  export type CourseworkCountOutputType = {
    resources: number
    submissions: number
  }

  export type CourseworkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resources?: boolean | CourseworkCountOutputTypeCountResourcesArgs
    submissions?: boolean | CourseworkCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * CourseworkCountOutputType without action
   */
  export type CourseworkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseworkCountOutputType
     */
    select?: CourseworkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseworkCountOutputType without action
   */
  export type CourseworkCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
  }

  /**
   * CourseworkCountOutputType without action
   */
  export type CourseworkCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type OfficeHourSlotCountOutputType
   */

  export type OfficeHourSlotCountOutputType = {
    bookings: number
  }

  export type OfficeHourSlotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | OfficeHourSlotCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * OfficeHourSlotCountOutputType without action
   */
  export type OfficeHourSlotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourSlotCountOutputType
     */
    select?: OfficeHourSlotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OfficeHourSlotCountOutputType without action
   */
  export type OfficeHourSlotCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficeHourBookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Institution
   */

  export type AggregateInstitution = {
    _count: InstitutionCountAggregateOutputType | null
    _min: InstitutionMinAggregateOutputType | null
    _max: InstitutionMaxAggregateOutputType | null
  }

  export type InstitutionMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstitutionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstitutionCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    timezone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InstitutionMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstitutionMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstitutionCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InstitutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Institution to aggregate.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Institutions
    **/
    _count?: true | InstitutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstitutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstitutionMaxAggregateInputType
  }

  export type GetInstitutionAggregateType<T extends InstitutionAggregateArgs> = {
        [P in keyof T & keyof AggregateInstitution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstitution[P]>
      : GetScalarType<T[P], AggregateInstitution[P]>
  }




  export type InstitutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionWhereInput
    orderBy?: InstitutionOrderByWithAggregationInput | InstitutionOrderByWithAggregationInput[]
    by: InstitutionScalarFieldEnum[] | InstitutionScalarFieldEnum
    having?: InstitutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstitutionCountAggregateInputType | true
    _min?: InstitutionMinAggregateInputType
    _max?: InstitutionMaxAggregateInputType
  }

  export type InstitutionGroupByOutputType = {
    id: string
    name: string
    slug: string
    timezone: string
    createdAt: Date
    updatedAt: Date
    _count: InstitutionCountAggregateOutputType | null
    _min: InstitutionMinAggregateOutputType | null
    _max: InstitutionMaxAggregateOutputType | null
  }

  type GetInstitutionGroupByPayload<T extends InstitutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstitutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstitutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
            : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
        }
      >
    >


  export type InstitutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Institution$usersArgs<ExtArgs>
    classes?: boolean | Institution$classesArgs<ExtArgs>
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InstitutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "timezone" | "createdAt" | "updatedAt", ExtArgs["result"]["institution"]>
  export type InstitutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Institution$usersArgs<ExtArgs>
    classes?: boolean | Institution$classesArgs<ExtArgs>
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstitutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstitutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstitutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Institution"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      classes: Prisma.$ClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      timezone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["institution"]>
    composites: {}
  }

  type InstitutionGetPayload<S extends boolean | null | undefined | InstitutionDefaultArgs> = $Result.GetResult<Prisma.$InstitutionPayload, S>

  type InstitutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstitutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstitutionCountAggregateInputType | true
    }

  export interface InstitutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Institution'], meta: { name: 'Institution' } }
    /**
     * Find zero or one Institution that matches the filter.
     * @param {InstitutionFindUniqueArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstitutionFindUniqueArgs>(args: SelectSubset<T, InstitutionFindUniqueArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Institution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstitutionFindUniqueOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstitutionFindUniqueOrThrowArgs>(args: SelectSubset<T, InstitutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindFirstArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstitutionFindFirstArgs>(args?: SelectSubset<T, InstitutionFindFirstArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindFirstOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstitutionFindFirstOrThrowArgs>(args?: SelectSubset<T, InstitutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Institutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Institutions
     * const institutions = await prisma.institution.findMany()
     * 
     * // Get first 10 Institutions
     * const institutions = await prisma.institution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const institutionWithIdOnly = await prisma.institution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstitutionFindManyArgs>(args?: SelectSubset<T, InstitutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Institution.
     * @param {InstitutionCreateArgs} args - Arguments to create a Institution.
     * @example
     * // Create one Institution
     * const Institution = await prisma.institution.create({
     *   data: {
     *     // ... data to create a Institution
     *   }
     * })
     * 
     */
    create<T extends InstitutionCreateArgs>(args: SelectSubset<T, InstitutionCreateArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Institutions.
     * @param {InstitutionCreateManyArgs} args - Arguments to create many Institutions.
     * @example
     * // Create many Institutions
     * const institution = await prisma.institution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstitutionCreateManyArgs>(args?: SelectSubset<T, InstitutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Institutions and returns the data saved in the database.
     * @param {InstitutionCreateManyAndReturnArgs} args - Arguments to create many Institutions.
     * @example
     * // Create many Institutions
     * const institution = await prisma.institution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Institutions and only return the `id`
     * const institutionWithIdOnly = await prisma.institution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstitutionCreateManyAndReturnArgs>(args?: SelectSubset<T, InstitutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Institution.
     * @param {InstitutionDeleteArgs} args - Arguments to delete one Institution.
     * @example
     * // Delete one Institution
     * const Institution = await prisma.institution.delete({
     *   where: {
     *     // ... filter to delete one Institution
     *   }
     * })
     * 
     */
    delete<T extends InstitutionDeleteArgs>(args: SelectSubset<T, InstitutionDeleteArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Institution.
     * @param {InstitutionUpdateArgs} args - Arguments to update one Institution.
     * @example
     * // Update one Institution
     * const institution = await prisma.institution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstitutionUpdateArgs>(args: SelectSubset<T, InstitutionUpdateArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Institutions.
     * @param {InstitutionDeleteManyArgs} args - Arguments to filter Institutions to delete.
     * @example
     * // Delete a few Institutions
     * const { count } = await prisma.institution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstitutionDeleteManyArgs>(args?: SelectSubset<T, InstitutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstitutionUpdateManyArgs>(args: SelectSubset<T, InstitutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions and returns the data updated in the database.
     * @param {InstitutionUpdateManyAndReturnArgs} args - Arguments to update many Institutions.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Institutions and only return the `id`
     * const institutionWithIdOnly = await prisma.institution.updateManyAndReturn({
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
    updateManyAndReturn<T extends InstitutionUpdateManyAndReturnArgs>(args: SelectSubset<T, InstitutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Institution.
     * @param {InstitutionUpsertArgs} args - Arguments to update or create a Institution.
     * @example
     * // Update or create a Institution
     * const institution = await prisma.institution.upsert({
     *   create: {
     *     // ... data to create a Institution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Institution we want to update
     *   }
     * })
     */
    upsert<T extends InstitutionUpsertArgs>(args: SelectSubset<T, InstitutionUpsertArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionCountArgs} args - Arguments to filter Institutions to count.
     * @example
     * // Count the number of Institutions
     * const count = await prisma.institution.count({
     *   where: {
     *     // ... the filter for the Institutions we want to count
     *   }
     * })
    **/
    count<T extends InstitutionCountArgs>(
      args?: Subset<T, InstitutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstitutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstitutionAggregateArgs>(args: Subset<T, InstitutionAggregateArgs>): Prisma.PrismaPromise<GetInstitutionAggregateType<T>>

    /**
     * Group by Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionGroupByArgs} args - Group by arguments.
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
      T extends InstitutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstitutionGroupByArgs['orderBy'] }
        : { orderBy?: InstitutionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstitutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstitutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Institution model
   */
  readonly fields: InstitutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Institution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstitutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Institution$usersArgs<ExtArgs> = {}>(args?: Subset<T, Institution$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classes<T extends Institution$classesArgs<ExtArgs> = {}>(args?: Subset<T, Institution$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Institution model
   */
  interface InstitutionFieldRefs {
    readonly id: FieldRef<"Institution", 'String'>
    readonly name: FieldRef<"Institution", 'String'>
    readonly slug: FieldRef<"Institution", 'String'>
    readonly timezone: FieldRef<"Institution", 'String'>
    readonly createdAt: FieldRef<"Institution", 'DateTime'>
    readonly updatedAt: FieldRef<"Institution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Institution findUnique
   */
  export type InstitutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution findUniqueOrThrow
   */
  export type InstitutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution findFirst
   */
  export type InstitutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution findFirstOrThrow
   */
  export type InstitutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution findMany
   */
  export type InstitutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institutions to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution create
   */
  export type InstitutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The data needed to create a Institution.
     */
    data: XOR<InstitutionCreateInput, InstitutionUncheckedCreateInput>
  }

  /**
   * Institution createMany
   */
  export type InstitutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Institutions.
     */
    data: InstitutionCreateManyInput | InstitutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Institution createManyAndReturn
   */
  export type InstitutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * The data used to create many Institutions.
     */
    data: InstitutionCreateManyInput | InstitutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Institution update
   */
  export type InstitutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The data needed to update a Institution.
     */
    data: XOR<InstitutionUpdateInput, InstitutionUncheckedUpdateInput>
    /**
     * Choose, which Institution to update.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution updateMany
   */
  export type InstitutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Institutions.
     */
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyInput>
    /**
     * Filter which Institutions to update
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to update.
     */
    limit?: number
  }

  /**
   * Institution updateManyAndReturn
   */
  export type InstitutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * The data used to update Institutions.
     */
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyInput>
    /**
     * Filter which Institutions to update
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to update.
     */
    limit?: number
  }

  /**
   * Institution upsert
   */
  export type InstitutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The filter to search for the Institution to update in case it exists.
     */
    where: InstitutionWhereUniqueInput
    /**
     * In case the Institution found by the `where` argument doesn't exist, create a new Institution with this data.
     */
    create: XOR<InstitutionCreateInput, InstitutionUncheckedCreateInput>
    /**
     * In case the Institution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstitutionUpdateInput, InstitutionUncheckedUpdateInput>
  }

  /**
   * Institution delete
   */
  export type InstitutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter which Institution to delete.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution deleteMany
   */
  export type InstitutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Institutions to delete
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to delete.
     */
    limit?: number
  }

  /**
   * Institution.users
   */
  export type Institution$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Institution.classes
   */
  export type Institution$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Institution without action
   */
  export type InstitutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
  }


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
    institutionId: string | null
    email: string | null
    fullName: string | null
    role: $Enums.AppRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    institutionId: string | null
    email: string | null
    fullName: string | null
    role: $Enums.AppRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    institutionId: number
    email: number
    fullName: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    institutionId?: true
    email?: true
    fullName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    institutionId?: true
    email?: true
    fullName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    institutionId?: true
    email?: true
    fullName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    institutionId: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt: Date
    updatedAt: Date
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
    institutionId?: boolean
    email?: boolean
    fullName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    taughtClasses?: boolean | User$taughtClassesArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    officeHourBookings?: boolean | User$officeHourBookingsArgs<ExtArgs>
    createdOfficeHourSlots?: boolean | User$createdOfficeHourSlotsArgs<ExtArgs>
    auditEvents?: boolean | User$auditEventsArgs<ExtArgs>
    aiInteractions?: boolean | User$aiInteractionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institutionId?: boolean
    email?: boolean
    fullName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institutionId?: boolean
    email?: boolean
    fullName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    institutionId?: boolean
    email?: boolean
    fullName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "institutionId" | "email" | "fullName" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    taughtClasses?: boolean | User$taughtClassesArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    officeHourBookings?: boolean | User$officeHourBookingsArgs<ExtArgs>
    createdOfficeHourSlots?: boolean | User$createdOfficeHourSlotsArgs<ExtArgs>
    auditEvents?: boolean | User$auditEventsArgs<ExtArgs>
    aiInteractions?: boolean | User$aiInteractionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      institution: Prisma.$InstitutionPayload<ExtArgs>
      taughtClasses: Prisma.$ClassPayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      officeHourBookings: Prisma.$OfficeHourBookingPayload<ExtArgs>[]
      createdOfficeHourSlots: Prisma.$OfficeHourSlotPayload<ExtArgs>[]
      auditEvents: Prisma.$AuditEventPayload<ExtArgs>[]
      aiInteractions: Prisma.$AIInteractionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      institutionId: string
      email: string
      fullName: string
      role: $Enums.AppRole
      createdAt: Date
      updatedAt: Date
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
    institution<T extends InstitutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionDefaultArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    taughtClasses<T extends User$taughtClassesArgs<ExtArgs> = {}>(args?: Subset<T, User$taughtClassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    officeHourBookings<T extends User$officeHourBookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$officeHourBookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficeHourBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdOfficeHourSlots<T extends User$createdOfficeHourSlotsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdOfficeHourSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficeHourSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditEvents<T extends User$auditEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiInteractions<T extends User$aiInteractionsArgs<ExtArgs> = {}>(args?: Subset<T, User$aiInteractionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly institutionId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'AppRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.taughtClasses
   */
  export type User$taughtClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.officeHourBookings
   */
  export type User$officeHourBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourBooking
     */
    select?: OfficeHourBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourBooking
     */
    omit?: OfficeHourBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourBookingInclude<ExtArgs> | null
    where?: OfficeHourBookingWhereInput
    orderBy?: OfficeHourBookingOrderByWithRelationInput | OfficeHourBookingOrderByWithRelationInput[]
    cursor?: OfficeHourBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfficeHourBookingScalarFieldEnum | OfficeHourBookingScalarFieldEnum[]
  }

  /**
   * User.createdOfficeHourSlots
   */
  export type User$createdOfficeHourSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourSlot
     */
    select?: OfficeHourSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourSlot
     */
    omit?: OfficeHourSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourSlotInclude<ExtArgs> | null
    where?: OfficeHourSlotWhereInput
    orderBy?: OfficeHourSlotOrderByWithRelationInput | OfficeHourSlotOrderByWithRelationInput[]
    cursor?: OfficeHourSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfficeHourSlotScalarFieldEnum | OfficeHourSlotScalarFieldEnum[]
  }

  /**
   * User.auditEvents
   */
  export type User$auditEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    where?: AuditEventWhereInput
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    cursor?: AuditEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * User.aiInteractions
   */
  export type User$aiInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteraction
     */
    omit?: AIInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    where?: AIInteractionWhereInput
    orderBy?: AIInteractionOrderByWithRelationInput | AIInteractionOrderByWithRelationInput[]
    cursor?: AIInteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIInteractionScalarFieldEnum | AIInteractionScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    institutionId: string | null
    educatorId: string | null
    code: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    institutionId: string | null
    educatorId: string | null
    code: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    institutionId: number
    educatorId: number
    code: number
    title: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassMinAggregateInputType = {
    id?: true
    institutionId?: true
    educatorId?: true
    code?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    institutionId?: true
    educatorId?: true
    code?: true
    title?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    institutionId?: true
    educatorId?: true
    code?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    institutionId: string
    educatorId: string
    code: string
    title: string
    createdAt: Date
    updatedAt: Date
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institutionId?: boolean
    educatorId?: boolean
    code?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    educator?: boolean | UserDefaultArgs<ExtArgs>
    courseworkItems?: boolean | Class$courseworkItemsArgs<ExtArgs>
    resources?: boolean | Class$resourcesArgs<ExtArgs>
    officeHourSlots?: boolean | Class$officeHourSlotsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institutionId?: boolean
    educatorId?: boolean
    code?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    educator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institutionId?: boolean
    educatorId?: boolean
    code?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    educator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    institutionId?: boolean
    educatorId?: boolean
    code?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "institutionId" | "educatorId" | "code" | "title" | "createdAt" | "updatedAt", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    educator?: boolean | UserDefaultArgs<ExtArgs>
    courseworkItems?: boolean | Class$courseworkItemsArgs<ExtArgs>
    resources?: boolean | Class$resourcesArgs<ExtArgs>
    officeHourSlots?: boolean | Class$officeHourSlotsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    educator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
    educator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      institution: Prisma.$InstitutionPayload<ExtArgs>
      educator: Prisma.$UserPayload<ExtArgs>
      courseworkItems: Prisma.$CourseworkPayload<ExtArgs>[]
      resources: Prisma.$ResourcePayload<ExtArgs>[]
      officeHourSlots: Prisma.$OfficeHourSlotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      institutionId: string
      educatorId: string
      code: string
      title: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
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
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    institution<T extends InstitutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionDefaultArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    educator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courseworkItems<T extends Class$courseworkItemsArgs<ExtArgs> = {}>(args?: Subset<T, Class$courseworkItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resources<T extends Class$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, Class$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    officeHourSlots<T extends Class$officeHourSlotsArgs<ExtArgs> = {}>(args?: Subset<T, Class$officeHourSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficeHourSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly institutionId: FieldRef<"Class", 'String'>
    readonly educatorId: FieldRef<"Class", 'String'>
    readonly code: FieldRef<"Class", 'String'>
    readonly title: FieldRef<"Class", 'String'>
    readonly createdAt: FieldRef<"Class", 'DateTime'>
    readonly updatedAt: FieldRef<"Class", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.courseworkItems
   */
  export type Class$courseworkItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    where?: CourseworkWhereInput
    orderBy?: CourseworkOrderByWithRelationInput | CourseworkOrderByWithRelationInput[]
    cursor?: CourseworkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseworkScalarFieldEnum | CourseworkScalarFieldEnum[]
  }

  /**
   * Class.resources
   */
  export type Class$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    cursor?: ResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Class.officeHourSlots
   */
  export type Class$officeHourSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourSlot
     */
    select?: OfficeHourSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourSlot
     */
    omit?: OfficeHourSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourSlotInclude<ExtArgs> | null
    where?: OfficeHourSlotWhereInput
    orderBy?: OfficeHourSlotOrderByWithRelationInput | OfficeHourSlotOrderByWithRelationInput[]
    cursor?: OfficeHourSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfficeHourSlotScalarFieldEnum | OfficeHourSlotScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model Coursework
   */

  export type AggregateCoursework = {
    _count: CourseworkCountAggregateOutputType | null
    _min: CourseworkMinAggregateOutputType | null
    _max: CourseworkMaxAggregateOutputType | null
  }

  export type CourseworkMinAggregateOutputType = {
    id: string | null
    classId: string | null
    title: string | null
    kind: $Enums.CourseworkKind | null
    description: string | null
    topic: string | null
    dueAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseworkMaxAggregateOutputType = {
    id: string | null
    classId: string | null
    title: string | null
    kind: $Enums.CourseworkKind | null
    description: string | null
    topic: string | null
    dueAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseworkCountAggregateOutputType = {
    id: number
    classId: number
    title: number
    kind: number
    description: number
    topic: number
    dueAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseworkMinAggregateInputType = {
    id?: true
    classId?: true
    title?: true
    kind?: true
    description?: true
    topic?: true
    dueAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseworkMaxAggregateInputType = {
    id?: true
    classId?: true
    title?: true
    kind?: true
    description?: true
    topic?: true
    dueAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseworkCountAggregateInputType = {
    id?: true
    classId?: true
    title?: true
    kind?: true
    description?: true
    topic?: true
    dueAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseworkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coursework to aggregate.
     */
    where?: CourseworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courseworks to fetch.
     */
    orderBy?: CourseworkOrderByWithRelationInput | CourseworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courseworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courseworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courseworks
    **/
    _count?: true | CourseworkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseworkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseworkMaxAggregateInputType
  }

  export type GetCourseworkAggregateType<T extends CourseworkAggregateArgs> = {
        [P in keyof T & keyof AggregateCoursework]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoursework[P]>
      : GetScalarType<T[P], AggregateCoursework[P]>
  }




  export type CourseworkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseworkWhereInput
    orderBy?: CourseworkOrderByWithAggregationInput | CourseworkOrderByWithAggregationInput[]
    by: CourseworkScalarFieldEnum[] | CourseworkScalarFieldEnum
    having?: CourseworkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseworkCountAggregateInputType | true
    _min?: CourseworkMinAggregateInputType
    _max?: CourseworkMaxAggregateInputType
  }

  export type CourseworkGroupByOutputType = {
    id: string
    classId: string
    title: string
    kind: $Enums.CourseworkKind
    description: string | null
    topic: string | null
    dueAt: Date
    createdAt: Date
    updatedAt: Date
    _count: CourseworkCountAggregateOutputType | null
    _min: CourseworkMinAggregateOutputType | null
    _max: CourseworkMaxAggregateOutputType | null
  }

  type GetCourseworkGroupByPayload<T extends CourseworkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseworkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseworkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseworkGroupByOutputType[P]>
            : GetScalarType<T[P], CourseworkGroupByOutputType[P]>
        }
      >
    >


  export type CourseworkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    title?: boolean
    kind?: boolean
    description?: boolean
    topic?: boolean
    dueAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    resources?: boolean | Coursework$resourcesArgs<ExtArgs>
    submissions?: boolean | Coursework$submissionsArgs<ExtArgs>
    _count?: boolean | CourseworkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursework"]>

  export type CourseworkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    title?: boolean
    kind?: boolean
    description?: boolean
    topic?: boolean
    dueAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursework"]>

  export type CourseworkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    title?: boolean
    kind?: boolean
    description?: boolean
    topic?: boolean
    dueAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursework"]>

  export type CourseworkSelectScalar = {
    id?: boolean
    classId?: boolean
    title?: boolean
    kind?: boolean
    description?: boolean
    topic?: boolean
    dueAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseworkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classId" | "title" | "kind" | "description" | "topic" | "dueAt" | "createdAt" | "updatedAt", ExtArgs["result"]["coursework"]>
  export type CourseworkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    resources?: boolean | Coursework$resourcesArgs<ExtArgs>
    submissions?: boolean | Coursework$submissionsArgs<ExtArgs>
    _count?: boolean | CourseworkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseworkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type CourseworkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $CourseworkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coursework"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      resources: Prisma.$ResourcePayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      classId: string
      title: string
      kind: $Enums.CourseworkKind
      description: string | null
      topic: string | null
      dueAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coursework"]>
    composites: {}
  }

  type CourseworkGetPayload<S extends boolean | null | undefined | CourseworkDefaultArgs> = $Result.GetResult<Prisma.$CourseworkPayload, S>

  type CourseworkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseworkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseworkCountAggregateInputType | true
    }

  export interface CourseworkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coursework'], meta: { name: 'Coursework' } }
    /**
     * Find zero or one Coursework that matches the filter.
     * @param {CourseworkFindUniqueArgs} args - Arguments to find a Coursework
     * @example
     * // Get one Coursework
     * const coursework = await prisma.coursework.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseworkFindUniqueArgs>(args: SelectSubset<T, CourseworkFindUniqueArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coursework that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseworkFindUniqueOrThrowArgs} args - Arguments to find a Coursework
     * @example
     * // Get one Coursework
     * const coursework = await prisma.coursework.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseworkFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseworkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coursework that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseworkFindFirstArgs} args - Arguments to find a Coursework
     * @example
     * // Get one Coursework
     * const coursework = await prisma.coursework.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseworkFindFirstArgs>(args?: SelectSubset<T, CourseworkFindFirstArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coursework that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseworkFindFirstOrThrowArgs} args - Arguments to find a Coursework
     * @example
     * // Get one Coursework
     * const coursework = await prisma.coursework.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseworkFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseworkFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courseworks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseworkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courseworks
     * const courseworks = await prisma.coursework.findMany()
     * 
     * // Get first 10 Courseworks
     * const courseworks = await prisma.coursework.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseworkWithIdOnly = await prisma.coursework.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseworkFindManyArgs>(args?: SelectSubset<T, CourseworkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coursework.
     * @param {CourseworkCreateArgs} args - Arguments to create a Coursework.
     * @example
     * // Create one Coursework
     * const Coursework = await prisma.coursework.create({
     *   data: {
     *     // ... data to create a Coursework
     *   }
     * })
     * 
     */
    create<T extends CourseworkCreateArgs>(args: SelectSubset<T, CourseworkCreateArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courseworks.
     * @param {CourseworkCreateManyArgs} args - Arguments to create many Courseworks.
     * @example
     * // Create many Courseworks
     * const coursework = await prisma.coursework.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseworkCreateManyArgs>(args?: SelectSubset<T, CourseworkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courseworks and returns the data saved in the database.
     * @param {CourseworkCreateManyAndReturnArgs} args - Arguments to create many Courseworks.
     * @example
     * // Create many Courseworks
     * const coursework = await prisma.coursework.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courseworks and only return the `id`
     * const courseworkWithIdOnly = await prisma.coursework.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseworkCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseworkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coursework.
     * @param {CourseworkDeleteArgs} args - Arguments to delete one Coursework.
     * @example
     * // Delete one Coursework
     * const Coursework = await prisma.coursework.delete({
     *   where: {
     *     // ... filter to delete one Coursework
     *   }
     * })
     * 
     */
    delete<T extends CourseworkDeleteArgs>(args: SelectSubset<T, CourseworkDeleteArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coursework.
     * @param {CourseworkUpdateArgs} args - Arguments to update one Coursework.
     * @example
     * // Update one Coursework
     * const coursework = await prisma.coursework.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseworkUpdateArgs>(args: SelectSubset<T, CourseworkUpdateArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courseworks.
     * @param {CourseworkDeleteManyArgs} args - Arguments to filter Courseworks to delete.
     * @example
     * // Delete a few Courseworks
     * const { count } = await prisma.coursework.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseworkDeleteManyArgs>(args?: SelectSubset<T, CourseworkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courseworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseworkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courseworks
     * const coursework = await prisma.coursework.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseworkUpdateManyArgs>(args: SelectSubset<T, CourseworkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courseworks and returns the data updated in the database.
     * @param {CourseworkUpdateManyAndReturnArgs} args - Arguments to update many Courseworks.
     * @example
     * // Update many Courseworks
     * const coursework = await prisma.coursework.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courseworks and only return the `id`
     * const courseworkWithIdOnly = await prisma.coursework.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseworkUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseworkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coursework.
     * @param {CourseworkUpsertArgs} args - Arguments to update or create a Coursework.
     * @example
     * // Update or create a Coursework
     * const coursework = await prisma.coursework.upsert({
     *   create: {
     *     // ... data to create a Coursework
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coursework we want to update
     *   }
     * })
     */
    upsert<T extends CourseworkUpsertArgs>(args: SelectSubset<T, CourseworkUpsertArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courseworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseworkCountArgs} args - Arguments to filter Courseworks to count.
     * @example
     * // Count the number of Courseworks
     * const count = await prisma.coursework.count({
     *   where: {
     *     // ... the filter for the Courseworks we want to count
     *   }
     * })
    **/
    count<T extends CourseworkCountArgs>(
      args?: Subset<T, CourseworkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseworkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coursework.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseworkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseworkAggregateArgs>(args: Subset<T, CourseworkAggregateArgs>): Prisma.PrismaPromise<GetCourseworkAggregateType<T>>

    /**
     * Group by Coursework.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseworkGroupByArgs} args - Group by arguments.
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
      T extends CourseworkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseworkGroupByArgs['orderBy'] }
        : { orderBy?: CourseworkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseworkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseworkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coursework model
   */
  readonly fields: CourseworkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coursework.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseworkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resources<T extends Coursework$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, Coursework$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends Coursework$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Coursework$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Coursework model
   */
  interface CourseworkFieldRefs {
    readonly id: FieldRef<"Coursework", 'String'>
    readonly classId: FieldRef<"Coursework", 'String'>
    readonly title: FieldRef<"Coursework", 'String'>
    readonly kind: FieldRef<"Coursework", 'CourseworkKind'>
    readonly description: FieldRef<"Coursework", 'String'>
    readonly topic: FieldRef<"Coursework", 'String'>
    readonly dueAt: FieldRef<"Coursework", 'DateTime'>
    readonly createdAt: FieldRef<"Coursework", 'DateTime'>
    readonly updatedAt: FieldRef<"Coursework", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Coursework findUnique
   */
  export type CourseworkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    /**
     * Filter, which Coursework to fetch.
     */
    where: CourseworkWhereUniqueInput
  }

  /**
   * Coursework findUniqueOrThrow
   */
  export type CourseworkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    /**
     * Filter, which Coursework to fetch.
     */
    where: CourseworkWhereUniqueInput
  }

  /**
   * Coursework findFirst
   */
  export type CourseworkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    /**
     * Filter, which Coursework to fetch.
     */
    where?: CourseworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courseworks to fetch.
     */
    orderBy?: CourseworkOrderByWithRelationInput | CourseworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courseworks.
     */
    cursor?: CourseworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courseworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courseworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courseworks.
     */
    distinct?: CourseworkScalarFieldEnum | CourseworkScalarFieldEnum[]
  }

  /**
   * Coursework findFirstOrThrow
   */
  export type CourseworkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    /**
     * Filter, which Coursework to fetch.
     */
    where?: CourseworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courseworks to fetch.
     */
    orderBy?: CourseworkOrderByWithRelationInput | CourseworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courseworks.
     */
    cursor?: CourseworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courseworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courseworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courseworks.
     */
    distinct?: CourseworkScalarFieldEnum | CourseworkScalarFieldEnum[]
  }

  /**
   * Coursework findMany
   */
  export type CourseworkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    /**
     * Filter, which Courseworks to fetch.
     */
    where?: CourseworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courseworks to fetch.
     */
    orderBy?: CourseworkOrderByWithRelationInput | CourseworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courseworks.
     */
    cursor?: CourseworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courseworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courseworks.
     */
    skip?: number
    distinct?: CourseworkScalarFieldEnum | CourseworkScalarFieldEnum[]
  }

  /**
   * Coursework create
   */
  export type CourseworkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    /**
     * The data needed to create a Coursework.
     */
    data: XOR<CourseworkCreateInput, CourseworkUncheckedCreateInput>
  }

  /**
   * Coursework createMany
   */
  export type CourseworkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courseworks.
     */
    data: CourseworkCreateManyInput | CourseworkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coursework createManyAndReturn
   */
  export type CourseworkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * The data used to create many Courseworks.
     */
    data: CourseworkCreateManyInput | CourseworkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coursework update
   */
  export type CourseworkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    /**
     * The data needed to update a Coursework.
     */
    data: XOR<CourseworkUpdateInput, CourseworkUncheckedUpdateInput>
    /**
     * Choose, which Coursework to update.
     */
    where: CourseworkWhereUniqueInput
  }

  /**
   * Coursework updateMany
   */
  export type CourseworkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courseworks.
     */
    data: XOR<CourseworkUpdateManyMutationInput, CourseworkUncheckedUpdateManyInput>
    /**
     * Filter which Courseworks to update
     */
    where?: CourseworkWhereInput
    /**
     * Limit how many Courseworks to update.
     */
    limit?: number
  }

  /**
   * Coursework updateManyAndReturn
   */
  export type CourseworkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * The data used to update Courseworks.
     */
    data: XOR<CourseworkUpdateManyMutationInput, CourseworkUncheckedUpdateManyInput>
    /**
     * Filter which Courseworks to update
     */
    where?: CourseworkWhereInput
    /**
     * Limit how many Courseworks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coursework upsert
   */
  export type CourseworkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    /**
     * The filter to search for the Coursework to update in case it exists.
     */
    where: CourseworkWhereUniqueInput
    /**
     * In case the Coursework found by the `where` argument doesn't exist, create a new Coursework with this data.
     */
    create: XOR<CourseworkCreateInput, CourseworkUncheckedCreateInput>
    /**
     * In case the Coursework was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseworkUpdateInput, CourseworkUncheckedUpdateInput>
  }

  /**
   * Coursework delete
   */
  export type CourseworkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    /**
     * Filter which Coursework to delete.
     */
    where: CourseworkWhereUniqueInput
  }

  /**
   * Coursework deleteMany
   */
  export type CourseworkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courseworks to delete
     */
    where?: CourseworkWhereInput
    /**
     * Limit how many Courseworks to delete.
     */
    limit?: number
  }

  /**
   * Coursework.resources
   */
  export type Coursework$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    cursor?: ResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Coursework.submissions
   */
  export type Coursework$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Coursework without action
   */
  export type CourseworkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
  }


  /**
   * Model Resource
   */

  export type AggregateResource = {
    _count: ResourceCountAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  export type ResourceMinAggregateOutputType = {
    id: string | null
    classId: string | null
    courseworkId: string | null
    title: string | null
    storageKey: string | null
    externalUrl: string | null
    createdAt: Date | null
  }

  export type ResourceMaxAggregateOutputType = {
    id: string | null
    classId: string | null
    courseworkId: string | null
    title: string | null
    storageKey: string | null
    externalUrl: string | null
    createdAt: Date | null
  }

  export type ResourceCountAggregateOutputType = {
    id: number
    classId: number
    courseworkId: number
    title: number
    storageKey: number
    externalUrl: number
    createdAt: number
    _all: number
  }


  export type ResourceMinAggregateInputType = {
    id?: true
    classId?: true
    courseworkId?: true
    title?: true
    storageKey?: true
    externalUrl?: true
    createdAt?: true
  }

  export type ResourceMaxAggregateInputType = {
    id?: true
    classId?: true
    courseworkId?: true
    title?: true
    storageKey?: true
    externalUrl?: true
    createdAt?: true
  }

  export type ResourceCountAggregateInputType = {
    id?: true
    classId?: true
    courseworkId?: true
    title?: true
    storageKey?: true
    externalUrl?: true
    createdAt?: true
    _all?: true
  }

  export type ResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resource to aggregate.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resources
    **/
    _count?: true | ResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceMaxAggregateInputType
  }

  export type GetResourceAggregateType<T extends ResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResource[P]>
      : GetScalarType<T[P], AggregateResource[P]>
  }




  export type ResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithAggregationInput | ResourceOrderByWithAggregationInput[]
    by: ResourceScalarFieldEnum[] | ResourceScalarFieldEnum
    having?: ResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCountAggregateInputType | true
    _min?: ResourceMinAggregateInputType
    _max?: ResourceMaxAggregateInputType
  }

  export type ResourceGroupByOutputType = {
    id: string
    classId: string
    courseworkId: string | null
    title: string
    storageKey: string | null
    externalUrl: string | null
    createdAt: Date
    _count: ResourceCountAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  type GetResourceGroupByPayload<T extends ResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceGroupByOutputType[P]>
        }
      >
    >


  export type ResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    courseworkId?: boolean
    title?: boolean
    storageKey?: boolean
    externalUrl?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    coursework?: boolean | Resource$courseworkArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    courseworkId?: boolean
    title?: boolean
    storageKey?: boolean
    externalUrl?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    coursework?: boolean | Resource$courseworkArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    courseworkId?: boolean
    title?: boolean
    storageKey?: boolean
    externalUrl?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    coursework?: boolean | Resource$courseworkArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectScalar = {
    id?: boolean
    classId?: boolean
    courseworkId?: boolean
    title?: boolean
    storageKey?: boolean
    externalUrl?: boolean
    createdAt?: boolean
  }

  export type ResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classId" | "courseworkId" | "title" | "storageKey" | "externalUrl" | "createdAt", ExtArgs["result"]["resource"]>
  export type ResourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    coursework?: boolean | Resource$courseworkArgs<ExtArgs>
  }
  export type ResourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    coursework?: boolean | Resource$courseworkArgs<ExtArgs>
  }
  export type ResourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    coursework?: boolean | Resource$courseworkArgs<ExtArgs>
  }

  export type $ResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resource"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      coursework: Prisma.$CourseworkPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      classId: string
      courseworkId: string | null
      title: string
      storageKey: string | null
      externalUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["resource"]>
    composites: {}
  }

  type ResourceGetPayload<S extends boolean | null | undefined | ResourceDefaultArgs> = $Result.GetResult<Prisma.$ResourcePayload, S>

  type ResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceCountAggregateInputType | true
    }

  export interface ResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resource'], meta: { name: 'Resource' } }
    /**
     * Find zero or one Resource that matches the filter.
     * @param {ResourceFindUniqueArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceFindUniqueArgs>(args: SelectSubset<T, ResourceFindUniqueArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResourceFindUniqueOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceFindFirstArgs>(args?: SelectSubset<T, ResourceFindFirstArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resources
     * const resources = await prisma.resource.findMany()
     * 
     * // Get first 10 Resources
     * const resources = await prisma.resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceWithIdOnly = await prisma.resource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResourceFindManyArgs>(args?: SelectSubset<T, ResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resource.
     * @param {ResourceCreateArgs} args - Arguments to create a Resource.
     * @example
     * // Create one Resource
     * const Resource = await prisma.resource.create({
     *   data: {
     *     // ... data to create a Resource
     *   }
     * })
     * 
     */
    create<T extends ResourceCreateArgs>(args: SelectSubset<T, ResourceCreateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resources.
     * @param {ResourceCreateManyArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceCreateManyArgs>(args?: SelectSubset<T, ResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resources and returns the data saved in the database.
     * @param {ResourceCreateManyAndReturnArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResourceCreateManyAndReturnArgs>(args?: SelectSubset<T, ResourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resource.
     * @param {ResourceDeleteArgs} args - Arguments to delete one Resource.
     * @example
     * // Delete one Resource
     * const Resource = await prisma.resource.delete({
     *   where: {
     *     // ... filter to delete one Resource
     *   }
     * })
     * 
     */
    delete<T extends ResourceDeleteArgs>(args: SelectSubset<T, ResourceDeleteArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resource.
     * @param {ResourceUpdateArgs} args - Arguments to update one Resource.
     * @example
     * // Update one Resource
     * const resource = await prisma.resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceUpdateArgs>(args: SelectSubset<T, ResourceUpdateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resources.
     * @param {ResourceDeleteManyArgs} args - Arguments to filter Resources to delete.
     * @example
     * // Delete a few Resources
     * const { count } = await prisma.resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceDeleteManyArgs>(args?: SelectSubset<T, ResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceUpdateManyArgs>(args: SelectSubset<T, ResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources and returns the data updated in the database.
     * @param {ResourceUpdateManyAndReturnArgs} args - Arguments to update many Resources.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResourceUpdateManyAndReturnArgs>(args: SelectSubset<T, ResourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resource.
     * @param {ResourceUpsertArgs} args - Arguments to update or create a Resource.
     * @example
     * // Update or create a Resource
     * const resource = await prisma.resource.upsert({
     *   create: {
     *     // ... data to create a Resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resource we want to update
     *   }
     * })
     */
    upsert<T extends ResourceUpsertArgs>(args: SelectSubset<T, ResourceUpsertArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCountArgs} args - Arguments to filter Resources to count.
     * @example
     * // Count the number of Resources
     * const count = await prisma.resource.count({
     *   where: {
     *     // ... the filter for the Resources we want to count
     *   }
     * })
    **/
    count<T extends ResourceCountArgs>(
      args?: Subset<T, ResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceAggregateArgs>(args: Subset<T, ResourceAggregateArgs>): Prisma.PrismaPromise<GetResourceAggregateType<T>>

    /**
     * Group by Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupByArgs} args - Group by arguments.
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
      T extends ResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceGroupByArgs['orderBy'] }
        : { orderBy?: ResourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resource model
   */
  readonly fields: ResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coursework<T extends Resource$courseworkArgs<ExtArgs> = {}>(args?: Subset<T, Resource$courseworkArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Resource model
   */
  interface ResourceFieldRefs {
    readonly id: FieldRef<"Resource", 'String'>
    readonly classId: FieldRef<"Resource", 'String'>
    readonly courseworkId: FieldRef<"Resource", 'String'>
    readonly title: FieldRef<"Resource", 'String'>
    readonly storageKey: FieldRef<"Resource", 'String'>
    readonly externalUrl: FieldRef<"Resource", 'String'>
    readonly createdAt: FieldRef<"Resource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resource findUnique
   */
  export type ResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findUniqueOrThrow
   */
  export type ResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findFirst
   */
  export type ResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findFirstOrThrow
   */
  export type ResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findMany
   */
  export type ResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resources to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource create
   */
  export type ResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Resource.
     */
    data: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
  }

  /**
   * Resource createMany
   */
  export type ResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resource createManyAndReturn
   */
  export type ResourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resource update
   */
  export type ResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Resource.
     */
    data: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
    /**
     * Choose, which Resource to update.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource updateMany
   */
  export type ResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
  }

  /**
   * Resource updateManyAndReturn
   */
  export type ResourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resource upsert
   */
  export type ResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Resource to update in case it exists.
     */
    where: ResourceWhereUniqueInput
    /**
     * In case the Resource found by the `where` argument doesn't exist, create a new Resource with this data.
     */
    create: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
    /**
     * In case the Resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
  }

  /**
   * Resource delete
   */
  export type ResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter which Resource to delete.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource deleteMany
   */
  export type ResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resources to delete
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to delete.
     */
    limit?: number
  }

  /**
   * Resource.coursework
   */
  export type Resource$courseworkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    where?: CourseworkWhereInput
  }

  /**
   * Resource without action
   */
  export type ResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionAvgAggregateOutputType = {
    fileSizeBytes: number | null
    gradeScore: number | null
  }

  export type SubmissionSumAggregateOutputType = {
    fileSizeBytes: number | null
    gradeScore: number | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    courseworkId: string | null
    studentId: string | null
    status: $Enums.SubmissionStatus | null
    storageKey: string | null
    fileName: string | null
    mimeType: string | null
    fileSizeBytes: number | null
    gradeScore: number | null
    feedbackText: string | null
    submittedAt: Date | null
    gradedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    courseworkId: string | null
    studentId: string | null
    status: $Enums.SubmissionStatus | null
    storageKey: string | null
    fileName: string | null
    mimeType: string | null
    fileSizeBytes: number | null
    gradeScore: number | null
    feedbackText: string | null
    submittedAt: Date | null
    gradedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    courseworkId: number
    studentId: number
    status: number
    storageKey: number
    fileName: number
    mimeType: number
    fileSizeBytes: number
    gradeScore: number
    feedbackText: number
    submittedAt: number
    gradedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubmissionAvgAggregateInputType = {
    fileSizeBytes?: true
    gradeScore?: true
  }

  export type SubmissionSumAggregateInputType = {
    fileSizeBytes?: true
    gradeScore?: true
  }

  export type SubmissionMinAggregateInputType = {
    id?: true
    courseworkId?: true
    studentId?: true
    status?: true
    storageKey?: true
    fileName?: true
    mimeType?: true
    fileSizeBytes?: true
    gradeScore?: true
    feedbackText?: true
    submittedAt?: true
    gradedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    courseworkId?: true
    studentId?: true
    status?: true
    storageKey?: true
    fileName?: true
    mimeType?: true
    fileSizeBytes?: true
    gradeScore?: true
    feedbackText?: true
    submittedAt?: true
    gradedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    courseworkId?: true
    studentId?: true
    status?: true
    storageKey?: true
    fileName?: true
    mimeType?: true
    fileSizeBytes?: true
    gradeScore?: true
    feedbackText?: true
    submittedAt?: true
    gradedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _avg?: SubmissionAvgAggregateInputType
    _sum?: SubmissionSumAggregateInputType
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    courseworkId: string
    studentId: string
    status: $Enums.SubmissionStatus
    storageKey: string | null
    fileName: string | null
    mimeType: string | null
    fileSizeBytes: number | null
    gradeScore: number | null
    feedbackText: string | null
    submittedAt: Date | null
    gradedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseworkId?: boolean
    studentId?: boolean
    status?: boolean
    storageKey?: boolean
    fileName?: boolean
    mimeType?: boolean
    fileSizeBytes?: boolean
    gradeScore?: boolean
    feedbackText?: boolean
    submittedAt?: boolean
    gradedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coursework?: boolean | CourseworkDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseworkId?: boolean
    studentId?: boolean
    status?: boolean
    storageKey?: boolean
    fileName?: boolean
    mimeType?: boolean
    fileSizeBytes?: boolean
    gradeScore?: boolean
    feedbackText?: boolean
    submittedAt?: boolean
    gradedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coursework?: boolean | CourseworkDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseworkId?: boolean
    studentId?: boolean
    status?: boolean
    storageKey?: boolean
    fileName?: boolean
    mimeType?: boolean
    fileSizeBytes?: boolean
    gradeScore?: boolean
    feedbackText?: boolean
    submittedAt?: boolean
    gradedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coursework?: boolean | CourseworkDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    courseworkId?: boolean
    studentId?: boolean
    status?: boolean
    storageKey?: boolean
    fileName?: boolean
    mimeType?: boolean
    fileSizeBytes?: boolean
    gradeScore?: boolean
    feedbackText?: boolean
    submittedAt?: boolean
    gradedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseworkId" | "studentId" | "status" | "storageKey" | "fileName" | "mimeType" | "fileSizeBytes" | "gradeScore" | "feedbackText" | "submittedAt" | "gradedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coursework?: boolean | CourseworkDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coursework?: boolean | CourseworkDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coursework?: boolean | CourseworkDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      coursework: Prisma.$CourseworkPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseworkId: string
      studentId: string
      status: $Enums.SubmissionStatus
      storageKey: string | null
      fileName: string | null
      mimeType: string | null
      fileSizeBytes: number | null
      gradeScore: number | null
      feedbackText: string | null
      submittedAt: Date | null
      gradedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
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
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coursework<T extends CourseworkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseworkDefaultArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly courseworkId: FieldRef<"Submission", 'String'>
    readonly studentId: FieldRef<"Submission", 'String'>
    readonly status: FieldRef<"Submission", 'SubmissionStatus'>
    readonly storageKey: FieldRef<"Submission", 'String'>
    readonly fileName: FieldRef<"Submission", 'String'>
    readonly mimeType: FieldRef<"Submission", 'String'>
    readonly fileSizeBytes: FieldRef<"Submission", 'Int'>
    readonly gradeScore: FieldRef<"Submission", 'Int'>
    readonly feedbackText: FieldRef<"Submission", 'String'>
    readonly submittedAt: FieldRef<"Submission", 'DateTime'>
    readonly gradedAt: FieldRef<"Submission", 'DateTime'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
    readonly updatedAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model OfficeHourSlot
   */

  export type AggregateOfficeHourSlot = {
    _count: OfficeHourSlotCountAggregateOutputType | null
    _min: OfficeHourSlotMinAggregateOutputType | null
    _max: OfficeHourSlotMaxAggregateOutputType | null
  }

  export type OfficeHourSlotMinAggregateOutputType = {
    id: string | null
    classId: string | null
    educatorId: string | null
    startsAt: Date | null
    endsAt: Date | null
    location: string | null
    mode: string | null
    createdAt: Date | null
  }

  export type OfficeHourSlotMaxAggregateOutputType = {
    id: string | null
    classId: string | null
    educatorId: string | null
    startsAt: Date | null
    endsAt: Date | null
    location: string | null
    mode: string | null
    createdAt: Date | null
  }

  export type OfficeHourSlotCountAggregateOutputType = {
    id: number
    classId: number
    educatorId: number
    startsAt: number
    endsAt: number
    location: number
    mode: number
    createdAt: number
    _all: number
  }


  export type OfficeHourSlotMinAggregateInputType = {
    id?: true
    classId?: true
    educatorId?: true
    startsAt?: true
    endsAt?: true
    location?: true
    mode?: true
    createdAt?: true
  }

  export type OfficeHourSlotMaxAggregateInputType = {
    id?: true
    classId?: true
    educatorId?: true
    startsAt?: true
    endsAt?: true
    location?: true
    mode?: true
    createdAt?: true
  }

  export type OfficeHourSlotCountAggregateInputType = {
    id?: true
    classId?: true
    educatorId?: true
    startsAt?: true
    endsAt?: true
    location?: true
    mode?: true
    createdAt?: true
    _all?: true
  }

  export type OfficeHourSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfficeHourSlot to aggregate.
     */
    where?: OfficeHourSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficeHourSlots to fetch.
     */
    orderBy?: OfficeHourSlotOrderByWithRelationInput | OfficeHourSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfficeHourSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficeHourSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficeHourSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OfficeHourSlots
    **/
    _count?: true | OfficeHourSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfficeHourSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfficeHourSlotMaxAggregateInputType
  }

  export type GetOfficeHourSlotAggregateType<T extends OfficeHourSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateOfficeHourSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfficeHourSlot[P]>
      : GetScalarType<T[P], AggregateOfficeHourSlot[P]>
  }




  export type OfficeHourSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficeHourSlotWhereInput
    orderBy?: OfficeHourSlotOrderByWithAggregationInput | OfficeHourSlotOrderByWithAggregationInput[]
    by: OfficeHourSlotScalarFieldEnum[] | OfficeHourSlotScalarFieldEnum
    having?: OfficeHourSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfficeHourSlotCountAggregateInputType | true
    _min?: OfficeHourSlotMinAggregateInputType
    _max?: OfficeHourSlotMaxAggregateInputType
  }

  export type OfficeHourSlotGroupByOutputType = {
    id: string
    classId: string
    educatorId: string
    startsAt: Date
    endsAt: Date
    location: string
    mode: string
    createdAt: Date
    _count: OfficeHourSlotCountAggregateOutputType | null
    _min: OfficeHourSlotMinAggregateOutputType | null
    _max: OfficeHourSlotMaxAggregateOutputType | null
  }

  type GetOfficeHourSlotGroupByPayload<T extends OfficeHourSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfficeHourSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfficeHourSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfficeHourSlotGroupByOutputType[P]>
            : GetScalarType<T[P], OfficeHourSlotGroupByOutputType[P]>
        }
      >
    >


  export type OfficeHourSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    educatorId?: boolean
    startsAt?: boolean
    endsAt?: boolean
    location?: boolean
    mode?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    educator?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | OfficeHourSlot$bookingsArgs<ExtArgs>
    _count?: boolean | OfficeHourSlotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["officeHourSlot"]>

  export type OfficeHourSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    educatorId?: boolean
    startsAt?: boolean
    endsAt?: boolean
    location?: boolean
    mode?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    educator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["officeHourSlot"]>

  export type OfficeHourSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    educatorId?: boolean
    startsAt?: boolean
    endsAt?: boolean
    location?: boolean
    mode?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    educator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["officeHourSlot"]>

  export type OfficeHourSlotSelectScalar = {
    id?: boolean
    classId?: boolean
    educatorId?: boolean
    startsAt?: boolean
    endsAt?: boolean
    location?: boolean
    mode?: boolean
    createdAt?: boolean
  }

  export type OfficeHourSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classId" | "educatorId" | "startsAt" | "endsAt" | "location" | "mode" | "createdAt", ExtArgs["result"]["officeHourSlot"]>
  export type OfficeHourSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    educator?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | OfficeHourSlot$bookingsArgs<ExtArgs>
    _count?: boolean | OfficeHourSlotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OfficeHourSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    educator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OfficeHourSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    educator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OfficeHourSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OfficeHourSlot"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      educator: Prisma.$UserPayload<ExtArgs>
      bookings: Prisma.$OfficeHourBookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      classId: string
      educatorId: string
      startsAt: Date
      endsAt: Date
      location: string
      mode: string
      createdAt: Date
    }, ExtArgs["result"]["officeHourSlot"]>
    composites: {}
  }

  type OfficeHourSlotGetPayload<S extends boolean | null | undefined | OfficeHourSlotDefaultArgs> = $Result.GetResult<Prisma.$OfficeHourSlotPayload, S>

  type OfficeHourSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfficeHourSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfficeHourSlotCountAggregateInputType | true
    }

  export interface OfficeHourSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OfficeHourSlot'], meta: { name: 'OfficeHourSlot' } }
    /**
     * Find zero or one OfficeHourSlot that matches the filter.
     * @param {OfficeHourSlotFindUniqueArgs} args - Arguments to find a OfficeHourSlot
     * @example
     * // Get one OfficeHourSlot
     * const officeHourSlot = await prisma.officeHourSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfficeHourSlotFindUniqueArgs>(args: SelectSubset<T, OfficeHourSlotFindUniqueArgs<ExtArgs>>): Prisma__OfficeHourSlotClient<$Result.GetResult<Prisma.$OfficeHourSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OfficeHourSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfficeHourSlotFindUniqueOrThrowArgs} args - Arguments to find a OfficeHourSlot
     * @example
     * // Get one OfficeHourSlot
     * const officeHourSlot = await prisma.officeHourSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfficeHourSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, OfficeHourSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfficeHourSlotClient<$Result.GetResult<Prisma.$OfficeHourSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfficeHourSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHourSlotFindFirstArgs} args - Arguments to find a OfficeHourSlot
     * @example
     * // Get one OfficeHourSlot
     * const officeHourSlot = await prisma.officeHourSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfficeHourSlotFindFirstArgs>(args?: SelectSubset<T, OfficeHourSlotFindFirstArgs<ExtArgs>>): Prisma__OfficeHourSlotClient<$Result.GetResult<Prisma.$OfficeHourSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfficeHourSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHourSlotFindFirstOrThrowArgs} args - Arguments to find a OfficeHourSlot
     * @example
     * // Get one OfficeHourSlot
     * const officeHourSlot = await prisma.officeHourSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfficeHourSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, OfficeHourSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfficeHourSlotClient<$Result.GetResult<Prisma.$OfficeHourSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OfficeHourSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHourSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfficeHourSlots
     * const officeHourSlots = await prisma.officeHourSlot.findMany()
     * 
     * // Get first 10 OfficeHourSlots
     * const officeHourSlots = await prisma.officeHourSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const officeHourSlotWithIdOnly = await prisma.officeHourSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfficeHourSlotFindManyArgs>(args?: SelectSubset<T, OfficeHourSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficeHourSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OfficeHourSlot.
     * @param {OfficeHourSlotCreateArgs} args - Arguments to create a OfficeHourSlot.
     * @example
     * // Create one OfficeHourSlot
     * const OfficeHourSlot = await prisma.officeHourSlot.create({
     *   data: {
     *     // ... data to create a OfficeHourSlot
     *   }
     * })
     * 
     */
    create<T extends OfficeHourSlotCreateArgs>(args: SelectSubset<T, OfficeHourSlotCreateArgs<ExtArgs>>): Prisma__OfficeHourSlotClient<$Result.GetResult<Prisma.$OfficeHourSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OfficeHourSlots.
     * @param {OfficeHourSlotCreateManyArgs} args - Arguments to create many OfficeHourSlots.
     * @example
     * // Create many OfficeHourSlots
     * const officeHourSlot = await prisma.officeHourSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfficeHourSlotCreateManyArgs>(args?: SelectSubset<T, OfficeHourSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OfficeHourSlots and returns the data saved in the database.
     * @param {OfficeHourSlotCreateManyAndReturnArgs} args - Arguments to create many OfficeHourSlots.
     * @example
     * // Create many OfficeHourSlots
     * const officeHourSlot = await prisma.officeHourSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OfficeHourSlots and only return the `id`
     * const officeHourSlotWithIdOnly = await prisma.officeHourSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfficeHourSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, OfficeHourSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficeHourSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OfficeHourSlot.
     * @param {OfficeHourSlotDeleteArgs} args - Arguments to delete one OfficeHourSlot.
     * @example
     * // Delete one OfficeHourSlot
     * const OfficeHourSlot = await prisma.officeHourSlot.delete({
     *   where: {
     *     // ... filter to delete one OfficeHourSlot
     *   }
     * })
     * 
     */
    delete<T extends OfficeHourSlotDeleteArgs>(args: SelectSubset<T, OfficeHourSlotDeleteArgs<ExtArgs>>): Prisma__OfficeHourSlotClient<$Result.GetResult<Prisma.$OfficeHourSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OfficeHourSlot.
     * @param {OfficeHourSlotUpdateArgs} args - Arguments to update one OfficeHourSlot.
     * @example
     * // Update one OfficeHourSlot
     * const officeHourSlot = await prisma.officeHourSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfficeHourSlotUpdateArgs>(args: SelectSubset<T, OfficeHourSlotUpdateArgs<ExtArgs>>): Prisma__OfficeHourSlotClient<$Result.GetResult<Prisma.$OfficeHourSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OfficeHourSlots.
     * @param {OfficeHourSlotDeleteManyArgs} args - Arguments to filter OfficeHourSlots to delete.
     * @example
     * // Delete a few OfficeHourSlots
     * const { count } = await prisma.officeHourSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfficeHourSlotDeleteManyArgs>(args?: SelectSubset<T, OfficeHourSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfficeHourSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHourSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfficeHourSlots
     * const officeHourSlot = await prisma.officeHourSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfficeHourSlotUpdateManyArgs>(args: SelectSubset<T, OfficeHourSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfficeHourSlots and returns the data updated in the database.
     * @param {OfficeHourSlotUpdateManyAndReturnArgs} args - Arguments to update many OfficeHourSlots.
     * @example
     * // Update many OfficeHourSlots
     * const officeHourSlot = await prisma.officeHourSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OfficeHourSlots and only return the `id`
     * const officeHourSlotWithIdOnly = await prisma.officeHourSlot.updateManyAndReturn({
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
    updateManyAndReturn<T extends OfficeHourSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, OfficeHourSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficeHourSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OfficeHourSlot.
     * @param {OfficeHourSlotUpsertArgs} args - Arguments to update or create a OfficeHourSlot.
     * @example
     * // Update or create a OfficeHourSlot
     * const officeHourSlot = await prisma.officeHourSlot.upsert({
     *   create: {
     *     // ... data to create a OfficeHourSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfficeHourSlot we want to update
     *   }
     * })
     */
    upsert<T extends OfficeHourSlotUpsertArgs>(args: SelectSubset<T, OfficeHourSlotUpsertArgs<ExtArgs>>): Prisma__OfficeHourSlotClient<$Result.GetResult<Prisma.$OfficeHourSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OfficeHourSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHourSlotCountArgs} args - Arguments to filter OfficeHourSlots to count.
     * @example
     * // Count the number of OfficeHourSlots
     * const count = await prisma.officeHourSlot.count({
     *   where: {
     *     // ... the filter for the OfficeHourSlots we want to count
     *   }
     * })
    **/
    count<T extends OfficeHourSlotCountArgs>(
      args?: Subset<T, OfficeHourSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfficeHourSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OfficeHourSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHourSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfficeHourSlotAggregateArgs>(args: Subset<T, OfficeHourSlotAggregateArgs>): Prisma.PrismaPromise<GetOfficeHourSlotAggregateType<T>>

    /**
     * Group by OfficeHourSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHourSlotGroupByArgs} args - Group by arguments.
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
      T extends OfficeHourSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfficeHourSlotGroupByArgs['orderBy'] }
        : { orderBy?: OfficeHourSlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OfficeHourSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfficeHourSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OfficeHourSlot model
   */
  readonly fields: OfficeHourSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OfficeHourSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfficeHourSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    educator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends OfficeHourSlot$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, OfficeHourSlot$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficeHourBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OfficeHourSlot model
   */
  interface OfficeHourSlotFieldRefs {
    readonly id: FieldRef<"OfficeHourSlot", 'String'>
    readonly classId: FieldRef<"OfficeHourSlot", 'String'>
    readonly educatorId: FieldRef<"OfficeHourSlot", 'String'>
    readonly startsAt: FieldRef<"OfficeHourSlot", 'DateTime'>
    readonly endsAt: FieldRef<"OfficeHourSlot", 'DateTime'>
    readonly location: FieldRef<"OfficeHourSlot", 'String'>
    readonly mode: FieldRef<"OfficeHourSlot", 'String'>
    readonly createdAt: FieldRef<"OfficeHourSlot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OfficeHourSlot findUnique
   */
  export type OfficeHourSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourSlot
     */
    select?: OfficeHourSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourSlot
     */
    omit?: OfficeHourSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourSlotInclude<ExtArgs> | null
    /**
     * Filter, which OfficeHourSlot to fetch.
     */
    where: OfficeHourSlotWhereUniqueInput
  }

  /**
   * OfficeHourSlot findUniqueOrThrow
   */
  export type OfficeHourSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourSlot
     */
    select?: OfficeHourSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourSlot
     */
    omit?: OfficeHourSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourSlotInclude<ExtArgs> | null
    /**
     * Filter, which OfficeHourSlot to fetch.
     */
    where: OfficeHourSlotWhereUniqueInput
  }

  /**
   * OfficeHourSlot findFirst
   */
  export type OfficeHourSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourSlot
     */
    select?: OfficeHourSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourSlot
     */
    omit?: OfficeHourSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourSlotInclude<ExtArgs> | null
    /**
     * Filter, which OfficeHourSlot to fetch.
     */
    where?: OfficeHourSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficeHourSlots to fetch.
     */
    orderBy?: OfficeHourSlotOrderByWithRelationInput | OfficeHourSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfficeHourSlots.
     */
    cursor?: OfficeHourSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficeHourSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficeHourSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfficeHourSlots.
     */
    distinct?: OfficeHourSlotScalarFieldEnum | OfficeHourSlotScalarFieldEnum[]
  }

  /**
   * OfficeHourSlot findFirstOrThrow
   */
  export type OfficeHourSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourSlot
     */
    select?: OfficeHourSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourSlot
     */
    omit?: OfficeHourSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourSlotInclude<ExtArgs> | null
    /**
     * Filter, which OfficeHourSlot to fetch.
     */
    where?: OfficeHourSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficeHourSlots to fetch.
     */
    orderBy?: OfficeHourSlotOrderByWithRelationInput | OfficeHourSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfficeHourSlots.
     */
    cursor?: OfficeHourSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficeHourSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficeHourSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfficeHourSlots.
     */
    distinct?: OfficeHourSlotScalarFieldEnum | OfficeHourSlotScalarFieldEnum[]
  }

  /**
   * OfficeHourSlot findMany
   */
  export type OfficeHourSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourSlot
     */
    select?: OfficeHourSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourSlot
     */
    omit?: OfficeHourSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourSlotInclude<ExtArgs> | null
    /**
     * Filter, which OfficeHourSlots to fetch.
     */
    where?: OfficeHourSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficeHourSlots to fetch.
     */
    orderBy?: OfficeHourSlotOrderByWithRelationInput | OfficeHourSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OfficeHourSlots.
     */
    cursor?: OfficeHourSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficeHourSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficeHourSlots.
     */
    skip?: number
    distinct?: OfficeHourSlotScalarFieldEnum | OfficeHourSlotScalarFieldEnum[]
  }

  /**
   * OfficeHourSlot create
   */
  export type OfficeHourSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourSlot
     */
    select?: OfficeHourSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourSlot
     */
    omit?: OfficeHourSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a OfficeHourSlot.
     */
    data: XOR<OfficeHourSlotCreateInput, OfficeHourSlotUncheckedCreateInput>
  }

  /**
   * OfficeHourSlot createMany
   */
  export type OfficeHourSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OfficeHourSlots.
     */
    data: OfficeHourSlotCreateManyInput | OfficeHourSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OfficeHourSlot createManyAndReturn
   */
  export type OfficeHourSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourSlot
     */
    select?: OfficeHourSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourSlot
     */
    omit?: OfficeHourSlotOmit<ExtArgs> | null
    /**
     * The data used to create many OfficeHourSlots.
     */
    data: OfficeHourSlotCreateManyInput | OfficeHourSlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfficeHourSlot update
   */
  export type OfficeHourSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourSlot
     */
    select?: OfficeHourSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourSlot
     */
    omit?: OfficeHourSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a OfficeHourSlot.
     */
    data: XOR<OfficeHourSlotUpdateInput, OfficeHourSlotUncheckedUpdateInput>
    /**
     * Choose, which OfficeHourSlot to update.
     */
    where: OfficeHourSlotWhereUniqueInput
  }

  /**
   * OfficeHourSlot updateMany
   */
  export type OfficeHourSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OfficeHourSlots.
     */
    data: XOR<OfficeHourSlotUpdateManyMutationInput, OfficeHourSlotUncheckedUpdateManyInput>
    /**
     * Filter which OfficeHourSlots to update
     */
    where?: OfficeHourSlotWhereInput
    /**
     * Limit how many OfficeHourSlots to update.
     */
    limit?: number
  }

  /**
   * OfficeHourSlot updateManyAndReturn
   */
  export type OfficeHourSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourSlot
     */
    select?: OfficeHourSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourSlot
     */
    omit?: OfficeHourSlotOmit<ExtArgs> | null
    /**
     * The data used to update OfficeHourSlots.
     */
    data: XOR<OfficeHourSlotUpdateManyMutationInput, OfficeHourSlotUncheckedUpdateManyInput>
    /**
     * Filter which OfficeHourSlots to update
     */
    where?: OfficeHourSlotWhereInput
    /**
     * Limit how many OfficeHourSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourSlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfficeHourSlot upsert
   */
  export type OfficeHourSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourSlot
     */
    select?: OfficeHourSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourSlot
     */
    omit?: OfficeHourSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the OfficeHourSlot to update in case it exists.
     */
    where: OfficeHourSlotWhereUniqueInput
    /**
     * In case the OfficeHourSlot found by the `where` argument doesn't exist, create a new OfficeHourSlot with this data.
     */
    create: XOR<OfficeHourSlotCreateInput, OfficeHourSlotUncheckedCreateInput>
    /**
     * In case the OfficeHourSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfficeHourSlotUpdateInput, OfficeHourSlotUncheckedUpdateInput>
  }

  /**
   * OfficeHourSlot delete
   */
  export type OfficeHourSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourSlot
     */
    select?: OfficeHourSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourSlot
     */
    omit?: OfficeHourSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourSlotInclude<ExtArgs> | null
    /**
     * Filter which OfficeHourSlot to delete.
     */
    where: OfficeHourSlotWhereUniqueInput
  }

  /**
   * OfficeHourSlot deleteMany
   */
  export type OfficeHourSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfficeHourSlots to delete
     */
    where?: OfficeHourSlotWhereInput
    /**
     * Limit how many OfficeHourSlots to delete.
     */
    limit?: number
  }

  /**
   * OfficeHourSlot.bookings
   */
  export type OfficeHourSlot$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourBooking
     */
    select?: OfficeHourBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourBooking
     */
    omit?: OfficeHourBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourBookingInclude<ExtArgs> | null
    where?: OfficeHourBookingWhereInput
    orderBy?: OfficeHourBookingOrderByWithRelationInput | OfficeHourBookingOrderByWithRelationInput[]
    cursor?: OfficeHourBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfficeHourBookingScalarFieldEnum | OfficeHourBookingScalarFieldEnum[]
  }

  /**
   * OfficeHourSlot without action
   */
  export type OfficeHourSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourSlot
     */
    select?: OfficeHourSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourSlot
     */
    omit?: OfficeHourSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourSlotInclude<ExtArgs> | null
  }


  /**
   * Model OfficeHourBooking
   */

  export type AggregateOfficeHourBooking = {
    _count: OfficeHourBookingCountAggregateOutputType | null
    _min: OfficeHourBookingMinAggregateOutputType | null
    _max: OfficeHourBookingMaxAggregateOutputType | null
  }

  export type OfficeHourBookingMinAggregateOutputType = {
    id: string | null
    officeHourSlotId: string | null
    studentId: string | null
    topic: string | null
    status: $Enums.BookingStatus | null
    bookedAt: Date | null
  }

  export type OfficeHourBookingMaxAggregateOutputType = {
    id: string | null
    officeHourSlotId: string | null
    studentId: string | null
    topic: string | null
    status: $Enums.BookingStatus | null
    bookedAt: Date | null
  }

  export type OfficeHourBookingCountAggregateOutputType = {
    id: number
    officeHourSlotId: number
    studentId: number
    topic: number
    status: number
    bookedAt: number
    _all: number
  }


  export type OfficeHourBookingMinAggregateInputType = {
    id?: true
    officeHourSlotId?: true
    studentId?: true
    topic?: true
    status?: true
    bookedAt?: true
  }

  export type OfficeHourBookingMaxAggregateInputType = {
    id?: true
    officeHourSlotId?: true
    studentId?: true
    topic?: true
    status?: true
    bookedAt?: true
  }

  export type OfficeHourBookingCountAggregateInputType = {
    id?: true
    officeHourSlotId?: true
    studentId?: true
    topic?: true
    status?: true
    bookedAt?: true
    _all?: true
  }

  export type OfficeHourBookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfficeHourBooking to aggregate.
     */
    where?: OfficeHourBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficeHourBookings to fetch.
     */
    orderBy?: OfficeHourBookingOrderByWithRelationInput | OfficeHourBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfficeHourBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficeHourBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficeHourBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OfficeHourBookings
    **/
    _count?: true | OfficeHourBookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfficeHourBookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfficeHourBookingMaxAggregateInputType
  }

  export type GetOfficeHourBookingAggregateType<T extends OfficeHourBookingAggregateArgs> = {
        [P in keyof T & keyof AggregateOfficeHourBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfficeHourBooking[P]>
      : GetScalarType<T[P], AggregateOfficeHourBooking[P]>
  }




  export type OfficeHourBookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficeHourBookingWhereInput
    orderBy?: OfficeHourBookingOrderByWithAggregationInput | OfficeHourBookingOrderByWithAggregationInput[]
    by: OfficeHourBookingScalarFieldEnum[] | OfficeHourBookingScalarFieldEnum
    having?: OfficeHourBookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfficeHourBookingCountAggregateInputType | true
    _min?: OfficeHourBookingMinAggregateInputType
    _max?: OfficeHourBookingMaxAggregateInputType
  }

  export type OfficeHourBookingGroupByOutputType = {
    id: string
    officeHourSlotId: string
    studentId: string
    topic: string | null
    status: $Enums.BookingStatus
    bookedAt: Date
    _count: OfficeHourBookingCountAggregateOutputType | null
    _min: OfficeHourBookingMinAggregateOutputType | null
    _max: OfficeHourBookingMaxAggregateOutputType | null
  }

  type GetOfficeHourBookingGroupByPayload<T extends OfficeHourBookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfficeHourBookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfficeHourBookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfficeHourBookingGroupByOutputType[P]>
            : GetScalarType<T[P], OfficeHourBookingGroupByOutputType[P]>
        }
      >
    >


  export type OfficeHourBookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    officeHourSlotId?: boolean
    studentId?: boolean
    topic?: boolean
    status?: boolean
    bookedAt?: boolean
    officeHourSlot?: boolean | OfficeHourSlotDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["officeHourBooking"]>

  export type OfficeHourBookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    officeHourSlotId?: boolean
    studentId?: boolean
    topic?: boolean
    status?: boolean
    bookedAt?: boolean
    officeHourSlot?: boolean | OfficeHourSlotDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["officeHourBooking"]>

  export type OfficeHourBookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    officeHourSlotId?: boolean
    studentId?: boolean
    topic?: boolean
    status?: boolean
    bookedAt?: boolean
    officeHourSlot?: boolean | OfficeHourSlotDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["officeHourBooking"]>

  export type OfficeHourBookingSelectScalar = {
    id?: boolean
    officeHourSlotId?: boolean
    studentId?: boolean
    topic?: boolean
    status?: boolean
    bookedAt?: boolean
  }

  export type OfficeHourBookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "officeHourSlotId" | "studentId" | "topic" | "status" | "bookedAt", ExtArgs["result"]["officeHourBooking"]>
  export type OfficeHourBookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    officeHourSlot?: boolean | OfficeHourSlotDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OfficeHourBookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    officeHourSlot?: boolean | OfficeHourSlotDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OfficeHourBookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    officeHourSlot?: boolean | OfficeHourSlotDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OfficeHourBookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OfficeHourBooking"
    objects: {
      officeHourSlot: Prisma.$OfficeHourSlotPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      officeHourSlotId: string
      studentId: string
      topic: string | null
      status: $Enums.BookingStatus
      bookedAt: Date
    }, ExtArgs["result"]["officeHourBooking"]>
    composites: {}
  }

  type OfficeHourBookingGetPayload<S extends boolean | null | undefined | OfficeHourBookingDefaultArgs> = $Result.GetResult<Prisma.$OfficeHourBookingPayload, S>

  type OfficeHourBookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfficeHourBookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfficeHourBookingCountAggregateInputType | true
    }

  export interface OfficeHourBookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OfficeHourBooking'], meta: { name: 'OfficeHourBooking' } }
    /**
     * Find zero or one OfficeHourBooking that matches the filter.
     * @param {OfficeHourBookingFindUniqueArgs} args - Arguments to find a OfficeHourBooking
     * @example
     * // Get one OfficeHourBooking
     * const officeHourBooking = await prisma.officeHourBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfficeHourBookingFindUniqueArgs>(args: SelectSubset<T, OfficeHourBookingFindUniqueArgs<ExtArgs>>): Prisma__OfficeHourBookingClient<$Result.GetResult<Prisma.$OfficeHourBookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OfficeHourBooking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfficeHourBookingFindUniqueOrThrowArgs} args - Arguments to find a OfficeHourBooking
     * @example
     * // Get one OfficeHourBooking
     * const officeHourBooking = await prisma.officeHourBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfficeHourBookingFindUniqueOrThrowArgs>(args: SelectSubset<T, OfficeHourBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfficeHourBookingClient<$Result.GetResult<Prisma.$OfficeHourBookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfficeHourBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHourBookingFindFirstArgs} args - Arguments to find a OfficeHourBooking
     * @example
     * // Get one OfficeHourBooking
     * const officeHourBooking = await prisma.officeHourBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfficeHourBookingFindFirstArgs>(args?: SelectSubset<T, OfficeHourBookingFindFirstArgs<ExtArgs>>): Prisma__OfficeHourBookingClient<$Result.GetResult<Prisma.$OfficeHourBookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfficeHourBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHourBookingFindFirstOrThrowArgs} args - Arguments to find a OfficeHourBooking
     * @example
     * // Get one OfficeHourBooking
     * const officeHourBooking = await prisma.officeHourBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfficeHourBookingFindFirstOrThrowArgs>(args?: SelectSubset<T, OfficeHourBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfficeHourBookingClient<$Result.GetResult<Prisma.$OfficeHourBookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OfficeHourBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHourBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfficeHourBookings
     * const officeHourBookings = await prisma.officeHourBooking.findMany()
     * 
     * // Get first 10 OfficeHourBookings
     * const officeHourBookings = await prisma.officeHourBooking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const officeHourBookingWithIdOnly = await prisma.officeHourBooking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfficeHourBookingFindManyArgs>(args?: SelectSubset<T, OfficeHourBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficeHourBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OfficeHourBooking.
     * @param {OfficeHourBookingCreateArgs} args - Arguments to create a OfficeHourBooking.
     * @example
     * // Create one OfficeHourBooking
     * const OfficeHourBooking = await prisma.officeHourBooking.create({
     *   data: {
     *     // ... data to create a OfficeHourBooking
     *   }
     * })
     * 
     */
    create<T extends OfficeHourBookingCreateArgs>(args: SelectSubset<T, OfficeHourBookingCreateArgs<ExtArgs>>): Prisma__OfficeHourBookingClient<$Result.GetResult<Prisma.$OfficeHourBookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OfficeHourBookings.
     * @param {OfficeHourBookingCreateManyArgs} args - Arguments to create many OfficeHourBookings.
     * @example
     * // Create many OfficeHourBookings
     * const officeHourBooking = await prisma.officeHourBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfficeHourBookingCreateManyArgs>(args?: SelectSubset<T, OfficeHourBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OfficeHourBookings and returns the data saved in the database.
     * @param {OfficeHourBookingCreateManyAndReturnArgs} args - Arguments to create many OfficeHourBookings.
     * @example
     * // Create many OfficeHourBookings
     * const officeHourBooking = await prisma.officeHourBooking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OfficeHourBookings and only return the `id`
     * const officeHourBookingWithIdOnly = await prisma.officeHourBooking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfficeHourBookingCreateManyAndReturnArgs>(args?: SelectSubset<T, OfficeHourBookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficeHourBookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OfficeHourBooking.
     * @param {OfficeHourBookingDeleteArgs} args - Arguments to delete one OfficeHourBooking.
     * @example
     * // Delete one OfficeHourBooking
     * const OfficeHourBooking = await prisma.officeHourBooking.delete({
     *   where: {
     *     // ... filter to delete one OfficeHourBooking
     *   }
     * })
     * 
     */
    delete<T extends OfficeHourBookingDeleteArgs>(args: SelectSubset<T, OfficeHourBookingDeleteArgs<ExtArgs>>): Prisma__OfficeHourBookingClient<$Result.GetResult<Prisma.$OfficeHourBookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OfficeHourBooking.
     * @param {OfficeHourBookingUpdateArgs} args - Arguments to update one OfficeHourBooking.
     * @example
     * // Update one OfficeHourBooking
     * const officeHourBooking = await prisma.officeHourBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfficeHourBookingUpdateArgs>(args: SelectSubset<T, OfficeHourBookingUpdateArgs<ExtArgs>>): Prisma__OfficeHourBookingClient<$Result.GetResult<Prisma.$OfficeHourBookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OfficeHourBookings.
     * @param {OfficeHourBookingDeleteManyArgs} args - Arguments to filter OfficeHourBookings to delete.
     * @example
     * // Delete a few OfficeHourBookings
     * const { count } = await prisma.officeHourBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfficeHourBookingDeleteManyArgs>(args?: SelectSubset<T, OfficeHourBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfficeHourBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHourBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfficeHourBookings
     * const officeHourBooking = await prisma.officeHourBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfficeHourBookingUpdateManyArgs>(args: SelectSubset<T, OfficeHourBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfficeHourBookings and returns the data updated in the database.
     * @param {OfficeHourBookingUpdateManyAndReturnArgs} args - Arguments to update many OfficeHourBookings.
     * @example
     * // Update many OfficeHourBookings
     * const officeHourBooking = await prisma.officeHourBooking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OfficeHourBookings and only return the `id`
     * const officeHourBookingWithIdOnly = await prisma.officeHourBooking.updateManyAndReturn({
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
    updateManyAndReturn<T extends OfficeHourBookingUpdateManyAndReturnArgs>(args: SelectSubset<T, OfficeHourBookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficeHourBookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OfficeHourBooking.
     * @param {OfficeHourBookingUpsertArgs} args - Arguments to update or create a OfficeHourBooking.
     * @example
     * // Update or create a OfficeHourBooking
     * const officeHourBooking = await prisma.officeHourBooking.upsert({
     *   create: {
     *     // ... data to create a OfficeHourBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfficeHourBooking we want to update
     *   }
     * })
     */
    upsert<T extends OfficeHourBookingUpsertArgs>(args: SelectSubset<T, OfficeHourBookingUpsertArgs<ExtArgs>>): Prisma__OfficeHourBookingClient<$Result.GetResult<Prisma.$OfficeHourBookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OfficeHourBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHourBookingCountArgs} args - Arguments to filter OfficeHourBookings to count.
     * @example
     * // Count the number of OfficeHourBookings
     * const count = await prisma.officeHourBooking.count({
     *   where: {
     *     // ... the filter for the OfficeHourBookings we want to count
     *   }
     * })
    **/
    count<T extends OfficeHourBookingCountArgs>(
      args?: Subset<T, OfficeHourBookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfficeHourBookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OfficeHourBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHourBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfficeHourBookingAggregateArgs>(args: Subset<T, OfficeHourBookingAggregateArgs>): Prisma.PrismaPromise<GetOfficeHourBookingAggregateType<T>>

    /**
     * Group by OfficeHourBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeHourBookingGroupByArgs} args - Group by arguments.
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
      T extends OfficeHourBookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfficeHourBookingGroupByArgs['orderBy'] }
        : { orderBy?: OfficeHourBookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OfficeHourBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfficeHourBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OfficeHourBooking model
   */
  readonly fields: OfficeHourBookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OfficeHourBooking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfficeHourBookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    officeHourSlot<T extends OfficeHourSlotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfficeHourSlotDefaultArgs<ExtArgs>>): Prisma__OfficeHourSlotClient<$Result.GetResult<Prisma.$OfficeHourSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OfficeHourBooking model
   */
  interface OfficeHourBookingFieldRefs {
    readonly id: FieldRef<"OfficeHourBooking", 'String'>
    readonly officeHourSlotId: FieldRef<"OfficeHourBooking", 'String'>
    readonly studentId: FieldRef<"OfficeHourBooking", 'String'>
    readonly topic: FieldRef<"OfficeHourBooking", 'String'>
    readonly status: FieldRef<"OfficeHourBooking", 'BookingStatus'>
    readonly bookedAt: FieldRef<"OfficeHourBooking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OfficeHourBooking findUnique
   */
  export type OfficeHourBookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourBooking
     */
    select?: OfficeHourBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourBooking
     */
    omit?: OfficeHourBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourBookingInclude<ExtArgs> | null
    /**
     * Filter, which OfficeHourBooking to fetch.
     */
    where: OfficeHourBookingWhereUniqueInput
  }

  /**
   * OfficeHourBooking findUniqueOrThrow
   */
  export type OfficeHourBookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourBooking
     */
    select?: OfficeHourBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourBooking
     */
    omit?: OfficeHourBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourBookingInclude<ExtArgs> | null
    /**
     * Filter, which OfficeHourBooking to fetch.
     */
    where: OfficeHourBookingWhereUniqueInput
  }

  /**
   * OfficeHourBooking findFirst
   */
  export type OfficeHourBookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourBooking
     */
    select?: OfficeHourBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourBooking
     */
    omit?: OfficeHourBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourBookingInclude<ExtArgs> | null
    /**
     * Filter, which OfficeHourBooking to fetch.
     */
    where?: OfficeHourBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficeHourBookings to fetch.
     */
    orderBy?: OfficeHourBookingOrderByWithRelationInput | OfficeHourBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfficeHourBookings.
     */
    cursor?: OfficeHourBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficeHourBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficeHourBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfficeHourBookings.
     */
    distinct?: OfficeHourBookingScalarFieldEnum | OfficeHourBookingScalarFieldEnum[]
  }

  /**
   * OfficeHourBooking findFirstOrThrow
   */
  export type OfficeHourBookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourBooking
     */
    select?: OfficeHourBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourBooking
     */
    omit?: OfficeHourBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourBookingInclude<ExtArgs> | null
    /**
     * Filter, which OfficeHourBooking to fetch.
     */
    where?: OfficeHourBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficeHourBookings to fetch.
     */
    orderBy?: OfficeHourBookingOrderByWithRelationInput | OfficeHourBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfficeHourBookings.
     */
    cursor?: OfficeHourBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficeHourBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficeHourBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfficeHourBookings.
     */
    distinct?: OfficeHourBookingScalarFieldEnum | OfficeHourBookingScalarFieldEnum[]
  }

  /**
   * OfficeHourBooking findMany
   */
  export type OfficeHourBookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourBooking
     */
    select?: OfficeHourBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourBooking
     */
    omit?: OfficeHourBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourBookingInclude<ExtArgs> | null
    /**
     * Filter, which OfficeHourBookings to fetch.
     */
    where?: OfficeHourBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfficeHourBookings to fetch.
     */
    orderBy?: OfficeHourBookingOrderByWithRelationInput | OfficeHourBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OfficeHourBookings.
     */
    cursor?: OfficeHourBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfficeHourBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfficeHourBookings.
     */
    skip?: number
    distinct?: OfficeHourBookingScalarFieldEnum | OfficeHourBookingScalarFieldEnum[]
  }

  /**
   * OfficeHourBooking create
   */
  export type OfficeHourBookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourBooking
     */
    select?: OfficeHourBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourBooking
     */
    omit?: OfficeHourBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourBookingInclude<ExtArgs> | null
    /**
     * The data needed to create a OfficeHourBooking.
     */
    data: XOR<OfficeHourBookingCreateInput, OfficeHourBookingUncheckedCreateInput>
  }

  /**
   * OfficeHourBooking createMany
   */
  export type OfficeHourBookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OfficeHourBookings.
     */
    data: OfficeHourBookingCreateManyInput | OfficeHourBookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OfficeHourBooking createManyAndReturn
   */
  export type OfficeHourBookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourBooking
     */
    select?: OfficeHourBookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourBooking
     */
    omit?: OfficeHourBookingOmit<ExtArgs> | null
    /**
     * The data used to create many OfficeHourBookings.
     */
    data: OfficeHourBookingCreateManyInput | OfficeHourBookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourBookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfficeHourBooking update
   */
  export type OfficeHourBookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourBooking
     */
    select?: OfficeHourBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourBooking
     */
    omit?: OfficeHourBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourBookingInclude<ExtArgs> | null
    /**
     * The data needed to update a OfficeHourBooking.
     */
    data: XOR<OfficeHourBookingUpdateInput, OfficeHourBookingUncheckedUpdateInput>
    /**
     * Choose, which OfficeHourBooking to update.
     */
    where: OfficeHourBookingWhereUniqueInput
  }

  /**
   * OfficeHourBooking updateMany
   */
  export type OfficeHourBookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OfficeHourBookings.
     */
    data: XOR<OfficeHourBookingUpdateManyMutationInput, OfficeHourBookingUncheckedUpdateManyInput>
    /**
     * Filter which OfficeHourBookings to update
     */
    where?: OfficeHourBookingWhereInput
    /**
     * Limit how many OfficeHourBookings to update.
     */
    limit?: number
  }

  /**
   * OfficeHourBooking updateManyAndReturn
   */
  export type OfficeHourBookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourBooking
     */
    select?: OfficeHourBookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourBooking
     */
    omit?: OfficeHourBookingOmit<ExtArgs> | null
    /**
     * The data used to update OfficeHourBookings.
     */
    data: XOR<OfficeHourBookingUpdateManyMutationInput, OfficeHourBookingUncheckedUpdateManyInput>
    /**
     * Filter which OfficeHourBookings to update
     */
    where?: OfficeHourBookingWhereInput
    /**
     * Limit how many OfficeHourBookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourBookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfficeHourBooking upsert
   */
  export type OfficeHourBookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourBooking
     */
    select?: OfficeHourBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourBooking
     */
    omit?: OfficeHourBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourBookingInclude<ExtArgs> | null
    /**
     * The filter to search for the OfficeHourBooking to update in case it exists.
     */
    where: OfficeHourBookingWhereUniqueInput
    /**
     * In case the OfficeHourBooking found by the `where` argument doesn't exist, create a new OfficeHourBooking with this data.
     */
    create: XOR<OfficeHourBookingCreateInput, OfficeHourBookingUncheckedCreateInput>
    /**
     * In case the OfficeHourBooking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfficeHourBookingUpdateInput, OfficeHourBookingUncheckedUpdateInput>
  }

  /**
   * OfficeHourBooking delete
   */
  export type OfficeHourBookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourBooking
     */
    select?: OfficeHourBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourBooking
     */
    omit?: OfficeHourBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourBookingInclude<ExtArgs> | null
    /**
     * Filter which OfficeHourBooking to delete.
     */
    where: OfficeHourBookingWhereUniqueInput
  }

  /**
   * OfficeHourBooking deleteMany
   */
  export type OfficeHourBookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfficeHourBookings to delete
     */
    where?: OfficeHourBookingWhereInput
    /**
     * Limit how many OfficeHourBookings to delete.
     */
    limit?: number
  }

  /**
   * OfficeHourBooking without action
   */
  export type OfficeHourBookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeHourBooking
     */
    select?: OfficeHourBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfficeHourBooking
     */
    omit?: OfficeHourBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeHourBookingInclude<ExtArgs> | null
  }


  /**
   * Model AuditEvent
   */

  export type AggregateAuditEvent = {
    _count: AuditEventCountAggregateOutputType | null
    _min: AuditEventMinAggregateOutputType | null
    _max: AuditEventMaxAggregateOutputType | null
  }

  export type AuditEventMinAggregateOutputType = {
    id: string | null
    institutionId: string | null
    actorUserId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AuditEventMaxAggregateOutputType = {
    id: string | null
    institutionId: string | null
    actorUserId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AuditEventCountAggregateOutputType = {
    id: number
    institutionId: number
    actorUserId: number
    action: number
    entityType: number
    entityId: number
    payload: number
    createdAt: number
    _all: number
  }


  export type AuditEventMinAggregateInputType = {
    id?: true
    institutionId?: true
    actorUserId?: true
    action?: true
    entityType?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditEventMaxAggregateInputType = {
    id?: true
    institutionId?: true
    actorUserId?: true
    action?: true
    entityType?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditEventCountAggregateInputType = {
    id?: true
    institutionId?: true
    actorUserId?: true
    action?: true
    entityType?: true
    entityId?: true
    payload?: true
    createdAt?: true
    _all?: true
  }

  export type AuditEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditEvent to aggregate.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditEvents
    **/
    _count?: true | AuditEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditEventMaxAggregateInputType
  }

  export type GetAuditEventAggregateType<T extends AuditEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditEvent[P]>
      : GetScalarType<T[P], AggregateAuditEvent[P]>
  }




  export type AuditEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditEventWhereInput
    orderBy?: AuditEventOrderByWithAggregationInput | AuditEventOrderByWithAggregationInput[]
    by: AuditEventScalarFieldEnum[] | AuditEventScalarFieldEnum
    having?: AuditEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditEventCountAggregateInputType | true
    _min?: AuditEventMinAggregateInputType
    _max?: AuditEventMaxAggregateInputType
  }

  export type AuditEventGroupByOutputType = {
    id: string
    institutionId: string
    actorUserId: string
    action: string
    entityType: string
    entityId: string
    payload: JsonValue | null
    createdAt: Date
    _count: AuditEventCountAggregateOutputType | null
    _min: AuditEventMinAggregateOutputType | null
    _max: AuditEventMaxAggregateOutputType | null
  }

  type GetAuditEventGroupByPayload<T extends AuditEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditEventGroupByOutputType[P]>
            : GetScalarType<T[P], AuditEventGroupByOutputType[P]>
        }
      >
    >


  export type AuditEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institutionId?: boolean
    actorUserId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    payload?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditEvent"]>

  export type AuditEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institutionId?: boolean
    actorUserId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    payload?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditEvent"]>

  export type AuditEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institutionId?: boolean
    actorUserId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    payload?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditEvent"]>

  export type AuditEventSelectScalar = {
    id?: boolean
    institutionId?: boolean
    actorUserId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    payload?: boolean
    createdAt?: boolean
  }

  export type AuditEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "institutionId" | "actorUserId" | "action" | "entityType" | "entityId" | "payload" | "createdAt", ExtArgs["result"]["auditEvent"]>
  export type AuditEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditEvent"
    objects: {
      actor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      institutionId: string
      actorUserId: string
      action: string
      entityType: string
      entityId: string
      payload: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditEvent"]>
    composites: {}
  }

  type AuditEventGetPayload<S extends boolean | null | undefined | AuditEventDefaultArgs> = $Result.GetResult<Prisma.$AuditEventPayload, S>

  type AuditEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditEventCountAggregateInputType | true
    }

  export interface AuditEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditEvent'], meta: { name: 'AuditEvent' } }
    /**
     * Find zero or one AuditEvent that matches the filter.
     * @param {AuditEventFindUniqueArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditEventFindUniqueArgs>(args: SelectSubset<T, AuditEventFindUniqueArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditEventFindUniqueOrThrowArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindFirstArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditEventFindFirstArgs>(args?: SelectSubset<T, AuditEventFindFirstArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindFirstOrThrowArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditEvents
     * const auditEvents = await prisma.auditEvent.findMany()
     * 
     * // Get first 10 AuditEvents
     * const auditEvents = await prisma.auditEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditEventFindManyArgs>(args?: SelectSubset<T, AuditEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditEvent.
     * @param {AuditEventCreateArgs} args - Arguments to create a AuditEvent.
     * @example
     * // Create one AuditEvent
     * const AuditEvent = await prisma.auditEvent.create({
     *   data: {
     *     // ... data to create a AuditEvent
     *   }
     * })
     * 
     */
    create<T extends AuditEventCreateArgs>(args: SelectSubset<T, AuditEventCreateArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditEvents.
     * @param {AuditEventCreateManyArgs} args - Arguments to create many AuditEvents.
     * @example
     * // Create many AuditEvents
     * const auditEvent = await prisma.auditEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditEventCreateManyArgs>(args?: SelectSubset<T, AuditEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditEvents and returns the data saved in the database.
     * @param {AuditEventCreateManyAndReturnArgs} args - Arguments to create many AuditEvents.
     * @example
     * // Create many AuditEvents
     * const auditEvent = await prisma.auditEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditEvents and only return the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditEventCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditEvent.
     * @param {AuditEventDeleteArgs} args - Arguments to delete one AuditEvent.
     * @example
     * // Delete one AuditEvent
     * const AuditEvent = await prisma.auditEvent.delete({
     *   where: {
     *     // ... filter to delete one AuditEvent
     *   }
     * })
     * 
     */
    delete<T extends AuditEventDeleteArgs>(args: SelectSubset<T, AuditEventDeleteArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditEvent.
     * @param {AuditEventUpdateArgs} args - Arguments to update one AuditEvent.
     * @example
     * // Update one AuditEvent
     * const auditEvent = await prisma.auditEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditEventUpdateArgs>(args: SelectSubset<T, AuditEventUpdateArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditEvents.
     * @param {AuditEventDeleteManyArgs} args - Arguments to filter AuditEvents to delete.
     * @example
     * // Delete a few AuditEvents
     * const { count } = await prisma.auditEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditEventDeleteManyArgs>(args?: SelectSubset<T, AuditEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditEvents
     * const auditEvent = await prisma.auditEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditEventUpdateManyArgs>(args: SelectSubset<T, AuditEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditEvents and returns the data updated in the database.
     * @param {AuditEventUpdateManyAndReturnArgs} args - Arguments to update many AuditEvents.
     * @example
     * // Update many AuditEvents
     * const auditEvent = await prisma.auditEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditEvents and only return the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditEventUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditEvent.
     * @param {AuditEventUpsertArgs} args - Arguments to update or create a AuditEvent.
     * @example
     * // Update or create a AuditEvent
     * const auditEvent = await prisma.auditEvent.upsert({
     *   create: {
     *     // ... data to create a AuditEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditEvent we want to update
     *   }
     * })
     */
    upsert<T extends AuditEventUpsertArgs>(args: SelectSubset<T, AuditEventUpsertArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventCountArgs} args - Arguments to filter AuditEvents to count.
     * @example
     * // Count the number of AuditEvents
     * const count = await prisma.auditEvent.count({
     *   where: {
     *     // ... the filter for the AuditEvents we want to count
     *   }
     * })
    **/
    count<T extends AuditEventCountArgs>(
      args?: Subset<T, AuditEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditEventAggregateArgs>(args: Subset<T, AuditEventAggregateArgs>): Prisma.PrismaPromise<GetAuditEventAggregateType<T>>

    /**
     * Group by AuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventGroupByArgs} args - Group by arguments.
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
      T extends AuditEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditEventGroupByArgs['orderBy'] }
        : { orderBy?: AuditEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditEvent model
   */
  readonly fields: AuditEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditEvent model
   */
  interface AuditEventFieldRefs {
    readonly id: FieldRef<"AuditEvent", 'String'>
    readonly institutionId: FieldRef<"AuditEvent", 'String'>
    readonly actorUserId: FieldRef<"AuditEvent", 'String'>
    readonly action: FieldRef<"AuditEvent", 'String'>
    readonly entityType: FieldRef<"AuditEvent", 'String'>
    readonly entityId: FieldRef<"AuditEvent", 'String'>
    readonly payload: FieldRef<"AuditEvent", 'Json'>
    readonly createdAt: FieldRef<"AuditEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditEvent findUnique
   */
  export type AuditEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent findUniqueOrThrow
   */
  export type AuditEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent findFirst
   */
  export type AuditEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditEvents.
     */
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * AuditEvent findFirstOrThrow
   */
  export type AuditEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditEvents.
     */
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * AuditEvent findMany
   */
  export type AuditEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvents to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * AuditEvent create
   */
  export type AuditEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditEvent.
     */
    data: XOR<AuditEventCreateInput, AuditEventUncheckedCreateInput>
  }

  /**
   * AuditEvent createMany
   */
  export type AuditEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditEvents.
     */
    data: AuditEventCreateManyInput | AuditEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditEvent createManyAndReturn
   */
  export type AuditEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * The data used to create many AuditEvents.
     */
    data: AuditEventCreateManyInput | AuditEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditEvent update
   */
  export type AuditEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditEvent.
     */
    data: XOR<AuditEventUpdateInput, AuditEventUncheckedUpdateInput>
    /**
     * Choose, which AuditEvent to update.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent updateMany
   */
  export type AuditEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditEvents.
     */
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyInput>
    /**
     * Filter which AuditEvents to update
     */
    where?: AuditEventWhereInput
    /**
     * Limit how many AuditEvents to update.
     */
    limit?: number
  }

  /**
   * AuditEvent updateManyAndReturn
   */
  export type AuditEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * The data used to update AuditEvents.
     */
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyInput>
    /**
     * Filter which AuditEvents to update
     */
    where?: AuditEventWhereInput
    /**
     * Limit how many AuditEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditEvent upsert
   */
  export type AuditEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditEvent to update in case it exists.
     */
    where: AuditEventWhereUniqueInput
    /**
     * In case the AuditEvent found by the `where` argument doesn't exist, create a new AuditEvent with this data.
     */
    create: XOR<AuditEventCreateInput, AuditEventUncheckedCreateInput>
    /**
     * In case the AuditEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditEventUpdateInput, AuditEventUncheckedUpdateInput>
  }

  /**
   * AuditEvent delete
   */
  export type AuditEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter which AuditEvent to delete.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent deleteMany
   */
  export type AuditEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditEvents to delete
     */
    where?: AuditEventWhereInput
    /**
     * Limit how many AuditEvents to delete.
     */
    limit?: number
  }

  /**
   * AuditEvent without action
   */
  export type AuditEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
  }


  /**
   * Model AIInteraction
   */

  export type AggregateAIInteraction = {
    _count: AIInteractionCountAggregateOutputType | null
    _min: AIInteractionMinAggregateOutputType | null
    _max: AIInteractionMaxAggregateOutputType | null
  }

  export type AIInteractionMinAggregateOutputType = {
    id: string | null
    institutionId: string | null
    actorUserId: string | null
    roleContext: string | null
    classId: string | null
    courseworkId: string | null
    prompt: string | null
    response: string | null
    createdAt: Date | null
  }

  export type AIInteractionMaxAggregateOutputType = {
    id: string | null
    institutionId: string | null
    actorUserId: string | null
    roleContext: string | null
    classId: string | null
    courseworkId: string | null
    prompt: string | null
    response: string | null
    createdAt: Date | null
  }

  export type AIInteractionCountAggregateOutputType = {
    id: number
    institutionId: number
    actorUserId: number
    roleContext: number
    classId: number
    courseworkId: number
    prompt: number
    response: number
    createdAt: number
    _all: number
  }


  export type AIInteractionMinAggregateInputType = {
    id?: true
    institutionId?: true
    actorUserId?: true
    roleContext?: true
    classId?: true
    courseworkId?: true
    prompt?: true
    response?: true
    createdAt?: true
  }

  export type AIInteractionMaxAggregateInputType = {
    id?: true
    institutionId?: true
    actorUserId?: true
    roleContext?: true
    classId?: true
    courseworkId?: true
    prompt?: true
    response?: true
    createdAt?: true
  }

  export type AIInteractionCountAggregateInputType = {
    id?: true
    institutionId?: true
    actorUserId?: true
    roleContext?: true
    classId?: true
    courseworkId?: true
    prompt?: true
    response?: true
    createdAt?: true
    _all?: true
  }

  export type AIInteractionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIInteraction to aggregate.
     */
    where?: AIInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInteractions to fetch.
     */
    orderBy?: AIInteractionOrderByWithRelationInput | AIInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIInteractions
    **/
    _count?: true | AIInteractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIInteractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIInteractionMaxAggregateInputType
  }

  export type GetAIInteractionAggregateType<T extends AIInteractionAggregateArgs> = {
        [P in keyof T & keyof AggregateAIInteraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIInteraction[P]>
      : GetScalarType<T[P], AggregateAIInteraction[P]>
  }




  export type AIInteractionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIInteractionWhereInput
    orderBy?: AIInteractionOrderByWithAggregationInput | AIInteractionOrderByWithAggregationInput[]
    by: AIInteractionScalarFieldEnum[] | AIInteractionScalarFieldEnum
    having?: AIInteractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIInteractionCountAggregateInputType | true
    _min?: AIInteractionMinAggregateInputType
    _max?: AIInteractionMaxAggregateInputType
  }

  export type AIInteractionGroupByOutputType = {
    id: string
    institutionId: string
    actorUserId: string
    roleContext: string
    classId: string | null
    courseworkId: string | null
    prompt: string
    response: string | null
    createdAt: Date
    _count: AIInteractionCountAggregateOutputType | null
    _min: AIInteractionMinAggregateOutputType | null
    _max: AIInteractionMaxAggregateOutputType | null
  }

  type GetAIInteractionGroupByPayload<T extends AIInteractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIInteractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIInteractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIInteractionGroupByOutputType[P]>
            : GetScalarType<T[P], AIInteractionGroupByOutputType[P]>
        }
      >
    >


  export type AIInteractionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institutionId?: boolean
    actorUserId?: boolean
    roleContext?: boolean
    classId?: boolean
    courseworkId?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIInteraction"]>

  export type AIInteractionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institutionId?: boolean
    actorUserId?: boolean
    roleContext?: boolean
    classId?: boolean
    courseworkId?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIInteraction"]>

  export type AIInteractionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institutionId?: boolean
    actorUserId?: boolean
    roleContext?: boolean
    classId?: boolean
    courseworkId?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIInteraction"]>

  export type AIInteractionSelectScalar = {
    id?: boolean
    institutionId?: boolean
    actorUserId?: boolean
    roleContext?: boolean
    classId?: boolean
    courseworkId?: boolean
    prompt?: boolean
    response?: boolean
    createdAt?: boolean
  }

  export type AIInteractionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "institutionId" | "actorUserId" | "roleContext" | "classId" | "courseworkId" | "prompt" | "response" | "createdAt", ExtArgs["result"]["aIInteraction"]>
  export type AIInteractionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AIInteractionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AIInteractionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AIInteractionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIInteraction"
    objects: {
      actor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      institutionId: string
      actorUserId: string
      roleContext: string
      classId: string | null
      courseworkId: string | null
      prompt: string
      response: string | null
      createdAt: Date
    }, ExtArgs["result"]["aIInteraction"]>
    composites: {}
  }

  type AIInteractionGetPayload<S extends boolean | null | undefined | AIInteractionDefaultArgs> = $Result.GetResult<Prisma.$AIInteractionPayload, S>

  type AIInteractionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIInteractionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIInteractionCountAggregateInputType | true
    }

  export interface AIInteractionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIInteraction'], meta: { name: 'AIInteraction' } }
    /**
     * Find zero or one AIInteraction that matches the filter.
     * @param {AIInteractionFindUniqueArgs} args - Arguments to find a AIInteraction
     * @example
     * // Get one AIInteraction
     * const aIInteraction = await prisma.aIInteraction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIInteractionFindUniqueArgs>(args: SelectSubset<T, AIInteractionFindUniqueArgs<ExtArgs>>): Prisma__AIInteractionClient<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIInteraction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIInteractionFindUniqueOrThrowArgs} args - Arguments to find a AIInteraction
     * @example
     * // Get one AIInteraction
     * const aIInteraction = await prisma.aIInteraction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIInteractionFindUniqueOrThrowArgs>(args: SelectSubset<T, AIInteractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIInteractionClient<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIInteraction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionFindFirstArgs} args - Arguments to find a AIInteraction
     * @example
     * // Get one AIInteraction
     * const aIInteraction = await prisma.aIInteraction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIInteractionFindFirstArgs>(args?: SelectSubset<T, AIInteractionFindFirstArgs<ExtArgs>>): Prisma__AIInteractionClient<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIInteraction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionFindFirstOrThrowArgs} args - Arguments to find a AIInteraction
     * @example
     * // Get one AIInteraction
     * const aIInteraction = await prisma.aIInteraction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIInteractionFindFirstOrThrowArgs>(args?: SelectSubset<T, AIInteractionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIInteractionClient<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIInteractions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIInteractions
     * const aIInteractions = await prisma.aIInteraction.findMany()
     * 
     * // Get first 10 AIInteractions
     * const aIInteractions = await prisma.aIInteraction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIInteractionWithIdOnly = await prisma.aIInteraction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIInteractionFindManyArgs>(args?: SelectSubset<T, AIInteractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIInteraction.
     * @param {AIInteractionCreateArgs} args - Arguments to create a AIInteraction.
     * @example
     * // Create one AIInteraction
     * const AIInteraction = await prisma.aIInteraction.create({
     *   data: {
     *     // ... data to create a AIInteraction
     *   }
     * })
     * 
     */
    create<T extends AIInteractionCreateArgs>(args: SelectSubset<T, AIInteractionCreateArgs<ExtArgs>>): Prisma__AIInteractionClient<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIInteractions.
     * @param {AIInteractionCreateManyArgs} args - Arguments to create many AIInteractions.
     * @example
     * // Create many AIInteractions
     * const aIInteraction = await prisma.aIInteraction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIInteractionCreateManyArgs>(args?: SelectSubset<T, AIInteractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIInteractions and returns the data saved in the database.
     * @param {AIInteractionCreateManyAndReturnArgs} args - Arguments to create many AIInteractions.
     * @example
     * // Create many AIInteractions
     * const aIInteraction = await prisma.aIInteraction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIInteractions and only return the `id`
     * const aIInteractionWithIdOnly = await prisma.aIInteraction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIInteractionCreateManyAndReturnArgs>(args?: SelectSubset<T, AIInteractionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIInteraction.
     * @param {AIInteractionDeleteArgs} args - Arguments to delete one AIInteraction.
     * @example
     * // Delete one AIInteraction
     * const AIInteraction = await prisma.aIInteraction.delete({
     *   where: {
     *     // ... filter to delete one AIInteraction
     *   }
     * })
     * 
     */
    delete<T extends AIInteractionDeleteArgs>(args: SelectSubset<T, AIInteractionDeleteArgs<ExtArgs>>): Prisma__AIInteractionClient<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIInteraction.
     * @param {AIInteractionUpdateArgs} args - Arguments to update one AIInteraction.
     * @example
     * // Update one AIInteraction
     * const aIInteraction = await prisma.aIInteraction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIInteractionUpdateArgs>(args: SelectSubset<T, AIInteractionUpdateArgs<ExtArgs>>): Prisma__AIInteractionClient<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIInteractions.
     * @param {AIInteractionDeleteManyArgs} args - Arguments to filter AIInteractions to delete.
     * @example
     * // Delete a few AIInteractions
     * const { count } = await prisma.aIInteraction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIInteractionDeleteManyArgs>(args?: SelectSubset<T, AIInteractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIInteractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIInteractions
     * const aIInteraction = await prisma.aIInteraction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIInteractionUpdateManyArgs>(args: SelectSubset<T, AIInteractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIInteractions and returns the data updated in the database.
     * @param {AIInteractionUpdateManyAndReturnArgs} args - Arguments to update many AIInteractions.
     * @example
     * // Update many AIInteractions
     * const aIInteraction = await prisma.aIInteraction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIInteractions and only return the `id`
     * const aIInteractionWithIdOnly = await prisma.aIInteraction.updateManyAndReturn({
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
    updateManyAndReturn<T extends AIInteractionUpdateManyAndReturnArgs>(args: SelectSubset<T, AIInteractionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIInteraction.
     * @param {AIInteractionUpsertArgs} args - Arguments to update or create a AIInteraction.
     * @example
     * // Update or create a AIInteraction
     * const aIInteraction = await prisma.aIInteraction.upsert({
     *   create: {
     *     // ... data to create a AIInteraction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIInteraction we want to update
     *   }
     * })
     */
    upsert<T extends AIInteractionUpsertArgs>(args: SelectSubset<T, AIInteractionUpsertArgs<ExtArgs>>): Prisma__AIInteractionClient<$Result.GetResult<Prisma.$AIInteractionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIInteractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionCountArgs} args - Arguments to filter AIInteractions to count.
     * @example
     * // Count the number of AIInteractions
     * const count = await prisma.aIInteraction.count({
     *   where: {
     *     // ... the filter for the AIInteractions we want to count
     *   }
     * })
    **/
    count<T extends AIInteractionCountArgs>(
      args?: Subset<T, AIInteractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIInteractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIInteraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AIInteractionAggregateArgs>(args: Subset<T, AIInteractionAggregateArgs>): Prisma.PrismaPromise<GetAIInteractionAggregateType<T>>

    /**
     * Group by AIInteraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionGroupByArgs} args - Group by arguments.
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
      T extends AIInteractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIInteractionGroupByArgs['orderBy'] }
        : { orderBy?: AIInteractionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AIInteractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIInteractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIInteraction model
   */
  readonly fields: AIInteractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIInteraction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIInteractionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AIInteraction model
   */
  interface AIInteractionFieldRefs {
    readonly id: FieldRef<"AIInteraction", 'String'>
    readonly institutionId: FieldRef<"AIInteraction", 'String'>
    readonly actorUserId: FieldRef<"AIInteraction", 'String'>
    readonly roleContext: FieldRef<"AIInteraction", 'String'>
    readonly classId: FieldRef<"AIInteraction", 'String'>
    readonly courseworkId: FieldRef<"AIInteraction", 'String'>
    readonly prompt: FieldRef<"AIInteraction", 'String'>
    readonly response: FieldRef<"AIInteraction", 'String'>
    readonly createdAt: FieldRef<"AIInteraction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIInteraction findUnique
   */
  export type AIInteractionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteraction
     */
    omit?: AIInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    /**
     * Filter, which AIInteraction to fetch.
     */
    where: AIInteractionWhereUniqueInput
  }

  /**
   * AIInteraction findUniqueOrThrow
   */
  export type AIInteractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteraction
     */
    omit?: AIInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    /**
     * Filter, which AIInteraction to fetch.
     */
    where: AIInteractionWhereUniqueInput
  }

  /**
   * AIInteraction findFirst
   */
  export type AIInteractionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteraction
     */
    omit?: AIInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    /**
     * Filter, which AIInteraction to fetch.
     */
    where?: AIInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInteractions to fetch.
     */
    orderBy?: AIInteractionOrderByWithRelationInput | AIInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIInteractions.
     */
    cursor?: AIInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIInteractions.
     */
    distinct?: AIInteractionScalarFieldEnum | AIInteractionScalarFieldEnum[]
  }

  /**
   * AIInteraction findFirstOrThrow
   */
  export type AIInteractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteraction
     */
    omit?: AIInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    /**
     * Filter, which AIInteraction to fetch.
     */
    where?: AIInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInteractions to fetch.
     */
    orderBy?: AIInteractionOrderByWithRelationInput | AIInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIInteractions.
     */
    cursor?: AIInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIInteractions.
     */
    distinct?: AIInteractionScalarFieldEnum | AIInteractionScalarFieldEnum[]
  }

  /**
   * AIInteraction findMany
   */
  export type AIInteractionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteraction
     */
    omit?: AIInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    /**
     * Filter, which AIInteractions to fetch.
     */
    where?: AIInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInteractions to fetch.
     */
    orderBy?: AIInteractionOrderByWithRelationInput | AIInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIInteractions.
     */
    cursor?: AIInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInteractions.
     */
    skip?: number
    distinct?: AIInteractionScalarFieldEnum | AIInteractionScalarFieldEnum[]
  }

  /**
   * AIInteraction create
   */
  export type AIInteractionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteraction
     */
    omit?: AIInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    /**
     * The data needed to create a AIInteraction.
     */
    data: XOR<AIInteractionCreateInput, AIInteractionUncheckedCreateInput>
  }

  /**
   * AIInteraction createMany
   */
  export type AIInteractionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIInteractions.
     */
    data: AIInteractionCreateManyInput | AIInteractionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIInteraction createManyAndReturn
   */
  export type AIInteractionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteraction
     */
    omit?: AIInteractionOmit<ExtArgs> | null
    /**
     * The data used to create many AIInteractions.
     */
    data: AIInteractionCreateManyInput | AIInteractionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIInteraction update
   */
  export type AIInteractionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteraction
     */
    omit?: AIInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    /**
     * The data needed to update a AIInteraction.
     */
    data: XOR<AIInteractionUpdateInput, AIInteractionUncheckedUpdateInput>
    /**
     * Choose, which AIInteraction to update.
     */
    where: AIInteractionWhereUniqueInput
  }

  /**
   * AIInteraction updateMany
   */
  export type AIInteractionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIInteractions.
     */
    data: XOR<AIInteractionUpdateManyMutationInput, AIInteractionUncheckedUpdateManyInput>
    /**
     * Filter which AIInteractions to update
     */
    where?: AIInteractionWhereInput
    /**
     * Limit how many AIInteractions to update.
     */
    limit?: number
  }

  /**
   * AIInteraction updateManyAndReturn
   */
  export type AIInteractionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteraction
     */
    omit?: AIInteractionOmit<ExtArgs> | null
    /**
     * The data used to update AIInteractions.
     */
    data: XOR<AIInteractionUpdateManyMutationInput, AIInteractionUncheckedUpdateManyInput>
    /**
     * Filter which AIInteractions to update
     */
    where?: AIInteractionWhereInput
    /**
     * Limit how many AIInteractions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIInteraction upsert
   */
  export type AIInteractionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteraction
     */
    omit?: AIInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    /**
     * The filter to search for the AIInteraction to update in case it exists.
     */
    where: AIInteractionWhereUniqueInput
    /**
     * In case the AIInteraction found by the `where` argument doesn't exist, create a new AIInteraction with this data.
     */
    create: XOR<AIInteractionCreateInput, AIInteractionUncheckedCreateInput>
    /**
     * In case the AIInteraction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIInteractionUpdateInput, AIInteractionUncheckedUpdateInput>
  }

  /**
   * AIInteraction delete
   */
  export type AIInteractionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteraction
     */
    omit?: AIInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
    /**
     * Filter which AIInteraction to delete.
     */
    where: AIInteractionWhereUniqueInput
  }

  /**
   * AIInteraction deleteMany
   */
  export type AIInteractionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIInteractions to delete
     */
    where?: AIInteractionWhereInput
    /**
     * Limit how many AIInteractions to delete.
     */
    limit?: number
  }

  /**
   * AIInteraction without action
   */
  export type AIInteractionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteraction
     */
    select?: AIInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteraction
     */
    omit?: AIInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionInclude<ExtArgs> | null
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


  export const InstitutionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    timezone: 'timezone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InstitutionScalarFieldEnum = (typeof InstitutionScalarFieldEnum)[keyof typeof InstitutionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    institutionId: 'institutionId',
    email: 'email',
    fullName: 'fullName',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    institutionId: 'institutionId',
    educatorId: 'educatorId',
    code: 'code',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const CourseworkScalarFieldEnum: {
    id: 'id',
    classId: 'classId',
    title: 'title',
    kind: 'kind',
    description: 'description',
    topic: 'topic',
    dueAt: 'dueAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseworkScalarFieldEnum = (typeof CourseworkScalarFieldEnum)[keyof typeof CourseworkScalarFieldEnum]


  export const ResourceScalarFieldEnum: {
    id: 'id',
    classId: 'classId',
    courseworkId: 'courseworkId',
    title: 'title',
    storageKey: 'storageKey',
    externalUrl: 'externalUrl',
    createdAt: 'createdAt'
  };

  export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    courseworkId: 'courseworkId',
    studentId: 'studentId',
    status: 'status',
    storageKey: 'storageKey',
    fileName: 'fileName',
    mimeType: 'mimeType',
    fileSizeBytes: 'fileSizeBytes',
    gradeScore: 'gradeScore',
    feedbackText: 'feedbackText',
    submittedAt: 'submittedAt',
    gradedAt: 'gradedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const OfficeHourSlotScalarFieldEnum: {
    id: 'id',
    classId: 'classId',
    educatorId: 'educatorId',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    location: 'location',
    mode: 'mode',
    createdAt: 'createdAt'
  };

  export type OfficeHourSlotScalarFieldEnum = (typeof OfficeHourSlotScalarFieldEnum)[keyof typeof OfficeHourSlotScalarFieldEnum]


  export const OfficeHourBookingScalarFieldEnum: {
    id: 'id',
    officeHourSlotId: 'officeHourSlotId',
    studentId: 'studentId',
    topic: 'topic',
    status: 'status',
    bookedAt: 'bookedAt'
  };

  export type OfficeHourBookingScalarFieldEnum = (typeof OfficeHourBookingScalarFieldEnum)[keyof typeof OfficeHourBookingScalarFieldEnum]


  export const AuditEventScalarFieldEnum: {
    id: 'id',
    institutionId: 'institutionId',
    actorUserId: 'actorUserId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    payload: 'payload',
    createdAt: 'createdAt'
  };

  export type AuditEventScalarFieldEnum = (typeof AuditEventScalarFieldEnum)[keyof typeof AuditEventScalarFieldEnum]


  export const AIInteractionScalarFieldEnum: {
    id: 'id',
    institutionId: 'institutionId',
    actorUserId: 'actorUserId',
    roleContext: 'roleContext',
    classId: 'classId',
    courseworkId: 'courseworkId',
    prompt: 'prompt',
    response: 'response',
    createdAt: 'createdAt'
  };

  export type AIInteractionScalarFieldEnum = (typeof AIInteractionScalarFieldEnum)[keyof typeof AIInteractionScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AppRole'
   */
  export type EnumAppRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppRole'>
    


  /**
   * Reference to a field of type 'AppRole[]'
   */
  export type ListEnumAppRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppRole[]'>
    


  /**
   * Reference to a field of type 'CourseworkKind'
   */
  export type EnumCourseworkKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseworkKind'>
    


  /**
   * Reference to a field of type 'CourseworkKind[]'
   */
  export type ListEnumCourseworkKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseworkKind[]'>
    


  /**
   * Reference to a field of type 'SubmissionStatus'
   */
  export type EnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus'>
    


  /**
   * Reference to a field of type 'SubmissionStatus[]'
   */
  export type ListEnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type InstitutionWhereInput = {
    AND?: InstitutionWhereInput | InstitutionWhereInput[]
    OR?: InstitutionWhereInput[]
    NOT?: InstitutionWhereInput | InstitutionWhereInput[]
    id?: StringFilter<"Institution"> | string
    name?: StringFilter<"Institution"> | string
    slug?: StringFilter<"Institution"> | string
    timezone?: StringFilter<"Institution"> | string
    createdAt?: DateTimeFilter<"Institution"> | Date | string
    updatedAt?: DateTimeFilter<"Institution"> | Date | string
    users?: UserListRelationFilter
    classes?: ClassListRelationFilter
  }

  export type InstitutionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    classes?: ClassOrderByRelationAggregateInput
  }

  export type InstitutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: InstitutionWhereInput | InstitutionWhereInput[]
    OR?: InstitutionWhereInput[]
    NOT?: InstitutionWhereInput | InstitutionWhereInput[]
    name?: StringFilter<"Institution"> | string
    timezone?: StringFilter<"Institution"> | string
    createdAt?: DateTimeFilter<"Institution"> | Date | string
    updatedAt?: DateTimeFilter<"Institution"> | Date | string
    users?: UserListRelationFilter
    classes?: ClassListRelationFilter
  }, "id" | "slug">

  export type InstitutionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InstitutionCountOrderByAggregateInput
    _max?: InstitutionMaxOrderByAggregateInput
    _min?: InstitutionMinOrderByAggregateInput
  }

  export type InstitutionScalarWhereWithAggregatesInput = {
    AND?: InstitutionScalarWhereWithAggregatesInput | InstitutionScalarWhereWithAggregatesInput[]
    OR?: InstitutionScalarWhereWithAggregatesInput[]
    NOT?: InstitutionScalarWhereWithAggregatesInput | InstitutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Institution"> | string
    name?: StringWithAggregatesFilter<"Institution"> | string
    slug?: StringWithAggregatesFilter<"Institution"> | string
    timezone?: StringWithAggregatesFilter<"Institution"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Institution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Institution"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    institutionId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    role?: EnumAppRoleFilter<"User"> | $Enums.AppRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
    taughtClasses?: ClassListRelationFilter
    submissions?: SubmissionListRelationFilter
    officeHourBookings?: OfficeHourBookingListRelationFilter
    createdOfficeHourSlots?: OfficeHourSlotListRelationFilter
    auditEvents?: AuditEventListRelationFilter
    aiInteractions?: AIInteractionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    institutionId?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    institution?: InstitutionOrderByWithRelationInput
    taughtClasses?: ClassOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
    officeHourBookings?: OfficeHourBookingOrderByRelationAggregateInput
    createdOfficeHourSlots?: OfficeHourSlotOrderByRelationAggregateInput
    auditEvents?: AuditEventOrderByRelationAggregateInput
    aiInteractions?: AIInteractionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    institutionId?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    role?: EnumAppRoleFilter<"User"> | $Enums.AppRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
    taughtClasses?: ClassListRelationFilter
    submissions?: SubmissionListRelationFilter
    officeHourBookings?: OfficeHourBookingListRelationFilter
    createdOfficeHourSlots?: OfficeHourSlotListRelationFilter
    auditEvents?: AuditEventListRelationFilter
    aiInteractions?: AIInteractionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    institutionId?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    institutionId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumAppRoleWithAggregatesFilter<"User"> | $Enums.AppRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: StringFilter<"Class"> | string
    institutionId?: StringFilter<"Class"> | string
    educatorId?: StringFilter<"Class"> | string
    code?: StringFilter<"Class"> | string
    title?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
    updatedAt?: DateTimeFilter<"Class"> | Date | string
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
    educator?: XOR<UserScalarRelationFilter, UserWhereInput>
    courseworkItems?: CourseworkListRelationFilter
    resources?: ResourceListRelationFilter
    officeHourSlots?: OfficeHourSlotListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    institutionId?: SortOrder
    educatorId?: SortOrder
    code?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    institution?: InstitutionOrderByWithRelationInput
    educator?: UserOrderByWithRelationInput
    courseworkItems?: CourseworkOrderByRelationAggregateInput
    resources?: ResourceOrderByRelationAggregateInput
    officeHourSlots?: OfficeHourSlotOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    institutionId?: StringFilter<"Class"> | string
    educatorId?: StringFilter<"Class"> | string
    code?: StringFilter<"Class"> | string
    title?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
    updatedAt?: DateTimeFilter<"Class"> | Date | string
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
    educator?: XOR<UserScalarRelationFilter, UserWhereInput>
    courseworkItems?: CourseworkListRelationFilter
    resources?: ResourceListRelationFilter
    officeHourSlots?: OfficeHourSlotListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    institutionId?: SortOrder
    educatorId?: SortOrder
    code?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class"> | string
    institutionId?: StringWithAggregatesFilter<"Class"> | string
    educatorId?: StringWithAggregatesFilter<"Class"> | string
    code?: StringWithAggregatesFilter<"Class"> | string
    title?: StringWithAggregatesFilter<"Class"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Class"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Class"> | Date | string
  }

  export type CourseworkWhereInput = {
    AND?: CourseworkWhereInput | CourseworkWhereInput[]
    OR?: CourseworkWhereInput[]
    NOT?: CourseworkWhereInput | CourseworkWhereInput[]
    id?: StringFilter<"Coursework"> | string
    classId?: StringFilter<"Coursework"> | string
    title?: StringFilter<"Coursework"> | string
    kind?: EnumCourseworkKindFilter<"Coursework"> | $Enums.CourseworkKind
    description?: StringNullableFilter<"Coursework"> | string | null
    topic?: StringNullableFilter<"Coursework"> | string | null
    dueAt?: DateTimeFilter<"Coursework"> | Date | string
    createdAt?: DateTimeFilter<"Coursework"> | Date | string
    updatedAt?: DateTimeFilter<"Coursework"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    resources?: ResourceListRelationFilter
    submissions?: SubmissionListRelationFilter
  }

  export type CourseworkOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    title?: SortOrder
    kind?: SortOrder
    description?: SortOrderInput | SortOrder
    topic?: SortOrderInput | SortOrder
    dueAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    class?: ClassOrderByWithRelationInput
    resources?: ResourceOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type CourseworkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseworkWhereInput | CourseworkWhereInput[]
    OR?: CourseworkWhereInput[]
    NOT?: CourseworkWhereInput | CourseworkWhereInput[]
    classId?: StringFilter<"Coursework"> | string
    title?: StringFilter<"Coursework"> | string
    kind?: EnumCourseworkKindFilter<"Coursework"> | $Enums.CourseworkKind
    description?: StringNullableFilter<"Coursework"> | string | null
    topic?: StringNullableFilter<"Coursework"> | string | null
    dueAt?: DateTimeFilter<"Coursework"> | Date | string
    createdAt?: DateTimeFilter<"Coursework"> | Date | string
    updatedAt?: DateTimeFilter<"Coursework"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    resources?: ResourceListRelationFilter
    submissions?: SubmissionListRelationFilter
  }, "id">

  export type CourseworkOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    title?: SortOrder
    kind?: SortOrder
    description?: SortOrderInput | SortOrder
    topic?: SortOrderInput | SortOrder
    dueAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseworkCountOrderByAggregateInput
    _max?: CourseworkMaxOrderByAggregateInput
    _min?: CourseworkMinOrderByAggregateInput
  }

  export type CourseworkScalarWhereWithAggregatesInput = {
    AND?: CourseworkScalarWhereWithAggregatesInput | CourseworkScalarWhereWithAggregatesInput[]
    OR?: CourseworkScalarWhereWithAggregatesInput[]
    NOT?: CourseworkScalarWhereWithAggregatesInput | CourseworkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coursework"> | string
    classId?: StringWithAggregatesFilter<"Coursework"> | string
    title?: StringWithAggregatesFilter<"Coursework"> | string
    kind?: EnumCourseworkKindWithAggregatesFilter<"Coursework"> | $Enums.CourseworkKind
    description?: StringNullableWithAggregatesFilter<"Coursework"> | string | null
    topic?: StringNullableWithAggregatesFilter<"Coursework"> | string | null
    dueAt?: DateTimeWithAggregatesFilter<"Coursework"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Coursework"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Coursework"> | Date | string
  }

  export type ResourceWhereInput = {
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    id?: StringFilter<"Resource"> | string
    classId?: StringFilter<"Resource"> | string
    courseworkId?: StringNullableFilter<"Resource"> | string | null
    title?: StringFilter<"Resource"> | string
    storageKey?: StringNullableFilter<"Resource"> | string | null
    externalUrl?: StringNullableFilter<"Resource"> | string | null
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    coursework?: XOR<CourseworkNullableScalarRelationFilter, CourseworkWhereInput> | null
  }

  export type ResourceOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    courseworkId?: SortOrderInput | SortOrder
    title?: SortOrder
    storageKey?: SortOrderInput | SortOrder
    externalUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    class?: ClassOrderByWithRelationInput
    coursework?: CourseworkOrderByWithRelationInput
  }

  export type ResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    classId?: StringFilter<"Resource"> | string
    courseworkId?: StringNullableFilter<"Resource"> | string | null
    title?: StringFilter<"Resource"> | string
    storageKey?: StringNullableFilter<"Resource"> | string | null
    externalUrl?: StringNullableFilter<"Resource"> | string | null
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    coursework?: XOR<CourseworkNullableScalarRelationFilter, CourseworkWhereInput> | null
  }, "id">

  export type ResourceOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    courseworkId?: SortOrderInput | SortOrder
    title?: SortOrder
    storageKey?: SortOrderInput | SortOrder
    externalUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ResourceCountOrderByAggregateInput
    _max?: ResourceMaxOrderByAggregateInput
    _min?: ResourceMinOrderByAggregateInput
  }

  export type ResourceScalarWhereWithAggregatesInput = {
    AND?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    OR?: ResourceScalarWhereWithAggregatesInput[]
    NOT?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resource"> | string
    classId?: StringWithAggregatesFilter<"Resource"> | string
    courseworkId?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    title?: StringWithAggregatesFilter<"Resource"> | string
    storageKey?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    externalUrl?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    courseworkId?: StringFilter<"Submission"> | string
    studentId?: StringFilter<"Submission"> | string
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    storageKey?: StringNullableFilter<"Submission"> | string | null
    fileName?: StringNullableFilter<"Submission"> | string | null
    mimeType?: StringNullableFilter<"Submission"> | string | null
    fileSizeBytes?: IntNullableFilter<"Submission"> | number | null
    gradeScore?: IntNullableFilter<"Submission"> | number | null
    feedbackText?: StringNullableFilter<"Submission"> | string | null
    submittedAt?: DateTimeNullableFilter<"Submission"> | Date | string | null
    gradedAt?: DateTimeNullableFilter<"Submission"> | Date | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    coursework?: XOR<CourseworkScalarRelationFilter, CourseworkWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    courseworkId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    storageKey?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    fileSizeBytes?: SortOrderInput | SortOrder
    gradeScore?: SortOrderInput | SortOrder
    feedbackText?: SortOrderInput | SortOrder
    submittedAt?: SortOrderInput | SortOrder
    gradedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coursework?: CourseworkOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    courseworkId?: StringFilter<"Submission"> | string
    studentId?: StringFilter<"Submission"> | string
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    storageKey?: StringNullableFilter<"Submission"> | string | null
    fileName?: StringNullableFilter<"Submission"> | string | null
    mimeType?: StringNullableFilter<"Submission"> | string | null
    fileSizeBytes?: IntNullableFilter<"Submission"> | number | null
    gradeScore?: IntNullableFilter<"Submission"> | number | null
    feedbackText?: StringNullableFilter<"Submission"> | string | null
    submittedAt?: DateTimeNullableFilter<"Submission"> | Date | string | null
    gradedAt?: DateTimeNullableFilter<"Submission"> | Date | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    coursework?: XOR<CourseworkScalarRelationFilter, CourseworkWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    courseworkId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    storageKey?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    fileSizeBytes?: SortOrderInput | SortOrder
    gradeScore?: SortOrderInput | SortOrder
    feedbackText?: SortOrderInput | SortOrder
    submittedAt?: SortOrderInput | SortOrder
    gradedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _avg?: SubmissionAvgOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
    _sum?: SubmissionSumOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    courseworkId?: StringWithAggregatesFilter<"Submission"> | string
    studentId?: StringWithAggregatesFilter<"Submission"> | string
    status?: EnumSubmissionStatusWithAggregatesFilter<"Submission"> | $Enums.SubmissionStatus
    storageKey?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    fileName?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    mimeType?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    fileSizeBytes?: IntNullableWithAggregatesFilter<"Submission"> | number | null
    gradeScore?: IntNullableWithAggregatesFilter<"Submission"> | number | null
    feedbackText?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    submittedAt?: DateTimeNullableWithAggregatesFilter<"Submission"> | Date | string | null
    gradedAt?: DateTimeNullableWithAggregatesFilter<"Submission"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type OfficeHourSlotWhereInput = {
    AND?: OfficeHourSlotWhereInput | OfficeHourSlotWhereInput[]
    OR?: OfficeHourSlotWhereInput[]
    NOT?: OfficeHourSlotWhereInput | OfficeHourSlotWhereInput[]
    id?: StringFilter<"OfficeHourSlot"> | string
    classId?: StringFilter<"OfficeHourSlot"> | string
    educatorId?: StringFilter<"OfficeHourSlot"> | string
    startsAt?: DateTimeFilter<"OfficeHourSlot"> | Date | string
    endsAt?: DateTimeFilter<"OfficeHourSlot"> | Date | string
    location?: StringFilter<"OfficeHourSlot"> | string
    mode?: StringFilter<"OfficeHourSlot"> | string
    createdAt?: DateTimeFilter<"OfficeHourSlot"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    educator?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: OfficeHourBookingListRelationFilter
  }

  export type OfficeHourSlotOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    educatorId?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    location?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
    class?: ClassOrderByWithRelationInput
    educator?: UserOrderByWithRelationInput
    bookings?: OfficeHourBookingOrderByRelationAggregateInput
  }

  export type OfficeHourSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OfficeHourSlotWhereInput | OfficeHourSlotWhereInput[]
    OR?: OfficeHourSlotWhereInput[]
    NOT?: OfficeHourSlotWhereInput | OfficeHourSlotWhereInput[]
    classId?: StringFilter<"OfficeHourSlot"> | string
    educatorId?: StringFilter<"OfficeHourSlot"> | string
    startsAt?: DateTimeFilter<"OfficeHourSlot"> | Date | string
    endsAt?: DateTimeFilter<"OfficeHourSlot"> | Date | string
    location?: StringFilter<"OfficeHourSlot"> | string
    mode?: StringFilter<"OfficeHourSlot"> | string
    createdAt?: DateTimeFilter<"OfficeHourSlot"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    educator?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: OfficeHourBookingListRelationFilter
  }, "id">

  export type OfficeHourSlotOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    educatorId?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    location?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
    _count?: OfficeHourSlotCountOrderByAggregateInput
    _max?: OfficeHourSlotMaxOrderByAggregateInput
    _min?: OfficeHourSlotMinOrderByAggregateInput
  }

  export type OfficeHourSlotScalarWhereWithAggregatesInput = {
    AND?: OfficeHourSlotScalarWhereWithAggregatesInput | OfficeHourSlotScalarWhereWithAggregatesInput[]
    OR?: OfficeHourSlotScalarWhereWithAggregatesInput[]
    NOT?: OfficeHourSlotScalarWhereWithAggregatesInput | OfficeHourSlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OfficeHourSlot"> | string
    classId?: StringWithAggregatesFilter<"OfficeHourSlot"> | string
    educatorId?: StringWithAggregatesFilter<"OfficeHourSlot"> | string
    startsAt?: DateTimeWithAggregatesFilter<"OfficeHourSlot"> | Date | string
    endsAt?: DateTimeWithAggregatesFilter<"OfficeHourSlot"> | Date | string
    location?: StringWithAggregatesFilter<"OfficeHourSlot"> | string
    mode?: StringWithAggregatesFilter<"OfficeHourSlot"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OfficeHourSlot"> | Date | string
  }

  export type OfficeHourBookingWhereInput = {
    AND?: OfficeHourBookingWhereInput | OfficeHourBookingWhereInput[]
    OR?: OfficeHourBookingWhereInput[]
    NOT?: OfficeHourBookingWhereInput | OfficeHourBookingWhereInput[]
    id?: StringFilter<"OfficeHourBooking"> | string
    officeHourSlotId?: StringFilter<"OfficeHourBooking"> | string
    studentId?: StringFilter<"OfficeHourBooking"> | string
    topic?: StringNullableFilter<"OfficeHourBooking"> | string | null
    status?: EnumBookingStatusFilter<"OfficeHourBooking"> | $Enums.BookingStatus
    bookedAt?: DateTimeFilter<"OfficeHourBooking"> | Date | string
    officeHourSlot?: XOR<OfficeHourSlotScalarRelationFilter, OfficeHourSlotWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OfficeHourBookingOrderByWithRelationInput = {
    id?: SortOrder
    officeHourSlotId?: SortOrder
    studentId?: SortOrder
    topic?: SortOrderInput | SortOrder
    status?: SortOrder
    bookedAt?: SortOrder
    officeHourSlot?: OfficeHourSlotOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
  }

  export type OfficeHourBookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OfficeHourBookingWhereInput | OfficeHourBookingWhereInput[]
    OR?: OfficeHourBookingWhereInput[]
    NOT?: OfficeHourBookingWhereInput | OfficeHourBookingWhereInput[]
    officeHourSlotId?: StringFilter<"OfficeHourBooking"> | string
    studentId?: StringFilter<"OfficeHourBooking"> | string
    topic?: StringNullableFilter<"OfficeHourBooking"> | string | null
    status?: EnumBookingStatusFilter<"OfficeHourBooking"> | $Enums.BookingStatus
    bookedAt?: DateTimeFilter<"OfficeHourBooking"> | Date | string
    officeHourSlot?: XOR<OfficeHourSlotScalarRelationFilter, OfficeHourSlotWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OfficeHourBookingOrderByWithAggregationInput = {
    id?: SortOrder
    officeHourSlotId?: SortOrder
    studentId?: SortOrder
    topic?: SortOrderInput | SortOrder
    status?: SortOrder
    bookedAt?: SortOrder
    _count?: OfficeHourBookingCountOrderByAggregateInput
    _max?: OfficeHourBookingMaxOrderByAggregateInput
    _min?: OfficeHourBookingMinOrderByAggregateInput
  }

  export type OfficeHourBookingScalarWhereWithAggregatesInput = {
    AND?: OfficeHourBookingScalarWhereWithAggregatesInput | OfficeHourBookingScalarWhereWithAggregatesInput[]
    OR?: OfficeHourBookingScalarWhereWithAggregatesInput[]
    NOT?: OfficeHourBookingScalarWhereWithAggregatesInput | OfficeHourBookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OfficeHourBooking"> | string
    officeHourSlotId?: StringWithAggregatesFilter<"OfficeHourBooking"> | string
    studentId?: StringWithAggregatesFilter<"OfficeHourBooking"> | string
    topic?: StringNullableWithAggregatesFilter<"OfficeHourBooking"> | string | null
    status?: EnumBookingStatusWithAggregatesFilter<"OfficeHourBooking"> | $Enums.BookingStatus
    bookedAt?: DateTimeWithAggregatesFilter<"OfficeHourBooking"> | Date | string
  }

  export type AuditEventWhereInput = {
    AND?: AuditEventWhereInput | AuditEventWhereInput[]
    OR?: AuditEventWhereInput[]
    NOT?: AuditEventWhereInput | AuditEventWhereInput[]
    id?: StringFilter<"AuditEvent"> | string
    institutionId?: StringFilter<"AuditEvent"> | string
    actorUserId?: StringFilter<"AuditEvent"> | string
    action?: StringFilter<"AuditEvent"> | string
    entityType?: StringFilter<"AuditEvent"> | string
    entityId?: StringFilter<"AuditEvent"> | string
    payload?: JsonNullableFilter<"AuditEvent">
    createdAt?: DateTimeFilter<"AuditEvent"> | Date | string
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuditEventOrderByWithRelationInput = {
    id?: SortOrder
    institutionId?: SortOrder
    actorUserId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    payload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    actor?: UserOrderByWithRelationInput
  }

  export type AuditEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditEventWhereInput | AuditEventWhereInput[]
    OR?: AuditEventWhereInput[]
    NOT?: AuditEventWhereInput | AuditEventWhereInput[]
    institutionId?: StringFilter<"AuditEvent"> | string
    actorUserId?: StringFilter<"AuditEvent"> | string
    action?: StringFilter<"AuditEvent"> | string
    entityType?: StringFilter<"AuditEvent"> | string
    entityId?: StringFilter<"AuditEvent"> | string
    payload?: JsonNullableFilter<"AuditEvent">
    createdAt?: DateTimeFilter<"AuditEvent"> | Date | string
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AuditEventOrderByWithAggregationInput = {
    id?: SortOrder
    institutionId?: SortOrder
    actorUserId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    payload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditEventCountOrderByAggregateInput
    _max?: AuditEventMaxOrderByAggregateInput
    _min?: AuditEventMinOrderByAggregateInput
  }

  export type AuditEventScalarWhereWithAggregatesInput = {
    AND?: AuditEventScalarWhereWithAggregatesInput | AuditEventScalarWhereWithAggregatesInput[]
    OR?: AuditEventScalarWhereWithAggregatesInput[]
    NOT?: AuditEventScalarWhereWithAggregatesInput | AuditEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditEvent"> | string
    institutionId?: StringWithAggregatesFilter<"AuditEvent"> | string
    actorUserId?: StringWithAggregatesFilter<"AuditEvent"> | string
    action?: StringWithAggregatesFilter<"AuditEvent"> | string
    entityType?: StringWithAggregatesFilter<"AuditEvent"> | string
    entityId?: StringWithAggregatesFilter<"AuditEvent"> | string
    payload?: JsonNullableWithAggregatesFilter<"AuditEvent">
    createdAt?: DateTimeWithAggregatesFilter<"AuditEvent"> | Date | string
  }

  export type AIInteractionWhereInput = {
    AND?: AIInteractionWhereInput | AIInteractionWhereInput[]
    OR?: AIInteractionWhereInput[]
    NOT?: AIInteractionWhereInput | AIInteractionWhereInput[]
    id?: StringFilter<"AIInteraction"> | string
    institutionId?: StringFilter<"AIInteraction"> | string
    actorUserId?: StringFilter<"AIInteraction"> | string
    roleContext?: StringFilter<"AIInteraction"> | string
    classId?: StringNullableFilter<"AIInteraction"> | string | null
    courseworkId?: StringNullableFilter<"AIInteraction"> | string | null
    prompt?: StringFilter<"AIInteraction"> | string
    response?: StringNullableFilter<"AIInteraction"> | string | null
    createdAt?: DateTimeFilter<"AIInteraction"> | Date | string
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AIInteractionOrderByWithRelationInput = {
    id?: SortOrder
    institutionId?: SortOrder
    actorUserId?: SortOrder
    roleContext?: SortOrder
    classId?: SortOrderInput | SortOrder
    courseworkId?: SortOrderInput | SortOrder
    prompt?: SortOrder
    response?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    actor?: UserOrderByWithRelationInput
  }

  export type AIInteractionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIInteractionWhereInput | AIInteractionWhereInput[]
    OR?: AIInteractionWhereInput[]
    NOT?: AIInteractionWhereInput | AIInteractionWhereInput[]
    institutionId?: StringFilter<"AIInteraction"> | string
    actorUserId?: StringFilter<"AIInteraction"> | string
    roleContext?: StringFilter<"AIInteraction"> | string
    classId?: StringNullableFilter<"AIInteraction"> | string | null
    courseworkId?: StringNullableFilter<"AIInteraction"> | string | null
    prompt?: StringFilter<"AIInteraction"> | string
    response?: StringNullableFilter<"AIInteraction"> | string | null
    createdAt?: DateTimeFilter<"AIInteraction"> | Date | string
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AIInteractionOrderByWithAggregationInput = {
    id?: SortOrder
    institutionId?: SortOrder
    actorUserId?: SortOrder
    roleContext?: SortOrder
    classId?: SortOrderInput | SortOrder
    courseworkId?: SortOrderInput | SortOrder
    prompt?: SortOrder
    response?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AIInteractionCountOrderByAggregateInput
    _max?: AIInteractionMaxOrderByAggregateInput
    _min?: AIInteractionMinOrderByAggregateInput
  }

  export type AIInteractionScalarWhereWithAggregatesInput = {
    AND?: AIInteractionScalarWhereWithAggregatesInput | AIInteractionScalarWhereWithAggregatesInput[]
    OR?: AIInteractionScalarWhereWithAggregatesInput[]
    NOT?: AIInteractionScalarWhereWithAggregatesInput | AIInteractionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIInteraction"> | string
    institutionId?: StringWithAggregatesFilter<"AIInteraction"> | string
    actorUserId?: StringWithAggregatesFilter<"AIInteraction"> | string
    roleContext?: StringWithAggregatesFilter<"AIInteraction"> | string
    classId?: StringNullableWithAggregatesFilter<"AIInteraction"> | string | null
    courseworkId?: StringNullableWithAggregatesFilter<"AIInteraction"> | string | null
    prompt?: StringWithAggregatesFilter<"AIInteraction"> | string
    response?: StringNullableWithAggregatesFilter<"AIInteraction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AIInteraction"> | Date | string
  }

  export type InstitutionCreateInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutInstitutionInput
    classes?: ClassCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutInstitutionInput
    classes?: ClassUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutInstitutionNestedInput
    classes?: ClassUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutInstitutionNestedInput
    classes?: ClassUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionCreateManyInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstitutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstitutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt?: Date | string
    updatedAt?: Date | string
    institution: InstitutionCreateNestedOneWithoutUsersInput
    taughtClasses?: ClassCreateNestedManyWithoutEducatorInput
    submissions?: SubmissionCreateNestedManyWithoutStudentInput
    officeHourBookings?: OfficeHourBookingCreateNestedManyWithoutStudentInput
    createdOfficeHourSlots?: OfficeHourSlotCreateNestedManyWithoutEducatorInput
    auditEvents?: AuditEventCreateNestedManyWithoutActorInput
    aiInteractions?: AIInteractionCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    institutionId: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassUncheckedCreateNestedManyWithoutEducatorInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    officeHourBookings?: OfficeHourBookingUncheckedCreateNestedManyWithoutStudentInput
    createdOfficeHourSlots?: OfficeHourSlotUncheckedCreateNestedManyWithoutEducatorInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActorInput
    aiInteractions?: AIInteractionUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionUpdateOneRequiredWithoutUsersNestedInput
    taughtClasses?: ClassUpdateManyWithoutEducatorNestedInput
    submissions?: SubmissionUpdateManyWithoutStudentNestedInput
    officeHourBookings?: OfficeHourBookingUpdateManyWithoutStudentNestedInput
    createdOfficeHourSlots?: OfficeHourSlotUpdateManyWithoutEducatorNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActorNestedInput
    aiInteractions?: AIInteractionUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUncheckedUpdateManyWithoutEducatorNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    officeHourBookings?: OfficeHourBookingUncheckedUpdateManyWithoutStudentNestedInput
    createdOfficeHourSlots?: OfficeHourSlotUncheckedUpdateManyWithoutEducatorNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActorNestedInput
    aiInteractions?: AIInteractionUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    institutionId: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassCreateInput = {
    id?: string
    code: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institution: InstitutionCreateNestedOneWithoutClassesInput
    educator: UserCreateNestedOneWithoutTaughtClassesInput
    courseworkItems?: CourseworkCreateNestedManyWithoutClassInput
    resources?: ResourceCreateNestedManyWithoutClassInput
    officeHourSlots?: OfficeHourSlotCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    institutionId: string
    educatorId: string
    code: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseworkItems?: CourseworkUncheckedCreateNestedManyWithoutClassInput
    resources?: ResourceUncheckedCreateNestedManyWithoutClassInput
    officeHourSlots?: OfficeHourSlotUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionUpdateOneRequiredWithoutClassesNestedInput
    educator?: UserUpdateOneRequiredWithoutTaughtClassesNestedInput
    courseworkItems?: CourseworkUpdateManyWithoutClassNestedInput
    resources?: ResourceUpdateManyWithoutClassNestedInput
    officeHourSlots?: OfficeHourSlotUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    educatorId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseworkItems?: CourseworkUncheckedUpdateManyWithoutClassNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutClassNestedInput
    officeHourSlots?: OfficeHourSlotUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    institutionId: string
    educatorId: string
    code: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    educatorId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseworkCreateInput = {
    id?: string
    title: string
    kind: $Enums.CourseworkKind
    description?: string | null
    topic?: string | null
    dueAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    class: ClassCreateNestedOneWithoutCourseworkItemsInput
    resources?: ResourceCreateNestedManyWithoutCourseworkInput
    submissions?: SubmissionCreateNestedManyWithoutCourseworkInput
  }

  export type CourseworkUncheckedCreateInput = {
    id?: string
    classId: string
    title: string
    kind: $Enums.CourseworkKind
    description?: string | null
    topic?: string | null
    dueAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    resources?: ResourceUncheckedCreateNestedManyWithoutCourseworkInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutCourseworkInput
  }

  export type CourseworkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    kind?: EnumCourseworkKindFieldUpdateOperationsInput | $Enums.CourseworkKind
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    dueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutCourseworkItemsNestedInput
    resources?: ResourceUpdateManyWithoutCourseworkNestedInput
    submissions?: SubmissionUpdateManyWithoutCourseworkNestedInput
  }

  export type CourseworkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    kind?: EnumCourseworkKindFieldUpdateOperationsInput | $Enums.CourseworkKind
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    dueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: ResourceUncheckedUpdateManyWithoutCourseworkNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutCourseworkNestedInput
  }

  export type CourseworkCreateManyInput = {
    id?: string
    classId: string
    title: string
    kind: $Enums.CourseworkKind
    description?: string | null
    topic?: string | null
    dueAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseworkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    kind?: EnumCourseworkKindFieldUpdateOperationsInput | $Enums.CourseworkKind
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    dueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseworkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    kind?: EnumCourseworkKindFieldUpdateOperationsInput | $Enums.CourseworkKind
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    dueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceCreateInput = {
    id?: string
    title: string
    storageKey?: string | null
    externalUrl?: string | null
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutResourcesInput
    coursework?: CourseworkCreateNestedOneWithoutResourcesInput
  }

  export type ResourceUncheckedCreateInput = {
    id?: string
    classId: string
    courseworkId?: string | null
    title: string
    storageKey?: string | null
    externalUrl?: string | null
    createdAt?: Date | string
  }

  export type ResourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutResourcesNestedInput
    coursework?: CourseworkUpdateOneWithoutResourcesNestedInput
  }

  export type ResourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    courseworkId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceCreateManyInput = {
    id?: string
    classId: string
    courseworkId?: string | null
    title: string
    storageKey?: string | null
    externalUrl?: string | null
    createdAt?: Date | string
  }

  export type ResourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    courseworkId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    id?: string
    status?: $Enums.SubmissionStatus
    storageKey?: string | null
    fileName?: string | null
    mimeType?: string | null
    fileSizeBytes?: number | null
    gradeScore?: number | null
    feedbackText?: string | null
    submittedAt?: Date | string | null
    gradedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coursework: CourseworkCreateNestedOneWithoutSubmissionsInput
    student: UserCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    courseworkId: string
    studentId: string
    status?: $Enums.SubmissionStatus
    storageKey?: string | null
    fileName?: string | null
    mimeType?: string | null
    fileSizeBytes?: number | null
    gradeScore?: number | null
    feedbackText?: string | null
    submittedAt?: Date | string | null
    gradedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    gradeScore?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coursework?: CourseworkUpdateOneRequiredWithoutSubmissionsNestedInput
    student?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseworkId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    gradeScore?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyInput = {
    id?: string
    courseworkId: string
    studentId: string
    status?: $Enums.SubmissionStatus
    storageKey?: string | null
    fileName?: string | null
    mimeType?: string | null
    fileSizeBytes?: number | null
    gradeScore?: number | null
    feedbackText?: string | null
    submittedAt?: Date | string | null
    gradedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    gradeScore?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseworkId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    gradeScore?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHourSlotCreateInput = {
    id?: string
    startsAt: Date | string
    endsAt: Date | string
    location: string
    mode: string
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutOfficeHourSlotsInput
    educator: UserCreateNestedOneWithoutCreatedOfficeHourSlotsInput
    bookings?: OfficeHourBookingCreateNestedManyWithoutOfficeHourSlotInput
  }

  export type OfficeHourSlotUncheckedCreateInput = {
    id?: string
    classId: string
    educatorId: string
    startsAt: Date | string
    endsAt: Date | string
    location: string
    mode: string
    createdAt?: Date | string
    bookings?: OfficeHourBookingUncheckedCreateNestedManyWithoutOfficeHourSlotInput
  }

  export type OfficeHourSlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutOfficeHourSlotsNestedInput
    educator?: UserUpdateOneRequiredWithoutCreatedOfficeHourSlotsNestedInput
    bookings?: OfficeHourBookingUpdateManyWithoutOfficeHourSlotNestedInput
  }

  export type OfficeHourSlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    educatorId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: OfficeHourBookingUncheckedUpdateManyWithoutOfficeHourSlotNestedInput
  }

  export type OfficeHourSlotCreateManyInput = {
    id?: string
    classId: string
    educatorId: string
    startsAt: Date | string
    endsAt: Date | string
    location: string
    mode: string
    createdAt?: Date | string
  }

  export type OfficeHourSlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHourSlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    educatorId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHourBookingCreateInput = {
    id?: string
    topic?: string | null
    status?: $Enums.BookingStatus
    bookedAt?: Date | string
    officeHourSlot: OfficeHourSlotCreateNestedOneWithoutBookingsInput
    student: UserCreateNestedOneWithoutOfficeHourBookingsInput
  }

  export type OfficeHourBookingUncheckedCreateInput = {
    id?: string
    officeHourSlotId: string
    studentId: string
    topic?: string | null
    status?: $Enums.BookingStatus
    bookedAt?: Date | string
  }

  export type OfficeHourBookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    officeHourSlot?: OfficeHourSlotUpdateOneRequiredWithoutBookingsNestedInput
    student?: UserUpdateOneRequiredWithoutOfficeHourBookingsNestedInput
  }

  export type OfficeHourBookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    officeHourSlotId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHourBookingCreateManyInput = {
    id?: string
    officeHourSlotId: string
    studentId: string
    topic?: string | null
    status?: $Enums.BookingStatus
    bookedAt?: Date | string
  }

  export type OfficeHourBookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHourBookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    officeHourSlotId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventCreateInput = {
    id?: string
    institutionId: string
    action: string
    entityType: string
    entityId: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actor: UserCreateNestedOneWithoutAuditEventsInput
  }

  export type AuditEventUncheckedCreateInput = {
    id?: string
    institutionId: string
    actorUserId: string
    action: string
    entityType: string
    entityId: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneRequiredWithoutAuditEventsNestedInput
  }

  export type AuditEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    actorUserId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventCreateManyInput = {
    id?: string
    institutionId: string
    actorUserId: string
    action: string
    entityType: string
    entityId: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    actorUserId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInteractionCreateInput = {
    id?: string
    institutionId: string
    roleContext: string
    classId?: string | null
    courseworkId?: string | null
    prompt: string
    response?: string | null
    createdAt?: Date | string
    actor: UserCreateNestedOneWithoutAiInteractionsInput
  }

  export type AIInteractionUncheckedCreateInput = {
    id?: string
    institutionId: string
    actorUserId: string
    roleContext: string
    classId?: string | null
    courseworkId?: string | null
    prompt: string
    response?: string | null
    createdAt?: Date | string
  }

  export type AIInteractionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    roleContext?: StringFieldUpdateOperationsInput | string
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    courseworkId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneRequiredWithoutAiInteractionsNestedInput
  }

  export type AIInteractionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    actorUserId?: StringFieldUpdateOperationsInput | string
    roleContext?: StringFieldUpdateOperationsInput | string
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    courseworkId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInteractionCreateManyInput = {
    id?: string
    institutionId: string
    actorUserId: string
    roleContext: string
    classId?: string | null
    courseworkId?: string | null
    prompt: string
    response?: string | null
    createdAt?: Date | string
  }

  export type AIInteractionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    roleContext?: StringFieldUpdateOperationsInput | string
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    courseworkId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInteractionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    actorUserId?: StringFieldUpdateOperationsInput | string
    roleContext?: StringFieldUpdateOperationsInput | string
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    courseworkId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstitutionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstitutionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstitutionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumAppRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AppRole | EnumAppRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AppRole[] | ListEnumAppRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppRole[] | ListEnumAppRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAppRoleFilter<$PrismaModel> | $Enums.AppRole
  }

  export type InstitutionScalarRelationFilter = {
    is?: InstitutionWhereInput
    isNot?: InstitutionWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type OfficeHourBookingListRelationFilter = {
    every?: OfficeHourBookingWhereInput
    some?: OfficeHourBookingWhereInput
    none?: OfficeHourBookingWhereInput
  }

  export type OfficeHourSlotListRelationFilter = {
    every?: OfficeHourSlotWhereInput
    some?: OfficeHourSlotWhereInput
    none?: OfficeHourSlotWhereInput
  }

  export type AuditEventListRelationFilter = {
    every?: AuditEventWhereInput
    some?: AuditEventWhereInput
    none?: AuditEventWhereInput
  }

  export type AIInteractionListRelationFilter = {
    every?: AIInteractionWhereInput
    some?: AIInteractionWhereInput
    none?: AIInteractionWhereInput
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfficeHourBookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfficeHourSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIInteractionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAppRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppRole | EnumAppRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AppRole[] | ListEnumAppRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppRole[] | ListEnumAppRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAppRoleWithAggregatesFilter<$PrismaModel> | $Enums.AppRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppRoleFilter<$PrismaModel>
    _max?: NestedEnumAppRoleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CourseworkListRelationFilter = {
    every?: CourseworkWhereInput
    some?: CourseworkWhereInput
    none?: CourseworkWhereInput
  }

  export type ResourceListRelationFilter = {
    every?: ResourceWhereInput
    some?: ResourceWhereInput
    none?: ResourceWhereInput
  }

  export type CourseworkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
    educatorId?: SortOrder
    code?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
    educatorId?: SortOrder
    code?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
    educatorId?: SortOrder
    code?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCourseworkKindFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseworkKind | EnumCourseworkKindFieldRefInput<$PrismaModel>
    in?: $Enums.CourseworkKind[] | ListEnumCourseworkKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseworkKind[] | ListEnumCourseworkKindFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseworkKindFilter<$PrismaModel> | $Enums.CourseworkKind
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

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CourseworkCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    title?: SortOrder
    kind?: SortOrder
    description?: SortOrder
    topic?: SortOrder
    dueAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseworkMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    title?: SortOrder
    kind?: SortOrder
    description?: SortOrder
    topic?: SortOrder
    dueAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseworkMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    title?: SortOrder
    kind?: SortOrder
    description?: SortOrder
    topic?: SortOrder
    dueAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCourseworkKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseworkKind | EnumCourseworkKindFieldRefInput<$PrismaModel>
    in?: $Enums.CourseworkKind[] | ListEnumCourseworkKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseworkKind[] | ListEnumCourseworkKindFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseworkKindWithAggregatesFilter<$PrismaModel> | $Enums.CourseworkKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseworkKindFilter<$PrismaModel>
    _max?: NestedEnumCourseworkKindFilter<$PrismaModel>
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

  export type CourseworkNullableScalarRelationFilter = {
    is?: CourseworkWhereInput | null
    isNot?: CourseworkWhereInput | null
  }

  export type ResourceCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    courseworkId?: SortOrder
    title?: SortOrder
    storageKey?: SortOrder
    externalUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    courseworkId?: SortOrder
    title?: SortOrder
    storageKey?: SortOrder
    externalUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ResourceMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    courseworkId?: SortOrder
    title?: SortOrder
    storageKey?: SortOrder
    externalUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type CourseworkScalarRelationFilter = {
    is?: CourseworkWhereInput
    isNot?: CourseworkWhereInput
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    courseworkId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    storageKey?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    fileSizeBytes?: SortOrder
    gradeScore?: SortOrder
    feedbackText?: SortOrder
    submittedAt?: SortOrder
    gradedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionAvgOrderByAggregateInput = {
    fileSizeBytes?: SortOrder
    gradeScore?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    courseworkId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    storageKey?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    fileSizeBytes?: SortOrder
    gradeScore?: SortOrder
    feedbackText?: SortOrder
    submittedAt?: SortOrder
    gradedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    courseworkId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    storageKey?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    fileSizeBytes?: SortOrder
    gradeScore?: SortOrder
    feedbackText?: SortOrder
    submittedAt?: SortOrder
    gradedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionSumOrderByAggregateInput = {
    fileSizeBytes?: SortOrder
    gradeScore?: SortOrder
  }

  export type EnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type OfficeHourSlotCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    educatorId?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    location?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
  }

  export type OfficeHourSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    educatorId?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    location?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
  }

  export type OfficeHourSlotMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    educatorId?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    location?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type OfficeHourSlotScalarRelationFilter = {
    is?: OfficeHourSlotWhereInput
    isNot?: OfficeHourSlotWhereInput
  }

  export type OfficeHourBookingCountOrderByAggregateInput = {
    id?: SortOrder
    officeHourSlotId?: SortOrder
    studentId?: SortOrder
    topic?: SortOrder
    status?: SortOrder
    bookedAt?: SortOrder
  }

  export type OfficeHourBookingMaxOrderByAggregateInput = {
    id?: SortOrder
    officeHourSlotId?: SortOrder
    studentId?: SortOrder
    topic?: SortOrder
    status?: SortOrder
    bookedAt?: SortOrder
  }

  export type OfficeHourBookingMinOrderByAggregateInput = {
    id?: SortOrder
    officeHourSlotId?: SortOrder
    studentId?: SortOrder
    topic?: SortOrder
    status?: SortOrder
    bookedAt?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
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

  export type AuditEventCountOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
    actorUserId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditEventMaxOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
    actorUserId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditEventMinOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
    actorUserId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
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

  export type AIInteractionCountOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
    actorUserId?: SortOrder
    roleContext?: SortOrder
    classId?: SortOrder
    courseworkId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type AIInteractionMaxOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
    actorUserId?: SortOrder
    roleContext?: SortOrder
    classId?: SortOrder
    courseworkId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type AIInteractionMinOrderByAggregateInput = {
    id?: SortOrder
    institutionId?: SortOrder
    actorUserId?: SortOrder
    roleContext?: SortOrder
    classId?: SortOrder
    courseworkId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<UserCreateWithoutInstitutionInput, UserUncheckedCreateWithoutInstitutionInput> | UserCreateWithoutInstitutionInput[] | UserUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstitutionInput | UserCreateOrConnectWithoutInstitutionInput[]
    createMany?: UserCreateManyInstitutionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClassCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<ClassCreateWithoutInstitutionInput, ClassUncheckedCreateWithoutInstitutionInput> | ClassCreateWithoutInstitutionInput[] | ClassUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutInstitutionInput | ClassCreateOrConnectWithoutInstitutionInput[]
    createMany?: ClassCreateManyInstitutionInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<UserCreateWithoutInstitutionInput, UserUncheckedCreateWithoutInstitutionInput> | UserCreateWithoutInstitutionInput[] | UserUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstitutionInput | UserCreateOrConnectWithoutInstitutionInput[]
    createMany?: UserCreateManyInstitutionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<ClassCreateWithoutInstitutionInput, ClassUncheckedCreateWithoutInstitutionInput> | ClassCreateWithoutInstitutionInput[] | ClassUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutInstitutionInput | ClassCreateOrConnectWithoutInstitutionInput[]
    createMany?: ClassCreateManyInstitutionInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<UserCreateWithoutInstitutionInput, UserUncheckedCreateWithoutInstitutionInput> | UserCreateWithoutInstitutionInput[] | UserUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstitutionInput | UserCreateOrConnectWithoutInstitutionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutInstitutionInput | UserUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: UserCreateManyInstitutionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutInstitutionInput | UserUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutInstitutionInput | UserUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClassUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<ClassCreateWithoutInstitutionInput, ClassUncheckedCreateWithoutInstitutionInput> | ClassCreateWithoutInstitutionInput[] | ClassUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutInstitutionInput | ClassCreateOrConnectWithoutInstitutionInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutInstitutionInput | ClassUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: ClassCreateManyInstitutionInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutInstitutionInput | ClassUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutInstitutionInput | ClassUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<UserCreateWithoutInstitutionInput, UserUncheckedCreateWithoutInstitutionInput> | UserCreateWithoutInstitutionInput[] | UserUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutInstitutionInput | UserCreateOrConnectWithoutInstitutionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutInstitutionInput | UserUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: UserCreateManyInstitutionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutInstitutionInput | UserUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutInstitutionInput | UserUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<ClassCreateWithoutInstitutionInput, ClassUncheckedCreateWithoutInstitutionInput> | ClassCreateWithoutInstitutionInput[] | ClassUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutInstitutionInput | ClassCreateOrConnectWithoutInstitutionInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutInstitutionInput | ClassUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: ClassCreateManyInstitutionInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutInstitutionInput | ClassUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutInstitutionInput | ClassUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type InstitutionCreateNestedOneWithoutUsersInput = {
    create?: XOR<InstitutionCreateWithoutUsersInput, InstitutionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutUsersInput
    connect?: InstitutionWhereUniqueInput
  }

  export type ClassCreateNestedManyWithoutEducatorInput = {
    create?: XOR<ClassCreateWithoutEducatorInput, ClassUncheckedCreateWithoutEducatorInput> | ClassCreateWithoutEducatorInput[] | ClassUncheckedCreateWithoutEducatorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutEducatorInput | ClassCreateOrConnectWithoutEducatorInput[]
    createMany?: ClassCreateManyEducatorInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutStudentInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type OfficeHourBookingCreateNestedManyWithoutStudentInput = {
    create?: XOR<OfficeHourBookingCreateWithoutStudentInput, OfficeHourBookingUncheckedCreateWithoutStudentInput> | OfficeHourBookingCreateWithoutStudentInput[] | OfficeHourBookingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OfficeHourBookingCreateOrConnectWithoutStudentInput | OfficeHourBookingCreateOrConnectWithoutStudentInput[]
    createMany?: OfficeHourBookingCreateManyStudentInputEnvelope
    connect?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
  }

  export type OfficeHourSlotCreateNestedManyWithoutEducatorInput = {
    create?: XOR<OfficeHourSlotCreateWithoutEducatorInput, OfficeHourSlotUncheckedCreateWithoutEducatorInput> | OfficeHourSlotCreateWithoutEducatorInput[] | OfficeHourSlotUncheckedCreateWithoutEducatorInput[]
    connectOrCreate?: OfficeHourSlotCreateOrConnectWithoutEducatorInput | OfficeHourSlotCreateOrConnectWithoutEducatorInput[]
    createMany?: OfficeHourSlotCreateManyEducatorInputEnvelope
    connect?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
  }

  export type AuditEventCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditEventCreateWithoutActorInput, AuditEventUncheckedCreateWithoutActorInput> | AuditEventCreateWithoutActorInput[] | AuditEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutActorInput | AuditEventCreateOrConnectWithoutActorInput[]
    createMany?: AuditEventCreateManyActorInputEnvelope
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
  }

  export type AIInteractionCreateNestedManyWithoutActorInput = {
    create?: XOR<AIInteractionCreateWithoutActorInput, AIInteractionUncheckedCreateWithoutActorInput> | AIInteractionCreateWithoutActorInput[] | AIInteractionUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AIInteractionCreateOrConnectWithoutActorInput | AIInteractionCreateOrConnectWithoutActorInput[]
    createMany?: AIInteractionCreateManyActorInputEnvelope
    connect?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutEducatorInput = {
    create?: XOR<ClassCreateWithoutEducatorInput, ClassUncheckedCreateWithoutEducatorInput> | ClassCreateWithoutEducatorInput[] | ClassUncheckedCreateWithoutEducatorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutEducatorInput | ClassCreateOrConnectWithoutEducatorInput[]
    createMany?: ClassCreateManyEducatorInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type OfficeHourBookingUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<OfficeHourBookingCreateWithoutStudentInput, OfficeHourBookingUncheckedCreateWithoutStudentInput> | OfficeHourBookingCreateWithoutStudentInput[] | OfficeHourBookingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OfficeHourBookingCreateOrConnectWithoutStudentInput | OfficeHourBookingCreateOrConnectWithoutStudentInput[]
    createMany?: OfficeHourBookingCreateManyStudentInputEnvelope
    connect?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
  }

  export type OfficeHourSlotUncheckedCreateNestedManyWithoutEducatorInput = {
    create?: XOR<OfficeHourSlotCreateWithoutEducatorInput, OfficeHourSlotUncheckedCreateWithoutEducatorInput> | OfficeHourSlotCreateWithoutEducatorInput[] | OfficeHourSlotUncheckedCreateWithoutEducatorInput[]
    connectOrCreate?: OfficeHourSlotCreateOrConnectWithoutEducatorInput | OfficeHourSlotCreateOrConnectWithoutEducatorInput[]
    createMany?: OfficeHourSlotCreateManyEducatorInputEnvelope
    connect?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
  }

  export type AuditEventUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditEventCreateWithoutActorInput, AuditEventUncheckedCreateWithoutActorInput> | AuditEventCreateWithoutActorInput[] | AuditEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutActorInput | AuditEventCreateOrConnectWithoutActorInput[]
    createMany?: AuditEventCreateManyActorInputEnvelope
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
  }

  export type AIInteractionUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<AIInteractionCreateWithoutActorInput, AIInteractionUncheckedCreateWithoutActorInput> | AIInteractionCreateWithoutActorInput[] | AIInteractionUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AIInteractionCreateOrConnectWithoutActorInput | AIInteractionCreateOrConnectWithoutActorInput[]
    createMany?: AIInteractionCreateManyActorInputEnvelope
    connect?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
  }

  export type EnumAppRoleFieldUpdateOperationsInput = {
    set?: $Enums.AppRole
  }

  export type InstitutionUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<InstitutionCreateWithoutUsersInput, InstitutionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutUsersInput
    upsert?: InstitutionUpsertWithoutUsersInput
    connect?: InstitutionWhereUniqueInput
    update?: XOR<XOR<InstitutionUpdateToOneWithWhereWithoutUsersInput, InstitutionUpdateWithoutUsersInput>, InstitutionUncheckedUpdateWithoutUsersInput>
  }

  export type ClassUpdateManyWithoutEducatorNestedInput = {
    create?: XOR<ClassCreateWithoutEducatorInput, ClassUncheckedCreateWithoutEducatorInput> | ClassCreateWithoutEducatorInput[] | ClassUncheckedCreateWithoutEducatorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutEducatorInput | ClassCreateOrConnectWithoutEducatorInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutEducatorInput | ClassUpsertWithWhereUniqueWithoutEducatorInput[]
    createMany?: ClassCreateManyEducatorInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutEducatorInput | ClassUpdateWithWhereUniqueWithoutEducatorInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutEducatorInput | ClassUpdateManyWithWhereWithoutEducatorInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutStudentInput | SubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutStudentInput | SubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutStudentInput | SubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type OfficeHourBookingUpdateManyWithoutStudentNestedInput = {
    create?: XOR<OfficeHourBookingCreateWithoutStudentInput, OfficeHourBookingUncheckedCreateWithoutStudentInput> | OfficeHourBookingCreateWithoutStudentInput[] | OfficeHourBookingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OfficeHourBookingCreateOrConnectWithoutStudentInput | OfficeHourBookingCreateOrConnectWithoutStudentInput[]
    upsert?: OfficeHourBookingUpsertWithWhereUniqueWithoutStudentInput | OfficeHourBookingUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: OfficeHourBookingCreateManyStudentInputEnvelope
    set?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
    disconnect?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
    delete?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
    connect?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
    update?: OfficeHourBookingUpdateWithWhereUniqueWithoutStudentInput | OfficeHourBookingUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: OfficeHourBookingUpdateManyWithWhereWithoutStudentInput | OfficeHourBookingUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: OfficeHourBookingScalarWhereInput | OfficeHourBookingScalarWhereInput[]
  }

  export type OfficeHourSlotUpdateManyWithoutEducatorNestedInput = {
    create?: XOR<OfficeHourSlotCreateWithoutEducatorInput, OfficeHourSlotUncheckedCreateWithoutEducatorInput> | OfficeHourSlotCreateWithoutEducatorInput[] | OfficeHourSlotUncheckedCreateWithoutEducatorInput[]
    connectOrCreate?: OfficeHourSlotCreateOrConnectWithoutEducatorInput | OfficeHourSlotCreateOrConnectWithoutEducatorInput[]
    upsert?: OfficeHourSlotUpsertWithWhereUniqueWithoutEducatorInput | OfficeHourSlotUpsertWithWhereUniqueWithoutEducatorInput[]
    createMany?: OfficeHourSlotCreateManyEducatorInputEnvelope
    set?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
    disconnect?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
    delete?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
    connect?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
    update?: OfficeHourSlotUpdateWithWhereUniqueWithoutEducatorInput | OfficeHourSlotUpdateWithWhereUniqueWithoutEducatorInput[]
    updateMany?: OfficeHourSlotUpdateManyWithWhereWithoutEducatorInput | OfficeHourSlotUpdateManyWithWhereWithoutEducatorInput[]
    deleteMany?: OfficeHourSlotScalarWhereInput | OfficeHourSlotScalarWhereInput[]
  }

  export type AuditEventUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditEventCreateWithoutActorInput, AuditEventUncheckedCreateWithoutActorInput> | AuditEventCreateWithoutActorInput[] | AuditEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutActorInput | AuditEventCreateOrConnectWithoutActorInput[]
    upsert?: AuditEventUpsertWithWhereUniqueWithoutActorInput | AuditEventUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditEventCreateManyActorInputEnvelope
    set?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    disconnect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    delete?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    update?: AuditEventUpdateWithWhereUniqueWithoutActorInput | AuditEventUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditEventUpdateManyWithWhereWithoutActorInput | AuditEventUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
  }

  export type AIInteractionUpdateManyWithoutActorNestedInput = {
    create?: XOR<AIInteractionCreateWithoutActorInput, AIInteractionUncheckedCreateWithoutActorInput> | AIInteractionCreateWithoutActorInput[] | AIInteractionUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AIInteractionCreateOrConnectWithoutActorInput | AIInteractionCreateOrConnectWithoutActorInput[]
    upsert?: AIInteractionUpsertWithWhereUniqueWithoutActorInput | AIInteractionUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AIInteractionCreateManyActorInputEnvelope
    set?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
    disconnect?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
    delete?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
    connect?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
    update?: AIInteractionUpdateWithWhereUniqueWithoutActorInput | AIInteractionUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AIInteractionUpdateManyWithWhereWithoutActorInput | AIInteractionUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AIInteractionScalarWhereInput | AIInteractionScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutEducatorNestedInput = {
    create?: XOR<ClassCreateWithoutEducatorInput, ClassUncheckedCreateWithoutEducatorInput> | ClassCreateWithoutEducatorInput[] | ClassUncheckedCreateWithoutEducatorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutEducatorInput | ClassCreateOrConnectWithoutEducatorInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutEducatorInput | ClassUpsertWithWhereUniqueWithoutEducatorInput[]
    createMany?: ClassCreateManyEducatorInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutEducatorInput | ClassUpdateWithWhereUniqueWithoutEducatorInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutEducatorInput | ClassUpdateManyWithWhereWithoutEducatorInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutStudentInput | SubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutStudentInput | SubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutStudentInput | SubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type OfficeHourBookingUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<OfficeHourBookingCreateWithoutStudentInput, OfficeHourBookingUncheckedCreateWithoutStudentInput> | OfficeHourBookingCreateWithoutStudentInput[] | OfficeHourBookingUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OfficeHourBookingCreateOrConnectWithoutStudentInput | OfficeHourBookingCreateOrConnectWithoutStudentInput[]
    upsert?: OfficeHourBookingUpsertWithWhereUniqueWithoutStudentInput | OfficeHourBookingUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: OfficeHourBookingCreateManyStudentInputEnvelope
    set?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
    disconnect?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
    delete?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
    connect?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
    update?: OfficeHourBookingUpdateWithWhereUniqueWithoutStudentInput | OfficeHourBookingUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: OfficeHourBookingUpdateManyWithWhereWithoutStudentInput | OfficeHourBookingUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: OfficeHourBookingScalarWhereInput | OfficeHourBookingScalarWhereInput[]
  }

  export type OfficeHourSlotUncheckedUpdateManyWithoutEducatorNestedInput = {
    create?: XOR<OfficeHourSlotCreateWithoutEducatorInput, OfficeHourSlotUncheckedCreateWithoutEducatorInput> | OfficeHourSlotCreateWithoutEducatorInput[] | OfficeHourSlotUncheckedCreateWithoutEducatorInput[]
    connectOrCreate?: OfficeHourSlotCreateOrConnectWithoutEducatorInput | OfficeHourSlotCreateOrConnectWithoutEducatorInput[]
    upsert?: OfficeHourSlotUpsertWithWhereUniqueWithoutEducatorInput | OfficeHourSlotUpsertWithWhereUniqueWithoutEducatorInput[]
    createMany?: OfficeHourSlotCreateManyEducatorInputEnvelope
    set?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
    disconnect?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
    delete?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
    connect?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
    update?: OfficeHourSlotUpdateWithWhereUniqueWithoutEducatorInput | OfficeHourSlotUpdateWithWhereUniqueWithoutEducatorInput[]
    updateMany?: OfficeHourSlotUpdateManyWithWhereWithoutEducatorInput | OfficeHourSlotUpdateManyWithWhereWithoutEducatorInput[]
    deleteMany?: OfficeHourSlotScalarWhereInput | OfficeHourSlotScalarWhereInput[]
  }

  export type AuditEventUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditEventCreateWithoutActorInput, AuditEventUncheckedCreateWithoutActorInput> | AuditEventCreateWithoutActorInput[] | AuditEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutActorInput | AuditEventCreateOrConnectWithoutActorInput[]
    upsert?: AuditEventUpsertWithWhereUniqueWithoutActorInput | AuditEventUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditEventCreateManyActorInputEnvelope
    set?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    disconnect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    delete?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    update?: AuditEventUpdateWithWhereUniqueWithoutActorInput | AuditEventUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditEventUpdateManyWithWhereWithoutActorInput | AuditEventUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
  }

  export type AIInteractionUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<AIInteractionCreateWithoutActorInput, AIInteractionUncheckedCreateWithoutActorInput> | AIInteractionCreateWithoutActorInput[] | AIInteractionUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AIInteractionCreateOrConnectWithoutActorInput | AIInteractionCreateOrConnectWithoutActorInput[]
    upsert?: AIInteractionUpsertWithWhereUniqueWithoutActorInput | AIInteractionUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AIInteractionCreateManyActorInputEnvelope
    set?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
    disconnect?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
    delete?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
    connect?: AIInteractionWhereUniqueInput | AIInteractionWhereUniqueInput[]
    update?: AIInteractionUpdateWithWhereUniqueWithoutActorInput | AIInteractionUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AIInteractionUpdateManyWithWhereWithoutActorInput | AIInteractionUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AIInteractionScalarWhereInput | AIInteractionScalarWhereInput[]
  }

  export type InstitutionCreateNestedOneWithoutClassesInput = {
    create?: XOR<InstitutionCreateWithoutClassesInput, InstitutionUncheckedCreateWithoutClassesInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutClassesInput
    connect?: InstitutionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTaughtClassesInput = {
    create?: XOR<UserCreateWithoutTaughtClassesInput, UserUncheckedCreateWithoutTaughtClassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaughtClassesInput
    connect?: UserWhereUniqueInput
  }

  export type CourseworkCreateNestedManyWithoutClassInput = {
    create?: XOR<CourseworkCreateWithoutClassInput, CourseworkUncheckedCreateWithoutClassInput> | CourseworkCreateWithoutClassInput[] | CourseworkUncheckedCreateWithoutClassInput[]
    connectOrCreate?: CourseworkCreateOrConnectWithoutClassInput | CourseworkCreateOrConnectWithoutClassInput[]
    createMany?: CourseworkCreateManyClassInputEnvelope
    connect?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
  }

  export type ResourceCreateNestedManyWithoutClassInput = {
    create?: XOR<ResourceCreateWithoutClassInput, ResourceUncheckedCreateWithoutClassInput> | ResourceCreateWithoutClassInput[] | ResourceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutClassInput | ResourceCreateOrConnectWithoutClassInput[]
    createMany?: ResourceCreateManyClassInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type OfficeHourSlotCreateNestedManyWithoutClassInput = {
    create?: XOR<OfficeHourSlotCreateWithoutClassInput, OfficeHourSlotUncheckedCreateWithoutClassInput> | OfficeHourSlotCreateWithoutClassInput[] | OfficeHourSlotUncheckedCreateWithoutClassInput[]
    connectOrCreate?: OfficeHourSlotCreateOrConnectWithoutClassInput | OfficeHourSlotCreateOrConnectWithoutClassInput[]
    createMany?: OfficeHourSlotCreateManyClassInputEnvelope
    connect?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
  }

  export type CourseworkUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<CourseworkCreateWithoutClassInput, CourseworkUncheckedCreateWithoutClassInput> | CourseworkCreateWithoutClassInput[] | CourseworkUncheckedCreateWithoutClassInput[]
    connectOrCreate?: CourseworkCreateOrConnectWithoutClassInput | CourseworkCreateOrConnectWithoutClassInput[]
    createMany?: CourseworkCreateManyClassInputEnvelope
    connect?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
  }

  export type ResourceUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<ResourceCreateWithoutClassInput, ResourceUncheckedCreateWithoutClassInput> | ResourceCreateWithoutClassInput[] | ResourceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutClassInput | ResourceCreateOrConnectWithoutClassInput[]
    createMany?: ResourceCreateManyClassInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type OfficeHourSlotUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<OfficeHourSlotCreateWithoutClassInput, OfficeHourSlotUncheckedCreateWithoutClassInput> | OfficeHourSlotCreateWithoutClassInput[] | OfficeHourSlotUncheckedCreateWithoutClassInput[]
    connectOrCreate?: OfficeHourSlotCreateOrConnectWithoutClassInput | OfficeHourSlotCreateOrConnectWithoutClassInput[]
    createMany?: OfficeHourSlotCreateManyClassInputEnvelope
    connect?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
  }

  export type InstitutionUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<InstitutionCreateWithoutClassesInput, InstitutionUncheckedCreateWithoutClassesInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutClassesInput
    upsert?: InstitutionUpsertWithoutClassesInput
    connect?: InstitutionWhereUniqueInput
    update?: XOR<XOR<InstitutionUpdateToOneWithWhereWithoutClassesInput, InstitutionUpdateWithoutClassesInput>, InstitutionUncheckedUpdateWithoutClassesInput>
  }

  export type UserUpdateOneRequiredWithoutTaughtClassesNestedInput = {
    create?: XOR<UserCreateWithoutTaughtClassesInput, UserUncheckedCreateWithoutTaughtClassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaughtClassesInput
    upsert?: UserUpsertWithoutTaughtClassesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaughtClassesInput, UserUpdateWithoutTaughtClassesInput>, UserUncheckedUpdateWithoutTaughtClassesInput>
  }

  export type CourseworkUpdateManyWithoutClassNestedInput = {
    create?: XOR<CourseworkCreateWithoutClassInput, CourseworkUncheckedCreateWithoutClassInput> | CourseworkCreateWithoutClassInput[] | CourseworkUncheckedCreateWithoutClassInput[]
    connectOrCreate?: CourseworkCreateOrConnectWithoutClassInput | CourseworkCreateOrConnectWithoutClassInput[]
    upsert?: CourseworkUpsertWithWhereUniqueWithoutClassInput | CourseworkUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: CourseworkCreateManyClassInputEnvelope
    set?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
    disconnect?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
    delete?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
    connect?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
    update?: CourseworkUpdateWithWhereUniqueWithoutClassInput | CourseworkUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: CourseworkUpdateManyWithWhereWithoutClassInput | CourseworkUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: CourseworkScalarWhereInput | CourseworkScalarWhereInput[]
  }

  export type ResourceUpdateManyWithoutClassNestedInput = {
    create?: XOR<ResourceCreateWithoutClassInput, ResourceUncheckedCreateWithoutClassInput> | ResourceCreateWithoutClassInput[] | ResourceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutClassInput | ResourceCreateOrConnectWithoutClassInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutClassInput | ResourceUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ResourceCreateManyClassInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutClassInput | ResourceUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutClassInput | ResourceUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type OfficeHourSlotUpdateManyWithoutClassNestedInput = {
    create?: XOR<OfficeHourSlotCreateWithoutClassInput, OfficeHourSlotUncheckedCreateWithoutClassInput> | OfficeHourSlotCreateWithoutClassInput[] | OfficeHourSlotUncheckedCreateWithoutClassInput[]
    connectOrCreate?: OfficeHourSlotCreateOrConnectWithoutClassInput | OfficeHourSlotCreateOrConnectWithoutClassInput[]
    upsert?: OfficeHourSlotUpsertWithWhereUniqueWithoutClassInput | OfficeHourSlotUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: OfficeHourSlotCreateManyClassInputEnvelope
    set?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
    disconnect?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
    delete?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
    connect?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
    update?: OfficeHourSlotUpdateWithWhereUniqueWithoutClassInput | OfficeHourSlotUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: OfficeHourSlotUpdateManyWithWhereWithoutClassInput | OfficeHourSlotUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: OfficeHourSlotScalarWhereInput | OfficeHourSlotScalarWhereInput[]
  }

  export type CourseworkUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<CourseworkCreateWithoutClassInput, CourseworkUncheckedCreateWithoutClassInput> | CourseworkCreateWithoutClassInput[] | CourseworkUncheckedCreateWithoutClassInput[]
    connectOrCreate?: CourseworkCreateOrConnectWithoutClassInput | CourseworkCreateOrConnectWithoutClassInput[]
    upsert?: CourseworkUpsertWithWhereUniqueWithoutClassInput | CourseworkUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: CourseworkCreateManyClassInputEnvelope
    set?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
    disconnect?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
    delete?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
    connect?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
    update?: CourseworkUpdateWithWhereUniqueWithoutClassInput | CourseworkUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: CourseworkUpdateManyWithWhereWithoutClassInput | CourseworkUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: CourseworkScalarWhereInput | CourseworkScalarWhereInput[]
  }

  export type ResourceUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<ResourceCreateWithoutClassInput, ResourceUncheckedCreateWithoutClassInput> | ResourceCreateWithoutClassInput[] | ResourceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutClassInput | ResourceCreateOrConnectWithoutClassInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutClassInput | ResourceUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ResourceCreateManyClassInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutClassInput | ResourceUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutClassInput | ResourceUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type OfficeHourSlotUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<OfficeHourSlotCreateWithoutClassInput, OfficeHourSlotUncheckedCreateWithoutClassInput> | OfficeHourSlotCreateWithoutClassInput[] | OfficeHourSlotUncheckedCreateWithoutClassInput[]
    connectOrCreate?: OfficeHourSlotCreateOrConnectWithoutClassInput | OfficeHourSlotCreateOrConnectWithoutClassInput[]
    upsert?: OfficeHourSlotUpsertWithWhereUniqueWithoutClassInput | OfficeHourSlotUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: OfficeHourSlotCreateManyClassInputEnvelope
    set?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
    disconnect?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
    delete?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
    connect?: OfficeHourSlotWhereUniqueInput | OfficeHourSlotWhereUniqueInput[]
    update?: OfficeHourSlotUpdateWithWhereUniqueWithoutClassInput | OfficeHourSlotUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: OfficeHourSlotUpdateManyWithWhereWithoutClassInput | OfficeHourSlotUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: OfficeHourSlotScalarWhereInput | OfficeHourSlotScalarWhereInput[]
  }

  export type ClassCreateNestedOneWithoutCourseworkItemsInput = {
    create?: XOR<ClassCreateWithoutCourseworkItemsInput, ClassUncheckedCreateWithoutCourseworkItemsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutCourseworkItemsInput
    connect?: ClassWhereUniqueInput
  }

  export type ResourceCreateNestedManyWithoutCourseworkInput = {
    create?: XOR<ResourceCreateWithoutCourseworkInput, ResourceUncheckedCreateWithoutCourseworkInput> | ResourceCreateWithoutCourseworkInput[] | ResourceUncheckedCreateWithoutCourseworkInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCourseworkInput | ResourceCreateOrConnectWithoutCourseworkInput[]
    createMany?: ResourceCreateManyCourseworkInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutCourseworkInput = {
    create?: XOR<SubmissionCreateWithoutCourseworkInput, SubmissionUncheckedCreateWithoutCourseworkInput> | SubmissionCreateWithoutCourseworkInput[] | SubmissionUncheckedCreateWithoutCourseworkInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutCourseworkInput | SubmissionCreateOrConnectWithoutCourseworkInput[]
    createMany?: SubmissionCreateManyCourseworkInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ResourceUncheckedCreateNestedManyWithoutCourseworkInput = {
    create?: XOR<ResourceCreateWithoutCourseworkInput, ResourceUncheckedCreateWithoutCourseworkInput> | ResourceCreateWithoutCourseworkInput[] | ResourceUncheckedCreateWithoutCourseworkInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCourseworkInput | ResourceCreateOrConnectWithoutCourseworkInput[]
    createMany?: ResourceCreateManyCourseworkInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutCourseworkInput = {
    create?: XOR<SubmissionCreateWithoutCourseworkInput, SubmissionUncheckedCreateWithoutCourseworkInput> | SubmissionCreateWithoutCourseworkInput[] | SubmissionUncheckedCreateWithoutCourseworkInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutCourseworkInput | SubmissionCreateOrConnectWithoutCourseworkInput[]
    createMany?: SubmissionCreateManyCourseworkInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type EnumCourseworkKindFieldUpdateOperationsInput = {
    set?: $Enums.CourseworkKind
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClassUpdateOneRequiredWithoutCourseworkItemsNestedInput = {
    create?: XOR<ClassCreateWithoutCourseworkItemsInput, ClassUncheckedCreateWithoutCourseworkItemsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutCourseworkItemsInput
    upsert?: ClassUpsertWithoutCourseworkItemsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutCourseworkItemsInput, ClassUpdateWithoutCourseworkItemsInput>, ClassUncheckedUpdateWithoutCourseworkItemsInput>
  }

  export type ResourceUpdateManyWithoutCourseworkNestedInput = {
    create?: XOR<ResourceCreateWithoutCourseworkInput, ResourceUncheckedCreateWithoutCourseworkInput> | ResourceCreateWithoutCourseworkInput[] | ResourceUncheckedCreateWithoutCourseworkInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCourseworkInput | ResourceCreateOrConnectWithoutCourseworkInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutCourseworkInput | ResourceUpsertWithWhereUniqueWithoutCourseworkInput[]
    createMany?: ResourceCreateManyCourseworkInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutCourseworkInput | ResourceUpdateWithWhereUniqueWithoutCourseworkInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutCourseworkInput | ResourceUpdateManyWithWhereWithoutCourseworkInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutCourseworkNestedInput = {
    create?: XOR<SubmissionCreateWithoutCourseworkInput, SubmissionUncheckedCreateWithoutCourseworkInput> | SubmissionCreateWithoutCourseworkInput[] | SubmissionUncheckedCreateWithoutCourseworkInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutCourseworkInput | SubmissionCreateOrConnectWithoutCourseworkInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutCourseworkInput | SubmissionUpsertWithWhereUniqueWithoutCourseworkInput[]
    createMany?: SubmissionCreateManyCourseworkInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutCourseworkInput | SubmissionUpdateWithWhereUniqueWithoutCourseworkInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutCourseworkInput | SubmissionUpdateManyWithWhereWithoutCourseworkInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ResourceUncheckedUpdateManyWithoutCourseworkNestedInput = {
    create?: XOR<ResourceCreateWithoutCourseworkInput, ResourceUncheckedCreateWithoutCourseworkInput> | ResourceCreateWithoutCourseworkInput[] | ResourceUncheckedCreateWithoutCourseworkInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCourseworkInput | ResourceCreateOrConnectWithoutCourseworkInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutCourseworkInput | ResourceUpsertWithWhereUniqueWithoutCourseworkInput[]
    createMany?: ResourceCreateManyCourseworkInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutCourseworkInput | ResourceUpdateWithWhereUniqueWithoutCourseworkInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutCourseworkInput | ResourceUpdateManyWithWhereWithoutCourseworkInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutCourseworkNestedInput = {
    create?: XOR<SubmissionCreateWithoutCourseworkInput, SubmissionUncheckedCreateWithoutCourseworkInput> | SubmissionCreateWithoutCourseworkInput[] | SubmissionUncheckedCreateWithoutCourseworkInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutCourseworkInput | SubmissionCreateOrConnectWithoutCourseworkInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutCourseworkInput | SubmissionUpsertWithWhereUniqueWithoutCourseworkInput[]
    createMany?: SubmissionCreateManyCourseworkInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutCourseworkInput | SubmissionUpdateWithWhereUniqueWithoutCourseworkInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutCourseworkInput | SubmissionUpdateManyWithWhereWithoutCourseworkInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ClassCreateNestedOneWithoutResourcesInput = {
    create?: XOR<ClassCreateWithoutResourcesInput, ClassUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: ClassCreateOrConnectWithoutResourcesInput
    connect?: ClassWhereUniqueInput
  }

  export type CourseworkCreateNestedOneWithoutResourcesInput = {
    create?: XOR<CourseworkCreateWithoutResourcesInput, CourseworkUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: CourseworkCreateOrConnectWithoutResourcesInput
    connect?: CourseworkWhereUniqueInput
  }

  export type ClassUpdateOneRequiredWithoutResourcesNestedInput = {
    create?: XOR<ClassCreateWithoutResourcesInput, ClassUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: ClassCreateOrConnectWithoutResourcesInput
    upsert?: ClassUpsertWithoutResourcesInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutResourcesInput, ClassUpdateWithoutResourcesInput>, ClassUncheckedUpdateWithoutResourcesInput>
  }

  export type CourseworkUpdateOneWithoutResourcesNestedInput = {
    create?: XOR<CourseworkCreateWithoutResourcesInput, CourseworkUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: CourseworkCreateOrConnectWithoutResourcesInput
    upsert?: CourseworkUpsertWithoutResourcesInput
    disconnect?: CourseworkWhereInput | boolean
    delete?: CourseworkWhereInput | boolean
    connect?: CourseworkWhereUniqueInput
    update?: XOR<XOR<CourseworkUpdateToOneWithWhereWithoutResourcesInput, CourseworkUpdateWithoutResourcesInput>, CourseworkUncheckedUpdateWithoutResourcesInput>
  }

  export type CourseworkCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<CourseworkCreateWithoutSubmissionsInput, CourseworkUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: CourseworkCreateOrConnectWithoutSubmissionsInput
    connect?: CourseworkWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSubmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CourseworkUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<CourseworkCreateWithoutSubmissionsInput, CourseworkUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: CourseworkCreateOrConnectWithoutSubmissionsInput
    upsert?: CourseworkUpsertWithoutSubmissionsInput
    connect?: CourseworkWhereUniqueInput
    update?: XOR<XOR<CourseworkUpdateToOneWithWhereWithoutSubmissionsInput, CourseworkUpdateWithoutSubmissionsInput>, CourseworkUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ClassCreateNestedOneWithoutOfficeHourSlotsInput = {
    create?: XOR<ClassCreateWithoutOfficeHourSlotsInput, ClassUncheckedCreateWithoutOfficeHourSlotsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutOfficeHourSlotsInput
    connect?: ClassWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedOfficeHourSlotsInput = {
    create?: XOR<UserCreateWithoutCreatedOfficeHourSlotsInput, UserUncheckedCreateWithoutCreatedOfficeHourSlotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedOfficeHourSlotsInput
    connect?: UserWhereUniqueInput
  }

  export type OfficeHourBookingCreateNestedManyWithoutOfficeHourSlotInput = {
    create?: XOR<OfficeHourBookingCreateWithoutOfficeHourSlotInput, OfficeHourBookingUncheckedCreateWithoutOfficeHourSlotInput> | OfficeHourBookingCreateWithoutOfficeHourSlotInput[] | OfficeHourBookingUncheckedCreateWithoutOfficeHourSlotInput[]
    connectOrCreate?: OfficeHourBookingCreateOrConnectWithoutOfficeHourSlotInput | OfficeHourBookingCreateOrConnectWithoutOfficeHourSlotInput[]
    createMany?: OfficeHourBookingCreateManyOfficeHourSlotInputEnvelope
    connect?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
  }

  export type OfficeHourBookingUncheckedCreateNestedManyWithoutOfficeHourSlotInput = {
    create?: XOR<OfficeHourBookingCreateWithoutOfficeHourSlotInput, OfficeHourBookingUncheckedCreateWithoutOfficeHourSlotInput> | OfficeHourBookingCreateWithoutOfficeHourSlotInput[] | OfficeHourBookingUncheckedCreateWithoutOfficeHourSlotInput[]
    connectOrCreate?: OfficeHourBookingCreateOrConnectWithoutOfficeHourSlotInput | OfficeHourBookingCreateOrConnectWithoutOfficeHourSlotInput[]
    createMany?: OfficeHourBookingCreateManyOfficeHourSlotInputEnvelope
    connect?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
  }

  export type ClassUpdateOneRequiredWithoutOfficeHourSlotsNestedInput = {
    create?: XOR<ClassCreateWithoutOfficeHourSlotsInput, ClassUncheckedCreateWithoutOfficeHourSlotsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutOfficeHourSlotsInput
    upsert?: ClassUpsertWithoutOfficeHourSlotsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutOfficeHourSlotsInput, ClassUpdateWithoutOfficeHourSlotsInput>, ClassUncheckedUpdateWithoutOfficeHourSlotsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedOfficeHourSlotsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedOfficeHourSlotsInput, UserUncheckedCreateWithoutCreatedOfficeHourSlotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedOfficeHourSlotsInput
    upsert?: UserUpsertWithoutCreatedOfficeHourSlotsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedOfficeHourSlotsInput, UserUpdateWithoutCreatedOfficeHourSlotsInput>, UserUncheckedUpdateWithoutCreatedOfficeHourSlotsInput>
  }

  export type OfficeHourBookingUpdateManyWithoutOfficeHourSlotNestedInput = {
    create?: XOR<OfficeHourBookingCreateWithoutOfficeHourSlotInput, OfficeHourBookingUncheckedCreateWithoutOfficeHourSlotInput> | OfficeHourBookingCreateWithoutOfficeHourSlotInput[] | OfficeHourBookingUncheckedCreateWithoutOfficeHourSlotInput[]
    connectOrCreate?: OfficeHourBookingCreateOrConnectWithoutOfficeHourSlotInput | OfficeHourBookingCreateOrConnectWithoutOfficeHourSlotInput[]
    upsert?: OfficeHourBookingUpsertWithWhereUniqueWithoutOfficeHourSlotInput | OfficeHourBookingUpsertWithWhereUniqueWithoutOfficeHourSlotInput[]
    createMany?: OfficeHourBookingCreateManyOfficeHourSlotInputEnvelope
    set?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
    disconnect?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
    delete?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
    connect?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
    update?: OfficeHourBookingUpdateWithWhereUniqueWithoutOfficeHourSlotInput | OfficeHourBookingUpdateWithWhereUniqueWithoutOfficeHourSlotInput[]
    updateMany?: OfficeHourBookingUpdateManyWithWhereWithoutOfficeHourSlotInput | OfficeHourBookingUpdateManyWithWhereWithoutOfficeHourSlotInput[]
    deleteMany?: OfficeHourBookingScalarWhereInput | OfficeHourBookingScalarWhereInput[]
  }

  export type OfficeHourBookingUncheckedUpdateManyWithoutOfficeHourSlotNestedInput = {
    create?: XOR<OfficeHourBookingCreateWithoutOfficeHourSlotInput, OfficeHourBookingUncheckedCreateWithoutOfficeHourSlotInput> | OfficeHourBookingCreateWithoutOfficeHourSlotInput[] | OfficeHourBookingUncheckedCreateWithoutOfficeHourSlotInput[]
    connectOrCreate?: OfficeHourBookingCreateOrConnectWithoutOfficeHourSlotInput | OfficeHourBookingCreateOrConnectWithoutOfficeHourSlotInput[]
    upsert?: OfficeHourBookingUpsertWithWhereUniqueWithoutOfficeHourSlotInput | OfficeHourBookingUpsertWithWhereUniqueWithoutOfficeHourSlotInput[]
    createMany?: OfficeHourBookingCreateManyOfficeHourSlotInputEnvelope
    set?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
    disconnect?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
    delete?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
    connect?: OfficeHourBookingWhereUniqueInput | OfficeHourBookingWhereUniqueInput[]
    update?: OfficeHourBookingUpdateWithWhereUniqueWithoutOfficeHourSlotInput | OfficeHourBookingUpdateWithWhereUniqueWithoutOfficeHourSlotInput[]
    updateMany?: OfficeHourBookingUpdateManyWithWhereWithoutOfficeHourSlotInput | OfficeHourBookingUpdateManyWithWhereWithoutOfficeHourSlotInput[]
    deleteMany?: OfficeHourBookingScalarWhereInput | OfficeHourBookingScalarWhereInput[]
  }

  export type OfficeHourSlotCreateNestedOneWithoutBookingsInput = {
    create?: XOR<OfficeHourSlotCreateWithoutBookingsInput, OfficeHourSlotUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: OfficeHourSlotCreateOrConnectWithoutBookingsInput
    connect?: OfficeHourSlotWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOfficeHourBookingsInput = {
    create?: XOR<UserCreateWithoutOfficeHourBookingsInput, UserUncheckedCreateWithoutOfficeHourBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOfficeHourBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type OfficeHourSlotUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<OfficeHourSlotCreateWithoutBookingsInput, OfficeHourSlotUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: OfficeHourSlotCreateOrConnectWithoutBookingsInput
    upsert?: OfficeHourSlotUpsertWithoutBookingsInput
    connect?: OfficeHourSlotWhereUniqueInput
    update?: XOR<XOR<OfficeHourSlotUpdateToOneWithWhereWithoutBookingsInput, OfficeHourSlotUpdateWithoutBookingsInput>, OfficeHourSlotUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateOneRequiredWithoutOfficeHourBookingsNestedInput = {
    create?: XOR<UserCreateWithoutOfficeHourBookingsInput, UserUncheckedCreateWithoutOfficeHourBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOfficeHourBookingsInput
    upsert?: UserUpsertWithoutOfficeHourBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOfficeHourBookingsInput, UserUpdateWithoutOfficeHourBookingsInput>, UserUncheckedUpdateWithoutOfficeHourBookingsInput>
  }

  export type UserCreateNestedOneWithoutAuditEventsInput = {
    create?: XOR<UserCreateWithoutAuditEventsInput, UserUncheckedCreateWithoutAuditEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditEventsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuditEventsNestedInput = {
    create?: XOR<UserCreateWithoutAuditEventsInput, UserUncheckedCreateWithoutAuditEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditEventsInput
    upsert?: UserUpsertWithoutAuditEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditEventsInput, UserUpdateWithoutAuditEventsInput>, UserUncheckedUpdateWithoutAuditEventsInput>
  }

  export type UserCreateNestedOneWithoutAiInteractionsInput = {
    create?: XOR<UserCreateWithoutAiInteractionsInput, UserUncheckedCreateWithoutAiInteractionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiInteractionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAiInteractionsNestedInput = {
    create?: XOR<UserCreateWithoutAiInteractionsInput, UserUncheckedCreateWithoutAiInteractionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiInteractionsInput
    upsert?: UserUpsertWithoutAiInteractionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAiInteractionsInput, UserUpdateWithoutAiInteractionsInput>, UserUncheckedUpdateWithoutAiInteractionsInput>
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

  export type NestedEnumAppRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AppRole | EnumAppRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AppRole[] | ListEnumAppRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppRole[] | ListEnumAppRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAppRoleFilter<$PrismaModel> | $Enums.AppRole
  }

  export type NestedEnumAppRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppRole | EnumAppRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AppRole[] | ListEnumAppRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppRole[] | ListEnumAppRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAppRoleWithAggregatesFilter<$PrismaModel> | $Enums.AppRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppRoleFilter<$PrismaModel>
    _max?: NestedEnumAppRoleFilter<$PrismaModel>
  }

  export type NestedEnumCourseworkKindFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseworkKind | EnumCourseworkKindFieldRefInput<$PrismaModel>
    in?: $Enums.CourseworkKind[] | ListEnumCourseworkKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseworkKind[] | ListEnumCourseworkKindFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseworkKindFilter<$PrismaModel> | $Enums.CourseworkKind
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

  export type NestedEnumCourseworkKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseworkKind | EnumCourseworkKindFieldRefInput<$PrismaModel>
    in?: $Enums.CourseworkKind[] | ListEnumCourseworkKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseworkKind[] | ListEnumCourseworkKindFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseworkKindWithAggregatesFilter<$PrismaModel> | $Enums.CourseworkKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseworkKindFilter<$PrismaModel>
    _max?: NestedEnumCourseworkKindFilter<$PrismaModel>
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

  export type NestedEnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
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

  export type NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
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

  export type UserCreateWithoutInstitutionInput = {
    id?: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassCreateNestedManyWithoutEducatorInput
    submissions?: SubmissionCreateNestedManyWithoutStudentInput
    officeHourBookings?: OfficeHourBookingCreateNestedManyWithoutStudentInput
    createdOfficeHourSlots?: OfficeHourSlotCreateNestedManyWithoutEducatorInput
    auditEvents?: AuditEventCreateNestedManyWithoutActorInput
    aiInteractions?: AIInteractionCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutInstitutionInput = {
    id?: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassUncheckedCreateNestedManyWithoutEducatorInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    officeHourBookings?: OfficeHourBookingUncheckedCreateNestedManyWithoutStudentInput
    createdOfficeHourSlots?: OfficeHourSlotUncheckedCreateNestedManyWithoutEducatorInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActorInput
    aiInteractions?: AIInteractionUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutInstitutionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstitutionInput, UserUncheckedCreateWithoutInstitutionInput>
  }

  export type UserCreateManyInstitutionInputEnvelope = {
    data: UserCreateManyInstitutionInput | UserCreateManyInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type ClassCreateWithoutInstitutionInput = {
    id?: string
    code: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    educator: UserCreateNestedOneWithoutTaughtClassesInput
    courseworkItems?: CourseworkCreateNestedManyWithoutClassInput
    resources?: ResourceCreateNestedManyWithoutClassInput
    officeHourSlots?: OfficeHourSlotCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutInstitutionInput = {
    id?: string
    educatorId: string
    code: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseworkItems?: CourseworkUncheckedCreateNestedManyWithoutClassInput
    resources?: ResourceUncheckedCreateNestedManyWithoutClassInput
    officeHourSlots?: OfficeHourSlotUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutInstitutionInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutInstitutionInput, ClassUncheckedCreateWithoutInstitutionInput>
  }

  export type ClassCreateManyInstitutionInputEnvelope = {
    data: ClassCreateManyInstitutionInput | ClassCreateManyInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutInstitutionInput, UserUncheckedUpdateWithoutInstitutionInput>
    create: XOR<UserCreateWithoutInstitutionInput, UserUncheckedCreateWithoutInstitutionInput>
  }

  export type UserUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutInstitutionInput, UserUncheckedUpdateWithoutInstitutionInput>
  }

  export type UserUpdateManyWithWhereWithoutInstitutionInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    institutionId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    role?: EnumAppRoleFilter<"User"> | $Enums.AppRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ClassUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutInstitutionInput, ClassUncheckedUpdateWithoutInstitutionInput>
    create: XOR<ClassCreateWithoutInstitutionInput, ClassUncheckedCreateWithoutInstitutionInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutInstitutionInput, ClassUncheckedUpdateWithoutInstitutionInput>
  }

  export type ClassUpdateManyWithWhereWithoutInstitutionInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: StringFilter<"Class"> | string
    institutionId?: StringFilter<"Class"> | string
    educatorId?: StringFilter<"Class"> | string
    code?: StringFilter<"Class"> | string
    title?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
    updatedAt?: DateTimeFilter<"Class"> | Date | string
  }

  export type InstitutionCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    classes?: ClassCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    classes?: ClassUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionCreateOrConnectWithoutUsersInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutUsersInput, InstitutionUncheckedCreateWithoutUsersInput>
  }

  export type ClassCreateWithoutEducatorInput = {
    id?: string
    code: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institution: InstitutionCreateNestedOneWithoutClassesInput
    courseworkItems?: CourseworkCreateNestedManyWithoutClassInput
    resources?: ResourceCreateNestedManyWithoutClassInput
    officeHourSlots?: OfficeHourSlotCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutEducatorInput = {
    id?: string
    institutionId: string
    code: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseworkItems?: CourseworkUncheckedCreateNestedManyWithoutClassInput
    resources?: ResourceUncheckedCreateNestedManyWithoutClassInput
    officeHourSlots?: OfficeHourSlotUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutEducatorInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutEducatorInput, ClassUncheckedCreateWithoutEducatorInput>
  }

  export type ClassCreateManyEducatorInputEnvelope = {
    data: ClassCreateManyEducatorInput | ClassCreateManyEducatorInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutStudentInput = {
    id?: string
    status?: $Enums.SubmissionStatus
    storageKey?: string | null
    fileName?: string | null
    mimeType?: string | null
    fileSizeBytes?: number | null
    gradeScore?: number | null
    feedbackText?: string | null
    submittedAt?: Date | string | null
    gradedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coursework: CourseworkCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutStudentInput = {
    id?: string
    courseworkId: string
    status?: $Enums.SubmissionStatus
    storageKey?: string | null
    fileName?: string | null
    mimeType?: string | null
    fileSizeBytes?: number | null
    gradeScore?: number | null
    feedbackText?: string | null
    submittedAt?: Date | string | null
    gradedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput>
  }

  export type SubmissionCreateManyStudentInputEnvelope = {
    data: SubmissionCreateManyStudentInput | SubmissionCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type OfficeHourBookingCreateWithoutStudentInput = {
    id?: string
    topic?: string | null
    status?: $Enums.BookingStatus
    bookedAt?: Date | string
    officeHourSlot: OfficeHourSlotCreateNestedOneWithoutBookingsInput
  }

  export type OfficeHourBookingUncheckedCreateWithoutStudentInput = {
    id?: string
    officeHourSlotId: string
    topic?: string | null
    status?: $Enums.BookingStatus
    bookedAt?: Date | string
  }

  export type OfficeHourBookingCreateOrConnectWithoutStudentInput = {
    where: OfficeHourBookingWhereUniqueInput
    create: XOR<OfficeHourBookingCreateWithoutStudentInput, OfficeHourBookingUncheckedCreateWithoutStudentInput>
  }

  export type OfficeHourBookingCreateManyStudentInputEnvelope = {
    data: OfficeHourBookingCreateManyStudentInput | OfficeHourBookingCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type OfficeHourSlotCreateWithoutEducatorInput = {
    id?: string
    startsAt: Date | string
    endsAt: Date | string
    location: string
    mode: string
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutOfficeHourSlotsInput
    bookings?: OfficeHourBookingCreateNestedManyWithoutOfficeHourSlotInput
  }

  export type OfficeHourSlotUncheckedCreateWithoutEducatorInput = {
    id?: string
    classId: string
    startsAt: Date | string
    endsAt: Date | string
    location: string
    mode: string
    createdAt?: Date | string
    bookings?: OfficeHourBookingUncheckedCreateNestedManyWithoutOfficeHourSlotInput
  }

  export type OfficeHourSlotCreateOrConnectWithoutEducatorInput = {
    where: OfficeHourSlotWhereUniqueInput
    create: XOR<OfficeHourSlotCreateWithoutEducatorInput, OfficeHourSlotUncheckedCreateWithoutEducatorInput>
  }

  export type OfficeHourSlotCreateManyEducatorInputEnvelope = {
    data: OfficeHourSlotCreateManyEducatorInput | OfficeHourSlotCreateManyEducatorInput[]
    skipDuplicates?: boolean
  }

  export type AuditEventCreateWithoutActorInput = {
    id?: string
    institutionId: string
    action: string
    entityType: string
    entityId: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditEventUncheckedCreateWithoutActorInput = {
    id?: string
    institutionId: string
    action: string
    entityType: string
    entityId: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditEventCreateOrConnectWithoutActorInput = {
    where: AuditEventWhereUniqueInput
    create: XOR<AuditEventCreateWithoutActorInput, AuditEventUncheckedCreateWithoutActorInput>
  }

  export type AuditEventCreateManyActorInputEnvelope = {
    data: AuditEventCreateManyActorInput | AuditEventCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type AIInteractionCreateWithoutActorInput = {
    id?: string
    institutionId: string
    roleContext: string
    classId?: string | null
    courseworkId?: string | null
    prompt: string
    response?: string | null
    createdAt?: Date | string
  }

  export type AIInteractionUncheckedCreateWithoutActorInput = {
    id?: string
    institutionId: string
    roleContext: string
    classId?: string | null
    courseworkId?: string | null
    prompt: string
    response?: string | null
    createdAt?: Date | string
  }

  export type AIInteractionCreateOrConnectWithoutActorInput = {
    where: AIInteractionWhereUniqueInput
    create: XOR<AIInteractionCreateWithoutActorInput, AIInteractionUncheckedCreateWithoutActorInput>
  }

  export type AIInteractionCreateManyActorInputEnvelope = {
    data: AIInteractionCreateManyActorInput | AIInteractionCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type InstitutionUpsertWithoutUsersInput = {
    update: XOR<InstitutionUpdateWithoutUsersInput, InstitutionUncheckedUpdateWithoutUsersInput>
    create: XOR<InstitutionCreateWithoutUsersInput, InstitutionUncheckedCreateWithoutUsersInput>
    where?: InstitutionWhereInput
  }

  export type InstitutionUpdateToOneWithWhereWithoutUsersInput = {
    where?: InstitutionWhereInput
    data: XOR<InstitutionUpdateWithoutUsersInput, InstitutionUncheckedUpdateWithoutUsersInput>
  }

  export type InstitutionUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type ClassUpsertWithWhereUniqueWithoutEducatorInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutEducatorInput, ClassUncheckedUpdateWithoutEducatorInput>
    create: XOR<ClassCreateWithoutEducatorInput, ClassUncheckedCreateWithoutEducatorInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutEducatorInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutEducatorInput, ClassUncheckedUpdateWithoutEducatorInput>
  }

  export type ClassUpdateManyWithWhereWithoutEducatorInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutEducatorInput>
  }

  export type SubmissionUpsertWithWhereUniqueWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutStudentInput, SubmissionUncheckedUpdateWithoutStudentInput>
    create: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutStudentInput, SubmissionUncheckedUpdateWithoutStudentInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutStudentInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutStudentInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    courseworkId?: StringFilter<"Submission"> | string
    studentId?: StringFilter<"Submission"> | string
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    storageKey?: StringNullableFilter<"Submission"> | string | null
    fileName?: StringNullableFilter<"Submission"> | string | null
    mimeType?: StringNullableFilter<"Submission"> | string | null
    fileSizeBytes?: IntNullableFilter<"Submission"> | number | null
    gradeScore?: IntNullableFilter<"Submission"> | number | null
    feedbackText?: StringNullableFilter<"Submission"> | string | null
    submittedAt?: DateTimeNullableFilter<"Submission"> | Date | string | null
    gradedAt?: DateTimeNullableFilter<"Submission"> | Date | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type OfficeHourBookingUpsertWithWhereUniqueWithoutStudentInput = {
    where: OfficeHourBookingWhereUniqueInput
    update: XOR<OfficeHourBookingUpdateWithoutStudentInput, OfficeHourBookingUncheckedUpdateWithoutStudentInput>
    create: XOR<OfficeHourBookingCreateWithoutStudentInput, OfficeHourBookingUncheckedCreateWithoutStudentInput>
  }

  export type OfficeHourBookingUpdateWithWhereUniqueWithoutStudentInput = {
    where: OfficeHourBookingWhereUniqueInput
    data: XOR<OfficeHourBookingUpdateWithoutStudentInput, OfficeHourBookingUncheckedUpdateWithoutStudentInput>
  }

  export type OfficeHourBookingUpdateManyWithWhereWithoutStudentInput = {
    where: OfficeHourBookingScalarWhereInput
    data: XOR<OfficeHourBookingUpdateManyMutationInput, OfficeHourBookingUncheckedUpdateManyWithoutStudentInput>
  }

  export type OfficeHourBookingScalarWhereInput = {
    AND?: OfficeHourBookingScalarWhereInput | OfficeHourBookingScalarWhereInput[]
    OR?: OfficeHourBookingScalarWhereInput[]
    NOT?: OfficeHourBookingScalarWhereInput | OfficeHourBookingScalarWhereInput[]
    id?: StringFilter<"OfficeHourBooking"> | string
    officeHourSlotId?: StringFilter<"OfficeHourBooking"> | string
    studentId?: StringFilter<"OfficeHourBooking"> | string
    topic?: StringNullableFilter<"OfficeHourBooking"> | string | null
    status?: EnumBookingStatusFilter<"OfficeHourBooking"> | $Enums.BookingStatus
    bookedAt?: DateTimeFilter<"OfficeHourBooking"> | Date | string
  }

  export type OfficeHourSlotUpsertWithWhereUniqueWithoutEducatorInput = {
    where: OfficeHourSlotWhereUniqueInput
    update: XOR<OfficeHourSlotUpdateWithoutEducatorInput, OfficeHourSlotUncheckedUpdateWithoutEducatorInput>
    create: XOR<OfficeHourSlotCreateWithoutEducatorInput, OfficeHourSlotUncheckedCreateWithoutEducatorInput>
  }

  export type OfficeHourSlotUpdateWithWhereUniqueWithoutEducatorInput = {
    where: OfficeHourSlotWhereUniqueInput
    data: XOR<OfficeHourSlotUpdateWithoutEducatorInput, OfficeHourSlotUncheckedUpdateWithoutEducatorInput>
  }

  export type OfficeHourSlotUpdateManyWithWhereWithoutEducatorInput = {
    where: OfficeHourSlotScalarWhereInput
    data: XOR<OfficeHourSlotUpdateManyMutationInput, OfficeHourSlotUncheckedUpdateManyWithoutEducatorInput>
  }

  export type OfficeHourSlotScalarWhereInput = {
    AND?: OfficeHourSlotScalarWhereInput | OfficeHourSlotScalarWhereInput[]
    OR?: OfficeHourSlotScalarWhereInput[]
    NOT?: OfficeHourSlotScalarWhereInput | OfficeHourSlotScalarWhereInput[]
    id?: StringFilter<"OfficeHourSlot"> | string
    classId?: StringFilter<"OfficeHourSlot"> | string
    educatorId?: StringFilter<"OfficeHourSlot"> | string
    startsAt?: DateTimeFilter<"OfficeHourSlot"> | Date | string
    endsAt?: DateTimeFilter<"OfficeHourSlot"> | Date | string
    location?: StringFilter<"OfficeHourSlot"> | string
    mode?: StringFilter<"OfficeHourSlot"> | string
    createdAt?: DateTimeFilter<"OfficeHourSlot"> | Date | string
  }

  export type AuditEventUpsertWithWhereUniqueWithoutActorInput = {
    where: AuditEventWhereUniqueInput
    update: XOR<AuditEventUpdateWithoutActorInput, AuditEventUncheckedUpdateWithoutActorInput>
    create: XOR<AuditEventCreateWithoutActorInput, AuditEventUncheckedCreateWithoutActorInput>
  }

  export type AuditEventUpdateWithWhereUniqueWithoutActorInput = {
    where: AuditEventWhereUniqueInput
    data: XOR<AuditEventUpdateWithoutActorInput, AuditEventUncheckedUpdateWithoutActorInput>
  }

  export type AuditEventUpdateManyWithWhereWithoutActorInput = {
    where: AuditEventScalarWhereInput
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyWithoutActorInput>
  }

  export type AuditEventScalarWhereInput = {
    AND?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
    OR?: AuditEventScalarWhereInput[]
    NOT?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
    id?: StringFilter<"AuditEvent"> | string
    institutionId?: StringFilter<"AuditEvent"> | string
    actorUserId?: StringFilter<"AuditEvent"> | string
    action?: StringFilter<"AuditEvent"> | string
    entityType?: StringFilter<"AuditEvent"> | string
    entityId?: StringFilter<"AuditEvent"> | string
    payload?: JsonNullableFilter<"AuditEvent">
    createdAt?: DateTimeFilter<"AuditEvent"> | Date | string
  }

  export type AIInteractionUpsertWithWhereUniqueWithoutActorInput = {
    where: AIInteractionWhereUniqueInput
    update: XOR<AIInteractionUpdateWithoutActorInput, AIInteractionUncheckedUpdateWithoutActorInput>
    create: XOR<AIInteractionCreateWithoutActorInput, AIInteractionUncheckedCreateWithoutActorInput>
  }

  export type AIInteractionUpdateWithWhereUniqueWithoutActorInput = {
    where: AIInteractionWhereUniqueInput
    data: XOR<AIInteractionUpdateWithoutActorInput, AIInteractionUncheckedUpdateWithoutActorInput>
  }

  export type AIInteractionUpdateManyWithWhereWithoutActorInput = {
    where: AIInteractionScalarWhereInput
    data: XOR<AIInteractionUpdateManyMutationInput, AIInteractionUncheckedUpdateManyWithoutActorInput>
  }

  export type AIInteractionScalarWhereInput = {
    AND?: AIInteractionScalarWhereInput | AIInteractionScalarWhereInput[]
    OR?: AIInteractionScalarWhereInput[]
    NOT?: AIInteractionScalarWhereInput | AIInteractionScalarWhereInput[]
    id?: StringFilter<"AIInteraction"> | string
    institutionId?: StringFilter<"AIInteraction"> | string
    actorUserId?: StringFilter<"AIInteraction"> | string
    roleContext?: StringFilter<"AIInteraction"> | string
    classId?: StringNullableFilter<"AIInteraction"> | string | null
    courseworkId?: StringNullableFilter<"AIInteraction"> | string | null
    prompt?: StringFilter<"AIInteraction"> | string
    response?: StringNullableFilter<"AIInteraction"> | string | null
    createdAt?: DateTimeFilter<"AIInteraction"> | Date | string
  }

  export type InstitutionCreateWithoutClassesInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateWithoutClassesInput = {
    id?: string
    name: string
    slug: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionCreateOrConnectWithoutClassesInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutClassesInput, InstitutionUncheckedCreateWithoutClassesInput>
  }

  export type UserCreateWithoutTaughtClassesInput = {
    id?: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt?: Date | string
    updatedAt?: Date | string
    institution: InstitutionCreateNestedOneWithoutUsersInput
    submissions?: SubmissionCreateNestedManyWithoutStudentInput
    officeHourBookings?: OfficeHourBookingCreateNestedManyWithoutStudentInput
    createdOfficeHourSlots?: OfficeHourSlotCreateNestedManyWithoutEducatorInput
    auditEvents?: AuditEventCreateNestedManyWithoutActorInput
    aiInteractions?: AIInteractionCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutTaughtClassesInput = {
    id?: string
    institutionId: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    officeHourBookings?: OfficeHourBookingUncheckedCreateNestedManyWithoutStudentInput
    createdOfficeHourSlots?: OfficeHourSlotUncheckedCreateNestedManyWithoutEducatorInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActorInput
    aiInteractions?: AIInteractionUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutTaughtClassesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaughtClassesInput, UserUncheckedCreateWithoutTaughtClassesInput>
  }

  export type CourseworkCreateWithoutClassInput = {
    id?: string
    title: string
    kind: $Enums.CourseworkKind
    description?: string | null
    topic?: string | null
    dueAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    resources?: ResourceCreateNestedManyWithoutCourseworkInput
    submissions?: SubmissionCreateNestedManyWithoutCourseworkInput
  }

  export type CourseworkUncheckedCreateWithoutClassInput = {
    id?: string
    title: string
    kind: $Enums.CourseworkKind
    description?: string | null
    topic?: string | null
    dueAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    resources?: ResourceUncheckedCreateNestedManyWithoutCourseworkInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutCourseworkInput
  }

  export type CourseworkCreateOrConnectWithoutClassInput = {
    where: CourseworkWhereUniqueInput
    create: XOR<CourseworkCreateWithoutClassInput, CourseworkUncheckedCreateWithoutClassInput>
  }

  export type CourseworkCreateManyClassInputEnvelope = {
    data: CourseworkCreateManyClassInput | CourseworkCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type ResourceCreateWithoutClassInput = {
    id?: string
    title: string
    storageKey?: string | null
    externalUrl?: string | null
    createdAt?: Date | string
    coursework?: CourseworkCreateNestedOneWithoutResourcesInput
  }

  export type ResourceUncheckedCreateWithoutClassInput = {
    id?: string
    courseworkId?: string | null
    title: string
    storageKey?: string | null
    externalUrl?: string | null
    createdAt?: Date | string
  }

  export type ResourceCreateOrConnectWithoutClassInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutClassInput, ResourceUncheckedCreateWithoutClassInput>
  }

  export type ResourceCreateManyClassInputEnvelope = {
    data: ResourceCreateManyClassInput | ResourceCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type OfficeHourSlotCreateWithoutClassInput = {
    id?: string
    startsAt: Date | string
    endsAt: Date | string
    location: string
    mode: string
    createdAt?: Date | string
    educator: UserCreateNestedOneWithoutCreatedOfficeHourSlotsInput
    bookings?: OfficeHourBookingCreateNestedManyWithoutOfficeHourSlotInput
  }

  export type OfficeHourSlotUncheckedCreateWithoutClassInput = {
    id?: string
    educatorId: string
    startsAt: Date | string
    endsAt: Date | string
    location: string
    mode: string
    createdAt?: Date | string
    bookings?: OfficeHourBookingUncheckedCreateNestedManyWithoutOfficeHourSlotInput
  }

  export type OfficeHourSlotCreateOrConnectWithoutClassInput = {
    where: OfficeHourSlotWhereUniqueInput
    create: XOR<OfficeHourSlotCreateWithoutClassInput, OfficeHourSlotUncheckedCreateWithoutClassInput>
  }

  export type OfficeHourSlotCreateManyClassInputEnvelope = {
    data: OfficeHourSlotCreateManyClassInput | OfficeHourSlotCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type InstitutionUpsertWithoutClassesInput = {
    update: XOR<InstitutionUpdateWithoutClassesInput, InstitutionUncheckedUpdateWithoutClassesInput>
    create: XOR<InstitutionCreateWithoutClassesInput, InstitutionUncheckedCreateWithoutClassesInput>
    where?: InstitutionWhereInput
  }

  export type InstitutionUpdateToOneWithWhereWithoutClassesInput = {
    where?: InstitutionWhereInput
    data: XOR<InstitutionUpdateWithoutClassesInput, InstitutionUncheckedUpdateWithoutClassesInput>
  }

  export type InstitutionUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type UserUpsertWithoutTaughtClassesInput = {
    update: XOR<UserUpdateWithoutTaughtClassesInput, UserUncheckedUpdateWithoutTaughtClassesInput>
    create: XOR<UserCreateWithoutTaughtClassesInput, UserUncheckedCreateWithoutTaughtClassesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaughtClassesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaughtClassesInput, UserUncheckedUpdateWithoutTaughtClassesInput>
  }

  export type UserUpdateWithoutTaughtClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionUpdateOneRequiredWithoutUsersNestedInput
    submissions?: SubmissionUpdateManyWithoutStudentNestedInput
    officeHourBookings?: OfficeHourBookingUpdateManyWithoutStudentNestedInput
    createdOfficeHourSlots?: OfficeHourSlotUpdateManyWithoutEducatorNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActorNestedInput
    aiInteractions?: AIInteractionUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutTaughtClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    officeHourBookings?: OfficeHourBookingUncheckedUpdateManyWithoutStudentNestedInput
    createdOfficeHourSlots?: OfficeHourSlotUncheckedUpdateManyWithoutEducatorNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActorNestedInput
    aiInteractions?: AIInteractionUncheckedUpdateManyWithoutActorNestedInput
  }

  export type CourseworkUpsertWithWhereUniqueWithoutClassInput = {
    where: CourseworkWhereUniqueInput
    update: XOR<CourseworkUpdateWithoutClassInput, CourseworkUncheckedUpdateWithoutClassInput>
    create: XOR<CourseworkCreateWithoutClassInput, CourseworkUncheckedCreateWithoutClassInput>
  }

  export type CourseworkUpdateWithWhereUniqueWithoutClassInput = {
    where: CourseworkWhereUniqueInput
    data: XOR<CourseworkUpdateWithoutClassInput, CourseworkUncheckedUpdateWithoutClassInput>
  }

  export type CourseworkUpdateManyWithWhereWithoutClassInput = {
    where: CourseworkScalarWhereInput
    data: XOR<CourseworkUpdateManyMutationInput, CourseworkUncheckedUpdateManyWithoutClassInput>
  }

  export type CourseworkScalarWhereInput = {
    AND?: CourseworkScalarWhereInput | CourseworkScalarWhereInput[]
    OR?: CourseworkScalarWhereInput[]
    NOT?: CourseworkScalarWhereInput | CourseworkScalarWhereInput[]
    id?: StringFilter<"Coursework"> | string
    classId?: StringFilter<"Coursework"> | string
    title?: StringFilter<"Coursework"> | string
    kind?: EnumCourseworkKindFilter<"Coursework"> | $Enums.CourseworkKind
    description?: StringNullableFilter<"Coursework"> | string | null
    topic?: StringNullableFilter<"Coursework"> | string | null
    dueAt?: DateTimeFilter<"Coursework"> | Date | string
    createdAt?: DateTimeFilter<"Coursework"> | Date | string
    updatedAt?: DateTimeFilter<"Coursework"> | Date | string
  }

  export type ResourceUpsertWithWhereUniqueWithoutClassInput = {
    where: ResourceWhereUniqueInput
    update: XOR<ResourceUpdateWithoutClassInput, ResourceUncheckedUpdateWithoutClassInput>
    create: XOR<ResourceCreateWithoutClassInput, ResourceUncheckedCreateWithoutClassInput>
  }

  export type ResourceUpdateWithWhereUniqueWithoutClassInput = {
    where: ResourceWhereUniqueInput
    data: XOR<ResourceUpdateWithoutClassInput, ResourceUncheckedUpdateWithoutClassInput>
  }

  export type ResourceUpdateManyWithWhereWithoutClassInput = {
    where: ResourceScalarWhereInput
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyWithoutClassInput>
  }

  export type ResourceScalarWhereInput = {
    AND?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
    OR?: ResourceScalarWhereInput[]
    NOT?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
    id?: StringFilter<"Resource"> | string
    classId?: StringFilter<"Resource"> | string
    courseworkId?: StringNullableFilter<"Resource"> | string | null
    title?: StringFilter<"Resource"> | string
    storageKey?: StringNullableFilter<"Resource"> | string | null
    externalUrl?: StringNullableFilter<"Resource"> | string | null
    createdAt?: DateTimeFilter<"Resource"> | Date | string
  }

  export type OfficeHourSlotUpsertWithWhereUniqueWithoutClassInput = {
    where: OfficeHourSlotWhereUniqueInput
    update: XOR<OfficeHourSlotUpdateWithoutClassInput, OfficeHourSlotUncheckedUpdateWithoutClassInput>
    create: XOR<OfficeHourSlotCreateWithoutClassInput, OfficeHourSlotUncheckedCreateWithoutClassInput>
  }

  export type OfficeHourSlotUpdateWithWhereUniqueWithoutClassInput = {
    where: OfficeHourSlotWhereUniqueInput
    data: XOR<OfficeHourSlotUpdateWithoutClassInput, OfficeHourSlotUncheckedUpdateWithoutClassInput>
  }

  export type OfficeHourSlotUpdateManyWithWhereWithoutClassInput = {
    where: OfficeHourSlotScalarWhereInput
    data: XOR<OfficeHourSlotUpdateManyMutationInput, OfficeHourSlotUncheckedUpdateManyWithoutClassInput>
  }

  export type ClassCreateWithoutCourseworkItemsInput = {
    id?: string
    code: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institution: InstitutionCreateNestedOneWithoutClassesInput
    educator: UserCreateNestedOneWithoutTaughtClassesInput
    resources?: ResourceCreateNestedManyWithoutClassInput
    officeHourSlots?: OfficeHourSlotCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutCourseworkItemsInput = {
    id?: string
    institutionId: string
    educatorId: string
    code: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resources?: ResourceUncheckedCreateNestedManyWithoutClassInput
    officeHourSlots?: OfficeHourSlotUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutCourseworkItemsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutCourseworkItemsInput, ClassUncheckedCreateWithoutCourseworkItemsInput>
  }

  export type ResourceCreateWithoutCourseworkInput = {
    id?: string
    title: string
    storageKey?: string | null
    externalUrl?: string | null
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutResourcesInput
  }

  export type ResourceUncheckedCreateWithoutCourseworkInput = {
    id?: string
    classId: string
    title: string
    storageKey?: string | null
    externalUrl?: string | null
    createdAt?: Date | string
  }

  export type ResourceCreateOrConnectWithoutCourseworkInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutCourseworkInput, ResourceUncheckedCreateWithoutCourseworkInput>
  }

  export type ResourceCreateManyCourseworkInputEnvelope = {
    data: ResourceCreateManyCourseworkInput | ResourceCreateManyCourseworkInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutCourseworkInput = {
    id?: string
    status?: $Enums.SubmissionStatus
    storageKey?: string | null
    fileName?: string | null
    mimeType?: string | null
    fileSizeBytes?: number | null
    gradeScore?: number | null
    feedbackText?: string | null
    submittedAt?: Date | string | null
    gradedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: UserCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutCourseworkInput = {
    id?: string
    studentId: string
    status?: $Enums.SubmissionStatus
    storageKey?: string | null
    fileName?: string | null
    mimeType?: string | null
    fileSizeBytes?: number | null
    gradeScore?: number | null
    feedbackText?: string | null
    submittedAt?: Date | string | null
    gradedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutCourseworkInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutCourseworkInput, SubmissionUncheckedCreateWithoutCourseworkInput>
  }

  export type SubmissionCreateManyCourseworkInputEnvelope = {
    data: SubmissionCreateManyCourseworkInput | SubmissionCreateManyCourseworkInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithoutCourseworkItemsInput = {
    update: XOR<ClassUpdateWithoutCourseworkItemsInput, ClassUncheckedUpdateWithoutCourseworkItemsInput>
    create: XOR<ClassCreateWithoutCourseworkItemsInput, ClassUncheckedCreateWithoutCourseworkItemsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutCourseworkItemsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutCourseworkItemsInput, ClassUncheckedUpdateWithoutCourseworkItemsInput>
  }

  export type ClassUpdateWithoutCourseworkItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionUpdateOneRequiredWithoutClassesNestedInput
    educator?: UserUpdateOneRequiredWithoutTaughtClassesNestedInput
    resources?: ResourceUpdateManyWithoutClassNestedInput
    officeHourSlots?: OfficeHourSlotUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutCourseworkItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    educatorId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: ResourceUncheckedUpdateManyWithoutClassNestedInput
    officeHourSlots?: OfficeHourSlotUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ResourceUpsertWithWhereUniqueWithoutCourseworkInput = {
    where: ResourceWhereUniqueInput
    update: XOR<ResourceUpdateWithoutCourseworkInput, ResourceUncheckedUpdateWithoutCourseworkInput>
    create: XOR<ResourceCreateWithoutCourseworkInput, ResourceUncheckedCreateWithoutCourseworkInput>
  }

  export type ResourceUpdateWithWhereUniqueWithoutCourseworkInput = {
    where: ResourceWhereUniqueInput
    data: XOR<ResourceUpdateWithoutCourseworkInput, ResourceUncheckedUpdateWithoutCourseworkInput>
  }

  export type ResourceUpdateManyWithWhereWithoutCourseworkInput = {
    where: ResourceScalarWhereInput
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyWithoutCourseworkInput>
  }

  export type SubmissionUpsertWithWhereUniqueWithoutCourseworkInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutCourseworkInput, SubmissionUncheckedUpdateWithoutCourseworkInput>
    create: XOR<SubmissionCreateWithoutCourseworkInput, SubmissionUncheckedCreateWithoutCourseworkInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutCourseworkInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutCourseworkInput, SubmissionUncheckedUpdateWithoutCourseworkInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutCourseworkInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutCourseworkInput>
  }

  export type ClassCreateWithoutResourcesInput = {
    id?: string
    code: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institution: InstitutionCreateNestedOneWithoutClassesInput
    educator: UserCreateNestedOneWithoutTaughtClassesInput
    courseworkItems?: CourseworkCreateNestedManyWithoutClassInput
    officeHourSlots?: OfficeHourSlotCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutResourcesInput = {
    id?: string
    institutionId: string
    educatorId: string
    code: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseworkItems?: CourseworkUncheckedCreateNestedManyWithoutClassInput
    officeHourSlots?: OfficeHourSlotUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutResourcesInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutResourcesInput, ClassUncheckedCreateWithoutResourcesInput>
  }

  export type CourseworkCreateWithoutResourcesInput = {
    id?: string
    title: string
    kind: $Enums.CourseworkKind
    description?: string | null
    topic?: string | null
    dueAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    class: ClassCreateNestedOneWithoutCourseworkItemsInput
    submissions?: SubmissionCreateNestedManyWithoutCourseworkInput
  }

  export type CourseworkUncheckedCreateWithoutResourcesInput = {
    id?: string
    classId: string
    title: string
    kind: $Enums.CourseworkKind
    description?: string | null
    topic?: string | null
    dueAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutCourseworkInput
  }

  export type CourseworkCreateOrConnectWithoutResourcesInput = {
    where: CourseworkWhereUniqueInput
    create: XOR<CourseworkCreateWithoutResourcesInput, CourseworkUncheckedCreateWithoutResourcesInput>
  }

  export type ClassUpsertWithoutResourcesInput = {
    update: XOR<ClassUpdateWithoutResourcesInput, ClassUncheckedUpdateWithoutResourcesInput>
    create: XOR<ClassCreateWithoutResourcesInput, ClassUncheckedCreateWithoutResourcesInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutResourcesInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutResourcesInput, ClassUncheckedUpdateWithoutResourcesInput>
  }

  export type ClassUpdateWithoutResourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionUpdateOneRequiredWithoutClassesNestedInput
    educator?: UserUpdateOneRequiredWithoutTaughtClassesNestedInput
    courseworkItems?: CourseworkUpdateManyWithoutClassNestedInput
    officeHourSlots?: OfficeHourSlotUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutResourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    educatorId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseworkItems?: CourseworkUncheckedUpdateManyWithoutClassNestedInput
    officeHourSlots?: OfficeHourSlotUncheckedUpdateManyWithoutClassNestedInput
  }

  export type CourseworkUpsertWithoutResourcesInput = {
    update: XOR<CourseworkUpdateWithoutResourcesInput, CourseworkUncheckedUpdateWithoutResourcesInput>
    create: XOR<CourseworkCreateWithoutResourcesInput, CourseworkUncheckedCreateWithoutResourcesInput>
    where?: CourseworkWhereInput
  }

  export type CourseworkUpdateToOneWithWhereWithoutResourcesInput = {
    where?: CourseworkWhereInput
    data: XOR<CourseworkUpdateWithoutResourcesInput, CourseworkUncheckedUpdateWithoutResourcesInput>
  }

  export type CourseworkUpdateWithoutResourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    kind?: EnumCourseworkKindFieldUpdateOperationsInput | $Enums.CourseworkKind
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    dueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutCourseworkItemsNestedInput
    submissions?: SubmissionUpdateManyWithoutCourseworkNestedInput
  }

  export type CourseworkUncheckedUpdateWithoutResourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    kind?: EnumCourseworkKindFieldUpdateOperationsInput | $Enums.CourseworkKind
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    dueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutCourseworkNestedInput
  }

  export type CourseworkCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    kind: $Enums.CourseworkKind
    description?: string | null
    topic?: string | null
    dueAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    class: ClassCreateNestedOneWithoutCourseworkItemsInput
    resources?: ResourceCreateNestedManyWithoutCourseworkInput
  }

  export type CourseworkUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    classId: string
    title: string
    kind: $Enums.CourseworkKind
    description?: string | null
    topic?: string | null
    dueAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    resources?: ResourceUncheckedCreateNestedManyWithoutCourseworkInput
  }

  export type CourseworkCreateOrConnectWithoutSubmissionsInput = {
    where: CourseworkWhereUniqueInput
    create: XOR<CourseworkCreateWithoutSubmissionsInput, CourseworkUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt?: Date | string
    updatedAt?: Date | string
    institution: InstitutionCreateNestedOneWithoutUsersInput
    taughtClasses?: ClassCreateNestedManyWithoutEducatorInput
    officeHourBookings?: OfficeHourBookingCreateNestedManyWithoutStudentInput
    createdOfficeHourSlots?: OfficeHourSlotCreateNestedManyWithoutEducatorInput
    auditEvents?: AuditEventCreateNestedManyWithoutActorInput
    aiInteractions?: AIInteractionCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    institutionId: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassUncheckedCreateNestedManyWithoutEducatorInput
    officeHourBookings?: OfficeHourBookingUncheckedCreateNestedManyWithoutStudentInput
    createdOfficeHourSlots?: OfficeHourSlotUncheckedCreateNestedManyWithoutEducatorInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActorInput
    aiInteractions?: AIInteractionUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type CourseworkUpsertWithoutSubmissionsInput = {
    update: XOR<CourseworkUpdateWithoutSubmissionsInput, CourseworkUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<CourseworkCreateWithoutSubmissionsInput, CourseworkUncheckedCreateWithoutSubmissionsInput>
    where?: CourseworkWhereInput
  }

  export type CourseworkUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: CourseworkWhereInput
    data: XOR<CourseworkUpdateWithoutSubmissionsInput, CourseworkUncheckedUpdateWithoutSubmissionsInput>
  }

  export type CourseworkUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    kind?: EnumCourseworkKindFieldUpdateOperationsInput | $Enums.CourseworkKind
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    dueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutCourseworkItemsNestedInput
    resources?: ResourceUpdateManyWithoutCourseworkNestedInput
  }

  export type CourseworkUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    kind?: EnumCourseworkKindFieldUpdateOperationsInput | $Enums.CourseworkKind
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    dueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: ResourceUncheckedUpdateManyWithoutCourseworkNestedInput
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionUpdateOneRequiredWithoutUsersNestedInput
    taughtClasses?: ClassUpdateManyWithoutEducatorNestedInput
    officeHourBookings?: OfficeHourBookingUpdateManyWithoutStudentNestedInput
    createdOfficeHourSlots?: OfficeHourSlotUpdateManyWithoutEducatorNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActorNestedInput
    aiInteractions?: AIInteractionUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUncheckedUpdateManyWithoutEducatorNestedInput
    officeHourBookings?: OfficeHourBookingUncheckedUpdateManyWithoutStudentNestedInput
    createdOfficeHourSlots?: OfficeHourSlotUncheckedUpdateManyWithoutEducatorNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActorNestedInput
    aiInteractions?: AIInteractionUncheckedUpdateManyWithoutActorNestedInput
  }

  export type ClassCreateWithoutOfficeHourSlotsInput = {
    id?: string
    code: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    institution: InstitutionCreateNestedOneWithoutClassesInput
    educator: UserCreateNestedOneWithoutTaughtClassesInput
    courseworkItems?: CourseworkCreateNestedManyWithoutClassInput
    resources?: ResourceCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutOfficeHourSlotsInput = {
    id?: string
    institutionId: string
    educatorId: string
    code: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseworkItems?: CourseworkUncheckedCreateNestedManyWithoutClassInput
    resources?: ResourceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutOfficeHourSlotsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutOfficeHourSlotsInput, ClassUncheckedCreateWithoutOfficeHourSlotsInput>
  }

  export type UserCreateWithoutCreatedOfficeHourSlotsInput = {
    id?: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt?: Date | string
    updatedAt?: Date | string
    institution: InstitutionCreateNestedOneWithoutUsersInput
    taughtClasses?: ClassCreateNestedManyWithoutEducatorInput
    submissions?: SubmissionCreateNestedManyWithoutStudentInput
    officeHourBookings?: OfficeHourBookingCreateNestedManyWithoutStudentInput
    auditEvents?: AuditEventCreateNestedManyWithoutActorInput
    aiInteractions?: AIInteractionCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutCreatedOfficeHourSlotsInput = {
    id?: string
    institutionId: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassUncheckedCreateNestedManyWithoutEducatorInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    officeHourBookings?: OfficeHourBookingUncheckedCreateNestedManyWithoutStudentInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActorInput
    aiInteractions?: AIInteractionUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutCreatedOfficeHourSlotsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedOfficeHourSlotsInput, UserUncheckedCreateWithoutCreatedOfficeHourSlotsInput>
  }

  export type OfficeHourBookingCreateWithoutOfficeHourSlotInput = {
    id?: string
    topic?: string | null
    status?: $Enums.BookingStatus
    bookedAt?: Date | string
    student: UserCreateNestedOneWithoutOfficeHourBookingsInput
  }

  export type OfficeHourBookingUncheckedCreateWithoutOfficeHourSlotInput = {
    id?: string
    studentId: string
    topic?: string | null
    status?: $Enums.BookingStatus
    bookedAt?: Date | string
  }

  export type OfficeHourBookingCreateOrConnectWithoutOfficeHourSlotInput = {
    where: OfficeHourBookingWhereUniqueInput
    create: XOR<OfficeHourBookingCreateWithoutOfficeHourSlotInput, OfficeHourBookingUncheckedCreateWithoutOfficeHourSlotInput>
  }

  export type OfficeHourBookingCreateManyOfficeHourSlotInputEnvelope = {
    data: OfficeHourBookingCreateManyOfficeHourSlotInput | OfficeHourBookingCreateManyOfficeHourSlotInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithoutOfficeHourSlotsInput = {
    update: XOR<ClassUpdateWithoutOfficeHourSlotsInput, ClassUncheckedUpdateWithoutOfficeHourSlotsInput>
    create: XOR<ClassCreateWithoutOfficeHourSlotsInput, ClassUncheckedCreateWithoutOfficeHourSlotsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutOfficeHourSlotsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutOfficeHourSlotsInput, ClassUncheckedUpdateWithoutOfficeHourSlotsInput>
  }

  export type ClassUpdateWithoutOfficeHourSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionUpdateOneRequiredWithoutClassesNestedInput
    educator?: UserUpdateOneRequiredWithoutTaughtClassesNestedInput
    courseworkItems?: CourseworkUpdateManyWithoutClassNestedInput
    resources?: ResourceUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutOfficeHourSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    educatorId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseworkItems?: CourseworkUncheckedUpdateManyWithoutClassNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutClassNestedInput
  }

  export type UserUpsertWithoutCreatedOfficeHourSlotsInput = {
    update: XOR<UserUpdateWithoutCreatedOfficeHourSlotsInput, UserUncheckedUpdateWithoutCreatedOfficeHourSlotsInput>
    create: XOR<UserCreateWithoutCreatedOfficeHourSlotsInput, UserUncheckedCreateWithoutCreatedOfficeHourSlotsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedOfficeHourSlotsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedOfficeHourSlotsInput, UserUncheckedUpdateWithoutCreatedOfficeHourSlotsInput>
  }

  export type UserUpdateWithoutCreatedOfficeHourSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionUpdateOneRequiredWithoutUsersNestedInput
    taughtClasses?: ClassUpdateManyWithoutEducatorNestedInput
    submissions?: SubmissionUpdateManyWithoutStudentNestedInput
    officeHourBookings?: OfficeHourBookingUpdateManyWithoutStudentNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActorNestedInput
    aiInteractions?: AIInteractionUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedOfficeHourSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUncheckedUpdateManyWithoutEducatorNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    officeHourBookings?: OfficeHourBookingUncheckedUpdateManyWithoutStudentNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActorNestedInput
    aiInteractions?: AIInteractionUncheckedUpdateManyWithoutActorNestedInput
  }

  export type OfficeHourBookingUpsertWithWhereUniqueWithoutOfficeHourSlotInput = {
    where: OfficeHourBookingWhereUniqueInput
    update: XOR<OfficeHourBookingUpdateWithoutOfficeHourSlotInput, OfficeHourBookingUncheckedUpdateWithoutOfficeHourSlotInput>
    create: XOR<OfficeHourBookingCreateWithoutOfficeHourSlotInput, OfficeHourBookingUncheckedCreateWithoutOfficeHourSlotInput>
  }

  export type OfficeHourBookingUpdateWithWhereUniqueWithoutOfficeHourSlotInput = {
    where: OfficeHourBookingWhereUniqueInput
    data: XOR<OfficeHourBookingUpdateWithoutOfficeHourSlotInput, OfficeHourBookingUncheckedUpdateWithoutOfficeHourSlotInput>
  }

  export type OfficeHourBookingUpdateManyWithWhereWithoutOfficeHourSlotInput = {
    where: OfficeHourBookingScalarWhereInput
    data: XOR<OfficeHourBookingUpdateManyMutationInput, OfficeHourBookingUncheckedUpdateManyWithoutOfficeHourSlotInput>
  }

  export type OfficeHourSlotCreateWithoutBookingsInput = {
    id?: string
    startsAt: Date | string
    endsAt: Date | string
    location: string
    mode: string
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutOfficeHourSlotsInput
    educator: UserCreateNestedOneWithoutCreatedOfficeHourSlotsInput
  }

  export type OfficeHourSlotUncheckedCreateWithoutBookingsInput = {
    id?: string
    classId: string
    educatorId: string
    startsAt: Date | string
    endsAt: Date | string
    location: string
    mode: string
    createdAt?: Date | string
  }

  export type OfficeHourSlotCreateOrConnectWithoutBookingsInput = {
    where: OfficeHourSlotWhereUniqueInput
    create: XOR<OfficeHourSlotCreateWithoutBookingsInput, OfficeHourSlotUncheckedCreateWithoutBookingsInput>
  }

  export type UserCreateWithoutOfficeHourBookingsInput = {
    id?: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt?: Date | string
    updatedAt?: Date | string
    institution: InstitutionCreateNestedOneWithoutUsersInput
    taughtClasses?: ClassCreateNestedManyWithoutEducatorInput
    submissions?: SubmissionCreateNestedManyWithoutStudentInput
    createdOfficeHourSlots?: OfficeHourSlotCreateNestedManyWithoutEducatorInput
    auditEvents?: AuditEventCreateNestedManyWithoutActorInput
    aiInteractions?: AIInteractionCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutOfficeHourBookingsInput = {
    id?: string
    institutionId: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassUncheckedCreateNestedManyWithoutEducatorInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    createdOfficeHourSlots?: OfficeHourSlotUncheckedCreateNestedManyWithoutEducatorInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActorInput
    aiInteractions?: AIInteractionUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutOfficeHourBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOfficeHourBookingsInput, UserUncheckedCreateWithoutOfficeHourBookingsInput>
  }

  export type OfficeHourSlotUpsertWithoutBookingsInput = {
    update: XOR<OfficeHourSlotUpdateWithoutBookingsInput, OfficeHourSlotUncheckedUpdateWithoutBookingsInput>
    create: XOR<OfficeHourSlotCreateWithoutBookingsInput, OfficeHourSlotUncheckedCreateWithoutBookingsInput>
    where?: OfficeHourSlotWhereInput
  }

  export type OfficeHourSlotUpdateToOneWithWhereWithoutBookingsInput = {
    where?: OfficeHourSlotWhereInput
    data: XOR<OfficeHourSlotUpdateWithoutBookingsInput, OfficeHourSlotUncheckedUpdateWithoutBookingsInput>
  }

  export type OfficeHourSlotUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutOfficeHourSlotsNestedInput
    educator?: UserUpdateOneRequiredWithoutCreatedOfficeHourSlotsNestedInput
  }

  export type OfficeHourSlotUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    educatorId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutOfficeHourBookingsInput = {
    update: XOR<UserUpdateWithoutOfficeHourBookingsInput, UserUncheckedUpdateWithoutOfficeHourBookingsInput>
    create: XOR<UserCreateWithoutOfficeHourBookingsInput, UserUncheckedCreateWithoutOfficeHourBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOfficeHourBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOfficeHourBookingsInput, UserUncheckedUpdateWithoutOfficeHourBookingsInput>
  }

  export type UserUpdateWithoutOfficeHourBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionUpdateOneRequiredWithoutUsersNestedInput
    taughtClasses?: ClassUpdateManyWithoutEducatorNestedInput
    submissions?: SubmissionUpdateManyWithoutStudentNestedInput
    createdOfficeHourSlots?: OfficeHourSlotUpdateManyWithoutEducatorNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActorNestedInput
    aiInteractions?: AIInteractionUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutOfficeHourBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUncheckedUpdateManyWithoutEducatorNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    createdOfficeHourSlots?: OfficeHourSlotUncheckedUpdateManyWithoutEducatorNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActorNestedInput
    aiInteractions?: AIInteractionUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateWithoutAuditEventsInput = {
    id?: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt?: Date | string
    updatedAt?: Date | string
    institution: InstitutionCreateNestedOneWithoutUsersInput
    taughtClasses?: ClassCreateNestedManyWithoutEducatorInput
    submissions?: SubmissionCreateNestedManyWithoutStudentInput
    officeHourBookings?: OfficeHourBookingCreateNestedManyWithoutStudentInput
    createdOfficeHourSlots?: OfficeHourSlotCreateNestedManyWithoutEducatorInput
    aiInteractions?: AIInteractionCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutAuditEventsInput = {
    id?: string
    institutionId: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassUncheckedCreateNestedManyWithoutEducatorInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    officeHourBookings?: OfficeHourBookingUncheckedCreateNestedManyWithoutStudentInput
    createdOfficeHourSlots?: OfficeHourSlotUncheckedCreateNestedManyWithoutEducatorInput
    aiInteractions?: AIInteractionUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutAuditEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditEventsInput, UserUncheckedCreateWithoutAuditEventsInput>
  }

  export type UserUpsertWithoutAuditEventsInput = {
    update: XOR<UserUpdateWithoutAuditEventsInput, UserUncheckedUpdateWithoutAuditEventsInput>
    create: XOR<UserCreateWithoutAuditEventsInput, UserUncheckedCreateWithoutAuditEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditEventsInput, UserUncheckedUpdateWithoutAuditEventsInput>
  }

  export type UserUpdateWithoutAuditEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionUpdateOneRequiredWithoutUsersNestedInput
    taughtClasses?: ClassUpdateManyWithoutEducatorNestedInput
    submissions?: SubmissionUpdateManyWithoutStudentNestedInput
    officeHourBookings?: OfficeHourBookingUpdateManyWithoutStudentNestedInput
    createdOfficeHourSlots?: OfficeHourSlotUpdateManyWithoutEducatorNestedInput
    aiInteractions?: AIInteractionUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUncheckedUpdateManyWithoutEducatorNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    officeHourBookings?: OfficeHourBookingUncheckedUpdateManyWithoutStudentNestedInput
    createdOfficeHourSlots?: OfficeHourSlotUncheckedUpdateManyWithoutEducatorNestedInput
    aiInteractions?: AIInteractionUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateWithoutAiInteractionsInput = {
    id?: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt?: Date | string
    updatedAt?: Date | string
    institution: InstitutionCreateNestedOneWithoutUsersInput
    taughtClasses?: ClassCreateNestedManyWithoutEducatorInput
    submissions?: SubmissionCreateNestedManyWithoutStudentInput
    officeHourBookings?: OfficeHourBookingCreateNestedManyWithoutStudentInput
    createdOfficeHourSlots?: OfficeHourSlotCreateNestedManyWithoutEducatorInput
    auditEvents?: AuditEventCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutAiInteractionsInput = {
    id?: string
    institutionId: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt?: Date | string
    updatedAt?: Date | string
    taughtClasses?: ClassUncheckedCreateNestedManyWithoutEducatorInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    officeHourBookings?: OfficeHourBookingUncheckedCreateNestedManyWithoutStudentInput
    createdOfficeHourSlots?: OfficeHourSlotUncheckedCreateNestedManyWithoutEducatorInput
    auditEvents?: AuditEventUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutAiInteractionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiInteractionsInput, UserUncheckedCreateWithoutAiInteractionsInput>
  }

  export type UserUpsertWithoutAiInteractionsInput = {
    update: XOR<UserUpdateWithoutAiInteractionsInput, UserUncheckedUpdateWithoutAiInteractionsInput>
    create: XOR<UserCreateWithoutAiInteractionsInput, UserUncheckedCreateWithoutAiInteractionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAiInteractionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAiInteractionsInput, UserUncheckedUpdateWithoutAiInteractionsInput>
  }

  export type UserUpdateWithoutAiInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionUpdateOneRequiredWithoutUsersNestedInput
    taughtClasses?: ClassUpdateManyWithoutEducatorNestedInput
    submissions?: SubmissionUpdateManyWithoutStudentNestedInput
    officeHourBookings?: OfficeHourBookingUpdateManyWithoutStudentNestedInput
    createdOfficeHourSlots?: OfficeHourSlotUpdateManyWithoutEducatorNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutAiInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUncheckedUpdateManyWithoutEducatorNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    officeHourBookings?: OfficeHourBookingUncheckedUpdateManyWithoutStudentNestedInput
    createdOfficeHourSlots?: OfficeHourSlotUncheckedUpdateManyWithoutEducatorNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateManyInstitutionInput = {
    id?: string
    email: string
    fullName: string
    role: $Enums.AppRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassCreateManyInstitutionInput = {
    id?: string
    educatorId: string
    code: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUpdateManyWithoutEducatorNestedInput
    submissions?: SubmissionUpdateManyWithoutStudentNestedInput
    officeHourBookings?: OfficeHourBookingUpdateManyWithoutStudentNestedInput
    createdOfficeHourSlots?: OfficeHourSlotUpdateManyWithoutEducatorNestedInput
    auditEvents?: AuditEventUpdateManyWithoutActorNestedInput
    aiInteractions?: AIInteractionUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taughtClasses?: ClassUncheckedUpdateManyWithoutEducatorNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    officeHourBookings?: OfficeHourBookingUncheckedUpdateManyWithoutStudentNestedInput
    createdOfficeHourSlots?: OfficeHourSlotUncheckedUpdateManyWithoutEducatorNestedInput
    auditEvents?: AuditEventUncheckedUpdateManyWithoutActorNestedInput
    aiInteractions?: AIInteractionUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educator?: UserUpdateOneRequiredWithoutTaughtClassesNestedInput
    courseworkItems?: CourseworkUpdateManyWithoutClassNestedInput
    resources?: ResourceUpdateManyWithoutClassNestedInput
    officeHourSlots?: OfficeHourSlotUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    educatorId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseworkItems?: CourseworkUncheckedUpdateManyWithoutClassNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutClassNestedInput
    officeHourSlots?: OfficeHourSlotUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    educatorId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassCreateManyEducatorInput = {
    id?: string
    institutionId: string
    code: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateManyStudentInput = {
    id?: string
    courseworkId: string
    status?: $Enums.SubmissionStatus
    storageKey?: string | null
    fileName?: string | null
    mimeType?: string | null
    fileSizeBytes?: number | null
    gradeScore?: number | null
    feedbackText?: string | null
    submittedAt?: Date | string | null
    gradedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfficeHourBookingCreateManyStudentInput = {
    id?: string
    officeHourSlotId: string
    topic?: string | null
    status?: $Enums.BookingStatus
    bookedAt?: Date | string
  }

  export type OfficeHourSlotCreateManyEducatorInput = {
    id?: string
    classId: string
    startsAt: Date | string
    endsAt: Date | string
    location: string
    mode: string
    createdAt?: Date | string
  }

  export type AuditEventCreateManyActorInput = {
    id?: string
    institutionId: string
    action: string
    entityType: string
    entityId: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AIInteractionCreateManyActorInput = {
    id?: string
    institutionId: string
    roleContext: string
    classId?: string | null
    courseworkId?: string | null
    prompt: string
    response?: string | null
    createdAt?: Date | string
  }

  export type ClassUpdateWithoutEducatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    institution?: InstitutionUpdateOneRequiredWithoutClassesNestedInput
    courseworkItems?: CourseworkUpdateManyWithoutClassNestedInput
    resources?: ResourceUpdateManyWithoutClassNestedInput
    officeHourSlots?: OfficeHourSlotUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutEducatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseworkItems?: CourseworkUncheckedUpdateManyWithoutClassNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutClassNestedInput
    officeHourSlots?: OfficeHourSlotUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutEducatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    gradeScore?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coursework?: CourseworkUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseworkId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    gradeScore?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseworkId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    gradeScore?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHourBookingUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    officeHourSlot?: OfficeHourSlotUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type OfficeHourBookingUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    officeHourSlotId?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHourBookingUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    officeHourSlotId?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHourSlotUpdateWithoutEducatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutOfficeHourSlotsNestedInput
    bookings?: OfficeHourBookingUpdateManyWithoutOfficeHourSlotNestedInput
  }

  export type OfficeHourSlotUncheckedUpdateWithoutEducatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: OfficeHourBookingUncheckedUpdateManyWithoutOfficeHourSlotNestedInput
  }

  export type OfficeHourSlotUncheckedUpdateManyWithoutEducatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInteractionUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    roleContext?: StringFieldUpdateOperationsInput | string
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    courseworkId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInteractionUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    roleContext?: StringFieldUpdateOperationsInput | string
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    courseworkId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInteractionUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
    roleContext?: StringFieldUpdateOperationsInput | string
    classId?: NullableStringFieldUpdateOperationsInput | string | null
    courseworkId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseworkCreateManyClassInput = {
    id?: string
    title: string
    kind: $Enums.CourseworkKind
    description?: string | null
    topic?: string | null
    dueAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResourceCreateManyClassInput = {
    id?: string
    courseworkId?: string | null
    title: string
    storageKey?: string | null
    externalUrl?: string | null
    createdAt?: Date | string
  }

  export type OfficeHourSlotCreateManyClassInput = {
    id?: string
    educatorId: string
    startsAt: Date | string
    endsAt: Date | string
    location: string
    mode: string
    createdAt?: Date | string
  }

  export type CourseworkUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    kind?: EnumCourseworkKindFieldUpdateOperationsInput | $Enums.CourseworkKind
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    dueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: ResourceUpdateManyWithoutCourseworkNestedInput
    submissions?: SubmissionUpdateManyWithoutCourseworkNestedInput
  }

  export type CourseworkUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    kind?: EnumCourseworkKindFieldUpdateOperationsInput | $Enums.CourseworkKind
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    dueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: ResourceUncheckedUpdateManyWithoutCourseworkNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutCourseworkNestedInput
  }

  export type CourseworkUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    kind?: EnumCourseworkKindFieldUpdateOperationsInput | $Enums.CourseworkKind
    description?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    dueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coursework?: CourseworkUpdateOneWithoutResourcesNestedInput
  }

  export type ResourceUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseworkId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseworkId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHourSlotUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educator?: UserUpdateOneRequiredWithoutCreatedOfficeHourSlotsNestedInput
    bookings?: OfficeHourBookingUpdateManyWithoutOfficeHourSlotNestedInput
  }

  export type OfficeHourSlotUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    educatorId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: OfficeHourBookingUncheckedUpdateManyWithoutOfficeHourSlotNestedInput
  }

  export type OfficeHourSlotUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    educatorId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceCreateManyCourseworkInput = {
    id?: string
    classId: string
    title: string
    storageKey?: string | null
    externalUrl?: string | null
    createdAt?: Date | string
  }

  export type SubmissionCreateManyCourseworkInput = {
    id?: string
    studentId: string
    status?: $Enums.SubmissionStatus
    storageKey?: string | null
    fileName?: string | null
    mimeType?: string | null
    fileSizeBytes?: number | null
    gradeScore?: number | null
    feedbackText?: string | null
    submittedAt?: Date | string | null
    gradedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResourceUpdateWithoutCourseworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutResourcesNestedInput
  }

  export type ResourceUncheckedUpdateWithoutCourseworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateManyWithoutCourseworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutCourseworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    gradeScore?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutCourseworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    gradeScore?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutCourseworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    gradeScore?: NullableIntFieldUpdateOperationsInput | number | null
    feedbackText?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHourBookingCreateManyOfficeHourSlotInput = {
    id?: string
    studentId: string
    topic?: string | null
    status?: $Enums.BookingStatus
    bookedAt?: Date | string
  }

  export type OfficeHourBookingUpdateWithoutOfficeHourSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutOfficeHourBookingsNestedInput
  }

  export type OfficeHourBookingUncheckedUpdateWithoutOfficeHourSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeHourBookingUncheckedUpdateManyWithoutOfficeHourSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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