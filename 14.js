// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Malların təqdim edilməsinin, işlərin görülməsinin və xidmətlərin göstərilməsinin aşağıdakı hansı növündən ƏDV tutulur?",
  answer: "D)	Vergi ödəyicisinin haqqı ödənilməklə və ya əvəzsiz qaydada öz işçilərinə və digər şəxslərə mal verməsi, iş görməsi və ya xidmət göstərməsi, habelə barter əməliyyatı.",
  options: [
    "A)	Müvafiq icra hakimiyyəti orqanı tərəfindən müəyyən edilmiş hallarda hüquqi şəxsin qərarı ilə onun özünün və onun tam mülkiyyətində olan rezident törəmə müəssisələrinin birinin balansından digərinin balansına əvəzsiz olaraq verilən aktivlərin dəyəri;",
    "B)	Müvafiq icra hakimiyyəti orqanının qərarına əsasən bir hüquqi şəxsin balansından əvə siz olaraq digər şəxsin balansına verilmiş əsas vəsaitlərin dəyəri;",
    "C)	Neft-qaz ehtiyatlarının kəşfiyyatı, işlənməsi və hasilatın pay bölgüsü, ixrac boru kəmərləri haqqında və bu qəbildən olan digər sazişlərə uyğun olaraq əsas fondların, daşmar əmlakın və digər aktivlərin hər hansı şəkildə həmin sazişlərdə Azərbaycan Respublikasını təmsil edən tərəfə təqdim edilməsi üzrə əməliyyatlar;",
    "D)	Vergi ödəyicisinin haqqı ödənilməklə və ya əvəzsiz qaydada öz işçilərinə və digər şəxslərə mal verməsi, iş görməsi və ya xidmət göstərməsi, habelə barter əməliyyatı."
  ]
},
  {
  numb: 2,
  question: "Azərbaycan Respublikasının Prezidenti qərarına əsasən yaradılan sənaye, yaxud texnologiyalar parklarının infrastrukturunun, istehsal sahələrinin yaradılması və tikintisi, habelə elmi-tədqiqat və təcrübə-konstruktor işlərinin görülməsi məqsədi ilə sənaye, yaxud texnologiyalar parklarının idarəedici təşkilatı və ya operatoru tərəfindən müvafiq icra hakimiyyəti orqanının təsdiqedici sənədi əsasında texnikanın, texnoloji avadanlıqların və qurğuların idxalı neçə il müddətinə ƏDV-dən azaddır?",
  answer: "B) Müddətsiz olaraq ƏDV-dən azaddır ",
  options: [
    "A) ƏDV-dən azad deyil",
    "B) Müddətsiz olaraq ƏDV-dən azaddır",
    "C) 5 il",
    "D) 7 il"
  ]
},
  {
  numb: 3,
  question: "Azərbaycan Respublikasının Prezidenti qərarına əsasən yaradılan sənaye və texnologiyalar parkında istehsal sahələrinin tikintisi, elmi-tədqiqat və təcrübə-konstruktor işlərinin görülməsi və istehsal məqsədi ilə sənaye, yaxud texnologiyalar parklarının rezidenti olan hüquqi şəxslər və hüquqi şəxs yaratmadan sahibkarlıq fəaliyyətini həyata keçirən fiziki şəxslər tərəfindən müvafiq icra hakimiyyəti orqanının təsdiqedici sənədi əsasında idxal olunan texnikanın, texnoloji avadanlıqların və qurğuların idxalı - rezidentin sənaye və texnologiyalar parkında qeydiyyata alındığı tarixdən neçə il müddətinə ƏDV-dən azaddır?",
  answer: "D) 10 il",
  options: [
    "A) müddətsiz olaraq ƏDV-dən azaddır",
    "B) 3 il",
    "C) 5 il",
    "D) 10 il"
  ]
},
  {
  numb: 4,
  question: "Ödənişli təhsil xidmətlərinin göstərilməsi (digər fəaliyyətləri ilə bağlı xidmətlərin göstərilməsi istisna olmaqla) hüquqi şəxsin iştirak paylarının və ya səhmlərinin təqdim edilməsi ƏDV-yə necə cəlb edilir?",
  answer: "D) ƏDV-dən azaddır",
  options: [
    "A) sıfır (0) dərəcə ilə",
    "В) 18 faiz dərəcə ilə",
    "C) 20 faiz dərəcə ilə",
    "D) ƏDV-dən azaddır"
  ]
},
  {
  numb: 5,
  question: "Kənd təsərrüfatı məhsullarının istehsalçıları (o cümlədən, sənaye üsulu ilə) tərəfindən özlərinin istehsal etdikləri kənd təsərrüfatı məhsullarının satışı üzrə dövriyyələr ƏDV-yə hansı dərəcə ilə cəlb olunur?",
  answer: "C) 2014-cü il yanvarın 1-dən 10 il müddətinə azaddır",
  options: [
    "A) 18 faiz dərəcə ilə",
    "B) sıfır (0) dərəcə ilə",
    "C) 2014-cü il yanvarın 1-dən 10 il müddətinə azaddır",
    "D) 2014-cü il yanvarın 1-dən 5 il müddətinə azaddır"
  ]
},
{
  numb: 6,
  question: "Müvafiq icra hakimiyyəti orqanı tərəfindən hərbi məqsədlər üçün istifadə olunan bütün növ texnika və texniki vasitələr, onların ehtiyat hissələri və xüsusi proqram təminatları, silah-sursat idxalı, müdafiə təyinatlı məmulatların yaradılması və istehsalı məqsədilə idxal edilən texnologiyalar, avadanlıqlar və dəstləşdirici hissələr ƏDV-yə hansı dərəcə ilə cəlb edilir?",
  answer: "B) ƏDV-dən azaddır ",
  options: [
    "A) o (sıfır) faiz dərəcə ilə",
    "B) ƏDV-dən azaddır",
    "C) 20 faiz dərəcə ilə",
    "D) 18 faiz dərəcə ilə"
  ]
},
  {
  numb: 7,
  question: "Azərbaycan Respublikasının ərazisində mövcud qaydada qeydiyyatdan keçmiş humanitar təşkilatlar, həmçinin Beynəlxalq Humanitar Yardım üzrə Respublika Komissiya-sının razılığı ilə digər hüquqi və fiziki şəxslər tərəfindən humanitar yardım kimi gətirilən mallar ƏDV-yə hansı dərəcə ilə cəlb edilir?",
  answer: "B) ƏDV-dən azaddır",
  options: [
    "A) o (sıfır) faiz dərəcə ilə",
    "B) ƏDV-dən azaddır",
    "C) 20 faiz dərəcə ilə",
    "D) 18 faiz dərəcə ilə"
  ]
},
{
  numb: 8,
  question: "Texniki yardım da daxil olmaqla, təmənnasız yardım və xeyriyyə məqsədi ilə dövlətlərin, hökumətlərin və beynəlxalq təşkilatların xətti ilə gətirilən mallar ƏDV-yə hansı dərəcə ilə cəlb edilir?",
  answer: "B) ƏDV-dən azaddır ",
  options: [
    "A) o (sıfır) faiz dərəcə ilə",
    "B) ƏDV-dən azaddır",
    "C) 20 faiz dərəcə ilə",
    "D) 18 faiz dərəcə ilə"
  ]
},
{
  numb: 9,
  question: "Azərbaycan Respublikası Nazirlər Kabineti tərəfindən müəyyən edilmiş hallarda və qaydada fiziki şəxs tərəfindən gömrük sərhədindən keçirilən istehsal, yaxud kommersiya məqsədləri üçün nəzərdə tutulmayan mallar ƏDV-yə hansı dərəcə ilə cəlb edilir?",
  answer: "A) ƏDV-dən azaddır",
  options: [
    "A) ƏDV-dən azaddır",
    "В) 18 faiz dərəcə ilə",
    "C) 20 faiz dərəcə ilə",
    "D) 18 faiz dərəcə ilə"
  ]
},
{
  numb: 10,
  question: "İxrac məqsədli neft-qaz fəaliyyəti ilə əlaqədar gətirilən avadanlıq və materiallar Azərbaycan Respublikası Energetika Nazirliyi tərəfindən ixrac məqsədli neft-qaz fəaliyyəti üzrə Azərbaycan Respublikasına idxal olunan avadanlıq və materialların təsdiq olunmuş siyahısı gömrük orqanlarına təqdim edildiyi təqdirdə) ƏDV-yə hansı dərəcə ilə cəlb edilir?",
  answer: "A) ƏDV-dən azaddır",
  options: [    
    "A) ƏDV-dən azaddır",
    "В) 18 faiz dərəcə ilə",
    "C) 20 faiz dərəcə ilə",
    "D) 18 faiz dərəcə ilə"
  ]
},
{
  numb: 11,
  question: "Xüsusi iqtisadi zonaya idxal edilən mallar (aksizli mallar istisna olmaqla) ƏDV-yə hansı dərəcə ilə cəlb edilir?",
  answer: "D) ƏDV-dən azaddır",
  options: [
    "A) 18 faiz dərəcə ilə",
    "B) sıfır (0) dərəcə",
    "C) 20 faiz dərəcə ilə",
    "D) ƏDV-dən azaddır"
  ]
},
{
  numb: 12,
  question: "Lizinq müqaviləsinin obyekti olan əsas vəsaitlərin idxalı ƏDV-yə hansı dərəcə ilə cəlb edilir?",
  answer: "B) ƏDV-dən azaddır ",
  options: [    
    "A) o (sıfır) faiz dərəcə ilə",
    "B) ƏDV-dən azaddır",
    "C) 20 faiz dərəcə ilə",
    "D) 18 faiz dərəcə ilə"
  ]
},
{
  numb: 13,
  question: "Vergi ödəyicisi vergi tutulan əməliyyatlar və ƏDV-dən azad edilmiş əməliyyatlar aparırsa, ƏDV üzrə əvəzləşdirmə hansı qaydada həyata keçirilir?",
  answer: "D)	Vergi tutulan dövriyyənin ümumi dövriyyədəki xüsusi çəkisinə uyğun olaraq müəyyən edilən ƏDV-nin məbləği əvəzləşdirilir.",
  options: [
    "A)	Heç bir əvəzləşdirməyə yol verilmir.",
    "B)	Bu əməliyyatlar nəticəsində nağdsız qaydada ödənilən ƏDV tam məbləğdə əvəzləşdirilir.",
    "C)	Bu əməliyyatlar nəticəsində nağdsız qaydada ödənilən ƏDV 50 faiz həcmində əvəzləşdirilir.",
    "D)	Vergi tutulan dövriyyənin ümumi dövriyyədəki xüsusi çəkisinə uyğun olaraq müəyyən edilən ƏDV-nin məbləği əvəzləşdirilir."
  ]
},
{
  numb: 14,
  question: "İnvestisiya təşviqi sənədini almış hüquqi şəxslər və fərdi sahibkarlar tərəfindən Azərbaycan Respublikasının İqtisadiyyat Nazirliyinin təsdiqedici sənədi əsasında texnikanın, texnoloji avadanlıqların və qurğuların idxalı - investisiya təşviqi sənədinin alındığı tarixdən neçə il müddətinə vergidən azaddır?",
  answer: "B) 7 il",
  options: [
    "A) 10 il",
    "B) 7 il",
    "C) Müddətsiz azaddır",
    "D) 5 il"
  ]
},
{
  numb: 15,
  question: "Buğdanın idxalı və satışı, buğda ununun və çörəyin istehsalı və satışı - 2017-ci il yanvarın 1-dən neçə il müddətinə vergidən azaddır?",
  answer: "A) 7 il",
  options: [
    "A) 7 il ",
    "B) 3 il",
    "C) 1 il",
    "D) 5 il"
  ]
},
{
  numb: 16,
  question: "Azərbaycan Respublikasının Prezidentinin qərarına əsasən yaradılan sənaye parkında Azərbaycan Respublikasının Prezidentinin müəyyən etdiyi fəaliyyətlə məşğul olan sənaye parkının rezidenti tərəfindən Azərbaycan Respublikasının İqtisadiyyat Nazirliyinin təsdiqedici sənədi əsasında həmin fəaliyyətin məqsədləri üçün bütün növ malların idxalı - 2016-cı il mayın 1-dən neçə il müddətinə vergidən azaddır?",
  answer: "A) 10 il",
  options: [
    "A) 10 il",
    "B) 7 il",
    "C) 5 il",
    "D) 3 il"
  ]
},
{
  numb: 17,
  question: "Damazlıq heyvanların idxalı və satışı; toxum və tinglərin idxalı və satışı; mineral gübrələrin, pestisidlərin idxalı və satışı; toxumların yetişdirilməsi, quşçuluq və arıçılıq üçün avadanlıqların, o cümlədən laboratoriya avadanlıqlarının, toxum, taxıl və quru paxlalı bitkilərin təmizlənməsi, çeşidlənməsi və ya kalibrlənməsi üçün maşınların idxalı və satışı neçə faiz dərəcə ilə vergiyə cəlb olunur?",
  answer: "B) Vergidən azaddır ",
  options: [
    "A) sıfır (0) dərəcə",
    "B) vergidən azaddır",
    "C) 18%",
    "D) 10%"
  ]
},
{
  numb: 18,
  question: "Kənd təsərrüfatı heyvanlarının və quşların profilaktikası, diaqnostikası və müalicəsi üçün istifadə olunan baytarlıq preparatlarının idxalı; bilavasitə kənd təsərrüfatı təyinatlı suvarma və digər qurğuların, maşınların, avadanlıqların və texnikaların idxalı və satışı; siyahısı müvafiq icra hakimiyyəti orqanı tərəfindən müəyyən olunan xammalın və materialların idxalı	",
  answer: "D) Vergidən azaddır",
  options: [
    "A) sıfır (0) dərəcə",
    "B) 10%",
    "C) 18%",
    "D) Vergidən azaddır"
  ]
},
{
  numb: 19,
  question: "Kənd təsərrüfatı heyvanlarının və quşların profilaktikası, diaqnostikası və müalicəsi üçün istifadə olunan baytarlıq preparatlarının idxalı, bilavasitə kənd təsərrüfatı təyinatlı suvarma və digər qurğuların, maşınların, avadanlıqların və texnikaların, habelə kənd təsərrüfatı texnikasının ehtiyat hissələrinin idxalı və satışı neçə faiz dərəcə ilə vergiyə cəlb olunur?",
  answer: "A) Vergidən azaddır ",
  options: [
    "A) Vergidən azaddır",
    "B) 10%",
    "C) 18%",
    "D) sıfır (0) dərəcə"
  ]
},
{
  numb: 20,
  question: "Kənd təsərrüfatı texnikalarının mülkiyyət hüququnun keçməməsi şərtilə kənd təsərrüfatı istehsalçılarına lizinqə (icarəyə) verilməsi neçə faiz dərəcə ilə vergiyə cəlb olunur?",
  answer: "D) Vergidən azaddır",
  options: [
    "A) sıfır (0) dərəcə",
    "B) 10%",
    "C) 18%",
    "D) Vergidən azaddır"
  ]
},
{
  numb: 21,
  question: "Kənd təsərrüfatı məhsullarının istehsalçılarına aqrotexniki xidmətlərin göstərilməsi vergiyə necə cəlb olunur?",
  answer: "B) Azaddır ",
  options: [
    "A) Sıfır (0) dərəcə",
    "B) Azaddır",
    "C) 18%",
    "D) Ümumi qaydada"
  ]
},
{
  numb: 22,
  question: "Ödəmə qabiliyyətini itirmiş bankların rezolyusiyası və sağlamlaşdırma tədbirləri çərçivəsində Azərbaycan Respublikasının Prezidentinin müəyyən etdiyi qaydada qeyri-işlək (toksik) aktivlərin təqdim edilməsi, habelə bankın iflas proseduru çərçivəsində aktivlərinin təqdim edilməsi 2017-ci il yanvarın 1-dən neçə il müddətinə vergidən azaddır?",
  answer: "A) 5 il",
  options: [
    "A) 5 il",
    "B) 7 il",
    "C) 10 il",
    "D)3il"
  ]
},
{
  numb: 23,
  question: "Heyvan və quş ətinin satışı - 2020-ci il yanvarın 1-dən neçə il müddətinə vergidən azaddır?",
  answer: "C) 4",
  options: [
    "A) 1 il",
    "B) 7 il",
    "C) 4 il",
    "D) 5 il"
  ]
},
{
  numb: 24,
  question: "Sürücü daxil olmaqla 10 nəfərdən çox adam daşımaq üçün nəzərdə tutulmuş sıxılmış qazla işləyən avtobusların idxalı hansı müddətə vergidən azaddır?",
  answer: "B)	2020-ci il yanvarın 1-dən 5 il müddətinə",
  options: [
    "A)	2019-cu il yanvarın 1-dən 3 il müddətinə",
    "B)	2020-ci il yanvarın 1-dən 5 il müddətinə",
    "C) 2019-cu il yanvarın 1-dən 5 il müddətinə",
    "D) 2020-ci il yanvarın 1-dən 7 il müddətinə"
  ]
},
{
  numb: 25,
  question: "KOB klaster şirkəti tərəfindən mikro, kiçik və orta sahibkarlığın inkişafını dəstəkləyən Azərbaycan Respublikasının Kiçik və Orta Biznesin İnkişafı Agentliyinin təsdiq- edici sənədi əsasında istehsal, yaxud emal məqsədləri üçün texnikanın, texnoloji avadanlıq¬ların və qurğuların idxalı hansı müddətə vergidən azaddır?",
  answer: "A)	KOB klaster şirkətinin KOB klaster şirkətlərinin reyestrinə daxil edildiyi tarixdən 7 il müddətinə",
  options: [
    "A)	KOB klaster şirkətinin KOB klaster şirkətlərinin reyestrinə daxil edildiyi tarixdən 7 il müddətinə",
    "B)	KOB klaster şirkətinin KOB klaster şirkətlərinin reyestrinə daxil edildiyi tarixdən 5 il müddətinə",
    "C)	idxal edildiyi tarixdən",
    "D) 2020-ci il yanvarın 1 -dən 7 il müddətinə"
  ]
},
{
  numb: 26,
  question: "Yalnız elektrik mühərriki ilə işləyən avtomobillərin idxalından və satışından vergi necə tutlur?",
  answer: "D)	Vergidən azaddır",
  options: [
    "A)	Gömrük dəyərindən 18 faiz dərəcə ilı",
    "B)	2020-ci il yanvarm 1-dən 5 il müddətinə vergidən azaddır",
    "C)	2019-cu il yanvarm 1-dən 3 il müddətinə vergidən azaddır",
    "D)	Vergidən azaddır"
  ]
},
{
  numb: 27,
  question: "2022-ci il yanvarın 1-dən hansı hibrid avtomobillərin idxalı və satışı 3 il müddətinə vergidən azaddır?",
  answer: "C)	İstehsal tarixi 3 ildən və mühərrikinin həcmi 2500 kubsantimetrdən çox olmayan",
  options: [
    "A)	İstehsal tarixi 3 ildən və mühərrikinin həcmi 2500 kubsantimetrdən çox olan",
    "B)	İstehsal tarixi 2 ildən və mühərrikinin həcmi 2500 kubsantimetrdən çox olmayan",
    "C)	İstehsal tarixi 3 ildən və mühərrikinin həcmi 2500 kubsantimetrdən çox olmayan",
    "D)	İstehsal tarixi 5 ildən və mühərrikinin həcmi 3000 kubsantimetrdən çox olmayan"
  ]
},
{
  numb: 28,
  question: "Elektrik mühərriki ilə işləyən avtomobillər üçün ikinci və üçüncü səviyyə elektrik enerji dolduruculannın idxalı hansı müddətə vergidən azaddır?",
  answer: "B)	2022-ci il yanvarın 1 -dən 3 il müddətinə",
  options: [
    "A)	2022-ci il yanvarın 1-dən 2 il müddətinə",
    "B)	2022-ci il yanvarın 1 -dən 3 il müddətinə",
    "C)	2021-ci il yanvarın 1-dən 3 il müddətinə",
    "D)	2022-ci il yanvarın 1-dən 5 il müddətinə"
  ]
},
{
  numb: 29,
  question: "“Məşğulluq haqqında” Azərbaycan Respublikasının Qanununa uyğun olaraq Azərbaycan Respublikası Əmək və Əhalinin Sosial Müdafiəsi Nazirliyinin tabeliyində Daya-nıqlı və Operativ Sosial Təminat Agentliyinin tərəfindən haqqı ödənilən ictimai işlərin təşkili ilə əlaqədar işçi qüvvəsinin təqdim edilməsi üzrə əməliyyatlar vergiyə necə cəlb olunur?",
  answer: "C) Vergidən azaddır",
  options: [
    "A) 18 faiz dərəcə ilə",
    "B) 2020-ci il yanvarın 1-dən 5 il müddətinə vergidən azaddır",
    "C) Vergidən azaddır",
    "D) 0 dərəcə ilə"
  ]
},
{
  numb: 30,
  question: "Heyvandarlıq və quşçuluq təsərrüfatlarında istifadə edilən yem və yem əlavələrinin satışı üzrə dövriyyələr - 2020-ci il yanvarın 1-dən neçə il müddətinə vergidən azaddır?",
  answer: "B) 4 il",
  options: [
    "A) 2 il",
    "B) 4 il",
    "C) 3 il",
    "D) 5 il"
  ]
},
{
  numb: 31,
  question: "Bina tikintisi fəaliyyəti ilə məşğul olan şəxslər tərəfindən tikilən binanın yaşayış sahəsinin dövlətə ayrılan hissəsinin təqdim edilməsi vergiyə hansı qaydada cəlb olunur?",
  answer: "A) Vergidən azaddır ",
  options: [
    "A) Vergidən azaddır ",
    "B) 2020-ci il yanvarın 1-dən 5 il müddətinə vergidən azaddır",
    "C) 18%",
    "D) Sıfır (0) dərəcə"
  ]
},
{
  numb: 32,
  question: "Aşağıdakılardan hansı doğrudur?",
  answer: "D) Siyahısı müvafiq icra hakimiyyəti orqanının müəyyən etdiyi orqan (qurum) tərəfindən təsdiq edilən dövlət adından yaradılan publik hüquqi şəxslər tərəfindən nizamnaməsində nəzərdə tutulan və ona həvalə edilən vəzifələrin yerinə yetirilməsi üçün büdcə qanunvericiliyinə uyğun olaraq dövlət büdcəsindən ayrılmış vəsait hesabına müvafiq icra hakimiyyəti orqanının müəyyən etdiyi orqan (qurum) ilə bağlanılmış müqavilə əsasında işlərin və xidmətlərin göstərilməsi 2020-ci il yanvarın 1-dən 4 il müddətinə vergidən azaddır",
  options: [
    "A) Siyahısı müvafiq icra hakimiyyəti orqanının müəyyən etdiyi orqan (qurum) tərəfindən təsdiq edilən dövlət adından yaradılan publik hüquqi şəxslər tərəfindən nizamnaməsində nəzərdə tutulan və ona həvalə edilən vəzifələrin yerinə yetirilməsi üçün büdcə qanunvericiliyinə uyğun olaraq dövlət büdcəsindən ayrılmış vəsait hesabına müvafiq icra hakimiyyəti orqanının müəyyən etdiyi orqan (qurum) ilə bağlanılmış müqavilə əsasında işlərin və xidmətlərin göstərilməsi 2020-ci il yanvarın 1-dən 5 il müddətinə vergidən azaddır",
    "B) Siyahısı müvafiq icra hakimiyyəti orqanının müəyyən etdiyi orqan (qurum) tərəfindən təsdiq edilən dövlət adından yaradılan publik hüquqi şəxslər tərəfindən nizamnaməsində nəzərdə tutulan və ona həvalə edilən vəzifələrin yerinə yetirilməsi üçün büdcə qanunvericiliyinə uyğun olaraq dövlət büdcəsindən ayrılmış vəsait hesabına müvafiq icra hakimiyyəti orqanının müəyyən etdiyi orqan (qurum) ilə bağlanılmış müqavilə əsasında işlərin və xidmətlərin göstərilməsi 2020-ci il yanvarın 1-dən 3 il müddətinə vergidən azaddır",
    "C) Siyahısı müvafiq icra hakimiyyəti orqanının müəyyən etdiyi orqan (qurum) tərəfindən təsdiq edilən dövlət adından yaradılan publik hüquqi şəxslər tərəfindən nizamnaməsində nəzərdə tutulan və ona həvalə edilən vəzifələrin yerinə yetirilməsi üçün büdcə qanunvericiliyinə uyğun olaraq dövlət büdcəsindən ayrılmış vəsait hesabına müvafiq icra hakimiyyəti orqanının müəyyən etdiyi orqan (qurum) ilə bağlanılmış müqavilə əsasında işlərin və xidmətlərin göstərilməsi 2020-ci il yanvarın 1-dən 7 il müddətinə vergidən azaddır",
    "D) Siyahısı müvafiq icra hakimiyyəti orqanının müəyyən etdiyi orqan (qurum) tərəfindən təsdiq edilən dövlət adından yaradılan publik hüquqi şəxslər tərəfindən nizamnaməsində nəzərdə tutulan və ona həvalə edilən vəzifələrin yerinə yetirilməsi üçün büdcə qanunvericiliyinə uyğun olaraq dövlət büdcəsindən ayrılmış vəsait hesabına müvafiq icra hakimiyyəti orqanının müəyyən etdiyi orqan (qurum) ilə bağlanılmış müqavilə əsasında işlərin və xidmətlərin göstərilməsi 2020-ci il yanvarın 1-dən 4 il müddətinə vergidən azaddır"
  ]
},
{
  numb: 33,
  question: "Azərbaycan Respublikasında keçirilən Formula 1 və Formula 2 yarışları ilə bağlı müvafiq icra hakimiyyəti orqanının müəyyən etdiyi orqan (qurum) ilə bağlanılmış müqavilə əsasında mal, iş və xidmətin təqdim edilməsi hansı müddətə vergidən azaddır?",
  answer: "A) 2018-ci il yanvarm 1-dən 6 il müddətinə",
  options: [
    "A) 2018-ci il yanvarm 1-dən 6 il müddətinə",
    "B) 2020-çİ İl yanvarm 1-dən 6 il müddətinə",
    "C) 2019-cu il yanvarın 1-dən 6 il müddətinə",
    "D) 2018-ci il yanvarın 1-dən 5 il müddətinə"
  ]
},
{
  numb: 34,
  question: "Azərbaycan Respublikasında daimi nümayəndəlik yaratmayan qeyri-rezident şəxslərin mülki aviasiya fəaliyyəti çərçivəsində hava gəmilərinin və hava gəmilərinin mühərriklərinin rezident hüquqi şəxslərə icarəyə və ya lizinqə verilməsi hansı müddətə vergidən azaddır?",
  answer: "D)	Müddətsiz vergidən azaddır",
  options: [
    "A)	2018-ci il yanvarm 1-dən 6 il müddətinə",
    "B)	2020-ci il yanvarm 1-dən 6 il müddətinə",
    "C)	2021-ci il yanvarm 1-dən 6 il müddətinə",
    "D)	Müddətsiz vergidən azaddır"
  ]
},
{
  numb: 35,
  question: "“Tibbi sığorta haqqında” Azərbaycan Respublikasının Qanununa uyğun olaraq İcbari tibbi sığorta fondunun vəsaiti hesabına tibbi sığorta xidmətlərinin göstərilməsi hansı müddətə vergidən azaddır?",
  answer: "B)	2020-ci il yanvarm 1-dən 3 il müddətinə",
  options: [
    "A)	2020-ci il yanvarm 1-dən 2 il müddətinə",
    "B)	2020-ci il yanvarm 1-dən 3 il müddətinə",
    "C) 2020-ci il yanvarm 1-dən 1 il müddətinə",
    "D)	Müddətsiz vergidən azaddır"
  ]
},
{
  numb: 36,
  question: "Azərbaycan Respublikasının Minatəmizləmə Agentliyinin təsdiqedici sənədi əsasında Azərbaycan Respublikasının işğaldan azad edilmiş ərazilərinin, habelə müharibə və hərbi əməliyyatların təsirinə məruz qalmış digər ərazilərin minalardan və partlamamış hərbi Slirsatdau, tərkibində partlayıcı olan qurğulardan və digər partlayıcı qalıqlardan təmizlənməsi çərçivəsində bütün növ texnikanın, avadanlıqların, texniki vasitələrin və qurğuların, onların ehtiyat hissələrinin, fərdi zirehli qoruyucu geyimlərin, alətlərin, minaaxtaran itlərin, partlayıcı və pirotexniki vasitələrin idxalı hansı tarixdən və hansı müddətə vergidən azaddır?",
  answer: "C) 2021-ci il oktyabrın 15-dən 5 il müddəfınə",
  options: [
    "A) 2021-ci il oktyabrın 15-dən 3 il müddəfmə ",
    "B) 2022-ci il oktyabrın 15-dən 5 il müddəfınə ",
    "C) 2021-ci il oktyabrın 15-dən 5 il müddəfınə",
    "D)	Müddətsiz vergidən azaddır"
  ]
},
{
  numb: 37,
  question: "Lotereya biletlərinin satıcısı ilə bağlanmış müqavilə əsasında və ya onun tapşırığı əsasında lotereya biletlərinin bütün mərhələlərdə agent qaydasında satışının həyata keçirilməsi üzrə xidmətlərin göstərilməsi vergiyə hansı qaydada cəlb olunur?",
  answer: "A) Vergidən azaddır ",
  options: [
    "A) Vergidən azaddır ",
    "B) 5 il müddətinə vergidən azaddır",
    "C) 18%",
    "D) sıfır (0) "
  ]
},
{
  numb: 38,
  question: "Sıfır [0] dərəcə ilə ƏDV tutulan əməliyyatları göstərin: 1.	idxal olunan əmlak istisna olmaqla, müəssisənin nizamnamə fonduna [kapitalına] pay şəklində hər hansı əmlakın qoyulması; 2.	qrant müqaviləsi (qərarı) əsasında xaricdən alman qrantlar hesabma malların idxalı, qrant üzrə resipiyentlərə mailarm təqdim edilməsi, işlərin görülməsi və xidmətlərin göstərilməsi; 3.	beynəlxalq və tranzit yük və sərnişin daşınması. Beynəlxalq və tranzit uçuşlarla bilavasitə bağlı olan işlərin görülməsi, xidmətlərin göstərilməsi; 4.	malların və Vergi Məcəlləsinin 168.1.5-ci maddəsində göstərilmiş xidmətlərin ixracı; 5.	Azərbaycan Respublikası Mərkəzi Bankının və Azərbaycan Respublikasının Dövlət Neft Fondunun qanunvericiliklə nəzərdə tutulmuş vəzifələrinin yerinə yetirilməsi ilə bağlı mal idxalı, iş görülməsi və xidmət göstərilməsi.",
  answer: "D) 2,3,4",
  options: [
    "A) 1,2,4",
    "B) 1,3,5",
    "C) 3,4,5",
    "D) 2,3,4"
  ]
},
{
  numb: 39,
  question: "Azərbaycan Respublikasında akkreditə edilmiş beynəlxalq təşkilatların və xarici ölkələrin diplomatik və konsulluq nümayəndəliklərinin rəsmi istifadəsi üçün nəzərdə tutulan mal və xidmətlərdən ƏDV hansı dərəcə ilə tutulur?",
  answer: "A) Sıfır [0] dərəcə",
  options: [
    "A) Sıfır [0] dərəcə",
    "B) 18 faiz",
    "C) ƏDV-dən azaddır",
    "D) 10 faiz"
  ]
},
];
