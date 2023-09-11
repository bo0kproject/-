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
  numb: 11,
  question: "Hüquqi şəxsin nizamnamə kapitalmdakı iştirak payı və ya səhmlər xalis aktivlərin iştirak payı və ya səhmlərə mütənasib dəyərindən yuxarı qiymətə təqdim edildikdə vergi¬tutma obyekti necə müəyyən olunur?",
  answer: "D)	Faktiki təqdimetmə qiyməti ilə nizamnamə kapitalmdakı iştirak payının və ya səhmin nominal dəyəri arasındakı fərq vergiyə cəlb edilən mənfəətdir",
  options: [
    "A)	Nizamnamə kapitalmdakı iştirak payının nominal dəyəri vergiyə cəlb edilən mənfəətdir",
    "B)	Faktiki təqdimetmə qiyməti vergiyə cəlb edilən mənfəətdir",
    "C)	Vergitutma obyekti yaranmır vergiyə cəlb edilən mənfəətdir",
    "D)	Faktiki təqdimetmə qiyməti ilə nizamnamə kapitalmdakı iştirak payının və ya səhmin nominal dəyəri arasındakı fərq vergiyə cəlb edilən mənfəətdir"
  ]
},
  {
  numb: 12,
  question: "İştirak payı və ya səhmlər xalis aktivlərin iştirak payı və ya səhmlərə mütənasib dəyərindən aşağı qiymətə (güzəştli qiymətlə) təqdim edildikdə vergitutma obyekti necə müəyyən olunur?",
  answer: "C)	Alqı-satqı müqaviləsinin bağlanıldığı tarixə xalis aktivlərin mütənasib dəyən ilə nizamnamə kapitalındakı iştirak payının nominal dəyəri arasındakı fərq vergiyə cəlb edilən mənfəətdir",
  options: [
    "A)	Alqı-satqı müqaviləsinin bağlanıldığı tarixə nizamnamə kapitalındakı iştirak payının nominal dəyəri vergiyə cəlb edilən mənfəətdir",
    "B)	Xalis aktivlərin mütənasib dəyəri ilə nizamnamə kapitalındakı iştirak payının nominal dəyəri arasındakı fərq vergiyə cəlb edilən mənfəətdir",
    "C)	Alqı-satqı müqaviləsinin bağlanıldığı tarixə xalis aktivlərin mütənasib dəyən ilə nizamnamə kapitalındakı iştirak payının nominal dəyəri arasındakı fərq vergiyə cəlb edilən mənfəətdir",
    "D)	Alqı-satqı müqaviləsinin bağlanıldığı tarixə xalis aktivlərin mütənasib dəyəri vergiyə cəlb edilən mənfəətdir"
  ]
},
  {
  numb: 13,
  question: "İştirak paylan və ya səhmlər nominal qiymətdən yuxarı qiymətə alınmışdırsa, hə¬min iştirak paylarının və ya səhmlərin təqdim edilməsi zamanı gəlirdən çıxılan xərclər nəzərə almırını?",
  answer: "B)	İştirak payları və ya səhmlər nominal qiymətdən yuxarı qiymətə alınmışdırsa, həmin iştirak paylarının və ya səhmlərin təqdim edilməsi zamanı gəlirdən çıxılan xərclər bu aktivlərin faktiki satınalma qiyməti ilə nəzərə alınır.",
  options: [
    "A)	Nəzərə alınmır",
    "B)	İştirak payları və ya səhmlər nominal qiymətdən yuxarı qiymətə alınmışdırsa, həmin iştirak paylarının və ya səhmlərin təqdim edilməsi zamanı gəlirdən çıxılan xərclər bu aktivlərin faktiki satınalma qiyməti ilə nəzərə alınır.",
    "C)	İştirak payları və ya səhmlər nominal qiymətdən yuxarı qiymətə alınmışdırsa, həmin iştirak paylarının və ya səhmlərin təqdim edilməsi zamanı gəlirdən çıxılan xərclər bu aktivlərin nominal qiyməti ilə nəzərə alınır.",
    "D)	İştirak payları və ya səhmlər nominal qiymətdən yuxarı qiymətə alınmışdırsa, həmin iştirak paylarının və ya səhmlərin təqdim edilməsi zamanı gəlirdən çıxılan xərclər bu aktivlərin bazar qiyməti ilə nəzərə alınır."
  ]
},
  {
  numb: 14,
  question: "Vəkil qurumunun tərkibində fəaliyyət göstərən vəkillər tərəfindən göstərilən, yaxud göstərilməsi nəzərdə tutulan vəkillik fəaliyyəti ilə bağlı vəkil qurumuna daxil olan ödənişlərin vəkillərə ödənilən, yaxud ödənilməsi nəzərdə tutulan hissəsi qurumun vergi tutulan gəlirlərinə aid edilirmi?",
  answer: "1",
  options: [
    "A)	Aid edilir",
    "B)	Aid edilmir",
    "C)	50 faizi aid edilir",
    "D)	40 faizi aid edilmir"
  ]
},
  {
  numb: 15,
  question: "Mənfəətdən vergi hansı dərəcə ilə tutulur?",
  answer: "B)20%",
  options: [
    "A)30%",
    "B)20%",
    "C)25%",
    "D)18%"
  ]
},
  {
  numb: 16,
  question: "16.	Qeyri-rezidentin daimi nümayəndəliklə bağlı olmayan, lakin Azərbaycan mənbə-yindən əldə edilə ümumi gəlirindən vergi necə tutulur?",
  answer: "B)	Təqvjm ili ərzində Azərbaycan mənbəyindən əldə etdiyi bu növ ümumi gəlirindən (ƏDV və aksizlər çıxılmaqla) Vergi Məcəlləsinin 125-ci maddəsində göstərilən dərəcələrlə vergi tutulur",
  options: [
    "A)	Təqvim ili ərzində Azərbaycan mənbəyindən əldə etdiyi əmlak təqdim edilməsindən ümumi gəlirindən Vergi Məcəlləsində göstərilən və həmin dövrdə bu cür gəlirə aid olan xərclər çıxıldıqdan sonra vergi tutulur",
    "B)	Təqvjm ili ərzində Azərbaycan mənbəyindən əldə etdiyi bu növ ümumi gəlirindən (ƏDV və aksizlər çıxılmaqla) Vergi Məcəlləsinin 125-ci maddəsində göstərilən dərəcələrlə vergi tutulur",
    "C)	Vergi tutulmur",
    "D)	Təqvim ili ərzində Azərbaycan mənbəyindən əldə etdiyi bu növ ümumi gəlirindən həmin dövrdə bütün xərcləri çıxıldıqdan sonra vergi tutulur"
  ]
},
  {
  numb: 17,
  question: "Xeyriyyə təşkilatının sahibkarlıq fəaliyyətindən əldə etdiyi gəlir hansı qaydada mən-fəət vergisinə cəlb edilir?",
  answer: "D)	Vergi Məcəlləsi ilə müəyyən edilmiş qaydada vergiyə cəlb edilir",
  options: [
    "A)	22 faiz dərəcə ilə",
    "B)	10 faiz dərəcə ilə",
    "C)	Xeyriyyə təşkilatı kimi vergiyə cəlb edilmir",
    "D)	Vergi Məcəlləsi ilə müəyyən edilmiş qaydada vergiyə cəlb edilir"
  ]
},
  {
  numb: 18,
  question: "Aşağıda göstərilənlərdən hansı mənfəət vergisindən azadoimalara aid deyil?",
  answer: "D)	Bir hüquqi şəxsin balansından əvəzsiz olaraq digər hüquqi şəxsin balansına verilmiş əsas vəsaitlərin dəyəri",
  options: [
    "A)	Müvafiq icra hakimiyyəti orqanı tərəfindən müəyyən edilmiş hallarda hüquqi şəxsin qərarı ilə onun özünün və onun tam mülkiyyətində olan rezident törəmə müəssisələrinin birinin balansından digərinin balansına əvəzsiz olaraq verilən aktivlərin dəyəri",
    "B)	Müvafiq icra hakimiyyəti orqanının qərarına əsasən yaradılan sənaye, yaxud texnologiyalar parklarının idarəedici təşkilatının və ya operatorunun mənfəətinin sənaye, yaxud texnologiyalar parklarının infrastrukturunun tikintisinə və saxlanılmasına yönəldilmiş hissəsi",
    "C)	Neft-qaz ehtiyatlarının kəşfiyyatı, işlənməsi və hasilatın pay bölgüsü, ixrac boru kəmərləri haqqında və bu qəbildən olan digər sazişlərə uyğun olaraq əsas fondların, daşmar əmlakın və digər aktivlərin hər hansı şəkildə həmin sazişlərdə azərbaycan Azərbaycan Respublikasını təmsil edən tərəfə təqdim edilməsi üzrə əməliyyatlar",
    "D)	Bir hüquqi şəxsin balansından əvəzsiz olaraq digər hüquqi şəxsin balansına verilmiş əsas vəsaitlərin dəyəri"
  ]
},
  {
  numb: 19,
  question: "Aşağıda göstərilənlərdən hansı doğru olanlara aid deyil?",
  answer: "B)	Vergi Ödəyicisinin azı 2 (İki) İl ərzində mülkiyyətində olan iştirak payının və ya səhmin təqdim edilməsindən əldə olunan gəlirləri mənfəət vergisindən azaddır",
  options: [
    "A)	Körpələr evlərinin, körpələr evi-uşaq bağçalarının, uşaq bağçalarının, xüsusi uşaq bağça-larının və uşaq evlərinin bu fəaliyyətdən əldə etdikləri gəlirləri 2014-cü il yanvarın 1-dən 10 il müddətinə mənfəət vergisindən azaddır",
    "B)	Vergi Ödəyicisinin azı 2 (İki) İl ərzində mülkiyyətində olan iştirak payının və ya səhmin təqdim edilməsindən əldə olunan gəlirləri mənfəət vergisindən azaddır",
    "C)	Azərbaycan Respublikasında keçirilən UEFA 2019 Avropa Liqasının final oyunu ilə əlaqədar UEFA-nm, onun yaratdığı qeyri-rezident hüquqi şəxslərin, qeyri-rezident futbol klublarının həmin oyunla bağlı əldə etdiyi gəlirləri mənfəət vergisindən azaddır",
    "D)	Azərbaycan Respublikasında keçirilən UEFA 2020 Futbol çempionatının oyunları ilə əlaqədar UEFA, onu təmsil edən və onun yaratdığı qeyri-rezident hüquqi şəxslərin, habelə qeyri- rezident futbol klublarının çempionatla bağlı əldə etdiyi gəlirləri mənfəət vergisindən azaddır"
  ]
},
  {
  numb: 20,
  question: "Xeyriyyə təşkilatlarının sahibkarlıq fəaliyyətindən əldə etdikləri gəlirdən başqa digər gəlirləri hansı dərəcə ilə mənfəət vergisinə cəlb olunur?",
  answer: "D) Vergi tutulmur",
  options: [
    "A) 22 faiz ",
    "B) 15 faiz ",
    "C) 10 faiz ",
    "D) Vergi tutulmur"
  ]
},
  {
  numb: 21,
  question: "Qeyri-kommersiya təşkilatlarının aldıqları əvəzsiz köçürmələr, üzvlük haqları və İanələr üzrə vergilər hansı qaydada tutulur?",
  answer: "C) Vergi tutulmur ",
  options: [
    "A) Ödəmə mənbəyində ",
    "B) Xərclər çıxıldıqdan sonra ",
    "C) vergi tutulmur ",
    "D) Müstəsna hallarda "
  ]
},
  {
  numb: 22,
  question: "Beynəlxalq, dövlətlərarası və hökumətlərarası təşkilatların sahibkarlıq fəaliyyət-lərindən əldə etdikləri gəlirlərdən başqa digər gəlirləri hansı qaydada mənfəət vergisinə cəlb edilir?",
  answer: "B)	Vergiyə cəlb edilmir",
  options: [
    "A)	Vergi Məcəlləsi ilə müəyyən edilmiş qaydada vergiyə cəlb edilir",
    "B)	Vergiyə cəlb edilmir",
    "C)	balans mənfəətinə 20 faiz dərəcə tətbiq etməklə",
    "D)	balans mənfəətinə 10 faiz dərəcə tətbiq etməklə"
  ]
},
  {
  numb: 23,
  question: "Dövlət hakimiyyəti orqanlarının, büdcə təşkilatlarının, yerli özünüidarəetmə or-qanlarının və dövlətin adından yaradılan publik hüquqi şəxslərin (sahibkarlıq fəaliyyətindən gəlir istisna olmaqla) gəlirlərindən mənfəət vergisi necə tutulur?",
  answer: "A)	Vergi tutulmur",
  options: [
    "A)	Vergi tutulmur",
    "B)	20 faiz dərəcəsi ilə vergi tutulur",
    "C) Xərclər çıxılmadan vergi tutulur",
    "D) Xərclər çıxılqdan sonra vergi tutulur"
  ]
},
];
