import { getURLParameter } from '../../../global/js/utils';

export const THANK_YOU = () => {
  if ($('.teaseretisalat #thankyoumessage.cmp-teaser').length === 0) {
    return;
  }
  const referenceNo = getURLParameter('referenceNo');
  const locale = $('html')[0].lang != '' ? $('html')[0].lang.toLowerCase() : 'en';
  const defaultIndex = `/${locale}/smb/index.html`;
  const redirectUrl = $('.cmp-button--secondary a')?.attr('href') || defaultIndex;
  if (referenceNo) {
    $('.referenceNoTxt')?.html(referenceNo);
  } else {
    window.location.replace(redirectUrl);
  }
};
