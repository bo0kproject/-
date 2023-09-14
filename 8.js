// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Digər dövlətlərin ərazisində ödənilmiş mənfəət vergisi gəlirdən hansı qayda çıxılır?",
  answer: "C)	Gəlirdən çıxılmır",
  options: [
    "A)	Tam məbləğdə gəlirdən çıxılır",
    "B)	50 faiz məbləğində gəlirdən çıxılır",
    "C)	Gəlirdən çıxılmır",
    "D)	20 faiz məbləğində gəlirdən çıxılır"
  ]
},
  {
  numb: 2,
  question: "Ödənilmiş maliyyə sanksiyaları hansı qaydada gəlirdən çıxılır?,
  answer: "C)	Gəlirdən çıxılmır",
  options: [
    "A)	Tam məbləğdə gəlirdən çıxılır",
    "B)	50 faiz məbləğində gəlirdən çıxılır",
    "C)	Gəlirdən çıxılmır",
    "D)	20 faiz məbləğində gəlirdən çıxılır"
  ]
},
  {
  numb: 3,
  question: "Vergilərin vaxtında ödənilməməsinə görə hesablanmış faizlər hansı qaydada gəlir¬dən çıxılır?",
  answer: "A)	Gəlirdən çıxılmasma yol verilmir",
  options: [
    "A)	Gəlirdən çıxılmasma yol verilmir",
    "B)	Tam məbləğdə gəlirdən çıxılır",
    "C)	Hesablanmış faizlərin yarısı gəlirdən çıxılır",
    "D)	Vergi tutulan mənfəətin azaldılmasına aid edilir"
  ]
},
  {
  numb: 4,
  question: "Fiziki şəxsin əmlakın təqdim edilməsindən (təsərrüfat fəaliyyəti üçün istifadə edilən əmlakdan və ya təqdim edilməsindən əldə olunan gəlirin vergidən azad edildiyi əmlakdan başqa) yaranan zərəri hansı qaydada kompensasiya edilir?",
  answer: "A)	Belə əmlakın təqdim edilməsindən əldə olunan gəliri hesabına",
  options: [
    "A)	Belə əmlakın təqdim edilməsindən əldə olunan gəliri hesabına",
    "B)	Fiziki şəxsin təsərrüfat fəaliyyəti üçün istifadə edilən əmlakın təqdim edilməsindən əldə olunan gəliri hesabına",
    "C)	Fiziki şəxsin əmlakının təqdim edilməsindən əldə olunan vergidən azad edilən gəliri hesa¬bına",
    "D)	Bu cür zərər kompensasiya edilmir"
  ]
},
  {
  numb: 5,
  question: "Fiziki şəxsin əmlakın təqdim edilməsindən (təsərrüfat fəaliyyəti üçün istifadə edilən əmlakdan və ya təqdim edilməsindən əldə olunan gəlirin vergidən azad edildiyi əmlakdan başqa) yaranan zərəri həmin ildə kompensasiya edilə bilmirsə, o, gələcəkdə neçə ilədək da¬vam edən sonrakı dövrə keçirilir?",
  answer: "C) 3",
  options: [
    "A) 1",
    "B) 2",
    "C) 3",
    "D) 4"
  ]
},
{
  numb: 6,
  question: "Müəssisənin gəlirlərdən çıxılmasma yol verilən xərclərinin gəlirdən artıq olan hissəsi neçə ilədək davam edən sonrakı dövrlərə keçirilir?",
  answer: "A) 5 ilədək",
  options: [
    "A) 5 ilədək",
    "B) 2 ilədək",
    "C) 3 ilədək",
    "D) 1 ilədək"
  ]
},
  {
  numb: 7,
  question: "Müəssisənin gəlirlərdən çıxılmasma yol verilən xərclərinin gəlirdən artıq olan hissəsi hansı qaydada kompensasiya edilir?",
  answer: "C)	Beş ilədək davam edən sonrakı dövrə keçirilir və illər üzrə heç bir məhdudiyyət qoyulmadan həmin illərin mənfəəti hesabına kompensasiya edilir.",
  options: [
    "A)	Cari ilin mənfəətinin 20 faizindən çox olmayan hissəsi hesabına kompensasiya edilir.",
    "B)	Sonrakı 3 ilin mənfəətinin 20 faizndən çox olmayan hissəsi hesabına kompensasiya edilir.",
    "C)	Beş ilədək davam edən sonrakı dövrə keçirilir və illər üzrə heç bir məhdudiyyət qoyulmadan həmin illərin mənfəəti hesabına kompensasiya edilir.",
    "D)	Cari ilin mənfəətinin 50 faizindən çox olmayan hissəsi hesabına kompensasiya edilir."
  ]
},
{
  numb: 8,
  question: "Fiziki şəxsin sahibkarlıq fəaliyyətindən əldə edilən ümumi gəlirindən çıxılmasına yol verilən xərclərinin belə ümumi gəlirdən artıq olan hissəsi onun digər gəlirlərindən çıxıla bilərmi?",
  answer: "A)	Çıxıla bilməz",
  options: [
    "A)	Çıxıla bilməz",
    "B)	çıxıla bilər",
    "C)	vergi orqanlarının razılığı olduqda çıxıla bilər",
    "D)	maliyyə orqanlarının razılığı olduqda çıxıla bilər"
  ]
},
{
  numb: 9,
  question: "Fiziki şəxsin - sahibkarlıq fəaliyyətindən əldə edilən ümumi gəlirindən çıxılmasına yol verilən xərclərinin belə ümumi gəlirdən artıq olan hissəsi hansı qaydada kompensasiya edilir?",
  answer: "B)	Digər gəlirlərdən çıxıla bilməz, lakin gələcək dövrlərdə sahibkarlıq fəaliyyətindən ümumi gəlir hesabına kompensasiya edilməsi üçün üç ilədək davam edən sonrakı dövrə keçirilə bilər",
  options: [
    "A)	Digər gəlirlərdən çıxıla bilər, lakin gələcək dövrlərdə sahibkarlıq fəaliyyətindən ümumi gəlir hesabına kompensasiya edilə bilməz",
    "B)	Digər gəlirlərdən çıxıla bilməz, lakin gələcək dövrlərdə sahibkarlıq fəaliyyətindən ümumi gəlir hesabına kompensasiya edilməsi üçün üç ilədək davam edən sonrakı dövrə keçirilə bilər",
    "C)	Digər gəlirlərdən çıxıla bilməz, lakin gələcək dövrlərdə sahibkarlıq fəaliyyətindən ümumi gəlir hesabına kompensasiya edilməsi üçün iki ilədək davam edən sonrakı dövrə keçirilə bilər",
    "D)	Heç bir halda kompensasiya edilmir"
  ]
},
{
  numb: 10,
  question: "Vergi ödəyicisi mənfəət (gəlir) vergisinin ödəyicisi olduğu tarixədək yaranmış zərərlər, habelə Məcəllənin 114-cü və 115-ci maddələrində nəzərdə tutulan amortizasiya Və təmir xərcləri normalarından aşağı norma tətbiq edilməsi nəticəsində yaranan və növbəti illərə keçirilən məbləğlər növbəti ilin gəlirləri hesabına hansı qaydada kompensasiya edilir?",
  answer: "A)	Kompensasiya edilmir",
  options: [
    "A)	Kompensasiya edilmir",
    "B)	50 faizi növbəti ilin gəlirləri hesabına kompensasiya edilir",
    "C)	növbəti ilin gəlirləri hesabına 5 il müddətinə kompensasiya edilir",
    "D)	növbəti ilin gəlirləri hesabına 3 il müddətinə kompensasiya edilir"
  ]
},
{
  numb: 11,
  question: "Rezident müəssisə tərəfindən ödənilən dividenddən ödəmə mənbəyində neçə faiz dərəcəsi ilə vergi tutulur?",
  answer: "C) 10 faiz",
  options: [
    "A) 15 faiz",
    "B) 5 faiz",
    "C) 10 faiz",
    "D) 12 faiz"
  ]
},
{
  numb: 12,
  question: "Dividendin faktiki sahibi olan fiziki və hüquqi şəxslərdən Vergi Məcəlləsinə uyğun olaraq vergi tutulmuşdursa, dividendi alan fiziki və hüquqi şəxslərin həmin gəlirindən ilin sonunda hansı qaydada vergi tutulur?",
  answer: "B)	Bir daha vergi tutulmur",
  options: [
    "A)	Fiziki şəxslərdən 12 faiz, hüquqi şəxslərdən isə 22 faiz dərəcəsi ilə vergi tutulur",
    "B)	Bir daha vergi tutulmur",
    "C)	Fiziki şəxslərdən 10 faiz, hüquqi şəxslərdən isə 15 faiz dərəcəsi ilə vergi tutulur",
    "D)	Həmin gəlirin 50 faizindən ümumi qaydada vergi tutulur"
  ]
},
{
  numb: 13,
  question: "Neft-qaz ehtiyatlarının kəşfiyyatı, işlənməsi və hasilatın pay bölgüsü, ixrac boru kəmərləri haqqında və bu qəbildən olan digər sazişlər üzrə mənfəətin bölüşdürülməsi, habelə Azərbaycan Respublikasının Prezidenti tərəfindən müəyyən edilmiş hallarda hüquqi şəxsin tam mülkiyyətində olan törəmə müəssisələrin xalis mənfəətinin həmin hüquqi şəxsin mərkəz¬ləşdirilmiş fondunda cəmləşdirilməsi üzrə köçürmələr və bu şəxsin həmin gəliri hansı qay¬dada vergiyə cəlb olunur?",
  answer: "B)	Vergiyə cəlb olunmur",
  options: [
    "A)	Hüquqi şəxsin tam mülkiyyətində olan törəmə müəssisələrin xalis mənfəətinin həmin hüquqi şəxsin mərkəzləşdirilmiş fondunda cəmləşdirilməsi üzrə köçürmələr 20-faiz və bu şəxsin həmin gəliri isə 14 faiz dərəcəsi ilə vergiyə cəlb olunur",
    "B)	Vergiyə cəlb olunmur",
    "C)	Yalnız hüquqi şəxsin tam mülkiyyətində olan törəmə müəssisələrin xalis mənfəətinin həmin hüquqi şəxsin mərkəzləşdirilmiş fondunda cəmləşdirilməsi üzrə köçürmələr 20 faiz dərəcəsi ilə vergiyə cəlb olunur",
    "D)	Həmin gəlirin 50 faizindən ümumi qaydada vergi tutulur"
  ]
},
{
  numb: 14,
  question: "Cəmiyyətin fəaliyyəti zamanı əldə edilmiş aktivlərin, o cümlədən pul vəsaitlərinin (təsisçiyə borcların verilməsi və ya alınmış borcların əvəzinin qaytarılması istisna olmaqla) təsərrüfat fəaliyyətinin məqsədlərindən kənar digər məqsədlər üçün təsisçiyə verilməsi, ha¬belə təsisçinin digər şəxslərə olan borclarının əvəzinin ödənilməsi vergi öhdəliyi yaradır-mı?",
  answer: "C)	Vergitutma məqsədləri üçün dividend ödəmələrinə bərabər hesab edilir və bu zaman Vergi Məcəlləsinin 122.1-ci maddəsi ilə ödəmə mənbəyində vergi tutulur.",
  options: [
    "A)	Öhdəlik yaranmır",
    "B)	Vergitutma məqsədləri üçün dividend ödəmələrinə bərabər hesab edilir, lakin vergi tutlm.",
    "C)	Vergitutma məqsədləri üçün dividend ödəmələrinə bərabər hesab edilir və bu zaman Vergi Məcəlləsinin 122.1-ci maddəsi ilə ödəmə mənbəyində vergi tutulur.",
    "D)	Vergi Məcəlləsinin 122.1-ci maddəsi ilə ödəmə mənbəyində vergi tutulur"
  ]
},
{
  numb: 15,
  question: "Fiziki şəxslərə ödənilən faizlərdən gəlir Azərbaycan mənbəyində əldə edilmişdirsə, həmin gəlirdən ödəmə mənbəyində hansı dərəcə ilə vergi tutulur?",
  answer: "A) 10 faiz",
  options: [
    "A) 10 faiz",
    "B) 14 faiz",
    "C) 20 faiz",
    "D) Vergi tutulmur"
  ]
},
{
  numb: 16,
  question: "Hüquqi şəxs tərəfindən bankda yerləşdirilmiş depozitə görə ödənilən faizlərdən ödəmə mənbəyində vergi hansı dərəcə ilə tutulur?",
  answer: "D) Vergi tutulmur",
  options: [
    "A) 10 faiz",
    "B) 15 faiz",
    "C) 27 faiz",
    "D) Vergi tutulmur"
  ]
},
{
  numb: 17,
  question: "Qeyri-rezident fiziki şəxsin Azərbaycan Respublikasındakı daimi nümayəndəliyinə ödənilən faizlərdən gəlir Azərbaycan mənbəyində əldə edilmişdirsə, ödəmə mənbəyində vergi hansı dərəcə ilə tutulur?",
  answer: "A) 10 faiz",
  options: [
    "A) 10 faiz",
    "B) 15 faiz",
    "C) 27 faiz",
    "D) Vergi tutulmur"
  ]
},
{
  numb: 18,
  question: "Rezidentlər və ya qeyri-rezidentlərin daimi nümayəndəliyi tərəfindən hüquqi şəxslərə ödənilən faizlərdən gəlir Azərbaycan Respublikası mənbəyindən əldə edilmişdirsə, ödəmə mənbəyində hansı dərəcə ilə vergi tutulur?",
  answer: "C) Vergi tutulmur",
  options: [
    "A) 15 faiz",
    "B) 24 faiz",
    "C) Vergi tutulmur",
    "D) 5 faiz"
  ]
},
{
  numb: 19,
  question: "Faizlərin faktiki sahibi olan fiziki şəxslərdən ödəmə mənbəyində vergi tutulmuş¬dursa, həmin gəlirdən ilin sonunda hansı qaydada vergi tutulur?",
  answer: "C) Bir daha vergi tutulmur",
  options: [
    "A)	14 faiz",
    "B)	1o faiz ",
    "C) Bir daha vergi tutulmur",
    "D) Vergi tutulmur"
  ]
},
{
  numb: 20,
  question: "İstiqraz üzrə ödənilən diskont və faiz gəlirləri üzrə ödəmə mənbəyində vergi hansı qaydada hesablanır?",
  answer: "C)	İstiqraz mülkiyyətçisinin həmin istiqraza malik olduğu günlərin sayma mütənasib surətdə hesablanır",
  options: [
    "A)	Vergi hesablanmır",
    "B)	Ümumi qaydada vergi hesablanır və hesablanmış məbləğdən ödəmə mənbəyində tutulan verginin məbləği çıxılır",
    "C) İstiqraz mülkiyyətçisinin həmin istiqraza malik olduğu günlərin sayma mütənasib surətdə hesablanır",
    "D)	İstiqraz mülkiyyətçisinin həmin istiqraza malik olduğu ayların sayına mütənasib surətdə hesablanır"
  ]
},
{
  numb: 21,
  question: "Həyatın yığım sığortası üzrə sığorta olunanın ödədiyi və ya onun xeyrinə ödənilən sığorta haqları ilə sığorta ödənişləri arasındakı fərq kimi alman gəlirdən ödəniş mənbəyində hansı faiz dərəcəsi ilə vergi tutulur?",
  answer: "B)	10 faiz",
  options: [
    "A)	14 faiz",
    "B)	10 faiz",
    "C)	20 faiz",
    "D)	2500 manatadək 14 faiz, 2500 manatdan çox olduqda 350 manat + 2500 manatdan çox olan məbləğin 25 faizi"
  ]
},
{
  numb: 22,
  question: "Daşınan və daşınmaz əmlak üçün icarə haqqından ödəmə mənbəyində hansı faiz dərəcəsi ilə vergi tutulur?",
  answer: "D) 14 faiz",
  options: [
    "A) 20 faiz",
    "B) 10 faiz",
    "C) 18 faiz",
    "D) 14 faiz"
  ]
},
{
  numb: 23,
  question: "İcarə haqqı vergi ödəyicisi kimi uçotda olmayan fiziki şəxs tərəfindən ödənildikdə ödəmə mənbəyində hansı dərəcə ilə vergi tutulur ?",
  answer: "B) Ödəmə mənbəyində vergi tutulmur",
  options: [
    "A) 18 faiz",
    "B) Ödəmə mənbəyində vergi tutulmur",
    "C) 14 faiz",
    "D) 10 faiz"
  ]
},
{
  numb: 24,
  question: "Azərbaycan mənbəyindən royalti şəklində əldə edilən gəlirdən ödəmə mənbəyində hansı faiz dərəcəsi ilə vergi tutulur?",
  answer: "B) 14 faiz",
  options: [
    "A) 15 faiz",
    "B) 14 faiz",
    "C) 10 faiz",
    "D) Vergi tutulmur"
  ]
},
{
  numb: 25,
  question: "Fiziki şəxsin icarə haqqı şəklində əldə etdiyi gəlirindən ödəmə mənbəyində vergi tutulmuşdursa və ya ödənilmişdirsə, ilin sonunda bu gəlirdən vergi hansı qaydada tutulur?",
  answer: "C)	Həmin gəlirdən bir daha vergi tutulmur ",
  options: [
    "A)	Vergi ümumi qaydada tutulur",
    "B)	İcarə haqqı illik gəlirə daxil edilir, hesablanan verginin məbləğindən ödəmə mənbəyində tutulan verginin məbləği çıxılır",
    "C)	Həmin gəlirdən bir daha vergi tutulmur ",
    "D) 2 faiz dərəcə ilə vergi tutulur"
  ]
},
{
  numb: 26,
  question: "Qeyri-rezidentin daimi nümayəndəliyinə Azərbaycan Respublikasında ödənilən royaltidən ödəmə mənbəyində hansı faiz dərəcəsi ilə vergi tutulur?",
  answer: "D) Ödəmə mənbəyində vergi tutulmur",
  options: [
    "A) 10 faiz",
    "B) 14 faiz",
    "C) 24 faiz",
    "D) Ödəmə mənbəyində vergi tutulmur"
  ]
},
{
  numb: 27,
  question: "Rezident müəssisələrə Azərbaycan Respublikasının ərazisində ödənilmiş icarə haq¬qından ödəmə mənbəyində vergi hansı dərəcə ilə tutulur ?",
  answer: "D) Ödəmə mənbəyində vergi tutulmur",
  options: [
    "A) 14 faiz",
    "B) 10 faiz",
    "C) 4 faiz",
    "D) Ödəmə mənbəyində vergi tutulmur"
  ]
},
{
  numb: 28,
  question: "Azərbaycan Res. sahibkarlıq fəaliyyəti məqsədləri üçün istifadə olunmayan daşın¬maz əmlakın vergitutma məqsədləri üçün aylıq icarə haqqının məbləği necə müəyyən edilir?",
  answer: "C) Bazar qiyməti nəzərə alınmadan",
  options: [
    "A)	Nazirlər Kabineti tərəfindən",
    "B)	Tənzimlənən qiymətlər nəzərə alınmaqla ",
    "C) Bazar qiyməti nəzərə alınmadan",
    "D) Bazar qiyməti nəzərə alınmaqla"
  ]
},
{
  numb: 29,
  question: "Qeyri-rezidentin Azərbaycan mənbəyindən əldə olunan və Azərbaycan Respub¬likası ərazisindəki daimi nümayəndəliyə aid olmayan gəlirindən hansı qaydada vergi tutulur?",
  answer: "C)	Ödəmə mənbəyində xərclər çıxılmadan vergi tutulur",
  options: [
    "A)	Gəlirdən xərclər çıxılmaqla vergi tutulur",
    "B)	İlin sonunda bəyannamə təqdim edilir və ümumi qaydada vergi hesablanır",
    "C)	Ödəmə mənbəyində xərclər çıxılmadan vergi tutulur",
    "D)	Vergi tutulmur"
  ]
},
{
  numb: 30,
  question: "Qeyri rezident hüquqi şəxs və ya qeyri- rezident fiziki şəxs istənilən 12 ay ərzində Azərbaycan Respublikasında üst- üstə 90 gündən az müddətdə bilavasitə və ya müvəkkil edilmiş şəxs vasitəsilə tam və ya qismən sahibkarlıq fəaliyyətini həyata keçirdikdə həmin şəxslərin gəlirləri hansı qaydada vergiyə cəlb olunur?",
  answer: "C)	Ödəmə mənbəyində gəlirdən xərclər çıxılmadan",
  options: [
    "A)	Gəlirdən Az.Res hüdudlarından kənarda çəkilən xərclər çıxılmaqla",
    "B)	Ödəmə mənbəyində gəlirdən xərclər çıxılmaqla",
    "C)	Ödəmə mənbəyində gəlirdən xərclər çıxılmadan",
    "D)	Gəlirdən gəlirin əldə edilməsi ilə bağlı xərclər çıxılmaqla"
  ]
},
{
  numb: 31,
  question: "Qeyri-rezidentin Azərbaycan mənbəyindən əldə olunan gəliri kimi müəyyən edilən və Azərbaycan Respublikasının ərazisindəki daimi nümayəndəliyə aid olmayan dividend gəlirindən hansı qaydada və hansı dərəcə ilə vergi tutulur?",
  answer: "C)	Ödəmə mənbəyində xərclər çıxılmadan 10 faiz dərəcə ilə",
  options: [
    "A)	Ödəmə mənbəyində xərclər çıxılmaqla 4 faiz dərəcə ilə",
    "B)	Ödəmə mənbəyində xərclər çıxılmaqla 6 faiz dərəcə ilə",
    "C)	Ödəmə mənbəyində xərclər çıxılmadan 10 faiz dərəcə ilə",
    "D)	Ödəmə mənbəyində xərclər çıxılmaqla 14 faiz dərəcə ilə"
  ]
},
{
  numb: 32,
  question: "Qeyri-rezidentin Azərbaycan mənbəyindən əldə olunan gəliri kimi müəyyən edilən və Azərbaycan Respublikasının ərazisindəki daimi nümayəndəliyə aid olmayan faiz gəli¬rindən hansı qaydada və hansı dərəcə ilə vergi tutulur?",
  answer: "C)	Ödəmə mənbəyində xərclər çıxılmadan 10 faiz dərəcə ilə",
  options: [
    "A)	Ödəmə mənbəyində xərclər çıxılmaqla 4 faiz dərəcə ilə",
    "B)	Ödəmə mənbəyində xərclər çıxılmaqla 6 faiz dərəcə ilə",
    "C)	Ödəmə mənbəyində xərclər çıxılmadan 10 faiz dərəcə ilə",
    "D)	Ödəmə mənbəyində xərclər çıxılmaqla 14 faiz dərəcə ilə"
  ]
},
{
  numb: 33,
  question: "Rezident müəssisənin və ya sahibkarın riskin sığortasına və ya təkrar sığortasına dair müqaviləyə uyğun olaraq qeyri-rezidentə Azərbaycan mənbəyində ödənilən və daimi nümayəndəliyə aid olmayan sığorta ödəmələrindən hansı qaydada və hansı dərəcə ilə vergi tutulur?",
  answer: "A)	Ödəmə mənbəyində xərclər çıxılmaqla 4 faiz dərəcə ilə",
  options: [
    "A)	Ödəmə mənbəyində xərclər çıxılmaqla 4 faiz dərəcə ilə",
    "B)	Ödəmə mənbəyində xərclər çıxılmaqla 6 faiz dərəcə ilə",
    "C)	Ödəmə mənbəyində xərclər çıxılmadan 10 faiz dərəcə ilə",
    "D)	Ödəmə mənbəyində xərclər çıxılmaqla 14 faiz dərəcə ilə"
  ]
},
{
  numb: 34,
  question: "Azərbaycan Respublikası ilə digər dövlətlər arasında beynəlxalq rabitə xidməti həyata keçirən qeyri-rezidentə ödənilən, daimi nümayəndəliklə bağlı olmayan gəlirindən hansı dərəcə ilə vergi tutulur?",
  answer: "C) 6 faiz",
  options: [
    "A) 4 faiz",
    "B) 5 faiz",
    "C) 6 faiz",
    "D) 15 faiz"
  ]
},
{
  numb: 35,
  question: "Azərbaycan Respublikası ilə digər dövlətlər arasında beynəlxalq daşımalar həyata keçirən qeyri-rezidentə ödənilən, daimi nümayəndəliklə bağlı olmayan gəlirindən hansı dərəcə ilə vergi tutulur?",
  answer: "C) 6 faiz",
  options: [
    "A) Vergi tutulmur",
    "B) 10 faiz",
    "C) 6 faiz",
    "D) 4 faiz"
  ]
},
{
  numb: 36,
  question: "Azərbaycan Respublikasının hüdudlarından kənarda digər dövlətlərdəki təyinat (göndərilmə) məntəqələri arasında, habelə Azərbaycan Respublikasının ərazisindən tranzit qaydada həyata keçirilən daşımalara görə rezident müəssisənin və ya sahibkarın ödəmələrindən hansı dərəcə ilə vergi tutulur?",
  answer: "A) Vergi tutulmur",
  options: [
    "A) Vergi tutulmur",
    "B) 10 faiz",
    "C) 6 faiz",
    "D) 4 faiz"
  ]
},
{
  numb: 37,
  question: "Vergi Məcəlləsinin 125.1.1-ci - 125.1.4-cü, 125.1.6-cı - 125.1.8-ci və 125.1-1-ci maddələrində göstərilən gəlirlər istisna olmaqla, hüquqi şəxslərin və vergi ödəyicisi kimi uçota alınmış fiziki şəxslərin işlərin görülməsindən və ya xidmətlərin göstərilməsindən əldə edilən gəlirlər və Azərbaycan mənbəyindən əldə edilən digər gəlirlər üzrə ödəmələri vergiyə cəlb olunurmu?",
  answer: "D) 10 faiz"",
  options: [
    "A) Vergi tutulmur",
    "B) 20 faiz",
    "C) 14 faiz",
    "D) 10 faiz"
  ]
},
{
  numb: 38,
  question: "Azərbaycan Respublikasında daimi nümayəndəlik yaratmayan qeyri-rezident fiziki şəxsə muzdlu işlə əlaqədar gəlir ödənilərkən hansı dərəcə ilə vergi tutulur?",
  answer: "C)	Vergi Məcəlləsinin 101-ci maddəsində göstərilən dərəcələrlə",
  options: [
    "A)	10 faiz",
    "B)	Vergi tutulmur",
    "C)	Vergi Məcəlləsinin 101-ci maddəsində göstərilən dərəcələrlə",
    "D)	6 faiz"
  ]
},
{
  numb: 39,
  question: "Azərbaycan Respublikası ərazisində daimi nümayəndəlik yaratmayan qeyri- rezidentin Azərbaycan mənbəyindən icarə haqqı şəklində əldə etdiyi gəlirindən hansı dərəcə ilə vergi tutulur?",
  answer: "D) 14 faiz",
  options: [
    "A) Vergi tutulmur",
    "B) 10 faiz",
    "C) 6 faiz",
    "D) 14 faiz"
  ]
},
{
  numb: 40,
  question: "Azərb Respublikası ərazisində daimi nümayəndəlik yaratmayan qeyri-rezidentin Azərbayca mənbəyindən royalti şəklində əldə etdiyi gəlirindən hansı dərəcə ilə vergi tutulur?",
  answer: "D) 14 faiz",
  options: [
    "A) Vergi tutulmur",
    "B) 10 faiz",
    "C) 6 faiz",
    "D) 14 faiz"
  ]
},
{
  numb: 41,
  question: "İdman mərc oyunlarından, lotereyalardan, habelə digər yarışlardan və müsabiqələrdən pul şəklində əldə edilən uduşlardan (mükafatlardan) hansı qaydada vergi tutulur?",
  answer: "C)	Pul şəklində əldə olunan uduşdan (mükaftdan) iştirakla bağlı ödənilən pul vəsaiti (pul qoyuluşu) çıxılmaqla qalan məbləğdən ödəmə mənbəyində 10% dərəcə ilə",
  options: [
    "A)	Tam məbləğdə vergiyə cəlb olunur",
    "B)	Vergidən azaddır",
    "C)	Pul şəklində əldə olunan uduşdan (mükaftdan) iştirakla bağlı ödənilən pul vəsaiti (pul qoyuluşu) çıxılmaqla qalan məbləğdən ödəmə mənbəyində 10% dərəcə ilə",
    "D)	Pul şəklində əldə olunan uduşdan (mükaftdan) iştirakla bağlı ödənilən pul vəsaiti (pul qoyuluşu) çıxılmaqla qalan məbləğdən ödəmə mənbəyində 14% dərəcə ilə"
  ]
},
{
  numb: 42,
  question: "Azərbaycan Respublikasının rezidentləri tərəfindən qeyri-rezident şəxslərə məxsus elektron pul kisəsində yaradılan hesaba pul köçürülərkən, əməliyyatı həyata keçirən yerli bank, xarici bankın Azərbaycan Respublikasındakı filialı və ya poçt rabitəsinin milli operatoru həmin rezidentdən köçürülən məbləğin neçə faizi miqdarında ödəmə mənbəyində vergi tutur?",
  answer: "D) 10 faiz",
  options: [
    "A) 14 faiz",
    "B) 20 faiz",
    "C) Vergi tutulmur",
    "D) 10 faiz"
  ]
},
{
  numb: 43,
  question: "Aşağıdakılardan hansı doğru olmayanlara aid deyil?",
  answer: "B)	Qeyri-rezidentin Azərbaycan Respublikasındakı daimi nümayəndəliyi tərəfindən və ya onun admdan aparılan ödəmələr rezident müəssisənin ödəmələrinə bərabər tutulur.",
  options: [
    "A)	Qeyri-rezidentin Azərbaycan Respublikasındakı daimi nümayəndəliyi tərəfindən və ya onun adından aparılan ödəmələr rezident müəssisənin ödəmələrinə bərabər tutulmur.",
    "B)	Qeyri-rezidentin Azərbaycan Respublikasındakı daimi nümayəndəliyi tərəfindən və ya onun admdan aparılan ödəmələr rezident müəssisənin ödəmələrinə bərabər tutulur.",
    "C)	Qeyri-rezidentin Azərbaycan Respublikasındakı daimi nümayəndəliyi tərəfindən və ya onun admdan aparılan ödəmələr qeyri-rezident müəssisənin ödəmələrinə bərabər tutulur.",
    "D)	Qeyri-rezidentin Azərbaycan Respublikasındakı daimi nümayəndəliyinə aid olmayan ödəmələr rezident müəssisənin ödəmələrinə bərabər tutulur."
  ]
},
];
