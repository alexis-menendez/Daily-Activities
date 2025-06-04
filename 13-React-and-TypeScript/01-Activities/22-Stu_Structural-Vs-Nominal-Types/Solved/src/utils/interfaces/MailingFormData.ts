export type MailingName = string & { __nameBrand: void };

export type MailingEmail = string & { __emailBrand: void };

interface MailingFormData {
  name: MailingName | '';
  email: MailingEmail | '';
}

export default MailingFormData;
