export default class Application {
  /**
   * bootstrap the application
   * @returns {Promise<void>}
   */
  public async bootstrap(): Promise<void> {
    console.log("Works");
    
    return new Promise<void>((resolve, reject) => "App works")
  }
}