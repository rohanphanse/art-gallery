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
                    {artworks.map((artwork) => (
                        <div className = "artwork">{artwork.name}</div>
                    ))}
                    <button onClick={logout}>LOG OUT</button>
                </>
            ) : (
                <button onClick={login}>CONNECT WALLET</button>
            )}
            <style jsx>{`
                .artwork {
                }
            `}</style>
        </>
    );
}

export default App;
