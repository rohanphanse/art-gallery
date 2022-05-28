import { PersistentUnorderedMap, PersistentMap, PersistentVector, context } from "near-sdk-as";
import { nanoid } from "nanoid";

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
        artwork.id = nanoid(6);
        artwork.name = payload.name;
        artwork.description = payload.description;
        artwork.image = payload.image;
        artwork.hearts = payload.hearts;
        artwork.owner = context.sender;
        artwork.categories = payload.categories;
        return artwork;
    }

    public incrementHearts(): void {
        this.hearts = this.hearts + 1;
    }
}

export const artworks = new PersistentUnorderedMap<string, Artwork>("a");
export const hearts = new PersistentMap<string, PersistentVector<string>>("h");