import content from "../../content/iletisim.json";

// Phone lines are edited from the Gomp panel (content/iletisim.json); every
// format the site uses is derived here.

const ones = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
const tens = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];

/**
 * Turkish accusative suffix for a phone number as it is read aloud, which
 * follows the last pair of digits: "…60 63" → "'ü" (üç), "…24 22" → "'yi" (iki).
 */
export function accusative(phone: string) {
  const last = phone.replace(/\D/g, "").slice(-2).padStart(2, "0");
  const [t, o] = [Number(last[0]), Number(last[1])];
  const word = o ? ones[o] : t ? tens[t] : "sıfır";
  const vowel = [...word].reverse().find((c) => "aıoueiöü".includes(c)) ?? "e";
  const harmony = "aı".includes(vowel) ? "ı" : "ei".includes(vowel) ? "i" : "ou".includes(vowel) ? "u" : "ü";
  const endsWithVowel = "aıoueiöü".includes(word.at(-1)!);
  return `'${endsWithVowel ? "y" : ""}${harmony}`;
}

function line(display: string) {
  const digits = display.replace(/\D/g, "");
  const international = digits.startsWith("0") ? `90${digits.slice(1)}` : digits;
  return {
    display,
    href: `tel:${digits}`,
    whatsapp: `https://wa.me/${international}`,
    schema: `+${international}`,
    accusative: accusative(display),
  };
}

export const PHONE1 = line(content.phone1);
export const PHONE2 = line(content.phone2);
