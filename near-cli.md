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
near call art-gallery.roar123.testnet setArtwork "{\"artwork\": { \"id\":\"bo\",\"name\":\"Bo-Katan\",\"description\":\"The legendary Mandalorian Bo-Katan!!!\",\"image\":\"https://pbs.twimg.com/media/EUs6PZuUEAAGBEq.jpg\",\"categories\":\"star wars\"}}" --accountId=mycontract.roar123.testnet
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
near call art-gallery.roar123.testnet deleteArtwork "{\"id\": \"abc123\"}" --accountId=arjun.roar123.testnet
```

Heart or unheart artwork
```
near call art-gallery.roar123.testnet heartOrUnheartArtwork "{\"id\": \"n2\"}" --accountId=roar123.testnet
```