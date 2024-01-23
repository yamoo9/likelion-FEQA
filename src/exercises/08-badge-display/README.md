# 실습

[StackOverflow](https://stackoverflow.com/)와 같은 
커뮤니티 사이트에는 특정 목표를 달성하거나 특정 요구 사항을 충족하는 사람들에게 
작은 보상인 "배지(badge)"를 수여합니다.

아래 고양이 데이터를 렌더링 한 후, 다음의 요구사항을 구현해봅니다.

- [ ] 뱃지 목록의 각 항목을 화면에 표시합니다.
- [ ] 뱃지 목록이 비어있을 경우 화면에 표시하지 않습니다.
- [ ] 화면에 표시된 뱃지가 3개 이상인 경우 황금색으로 표현합니다.

<details>
  <summary>cats.json</summary>

  ```json
  [
    {
      "id": "penelope-june-p1oer6",
      "imageSrc": "cat-penelope.png",
      "imageAlt": "멋진 안경과 반짝임/무지개 그림이 있는 고양이",
      "name": "페넬로페 준",
      "birthday": "2022-1-21",
      "badges": [
        {
          "slug": "ping-pong",
          "label": "🏓 운동"
        },
        {
          "slug": "photographer",
          "label": "📸 포토그래퍼"
        },
        {
          "slug": "olympic-medalist",
          "label": "🏅 올림픽 메달리스트"
        }
      ]
    },
    {
      "id": "baron-montgomerie-9si39d",
      "imageSrc": "cat-baron.png",
      "imageAlt": "모자와 단안경 그리고 콧수염이 멋진 신사 고양이",
      "name": "에글링턴의 남작 몽고메리",
      "birthday": "1974-8-3",
      "badges": []
    },
    {
      "id": "joan-clawmaker-5xch41",
      "imageSrc": "cat-clawmaker.png",
      "imageAlt": "귀걸이와 핑크색 모히칸 모자를 쓴 펑크 록 고양이",
      "name": "조안 클로메이커",
      "birthday": "2019-10-15",
      "badges": [
        {
          "slug": "lock-star",
          "label": "⭐️ 록스타"
        },
        {
          "slug": "musician",
          "label": "🎸 뮤지션"
        }
      ]
    }
  ]
  ```
</details>