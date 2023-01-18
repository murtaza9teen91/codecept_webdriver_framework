const {I} = inject();
const CommonHelper = new (require('../../helpers/web/common.helper'))();


Given(`I visit {string} URL`, async( url )=>{
    await I.amOnPage(url);
})

Then(`I validate validate that the current page has less than {int} console errors`, async( minNumOfConsoleErrors ) => {
    // scrolling down 500 pixels and waiting for a 2 seconds to uncover more console errors
    await I.scrollTo(0, 500);
    await I.wait(2);
    const allConsoleErrors = await CommonHelper.getConsoleErrors();
    await I.say( `${allConsoleErrors.length} console errors are available on current page (${ await I.grabCurrentUrl() }) which are listed below` );
    await allConsoleErrors.forEach(async (element, index) => {
        await I.say( `console error # ${index+1}: " ${element} "`);
    });
    if (allConsoleErrors.length > minNumOfConsoleErrors){
        await I.assertTrue( allConsoleErrors.length < minNumOfConsoleErrors, `expected current page to have less than '${minNumOfConsoleErrors}' console errors but found '${allConsoleErrors.length}' `);
    }
})

Given(`This tests is suppose to fail`, async()=>{
    await I.say(`don't worry, this test is suppose to fail everytime`);
    await I.assertTrue( false, `don't worry, this test is suppose to fail everytime` );
})

Then(`I validate that {string} network request has been loaded`, async( networkRequest )=>{
    let isNetReqLoaded = await CommonHelper.isNetworkRequestLoaded(networkRequest);
    await I.assertTrue( isNetReqLoaded, `Failed, expecting Network Request "${networkRequest}" to be loaded`);
})

Then(`I validate that {string} network request has NOT been loaded`, async( networkRequest )=>{
    let isNetReqLoaded = await CommonHelper.isNetworkRequestLoaded(networkRequest);
    await I.assertFalse( isNetReqLoaded, `Failed, expecting Network Request "${isNetReqLoaded}" to be NOT loaded`);
})
