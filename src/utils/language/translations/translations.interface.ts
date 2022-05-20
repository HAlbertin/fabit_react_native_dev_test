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
  /**
   * SignupScreen
   */
  SignupScreen_HeaderTitle: string;
  SignupScreen_Subtitle: string;
  SignupScreen_CountryLabel: string;
  SignupScreen_CountryPlaceholder: string;
  SignupScreen_Bottomsheet_Country: string;
  SignupScreen_StateLabel: string;
  SignupScreen_StatePlaceholder: string;
  SignupScreen_Bottomsheet_StateLabel: string;
  SignupScreen_ErrorMessage_InvalidRequest: string;
  SignupScreen_ErrorMessage_Unknow: string;
  SignupScreen_ErrorMessage_EmailRequired: string;
  SignupScreen_ErrorMessage_InvalidEmail: string;
  SignupScreen_ErrorMessage_AccountSuspended: string;
  SignupScreen_ErrorMessage_AccountClosed: string;
  SignupScreen_ErrorMessage_AccountLocked: string;
  SignupScreen_ErrorMessage_StateNotSupported: string;
}

export type TranslationKeys = keyof ITranslations;
