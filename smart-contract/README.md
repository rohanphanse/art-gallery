# Smart Contract


**Schema:** Artwork entries are stored in a `PersistentUnorderedMap` (NEAR's hashmap which preserves insertion order). Keys are `string` ids and values are `Artwork` objects. Each `Artwork` object stores `string` id, `string` name, `string` description, `string` image, `number` hearts, `string` owner, and `string` categories. 

