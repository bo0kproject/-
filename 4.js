// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Azərbaycan Respublikasında mənfəət vergisinin ödəyiciləri kimlərdir?",
  answer: "A)	Rezident və qeyri-rezident müəssisələr, habelə sahibkarlıq fəaliyyətindən gəlir əldə edən qeyri-kommersiya təşkilatları",
  options: [
    "A)	Rezident və qeyri-rezident müəssisələr, habelə sahibkarlıq fəaliyyətindən gəlir əldə edən qeyri-kommersiya təşkilatları",
    "B)	Yalnız rezident müəssisələr",
    "C)	Rezident və qeyri-rezident müəssisələr, fiziki şəxslər",
    "D)	Rezident müəssisələr və fiziki şəxslər"
  ]
},
  {
  numb: 2,
  question: "Fiziki şəxs olmayan hər hansı xarici şəxsə hansı hallarda müəssisə kimi baxılır?",
  answer: "D)	Vergi Məcəlləsinin 137-ci maddəsinə uyğun olaraq birgə sahibkarlıq fəaliyyətinin obyekti kimi baxılmalı olmadığını sübut etməyincə, ona müəssisə kimi baxılır",
  options: [
    "A)	Heç bir halda müəssisə kimi baxılmır",
    "B)	Bütün hallarda müəssisə kimi baxılır",
    "C)	Vergi Məcəlləsinin 137-ci maddəsinə uyğun olaraq birgə sahibkarlıq fəaliyyətinin obyekti kimi baxılmalı olduğunu sübut etməyincə, ona müəssisə kimi baxılır",
    "D)	Vergi Məcəlləsinin 137-ci maddəsinə uyğun olaraq birgə sahibkarlıq fəaliyyətinin obyekti kimi baxılmalı olmadığını sübut etməyincə, ona müəssisə kimi baxılır"
  ]
},
  {
  numb: 3,
  question: "Mənfəət vergisinin məqsədləri üçün rezident müəssisənin vergitutma obyekti nədir?",
  answer: "B) Mənfəəti",
  options: [
    "A) Ümumi gəliri ",
    "B) Mənfəəti",
    "C) Ümumi dövriyyəsi ",
    "D) yalnız aldığı dividend və faizlərdən"
  ]
},
  {
  numb: 4,
  question: "Mənfəət nədir?",
  answer: "A) Vergi ödəyicisinin bütün gəlirləri, o cümlədən onun Azərbaycan Respublikasının hüdud-larından kənarda daimi nümayəndəlikləri vasitəsilə əldə etdiyi gənriərt, Azərbaycan Respub¬likasının hüdudlarından kənarda əldə etdiyi dividend, faiz, royalti (vergidən azad edilən gəlirdən başqa) ilə Vergi Məcəlləsinin X fəslində göstərilən, gəlirdən çıxılan xərc (vergidən azad edilən gəlirlər üzrə çəkilən xərclərdən başqa) arasındakı fərq mənfəətdir",
  options: [
    "A) Vergi ödəyicisinin bütün gəlirləri, o cümlədən onun Azərbaycan Respublikasının hüdud-larından kənarda daimi nümayəndəlikləri vasitəsilə əldə etdiyi gənriərt, Azərbaycan Respub¬likasının hüdudlarından kənarda əldə etdiyi dividend, faiz, royalti (vergidən azad edilən gəlirdən başqa) ilə Vergi Məcəlləsinin X fəslində göstərilən, gəlirdən çıxılan xərc (vergidən azad edilən gəlirlər üzrə çəkilən xərclərdən başqa) arasındakı fərq mənfəətdir",
    "B)	Vergi ödəyicisinin bütün gəlirləri, o cümlədən onun Azərbaycan Respublikasının hüdud-larından kənarda daimi nümayəndəlikləri vasitəsilə əldə etdiyi gəlirləri, Vergi Məcəlləsinin X fəslində göstərilən, gəlirdən çıxılan xərc arasındakı fərq mənfəətdir",
    "C)	Vergi ödəyicisinin bütün gəlirləri, o cümlədən onun Azərbaycan Respublikasının hüdud-larından kənarda daimi nümayəndəlikləri vasitəsilə əldə etdiyi gəlirləri, Azərbaycan Respub- likasımnda əldə etdiyi dividend, faiz, royalti (vergidən azad edilən gəlirdən başqa) ilə Vergi Məcəlləsinin X fəslində göstərilən, gəlirdən çıxılan xərc (vergidən azad edilən gəlirlər üzrə çəkilən xərclərdən başqa) arasındakı fərq mənfəətdir",
    "D)	Vergi ödəyicisinin bütün gəlirləri ilə Vergi Məcəlləsinin X fəslində göstərilən, gəlirdən çıxılan xərc arasındakı fərq mənfəətdir"
  ]
},
  {
  numb: 5,
  question: "Azərbaycan Respublikasında daimi nümayəndəliyi vasitəsilə fəaliyyət göstərən qeyri-rezident müəssisəsi bu fəaliyyətdən əldə etdiyi mənfəətindən vergi necə tutulur?",
  answer: "B)	Təqvim ili ərzində Azərbaycan mənbəyindən əldə etdiyi bu növ ümumi gəlirindən həmin dövrdə bu cür gəlirə aid olan xərclər çıxıldıqdan sonra vergi tutulur",
  options: [
    "A)	Təqvim ili ərzində Azərbaycan mənbəyindən əldə etdiyi əmlak təqdim edilməsindən ümumi gəlirindən Vergi Məcəlləsində göstərilən və həmin dövrdə bu cür gəlirə aid olan xərclər çıxıldıqdan sonra vergi tutulur",
    "B)	Təqvim ili ərzində Azərbaycan mənbəyindən əldə etdiyi bu növ ümumi gəlirindən həmin dövrdə bu cür gəlirə aid olan xərclər çıxıldıqdan sonra vergi tutulur",
    "C)	Vergi tutulmur",
    "D)	Təqvim ili ərzində Azərbaycan mənbəyindən əldə etdiyi bu növ ümumi gəlirindən həmin dövrdə bütün xərcləri çıxıldıqdan sonra vergi tutulur"
  ]
},
{
  numb: 6,
  question: "Qeyri-rezidentin daimi nümayəndəliyi ilə bağlı olmayan ümumi gəliri vergiyə cəlb olunurmu?",
  answer: "D)	Vergi Məcəlləsinin 125-ci maddəsində nəzərdə tutulan qaydada ödəmə mənbəyində xərclər çıxılmadan vergiyə cəlb olunur",
  options: [
    "A)	Vergiyə cəlb edilmir",
    "B)	Xərclər çıxıldıqdan sonra vergiyə cəlb olunur",
    "C)	Ödəmə mənbəyində 10 faiz dərəcə ilə vergiyə cəlb olunur",
    "D)	Vergi Məcəlləsinin 125-ci maddəsində nəzərdə tutulan qaydada ödəmə mənbəyində xərclər çıxılmadan vergiyə cəlb olunur"
  ]
},
  {
  numb: 7,
  question: "Qeyri-rezidentin daimi nümayəndəliklə bağlı olmayan dividenddən gəliri mənfəət (gəlir) vergisinə necə cəlb olunur?",
  answer: "A)	Ödəmə mənbəyində 10 faiz dərəcə ilə vergiyə cəlb olunur",
  options: [
    "A)	Odəmə mənbəyində 10 faiz dərəcə ilə vergiyə cəlb olunur",
    "B)	Xərclər çıxıldıqdan sonra vergiyə cəlb olunur",
    "C)	Vergiyə cəlb edilmir",
    "D)	Ödəmə mənbəyində 14 faiz dərəcə ilə vergiyə cəlb olunur"
  ]
},
  {
  numb: 8,
  question: "Azərbaycan Respublikasındakı daimi nümayəndəliklə bağlı olmayan əmlak təqdim edilməsindən gəlir əldə edən qeyri-rezident müəssisəsinin mənfəətindən vergi necə tutulur?",
  answer: "A)	Təqvim ili ərzində Azərbaycan mənbəyindən əldə etdiyi əmlak təqdim edilməsindən ümumi gəlirindən Vergi Məcəlləsində göstərilən və həmin dövrdə bu cür gəlirə aid olan xərclər çıxıldıqdan sonra vergi tutulur",
  options: [
    "A)	Təqvim ili ərzində Azərbaycan mənbəyindən əldə etdiyi əmlak təqdim edilməsindən ümumi gəlirindən Vergi Məcəlləsində göstərilən və həmin dövrdə bu cür gəlirə aid olan xərclər çıxıldıqdan sonra vergi tutulur",
    "B)	Təqvim ili ərzində Azərbaycan mənbəyindən əldə etdiyi bu növ ümumi gəlirindən həmin dövrdə bu cür gəlirə aid olan xərclər çıxılmadan vergi tutulur",
    "C)	Vergi tutulmur",
    "D)	Təqvim ili ərzində Azərbaycan mənbəyindən əldə etdiyi bu növ ümumi gəlirindən həmin dövrdə bütün xərcləri çıxıldıqdan sonra vergi tutulur"
  ]
},
  {
  numb: 9,
  question: "Əsas vəsaitlərin yenidən qiymətləndirilməsindən yaranan artım (yenidən qiymətlən-dirilmə nəticəsində yaranan müsbət fərq) mənfəət vergisinə hansı qaydada cəlb olunur?",
  answer: "B)	Cəlb olunmur ",
  options: [
    "A)	Ümumi qaydada ",
    "B)	Cəlb olunmur ",
    "C) 10%- lə cəlb olunur",
    "D) xüsusi hallarda cəlb olunur"
  ]
},
  {
  numb: 10,
  question: "Aşağıda göstərilənlərdən hansı mənfəət vergisinin vergitutma obyekti deyildir?",
  answer: "B)	Əsas vəsaitlərin (vəsaitin) yenidən qiymətləndirilməsindən yaranan artım (yenidən qiymət¬ləndirilmə nəticəsində yaranan müsbət fərq)",
  options: [
    "A)	Əsas vəsaitlərin təqdim edilməsindən alınan və Vergi Məcəlləsinin 114.7-ci maddəsinə uyğun olaraq gəlirə daxil edilən məbləğlər",
    "B)	Əsas vəsaitlərin (vəsaitin) yenidən qiymətləndirilməsindən yaranan artım (yenidən qiymət¬ləndirilmə nəticəsində yaranan müsbət fərq)",
    "C) Əlillərin və ya sağlamlıq imkanları məhdud uşaqların əlilliyi olan şəxslərin qeyri-hökumət təşkilatlarına məxsus olan işçilərinin ümumi sayının azı 50 faizi əlillərdən və ya sağlamlıq imkanları məhdud 18 yaşınadək şəxslərdən ibarət olan istehsal müəssisələrinin gəliri",
    "D)	Kommersiya təşkilatlarının aldıqları əvəzsiz köçürmələr"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 6,
  question: "Вопро",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
];
