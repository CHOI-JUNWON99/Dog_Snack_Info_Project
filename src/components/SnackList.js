// SnackList.js
const snackData = [
  {
    id: 1,
    name: '치킨 육포',
    category: 'safe', // 먹어도되는 간식은 'safe'
    img: '../Snack/ChickinJerky.png',
    diet: 'diet-friendly', // 'diet-friendly' 또는 'non-diet-friendly'로 나누기
    benefits: ['bone', 'energy recovery'], // 건강 페이지와 연계된 건강에 이로운 부위
    shortDescription: '뼈와 기력회복에 좋습니다.', // 간식 한줄 요약
    detailedDescription:
      '이 간식은 고단백질입니다. 뼈와 기력회복에 좋습니다. 소형견 기준 적정 제공량 : ~~~ / 중형견 기준 적정 제공량 : ~~~ / 대형견 기준 적정 제공량 : ~~~', // 간식 자세한 설명
  },
  {
    id: 2,
    name: '초콜릿',
    category: 'unsafe', // 먹으면 안되는 간식은 'unsafe'
    img: '../Snack/Chocolate.jpg',
    benefits: [],
    shortDescription: '강아지에 해롭습니다.',
    detailedDescription:
      '초콜릿에는 테오브로민이 함유되어 있어 반려견에게 독성이 있고 심각한 건강 문제를 일으킬 수 있습니다.',
  },
  {
    id: 3,
    name: '당근',
    category: 'safe',
    img: '../Snack/Carrot.png',
    diet: 'diet-friendly',
    benefits: ['eyes'],
    shortDescription: '눈 건강에 좋고 칼로리가 낮습니다.',
    detailedDescription:
      '당근에는 베타카로틴이 풍부하여 눈 건강에 도움이 되고 저칼로리 식단을 지원합니다.',
  },
  {
    id: 4,
    name: '블루베리',
    category: 'safe',
    img: '../Snack/Blueberry.png',
    diet: 'diet-friendly',
    benefits: ['eyes'],
    shortDescription: '항산화 성분이 풍부하여 눈 건강에 좋습니다.',
    detailedDescription:
      '블루베리는 항산화제가 풍부하여 시력 보호와 면역력 강화에 도움이 됩니다.',
  },
  {
    id: 5,
    name: '호박',
    category: 'safe',
    img: '../Snack/Pumpkin.png',
    diet: 'diet-friendly',
    benefits: ['digestion'],
    shortDescription: '소화에 좋고 변비를 예방합니다.',
    detailedDescription:
      '호박은 섬유질이 풍부하여 소화 기능을 개선하고 변비 예방에 효과적입니다.',
  },
  {
    id: 6,
    name: '사과',
    category: 'safe',
    img: '../Snack/Apple.png',
    diet: 'diet-friendly',
    benefits: ['teeth'],
    shortDescription: '치아 건강과 입 냄새 제거에 좋습니다.',
    detailedDescription:
      '사과는 자연적인 치석 제거를 도와주며, 입 냄새를 줄여줍니다.',
  },
  {
    id: 7,
    name: '고구마',
    category: 'safe',
    img: '../Snack/SweetPotato.png',
    diet: 'non-diet-friendly',
    benefits: ['energy recovery'],
    shortDescription: '에너지 회복에 도움을 줍니다.',
    detailedDescription:
      '고구마는 천연 탄수화물이 풍부하여 피로 회복과 에너지 공급에 유용합니다.',
  },
  {
    id: 8,
    name: '익힌 소고기 간',
    category: 'safe',
    img: '../Snack/SeasonedCookedBeef.png',
    diet: 'non-diet-friendly',
    benefits: ['bones', 'joints'],
    shortDescription: '뼈와 관절 건강에 좋습니다.',
    detailedDescription:
      '소 간은 철분과 비타민이 풍부하여 뼈와 관절 건강에 도움을 줍니다.',
  },
  {
    id: 9,
    name: '강낭콩',
    category: 'safe',
    img: '../Snack/KidneyBean.png',
    diet: 'diet-friendly',
    benefits: ['weight control'],
    shortDescription: '다이어트와 체중 조절에 좋습니다.',
    detailedDescription:
      '강낭콩은 칼로리가 낮고 포만감을 줘서 체중 조절에 효과적입니다.',
  },
  {
    id: 10,
    name: '요거트',
    category: 'safe',
    img: '../Snack/Yogurt.png',
    diet: 'non-diet-friendly',
    benefits: ['digestion'],
    shortDescription: '소화기 건강을 지원합니다.',
    detailedDescription:
      '요거트는 프로바이오틱스가 풍부하여 소화기 건강을 지원하고 장내 균형을 잡아줍니다.',
  },
  {
    id: 11,
    name: '오리고기',
    category: 'safe',
    img: '../Snack/DuckMeat.png',
    diet: 'non-diet-friendly',
    benefits: ['joints'],
    shortDescription: '관절 건강을 개선합니다.',
    detailedDescription:
      '오리고기는 관절 강화에 좋은 글루코사민을 포함하고 있어 관절 건강에 좋습니다.',
  },
  {
    id: 12,
    name: '바나나',
    category: 'safe',
    img: '../Snack/Banana.png',
    diet: 'diet-friendly',
    benefits: ['energy recovery'],
    shortDescription: '피로 회복과 에너지 충전에 좋습니다.',
    detailedDescription:
      '바나나는 천연 당분이 있어 피로 회복과 에너지 충전에 유익합니다.',
  },
  {
    id: 13,
    name: '연어 껍질',
    category: 'safe',
    img: '../Snack/SalmonSkin.png',
    diet: 'non-diet-friendly',
    benefits: ['coat', 'skin'],
    shortDescription: '피부와 털 건강을 개선합니다.',
    detailedDescription:
      '연어 껍질은 오메가-3 지방산이 풍부하여 피부와 털 건강에 도움을 줍니다.',
  },
  {
    id: 14,
    name: '브로콜리',
    category: 'safe',
    img: '../Snack/Broccoli.png',
    diet: 'diet-friendly',
    benefits: ['immune system'],
    shortDescription: '면역력 강화에 도움을 줍니다.',
    detailedDescription:
      '브로콜리는 비타민 C와 항산화제가 풍부하여 면역력 강화에 좋습니다.',
  },
  {
    id: 15,
    name: '치즈',
    category: 'safe',
    img: '../Snack/Cheese.png',
    diet: 'non-diet-friendly',
    benefits: ['bones'],
    shortDescription: '뼈 건강에 좋습니다.',
    detailedDescription:
      '치즈는 칼슘이 풍부하여 뼈 강화에 유용하지만 다이어트에는 적합하지 않습니다.',
  },
  {
    id: 16,
    name: '오이',
    category: 'safe',
    img: '../Snack/Cucumber.png',
    diet: 'diet-friendly',
    benefits: ['hydration'],
    shortDescription: '수분 공급에 좋습니다.',
    detailedDescription:
      '오이는 수분 함량이 높아 체내 수분 공급에 탁월한 효과를 줍니다.',
  },
  {
    id: 17,
    name: '수박',
    category: 'safe',
    img: '../Snack/Watermelon.png',
    diet: 'diet-friendly',
    benefits: ['hydration', 'eyes'],
    shortDescription: '수분 보충과 눈 건강에 좋습니다.',
    detailedDescription:
      '수박은 수분이 풍부하고 비타민 A를 포함해 눈 건강에 좋습니다.',
  },
  {
    id: 18,
    name: '파인애플',
    category: 'safe',
    img: '../Snack/Pineapple.png',
    diet: 'non-diet-friendly',
    benefits: ['digestion'],
    shortDescription: '소화에 도움을 줍니다.',
    detailedDescription: '파인애플은 소화를 돕는 브로멜라인 효소가 풍부합니다.',
  },
  {
    id: 19,
    name: '익힌 애호박',
    category: 'safe',
    img: '../Snack/Squash.png',
    diet: 'diet-friendly',
    benefits: ['weight control'],
    shortDescription: '체중 조절에 효과적입니다.',
    detailedDescription:
      '익힌 애호박은 칼로리가 낮고 수분이 많아 체중 감량에 좋습니다.',
  },
  {
    id: 20,
    name: '크랜베리',
    category: 'safe',
    img: '../Snack/Cranberry.png',
    diet: 'non-diet-friendly',
    benefits: ['urinary tract'],
    shortDescription: '요로 건강을 지원합니다.',
    detailedDescription:
      '크랜베리는 요로 건강에 도움을 주는 항산화 성분이 풍부합니다.',
  },
  {
    id: 21,
    name: '계란 노른자',
    category: 'safe',
    img: '../Snack/EggYolk.png',
    diet: 'non-diet-friendly',
    benefits: ['coat', 'skin'],
    shortDescription: '피부와 털 건강을 개선합니다.',
    detailedDescription:
      '달걀 노른자는 비타민과 지방이 풍부해 피부와 털 건강에 좋습니다.',
  },
  {
    id: 22,
    name: '커피',
    category: 'unsafe',
    img: '../Snack/Coffee.png',
    benefits: [],
    shortDescription: '카페인 함유로 강아지에게 유해합니다.',
    detailedDescription:
      '커피는 강아지에게 해로운 카페인이 포함되어 있어 심장박동을 빠르게 하고 불안, 구토, 심지어 사망까지 유발할 수 있습니다.',
  },
  {
    id: 23,
    name: '포도',
    category: 'unsafe',
    img: '../Snack/Grape.png',
    benefits: [],
    shortDescription: '포도와 건포도는 신장 손상을 일으킬 수 있습니다.',
    detailedDescription:
      '포도와 건포도는 강아지의 신장 기능을 빠르게 악화시키며, 소량으로도 중독 증상을 유발할 수 있어 치명적입니다.',
  },
  {
    id: 24,
    name: '양파',
    category: 'unsafe',
    img: '../Snack/Onion.png',
    benefits: [],
    shortDescription: '강아지의 적혈구를 손상시킬 수 있습니다.',
    detailedDescription:
      '양파와 마늘에는 티오설페이트가 포함되어 있어 강아지의 적혈구를 파괴하고 빈혈을 일으킬 수 있습니다.',
  },
  {
    id: 25,
    name: '마카다미아 너트',
    category: 'unsafe',
    img: '../Snack/MacadamiaNuts.png',
    benefits: [],
    shortDescription: '마카다미아 너트는 중독 증상을 일으킵니다.',
    detailedDescription:
      '마카다미아 너트는 강아지에게 구토, 근육 약화, 떨림 및 발열을 유발할 수 있으며, 신경계에 심각한 영향을 미칩니다.',
  },
  {
    id: 26,
    name: '아보카도',
    category: 'unsafe',
    img: '../Snack/Avocado.png',
    benefits: [],
    shortDescription: '아보카도에는 퍼신이라는 독성 물질이 포함되어 있습니다.',
    detailedDescription:
      '아보카도의 퍼신 성분은 강아지의 소화기와 심장에 심각한 문제를 일으킬 수 있으며, 중독 시 복통, 구토, 설사를 유발합니다.',
  },
  {
    id: 27,
    name: '베이컨',
    category: 'unsafe',
    img: '../Snack/Bacon.png',
    benefits: [],
    shortDescription: '베이컨은 염분과 지방이 높아 건강에 유해합니다.',
    detailedDescription:
      '베이컨은 강아지의 췌장염을 유발할 수 있는 높은 염분과 지방을 포함하고 있어, 섭취 시 건강에 치명적입니다.',
  },
  {
    id: 28,
    name: '치즈',
    category: 'unsafe',
    img: '../Snack/Cheese.png',
    benefits: [],
    shortDescription: '치즈는 유당 불내증을 일으킬 수도 있습니다.',
    detailedDescription:
      '치즈는 많은 강아지에게 소화 문제를 일으킬 수 있으며, 유당 불내증이 있는 경우 설사 및 복통을 유발할 수 있습니다.',
  },
];

export default function getSnackList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(snackData);
    }, 1000); // 1초 지연 후 데이터 반환
  });
}
