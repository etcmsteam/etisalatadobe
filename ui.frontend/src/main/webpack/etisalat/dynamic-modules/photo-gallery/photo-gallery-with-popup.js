/* eslint-disable */
import '../shared/js/alloy-finger';
import '../shared/js/lc-lightbox.lite';

export const PHOTO_GALLERY = () => {
  $('.imagegallerycontainer').each(function (index) {
    $(this)
      .find('.elem')
      .each(function () {
        $(this).addClass('elem-' + index);
      });

    lc_lightbox('.elem-' + index, {
      wrap_class: 'img-gallery-lightbox-popup',
      gallery: true,
      thumb_attr: 'data-lcl-thumb',
      fullscreen: false,
      show_title: false,
      show_descr: false,
      show_author: false,
      fb_share_params: false,
      txt_toggle_cmd: true,
      skin: 'minimal',
      radius: 0,
      padding: 0,
      border_w: 0,
      fading_time: 0,
      animation_time: 10,
      slideshow_time: 10,
      shadow: false,
    });
  });
};
