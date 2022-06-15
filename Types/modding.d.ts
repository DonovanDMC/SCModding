export interface Modding {
	/**
	 * Add an item to the menu
	 *
	 * @param {MenuItem} menuItem - the menu item to add
	 */
	setMenuItem(menuItem: MenuItem): void;
	/**
	 * Set the badge count for a menu ite,
	 *
	 * @param {String} name - the name of the menu item
	 * @param {Number} amount - the number to set the badge count to
	 */
	setMenuItemBadgeCount(name: string, amount: number): void;
	/**
	 * Add a translation
	 *
	 * @param {String} language - the language
	 * @param {String} key - the key
	 */
	addTranslation(language: string, key: string): void;
	/**
	 * Remove a translation key
	 *
	 * @param {String} key - the key to remove
	 */
	removeTranslation(key: string): void;
}

export interface MenuItem {
	name: string;
	tooltip: string;
	tooltipPosition: "right" | "left";
	faIcon: string;
	badgeCount: number;
}
