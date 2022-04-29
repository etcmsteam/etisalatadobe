import "intl-tel-input/build/js/utils";
import "intl-tel-input/build/js/intlTelInput";
import "../../js/common";

import { FORM_DEFAULTS } from "./form-defaults";
import { LEADER_FORM } from "./leader-form";
import { OMNI_LEAD_FORM } from "./omniLead-form";
import { NEWS_LETTER_SUBSCRIPTION } from "./newsletter-subscription";
import { PROXY_FORM } from "./proxy-form";
import { NEED_HELP_FORM } from "./need-help-form";
import { SMB_FORMS } from "./smb-forms";

export const FORMS_MODULE = () => {
  FORM_DEFAULTS();
  LEADER_FORM();
  OMNI_LEAD_FORM();
  NEWS_LETTER_SUBSCRIPTION();
  PROXY_FORM();
  NEED_HELP_FORM();
  SMB_FORMS();
};
