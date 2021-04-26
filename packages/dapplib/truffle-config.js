require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'good close blue spot shock rare remember modify guess glimpse flee squeeze'; 
let testAccounts = [
"0x729a14d4f91ab7e6202a761b4b61f1484120afb7c6cb744f85b13b7554a4f2de",
"0xe61f7129f8f1b0c80d04668a7ea108088e8688d060f06af043eaf444905d28b8",
"0xe6e59977a25afd67a5bff6335ccdfdb3bafc569b1bd669ab44bedcd881af6b5e",
"0xa47b6f394e21190a8d23a681eb9c47ffbee1e2e6b5d70bc04643c3d7babb5c00",
"0x39ebcf267ffc95dc718b8433b3e05378a0527b18061ff2e4457784a4dd1820f2",
"0xd9c78efdae3906731d756268c99fc330c2f5195bbca9131fad93f112fcfde0f5",
"0xfaee1d3296d5350452016c442bfda8c137d9a27db336f611f9e11ca585e488f8",
"0x107de5afa1b40749cc2dd74819dc7b00aa3eaca9fa34294d9506eff51963094b",
"0xf08962018063e23887fefa8ee34fe4dd7661d67c91a25424871fdef1647edbba",
"0x4f5e425a68ddf6073dc43d80d110f97095e43754ee273a682fc25a22b0383838"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


