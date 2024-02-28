
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
} = require('./runtime/library.js')


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


  const path = require('path')

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
  JenisKelamin: 'JenisKelamin',
  Username: 'Username'
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

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
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
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gUHJpc21hIGRhdGFzb3VyY2UgdW50dWsgUG9zdGdyZVNRTApkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9CgpnZW5lcmF0b3IgY2xpZW50IHsKICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIgogIG91dHB1dCAgID0gIi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKLy8gVXNlciBtb2RlbAptb2RlbCBVc2VyIHsKICBVc2VySUQgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgTmFtYSAgICAgICAgIFN0cmluZwogIEVtYWlsICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZQogIFBhc3N3b3JkSGFzaCBTdHJpbmcKICBSb2xlICAgICAgICAgU3RyaW5nCiAgQWxhbWF0ICAgICAgIFN0cmluZz8KICBKZW5pc0tlbGFtaW4gU3RyaW5nPwogIFVzZXJuYW1lICAgICBTdHJpbmcgICAgQHVuaXF1ZSAKICBQZW1iZWxpYW4gICAgUGVtYmVsaWFuW10KICBSZXNlcnZhc2kgICAgUmVzZXJ2YXNpW10KfQoKLy8gUHJvZHVrIG1vZGVsCm1vZGVsIFByb2R1ayB7CiAgUHJvZHVrSUQgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgTmFtYVByb2R1ayAgU3RyaW5nCiAgRGVza3JpcHNpICAgU3RyaW5nCiAgSGFyZ2EgICAgICAgRmxvYXQKICBTdG9rICAgICAgICBJbnQKICBLYXRlZ29yaSAgICBLYXRlZ29yaUVudW0KICBEZXRhaWxQZW1iZWxpYW4gRGV0YWlsUGVtYmVsaWFuW10KfQoKLy8gUGVtYmVsaWFuIG1vZGVsCm1vZGVsIFBlbWJlbGlhbiB7CiAgUGVtYmVsaWFuSUQgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBUYW5nZ2FsUGVtYmVsaWFuIERhdGVUaW1lCiAgVXNlcklEICAgICAgICAgICBJbnQKICBUb3RhbEhhcmdhICAgICAgIEZsb2F0CiAgVXNlciAgICAgICAgICAgICBVc2VyICAgICAgQHJlbGF0aW9uKGZpZWxkczogW1VzZXJJRF0sIHJlZmVyZW5jZXM6IFtVc2VySURdKQogIERldGFpbFBlbWJlbGlhbiAgRGV0YWlsUGVtYmVsaWFuW10KfQoKLy8gRGV0YWlsUGVtYmVsaWFuIG1vZGVsCm1vZGVsIERldGFpbFBlbWJlbGlhbiB7CiAgRGV0YWlsSUQgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgUGVtYmVsaWFuSUQgSW50CiAgUHJvZHVrSUQgICAgSW50CiAgSnVtbGFoICAgICAgSW50CiAgU3VidG90YWwgICAgRmxvYXQKICBQcm9kdWsgICAgICBQcm9kdWsgICAgQHJlbGF0aW9uKGZpZWxkczogW1Byb2R1a0lEXSwgcmVmZXJlbmNlczogW1Byb2R1a0lEXSkKICBQZW1iZWxpYW4gICBQZW1iZWxpYW4gQHJlbGF0aW9uKGZpZWxkczogW1BlbWJlbGlhbklEXSwgcmVmZXJlbmNlczogW1BlbWJlbGlhbklEXSkKfQoKLy8gUmVzZXJ2YXNpIG1vZGVsCm1vZGVsIFJlc2VydmFzaSB7CiAgUmVzZXJ2YXNpSUQgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBUYW5nZ2FsUmVzZXJ2YXNpIERhdGVUaW1lCiAgVXNlcklEICAgICAgICAgICBJbnQKICBKdW1sYWhPcmFuZyAgICAgIEludAogIFN0YXR1cyAgICAgICAgICAgU3RyaW5nCiAgVXNlciAgICAgICAgICAgICBVc2VyICAgICAgQHJlbGF0aW9uKGZpZWxkczogW1VzZXJJRF0sIHJlZmVyZW5jZXM6IFtVc2VySURdKQp9CgovLyBFbnVtZXJhdGlvbnMgdW50dWsgUG9zdGdyZVNRTAplbnVtIEthdGVnb3JpRW51bSB7CiAgTUFLQU5BTgogIE1JTlVNQU4KICBLT0ZFRQogIElDRV9EUklOSwogIFNOQUNLCiAgUEFLRVQKfQo=",
  "inlineSchemaHash": "3646965badb757a655b4ad75b28b4cf7aba003951adec25105624f33f7717aa8",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"UserID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PasswordHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JenisKelamin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Pembelian\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pembelian\",\"relationName\":\"PembelianToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reservasi\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservasi\",\"relationName\":\"ReservasiToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Produk\":{\"dbName\":null,\"fields\":[{\"name\":\"ProdukID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NamaProduk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Deskripsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Harga\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Stok\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Kategori\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KategoriEnum\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DetailPembelian\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DetailPembelian\",\"relationName\":\"DetailPembelianToProduk\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Pembelian\":{\"dbName\":null,\"fields\":[{\"name\":\"PembelianID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TanggalPembelian\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TotalHarga\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PembelianToUser\",\"relationFromFields\":[\"UserID\"],\"relationToFields\":[\"UserID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DetailPembelian\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DetailPembelian\",\"relationName\":\"DetailPembelianToPembelian\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DetailPembelian\":{\"dbName\":null,\"fields\":[{\"name\":\"DetailID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PembelianID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ProdukID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Jumlah\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Subtotal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Produk\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Produk\",\"relationName\":\"DetailPembelianToProduk\",\"relationFromFields\":[\"ProdukID\"],\"relationToFields\":[\"ProdukID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Pembelian\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pembelian\",\"relationName\":\"DetailPembelianToPembelian\",\"relationFromFields\":[\"PembelianID\"],\"relationToFields\":[\"PembelianID\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Reservasi\":{\"dbName\":null,\"fields\":[{\"name\":\"ReservasiID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TanggalReservasi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JumlahOrang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ReservasiToUser\",\"relationFromFields\":[\"UserID\"],\"relationToFields\":[\"UserID\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"KategoriEnum\":{\"values\":[{\"name\":\"MAKANAN\",\"dbName\":null},{\"name\":\"MINUMAN\",\"dbName\":null},{\"name\":\"KOFEE\",\"dbName\":null},{\"name\":\"ICE_DRINK\",\"dbName\":null},{\"name\":\"SNACK\",\"dbName\":null},{\"name\":\"PAKET\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
