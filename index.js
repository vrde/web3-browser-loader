(function (name) {
	function resolveWeb3 (resolve, localProvider) {
		let { web3 } = window
		const alreadyInjected = typeof web3 !== 'undefined'

		if (alreadyInjected) {
			console.log('Injected web3 detected.')
			web3 = new Web3(web3.currentProvider)
		} else {
			console.log('No web3 instance injected, using Local web3.')
			const provider = new Web3.providers.HttpProvider(localProvider)
			web3 = new Web3(provider)
		}

		resolve(web3)
	}

	function loadWeb3 (localProvider) {
		if (localProvider === undefined) {
			localProvider = 'http://localhost:9545'
		}

		return new Promise((resolve) => {
			// Wait for loading completion to avoid race conditions with web3 injection timing.
			window.addEventListener('load', () => {
				resolveWeb3(resolve, localProvider)
			})
			// If document has loaded already, try to get Web3 immediately.
			if (document.readyState === 'complete') {
				resolveWeb3(resolve, localProvider)
			}
		})
	}

	window[name] = loadWeb3
})('loadWeb3')
