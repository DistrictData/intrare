async function onMoralisUserDetected() {
    showPage('page-moralis-user-detected');
}


<div id="page-moralis-user-detected" class="page-content hidden centered-content">
<p class="small-text">Welcome back!</p>
<p class="small-text">To enter again, you need to prove if you hold any NFTs or not...</p>
<button onclick="onProveWalletButton(this)" id="check-my-wallet-button" class="glowButton circle-button">
    <div class="enter-button-inner">
        <div id="enter-button-text" class="enter-button-text button-text-wrapper circle-button-layout">
            Check my wallet
        </div>
    </div>
</button>
</div>