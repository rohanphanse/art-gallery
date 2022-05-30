# NEAR CLI Commands

Create subaccount
```
near create-account art-gallery.roar123.testnet --masterAccount roar123.testnet --initialBalance 10
```

Deploy smart contract
```
near deploy --accountId=art-gallery.roar123.testnet --wasmFile=build/release/art-gallery-smart-contract.wasm
```

## Test contract methods

Set artwork
```
near call art-gallery.roar123.testnet setArtwork "{\"artwork\": { \"id\":\"d3rf43\",\"name\":\"Mountain!\",\"description\":\"A grand, majestic mountain!\",\"image\":\"https://m.media-amazon.com/images/I/61bV3NqYQYL._AC_SL1001_.jpg\",\"categories\":\"mountain, montagne\"}}" --accountId=roar123.testnet
```

Get artwork by id
```
near view art-gallery.roar123.testnet getArtwork "{\"id\": \"abc123\"}"
```

Get all artworks
```
near view art-gallery.roar123.testnet getArtworks
```

Delete artwork by id
```
near call art-gallery.roar123.testnet deleteArtwork "{\"id\": \"abc123\"}" --accountId=roar123.testnet
```

Heart artwork
```
near call art-gallery.roar123.testnet heartArtwork "{\"id\": \"n2\"}" --accountId=roar123.testnet
```