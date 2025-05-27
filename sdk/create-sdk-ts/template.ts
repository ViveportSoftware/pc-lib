const content = `/******************************************************************************
Copyright (c) 2025 HTC CORPORATION.
***************************************************************************** */

/**
 * Retrieve the version of the Create SDK.
 */
const version = 'create-sdk-version';

var PovTypes;
(function (PovTypes) {
    PovTypes[PovTypes["FirstPerson"] = 0] = "FirstPerson";
    PovTypes[PovTypes["ThirdPerson"] = 1] = "ThirdPerson";
})(PovTypes || (PovTypes = {}));

var camera = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get PovTypes () { return PovTypes; }
});

class CameraService {
    static _instance;
    canZoom = true;
    canRotate = true;
    minZoomDistance = 0;
    maxZoomDistance = 0;
    canSwitchPov = true;
    pov = PovTypes.ThirdPerson;
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
    addLayer(layerId, order) { }
    removeLayer(layerId) { }
    switchPov(pov) { }
}

var HardwareType;
(function (HardwareType) {
    HardwareType[HardwareType["Unknown"] = 0] = "Unknown";
    HardwareType[HardwareType["Desktop"] = 1] = "Desktop";
    HardwareType[HardwareType["Mobile"] = 2] = "Mobile";
    HardwareType[HardwareType["Headset"] = 3] = "Headset";
})(HardwareType || (HardwareType = {}));
var OsType;
(function (OsType) {
    OsType[OsType["Unknown"] = 0] = "Unknown";
    OsType[OsType["Ios"] = 1] = "Ios";
    OsType[OsType["Android"] = 2] = "Android";
    OsType[OsType["Macos"] = 3] = "Macos";
    OsType[OsType["Windows"] = 4] = "Windows";
    OsType[OsType["Linux"] = 5] = "Linux";
})(OsType || (OsType = {}));
var VrDeviceType;
(function (VrDeviceType) {
    VrDeviceType[VrDeviceType["Vive"] = 1] = "Vive";
    VrDeviceType[VrDeviceType["Oculus"] = 2] = "Oculus";
    VrDeviceType[VrDeviceType["VisionPro"] = 3] = "VisionPro";
})(VrDeviceType || (VrDeviceType = {}));

var device = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get HardwareType () { return HardwareType; },
    get OsType () { return OsType; },
    get VrDeviceType () { return VrDeviceType; }
});

class DeviceService {
    static _instance;
    hardware = HardwareType.Unknown;
    os = OsType.Unknown;
    vrDevice = null;
    constructor() {
        if (DeviceService._instance)
            return DeviceService._instance;
        DeviceService._instance = this;
    }
}

var ImpostorModeTypes;
(function (ImpostorModeTypes) {
    ImpostorModeTypes[ImpostorModeTypes["Auto"] = 0] = "Auto";
    ImpostorModeTypes[ImpostorModeTypes["Disabled"] = 1] = "Disabled";
})(ImpostorModeTypes || (ImpostorModeTypes = {}));

var environment = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get ImpostorModeTypes () { return ImpostorModeTypes; }
});

class EnvironmentService {
    static _instance;
    impostorMode = ImpostorModeTypes.Auto;
    canPlayersCollide = true;
    constructor() {
        if (EnvironmentService._instance)
            return EnvironmentService._instance;
        EnvironmentService._instance = this;
    }
}

class PlayerProfile {
    #displayName;
    #snapshot;
    #userId;
    #userName;
    constructor(data) {
        const { displayName, snapshot, userId, userName } = data;
        this.#displayName = displayName;
        this.#snapshot = snapshot;
        this.#userId = userId;
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
    get userId() {
        return this.#userId;
    }
    /**
     * @type {string}
     */
    get userName() {
        return this.#userName;
    }
}

class AvatarTransform {
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
     * @type {pc.Quat}
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
    constructor() {
        this.boundingBox = null;
    }
    get avatarUrl() {
        return '';
    }
    get gender() {
        return GenderTypes.Female;
    }
    get dataType() {
        return DataTypes.VRM;
    }
    /**
     * @type {AvatarTransform | undefined}
     */
    get transform() {
        return undefined;
    }
    getBone(boneName) {
        return null;
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

var VisibilityTypes;
(function (VisibilityTypes) {
    VisibilityTypes[VisibilityTypes["Auto"] = 0] = "Auto";
    VisibilityTypes[VisibilityTypes["Enabled"] = 1] = "Enabled";
    VisibilityTypes[VisibilityTypes["Disabled"] = 2] = "Disabled";
})(VisibilityTypes || (VisibilityTypes = {}));

var nameTag = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get VisibilityTypes () { return VisibilityTypes; }
});

class NameTag {
    visibility;
    constructor() {
        this.visibility = VisibilityTypes.Auto;
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
    get isDisposed() {
        return false;
    }
    get collision() {
        return null;
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

class RemotePlayer extends Player {
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

class LocalPlayer extends Player {
    canMove = true;
    canRun = true;
    canJump = true;
    canFly = undefined;
    canHardLanding = true;
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
    async playAnimation(stateName, options, legacyOptions) {
        return null;
    }
    stopAnimation() { }
    respawn(timeout) { }
    teleport(destination, rotationY) { }
    changeAvatar(asset) { }
    resetToViverseAvatar() { }
    turnToward(x, y) { }
    scaleAvatar(scale, options) { }
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
     * @type {LocalPlayer | null}
     */
    get localPlayer() {
        return null;
    }
    /**
     * @type {RemotePlayer[]}
     */
    get remotePlayers() {
        return [];
    }
    get playerCount() {
        return 0;
    }
    getPlayerById(id) {
        return null;
    }
    getPlayerByEntity(entity, recursive) {
        return null;
    }
    checkIsLocalPlayerEntity(entity, recursive) {
        return false;
    }
    checkIsRemotePlayerEntity(entity, recursive) {
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

var HorizontalTypes;
(function (HorizontalTypes) {
    HorizontalTypes[HorizontalTypes["Idle"] = 0] = "Idle";
    HorizontalTypes[HorizontalTypes["Walk"] = 1] = "Walk";
    HorizontalTypes[HorizontalTypes["Run"] = 2] = "Run";
})(HorizontalTypes || (HorizontalTypes = {}));
var VerticalTypes;
(function (VerticalTypes) {
    VerticalTypes[VerticalTypes["Ground"] = 0] = "Ground";
    VerticalTypes[VerticalTypes["Jump"] = 1] = "Jump";
    VerticalTypes[VerticalTypes["Fly"] = 2] = "Fly";
    VerticalTypes[VerticalTypes["HardLanding"] = 3] = "HardLanding";
})(VerticalTypes || (VerticalTypes = {}));

var move = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get HorizontalTypes () { return HorizontalTypes; },
    get VerticalTypes () { return VerticalTypes; }
});

class NetworkService {
    static _instance;
    moveSyncInterval = 150;
    masterId = '';
    playerIdMap = {};
    _gameId = '';
    constructor() {
        if (NetworkService._instance)
            return NetworkService._instance;
        NetworkService._instance = this;
    }
    sendMessage(message, options) {
        return '';
    }
    generateMessageId() {
        return '';
    }
    sendGameStart() { }
    sendGameEnd() { }
    sendOwnerUpdate(event, targetId) { }
    _sendGameUpdate(params) { }
    on(event, listener) {
        return {};
    }
    off(event, listener) {
        return {};
    }
}

class XrService {
    static _instance;
    constructor() {
        if (XrService._instance)
            return XrService._instance;
        XrService._instance = this;
    }
    get isVrReady() {
        return false;
    }
    get controllers() {
        return { left: undefined, right: undefined };
    }
    start(type) { }
    end() { }
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

class XrController {
    constructor() { }
    get modelEntity() {
        return null;
    }
    get inputSource() {
        return null;
    }
    get handedness() {
        return 'left';
    }
    setModelAsset(asset, options) { }
    resetModelAsset() { }
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

var SessionTypes;
(function (SessionTypes) {
    SessionTypes[SessionTypes["Vr"] = 0] = "Vr";
    /**
     * @internal
     * @planned VIVERSE AR support is currently unavailable.
     */
    SessionTypes[SessionTypes["Ar"] = 1] = "Ar";
})(SessionTypes || (SessionTypes = {}));

var xr = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get SessionTypes () { return SessionTypes; }
});

class QuestService {
    static _instance;
    constructor() {
        if (QuestService._instance)
            return QuestService._instance;
        QuestService._instance = this;
    }
    get quests() {
        return null;
    }
    get isSystemReady() {
        return false;
    }
    addQuest(name, options) {
        return {};
    }
    resetAllQuests() { }
    getQuestById(id) {
        return null;
    }
    getQuestByName(name) {
        return null;
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

class Quest {
    constructor() { }
    get id() {
        return 0;
    }
    get name() {
        return '';
    }
    get description() {
        return '';
    }
    get tasks() {
        return null;
    }
    get isCompleted() {
        return false;
    }
    get isActive() {
        return false;
    }
    addCheckTask(description, options) {
        return {};
    }
    addProgressBarTask(description, totalProgress, options) {
        return {};
    }
    start() { }
    reset() { }
    getTaskById() {
        return null;
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

var CompletionTypes;
(function (CompletionTypes) {
    CompletionTypes[CompletionTypes["Check"] = 1] = "Check";
    CompletionTypes[CompletionTypes["ProgressBar"] = 2] = "ProgressBar";
})(CompletionTypes || (CompletionTypes = {}));

var task = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get CompletionTypes () { return CompletionTypes; }
});

class Task {
    constructor() { }
    get id() {
        return 0;
    }
    get description() {
        return '';
    }
    get type() {
        return CompletionTypes.Check;
    }
    get quest() {
        return {};
    }
    get isCompleted() {
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

class CheckTask extends Task {
    constructor() {
        super();
    }
    get type() {
        return CompletionTypes.Check;
    }
    check() { }
}

class ProgressBarTask extends Task {
    constructor() {
        super();
    }
    get type() {
        return CompletionTypes.Check;
    }
    get currentProgress() {
        return 0;
    }
    get totalProgress() {
        return 0;
    }
    addProgress(increment) { }
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

class WorldNavigationService {
    static _instance;
    constructor() {
        if (WorldNavigationService._instance)
            return WorldNavigationService._instance;
        WorldNavigationService._instance = this;
    }
    get currentWorldId() {
        return '';
    }
    get currentSceneId() {
        return '';
    }
    get currentSceneName() {
        return '';
    }
    get previousWorldId() {
        return '';
    }
    get previousSceneId() {
        return '';
    }
    get previousSceneName() {
        return '';
    }
    getWorldConfig(worldId) {
        return Promise.resolve(null);
    }
    loadWorld(worldId, onProgressing) {
        return Promise.resolve();
    }
    switchScene(sceneName, options) {
        return Promise.resolve();
    }
    createPortal(sceneName, options) {
        return Promise.resolve(null);
    }
    closePortal(sceneName, worldId) {
        return;
    }
}

export { avatar as AvatarTypes, CameraService, camera as CameraTypes, DeviceService, device as DeviceTypes, EnvironmentService, environment as EnvironmentTypes, move as MoveTypes, nameTag as NameTagTypes, NetworkService, PlayerService, QuestService, task as TaskTypes, WorldNavigationService, XrService, xr as XrTypes, version };
`;

export { content };