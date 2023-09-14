// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Azərbaycan Respublikasının tərəfdar çıxdığı ikiqat vergitutmanm aradan qaldırıl- > ması haqqında beynəlxalq müqavilələrdə hansı məsələlər nəzərdə tutulduğu halda ödəmə mənbəyində artıq tutulmuş vergi məbləği müəyyən edilmiş qaydada geri qaytarılır?",
  answer: "A)	Мergilərin aşağı dərəcəsi və ya vergilərdən tam azad olunma",
  options: [
    "A)	Мergilərin aşağı dərəcəsi və ya vergilərdən tam azad olunma",
    "B)	Нalnız vergilərin aşağı dərəcəsi",
    "C)	Yalnız vergilərdən tam azad olunma",
    "D)	Ödəmə mənbəyində artıq tutulmuş vergi məbləği geri qaytarılmır"
  ]
},
  {
  numb: 2,
  question: "Aşağıdakılardan hansı doğrudur?",
  answer: "D) Mülki aviasiya fəaliyyətini həyata keçirən hüquqi şəxslər tərəfindən bu fəaliyyətin məqsədləri üçün Azərbaycan Respublikasında daimi nümayəndəlik yaratmayan qeyri-rezident şəxslərdən icarəyə və ya lizinqə (maliyyə lizinqi istisna olmaqla) götürülmüş hava gəmisinə və hava gəmisinin mühərrikinə görə aparılan ödənişlərdən ödəmə mənbəyində vergi tutulmur və həmin gəlir vergiyə cəlb edilmir.",
  options: [
    "A) Mülki aviasiya fəaliyyətini həyata keçirən hüquqi şəxslər tərəfindən bu fəaliyyətin məqsədləri üçün Azərbaycan Respublikasında daimi nümayəndəlik yaratmayan qeyri-rezident şəxslərdən icarəyə və ya lizinqə (maliyyə lizinqi istisna olmaqla) götürülmüş hava gəmisinə və hava gəmisinin mühərrikinə görə aparılan ödənişlərdən ödəmə mənbəyində 14% dərəcə ilə vergi tutulur",
    "B) Mülki aviasiya fəaliyyətini həyata keçirən hüquqi şəxslər tərəfindən bu fəaliyyətin məqsədləri üçün Azərbaycan Respublikasında daimi nümayəndəlik yaratmayan qeyri-rezident şəxslərdən icarəyə və ya lizinqə (maliyyə lizinqi daxil olmaqla) götürülmüş hava gəmisinə və hava gəmisinin mühərrikinə görə aparılan ödənişlərdən ödəmə mənbəyində 14% dərəcə ilə vergi tutulur",
    "C) Mülki aviasiya fəaliyyətini həyata keçirən hüquqi şəxslər tərəfindən bu fəaliyyətin məqsədləri üçün Azərbaycan Respublikasında daimi nümayəndəlik yaratmayan qeyri-rezident şəxslərdən icarəyə və ya lizinqə (maliyyə lizinqi daxil olmaqla) götürülmüş hava gəmisinə və hava gəmisinin mühərrikinə görə aparılan ödənişlərdən ödəmə mənbəyində vergi tutulmur və həmin gəlir vergiyə cəlb edilmir",
    "D) Mülki aviasiya fəaliyyətini həyata keçirən hüquqi şəxslər tərəfindən bu fəaliyyətin məqsədləri üçün Azərbaycan Respublikasında daimi nümayəndəlik yaratmayan qeyri-rezident şəxslərdən icarəyə və ya lizinqə (maliyyə lizinqi istisna olmaqla) götürülmüş hava gəmisinə və hava gəmisinin mühərrikinə görə aparılan ödənişlərdən ödəmə mənbəyində vergi tutulmur və həmin gəlir vergiyə cəlb edilmir."
  ]
},
  {
  numb: 3,
  question: "Vergi Məcəlləsinin 128-ci maddəsində nəzərdə tutulan güzəştli vergi tutulan ölkələrdə və ya ərazilərdə təsis edilmiş (qeydiyyatdan keçmiş) şəxslərə, o cümlədən onların digər ölkələrdə olan filial və ya nümayəndəliklərinə, habelə güzəştli vergi tutulan ölkələrdə və ya ərazilərdə olan bank hesablarına rezidentlər və qeyri-rezidentlərin Azərbaycan Respublikasındakı daimi nümayəndəlikləri, habelə vergi orqanında uçotda olmayan rezident fiziki şəxslər tərəfindən birbaşa və ya dolayısilə edilən ödənişlərdən neçə faizi dərəcə ilə ödəmə mənbəyində vergi tutulur?",
  answer: "A) 10 faiz",
  options: [
    "A) 10 faiz",
    "B) 20 faiz",
    "C) Vergi tutulmur ",
    "D) 14 faiz"
  ]
},
  {
  numb: 4,
  question: "Rezidentin Azərbaycan Respublikasının hüdudlarından kənarda Azərbaycan mən-bəyindən olmayan gəlirindən ödənilmiş gəlir vergisinin və ya mənfəət vergisinin məbləğləri Azərbaycanda vergi ödənilərkən nəzərə almırını?",
  answer: "A)	Nəzərə almır",
  options: [
    "A)	Nəzərə almır",
    "B)	50%- i nəzərə ahnır",
    "C) Nəzərə almmır",
    "D) həmin məbləğin 1000 manatdan çox olan hissəsi nəzərə alınır"
  ]
},
  {
  numb: 5,
  question: "Qeyri-rezidentin daimi nümayəndəliyinin xalis mənfəətindən həmin qeyri-reziden-tin xeyrinə köçürülən məbləğdən neçə faiz dərəcəsi ilə vergi tutulur?",
  answer: "D) 10 faiz",
  options: [
    "A) 27 faiz",
    "B) Vergi tutulmur",
    "C) 5 faiz",
    "D) 10 faiz"
  ]
},
{
  numb: 6,
  question: "AşağıdakıIardan hansı doğru olanlara aiddir?",
  answer: "D)	Rezidentin Azərbaycan Respublikasının hüdudlarından kənarda Azərbaycan mənbəyindən olmayan gəlirindən ödənilmiş gəlir vergisinin və ya mənfəət vergisinin məbləğləri Azərbaycan Respublikasında həmin gəlirdən və ya mənfəətdən müəyyən edilmiş dərəcələrlə tutulan verginin məbləğindən çox olmadığı halda Azərbaycanda vergi ödənilərkən nəzərə almır",
  options: [
    "A)	Heç bir halda nəzərə alınmır",
    "B)	Rezidentin Azərbaycan Respublikasının hüdudlarından kənarda Azərbaycan mənbəyindən olmayan gəlirindən ödənilmiş gəlir vergisinin və ya mənfəət vergisinin məbləğləri Azərbaycan Respublikasında həmin gəlirdən və ya mənfəətdən müəyyən edilmiş dərəcələrlə eyni olmasından asılı olmayaraq, tutulan verginin məbləği Azərbaycanda vergi ödənilərkən nəzərə alınır",
    "C)	Rezidentin Azərbaycan Respublikasının hüdudlarından kənarda Azərbaycan mənbəyindən olmayan gəlirindən ödənilmiş gəlir vergisinin və ya mənfəət vergisinin məbləğləri Azərbaycanda vergi ödənilərkən nəzərə alınır",
    "D)	Rezidentin Azərbaycan Respublikasının hüdudlarından kənarda Azərbaycan mənbəyindən olmayan gəlirindən ödənilmiş gəlir vergisinin və ya mənfəət vergisinin məbləğləri Azərbaycan Respublikasında həmin gəlirdən və ya mənfəətdən müəyyən edilmiş dərəcələrlə tutulan verginin məbləğindən çox olmadığı halda Azərbaycanda vergi ödənilərkən nəzərə almır"
  ]
},
  {
  numb: 7,
  question: "Rezident güzəştli vergi tutulan ölkədə və ya ərazilərdə gəlir əldə edən qeyri- rezidentin nizamnamə fondunun hansı hissəsinə bilavasitə və ya dolayısı ilə sahibdirsə, rezidentin həmin gəliri onun vergi tutulan gəlirinə daxil edilir?",
  answer: "A) 20%-dən çoxuna",
  options: [
    "A) 20%-dən çoxuna",
    "B) 10%-dən çoxuna",
    "C) 15%-dən çoxuna",
    "D) 5%-dən çoxuna"
  ]
},
  {
  numb: 8,
  question: "Rezident güzəştli vergi tutulan ölkədə və ya ərazidə gəlir əldə edən qeyri-rezidentin nizamnamə fondunun yaxud onun səsvermə hüququ verən səhmlərinin hansı hissəsinin sahibidirsə, rezidentin həmin gəliri onun vergi tutulan gəlirinə daxil edilir?",
  answer: "A) 20%-dən çoxunun",
  options: [
    "A) 20%-dən çoxunun",
    "B) 5%-dən çoxunun",
    "C) 10%-dən çoxunun",
    "D) 15%-dən çoxunun"
  ]
},
  {
  numb: 9,
  question: "Xarici ölkə və ya ərazidə tətbiq olunan verginin dərəcəsi Vergi Məcəlləsi ilə nəzərdə tutulan vergi dərəcəsindən ən azı neçə dəfə kiçik olduqda həmin xarici ölkə və ya ərazi güzəştli vergi tutulan ölkə və ya ərazi sayılır?",
  answer: "B) 2 dəfə",
  options: [
    "A) 1,5 dəfə",
    "B) 2 dəfə",
    "C) 3 dəfə",
    "D) 4 dəfə"
  ]
},
  {
  numb: 10,
  question: "Güzəştli vergi tutulan ölkələrin və ya ərazilərin siyahısı hansı müvafiq icra hakimiyyəti orqanı tərəfindən təsdiq edilir?",
  answer: "D) Azərbaycan Respublikasının Prezidenti",
  options: [
    "A)	Nazirlər Kabineti",
    "B)	Dövlət Vergi Xidməti",
    "C) Maliyyə Nazirliyi",
    "D) Azərbaycan Respublikasının Prezidenti"
  ]
},
  {
  numb: 11,
  question: "Hüquqi şəxslərin mənfəət vergisi və fiziki şəxslərin gəlir vergisi məqsədləri üçün vergi ili dedikdə hansı vaxt başa düşülür?",
  answer: "A)	Təqvim ili",
  options: [
    "A)	Təqvim ili",
    "B)	İstənilən ardıcıl 12 ay ",
    "C) Verginin hesablanması müddəti",
    "D) Verginin ödənilməsi müddəti"
  ]
},
  {
  numb: 12,
  question: "Aşağıdakılardan hansı doğrudur? 1.	vergi ödəyicisi Vergi Məcəlləsinə uyğun olub-olmamsmdan asıh olmayaraq, tətbiq edilən uçot metodundan asılı olaraq gəlirlərini və xərclərini onların əldə edildiyi və ya çəkildiyi müvafiq hesabat dövrlərinə aid etməli 2.	vergi ödəyicisi vergi tutulan gəlirin (mənfəətin) dəqiq əks etdirilməsi üçün sənədləş¬dirilmiş məlumat əsasında gəlirlərinin və xərclərinin vaxtlı-vaxtında dəqiq uçotunu aparmalı 3.	vergi ödəyicisi Vergi Məcəlləsinə uyğun şəkildə tətbiq edilən uçot metodundan asılı olaraq gəlirlərini və xərclərini onların əldə edildiyi və ya çəkildiyi istənilən hesabat dövrlərinə aid etməli 4.	vergi ödəyicisi Vergi Məcəlləsinə uyğun şəkildə tətbiq edilən uçot metodundan asıh olaraq gəlirlərini və xərclərini onların əldə edildiyi və ya çəkildiyi müvafiq hesabat dövrlərinə aid etməli 5.	vergi ödəyicisinin istifadə etdiyi uçot metodunda xərclərin və daxilolmaların müddətləri və uçotu qaydasına dair bütün tələblər nəzərə alınmalı",
  answer: "С) 2,4,5",
  options: [
    "A) 1,2,3",
    "В) 1,3,4",
    "С) 2,4,5",
    "D) 3,4,5"
  ]
},
  {
  numb: 13,
  question: "İqtisadi fəaliyyət sahələri üzrə vergitutma məqsədləri üçün gəlirlərin və xərclərin uçotunun aparılması qaydaları hansı orqan tərəfindən müəyyən edilir?",
  answer: "B)	Azərbaycan Respublikasının Prezidenti",
  options: [
    "A)	Nazirlər Kabineti",
    "B)	Azərbaycan Respublikasının Prezidenti",
    "C)	Maliyyə Nazirliyi",
    "D)	Dövlət Vergi Xidməti"
  ]
},
  {
  numb: 14,
  question: "143.	Aşağıdakılardan hansı doğrudur? 1.	vergi ödəyicisi öz fəaliyyəti ilə bağlı olan bütün əməliyyatların başlanğıcım, gedişini və qurtarmasım müəyyənləşdirməyə imkan verən uçotun aparılmasını təmin etməyə borcludur 2.	vergi tutulan gəlir Vergi Məcəlləsinin tələblərinə əməl etmək üçün düzəlişlər aparmamaq şərti ilə vergi ödəyicisinin öz mühasibat uçotunda istifadə etdiyi metodla hesablanmalıdır 3.	vergi tutulan gəlir Vergi Məcəlləsinin tələblərinə əməl etmək üçün zəruri düzəlişləri aparmaq şərti ilə vergi ödəyicisinin öz mühasibat uçotunda istifadə etdiyi metodla hesablanmalıdır 4.	vergi ödəyicisi Vergi M. uyğun şəkildə tətbiq edilən uçot metodundan asılı olaraq gəlirlə¬rini və xərclərini onların əldə edildiyi və ya çəkildiyi müvafiq hesabat dövrlərinə aid etməlidir 5.	vergi ödəyicisi öz fəaliyyəti ilə bağh olan bütün əməliyyatların yalnız başlanğıcını müəy-yənləşdirməyə imkan verən uçotun aparılmasını təmin etməyə borcludur",
  answer: "B) 1,3,4 ",
  options: [
    "A) 1,2,3",
    "B) 1,3,4",
    "C) 2,4,5",
    "D) 3,4,5"
  ]
},
  {
  numb: 15,
  question: "Mikro sahibkarlıq subyektləri, gəlirlərin və xərclərin uçotunu [kassa və ya hesablama metodu] hansı metodla aparırlar?",
  answer: "B)	Öz seçimlərindən asıh olaraq kassa metodu və ya hesablama metodu ilə",
  options: [
    "A)	Yalnız kassa metodu ilə",
    "B)	Öz seçimlərindən asıh olaraq kassa metodu və ya hesablama metodu ilə",
    "C)	Yalnız hesablama metodu ilə",
    "D)	Vergi orqanın qərarından ash olaraq kassa metodu və ya hesablama metodu ilə"
  ]
},
  {
  numb: 16,
  question: "Kiçik, orta və iri sahibkarlıq subyektləri, gəlirlərin və xərclərin uçotunu [kassa və ya hesablama metodu] hansı metodla aparırlar?",
  answer: "C)	Hesablama metodu ilə",
  options: [
    "A)	Yalnız kassa metodu ilə",
    "B)	Öz seçimlərindən asıh olaraq kassa metodu və ya hesablama metodu ilə",
    "C)	Yalnız hesablama metodu ilə",
    "D)	Vergi orqanın qərarından ash olaraq kassa metodu və ya hesablama metodu ilə"
  ]
},
  {
  numb: 17,
  question: "Vergi ödəyicisinin istifadə etdiyi uçot metodu dəyişdirilərkən verginin məbləğinə təsir göstərən mühasibat əməliyyatlarına düzəlişlər nə vaxt aparılmalıdır?",
  answer: "A)	Uçot metodunun dəyişdirildiyi ildə",
  options: [
    "A)	Uçot metodunun dəyişdirildiyi ildə",
    "B)	Uçot metodunun dəyişdirildiyi ildən sonrakı ildə",
    "C)	Uçot metodunun dəyişdirildiyi vergi ilinin aprel ayının 15-dək",
    "D)	Uçot metodu dəyişdirilmir"
  ]
},
  {
  numb: 18,
  question: "Bina tikintisi fəaliyyəti ilə məşğul olan şəxslər tərəfindən yaşayış və qeyri-yaşayış sahələrinin təqdim edilməsi ilə bağlı gəlir və bu gəlirdən çıxılan xərclər necə müəyyən edilir?",
  answer: "C)	Vergi ili ərzində yerinə yetirilmiş işlər (mərhələlər) üzrə təqdim edilən yaşayış və qeyri- yaşayış sahələrinin ƏDV-siz məbləğləri ilə həmin sahələrin tikintisi ilə bağh çəkilən məsrəflər, o cümlədən torpaq sahələrinin alınması ilə bağlı çəkilən məsrəflər əsasında",
  options: [
    "A)	Vergi ili ərzində yerinə yetirilmiş işlər (mərhələlər) üzrə təqdim edilən yaşayış və qeyri- yaşayış sahələrinin ƏDV-siz məbləğləri ilə həmin sahələrin tikintisi ilə bağlı çəkilən məsrəflər",
    "B)	Vergi ili ərzində yerinə yetirilmiş işlər (mərhələlər) üzrə təqdim edilən yaşayış və qeyri- yaşayış sahələrinin ƏDV-li məbləğləri ilə həmin sahələrin tikintisi ilə bağh çəkilən məsrəflər, o cümlədən torpaq sahələrinin alınması ilə bağh çəkilən məsrəflər əsasında",
    "C)	Vergi ili ərzində yerinə yetirilmiş işlər (mərhələlər) üzrə təqdim edilən yaşayış və qeyri- yaşayış sahələrinin ƏDV-siz məbləğləri ilə həmin sahələrin tikintisi ilə bağh çəkilən məsrəflər, o cümlədən torpaq sahələrinin alınması ilə bağlı çəkilən məsrəflər əsasında",
    "D)	İl ərzində alğı-satqı müqavilələri üzrə nəzərdə tutulan ƏDV-siz məbləğlər və təqdir edilən həmin sahələrin tikintisinə çəkilən məsrəflər əsasında müəyyən edilir"
  ]
},
  {
  numb: 19,
  question: "Banklar və kredit təşkilatları tərəfindən Vətən müharibəsi iştirakçılarının və Vətən müharibəsində şəhid olmuş şəxslərin, habelə Vətən müharibəsi nəticəsində şəhid ailəsi statusu almış şəxslərin hansı tarixədək alınmış kreditlər üzrə həmin tarixədək ödənilməyən borclarına görə hesablanmış faizlərin silinməsi bankların və digər kredit təşkilatlarının verg: tutulan gəlirlərinə aid edilmir?",
  answer: "D)	2021-ci il 1 yanvar tarixinədək",
  options: [
    "A)	2020-ci il 1 yanvar tarixinədək",
    "B)	2019-cu il 1 yanvar tarixinədək",
    "C)	2022-ci il 1 yanvar tarixinədək",
    "D)	2021-ci il 1 yanvar tarixinədək"
  ]
},
  {
  numb: 20,
  question: "Silinən borcların əsas məbləği üzrə yaradılmış ehtiyatlar gəlirdən çıxılan xərclərə aid edilirmi?",
  answer: "B)	Edilir",
  options: [
    "A)	Edilmir",
    "B)	Edilir",
    "C)	50 faizi edilir",
    "D)	Vergi orqanının qərarı əsasında edilir"
  ]
},
  {
  numb: 21,
  question: "Hansı uçot metodu ilə uçot aparan vergi ödəyicisi gəliri əldə edəndə və ya gəlir onun sərəncamına veriləndə, bu gəliri nəzərə almalı və gəlirdən öz xərclərini yalnız bu xərcləri çəkdiyi zaman çıxmalıdır?",
  answer: "D)	Yalnız kassa metodu ilə",
  options: [
    "A)	Kassa və hesablamalar metodu ilə",
    "B)	Yalnız hesablamalar metodu ilə",
    "C)	Heç bir uçot metodu ilə",
    "D)	Yalnız kassa metodu ilə"
  ]
},
  {
  numb: 22,
  question: "Vergi ödəyicisi kassa metodu ilə uçot apardıqda gəlirin əldə edilməsi vaxtı hans vaxt sayılır?",
  answer: "A)	Vergi ödəyicisinin nağd pul vəsaitini aldığı, nağdsız ödəmədə isə pul vəsaitinin bankca onun hesabına və ya sərəncamçısı ola biləcəyi hesaba, yaxud göstərilən vəsaiti almaq hüququr.ı malik olacağı hesaba daxil olduğu vaxt",
  options: [
    "A)	Vergi ödəyicisinin nağd pul vəsaitini aldığı, nağdsız ödəmədə isə pul vəsaitinin bankca onun hesabına və ya sərəncamçısı ola biləcəyi hesaba, yaxud göstərilən vəsaiti almaq hüququr.ı malik olacağı hesaba daxil olduğu vaxt",
    "B)	Yalnız vergi ödəyicisinin nağd pul vəsaitini aldığı vaxt",
    "C)	Yalnız nağdsız ödəmədə pul vəsaitinin bankda onun hesabına və ya sərəncamçısı ola biləcəyi hesaba, yaxud göstərilən vəsaiti almaq hüququna malik olacağı hesaba daxil olduğu vaxt",
    "D)	Xərcin faktiki çəkildiyi vaxt"
  ]
},
  {
  numb: 23,
  question: "	Vergi ödəyicisi kassa metodu ilə uçot apardıqda onun maliyyə öhdəliyinin ləğ1 edildiyi və ya ödənildiyi halda (qarşılıqlı hesablaşmalar aparıldıqda və sair bu kimi hallarda hansı vaxt gəlirin əldə edildiyi vaxt sayılır.?",
  answer: "A) Öhdəliyin ləğv edildiyi və ya ödənildiyi vaxt B) xərcin faktiki çəkildiyi vaxt",
  options: [
    "A) Öhdəliyin ləğv edildiyi və ya ödənildiyi vaxt B) xərcin faktiki çəkildiyi vaxt",
    "B)	Gəlirin faktiki əldə edildiyi vaxt",
    "C) Cərcin faktiki çəkildiyi vaxt",
    "D)	Vergi ödəyicisinin pul vəsaitinin köçürülməsi haqqındakı tapşırığının bank tərəfində? alındığı vaxt"
  ]
},
  {
  numb: 24,
  question: "Vergi uçotunun məqsədləri üçün vergi ödəyicisi kassa metodundan istifadə etdik-də, xərcin çəkilməsi vaxtı hansı vaxt sayılır?",
  answer: "A)	Xərcin faktiki çəkildiyi vaxt ",
  options: [
    "A)	Xərcin faktiki çəkildiyi vaxt ",
    "B)	Gəlirin faktiki əldə edildiyi vaxt ",
    "C) Öhdəliyin yarandığı vaxt",
    "D) Vergi ödəyicisinin özünün müəyyənləşdirdiyi vaxt"
  ]
},
  {
  numb: 25,
  question: "Hansı uçot metodundan istifadə olunarkən, vergi ödəyicisi pul vəsaitini ödəyirsə, nağd pul vəsaitinin ödənildiyi, nağdsız ödəmədə isə vergi ödəyicisinin pul vəsaitinin köçürülməsi haqqındakı tapşırığının bank tərəfindən alındığı vaxt xərcin çəkildiyi vaxt sayılır?",
  answer: "B)	Kassa metodundan",
  options: [
    "A)	Hesablama metodundan",
    "B)	Kassa metodundan",
    "C)	Kassa və hesablama metodlarının hər ikisindən",
    "D)	İkili yazılış üsulundan"
  ]
},
  {
  numb: 26,
  question: "Vergi uçotu məqsədləri üçün kassa metodu tətbiq edildikdə vergi ödəyicisi qarşı-sında maliyyə öhdəlikləri ləğv edildiyi və ya ödənildiyi halda (qarşılıqlı hesablaşmalar aparıl- dıqda və sairə bu kimi hallarda), hansı vaxt xərcin çəkilməsi vaxtı sayılır?",
  answer: "A)	Öhdəliyin ləğv edildiyi və ya ödənildiyi vaxt",
  options: [
    "A)	Öhdəliyin ləğv edildiyi və ya ödənildiyi vaxt",
    "B)	Xərcin faktiki çəkildiyi vaxt",
    "C)	Gəlirin faktiki əldə edildiyi vaxt",
    "D)	Vergi ödəyicisinin pul vəsaitinin köçürülməsi haqqındakı tapşırığının bank tərəfindən alındığı vaxt"
  ]
},
  {
  numb: 27,
  question: "Vergi uçotu məqsədləri üçün kassa metodu tətbiq edildikdə borc öhdəliyinin və ya icarə müqaviləsinin müddəti bir neçə hesabat dövrünü əhatə edirsə, hansı hallarda hesabat ilində gəlirdən çıxılmalı olan və faktiki ödənilən faizlərin (icarə haqqının) məbləği həmin il üçün hesablanan faizlərin (icarə haqqının) məbləği kimi qəbul edilir?",
  answer: "A)	Borc öhdəlikləri üzrə faizlər ödənilərkən və ya əmlakın icarəyə götürülməsi müqabilində ödəmə həyata keçirilərkən",
  options: [
    "A)	Borc öhdəlikləri üzrə faizlər ödənilərkən və ya əmlakın icarəyə götürülməsi müqabilində ödəmə həyata keçirilərkən",
    "B)	Yalnız borc öhdəlikləri üzrə faizlər ödənilərkən",
    "C)	Yalnız əmlakın icarəyə götürülməsi müqabilində ödəmə həyata keçirilərkən",
    "D)	Heç bir halda"
  ]
},
  {
  numb: 28,
  question: "Hansı uçot metodu ilə uçot aparan vergi ödəyicisi gəlir əldə edilməsinin və xərc çəkilməsinin faktiki vaxtından asıh olmayaraq gəlirini və xərcini müvafiq surətdə gəlir almaq hüququnun əldə edildiyi və ya xərcin çəkilməsi barədə öhdəliyin yarandığı vaxt nəzərə almalıdır?",
  answer: "B)	Hesablama metodu ilə",
  options: [
    "A)	Kassa metodu ilə",
    "B)	Hesablama metodu ilə",
    "C)	Kassa və hesablama metodlarının hər ikisindən",
    "D)	İkili yazılış üsulundan"
  ]
},
  {
  numb: 29,
  question: "Hesablama metodundan istifadə edilərkən hansı vaxt gəliri almaq hüququnun əldə edildiyi vaxt sayılır?",
  answer: "C)	Vergi ödəyici tərəfindən əqd və ya müqavilə üzrə bütün öhdəliklərin yerinə yetirildiyi vaxt",
  options: [
    "A)	Vergi ödəyicisinin əqd və ya müqavilə üzrə öhdəliyinin yarandığı vaxt",
    "B)	Vergi ödəyi tərəfindən əqd və ya müqavilə üzrə öhdəliklərin qismən yerinə yetirildiyi vaxt",
    "C)	Vergi ödəyici tərəfindən əqd və ya müqavilə üzrə bütün öhdəliklərin yerinə yetirildiyi vaxt",
    "D)	Vergi orqanının nəzərdə tutduğu vaxt"
  ]
},
  {
  numb: 30,
  question: "Hesablama metodundan istifadə edilərkən vergi ödəyicisi müqavilə üzrə iş görürsə və ya xidmət göstərirsə, hansı vaxt gəlirin əldə edildiyi vaxt sayılır?",
  answer: "B)	Müqavilədə nəzərdə tutulan işlərin görülməsinin və ya xidmətlərin göstərilməsinin tam başa çatdığı vaxt",
  options: [
    "A)	Müqavilə ilə nəzərdə tutulduğu vaxt",
    "B)	Müqavilədə nəzərdə tutulan işlərin görülməsinin və ya xidmətlərin göstərilməsinin tam başa çatdığı vaxt",
    "C)	İşlərin görülməsi və ya xidmətlərin göstərilməsi öhdəliyinin yarandığı vaxt",
    "D)	İstənilən vaxt"
  ]
},
  {
  numb: 31,
  question: "Hansı uçot metodundan istifadə olunarkən, vergi ödəyicisi gəlir əldə edirsə və ya onun faiz gəliri, yaxud əmlakın icarəyə verilməsindən gəlir əldə etmək hüququ vardırsa, borc öhdəliklərinin və ya icarə müqaviləsi üzrə ödəmənin müddətinin qurtardığı vaxt gəlir almaq hüququnun əldə edildiyi vaxt sayıhr?",
  answer: "A)	Hesablama metodundan",
  options: [
    "A)	Hesablama metodundan",
    "B)	Kassa metodundan",
    "C)	Kassa və hesablama metodlarının hər ikisindən",
    "D)	İkili yazılış üsulundan"
  ]
},
  {
  numb: 32,
  question: "Vergi ödəyicisi vergi uçotunun aparılması üçün hesablama metodundan istifadə etdikdə, əqdlə bağlı olan xərcin çəkilməsi vaxtı, başqa hallar nəzərdə tutulmamışdırsa, aşağı-da sadalanan şərtlərin hansılarına əməl edildiyi vaxt sayılır? 1.	vergi ödəyicisi birmənalı olaraq maliyyə öhdəliklərini qəbul edir 2.	maliyyə öhdəliklərinin məbləği dəqiq qiymətləndirilir 3.	ödənişin nağd qaydada həyata keçirildiyi vaxt 4.	əqddə və ya müqavilədə iştirak edən bütün tərəflər əqd və ya müqavilə üzrə özlərinin bütün öhdəliklərini yerinə yetirmişlər, yaxud müvafiq məbləğlər qeyd-şərtsiz ödənilməlidir",
  answer: "A) 1,2,4",
  options: [
    "A) 1,2,4",
    "B) 1,2,3",
    "C) 2, 3,4",
    "D) 1,3,4"
  ]
},
  {
  numb: 33,
  question: "Borc öhdəliyi üzrə faizlər və ya əmlakın icarə haqqı ödənilərkən borc öhdəliyi və ya icarə müqaviləsi üzrə ödənişin müddəti bir neçə hesabat dövrünü əhatə edirsə, xərc hansı qaydada bölüşdürülür?",
  answer: "D)	Həmin hesabat dövrləri üzrə onun hesablanma qaydasına müvafiq surətdə bölüşdürülür",
  options: [
    "A)	Yalnız ilk hesabat dövrü üzrə onun hesablanma qaydasına müvafiq surətdə bölüşdürülür",
    "B)	Həmin hesabat dövrləri üzrə xərc bölüşdürülmür",
    "C)	Borc öhdəliyi və ya icarə müqaviləsi üzrə ödənişin hesablanma qaydası diqqətə alınmadan bölüşdürülür",
    "D)	Həmin hesabat dövrləri üzrə onun hesablanma qaydasına müvafiq surətdə bölüşdürülür"
  ]
},
  {
  numb: 34,
  question: "Hüquqi şəxs yaratmadan birgə sahibkarlıq fəaliyyəti ilə məşğul olan şəxslər həmin fəaliyyətdən əldə etdikləri birgə gəliri hansı qaydada bölüşdürürlər?",
  answer: "C)	Çəkilən birgə xərclər çıxılmaqla onlar arasındakı razılığa uyğun olaraq",
  options: [
    "A)	Çəkilən birgə xərclər çıxılmadan onlar arasındakı razılığa uyğun olaraq",
    "B)	Çəkilən birgə xərclər çıxılmadan işçilərin sayma mütənasib olaraq",
    "C)	Çəkilən birgə xərclər çıxılmaqla onlar arasındakı razılığa uyğun olaraq",
    "D)	Birgə gəlir bölüşdürülmür"
  ]
},
  {
  numb: 35,
  question: "Müqavilədə göstərilən işlərin başlandığı gündən hansı müddət ərzində başa çat-dırılmasını nəzərdə tutan müqavilələr uzunmüddətli müqavilələrə aid edilmir ?",
  answer: "D) 6 ay",
  options: [
    "A) 1 ay",
    "B) 3 ay",
    "C) 90 gün",
    "D) 6 ay"
  ]
},
  {
  numb: 36,
  question: "Uzunmüddətli müqavilə dedikdə, nə başa düşülür?",
  answer: "B)	Müqavilədə nəzərdə tutulan istehsal, quraşdırma və ya tikinti, yaxud bunlarla bağll xidmətlərin və işlərin vergi ili ərzində başa çatdırılmadığı müqavilə",
  options: [
    "A)	Müqavilədə nəzərdə tutulan istehsal, quraşdırma və ya tikinti, yaxud bunlarla bağlı xidmətlərin və işlərin 3 ay ərzində başa çatdırıldığı müqavilə",
    "B)	Müqavilədə nəzərdə tutulan istehsal, quraşdırma və ya tikinti, yaxud bunlarla bağll xidmətlərin və işlərin vergi ili ərzində başa çatdırılmadığı müqavilə",
    "C)	Müqavilədə nəzərdə tutulan istehsal, quraşdırma və ya tikinti, yaxud bunlarla bağll xidmətlərin və işlərin 6 ay ərzində başa çatdırıldığı müqavilə",
    "D)	Müqavilədə nəzərdə tutulan istehsal, quraşdırma və ya tikinti, yaxud bunlarla bağlı xidmətlərin və işlərin 90 gün ərzində başa çatdırıldığı müqavilə"
  ]
},
  {
  numb: 37,
  question: "Vergi ödəyicisi hesablama metodu ilə uçot aparırsa, uzunmüddətli müqavilələrlə bağlı gəlir və bu gəlirdən çıxılan məbləğlər hansı qaydada uçota alınır?",
  answer: "A)	Vergi ili ərzində müqavilələrin yerinə yetirilməsinin faktiki həcmlərinə uyğun olaraq",
  options: [
    "A)	Vergi ili ərzində müqavilələrin yerinə yetirilməsinin faktiki həcmlərinə uyğun olaraq",
    "B)	Bu müqavilələrlə bağh gəlir və bu gəlirdən çıxılan məbləğlər uçota ahnmır",
    "C)	Rüb ərzində müqavilələrin yerinə yetirilməsi nəzərdə tutulan plan həcmlərinə uyğun olaraq",
    "D) Ay ərzində müqavilələrin yerinə yetirilməsi nəzərdə tutulan plan həcmlərinə uyğun olaraq "
  ]
},
  {
  numb: 38,
  question: "Uzunmüddətli müqavilələr üzrə müqavilənin yerinə yetirilməsinin faktiki həcmi necə müəyyən olunur?",
  answer: "D)	Vergi ili ərzində çəkilmiş xərcin həmin müqavilədə nəzərdə tutulan ümumi qiymətləndi¬rilən xərclərlə müqayisə edilməsi yolu ilə müəyyənləşdirilir",
  options: [
    "A)	Vergi ili ərzində müqavilələrin yerinə yetirilməsinin faktiki həcmlərinə uyğun olaraq",
    "B)	Ay ərzində müqavilələrin yerinə yetirilməsi nəzərdə tutulan plan həcmlərinə uyğun olaraq",
    "C)	İl ərzində çəkilmiş xərcin həmin müqavilədə nəzərdə tutulan ümumi qiymətləndirilən xərclərlə müqayisə edilməsi yolu ilə müəyyənləşdirilir",
    "D)	Vergi ili ərzində çəkilmiş xərcin həmin müqavilədə nəzərdə tutulan ümumi qiymətləndi¬rilən xərclərlə müqayisə edilməsi yolu ilə müəyyənləşdirilir"
  ]
},
  {
  numb: 39,
  question: "Vergi ödəyicisi özünün mülkiyyətində olan və sonradan satılmaq, yaxud məhsul istehsalı, işlər görülməsi və ya xidmətlər göstərilməsində istifadə olunmaq üçün nəzərdə tutu¬lan hər hansı mah əmtəə-material ehtiyatlarına aid edə bilərmi?",
  answer: "A)	Aid etməyə borcludur",
  options: [
    "A)	Aid etməyə borcludur",
    "B)	Aid edə bilməz",
    "C) Vergi orqanının göstərişinə əsasən aid edilə bilər",
    "D) Maliyyə orqanının göstərişinə əsasən aid edilə bilər"
  ]
},
  {
  numb: 40,
  question: "Əmtəə-material ehtiyatlarının uçotunu apararkən vergi ödəyicisi istehsal etdiyi, yaxud satın aldığı malların istehsal xərclərinə və ya satınalma qiymətlərinə əsasən müəyyən¬ləşdirilən dəyərini uçotda əks etdirərkən bu malların saxlanmasına və nəql olunmasına çəkilən xərcləri onların dəyərinə daxil edə bilərmi?",
  answer: "B)	Daxil etməlidir",
  options: [
    "A)	Daxil edə bilməz ",
    "B)	Daxil etməlidir",
    "C) Gəlirdən çıxılan xərclərə aid edə bilər",
    "D) Yalnız vergi orqanı ilə razılaşdırıldıqdan sonra daxil edə bilər"
  ]
},
  {
  numb: 41,
  question: "Əmtəə-material ehtiyatlarının uçotunu apararkən vergi ödəyicisi mənəvi cəhətdən köhnəlmiş və ya dəbdən düşmüş qüsurlu malın, yaxud digər səbəblər üzündən istehsalına çəkilmiş xərclərdən (satınalma qiymətindən) yüksək qiymətə satıla bilməyən malın (məhsu¬lun) dəyərini hansı göstərici (qiymət) əsas götürməklə qiymətləndirə bilər?",
  answer: "C) Həmin malların satıla biləcəyi qiyməti",
  options: [
    "A)	Həmin malların istehsal qiymətini",
    "B)	Həmin malların ilkin qiymətini",
    "C) Həmin malların satıla biləcəyi qiyməti",
    "D) həmin malların qalıq dəyərini"
  ]
},
  {
  numb: 42,
  question: "Vergi ödəyicisi onun ixtiyarında olan malların fərdi uçotunu aparmırsa, o, əmtəə- material ehtiyatlarının uçotunu hansı qiymətləndirmə metodundan istifadə etməklə apar¬maq hüququna malikdir?",
  answer: "A)	Orta maya dəyəri ilə qiymətləndirmə metodundan",
  options: [
    "A)	Orta maya dəyəri ilə qiymətləndirmə metodundan",
    "B)	Qalıq dəyəri ilə qiymətləndirmə metodundan",
    "C)	Optimallaşdırma metodundan",
    "D)	Qalıq dəyəri ilə optimallaşdırma metodundan"
  ]
},
  {
  numb: 43,
  question: "İcarəyə verən maddi əmlakı maliyyə lizinqi müqaviləsi üzrə icarəyə verirsə, vergi- tutma məqsədləri üçün əmlakın sahibi kim hesab edilir?",
  answer: "B)	İcarəçi",
  options: [
    "A)	icarəyə verən",
    "B)	İcarəçi",
    "C) bu zaman müqavilənin şərtləri əsas götürülür",
    "D) Dövlət Əmlakının İdarə edilməsi üzrə Dövlət Komitəsi"
  ]
},
];
