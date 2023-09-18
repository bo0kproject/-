// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Azərbaycan Respublikasına idxal olunan emal olunmuş, çeşidlənmiş, çərçivəyə salınmış və bərkidilmiş almazın 1 karatı üçün tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "A)	İdxal olunan emal olunmuş, çeşidlənmiş, çərçivəyə salınmış və bərkidilmiş almazın 1 karatı üçün - 400 manat",
  options: [
    "A)	İdxal olunan emal olunmuş, çeşidlənmiş, çərçivəyə salınmış və bərkidilmiş almazın 1 karatı üçün - 400 manat",
    "B)	İdxal olunan emal olunmuş, çeşidlənmiş, çərçivəyə salınmış və bərkidilmiş almazın 1 karatı üçün - 200 manat",
    "C)	İdxal olunan emal olunmuş, çeşidlənmiş, çərçivəyə salınmış və bərkidilmiş almazın 1 karatı üçün - 150 manat",
    "D)	İdxal olunan emal olunmuş, çeşidlənmiş, çərçivəyə salınmış və bərkidilmiş almazın 1 karatı üçün - 250 manat"
  ]
},
  {
  numb: 2,
  question: "Almazın bir ədədinin miqdarı 1 karatdan aşağı olduqda, tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "B)	İdxal olunan emal olunmuş, çeşidlənmiş, çərçivəyə salınmış və bərkidilmiş almazın 1 karatdan aşağı olduqda - 400 manat x faktiki çəki",
  options: [
    "A)	İdxal olunan emal olunmuş, çeşidlənmiş, çərçivəyə salınmış və bərkidilmiş almazın 1 karatdan aşağı olduqda - 200 manat x 2 əmsal",
    "B)	İdxal olunan emal olunmuş, çeşidlənmiş, çərçivəyə salınmış və bərkidilmiş almazın 1 karatdan aşağı olduqda - 400 manat x faktiki çəki",
    "C)	İdxal olunan emal olunmuş, çeşidlənmiş, çərçivəyə salınmış və bərkidilmiş almazın 1 karatdan aşağı olduqda - 150 manat x faktiki çəki",
    "D)	İdxal olunan emal olunmuş, çeşidlənmiş, çərçivəyə salınmış və bərkidilmiş almazın 1 karatdan aşağı olduqda - 300 manat"
  ]
},
  {
  numb: 3,
  question: "Almazın bir ədədinin miqdarı 1 karatdan yuxarı olduqda, tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "C)	1	karatdan	2 karatadək olduqda -	400 manat x faktiki çəki x	2	əmsal",
  options: [
    "A)	1	karatdan	2 karatadək olduqda -	400 manat x faktiki çəki x	3	əmsal",
    "B)	1	karatdan	2 karatadək olduqda -	200 manat x faktiki çəki x	1,5 əmsal",
    "C)	1	karatdan	2 karatadək olduqda -	400 manat x faktiki çəki x	2	əmsal",
    "D)	1	karatdan	2 karatadək olduqda -	200 manat x faktiki çəki"
  ]
},
  {
  numb: 4,
  question: "Almazın bir ədədinin miqdarı 2 karatdan yuxan olduqda, tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "A)	2 karatdan 3 karatadək olduqda - 400 manat x faktiki çəki x 3 əmsal",
  options: [
    "A)	2 karatdan 3 karatadək olduqda - 400 manat x faktiki çəki x 3 əmsal",
    "B)	2 karatdan 3 karatadək olduqda - 400 manat x faktiki çəki x 2,5 əmsal",
    "C)	2 karatdan 3 karatadək olduqda - 200 manat x faktiki çəki x 2 əmsal",
    "D)	2 karatdan 3 karatadək olduqda - 200 manat x faktiki çəki x 4 əmsal"
  ]
},
  {
  numb: 5,
  question: "Almazın bir ədədinin miqdarı 3 karatdan yuxarı olduqda, tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "D)	3 karatdan 4 karatadək olduqda -	400	manat x	faktiki çəki x 4	əmsal",
  options: [
    "A)	3 karatdan 4 karatadək olduqda -	400	manat x	faktiki çəki x 3	əmsal",
    "B)	3 karatdan 4 karatadək olduqda -	200	manat x	faktiki çəki x 3,5 əmsal",
    "C)	3 karatdan 4 karatadək olduqda -	200	manat x	faktiki çəki x 5	əmsal",
    "D)	3 karatdan 4 karatadək olduqda -	400	manat x	faktiki çəki x 4	əmsal"
  ]
},
{
  numb: 6,
  question: "Almazın bir ədədinin miqdarı 4 karatdan yuxarı olduqda, tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "B)	4 karatdan 5 karatadək olduqda - 400 manat x faktiki çəki x 5 əmsal",
  options: [
    "A)	4 karatdan 5 karatadək olduqda - 200 manat x faktiki çəki x 7 əmsal",
    "B)	4 karatdan 5 karatadək olduqda - 400 manat x faktiki çəki x 5 əmsal",
    "C)	4 karatdan 5 karatadək olduqda - 400 manat x faktiki çəki x 4 əmsal",
    "D)	4 karatdan 5 karatadək olduqda - 200 manat x faktiki çəki x 3 əmsal"
  ]
},
  {
  numb: 7,
  question: "Almazın bir ədədinin miqdarı 5 karatdan yuxan olduqda, tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "C)	5 karatdan olduqda - 400 manat x faktiki çəki x 10 əmsal",
  options: [
    "A)	5 karatdan olduqda - 400 manat x faktiki çəki x 8 əmsal",
    "B)	5 karatdan olduqda - 200 manat x faktiki çəki x 11 əmsal",
    "C)	5 karatdan olduqda - 400 manat x faktiki çəki x 10 əmsal",
    "D)	5 karatdan olduqda - 200 manat x faktiki çəki x 13 əmsal"
  ]
},
{
  numb: 8,
  question: "İdxal olunan xəz-dəri məmulatlarına aksiz vergi tutulan əməliyyatın məbləği nədir?",
  answer: "C)	Topdansatış bazar qiymətindən aşağı olmayan gömrük dəyərinin 10 faizi",
  options: [
    "A)	Onların topdansatış bazar qiyməti",
    "B)	İdxal olunan malların miqdarı",
    "C)	Topdansatış bazar qiymətindən aşağı olmayan gömrük dəyərinin 10 faizi",
    "D)	Həmin məmulatların gömrük dəyəri"
  ]
},
{
  numb: 9,
  question: "Azərbaycan Resrublikasında istehsal edilən neft məhsullarına, minik avtomobilləri, istirahət və ya idman üçün yaxtalar və bu məqsədlər üçün nəzərdə tutulan digər üzən vasitələrə tətbiq edilən aksizlərin dərəcələri hansı dövlət orqanı tərəfindən müəyyən edilir?",
  answer: "A)	Nazirlər Kabineti",
  options: [
    "A)	Nazirlər Kabineti",
    "B)	Yerli icra hakimiyyəti orqanları",
    "C) Maliyyə Nazirliyi",
    "D) Gömrük Komitəsi"
  ]
},
{
  numb: 10,
  question: "Aksiz vergisi üçün hesabat dövrü aşağıdakılardan hansıdır?",
  answer: "D) Ay",
  options: [
    "A) Dekada",
    "B) Həftə",
    "C) Rüb",
    "D) Ay"
  ]
},
{
  numb: 11,
  question: "Aksizli malların istehsalı zamanı vergi tutulan əməliyyatlar üzrə aksizlər hesabat dövründən sonrakı ayın neçəsinədək ödənilməlidir?",
  answer: "C)	Hesabat dövründən sonrakı aym 20-dən gec olmayaraq",
  options: [
    "A)	Hesabat dövründən sonrakı ayın 15-dən gec olmayaraq",
    "B)	Hesabat dövründən sonrakı aym 10-dan gec olmayaraq",
    "C)	Hesabat dövründən sonrakı aym 20-dən gec olmayaraq",
    "D)	Hesabat dövründən sonrakı aym 3-dən gec olmayaraq"
  ]
},
{
  numb: 12,
  question: "Vergi ödəyicisinin aksizin ödənişi üzrə borcu yoxdursa, həyata keçirilən vergi tutulan əməliyyatlar üzrə aksizlər nə vaxt büdcəyə ödənilir?",
  answer: "A)	Həmin əməliyyatların baş verdiyi aydan sonrakı ayın 20-dən gec olmayaraq",
  options: [
    "A)	Həmin əməliyyatların baş verdiyi aydan sonrakı ayın 20-dən gec olmayaraq",
    "B)	Həmin əməliyyatların aparıldığı vaxt",
    "C)	Həmin əməliyyatların aparıldığı vaxtdan sonrakı bir ay müddətində",
    "D)	Həmin əməliyyatlar aparıldıqdan sonra bir həftə müddətində"
  ]
},
{
  numb: 13,
  question: "Vergi ödəyicisinin aksizin ödənişi üzrə borcu varsa, həmin borc yaranandan ödənilənədək həyata keçirilən vergi tutulan əməliyyatlar üzrə aksizlər nə vaxt büdcəyə ödənilir?",
  answer: "B)	Həmin əməliyyatların aparıldığı vaxt",
  options: [
    "A)	Həmin əməliyyatların baş verdiyi aydan sonrakı ayın 20-dən gec olmayaraq",
    "B)	Həmin əməliyyatların aparıldığı vaxt",
    "C)	Həmin əməliyyatların aparıldığı vaxtdan sonrakı bir ay müddətində",
    "D)	Həmin əməliyyatlar aparıldıqdan sonra bir həftə müddətində"
  ]
},
{
  numb: 14,
  question: "Aksizli mallar idxal edildikdə aksiz hansı orqan tərəfindən tutulur?",
  answer: "B) Gömrük orqanları",
  options: [
    "A) Vergi orqanları ",
    "B) Gömrük orqanları",
    "C) Maliyyə orqanları",
    "D) Xəzinədarlıq və statistika orqanları"
  ]
},
{
  numb: 15,
  question: "Aksizli mallar idxal edildikdə aksiz gömrük orqanları tərəfindən hansı qaydada tutulur?",
  answer: "A)	Gömrük rüsumlarının tutulduğu qaydada",
  options: [
    "A)	Gömrük rüsumlarının tutulduğu qaydada",
    "B)	ƏDV tutulduğu qaydada",
    "C)	Gömrük rəsmiləşdirilməsinə görə haqq tutulduğu qaydada",
    "D)	Gömrük anbarlarından istifadəyə görə haqqın tutulması qaydasında"
  ]
},
{
  numb: 16,
  question: "Aksizlər hansı büdcəyə ödənilir?",
  answer: "B)	Dövlət büdcəsinə",
  options: [
    "A)	Yerli büdcələrə",
    "B)	Dövlət büdcəsinə",
    "C) Həm yerli, həm də dövlət büdcəsinə",
    "D) Büdcədənkənar dövlət fondlarına"
  ]
},
{
  numb: 17,
  question: "Vergi Məcəlləsi ilə müəyyən edilən aksizli mallara tətbiq edilən aksiz dərəcələrinin “Tibbi sığorta haqqında” Azərbaycan Respublikasının Qanunu ilə müəyyən edilmiş hissəsi hara ödənilir?",
  answer: "A)	İcbari tibbi sığorta fonduna",
  options: [
    "A)	İcbari tibbi sığorta fonduna",
    "B)	Dövlət büdcəsinə",
    "C) Müdafiə fonduna",
    "D) Büdcədənkənar dövlət fondlarına"
  ]
},
{
  numb: 18,
  question: "Aksiz vergisi üzrə bəyannamə vergi orqanına hansı müddətdə verilməlidir?",
  answer: "C)	Hesabat dövründən sonrakı ayın 20-dən gec olmayaraq",
  options: [
    "A)	Hesabat dövründən sonrakı ayın 15-dən gec olmayaraq",
    "B)	Hesabat dövründən sonrakı ayın 10-dan gec olmayaraq",
    "C)	Hesabat dövründən sonrakı ayın 20-dən gec olmayaraq",
    "D)	Hesabat dövründən sonrakı ayın 3-dən gec olmayaraq"
  ]
},
{
  numb: 19,
  question: "Vergi ödəyicisi olan hüquqi şəxs ləğv edildikdə və ya hüquqi şəxs yaratmadan sahibkarlıq fəaliyyətini həyata keçirən fiziki şəxsin fəaliyyətinə xitam verildikdə, aksiz bəyannaməsi Vergi Məcəlləsində nəzərdə tutulmuş müddətdən gec olmamaq şərti ilə neçə gün müddətində vergi orqanına təqdim edilməlidir?",
  answer: "B) 30 gün",
  options: [
    "A) 40 gün",
    "B) 30 gün",
    "C) 45 gün",
    "D) 20 gün"
  ]
},
{
  numb: 20,
  question: "Aksizli malları (xammal və materialları) alan və bu malları vergi tutulan digər aksizli malların istehsalı üçün istifadə edən şəxs xammal və materialları alarkən ödənilmiş aksizin məbləğini əvəzləşdirmək üçün ərizəni nə vaxt vergi orqanına təqdim etməlidir?",
  answer: "A)	Aksizin ödənilməsinə dair bəyannamə ilə birlikdə",
  options: [
    "A)	Aksizin ödənilməsinə dair bəyannamə ilə birlikdə",
    "B)	Hesabat ayından sonrakı ayın 5-nə kimi",
    "C)	Aksizin ödənilməsinə dair bəyannamə təqdim edildikdən sonra 10 gün müddətində",
    "D)	Aksizin ödənilməsinə dair bəyannamə təqdim edildikdən sonra 15 gün müddətində"
  ]
},
{
  numb: 21,
  question: "Aksizli mallar istehsal edən vergi ödəyicisi istehsal ehtiyacları üçün alman aksizli mallara görə ödənilmiş aksiz məbləğini əvəzləşdirmə üçün ərizəni nə vaxt vergi orqanına təqdim edir?",
  answer: "B)	Aksizin bəyannaməsini təqdim etdiyi vaxt ",
  options: [
    "A)	Növbəti ayın sonuna qədər",
    "B)	Aksizin bəyannaməsini təqdim etdiyi vaxt ",
    "C) Cari ilin sonuna qədər",
    "D) Cövbəti ay başlananadək"
  ]
},
{
  numb: 22,
  question: "Sonradan təkrar ixrac məqsədi ilə idxal olunan mallara görə ödənilən aksizlər hansı orqan tərəfindən geri qaytarılır?",
  answer: "A)	Aksizi almış gömrük orqanları tərəfindən",
  options: [
    "A)	Aksizi almış gömrük orqanları tərəfindən",
    "B)	Maliyyə orqanları və vergi orqanları tərəfindən",
    "C)	Vergi orqanlarının rəyinə əsasən maliyyə orqanları tərəfindən",
    "D)	Xəzinədarlıq orqanları tərəfindən"
  ]
},
{
  numb: 23,
  question: "Sonradan təkrar ixrac məqsədi ilə idxal olunan mallara görə ödənilən aksizlər təkrar ixrac baş verdiyi vaxtdan hansı müddətdə geri qaytarılır?",
  answer: "D) 15 gün",
  options: [
    "A) 30 gün",
    "B) 20 gün",
    "C) 10 gün ",
    "D) 15 gün"
  ]
},
{
  numb: 24,
  question: "Sonradan təkrar ixrac məqsədi ilə idxal olunan mallara aksiz nə vaxt ödənilir?",
  answer: "D) Malların idxalı zamanı",
  options: [
    "A)	Malların təkrar ixracı zamanı",
    "B)	Malların gömrük ərazisində emalı zamanı ",
    "C) Malların gömrük ərazisindən çıxması zamanı",
    "D) Malların idxalı zamanı"
  ]
},
{
  numb: 25,
  question: "Azərbaycan Respublikasında istehsal edilən, yaxud ölkəyə idxal olunan aksiz markası ilə markalanmalı malların siyahısı, həmin mallara aksiz markalarının tətbiqi qaydası hansı dövlət orqanı tərəfindən müəyyən edilir?",
  answer: "D) Nazirlər Kabineti ",
  options: [
    "A) Maliyyə Nazirliyi",
    "B) Dövlət Vergi Xidməti",
    "C) Gömrük Komitəsi ",
    "D) Nazirlər Kabineti "
  ]
},
{
  numb: 26,
  question: "Aksiz markalarının hazırlanmasına dair sifarişin verilməsi, onların satışı və uçotunun aparılması qaydası hansı dövlət orqanı tərəfindən müəyyən edilir?",
  answer: "C) Azərbaycan Respublikasının İqtisadiyyat Nazirliyi",
  options: [
    "A)	Maliyyə Nazirliyi",
    "B)	Mərkəzi Bank",
    "C) Azərbaycan Respublikasının İqtisadiyyat Nazirliyi",
    "D) Nazirlər Kabineti"
  ]
},
{
  numb: 27,
  question: "Müvafiq icra hakimiyyəti orqanının qərarına əsasən markalanmalı olan aksizli mallar istehsal edən vergi ödəyicisinin istehsal sahəsinin hansı hissəsində nəzarət postları yaradılır?",
  answer: "A)	Giriş və çıxış qapısının yaxınlığında",
  options: [
    "A)	Giriş və çıxış qapısının yaxınlığında",
    "B)	Ancaq çıxış qapısında",
    "C) Yalnız giriş qapısının yaxınlığında",
    "D) İstənilən yerdə"
  ]
},
{
  numb: 28,
  question: "Aksizli mallar üzərində vergi nəzarəti məqsədilə yaradılmış nəzarət postları telefon və digər zəruri avadanlıqlarla təchiz edilməlidirmi?",
  answer: "B)	Edilməlidir",
  options: [
    "A)	Müstəsna hallarda",
    "B)	Edilməlidir",
    "C) Edilməli deyil",
    "D) Vergi ödəyicisinin razılığı olduğu halda"
  ]
},
{
  numb: 29,
  question: "Nəzarət postları yaradıldıqda markalanmalı olan aksizli malları istehsal edən vergi ödəyicisinin texnoloji avadanlıqlarının, ölçü vasitələrinin və laboratoriya cihazlarının texniki sazlığının, standartlara uyğunluğunun yoxlanması və həmin cihazların ploblanması hansı orqan tərəfindən yerinə yetirilir?",
  answer: "C)	Azərbaycan Respublikasının Standartlaşdırma, Metrologiya və Patent üzrə Dövlət Agentliyi tərəfindən Dövlət Vergi Xidmətinin iştirakı ilə",
  options: [
    "A)	Nazirlər Kabineti",
    "B)	Azərbaycan Respublikası Standartlaşdırma, Metrologiya və Patent üzrə Dövlət Agentliyi",
    "C)	Azərbaycan Respublikasının Standartlaşdırma, Metrologiya və Patent üzrə Dövlət Agentliyi tərəfindən Dövlət Vergi Xidmətinin iştirakı ilə",
    "D)	Hesablama Palatası və Dövlət Vergi Xidmətinin iştirakı ilə"
  ]
},
{
  numb: 30,
  question: "Aksizli mallar üzərində vergi nəzarəti məqsədilə yaradılmış nəzarət postlarının işçiləri aşağıda sadalanan hansı qaydalara riayət olunmasına nəzarət edirlər? 1)	aksiz markalarının qalıqlarının inventarizasiya edilməsi 2)	istehsalın həcmi üzrə nəzarət ölçü cihazlarının plomblanması 3)	hazır məhsul satışının təmin edilməsi 4)	istehsal sahələrindəki texnoloji avadanlıqların plomblanması 5)	xammal və material alışının təşkil edilməsi",
  answer: "B) 1;2;4",
  options: [
    "A) 1;3;4",
    "B) 1;2;4",
    "C) 1;2;5",
    "D) 1;4;5"
  ]
},
{
  numb: 31,
  question: "Aksizli mallar üzərində vergi nəzarəti zamanı istehsal həcmi üzrə nəzarət-ölçü cihazlarının, xammal, material VƏ hazır məhsul anbarlarının, istehsal sahələrindəki texnoloji avadanlıqların plomblanması hansı şəxslər tərəfindən həyata keçirilir?",
  answer: "A)	Nəzarət postlarının işçiləri tərəfindən istehsalçının nümayəndəsi ilə birlikdə",
  options: [
    "A)	Nəzarət postlarının işçiləri tərəfindən istehsalçının nümayəndəsi ilə birlikdə",
    "B)	Yalnız nəzarət postlarının işçiləri tərəfindən",
    "C)	İstehsalçının özü tərəfindən",
    "D)	İstənilən vergi işçisi tərəfindən"
  ]
},
{
  numb: 32,
  question: "Aksizli mallar üzərində vergi nəzarəti məqsədilə yaradılmış nəzarət postlarının işçiləri tərəfindən istehsalçının nümayəndəsi ilə birlikdə plomblanma həyata keçirilən zaman müvafiq qeydlər harada aparılır?",
  answer: "C) Xergi orqanının təsdiq etdiyi forma üzrə kitabda",
  options: [
    "A)	Xüsusi bir qeydiyyat kitabı yoxdur ",
    "B)	Heç bir qeydiyyat aparılmır ",
    "C) Vergi orqanının təsdiq etdiyi forma üzrə kitabda",
    "D) Nəzarət postlarının işçilərinin qeydiyyat kitabında "
  ]
},
{
  numb: 33,
  question: "Aksizli mallar üzərində vergi nəzarəti zamanı aşağıdakı hansı hallar olduqda nəzarət postlarının işçiləri tərəfindən istehsalçının nümayəndəsi ilə birlikdə plomblanma həyata keçirilə bilər? 1)	lisenziyanın qüvvədə olma müddəti dayandırıldıqda və ya ləğv edildikdə; 2)	hazır məhsulun markalanması üçün aksiz markaları olmadıqda; 3)	başa çatmamış istehsalın markalanması üçün aksiz markaları olmadıqda; 4)	istehsal üçün xammal, yardımçı və qablaşdırıcı materiallar olmadıqda; 5)	avadanlıqlarda müvəqqəti təmir aparıldığı zaman.",
  answer: "B) 1;2;4",
  options: [
    "A) 1;2;3",
    "B) 1;2;4",
    "C) 3;4;5",
    "D)l;3;4"
  ]
},
{
  numb: 34,
  question: "Aksizli mallar üzərində vergi nəzarətinin həyata keçirilməsi prosesində avadanlığın dayandırılması zamanı istehsal güclərinin qapanması istehsal üzrə texnoloji xətlərin və avadanlığın elə yerlərdə plomblanması vasitəsilə həyata keçirilməlidir ki,	",
  answer: "B)	Onların istifadə edilməsi mümkün olmasın",
  options: [
    "A)	Onların istifadəsi qismən məhdudlaşdırılsın",
    "B)	Onların istifadə edilməsi mümkün olmasın",
    "C) Onların istifadəsi qismən mümkün olsun",
    "D) Yalnız istehsalçının göstərişi ilə istifadə edilə bilsin"
  ]
},
{
  numb: 35,
  question: "Aksizli mallar üzərində vergi nəzarəti həyata keçirilərkən istehsal həcmi üzrə nəzarət-ölçü cihazlarına,xammal və hazır məhsul anbarlarına, istehsal sahələrindəki texno¬loji avadanlıqlara plombların vurulması və çıxarılması kim tərəfindən rəsmi-ləşdirilir?",
  answer: "C)	Nəzarət postunun işçiləri və istehsalçının nümayəndəsinin iştirakı ilə",
  options: [
    "A)	Yalnız nəzarət postunun işçiləri tərəfindən",
    "B)	Yalnız istehsalçının nümayəndələri tərəfindən",
    "C)	Nəzarət postunun işçiləri və istehsalçının nümayəndəsinin iştirakı ilə",
    "D)	Heç bir halda rəsmiləşdirilmir"
  ]
},
{
  numb: 36,
  question: "Aksizli mallar üzərində vergi nəzarəti həyata keçirilərkən istehsal həcmi üzrə nə-zarət-ölçü cihazlarına, xammal, material və hazır məhsul anbarlarına, istehsal sahələ-rindəki texnoloji avadanlıqlara plombların vurulması və çıxarılması hansı sənədlə rəsmi-ləşdirilir?",
  answer: "B) Aktla",
  options: [
    "A) Protokolla",
    "B) Aktla",
    "C) Qərarla",
    "D) Xüsusi bir sənəd tərtib edilmir"
  ]
},
{
  numb: 37,
  question: "Aksizli mallar üzərində vergi nəzarəti zamanı nəzarət-ölçü cihazları, anbarlar və texnoloji avadanlıqlar plomblandıqda hansı halda istehsalçının məsul şəxsləri tərəfindən vergi orqanına məlumat verilməklə və hansı sənəd tərtib edilməklə plomblar açıla bilər?",
  answer: "A) Nəzarət postlarının işçiləri işə başladığı vaxtda nəzarət postunda olmadıqda müvafiq akt tərtib edilməklə",
  options: [
    "A)	Nəzarət postlarının işçiləri işə başladığı vaxtda nəzarət postunda olmadıqda müvafiq akt tərtib edilməklə",
    "B)	Nəzarət postlarının işçiləri işə başladığı vaxtda nəzarət postunda olub-olmamasından asılı olmayaraq istənilən vaxtda və heç bir sənəd tərtib etmədən",
    "C)	Heç bir halda açılmasına yol verilmir",
    "D)	Nəzarət postlarının işçiləri işə başladığı vaxtda və istehsalçıları xüsusi qərarı olduğu halda "
  ]
},
{
  numb: 38,
  question: "Aksizli mallar üzərində vergi nəzarəti məqsədilə yaradılmış nəzarət postunun işçi-ləri satışa buraxılan hazır məhsulların sənədlərində göstərilən sayının, həcminin, çəkisinin onların faktiki sayı, həcm və çəkisi ilə düzgünlüyünü yoxlamalı və sənədlərdəki göstəriciləri harada qeyd etməlidirlər?",
  answer: "C) Xüsusi jurnalda ",
  options: [
    "A) Aktda",
    "B) Protokolda",
    "C) Xüsusi jurnalda",
    "D) Heç bir yerdə qeyd olunmur"
  ]
},
{
  numb: 39,
  question: "Aksizli mallar üzərində vergi nəzarəti məqsədilə yaradılmış nəzarət postunun işçi-ləri “buraxılışa icazə verilir” qeydini hansı sənədlərdə aparmalıdırlar?",
  answer: "A)	Malların ilkin təsdiqedici sənədlərində ",
  options: [
    "A)	Malların ilkin təsdiqedici sənədlərində ",
    "B)	Heç bir qeyd aparılmır",
    "C) Protokollarda",
    "D) Xüsusi jurnalda"
  ]
},
{
  numb: 40,
  question: "Plombların vurulması və çıxarılması arasındakı müddətdə nəzarət-ölçü cihazları-nın göstəricilərində dəyişikliklər edildikdə,texnoloji avadanhqlardakı plombların zədələnmə¬si halları müəyyən edildikdə nəzarət postnun işçiləri hansı tədbirləri həyata keçirməlidirlər?",
  answer: "C)	Müvafiq akt tərtib etməli, bu barədə vergi orqanına məlumat verməlidirlər",
  options: [
    "A)	Dərhal hüquq mühafizə orqanlarına müraciət etməlidirlər",
    "B)	Ancaq istehsalçını bu barədə məlumatlandırmalıdırlar",
    "C)	Müvafiq akt tərtib etməli, bu barədə vergi orqanına məlumat verməlidirlər",
    "D)	Şahidlərin iştirakı ilə protokol tərtib edilməlidir"
  ]
},
{
  numb: 41,
  question: "Plombların vurulması və çıxarılması arasındakı müddətdə istehsal olunmuş məhsulların aksiz markası ilə markalanmasında, tam uçota alınmasında, aksiz markalarının inventarizasiyasında kənarlaşma edildikdə nəzarət postunun işçiləri hansı tədirləri həyata keçirməlidirlər?",
  answer: "C)	Müvafiq akt tərtib etməli, bu barədə vergi orqanına məlumat verməlidirlər",
  options: [
    "A)	Dərhal hüquq mühafizə orqanlarına müraciət etməlidirlər",
    "B)	Ancaq istehsalçını bu barədə məlumatlandırmalıdırlar",
    "C)	Müvafiq akt tərtib etməli, bu barədə vergi orqanına məlumat verməlidirlər",
    "D)	Şahidlərin iştirakı ilə protokol tərtib edilməlidir"
  ]
},
];
