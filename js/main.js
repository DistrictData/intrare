(async function() {
    await initializeMoralis();
    await checkCon();
})();

getNFTBalances = async () => {
    const currentUser = Moralis.User.current();
    
    if (currentUser) {
      const options = { chain: 'eth'};
      const userEthNFTs = await Moralis.Web3.getNFTs(options);
      // const userEthNFTs = await Moralis.Web3API.account.getNFTs();
      
      function search(nameKey, userEthNFTs){
        for (var i=0; i < userEthNFTs.length; i++) {
            if (userEthNFTs[i].name === nameKey) {
                return userEthNFTs[i];
            }
        }
      }
      // selectElement = document.querySelector('#select1');
      
      // output = "dadmfers"
      console.log("from codeUp(): " + output);
      console.log(userEthNFTs);
      var shareCode = "";
      var resultObject = search(output, userEthNFTs);
      var nftOwner = typeof resultObject !== "undefined";
      if(nftOwner){
        // alert("You Own This NFT!");
        // testPull();

        // this below waits for the function to run and fulls the value
        // will probalby need this
        // I am tired and its time for a beer
        
        shareCode = await testPull(output, shop);
        console.log("printing sharcode from getBalance(): " + shareCode);
        // console.log(await testPull());
      } else {
        // alert("You Dont Own This NFT");
        shareCode = "DENIED";
      }
        
      console.log(nftOwner);

    } else {
          alert("Connect your wallet");
      }

      // below is T/F
      // printFollowers(nftOwner);
      
  return shareCode;
    // return nftOwner;
}

function printFollowers(nftOwner) {
    document.getElementById('ownNFT').innerHTML = nftOwner;
  }
