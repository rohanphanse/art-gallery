# Art Gallery

Decentralized art gallery built on NEAR blockchain with AssemblyScript and React.

**Demo: https://rohanphanse.github.io/art-gallery/**

Learned how to deploy and interact with smart contracts on NEAR thanks to this amazing tutorial: https://dacade.org/communities/near/courses/near-101.

## Features
* Allow users to upload artworks to NEAR blockchain
* Ensure that users can delete their own artworks, but not those from others
* Heart ❤️ (or unheart) artworks, duplicate "hearting" is prevented
* No ugly Bootstrap framework, beautiful default CSS styles :)

## Development Process
I tackled the development process in 2 steps: writing the smart contract and creating the front-end.
1. I used AssemblyScript (similar to Typescript, compiles to WebAssembly) to write the smart contract and I used the near-cli tools to deploy and test out the smart contract.
2. I coded the front-end in React and used NEAR’s sdk to allow users to connect to their wallets and use smart contract methods.

## Demo Walkthrough

First, login into Decentralized Art Gallery with your NEAR testnet wallet. 

<img src = "https://raw.githubusercontent.com/rohanphanse/art-gallery/417e440d69aa3d395495d278c6f3bdb2b6f65c90/public/images/connect-wallet.png" alt = "Login Page" />

You will be redirected to NEAR's website to connect to your wallet.

<img src = "https://raw.githubusercontent.com/rohanphanse/art-gallery/417e440d69aa3d395495d278c6f3bdb2b6f65c90/public/images/near-login.png" alt = "Connect NEAR Wallet" />

Once you're logged in, you will see your account ID and balance in the top-left corner. And of course, the beautiful artworks in the gallery! Click the heart button to add or remove your heart from the corresponding artwork. Click the X button to delete your artwork (you will only see it for artworks you uploaded).

<img src = "https://raw.githubusercontent.com/rohanphanse/art-gallery/417e440d69aa3d395495d278c6f3bdb2b6f65c90/public/images/artworks.png" alt = "View and Heart Artworks" />

At the bottom of the page, you will see a bunch of inputs, which can use to upload your own artworks to the gallery. And that's it!

<img src = "https://raw.githubusercontent.com/rohanphanse/art-gallery/417e440d69aa3d395495d278c6f3bdb2b6f65c90/public/images/add-artwork.png" alt = "Add Artworks" />

