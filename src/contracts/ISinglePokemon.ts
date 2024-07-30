export interface ISinglePokemon  {
    abilities:                Ability[];
    base_experience:          number;
    cries:                    Cries;
    forms:                    Species[];
    game_indices:             any[];
    height:                   number;
    held_items:               HeldItem[];
    id:                       number;
    is_default:               boolean;
    location_area_encounters: string;
    moves:                    Move[];
    name:                     string;
    order:                    number;
    past_abilities:           any[];
    past_types:               any[];
    species:                  Species;
    sprites:                  Sprites;
    stats:                    Stat[];
    types:                    Type[];
    weight:                   number;
}

export type Ability = {
    ability:   Species;
    is_hidden: boolean;
    slot:      number;
}

export type Species = {
    name: string;
    url:  string;
}

export type Cries = {
    latest: string;
    legacy: null;
}

export type HeldItem = {
    item:            Species;
    version_details: VersionDetail[];
}

export type VersionDetail = {
    rarity:  number;
    version: Species;
}

export type Move = {
    move:                  Species;
    version_group_details: VersionGroupDetail[];
}

export type VersionGroupDetail = {
    level_learned_at:  number;
    move_learn_method: Species;
    version_group:     Species;
}

export type GenerationV = {
    "black-white": Sprites;
}

export type GenerationIv = {
    "diamond-pearl":        Sprites;
    "heartgold-soulsilver": Sprites;
    platinum:               Sprites;
}

export type Versions = {
    "generation-i":    GenerationI;
    "generation-ii":   GenerationIi;
    "generation-iii":  GenerationIii;
    "generation-iv":   GenerationIv;
    "generation-v":    GenerationV;
    "generation-vi":   { [key: string]: Home };
    "generation-vii":  GenerationVii;
    "generation-viii": GenerationViii;
}

export type Other = {
    dream_world:        DreamWorld;
    home:               Home;
    "official-artwork": OfficialArtwork;
    showdown:           Sprites;
}

export type Sprites = {
    back_default:       null | string;
    back_female:        null;
    back_shiny:         null | string;
    back_shiny_female:  null;
    front_default:      null | string;
    front_female:       null;
    front_shiny:        null | string;
    front_shiny_female: null;
    other?:             Other;
    versions?:          Versions;
    animated?:          Sprites;
}

export type GenerationI = {
    "red-blue": RedBlue;
    yellow:     RedBlue;
}

export type RedBlue = {
    back_default:      null;
    back_gray:         null;
    back_transparent:  null;
    front_default:     null;
    front_gray:        null;
    front_transparent: null;
}

export type GenerationIi = {
    crystal: Crystal;
    gold:    Gold;
    silver:  Gold;
}

export type Crystal = {
    back_default:            null;
    back_shiny:              null;
    back_shiny_transparent:  null;
    back_transparent:        null;
    front_default:           null;
    front_shiny:             null;
    front_shiny_transparent: null;
    front_transparent:       null;
}

export type Gold = {
    back_default:       null;
    back_shiny:         null;
    front_default:      null;
    front_shiny:        null;
    front_transparent?: null;
}

export type GenerationIii = {
    emerald:             OfficialArtwork;
    "firered-leafgreen": Gold;
    "ruby-sapphire":     Gold;
}

export type OfficialArtwork = {
    front_default: null | string;
    front_shiny:   null | string;
}

export type Home = {
    front_default:      null | string;
    front_female:       null;
    front_shiny:        null | string;
    front_shiny_female: null;
}

export type GenerationVii = {
    icons:                  DreamWorld;
    "ultra-sun-ultra-moon": Home;
}

export type DreamWorld = {
    front_default: null | string;
    front_female:  null;
}

export type GenerationViii = {
    icons: DreamWorld;
}

export type Stat = {
    base_stat: number;
    effort:    number;
    stat:      Species;
}

export type Type = {
    slot: number;
    type: Species;
}
