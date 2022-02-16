// connect to Moralis server

async function initializeMoralis() {
    const serverUrl = "https://rkmjbahk2ncj.usemoralis.com:2053/server";
    const appId = "DBOa2njJKnsMur2Fq56lLTIOfmZMJJf7kWL3Ozdv";
    await Moralis.start({serverUrl, appId});

    checkCon();
}

// LOG IN
async function login() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate({signingMessage:"Please sign below confirming you have access to the wallet. No Gas Required"});
    } else {
        alert("Account(s) you've connected: " + user.attributes.accounts)
    }
    // console.log("logged in user:", user.id);
    checkCon();
}

// LOG OUT
async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
    // alert("Disconnected");
    document.getElementById('btn-login').innerHTML = "Connect MetaMask"
    //hide one time use code location
    //document.getElementById('codeUp').innerHTML = "";
}

async function codeUp(){
  // selectElement = document.querySelector('#select1');
  // output = nft
  console.log(output);
  console.log("shop = " + shop);
  try {
    tester = await getNFTBalances(output);
    console.log(tester)
  } catch (error) {
    tester = "No more codes or you don't own this NFT"
  }
  // let user = Moralis.User.current();
  if (tester == "undefined") {
    console.log("we here")
    document.getElementById(shop).innerText = "";
  } else {
    
    document.getElementById(shop).innerText = "Code: " + tester;
  }
  
}

async function checkCon() {
  let user = Moralis.User.current();

  Moralis.User.currentAsync().then(function(user) {
    try {
      var wallet = user.get('ethAddress');
      let result = wallet.substring(0, 5);
      let result1 = wallet.substring(38,42);
      document.getElementById('btn-login').innerHTML = "Connected wallet: " + result + "..." + result1;
      console.log(wallet);
    } catch (error) {
      document.getElementById('btn-login').innerHTML = "Connect MetaMask"
    }
    // document.getElementById('address').innerHTML = "Connected wallet: " + wallet
  });


}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut; 
