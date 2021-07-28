import { SERVICES } from '@insendi/editor-v2-video';

const setAttributes = (data: string, type: string, filename: string) => {
  const link = document.createElement('a');

  if (type === SERVICES.SUBTITLES) {
    link.setAttribute(
      'href',
      `data:text;charset=utf-8,${encodeURIComponent(data).trim()}`
    );
    link.setAttribute('download', `${filename}.txt`);
  } else {
    link.setAttribute('href', data);
  }

  return link;
};

export const downloadFile = (data: string, type: string, filename = '') => {
  const link = setAttributes(data, type, filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
