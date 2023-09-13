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
  numb: 20,
  question: "Maşınlar, avadanlıqlar üzrə təmir xərclərinin məhdudlaşdırılan həddi neçə faizdir?",
  answer: "D) əvvəlki ilin sonuna qalıq dəyərinin 5 %-i",
  options: [
    "A)	əvvəlki ilin sonuna qalıq dəyərinin 8 %-i",
    "B)	əvvəlki ilin sonuna qalıq dəyərinin 6 %-i",
    "C) əvvəlki ilin sonuna qalıq dəyərinin 4 %-i",
    "D) əvvəlki ilin sonuna qalıq dəyərinin 5 %-i"
  ]
},
   {
  numb: 21,
  question: "Nəqliyyat vasitələri üzrə təmir xərclərinin yuxarı həddi necə faizdir?",
  answer: "D) əvvəlki ilin sonuna qalıq dəyərinin 5 %-i",
  options: [
    "A)	əvvəlki ilin sonuna qalıq dəyərinin 3 %-i",
    "B)	əvvəlki ilin sonuna qalıq dəyərinin 7 %-i",
    "C) əvvəlki ilin sonuna qalıq dəyərinin 9 %-i",
    "D) əvvəlki ilin sonuna qalıq dəyərinin 5 %-i"
  ]
},
   {
  numb: 22,
  question: "Təmir xərclərinin məhdudlaşdırılan həddən artıq olan hissəsi hansı qaydada gəlir¬dən çıxılır?",
  answer: "D)	Gəlirdən çıxılmır və əsas vəsaitlərin qalıq dəyərinin artmasına aid edilir",
  options: [
    "A)	Gəlirdən tam həcmdə çıxılır",
    "B)	Növbəti vergi ilinin xərclərinə aid edilir",
    "C)	Mənfəətin azaldılmasına aid edilir",
    "D)	Gəlirdən çıxılmır və əsas vəsaitlərin qalıq dəyərinin artmasına aid edilir"
  ]
},
   {
  numb: 23,
  question: "Amortizasiya olunmayan, köhnəlmə (amortizasiya) hesablanmayan avadanlıqların təmirinə çəkilmiş xərclər (torpaqların yaxşılaşdırılmasına çəkilən xərclər istisna olmaqla) gəlirdən hansı qaydada çıxılır?",
  answer: "A)	Gəlirdən çıxılmır və onların balans dəyərini artırır ",
  options: [
    "A)	Gəlirdən çıxılmır və onların balans dəyərini artırır ",
    "B)	Tam həcmdə çıxılır",
    "C) Çəkilmiş xərclərin 10% çıxılır",
    "D) Çəkilmiş xərclərin yalniz 40% çıxılır"
  ]
},
   {
  numb: 24,
  question: "Torpaqların yaxşılaşdırılmasına çəkilən xərclər gəlirdən necə çıxılır?",
  answer: "A)	Kapitallaşdırılaraq Vergi Məcəlləsinin 114.3.1-ci maddəsinə uyğun olaraq amortizasiya şəklində",
  options: [
    "A)	Kapitallaşdırılaraq Vergi Məcəlləsinin 114.3.1-ci maddəsinə uyğun olaraq amortizasiya şəklində",
    "B)	Tam həcmdə çıxılır",
    "C)	Çıxılmır",
    "D)	Çəkilmiş xərclərin yalniz 40% çıxılır"
  ]
},
   {
  numb: 25,
  question: "İcarəyə götürülmüş binaların, tikililərin və qurğuların təmiri üzrə xərclərin gəlir¬dən çıxılan məbləği hansı faiz həddi ilə məhdudlaşdırılır?",
  answer: "C)	Həmin əsas vəsaitlərin əvvəlki ilin sonuna qalıq dəyərinin 2%",
  options: [
    "A)	Həmin əsas vəsaitlərin əvvəlki ilin sonuna qalıq dəyərinin 3%",
    "B)	Həmin əsas vəsaitlərin ilin əvvəlinə qalıq dəyərinin 5%",
    "C)	Həmin əsas vəsaitlərin əvvəlki ilin sonuna qalıq dəyərinin 2%",
    "D)	Həmin əsas vəsaitlərin ilin əvvəlinə qalıq dəyərinin 7%"
  ]
},
   {
  numb: 26,
  question: "Əsas vəsaitlərin icarəyə götürülməsi müddətləri, şərtləri, habelə onların təmiri üzrə xərclər icarəyə verənlə icarəçi arasında necə razılaşdırılır?",
  answer: "B)	İcarəyə verənlə icarəçi arasında bağlanılan müqavilə ilə",
  options: [
    "A)	Onlar arasında şifahi razılaşma ilə",
    "B)	İcarəyə verənlə icarəçi arasında bağlanılan müqavilə ilə",
    "C)	Razılaşdırılmır",
    "D)	Həm şifahi, həm də yazılı qaydada razılaşdırılır"
  ]
},
   {
  numb: 27,
  question: "Aşağıdakılardan hansı doğru olmayanlara aid deyil?",
  answer: "C)	İcarəyə götürülmüş əsas vəsaitlər icarəçinin balansında uçota alınmadıqda və ya təmir işləri icarəyə verənin hesabına aparıldıqda, yaxud icarəçinin hesabına aparılaraq, icarə haqqı ilə əvəzləşdirildikdə Vergi Məcəlləsinin 115-ci maddəsinin müddəaları icarəçiyə tətbiq edilmir",
  options: [
    "A)	Təmir işləri icarəyə verənin hesabına aparıldıqda, yaxud icarəçinin hesabına aparılaraq, icarə haqqı ilə əvəzləşdirildikdə Vergi Məcəlləsinin 115-ci maddəsinin müddəaları icarəçiyə 50 faiz miqdarında tətbiq edilir",
    "B)	Təmir işləri icarəyə verənin hesabına aparıldıqda, yaxud icarəçinin hesabına aparılaraq, icarə haqqı ilə əvəzləşdirildikdə Vergi Məcəlləsinin 115-ci maddəsinin müddəaları tərəflərin razılığına əsasən tətbiq edilir",
    "C)	İcarəyə götürülmüş əsas vəsaitlər icarəçinin balansında uçota alınmadıqda və ya təmir işləri icarəyə verənin hesabına aparıldıqda, yaxud icarəçinin hesabına aparılaraq, icarə haqqı ilə əvəzləşdirildikdə Vergi Məcəlləsinin 115-ci maddəsinin müddəaları icarəçiyə tətbiq edilmir",
    "D)	Təmir işləri icarəyə verənin hesabına aparıldıqda, yaxud icarəçinin hesabına aparılaraq, icarə haqqı ilə əvəzləşdirildikdə Vergi Məc. 115-ci maddəsinin müddəaları icarəçiyə tətbiq edilir (VM maddə 115.6)"
  ]
},
   {
  numb: 28,
  question: "İcarəçinin balansında uçota alınmayan əsas vəsaitlərin təmirinə çəkilən və icarə haqqı ilə əvəzləşdirilməyən, yaxud icarəyə götürən tərəfindən əvəzi ödənilməyən xərclər icarəçi tərəfindən kapitallaşdırılaraq təmir edilən əsas vəsaitlər necə amortizasiya olunur?",
  answer: "B)	Əsas vəsaitin aid olduğu kateqoriya üzrə Məcəllənin 114.3-cü maddəsində müəyyən edilmiş amortizasiya dərəcəsi ilə amortizasiya olunur",
  options: [
    "A)	Təmir xərclərinin faktiki məbləği müvafiq kateqoriyaya aid əsas vəsaitlərin qalıq dəyərinə aid edilir, lakin amortizasiya hesablanmır",
    "B)	Əsas vəsaitin aid olduğu kateqoriya üzrə Məcəllənin 114.3-cü maddəsində müəyyən edilmiş amortizasiya dərəcəsi ilə amortizasiya olunur",
    "C)	25% hesabı ilə amortizasiya hesablanır",
    "D)	7% hesabı ilə amortizasiya hesablanır"
  ]
},
   {
  numb: 29,
  question: "Əsas vəsaitlərin hər bir kateqoriyasının ilin sonuna qalıq dəyəri sıfra bərabər ol¬duqda, təmir xərcləri və amortizasiya necə hesablanır?",
  answer: "C)	Təmir xərclərinin faktiki məbləği müvafiq kateqoriyaya aid əsas vəsaitlərin qalıq dəyərinə aid edilir və Vergi Məcəlləsinin müddəalarına uyğun olaraq amortizasiya hesablanır",
  options: [
    "A)	Təmir xərclərinin faktiki məbləği müvafiq kateqoriyaya aid əsas vəsaitlərin qalıq dəyərinə aid edilir, lakin amortizasiya hesablanmır",
    "B)	Yalnız amortizasiya hesablanır",
    "C)	Təmir xərclərinin faktiki məbləği müvafiq kateqoriyaya aid əsas vəsaitlərin qalıq dəyərinə aid edilir və Vergi Məcəlləsinin müddəalarına uyğun olaraq amortizasiya hesablanır",
    "D)	Təmir xərcləri və amortizasiya hesablanmır"
  ]
},
   {
  numb: 30,
  question: "Vergi Məcəlləsinin müddəaları vergi ödəyicilərinin digər mənbələr hesabına təmir işlərini həyata keçirməsini qadağan edirmi?",
  answer: "D)	Yalnız təmir xərclərinin gəlirdən çıxılan məbləğini məhdudlaşdırır və vergi ödəyicilərinin digər mənbələr hesabına təmir işlərini həyata keçirməsini qadağan etmir",
  options: [
    "A)	Təmir xərclərinin gəlirdən çıxılan məbləğini məhdudlaşdırır və vergi ödəyicilərinin digər mənbələr hesabına təmir işlərini həyata keçirməsini qadağan edir",
    "B)	Təmir xərclərinin gəlirdən çıxılan məbləğini məhdudlaşdırmır və vergi ödəyicilərinin digər mənbələr hesabına təmir işlərini həyata keçirməsini qadağan etmir",
    "C)	Yalnız təmir xərclərinin gəlirdən çıxılmayan məbləğini məhdudlaşdırır və vergi ödəyicilərinin digər mənbələr hesabına təmir işlərini həyata keçirməsini qadağan etmir",
    "D)	Yalnız təmir xərclərinin gəlirdən çıxılan məbləğini məhdudlaşdırır və vergi ödəyicilərinin digər mənbələr hesabına təmir işlərini həyata keçirməsini qadağan etmir"
  ]
},
   {
  numb: 31,
  question: "Öz işçilərinin xeyrinə əmlakın zərərdən sığortalanması üzrə sığorta haqları hansı qaydada gəlirdən çıxılır?",
  answer: "B)	Gəlirdən çıxılmır",
  options: [
    "A)	Sığorta haqqının 50 faizi gəlirdən çıxılır",
    "B)	Gəlirdən çıxılmır",
    "C)	Gəlirdən tam məbləğdə çıxılır",
    "D)	Sığorta ödənişi ilə sığorta haqqı arasındakı fərq gəlirdən çıxılır"
  ]
},
   {
  numb: 32,
  question: "Xarici sığortaçılarla bağlanmış həyat sığortası müqavilələri üzrə sığorta haqları hansı qaydada gəlirdən çıxılır?",
  answer: "C)	Gəlirdən çıxılmır",
  options: [
    "A)	Gəlirdən tam məbləğdə çıxıhr ",
    "B) 50 faiz məbləğində gəlirdən çıxıhr",
    "C)	Gəlirdən çıxılmır",
    "D)	Sığorta haqları ilə sığorta ödənişləri arasındakı fərq gəlirdən çıxılır"
  ]
},
   {
  numb: 33,
  question: "Aşağıdakılardan hansı doğru olanlara aiddir?",
  answer: "C)	Fiziki şəxsin Azərbaycan Respublikası sığortaçıları ilə 3 ildən az olmayan müddətə bağlanmış və sığorta ödənişinin sığorta müqaviləsinin qüvvəyə mindiyi andan etibarən 3 illik müddət keçdikdən sonra verilməsini nəzərdə tutan həyatın yığım sığortası və pensiya sığortası üzrə bağladığı sığorta müqavilələri əsasında vergiyə cəlb olunan gəlirlərinin 50 faizindən çox olmayan hissəsindən hesablayıb ödədiyi sığorta haqları yalnız bank vasitəsilə sığortaçının bank hesabına ödənildikdə vergitutma məqsədləri üçün işəgötürən tərəfindən həmin fiziki şəxsin muzdlu işlə əlaqədar ahnan gəlirindən çıxılır",
  options: [
    "A)	Fiziki şəxsin Azərbaycan Respublikası sığortaçıları ilə 3 ildən az olmayan müddətə bağlanmış və sığorta ödənişinin sığorta müqaviləsinin qüvvəyə mindiyi andan etibarən 3 illik müddət keçdikdən sonra verilməsini nəzərdə tutan həyatın yığım sığortası və pensiya sığortası üzrə bağladığı sığorta müqavilələri əsasında vergiyə cəlb olunan gəlirlərinin 50 faizindən çox olmayan hissəsindən hesablayıb ödədiyi sığorta haqları vergitutma məqsədləri üçün işəgötürən tərəfindən həmin fiziki şəxsin muzdlu işlə əlaqədar ahnan gəlirindən çıxılır",
    "B)	Fiziki şəxsin Azərbaycan Respublikası sığortaçıları ilə 2 ildən az olmayan müddətə bağlanmış və sığorta ödənişinin sığorta müqaviləsinin qüvvəyə mindiyi andan etibarən 2 illik müddət keçdikdən sonra verilməsini nəzərdə tutan həyatın yığım sığortası və pensiya sığortası üzrə bağladığı sığorta müqavilələri əsasında vergiyə cəlb olunan gəlirlərinin 50 faizindən çox olmayan hissəsindən hesablayıb ödədiyi sığorta haqları yalnız bank vasitəsilə sığortaçının bank hesabına ödənildikdə vergitutma məqsədləri üçün işəgötürən tərəfindən həmin fiziki şəxsin muzdlu işlə əlaqədar ahnan gəlirindən çıxılır",
    "C)	Fiziki şəxsin Azərbaycan Respublikası sığortaçıları ilə 3 ildən az olmayan müddətə bağlanmış və sığorta ödənişinin sığorta müqaviləsinin qüvvəyə mindiyi andan etibarən 3 illik müddət keçdikdən sonra verilməsini nəzərdə tutan həyatın yığım sığortası və pensiya sığortası üzrə bağladığı sığorta müqavilələri əsasında vergiyə cəlb olunan gəlirlərinin 50 faizindən çox olmayan hissəsindən hesablayıb ödədiyi sığorta haqları yalnız bank vasitəsilə sığortaçının bank hesabına ödənildikdə vergitutma məqsədləri üçün işəgötürən tərəfindən həmin fiziki şəxsin muzdlu işlə əlaqədar ahnan gəlirindən çıxılır",
    "D)	Fiziki şəxsin Azərbaycan Respublikası sığortaçıları ilə 3 ildən az olmayan müddətə bağlanmış və sığorta ödənişinin sığorta müqaviləsinin qüvvəyə mindiyi andan etibarən 3 illik müddət keçdikdən sonra verilməsini nəzərdə tutan həyatın yığım sığortası və pensiya sığortası üzrə bağladığı sığorta müqavilələri əsasında vergiyə cəlb olunan gəlirlərinin 50 faizindən çox olmayan hissəsindən hesablayıb ödədiyi sığorta haqları nağd və yaxud bank vasitəsilə sığortaçının bank hesabına ödənildikdə vergitutma məqsədləri üçün işəgötürən tərəfindən həmin fiziki şəxsin muzdlu işlə əlaqədar ahnan gəlirindən çıxılır"
  ]
},
   {
  numb: 34,
  question: "Sığorta müqaviləsinə vaxtından əvvəl xitam verildikdə, ödənilmiş sığorta haqları vergiyə cəlb olunurmu?",
  answer: "B)	Sığortaçı tərəfindən ödəmə mənbəyində vergiyə cəlb olunur.",
  options: [
    "A)	Olunmur",
    "B)	Sığortaçı tərəfindən ödəmə mənbəyində vergiyə cəlb olunur.",
    "C)	Sığortalı tərəfindən gəlir vergisinə cəlb olunur",
    "D)	Tərəflərin razılğı əsasında vergiyə cəl olunur"
  ]
},
   {
  numb: 35,
  question: "Geoloji-kəşfiyyat işlərinə və təbii ehtiyatların hasilatına hazırlıq işlərinə çəkilən xərclər hansı qaydada gəlirdən çıxılır?",
  answer: "D)	Amortizasiya ayırmaları şəklində gəlirdən çıxılır",
  options: [
    "A)	Xərclərin 50 faizi gəlirden çıxılır",
    "B)	Tam məbləğdə gəlirdən çıxılır",
    "C)	Gəlirdən çıxılmır",
    "D)	Amortizasiya ayırmaları şəklində gəlirdən çıxılır"
  ]
},
   {
  numb: 36,
  question: "Geoloji-kəşfiyyat işlərini aparmaq və təbii ehtiyatlan emal, yaxud istismar etmək hüquqlarını əldə etmək üçün qeyri-maddi aktivlərə çəkilən xərclərə də gəlirdən çıxılırmı?.",
  answer: "A)	Amortizasiya ayırmaları şəklində gəlirdən çıxılır",
  options: [
    "A)	Amortizasiya ayırmaları şəklində gəlirdən çıxılır",
    "B)	Tam məbləğdə gəlirdən çıxılır",
    "C)	Gəlirdən çıxılmır",
    "D)	Xərclərin 50 faizi gəlirden çıxılır"
  ]
},
   {
  numb: 37,
  question: "Qeyri-maddi aktivlərə çəkilən xərclər gəlirdən hansı qaydada çıxılır?",
  answer: "D)	Vergi Məcəlləsi ilə müəyyən edilən amortizasiya dərəcəsi ilə hesablanan amortizasiya ayırmaları şəklində",
  options: [
    "A)	Gəlirdən çıxılmır",
    "B)	Vergi Məcəlləsi ilə müəyyən edilən amortizasiya dərəcəsi ilə hesablanan amortizasiya ayırmalarının 50 faizi miqdarında",
    "C)	Vergi Məcəlləsi ilə müəyyən edilən amortizasiya dərəcəsi ilə hesablanan amortizasiya ayırmalarının 75 faizi miqdarında",
    "D)	Vergi Məcəlləsi ilə müəyyən edilən amortizasiya dərəcəsi ilə hesablanan amortizasiya ayırmaları şəklində"
  ]
},
   {
  numb: 38,
  question: "Qeyri-maddi aktivlərin alınmasına və ya istehsalına çəkilən xərclər vergi ödəyicisi¬nin vergiyə cəlb olunan gəlirinin hesablanması zamanı gəlirdən çıxılmışdırsa, həmin xərciər amortizasiya olunmalı qeyri-maddi aktivlərin dəyərinə aid edilirmi?",
  answer: "B)	Aid edilmir",
  options: [
    "A)	Aid edilir",
    "B)	Aid edilmir",
    "C)	Aid edilib - edilməməsi vergi ödəyicisi tərəfindən müəyyənləşdirilir",
    "D)	50%-i qeyri-maddi aktivlərin dəyərinə aid edilir"
  ]
},
   {
  numb: 39,
  question: "Aşağıdakılardan hansı gəlirdən çıxılan məbləğlərə aiddir?",
  answer: "D)	Gəlirin əldə edilməsi ilə bağh mülki hüquq müqavilələri üzrə dəbbə pulu (cərimə)",
  options: [
    "A)	Vergi Məcəlləsi ilə müəyyən edilmiş qaydada hesablanmış faizlər",
    "B)	Digər dövlətlərin ərazilərində ödənilmiş gəlirdən hesablanan hər hansı digər vergi",
    "C)	Vergi Məcəlləsindən başqa digər qanunlarla müəyyən edilmiş qaydada hesablanmış faizlr",
    "D)	Gəlirin əldə edilməsi ilə bağh mülki hüquq müqavilələri üzrə dəbbə pulu (cərimə)"
  ]
},
   {
  numb: 40,
  question: "Aşağıdakılardan hansı gəlirdən çıxılan məbləğlərə aiddir?",
  answer: "B)	Gəlirin əldə edilməsi ilə bağh mülki hüquq müqavilələri üzrə icranın gecikdirilməsi ilə əlaqədar vurulmuş zərərin əvəzinin ödənilməsi",
  options: [
    "A)	Vergi Məcəlləsindən başqa digər qanunlarla müəyyən edilmiş qaydada hesablanmış inzibati cərimələr",
    "B)	Gəlirin əldə edilməsi ilə bağh mülki hüquq müqavilələri üzrə icranın gecikdirilməsi ilə əlaqədar vurulmuş zərərin əvəzinin ödənilməsi",
    "C)	Digər dövlətlərin ərazilərində ödənilmiş mənfəət vergisi",
    "D)	Vergi Məcəlləsi ilə müəyyən edilmiş qaydada hesablanmış maliyyə sanksiyaları"
  ]
},
   {
  numb: 41,
  question: "Aşağıdakı hansı verginin gəlirdən çıxılmasına yol verilmir?",
  answer: "C) Mənfəət vergisinin",
  options: [
    "A)	Torpaq vergisinin",
    "B)	Əmlak vergisinin",
    "C) Mənfəət vergisinin",
    "D) Mədən vergisinin"
  ]
},
   {
  numb: 42,
  question: "Aşağıdakı hansı vergilərin gəlirdən çıxılmasma yol verilmir ?",
  answer: "C)	Gəlir vergisi və mənfəət vergisinin",
  options: [
    "A)	Torpaq vergisi və mənfəət vergisinin",
    "B)	Gəlir vergisi və əmlak vergisinin",
    "C)	Gəlir vergisi və mənfəət vergisinin",
    "D)	Mədən vergisi və ƏDV-nin"
  ]
},
   {
  numb: 43,
  question: "Sığortalının və təkrarsığortalınm ödədiyi sığorta haqları gəlirdən çıxılırmı?",
  answer: "A)	Xarici sığortaçılar ilə bağlanmış həyat sığortası müqavilələri üzrə sığorta haqları istisna olmaqla, sığortalının və təkrarsığortalınm ödədiyi sığorta haqları gəlirdən çıxılır",
  options: [
    "A)	Xarici sığortaçılar ilə bağlanmış həyat sığortası müqavilələri üzrə sığorta haqları istisna olmaqla, sığortalının və təkrarsığortalınm ödədiyi sığorta haqları gəlirdən çıxılır",
    "B)	Yalnız xarici sığortaçılar ilə bağlanmış həyat sığortası müqavilələri üzrə sığorta haqları gəlirdən çıxılır",
    "C)	Gəlirdən çıxılmır",
    "D)	Sığorta haqları ilə sığorta ödənişləri arasındakı fərq gəlirdən çıxılır"
  ]
},
];
