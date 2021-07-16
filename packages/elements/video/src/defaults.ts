export const ELEMENT_VIDEO = 'video';

export const PLATFORMS = {
  YOUTUBE: 'youtube',
  VIMEO: 'vimeo',
  PANOPTO: 'panopto',
  VIDEO23: 'video23',
  WISTIA: 'wistia',
  DACAST: 'dacast',
  MEDIAIMPERIAL: 'mediaimperial',
}

export const PLATFORMS_URL_REGEXP = {
  PANOPTO: /^https?:\/\/\w+\.\w+\.panopto\.eu\/Panopto\/Pages\/(Viewer|Embed)\.aspx/,
  VIDEO23: /\/\/.+\.23video\.com/,
  VIDEO23BI: /\/\/videos\.bi\.no/,
  WISTIA: /^https?:\/\/\w+\.wistia\.com\/medias\//,
  DACAST: /^(https:)?\/\/iframe.dacast.com\/b\/\w+\/f\/\w+/,
  MEDIAIMPERIAL: /^https?:\/\/media\.imperial\./,
};

export const PLATFORMS_WITH_SUBTITLES = {
  YOUTUBE: 'youtube',
  VIMEO: 'vimeo',
};

export const SERVICES = {
  SUBTITLES: 'subtitles',
  VIDEO: 'video',
};

export const PLATFORMS_WITH_DOWNLOAD = {
  VIMEO: 'vimeo',
};

export const RATIO = '16:9';

export const LANGUAGE = 'en';