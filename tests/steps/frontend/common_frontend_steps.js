const {I} = inject();

Given(`I visit {string} URL`, async( url )=>{
    await I.amOnPage(url);
})

Given(`This tests is suppose to fail`, async()=>{
    await I.say(`don't worry, this test is suppose to fail everytime`);
    await I.assertTrue( false, `don't worry, this test is suppose to fail everytime` );
})
