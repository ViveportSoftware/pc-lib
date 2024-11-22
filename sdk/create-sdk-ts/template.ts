const content = `/******************************************************************************
Copyright (c) 2024 HTC CORPORATION.
***************************************************************************** */

/**
 * 取得 Create SDK 的版本
 */
const version = 'create-sdk-version';

class CameraService {
    static _instance;
    isLockCameraZoomDistance = false;
    minZoomDistance = 0;
    maxZoomDistance = 0;
    constructor() {
        if (CameraService._instance)
            return CameraService._instance;
        CameraService._instance = this;
    }
    get activeCamera() {
        return null;
    }
    get isUsingExternalCamera() {
        return false;
    }
    switchCamera(camera) { }
}

var FlyModeTypes;
(function (FlyModeTypes) {
    FlyModeTypes[FlyModeTypes["Auto"] = 0] = "Auto";
    FlyModeTypes[FlyModeTypes["Enabled"] = 1] = "Enabled";
    FlyModeTypes[FlyModeTypes["Disabled"] = 2] = "Disabled";
})(FlyModeTypes || (FlyModeTypes = {}));
var ImpostorModeTypes;
(function (ImpostorModeTypes) {
    ImpostorModeTypes[ImpostorModeTypes["Auto"] = 0] = "Auto";
    ImpostorModeTypes[ImpostorModeTypes["Disabled"] = 1] = "Disabled";
})(ImpostorModeTypes || (ImpostorModeTypes = {}));

var environment = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get FlyModeTypes () { return FlyModeTypes; },
    get ImpostorModeTypes () { return ImpostorModeTypes; }
});

class EnvironmentService {
    static _instance;
    flyMode = FlyModeTypes.Auto;
    impostorMode = ImpostorModeTypes.Auto;
    constructor() {
        if (EnvironmentService._instance)
            return EnvironmentService._instance;
        EnvironmentService._instance = this;
    }
}

class PlayerProfile {
    #displayName;
    #snapshot;
    #userID;
    #userName;
    constructor(data) {
        const { displayName, snapshot, userID, userName } = data;
        this.#displayName = displayName;
        this.#snapshot = snapshot;
        this.#userID = userID;
        this.#userName = userName;
    }
    /**
     * @type {string}
     */
    get displayName() {
        return this.#displayName;
    }
    /**
     * @type {object}
     * @property {string} head
     * @property {string} fullBody
     */
    get snapshot() {
        return this.#snapshot;
    }
    /**
     * @type {string}
     */
    get userID() {
        return this.#userID;
    }
    /**
     * @type {string}
     */
    get userName() {
        return this.#userName;
    }
}

class PlayerTransform {
    #position;
    #rotation;
    #scale;
    constructor(data) {
        const { position, rotation, scale } = data;
        this.#position = position;
        this.#rotation = rotation;
        this.#scale = scale;
    }
    /**
     * @type {pc.Vec3}
     */
    get position() {
        return this.#position;
    }
    /**
     * @type {pc.Vec4}
     */
    get rotation() {
        return this.#rotation;
    }
    /**
     * @type {pc.Vec3}
     */
    get scale() {
        return this.#scale;
    }
}

class AvatarSnapshot {
    #head;
    #fullBody;
    constructor(data) {
        const { head, fullBody } = data;
        this.#head = head;
        this.#fullBody = fullBody;
    }
    /**
     * @type {string}
     */
    get head() {
        return this.#head;
    }
    /**
     * @type {string}
     */
    get fullBody() {
        return this.#fullBody;
    }
}

var GenderTypes;
(function (GenderTypes) {
    GenderTypes[GenderTypes["Female"] = 0] = "Female";
    GenderTypes[GenderTypes["Male"] = 1] = "Male";
})(GenderTypes || (GenderTypes = {}));
var DataTypes;
(function (DataTypes) {
    DataTypes[DataTypes["Unknown"] = -1] = "Unknown";
    DataTypes[DataTypes["Stylized"] = 0] = "Stylized";
    DataTypes[DataTypes["Realistic"] = 1] = "Realistic";
    DataTypes[DataTypes["VRM"] = 4] = "VRM";
    DataTypes[DataTypes["GLB"] = 6] = "GLB";
    DataTypes[DataTypes["Cartoon"] = 7] = "Cartoon";
    DataTypes[DataTypes["RealPerson"] = 8] = "RealPerson";
    DataTypes[DataTypes["CartoonNew"] = 9] = "CartoonNew";
})(DataTypes || (DataTypes = {}));

var avatar = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get DataTypes () { return DataTypes; },
    get GenderTypes () { return GenderTypes; }
});

class Avatar {
    boundingBox;
    collision;
    constructor() {
        this.boundingBox = undefined;
        this.collision = undefined;
    }
    get avatarID() {
        return '';
    }
    get avatarGlb() {
        return '';
    }
    /**
     * @type {AvatarSnapshot | undefined}
     */
    get snapshot() {
        return undefined;
    }
    get gender() {
        return GenderTypes.Female;
    }
    get dataType() {
        return DataTypes.VRM;
    }
    on(event, listener) {
        return {};
    }
    off(event, listener) {
        return {};
    }
    fire(event, ...args) {
        return {};
    }
}

class NameTag {
    isVisible;
    constructor() {
        this.isVisible = true;
    }
}

class Network {
    constructor() { }
    get id() {
        return '';
    }
    on(event, listener) {
        return {};
    }
    off(event, listener) {
        return {};
    }
    fire(event, ...args) {
        return {};
    }
}

class Player {
    isVisible;
    constructor() {
        this.isVisible = true;
    }
    get displayName() {
        return '';
    }
    get isDisposed() {
        return false;
    }
    /**
     * @type {Avatar | undefined}
     */
    get avatar() {
        return undefined;
    }
    /**
     * @type {Network | undefined}
     */
    get network() {
        return undefined;
    }
    /**
     * @type {NameTag | undefined}
     */
    get nameTag() {
        return undefined;
    }
    /**
     * @type {PlayerTransform | undefined}
     */
    get transform() {
        return undefined;
    }
    /**
     * @type {PlayerProfile | undefined}
     */
    get profile() {
        return undefined;
    }
    on(event, listener) {
        return {};
    }
    off(event, listener) {
        return {};
    }
    fire(event, ...args) {
        return {};
    }
}

class SyncedPlayer extends Player {
    constructor() {
        super();
    }
    get isAdmin() {
        return false;
    }
    get isOwner() {
        return false;
    }
    get isTalking() {
        return false;
    }
    on(event, listener) {
        return {};
    }
    off(event, listener) {
        return {};
    }
    fire(event, ...args) {
        return {};
    }
}

class ControlledPlayer extends Player {
    canMove = true;
    canJump = true;
    canRun = true;
    respawnPosition = null;
    fallingGravityMultiplier = 1;
    gravityMultiplier = 1;
    flySpeedMultiplier = 1;
    runSpeedMultiplier = 1;
    walkSpeedMultiplier = 1;
    jumpMultiplier = 1;
    isVisibleRemotely = true;
    constructor() {
        super();
    }
    get canFly() {
        return true;
    }
    /**
     * @type {pc.Vec3 | undefined}
     */
    get velocity() {
        return undefined;
    }
    get spawnCount() {
        return 0;
    }
    jump() { }
    playAnimation(stateName, asset, options) { }
    stopAnimation() { }
    respawn(timeout) { }
    teleport(destination, rotationY) { }
    changeAvatar(asset) { }
    on(event, listener) {
        return {};
    }
    off(event, listener) {
        return {};
    }
    fire(event, ...args) {
        return {};
    }
}

class PlayerService {
    static _instance;
    constructor() {
        if (PlayerService._instance)
            return PlayerService._instance;
        PlayerService._instance = this;
    }
    /**
     * @type {ControlledPlayer | null}
     */
    get controlledPlayer() {
        return null;
    }
    /**
     * @type {SyncedPlayer[]}
     */
    get syncedPlayers() {
        return [];
    }
    get playerCount() {
        return 0;
    }
}

export { avatar as AvatarTypes, CameraService, EnvironmentService, environment as EnvironmentTypes, PlayerService, version };
`;

export { content };