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
  /**
   * LoginScreen
   */
  LoginScreen_HeaderTitle: string;
  LoginScreen_Email: string;
  LoginScreen_EmailPlaceholder: string;
  LoginScreen_ContinueButton: string;
  LoginScreen_EmailInvalid: string;
  LoginScreen_EmailRequired: string;
  LoginScreen_ErrorMessage_InvalidRequest: string;
  LoginScreen_ErrorMessage_Unknow: string;
  LoginScreen_ErrorMessage_EmailRequired: string;
  LoginScreen_ErrorMessage_InvalidEmail: string;
  LoginScreen_ErrorMessage_AccountSuspended: string;
  LoginScreen_ErrorMessage_AccountClosed: string;
  LoginScreen_ErrorMessage_AccountLocked: string;
}

export type TranslationKeys = keyof ITranslations;
