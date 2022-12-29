const Helper = codeceptjs.helper;

class CommonHelper extends Helper {

  /**
   * 
   * @param {*} requestURL URL/URI of the request you want to
   * @returns true if the requestURL param has been loaded as part of Network Requests, false otherwise
   */
  async isNetworkRequestLoaded( requestURL ) {
    let isRequestLoaded = await this.helpers['WebDriver'].executeScript(`const checkRequest = () => {let network = performance.getEntries() || {};let obj = network.find(o => o.name === "${requestURL}" );return obj !== undefined;}; return checkRequest()`);
    return await isRequestLoaded;
  }

  // method which restarts browser
  async restartBrowser() {
    const browser = await this.helpers.WebDriver.browser;
    await browser.reloadSession();
    await browser.maximizeWindow();
  }

  // method which goes to previous page
  async backToPreviousPage() {
    const browser = this.helpers.WebDriver.browser;
    await browser.back();
  }
}

module.exports = CommonHelper;
