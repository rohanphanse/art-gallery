// Generate 6 character long id
function generateId() {
    return Date.now().toString(36).substring(6, 8) + Math.random().toString(36).substring(2, 6);
}

export async function setArtwork(artwork) {
    artwork.id = generateId();
    return await window.contract.setArtwork({ artwork })
}

export function getArtworks() {
    return window.contract.getArtworks();
}

export async function heartOrUnheartArtwork(id) {
    return await window.contract.heartOrUnheartArtwork({ id });
}

export async function deleteArtwork(id) {
    return await window.contract.deleteArtwork({ id });
}