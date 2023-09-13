// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Hansı xərclərin gəlirdən çıxılmasına yol verilir?",
  answer: "C)	Gəlirdən çıxılmayan xərclərdən başqa, gəlirin əldə edilməsi ilə bağlı olan bütün xərclər, həmçinin qanunla nəzərdə tutulmuş icbari ödənişlərin",
  options: [
    "A)	Gəlirdən çıxılmayan xərclərdən başqa, gəlirin əldə edilməsi ilə bağlı olan xərclərin",
    "B)	Gəlirin əldə edilməsi ilə bağlı olan bütün xərclərin",
    "C)	Gəlirdən çıxılmayan xərclərdən başqa, gəlirin əldə edilməsi ilə bağlı olan bütün xərclər, həmçinin qanunla nəzərdə tutulmuş icbari ödənişlərin",
    "D)	Bütün xərclərin, həmçinin qanunla nəzərdə tutulmuş icbari ödənişlərin, faizlərin, maliyyə sanksiyalarının və inzibati cərimələrin"
  ]
},
  {
  numb: 2,
  question: "Aşağıdakı hallarda bölüşdürülməsi mümkün olmayan xərclərin gəlirdən çıxılan məbləği necə müəyyən edilir?",
  answer: "A) Vergi ödəyicisi tərəfindən vergiyə cəlb olunan və vergidən azad olunan, yaxud mənfəət (gəlir) vergisinə cəlb edilməyən, habelə qeyri-sahibkarhq fəaliyyəti ilə bağlı əməliyyatlar üzrə çəkilən və həmin əməliyyatlar üzrə gəlirlərin və xərclərin uçotu ayrılıqda aparılan, lakin bölüşdürülməsi mümkün olmayan xərclərin gəlirdən çıxılan məbləği vergiyə cəlb edilən gəlirlərin vergi ödəyicisinin ümumi gəlirlərində xüsusi çəkisi əsasında müəyyən edilir",
  options: [
    "A) Vergi ödəyicisi tərəfindən vergiyə cəlb olunan və vergidən azad olunan, yaxud mənfəət (gəlir) vergisinə cəlb edilməyən, habelə qeyri-sahibkarhq fəaliyyəti ilə bağlı əməliyyatlar üzrə çəkilən və həmin əməliyyatlar üzrə gəlirlərin və xərclərin uçotu ayrılıqda aparılan, lakin bölüşdürülməsi mümkün olmayan xərclərin gəlirdən çıxılan məbləği vergiyə cəlb edilən gəlirlərin vergi ödəyicisinin ümumi gəlirlərində xüsusi çəkisi əsasında müəyyən edilir",
    "B)	Vergi ödəyicisi tərəfindən vergiyə cəlb olunan və vergidən azad olunan, yaxud mənfəət (gəlir) vergisinə cəlb edilməyən, habelə qeyri-sahibkarlıq fəaliyyəti ilə bağlı əməliyyatlar üzrə çəkilən və həmin əməliyyatlar üzrə gəlirlərin və xərclərin uçotu birgə aparılan, lakin bölüşdürülməsi mümkün olmayan xərclərin gəlirdən çıxılan məbləği vergiyə cəlb edilən gəlirlərin vergi ödəyicisinin ümumi gəlirlərində xüsusi çəkisi əsasında müəyyən edilir",
    "C)	Vergi ödəyicisi tərəfindən vergiyə cəlb olunan və vergidən azad olunan, yaxud mənfəət (gəlir) vergisinə cəlb edilməyən, habelə qeyri-sahibkarlıq fəaliyyəti ilə bağlı əməliyyatlar üzrə çəkilən və həmin əməliyyatlar üzrə gəlirlərin və xərclərin uçotu ayrılıqda aparılan, lakin bölüşdürülməsi mümkün olmayan xərclərin gəlirdən çıxılan məbləği vergiyə cəlb edilən gəlirlərin vergi ödəyicisinin digər gəlirlərində xüsusi çəkisi əsasında müəyyən edilir",
    "D)	Vergiyə cəlb edilən əməliyyatlarla yanaşı, vergidən azad olunan əməliyyatlar da aparıldıqda həmin əməliyyatlar üzrə gəlirlərin və xərclərin uçotu ayrılıqda aparılmalı və xərclərin gəlirdən çıxılan məbləği vergidən azad edilən gəlirlərin vergi ödəyicisinin ümumi gəlirlərində xüsusi çəkisi əsasında müəyyən olunmalıdır"
  ]
},
  {
  numb: 3,
  question: "Bina tikintisi fəaliyyəti ilə məşğul olan şəxslər tərəfindən dövlətə ayrılan hissə təqdim edildikdə, aktivlərə çəkilmiş məsrəflər gəlirdən çıxılırmı",
  answer: "B)	Çıxılır",
  options: [
    "A)	Çıxılmır ",
    "B)	Çıxılır",
    "C) Nazirlər Kabinetinin qərarı əsasında çıxılır",
    "D) 50%-i çıxılır"
  ]
},
  {
  numb: 4,
  question: "Azərbaycan Respublikasının ərazisində ezamiyyələr üzrə ezamiyyə xərcləri hansı qaydada gəlirdən çıxılan xərclərə aid edilir?",
  answer: "C)	Müvafiq təsdiqedici sənədlər əsasında (gündəlik xərclər istisna olmaqla) Nazirlər Kabinetinin müəyyənləşdirdiyi norma daxilində gəlirdən çıxılan xərclərə aid edilir.",
  options: [
    "A)	Müvafiq təsdiqedici sənədlər əsasında (gündəlik xərclər də daxil olmaqla) Nazirlər Kabinetinin müəyyənləşdirdiyi norma daxilində gəlirdən çıxılan xərclərə aid edilir.",
    "B)	Nazirlər Kabinetinin qərarı əsasında çıxılır",
    "C)	Müvafiq təsdiqedici sənədlər əsasında (gündəlik xərclər istisna olmaqla) Nazirlər Kabinetinin müəyyənləşdirdiyi norma daxilində gəlirdən çıxılan xərclərə aid edilir.",
    "D)	Müvafiq təsdiqedici sənədlər əsasında (gündəlik xərclər istisna olmaqla) Maliyyə nazirliyinin müəyyənləşdirdiyi norma daxilində gəlirdən çıxılan xərclərə aid edilir"
  ]
},
  {
  numb: 5,
  question: "Azərbaycan Respublikasının ərazisində ezamiyyə zamanı mehmanxana xərcləri barədə müvafiq təsdiqedici sənədlər təqdim edilmədiyi hallarda mehmanxana xərcləri gəlirdən necə çıxılır?",
  answer: "D)	Ezamiyyə xərclərinin 1 günlük normasının mehmanxana xərcləri üçün müəyyən edilmiş hissəsinin 50 faizi gəlirdən çıxılır",
  options: [
    "A)	Çıxılmır",
    "B)	Ezamiyyə xərclərinin 1 günlük normasının mehmanxana xərcləri üçün müəyyən edilmiş hissəsinin 80 faizi gəlirdən çıxılır",
    "C)	Ezamiyyə xərclərinin 1 günlük normasının mehmanxana xərcləri üçün müəyyən edilmiş hissəsinin 40 faizi gəlirdən çıxılır",
    "D)	Ezamiyyə xərclərinin 1 günlük normasının mehmanxana xərcləri üçün müəyyən edilmiş hissəsinin 50 faizi gəlirdən çıxılır"
  ]
},
{
  numb: 6,
  question: "Təbii itki normaları daxilində zayolmadan əmələgələn itkilər, təbii itki normaları daxilində xarabolmalar və bu kimi əskikgəlmələr vergitutma məqsədləri üçün gəlirdən çıxılırmı?",
  answer: "B)	Çıxılır",
  options: [
    "A)	Çıxılmır",
    "B)	Çıxılır",
    "C)	Dövlət Vergi Xidmətinin qərarı əsasında çıxılır",
    "D)	50%-i çıxılır"
  ]
},
  {
  numb: 7,
  question: "Gəlirdən çıxılmayan xərclər qrupunu göstərin: 1.	qeyri-kommersiya fəaliyyəti ilə bağlı çəkilən xərclər 2.	əsas vəsaitlərin alınmasına və qurulmasına çəkilən xərclər 3.	dövriyyə vəsaitlərinin alınmasına və gətirilməsinə çəkilən xərclər 4.	fərdi istehlaka çəkilən xərclər 5.	norma həddində ehtiyat fondlarına ayırmalar üzrə çəkilən xərclər",
  answer: "B) 1,2,4",
  options: [
    "A) 1,2,3",
    "B) 1,2,4",
    "C) 3,4,5",
    "D) 2,4,5"
  ]
},
  {
  numb: 8,
  question: "Aşağıdakı xərclərdən hansının gəlirdən çıxılmasına yol verilmir?",
  answer: "D)	Kapital xarakterli xərclərin",
  options: [
    "A)	Təcrübə konstruktor işlərinə çəkilən xərclərin",
    "B)	Elmi-tədqiqat işlərinə çəkilən xərclərin",
    "C)	Layihə-axtarış işlərinə çəkilən xərclərin",
    "D)	Kapital xarakterli xərclərin"
  ]
},
  {
  numb: 9,
  question: "Qeyri-kommersiya fəaliyyəti ilə bağlı xərclər gəlirdən hansı qaydada çıxılır?",
  answer: "B)	Gəlirdən çıxılmır",
  options: [
    "A)	Ümumi qaydada gəlirdən çıxılır",
    "B)	Gəlirdən çıxılmır",
    "C)	Ümumi gəlirdəki xüsusi çəkisinə uyğun olaraq gəlirdən çıxılır",
    "D)	Yalniz kommunal xarakterli qeyri-kommersiya xərcləri gəlirdən çıxılır"
  ]
},
  {
  numb: 10,
  question: "Əyləncə və yemək xərcləri, habelə işçilərin mənzil və digər sosial xarakterli xərcləri gəlirdən hansı qaydada çıxılır?",
  answer: "B)	Gəlirdən çıxılmır",
  options: [
    "A)	Xərclərin 50 faizi gəlirdən çıxılır",
    "B)	Gəlirdən çıxılmır",
    "C)	Ancaq yemək xərcləri çıxılır",
    "D)	Ancaq mənzil xərcləri çıxılır"
  ]
},
  {
  numb: 11,
  question: "Sahibkarlıq fəaliyyəti əyləncə və sosial xarakter daşıyan vergi ödəyicisinin xərcləri bu cür fəaliyyət çərçivəsində çəkilirsə, əyləncə və sosial xərclə gəlirdən hansı qaydada çıxılır?",
  answer: "B)	Gəlirdən tam həcmdə çıxılır",
  options: [
    "A)	Xərclərin 50 faizi gəlirdən çıxılır",
    "B)	Gəlirdən tam həcmdə çıxılır",
    "C)	Ancaq yemək xərcləri çıxılır",
    "D)	Ancaq mənzil xərcləri çıxılır"
  ]
},
  {
  numb: 12,
  question: "Fiziki şəxsin fərdi istehlakla və ya əmək haqqının alınması ilə bağlı olan xərcləri gə¬lirdən hansı qaydada çıxılır?",
  answer: "C)	Əmək haqqı kartlarının alınmasına çəkilən xərclər istisna olmaqla gəlirdən çıxılmır",
  options: [
    "A)	Ümumi qaydada gəlirdən çıxılır",
    "B)	Yalınız normadan artıq olan hissəsi gəlirdən çıxılır",
    "C)	Əmək haqqı kartlarının alınmasına çəkilən xərclər istisna olmaqla gəlirdən çıxılmır",
    "D)	Gəlirdən çıxılmır"
  ]
},
  {
  numb: 13,
  question: "Ehtiyat fondlarına ayırma məbləğləri gəlirdən necə çıxılır?",
  answer: "C)	Vergi Məcəlləsinin 111-ci və 112-ci maddələrinə müvafiq surətdə gəlirdən çıxılır",
  options: [
    "A)	50 faizi gəlirdən çıxılır",
    "B)	Vergi Məcəlləsinin 110-cu və 113-cü maddələrinə müvafiq surətdə gəlirdən çıxıhr",
    "C)	Vergi Məcəlləsinin 111-ci və 112-ci maddələrinə müvafiq surətdə gəlirdən çıxılır",
    "D)	Gəlirdən çıxılmır"
  ]
},
  {
  numb: 14,
  question: "Faktiki ezamiyyə xərclərinin normadan artıq olan hissəsi gəlirdən necə çıxılır?",
  answer: "C) Gəlirdən çıxılmır",
  options: [
    "A)	Normadan artıq xərclərin 50 faizi çıxıhr",
    "B)	Normadan artıq xərclərin 20 faizi çıxılır	",
    "C) Gəlirdən çıxılmır",
    "D) Gəlirdən çıxılır"
  ]
},
  {
  numb: 15,
  question: "Nəzarət-kassa aparatının çeki və ya qəbz malların alınması ilə bağlı çəkilən xərcləri təsdiq edən sənəd hesab olunurmu?",
  answer: "A)	Olunmur",
  options: [
    "A)	Olunmur",
    "B)	Olunur",
    "C)	50%-i olunur",
    "D)	Yalnız hüquqi şəxslərdə xərc sənədi hesab olunur."
  ]
},
  {
  numb: 16,
  question: "Aşağıdakılardan hansı doğrudur?",
  answer: "D)	Əmtəəsiz əməliyyatlar çərçivəsində əldə edilmiş sənədlər gəlirdən çıxılan xərcləri təsdiq edən sənəd hesab edilmir və təqdim edilən malların (işlərin, xidmətlərin) dəyəri Vergi Məcəlləsinin 14-cü, 14-1-ci və 67-ci maddələri nəzərə alınmaqla gəlirdən çıxıhr",
  options: [
    "A)	Əmtəəsiz əməliyyatlar çərçivəsində əldə edilmiş sənədlər gəlirdən çıxılan xərcləri təsdiq edən sənəd hesab edilmir və təqdim edilən malların dəyəri yalnız əlaqəli məlumatlar nəzərə alınmaqla gəlirdən çıxılır.",
    "B)	Əmtəəsiz əməliyyatlar çərçivəsində əldə edilmiş sənədlər gəlirdən çıxılan xərcləri təsdiq edən sənəd hesab edilmir və təqdim edilən malların dəyəri yalnız bazar qiymətləri nəzərə alınmaqla gəlirdən çıxılır.",
    "C)	Əmtəəsiz əməliyyatlar çərçivəsində əldə edilmiş sənədlər gəlirdən çıxılan xərcləri təsdiq edən sənəd hesab edilmir və təqdim edilən malların dəyəri elektron qaimə-fakturadakı dəyəri nəzərə alınmaqla gəlirdən çıxıhr.",
    "D)	Əmtəəsiz əməliyyatlar çərçivəsində əldə edilmiş sənədlər gəlirdən çıxılan xərcləri təsdiq edən sənəd hesab edilmir və təqdim edilən malların (işlərin, xidmətlərin) dəyəri Vergi Məcəlləsinin 14-cü, 14-1-ci və 67-ci maddələri nəzərə alınmaqla gəlirdən çıxıhr"
  ]
},
  {
  numb: 17,
  question: "Xaricdən alınmış borclar üzrə, habelə qarşılıqlı surətdə asılı olan şəxslərin bir- birinə ödədikləri faizlərin faktiki məbləği (hesablamalar metodundan istifadə edildikdə - ödənilməli faizlərin məbləği) faizlərin aid olduğu dövrdə eyni valyuta ilə, oxşar müddətə verilmiş banklararası kredit hərracında olan və ya hərraclar keçirilmədiyi təqdirdə Azərbaycan Respublikası Mərkəzi Bankının dərc etdiyi banklararası kreditlər üzrə faizlərin orta səviyyəsinin neçə faizindən artıq olmamaqia gəlirdən çıxılır?",
  answer: "A) 125 faizi",
  options: [
    "A) 125 faizi",
    "B) 100 faizi",
    "C) 75 faizi",
    "D) 50 faizi"
  ]
},
  {
  numb: 18,
  question: "Vergi Məcəlləsinin 14-1.2-ci maddəsində nəzərdə tutulan şəxslərdən alınmış borclar üzrə əməliyyatlara Məcəllənin hansı maddəsinin müddəaları tətbiq edilir?",
  answer: "A) Transfer qiymətinin müddəaları",
  options: [
    "A) Transfer qiymətinin müddəaları",
    "B) bazar qiymətinin müddəaları",
    "C) heç bir maddənin müddəaları",
    "D) qarşılıqlı surətdə asılı olan şəxslərlə bağlı müddəalar"
  ]
},
  {
  numb: 19,
  question: "Xaricdən alınan borclar (xarici banklar və kredit təşkilatları tərəfindən verilmiş, habelə xarici birjalarda ticarət olunan istiqrazlar üzrə borclar istisna olmaqla) vergi ödəyicisinin xalis aktivlərindən (kapitalından) iki dəfədən çox olduğu halda, borca görə hesablanan faizlər gəlirdən hansı qaydada çıxılır?",
  answer: "C)	Borcun xalis aktivdən (kapitaldan) iki dəfədən çox olan hissəsinə görə hesablanmış faizlərin gəlirdən çıxılmasına yol verilmir",
  options: [
    "A)	Ümumi qaydada gəlirdən çıxıhr",
    "B)	Borcun xalis aktivdən (kapitaldan) iki dəfədən çox olan hissəsinə görə hesablanmış faizlərin 50 faizinin gəlirdən çıxılmasına yol verilir",
    "C)	Borcun xalis aktivdən (kapitaldan) iki dəfədən çox olan hissəsinə görə hesablanmış faizlərin gəlirdən çıxılmasına yol verilmir",
    "D)	Borcun xalis aktivin (kapitalın) dəyərinə bərabər olan hissəsinə görə hesablanmış faizlərin gəlirdən çıxılmasına yol verilir"
  ]
},
  {
  numb: 20,
  question: "Əgər malların [işlərin, xidmətlərin] təqdim edilməsi ilə əlaqədar gəlir əvvəllər sahibkarlıq fəaliyyətindən əldə edilən ümumi gəlirə aid edilmişdirsə, vergi ödəyicisi onlarla bağlı olan ümidsiz borc məbləğinin hansı hissəsini gəlirdən çıxa bilər?",
  answer: "C) Ümidsiz borcun tam məbləğini",
  options: [
    "A)	Ümidsiz borc məbləğinin 50 faizini ",
    "B)	Ümidsiz borc məbləğinin 25 faizini",
    "C) Ümidsiz borcun tam məbləğini",
    "D) Ümidsiz borc məbləği gəlirdən çıxılmır"
  ]
},
  {
  numb: 21,
  question: "Ümidsiz borc məbləğinin gəlirdən çıxılmasına hansı halda yol verilir?",
  answer: "D)	Vergi ödəyicisinin mühasibat kitablarında ümidsiz borc məbləğinin dəyəri olmayan borc kimi silindiyi vaxt",
  options: [
    "A)	Vergi ödəyicisi ümidsiz borc məbləğini gəlirdən çıxa bilməz",
    "B)	Ümidsiz borc məbləğinin gələcəkdə alınması imkanı yarandıqda",
    "C)	Əlaqədar vergi orqanının razılığından sonra gəlirdən çıxıla bilər",
    "D)	Vergi ödəyicisinin mühasibat kitablarında ümidsiz borc məbləğinin dəyəri olmayan borc kimi silindiyi vaxt"
  ]
},
  {
  numb: 22,
  question: "Banklar və bank fəaliyyətinin ayrı-ayrı növlərini həyata keçirən kredit təşkilatları qanunvericiliyə müvafiq qaydada hansı məbləğləri Azərbaycan Respublikasının Nazirlər Kabineti tərəfindən müəyyən edilmiş qaydada gəlirdən çıxmaq hüququna malikdirlər?",
  answer: "B)	Aktivlərin təsnif asılı olaraq xüsusi ehtiyat fondlarının yaradılmasına aid edilən məbləğləri ",
  options: [
    "A)	Yalnız bankın kredit resurslarının dəyərində olan məbləğləri",
    "B)	Aktivlərin təsnif asılı olaraq xüsusi ehtiyat fondlarının yaradılmasına aid edilən məbləğləri ",
    "C) Aktivlərin təsnif asılı olmayaraq xüsusi ehtiyat fondlar yaradılmasına aid edilən məbləğləri ",
    "D) Valyuta növündən asılı olaraq xüsusi ehtiyat fondları yaradılmasına aid edilən məbləğləri"
  ]
},
  {
  numb: 23,
  question: "Ehtiyat sığorta fondlarına ayırmalar gəlirdən çıxıla bilərmi?",
  answer: "A)	Sığorta fəaliyyəti ilə məşğul olan hüquqi şəxs Azərbaycan Respublikasının qanunvericili¬yi ilə müəyyən edilmiş normalara uyğun olaraq ehtiyat sığorta fondlarına ayırma məbləğlərini gəlirdən çıxmaq hüququna malikdir.",
  options: [
    "A)	Sığorta fəaliyyəti ilə məşğul olan hüquqi şəxs Azərbaycan Respublikasının qanunvericili¬yi ilə müəyyən edilmiş normalara uyğun olaraq ehtiyat sığorta fondlarına ayırma məbləğlərini gəlirdən çıxmaq hüququna malikdir.",
    "B)	Sığorta fəaliyyəti ilə məşğul olan hüquqi şəxs Azərbaycan Respublikasının qanunvericiliyi ilə müəyyən edilmiş normalara uyğun olaraq ehtiyat sığorta fondlarına ayırma məbləğlərinin yalnız 50%-ni gəlirdən çıxmaq hüququna malikdir.",
    "C)	Sığorta fəaliyyəti i[ə məşğul olan hüquqi şəxs Azərbaycan Respublikasının qanunvericiliyi ilə müəyyən edilmiş normalara uyğun olaraq ehtiyat sığorta fondlarına ayırma məbləğlərinin yalnız 80%-ni gəlirdən çıxmaq hüququna malikdir.",
    "D)	Çıxa bilməz"
  ]
},
  {
  numb: 24,
  question: "Gəlir götürmək məqsədi ilə aparılan elmi-tədqiqat, layihə axtarış və təcrübə- konstruktor işlərinə çəkilən xərclər hansı halda gəlirdən çıxıla bilər?",
  answer: "D)	Bu xərclər əsas vəsaitlərin alınması, quraşdırılması ilə bağlı olmadıqda və kapital xarakteri daşımadıqda",
  options: [
    "A)	Bu xərclər əsas vəsaitlərin quraşdırılması ilə bağlı olduqda",
    "B)	Bu xərclər əsas vəsaitlərin quraşdırılması ilə bağlı olduqda",
    "C)	Bu xərclər kapital xarakteri daşıdıqda",
    "D)	Bu xərclər əsas vəsaitlərin alınması, quraşdırılması ilə bağlı olmadıqda və kapital xarakteri daşımadıqda"
  ]
},
  {
  numb: 25,
  question: "Gəlir götürmək məqsədi ilə aparılan elmi-tədqiqat, layihə-axtarış və təcrübə-kon- struktor işlərinə çəkilən xərclərin hansı hissəsi gəlirdən çıxılır?",
  answer: "C)	Əsas vəsaitlərin alınması və qurulması ilə bağlı xərclər, habelə kapital xarakterli digər xərclər istisna olmaqla, aparılan elmi-tədqiqat, layihə-axtarış və təcrübə-konstruktor işlərinə çəkilən xərclər gəlirdən çıxılır",
  options: [
    "A)	Əsas vəsaitlərin alınması və qurulması ilə bağlı xərclər, habelə kapital xarakterli digər xərclər də daxil olmaqla gəlirdən tam həcmdə çıxılır",
    "B)	Gəlir götürmək məqsədi ilə aparılan elmi-tədqiqat, layihə-axtarış və təcrübə-konstruktor işlərinə çəkilən xərclər (əsas vəsaitlərin alınması və qurulması ilə bağlı xərclər, habelə kapital xarakterli digər xərclər istisna olmaqla) gəlirdən çıxılmır",
    "C)	Əsas vəsaitlərin alınması və qurulması ilə bağlı xərclər, habelə kapital xarakterli digər xərclər istisna olmaqla, aparılan elmi-tədqiqat, layihə-axtarış və təcrübə-konstruktor işlərinə çəkilən xərclər gəlirdən çıxılır",
    "D)	Yalnız əsas vəsaitlərin alınması və qurulması ilə bağlı xərclər, habelə kapital xarakterli digər xərclər gəlirdən tam həcmdə çıxılır"
  ]
},
  {
  numb: 26,
  question: "Aşağıdakılardan hansı doğru olmayanlara aid deyil?",
  answer: "A)	Sahibkarlıq və qeyri-sahibkarlıq fəaliyyətində istifadə edilən əsas vəsaitlər üzrə amor¬tizasiya ayırmaları gəlirdən çıxılır",
  options: [
    "A)	Sahibkarlıq və qeyri-sahibkarlıq fəaliyyətində istifadə edilən əsas vəsaitlər üzrə amor¬tizasiya ayırmaları gəlirdən çıxılır",
    "B)	Yalnız sahibkarlıq fəaliyyətində istifadə edilən əsas vəsaitlər üzrə amortizasiya ayırmaları gəlirdən çıxılır",
    "C)	Əlaqədar vergi orqanının razılığından sonra gəlirdən çıxıla bilər",
    "D)	Sahibkarlıq və qeyri-sahibkarlıq fəaliyyətində istifadə edilən əsas vəsaitlər üzrə amor¬tizasiya ayırmaları Məcəllənin 114-cü maddəsində qeyd edilən normalara 1.5 əmsal tətbiq edil¬məklə gəlirdən çıxılır"
  ]
},
  {
  numb: 27,
  question: "Müəssisənin balansında olan torpaqların illik amortizasiya norması neçə faizdir?",
  answer: "D) Amortizasiya olunmur",
  options: [
    "A) 7 faizədək",
    "B) 20 faizədək",
    "C) 25 faizədək",
    "D) Amortizasiya olunmur"
  ]
},
  {
  numb: 28,
  question: "Amortizasiya olunmayan aktivlər qrupunu göstərin: 1.	istismar vaxtı çatmayan alma və ərik bağları 2.	atlar 3.	nəqliyyat vasitələri  damazlıq dəvələr və marallar 5. damazlıq inəklər",
  answer: "C) 1,4,5",
  options: [
    "A) 1,2,3",
    "B) 2,3,5",
    "C) 1,4,5",
    "D) 3,4,5"
  ]
},
  {
  numb: 29,
  question: "İncəsənət əsərləri üçün illik amortizasiya norması neçə faizdir?",
  answer: "D) amortizasiya olunmur",
  options: [
    "A) 7 faizədək",
    "B) 10 faizədək",
    "C) 20 faizədək",
    "D) amortizasiya olunmur"
  ]
},
  {
  numb: 30,
  question: "Amortizasiya olunan aktivlər qrupunu göstərin: 1.	istismar vaxtı çatmayan limon və zeytun bağları 2. atlar	3. damazlıq madyanlar 4. öküzlər	5. damazlıq inəklər dəvələr",
  answer: "D) 2,4,6",
  options: [
    "A) 1,2,3",
    "B) 2,3,5",
    "C) 1,4,5",
    "D) 2,4,6"
  ]
},
  {
  numb: 31,
  question: "Amortizasiya olunmayan aktivləri göstərin: 1.	binalar, tikintilər, qurğular 2.	ümumi istifadədə olan avtomobil yolları 3.	maşınlar, avadanlıq və yüksək texnologiyalar məhsulu olan hesablama texnikası 4.	torpaq, incəsənət əsərləri, nadir tarixi və memarlıq abidələri olan binalar, qurğular 5.	geoloji- kəşfiyyat işlərinə və təbii ehtiyatların hasilatına hazırlıq işlərinə çəkilən xərclər 6.	ümumi istifadədə olan parklardakı avadanlıqlar",
  answer: " B)2,4, 6",
  options: [
    "A) l,4,5",
    "B) 2,4,6",
    "C) l,3,5",
    "D) 2,3,6"
  ]
},
  {
  numb: 32,
  question: "Amortizasiya olunan aktivləri göstərin: 1.	nəqliyyat vasitələri 2.	elmi-tədqiqat, tədris və təcrübə məqsədi üçün kabinetlərdə və laboratoriyalarda istifadə edilən avadanlıqlar, eksponatlar, nümunələr, fəaliyyətdə olan vƏ olmayan modellər, maketlər və başqa əyani vəsaitlər 3.	istifadə müddəti məlum olmayan qeyri-maddi aktivlər 4.	heyvanxanalarda və digər analoji müəssisələrdə olan heyvanat aləminin eksponatları 5.	istifadə müddəti məlum olan qeyri-maddi aktivlər 6.	istismara verilməmiş anbarda olan əsas vəsaitlər",
  answer: "A) 1,3,5",
  options: [
    "A) 1,3,5",
    "B) 2,4,6",
    "C) 1,4,5",
    "D) 2,5,5"
  ]
},
  {
  numb: 33,
  question: "Elmi-tədqiqat, tədris və təcrübə məqsədi üçün kabinetlərdə və laboratoriyalarda istifadə edilən avadanlıqlar, eksponatlar, nümunələr, fəaliyyətdə olan və olmayan modellər, maketlər və başqa əyani vəsaitlər üçün illik amortizasiya norması neçə faizdir?",
  answer: "A) Həmin aktivlər amortizasiya olunmur ",
  options: [
    "A) Həmin aktivlər amortizasiya olunmur ",
    "B) 20%",
    "C) 10%",
    "D) 25%"
  ]
},
  {
  numb: 34,
  question: "Damazlıq inəklər, camışlar, madyanlar, dəvələr, qoçlar, təkələr, qoyunlar, keçilər, döllük buğalar üçün illik amortizasiya normasının yuxarı həddi neçə faizdir?",
  answer: "D) Amortizasiya olunmur",
  options: [
    "A) 7%",
    "B) 20%",
    "C) 10%",
    "D) Amortizasiya olunmur"
  ]
},
  {
  numb: 35,
  question: "Heyvanxanalarda və digər analoji müəssisələrdə olan heyvanat aləminin ekspo¬natları, kitabxana fondları, kinofondlar (video, audio, foto), səhnə rekvizitləri, muzey sər¬vətləri (eksponatları) üzrə illik amortizasiya normasının yuxarı həddi neçə faizdir?",
  answer: "D) Həmin aktivlər amortizasiya olunmur",
  options: [
    "A) 10%",
    "B) 20%",
    "C) 25%",
    "D) Həmin aktivlər amortizasiya olunmur"
  ]
},
  {
  numb: 36,
  question: "Konservasiya edilmiş əsas vəsaitlər hansı qaydada amortizasiya olunur?",
  answer: "C)	Amortizasiya olunmur",
  options: [
    "A)	Amortizasiya normasının 50 faizi məbləğində",
    "B)	Amortizasiya normasının 2 misli miqdarmda",
    "C)	Amortizasiya olunmur",
    "D)	Amortizasiya normasının tam məbləğində"
  ]
},
  {
  numb: 37,
  question: "İstismara verilməmiş anbarda olan əsas vəsaitlər üzrə amortizasiya normasının yu¬xarı həddi neçə faizdir?",
  answer: "D) Amortizasiya hesablanmır",
  options: [
    "A) 10%",
    "B) 20%",
    "C) 25%",
    "D) Amortizasiya hesablanmır"
  ]
},
  {
  numb: 38,
  question: "Torpaqların yaxşılaşdırılması üzrə kapitallaşdırılmış xərclər, binalar, tikintilər və qurğular üçün illik amortizasiya normasının yuxarı həddi neçə faizdir?",
  answer: "A) 7 faiz",
  options: [
    "A) 7 faiz",
    "B) 10 faiz",
    "C) 20 faiz",
    "D) 25 faiz"
  ]
},
  {
  numb: 39,
  question: "Maşınlar və avadanlıq üçün illik amortizasya normasının yuxan həddi neçə faizdir?",
  answer: "C) 20%",
  options: [
    "A) 10%",
    "B) 25%",
    "C) 20%",
    "D) Amortizasiya olunmur"
  ]
},
  {
  numb: 40,
  question: "Yüksək texnologiyalar məhsulu olan hesablama texnikası üçün illik amortizasiya normasının yuxarı həddi neçə faizdir?",
  answer: "B) 25%",
  options: [
    "A) 10%",
    "B) 25%",
    "C) 20%",
    "D) Amortizasiya olunmur"
  ]
},
  {
  numb: 41,
  question: "Atlar, dəvələr, öküzlər üçün illik amortizasiya normasının yuxarı həddi neçə faizdir?",
  answer: "C) 20 faiz",
  options: [
    ") 7 faiz",
    "B) 25 faiz",
    "C) 20 faiz",
    "D) Amortizasiya olunmur"
  ]
},
  {
  numb: 42,
  question: "Geoloji-kəşfiyyat işlərinə və təbii ehtiyatların hasilatına hazırlıq işlərinə çəkilən xər¬clər üçün amortizasiya normasının yuxarı həddi neçə faizdir?",
  answer: "C) 25 faiz",
  options: [
    ") 7 faiz",
    "B) 20 faiz",
    "C) 25 faiz",
    "D) Amortizasiya olunmur"
  ]
},
  {
  numb: 43,
  question: "İstifadə müddəti məlum olmayan qeyri-maddi aktivlər üçün illik amortizasiya nor¬masının yuxarı həddi neçə faizdir?",
  answer: "B) 10 faiz",
  options: [
    "A) 7 faiz",
    "B) 10 faiz",
    "C) 20 faiz",
    "D) 25 faiz"
  ]
},
];
