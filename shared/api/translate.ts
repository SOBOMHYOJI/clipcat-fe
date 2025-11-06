import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_UFL;

export type LanguageCode = "vi" | "ru" | "uz" | "km" | "mn";

export interface TranslateRequest {
  text: string;
  lang: LanguageCode;
}

export interface TranslateResponse {
  translated_text: string;
}

export async function translateText(
  text: string,
  lang: LanguageCode = "vi"
): Promise<string> {
  const response = await axios.post<TranslateResponse>(
    `${API_BASE_URL}/translate`,
    {
      text,
      lang,
    }
  );
  return response.data.translated_text;
}
