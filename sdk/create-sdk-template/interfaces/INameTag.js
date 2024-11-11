/**
 * @interface
 */
class INameTag {
    /**
     * 是否在本地端顯示 Player 上方 nameTag，包含 nameTag 裡所有的 icon 和按鈕
     * @type {boolean}
    */
    isVisible;

    constructor(){
        if (this.constructor === INameTag) {
            throw new Error("This is an abstract class and cannot be instantiated directly.");
        }
    }

    /**
     * 更改 Player 的 nameTag 是否在本地端顯示
     * @memberof INameTag
     * @param {boolean} isVisible
     * @returns {void}
     */
    setIsVisible(isVisible) {

    }
}

export default INameTag;