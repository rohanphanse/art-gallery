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
near call art-gallery.roar123.testnet setArtwork "{\"artwork\": { \"id\":\"8fdh8e\",\"name\":\"Landscape #3\",\"description\":\"My favorite painting 😍, by Camille Pissarro\",\"image\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Camille_Pissarro_-_Paisaje_tropical.jpg/1280px-Camille_Pissarro_-_Paisaje_tropical.jpg\",\"categories\":\"je ne sais pas\"}}" --accountId=roar123.testnet
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