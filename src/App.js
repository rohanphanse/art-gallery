import React, { useState, useEffect, useCallback } from "react";
import { accountBalance, login, logout } from "./utils/near";
import { getArtworks, heartOrUnheartArtwork, deleteArtwork, setArtwork } from "./utils/contract";

function App() {
    const account = window.walletConnection.account();
    // Artworks
    const [artworks, updateArtworks] = useState([]);
    const fetchArtworks = useCallback(async () => {
        if (account.accountId) {
            updateArtworks(await getArtworks());
        }
    }, [account.accountId]);
    useEffect(() => {
        fetchArtworks();
    }, [fetchArtworks]);
    // Balance
    const [balance, updateBalance] = useState("0");
    const fetchBalance = useCallback(async () => {
        if (account.accountId) {
            updateBalance(await accountBalance());
        }
    }, [account.accountId]);
    useEffect(() => {
        fetchBalance();
    }, [fetchBalance])
    
    async function heartOrUnheartArtworkAndHandleError(id) {
        try {
            await heartOrUnheartArtwork(id);
            fetchArtworks();
        } catch (error) {
            alert(JSON.stringify(error.kind));
        }
    }

    async function deleteArtworkAndHandleError(id) {
        try {
            await deleteArtwork(id);
            fetchArtworks();
        } catch (error) {
            alert(JSON.stringify(error.kind));
        }
    }

    const [name, updateName] = useState("");
    const [description, updateDescription] = useState("");
    const [image, updateImage] = useState("");

    async function addArtwork() {
        console.log(name, description, image);
        try {
            await setArtwork({
                name,
                description,
                image
            })
            fetchArtworks();
        } catch (error) {
            alert(JSON.stringify(error.kind));
        }
    }

    function sortByHearts(artworks) {
        const copy = [...artworks];
        console.log(copy)
        copy.sort((a, b) => b.hearts - a.hearts);
        console.log(copy)
        return copy;
    }

    return (
        <>
            <i>Decentralized Art Gallery by Rohan Phanse</i>
            {account.accountId ? (
                <>
                    <div>{account.accountId}</div>
                    <div>Balance: {balance} NEAR</div>
                    <button onClick={logout}>LOG OUT</button>
                    <div className = "center">
                        <div className = "artworks">
                            {sortByHearts(artworks).map((artwork) => (
                                <div className = "artwork" key = {artwork.id}>
                                    <img src = {artwork.image} alt = {artwork.name} />
                                    <div>{artwork.name}</div>
                                    <div className = "desc">{artwork.description}</div>
                                    <div>{artwork.id}</div>
                                    <div>{artwork.owner}</div>
                                    <button onClick = {async () => await heartOrUnheartArtworkAndHandleError(artwork.id)}>{artwork.hearts} ❤️</button>
                                    <button onClick = {async () => await deleteArtworkAndHandleError(artwork.id)}>❌</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>Add artwork:</div>
                    <div id = "add-artwork-form">
                        <div>Name: <input id = "name-input" onInput = {(event) => updateName(event.target.value)}/></div>
                        <div>Description: <textarea id = "desc-input" onInput = {(event) => updateDescription(event.target.value)}></textarea></div>
                        <div>Image URL: <input id = "image-input" onInput = {(event) => updateImage(event.target.value)}/></div>
                        <button id = "add-button" onClick = {async () => await addArtwork()}>Add</button>
                    </div>
                </>
            ) : (
                <button onClick={login}>CONNECT WALLET</button>
            )}
            <style jsx>{`
                .center {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }

                .artworks {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    width: 600px;
                    grid-gap: 20px;
                    align-items: center;
                }

                .artwork {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .artwork img {
                    width: 200px;
                    height: 200px;
                    object-fit: contain;
                }

                .artwork .desc {
                    font-style: italic;
                }
            `}</style>
        </>
    );
}

export default App;
