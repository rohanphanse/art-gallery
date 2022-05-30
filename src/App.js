import React, { useState, useEffect, useCallback } from "react";
import { accountBalance, login, logout } from "./utils/near";
import { getArtworks } from "./utils/contract";

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
    return (
        <>
            {account.accountId ? (
                <>
                    Balance: {balance} NEAR
                    <div className = "center">
                        <div className = "artworks">
                            {artworks.map((artwork) => (
                                <div className = "artwork">
                                    <img src = {artwork.image} />
                                    {artwork.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={logout}>LOG OUT</button>
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
            `}</style>
        </>
    );
}

export default App;
