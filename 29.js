// создание вопросов и ответов
let questions = [
    {
    numb: 1,
    question: "Nəqqaşlıq emalatxanalarının fəaliyyəti ilə məşğul olan fiziki şəxslər üçün sadələşdi-rilmiş verginin məbləği nə qədərdir?",
    answer: "C) 20",
    options: [
      "A) 10",
      "B) 15",
      "C) 20",
      "D) 30"
    ]
  },
  {
    numb: 2,
    question: "Çəkməçi, pinəçi fəaliyyəti ilə məşğul olan fiziki şəxslər üçün sadələşdirilmiş vergi¬nin məbləği nə qədərdir?",
    answer: "B) 5",
    options: [
      "A) 10",
      "B) 5",
      "C) 20",
      "D) 30"
    ]
  },
  {
    numb: 3,
    question: "Fərdi yaşayış evlərində və mənzillərdə ev qulluqçusu, xəstələrə, qocalara və uşaq-lara qulluq xidməti, dayə, fərdi sürücülük, ev təsərrüfatında təmizlik, bağban, aşbaz, gözətçi və iaşə obyektlərində müştərilərə xidmət göstərən fiziki şəxslər (ofisiant) ilə məşğul olan fiziki şəxslər üçün sadələşdirilmiş verginin məbləği nə qədərdir?",
    answer: "D) 10",
    options: [
      "A) 30",
      "B) 5",
      "C) 20",
      "D) 10"
    ]
  },
  {
    numb: 4,
    question: "Fərdi qaydada bərbər fəaliyyəti ilə məşğul olan şəxslər üçün sadələşdirilmiş vergi-nin məbləği nə qədərdir?",
    answer: "B) 15",
    options: [
      "A) 30",
      "B) 15",
      "C) 20",
      "D) 10"
    ]
  },
  {
    numb: 5,
    question: "Fərdi qaydada dərzi fəaliyyəti ilə məşğul olan şəxslər üçün sadələşdirilmiş verginin məbləği nə qədərdir?",
    answer: "C) 10",
    options: [
      "A) 30",
      "B) 15",
      "C) 10",
      "D) 5"
    ]
  },
  {
    numb: 6,
    question: "Vergi Məcəlləsinin 220.10-cu maddəsində nəzərdə tutulan fəaliyyət növləri ilə məşğul olan fiziki şəxslər üçün aylıq verginin məbləğinə tətbiq edilən əmsal Bakı şəhəri üzrə neçədir?",
    answer: "A) 2",
    options: [
      "A) 2",
      "B) 1,5",
      "C) 1,1",
      "D) 3"
    ]
  },
  {
    numb: 7,
    question: "Vergi Məcəlləsinin 220.10-cu maddəsində nəzərdə tutulan fəaliyyət növləri ilə məş-ğul olan fiziki şəxslər üçün aylıq verginin məbləğinə tətbiq edilən əmsal Gəncə, Sumqayıt və Xırdalan şəhərləri üzrə neçədir?",
    answer: "B) 1,5",
    options: [
      "A) 2",
      "B) 1,5",
      "C) 1,1",
      "D) 3"
    ]
  },
  {
    numb: 8,
    question: "Vergi Məcəlləsinin 220.10-cu maddəsində nəzərdə tutulan fəaliyyət növləri ilə məşğul olan fiziki şəxslər üçün aylıq verginin məbləğinə tətbiq edilən əmsal Abşeron rayonunun qəsəbə və kəndləri (Xırdalan şəhəri istisna olmaqla), Şirvan, Mingəçevir, Naxçı¬van, Lənkəran, Yevlax, Şəki və Naftalan şəhərləri üzrə neçədir?",
    answer: "C) 1",
    options: [
      "A) 2",
      "B) 1,5",
      "C) 1",
      "D) 3"
    ]
  },
  {
    numb: 9,
    question: "Vergi Məcəlləsinin 220.10-cu maddəsində nəzərdə tutulan fəaliyyət növləri ilə məş-ğul olan fiziki şəxslər üçün aylıq verginin məbləğinə tətbiq edilən əmsal digər rayon (şəhər) və qəsəbələrdə (kəndlərdə) neçədir?",
    answer: "D) 0,5",
    options: [
      "A) 2",
      "B) 1,5",
      "C) 1",
      "D) 0,5"
    ]
  },
  {
    numb: 10,
    question: "Hüquqi şəxslər və fərdi sahibkarlar tərəfindən pul vəsaitlərinin nağd qaydada bank hesablarından çıxarılmasına görə neçə faiz dərəcəsi ilə sadələşdirilmiş vergi hesablanır?",
    answer: "C)	1 faiz dərəcəsi ilə sadələşdirilmiş vergi hesablanır",
    options: [
      "A)	Vergi hesablanmır",
      "B)	2 faiz dərəcəsi ilə sadələşdirilmiş vergi hesablanır",
      "C)	1 faiz dərəcəsi ilə sadələşdirilmiş vergi hesablanır",
      "D)	Yalnız hüquqi şəxslərdən 1 faiz dərəcəsi ilə sadələşdirilmiş vergi hesablanır"
    ]
  },
  {
    numb: 11,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 12,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 13,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 14,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 15,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 16,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 17,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 18,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 19,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 20,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 21,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 22,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 23,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 24,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 25,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 26,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 27,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 28,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 29,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 30,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 31,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 32,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 33,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 34,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 35,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 36,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 37,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 38,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 39,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 40,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 41,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  ];
