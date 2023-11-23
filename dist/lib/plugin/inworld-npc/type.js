"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetingMode = exports.AutoFollowMode = exports.Type = void 0;
var Type;
(function (Type) {
    Type[Type["Base"] = 0] = "Base";
})(Type || (exports.Type = Type = {}));
var AutoFollowMode;
(function (AutoFollowMode) {
    AutoFollowMode[AutoFollowMode["None"] = 1] = "None";
    AutoFollowMode[AutoFollowMode["PathFinding"] = 2] = "PathFinding";
    AutoFollowMode[AutoFollowMode["PhaseWall"] = 3] = "PhaseWall";
})(AutoFollowMode || (exports.AutoFollowMode = AutoFollowMode = {}));
var GreetingMode;
(function (GreetingMode) {
    GreetingMode[GreetingMode["None"] = 1] = "None";
    GreetingMode[GreetingMode["Instruction"] = 2] = "Instruction";
    GreetingMode[GreetingMode["Verbatim"] = 3] = "Verbatim";
})(GreetingMode || (exports.GreetingMode = GreetingMode = {}));
//# sourceMappingURL=type.js.map