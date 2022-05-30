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
    let count = 0;
    let values = artworks.values();
    for (let i = 0; i < values.length; i++) {
        if (values[i].owner.toString() == context.sender.toString()) {
            count++;
        }
    }
    if (count >= 10) {
        throw new Error("Maximum number of 10 artworks can be uploaded!")
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

export function heartOrUnheartArtwork(id: string): void {
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
            heartsList.swap_remove(i);
            artwork.hearts--;
            artworks.set(artwork.id, artwork);
            return;
        }
    }
    heartsList.push(context.sender);
    artwork.hearts++;
    artworks.set(artwork.id, artwork);
}
