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
  numb: 11,
  question: "Malları ƏDV-yə cəlb edilən əməliyyatlar nəticəsində əldə edən, lakin bu malları əldə edərkən ƏDV-ni əvəzləşdirməyə hüququ olmayan şəxsin həmin malları göndərməsinə vergi tutulan əməliyyat kimi baxıla bilərmi?",
  answer: "A)	Vergi tutulan əməliyyat kimi baxılmır",
  options: [
    "A)	Vergi tutulan əməliyyat kimi baxılmır",
    "B)	Vergi tutulan əməliyyat kimi baxılır",
    "C)	ƏDV-dən qismən azad edilən əməliyyat kimi baxılır",
    "D)	Sıfır (0) dərəcə ilə ƏDV-yə cəlb edilən əməliyyat kimi baxıhr"
  ]
},
{
  numb: 12,
  question: "ƏDV ödəyicisi kimi qeydiyyatdan keçməyən şəxsin apardığı əməliyyatlar hansı hal¬da ƏDV üzrə vergitutma obyekti sayılır?",
  answer: "A)	Həmin şəxsin təqdim etdiyi mallara ƏDV tətbiq etməklə apardığı əməliyyatları",
  options: [
    "A)	Həmin şəxsin təqdim etdiyi mallara ƏDV tətbiq etməklə apardığı əməliyyatları",
    "B)	Həmin şəxs heç vaxt ƏDV hesablamır",
    "C)	Həmin şəxs malları ƏDV cəlb edilən əməliyyatlar nəticəsində əldə etdikdə",
    "D)	Həmin şəxs malları ƏDV azad olunan əməliyyatlar nəticəsində əldə etdikdə"
  ]
},
{
  numb: 13,
  question: "Vergi Məcəlləsinin 164.1.15, 164.1.16 və 164.2-ci 164.1.11-ci, 164.1.15-ci, 164.1.16-cı və 164.1.20-164.1.25-ci maddələrinə uyğun olaraq ƏDV-dən azad edilən idxal mallarının Azərbaycan Resp. ərazisində təqdim edilməsi hansı halda vergi tutulan əməliyyat sayılır?",
  answer: "B)	Bütün hallarda",
  options: [
    "A)	Malların dəyəri 200.000 manatdan çox olduqda",
    "B)	Bütün hallarda",
    "C)	Malların dəyəri 200.000 manatdan az olduqda",
    "D)	ƏDV-dən azad edilən idxal mallarının Azərbaycan Respublikasının ərazisində təqdim edilməsi vergi tutulan əməliyyat sayılmır."
  ]
},
{
  numb: 14,
  question: "Hansı halda müəssisənin bir vergi ödəyicisi tərəfindən digər vergi ödəyicisinə təq¬dim edilməsi vergi tutulan əməliyyat sayılmır?",
  answer: "A)	Təqdimetmə bir əməliyyat çərçivəsində aparıldıqda",
  options: [
    "A)	Təqdimetmə bir əməliyyat çərçivəsində aparıldıqda",
    "B)	Təqdimetmə ayrı-ayrı əməliyyatlar çərçivəsində həyata keçirildikdə",
    "C)	Heç bir halda",
    "D)	Vergi ödəyicisinin istəyi ilə"
  ]
},
{
  numb: 15,
  question: "Müəssisənin bir əməliyyat çərçivəsində bir vergi ödəyicisi tərəfindən digər vergi ödəyicisinə təqdim edilməsi müəssisəni təqdim edən şəxsi əvvəlki vergi dövrləri üçün vergi¬ləri, faizləri və ya maliyyə sanksiyalarını ödəməkdən azad edirmi?",
  answer: "A)	Azad etmir",
  options: [
    "A)	Azad etmir",
    "B)	Müəssisəni təqdim edən şəxsi əvvəlki vergi dövrləri üçün yalnız vergiləri ödəməkdən azad edir",
    "C)	Müəssisəni təqdim edən şəxsi əvvəlki vergi dövrləri üçün yalnız faizləri və ya maliyyə sanksiyalarını ödəməkdən azad edir",
    "D)	Bütün hallarda azad edir"
  ]
},
{
  numb: 16,
  question: "Müəssisənin bir əməliyyat çərçivəsində bir vergi ödəyicisindən digər vergi ödəyi¬cisinə təqdim edilərkən bu əməliyyatın ƏDV tutulan əməliyyat sayılmaması üçün təqdim edən və alan tərəflər vergi orqanına neçə gün ərzində müraciət etməlidirlər?",
  answer: "B)	Təqdim edilmədən sonra 10 gündən gec olmayaraq",
  options: [
    "A)	Təqdim edilmədən sonra 15 gündən gec olmayaraq",
    "B)	Təqdim edilmədən sonra 10 gündən gec olmayaraq",
    "C)	Təqdim edilmədən sonra 5 gündən gec olmayaraq",
    "D)	Vergi orqanına müraciətin edilməsinə ehtiyac yoxdur"
  ]
},
{
  numb: 17,
  question: "Hansı halda hüquqi və fiziki şəxslər tərəfindən daşınmaz əmlakların, habelə əmlak kompleksi şəklində müəssisələrin dövlət orqanlarına (qurumlarına) verilməsi vergi tutulan əməliyyat sayılmır?",
  answer: "C) Əvəzsiz olaraq verildikdə",
  options: [
    "A) Heç bir halda",
    "B) Nazirlər kabinetinin qərarı ilə verildikdə",
    "C) Əvəzsiz olaraq verildikdə",
    "D) Ödəyici iflas etdikdə"
  ]
},
{
  numb: 18,
  question: "ƏDV-nin məqsədlə üçün vergi tutulan əməliyyatın dəyəri dedikdə nə başa düşülür?",
  answer: "B)	Vergi ödəyicisinin müştəridən və ya hər hansı digər şəxsdən aldığı, yaxud almağa hüququ olduğu haqqın ƏDV nəzərə alınmadan məbləği [hər hansı rüsumlar, vergilər və ya başqa yığımlar da daxil olmaqla]",
  options: [
    "A)	Təqdim edilən mahn [işin, xidmətin] ƏDV nəzərə alınmaqla dəyəri",
    "B)	Vergi ödəyicisinin müştəridən və ya hər hansı digər şəxsdən aldığı, yaxud almağa hüququ olduğu haqqın ƏDV nəzərə alınmadan məbləği [hər hansı rüsumlar, vergilər və ya başqa yığımlar da daxil olmaqla]",
    "C)	Təqdim edilən malın [işin, xidmətin] ƏDV nəzərə alınmaqla, hər hansı vergi, rüsum və yığımlar nəzərə alınmadan dəyəri",
    "D)	Təqdim edilən malın [işin, xidmətin] alıcı tərəfindən ödənilən dəyəri"
  ]
},
{
  numb: 19,
  question: "Vergi ödəyicisi vergi tutulan əməliyyatın əvəzində mal, iş və ya xidmət alırsa, vergi tutulan əməliyyatın dəyəri necə müəyyənləşdirilir?",
  answer: "A)	Malların, işlərin və ya xidmətlərin ƏDV nəzərə alınmadan bazar dəyəri [hər hansı rüsumlar, vergilər və ya başqa yığımlar da daxil olmaqla) əsasında",
  options: [
    "A)	Malların, işlərin və ya xidmətlərin ƏDV nəzərə alınmadan bazar dəyəri [hər hansı rüsumlar, vergilər və ya başqa yığımlar da daxil olmaqla) əsasında",
    "B)	Malların, işlərin və ya xidmətlərin topdansatış bazar qiyməti əsasında",
    "C)	Malların, işlərin və ya xidmətlərin vergi ödəyiciləri arasında razılaşdırılmış qiymətləri əsasında",
    "D)	Malların, işlərin və ya xidmətlərin vergi orqanları tərəfindən müəyyənləşdirilən qiyməti əsasında"
  ]
},
{
  numb: 20,
  question: "Məcəllənin 159.4-cü, 159.5-ci və 159.6-cı maddələrində göstərilən hallarda vergi tutulan əməliyyatın dəyəri necə müəyyən olunur?",
  answer: "D)	Təqdim edilmiş malların, görülmüş işlərin və ya göstərilmiş xidmətlərin ƏDV nəzərə alın-madan formalaşan dəyəri (hər hansı rüsumlar, vergilər və ya başqa yığımlar da daxil olmaqla) əsasında",
  options: [
    "A)	Malların, işlərin və ya xidmətlərin ƏDV nəzərə alınmadan bazar dəyəri [hər hansı rüsumlar, vergilər və ya başqa yığımlar da daxil olmaqla) əsasında",
    "B)	Təqdim edilmiş malların, görülmüş işlərin və ya göstərilmiş xidmətlərin ƏDV daxil formalaşan dəyəri (hər hansı rüsumlar, vergilər və ya başqa yığımlar da daxil olmaqla) əsasında",
    "C)	Malların, işlərin və ya xidmətlərin vergi ödəyiciləri arasında razılaşdırılmış qiymətləri əsasında",
    "D)	Təqdim edilmiş malların, görülmüş işlərin və ya göstərilmiş xidmətlərin ƏDV nəzərə alın-madan formalaşan dəyəri (hər hansı rüsumlar, vergilər və ya başqa yığımlar da daxil olmaqla) əsasında"
  ]
},
{
  numb: 21,
  question: "ƏDV məqsədləri üçün vergi tutulan idxalın dəyəri necə müəyyənləşdirilir?",
  answer: "A)	Malların gömrük qanunvericiliyinə uyğun olaraq müəyyən edilən gömrük dəyəri və mal¬lar gətirilərkən ödənilməli olan rüsumlar və vergilər [ƏDV və yol vergisi nəzərə alınmadan] əsasında",
  options: [
    "A)	Malların gömrük qanunvericiliyinə uyğun olaraq müəyyən edilən gömrük dəyəri və mal¬lar gətirilərkən ödənilməli olan rüsumlar və vergilər [ƏDV və yol vergisi nəzərə alınmadan] əsasında",
    "B)	Malların idxalı zamanı idxal sənədlərində göstərilən qiymətlər əsasında",
    "C)	Vergi ödəyicisinin bəyan etdiyi qiymətlər əsasında",
    "D)	Malların gömrük qanunvericiliyinə uyğun olaraq müəyyən edilən gömrük dəyəri və mallar gətirilərkən ödənilməli olan rüsumlar və vergilər nəzərə alınmadan"
  ]
},
{
  numb: 22,
  question: "Aşağıdakılardan hansı doğru olmayanlara aid deyil?",
  answer: "D)	Vergi Məcəlləsinin 171.2-ci maddəsinə uyğun olaraq idxalın bir hissəsi kimi sayılan xidmət göstərildikdə, onun dəyəri malların Vergi Məcəlləsinin 162.1-ci maddəsində göstərilən dəyərinə əlavə edilir.",
  options: [
    "A)	Vergi Məcəlləsinin 171.2-ci maddəsinə uyğun olaraq idxalın bir hissəsi kimi sayılan xidmət göstərildikdə, onun dəyəri malların Vergi Məcəlləsinin 162.1-ci maddəsində göstərilən dəyərinə əlavə edilmir.",
    "B)	Vergi Məcəlləsinin 171.2-ci maddəsinə uyğun olaraq idxalın bir hissəsi kimi sayılan xidmət göstərildikdə, onun dəyəri malların bazar dəyərinə əlavə edilir",
    "C)	Vergi Məcəlləsinin 171.2-ci maddəsinə uyğun olaraq idxahn bir hissəsi kimi sayılan xidmət göstərildikdə, onun dəyəri malların faktura dəyərinə əlavə edilir",
    "D)	Vergi Məcəlləsinin 171.2-ci maddəsinə uyğun olaraq idxalın bir hissəsi kimi sayılan xidmət göstərildikdə, onun dəyəri malların Vergi Məcəlləsinin 162.1-ci maddəsində göstərilən dəyərinə əlavə edilir."
  ]
},
{
  numb: 23,
  question: "Aşağıda göstərilən hansı hallarda ƏDV üzrə vergi tutulan dövriyyələr dəqiqləşdiri¬lir: 1.	vergi ödəyicisinin təşəbbüsü ilə istənilən halda; 2.	əməliyyatın xarakteri dəyişdikdə; 3.	vergi tutulan dövriyyələr dəqiqləşdirilmir; 4.	qiymətlərin aşağı düşməsi və ya hər hansı digər səbəbdən əməliyyat üçün razılaşdırılmış kompensasiya dəyişdikdə; 5.	əməliyyat tam və ya qismən ləğv edildikdə, o cümlədən mal tam və qismən geri qaytarıl-dıqda.",
  answer: "C) 2,4,5",
  options: [
    "A) 1,2,3",
    "B) 3,4,5",
    "C) 2,4,5",
    "D) 1,3,4"
  ]
},
{
  numb: 24,
  question: "Aşağıda verilən hansı hallarda ƏDV üzrə vergi tutulan dövriyyələr dəqiqləşdirilir: 1.	vergi ödəyicisi elektron qaimə-faktura verdikdən sonra vergi tutulan dövriyyənin dəqiqləşdirilməsi üçün əsas verən hallar üzə çıxdıqda və bu cür dəqiqləşdirmə qanunvericiliyə müvafiq olaraq aparıldıqda; 2.	vergi ödəyicisi elektron qaimə-faktura verdikdən sonra vergi tutulan dövriyyənin dəqiqləşdirilməsi üçün əsas verən hallar üzə çıxdıqda istənilən halda; 3.	ƏDV üçün elektron qaimə-faktura vermiş və ƏDV-nin məbləğini həmin elektron qaimə- fakturada düzgün göstərməmişdirsə; 4.	ƏDV-nin bəyannaməsində verginin məbləğini düzgün göstərməmişdirsə ; 5.	vergi tutulan dövriyyələr dəqiqləşdirilmir.",
  answer: "D) 1,3,4",
  options: [
    "A) 1,2,3",
    "B) 3,4,5",
    "C) 2,4,5",
    "D) 1,3,4"
  ]
},
{
  numb: 25,
  question: "ƏDV üzrə vergi tutulan dövriyyənin dəqiqləşdirilməsi nə vaxt aparılır ?",
  answer: "B)	Qiymətləndirmə bazasında dəyişikliyin baş verdiyi vaxt",
  options: [
    "A)	Vergi ödəyicisinin təşəbbüsü ilə istənilən vaxt",
    "B)	Qiymətləndirmə bazasında dəyişikliyin baş verdiyi vaxt",
    "C)	Vergi tutulan dövriyyə dəqiqləşdirilmir",
    "D)	Vergi orqanı tərəfindən müəyyən edilən vaxt"
  ]
},
{
  numb: 26,
  question: "ƏDV-dən azad olunan əməliyyatları göstərin: 1.	milli və ya xarici valyutanın [numizmatika məqsədlərindən başqa], həmçinin qiymətli ka-ğızların göndərilməsi və ya idxal edilməsi; 2.	kütləvi informasiya vasitələrinin reklam xidmətləri; 3.	hüquqi şəxslərin əmlakının icarəyə verilməsindən alınan icarə haqları; 4.	idxal olunan əmlak istisna olmaqla, müəssisənin nizamnamə fonduna [kapitalına] pay şəklində hər hansı əmlakın qoyulması; 5.	dəfh və qəbiristanlığın mərasim xidmətləri.",
  answer: "D) 1,3,5",
  options: [
    "A) 1,2,3",
    "B) 3,4,5",
    "C) 1,4,5",
    "D) 1,3,5"
  ]
},
{
  numb: 27,
  question: "66.	Malların təqdim edilməsinin, işlər görülməsinin və xidmətlər göstərilməsinin aşağı¬dakı hansı növlərindən ƏDV tutulmur: 1.	özəlləşdirilmə qaydasında dövlət müəssisəsindən satın alınan əmlakın dəyəri; 2.	vergi ödəyicisinin haqqı ödənilməklə və ya əvəzsiz qaydada öz işçilərinə və digər şəxslərə mal verməsi, iş görməsi və ya xidmət göstərməsi, 3.	dövlət əmlakının icarəyə verilməsindən alınan icarə haqqının büdc. ödənilm. olan hissəsi; 4.	barter əməliyyatları; 5.	maliyyə xidmətlərinin göstərilməsi;",
  answer: "D) 1,3,5",
  options: [
    "A) 1,2,3",
    "B) 3,4,5",
    "C) 1,4,5",
    "D) 1,3,5"
  ]
},
{
  numb: 28,
  question: "Aşağıdakı əməliyyatlardan hansı ƏDV-dən azad deyil?",
  answer: "A)	Mənzil tikintisi fəaliyyəti",
  options: [
    "A)	Mənzil tikintisi fəaliyyəti",
    "B)	Hüquqi şəxsin iştirak paylarının və ya səhmlərinin təqdim edilməsi",
    "C)	Azərbaycan Respublikasının Dövlət Neft Fondunun aktivlərində yerləşdirilməsi üçün nəzərdə tutulan qızılın idxalı",
    "D)	Xüsusi notariusların aldığı haqlar (notariat hərəkətlərinin aparılmasına və notariat hərəkətləri ilə əlaqədar göstər xidmətə görə) və onların tutulması müqabilində göstərdiyi xidmətlər"
  ]
},
{
  numb: 29,
  question: "Dövlət əmlakının icarəyə verilməsindən alınan icarə haqqı hansı qaydada ƏDV-yə cəlb olunur?",
  answer: "A)	İcarə haqqının dövlət büdcəsinə ödənilməli olan hissəsi ƏDV-dən azaddır",
  options: [
    "A)	İcarə haqqının dövlət büdcəsinə ödənilməli olan hissəsi ƏDV-dən azaddır",
    "B)	İcarə haqqının 30 faizi ƏDV-yə cəlb olunur",
    "C)	İcarə haqqının tam məbləği ƏDV-yə cəlb olunur",
    "D)	İcarə haqqının tam məbləği ƏDV-dən azaddır"
  ]
},
{
  numb: 30,
  question: "İnvestisiya fondlarının idarə olunması ilə bağlı xidmətlər hansı faiz dərəcəsi ilə ver-giyə cəlb olunur?",
  answer: "C) ƏDV-dən azaddır",
  options: [
    "A) Sıfır [0] dərəcə",
    "B) 18 faiz",
    "C) ƏDV-dən azaddır",
    "D) 20 faiz"
  ]
},
{
  numb: 31,
  question: "Pul-kredit əməliyyatlarında hər hansı girov və ya lombard təminatının təqdim edilməsi və qaytarılması əlavə dəyər vergisinə hansı qaydada cəlb olunur?",
  answer: "A)	Əlavə dəyər vergisindən azaddır",
  options: [
    "A)	Əlavə dəyər vergisindən azaddır",
    "B)	Sıfır [0] dərəcə ilə əlavə dəyər vergisinə cəlb olunur",
    "C)	Əməliyyatın 50 faizi vergiyə cəlb olunur",
    "D)	Əməliyyatın tam məbləği vergiyə cəlb olunur"
  ]
},
{
  numb: 32,
  question: "Aşağıdakı şəxslərdən hansıları ƏDV-ni ödəməkdən azaddırlar?",
  answer: "C)	Sığorta fəaliyyəti ilə məşğul olan şəxslər",
  options: [
    "A)	Azərbaycan Respublikasına ƏDV tutulan malları idxal edən şəxslər",
    "B)	ƏDV-nin məqsədləri üçün qeydiyyatdan keçmədən Azərbaycan Respublikasının ərazisin¬də vergi agenti üçün iş görən və ya xidmət göstərən qeyri-rezident şəxslər",
    "C)	Sığorta fəaliyyəti ilə məşğul olan şəxslər",
    "D)	Aksizli malları istehsal edən şəxslər"
  ]
},
{
  numb: 33,
  question: "Xarici valyutanın numizmatika məqsədləri üçün idxal edilməsi əlavə dəyər vergisinə hansı qaydada cəlb olunur?",
  answer: "C) 18 faiz dərəcə ilə vergiyə cəlb olunur",
  options: [
    "A)	15 faiz dərəcə ilə vergiyə cəlb olunur",
    "B)	sıfır [0] dərəcə ilə vergiyə cəlb olunur",
    "C) 18 faiz dərəcə ilə vergiyə cəlb olunur",
    "D) ƏDV-dən azaddır"
  ]
},
{
  numb: 34,
  question: "Azərbaycan Respublikasının Mərkəzi Bankının və Azərbaycan Respublikasının Dövlət Neft Fondunun aktivlərində yerləşdirilməsi üçün nəzərdə tutulan qızılın idxal edilməsi əlavə dəyər vergisinə hansı qaydada cəlb olunur?",
  answer: "C)	ƏDV-dən azaddır",
  options: [
    "A)	18 faiz dərəcə ilə vergiyə cəlb olunur",
    "B)	Sıfır [0] dərəcə ilə vergiyə cəlb olunur",
    "C)	ƏDV-dən azaddır",
    "D)	15 faiz dərəcə ilə vergiyə cəlb olunur"
  ]
},
{
  numb: 35,
  question: "Müəssisənin nizamnamə fonduna (kapitalına) pay şəklində hər hansı əmlakın qoyulması (əmlakın pay şəklində qoyuluşu, onun müqabilində bilavasitə digər əmlakın əldə edilməsi ilə əlaqədar olmadıqda) ƏDV-yə hansı dərəcə ilə cəlb olunur?",
  answer: "D) ƏDV-dən azaddır",
  options: [
    "A) sıfır (0) dərəcə ilə",
    "В) 18 faiz dərəcə ilə",
    "C) 20 faiz dərəcə ilə",
    "D) ƏDV-dən azaddır"
  ]
},
{
  numb: 36,
  question: "Tutulan məbləğlər hədlərində dövlət hakimiyyəti, maliyyə bazarlarına nəzarət, yerli özünü idarəetmə və digər səlahiyyətli orqanların tutduğu dövlət rüsumu, icazə haqları, yığımlar, xüsusi notariusların aldığı haqlar (notariat hərəkətlərinin aparılmasına və notariat hərəkətləri ilə əlaqədar göstərilən xidmətə görə) və onların tutulması müqabilində göstərdiyi xidmətlər ƏDV-yə hansı dərəcə ilə cəlb olunur?",
  answer: "D) ƏDV-dən azaddır",
  options: [    
    "A) sıfır (0) dərəcə ilə",
    "В) 18 faiz dərəcə ilə",
    "C) 20 faiz dərəcə ilə",
    "D) ƏDV-dən azaddır"
  ]
},
{
  numb: 37,
  question: "Malların təqdim edilməsinin, işlərin görülməsinin və xidmətlərin göstərilməsinin aşağıdakı hansı növlərindən ƏDV tutulmur? 1.	siyahısı müvafiq icra hakimiyyəti orqanının müəyyən etdiyi orqan (qurum) tərəfindən təsdiq edilən kütləvi informasiya vasitələri məhsullarının və kitabların (elektron kitablar istisna olmaqla) idxalı və satıçı 2.	dərslik komplektlərinin idxalı və satışı, həmin malların (məhsulların) istehsalı (nəşri) ilə bağlı rulon və ya vərəqə şəklində kağızın idxalı və satışı 3.	mətbu kütləvi informasiya vasitələri məhsullarının və kitabların (o cümlədən elektron kitabların), habelə dərslik komplektlərinin istehsalı ilə bağlı redaksiya, nəşriyyat və poliqrafiya fəaliyyəti (reklam xidmətləri istisna olmaqla); 4.	Azərbaycan Respub. Mərkəzi Bankının və Dövlət Neft Fondunun qanunvericiliklə nəzərdə tutulmuş vəzifələrinin yerinə yetirilməsi ilə bağh mal idxalı, iş görülməsi və xidmət göstərilməsi 5.	mətbu kütləvi informasiya vasitələri məhsullarının və kitabların (o cümlədən elektron kitabların), habelə dərslik komplektlərinin istehsalı ilə bağh redaksiya, nəşriyyat və poliqrafiya fəaliyyəti (reklam xidmətləri də daxil olmaqla);",
  answer: "A) 1,2,3,4",
  options: [
    "A) 1,2,3,4",
    "B) 2,3,4,5",
    "C) 1,2,4,5",
    "D) 1,3,4,5"
  ]
},
{
  numb: 38,
  question: "Azərbaycan Respublikasına, o cümlədən onu təmsil edən hüquqi şəxslərə neft-qaz ehtiyatlarının kəşfiyyatı, işlənməsi və hasilatın pay bölgüsü, ixrac boru kəmərləri haqqında və bu qəbildən olan digər sazişlərə uyğun olaraq verilməsi nəzərdə tutulan əsas fondların, daşınan əmlakın və digər aktivlərin Azərbaycan Respublikası Dövlət Neft Fonduna hər hansı şəkildə təqdim edilməsi üzrə əməliyyatlar hansı faiz dərəcəsi ilə ƏDV-yə cəlb olunur?",
  answer: "A)	ƏDV-yə cəlb olunmur",
  options: [
    "A)	ƏDV-yə cəlb olunmur",
    "B)	18% ilə ƏDV-yə cəlb olunur",
    "C) 0% ilə ƏDV-yə cəlb olunur",
    "D) 20% ilə ƏDV-yə cəlb olunur"
  ]
},
{
  numb: 39,
  question: "Dəfn və qəbiristanlığın mərasim xidmətləri və metropolitendə sərnişin daşıma xidməti ƏDV-yə hansı dərəcə ilə cəlb edilir?",
  answer: "D) ƏDV-dən azaddır",
  options: [
    "A) sıfır (0) dərəcə ilə",
    "B) 18 faiz dərəcə ilə",
    "C) 20 faiz dərəcə ilə",
    "D) ƏDV-dən azaddır"
  ]
},
]
