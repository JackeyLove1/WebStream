"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function SumAll() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(SumAll(1, 2, 3, 4, 5));
function SumAll2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    args.forEach(function (value, _) {
        sum += value;
    });
    return sum;
}
console.log(SumAll2(1, 2, 3, 4, 5));
var timer1 = setTimeout(function () { console.log("hello"); }, 10);
clearTimeout(timer1);
var timer2 = setInterval(function () { console.log("hello"); }, 10);
setTimeout(function () {
    clearInterval(timer2);
}, 50);
function tick(from, to) {
    console.log(from);
    if (from < to) {
        setTimeout(function (from, to) {
            tick(from, to);
        }, 1, from + 1, to);
    }
    else {
        console.log("done ... ");
    }
}
tick(1, 10);
var User = /** @class */ (function () {
    function User(name) {
        this._fullName = "";
        this._fullName = name;
    }
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            this._fullName = newName;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.toString = function () {
        return this._fullName;
    };
    return User;
}());
var u1 = new User("name");
console.log(u1);
var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("promise done");
    }, 10);
});
promise1.then(function (result) { return console.log(result); }, function (error) { return console.log(error); });
/*
let promise2 = fetch("https://www.baidu.com")
    .then(response => response.json())
    .then(text => console.log(text))
    .catch(err => console.log(err))
 */
/*
let promise3 = new Promise(
    () => {
        setTimeout(() => {
            throw new Error("Error ... ")
        })})
    .then(resolve => console.log("resolve: ", resolve))
    .catch(error => console.log("catch: ", error))
 */
function fn1() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
fn1().then(function (resolve) {
    console.log("resolve: ", resolve);
});
function showAvatar() {
    return __awaiter(this, void 0, void 0, function () {
        var response, user, githubResponse, githubUser, img;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('/article/promise-chaining/user.json')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    user = _a.sent();
                    return [4 /*yield*/, fetch("https://api.github.com/users/".concat(user.name))];
                case 3:
                    githubResponse = _a.sent();
                    return [4 /*yield*/, githubResponse.json()];
                case 4:
                    githubUser = _a.sent();
                    img = document.createElement('img');
                    img.src = githubUser.avatar_url;
                    img.className = "promise-avatar-example";
                    document.body.append(img);
                    return [4 /*yield*/, new Promise(function (resolve, reject) { return setTimeout(resolve, 3000); })];
                case 5:
                    _a.sent();
                    img.remove();
                    return [2 /*return*/, githubUser];
            }
        });
    });
}
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 34; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
