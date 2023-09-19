// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Azərbaycan Resp. Prezidentinin qərarına əsasən yaradılan sənaye, yaxud texnologi-yalar parklarının rezidenti olan hüquqi şəxslər və hüquqi şəxs yaratmadan sahibkarlıq fəa-liyyətini həyata keçirən fiziki şəxslər qanunvericiliyə uyğun olaraq, sənaye və texnologiyalar parkında qeydiyyata alındıqları hesabat ilindən başlayaraq, neçə il müddətinə sənaye və texnologiyalar parkındakı əmlaklarına görə əmlak vergisini ödəməkdən azaddırlar?",
  answer: "D) 10 il",
  options: [
    "A) Müddətsiz olaraq azaddırlar",
    "B) 3 il",
    "C) 5 ",
    "D) 10 il"
  ]
},
  {
  numb: 2,
  question: "Azərbaycan Res. Prezidentinin qərarına əsasən yaradılan sənaye və texnologiyalar parklarının idarəedici təşkilatı və ya operatoru sənaye,yaxud texnologiyalar parklarının əra-zisində yerləşən əmlaklarına görə neçə il müddətinə əmlak vergisini ödəməkdən azaddırlar?",
  answer: "C) Müddətsiz azaddırlar",
  options: [
    "A)	2014-cü il yanvarın 1-dən 7 il müddətinə",
    "B)	2014-cü il yanvarın 1-dən 10 il müddətinə",
    "C) Müddətsiz azaddırlar",
    "D) 2015-ci il yanvarın 1-dən 5 il müddətinə"
  ]
},
  {
  numb: 3,
  question: "Kənd təsərrüfatı məhsullarının istehsalı ilə məşğul olan (o cümlədən, sənaye üsulu ilə) hüquqi və fiziki şəxslər həmin fəaliyyət prosesində istifadə olunan əmlaka görə hansı müddətə əmlak vergisini ödəməkdən azaddırlar?",
  answer: "A)	2014-cü il yanvarın 1-dən 10 il müddətinə",
  options: [
    "A)	2014-cü il yanvarın 1-dən 10 il müddətinə",
    "B)	əmlak vergisi ödəməkdən azaddırlar",
    "C) 2014-cü il yanvarın 1-dən 5 il müddətinə",
    "D) 2019-cü il yanvarın 1-dən 5 il müddətinə"
  ]
},
  {
  numb: 4,
  question: "İnvestisiya təşviqi sənədini almış hüquqi şəxs və fərdi sahibkar həmin sənədi aldığı tarixdən müvafiq investisiya layihəsi çərçivəsində investisiya vəsaiti hesabına əldə edilmiş (alınmış, gətirilmiş, istehsal edilmiş, tikilmiş və ya quraşdırılmış) əmlakına görə hansı hallarda və neçə il müddətinə əmlak vergisi ödəməkdən azaddır? 1.	sənədi aldığı tarixdən müvafiq investisiya layihəsi çərçivəsində investisiya vəsaiti hesabına əldə edilmiş (alınmış, gətirilmiş, istehsal edilmiş, tikilmiş və ya quraşdırılmış) əmlakına görə 7 il müddətinə əmlak vergisini ödəməkdən azaddır 2.	sənədi aldığı tarixdən müvafiq investisiya layihəsi çərçivəsində investisiya vəsaiti hesabına əldə edilmiş (alınmış, gətirilmiş, istehsal edilmiş, tikilmiş və ya quraşdırılmış) əmlakına görə 10 il müddətinə əmlak vergisini ödəməkdən azaddır 3.	azadolma investisiya layihəsi çərçivəsində sahibkarlıq fəaliyyətinə cəlb edilən və əvvəllər vergi ödəyicisinin sahibkarlıq fəaliyyətində istifadə edilməyən binalara da şamil edilir 4.	azadolma investisiya təşviqi sənədi alınan tarixədək əldə edilmiş və hüquqi şəxs və ya fərdi sahibkar tərəfindən sahibkarlıq fəaliyyətində istifadə edilmiş əmlaklara da tətbiq edilir",
  answer: "D) 1,3",
  options: [
    "A) 1,2,3",
    "B) 2,3,4",
    "C) 3,4 ",
    "D) 1,3"
  ]
},
  {
  numb: 5,
  question: "2019-cu il yanvarın 1-dən 2022-ci il yanvarın 1-dək özəlləşdirilməsi başa çatmış dövlət əmlakına görə ödənilmiş əmlak vergisi hansı şərtlər daxilində vergi ödəyicisinin ərizəsi əsasında qaytarılır və ya sonrakı vergi öhdəliklərinin yerinə yetirilməsinə aid edilir? 1. hesabat ilində digər vergilər üzrə hesablanmış və ödənilmiş verginin məbləği özəlləşdiril¬məsi başa çatmış əmlaka görə həmin hesabat ili üçün dövlət büdcəsinə hesablanmış və ödənilmiş verginin məbləğindən az olmasın. 2.	ödənilmiş əmlak vergisinin qaytarıhmasına dair ərizə ilə müraciət edildiyi tarixə vergi ödəyicisinin dövlət büdcəsinə vergilər, üzrə borcu olmasın. 3.	ödənilmiş əmlak vergisinin qaytarıhmasına dair ərizə ilə müraciət edildiyi tarixə vergi ödəyicisinin dövlət büdcəsinə vergilər, faizlər və maliyyə sanksiyaları üzrə borcu olmasın. 4.	ödənilmiş əmlak vergisinin qaytarıhmasına dair ərizə ilə müraciət edildiyi tarixə vergi ödəyicisinin dövlət büdcəsinə faizlər və maliyyə sanksiyaları üzrə borcu olmasın.",
  answer: "D) 1,3",
  options: [
    "A) 1,2,3",
    "B) 2,3,4",
    "C) 3,4 ",
    "D) 1,3"
  ]
},
{
  numb: 6,
  question: "Vergi Məcəlləsinin 199.12-ci maddəsi müəyyən olunmuş güzəşt hüququ eyni əmlaka görə hansı hesabat ili üzrə tətbiq edilir?",
  answer: "D)	Güzəşt hüququ eyni əmlaka görə yalnız bir hesabat ili üzrə tətbiq edilir",
  options: [
    "A)	məhdudiyyət yoxdur",
    "B)	güzəşt hüququ eyni əmlaka görə növbəti beş hesabat ili üzrə tətbiq edilir",
    "C)	güzəşt hüququ eyni əmlaka görə növbəti üç hesabat ili üzrə tətbiq edilir",
    "D)	Güzəşt hüququ eyni əmlaka görə yalnız bir hesabat ili üzrə tətbiq edilir"
  ]
},
  {
  numb: 7,
  question: "Mikro sahibkarlıq subyekti olan hüquqi şəxslər və fərdi sahibkarlar əmlak vergisini ödəməkdən neçə il müddətinə azaddırlar?",
  answer: "B) Müddətsiz",
  options: [
    "A) 2 il",
    "B) Müddətsiz",
    "C) 5 il",
    "D) 7 il"
  ]
},
  {
  numb: 8,
  question: "Mülkiyyətində olan əsas vəsaitlərin ilin əvvəlinə qalıq dəyəri 1.000.000 manatdan artıq olan mikro sahibkarlıq subyekti hüquqi şəxslər və fərdi sahibkarlar əmlak vergisini ödəməkdən neçə il müddətinə azaddırlar?",
  answer: "C) Azad deyillər",
  options: [
    "A) 2 il",
    "B) Müddətsiz ",
    "C) Azad deyillər",
    "D) 7 il"
  ]
},
  {
  numb: 9,
  question: "KOB klaster şirkətləri KOB klaster şirkətlərinin reyestrinə daxil edildiyi tarixdən neçə il müddətinə əmlak vergisini ödəməkdən azaddırlar?",
  answer: "A) 7 il",
  options: [
    "A) 7 il",
    "B) Müddətsiz",
    "C) 5 il",
    "D) 3 il"
  ]
},
  {
  numb: 10,
  question: "Ödəmə qabiliyyətini itirmiş bankların rezolyusiyası və sağlamlaşdırma tədbirləri çərçivəsində Azərbaycan Respublikasının Prezidentinin qərarına əsasən aldığı problemli aktivlərin (borcların) əvəzində əldə etdiyi və onun mülkiyyətində (balansında) olan əmlaka görə hansı müddətə əmlak vergisini ödəməkdən azaddır?",
  answer: "B)	2019-cu il yanvarın 1-dən 5 il müddətinə",
  options: [
    "A)	Müddətsiz",
    "B)	2019-cu il yanvarın 1-dən 5 il müddətinə",
    "C) 2020-ci il yanvarın 1-dən 5 il müddətinə",
    "D) 2019-cu il yanvarın 1-dən 7 il müddətinə "
  ]
},
  {
  numb: 6,
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 30,
  question: "Hesablanmış cari vergi məbləği hesabat üzrə vergi məbləğindən çox olduğu halda:",
  answer: "A)	Artıq hesablanmış cari vergi və ona uyğun faiz məbləğləri azaldılır",
  options: [
    "A)	Artıq hesablanmış cari vergi və ona uyğun faiz məbləğləri azaldılır",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 31,
  question: "Müəssisə və fərdi sahibkar əmlak vergisinin illik bəyannaməsini nə vaxt təqdim edir?",
  answer: "C)	Hesabat ilindən sonrakı ilin mart ayının 31 -dən gec olmayaraq",
  options: [
    "A)	Hesabat ilindən sonrakı ilin aprel ayının 1-dək",
    "B)	Hesabat ilindən sonrakı ilin aprel ayının 15-dək",
    "C)	Hesabat ilindən sonrakı ilin mart ayının 31 -dən gec olmayaraq",
    "D)	Hesabat ilindən sonrakı ilin mart ayının 15-dən gec olmayaraq"
  ]
},
  {
  numb: 32,
  question: "Hüquqi şəxs və ya qeyri-rezidentin daimi nümayəndəliyi iəğvetmə balansını qeydiyyat orqanına təqdim etdiyi tarixdən neçə gün müddətində əmlak vergisi bəyanna¬məsini vergi orqanına təqdim etməlidir?",
  answer: "D) 30 gün müddətində",
  options: [
    "A)	5 gün müddətində",
    "B) 15 gün müddətində",
    "C) 10 gün müddətində",
    "D) 30 gün müddətində"
  ]
},
  {
  numb: 33,
  question: "Fərdi sahibkar fəaliyyətinin ləğvi hallarında vergi uçotundan çıxarılma barədə ərizənin verildiyi tarixdən neçə gün müddətində əmlak vergisi bəyannaməsini vergi orqanına təqdim etməyə borcludur?",
  answer: "D) 30 gün müddətində",
  options: [
    "A)	5 gün müddətində",
    "B) 15 gün müddətində",
    "C) 10 gün müddətində",
    "D) 30 gün müddətində"
  ]
},
  {
  numb: 34,
  question: "Müəssisənin hesabladığı əmlak vergisinin məbləği nəyə aid edilir?",
  answer: "B)	Məhdudlaşdırılmayan gəlirdən çıxılmalara aid edilir",
  options: [
    "A)	Müəssisənin sərəncamında qalan mənfəət hesabına aid edilir",
    "B)	Məhdudlaşdırılmayan gəlirdən çıxılmalara aid edilir",
    "C)	Gələcək dövr xərclərinə aid edilir",
    "D)	Müəssisənin gəlirlərinə aid edilir"
  ]
},
  {
  numb: 35,
  question: "İllik bəyannamələr üzrə əmlak vergisi nə vaxt ödənilir?",
  answer: "B)	Həmin bəyannamələrin verilməsi üçün müəyyən edilmiş müddətlərədək",
  options: [
    "A)	Bəyannamələrin verilməsi üçün müəyyən edilmiş müddətdən sonrakı bir ay müddətində",
    "B)	Həmin bəyannamələrin verilməsi üçün müəyyən edilmiş müddətlərədək",
    "C)	Bəyannamələrin verilməsi üçün müəyyən edilmiş müddətdən sonrakı 15 gün müddətində",
    "D) Həmin bəyannamələrin verilməsi üçün müəyyən edilən ilin sonunadək"
  ]
},
  {
  numb: 36,
  question: "Müəssisələrin və fərdi sahibkarın əmlak vergisi hansı büdcəyə ödənilir?",
  answer: "B)	Dövlət büdcəsinə",
  options: [
    "A)	Yerli büdcəyə (bələdiyyə büdcəsinə)",
    "B)	Dövlət büdcəsinə",
    "C) Büdcədənkənar fonlara",
    "D) Xüsusi fondlara"
  ]
},
  {
  numb: 37,
  question: "Vergitutma məqsədləri üçün müəssisənin və fərdi sahibkarın əsas vəsaitlərinin hansı dəyərinə əsasən əmlak vergisi hesablanır?",
  answer: "C) Orta illik qahq dəyərinə",
  options: [
    "A)	İlin sonuna qalıq dəyərinə",
    "B)	İlin əvvəlinə qahq dəyərinə",
    "C) Orta illik qahq dəyərinə",
    "D) Əmlakların alış dəyərinə"
  ]
},
  {
  numb: 38,
  question: "Müəssisənin və fərdi sahibkarın əsas vəsaitlərinin orta illik qahq dəyəri necə müəyyən edilir?",
  answer: "B)	Müəssisənin və fərdi sahibkarın əsas vəsaitlərinin hesabat ilinin əvvəlinə və sonuna qahq dəyəri toplanıb ikiyə bölünür.",
  options: [
    "A)	Müəssisənin və fərdi sahibkarın əsas vəsaitlərinin hesabat ilinin əvvəlinə və sonuna qalıq dəyəri toplanıb dördə bölünür",
    "B)	Müəssisənin və fərdi sahibkarın əsas vəsaitlərinin hesabat ilinin əvvəlinə və sonuna qahq dəyəri toplanıb ikiyə bölünür.",
    "C)	Müəssisənin və fərdi sahibkarın əsas vəsaitlərinin hesabat ilinin əvvəlinə və sonuna qalıq dəyəri toplanıb 24-ə bölünür.",
    "D)	Müəssisənin və fərdi sahibkarın əsas vəsaitlərinin hər rübün əvvəlinə və sonuna qahq dəyəri toplanıb ikiyə bölünür, sonra isə ahnan məbləğlər toplanır"
  ]
},
  {
  numb: 39,
  question: "Müəssisənin və fərdi sahibkarın əsas vəsaitlərinin orta illik qahq dəyəri hesablanarkən hansı amil nəzərə aıınmır?",
  answer: "B)	Əsas vəsaitlərin yenidən qiymətləndirilməsindən yaranan artım",
  options: [
    "A)	Cari ildə daxil olmuş əsas vəsaitlərin dəyəri",
    "B)	Əsas vəsaitlərin yenidən qiymətləndirilməsindən yaranan artım",
    "C)	Vergi ilində təqdim edilmiş və ya ləğv edilmiş əsas vəsaitlərin qalıq dəyəri",
    "D)	Vari ildə təmir xərclərinin məhdudlaşdırmadan artıq olan hissəsi"
  ]
},
  {
  numb: 40,
  question: "Müəssisə və ya fərdi sahibkar hesabat ili ərzində yaradıldıqda, vergitutma məqsədləri üçün əmlakın orta illik qalıq dəyəri necə müəyyən edilir?",
  answer: "B)	Müəssisənin və ya fərdi sahibkarın yaradıldığı və ya əmlak vergisi ödəyicisi olduğu tarixə və ilin sonuna əmlakın qalıq dəyəri toplanaraq 24-ə bölünür və müəssisənin yaradıldığı aydan sonra ilin sonuna qədər olan ayların sayına vurulur",
  options: [
    "A)	Müəssisənin və ya fərdi sahibkarın yaradıldığı tarixə və ilin sonuna əmlakın qalıq dəyəri toplanaraq 12-yə bölünür və müəssisənin yaradıldığı aydan sonra ilin sonuna qədər olan ayların sayma vurulur",
    "B)	Müəssisənin və ya fərdi sahibkarın yaradıldığı və ya əmlak vergisi ödəyicisi olduğu tarixə və ilin sonuna əmlakın qalıq dəyəri toplanaraq 24-ə bölünür və müəssisənin yaradıldığı aydan sonra ilin sonuna qədər olan ayların sayına vurulur",
    "C)	Həmin il müəssisənin və ya fərdi sahibkarın əmlakından vergi tutulmur",
    "D)	İlin sonuna əmlakın qalıq dəyəri 12-yə bölünür və müəssisənin və ya fərdi sahibkarın yaradıldığı və ya əmlak vergisi ödəyicisi olduğu ay da daxil olmaqla ilin sonuna qədər olan ayların sayına vurulur"
  ]
},
  {
  numb: 41,
  question: "Müəssisə və ya fərdi sahibkar hesabat ili ərzində ləğv edildikdə, vergitutma məqsədləri üçün əmlakın orta illik qalıq dəyəri necə müəyyən edilir?",
  answer: "A)	İlin əvvəlinə və müəssisənin və ya fərdi sahibkarın ləğv edildiyi tarixə əmlakın qalıq dəyəri toplanaraq 24-ə bölünür və ilin əvvəlindən müəssisənin ləğv edildiyi aya qədər olan ayların sayma vurulur",
  options: [
    "A)	İlin əvvəlinə və müəssisənin və ya fərdi sahibkarın ləğv edildiyi tarixə əmlakın qalıq dəyəri toplanaraq 24-ə bölünür və ilin əvvəlindən müəssisənin ləğv edildiyi aya qədər olan ayların sayma vurulur",
    "B)	İlin əvvəlinə və müəssisənin və ya fərdi sahibkarın ləğv edildiyi tarixə əmlakın qalıq dəyəri toplanaraq 24-ə bölünür və ilin əvvəlindən müəssisənin ləğv edildiyi aydan ilin sonuna qədər olan ayların sayına vurulur",
    "C)	Həmin il müəssisənin və ya fərdi sahibkarın əmlakından vergi tutulmur",
    "D)	İlin əvvəlinə və müəssisənin və ya fərdi sahibkarın ləğv edildiyi tarixə əmlakın qahq dəyəri toplanaraq 2-yə bölünür"
  ]
},
  {
  numb: 42,
  question: "Vergitutma məqsədləri üçün fərdi sahibkarın əsas vəsaitlərinin orta illik qalıq dəyəri müəyyən edilərkən hansı əsas vəsaitlər nəzərə alınmır?",
  answer: "D)	Rezident və qeyri-rezident fiziki şəxslərin xüsusi mülkiyyətində olan və Azərbaycan Respublikasının ərazisində yerləşən tikililər və ya onların hissələri (binaları), həmçinin yerindən və istifadə edilib-edilməməsindən asılı olmayaraq rezident fiziki şəxslərə məxsus su və hava nəqliyyatı vasitələri",
  options: [
    "A)	Yalnız rezident fiziki şəxslərin xüsusi mülkiyyətində olan və Azərbaycan Respublikasının ərazisində yerləşən tikililər və ya onların hissələri (binaları), həmçinin yerindən və istifadə edilib- edilməməsindən asılı olmayaraq rezident fiziki şəxslərə məxsus su və hava nəqliyyatı vasitələri",
    "B)	Yalnız qeyri-rezident fiziki şəxslərin xüsusi mülkiyyətində olan və Azərbaycan Respublikasının ərazisində yerləşən tikililər və ya onların hissələri (binaları), həmçinin yerindən və istifadə edilib-edilməməsindən asılı olmayaraq rezident fiziki şəxslərə məxsus su və hava nəqliyyatı vasitələri",
    "C)	İstifadə müddəti 10 ildən artıq olan əsas vəsaitlər",
    "D)	Rezident və qeyri-rezident fiziki şəxslərin xüsusi mülkiyyətində olan və Azərbaycan Respublikasının ərazisində yerləşən tikililər və ya onların hissələri (binaları), həmçinin yerindən və istifadə edilib-edilməməsindən asılı olmayaraq rezident fiziki şəxslərə məxsus su və hava nəqliyyatı vasitələri"
  ]
},
  {
  numb: 6,
  question: "?",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
];
