import { A11yHidden, CatCardList } from '@/components';

function Exercise() {
  return (
    <section>
      <A11yHidden as="h2">고양이 카드 리스트</A11yHidden>
      <CatCardList />
    </section>
  );
}

export default Exercise;
