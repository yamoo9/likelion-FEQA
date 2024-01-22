// Q. Class를 확장한다는 것이 무엇을 의미하나요?

class 생물 {
  constructor(type = '생물') {
    this.type = type;
  }
  호흡한다() {}
}

class 척추생물 extends 생물 {
  constructor() {
    super('척추생물');
  }
  걷는다() {}
}

class 포유류 extends 척추생물 {
  constructor() {
    super('포유류');
  }
  낳는다(무엇 = '새끼') {}
}

class 인간 extends 포유류 {
  constructor() {
    super('인간');
  }
  생각을_한다() {}
  언어를_한다() {}
}
