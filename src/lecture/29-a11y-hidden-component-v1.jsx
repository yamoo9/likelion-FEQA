// src 안에 있는 자산(에셋, assets)을 번들러를 사용해서 화면에 표시하고,
// 빌드했을 때 정상적으로 이미지를 빌드하려면 import로 호출해서 사용해야 한다.
import bannerImage from '../assets/banner.png';
import { getStaticImage } from '../utils/getStaticAsset';

function Exercise() {
  return (
    <figure>
      {/* ✅ public 정적 자산 */}
      <img src={getStaticImage('faces/woman-02.jpg')} alt="" />

      {/* ❌ 마치 정적인 것처럼 src 안의 자산 */}
      <img src="/src/assets/banner.png" alt="" height={100} />

      {/* ✅ src/assets 동적 자산으로 호출(import) */}
      <img src={bannerImage} alt="" height={100} />
    </figure>
  );
}

export default Exercise;
