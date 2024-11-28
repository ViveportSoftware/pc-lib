import * as NameTagTypes from '../enums/nameTag';

/**
 * 定義 NameTag 介面
 */
export interface INameTag {
  /**
   * 是否在本地端顯示 nameTag，或是使用 Viverse Create 的自動判定，包含 nameTag 裡所有的 icon 和按鈕
   */
  visibility: NameTagTypes.VisibilityTypes;
}
