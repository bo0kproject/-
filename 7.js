// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "İstifadə müddəti məlum olan qeyri-maddi aktivlər üçün illik amortizasiya norma¬sının yuxarı həddi neçə faizdir?",
  answer: "D) İllər üzrə istifadə müddətinə mütənasib məbləğlərlə ",
  options: [
    "A) 7 faiz",
    "B) 10 faiz",
    "C) 20 faiz",
    "D) İllər üzrə istifadə müddətinə mütənasib məbləğlərlə "
  ]
},
  {
  numb: 2,
  question: "Mikro sahibkarlıq subyektləri sahibkarlıq fəaliyyətində istifadə etdikləri əsas vəsaitlərə münasibətdə amortizasiya ayırmalarını gəlirdən necə çıxırlar?",
  answer: "D)	Vergi Məcəlləsinin 114.3-cü maddəsi ilə müəyyən edilən amortizasiya normalarına 2 əmsal tətbiq etməklə gəlirdən çıxırlar",
  options: [
    "A)	Amortizasiya normasının 50 faizi məbləğində",
    "B)	Vergi Məcəlləsinin 114.3-cü maddəsi ilə müəyyən edilən amortizasiya normalarına 1,5 əmsal tətbiq etməklə gəlirdən çıxırlar",
    "C)	Amortizasiya olunmur",
    "D)	Vergi Məcəlləsinin 114.3-cü maddəsi ilə müəyyən edilən amortizasiya normalarına 2 əmsal tətbiq etməklə gəlirdən çıxırlar"
  ]
},
  {
  numb: 3,
  question: "Kiçik sahibkarlıq subyektləri sahibkarlıq fəaliyyətində istifadə etdikləri əsas vəsaitlərə münasibətdə amortizasiya ayırmalarını gəlirdən necə çıxırlar?",
  answer: "B)	Vergi Məcəlləsinin 114.3-cü maddəsi ilə müəyyən edilən amortizasiya normalarına 1,5 əmsal tətbiq etməklə gəlirdən çıxırlar",
  options: [
    "A)	Amortizasiya normasının 50 faizi məbləğində",
    "B)	Vergi Məcəlləsinin 114.3-cü maddəsi ilə müəyyən edilən amortizasiya normalarına 1,5 əmsal tətbiq etməklə gəlirdən çıxırlar",
    "C)	Vergi Məcəlləsinin 114.3-cü maddəsi ilə müəyyən edilən amortizasiya normalarına uyğur, gəlirdən çıxırlar",
    "D)	Vergi Məcəlləsinin 114.3-cü maddəsi ilə müəyyən edilən amortizasiya normalarına 2 əmsal tətbiq etməklə gəlirdən çıxırlar"
  ]
},
  {
  numb: 4,
  question: "Əsas vəsaitlərin kateqoriyaları üzrə amortizasiya ayırmaları Vergi Məcəlləsində göstərilmiş kateqoriyalara aid olan əsas vəsaitlər üçün müəyyənləşdirilmiş amortizasiya normasını hansı göstəriciyə tətbiq etməklə hesablanılır?",
  answer: "D)	Həmin kateqoriyaya aid əsas vəsaitlərin vergi ilinin sonuna qalıq dəyərinə",
  options: [
    "A)	Həmin kateqoriyaya aid əsas vəsaitlərin vergi ilinin sonuna bazar qiymətinə",
    "B)	Həmin kateqoriyaya aid əsas vəsaitlərin vergi ilinin əvvəlinə qalıq dəyərinə",
    "C)	Həmin kateqoriyaya aid əsas vəsaitlərin vergi ilinin əvvəlinə balans dəyərinə",
    "D)	Həmin kateqoriyaya aid əsas vəsaitlərin vergi ilinin sonuna qalıq dəyərinə"
  ]
},
  {
  numb: 5,
  question: "Hər hansı kateqoriyaya aid olan əsas vəsaitlər üzrə vergi ili üçün müəyyən olunmu? amortizasiya normalarından aşağı norma tətbiq olunduqda,bunun nəticəsində yaranan fərq:",
  answer: "A)	Növbəti vergi illərində amortizasiyanın gəlirdən çıxılan məbləğinə əlavə oluna bilər",
  options: [
    "A)	Növbəti vergi illərində amortizasiyanın gəlirdən çıxılan məbləğinə əlavə oluna bilər",
    "B)	Carı vergi ilində amortizasiyanın gəlirdən çıxılan məbləğinə əlavə oluna bilər",
    "C)	Növbəti vergi illərində amortizasiyanın gəlirdən çıxılan məbləğinə əlavə oluna bilməz",
    "D)	Yaranan fərq həmin əsas vəsaitlərin qalıq dəyərinin artmasına aid edilir"
  ]
},
{
  numb: 6,
  question: "Binalar, tikililər və qurğular üçün amortizasiya ayırmalarının necə hesablanır?",
  answer: "B)	Hər tikili üzrə ayrılıqda",
  options: [
    "A)	Bütün tikililər üzrə birlikdə",
    "B)	Hər tikili üzrə ayrılıqda",
    "C)	Yalnız binalar üzrə ayrılıqda",
    "D)	Yalnız qurğular üzrə ayrılıqda"
  ]
},
   {
  numb: 7,
  question: "Əsas vəsaitlərin yenidən qiymətləndirilməsindən yaranan artım amortizasiya hes¬ablanması məqsədləri üçün əsas vəsaitlərin vergi ilinin sonuna qalıq dəyərinə əlavə olunur¬mu? A) xeyr",
  answer: "A) xeyr",
  options: [
    "A) xeyr",
    "B)	bəli",
    "C)	əgər yenidən qiymətləndirilmə qiymətləndirilən əsas vəsait üzrə ilk dəfə aparılırsa o zaman yaranan artım amortizasiya hesablanması məqsədləri üçün əsas vəsaitlərin vergi ilinin sonuna qalıq dəyərinə əlavə olunur",
    "D)	binaların inventar dəyərinin respublika səviyyəsində yenidən qiymətləndirilməsi istisna olmaqla əsas vəsaitlərin yenidən qiymətləndirilməsindən yaranan artım amortizasiya hesablanması məqsədləri üçün əsas vəsaitlərin vergi ilinin sonuna qalıq dəyərinə əlavə olunmur"
  ]
},
   {
  numb: 8,
  question: "Əsas vəsaitlərin yenidən qiymətləndirilməsindən yaranan artım amortizasiya he¬sablanması məqsədləri üçün əsas vəsaitlərin vergi ilinin sonuna qalıq dəyərinə necə əlavə olunur?",
  answer: "A)	Əlavə olunmur",
  options: [
    "A)	Əlavə olunmur",
    "B)	Ümumi qaydada",
    "C)	Əgər yenidən qiymətləndirilmə qiymətləndirilən əsas vəsait üzrə ilk dəfə aparılırsa o zaman yaranan artım amortizasiya hesablanması məqsədləri üçün əsas vəsaitlərin vergi ilinin sonuna qalıq dəyərinə əlavə olunur",
    "D)	Binaların inventar dəyərinin respublika səviyyəsində yenidən qiymətləndirilməsi istisna olmaqla əsas vəsaitlərin yenidən qiymətləndirilməsindən yaranan artım amortizasiya hesablanması məqsədləri üçün əsas vəsaitlərin vergi ilinin sonuna qalıq dəyərinə əlavə olunmur"
  ]
},
   {
  numb: 9,
  question: "İstismara yararlı olan tam amortizasiya olunmuş əsas vəsaitlərin, konservasiya edilmiş əsas vəsaitlərin, ümumi istifadədə olan avtomobil yollarının, ümumi istifadədə olan parklardakı avadanlıqların, istismara verilməmiş anbarda olan əsas vəsaitlərin illik amort¬izasiya normasının aşağı həddi neçə faizdir?",
  answer: "C) Həmin aktivlər amortizasiya olunmur ",
  options: [
    "A) 20%",
    "B) 7%",
    "C) Həmin aktivlər amortizasiya olunmur ",
    "D) 25%"
  ]
},
   {
  numb: 10,
  question: "Əsas vəsaitlərin (vəsaitin) təqdim edilməsindən əldə olunan məbləğ həmin əsas vəsaitlərin (vəsaitin) qalıq dəyərindən artıq olduqda, yaranmış fərq:",
  answer: "D)	Gəlirə daxil edilir",
  options: [
    "A)	Gəlirdən çıxıhr",
    "B)	Əsas vəsaitin qalıq dəyərinin azaldılmasına aid edilir",
    "C)	Əsas vəsaitin qalıq dəyərinin artırılmasına aid edilir",
    "D)	Gəlirə daxil edilir"
  ]
},
   {
  numb: 11,
  question: "İlin sonuna hər hansı kateqoriyaya aid əsas vəsaitlərin qalıq dəyəri neçə manatdan və ya ilkin dəyərinin neçə faizindən az olduqda qalıq dəyərinin məbləği gəlirdən çıxılır?",
  answer: "A)	500 manatdan və ya ilkin dəyərinin 5 faizindən",
  options: [
    "A)	500 manatdan və ya ilkin dəyərinin 5 faizindən",
    "B)	500 manatdan və ya ilkin dəyərinin 10 faizindən",
    "C)	100 manatdan və ya ilkin dəyərinin 10 faizindən",
    "D)	50 manatdan və ya ilkin dəyərinin 2 faizindən"
  ]
},
   {
  numb: 12,
  question: "Əsas vəsaitlərin (vəsaitin) təqdim edilməsindən əldə olunan məbləğ həmin əsas vəsa¬itlərin (vəsaitin) qalıq dəyərindən az olduqda, yaranmış fərq:",
  answer: "A)	Gəlirdən çıxıhr",
  options: [
    "A)	Gəlirdən çıxıhr",
    "B)	Əsas vəsaitin qalıq dəyərinin azaldılmasına aid edilir",
    "C)	Əsas vəsaitin qalıq dəyərinin artırılmasına aid edilir",
    "D)	Gəlirə daxil edilir"
  ]
},
   {
  numb: 13,
  question: "Dövlət müəssisələrinə dövlət büdcəsinin investisiya xərcləri hesabına ayrılmış vəsaitlər hesabına alınan və ya quraşdırılan aktivlərin, illik amortizasiya normalarına uyğun hesablanmış amortizasiya hansı qaydada gəlirdən çıxılır?",
  answer: "B)	amortizasiya normasının 40 faizi məbləğində",
  options: [
    "A)	amortizasiya normasının 50 faizi məbləğində",
    "B)	amortizasiya normasının 40 faizi məbləğində",
    "C)	amortizasiya olunmur",
    "D)	amortizasiya normasınm tam məbləğində"
  ]
},
   {
  numb: 14,
  question: "Aşağıdakılardan hansı doğru olanlara aiddir?",
  answer: "A) təmir xərclərinin məbləği əsas vəsaitlərin hər bir kateqoriyasının əvvəlki ilin sonuna qalıq dəyərinə müvafiq olaraq Vergi Məcəlləsinin 114.3.1-ci maddəsində göstərilən əsas vəsaitlərin kateqoriyasının ilin sonuna qalıq dəyərinin 2 faizi, 114.3.2-ci, 114.3.2-1-ci və 114.3.3-cü maddələrində göstərilən əsas vəsaitlərin kateqoriyasının ilin sonuna qalıq dəyərinin 5 faizi, 114.3.7-ci maddəsin-də göstərilən əsas vəsaitlərin kateqoriyasının ilin sonuna qahq dəyərinin 3 faizi və köhnəlmə (amortizasiya) hesablanmayan əsas vəsaitlər üzrə sıfır (0) faizi həddi ilə məhdudlaşdırılır",
  options: [
    "A) təmir xərclərinin məbləği əsas vəsaitlərin hər bir kateqoriyasının əvvəlki ilin sonuna qalıq dəyərinə müvafiq olaraq Vergi Məcəlləsinin 114.3.1-ci maddəsində göstərilən əsas vəsaitlərin kateqoriyasının ilin sonuna qalıq dəyərinin 2 faizi, 114.3.2-ci, 114.3.2-1-ci və 114.3.3-cü maddələrində göstərilən əsas vəsaitlərin kateqoriyasının ilin sonuna qalıq dəyərinin 5 faizi, 114.3.7-ci maddəsin-də göstərilən əsas vəsaitlərin kateqoriyasının ilin sonuna qahq dəyərinin 3 faizi və köhnəlmə (amortizasiya) hesablanmayan əsas vəsaitlər üzrə sıfır (0) faizi həddi ilə məhdudlaşdırılır",
    "B)	təmir xərclərinin məbləği əsas vəsaitlərin hər bir kateqoriyasının cari ilin sonuna qahq dəyərinə müvafiq olaraq Vergi Məcəlləsinin 114.3.1-ci maddəsində göstərilən əsas vəsaitlərin kateqoriyasının ilin sonuna qahq dəyərinin 2 faizi, 114.3.2-ci və 114.3.3-cü maddələrində göstərilən əsas vəsaitlərin kateqoriyasının ilin sonuna qahq dəyərinin 5 faizi, 114.3.7-ci maddəsin¬də göstərilən əsas vəsaitlərin kateqoriyasının ilin sonuna qahq dəyərinin 3 faizi və köhnəlmə (amortizasiya) hesablanmayan əsas vəsaitlər üzrə sıfır (0) faizi həddi ilə məhdudlaşdırılır",
    "C)	təmir xərclərinin 50 faizi gəlirdən çıxıhr",
    "D)	heç bir hədd qoyulmadan gəlirdən çıxılır"
  ]
},
   {
  numb: 15,
  question: "Təmirlə bağlı xərclər gəlirdən hansı qaydada çıxıhr?",
  answer: "C)	Təmir xərclərinin qanunvericiliklə müəyyən edilmiş normadan artıq olmayan hissəsi gəlir¬dən çıxılır",
  options: [
    "A)	Təmir xərcləri gəlirdən çıxılmır",
    "B)	Təmir xərclərinin 50 faizi gəlirdən çıxılır",
    "C)	Təmir xərclərinin qanunvericiliklə müəyyən edilmiş normadan artıq olmayan hissəsi gəlir¬dən çıxılır",
    "D)	Heç bir hədd qoyulmadan gəlirdən çıxıhr"
  ]
},
   {
  numb: 16,
  question: "Qurğular üzrə təmir xərclərinin məhdudlaşdırılan həddi neçə faizdir?",
  answer: "D) 2 faiz",
  options: [
    "A) 3 faiz ",
    "B) 5 faiz ",
    "C) 0 faiz ",
    "D) 2 faiz"
  ]
},
   {
  numb: 17,
  question: "Əsas vəsaitlər üzrə təmir xərclərinin məhdudlaşdırılan məbləği müəyyən edilərkən məhdudlaşdırılan faiz dərəcəsi hansı göstəriciyə tətbiq edilir?",
  answer: "C)	Əsas vəsaitlərin əvvəlki ilin sonuna qahq dəyərinə",
  options: [
    "A)	Əsas vəsaitin bazar qiymətinə",
    "B)	Əsas vəsaitlərin cari ilin sonuna qahq dəyərinə",
    "C)	Əsas vəsaitlərin əvvəlki ilin sonuna qahq dəyərinə",
    "D)	Əsas vəsaitlərin əvvəlki ilin əvvəlinə balans dəyərinə"
  ]
},
   {
  numb: 18,
  question: "Yüksək texnologiyalar məhsulu olan hesablama texnikası üzrə təmir xərclərinin məhdudlaşdırılan həddi neçə faizdir?",
  answer: "C) 5 faiz ",
  options: [
    "A) 0 faiz",
    "B) 3 faiz",
    "C) 5 faiz",
    "D) 2 faiz"
  ]
},
   {
  numb: 19,
  question: "Binalar, tikililər və qurğular üçün təmirlə bağlı xərclərin məhdudlaşdırılan həddi həmin vəsaitlərin əvvəlki ilin sonuna qalıq dəyərinin neçə faizi miqdarında müəyyən edilmiş¬dir?",
  answer: "B) 2 faiz",
  options: [    
    "A) 3 faiz",
    "B) 2 faiz",
    "C) 4 faiz",
    "D) 5 faiz"
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
