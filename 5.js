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
  numb: 1,
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
];
