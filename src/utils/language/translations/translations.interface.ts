export interface ITranslations {
  /**
   * Languages
   */
  Language_Pt: string;
  Language_De: string;
  Language_En: string;
  Language_Es: string;
  Language_It: string;
  Language_Fr: string;
  /**
   * LanguageScreen
   */
  LanguageScreen_SelectLanguage: string;
  LanguageScreen_ContinueButton: string;
}

export type TranslationKeys = keyof ITranslations;
