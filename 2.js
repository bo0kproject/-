// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Muzdlu işçi kimi cəlb etmədiyi fiziki şəxslərə hüquqi şəxslər və ya fərdi sahibkarlar tərəfindən ödənilən maddi yardım, mükafat və təqaüdlərdən gəlir vergisi necə tutulur?",
  answer: "A)	14 faiz",
  options: [
    "A)	14 faiz",
    "B)	10 faiz",
    "C)	3.0000 manat x 14% + 30.0000 manatdan çox olan məbləğin 25 faizi",
    "D)	10000 manat x 14% + 10000 manatdan çox olan məbləğin 25 faizi"
  ]
},
  {
  numb: 2,
  question: "Vəkil qurumlarının tərkibində fəaliyyət göstərən vəkillərin həmin qurum tərəfindən ödənilən gəlirlərindən vergi necə tutulur?",
  answer: "D)	14 faiz",
  options: [
    "A)	25 faiz",
    "B)	10 faiz",
    "C)	3.0000 manat x 14% + 30.0000 manatdan çox olan məbləğin 25 faizi",
    "D)	14 faiz"
  ]
},
  {
  numb: 3,
  question: "48.	Hüquqi şəxs yaratmadan sahibkarlıq fəaliyyətini həyata keçirən fiziki şəxslərin vergiyə cəlb edilən gəlirlərindən gəlir vergisi hansı qaydada tutlur?",
  answer: "A)	20 faiz",
  options: [
    "A)	20 faiz",
    "B)	14 faiz",
    "C)	30.000 manat x 14% + 30.0000 manatdan çox olan məbləğin 25 faizi",
    "D)	30.000 manatadək vergi tutulmur, 30.000 manatdan yuxan məbləğin 20 faizi"
  ]
},
  {
  numb: 4,
  question: "49.	Xüsusi notariuslar tərəfindən bir ay ərzində aparılan notariat hərəkətlərinə, habelə notariat hərəkətləri ilə əlaqədar göstərilən xidmətlərə görə alman haqlar hansı qaydada gəlir vergisinə cəlb olunur?",
  answer: "C) xərclər çıxılmadan 10% dərəcə ilə",
  options: [
    "A)	ödəmə mənbəyində 10% dərəcə ilə ",
    "B)	xərclər çıxıldıqdan sonra 10% dərəcə ilə ",
    "C) xərclər çıxılmadan 10% dərəcə ilə",
    "D) xərclər çıxılmadan 14% dərəcə ilə"
  ]
},
  {
  numb: 5,
  question: "İdman mərc oyunlarından, lotereyalardan, habelə digər yarışlardan və müsabiqələrdən pul şəklində əldə edilən uduşlardan (mükafatlardan) iştirakla bağlı ödənilən pul vəsaiti (pul qoyuluşu) çıxılmaqla qalan məbləğdən (Azərbaycan Respublikasının hüdudlarından kənarda təşkil edilən mərc oyunlarından, lotereyalardan, yarışlardan və müsabiqələrdən əldə edilən nağd pul vəsaiti istisna olmaqla) hansı qaydada və neçə faiz dərəcə ilə vergi tutulur?",
  answer: "B)	pul şəklində əldə olunan uduşdan (mükaftdan) iştirakla bağlı ödənilən pul vəsaiti (pul qoyuluşu) çıxılmaqla qalan məbləğdən ödəmə mənbəyində 10% dərəcə ilə",
  options: [
    "A)	tam məbləğdə vergiyə cəlb olunur",
    "B)	pul şəklində əldə olunan uduşdan (mükaftdan) iştirakla bağlı ödənilən pul vəsaiti (pul qoyuluşu) çıxılmaqla qalan məbləğdən ödəmə mənbəyində 10% dərəcə ilə",
    "C)	gəlir vergisindən azaddır",
    "D)	pul şəklində əldə olunan uduşdan (mükaftdan) iştirakla bağlı ödənilən pul vəsaiti (pul qoyuluşu) çıxılmaqla qalan məbləğdən ödəmə mənbəyində 14% dərəcə ilə"
  ]
},
{
  numb: 6,
  question: "İdman mərc oyunlarından əldə edilən uduşlardan hansı faiz dərəcəsi ilə vergi tutu-lur? ",
  answer: "D) 10%",
  options: [
    "A) 15%",
    "B) 5%",
    "C) 20%",
    "D) 10%"
  ]
},
{
  numb: 7,
  question: "Vergi ödəyicisi kimi vergi orqanında uçotda olmayan fiziki şəxslərin “Nağdsız hesablaşmalar haqqında” Azərbaycan Respublikasının Qanununun 3.5-ci maddəsində göstərilən malların təqdim edilməsindən əldə edilən gəlirlərindən (V Məcəlləsi ilə vergidən azad olunan gəlirlər istisna olmaqla) xərclər çıxılmadan neçə faiz dərəcə ilə vergi tutulur.",
  answer: "D) 5 faiz",
  options: [
    "A) 14 faiz",
    "B) 6 faiz",
    "C) 2 faiz",
    "D) 5 faiz"
  ]
},
{
  numb: 8,
  question: "Azərbaycan vətəndaşı olmayan diplomatik və konsulluq əməkdaşının rəsmi məşğul-luğundan gəliri hansı dərəcə ilə vergiyə cəlb olunur?",
  answer: "D) gəlir vergisindən azaddır",
  options: [
    "A) 12 faiz ",
    "B) 25 faiz ",
    "C) 10 faiz ",
    "D) gəlir vergisindən azaddır"
  ]
},
{
  numb: 9,
  question: "Azərbaycan Respublikasının rezidenti olmayan şəxsin iş yerindən gəlir - əgər bu gəlir Azərbaycan Respublikasının rezidenti olmayan işəgötürən tərəfindən, yaxud onun adından ödənilirsə hansı dərəcə ilə vergiyə cəlb olunur?",
  answer: "A) gəlir vergisindən azaddır ",
  options: [
    "A) gəlir vergisindən azaddır ",
    "B) 25 faiz ",
    "C) 10 faiz ",
    "D) 14 faiz "
  ]
},
{
  numb: 10,
  question: "Xaricdə müalicə haqlarını, o cümlədən cərrahiyyə əməliyyatının haqqını ödəmək üçün fiziki şəxsə verilən maddi yardımın dəyərinin hansı məbləğindən vergi tutulur?",
  answer: "C)	50.000 manatdan çox olan hissəsindən",
  options: [
    "A)	maddi yardımın tam məbləğindən",
    "B)	maddi yardım məbləğinin 50 faizindən",
    "C)	50.000 manatdan çox olan hissəsindən",
    "D)	şərti maliyyə vahidinin 50 mislindən çox olan hissəsindən"
  ]
},
{
  numb: 11,
  question: "Təqvim ili ərzində alınan hədiyyələrin hansı məbləğindən gəlir vergisi tutulur?",
  answer: "B)	1000 manatdan çox olan hissəsindən",
  options: [
    "A)	tam məbləğindən",
    "B)	1000 manatdan çox olan hissəsindən",
    "C)	2000 manatdan çox olan hissəsindən",
    "D)	20000 manatdan çox olan hissəsindən"
  ]
},
{
  numb: 12,
  question: "Təq. ili ərzində alman mirasların dəyərinin hansı məbləğindən gəlir vergisi tutulur?",
  answer: "A)	20000 manatdan çox olan hissəsindən",
  options: [
    "A)	20000 manatdan çox olan hissəsindən",
    "B)	10000 manatdan çox olan hissəsindən",
    "C)	40000 manatdan çox olan hissəsindən",
    "D)	30000 manatdan çox olan hissəsindən"
  ]
},
{
  numb: 13,
  question: "Ölkə daxilində müalicə haqlarını, o cümlədən cərrahiyyə əməliyyatının haqqını ödəmək üçün maddi yardımın, birdəfəlik müavinətin dəyərini ödəmək üçün fiziki şəxsə verilmiş maddi yardımın dəyərinin hansı hissəsi gəlir vergisindən azaddır?",
  answer: "D) 10000 manatadək olan hissəsi",
  options: [
    "A)	1000 manatadək olan hissəsi ",
    "B)	20000 manatadək olan hissəsi ",
    "C) 2000 manatadək olan hissəsi",
    "D) 10000 manatadək olan hissəsi"
  ]
},
{
  numb: 14,
  question: "Təhsil və ya müalicə (o cümlədən cərrahiyyə əməliyyatı üçün) haqlarını ödəmək üçün maddi yardım, birdəfəlik müavinət almış şəxslərə güzəşt hansı halda verilir?",
  answer: "D)	Həmin məbləğlərin təyinatı üzrə ödənildiyini təsdiq edən müvafiq sənədlər təqdim edildikdə",
  options: [
    "A)	Həmin məbləğlər dövlət büdcəsinin vəsaiti hesabına ödənildikdə",
    "B)	Təhsil və ya müalicə haqları almış şəxslər vergi ödəyicisi olduqda",
    "C)	Təhsil və ya müalicə haqları yalnız qeyri-rezident şəxslər tərəfindən ödənildikdə",
    "D)	Həmin məbləğlərin təyinatı üzrə ödənildiyini təsdiq edən müvafiq sənədlər təqdim edildikdə"
  ]
},
{
  numb: 15,
  question: "Fiziki şəxsin təqvim ili ərzində ailə üzvlərindən aldığı hədiyyə, maddi yardım və mi-raslar hansı faiz dərəcəsi ilə vergiyə cəlb olunur?",
  answer: "C) gəlir vergisindən azaddır ",
  options: [
    "A) 12 faiz ",
    "B) 14 faiz ",
    "C) Gəlir vergisindən azaddır ",
    "D) 35 faiz"
  ]
},
{
  numb: 16,
  question: "Hədiyyə və maddi yardım vergi ödəyicisi olan fiziki şəxsin ailə üzvlərindən alındığı halda onun dəyərinin hansı məbləğindən vergi tutulur?",
  answer: "A)	Vergidən azaddır",
  options: [
    "A)	Vergidən azaddır",
    "B)	Hədiyyə və maddi yardımın 10000 manatdan artıq olan hissəsindən",
    "C)	Hədiyyə və maddi yardımın 1000 manatdan artıq olan hissəsindən",
    "D)	H'diyyə və maddi yardımın tam məbləğindən"
  ]
},
{
  numb: 17,
  question: "Miras vergi ödəyicisinin ailə üzvündən alındığı halda mirasın hansı məbləğindən gə-lir vergisi tutulur?",
  answer: "C)	vergi tutulmur",
  options: [
    "A)	miras məbləğinin 50 faizindən",
    "B)	1000 manatdan çox olan hissəsindən",
    "C)	vergi tutulmur",
    "D)	20000 manatdan çox olan hissəsindən"
  ]
},
{
  numb: 18,
  question: "Şəhid olmuş şəxslərin ailə üzvlərinin əldə etdiyi maddi yardımın hansı hissəsi gəlir vergisindən azaddır?",
  answer: "C) 20000 manatadək olan hissəsi",
  options: [
    "A)	1000 manatadək olan hissəsi ",
    "B)	10000 manatadək olan hissəsi",
    "C) 20000 manatadək olan hissəsi",
    "D) 2000 manatadək olan hissəsi"
  ]
},
{
  numb: 19,
  question: "Azərbaycan Respublikasının azadlığı, suverenliyi və ərazi bütövlüyü uğrunda aparılan hərbi əməliyyatlar nəticəsində əlilliyi müəyyən edilmiş hərbi qulluqçuların və mülki şəxslərin əldə etdiyi maddi yardımın hansı hissəsi gəlir vergisindən azaddır?",
  answer: "A)	20000 manatadək olan hissəsi",
  options: [
    "A)	20000 manatadək olan hissəsi",
    "B)	10000 manatadək olan hissəsi",
    "C) 15000 manatadək olan hissəsi",
    "D) 2000 manatadək olan hissəsi"
  ]
},
{
  numb: 20,
  question: "Maddi yardım almış mülki şəxslərə güzəşt hansı halda verilir?",
  answer: "B)	Müvafiq orqan (qurum) tərəfindən şəxsin hərbi əməliyyatlar nəticəsində əlilliyi müəyyən edildiyini təsdiq edən arayış təqdim edilmiş olsun",
  options: [
    "A)	Bütün hallarda",
    "B)	Müvafiq orqan (qurum) tərəfindən şəxsin hərbi əməliyyatlar nəticəsində əlilliyi müəyyən edildiyini təsdiq edən arayış təqdim edilmiş olsun",
    "C)	Həkimin arayışı olduqda",
    "D)	Əlilin müracəti olduqda"
  ]
},
{
  numb: 21,
  question: "Əmək qabiliyyətinin müvəqqəti itirilməsinə görə ödənilən müavinətdən gəlir vergisi hansı qaydada tutulur?",
  answer: "C)	ümumi qaydada vergiyə cəlb olunur",
  options: [
    "A)	55 manatdan çox olan hissəsindən",
    "B)	vergi tutulmur",
    "C)	ümumi qaydada vergiyə cəlb olunur",
    "D)	50 faizi vergiyə cəlb olunur"
  ]
},
{
  numb: 22,
  question: "Fiziki şəxslərə ödənilmiş dövlət müavinətləri hansı qaydada vergiyə cəlb edilir?",
  answer: "C)	Vergiyə cəlb edilmir",
  options: [
    "A)	1000 manatdan artıq olan hissəsi vergiyə cəlb olunur",
    "B)	100 manatdan artıq olan hissəsi vergiyə cəlb edilir",
    "C)	Vergiyə cəlb edilmir",
    "D)	2000 manatdan artıq olan hissəsindən vergi tutulmur"
  ]
},
{
  numb: 23,
  question: "Alimentlər gəlir vergisinə hansı qaydada cəlb edilir?",
  answer: "A)	Gəlir vergisindən azaddır",
  options: [
    "A)	Gəlir vergisindən azaddır",
    "B)	ümumi qaydada vergiyə cəlb edilir ",
    "C) qismən cəlb edilir",
    "D) vergi aliment ödəyən tərəfindən ödənilir "
  ]
},
{
  numb: 24,
  question: "Fiziki şəxsin əsas iş yerində (əmək kitabçasının olduğu yerdə) ayliq gəliri 2500 man-atadək olduqda, gəlir vergisinə münasibətdə hansı məbləğdə azadolma tətbiq edilir?",
  answer: "A)	2500 manatadək olduqda, 200 manat",
  options: [
    "A)	2500 manatadək olduqda, 200 manat",
    "B)	Minimum əmək haqqının 1 misli",
    "C)	2500 manatadək olduqda, 100 manat",
    "C)	2500 manatadək olduqda, 100 manat"
  ]
},
{
  numb: 25,
  question: "Fiziki şəxsin əsas iş yerində (əmək kitabçasının olduğu yerdə) illik gəliri зо.ооо ma-natadək olduqda, gəlir vergisinə münasibətdə hansı məbləğdə azadolma tətbiq edilir?",
  answer: "B)	2.400 manat",
  options: [
    "A)	Əmək qabiliyyətli əhali üçün adambaşına minimum istehlak səbətinin dəyərinin 12 misli",
    "B)	2.400 manat",
    "C)	8.000 manat",
    "D)	Minimum əmək haqqının 12 misli"
  ]
},
{
  numb: 26,
  question: "Qiymətli daşlardan və metallardan, qiymətli daşlar və metalların məmulatlarından, incəsənət əsərlərindən, əntiq əşyalardan və vergi ödəyicisinin sahibkarlıq fəaliyyətində isti¬fadə edilən və ya istifadə edilmiş əmlakdan başqa daşman maddi əmlakın təqdim edilməsin¬dən əldə edilən gəlir hansı qaydada gəlir vergisinə cəlb edilir?",
  answer: "C)	Əldə edilən gəlirdən vergi tutulmur",
  options: [
    "A)	200 manatdan çox olan hissəsindən vergi tutulur",
    "B)	50 faizi vergiyə cəlb olunur",
    "C)	Əldə edilən gəlirdən vergi tutulmur",
    "D)	Tam məbləğdən vergi tutulur"
  ]
},
{
  numb: 27,
  question: "Həyatın yığım sığortası və pensiya sığortası üzrə 3 ildən az olmayan müddətə bağ-lanan müqavilənin qüvvəyə mindiyi andan etibarən 3 illik müddət keçdikdən sonra sığor-taçılara ödənilən hər hansı məbləğlərin hansı hissəsi vergiyə cəlb olunur?",
  answer: "D)	Sığortaolunanın vergiyə cəlb olunan gəlirlərinin 50 faizindən çox olmayan hissəsi gəlir vergisindən azaddır",
  options: [
    "A)	1000 manatdan artıq olan hissəsi",
    "B) 2000 manatdan artıq olan hissəsi",
    "C)	3000 manatdan artıq olan hissəsi",
    "D)	Sığortaolunanın vergiyə cəlb olunan gəlirlərinin 50 faizindən çox olmayan hissəsi gəlir vergisindən azaddır"
  ]
},
{
  numb: 28,
  question: "Fiziki şəxsə dəymiş zərərlərin ödənilməsi ilə bağlı alınan kompensasiya ödənişləri gəlir vergisinə hansı qaydada cəlb olunur?",
  answer: "A)	Vergidən azaddır",
  options: [
    "A)	Vergidən azaddır",
    "B)	200 manatdan çox olan hissəsindən vergi tutulur",
    "C)	Tam məbləğdə vergi tutulur",
    "D)	Kompensasiya ödənişlərinin 50 faizi vergiyə cəlb olunur"
  ]
},
{
  numb: 29,
  question: "Fiziki şəxslərin bilavasitə kənd təsərrüfatı məhsullarının istehsalından əldə etdikləri gəlirləri gəlir vergisinə hansı qaydada cəlb olunur?",
  answer: "A) Vergidən azaddır",
  options: [
    "A) Vergidən azaddır",
    "B) 200 manatdan çox olan hissəsindən vergi tutulur",
    "C) gəlirin 50 faizi vergiyə cəlb olunur ",
    "D) tam məbləğdən vergi tutulur"
  ]
},
{
  numb: 30,
  question: "Ağac materiallardan məişət alətlərinin hazırlanması sahəsində fəaliyyət göstərən fi-ziki şəxslərin gəliri hansı qaydada vergiyə cəlb olunur?",
  answer: "A)	Vergidən azaddır",
  options: [
    "A)	Vergidən azaddır",
    "B)	Vergiyə cəlb edilən gəlir 30 manat azaldılır",
    "C) 100 manatdan artıq olan hissəsindən vergi tutulur",
    "D) bələdiyyələr tərəfindən müəyyənləşdirilir"
  ]
},
{
  numb: 31,
  question: "Fiziki şəxslərin xalq musiqi alətlərinin istehsalından əldə etdikləri gəlirləri gəlir vergisinə necə cəlb olunur?",
  answer: "B)	Vergi tutulmur",
  options: [
    "A)	Gəlirin 50 faizi vergiyə cəlb ",
    "B)	Vergi tutulmur",
    "C) Tam məbləğdən vergi tutulur",
    "D) 200 manatdan çox olan hissəsindən vergi tutulur"
  ]
},
{
  numb: 32,
  question: "Fiziki şəxslərə kompensas. xarakt ödəm, gəlir vergisinə hansı qaydada cəlb olunur?",
  answer: "A)	gəlir vergisindən azaddır",
  options: [
    "A)	Gəlir vergisindən azaddır",
    "B)	Gəlir vergiyə cəlb olunur",
    "C)	Kompensasiyanın xarekterindən asılı olaraq vergiyə cəlb edilə bilər",
    "D)	Ödənilmiş kompensasiyanın 200 manatdan çox olan hissəsi vergiyə cəlb olunur"
  ]
},
{
  numb: 33,
  question: "Nazirlər Kabinetinin qərarı ilə müəyyən edilmiş ezamiyyə xərclərinin məbləğləri gəlir vergisinə necə cəlb olunur?",
  answer: "A) Cəlb olunmur",
  options: [
    "A) Cəlb olunmur",
    "B) 10 faizi",
    "C) 14 faizi",
    "D) 50 faizi"
  ]
},
{
  numb: 34,
  question: "Ağır, zərərli və təhlükəli istehsalatlarda işçilərin tibbi müayinədən keçirilməsi üçün işəgötürənin hesabına qanunvericiliklə müəyyən edilmiş qaydada ödənilmiş xərc məbləğləri gəlir vergisinə cəlb olunurmu?",
  answer: "D)	Gəlir vergisindən azaddır",
  options: [
    "A)	200 manatdan çox olan hissəsi vergiyə cəlb olunur",
    "B)	Ümumi qaydada vergiyə cəlb olunur",
    "C)	100 manatdan çox olan hissəsi vergiyə cəlb olunur",
    "D)	Gəlir vergisindən azaddır"
  ]
},
{
  numb: 35,
  question: "Əmək şəraiti zərərli, ağır olan və yeraltı işlərdə çalışan işçilərə verilən pulsuz müalicə-profilaktik yeməklər, süd və ona bərabər tutulan digər məhsulların dəyəri və işçilərə müəyyən edilmiş müddətlərdə və tələb olunan çeşidlərdə verilən xüsusi geyim, xüsusi ayaqqabı və digər fərdi mühafizə vasitələrinin dəyəri gəlir vergisinə cəlb olunurmu?",
  answer: "C)	Gəlir vergisindən azaddır",
  options: [
    "A)	Bazar qiyməti ilə dəyəri vergiyə cəlb olunur",
    "B)	Ümumi qaydada vergiyə cəlb olunur",
    "C)	Gəlir vergisindən azaddır",
    "D)	200 manatdan çox olan hissəsi vergiyə cəlb olunur"
  ]
},
{
  numb: 36,
  question: "İstehsalatdan ayrılmaqla təhsil almağa göndərilmiş tələbələrə, aspirantlara müəs¬sisə və təşkilatların hesabına ödənilən təqaüdün hansı hissəsi vergiyə cəlb edilir?",
  answer: "B) cəlb edilmir ",
  options: [
    "A) 30 faizi ",
    "B) cəlb edilmir ",
    "C) 40 faizi ",
    "D) 50 faizi "
  ]
},
{
  numb: 37,
  question: "Təbii fəlakət və digər fövqəladə hallarla əlaqədar müvafiq icra hakimiyyəti orqanlarının qərarları əsasında, habelə xarici dövlətlər və digər təşkilatlar tərəfindən göstərilən birdəfəlik yardımlar gəlir vergisinə necə cəlb olunur?",
  answer: "B) Cəlb edilmir ",
  options: [
    "A) 10 faizi",
    "B) Cəlb edilmir",
    "C) 30 faizi",
    "D) 50 faizi"
  ]
},
{
  numb: 38,
  question: "Verdikləri qana görə donorlara ödənilən kompensasiya məbləğləri və dalğıc işləri üçün pul mükafatı gəlir vergisinə necə cəlb olunur?",
  answer: "A) Cəlb olunmur ",
  options: [
    "A) Cəlb olunmur ",
    "B) Ümumi qaydada ",
    "C) 30 faizi",
    "D) 40 faizi"
  ]
},
{
  numb: 39,
  question: "İctimai təşkilatlar, xeyriyyə cəmiyyətləri və fondları tərəfindən verilən maddi yardımlar hansı qaydada gəlir vergisinə cəlb olunur?",
  answer: "D) Azaddır",
  options: [
    "A) 10 faizi",
    "B) Ümumi qaydada",
    "C) 50 faizi",
    "D) Azaddır"
  ]
},
{
  numb: 40,
  question: "Hərbi qulluqçulara, prokurorluq orqanlarının prokurorluq işçilərinə və prokuror¬luq işçiləri olmayan hərbi qulluqçularına, hüquq mühafizə orqanlarının xüsusi rütbəsi olan əməkdaşlarına ödənilən bütün növ ödənişlər (vəzifə və hərbi (xüsusi) rütbəyə görə maaşlar istisna olmaqla), habelə, əməliyyat-axtarış fəaliyyəti subyektləri ilə əməkdaşlıq edən şəxslərə, kəşfiyyat və əks-kəşfiyyat fəaliyyəti subyektlərinə kömək edən şəxslərə ödənilən bütün növ əmək haqqı, mükafat və digər maddi təminatlar gəlir vergisinə necə cəlb olunur?",
  answer: "C)	Vergidən azaddır",
  options: [
    "A)	50 faizi vergiyə cəlb olunur",
    "B)	Mükafatın tam məbləği vergiyə cəlb olunur",
    "C)	Vergidən azaddır",
    "D)	155 manatdan çox olan hissəsindən vergi tutulur"
  ]
},
{
  numb: 41,
  question: "İşəgötürən tərəfindən işçinin hərbi və alternativ xidmətə çağırılması ilə əlaqədar ödənilən müavinətlərin məbləği gəlir vergisinə cəlb olunurmu?",
  answer: "A)	Qanunvericilikdə nəzərdə tutulan məbləği vergidən azaddır",
  options: [
    "A)	Qanunvericilikdə nəzərdə tutulan məbləği vergidən azaddır",
    "B)	Tam məbləği vergiyə cəlb olunur",
    "C)	200 manatdan yuxarı hissəsi vergiyə cəlb olunur",
    "D)	50 faizi vergiyə cəlb olunur"
  ]
},
{
  numb: 42,
  question: "Şəhər və rayon yarışlarında və müsabiqələrində pul şəklində alman mükafatların dəyəri gəlir vergisinə necə cəlb olunur",
  answer: "C)	Mükafatın 200 manatdan çox olan hissəsindən vergi tutulur",
  options: [
    "A)	Mükafatın 50 faizi vergiyə cəlb olunur",
    "B)	Mükafatın tam məbləği vergiyə cəlb olunur",
    "C)	Mükafatın 200 manatdan çox olan hissəsindən vergi tutulur",
    "D)	Mükafatın 300 manatdan çox olan hissəsindən vergi tutulur"
  ]
},
{
  numb: 43,
  question: "Yarışlarda, müsabiqələrdə əşya şəklində alınan mükafatların hansı dəyəri gəlir ver-gisinə cəlb olunur?",
  answer: "B)	Əşya şəklində olan mükafatın tam dəyəri vergiyə cəlb olunmur",
  options: [
    "A)	Mükafatın 50 faizi vergiyə cəlb olunur",
    "B)	Əşya şəklində olan mükafatın tam dəyəri vergiyə cəlb olunmur",
    "C)	Əşya şəklində olan mükafatın 300 manatdan çox olan hissəsindən vergi tutulur",
    "D)	Əşya şəklində olan mükafatın 200 manatdan çox olan hissəsindən vergi tutulur"
  ]
},
{
  numb: 44,
  question: "Beynəlxalq yarışlarda və müsabiqələrdə pul şəklində alman mükafatların dəyəri gə¬lir vergisinə necə cəlb olunur?",
  answer: "A)	Mükafatların 4000 manatdan çox olan hissəsindən vergi tutulur",
  options: [
    "A)	Mükafatların 4000 manatdan çox olan hissəsindən vergi tutulur",
    "B)	Vergi tutulmur",
    "C)	Mükafatların şərti maliyyə vahidinin 2000 mislindən çox olan hissəsindən vergi tutulur",
    "D)	Mükafatın 35 faizi vergiyə cəlb olunur"
  ]
},
{
  numb: 45,
  question: "Dövlət qulluqçusuna pensiya yaşına çatmasına görə könüllü işdən çıxması ilə əla-qədar verilən birdəfəlik haqq gəlir vergisinə hansı qaydada cəlb olunur?",
  answer: "A) Vergidən azaddır",
  options: [
    "A) Vergidən azaddır",
    "B) 1000 manatdan çox olan hissəsindən vergi tutulur",
    "C) Tam məbləğdə vergi tutulur ",
    "D) Birdəfəlik haqqın 50 faizi vergiyə cəlb olunur "
  ]
},
];
