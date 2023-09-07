// создание вопросов и ответов
let questions = [
    {
    numb: 1,
    question: "Azərbaycan Respublikasında gəlir vergisinin ödəyicisi kimlərdir?",
    answer: "C)   Rezident və qeyri-rezident fiziki şəxslər",
    options: [
      "A)   Yalnız rezident fiziki şəxslər",
      "B)   Yalnız qeyri-rezident fiziki şəxslər",
      "C)   Rezident və qeyri-rezident fiziki şəxslər",
      "D)   Fərdi sahibkarlar"
    ]
  },
    {
    numb: 2,
    question: "Rezident fiziki şəxslərin gəlirləri üzrə vergitutma obyekti nədir?",
    answer: "C)	Vergi ili üçün rezidentlərin bütün gəliri ilə həmin dövr üçün Vergi Məcəlləsi ilə müəyyən-ləşdirilən gəlirdən çıxılan məbləğ arasındakı fərqdən ibarət olan vergiyə cəlb edilən gəlirdir.",
    options: [
      "A)	Vergi ili üçün rezidentlərin yalnız Azərbaycan mənbəyindən əldə etdiyi gəliri ilə həmin dövr üçün Vergi Məcəlləsi ilə müəyyənləşdirilən gəlirdən çıxılan məbləğ arasındakı fərqdən ibarət olan vergiyə cəlb edilən gəlirdir.",
      "B)	Vergi ili üçün rezidentlərin bütün gəliri ilə həmin dövr üçün Vergi Məcəlləsi ilə müəyyənləşdirilən gəlirdən çıxılan məbləğ nəzərə alınmadan vergiyə cəlb edilən gəlirdir.",
      "C)	Vergi ili üçün rezidentlərin bütün gəliri ilə həmin dövr üçün Vergi Məcəlləsi ilə müəyyən-ləşdirilən gəlirdən çıxılan məbləğ arasındakı fərqdən ibarət olan vergiyə cəlb edilən gəlirdir.",
      "D)	Dövlət Vergi Xidməti tərəfindən müəyyənləşdirilən dövr üçün rezidentlərin bütün gəliri ilə həmin dövrdə Vergi Məcəlləsi ilə müəyyənləşdirilən gəlirdən çıxılan məbləğ arasındakı fərqdən ibarət olan vergiyə cəlb edilən gəlirdir."
    ]
  },
    {
    numb: 3,
    question: "Fiziki şəxslərdən ödəmə mənbəyində vergi tutulduğu halda vergiyə cəlb olunan gəlir vergitutma obyekti hesab edilə bilərmi?",
    answer: "B)	Hesab edilə bilər ",
    options: [
      "A)	Hesab edilə bilməz ",
      "B)	Hesab edilə bilər ",
      "C)   Bu Nazirlər Kabinetinin qərarı ilə müəyyənləşdirilir",
      "D)   Bu Dövlət Vergi Xidməti tərəfindən müəyyənləşdirilir"
    ]
  },
    {
    numb: 4,
    question: "Azərbaycan Respublikasında daimi nümayəndəlik vasitəsilə fəaliyyət göstərən qeyri- rezident fiziki şəxsin daimi nümayəndəliyi ilə əlaqədar olan gəlirindən vergi necə tutulur??",
    answer: "B)	Gəlirdən gəlirin əldə edilməsi ilə bağlı xərclər çıxılmaqla",
    options: [
      "A)	Ödəmə mənbəyində gəlirdən xərclər çıxılmamaqla",
      "B)	Gəlirdən gəlirin əldə edilməsi ilə bağlı xərclər çıxılmaqla",
      "C)	Ödəmə mənbəyində gəlirdən xərclər çıxılmaqla",
      "D)	Gəlirdən Azərbaycan Respublikasının hüdudlarından kənarda çəkilən xərclər çıxılmaqla (VM maddə "
    ]
  },
    {
    numb: 5,
    question: "Azərbaycan Respublikasında daimi nümayəndəlik vasitəsilə fəaliyyət göstərən qeyri- rezident vergi ödəyicisi hansı gəlirləri üzrə gəlir vergisinin ödəyicisidir?",
    answer: "A)	Daimi nümayəndəliyi ilə əlaqədar olan vergiyə cəlb edilən gəlirləri üzrə",
    options: [
      "A)	Daimi nümayəndəliyi ilə əlaqədar olan vergiyə cəlb edilən gəlirləri üzrə",
      "B)	Bütün gəlirləri üzrə",
      "C)	yalnız Azərbaycan Respublikasının hüdudlarından kənarda əldə etdiyi gəlirləri üzrə",
      "D)	daimi nümayəndəliyi ilə əlaqədar olmayan vergiyə cəlb edilən gəlirləri üzrə",
    ]
  },
  {
    numb: 6,
    question: "Qeyri-rezident fiziki şəxsin ödəmə mənbəyində vergiyə cəlb edilməsi nəzərdə tutulan ümumi gəliri hansı qaydada vergitutma obyektidir?",
    answer: "A)	Gəlirdən çıxılan məbləğ nəzərə alınmadan ödəniş yerində vergitutma obyektidir",
    options: [
      "A)	Gəlirdən çıxılan məbləğ nəzərə alınmadan ödəniş yerində vergitutma obyektidir",
      "B)	Vergitutma obyekti deyil",
      "C)	Gəlirdən çıxılan məbləğ nəzərə alınmaqla ödəniş yerində vergitutma obyektidir",
      "D)	Əgər fiziki şəxsin vergiyə cəlb edilməsi ödəmə mənbəyində nəzərdə tutulan ümumi gəliri, yalnız sahibkarlıq fəaliyyətindən əldə edilmişdirsə, vergitutma obyektidir"
    ]
  },
{
    numb: 7,
    question: "Məşğulluqdan və ya əmlakın təqdim edilməsindən gəlir əldə edən qeyri-rezident fizi¬ki şəxs hansı gəlirləri üzrə gəlir vergisinin ödəyicisidir?",
    answer: "A)	Azərbaycan mənbəyindən təqvim ili ərzində əldə etdiyi bu növ ümumi gəlirin V.Məcəllə- sinə əsasən, həmin dövrdə bu gəlirə aid olan və ondan çıxılan xərclər qədər azaldılan məbləği üzrə",
    options: [
      "A)	Azərbaycan mənbəyindən təqvim ili ərzində əldə etdiyi bu növ ümumi gəlirin V.Məcəllə- sinə əsasən, həmin dövrdə bu gəlirə aid olan və ondan çıxılan xərclər qədər azaldılan məbləği üzrə",
      "B)	Azərbaycan mənbəyindən təqvim ili ərzində əldə etdiyi bütün növ ümumi gəlirləri üzrə",
      "C)	Azərbaycan mənbəyindən və onun hüdudlarından kənarda təqvim ili ərzində əldə etdiyi bu növ ümumi gəlirin Vergi Məcəlləsində müəyyənləşdirilən, həmin dövrdə bu gəlirə aid olan və ondan çıxılan xərclər qədər azaldılan məbləği üzrə",
      "D)	Yalnız Azərbaycan Respublikasının hüdudlarından kənarda təqvim ili ərzində əldə etdiyi bütün növ ümumi gəliri məbləği üzrə"
    ]
  },
    {
    numb: 8,
    question: "Сам вопрос",
    answer: "Ответ Правильный",
    options: [
      "1 ответ",
      "2 ответ",
      "3 ответ",
      "4 ответ"
    ]
  },
  ];
