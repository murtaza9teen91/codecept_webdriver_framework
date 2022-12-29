const {I} = inject();
const CommonHelper = new (require('../../helpers/web/common.helper'))();


Given(`I visit {string} URL`, async( url )=>{
    await I.amOnPage(url);
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
