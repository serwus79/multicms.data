import path from "path";

/**
 * Service settings
 *
 * @export
 * @interface ISettings
 */
export interface ISettings {
  /**
   * Project path
   *
   * @type {string}
   * @memberof ISettings
   */
  PROJECT_DIR: string;
  /**
   * WS-Security templates path
   *
   * @type {string}
   * @memberof ISettings
   */
  TEMPATES_DIR: string;
  /**
   * Logfiles path
   *
   * @type {string}
   * @memberof ISettings
   */
  LOG_DIR: string;
}

class Settings implements ISettings {
  PROJECT_DIR: string;
  TEMPATES_DIR: string;
  LOG_DIR: string;

  constructor() {
    // this.CERTIFIATES_DIR = process.env.CERTIFIATES_DIR;
    this.PROJECT_DIR = __dirname;
    this.TEMPATES_DIR = path.join(__dirname, "..", "templates");
    this.LOG_DIR = path.join(__dirname, "..", "logs");
  }
}
export default new Settings();
