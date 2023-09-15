// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Vergi orqanı ƏDV-nin məqsədləri üçün qeydiyyatı ləğv edilən şəxs barədə hansı tədbirləri görür?",
  answer: "A)	Ləğv edilən şəxsin adını, onun haqqında digər məlumatları ƏDV-nin ödəyicilərinin reyes-trindən silməli və verilmiş qeydiyyat bildirişini geri almalıdır.",
  options: [
    "A)	Ləğv edilən şəxsin adını, onun haqqında digər məlumatları ƏDV-nin ödəyicilərinin reyes-trindən silməli və verilmiş qeydiyyat bildirişini geri almalıdır.",
    "B)	Verilmiş qeydiyyat bildirişini geri almalıdır",
    "C)	Ləğv edilən şəxsin adını, onun haqqında digər məlumatları ƏDV-nin ödəyicilərinin reyes-trindən silməlidir",
    "D)	Heç bir tədbir görülmür."
  ]
},
  {
  numb: 2,
  question: "ƏDV üzrə vergitutma obyekti olan əməliyyatları göstərin: 1.	malların təqdim edilməsi, işlərin görülməsi, xidmətlərin göstərilməsi, Azərbaycan Res-publikası ərazisində istehsal olunan kənd təsərrüfatı məhsullarının pərakəndə satışı zamanı tətbiq edilən ticarət əlavəsi və vergi tutulan idxal vergitutma obyektidir. 2.	fövqəladə hallardan başqa, malların itməsi, əskik gəlməsi, xarab olması, tam amortizasiya olunmadan uçotdan silinməsi və ya oğurlanması; 3.	fövqəladə hallar nəticəsində malların itməsi, əskik gəlməsi, xarab olması, tam amortizasiya olunmadan uçotdan silinməsi və ya oğurlanması; 4.	ƏDV qeydiyyatının ləğvetmə vaxtı sahiblikdə qalan mallar 5.	Azərbaycan Resp. hüdudlarından kənarda xidmətlər göstərilməsi və ya işlər görülməsi",
  answer: "D) 1,2,4",
  options: [
    "A) 1,2,5",
    "B) 2,3,4",
    "C) 3,4,5",
    "D) 1,2,4"
  ]
},
  {
  numb: 3,
  question: "Aşağıda göstərilən əməliyyatlardan hansı ƏDV üzrə vergitutma obyekti sayılmır?",
  answer: "C)	Tranzit yük daşınması qaydasında malların Azərbaycan Respublikası ərazisinə buraxılması",
  options: [
    "A)	Vergi tutulan idxal əməliyyatları",
    "B) Barter əməliyyatları",
    "C)	Tranzit yük daşınması qaydasında malların Azərbaycan Respublikası ərazisinə buraxılması",
    "D)	Vergi ödəyicisinin haqqı ödənilməklə və ya əvəzsiz qaydada öz işçilərinə və digər şəxslərə mal verməsi, iş görməsi və ya xidmət göstərməsi"
  ]
},
  {
  numb: 4,
  question: "2022-ci il yanvarın 1-dən 3 il müddətində kənd təsərrüfatı məhsullarının (yerli və xarİCİ mənşəli) topdan və pərakəndə satışı zamanı vergitutma obyekti nədir?",
  answer: "B)	Ticarət əlavəsi",
  options: [
    "A)	Ümumi dövriyə",
    "B)	Ticarət əlavəsi",
    "C)	Vergi tutulan dövriyyədən hesablanan vrgi",
    "D)	Vergi tutulan dövriyyədən hesablanan verginin məbləği ilə Vergi Məcəlləsinin müddəala-rına uyğun olaraq verilən elektron qaimə- fakturalara və ya idxalda ƏDV-nin ödənildiyini göstərən sənədlərə müvafiq surətdə əvəzləşdirilməli olan verginin məbləği arasındakı fərq"
  ]
},
  {
  numb: 5,
  question: "Aşağıdakı hansı mallar ƏDV-nin məqsədləri üçün idxal malları hesab edilmir? 1. tranzit yük daşınması qaydasında, müvəqqəti idxal şəklində Azərbaycan Respublikası ərazisinə buraxılan mallar 2. gömrük qanunvericiliyinə uyğun olaraq daxili istehlak üçün idxal edilmiş və ya qəbul olunmuş sayılmayan mallar 3. müstəqil sahibkarlıq fəaliyyəti və ya hüquqi şəxs yaratmadan birgə sahibkarlıq fəaliyyəti çərçivəsində göndərilən mallar 4. vergidən azad edilən idxal istisna edilməklə idxal edilən mallar",
  answer: "A) 1,2",
  options: [
    "A) 1,2",
    "B) l,3",
    "C) 1,4",
    "D) 2,3"
  ]
},
{
  numb: 6,
  question: "ƏDV tutulan əməliyyatı göstərin:",
  answer: "C)	Vergi ödəyicisinin haqqı ödənilməklə və ya əvəzsiz qaydada öz işçilərinə və digər şəxslərə mal verməsi, iş görməsi və ya xidmət göstərməsi",
  options: [
    "A)	Tutulan məbləğlər hədlərində dövlət hakimiyyəti, yerli özünü idarəetmə və digər səlahiyyətli orqanların tutduğu dövlət rüsumu, icazə haqları, yığımlar və onların tutulması müqabilində göstərdiyi xidmətlər;",
    "B)	Kütləvi informasiya vasitələri məhsullarının alqı-satqısmın bütün növləri üzrə dövriyyələr, mətbu kütləvi informasiya vasitələri məhsulları istehsalı ilə bağh redaksiya, nəşriyyat və poliqrafiya fəaliyyəti",
    "C)	Vergi ödəyicisinin haqqı ödənilməklə və ya əvəzsiz qaydada öz işçilərinə və digər şəxslərə mal verməsi, iş görməsi və ya xidmət göstərməsi",
    "D)	Azərbaycan Respublikası Mərkəzi Bankının və Azərbaycan Respublikasının Dövlət Neft Fondunun qanunvericiliklə nəzərdə tutulmuş vəzifələrinin yerinə yetirilməsi ilə bağlı mal idxalı, iş görülməsi və xidmət göstərilməsi"
  ]
},
  {
  numb: 7,
  question: "Vergi ödəyicisi malları (işləri, xidmətləri) ƏDV-ni ödəməklə əldə edirsə və müvafiq əvəzləşdirmə alırsa və ya almaq hüququna malikdirsə, belə mallardan (işlərdən, xidmətlər¬dən) qeyri-kommersiya məqsədləri üçün istifadə edilməsi, fövqəladə hallardan və qanunvericiliklə müəyyən edilmiş təbii itki normaları daxilində zayolmadan əmələ gələn itkilərdən, təbii itki normaları daxilində xarabolmalar və bu kimi əskikgəlmələrdən başqa başqa malların itməsi, əskik gəlməsi, xarab olması, tam amortizasiya olunmadan uçotdan silinməsi və ya oğurlanması vergi tutulan əməliyyat sayılırmı?",
  answer: "B)	Vergi tutulan əməliyyat sayılır",
  options: [
    "A)	Vergi tutulan əməliyyat sayılmır",
    "B)	Vergi tutulan əməliyyat sayılır",
    "C)	Xarab olması və oğurlanmasından başqa, hamısı vergi tutulan əməliyyat sayılır",
    "D)	Qeyri-kommersiya məqsədləri üçün istifadə ediləndən başqa, hamısı vergi tutulan əməliyyat sayılır"
  ]
},
{
  numb: 8,
  question: "Vergi ödəyicisinin qeydiyyatı ləğv edilirsə, ləğvetmə vaxtı onun sahibliyində qalan mallar əlavə dəyər vergisinə cəlb edilirmi?",
  answer: "C)	Əlavə dəyər vergisinə cəlb edilir",
  options: [
    "A)	Əlavə dəyər vergisinə cəlb edilmir",
    "B)	Əlavə dəyər vergisinə mal qalığının 50 faizi cəlb edilir",
    "C)	Əlavə dəyər vergisinə cəlb edilir",
    "D)	Əlavə dəyər vergisinə qiymət arasındakı fərq cəlb edilir"
  ]
},
{
  numb: 9,
  question: "Vergi ödəyicisinin qeydiyyatı ləğv edilirsə, onun sahibliyində qalan mallar nə vaxt vergi tutulan əməliyyat çərçivəsində təqdim edilən mallar kimi qiymətləndirilir?",
  answer: "C)	Qeydiyyatın ləğv edildiyi vaxtdan",
  options: [
    "A)	Qeydiyyatın ləğv edildiyi aydan sonrakı ayın 1 -dən",
    "B)	Qeydiyyatın ləğv edildiyi rübdən sonra gələn ayın 1 -dən",
    "C)	Qeydiyyatın ləğv edildiyi vaxtdan",
    "D)	Vergi tutulan əməliyyat çərçivəsində təqdim edilən mal kimi sayılmır"
  ]
},
{
  numb: 10,
  question: "Vergi ödəyicisinin qeydiyyatı ləğv edilirsə, ləğvetmə vaxtı onun sahibliyində qalan malların hansı hissəsi əlavə dəyər vergisinə cəlb edilmir?",
  answer: "A)	Malların hamısı əlavə dəyər vergisinə cəlb edilir",
  options: [
    "A)	Malların hamısı əlavə dəyər vergisinə cəlb edilir",
    "B)	Əlavə dəyər vergisinə mal qalığının 50 faizi cəlb edilir",
    "C)	Əlavə dəyər vergisinə cəlb edilmir",
    "D)	Əlavə dəyər vergisinə qiymət arasındakı fərq cəlb edilir"
  ]
},
{
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
  numb: 6,
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
