import content from "../../content/markalar.json";

// Edited from the Gomp panel (content/markalar.json).
export const brands = content.brands;

export type Brand = typeof brands[number];
