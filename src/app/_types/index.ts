export type FieldMap = {
  [key: string]: string;
};

export type ContactFormState = {
  errors?: FieldMap;
  success: boolean;
  message: string;
  inputs?: { [k: string]: FormDataEntryValue };
};
