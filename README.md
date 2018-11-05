# web3-browser-loader
This is a boilerplate to load [`web3.js`](https://github.com/ethereum/web3.js/) in the browser. You can include using a CDN, copy paste it, or do whatever you want.

## Usage with a CDN
```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@v1.0.0-beta.36/dist/web3.min.js"></script>
		<script src="https://cdn.jsdelivr.net/gh/vrde/web3-browser-loader@master/index.js"></script>
	<script>

async function boot () {
	const web3 = await loadWeb3()

	// Now you can use web3 like there is no tomorrow.
}

boot()
	</script>
	</head>

	<body>
		...
	</body>
</html>

```

# Troubleshooting

## CDNs are centralized!
Yes, CDNs are centralized. We want everything decentralized, I agree. Let's dismantle [infura](https://infura.io/) first, then we talk again.

## What about NPM?
I don't need it now, but PRs are very welcome.
