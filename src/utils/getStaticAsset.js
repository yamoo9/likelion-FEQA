// 유틸리티 함수
export function getStaticAsset(assetPath) {
  return import.meta.env.BASE_URL + assetPath;
}

export function getStaticImage(imagePath, root = 'images/') {
  return getStaticAsset(`${root}${imagePath}`);
}
