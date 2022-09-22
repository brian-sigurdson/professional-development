/// <reference path = "./types/AuthTypes.d.ts" />
import auth = require("AuthTypes");

let jon: auth.User;

jon = {
    email: "j@j.com",
    roles: ["admin"]
};

let alice: auth.User;

alice = {
    email: "alice@alice.com",
    roles: ["super_admin"]
};