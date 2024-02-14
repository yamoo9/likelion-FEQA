const SITE_TITLE = '최강 멋.사 프론트엔드 8기';

export default function getDocumentTitle(pageTitle, siteTitle = SITE_TITLE) {
  return `${pageTitle} ← ${siteTitle}`;
}
