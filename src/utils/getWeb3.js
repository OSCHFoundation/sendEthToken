import Web3 from 'web3'
const mainAddress = 'https://mainnet.infura.io/v3/316aa56c9b2944068ac45c9997576ef3';
const ropstenAddress = 'https://ropsten.infura.io/v3/316aa56c9b2944068ac45c9997576ef3';
const rinkebyAddress = 'https://rinkeby.infura.io/v3/316aa56c9b2944068ac45c9997576ef3';
const kovanAddress = 'https://kovan.infura.io/v3/316aa56c9b2944068ac45c9997576ef3';
function updateWeb3(type){
  var updateAddress;
  switch(type){
    case 'main':
      updateAddress = mainAddress;
      break;
    case 'ropsten':
      updateAddress = ropstenAddress;
      break;
    case 'rinkeby':
      updateAddress = rinkebyAddress;
      break;
    case 'kovan':
      updateAddress = kovanAddress;
      break;
    default:
      alert('error');
  }
  const web3 = new Web3(updateAddress);
  return web3;
}

const getWeb3 = new Promise(function(resolve, reject) {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', function() {
    var results
    var web3 = window.web3
    var provider = new Web3.providers.HttpProvider(mainAddress)
    web3 = new Web3(provider)
    results = {
      web3: web3
    }
    resolve(results)
  })
})
export { updateWeb3,getWeb3 }

/*
if (false) {
  // Use Mist/MetaMask's provider.
  web3 = new Web3(web3.currentProvider)

  results = {
    web3: web3
  }

  console.log('Injected web3 detected.');

  resolve(results)
} else {
  // Fallback to localhost if no web3 injection. We've configured this to
  // use the development console's port by default.
  // https://ropsten.infura.io/yaPMQARpCtJkzrz3vIo0
  // http://127.0.0.1:9545
  // https://192.168.1.25:8545
 //https://mainnet.infura.io/yaPMQARpCtJkzrz3vIo0
  //    var provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/yaPMQARpCtJkzrz3vIo0')
}
*/