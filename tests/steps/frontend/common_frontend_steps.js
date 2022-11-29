const {I} = inject();

Given(`I visit {string} URL`, async( url )=>{
    await I.amOnPage(url);
})
