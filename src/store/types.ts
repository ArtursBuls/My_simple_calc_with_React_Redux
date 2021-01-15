export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export type Languages = "lv" | "en";

interface InitialStoreType {
    language: Languages,
};

export type ChangeLanguage = {
    type: typeof CHANGE_LANGUAGE,
    language: Languages
};

export type AllActions = ChangeLanguage;

export interface RootState extends InitialStoreType { }; 