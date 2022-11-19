require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note noise hope harvest opinion supply genre'; 
let testAccounts = [
"0x77f60e66a28e6b702be5b3312152c62ca2a06c5a189a6b435169fa51d3a5cf53",
"0x1f9b372da4eb22e785c15b937ce4be77b5349659ff28cdaf86bc38ef3b360780",
"0x06b2681696f169897d2728c886fa6aae5394b8eb13e60c6259e7eca29e93369f",
"0x408e01c358eaaa7fecae717dd97877f6690ecbbe321efe6734eb16eddbbae2af",
"0x5b372f841a1e9943fc6b1aa415041149c64caaf86c946e4fd034735a0a528dcf",
"0xa0fd277793318802e1a626a633310fddad2692f7ae136fe4f97ac2b8644b6ada",
"0x4c6cb6e8f566038822c65bd7bccef0f236687edb1a9952f0ebe721ecbb164931",
"0x6bfe2d0366adf092d743dd1658d3f274d29fd28e483b2dd09a09d664eaa5389e",
"0x787b499bdfaf7a9a5b8469c37a9b11c2e6a429424b835781447b3e3df0dbb961",
"0x26a244eb4d6fe1e31f281e5cfe55f45e908db4cbb9086fda293d4099e802c363"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

