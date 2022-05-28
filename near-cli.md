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
near call art-gallery.roar123.testnet setArtwork {"\"artwork\": { \"id\":\"abc123\",\"name\":\"Mona Lisa\",\"description\":\"The world renowned masterpiece, painted by Leonardo Da Vinci\",\"image\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg\",\"categories\":\"mona, lisa, italy, stern\"}}" --accountId=roar123.testnet
```

Get artwork by id
```
near view art-gallery.roar123.testnet getArtwork "{\"id\": \"abc123\"}"
```

Get all artworks
```
near view art-gallery.roar123.testnet getArtworks
```