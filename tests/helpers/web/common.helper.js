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

  async getConsoleErrors(){
    const browser = await this.helpers.WebDriver.browser;
    // retrieving Browser Logs
    const browserLogs = await browser.getLogs('browser');
    const browserConsoleErrors = await browserLogs.map(function(a) { 
      // SEVERE represents Errors in console
      if ( a.level === 'SEVERE' )
        { return a.message;}
    })
    // removing undefined which was getting added for all Warnings
    .filter(notUndefined => notUndefined !== undefined);
    return browserConsoleErrors;
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
