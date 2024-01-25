import { A11yHidden } from '../components';
// src 안에 있는 자산(에셋, assets)을 번들러를 사용해서 화면에 표시하고,
// 빌드했을 때 정상적으로 이미지를 빌드하려면 import로 호출해서 사용해야 한다.
import bannerImage from '../assets/banner.png';

// 환경 변수
// console.log(import.meta.env);

// 유틸리티 함수
function getStaticAsset(assetPath) {
  return import.meta.env.BASE_URL + assetPath;
}

function getStaticImage(imagePath, root = 'images/') {
  return getStaticAsset(`${root}${imagePath}`);
}

function Exercise() {
  return (
    <figure>
      {/* public 정적 자산 */}
      <img src={getStaticImage('faces/man-01.jpg')} alt="" />
      {/* 마치 정적인 것처럼 src 안의 자산 */}
      <img src="/src/assets/banner.png" alt="" height={100} />
      {/* src/assets 동적 자산으로 호출(import) */}
      <img src={bannerImage} alt="" height={100} />
    </figure>
  );
}

export default Exercise;
