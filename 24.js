// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Rayon tabeliyində olan şəhərlərdə, qəsəbələrdə və kəndlərdə (Bakı və Sumqayıt şəhərlərinin, habelə Abşeron rayonunun qəsəbə, kəndləri istisna olmaqla) yerləşən yaşayış fondlarının, həyətyanı sahələrinin torpaqları və vətəndaşların bağ sahələrinin tutduğu torpaqlar üzrə 10000 m2- dən yuxarı olan hissə üçün, torpaq sahəsinin hər too kvadrat metrinə görə torpaq vergisinin dərəcəsi nə qədər təşkil edir?",
  answer: "A) 0,2 manat",
  options: [
    "A) 0,2 manat",
    "B) 2 manat",
    "C) 0,1 manat",
    "D) 0,3 manat"
  ]
},
  {
  numb: 2,
  question: "Yaşayış fondlarının tutduğu torpaqların torpaq sahəsi 10000 m2- dən yuxan ol¬duqda, torpaq sahəsinin hər 100 kvadrat metrinə görə Bakı şəhəri üçün torpaq vergisinin dərəcəsi nə qədər təşkil edir?",
  answer: "D) 1,2 manat",
  options: [
    "A) 0,5 manat",
    "B) 0,4 manat",
    "C) 0,6 manat",
    "D) 1,2 manat"
  ]
},
  {
  numb: 3,
  question: "Aşağıdakı torpaqlardan hansılar torpaq vergisinə cəlb edilmir? 1)	yaşayış məntəqələrinin ümumi istifadədə olan torpaqları; 2)	Mərkəzi Bankının və onun qurumlarının mülkiyyətində və istifadəsində olan torpaqlar 3)	yaşayış fondlarının torpaqları; 4)	fiziki və hüquqi şəxslərin istifadəsinə verilməmiş dövlət, meşə və su fondu torpaqları; 5)	vətəndaşların bağ sahələrinin tutduğu torpaqlar. 6)	dövlətin adından yaradılan publik hüquqi şəxslərin (sahibkarlıq fəaliyyəti məqsədləri üçün istifadə olunan torpaqlar istisna olmaqla)",
  answer: "A) l;2;4;6",
  options: [
    "A) l;2;4;6",
    "B) l;2;5",
    "C) 2;3;4;6",
    "D) 3;4;5;6"
  ]
},
  {
  numb: 4,
  question: "Azərbaycan Respublikasının Mərkəzi Bankı və onun qurumları torpaq vergisini hansı məbləğdə ödəyirlər?",
  answer: "C)	Torpaq vergisi ödəməkdən azaddırlar",
  options: [
    "A)	Mülkiyyətində olan torpaq sahəsinin hər 100 kvadratmetrə görə 8 manat",
    "B)	Mülkiyyətində olan torpaq sahəsinin hər 1 kvadratmetrə görə 2 manat",
    "C)	Torpaq vergisi ödəməkdən azaddırlar",
    "D)	Mülkiyyətində olan torpaq sahəsinin hər 100 kvadratmetrə görə 10 manat"
  ]
},
  {
  numb: 5,
  question: "Aşağıdakı torpaqlardan hansılar torpaq vergisinə cəlb edilir? 1)	dövlət sərhəd zolaqları və müdafiə təyinatlı torpaqlar 2)	həyətyanı sahələrin torpaqları 3)	yaşayış fondlarının torpaqları 4)	tikinti, nəqliyyat, rabitə, ticarət-məişət xidməti təyinatlı torpaqlar 5)	Xəzər dənizinin [gülünün]Azərbaycana məxsus olan sektorunun altında yerləşən torpaqlar",
  answer: "A) 2;3;4",
  options: [
    "A) 2;3;4",
    "В) 1;2;4",
    "C) 3;4;5",
    "D) l;3;5"
  ]
},
{
  numb: 6,
  question: "Yaşayış məntəqələrinin ümumi istifadədə olan torpaqlarına görə torpaq vergisi hansı qaydada hesablanır?",
  answer: "B)	Həmin torpaqlara görə vergi hesablanmır",
  options: [
    "A)	Hesablanmış vergi məbləği 50 faiz azaldılır",
    "B)	Həmin torpaqlara görə vergi hesablanmır",
    "C)	Yerli icra hakimiyyətinin müəyyən etdiyi vergi dərəcəsi ilə vergi hesablanır",
    "D)	Hesablanmış vergi məbləği 30 faiz azaldılır"
  ]
},
  {
  numb: 7,
  question: "Yerli özünü idarəetmə orqanlarının mülkiyyətində olan torpaqlara görə torpaq ver-gisi hansı qaydada hesablanır?",
  answer: "B)	Bu torpaqlara görə vergi hesablanmır",
  options: [
    "A)	Ümumi qaydada",
    "B)	Bu torpaqlara görə vergi hesablanmır",
    "C)	Yerli özünü idarəetmə orqanının müəyyən etdiyi dərəcə ilə hesablanır",
    "D)	50 faiz güzəşt edilir"
  ]
},
  {
  numb: 8,
  question: "Büdcə təşkilatları və yerli özünü idarəetmə orqanları torpaq vergisini hansı məb-ləğdə ödəyirlər?",
  answer: "B)	Torpaq vergisi ödəməkdən azaddırlar",
  options: [
    "A)	Mülkiyyətində olan torpaq sahəsinin hər 100 kvadratmetrə görə 10 manat",
    "B)	Torpaq vergisi ödəməkdən azaddırlar",
    "C)	Mülkiyyətində olan torpaq sahəsinin hər 100 kvadratmetrə görə 5 manat",
    "D)	Mülkiyyətində olan torpaq sahəsinin hər 1 kvadratmetrə görə 2 manat"
  ]
},
  {
  numb: 9,
  question: "Xəzər dənizinin [gölünün] Azərbaycan Respublikasına məxsus olan sektorunun al-tında yerləşən torpaq sahələrinə görə torpaq vergisi hansı qaydada hesablanır?",
  answer: "B)	Vergi hesablanmır",
  options: [
    "A)	Ümumi qaydada",
    "B)	Vergi hesablanmır",
    "C)	Nazirlər Kabinetinin müəyyən etdiyi dərəcələrlə hesablanır",
    "D)	Hesablanmış verginin 50 faizi ödənilir"
  ]
},
  {
  numb: 10,
  question: "Aşağıda göstərilən şəxslərdən hansılarının mülkiyyətində olan torpaqlara görə tor-paq vergisinin məbləği 10 manat azaldılır? 1)	Azərbaycan Respublikasının Milli Qəhrəmanlarının 2)	məcburi köçkünlər və onlara bərabər tutulan şəxslərin 3)	həlak olmuş, yaxud sonralar vəfat etmiş döyüşçülərin dul arvadlarının [ərlərinin] 4)	qanunvericiliklə müəyyən edilmiş qaydada əmək veteranı adı almış şəxslərin 5)	müharibə əlillərinin",
  answer: "A) l;3;5",
  options: [
    "A) l;3;5",
    "B) 2;4;5",
    "C) 1;3;4",
    "D) 3;4;5"
  ]
},
  {
  numb: 11,
  question: "Müharibə əlillərinin mülkiyyətində olan torpaqlara görə torpaq vergisinin məbləği nə qədər azaldılır?",
  answer: "A) 10 manat",
  options: [
    "A) 10 manat",
    "B) 30 manat",
    "C) Azaldılmır",
    "D) 20 manat"
  ]
},
  {
  numb: 12,
  question: "1990-cı il yanvarın 20-də SSRİ qoşunlarının müdaxiləsi nəticəsində həlak olmuş şəxslərin valideyinlərinin və arvadlarının lərlərininj mülkiyyətində olan torpaqlara görə torpaq vergisi nə qədər azaldılır?",
  answer: "C) Azaldılmır",
  options: [
    "A) 10 manat",
    "B) 50 manat",
    "C) Azaldılmır",
    "D) 30 manat"
  ]
},
  {
  numb: 13,
  question: "Birinci və ikinci qrup əlillərin [müharibə əlillərindən başqa] mülkiyyətində olan tor¬paqlara görə torpaq vergisinin məbləği nə qədər azaldılır?",
  answer: "C) Azaldılmır",
  options: [    
    "A) 10 manat",
    "B) 50 manat",
    "C) Azaldılmır",
    "D) 30 manat"
  ]
},
  {
  numb: 14,
  question: "Aşağıdakı fiziki şəxslərdən kimlərin torpaq vergisi üzrə güzəştdən istifadə etmək hüququ vardır?",
  answer: "A)	Müharibə veteranlarının",
  options: [
    "A)	Müharibə veteranlarının",
    "B)	Təqaüdçülərin",
    "C) Əmək veteranlarının",
    "D) Büdcə təşkilatının işçilərinin"
  ]
},
  {
  numb: 15,
  question: "Aşağıdakı fiziki şəxslərdən kimlərin torpaq vergisi üzrə güzəştdən istifadə etmək hüququ vardır?",
  answer: "B)	1941—1945ci illərdə arxa cəbhədə fədakar əməyinə görə orden və medallar ilə təltif edilmiş şəxslərin;",
  options: [
    "A)	Təqaüdçülərin",
    "B)	1941—1945ci illərdə arxa cəbhədə fədakar əməyinə görə orden və medallar ilə təltif edilmiş şəxslərin;",
    "C)	"mək veteranlarının",
    "D)	Büdcə təşkilatının işçilərinin"
  ]
},
  {
  numb: 16,
  question: "Azərbaycan Respublikasının Prezidentinin qərarına əsasən yaradılan sənaye, yaxud texnologiyalar parklarının rezidenti olan hüquqi şəxslər və hüquqi şəxs yaratmadan sahibkarlıq fəaliyyətini həyata keçirən fiziki şəxslər qanunvericiliyə uyğun olaraq, sənaye və texnologiyalar parkında qeydiyyata alındıqları hesabat ilindən başlayaraq, sənaye və texnologiyalar parkında istifadə etdikləri torpaqlara görə neçə il müddətinə torpaq vergisini ödəməkdən azaddırlar?",
  answer: "D) 10 il",
  options: [
    "A)	Müddətsiz olaraq azaddırlar",
    "B)	Torpaq vergisini ödəməkdən azad deyillər",
    "C) 5 il",
    "D) 10 il"
  ]
},
  {
  numb: 17,
  question: "Azərbaycan Respublikasının Prezidentinin qərarına əsasən yaradılan sənaye, yaxud texnologiyalar parklarının idarəedici təşkilatı və ya operatoru sənaye, yaxud texnologiyalar parklarının ərazisində istifadə etdiyi torpaqlara görə neçə il müddətinə torpaq vergisini ödəməkdən azaddır",
  answer: "C) Müddətsiz olaraq azaddırlar",
  options: [
    "A)	7 il",
    "B)	Torpaq vergisini ödəməkdən azad deyillər",
    "C) Müddətsiz olaraq azaddırlar",
    "D) 5 il"
  ]
},
  {
  numb: 18,
  question: "İnvestisiya təşviqi sənədini almış hüquqi şəxs və fərdi sahibkar həmin sənədi aldığı tarixdən mülkiyyətində və ya istifadəsində olan müvafiq torpaqlara görə neçə il müddətinə torpaq vergisini ödəməkdən azaddır?",
  answer: "A)	7 il",
  options: [
    "A)	7 il",
    "B)	Torpaq vergisini ödəməkdən azad deyillər",
    "C) Müddətsiz olaraq azaddırlar",
    "D) 5 il
  ]
},
  {
  numb: 19,
  question: "KOB klaster şirkətləri KOB klaster şirkətlərinin reyestrinə daxil edildiyi tarixdən neçə il müddətinə mülkiyyətində və ya istifadəsində olan torpaqlara görə torpaq vergisini ödəməkdən azad edilirlər?",
  answer: "A)	7 il",
  options: [
    "A)	7 il",
    "B)	Torpaq vergisini ödəməkdən azad deyillər",
    "C) Müddətsiz olaraq azaddırlar",
    "D) 5 il
  ]
},
  {
  numb: 20,
  question: "Ödəmə qabiliyyətini itirmiş bankların rezolyusiyası və sağlamlaşdırma tədbirləri çərçivəsində müvafiq icra hakimiyyəti orqanının müəyyən etdiyi orqanının (qurumun) qərarına əsasən aldığı problemli aktivlərin (borcların) əvəzində əldə etdiyi və onun mülkiyyətində (balansında) olan torpağa görə neçə il müddətinə torpaq vergisini ödəməkdən azaddırlar?",
  answer: "A)	2019-cu il yanvarın 1-dən müddətsiz olaraq azaddırlar",
  options: [
    "A)	2019-cu il yanvarın 1-dən müddətsiz olaraq azaddırlar",
    "B)	Torpaq vergisini ödəməkdən azad deyillər",
    "C) 7 il",
    "D) 5 il
  ]
},
  {
  numb: 21,
  question: "Geoloji ayırma sənədi əsasında faydalı qazıntı yataqlarının (neft və qaz yataqları istisna olmaqla) axtarışı, qiymətləndirilməsi və kəşfiyyatı işlərinə cəlb edilən torpaq sahələrinə görə torpaq vergisi müvafiq təsdiqedici sənədlər (geoloji-kəşfiyyat işlərini həyata keçirən şəxsin podrat müqaviləsi, geoloji-kəşfiyyat planı, geoloji-kəşfiyyatla bağlı təqdim edilən hesabat) əsasında faydalı qazıntı yataqlarının axtarışı, qiymətləndirilməsi və kəşfiyyatı işlərinə başlanıldığı təqvim ili üzrə neçə faiz azaldılır?",
  answer: "C) 75%",
  options: [
    "A) 50%",
    "B) 70%",
    "C) 75%",
    "D) 100%"
  ]
},
  {
  numb: 22,
  question: "Eyni vergi ilində geoloji ayırma sənədi əsasında faydalı qazıntı yataqlarının (neft və qaz yataqları istisna olmaqla) axtarışı, qiymətləndirilməsi və kəşfiyyatı işlərinə cəlb edilən və istismar edilərək faydalı qazıntılar çıxarılan torpaq sahələrinə münasibətdə torpaq vergisi neçə faiz azaldılır?",
  answer: "C) Azaldılmır",
  options: [
    "A) 50%",
    "B) 30%",
    "C) Azaldılmır",
    "D) 75%"
  ]
},
  {
  numb: 23,
  question: "Torpaq vergisi hansı sənədlər əsasında müəyyənləşdirilir?",
  answer: "A)	Torpaq barəsində mülkiyyət və istifadə hüququnu təsdiq edən sənədlər əsasında",
  options: [
    "A)	Torpaq barəsində mülkiyyət və istifadə hüququnu təsdiq edən sənədlər əsasında",
    "B)	Torpaq barəsində sərəncamvermə hüququnu təsdiq edən sənədlər əsasında",
    "C)	Torpaq barəsində yalnız mülkiyyət hüququnu təsdiq edən sənədlər əsasında",
    "D)	Torpaq barəsində yalnız istifadə hüququnu təsdiq edən sənədlər əsasında"
  ]
},
  {
  numb: 24,
  question: "Tikililərin və qurğuların altında olan torpaqlara görə torpaq vergisi hansı qaydada tutulur?",
  answer: "A)	Ümumi qaydada tutulur",
  options: [
    "A)	Ümumi qaydada tutulur",
    "B)	Bu torpaqlara görə vergi tutulmur",
    "C)	Bu torpaqlara görə xüsusi vergitutma rejimi tətbiq edilir",
    "D)	Tikinti altında olan torpağa vergi dərəcəsi 2 dəfə artırılır"
  ]
},
  {
  numb: 1,
  question: "Воп",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 1,
  question: "Воп",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
  {
  numb: 27,
  question: "Ayrılıqda bir neçə hüquqi və ya fiziki şəxsin mülkiyyətində və ya istifadəsində olan tikililərin altında qalan və ya onlara xidmət üçün ayrılmış torpaq sahələrinə görə torpaq vergisi hansı qaydada hesablanır?",
  answer: "B)	Bu şəxslərə məxsus tikili sahələrə mütənasib surətdə hesablanır",
  options: [
    "A)	Bu şəxslərdən daha çox tikili sahəsinə malik şəxsə hesablanır",
    "B)	Bu şəxslərə məxsus tikili sahələrə mütənasib surətdə hesablanır",
    "C)	Bu şəxslərdən daha az tikili sahəsinə malik şəxsə hesablanır",
    "D)	Bu torpaq sahələrinə görə vergi hesablanmır"
  ]
},
  {
  numb: 28,
  question: "Torpaq vergisi hansı məbləğdə və nə vaxt ödənilir?",
  answer: "A)	Bərabər məbləğlərdə 15 avqust və 15 noyabr tarixlərindən gec olmayaraq",
  options: [
    "A)	Bərabər məbləğlərdə 15 avqust və 15 noyabr tarixlərindən gec olmayaraq",
    "B)	Bərabər məbləğlərdə 15 sentyabr və 15 oktyabr tarixlərindən gec olmayaraq",
    "C)	Bərabər məbləğlərdə 15 oktyabr və 15 noyabr tarixlərindən gec olmayaraq",
    "D)	Bərabər məbləğlərdə 15 avqust və 15 oktyabr tarixlərindən gec olmayaraq"
  ]
},
  {
  numb: 29,
  question: "Torpaq vergisi torpağın əvvəlki sahibi tərəfindən ödənilmədiyi hallarda, vergi müəyyən edilmiş ödəmə vaxtına kim tərəfindən ödənilir?",
  answer: "A)	Həmin torpağın sahibi tərəfindən",
  options: [
    "A)	Həmin torpağın sahibi tərəfindən",
    "B)	Torpağın əvvəlki sahibi tərəfindən",
    "C)	Bir hissəsi torpağın əvvəlki sahibi, qalan hissəsi isə yeni sahibi tərəfindən",
    "D)	Vergi heç kim tərəfindən ödənilmir"
  ]
},
  {
  numb: 30,
  question: "Aşağıdakı ifadələrdən hansılar doğrudur? 1)	müəssisələrin torpaq vergisi dövlət büdcəsinə ödənilir 2)	bələdiyyə müəssisələrinin torpaq vergisi yerli büdcəyə [bələdiyyə büdcəsinə] ödənilir 3)	fiziki şəxslərin torpaq vergisi yerli büdcəyə [bələdiyyə büdcəsinə] ödənilir 4)	rezident müəssisələrin və fiziki şəxslərin torpaq vergisi dövlət büdcəsinə ödənilir 5)	qeyri-rezident müəs və bələdiyyə müəssisələrinin torpaq vergisi dövlət büdcəsinə ödənilir ",
  answer: "A) l;3;5",
  options: [
    "A) l;3;5",
    "B) l;2;3",
    "C) 2;4;5",
    "D) 3;4;5"
  ]
},
  {
  numb: 31,
  question: "Fiziki şəxslərin sahibkarlıq fəaliyyəti məqsədləri üçün istifadə etdikləri torpaqlara, habelə hüquqi şəxslərə məxsus olan torpaqlara görə hesablanmış torpaq vergisinin məbləği nəyə aid edilir?",
  answer: "D)	Vergi Məcəlləsi ilə məhdudlaşdırılmayan gəlirdən çıxılmalara aid edilir",
  options: [
    "A)	Müəssisənin bölüşdürülməmiş mənfəəti hesabına silinir",
    "B)	Müəssisənin mənfəəti hesabına aid edilir",
    "C)	Bir hissəsi gəlirdən çıxılan xərclərə, digər hissəsi isə müəssisənin mənfəətinə aid edilir",
    "D)	Vergi Məcəlləsi ilə məhdudlaşdırılmayan gəlirdən çıxılmalara aid edilir"
  ]
},
];
