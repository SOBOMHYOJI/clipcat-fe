export type LanguageCode = "vi" | "ru" | "uz" | "km" | "mn";

export const LANGUAGE_NAMES: Record<LanguageCode, string> = {
  vi: "베트남어",
  ru: "러시아어",
  uz: "우즈벡어",
  km: "캄보디아어",
  mn: "몽골어",
};

export interface TranslateRequest {
  text: string;
  lang: LanguageCode;
}

export interface TranslateResponse {
  translated_text: string;
}
