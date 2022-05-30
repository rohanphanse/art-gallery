// Generate 6 character long id
function generateId() {
    return Date.now().toString(36).substring(6, 8) + Math.random().toString(36).substring(2, 6);
}

export function createArtwork(artwork) {
    artwork.id = generateId();
    return window.contract.setArtwork({ artwork })
}

export function getArtworks() {
    return window.contract.getArtworks();
}