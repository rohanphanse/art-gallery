import { Artwork, artworks, hearts } from "./model";
import { PersistentVector, context } from "near-sdk-as";

export function setArtwork(artwork: Artwork): void {
    const storedArtwork = artworks.get(artwork.id);
    if (storedArtwork !== null) {
        throw new Error(`An artwork with id ${artwork.id} already exists!`);
    }
    if (artwork.id.length > 6 || artwork.id.length < 1) {
        throw new Error(`Id length must be 6 characters or less!`)
    }
    artworks.set(artwork.id, Artwork.fromPayload(artwork));
}

export function getArtwork(id: string): Artwork | null {
    return artworks.get(id);
}

export function getArtworks(): Artwork[] {
    return artworks.values();
}

export function deleteArtwork(id: string): void {
    const artwork = artworks.get(id);
    if (artwork === null) {
        throw new Error(`Cannot find artwork with id ${id}`);
    }
    // After extensive testing, !== does not work, but != and .toString() works
    if (artwork.owner.toString() != context.sender.toString()) {
        throw new Error(`Only owners can delete their own artworks!`);
    }
    artworks.delete(id);
}

export function heartArtwork(id: string): void {
    const artwork = artworks.get(id);
    if (artwork === null) {
        throw new Error(`Cannot find artwork with id ${id}`);
    }
    let heartsList = hearts.get(id, null);
    if (heartsList === null) {
        heartsList = new PersistentVector<string>(`h${id}`);
        hearts.set(id, heartsList);
    }
    for (let i = 0; i < heartsList.length; i++) {
        if (heartsList[i].toString() == context.sender.toString()) {
            throw new Error(`Already hearted artwork!`);
        }
    }
    heartsList.push(context.sender);
    artwork.incrementHearts();
    artworks.set(artwork.id, artwork);
}
