const Token = artifacts.require("Token");
const Exchange = artifacts.require("Exchange");

module.exports = async function (deployer) {
	const account = await web3.eth.getAccounts()

  	await deployer.deploy(Token);

  	const feeAccount = account[0]
  	const feePercent = 10

  	await deployer.deploy(Exchange, feeAccount, feePercent)
};
