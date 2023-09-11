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
