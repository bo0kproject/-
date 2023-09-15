// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Aşağıda göstərilən hansı gəlirlərdən ödəmə mənbəyində vergi tutulmur?",
  answer: "C)	dövlət sosial təminat sistemi vasitəsilə ödənilən pensiyalar",
  options: [
    "A)	Dividend şəklində əldə edilən gəlir",
    "B)	Qeyri-rezidentə ödənilən gəlir",
    "C)	dövlət sosial təminat sistemi vasitəsilə ödənilən pensiyalar",
    "D)	hüquqi şəxslər və sahibkarlar tərəfindən ödənilən digər pensiyalar"
  ]
},
  {
  numb: 2,
  question: "Aşağıda göstərilənlərdən hansı doğrudur?",
  answer: "A)	Vergi Məcəll. 116.2-ci maddəsində nəzərdə tutulan sığorta müqaviləsinə vaxtından əvvə: xitam verildikdə, sığorta haqları ödəyən sığortaçılar ödəmə mənbəyində vergİÜİ tutmağa borCİüdUT",
  options: [
    "A)	Vergi Məcəll. 116.2-ci maddəsində nəzərdə tutulan sığorta müqaviləsinə vaxtından əvvə: xitam verildikdə, sığorta haqları ödəyən sığortaçılar ödəmə mənbəyində vergİÜİ tutmağa borCİüdUT",
    "B)	Bütün hallarda sığorta müqaviləsinə vaxtından əvvəl xitam verildikdə, sığorta haqları ödəyən sığortaçılar ödəmə mənbəyində vergini tutmağa borcludur",
    "C)	Dövlət sosial təminat sistemi vasitəsilə ödənilən pensiyalar",
    "D)	Dövlət sosial təminat sistemi vasitəsilə ödənilən pensiyalar və digər şəxslərə pensiya ödəyən hüquqi şəxslər və ya sahibkarlar ödəmə mənbəyində vergini tutmağa borcludur"
  ]
},
  {
  numb: 3,
  question: "Fiziki şəxslər tərəfindən torpaq, yaşayış və qeyri-yaşayış sahələrinin təqdim edilməsi zamanı vergi kim tərəfindən hesablanır?",
  answer: "A)	Təqdim etmə üzrə müqavilələri təsdiq edən notarius",
  options: [
    "A)	Təqdim etmə üzrə müqavilələri təsdiq edən notarius",
    "B)	Vergi ödəyicisi tərəfindən",
    "C)	Vergidən azaddır",
    "D)	Alıcı tərəfindən."
  ]
},
  {
  numb: 4,
  question: "İdman mərc oyunlarından, lotereyalardan, habelə digər yarışlardan və müsabiqələrdən pul şəklində əldə olunan uduşlardan vergini kim tutur?",
  answer: "D)	Uduşlar (mükafatlar) əldə edən şəxsə ödəmələr verən şəxs",
  options: [
    "A)	Uduşlar (mükafatlar) əldə edən şəxs",
    "B)	Vergi ödəyicisi tərəfindən",
    "C)	Vergidən azaddır",
    "D)	Uduşlar (mükafatlar) əldə edən şəxsə ödəmələr verən şəxs"
  ]
},
  {
  numb: 5,
  question: "İdman mərc oyunlarından, lotereyalardan, habelə digər yarışlardan və müsabiqələrdən pul şəklində əldə olunan uduşlardan ödəmə verən şəxslər bəyannaməni nə vaxt vergi orqanına təqdim edirlər?",
  answer: "D)	Hesabat ayından sonrakı aym 20-dən gec olmayaraq",
  options: [
    "A)	Hesabat ilindən sonrakı ilin fevral ayının 15-dən gec olmayaraq",
    "B)	Hesabat ilindən sonrakı ilin mart ayının 31-dən gec olmayaraq",
    "C)	Hesabat ayından sonrakı ayın 1 -dək",
    "D)	Hesabat ayından sonrakı aym 20-dən gec olmayaraq"
  ]
},
{
  numb: 6,
  question: "Rezident hüquqi şəxs və fərdi sahibkarlar tərəfindən ödənildiyi ha|da ödəmən həyata keçirən şəxslər, həmin gəlirlər Azərbaycan Respublikasında daimi nümayəndəli); olmayan qeyri-rezident şəxslər tərəfindən ödənildikdə, bu gəliri əldə edən şəxsin bank hesa-bının olduğu yerli bank, xarici bankın Azərbaycan Respublikasındakı filialı və ya рос rabitəsinin milli operatoru bəyannaməni nə vaxt vergi orqanına təqdim edirlər?",
  answer: "D)	Hesabat ayından sonrakı aym 20-dən gec olmayaraq",
  options: [
    "A)	Hesabat ilindən sonrakı ilin fevral ayının 15-dən gec olmayaraq",
    "B)	Hesabat ilindən sonrakı ilin mart ayının 31-dən gec olmayaraq",
    "C)	Hesabat ayından sonrakı ayın 1 -dək",
    "D)	Hesabat ayından sonrakı aym 20-dən gec olmayaraq"
  ]
},
  {
  numb: 7,
  question: "İdman mərc oyunlarından, lotereyalardan, habelə digər yarışlardan və müsabiqələrdən pul şəklində əldə olunan gəlir ödənərkən, ödəməni həyata keçirən şəxslə * deyiləndə kimlər nəzərdə tutulur?",
  answer: "B)	Rezident hüquqi şəxs və fərdi sahibkarlar tərəfindən ödənildiyi halda ödəməni həya’.a keçirən şəxslər, həmin gəlirlər Azərbaycan Respublikasında daimi nümayəndəliyi olmayan qeyr. - rezident şəxslər tərəfindən ödənildikdə, bu gəliri əldə edən şəxsin bank hesabının olduğu yerli bank, xarici bankın Azərbaycan Respublikasındakı filialı və ya poçt rabitəsinin milli operatoru",
  options: [
    "A)	Gəliri əldə edən şəxsin bank hesabının olduğu yerli bank, xarici bankın Azərbayca’ Respublikasındakı filialı və ya poçt rabitəsinin milli operatoru",
    "B)	Rezident hüquqi şəxs və fərdi sahibkarlar tərəfindən ödənildiyi halda ödəməni həya’.a keçirən şəxslər, həmin gəlirlər Azərbaycan Respublikasında daimi nümayəndəliyi olmayan qeyr. - rezident şəxslər tərəfindən ödənildikdə, bu gəliri əldə edən şəxsin bank hesabının olduğu yerli bank, xarici bankın Azərbaycan Respublikasındakı filialı və ya poçt rabitəsinin milli operatoru",
    "C)	Vergidən azaddır",
    "D)	Rezident hüquqi şəxs və fərdi sahibkarlar tərəfindən ödənildiyi halda ödəməni həyata keçirən şəxslər"
  ]
},
  {
  numb: 8,
  question: "Hüquqi şəxslərə və fərdi sahibkarlara bank hesablarındakı pul vəsaitlərinin nağd qaydada verilməsi zamanı verginin kim hesablamalıdır?",
  answer: "C)	Hüquqi şəxslərə və fərdi sahibkarlara bank hesablarındakı pul vəsaitlərinin nağd qaydada verilməsini həyata keçirən yerli banklar, xarici bankın Azərbaycan Respublikasındakı filialı və ya poçt rabitəsinin milli operatoru.",
  options: [
    "A)	Pul vəsaitini nağd qaydada çıxaran vergi ödəyiciləri",
    "B)	Vergi hesablanmır",
    "C)	Hüquqi şəxslərə və fərdi sahibkarlara bank hesablarındakı pul vəsaitlərinin nağd qaydada verilməsini həyata keçirən yerli banklar, xarici bankın Azərbaycan Respublikasındakı filialı və ya poçt rabitəsinin milli operatoru.",
    "D)	Hüquqi şəxslərə və fərdi sahibkarlara bank hesablarındakı pul vəsaitlərinin nağd qaydada verilməsini həyata keçirən yerli banklar"
  ]
},
  {
  numb: 9,
  question: "Hüquqi şəxslərə və fərdi sahibkarlara bank hesablarındakı pul vəsaitlərinin nağd qaydada verilməsini həyata keçirən yerli banklar, xarici bankın Azərbaycan Respublikasın¬dakı filialı və ya poçt rabitəsinin milli operatoru bəyannaməni nə vaxt vergi orqanına təqdim edirlər?",
  answer: "C)	Hesabat ayından sonrakı ayın 20-dən gec olmayaraq",
  options: [
    "A)	Hesabat ayından sonrakı ayın l-dək",
    "B)	Hesabat ilindən sonrakı ilin mart ayının 31-dən gec olmayaraq",
    "C)	Hesabat ayından sonrakı ayın 20-dən gec olmayaraq",
    "D)	Hesabat ilindən sonrakı ilin fevral ayının 15-dən gec olmayaraq"
  ]
},
  {
  numb: 10,
  question: "Aşağıda göstərilən hansı gəlirlərdən ödəmə mənbəyində vergi tutulur?",
  answer: "D)	Fiziki şəxslər tərəfindən yaşayış və qeyri-yaşayış sahələrinin açıq hərrac qaydasında təqdim edilməsindən gəlirlər",
  options: [
    "A)	Qanunla nəzərdə tutulmuş qaydada üzərinə tələb yönəldilən dövlət əmlakının özəlləşdiril-məsi, bələdiyyə əmlakı üzərində mülkiyyət və icarə hüquqlarının özgəninkiləşdirilməsindən gəlir",
    "B)	“Banklar haqqında” Azərbaycan Respublikasının Qanunu ilə nəzərdə tutulmuş qaydada iflas prosesi çərçivəsində təqdim edilən aktivlərdən gəlir",
    "C)	Vergi borcunun ödənilməsi ilə bağh siyahıya alınmış əmlakın satışından gəlirlər",
    "D)	Fiziki şəxslər tərəfindən yaşayış və qeyri-yaşayış sahələrinin açıq hərrac qaydasında təqdim edilməsindən gəlirlər"
  ]
},
  {
  numb: 11,
  question: "Aşağıda göstərilən h»”sı gəlirlərdən ödəmə mənbəyində vergi tutulur?",
  answer: "B)	“Nağdsız hesablaşmalar haqqında” Azərbaycan Respublikasının Qanununun 3.5-ci mad-dəsində göstərilən malların təqdim edilməsinə görə ( Məcəllə ilə vergidən azad olunan gəlirlər istisna olmaqla) vergi ödəyicisi kimi vergi orqanında uçotda olmayan fiziki şəxslərə ödəmələr verən hüquqi şəxslər və fərdi sahibkarlar",
  options: [
    "A)	Qanunla n^ərdə tutulmuş qaydada üzərinə tələb yönəldilən dövlət əmlakının özəlləşd-ju-jnəsj, habelə bələdiyyə əmlakı üzərində mülkiyyət və icarə hüquqlarının özgəninkiləş¬dirilməsindən gəlir",
    "B)	“Nağdsız hesablaşmalar haqqında” Azərbaycan Respublikasının Qanununun 3.5-ci mad-dəsində göstərilən malların təqdim edilməsinə görə ( Məcəllə ilə vergidən azad olunan gəlirlər istisna olmaqla) vergi ödəyicisi kimi vergi orqanında uçotda olmayan fiziki şəxslərə ödəmələr verən hüquqi şəxslər və fərdi sahibkarlar",
    "C)	“Nağdsız hesablaşmalar haqqında” Azərbaycan Respublikasının Qanununun 3.5-ci mad-dəsində göstərilən malların təqdim edilməsinə görə ( Məcəllə ilə vergidən azad olunan gəlirlər istisna olmaqla) vergi ödəyicisi kimi vergi orqanında uçotda olan fiziki şəxslərə ödəmələr verən hüquqi şəxslər və fərdi sahibkarlar",
    "D)	“Nağdsız hesablaşmalar haqqında” Azərbaycan Respublikasının Qanununun 3.5-ci mad-dəsində göstərilən malların təqdim edilməsinə görə vergi ödəyicisi kimi vergi orqanında uçotda olmayan fiziki şəxslərə ödəmələr verən hüquqi şəxslər və fərdi sahibkarlar"
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
  numb: 30,
  question: "Vergi ödəyicisi cari vergi ödəmələrinin məbləğini müəyyənləşdirmək üçün tətbiq etdiyi metod barədə məlumat vermədiyi halda vergi orqanı hansı metodu tətbiq edir?",
  answer: "B) Əvvəlki vergi ilində hesablanmış vergi məbləğinin !4 hissəsi müəyyənləşdirilən metod",
  options: [
    "A)	Rübdəki gəlirinin həcmini onun keçən ilin ümumi gəlirində (gəlirdən çıxılan məbləğlər nəzərə alınmadan) verginin xüsusi çəkisini göstərən əmsala vurmaqla müəyyənləşdirilən metod",
    "B)	Əvvəlki vergi ilində hesablanmış vergi məbləğinin !4 hissəsi müəyyənləşdirilən metod",
    "C)	Hər iki metodu",
    "D)	Heç birini"
  ]
},
  {
  numb: 31,
  question: "Vergi ödəyicisi cari vergi ödəmələrinin məbləğini müəyyənləşdirmək üçün tətbiq etdiyi metod barədə məlumat vermədiyi halda vergi orqanının tətbiq etdiyi metod vergi ilinin sonunadək dəyişdirilə bilərmi?",
  answer: "A)	Dəyişdirilə bilməz",
  options: [
    "A)	Dəyişdirilə bilməz",
    "B)	Dəyişdirilə bilər",
    "C) Vergi ilinin başladığı ilk 15 gün ərzində dəyişdirilə bilər",
    "D) Vergi ilinin başladığı ilk 25 gün ərzində dəyişdirilə bilər"
  ]
},
  {
  numb: 32,
  question: "Cari vergi ödəmələri nəyə aid edilir?",
  answer: "A)	Vergi ili üçün tutulan verginin məbləğinə",
  options: [
    "A)	Vergi ili üçün tutulan verginin məbləğinə",
    "B)	Heç nəyə aid edilmir",
    "C) Hesablanan gəlir məbləğinə",
    "D) Digər xərc məbləğlərinə"
  ]
},
  {
  numb: 33,
  question: "Əvvəllər fəaliyyəti və ya vergi tutulan mənfəəti olmayan vergi ödəyicilərinin mən-fəət vergisi və ya gəlir vergisi üzrə cari vergi ödəmələri təqvim ili ərzində necə hesablanır?",
  answer: "A)	Rüblər üzrə artan yekunla müvafiq vergi dərəcələrinə əsasən",
  options: [
    "A)	Rüblər üzrə artan yekunla müvafiq vergi dərəcələrinə əsasən",
    "B)	Aylar üzrə müvafiq vergi dərəcələrinə əsasən",
    "C)	Cari vergi ödəmələri hesablanmır",
    "D)	İlin sonunda müvafiq vergi dərəcələrinə əsasən"
  ]
},
  {
  numb: 34,
  question: "Əvvəllər fəaliyyəti və ya vergi tutulan mənfəəti (gəliri) olmayan vergi ödəyiciləri-nin cari vergi ödəmələrinin məbləği mənfəətdən və ya gəlirdən verginin məbləğinin neçə faizindən az olmamalıdır?",
  answer: "C) 75 faizindən",
  options: [
    "A) 25 faizindən",
    "B) 50 faizindən",
    "C) 75 faizindən",
    "D) 90 faizindən"
  ]
},
  {
  numb: 35,
  question: "Əvvəlki vergi ilində fəaliyyəti və ya vergi tutulan mənfəəti (gəliri) olmayan vergi ödəyiciləri rüb başa çatdıqdan sonra hansı müddətdə cari vergi ödəmələrini [mənfəət, gəlir] aparmalı və rüb ərzində mənfəətdən və ya gəlirdən hesablanmış cari vergi məbləği barədə vergi orqanına arayış təqdim etməli-dirlər?",
  answer: "A) 15 gün müddətində",
  options: [
    "A) 15 gün müddətində",
    "B) 10 gün müddətində",
    "C) 7 gün müddətində",
    "D) 1 ay müddətində"
  ]
},
  {
  numb: 36,
  question: "Əvvəlki vergi ilində fəaliyyəti və ya vergi tutulan mənfəəti olmayan vergi ödəyicisi tərəfindən mənfəət, yaxud gəlir vergiləri üzrə cari vergi ödəməsi Vergi M. ilə müəyyən edil¬miş müddətdə ödənilmədikdə, həmin vergi ödəyicisinə qarşı hansı məsuliyət tədbiri görülür?",
  answer: "C)	Vergi ödəyicisindən ödənilməmiş cari vergi ödəmələrinə görə ödəmə müddətindən sonrakı hər bir ötmüş gün üçün ödənilməli olan məbləğin 0,1 faizi məbləğində faiz tutulur",
  options: [
    "A)	Vergi ödəyicisinə 40 manat məbləğində maliyyə sanksiyası tətbiq edilir",
    "B)	Heç bir məsuliyyət tədbiri görülmür",
    "C)	Vergi ödəyicisindən ödənilməmiş cari vergi ödəmələrinə görə ödəmə müddətindən sonrakı hər bir ötmüş gün üçün ödənilməli olan məbləğin 0,1 faizi məbləğində faiz tutulur",
    "D)	Vergi ödəyicisindən ödənilməmiş cari vergi ödəmələrinə görə ödəmə müddətindən sonrakı hər bir ötmüş gün üçün ödənilməli olan məbləğin 0,05 faizi məbləğində faiz tUtUİUf"
  ]
},
  {
  numb: 37,
  question: "Əvvəlki vergi ilində fəaliyyəti və ya vergi tutulan mənfəəti (gəliri) olmayan vergi ödəyicisində aparılmış vergi yoxlaması nəticəsində aşkar edilmiş vaxtında ödənilməmiş mənfəət, yaxud gəlir vergiləri üzrə cari vergi ödəmələrinə münasibətdə bütün ötmüş müddətə Vergi Məcəlləsi ilə müəyyən edilmiş faiz hansı qaydada [müddətdə]tətbiq edilir?",
  answer: "D) 1 ildən çox olmamaq şərti ilə",
  options: [
    "A)	3 aydan çox olmamaq şərti ilə",
    "B)	2 ildən çox olmamaq şərti ilə",
    "C) 5 aydan çox olmamaq şərti ilə",
    "D) 1 ildən çox olmamaq şərti ilə"
  ]
},
  {
  numb: 38,
  question: "Cari vergi ödəmələri nə vaxt yenidən haqq-hesab edilir?",
  answer: "C) Hesabat ili başa çatdıqdan sonra",
  options: [
    "A)	Hesabat ayı başa çatdıqdan sonra",
    "B)	Hesabat rübü başa çatdıqdan sonra",
    "C) Hesabat ili başa çatdıqdan sonra",
    "D) Haqq-hesab edilmir"
  ]
},
  {
  numb: 39,
  question: "Sadələşdirilmiş verginin ödəyiciləri mənfəət və ya gəlir vergisinin ödəyicisi olduqda onların mənfəət və ya gəlir vergiləri üzrə cari vergi ödəmələrinin məbləği hansı normativ sənədə əsasən müəyyən edilir?",
  answer: "B)	Vergi Məcəlləsinə uyğun olaraq müəyyən edilir",
  options: [
    "A)	Vergi ödəyicisi əlavə dəyər vergisinin məqsədləri üçün qeydiyyata alındığı il cari vergi ödəmələrini aparmır",
    "B)	Vergi Məcəlləsinə uyğun olaraq müəyyən edilir",
    "C)	Dövlət Vergi Xidmətinin əmrinə əsasən müəyyən edilir",
    "D)	Ədliyyə Nazirliyi tərəfindən hazırlanmış normativ sənədə əsasən müəyyən edilir"
  ]
},
  {
  numb: 40,
  question: "Cari vergi ödəmələri hesabat ili başa çatdıqdan sonra yenidən haqq-hesab edilir və bu zaman hesablanmış	",
  answer: "A)	Cari vergi məbləği hesabat üzrə vergi məbləğindən çox olduğu halda artıq hesablanmış cari vergi və ona uyğun faiz məbləğləri azaldılır",
  options: [
    "A)	Cari vergi məbləği hesabat üzrə vergi məbləğindən çox olduğu halda artıq hesablanmış cari vergi və ona uyğun faiz məbləğləri azaldılır",
    "B)	Cari vergi məbləği hesabat üzrə vergi məbləğindən çox olduğu halda yalnız artıq hesab-lanmış cari vergi azaldılır",
    "C)	Cari vergi məbləği hesabat üzrə vergi məbləğindən çox olduğu halda yalnız ona uyğun faiz məbləğləri azaldılır",
    "D)	Cari vergi məbləği hesabat üzrə vergi məbləğindən çox olduğu halda artıq hesablanmış cari vergi növbəti illərin vergisinə aid edilir"
  ]
},
  {
  numb: 41,
  question: "Vergi ödəyiciləri mənfəət [gəlir] vergisi üzrə son hesablamanı nə vaxt aparmalı və vergini ödəməlidirlər?",
  answer: "A)	Vergi ili üçün bəyannamənin verilməsinin müəyyən edilmiş vaxtınadək son hesablamanı aparmalı və vergini ödəməlidirlər",
  options: [
    "A)	Vergi ili üçün bəyannamənin verilməsinin müəyyən edilmiş vaxtınadək son hesablamanı aparmalı və vergini ödəməlidirlər",
    "B)	İstənilən vaxt",
    "C)	Növbəti ilin aprel ayının 15-dək",
    "D)	Növbəti ilin yanvar ayının 1-dək"
  ]
},
  {
  numb: 42,
  question: "Fiziki şəxslər gəlir vergisini hansı büdcəyə ödəyirlər?",
  answer: "D)	Dövlət büdcəsinə",
  options: [
    "A)	Yerli büdcəyə [bələdiyyə büdcəsinə]",
    "B)	Dövlət hakimiyyəti orqanının büdcədənkənar fonduna",
    "C)	Maliyyə Nazirliyi tərəfindən müəyyənləşdirilən büdcəyə",
    "D)	Dövlət büdcəsinə"
  ]
},
];
