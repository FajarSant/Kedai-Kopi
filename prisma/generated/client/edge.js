
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  UserID: 'UserID',
  Nama: 'Nama',
  Email: 'Email',
  PasswordHash: 'PasswordHash',
  Role: 'Role',
  Alamat: 'Alamat',
  JenisKelamin: 'JenisKelamin'
};

exports.Prisma.ProdukScalarFieldEnum = {
  ProdukID: 'ProdukID',
  NamaProduk: 'NamaProduk',
  Deskripsi: 'Deskripsi',
  Harga: 'Harga',
  Stok: 'Stok',
  Kategori: 'Kategori'
};

exports.Prisma.PembelianScalarFieldEnum = {
  PembelianID: 'PembelianID',
  TanggalPembelian: 'TanggalPembelian',
  UserID: 'UserID',
  TotalHarga: 'TotalHarga'
};

exports.Prisma.DetailPembelianScalarFieldEnum = {
  DetailID: 'DetailID',
  PembelianID: 'PembelianID',
  ProdukID: 'ProdukID',
  Jumlah: 'Jumlah',
  Subtotal: 'Subtotal'
};

exports.Prisma.ReservasiScalarFieldEnum = {
  ReservasiID: 'ReservasiID',
  TanggalReservasi: 'TanggalReservasi',
  UserID: 'UserID',
  JumlahOrang: 'JumlahOrang',
  Status: 'Status'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.KategoriEnum = exports.$Enums.KategoriEnum = {
  MAKANAN: 'MAKANAN',
  MINUMAN: 'MINUMAN',
  KOFEE: 'KOFEE',
  ICE_DRINK: 'ICE_DRINK',
  SNACK: 'SNACK',
  PAKET: 'PAKET'
};

exports.Prisma.ModelName = {
  User: 'User',
  Produk: 'Produk',
  Pembelian: 'Pembelian',
  DetailPembelian: 'DetailPembelian',
  Reservasi: 'Reservasi'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\LENOVO\\OneDrive\\Desktop\\Kedai Kopi\\kedai-kopi\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.9.1",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "ZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibXlzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCmdlbmVyYXRvciBjbGllbnQgewogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgPSAiLi9nZW5lcmF0ZWQvY2xpZW50Igp9CgovLyBVc2VyIG1vZGVsCm1vZGVsIFVzZXIgewogIFVzZXJJRCAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgTmFtYSAgICAgICAgU3RyaW5nCiAgRW1haWwgICAgICAgU3RyaW5nICAgQHVuaXF1ZQogIFBhc3N3b3JkSGFzaCBTdHJpbmcKICBSb2xlICAgICAgICBTdHJpbmcKICBBbGFtYXQgICAgICBTdHJpbmc/CiAgSmVuaXNLZWxhbWluIFN0cmluZz8KICBQZW1iZWxpYW4gICBQZW1iZWxpYW5bXQogIFJlc2VydmFzaSAgIFJlc2VydmFzaVtdCn0KCgplbnVtIEthdGVnb3JpRW51bSB7CiAgTUFLQU5BTgogIE1JTlVNQU4KICBLT0ZFRQogIElDRV9EUklOSwogIFNOQUNLCiAgUEFLRVQKfQoKbW9kZWwgUHJvZHVrIHsKICBQcm9kdWtJRCAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIE5hbWFQcm9kdWsgIFN0cmluZwogIERlc2tyaXBzaSAgIFN0cmluZwogIEhhcmdhICAgICAgIEZsb2F0CiAgU3RvayAgICAgICAgSW50CiAgS2F0ZWdvcmkgICAgS2F0ZWdvcmlFbnVtCiAgRGV0YWlsUGVtYmVsaWFuIERldGFpbFBlbWJlbGlhbltdCn0KCgovLyBQZW1iZWxpYW4gbW9kZWwKbW9kZWwgUGVtYmVsaWFuIHsKICBQZW1iZWxpYW5JRCAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgVGFuZ2dhbFBlbWJlbGlhbiBEYXRlVGltZQogIFVzZXJJRCAgICAgICAgSW50CiAgVG90YWxIYXJnYSAgICAgRmxvYXQKICBVc2VyICAgICAgICAgIFVzZXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFtVc2VySURdLCByZWZlcmVuY2VzOiBbVXNlcklEXSkKICBEZXRhaWxQZW1iZWxpYW4gRGV0YWlsUGVtYmVsaWFuW10KfQoKLy8gRGV0YWlsUGVtYmVsaWFuIG1vZGVsCm1vZGVsIERldGFpbFBlbWJlbGlhbiB7CiAgRGV0YWlsSUQgICAgSW50ICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIFBlbWJlbGlhbklEIEludAogIFByb2R1a0lEICAgIEludAogIEp1bWxhaCAgICAgIEludAogIFN1YnRvdGFsICAgIEZsb2F0CiAgUHJvZHVrICAgICAgUHJvZHVrICAgICBAcmVsYXRpb24oZmllbGRzOiBbUHJvZHVrSURdLCByZWZlcmVuY2VzOiBbUHJvZHVrSURdKQogIFBlbWJlbGlhbiAgIFBlbWJlbGlhbiAgQHJlbGF0aW9uKGZpZWxkczogW1BlbWJlbGlhbklEXSwgcmVmZXJlbmNlczogW1BlbWJlbGlhbklEXSkKfQoKLy8gUmVzZXJ2YXNpIG1vZGVsCm1vZGVsIFJlc2VydmFzaSB7CiAgUmVzZXJ2YXNpSUQgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIFRhbmdnYWxSZXNlcnZhc2kgRGF0ZVRpbWUKICBVc2VySUQgICAgICAgICBJbnQKICBKdW1sYWhPcmFuZyAgICBJbnQKICBTdGF0dXMgICAgICAgICBTdHJpbmcKICBVc2VyICAgICAgICAgICBVc2VyICAgICBAcmVsYXRpb24oZmllbGRzOiBbVXNlcklEXSwgcmVmZXJlbmNlczogW1VzZXJJRF0pCn0K",
  "inlineSchemaHash": "9ff775e254f5139bc92a62a54e462ecfc983c7d2b1dfc002bf378613141a3082"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"UserID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PasswordHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JenisKelamin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Pembelian\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pembelian\",\"relationName\":\"PembelianToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reservasi\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservasi\",\"relationName\":\"ReservasiToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Produk\":{\"dbName\":null,\"fields\":[{\"name\":\"ProdukID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NamaProduk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Deskripsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Harga\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Stok\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Kategori\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KategoriEnum\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DetailPembelian\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DetailPembelian\",\"relationName\":\"DetailPembelianToProduk\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Pembelian\":{\"dbName\":null,\"fields\":[{\"name\":\"PembelianID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TanggalPembelian\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TotalHarga\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PembelianToUser\",\"relationFromFields\":[\"UserID\"],\"relationToFields\":[\"UserID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DetailPembelian\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DetailPembelian\",\"relationName\":\"DetailPembelianToPembelian\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DetailPembelian\":{\"dbName\":null,\"fields\":[{\"name\":\"DetailID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PembelianID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProdukID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Jumlah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Subtotal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Produk\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Produk\",\"relationName\":\"DetailPembelianToProduk\",\"relationFromFields\":[\"ProdukID\"],\"relationToFields\":[\"ProdukID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Pembelian\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pembelian\",\"relationName\":\"DetailPembelianToPembelian\",\"relationFromFields\":[\"PembelianID\"],\"relationToFields\":[\"PembelianID\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Reservasi\":{\"dbName\":null,\"fields\":[{\"name\":\"ReservasiID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TanggalReservasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JumlahOrang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ReservasiToUser\",\"relationFromFields\":[\"UserID\"],\"relationToFields\":[\"UserID\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"KategoriEnum\":{\"values\":[{\"name\":\"MAKANAN\",\"dbName\":null},{\"name\":\"MINUMAN\",\"dbName\":null},{\"name\":\"KOFEE\",\"dbName\":null},{\"name\":\"ICE_DRINK\",\"dbName\":null},{\"name\":\"SNACK\",\"dbName\":null},{\"name\":\"PAKET\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

