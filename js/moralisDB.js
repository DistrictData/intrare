async function testPull(){
    console.log("output to asign to db: " + output)
    let user = Moralis.User.current();

    const couponCode = Moralis.Object.extend("couponCode");
    const couponCode1 = new couponCode();
    
    const query = new Moralis.Query(couponCode);

    // checking for user
    // this works!!!!

    try {
        query.equalTo("whodunit", user.id);
        query.equalTo("nft", output);
        query.equalTo("store", shop);
        const results1 = await query.first();
        // console.log(results1.get("whodunit"));
        console.log("user found! need to issue same code: " + results1.get('onetimeuse'))
        lol = results1.get('onetimeuse');
      } catch (error) {
        query.equalTo("nft", output);
        query.equalTo("whodunit", "no");
        query.equalTo("store", shop);
        // const results = await query.find();
        const results = await query.first();
    
        results.set("whodunit", user.id);
        results.save();
        console.log("no user found, issue code: " + results.get('onetimeuse'));
        lol = results.get('onetimeuse');
      }




    return lol;

    // console.log(results);
    // alert("Your one-time use access code: " + results.get('onetimeuse'));
}