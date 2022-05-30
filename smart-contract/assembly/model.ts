import { PersistentUnorderedMap, PersistentMap, PersistentVector, context } from "near-sdk-as";

@nearBindgen
export class Artwork {
    id: string;
    name: string;
    description: string;
    image: string;
    hearts: number;
    owner: string;
    categories: string;

    public static fromPayload(payload: Artwork): Artwork {
        const artwork = new Artwork();
        artwork.id = payload.id;
        artwork.name = payload.name;
        artwork.description = payload.description;
        artwork.image = payload.image;
        artwork.hearts = 0;
        artwork.owner = context.sender;
        artwork.categories = payload.categories;
        return artwork;
    }
}

export const artworks = new PersistentUnorderedMap<string, Artwork>("a");
export const hearts = new PersistentMap<string, PersistentVector<string>>("h");