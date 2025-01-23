import * as NameTagTypes from '../enums/nameTag';

/**
 * Define NameTag interface.
 */
export interface INameTag {
  /**
   * Whether to display the name tag locally or use VIVERSE CREATE's automatic setting, including all icons and buttons in the name tag.
   */
  visibility: NameTagTypes.VisibilityTypes;
}
