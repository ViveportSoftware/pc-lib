/**
 * @interface
 */
class INameTag {
    /**
     * 是否在本地端顯示 nameTag，或是應用系統的自動判定，包含 nameTag 裡所有的 icon 和按鈕
     * @type {CreateExtensionsSDK.NameTag.VisibilityTypes}
    */
    visibility;

    constructor(){
        if (this.constructor === INameTag) {
            throw new Error("This is an abstract class and cannot be instantiated directly.");
        }
    }
}

export default INameTag;