import { getURLParameter } from '../../../global/js/utils';

export const THANK_YOU = () => {
  if ($('#thankyoumessage').length === 0) {
    return;
  }
  const referenceNo = getURLParameter('referenceNo');
  const locale = $('html')[0].lang != '' ? $('html')[0].lang.toLowerCase() : 'en';
  const indexPageUrl = `/${locale}/smb/index.html`;
  if (referenceNo) {
    $('.referenceNoTxt').html(referenceNo);
  } else {
    window.location.replace(indexPageUrl);
  }
};
