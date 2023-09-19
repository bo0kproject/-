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
  numb: 11,
  question: "Fiziki şəxsin xüsusi mülkiyyətində olan binalarına görə əmlak vergisi hansı orqan tərəfindən hesablanır?",
  answer: "B)	Onların yerləşdiyi ərazinin bələdiyyəsi tərəfindən",
  options: [
    "A)	Onların yerleşdiyi ərazi vergi orqanı tərəfindən",
    "B)	Onların yerləşdiyi ərazinin bələdiyyəsi tərəfindən",
    "C)	Onlarm aid olduğu inzibati ərazi vahidinin icra nümayəndəliyi tərəfindən",
    "D)	Onların yerləşdiyi inzibati ərazi vahidinin maliyyə orqanı tərəfindən"
  ]
},
  {
  numb: 12,
  question: "Fiziki şəxsin xüsusi mülkiyyətində olan binalara görə əmlak vergisi hansı göstəriciyə əsasən hesablanır?",
  answer: "D) Binanın sahəsinin (yaşayış sahələrinə münasibətdə - onlarm 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə",
  options: [
    "A) Binanın bazar qiymətinə əsasən",
    "B) Binanın inventar dəyərinə əsasən",
    "C) Binanın qalıq dəyərinə əsasən",
    "D) Binanın sahəsinin (yaşayış sahələrinə münasibətdə - onlarm 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə"
  ]
},
  {
  numb: 13,
  question: "Bir neçə sahibi olan bina üzrə əmlak vergisi hansı qaydada hesablanır?",
  answer: "A)	Həmin binanın hər sahibi üçün onun binanın dəyərindəki payına uyğun olaraq hesablanır",
  options: [
    "A)	Həmin binanın hər sahibi üçün onun binanın dəyərindəki payına uyğun olaraq hesablanır",
    "B)	Həmin binanın dəyərində daha çox payı olan şəxs tərəfindən hesablanır",
    "C)	Həmin bina üzrə əmlak vergisi hesablanmır",
    "D)	Həmin binanın altında olan torpağa görə vergi ödəyən şəxs tərəfindən hesablanır"
  ]
},
  {
  numb: 14,
  question: "Su və hava nəqliyyatı vasitələrinə görə əmlak vergisi hansı orqanlar tərəfindən verilən məlumatlar əsasında hesablanır?",
  answer: "B)	Onlarm qeydiyyatını həyata keçirən təşkilatlar tərəfindən",
  options: [
    "A)	Daxili işlər orqanları tərəfindən",
    "B)	Onlarm qeydiyyatını həyata keçirən təşkilatlar tərəfindən",
    "C)	Maliyyə və statistika orqanları tərəfindən",
    "D)	Ərazi vergi orqanları tərəfindən"
  ]
},
  {
  numb: 15,
  question: "Su və hava nəqliyyatı vasitələrinin qeydiyyatı olmadığı hallarda, həmin əmlakın sahibi mülkiyyətində olan bu vasitələr barədə hansı məlumatları əks etdirən sənədləri və nə vaxt müvafiq orqana təqdim etməlidirlər?",
  answer: "A)	Buraxılış ili, alış qiyməti və texniki xarakteristikası - yanvar ayının 1-dək",
  options: [
    "A)	Buraxılış ili, alış qiyməti və texniki xarakteristikası - yanvar ayının 1-dək",
    "B)	Buraxılış ili və alış qiyməti - dekabr ayının 1 -dək",
    "C)	Alış qiyməti və texniki xarakteristikası - dekabr ayının 20-dək",
    "D)	Buraxılış ili və texniki xarakteristikası - yanvar ayının 20-dək"
  ]
},
  {
  numb: 16,
  question: "Bir neçə fiziki şəxsə məxsus olan su və hava nəqliyyatı vasitəsinə görə əmlak vergisi kimdən tutulur?",
  answer: "B)	Həmin nəqliyyat vasitəsini öz adına keçirmiş şəxsdən",
  options: [
    "A)	Onların bu nəqliyyat vasitəsində malik olduğu paya uyğun olaraq",
    "B)	Həmin nəqliyyat vasitəsini öz adına keçirmiş şəxsdən",
    "C)	Həmin nəqliyyat vasitəsinə görə əmlak vergisi tutulmur",
    "D)	Həmin nəqliyyat vasitəsində daha çox paya malik olan şəxsdən"
  ]
},
  {
  numb: 17,
  question: "Bələdiyyələr əmlak vergisinin ödənilməsi barədə tədiyyə bildirişini nə vaxt vergi ödəyicisinə verməlidirlər?",
  answer: "C) Avqustun 1-dən gec olmayaraq",
  options: [
    "A)	Mayın 1-dən gec olmayaraq",
    "B)	İyunun 1-dən tez olmayaraq",
    "C) Avqustun 1-dən gec olmayaraq",
    "D) Avqustun 15-dən gec olmayaraq"
  ]
},
  {
  numb: 18,
  question: "Fiziki şəxslərin əmlak vergisi hansı hissələrlə və nə vaxt ödənilməlidir?",
  answer: "B)	Bərabər hissələrlə həmin il avqustun 15-dək və noyabrın 15-dək",
  options: [
    "A)	Bərabər hissələrlə həmin il iyulun 15-dək və noyabrın 15-dək",
    "B)	Bərabər hissələrlə həmin il avqustun 15-dək və noyabrın 15-dək",
    "C)	Bərabər hissələrlə həmin il avqustun 15-dək və oktyabrın 15-dək",
    "D)	İstənilən məbləğdə həmin il avqustun 15-dək və noyabrın 1-dək"
  ]
},
  {
  numb: 19,
  question: "Əmlak vergisi əmlakın əvvəlki sahibi tərəfindən ödənilmədiyi hallarda, vergi kim tərəfindən ödənilir?",
  answer: "A)	Müəyyən edilmiş ödəmə vaxtında həmin əmlakın sahibi tərəfindən",
  options: [
    "A)	Müəyyən edilmiş ödəmə vaxtında həmin əmlakın sahibi tərəfindən",
    "B)	Müəyyən edilmiş ödəmə vaxtında həmin əmlakın əvvəlki sahibi tərəfindən",
    "C)	Müəyyən edilmiş ödəmə vaxtında vergi orqanı tərəfindən müəyyən edilən şəxs tərəfindən",
    "D)	Müəyyən edilmiş ödəmə vaxtında bərabər məbləğlərdə əmlakın əvvəlki və yeni sahibi tərəfindən"
  ]
},
  {
  numb: 20,
  question: "Binalara, su və hava nəqliyyatı vasitələrinə görə fiziki şəxslərin əmlak vergisi hansı büdcəyə ödənilir?",
  answer: "A)	Yerli büdcəyə (bələdiyyə büdcəsinə) ",
  options: [
    "A)	Yerli büdcəyə (bələdiyyə büdcəsinə) ",
    "B)	Dövlət büdcəsinə",
    "C) Büdcədənkənar fonlara",
    "D) Xüsusi fondlara"
  ]
},
  {
  numb: 21,
  question: "Müəssisənin əsas vəsaitləri qalıq dəyərindən artıq qiymətə sığortalandığı halda əmlak vergisi necə hesablanır?",
  answer: "B)	Bazar qiymətinə əmlak vergisinin dərəcəsi tətbiq edilməklə",
  options: [
    "A)	Sığortalandığı qiymətə əmlak vergisinin dərəcəsi tətbiq edilməklə",
    "B)	Bazar qiymətinə əmlak vergisinin dərəcəsi tətbiq edilməklə",
    "C)	Orta illik qalıq dəyərinə əmlak vergisinin dərəcəsi tətbiq edilməklə",
    "D)	Əmlakların alış dəyərinə əmlak vergisinin dərəcəsi tətbiq edilməklə"
  ]
},
  {
  numb: 22,
  question: "Fərdi sahibkarın əsas vəsaitləri qalıq dəyərindən artıq qiymətə sığortalandığı halda əmlak vergisi necə hesablanır?",
  answer: "B)	Bazar qiymətinə əmlak vergisinin dərəcəsi tətbiq edilməklə",
  options: [
    "A)	Sığortalandığı qiymətə əmlak vergisinin dərəcəsi tətbiq edilməklə",
    "B)	Bazar qiymətinə əmlak vergisinin dərəcəsi tətbiq edilməklə",
    "C)	Orta illik qalıq dəyərinə əmlak vergisinin dərəcəsi tətbiq edilməklə",
    "D)	"Əmlakların alış dəyərinə əmlak vergisinin dərəcəsi tətbiq edilməklə"
  ]
},
  {
  numb: 23,
  question: "Müəssisənin və fərdi sahibkarın əmlak vergisi üçün vergi dövrü hansı dövr sayılır?",
  answer: "D) Təqvim ili",
  options: [
    "A) Təqvim ayı",
    "B) Yarım illik",
    "C) Rüb ",
    "D) Təqvim ili"
  ]
},
  {
  numb: 24,
  question: "Əvvəlki vergi ilində əmlak vergisi ödəyicisi olmayan və növbəti ildə bu verginin ödə-yicisi olan hüquqi şəxslər əmlak vergisi üzrə cari vergi ödəmələrini hansı qaydada ödəyirlər?",
  answer: "A)	Hüquqi şəxslər və fərdi sahibkarlar əsas vəsaitlərin əldə edildiyi rübdən sonra hər rübün ikinci ayının 15-dən gec olmayaraq həmin əmlaka görə hesablanmalı olan illik əmlak vergisinin 20 faizi miqdarında",
  options: [
    "A)	Hüquqi şəxslər və fərdi sahibkarlar əsas vəsaitlərin əldə edildiyi rübdən sonra hər rübün ikinci ayının 15-dən gec olmayaraq həmin əmlaka görə hesablanmalı olan illik əmlak vergisinin 20 faizi miqdarında",
    "B)	Hüquqi şəxslər və fərdi sahibkarlar əsas vəsaitlərin əldə edildiyi rübdən sonra hər rübün sonunda həmin əmlaka görə hesablanmalı olan illik əmlak vergisinin 25 faizi miqdarında",
    "C)	Hüquqi şəxslər əmlakın və fərdi sahibkarlar əsas vəsaitlərin əldə edildiyi rübden sonra hər rübün birinci ayının 20-dən gec olmayaraq həmin əmlaka görə hesablanmalı olan illik əmlak vergisinin 20 faizi miqdarında",
    "D)	Cari vergi ödəmələri aparılmır"
  ]
},
  {
  numb: 25,
  question: "Dövlət büdcəsinə hesabat dövrü üçün ödənilməli olan əmlak vergisinin məbləği müəyyən edilərkən hesabat dövrü ərzində əvvəllər hesablanmış ödəmələr nəzərə alınırım?",
  answer: "B)	Tam məbləğdə nəzərə alınır",
  options: [
    "A)	Nəzərə alınmır",
    "B)	Tam məbləğdə nəzərə alınır",
    "C) 50 faiz məbləğdə nəzərə ahmr",
    "D) Vergi orqanının müəyyən etdiyi faiz nisbətində nəzərə alınır"
  ]
},
  {
  numb: 26,
  question: "Əmlak vergisi Üzrə cari vergi Ödəmələri vaxtında ödənilmədikdə vergi orqanı tərə-findən hansı tədbirlər görülür ?",
  answer: "D)	Vergi ödəyicisinə ödəmə müddətindən sonrakı hər bir ötmüş gün üçün 0,1 faiz dərəcəsi ilə faiz hesablanır",
  options: [
    "A)	Vergi ödəyicisində operativ vergi nəzarəti tədbirləri həyata keçirilir",
    "B)	Vergi ödəyicisində səyyar vergi yoxlaması həyata keçirilir",
    "C)	Vergi ödəyicisinə hər bir ötmüş gün üçün 0,05 faiz dərəcəsi ilə faiz hesablanır",
    "D)	Vergi ödəyicisinə ödəmə müddətindən sonrakı hər bir ötmüş gün üçün 0,1 faiz dərəcəsi ilə faiz hesablanır"
  ]
},
  {
  numb: 27,
  question: "Əmlak vergisi üzrə cari vergi ödəmələri nə vaxt yenidən haqq-hesab edilir?",
  answer: "C)	Hesabat ili başa çatdıqdan sonra",
  options: [
    "A)	Hesabat rübü başa çatdıqdan sonra",
    "B)	Hesabat rübünün ikinci ayının 15-i başa çatdıqdan sonra",
    "C)	Hesabat ili başa çatdıqdan sonra",
    "D)	Yenidən haqq-hesab edilmir"
  ]
},
  {
  numb: 28,
  question: "Müəssisələr və fərdi sahibkarlar əmlak vergisi üzrə cari vergi ödəmələrini nə vaxt ödəyirlər?",
  answer: "B)	Hər rübün ikinci ayının 15-dən gec olmayaraq",
  options: [
    "A)	Hər rübün sonundan gec olmayaraq",
    "B)	Hər rübün ikinci ayının 15-dən gec olmayaraq",
    "C)	Hər rübün birinci ayının 15-dən gec olmayaraq",
    "D)	Hər rübün ikinci aymın 20-dən gec olmayaraq"
  ]
},
  {
  numb: 29,
  question: "Hesablanmış cari vergi məbləği hesabat üzrə vergi məbləğindən çox olduğu halda:",
  answer: "A)	Artıq hesablanmış cari vergi və ona uyğun faiz məbləğləri azaldılır",
  options: [
    "A)	Artıq hesablanmış cari vergi və ona uyğun faiz məbləğləri azaldılır",
    "B)	Artıq hesablanmış cari vergi məbləği dərhal vergi ödəyicisinə qaytarılır.",
    "C)	Artıq hesablanmış cari vergi məbləğləri azaldılmır.",
    "D)	Heç bir tədbir görülmür"
  ]
},
  {
  numb: 30,
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
  numb: 31,
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
  numb: 32,
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
  numb: 33,
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
  numb: 34,
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
  numb: 35,
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
  numb: 36,
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
  numb: 37,
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
  numb: 38,
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
  numb: 39,
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
  numb: 40,
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
  numb: 41,
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
  numb: 42,
  question: "Müəssisələr və fərdi sahibkarlar əmlak vergisi üzrə cari vergi ödəmələrini hansı miqdarda ödəyirlər?",
  answer: "A)	Əvvəlki ildəki əmlak vergisinin məbləğinin 20 faizi",
  options: [
    "A)	Əvvəlki ildəki əmlak vergisinin məbləğinin 20 faizi",
    "B)	Əvvəlki ildəki əmlak vergisinin məbləğinin 25 faizi",
    "C)	Əvvəlki ildəki əmlak vergisinin məbləğinin 15 faizi",
    "D) Əvvəlki rübdəki əmlak vergisinin məbləği qədər"
  ]
},
];
