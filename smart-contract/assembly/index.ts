import { Artwork, artworks } from "./model";
import { context } from "near-sdk-as";

export function setArtwork(artwork: Artwork): void {
    const storedArtwork = artworks.get(artwork.id);
    if (storedArtwork !== null) {
        throw new Error(`An artwork with id ${artwork.id} already exists!`);
    }
    artworks.set(artwork.id, Artwork.fromPayload(artwork));
}

export function getProduct(id: string): Artwork | null {
    return artworks.get(id);
}

export function getProducts(): Artwork[] {
    return artworks.values();
}

export function deleteArtwork(id: string): void {
    const artwork = artworks.get(id);
    if (artwork === null) {
        throw new Error(`Cannot find artwork with id ${id}!`);
    }
    if (artwork.owner !== context.sender) {
        throw new Error("Only owners can delete their own artworks!");
    }
    artworks.delete(id);
}

