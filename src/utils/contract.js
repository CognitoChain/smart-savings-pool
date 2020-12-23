const Web3 = require("web3");
var ethaddress = "0x";
let web3 = require("web3");
let conn;
let ethconnected;
web3 = new Web3(web3.givenProvider);

export async function connectWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    conn = await window.ethereum.enable();
    ethconnected = conn.length > 0;
    if (ethconnected) {
      ethaddress = conn[0];
    }
    return {
      connection: true,
      address: ethaddress,
    };
  }
}

export default { connectWeb3 };
