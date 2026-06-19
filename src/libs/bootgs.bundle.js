var BootGS = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/.pnpm/reflect-metadata@0.2.2/node_modules/reflect-metadata/Reflect.js
  var require_Reflect = __commonJS({
    "node_modules/.pnpm/reflect-metadata@0.2.2/node_modules/reflect-metadata/Reflect.js"() {
      var Reflect2;
      (function(Reflect3) {
        (function(factory) {
          var root = typeof globalThis === "object" ? globalThis : typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
          var exporter = makeExporter(Reflect3);
          if (typeof root.Reflect !== "undefined") {
            exporter = makeExporter(root.Reflect, exporter);
          }
          factory(exporter, root);
          if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect3;
          }
          function makeExporter(target, previous) {
            return function(key, value) {
              Object.defineProperty(target, key, { configurable: true, writable: true, value });
              if (previous)
                previous(key, value);
            };
          }
          function functionThis() {
            try {
              return Function("return this;")();
            } catch (_) {
            }
          }
          function indirectEvalThis() {
            try {
              return (void 0, eval)("(function() { return this; })()");
            } catch (_) {
            }
          }
          function sloppyModeThis() {
            return functionThis() || indirectEvalThis();
          }
        })(function(exporter, root) {
          var hasOwn = Object.prototype.hasOwnProperty;
          var supportsSymbol = typeof Symbol === "function";
          var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
          var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
          var supportsCreate = typeof Object.create === "function";
          var supportsProto = { __proto__: [] } instanceof Array;
          var downLevel = !supportsCreate && !supportsProto;
          var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate ? function() {
              return MakeDictionary(/* @__PURE__ */ Object.create(null));
            } : supportsProto ? function() {
              return MakeDictionary({ __proto__: null });
            } : function() {
              return MakeDictionary({});
            },
            has: downLevel ? function(map, key) {
              return hasOwn.call(map, key);
            } : function(map, key) {
              return key in map;
            },
            get: downLevel ? function(map, key) {
              return hasOwn.call(map, key) ? map[key] : void 0;
            } : function(map, key) {
              return map[key];
            }
          };
          var functionPrototype = Object.getPrototypeOf(Function);
          var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
          var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
          var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
          var registrySymbol = supportsSymbol ? /* @__PURE__ */ Symbol.for("@reflect-metadata:registry") : void 0;
          var metadataRegistry = GetOrCreateMetadataRegistry();
          var metadataProvider = CreateMetadataProvider(metadataRegistry);
          function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
              if (!IsArray(decorators))
                throw new TypeError();
              if (!IsObject(target))
                throw new TypeError();
              if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                throw new TypeError();
              if (IsNull(attributes))
                attributes = void 0;
              propertyKey = ToPropertyKey(propertyKey);
              return DecorateProperty(decorators, target, propertyKey, attributes);
            } else {
              if (!IsArray(decorators))
                throw new TypeError();
              if (!IsConstructor(target))
                throw new TypeError();
              return DecorateConstructor(decorators, target);
            }
          }
          exporter("decorate", decorate);
          function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
              if (!IsObject(target))
                throw new TypeError();
              if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                throw new TypeError();
              OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
          }
          exporter("metadata", metadata);
          function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
          }
          exporter("defineMetadata", defineMetadata);
          function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
          }
          exporter("hasMetadata", hasMetadata);
          function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
          }
          exporter("hasOwnMetadata", hasOwnMetadata);
          function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
          }
          exporter("getMetadata", getMetadata);
          function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
          }
          exporter("getOwnMetadata", getOwnMetadata);
          function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
          }
          exporter("getMetadataKeys", getMetadataKeys);
          function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
          }
          exporter("getOwnMetadataKeys", getOwnMetadataKeys);
          function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            var provider = GetMetadataProvider(
              target,
              propertyKey,
              /*Create*/
              false
            );
            if (IsUndefined(provider))
              return false;
            return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
          }
          exporter("deleteMetadata", deleteMetadata);
          function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
              var decorator = decorators[i];
              var decorated = decorator(target);
              if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsConstructor(decorated))
                  throw new TypeError();
                target = decorated;
              }
            }
            return target;
          }
          function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
              var decorator = decorators[i];
              var decorated = decorator(target, propertyKey, descriptor);
              if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsObject(decorated))
                  throw new TypeError();
                descriptor = decorated;
              }
            }
            return descriptor;
          }
          function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn2)
              return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
              return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
          }
          function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var provider = GetMetadataProvider(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(provider))
              return false;
            return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
          }
          function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn2)
              return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
              return OrdinaryGetMetadata(MetadataKey, parent, P);
            return void 0;
          }
          function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var provider = GetMetadataProvider(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(provider))
              return;
            return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
          }
          function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var provider = GetMetadataProvider(
              O,
              P,
              /*Create*/
              true
            );
            provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
          }
          function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
              return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
              return ownKeys;
            if (ownKeys.length <= 0)
              return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
              var key = ownKeys_1[_i];
              var hasKey = set.has(key);
              if (!hasKey) {
                set.add(key);
                keys.push(key);
              }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
              var key = parentKeys_1[_a];
              var hasKey = set.has(key);
              if (!hasKey) {
                set.add(key);
                keys.push(key);
              }
            }
            return keys;
          }
          function OrdinaryOwnMetadataKeys(O, P) {
            var provider = GetMetadataProvider(
              O,
              P,
              /*create*/
              false
            );
            if (!provider) {
              return [];
            }
            return provider.OrdinaryOwnMetadataKeys(O, P);
          }
          function Type(x) {
            if (x === null)
              return 1;
            switch (typeof x) {
              case "undefined":
                return 0;
              case "boolean":
                return 2;
              case "string":
                return 3;
              case "symbol":
                return 4;
              case "number":
                return 5;
              case "object":
                return x === null ? 1 : 6;
              default:
                return 6;
            }
          }
          function IsUndefined(x) {
            return x === void 0;
          }
          function IsNull(x) {
            return x === null;
          }
          function IsSymbol(x) {
            return typeof x === "symbol";
          }
          function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
          }
          function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
              case 0:
                return input;
              case 1:
                return input;
              case 2:
                return input;
              case 3:
                return input;
              case 4:
                return input;
              case 5:
                return input;
            }
            var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== void 0) {
              var result = exoticToPrim.call(input, hint);
              if (IsObject(result))
                throw new TypeError();
              return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
          }
          function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
              var toString_1 = O.toString;
              if (IsCallable(toString_1)) {
                var result = toString_1.call(O);
                if (!IsObject(result))
                  return result;
              }
              var valueOf = O.valueOf;
              if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                  return result;
              }
            } else {
              var valueOf = O.valueOf;
              if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                  return result;
              }
              var toString_2 = O.toString;
              if (IsCallable(toString_2)) {
                var result = toString_2.call(O);
                if (!IsObject(result))
                  return result;
              }
            }
            throw new TypeError();
          }
          function ToBoolean(argument) {
            return !!argument;
          }
          function ToString(argument) {
            return "" + argument;
          }
          function ToPropertyKey(argument) {
            var key = ToPrimitive(
              argument,
              3
              /* String */
            );
            if (IsSymbol(key))
              return key;
            return ToString(key);
          }
          function IsArray(argument) {
            return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
          }
          function IsCallable(argument) {
            return typeof argument === "function";
          }
          function IsConstructor(argument) {
            return typeof argument === "function";
          }
          function IsPropertyKey(argument) {
            switch (Type(argument)) {
              case 3:
                return true;
              case 4:
                return true;
              default:
                return false;
            }
          }
          function SameValueZero(x, y) {
            return x === y || x !== x && y !== y;
          }
          function GetMethod(V, P) {
            var func = V[P];
            if (func === void 0 || func === null)
              return void 0;
            if (!IsCallable(func))
              throw new TypeError();
            return func;
          }
          function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
              throw new TypeError();
            var iterator = method.call(obj);
            if (!IsObject(iterator))
              throw new TypeError();
            return iterator;
          }
          function IteratorValue(iterResult) {
            return iterResult.value;
          }
          function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
          }
          function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
              f.call(iterator);
          }
          function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
              return proto;
            if (proto !== functionPrototype)
              return proto;
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
              return proto;
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
              return proto;
            if (constructor === O)
              return proto;
            return constructor;
          }
          function CreateMetadataRegistry() {
            var fallback;
            if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
              fallback = CreateFallbackProvider(root.Reflect);
            }
            var first;
            var second;
            var rest;
            var targetProviderMap = new _WeakMap();
            var registry = {
              registerProvider,
              getProvider,
              setProvider
            };
            return registry;
            function registerProvider(provider) {
              if (!Object.isExtensible(registry)) {
                throw new Error("Cannot add provider to a frozen registry.");
              }
              switch (true) {
                case fallback === provider:
                  break;
                case IsUndefined(first):
                  first = provider;
                  break;
                case first === provider:
                  break;
                case IsUndefined(second):
                  second = provider;
                  break;
                case second === provider:
                  break;
                default:
                  if (rest === void 0)
                    rest = new _Set();
                  rest.add(provider);
                  break;
              }
            }
            function getProviderNoCache(O, P) {
              if (!IsUndefined(first)) {
                if (first.isProviderFor(O, P))
                  return first;
                if (!IsUndefined(second)) {
                  if (second.isProviderFor(O, P))
                    return first;
                  if (!IsUndefined(rest)) {
                    var iterator = GetIterator(rest);
                    while (true) {
                      var next = IteratorStep(iterator);
                      if (!next) {
                        return void 0;
                      }
                      var provider = IteratorValue(next);
                      if (provider.isProviderFor(O, P)) {
                        IteratorClose(iterator);
                        return provider;
                      }
                    }
                  }
                }
              }
              if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) {
                return fallback;
              }
              return void 0;
            }
            function getProvider(O, P) {
              var providerMap = targetProviderMap.get(O);
              var provider;
              if (!IsUndefined(providerMap)) {
                provider = providerMap.get(P);
              }
              if (!IsUndefined(provider)) {
                return provider;
              }
              provider = getProviderNoCache(O, P);
              if (!IsUndefined(provider)) {
                if (IsUndefined(providerMap)) {
                  providerMap = new _Map();
                  targetProviderMap.set(O, providerMap);
                }
                providerMap.set(P, provider);
              }
              return provider;
            }
            function hasProvider(provider) {
              if (IsUndefined(provider))
                throw new TypeError();
              return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
            }
            function setProvider(O, P, provider) {
              if (!hasProvider(provider)) {
                throw new Error("Metadata provider not registered.");
              }
              var existingProvider = getProvider(O, P);
              if (existingProvider !== provider) {
                if (!IsUndefined(existingProvider)) {
                  return false;
                }
                var providerMap = targetProviderMap.get(O);
                if (IsUndefined(providerMap)) {
                  providerMap = new _Map();
                  targetProviderMap.set(O, providerMap);
                }
                providerMap.set(P, provider);
              }
              return true;
            }
          }
          function GetOrCreateMetadataRegistry() {
            var metadataRegistry2;
            if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
              metadataRegistry2 = root.Reflect[registrySymbol];
            }
            if (IsUndefined(metadataRegistry2)) {
              metadataRegistry2 = CreateMetadataRegistry();
            }
            if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
              Object.defineProperty(root.Reflect, registrySymbol, {
                enumerable: false,
                configurable: false,
                writable: false,
                value: metadataRegistry2
              });
            }
            return metadataRegistry2;
          }
          function CreateMetadataProvider(registry) {
            var metadata2 = new _WeakMap();
            var provider = {
              isProviderFor: function(O, P) {
                var targetMetadata = metadata2.get(O);
                if (IsUndefined(targetMetadata))
                  return false;
                return targetMetadata.has(P);
              },
              OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
              OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
              OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
              OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
              OrdinaryDeleteMetadata
            };
            metadataRegistry.registerProvider(provider);
            return provider;
            function GetOrCreateMetadataMap(O, P, Create) {
              var targetMetadata = metadata2.get(O);
              var createdTargetMetadata = false;
              if (IsUndefined(targetMetadata)) {
                if (!Create)
                  return void 0;
                targetMetadata = new _Map();
                metadata2.set(O, targetMetadata);
                createdTargetMetadata = true;
              }
              var metadataMap = targetMetadata.get(P);
              if (IsUndefined(metadataMap)) {
                if (!Create)
                  return void 0;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
                if (!registry.setProvider(O, P, provider)) {
                  targetMetadata.delete(P);
                  if (createdTargetMetadata) {
                    metadata2.delete(O);
                  }
                  throw new Error("Wrong provider for target.");
                }
              }
              return metadataMap;
            }
            function OrdinaryHasOwnMetadata2(MetadataKey, O, P) {
              var metadataMap = GetOrCreateMetadataMap(
                O,
                P,
                /*Create*/
                false
              );
              if (IsUndefined(metadataMap))
                return false;
              return ToBoolean(metadataMap.has(MetadataKey));
            }
            function OrdinaryGetOwnMetadata2(MetadataKey, O, P) {
              var metadataMap = GetOrCreateMetadataMap(
                O,
                P,
                /*Create*/
                false
              );
              if (IsUndefined(metadataMap))
                return void 0;
              return metadataMap.get(MetadataKey);
            }
            function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O, P) {
              var metadataMap = GetOrCreateMetadataMap(
                O,
                P,
                /*Create*/
                true
              );
              metadataMap.set(MetadataKey, MetadataValue);
            }
            function OrdinaryOwnMetadataKeys2(O, P) {
              var keys = [];
              var metadataMap = GetOrCreateMetadataMap(
                O,
                P,
                /*Create*/
                false
              );
              if (IsUndefined(metadataMap))
                return keys;
              var keysObj = metadataMap.keys();
              var iterator = GetIterator(keysObj);
              var k = 0;
              while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                  keys.length = k;
                  return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                  keys[k] = nextValue;
                } catch (e) {
                  try {
                    IteratorClose(iterator);
                  } finally {
                    throw e;
                  }
                }
                k++;
              }
            }
            function OrdinaryDeleteMetadata(MetadataKey, O, P) {
              var metadataMap = GetOrCreateMetadataMap(
                O,
                P,
                /*Create*/
                false
              );
              if (IsUndefined(metadataMap))
                return false;
              if (!metadataMap.delete(MetadataKey))
                return false;
              if (metadataMap.size === 0) {
                var targetMetadata = metadata2.get(O);
                if (!IsUndefined(targetMetadata)) {
                  targetMetadata.delete(P);
                  if (targetMetadata.size === 0) {
                    metadata2.delete(targetMetadata);
                  }
                }
              }
              return true;
            }
          }
          function CreateFallbackProvider(reflect) {
            var defineMetadata2 = reflect.defineMetadata, hasOwnMetadata2 = reflect.hasOwnMetadata, getOwnMetadata2 = reflect.getOwnMetadata, getOwnMetadataKeys2 = reflect.getOwnMetadataKeys, deleteMetadata2 = reflect.deleteMetadata;
            var metadataOwner = new _WeakMap();
            var provider = {
              isProviderFor: function(O, P) {
                var metadataPropertySet = metadataOwner.get(O);
                if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P)) {
                  return true;
                }
                if (getOwnMetadataKeys2(O, P).length) {
                  if (IsUndefined(metadataPropertySet)) {
                    metadataPropertySet = new _Set();
                    metadataOwner.set(O, metadataPropertySet);
                  }
                  metadataPropertySet.add(P);
                  return true;
                }
                return false;
              },
              OrdinaryDefineOwnMetadata: defineMetadata2,
              OrdinaryHasOwnMetadata: hasOwnMetadata2,
              OrdinaryGetOwnMetadata: getOwnMetadata2,
              OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
              OrdinaryDeleteMetadata: deleteMetadata2
            };
            return provider;
          }
          function GetMetadataProvider(O, P, Create) {
            var registeredProvider = metadataRegistry.getProvider(O, P);
            if (!IsUndefined(registeredProvider)) {
              return registeredProvider;
            }
            if (Create) {
              if (metadataRegistry.setProvider(O, P, metadataProvider)) {
                return metadataProvider;
              }
              throw new Error("Illegal state.");
            }
            return void 0;
          }
          function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = (
              /** @class */
              (function() {
                function MapIterator2(keys, values, selector) {
                  this._index = 0;
                  this._keys = keys;
                  this._values = values;
                  this._selector = selector;
                }
                MapIterator2.prototype["@@iterator"] = function() {
                  return this;
                };
                MapIterator2.prototype[iteratorSymbol] = function() {
                  return this;
                };
                MapIterator2.prototype.next = function() {
                  var index = this._index;
                  if (index >= 0 && index < this._keys.length) {
                    var result = this._selector(this._keys[index], this._values[index]);
                    if (index + 1 >= this._keys.length) {
                      this._index = -1;
                      this._keys = arraySentinel;
                      this._values = arraySentinel;
                    } else {
                      this._index++;
                    }
                    return { value: result, done: false };
                  }
                  return { value: void 0, done: true };
                };
                MapIterator2.prototype.throw = function(error) {
                  if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  }
                  throw error;
                };
                MapIterator2.prototype.return = function(value) {
                  if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  }
                  return { value, done: true };
                };
                return MapIterator2;
              })()
            );
            var Map2 = (
              /** @class */
              (function() {
                function Map3() {
                  this._keys = [];
                  this._values = [];
                  this._cacheKey = cacheSentinel;
                  this._cacheIndex = -2;
                }
                Object.defineProperty(Map3.prototype, "size", {
                  get: function() {
                    return this._keys.length;
                  },
                  enumerable: true,
                  configurable: true
                });
                Map3.prototype.has = function(key) {
                  return this._find(
                    key,
                    /*insert*/
                    false
                  ) >= 0;
                };
                Map3.prototype.get = function(key) {
                  var index = this._find(
                    key,
                    /*insert*/
                    false
                  );
                  return index >= 0 ? this._values[index] : void 0;
                };
                Map3.prototype.set = function(key, value) {
                  var index = this._find(
                    key,
                    /*insert*/
                    true
                  );
                  this._values[index] = value;
                  return this;
                };
                Map3.prototype.delete = function(key) {
                  var index = this._find(
                    key,
                    /*insert*/
                    false
                  );
                  if (index >= 0) {
                    var size = this._keys.length;
                    for (var i = index + 1; i < size; i++) {
                      this._keys[i - 1] = this._keys[i];
                      this._values[i - 1] = this._values[i];
                    }
                    this._keys.length--;
                    this._values.length--;
                    if (SameValueZero(key, this._cacheKey)) {
                      this._cacheKey = cacheSentinel;
                      this._cacheIndex = -2;
                    }
                    return true;
                  }
                  return false;
                };
                Map3.prototype.clear = function() {
                  this._keys.length = 0;
                  this._values.length = 0;
                  this._cacheKey = cacheSentinel;
                  this._cacheIndex = -2;
                };
                Map3.prototype.keys = function() {
                  return new MapIterator(this._keys, this._values, getKey);
                };
                Map3.prototype.values = function() {
                  return new MapIterator(this._keys, this._values, getValue);
                };
                Map3.prototype.entries = function() {
                  return new MapIterator(this._keys, this._values, getEntry);
                };
                Map3.prototype["@@iterator"] = function() {
                  return this.entries();
                };
                Map3.prototype[iteratorSymbol] = function() {
                  return this.entries();
                };
                Map3.prototype._find = function(key, insert) {
                  if (!SameValueZero(this._cacheKey, key)) {
                    this._cacheIndex = -1;
                    for (var i = 0; i < this._keys.length; i++) {
                      if (SameValueZero(this._keys[i], key)) {
                        this._cacheIndex = i;
                        break;
                      }
                    }
                  }
                  if (this._cacheIndex < 0 && insert) {
                    this._cacheIndex = this._keys.length;
                    this._keys.push(key);
                    this._values.push(void 0);
                  }
                  return this._cacheIndex;
                };
                return Map3;
              })()
            );
            return Map2;
            function getKey(key, _) {
              return key;
            }
            function getValue(_, value) {
              return value;
            }
            function getEntry(key, value) {
              return [key, value];
            }
          }
          function CreateSetPolyfill() {
            var Set2 = (
              /** @class */
              (function() {
                function Set3() {
                  this._map = new _Map();
                }
                Object.defineProperty(Set3.prototype, "size", {
                  get: function() {
                    return this._map.size;
                  },
                  enumerable: true,
                  configurable: true
                });
                Set3.prototype.has = function(value) {
                  return this._map.has(value);
                };
                Set3.prototype.add = function(value) {
                  return this._map.set(value, value), this;
                };
                Set3.prototype.delete = function(value) {
                  return this._map.delete(value);
                };
                Set3.prototype.clear = function() {
                  this._map.clear();
                };
                Set3.prototype.keys = function() {
                  return this._map.keys();
                };
                Set3.prototype.values = function() {
                  return this._map.keys();
                };
                Set3.prototype.entries = function() {
                  return this._map.entries();
                };
                Set3.prototype["@@iterator"] = function() {
                  return this.keys();
                };
                Set3.prototype[iteratorSymbol] = function() {
                  return this.keys();
                };
                return Set3;
              })()
            );
            return Set2;
          }
          function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return (
              /** @class */
              (function() {
                function WeakMap2() {
                  this._key = CreateUniqueKey();
                }
                WeakMap2.prototype.has = function(target) {
                  var table = GetOrCreateWeakMapTable(
                    target,
                    /*create*/
                    false
                  );
                  return table !== void 0 ? HashMap.has(table, this._key) : false;
                };
                WeakMap2.prototype.get = function(target) {
                  var table = GetOrCreateWeakMapTable(
                    target,
                    /*create*/
                    false
                  );
                  return table !== void 0 ? HashMap.get(table, this._key) : void 0;
                };
                WeakMap2.prototype.set = function(target, value) {
                  var table = GetOrCreateWeakMapTable(
                    target,
                    /*create*/
                    true
                  );
                  table[this._key] = value;
                  return this;
                };
                WeakMap2.prototype.delete = function(target) {
                  var table = GetOrCreateWeakMapTable(
                    target,
                    /*create*/
                    false
                  );
                  return table !== void 0 ? delete table[this._key] : false;
                };
                WeakMap2.prototype.clear = function() {
                  this._key = CreateUniqueKey();
                };
                return WeakMap2;
              })()
            );
            function CreateUniqueKey() {
              var key;
              do
                key = "@@WeakMap@@" + CreateUUID();
              while (HashMap.has(keys, key));
              keys[key] = true;
              return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
              if (!hasOwn.call(target, rootKey)) {
                if (!create)
                  return void 0;
                Object.defineProperty(target, rootKey, { value: HashMap.create() });
              }
              return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
              for (var i = 0; i < size; ++i)
                buffer[i] = Math.random() * 255 | 0;
              return buffer;
            }
            function GenRandomBytes(size) {
              if (typeof Uint8Array === "function") {
                var array = new Uint8Array(size);
                if (typeof crypto !== "undefined") {
                  crypto.getRandomValues(array);
                } else if (typeof msCrypto !== "undefined") {
                  msCrypto.getRandomValues(array);
                } else {
                  FillRandomBytes(array, size);
                }
                return array;
              }
              return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
              var data = GenRandomBytes(UUID_SIZE);
              data[6] = data[6] & 79 | 64;
              data[8] = data[8] & 191 | 128;
              var result = "";
              for (var offset = 0; offset < UUID_SIZE; ++offset) {
                var byte = data[offset];
                if (offset === 4 || offset === 6 || offset === 8)
                  result += "-";
                if (byte < 16)
                  result += "0";
                result += byte.toString(16).toLowerCase();
              }
              return result;
            }
          }
          function MakeDictionary(obj) {
            obj.__ = void 0;
            delete obj.__;
            return obj;
          }
        });
      })(Reflect2 || (Reflect2 = {}));
    }
  });

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/index.js
  var dist_exports = {};
  __export(dist_exports, {
    APPSSCRIPT_EVENT_METADATA: () => APPSSCRIPT_EVENT_METADATA,
    APPSSCRIPT_OPTIONS_METADATA: () => APPSSCRIPT_OPTIONS_METADATA,
    App: () => BootApplication,
    AppException: () => AppException,
    AppsScriptEventType: () => AppsScriptEventType,
    AssertFalse: () => AssertFalse,
    AssertFalsePipe: () => AssertFalsePipe,
    AssertTrue: () => AssertTrue,
    AssertTruePipe: () => AssertTruePipe,
    AsyncApp: () => AsyncBootApplication,
    AsyncBootApplication: () => AsyncBootApplication,
    Autowired: () => Autowired,
    BaseBootApplication: () => BaseBootApplication,
    Body: () => Body,
    BootApplication: () => BootApplication,
    BootApplicationFactory: () => BootApplicationFactory,
    CONTROLLER_ADVICE_WATERMARK: () => CONTROLLER_ADVICE_WATERMARK,
    CONTROLLER_OPTIONS_METADATA: () => CONTROLLER_OPTIONS_METADATA,
    CONTROLLER_TYPE_METADATA: () => CONTROLLER_TYPE_METADATA,
    CONTROLLER_WATERMARK: () => CONTROLLER_WATERMARK,
    ContentMimeType: () => ContentMimeType,
    Controller: () => Controller,
    ControllerAdvice: () => ControllerAdvice,
    Delete: () => Delete,
    DeleteMapping: () => DeleteMapping,
    ENTITY_WATERMARK: () => ENTITY_WATERMARK,
    EXCEPTION_HANDLER_METADATA: () => EXCEPTION_HANDLER_METADATA,
    Email: () => Email,
    EmailPipe: () => EmailPipe,
    Entity: () => Entity,
    Event: () => Event,
    EventDispatcher: () => EventDispatcher,
    ExceptionHandler: () => ExceptionHandler,
    Get: () => Get,
    GetMapping: () => GetMapping,
    Head: () => Head,
    HeadMapping: () => HeadMapping,
    Headers: () => Headers,
    HttpController: () => HttpController,
    HttpException: () => HttpException,
    HttpStatus: () => HttpStatus,
    INJECTABLE_WATERMARK: () => INJECTABLE_WATERMARK,
    INJECT_TOKENS_METADATA: () => INJECT_TOKENS_METADATA,
    Inject: () => Inject,
    Injectable: () => Injectable,
    METHOD_METADATA: () => METHOD_METADATA,
    Max: () => Max,
    MaxPipe: () => MaxPipe,
    Min: () => Min,
    MinPipe: () => MinPipe,
    Negative: () => Negative,
    NegativeOrZero: () => NegativeOrZero,
    NegativeOrZeroPipe: () => NegativeOrZeroPipe,
    NegativePipe: () => NegativePipe,
    NotBlank: () => NotBlank,
    NotBlankPipe: () => NotBlankPipe,
    NotEmpty: () => NotEmpty,
    NotEmptyPipe: () => NotEmptyPipe,
    OnChange: () => OnChange,
    OnEdit: () => OnEdit,
    OnFormSubmit: () => OnFormSubmit,
    OnInstall: () => OnInstall,
    OnOpen: () => OnOpen,
    Options: () => Options,
    OptionsMapping: () => OptionsMapping,
    PARAMTYPES_METADATA: () => PARAMTYPES_METADATA,
    PARAM_DEFINITIONS_METADATA: () => PARAM_DEFINITIONS_METADATA,
    PATH_METADATA: () => PATH_METADATA,
    PIPES_METADATA: () => PIPES_METADATA,
    PRODUCE_METADATA: () => PRODUCE_METADATA,
    Param: () => Param,
    ParamSource: () => ParamSource,
    ParseBigIntPipe: () => ParseBigIntPipe,
    ParseBooleanPipe: () => ParseBooleanPipe,
    ParseFloatPipe: () => ParseFloatPipe,
    ParseIntPipe: () => ParseIntPipe,
    ParseNumberPipe: () => ParseNumberPipe,
    ParseStringPipe: () => ParseStringPipe,
    Patch: () => Patch,
    PatchMapping: () => PatchMapping,
    PathMatcher: () => PathMatcher,
    PathVariable: () => PathVariable,
    Pattern: () => Pattern,
    PatternPipe: () => PatternPipe,
    Positive: () => Positive,
    PositiveOrZero: () => PositiveOrZero,
    PositiveOrZeroPipe: () => PositiveOrZeroPipe,
    PositivePipe: () => PositivePipe,
    Post: () => Post,
    PostMapping: () => PostMapping,
    Put: () => Put,
    PutMapping: () => PutMapping,
    Query: () => Query,
    REPOSITORY_WATERMARK: () => REPOSITORY_WATERMARK,
    RESPONSE_BODY_METADATA: () => RESPONSE_BODY_METADATA,
    RESPONSE_STATUS_METADATA: () => RESPONSE_STATUS_METADATA,
    Repository: () => Repository,
    Request: () => Request,
    RequestBody: () => RequestBody,
    RequestFactory: () => RequestFactory,
    RequestMapping: () => RequestMapping,
    RequestMethod: () => RequestMethod,
    RequestParam: () => RequestParam,
    Resolver: () => Resolver,
    Response: () => Response,
    ResponseBody: () => ResponseBody,
    ResponseBuilder: () => ResponseBuilder,
    ResponseEntity: () => ResponseEntity,
    ResponseStatus: () => ResponseStatus,
    RestController: () => RestController,
    RestControllerAdvice: () => RestControllerAdvice,
    Router: () => Router,
    RouterExplorer: () => RouterExplorer,
    SERVICE_WATERMARK: () => SERVICE_WATERMARK,
    Service: () => Service,
    Size: () => Size,
    SizePipe: () => SizePipe,
    UsePipes: () => UsePipes,
    Value: () => Value,
    createApp: () => createApp,
    createAsyncApp: () => createAsyncApp,
    isChangeEvent: () => isChangeEvent,
    isController: () => isController,
    isControllerAdvice: () => isControllerAdvice,
    isEditEvent: () => isEditEvent,
    isFormSubmitEvent: () => isFormSubmitEvent,
    isHttpResponse: () => isHttpResponse,
    isInjectable: () => isInjectable,
    isRecord: () => isRecord,
    isResponseEntity: () => isResponseEntity
  });
  var import_reflect_metadata3 = __toESM(require_Reflect(), 1);

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/lang/base/isArray.js
  function isArray(value) {
    return Array.isArray(value);
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/lang/object/ObjectTag.js
  var ObjectTag;
  (function(ObjectTag2) {
    ObjectTag2["ARGUMENTS"] = "[object Arguments]";
    ObjectTag2["ARRAY"] = "[object Array]";
    ObjectTag2["ASYNC_FUNCTION"] = "[object AsyncFunction]";
    ObjectTag2["BOOLEAN"] = "[object Boolean]";
    ObjectTag2["DATE"] = "[object Date]";
    ObjectTag2["DOM_EXCEPTION"] = "[object DOMException]";
    ObjectTag2["ERROR"] = "[object Error]";
    ObjectTag2["FUNCTION"] = "[object Function]";
    ObjectTag2["GENERATOR_FUNCTION"] = "[object GeneratorFunction]";
    ObjectTag2["MAP"] = "[object Map]";
    ObjectTag2["NUMBER"] = "[object Number]";
    ObjectTag2["NULL"] = "[object Null]";
    ObjectTag2["OBJECT"] = "[object Object]";
    ObjectTag2["PROMISE"] = "[object Promise]";
    ObjectTag2["PROXY"] = "[object Proxy]";
    ObjectTag2["REG_EXP"] = "[object RegExp]";
    ObjectTag2["SET"] = "[object Set]";
    ObjectTag2["STRING"] = "[object String]";
    ObjectTag2["SYMBOL"] = "[object Symbol]";
    ObjectTag2["UNDEFINED"] = "[object Undefined]";
    ObjectTag2["WEAK_MAP"] = "[object WeakMap]";
    ObjectTag2["WEAK_SET"] = "[object WeakSet]";
    ObjectTag2["ARRAY_BUFFER"] = "[object ArrayBuffer]";
    ObjectTag2["DATA_VIEW"] = "[object DataView]";
    ObjectTag2["FLOAT_32_ARRAY"] = "[object Float32Array]";
    ObjectTag2["FLOAT_64_ARRAY"] = "[object Float64Array]";
    ObjectTag2["INT_8_ARRAY"] = "[object Int8Array]";
    ObjectTag2["INT_16_ARRAY"] = "[object Int16Array]";
    ObjectTag2["INT_32_ARRAY"] = "[object Int32Array]";
    ObjectTag2["UINT_8_ARRAY"] = "[object Uint8Array]";
    ObjectTag2["UINT_8_CLAMPED_ARRAY"] = "[object Uint8ClampedArray]";
    ObjectTag2["UINT_16_ARRAY"] = "[object Uint16Array]";
    ObjectTag2["UINT_32_ARRAY"] = "[object Uint32Array]";
  })(ObjectTag || (ObjectTag = {}));

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/lang/object/objectToString.js
  function objectToString(value) {
    return Object.prototype.toString.call(value);
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/lang/base/isNull.js
  function isNull(value) {
    return value === null;
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/lang/base/isUndefined.js
  function isUndefined(value) {
    return typeof value === "undefined";
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/lang/base/isNil.js
  function isNil(value) {
    return isUndefined(value) || isNull(value);
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/lang/base/nonNil.js
  function nonNil(value) {
    return !isNil(value);
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/lang/base/isObject.js
  function isObject(value) {
    return nonNil(value) && typeof value === "object";
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/lang/base/isEmpty.js
  function isEmpty(value, strict = false) {
    if (isNil(value)) {
      return true;
    }
    if (isString(value)) {
      return (strict ? value : value.trim()).length === 0;
    }
    if (Array.isArray(value)) {
      return value.length === 0;
    }
    if (value instanceof Set || value instanceof Map) {
      return value.size === 0;
    }
    const isLengthAware = isObject(value) && "length" in value && typeof value.length === "number";
    if (isLengthAware) {
      return value.length === 0;
    }
    if (isObject(value) && objectToString(value) === "[object Object]") {
      return Object.keys(value).length === 0;
    }
    return false;
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/lang/base/isFunction.js
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    const tag = objectToString(value);
    return [
      ObjectTag.FUNCTION,
      ObjectTag.GENERATOR_FUNCTION,
      ObjectTag.ASYNC_FUNCTION,
      ObjectTag.PROXY
    ].includes(tag);
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/lang/base/isFunctionLike.js
  function isFunctionLike(value) {
    return nonNil(value) && typeof value === "function";
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/lang/base/isNumber.js
  function isNumber(value) {
    return typeof value === "number";
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/lang/base/isString.js
  function isString(value) {
    return typeof value === "string";
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/lang/base/isRegExp.js
  function isRegExp(value) {
    return objectToString(value) === ObjectTag.REG_EXP;
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/net/path/isValidDomain.js
  function isValidDomain(domain) {
    if (!isString(domain) || isEmpty(domain)) {
      return false;
    }
    if (domain.includes("..")) {
      return false;
    }
    if (domain.startsWith("-") || domain.endsWith("-") || domain.startsWith(".") || domain.endsWith(".")) {
      return false;
    }
    const parts = domain.split(".");
    if (parts.length < 2) {
      return false;
    }
    const LABEL_PATTERN = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
    for (const part of parts) {
      if (part.length === 0) {
        return false;
      }
      if (!LABEL_PATTERN.test(part)) {
        return false;
      }
    }
    const tld = parts[parts.length - 1];
    return !(tld.length < 2 || !/^[a-zA-Z]+$/.test(tld));
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/net/path/join.js
  function join(...paths) {
    const resolvedParts = [];
    let isAbsoluteResult = false;
    for (const path of paths) {
      if (!isString(path)) {
        continue;
      }
      if (path.startsWith("/")) {
        resolvedParts.length = 0;
        isAbsoluteResult = true;
      }
      const segments = path.split("/").filter(Boolean);
      for (const segment of segments) {
        if (segment === ".") {
          continue;
        }
        if (segment === "..") {
          if (resolvedParts.length > 0 && resolvedParts[resolvedParts.length - 1] !== "..") {
            resolvedParts.pop();
          } else if (!isAbsoluteResult) {
            resolvedParts.push("..");
          }
        } else {
          resolvedParts.push(encodeURIComponent(segment));
        }
      }
    }
    if (isAbsoluteResult) {
      return "/" + resolvedParts.join("/");
    } else {
      return resolvedParts.length === 0 ? "." : resolvedParts.join("/");
    }
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/net/path/normalize.js
  function normalize(path) {
    const result = requireNonEmptyString(path);
    return join("/", result.trim());
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/lang/string/isEmail.js
  function isEmail(email) {
    if (!isString(email) || isEmpty(email)) {
      return false;
    }
    const parts = email.split("@");
    if (parts.length !== 2) {
      return false;
    }
    const [usernamePart, domain] = parts;
    if (!isValidDomain(domain)) {
      return false;
    }
    const USERNAME_PATTERN = /^[a-zA-Z0-9](?:[a-zA-Z0-9._-]*[a-zA-Z0-9])?$/;
    const plusIndex = usernamePart.indexOf("+");
    if (plusIndex !== -1) {
      const username = usernamePart.substring(0, plusIndex);
      const alias = usernamePart.substring(plusIndex + 1);
      const ALIAS_PATTERN = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]*$/;
      return USERNAME_PATTERN.test(username) && ALIAS_PATTERN.test(alias);
    } else {
      return USERNAME_PATTERN.test(usernamePart);
    }
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/lang/string/requireNonEmptyString.js
  function requireNonEmptyString(value, message) {
    if (!isString(value) || isEmpty(value)) {
      throw new EmptyStringException(message);
    }
    return value;
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/exception/Exception.js
  var Exception = class _Exception extends Error {
    /**
     * @param {unknown} [message] - The error message, an existing Error object, or any other value.
     */
    constructor(message) {
      super(message instanceof Error ? message.message : isString(message) ? message : void 0);
      this.name = new.target.name;
      Object.setPrototypeOf(this, new.target.prototype);
    }
    /**
     * Provides a custom string tag for `Object.prototype.toString.call()`.
     *
     * @returns {string} The name of the constructor.
     */
    get [Symbol.toStringTag]() {
      return this.constructor.name;
    }
    /**
     * Creates a new Exception instance.
     *
     * @param   {unknown} [message] - The error message or an existing Error object.
     * @returns {Exception} A new instance of the Exception class.
     */
    static create(message) {
      return new _Exception(message);
    }
    /**
     * Type guard to check if a given value is an instance of {@link Exception} or any of its subclasses.
     *
     * @param   {unknown} value - The value to check.
     * @returns {boolean} `true` if the value is an instance of `Exception` or a class that extends it; otherwise, `false`.
     */
    static isException(value) {
      return isObject(value) && value instanceof _Exception;
    }
    /**
     * Retrieves the error message of the exception.
     *
     * @returns {string} The message string associated with the exception.
     */
    getMessage() {
      return this.message;
    }
    /**
     * Returns a string representation of the exception.
     *
     * @returns {string} A string representing the exception.
     */
    toString() {
      return String(this.message ?? this.constructor.name);
    }
  };

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/exception/RuntimeException.js
  var RuntimeException = class extends Exception {
    constructor(message) {
      super(message ?? "A runtime error occurred.");
      const target = new.target;
      this.name = target.name;
      Object.setPrototypeOf(this, target.prototype);
    }
  };

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/exception/EmptyStringException.js
  var EmptyStringException = class extends RuntimeException {
    constructor(message) {
      super(message || "String is null, undefined, or empty.");
      const target = new.target;
      this.name = target.name;
      Object.setPrototypeOf(this, target.prototype);
    }
  };

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/appsscript/ui/isHtmlOutput.js
  function isHtmlOutput(value) {
    return isObject(value) && isFunction(value?.getContent) && isFunction(value?.setTitle) && isFunction(value?.setXFrameOptionsMode);
  }

  // node_modules/.pnpm/apps-script-utils@1.9.0/node_modules/apps-script-utils/dist/appsscript/ui/isTextOutput.js
  function isTextOutput(value) {
    return isObject(value) && isFunction(value?.getMimeType) && isFunction(value?.getContent);
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/domain/constants/appsscript.js
  var APPSSCRIPT_EVENT_METADATA = "appsscript:event";
  var APPSSCRIPT_OPTIONS_METADATA = "appsscript:options";

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/domain/constants/http.js
  var METHOD_METADATA = "http:method";
  var PATH_METADATA = "http:path";

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/domain/constants/metadata.js
  var CONTROLLER_WATERMARK = "__controller__";
  var SERVICE_WATERMARK = "__service__";
  var REPOSITORY_WATERMARK = "__repository__";
  var ENTITY_WATERMARK = "__entity__";
  var INJECTABLE_WATERMARK = "__injectable__";
  var CONTROLLER_ADVICE_WATERMARK = "__controller_advice__";
  var CONTROLLER_TYPE_METADATA = "controller:type";
  var CONTROLLER_OPTIONS_METADATA = "controller:options";
  var INJECT_TOKENS_METADATA = "custom:inject";
  var PARAM_DEFINITIONS_METADATA = "custom:param";
  var PARAMTYPES_METADATA = "design:paramtypes";
  var PIPES_METADATA = "custom:pipes";
  var RESPONSE_STATUS_METADATA = "custom:response_status";
  var EXCEPTION_HANDLER_METADATA = "custom:exception_handlers";
  var PRODUCE_METADATA = "custom:produce";
  var RESPONSE_BODY_METADATA = "custom:response_body";

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/domain/enums/AppsScriptEventType.js
  var AppsScriptEventType;
  (function(AppsScriptEventType2) {
    AppsScriptEventType2["INSTALL"] = "INSTALL";
    AppsScriptEventType2["OPEN"] = "OPEN";
    AppsScriptEventType2["EDIT"] = "EDIT";
    AppsScriptEventType2["CHANGE"] = "CHANGE";
    AppsScriptEventType2["SELECTION_CHANGE"] = "SELECTION_CHANGE";
    AppsScriptEventType2["FORM_SUBMIT"] = "FORM_SUBMIT";
  })(AppsScriptEventType || (AppsScriptEventType = {}));

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/domain/enums/ContentMimeType.js
  var ContentMimeType;
  (function(ContentMimeType2) {
    ContentMimeType2["ATOM"] = "application/atom+xml";
    ContentMimeType2["CSV"] = "text/csv";
    ContentMimeType2["ICAL"] = "text/calendar";
    ContentMimeType2["JAVASCRIPT"] = "application/javascript";
    ContentMimeType2["JSON"] = "application/json";
    ContentMimeType2["RSS"] = "application/rss+xml";
    ContentMimeType2["TEXT"] = "text/plain";
    ContentMimeType2["VCARD"] = "text/vcard";
    ContentMimeType2["XML"] = "application/xml";
    ContentMimeType2["HTML"] = "text/html";
  })(ContentMimeType || (ContentMimeType = {}));

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/domain/enums/HttpStatus.js
  var HttpStatus;
  (function(HttpStatus2) {
    HttpStatus2[HttpStatus2["CONTINUE"] = 100] = "CONTINUE";
    HttpStatus2[HttpStatus2["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HttpStatus2[HttpStatus2["PROCESSING"] = 102] = "PROCESSING";
    HttpStatus2[HttpStatus2["EARLYHINTS"] = 103] = "EARLYHINTS";
    HttpStatus2[HttpStatus2["OK"] = 200] = "OK";
    HttpStatus2[HttpStatus2["CREATED"] = 201] = "CREATED";
    HttpStatus2[HttpStatus2["ACCEPTED"] = 202] = "ACCEPTED";
    HttpStatus2[HttpStatus2["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    HttpStatus2[HttpStatus2["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatus2[HttpStatus2["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HttpStatus2[HttpStatus2["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HttpStatus2[HttpStatus2["MULTI_STATUS"] = 207] = "MULTI_STATUS";
    HttpStatus2[HttpStatus2["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
    HttpStatus2[HttpStatus2["CONTENT_DIFFERENT"] = 210] = "CONTENT_DIFFERENT";
    HttpStatus2[HttpStatus2["AMBIGUOUS"] = 300] = "AMBIGUOUS";
    HttpStatus2[HttpStatus2["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpStatus2[HttpStatus2["FOUND"] = 302] = "FOUND";
    HttpStatus2[HttpStatus2["SEE_OTHER"] = 303] = "SEE_OTHER";
    HttpStatus2[HttpStatus2["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpStatus2[HttpStatus2["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HttpStatus2[HttpStatus2["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    HttpStatus2[HttpStatus2["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus2[HttpStatus2["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus2[HttpStatus2["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HttpStatus2[HttpStatus2["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatus2[HttpStatus2["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatus2[HttpStatus2["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    HttpStatus2[HttpStatus2["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HttpStatus2[HttpStatus2["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    HttpStatus2[HttpStatus2["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HttpStatus2[HttpStatus2["CONFLICT"] = 409] = "CONFLICT";
    HttpStatus2[HttpStatus2["GONE"] = 410] = "GONE";
    HttpStatus2[HttpStatus2["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    HttpStatus2[HttpStatus2["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HttpStatus2[HttpStatus2["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    HttpStatus2[HttpStatus2["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
    HttpStatus2[HttpStatus2["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HttpStatus2[HttpStatus2["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    HttpStatus2[HttpStatus2["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    HttpStatus2[HttpStatus2["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
    HttpStatus2[HttpStatus2["MISDIRECTED"] = 421] = "MISDIRECTED";
    HttpStatus2[HttpStatus2["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpStatus2[HttpStatus2["LOCKED"] = 423] = "LOCKED";
    HttpStatus2[HttpStatus2["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    HttpStatus2[HttpStatus2["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    HttpStatus2[HttpStatus2["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HttpStatus2[HttpStatus2["UNRECOVERABLE_ERROR"] = 456] = "UNRECOVERABLE_ERROR";
    HttpStatus2[HttpStatus2["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatus2[HttpStatus2["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HttpStatus2[HttpStatus2["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpStatus2[HttpStatus2["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpStatus2[HttpStatus2["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HttpStatus2[HttpStatus2["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    HttpStatus2[HttpStatus2["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
    HttpStatus2[HttpStatus2["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
  })(HttpStatus || (HttpStatus = {}));

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/domain/enums/ParamSource.js
  var ParamSource;
  (function(ParamSource2) {
    ParamSource2["PARAM"] = "PARAM";
    ParamSource2["QUERY"] = "QUERY";
    ParamSource2["BODY"] = "BODY";
    ParamSource2["HEADERS"] = "HEADERS";
    ParamSource2["REQUEST"] = "REQUEST";
    ParamSource2["RESPONSE"] = "RESPONSE";
    ParamSource2["EVENT"] = "EVENT";
    ParamSource2["INJECT"] = "INJECT";
    ParamSource2["VALUE"] = "VALUE";
  })(ParamSource || (ParamSource = {}));

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/domain/enums/RequestMethod.js
  var RequestMethod;
  (function(RequestMethod2) {
    RequestMethod2["GET"] = "get";
    RequestMethod2["POST"] = "post";
    RequestMethod2["PUT"] = "put";
    RequestMethod2["DELETE"] = "delete";
    RequestMethod2["PATCH"] = "patch";
    RequestMethod2["OPTIONS"] = "options";
    RequestMethod2["HEAD"] = "head";
  })(RequestMethod || (RequestMethod = {}));

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/repository/MetadataRepository.js
  var import_reflect_metadata = __toESM(require_Reflect(), 1);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/repository/addParamPipe.js
  function addParamPipe(target, propertyKey, index, pipe) {
    const metadataTarget = target;
    const existing = (propertyKey ? Reflect.getMetadata(PARAM_DEFINITIONS_METADATA, metadataTarget, propertyKey) : Reflect.getMetadata(PARAM_DEFINITIONS_METADATA, metadataTarget)) || {};
    const keys = Object.keys(existing).filter((key) => key.endsWith(`:${index}`));
    if (keys.length > 0) {
      for (const key of keys) {
        const definition = existing[key];
        definition.pipes = [...definition.pipes || [], pipe];
      }
    } else {
      const tempKey = `__pending_pipes__:${index}`;
      const definition = existing[tempKey] || { index, pipes: [] };
      definition.pipes = [...definition.pipes || [], pipe];
      existing[tempKey] = definition;
    }
    if (propertyKey) {
      Reflect.defineMetadata(PARAM_DEFINITIONS_METADATA, existing, metadataTarget, propertyKey);
    } else {
      Reflect.defineMetadata(PARAM_DEFINITIONS_METADATA, existing, metadataTarget);
    }
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/repository/assignInjectMetadata.js
  function assignInjectMetadata(existing, index, token) {
    const type = ParamSource.INJECT;
    return {
      ...existing,
      [`${type}:${index}`]: { type, token, index }
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/repository/assignParamMetadata.js
  function assignParamMetadata(existing, index, type, key, pipes) {
    const pendingKey = `__pending_pipes__:${index}`;
    const pending = existing[pendingKey];
    const updatedPipes = [...pending?.pipes || [], ...pipes || []];
    const definition = { type, key, index };
    if (updatedPipes.length > 0) {
      definition.pipes = updatedPipes;
    }
    const result = {
      ...existing,
      [`${type}:${index}`]: definition
    };
    if (pending) {
      delete result[pendingKey];
    }
    return result;
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/repository/createAppsScriptDecorator.js
  function createAppsScriptDecorator(eventType) {
    return (options = {}) => {
      return (_target, _key, descriptor) => {
        if (descriptor.value) {
          Reflect.defineMetadata(APPSSCRIPT_EVENT_METADATA, eventType, descriptor.value);
          Reflect.defineMetadata(APPSSCRIPT_OPTIONS_METADATA, options, descriptor.value);
        }
        return descriptor;
      };
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/repository/createHttpDecorator.js
  function createHttpDecorator(method) {
    return (options) => {
      const path = (typeof options === "string" ? options : options?.path || options?.value) || "/";
      const produces = typeof options === "object" ? options?.produces : void 0;
      return (_target, _key, descriptor) => {
        if (descriptor.value) {
          Reflect.defineMetadata(METHOD_METADATA, method || RequestMethod.GET, descriptor.value);
          Reflect.defineMetadata(PATH_METADATA, path, descriptor.value);
          if (produces) {
            Reflect.defineMetadata(PRODUCE_METADATA, Array.isArray(produces) ? produces[0] : produces, descriptor.value);
          }
        }
        return descriptor;
      };
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/repository/createParamDecorator.js
  function createParamDecorator(type) {
    return (key, ...pipes) => {
      return (target, propertyKey, parameterIndex) => {
        const metadataTarget = target;
        const existing = (propertyKey ? Reflect.getMetadata(PARAM_DEFINITIONS_METADATA, metadataTarget, propertyKey) : Reflect.getMetadata(PARAM_DEFINITIONS_METADATA, metadataTarget)) || {};
        const updated = assignParamMetadata(existing, parameterIndex, type, key, pipes);
        if (propertyKey) {
          Reflect.defineMetadata(PARAM_DEFINITIONS_METADATA, updated, metadataTarget, propertyKey);
        } else {
          Reflect.defineMetadata(PARAM_DEFINITIONS_METADATA, updated, metadataTarget);
        }
      };
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/repository/getInjectionTokens.js
  function getInjectionTokens(target, propertyKey) {
    const metadataTarget = target;
    if (propertyKey) {
      return Reflect.getMetadata(INJECT_TOKENS_METADATA, metadataTarget, propertyKey) || {};
    } else {
      return Reflect.getMetadata(INJECT_TOKENS_METADATA, metadataTarget) || {};
    }
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/shared/utils/isChangeEvent.js
  function isChangeEvent(value) {
    return isObject(value) && "changeType" in value;
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/shared/utils/isController.js
  function isController(value) {
    return !!Reflect.getMetadata(CONTROLLER_WATERMARK, value);
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/shared/utils/isControllerAdvice.js
  function isControllerAdvice(target) {
    if (!target) {
      return false;
    }
    const constructor = typeof target === "function" ? target : target.constructor;
    return !!Reflect.getMetadata(CONTROLLER_ADVICE_WATERMARK, constructor);
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/shared/utils/isEditEvent.js
  function isEditEvent(value) {
    return isObject(value) && "range" in value;
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/shared/utils/isFormSubmitEvent.js
  function isFormSubmitEvent(value) {
    return isObject(value) && "source" in value;
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/shared/utils/isRecord.js
  function isRecord(value) {
    return isObject(value) && !isArray(value);
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/shared/utils/isHttpResponse.js
  function isHttpResponse(value) {
    return isRecord(value) && "status" in value && "body" in value;
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/domain/entities/ResponseEntity.js
  var ResponseEntity = class _ResponseEntity {
    /**
     * @param   {T | null} body - The response body.
     * @param   {HttpStatus} status - The HTTP status code.
     * @param   {Record<string, string>} headers - The HTTP headers.
     * @param   {ContentMimeType} [produces] - The desired MIME type.
     */
    constructor(body, status, headers = {}, produces) {
      this.body = body;
      this.status = status;
      this.headers = headers;
      this.produces = produces;
    }
    /**
     * Creates a builder for a ResponseEntity with the given status.
     *
     * @param   {HttpStatus} status - The HTTP status code.
     * @returns {ResponseEntityBuilder} The builder.
     */
    static status(status) {
      return new ResponseEntityBuilder(status);
    }
    /**
     * Creates a ResponseEntity with an OK status.
     *
     * @param   {T} [body] - The response body.
     * @returns {ResponseEntity<T>} The ResponseEntity.
     */
    static ok(body = null) {
      return new _ResponseEntity(body, HttpStatus.OK);
    }
    /**
     * Creates a ResponseEntity with a CREATED status.
     *
     * @param   {T} [body] - The response body.
     * @returns {ResponseEntity<T>} The ResponseEntity.
     */
    static created(body = null) {
      return new _ResponseEntity(body, HttpStatus.CREATED);
    }
    /**
     * Creates a ResponseEntity with an ACCEPTED status.
     *
     * @param   {T} [body] - The response body.
     * @returns {ResponseEntity<T>} The ResponseEntity.
     */
    static accepted(body = null) {
      return new _ResponseEntity(body, HttpStatus.ACCEPTED);
    }
    /**
     * Creates a ResponseEntity with a NO_CONTENT status.
     *
     * @returns {ResponseEntity<void>} The ResponseEntity.
     */
    static noContent() {
      return new _ResponseEntity(null, HttpStatus.NO_CONTENT);
    }
    /**
     * Creates a ResponseEntity with a BAD_REQUEST status.
     *
     * @returns {ResponseEntity<void>} The ResponseEntity.
     */
    static badRequest() {
      return new _ResponseEntity(null, HttpStatus.BAD_REQUEST);
    }
    /**
     * Creates a ResponseEntity with a NOT_FOUND status.
     *
     * @returns {ResponseEntity<void>} The ResponseEntity.
     */
    static medicalNotFound() {
      return new _ResponseEntity(null, HttpStatus.NOT_FOUND);
    }
    /**
     * Returns the response body.
     *
     * @returns {T | null} The response body.
     */
    getBody() {
      return this.body;
    }
    /**
     * Returns the HTTP status code.
     *
     * @returns {HttpStatus} The HTTP status code.
     */
    getStatusCode() {
      return this.status;
    }
    /**
     * Returns the HTTP headers.
     *
     * @returns {Record<string, string>} The HTTP headers.
     */
    getHeaders() {
      return this.headers;
    }
    /**
     * Returns the desired MIME type.
     *
     * @returns {ContentMimeType | undefined} The desired MIME type.
     */
    getProduces() {
      return this.produces;
    }
  };
  var ResponseEntityBuilder = class {
    /**
     * @param   {HttpStatus} status - The HTTP status code.
     */
    constructor(status) {
      this.headers = {};
      this.status = status;
    }
    /**
     * Adds a header to the response.
     *
     * @param   {string} name - The header name.
     * @param   {string} value - The header value.
     * @returns {ResponseEntityBuilder} The builder.
     */
    header(name, value) {
      this.headers[name] = value;
      return this;
    }
    /**
     * Sets the produces MIME type.
     *
     * @param   {ContentMimeType} produces - The MIME type.
     * @returns {ResponseEntityBuilder} The builder.
     */
    contentType(produces) {
      this.produces = produces;
      return this;
    }
    /**
     * Builds the ResponseEntity with the given body.
     *
     * @param   {T} [body] - The response body.
     * @returns {ResponseEntity<T>} The ResponseEntity.
     */
    body(body = null) {
      return new ResponseEntity(body, this.status, this.headers, this.produces);
    }
    /**
     * Builds the ResponseEntity with no body.
     *
     * @returns {ResponseEntity<void>} The ResponseEntity.
     */
    build() {
      return new ResponseEntity(null, this.status, this.headers, this.produces);
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/shared/utils/isResponseEntity.js
  function isResponseEntity(value) {
    return value instanceof ResponseEntity;
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/shared/utils/isInjectable.js
  function isInjectable(value) {
    return !!Reflect.hasMetadata(INJECTABLE_WATERMARK, value);
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/service/EventDispatcher.js
  var EventDispatcher = class {
    /**
     * Creates a new instance of EventDispatcher.
     *
     * @param {Resolver} resolver The dependency resolver.
     * @param {Map<Newable, unknown>} controllers The registered controllers.
     */
    constructor(resolver, controllers) {
      this.resolver = resolver;
      this.controllers = controllers;
    }
    /**
     * Dispatches an event to the registered controllers.
     *
     * @param   {AppsScriptEventType} eventType - The type of the event to dispatch.
     * @param   {unknown} event - The event object.
     * @returns {void | Promise<void>}
     */
    dispatch(eventType, event) {
      const promises = [];
      for (const controller of this.controllers.keys()) {
        const processedMethods = /* @__PURE__ */ new Set();
        let prototype = controller.prototype;
        while (prototype && prototype !== Object.prototype) {
          const propertyNames = Object.getOwnPropertyNames(prototype);
          for (const propertyName of propertyNames) {
            if (propertyName === "constructor" || processedMethods.has(propertyName)) {
              continue;
            }
            processedMethods.add(propertyName);
            const methodHandler = prototype[propertyName];
            const eventMetadata = Reflect.getMetadata(APPSSCRIPT_EVENT_METADATA, methodHandler);
            const options = Reflect.getMetadata(APPSSCRIPT_OPTIONS_METADATA, methodHandler);
            if (eventMetadata === eventType && this.checkFilters(eventType, event, options)) {
              const instance = this.resolver.resolve(controller);
              if (!isRecord(instance)) {
                continue;
              }
              const args = this.buildMethodParams(instance, propertyName, event);
              const handler = instance[propertyName];
              if (isFunctionLike(handler)) {
                const result = Reflect.apply(handler, instance, args);
                if (result instanceof Promise) {
                  promises.push(result);
                }
              }
            }
          }
          prototype = Object.getPrototypeOf(prototype);
        }
      }
      if (promises.length > 0) {
        return Promise.all(promises).then(() => {
        });
      }
    }
    /**
     * Dispatches an event to the registered controllers by its name.
     *
     * @param   {string} methodName - The name of the method to dispatch the event to.
     * @param   {unknown} event - The event object.
     * @returns {void | Promise<void>}
     */
    dispatchByName(methodName, event) {
      const promises = [];
      for (const controller of this.controllers.keys()) {
        const instance = this.resolver.resolve(controller);
        if (!isRecord(instance)) {
          continue;
        }
        const prototype = Object.getPrototypeOf(instance);
        const methodNames = [];
        let currentProto = prototype;
        while (currentProto && currentProto !== Object.prototype) {
          Object.getOwnPropertyNames(currentProto).forEach((name) => {
            if (name !== "constructor" && isFunctionLike(currentProto[name])) {
              methodNames.push(name);
            }
          });
          currentProto = Object.getPrototypeOf(currentProto);
        }
        if (!methodNames.includes(methodName)) {
          continue;
        }
        const method = instance[methodName];
        if (!isFunctionLike(method)) {
          console.warn("Method '%s' in controller '%s' is not a callable function and was skipped during event handling.", methodName, controller.name);
          continue;
        }
        const args = this.buildMethodParams(instance, methodName, event);
        try {
          const result = Reflect.apply(method, instance, args);
          if (result instanceof Promise) {
            promises.push(result.catch((err) => {
              console.error("Error:", err instanceof Error ? err.stack : String(err));
            }));
          }
        } catch (err) {
          console.error("Error:", err instanceof Error ? err.stack : String(err));
        }
      }
      if (promises.length > 0) {
        return Promise.all(promises).then(() => {
        });
      }
    }
    /**
     * Builds the parameters for a controller method.
     *
     * @param   {object} target - The target object.
     * @param   {string | symbol} propertyKey - The name of the property.
     * @param   {unknown} event - The event object.
     * @returns {unknown[]} An array of parameters for the method.
     */
    buildMethodParams(target, propertyKey, event) {
      const targetPrototype = Object.getPrototypeOf(target);
      const rawMetadata = Reflect.getMetadata(PARAM_DEFINITIONS_METADATA, targetPrototype, propertyKey) || {};
      const rawInjectMetadata = getInjectionTokens(targetPrototype, propertyKey);
      const metadata = [
        ...Object.values(rawMetadata),
        ...Object.values(rawInjectMetadata)
      ];
      metadata.sort((a, b) => a.index - b.index);
      const designParamTypes = Reflect.getMetadata(PARAMTYPES_METADATA, targetPrototype, propertyKey) || [];
      const handler = target[propertyKey];
      const args = new Array(Math.max(handler.length, designParamTypes.length, metadata.length > 0 ? Math.max(...metadata.map((m) => m.index)) + 1 : 0));
      for (const param of metadata) {
        switch (param.type) {
          case ParamSource.EVENT:
            args[param.index] = param.key && isRecord(event) ? event[param.key] : event;
            break;
          case ParamSource.INJECT:
            try {
              const tokenToResolve = "token" in param ? param.token : designParamTypes[param.index];
              if (tokenToResolve) {
                args[param.index] = this.resolver.resolve(tokenToResolve);
              } else {
                args[param.index] = void 0;
              }
            } catch {
              args[param.index] = void 0;
            }
            break;
        }
      }
      return args;
    }
    /**
     * Checks if the event should be dispatched based on the provided options.
     *
     * @param   {AppsScriptEventType} eventType - The type of the event.
     * @param   {unknown} event - The event object.
     * @param   {Record<string, unknown> | undefined} options - The options to check against.
     * @returns {boolean} True if the event should be dispatched, false otherwise.
     */
    checkFilters(eventType, event, options) {
      if (!options) {
        return true;
      }
      switch (eventType) {
        case AppsScriptEventType.EDIT:
          if (options.range) {
            if (!isEditEvent(event)) {
              return false;
            }
            const eventRangeA1 = isFunctionLike(event.range?.getA1Notation) ? event.range.getA1Notation() : null;
            if (!eventRangeA1) {
              return false;
            }
            const ranges = Array.isArray(options.range) ? options.range : [options.range];
            return ranges.some((r) => isRegExp(r) ? r.test(eventRangeA1) : eventRangeA1 === r);
          }
          break;
        case AppsScriptEventType.FORM_SUBMIT:
          if (options.formId) {
            if (!isFormSubmitEvent(event)) {
              return false;
            }
            const eventFormId = isFunctionLike(event.source?.getId) ? event.source.getId() : null;
            if (!eventFormId) {
              return false;
            }
            const formIds = Array.isArray(options.formId) ? options.formId : [options.formId];
            return formIds.some((id) => eventFormId === id);
          }
          break;
        case AppsScriptEventType.CHANGE:
          if (options.changeType) {
            if (!isChangeEvent(event)) {
              return false;
            }
            const eventChangeType = event.changeType;
            if (!eventChangeType) {
              return false;
            }
            const changeTypes = Array.isArray(options.changeType) ? options.changeType : [options.changeType];
            return changeTypes.some((type) => eventChangeType === type);
          }
          break;
      }
      return true;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/service/PathMatcher.js
  var PathMatcher = class {
    /**
     * Checks if a given path matches a specified template.
     *
     * @param   {string} template - The path template (e.g., '/users/{id}').
     * @param   {string} actual - The actual request path (e.g., '/users/123').
     * @returns {boolean} `true` if the paths match, otherwise `false`.
     */
    match(template, actual) {
      const tplParts = template.split("/").filter(Boolean);
      const actParts = actual.split("/").filter(Boolean);
      if (tplParts.length !== actParts.length) {
        return false;
      }
      return tplParts.every((part, i) => {
        if (part.startsWith("{") && part.endsWith("}")) {
          return true;
        }
        return part === actParts[i];
      });
    }
    /**
     * Extracts path parameters from an actual URL based on a given template.
     *
     * @param   {string} template - The path template, e.g., "/users/{id}/posts/{postId}".
     * @param   {string} actual - The actual path, e.g., "/users/123/posts/456".
     * @returns {Record<string, string>} An object containing the extracted path parameters.
     */
    extractParams(template, actual) {
      const tplParts = template.split("/").filter(Boolean);
      const actParts = actual.split("/").filter(Boolean);
      const params = {};
      tplParts.forEach((part, i) => {
        if (part.startsWith("{") && part.endsWith("}")) {
          const paramName = part.slice(1, -1);
          params[paramName] = actParts[i];
        }
      });
      return params;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/service/RequestFactory.js
  var RequestFactory = class {
    /**
     * Creates a structured HttpRequest object from a raw Apps Script DoGet or DoPost event.
     *
     * @param   {RequestMethod} methodRequest - The expected request method.
     * @param   {GoogleAppsScript.Events.DoGet | GoogleAppsScript.Events.DoPost} event - The raw Apps Script event object.
     * @returns {HttpRequest} A structured object representing the HTTP request.
     */
    create(methodRequest, event) {
      const headers = ((input) => {
        if (!isString(input)) {
          return null;
        }
        try {
          const parsed = JSON.parse(input.trim());
          return isRecord(parsed) ? parsed : null;
        } catch (err) {
          console.warn("Failed to parse JSON:", err);
        }
        return null;
      })(event?.parameter?.headers) || {};
      const methodParam = event?.parameter?.method?.toLowerCase();
      const method = Object.values(RequestMethod).find((v) => v === methodParam) || methodRequest;
      const rawPathname = event?.pathInfo || event?.parameter?.path || event?.parameter?.pathname || "/";
      const pathname = decodeURI(normalize(rawPathname).trim());
      const search = ((params) => isString(params) && params.length > 0 ? `?${params}` : void 0)(event?.queryString);
      const url = {
        pathname,
        path: search ? `${pathname}${search}` : pathname,
        search,
        query: event?.parameters ?? {}
      };
      const rawBody = [
        RequestMethod.POST,
        RequestMethod.PUT,
        RequestMethod.PATCH,
        RequestMethod.DELETE
      ].includes(method) ? "postData" in event ? event?.postData?.contents : null : null;
      const body = (() => {
        if (!isString(rawBody)) {
          return rawBody;
        }
        const contentType = headers["Content-Type"] || ("postData" in event ? event?.postData?.type : void 0) || "";
        if (contentType.includes("application/json")) {
          try {
            return JSON.parse(rawBody);
          } catch (err) {
            console.warn("Failed to parse JSON body:", err);
          }
        }
        return rawBody;
      })();
      return {
        headers,
        method,
        url,
        body
      };
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/service/Resolver.js
  var Resolver = class {
    /**
     * Creates a new instance of Resolver.
     *
     * @param {Map<InjectionToken, unknown>} _controllers - Registered controllers.
     * @param {Map<InjectionToken, unknown>} _providers - Registered providers.
     * @param {Record<string, any>} _config - Application configuration.
     */
    constructor(_controllers, _providers, _config = {}) {
      this._controllers = _controllers;
      this._providers = _providers;
      this._config = _config;
    }
    /**
     * Resolves a dependency by its injection token.
     *
     * @template T
     * @param    {InjectionToken<T>} token - The injection token.
     * @returns  {T} The resolved instance.
     * @throws   {Error} If the dependency cannot be resolved.
     */
    resolve(token) {
      if (this._controllers.has(token)) {
        const instance2 = this._controllers.get(token);
        if (instance2)
          return instance2;
      }
      if (this._providers.has(token)) {
        const instance2 = this._providers.get(token);
        if (instance2)
          return instance2;
      }
      if (!isFunctionLike(token)) {
        const tokenName = String(token);
        throw new Error(`[Resolve ERROR]: '${tokenName}' is not registered as a provider or controller.`);
      }
      const target = token;
      const designParamTypes = Reflect.getMetadata(PARAMTYPES_METADATA, target) || [];
      const explicitInjectTokens = getInjectionTokens(target);
      const deps = new Array(Math.max(target.length, designParamTypes.length, Object.keys(explicitInjectTokens).length));
      for (let i = 0; i < deps.length; i++) {
        const paramKey = `${ParamSource.INJECT}:${i}`;
        const injectDefinition = explicitInjectTokens[paramKey];
        if (injectDefinition && injectDefinition.type === ParamSource.VALUE) {
          deps[i] = this.resolveConfigValue(injectDefinition.token);
          continue;
        }
        const tokenToResolve = injectDefinition ? injectDefinition.token : designParamTypes[i];
        if (!tokenToResolve) {
          throw new Error(`[Resolve ERROR]: Dependency at index ${i} of '${target.name}' cannot be resolved (no token).`);
        }
        if (!this._providers.has(tokenToResolve) && !this._controllers.has(tokenToResolve)) {
          if (!isFunctionLike(tokenToResolve)) {
            throw new Error(`[Resolve ERROR]: Invalid injection token at index ${i} of '${target.name}'. Expected a class constructor or a registered token.`);
          }
        }
        deps[i] = this.resolve(tokenToResolve);
      }
      const instance = Reflect.construct(target, deps);
      if (isController(target)) {
        this._controllers.set(target, instance);
      } else if (isInjectable(target)) {
        this._providers.set(target, instance);
      }
      return instance;
    }
    /**
     * Resolves a configuration value by its key.
     * Supports nested keys (e.g., "app.name").
     *
     * @param   {string} key - The configuration key.
     * @returns {unknown} The resolved value.
     */
    resolveConfigValue(key) {
      if (!key)
        return void 0;
      const parts = key.split(".");
      let current = this._config;
      for (const part of parts) {
        if (current === null || typeof current !== "object") {
          return void 0;
        }
        current = current[part];
      }
      return current;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/service/ResponseBuilder.js
  var ResponseBuilder = class {
    /**
     * Creates a new instance of ResponseBuilder.
     *
     * @param {string} [_apiPrefix] - The prefix for API routes (legacy, not used).
     */
    constructor(_apiPrefix) {
    }
    /**
     * Creates a structured HttpResponse object.
     *
     * @param   {HttpRequest} request - The original request object.
     * @param   {HttpStatus} [status] - The desired HTTP status code.
     * @param   {HttpHeaders} [headers] - Optional custom headers.
     * @param   {unknown} [data] - The data to be sent in the response body.
     * @param   {ContentMimeType} [produce] - The produced MIME type.
     * @param   {boolean} [isResponseBody] - Indicates whether the response should be serialized directly into the response body.
     * @returns {HttpResponse} A structured object representing the HTTP response.
     */
    create(request, status, headers = {}, data = null, produce, isResponseBody = false) {
      const resolvedStatus = status ?? ([RequestMethod.GET, RequestMethod.HEAD, RequestMethod.OPTIONS].includes(request.method) ? HttpStatus.OK : HttpStatus.CREATED);
      const statusText = (() => {
        const entry = Object.entries(HttpStatus).find(([, value]) => value === resolvedStatus);
        return entry ? entry[0] : "UNKNOWN_STATUS";
      })();
      const ok = resolvedStatus >= 200 && resolvedStatus < 300;
      return {
        headers,
        ok,
        status: resolvedStatus,
        statusText,
        body: ok || isHtmlOutput(data) || isTextOutput(data) ? data : { error: data },
        produce,
        isResponseBody
      };
    }
    /**
     * Wraps a HttpResponse object into a format suitable for return from Apps Script entry points.
     *
     * @param   {HttpRequest} request - The structured request object.
     * @param   {HttpResponse} response - The structured response object to be wrapped.
     * @returns {GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput | string} A value that Apps Script can return directly to the client.
     */
    wrap(request, response) {
      const contentMimeType = response.produce || ContentMimeType.HTML;
      response.headers["Content-Type"] = contentMimeType;
      const source = request.headers?.["X-Request-Source"];
      const isInternal = source === "internal";
      if (!isInternal && (isHtmlOutput(response.body) || isTextOutput(response.body))) {
        return response.body;
      }
      const target = this.prepareTarget(response, isInternal);
      const content = this.serialize(target, contentMimeType, !!response.isResponseBody, isInternal);
      if (isInternal) {
        return content;
      }
      return this.createOutput(content, contentMimeType);
    }
    /**
     * Prepares the target object for serialization.
     * Handles extraction of content from GAS output objects if necessary.
     *
     * @param   {HttpResponse} response - The original response.
     * @param   {boolean} isInternal
     * @returns {unknown} The prepared target object.
     * @private
     */
    prepareTarget(response, isInternal) {
      if (isInternal || !response.isResponseBody) {
        if (isHtmlOutput(response.body) || isTextOutput(response.body)) {
          return {
            ...response,
            body: response.body.getContent()
          };
        }
        return response;
      }
      return response.body;
    }
    /**
     * Serializes the target to a string.
     *
     * @param   {unknown} target - The object to serialize.
     * @param   {ContentMimeType} mimeType - The content MIME type.
     * @param   {boolean} isResponseBody - Whether @ResponseBody is used.
     * @param   {boolean} isInternal
     * @returns {string} The serialized string.
     * @private
     */
    serialize(target, mimeType, isResponseBody, isInternal) {
      if (mimeType === ContentMimeType.HTML && isString(target) && !isResponseBody && !isInternal) {
        return target;
      }
      return JSON.stringify(target);
    }
    /**
     * Creates the final GAS output object.
     *
     * @param   {string} content - The serialized content.
     * @param   {ContentMimeType} mimeType - The content MIME type.
     * @returns {GoogleAppsScript.Content.TextOutput | GoogleAppsScript.HTML.HtmlOutput} The GAS output object.
     * @private
     */
    createOutput(content, mimeType) {
      if (mimeType === ContentMimeType.HTML) {
        return HtmlService.createHtmlOutput(content);
      }
      const gasMimeType = this.mapToGasMimeType(mimeType);
      return ContentService.createTextOutput(content).setMimeType(gasMimeType);
    }
    /**
     * Maps an internal MIME type to GAS MimeType enum.
     *
     * @param   {ContentMimeType} mimeType - Our internal MIME type.
     * @returns {GoogleAppsScript.Content.MimeType} Google's MIME type.
     * @private
     */
    mapToGasMimeType(mimeType) {
      const map = {
        [ContentMimeType.ATOM]: ContentService.MimeType.ATOM,
        [ContentMimeType.CSV]: ContentService.MimeType.CSV,
        [ContentMimeType.ICAL]: ContentService.MimeType.ICAL,
        [ContentMimeType.JAVASCRIPT]: ContentService.MimeType.JAVASCRIPT,
        [ContentMimeType.JSON]: ContentService.MimeType.JSON,
        [ContentMimeType.RSS]: ContentService.MimeType.RSS,
        [ContentMimeType.TEXT]: ContentService.MimeType.TEXT,
        [ContentMimeType.VCARD]: ContentService.MimeType.VCARD,
        [ContentMimeType.XML]: ContentService.MimeType.XML
      };
      return map[mimeType] || ContentService.MimeType.TEXT;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/service/Router.js
  var Router = class {
    /**
     * Creates a new instance of Router.
     *
     * @param {Resolver} _resolver The dependency resolver.
     * @param {RouteMetadata[]} _routes The registered routes.
     * @param {InjectionToken[]} _advices The registered controller advices.
     * @param {Record<string, any>} _config Application configuration.
     */
    constructor(_resolver, _routes, _advices = [], _config = {}, _apiPrefix = null) {
      this._resolver = _resolver;
      this._routes = _routes;
      this._advices = _advices;
      this._config = _config;
      this._apiPrefix = _apiPrefix;
      this.pathMatcher = new PathMatcher();
    }
    /**
     * Handles an incoming HTTP request.
     *
     * @param   {HttpRequest} request - The HTTP request object.
     * @param   {GoogleAppsScript.Events.DoGet | GoogleAppsScript.Events.DoPost} event - The Apps Script event object.
     * @param   {Function} responseBuilder - A function to build an HTTP response.
     * @returns {HttpResponse | Promise<HttpResponse>} The HTTP response.
     */
    handle(request, event, responseBuilder) {
      const requestPathname = request.url.pathname;
      const route = this._routes.find((route2) => {
        const routeMethod = String(route2.method).toLowerCase().trim();
        const requestMethod = String(request.method).toLowerCase().trim();
        if (routeMethod !== requestMethod) {
          return false;
        }
        return this.pathMatcher.match(route2.path, requestPathname);
      });
      if (!route) {
        return responseBuilder(request, HttpStatus.NOT_FOUND, {}, { message: `Cannot ${request.method} ${request.url.pathname}` });
      }
      const controllerInstance = this._resolver.resolve(route.controller);
      if (!isRecord(controllerInstance)) {
        throw new Error(`Controller '${route.controller.name}' is not a valid object.`);
      }
      const handler = controllerInstance[route.handler];
      if (!isFunctionLike(handler)) {
        throw new Error(`Method '${String(route.handler)}' not found in controller '${route.controller.name}'.`);
      }
      const params = this.pathMatcher.extractParams(route.path, requestPathname);
      const isResponseBody = !!(Reflect.getMetadata(RESPONSE_BODY_METADATA, handler) || Reflect.getMetadata(RESPONSE_BODY_METADATA, route.controller));
      const ctx = {
        event,
        params,
        query: request.url.query,
        request,
        headers: request.headers,
        body: request.body,
        response: responseBuilder(request, void 0, {}, null, route.produce, isResponseBody)
      };
      const args = this.buildMethodParams(controllerInstance, route.handler, ctx);
      try {
        const result = Reflect.apply(handler, controllerInstance, args);
        if (result instanceof Promise) {
          return result.then((resolvedResult) => {
            return this.processResult(resolvedResult, handler, request, ctx, responseBuilder, route.produce, controllerInstance);
          }).catch((err) => {
            const handledResponse = this.handleException(err, controllerInstance, request, event, responseBuilder, route.produce);
            if (handledResponse instanceof Promise) {
              return handledResponse.then((resolvedHandledResponse) => {
                if (resolvedHandledResponse) {
                  return resolvedHandledResponse;
                }
                return this.createErrorResponse(err, request, responseBuilder, route.produce);
              });
            }
            if (handledResponse) {
              return Promise.resolve(handledResponse);
            }
            return Promise.resolve(this.createErrorResponse(err, request, responseBuilder, route.produce));
          });
        }
        return this.processResult(result, handler, request, ctx, responseBuilder, route.produce, controllerInstance);
      } catch (err) {
        const handledResponse = this.handleException(err, controllerInstance, request, event, responseBuilder, route.produce);
        if (handledResponse instanceof Promise) {
          return handledResponse.then((resolvedHandledResponse) => {
            if (resolvedHandledResponse) {
              return resolvedHandledResponse;
            }
            return this.createErrorResponse(err, request, responseBuilder, route.produce);
          });
        }
        if (handledResponse) {
          return handledResponse;
        }
        return this.createErrorResponse(err, request, responseBuilder, route.produce);
      }
    }
    /**
     * Processes the result of a controller method.
     *
     * @param   {unknown} result - The result of the controller method.
     * @param   {any} handler - The controller method handler.
     * @param   {HttpRequest} request - The HTTP request object.
     * @param   {RouteExecutionContext} ctx - The route execution context.
     * @param   {Function} responseBuilder - A function to build an HTTP response.
     * @returns {HttpResponse} The HTTP response.
     */
    processResult(result, handler, request, ctx, responseBuilder, produce, controllerInstance) {
      if (isHttpResponse(result)) {
        return result;
      }
      const isResponseBody = !!(Reflect.getMetadata(RESPONSE_BODY_METADATA, handler) || controllerInstance && Reflect.getMetadata(RESPONSE_BODY_METADATA, controllerInstance.constructor));
      if (isResponseEntity(result)) {
        return responseBuilder(request, result.getStatusCode(), result.getHeaders(), result.getBody(), result.getProduces() || produce, isResponseBody);
      }
      const responseStatus = Reflect.getMetadata(RESPONSE_STATUS_METADATA, handler);
      return responseBuilder(request, responseStatus ?? ctx.response?.status, ctx.response?.headers, result, produce, isResponseBody);
    }
    /**
     * Creates an error response from an error object.
     *
     * @param   {unknown} err - The error object.
     * @param   {HttpRequest} request - The HTTP request object.
     * @param   {Function} responseBuilder - A function to build an HTTP response.
     * @returns {HttpResponse} The error response.
     */
    createErrorResponse(err, request, responseBuilder, produce) {
      let status = 500;
      let message = String(err);
      if (isRecord(err)) {
        if (isNumber(err.status))
          status = err.status;
        if (isString(err.message))
          message = err.message;
      }
      return responseBuilder(request, status, {}, message, produce);
    }
    /**
     * Handles an exception using registered exception handlers.
     *
     * @param   {unknown} err - The error to handle.
     * @param   {any} controllerInstance - The controller instance where the error occurred.
     * @param   {HttpRequest} request - The HTTP request object.
     * @param   {GoogleAppsScript.Events.DoGet | GoogleAppsScript.Events.DoPost} event - The Apps Script event object.
     * @param   {Function} responseBuilder - A function to build an HTTP response.
     * @returns {HttpResponse | Promise<HttpResponse | null> | null} The handled response, or null if no handler was found.
     */
    handleException(err, controllerInstance, request, event, responseBuilder, produce) {
      const localHandler = this.findExceptionHandler(err, controllerInstance);
      if (localHandler) {
        return this.callExceptionHandler(localHandler, controllerInstance, err, request, event, responseBuilder, produce);
      }
      for (const adviceToken of this._advices) {
        const adviceInstance = this._resolver.resolve(adviceToken);
        const globalHandler = this.findExceptionHandler(err, adviceInstance);
        if (globalHandler) {
          return this.callExceptionHandler(globalHandler, adviceInstance, err, request, event, responseBuilder, produce);
        }
      }
      return null;
    }
    /**
     * Finds an exception handler for a given error in a target instance.
     *
     * @param   {unknown} err - The error to handle.
     * @param   {any} instance - The instance to search for handlers.
     * @returns {string | null} The name of the handler method, or null if not found.
     */
    findExceptionHandler(err, instance) {
      if (!instance) {
        return null;
      }
      let prototype = Object.getPrototypeOf(instance);
      const visitedMethods = /* @__PURE__ */ new Set();
      while (prototype && prototype !== Object.prototype) {
        const propertyNames = Object.getOwnPropertyNames(prototype);
        for (const propertyName of propertyNames) {
          if (propertyName === "constructor" || visitedMethods.has(propertyName)) {
            continue;
          }
          visitedMethods.add(propertyName);
          const method = instance[propertyName];
          if (!isFunctionLike(method))
            continue;
          const exceptions = Reflect.getMetadata(EXCEPTION_HANDLER_METADATA, method);
          if (exceptions && Array.isArray(exceptions)) {
            for (const exceptionClass of exceptions) {
              if (err instanceof exceptionClass) {
                return propertyName;
              }
            }
          }
        }
        prototype = Object.getPrototypeOf(prototype);
      }
      return null;
    }
    /**
     * Calls an exception handler method.
     *
     * @param   {string} handlerName - The name of the handler method.
     * @param   {any} instance - The instance containing the handler method.
     * @param   {unknown} err - The error to handle.
     * @param   {HttpRequest} request - The HTTP request object.
     * @param   {GoogleAppsScript.Events.DoGet | GoogleAppsScript.Events.DoPost} event - The Apps Script event object.
     * @param   {Function} responseBuilder - A function to build an HTTP response.
     * @returns {HttpResponse | Promise<HttpResponse>} The resulting HTTP response.
     */
    callExceptionHandler(handlerName, instance, err, request, event, responseBuilder, produce) {
      const handler = instance[handlerName];
      const isResponseBody = !!(Reflect.getMetadata(RESPONSE_BODY_METADATA, handler) || Reflect.getMetadata(RESPONSE_BODY_METADATA, instance.constructor));
      const result = Reflect.apply(handler, instance, [err, request, event]);
      const produceFromHandler = Reflect.getMetadata(PRODUCE_METADATA, handler);
      const resolvedProduce = produceFromHandler || produce;
      if (result instanceof Promise) {
        return result.then((resolvedResult) => {
          if (isHttpResponse(resolvedResult)) {
            return resolvedResult;
          }
          if (isResponseEntity(resolvedResult)) {
            return responseBuilder(request, resolvedResult.getStatusCode(), resolvedResult.getHeaders(), resolvedResult.getBody(), resolvedResult.getProduces() || resolvedProduce, isResponseBody);
          }
          const responseStatus2 = Reflect.getMetadata(RESPONSE_STATUS_METADATA, handler);
          return responseBuilder(request, responseStatus2, {}, resolvedResult, resolvedProduce, isResponseBody);
        });
      }
      if (isHttpResponse(result)) {
        return result;
      }
      if (isResponseEntity(result)) {
        return responseBuilder(request, result.getStatusCode(), result.getHeaders(), result.getBody(), result.getProduces() || resolvedProduce, isResponseBody);
      }
      const responseStatus = Reflect.getMetadata(RESPONSE_STATUS_METADATA, handler);
      return responseBuilder(request, responseStatus, {}, result, resolvedProduce, isResponseBody);
    }
    /**
     * Resolves a configuration value by its key.
     * Supports nested keys (e.g., "app.name").
     *
     * @param   {string} key - The configuration key.
     * @returns {unknown} The resolved value.
     */
    resolveConfigValue(key) {
      if (!key)
        return void 0;
      const parts = key.split(".");
      let current = this._config;
      for (const part of parts) {
        if (current === null || typeof current !== "object") {
          return void 0;
        }
        current = current[part];
      }
      return current;
    }
    /**
     * Builds the parameters for a controller method based on the route execution context.
     *
     * @param   {object} target - The target object.
     * @param   {string | symbol} propertyKey - The name of the property.
     * @param   {RouteExecutionContext} ctx - The route execution context.
     * @returns {unknown[]} An array of parameters for the method.
     */
    buildMethodParams(target, propertyKey, ctx) {
      const targetPrototype = Object.getPrototypeOf(target);
      const rawMetadata = Reflect.getMetadata(PARAM_DEFINITIONS_METADATA, targetPrototype, propertyKey) || {};
      const rawInjectMetadata = getInjectionTokens(targetPrototype, propertyKey);
      const metadata = [
        ...Object.values(rawMetadata),
        ...Object.values(rawInjectMetadata)
      ];
      metadata.sort((a, b) => a.index - b.index);
      const designParamTypes = Reflect.getMetadata(PARAMTYPES_METADATA, targetPrototype, propertyKey) || [];
      const handler = target[propertyKey];
      const controllerPipes = Reflect.getMetadata(PIPES_METADATA, targetPrototype.constructor) || [];
      const methodPipes = Reflect.getMetadata(PIPES_METADATA, handler) || [];
      const globalPipes = [...controllerPipes, ...methodPipes];
      const args = new Array(Math.max(handler.length, designParamTypes.length, metadata.length > 0 ? Math.max(...metadata.map((m) => m.index)) + 1 : 0));
      for (const param of metadata) {
        let value;
        switch (param.type) {
          case ParamSource.PARAM:
            value = param.key ? (ctx.params ?? {})[param.key] : ctx.params;
            break;
          case ParamSource.QUERY:
            value = param.key ? (ctx.query ?? {})[param.key] : ctx.query;
            break;
          case ParamSource.BODY:
            value = param.key && isRecord(ctx.body) ? ctx.body[param.key] : ctx.body;
            break;
          case ParamSource.EVENT:
            value = param.key && isRecord(ctx.event) ? ctx.event[param.key] : ctx.event;
            break;
          case ParamSource.REQUEST:
            value = param.key && isRecord(ctx.request) ? ctx.request[param.key] : ctx.request;
            break;
          case ParamSource.HEADERS:
            {
              if (param.key && ctx.headers) {
                const headerKey = Object.keys(ctx.headers).find((k) => k.toLowerCase() === param.key.toLowerCase());
                value = headerKey ? ctx.headers[headerKey] : void 0;
              } else {
                value = ctx.headers;
              }
            }
            break;
          case ParamSource.RESPONSE:
            value = param.key && isRecord(ctx.response) ? ctx.response[param.key] : ctx.response;
            break;
          case ParamSource.VALUE:
            {
              const valueKey = "key" in param ? param.key : "token" in param ? param.token : void 0;
              value = this.resolveConfigValue(valueKey);
            }
            break;
          case ParamSource.INJECT:
            {
              try {
                const tokenToResolve = "token" in param ? param.token : designParamTypes[param.index];
                if (tokenToResolve) {
                  value = this._resolver.resolve(tokenToResolve);
                } else {
                  value = void 0;
                }
              } catch {
                value = void 0;
              }
            }
            break;
        }
        const pipes = [
          ...globalPipes,
          ..."pipes" in param && Array.isArray(param.pipes) ? param.pipes : []
        ];
        for (const pipe of pipes) {
          try {
            if (typeof pipe === "function") {
              if (pipe.prototype && pipe.prototype.transform) {
                const pipeInstance = this._resolver.resolve(pipe);
                value = pipeInstance.transform(value, {
                  type: param.type,
                  metatype: designParamTypes[param.index],
                  data: "key" in param ? param.key : void 0
                });
              } else {
                value = pipe(value, {
                  type: param.type,
                  metatype: designParamTypes[param.index],
                  data: "key" in param ? param.key : void 0
                });
              }
            } else if (pipe && typeof pipe.transform === "function") {
              value = pipe.transform(value, {
                type: param.type,
                metatype: designParamTypes[param.index],
                data: "key" in param ? param.key : void 0
              });
            }
          } catch (err) {
            throw err;
          }
        }
        args[param.index] = value;
      }
      return args;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/service/RouterExplorer.js
  var RouterExplorer = class {
    /**
     * Explores the registered controllers and extracts route metadata.
     *
     * @param   {Map<Newable, unknown>} controllers - The registered controllers.
     * @returns {RouteMetadata[]} An array of extracted route metadata.
     */
    explore(controllers) {
      const routes = [];
      for (const controller of controllers.keys()) {
        const controllerType = Reflect.getMetadata(CONTROLLER_TYPE_METADATA, controller) || null;
        const isHttpController = controllerType === "http";
        if (!isHttpController) {
          continue;
        }
        const controllerOptions = Reflect.getMetadata(CONTROLLER_OPTIONS_METADATA, controller) || {};
        const basePath = controllerOptions.basePath || "/";
        let prototype = controller.prototype;
        const visitedMethods = /* @__PURE__ */ new Set();
        while (prototype && prototype !== Object.prototype) {
          const propertyNames = Object.getOwnPropertyNames(prototype);
          for (const propertyName of propertyNames) {
            if (propertyName === "constructor" || visitedMethods.has(propertyName)) {
              continue;
            }
            visitedMethods.add(propertyName);
            const methodHandler = prototype[propertyName];
            const routePath = Reflect.getMetadata(PATH_METADATA, methodHandler);
            const requestMethods = Reflect.getMetadata(METHOD_METADATA, methodHandler);
            const produce = Reflect.getMetadata(PRODUCE_METADATA, methodHandler);
            if (routePath && requestMethods) {
              const methods = Array.isArray(requestMethods) ? requestMethods : [requestMethods];
              for (const method of methods) {
                routes.push({
                  controller,
                  handler: propertyName,
                  method,
                  path: decodeURI(normalize(`/${basePath}/${routePath}`)),
                  produce
                });
              }
            }
          }
          prototype = Object.getPrototypeOf(prototype);
        }
      }
      return routes;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/BaseBootApplication.js
  var BaseBootApplication = class {
    /**
     * Creates a new instance of BaseBootApplication.
     *
     * @param {ApplicationConfig} config - The application configuration.
     */
    constructor(config) {
      this._controllers = /* @__PURE__ */ new Map();
      this._providers = /* @__PURE__ */ new Map();
      this._advices = [];
      this._config = config?.config ?? {};
      (config?.controllers || []).forEach((c) => this._controllers.set(c, null));
      (config?.providers || []).forEach((provider) => {
        let token;
        if ("provide" in provider) {
          token = provider.provide;
          if ("useValue" in provider) {
            this._providers.set(provider.provide, provider.useValue);
          } else if ("useClass" in provider) {
            this._providers.set(provider.provide, null);
          } else if ("useFactory" in provider) {
            this._providers.set(provider.provide, null);
          } else if ("useExisting" in provider) {
            this._providers.set(provider.provide, null);
          }
        } else {
          token = provider;
          this._providers.set(provider, null);
        }
        if (isControllerAdvice(token)) {
          this._advices.push(token);
        }
      });
      this._resolver = new Resolver(this._controllers, this._providers, this._config);
      this._requestFactory = new RequestFactory();
      const apiPrefix = isString(config?.apiPrefix) && !isEmpty(config.apiPrefix) ? normalize(`/${config.apiPrefix}/`) : "/api";
      this._apiPrefix = apiPrefix;
      this._responseBuilder = new ResponseBuilder(apiPrefix);
      const explorer = new RouterExplorer();
      const routes = explorer.explore(this._controllers);
      this._router = new Router(this._resolver, routes, this._advices, this._config, apiPrefix);
      this._eventDispatcher = new EventDispatcher(this._resolver, this._controllers);
    }
    /**
     * Handles incoming HTTP requests and routes them to the appropriate controller.
     *
     * @param   {RequestMethod} method - The HTTP method (GET or POST).
     * @param   {GoogleAppsScript.Events.DoGet | GoogleAppsScript.Events.DoPost} event - The Apps Script event object.
     * @returns {{ request: HttpRequest, response: HttpResponse | Promise<HttpResponse> }} The request and response.
     */
    handleHttpRequestInternal(method, event) {
      const request = this._requestFactory.create(method, event);
      const response = this._router.handle(request, event, (req, status, headers, data, produce, isResponseBody) => this._responseBuilder.create(req, status, headers, data, produce, isResponseBody));
      return { request, response };
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/BootApplication.js
  var BootApplication = class extends BaseBootApplication {
    /**
     * Creates a new instance of BootApplication.
     *
     * @param {ApplicationConfig} config - The application configuration.
     */
    constructor(config) {
      super(config);
    }
    /**
     * Returns a Proxy object that can be used to handle Google Apps Script menu actions.
     *
     * @returns {AppsScriptMenuProxy} A Proxy object.
     */
    get onMenu() {
      const handler = () => proxy;
      const proxy = new Proxy(handler, {
        get: (target, prop, receiver) => {
          if (!isString(prop)) {
            return Reflect.get(target, prop, receiver);
          }
          if (prop === "inspect") {
            return Reflect.get(target, prop, receiver);
          }
          if (prop === "apply" || prop === "call" || prop === "bind") {
            return Reflect.get(target, prop, receiver);
          }
          return (event) => {
            return this._eventDispatcher.dispatchByName(prop, event);
          };
        },
        apply: (target, thisArg, argArray) => {
          return Reflect.apply(target, thisArg, argArray);
        }
      });
      return proxy;
    }
    /**
     * Handles Google Apps Script doGet events.
     *
     * @param   {GoogleAppsScript.Events.DoGet} event - The doGet event object.
     * @returns {GoogleAppsScript.HTML.HtmlOutput | GoogleAppsScript.Content.TextOutput | string} The response object or string.
     */
    doGet(event) {
      const { request, response } = this.handleHttpRequestInternal(RequestMethod.GET, event);
      if (response instanceof Promise) {
        return response.then((res) => this._responseBuilder.wrap(request, res));
      }
      return this._responseBuilder.wrap(request, response);
    }
    /**
     * Handles Google Apps Script doPost events.
     *
     * @param   {GoogleAppsScript.Events.DoPost} event - The doPost event object.
     * @returns {GoogleAppsScript.HTML.HtmlOutput | GoogleAppsScript.Content.TextOutput | string} The response object or string.
     */
    doPost(event) {
      const { request, response } = this.handleHttpRequestInternal(RequestMethod.POST, event);
      if (response instanceof Promise) {
        return response.then((res) => this._responseBuilder.wrap(request, res));
      }
      return this._responseBuilder.wrap(request, response);
    }
    /**
     * Handles Google Apps Script onInstall events.
     *
     * @param   {GoogleAppsScript.Events.AddonOnInstall} event - The onInstall event object.
     * @returns {void | Promise<void>}
     */
    onInstall(event) {
      return this._eventDispatcher.dispatch(AppsScriptEventType.INSTALL, event);
    }
    /**
     * Handles Google Apps Script onOpen events.
     *
     * @param   {GoogleAppsScript.Events.AppsScriptEvent} event - The onOpen event object.
     * @returns {void | Promise<void>}
     */
    onOpen(event) {
      return this._eventDispatcher.dispatch(AppsScriptEventType.OPEN, event);
    }
    /**
     * Handles Google Apps Script onEdit events.
     *
     * @param   {GoogleAppsScript.Events.SheetsOnEdit} event - The onEdit event object.
     * @returns {void | Promise<void>}
     */
    onEdit(event) {
      return this._eventDispatcher.dispatch(AppsScriptEventType.EDIT, event);
    }
    /**
     * Handles Google Apps Script onChange events.
     *
     * @param   {GoogleAppsScript.Events.SheetsOnChange} event - The onChange event object.
     * @returns {void | Promise<void>}
     */
    onChange(event) {
      return this._eventDispatcher.dispatch(AppsScriptEventType.CHANGE, event);
    }
    /**
     * Handles Google Apps Script onFormSubmit events.
     *
     * @param   {GoogleAppsScript.Events.FormsOnFormSubmit} event - The onFormSubmit event object.
     * @returns {void | Promise<void>}
     */
    onFormSubmit(event) {
      return this._eventDispatcher.dispatch(AppsScriptEventType.FORM_SUBMIT, event);
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/AsyncBootApplication.js
  var AsyncBootApplication = class extends BaseBootApplication {
    /**
     * Creates a new instance of AsyncBootApplication.
     *
     * @param {ApplicationConfig} config - The application configuration.
     */
    constructor(config) {
      super(config);
    }
    /**
     * Returns a Proxy object that can be used to handle Google Apps Script menu actions.
     *
     * @returns {AppsScriptMenuProxy} A Proxy object.
     */
    get onMenu() {
      const handler = () => proxy;
      const proxy = new Proxy(handler, {
        get: (target, prop, receiver) => {
          if (!isString(prop)) {
            return Reflect.get(target, prop, receiver);
          }
          if (prop === "inspect") {
            return Reflect.get(target, prop, receiver);
          }
          if (prop === "apply" || prop === "call" || prop === "bind") {
            return Reflect.get(target, prop, receiver);
          }
          return async (event) => {
            await this._eventDispatcher.dispatchByName(prop, event);
          };
        },
        apply: (target, thisArg, argArray) => {
          return Reflect.apply(target, thisArg, argArray);
        }
      });
      return proxy;
    }
    /**
     * Handles Google Apps Script doGet events.
     *
     * @param   {GoogleAppsScript.Events.DoGet} event - The doGet event object.
     * @returns {Promise<GoogleAppsScript.HTML.HtmlOutput | GoogleAppsScript.Content.TextOutput | string>} The response.
     */
    async doGet(event) {
      const { request, response } = this.handleHttpRequestInternal(RequestMethod.GET, event);
      const resolvedResponse = response instanceof Promise ? await response : response;
      return this._responseBuilder.wrap(request, resolvedResponse);
    }
    /**
     * Handles Google Apps Script doPost events.
     *
     * @param   {GoogleAppsScript.Events.DoPost} event - The doPost event object.
     * @returns {Promise<GoogleAppsScript.HTML.HtmlOutput | GoogleAppsScript.Content.TextOutput | string>} The response.
     */
    async doPost(event) {
      const { request, response } = this.handleHttpRequestInternal(RequestMethod.POST, event);
      const resolvedResponse = response instanceof Promise ? await response : response;
      return this._responseBuilder.wrap(request, resolvedResponse);
    }
    /**
     * Handles Google Apps Script onInstall events.
     *
     * @param   {GoogleAppsScript.Events.AddonOnInstall} event - The onInstall event object.
     * @returns {Promise<void>}
     */
    async onInstall(event) {
      await this._eventDispatcher.dispatch(AppsScriptEventType.INSTALL, event);
    }
    /**
     * Handles Google Apps Script onOpen events.
     *
     * @param   {GoogleAppsScript.Events.AppsScriptEvent} event - The onOpen event object.
     * @returns {Promise<void>}
     */
    async onOpen(event) {
      await this._eventDispatcher.dispatch(AppsScriptEventType.OPEN, event);
    }
    /**
     * Handles Google Apps Script onEdit events.
     *
     * @param   {GoogleAppsScript.Events.SheetsOnEdit} event - The onEdit event object.
     * @returns {Promise<void>}
     */
    async onEdit(event) {
      await this._eventDispatcher.dispatch(AppsScriptEventType.EDIT, event);
    }
    /**
     * Handles Google Apps Script onChange events.
     *
     * @param   {GoogleAppsScript.Events.SheetsOnChange} event - The onChange event object.
     * @returns {Promise<void>}
     */
    async onChange(event) {
      await this._eventDispatcher.dispatch(AppsScriptEventType.CHANGE, event);
    }
    /**
     * Handles Google Apps Script onFormSubmit events.
     *
     * @param   {GoogleAppsScript.Events.FormsOnFormSubmit} event - The onFormSubmit event object.
     * @returns {Promise<void>}
     */
    async onFormSubmit(event) {
      await this._eventDispatcher.dispatch(AppsScriptEventType.FORM_SUBMIT, event);
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/BootApplicationFactory.js
  var BootApplicationFactory = class {
    /**
     * Creates an instance of BootApplication.
     *
     * @param   {ApplicationConfig} config - The application configuration.
     * @returns {BootApplication} An instance of BootApplication.
     */
    static create(config) {
      return new BootApplication(config);
    }
    /**
     * Creates an instance of AsyncBootApplication.
     *
     * @param   {ApplicationConfig} config - The application configuration.
     * @returns {AsyncBootApplication} An instance of AsyncBootApplication.
     */
    static createAsync(config) {
      return new AsyncBootApplication(config);
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/appsscript/OnChange.js
  var OnChange = createAppsScriptDecorator(AppsScriptEventType.CHANGE);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/appsscript/OnEdit.js
  var OnEdit = createAppsScriptDecorator(AppsScriptEventType.EDIT);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/appsscript/OnFormSubmit.js
  var OnFormSubmit = createAppsScriptDecorator(AppsScriptEventType.FORM_SUBMIT);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/appsscript/OnInstall.js
  var OnInstall = createAppsScriptDecorator(AppsScriptEventType.INSTALL);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/appsscript/OnOpen.js
  var OnOpen = createAppsScriptDecorator(AppsScriptEventType.OPEN);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/params/Body.js
  var Body = createParamDecorator(ParamSource.BODY);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/params/Event.js
  var Event = createParamDecorator(ParamSource.EVENT);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/params/Headers.js
  var Headers = createParamDecorator(ParamSource.HEADERS);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/params/Param.js
  var Param = createParamDecorator(ParamSource.PARAM);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/params/PathVariable.js
  var PathVariable = Param;

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/params/Query.js
  var Query = createParamDecorator(ParamSource.QUERY);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/params/Request.js
  var Request = createParamDecorator(ParamSource.REQUEST);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/params/RequestBody.js
  var RequestBody = Body;

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/params/RequestParam.js
  var RequestParam = Query;

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/params/Response.js
  var Response = createParamDecorator(ParamSource.RESPONSE);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/params/pipes/ParseBooleanPipe.js
  var ParseBooleanPipe = class {
    /**
     * Transforms the input value to a boolean.
     *
     * @param   {string | boolean} value - The value to transform.
     * @param   {ArgumentMetadata} metadata - The argument metadata.
     * @returns {boolean} The parsed boolean.
     */
    transform(value, metadata) {
      if (Array.isArray(value)) {
        value = value[0];
      }
      if (value === true || value === "true" || value === 1 || value === "1") {
        return true;
      }
      if (value === false || value === "false" || value === 0 || value === "0" || value === null || value === void 0) {
        return false;
      }
      throw new Error(`Validation failed (boolean string is expected${metadata.data ? ` for "${metadata.data}"` : ""})`);
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/params/pipes/ParseFloatPipe.js
  var ParseFloatPipe = class {
    /**
     * Transforms the input value to a float.
     *
     * @param   {string | number} value - The value to transform.
     * @param   {ArgumentMetadata} metadata - The argument metadata.
     * @returns {number} The parsed float.
     */
    transform(value, metadata) {
      if (Array.isArray(value)) {
        value = value[0];
      }
      const isNumeric = (typeof value === "number" || typeof value === "string" && value.trim() !== "") && !isNaN(Number(value));
      if (!isNumeric) {
        throw new Error(`Validation failed (numeric string is expected${metadata.data ? ` for "${metadata.data}"` : ""})`);
      }
      return parseFloat(String(value));
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/params/pipes/ParseNumberPipe.js
  var ParseNumberPipe = class {
    /**
     * Transforms the input value to a number.
     *
     * @param   {string | number} value - The value to transform.
     * @param   {ArgumentMetadata} metadata - The argument metadata.
     * @returns {number} The parsed number.
     */
    transform(value, metadata) {
      if (Array.isArray(value)) {
        value = value[0];
      }
      const isNumeric = (typeof value === "number" || typeof value === "string" && value.trim() !== "") && !isNaN(Number(value));
      if (!isNumeric) {
        throw new Error(`Validation failed (numeric string is expected${metadata.data ? ` for "${metadata.data}"` : ""})`);
      }
      return Number(value);
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/params/pipes/ParseIntPipe.js
  var ParseIntPipe = class {
    /**
     * Transforms the input value to an integer.
     *
     * @param   {string | number} value - The value to transform.
     * @param   {ArgumentMetadata} metadata - The argument metadata.
     * @returns {number} The parsed integer.
     */
    transform(value, metadata) {
      if (Array.isArray(value)) {
        value = value[0];
      }
      const isNumeric = (typeof value === "number" || typeof value === "string" && value.trim() !== "") && !isNaN(Number(value));
      if (!isNumeric) {
        throw new Error(`Validation failed (numeric string is expected${metadata.data ? ` for "${metadata.data}"` : ""})`);
      }
      const result = parseInt(String(value), 10);
      if (isNaN(result)) {
        throw new Error(`Validation failed (numeric string is expected${metadata.data ? ` for "${metadata.data}"` : ""})`);
      }
      return result;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/params/pipes/ParseStringPipe.js
  var ParseStringPipe = class {
    /**
     * Transforms the input value to a string.
     *
     * @param   {unknown} value - The value to transform.
     * @param   {ArgumentMetadata} metadata - The argument metadata.
     * @returns {string} The parsed string.
     */
    transform(value, _metadata) {
      if (Array.isArray(value)) {
        value = value[0];
      }
      if (value === null || value === void 0) {
        return "";
      }
      return String(value);
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/params/pipes/ParseBigIntPipe.js
  var ParseBigIntPipe = class {
    /**
     * Transforms the input value to a bigint.
     *
     * @param   {string | number | bigint} value - The value to transform.
     * @param   {ArgumentMetadata} metadata - The argument metadata.
     * @returns {bigint} The parsed bigint.
     */
    transform(value, metadata) {
      if (Array.isArray(value)) {
        value = value[0];
      }
      try {
        return BigInt(value);
      } catch {
        throw new Error(`Validation failed (bigint string is expected${metadata.data ? ` for "${metadata.data}"` : ""})`);
      }
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/routing/Delete.js
  var Delete = createHttpDecorator(RequestMethod.DELETE);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/routing/DeleteMapping.js
  var DeleteMapping = createHttpDecorator(RequestMethod.DELETE);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/routing/Get.js
  var Get = createHttpDecorator(RequestMethod.GET);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/routing/GetMapping.js
  var GetMapping = createHttpDecorator(RequestMethod.GET);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/routing/Head.js
  var Head = createHttpDecorator(RequestMethod.HEAD);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/routing/HeadMapping.js
  var HeadMapping = createHttpDecorator(RequestMethod.HEAD);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/routing/Options.js
  var Options = createHttpDecorator(RequestMethod.OPTIONS);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/routing/OptionsMapping.js
  var OptionsMapping = createHttpDecorator(RequestMethod.OPTIONS);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/routing/Patch.js
  var Patch = createHttpDecorator(RequestMethod.PATCH);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/routing/PatchMapping.js
  var PatchMapping = createHttpDecorator(RequestMethod.PATCH);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/routing/Post.js
  var Post = createHttpDecorator(RequestMethod.POST);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/routing/PostMapping.js
  var PostMapping = createHttpDecorator(RequestMethod.POST);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/routing/Put.js
  var Put = createHttpDecorator(RequestMethod.PUT);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/routing/PutMapping.js
  var PutMapping = createHttpDecorator(RequestMethod.PUT);

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/routing/RequestMapping.js
  function RequestMapping(options) {
    const path = (typeof options === "string" ? options : options?.path || options?.value) || "/";
    const method = typeof options === "object" ? options?.method : void 0;
    const produces = typeof options === "object" ? options?.produces : void 0;
    return (target, _propertyKey, descriptor) => {
      if (descriptor?.value) {
        Reflect.defineMetadata(PATH_METADATA, path, descriptor.value);
        if (method) {
          Reflect.defineMetadata(METHOD_METADATA, method, descriptor.value);
        }
        if (produces) {
          Reflect.defineMetadata(PRODUCE_METADATA, Array.isArray(produces) ? produces[0] : produces, descriptor.value);
        }
      } else {
        const existingOptions = Reflect.getMetadata(CONTROLLER_OPTIONS_METADATA, target) || {};
        Reflect.defineMetadata(CONTROLLER_OPTIONS_METADATA, { ...existingOptions, basePath: path }, target);
      }
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/pipes/AssertFalsePipe.js
  var AssertFalsePipe = class {
    transform(value, metadata) {
      if (value !== false) {
        throw new Error(`Validation failed (${metadata.data ? `for "${metadata.data}" ` : ""}value must be false)`);
      }
      return value;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/AssertFalse.js
  function AssertFalse() {
    return (target, propertyKey, parameterIndex) => {
      addParamPipe(target, propertyKey, parameterIndex, new AssertFalsePipe());
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/pipes/AssertTruePipe.js
  var AssertTruePipe = class {
    transform(value, metadata) {
      if (value !== true) {
        throw new Error(`Validation failed (${metadata.data ? `for "${metadata.data}" ` : ""}value must be true)`);
      }
      return value;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/AssertTrue.js
  function AssertTrue() {
    return (target, propertyKey, parameterIndex) => {
      addParamPipe(target, propertyKey, parameterIndex, new AssertTruePipe());
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/pipes/EmailPipe.js
  var EmailPipe = class {
    transform(value, metadata) {
      if (value === null || value === void 0 || !isEmail(value)) {
        throw new Error(`Validation failed (${metadata.data ? `for "${metadata.data}" ` : ""}value must be a valid email address)`);
      }
      return value;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/Email.js
  function Email() {
    return (target, propertyKey, parameterIndex) => {
      addParamPipe(target, propertyKey, parameterIndex, new EmailPipe());
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/pipes/MaxPipe.js
  var MaxPipe = class {
    /**
     * Creates an instance of MaxPipe.
     *
     * @param   {number | bigint} max - The maximum allowed value.
     */
    constructor(max) {
      this.max = max;
    }
    /**
     * Transforms the input value to ensure it's at most the maximum.
     *
     * @param   {number | bigint} value - The value to validate.
     * @param   {ArgumentMetadata} metadata - The argument metadata.
     * @returns {number | bigint} The validated value.
     */
    transform(value, metadata) {
      if (value > this.max) {
        throw new Error(`Validation failed (${metadata.data ? `for "${metadata.data}" ` : ""}value must be at most ${this.max})`);
      }
      return value;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/Max.js
  function Max(value) {
    return (target, propertyKey, parameterIndex) => {
      addParamPipe(target, propertyKey, parameterIndex, new MaxPipe(value));
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/pipes/MinPipe.js
  var MinPipe = class {
    /**
     * Creates an instance of MinPipe.
     *
     * @param   {number | bigint} min - The minimum allowed value.
     */
    constructor(min) {
      this.min = min;
    }
    /**
     * Transforms the input value to ensure it's at least the minimum.
     *
     * @param   {number | bigint} value - The value to validate.
     * @param   {ArgumentMetadata} metadata - The argument metadata.
     * @returns {number | bigint} The validated value.
     */
    transform(value, metadata) {
      if (value < this.min) {
        throw new Error(`Validation failed (${metadata.data ? `for "${metadata.data}" ` : ""}value must be at least ${this.min})`);
      }
      return value;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/Min.js
  function Min(value) {
    return (target, propertyKey, parameterIndex) => {
      addParamPipe(target, propertyKey, parameterIndex, new MinPipe(value));
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/pipes/NegativePipe.js
  var NegativePipe = class {
    transform(value, metadata) {
      if (value >= 0) {
        throw new Error(`Validation failed (${metadata.data ? `for "${metadata.data}" ` : ""}value must be negative)`);
      }
      return value;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/Negative.js
  function Negative() {
    return (target, propertyKey, parameterIndex) => {
      addParamPipe(target, propertyKey, parameterIndex, new NegativePipe());
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/pipes/NegativeOrZeroPipe.js
  var NegativeOrZeroPipe = class {
    transform(value, metadata) {
      if (value > 0) {
        throw new Error(`Validation failed (${metadata.data ? `for "${metadata.data}" ` : ""}value must be negative or zero)`);
      }
      return value;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/NegativeOrZero.js
  function NegativeOrZero() {
    return (target, propertyKey, parameterIndex) => {
      addParamPipe(target, propertyKey, parameterIndex, new NegativeOrZeroPipe());
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/pipes/NotBlankPipe.js
  var NotBlankPipe = class {
    transform(value, metadata) {
      if (value === null || value === void 0 || typeof value === "string" && value.trim().length === 0) {
        throw new Error(`Validation failed (${metadata.data ? `for "${metadata.data}" ` : ""}value must not be blank)`);
      }
      return value;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/NotBlank.js
  function NotBlank() {
    return (target, propertyKey, parameterIndex) => {
      addParamPipe(target, propertyKey, parameterIndex, new NotBlankPipe());
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/pipes/NotEmptyPipe.js
  var NotEmptyPipe = class {
    transform(value, metadata) {
      if (value === null || value === void 0) {
        throw new Error(`Validation failed (${metadata.data ? `for "${metadata.data}" ` : ""}value must not be empty)`);
      }
      if (typeof value.length === "number" && value.length === 0) {
        throw new Error(`Validation failed (${metadata.data ? `for "${metadata.data}" ` : ""}value must not be empty)`);
      }
      if (typeof value.size === "number" && value.size === 0) {
        throw new Error(`Validation failed (${metadata.data ? `for "${metadata.data}" ` : ""}value must not be empty)`);
      }
      return value;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/NotEmpty.js
  function NotEmpty() {
    return (target, propertyKey, parameterIndex) => {
      addParamPipe(target, propertyKey, parameterIndex, new NotEmptyPipe());
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/pipes/PatternPipe.js
  var PatternPipe = class {
    /**
     * Creates an instance of PatternPipe.
     *
     * @param   {string | RegExp} regexp - The regular expression to match.
     */
    constructor(regexp) {
      this.regexp = typeof regexp === "string" ? new RegExp(regexp) : regexp;
    }
    transform(value, metadata) {
      if (value === null || value === void 0 || !this.regexp.test(value)) {
        throw new Error(`Validation failed (${metadata.data ? `for "${metadata.data}" ` : ""}value must match pattern ${this.regexp})`);
      }
      return value;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/Pattern.js
  function Pattern(value) {
    return (target, propertyKey, parameterIndex) => {
      addParamPipe(target, propertyKey, parameterIndex, new PatternPipe(value));
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/pipes/PositivePipe.js
  var PositivePipe = class {
    transform(value, metadata) {
      if (value <= 0) {
        throw new Error(`Validation failed (${metadata.data ? `for "${metadata.data}" ` : ""}value must be positive)`);
      }
      return value;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/Positive.js
  function Positive() {
    return (target, propertyKey, parameterIndex) => {
      addParamPipe(target, propertyKey, parameterIndex, new PositivePipe());
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/pipes/PositiveOrZeroPipe.js
  var PositiveOrZeroPipe = class {
    transform(value, metadata) {
      if (value < 0) {
        throw new Error(`Validation failed (${metadata.data ? `for "${metadata.data}" ` : ""}value must be positive or zero)`);
      }
      return value;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/PositiveOrZero.js
  function PositiveOrZero() {
    return (target, propertyKey, parameterIndex) => {
      addParamPipe(target, propertyKey, parameterIndex, new PositiveOrZeroPipe());
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/pipes/SizePipe.js
  var SizePipe = class {
    /**
     * Creates an instance of SizePipe.
     *
     * @param   {object} options - The size options.
     * @param   {number} [options.min=0] - The minimum size.
     * @param   {number} [options.max=Infinity] - The maximum size.
     */
    constructor({ min = 0, max = Infinity } = {}) {
      this.min = min;
      this.max = max;
    }
    transform(value, metadata) {
      const size = this.getSize(value);
      if (size < this.min || size > this.max) {
        throw new Error(`Validation failed (${metadata.data ? `for "${metadata.data}" ` : ""}size must be between ${this.min} and ${this.max})`);
      }
      return value;
    }
    getSize(value) {
      if (value === null || value === void 0) {
        return 0;
      }
      if (typeof value.length === "number") {
        return value.length;
      }
      if (typeof value.size === "number") {
        return value.size;
      }
      if (typeof value === "object") {
        return Object.keys(value).length;
      }
      return 0;
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/Size.js
  function Size(options = {}) {
    return (target, propertyKey, parameterIndex) => {
      addParamPipe(target, propertyKey, parameterIndex, new SizePipe(options));
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/validation/UsePipes.js
  function UsePipes(...pipes) {
    return (target, key, descriptor) => {
      if (descriptor) {
        Reflect.defineMetadata(PIPES_METADATA, pipes, descriptor.value);
      } else {
        Reflect.defineMetadata(PIPES_METADATA, pipes, target);
      }
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/Controller.js
  var import_reflect_metadata2 = __toESM(require_Reflect(), 1);
  function Controller(type, options = {}) {
    return (target) => {
      const existingOptions = Reflect.getMetadata(CONTROLLER_OPTIONS_METADATA, target) || {};
      Reflect.defineMetadata(CONTROLLER_WATERMARK, true, target);
      Reflect.defineMetadata(CONTROLLER_TYPE_METADATA, type, target);
      Reflect.defineMetadata(CONTROLLER_OPTIONS_METADATA, { ...existingOptions, ...options }, target);
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/Entity.js
  function Entity() {
    return (target) => {
      Reflect.defineMetadata(ENTITY_WATERMARK, true, target);
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/HttpController.js
  function HttpController(basePath = "/") {
    return Controller("http", { basePath: basePath === void 0 ? "/" : basePath });
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/Inject.js
  function Inject(token) {
    return (target, propertyKey, parameterIndex) => {
      const metadataTarget = target;
      const existing = (propertyKey ? Reflect.getMetadata(INJECT_TOKENS_METADATA, metadataTarget, propertyKey) : Reflect.getMetadata(INJECT_TOKENS_METADATA, metadataTarget)) || {};
      const updatedTokens = assignInjectMetadata(existing, parameterIndex, token);
      if (propertyKey) {
        Reflect.defineMetadata(INJECT_TOKENS_METADATA, updatedTokens, metadataTarget, propertyKey);
      } else {
        Reflect.defineMetadata(INJECT_TOKENS_METADATA, updatedTokens, metadataTarget);
      }
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/Injectable.js
  function Injectable() {
    return (target) => {
      Reflect.defineMetadata(INJECTABLE_WATERMARK, true, target);
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/Repository.js
  function Repository() {
    return Injectable();
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/ResponseBody.js
  function ResponseBody() {
    return (target, propertyKey, descriptor) => {
      if (propertyKey) {
        if (descriptor && descriptor.value) {
          Reflect.defineMetadata(RESPONSE_BODY_METADATA, true, descriptor.value);
        } else {
          Reflect.defineMetadata(RESPONSE_BODY_METADATA, true, target, propertyKey);
        }
      } else {
        Reflect.defineMetadata(RESPONSE_BODY_METADATA, true, target);
      }
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/RestController.js
  function RestController(path) {
    return (target) => {
      HttpController(path)(target);
      ResponseBody()(target);
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/Service.js
  function Service() {
    return Injectable();
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/Autowired.js
  var Autowired = Inject;

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/ResponseStatus.js
  function ResponseStatus(status) {
    return (_target, _propertyKey, descriptor) => {
      if (descriptor.value) {
        Reflect.defineMetadata(RESPONSE_STATUS_METADATA, status, descriptor.value);
      }
      return descriptor;
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/ControllerAdvice.js
  function ControllerAdvice() {
    return (target) => {
      Reflect.defineMetadata(CONTROLLER_ADVICE_WATERMARK, true, target);
      Reflect.defineMetadata(INJECTABLE_WATERMARK, true, target);
    };
  }
  var RestControllerAdvice = ControllerAdvice;

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/ExceptionHandler.js
  function ExceptionHandler(...exceptions) {
    return (_target, _propertyKey, descriptor) => {
      if (descriptor.value) {
        Reflect.defineMetadata(EXCEPTION_HANDLER_METADATA, exceptions, descriptor.value);
      }
      return descriptor;
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/controller/decorators/Value.js
  function Value(key) {
    return (target, propertyKey, parameterIndex) => {
      const metadataTarget = target;
      if (propertyKey) {
        const existing = Reflect.getMetadata(PARAM_DEFINITIONS_METADATA, metadataTarget, propertyKey) || {};
        const updated = assignParamMetadata(existing, parameterIndex, ParamSource.VALUE, key);
        Reflect.defineMetadata(PARAM_DEFINITIONS_METADATA, updated, metadataTarget, propertyKey);
      } else {
        const existing = Reflect.getMetadata(INJECT_TOKENS_METADATA, metadataTarget) || {};
        const updatedTokens = {
          ...existing,
          [`${ParamSource.INJECT}:${parameterIndex}`]: {
            type: ParamSource.VALUE,
            token: key,
            index: parameterIndex
          }
        };
        Reflect.defineMetadata(INJECT_TOKENS_METADATA, updatedTokens, metadataTarget);
      }
    };
  }

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/exceptions/AppException.js
  var AppException = class extends Error {
    constructor(message, status = HttpStatus.INTERNAL_SERVER_ERROR) {
      super(message);
      this.message = message;
      this.status = status;
      this.name = "AppException";
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/exceptions/HttpException.js
  var HttpException = class extends AppException {
    constructor(message, status = HttpStatus.INTERNAL_SERVER_ERROR) {
      super(message, status);
      this.message = message;
      this.status = status;
      this.name = "HttpException";
    }
  };

  // node_modules/.pnpm/bootgs@1.9.2/node_modules/bootgs/dist/index.js
  var createApp = BootApplicationFactory.create;
  var createAsyncApp = BootApplicationFactory.createAsync;
  return __toCommonJS(dist_exports);
})();
/*! Bundled license information:

reflect-metadata/Reflect.js:
  (*! *****************************************************************************
  Copyright (C) Microsoft. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)
*/
