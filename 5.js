// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Publik hüquqi şəxslərin Vergi Məcəlləsinin 164.1.48-ci maddəsində göstərilmiş işlərin görülməsi və xidmətlərin göstərilməsindən (həmin maddədə nəzərdə tutulan müddətdə) başqa digər ödənişli işlər görməsindən və xidmətlər göstərməsindən əldə olunan gəlirlərindən və faiz gəlirlərindən mənfəət vergisi necə tutulur?",
  answer: "D) Ümumi qaydada vergi tutulur",
  options: [
    "A)	Vergi tutulmur",
    "B)	10 faiz dərəcəsi ilə vergi tutulur",
    "C) Xərclər çıxılmadan vergi tutulur",
    "D) Ümumi qaydada vergi tutulur"
  ]
},
{
  numb: 2,
  question: "İpoteka kreditləşməsi və sahibkarların aldıqları kreditlərə təminat verilməsi sahəsində fəaliyyət göstərən Azərbaycan Respublikasının İpoteka və Kredit Zəmanət Fondu gəlirlərindən mənfəət vergisi tutulurmu?",
  answer: "B)	Vergi tutulmur",
  options: [
    "A)	20 faiz dərəcəsi ilə vergi tutulur",
    "B)	Vergi tutulmur",
    "C)	Əməliyyat xərcləri çıxıldıqdan sonra vergi tutulur",
    "D)	Xərclər çıxılmadan vergi tutulur"
  ]
},
{
  numb: 3,
  question: "Azərbaycan Respublikası Dövlət Neft Fondunun gəlirlərindən mənfəət vergisi hansı dərəcə ilə tutulur?",
  answer: "B)	Vergi tutulmur",
  options: [
    "A)	20 faiz dərəcəsi ilə vergi tutulur",
    "B)	Vergi tutulmur",
    "C)	Əməliyyat xərcləri çıxıldıqdan sonra vergi tutulur",
    "D)	Xərclər çıxılmadan vergi tutulur"
  ]
},
{
  numb: 4,
  question: "Əmanətlərin Sığortalanması Fondunun gəlirləri mənfəət vergisinə hansı dərəcə ilə cəlb olunur?",
  answer: "B)	Vergi tutulmur",
  options: [
    "A) 20 faiz",
    "B)	Vergi tutulmur",
    "C) 10 faiz ",
    "D) 22 faiz "
  ]
},
{
  numb: 5,
  question: "Azərbaycan Respublikasının Mərkəzi Bankının, onun qurumlarının gəlirlərindən mənfəət vergisi tutulurmu?",
  answer: "B)	Vergi tutulmur",
  options: [
    "A)	20 faiz dərəcəsi ilə vergi tutulur",
    "B)	Vergi tutulmur",
    "C)	gəlirlərinin 50 faizindən vergi tutulur",
    "D)	Xərclər çıxılmadan vergi tutulur"
  ]
},
{
  numb: 6,
  question: "Nizamnaməyə uyğun olaraq ayrılmış güzəştli kreditlər üzrə müvəkkil kredit təşkilatlan tərəfindən Fonda ödənilən faiz gəlirlərindən mənfəət vergisi tutulurmu?",
  answer: "D)	Vergi tutulmur",
  options: [
    "A)	20 faiz dərəcəsi ilə vergi tutulur",
    "B)	Xərclər çıxılmadan vergi tutulur",
    "C)	Gəlirlərinin 50 faizindən vergi tutulur",
    "D)	Vergi tutulmur"
  ]
},
{
  numb: 7,
  question: "Alınmış sığorta ödənişləri (həmin sığorta hadisəsi ilə əlaqədar zərərə aid edilən məbləğlərdən başqa) mənfəət vergisinə hansı dərəcə ilə cəlb olunur?",
  answer: " C) Vergi tutulmur ",
  options: [
    "A) 22 faiz ",
    "B) 10 faiz ",
    "C) Vergi tutulmur ",
    "D) 20 faiz "
  ]
},
{
  numb: 8,
  question: "Təhsil müəssisələrinin, o cümlədən sağlamlıq imkanları məhdud şəxslərin təhsil alması üçün yaradılmış xüsusi təhsil müəssisələrinin mənfəətindən vergi necə tutulur?",
  answer: "B)	Mənfəətin dividendlərin ödənilməsinə yönəldilən hissəsi istisna olmaqla, vergi tutulmur",
  options: [
    "A)	20 faiz",
    "B)	Mənfəətin dividendlərin ödənilməsinə yönəldilən hissəsi istisna olmaqla, vergi tutulmur",
    "C)	Mənfəətin dividendlərin ödənilməsinə yönəldilən hissəsindən vergi tutulur",
    "D)	Vergi tutulmur"
  ]
},
{
  numb: 9,
  question: "Azərbaycan Respublikasının qanunvericiliyinə uyğun olaraq müəssisələrin dövlət büdcəsinə olan vergi borclarının silinməsindən əldə olunan gəlir mənfəət vergisinə hansı dərəcə ilə cəlb olunur?",
  answer: "A) Vergi tutulmur ",
  options: [
    "A) Vergi tutulmur ",
    "B)	20 faiz",
    "C)	22 faiz",
    "D)	18 faiz"
  ]
},
{
  numb: 10,
  question: "Azərbaycan Respublikasının Prezidenti tərəfindən müəyyən edilmiş hallarda hüqu¬qi şəxsin qərarı ilə onun özünün və onun tam mülkiyyətində olan rezident törəmə müəssisə¬lərinin birinin balansından digərinin balansına əvəzsiz olaraq verilən aktivlərin dəyəri mən¬fəət vergisinə hansı dərəcə ilə cəlb olunur?",
  answer: "B) Vergi tutulmur ",
  options: [
    "A)	14 faiz",
    "B) Vergi tutulmur ",
    "C)	10 faiz",
    "D)	20 faiz"
  ]
},
{
  numb: 11,
  question: "Azərbaycan Respublikasının Prezidentinin qərarına əsasən bir hüquqi şəxsin balan-sından əvəzsiz olaraq digər hüquqi şəxsin balansına verilmiş əsas vəsaitlərin dəyəri mənfəət vergisinə hansı dərəcə ilə cəlb olunur?",
  answer: "D) Vergi tutulmur",
  options: [
    "A)	14 faiz",
    "B)	20 faiz",
    "C)	10 faiz",
    "D) Vergi tutulmur"
  ]
},
{
  numb: 12,
  question: "Neft-qaz ehtiyatlarının kəşfiyyatı, hasilatın pay bölgüsü, ixrac boru kəmərləri haq-qında və bu qəbildən olan digər sazişlərə uyğun olaraq əsas fondların, daşınar əmlakın və di¬gər aktivlərin hər hansı şəkildə həmin sazişlərdə Azərbaycan Respublikasını təmsil edən tər¬əfə təqdim edilməsi üzrə əməliyyatlar mənfəət vergisinə hansı dərəcə ilə cəlb olunur?",
  answer: "B) Vergi tutulmur ",
  options: [
    "A)	20 faiz",
    "B) Vergi tutulmur ",
    "C)	10 faiz",
    "D)	22 faiz"
  ]
},
{
  numb: 13,
  question: "Azərbaycan Respublikasının Prezidenti qərarına əsasən yaradılan sənaye, yaxud texnologiyalar parklarının idarəedici təşkilatının və ya operatorunun mənfəətinin sənaye, yaxud texnologiyalar parklarının infrastrukturunun tikintisinə və saxlanılmasına yönəldil¬miş hissəsi neçə il müddətinə mənfəət vergisindən azaddır?",
  answer: "B)	Müddətsiz olaraq mənfəət vergisindən azaddır",
  options: [
    "A)	Mənfəət vergisindən azad deyil",
    "B)	Müddətsiz olaraq mənfəət vergisindən azaddır",
    "C) 5 il",
    "D) 7 il"
  ]
},
{
  numb: 14,
  question: "Azərbaycan Respublikasının Prezidenti qərarına əsasən yaradılan sənaye, yaxud texnologiyalar parklarının rezidenti olan hüquqi şəxslərin sənaye, yaxud texnologiyalar parklarında fəaliyyətdən əldə etdikləri gəlir vergiyə necə cəlb olunur?",
  answer: "C) 10 il müddətinə azaddır ",
  options: [
    "A) Vergi tutulmur ",
    "B) Ümumi qaydada ",
    "C) 10 il müddətinə azaddır ",
    "D) 7 il müddətinə azaddır "
  ]
},
{
  numb: 15,
  question: "Kənd təsərrüfatı məhsullarının istehsalı ilə məşğul olan (o cümlədən, sənaye üsulu ilə) hüquqi şəxslərin bu fəaliyyətdən əldə etdikləri gəlirləri mənfəət vergisinə hansı qaydada cəlb olunur?",
  answer: "A)	2014-cü il yanvarın 1-dən 10 il müddətinə azaddır",
  options: [
    "A)	2014-cü il yanvarın 1-dən 10 il müddətinə azaddır",
    "B)	Cəlb olunmur",
    "C)	Əldə etdikləri gəlirlərin 50%-i mənfəət vergisinə cəlb olunur",
    "D)	Ümumi qaydada"
  ]
},
{
  numb: 16,
  question: "İnvestisiya təşviqi sənədini almış hüquqi şəxs əldə etdiyi gəlirin neçə faizini gəlir vergisinə cəlb etmir?",
  answer: "D) 50 faiz",
  options: [
    "A) 40 faiz",
    "B) 20 faiz",
    "C) 75 faiz",
    "D) 50 faiz"
  ]
},
{
  numb: 17,
  question: "İnvestisiya təşviqi sənədini almış hüquqi şəxsə əldə etdiyi gəlirə görə güzəşt hüququ hansı tarixdən və neçə il müddətinə verilir?",
  answer: "A)	Sənədi aldığı tarixdən 7 il müddətinə",
  options: [
    "A)	Sənədi aldığı tarixdən 7 il müddətinə",
    "B)	Sənədi aldığı ilin əvvəlindən 7 il müddətinə",
    "C)	Sənədi aldığı tarixdən 10 il müddətinə",
    "D)	Sənədi aldığı ildən yox, növbəti ilin əvvəlindən 7 il müddətinə"
  ]
},
{
  numb: 18,
  question: "Paylarının (səhmlərinin) 51 və daha artıq faizi birbaşa və ya dolayısı ilə dövlətə məxsus olan hüquqi şəxslər və dövlətin adından yaradılan publik hüquqi şəxslər istisna olmaqla, vergi ödəyicisinin hesabat ilinin mənfəətinin 10 faizindən çox olmayan hissəsinin Azərbaycan Respublikasının Nazirlər Kabineti tərəfindən müəyyən edilən meyarlara cavab verən təhsil, səhiyyə, idman və mədəniyyət sahəsində fəaliyyət göstərən müəssisə, idarə və təşkilatlara köçürülən hissəsindən vergi necə tutulur?",
  answer: "A)	2019-cü il yanvarın 1-dən 10 il müddətinə azaddır",
  options: [
    "A)	2019-cü il yanvarın 1-dən 10 il müddətinə azaddır",
    "B)	2019-cü il yanvarın 1-dən 5 il müddətinə azaddır",
    "C)	Müddətsiz azaddır",
    "D)	Ümumi qaydada"
  ]
},
{
  numb: 19,
  question: "Paylarının 51 və daha artıq faizi birbaşa və ya dolayısı ilə dövlətə məXSUS olan hüquqi Şəxslər və dövlətin adından yaradılan publik hüquqi şəxslər istisna olmaqla, vergi ödəyicisinin hesabat ilinin mənfəətinin 10 faizindən çox olmayan hissəsinin ictimai və sosial məqsədlər üçün yaradılmış fondlara köçürülən hissəsindən vergi necə tutulur?",
  answer: "B)	2021-ci il 1 yanvar tarixdən 8 il müddətinə azaddır",
  options: [
    "A)	2021-ci il 1 yanvar tarixdən 10 il müddətinə azaddır",
    "B)	2021-ci il 1 yanvar tarixdən 8 il müddətinə azaddır",
    "C)	Müddətsiz azaddır",
    "D)	Ümumi qaydada"
  ]
},
{
  numb: 20,
  question: "“Məşğulluq haqqında” Azərbaycan Respublikasının Qanununa uyğun olaraq Azərbaycan Respublikası Əmək və Əhalinin Sosial Müdafiəsi Nazirliyinin tabeliyində Daya- - ıqlı və Operativ Sosial Təminat Agentliyinin haqqı ödənilən ictimai işlərin təşkili ilə bağlı Aaliyyətdən əldə etdiyi gəlirdən vergi hansı qaydada tutulur?",
  answer: "B)	Vergi tutulmur",
  options: [
    "A)	Ümumi qaydada",
    "B)	Vergi tutulmur",
    "C)	Gəlirlərinin 50 faizi vergidən azaddır",
    "D)	gəlirlərinin 75 faizi vergidən azaddır"
  ]
},
{
  numb: 21,
  question: "Müvafiq icra hakimiyyəti orqanının müəyyən etdiyi orqan (qurum) tərəfindən lüəyyən olunmuş qaydada dövlət büdcəsinin vəsaiti hesabına ödənilən ixrac təşviqi vergiyə -ecə cəlb olunur?",
  answer: "D)	Vergidən azaddır",
  options: [
    "A)	Ümumi qaydada",
    "B)	Gəlirlərinin 75 faizi vergidən azaddırr",
    "C)	Gəlirlərinin 50 faizi vergidən azaddır",
    "D)	Vergidən azaddır"
  ]
},
{
  numb: 22,
  question: "Lotereya biletlərinin satıcısı ilə bağlanmış müqavilə əsasında və ya onun tapşırığı əsasında lotereya biletlərinin bütün mərhələlərdə agent qaydasında satışının həyata keçirilməsi üzrə göstərilən xidmətlərdən əldə olunan gəlirlər vergi necə tutulur?",
  answer: "D)	Vergidən azaddır",
  options: [
    "A)	Ümumi qaydada",
    "B)	Gəlirlərinin 75 faizi vergidən azaddırr",
    "C)	Gəlirlərinin 50 faizi vergidən azaddır",
    "D)	Vergidən azaddır"
  ]
},
  {
  numb: 23,
  question: "Əlilliyi olan şəxslərin qeyri-hökumət təşkilatlarına məxsus olan, işçilərinin ümumi sayının azı neçə faizi əlilliyi olan şəxslərdən ibarət olan istehsal müəssisələrinə mənfəət vergisindən 50 faiz güzəşt verilir?",
  answer: "D) 50 faizi",
  options: [
    "A) 30 faizi",
    "B) 25 faizi",
    "C) 75 faizi",
    "D) 50 faizi"
  ]
},
{
  numb: 24,
  question: "Əlilliyi olan şəxslərin qeyri-hökumət təşkilatlarına məxsus olan, işçilərinin ümumi sayının azı 50 faizi əlilliyi olan şəxslərdən ibarət olan istehsal müəssisələrinə mənfəət vergisindən neçə faiz güzəşt verilir?",
  answer: "B) 50 faizi ",
  options: [
    "A) 30 faizi ",
    "B) 50 faizi ",
    "C) 75 faizi ",
    "D) 25 faizi "
  ]
},
{
  numb: 25,
  question: "Pərakəndə satış qaydasında malların satışının həyata keçirilməsi üzrə ticarət fəaliyyəti və (və ya) ictimai iaşə fəaliyyəti ilə məşğul olan hüquqi şəxslər tərəfindən büdcəyə ödənilməli olan mənfəət vergisinin məbləği necə hesablanır?",
  answer: "C)	POS-terminal vasitəsilə nağdsız qaydada aparılan ödənişlərin (vergi orqanında uçotda olan şəxslər tərəfindən POS-terminal vasitəsilə aparılan ödənişlər istisna olmaqla) ümumi gəlirdəki xüsusi çəkisinə uyğun müəyyən edilən verginin 25 faizi həcmində azaldılır",
  options: [
    "A)	Ümumi qaydada",
    "B)	POS-terminal vasitəsilə nağdsız qaydada aparılan ödənişlərin ümumi gəlirdəki xüsusi çəkisinə uyğun müəyyən edilən verginin 25 faizi həcmində azaldılır",
    "C)	POS-terminal vasitəsilə nağdsız qaydada aparılan ödənişlərin (vergi orqanında uçotda olan şəxslər tərəfindən POS-terminal vasitəsilə aparılan ödənişlər istisna olmaqla) ümumi gəlirdəki xüsusi çəkisinə uyğun müəyyən edilən verginin 25 faizi həcmində azaldılır",
    "D)	POS-terminal vasitəsilə nağdsız qaydada aparılan ödənişlərin (vergi orqanında uçotda olan şəxslər tərəfindən POS-terminal vasitəsilə aparılan ödənişlər istisna olmaqla) ümumi gəlirdəki xüsusi çəkisinə uyğun müəyyən edilən verginin 75 faizi həcmində azaldılır"
  ]
},
{
  numb: 26,
  question: "Pərakəndə satış qaydasında malların satışının həyata keçirilməsi üzrə ticarət fəaliyyəti və (və ya) ictimai iaşə fəaliyyəti ilə məşğul olan hüquqi şəxslərə POSterminal vasitəsilə nağdsız qaydada aparılan ödənişlərə görə güzəşt neçə il müddətinə nəzərdə tutulub?",
  answer: "C) 2019-cu il yanvarın 1-dən 3 il müddətinə",
  options: [
    "A) 2019-cu il yanvarın 1-dən 5 il müddətinə",
    "B) 2019-cu il yanvarın 1-dən 10 il müddətinə",
    "C) 2019-cu il yanvarın 1-dən 3 il müddətinə",
    "D) Müddətsiz"
  ]
},
{
  numb: 27,
  question: "Qanunla müəyyən olunmuş qaydada gəlirlərin və xərclərin uçotunu aparan, ƏDV- nin məqsədləri üçün qeydiyyata alınmayan və əməliyyatlarının həcmi ardıcıl 12 aylıq dövrün istənilən ayında (aylarında) 200.000 manatadək rezident müəssisənin təsisçisi (payçısı) və yaxud səhmdarları olan hüquqi şəxslərin dividend gəlirləri vergiyə necə cəlb olunur?",
  answer: "D)	Vergidən azaddır",
  options: [
    "A)	Ümumi qaydada",
    "B)	dividend gəlirlərinin 75 faizi vergidən azaddır",
    "C)	dividend gəlirlərinin 50 faizi vergidən azaddır",
    "D)	Vergidən azaddır"
  ]
},
];
