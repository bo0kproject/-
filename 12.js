// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Əlavə dəyər vergisi nədir?",
  answer: "C)	Vergi tutulan dövriyyədən hesablanan verginin məbləği ilə Vergi Məcəlləsinin müddəala-rına uyğun olaraq verilən elektron qaimə- fakturalara və ya idxalda ƏDV-nin ödənildiyini göstərən sənədlərə müvafiq surətdə əvəzləşdirilməli olan verginin məbləği arasındakı fərqdir",
  options: [
    "A)	Vergi tutulan dövriyyədən hesablanan vergi",
    "B)	Vergi tutulan dövriyyədən hesablanan verginin məbləği ilə elektron qaimə- fakturalara və ya idxalda ƏDV-nin ödənildiyini göstərən sənədlərə müvafiq surətdə əvəzləşdirilməli olan verginin məbləği arasındakı fərqdir və Azərbaycan Respublikası ərazisində istehsal olunan kənd təsərrüfatı məhsullarının pərakəndə satışı zamanı ticarət əlavəsindən hesablanan verginin məbləğidir.",
    "C)	Vergi tutulan dövriyyədən hesablanan verginin məbləği ilə Vergi Məcəlləsinin müddəala-rına uyğun olaraq verilən elektron qaimə- fakturalara və ya idxalda ƏDV-nin ödənildiyini göstərən sənədlərə müvafiq surətdə əvəzləşdirilməli olan verginin məbləği arasındakı fərqdir",
    "D)	Vergi tutulan dövriyyədən hesablanan verginin məbləği ilə V.M. müddəalarına və Mailiyə nazirliyinin təlimatlarına uyğun olaraq verilən elektron qaimə- fakturalara və ya idxalda ƏDV-nin ödənildiyini göstərən sənədlərə müvafiq surətdə əvəzləşdirilməli olan verginin məbləği arasındakı fərqdir."
  ]
},
  {
  numb: 2,
  question: "Azərbaycan Respublikası ərazisində istehsal olunan kənd təsərrüfatı məhsulları-nın pərakəndə satışı zamanı əlavə dəyər vergisi necə hesablanır?",
  answer: "D)	Azərbaycan Respublikası ərazisində istehsal olunan kənd təsərrüfatı məhsullarının pərakəndə satışı zamanı əlavə dəyər vergisi ticarət əlavəsindən hesablanan verginin məbləğidir.",
  options: [
    "A)	Vergi tutulan dövriyyədən",
    "B)	Vergi ödəyicisinə verilən elektron qaimə-fakturalarda göstərilən dövriyyədən",
    "C)	Vergi tutulan dövriyyədən hesablanan verginin məbləği ilə Vergi Məcəlləsinin müddəala-rına uyğun olaraq verilən elektron qaimə-fakturalara müvafiq surətdə əvəzləşdirilməli olan Verginin məbləği arasındakı fərqdən.",
    "D)	Azərbaycan Respublikası ərazisində istehsal olunan kənd təsərrüfatı məhsullarının pərakəndə satışı zamanı əlavə dəyər vergisi ticarət əlavəsindən hesablanan verginin məbləğidir."
  ]
},
  {
  numb: 3,
  question: "2022-ci il yanvarın 1-dən neçə il müddətində kənd təsərrüfatı məhsullarının (yerli və xarici mənşəli) topdan və pərakəndə satışı zamanı ƏDV ticarət əlavəsindən hesablanan verginin məbləği hesab edilir?",
  answer: "B) 3 il",
  options: [
    "A) 7 il",
    "B) 3 il",
    "C) 4 il",
    "D) 5 il"
  ]
},
  {
  numb: 4,
  question: "Əlavə dəyər vergisinin ödəyicilərini göstərin: 1.	ƏDV-nin ödəyicisi kimi qeydiyyatdan keçən və ya qeydiyyatdan keçməli olan şəxs 2.	Azərbaycan Respublikası ƏDV tutulan malları idxal edən şəxslər bu cür idxal malları üzrə 3.	Dövriyyəsindən asılı olmayaraq istənilən şəxslər 4.	Aksizli, məcburi nişanlama ilə nişanlanmalı malların istehsalçıları və bina tikintisi fəaliy-yəti ilə məşğul olan şəxslər 5.	Dövriyyəsindən asılı olmayaraq qeyri-rezidentlərin daimi nümayəndəlikləri",
  answer: "C) 1,2,4",
  options: [
    "A) 1,2,5",
    "B) 2,3,4",
    "C) 1,2,4",
    "D) 3,4,5"
  ]
},
  {
  numb: 5,
  question: "ƏDV-nin ödəyicisi kimi qeydiyyatdan keçən şəxs hansı vaxtdan etibarən vergi ödəyicisi olur?",
  answer: "A)	Qeydiyyatın qüvvəyə mindiyi andan",
  options: [
    "A)	Qeydiyyatın qüvvəyə mindiyi andan",
    "B)	Qeydiyyata dair ərizə vermək öhdəliyinin yarandığı dövrdən",
    "C)	Vergi orqanının müəyyən etdiyi vaxtdan",
    "D)	Qeydiyyatın qüvvəyə mindiyi vaxtdan sonrakı hesabat dövrünün başlanğıcından"
  ]
},
{
  numb: 6,
  question: "Azərbaycan Respublik. iş görən qeyri-rezidentlər nə vaxt ƏDV ödəyiciləri sayılırlar?",
  answer: "D)	İstənilən halda",
  options: [
    "A)	Vergi tutulan əməliyyatlarının həcmindən asılı olaraq",
    "B)	Qeyri-rezidentlər ƏDV ödəyiciləri deyildir",
    "C)	ƏDV məqsədləri üçün qeydiyyatdan keçdikdən sonra",
    "D)	İstənilən halda"
  ]
},
  {
  numb: 7,
  question: "Hüquqi şəxs yaratmadan göstərilən birgə sahibkarlıq fəaliyyəti ƏDV-nin məqsədləri üçün ayrıca şəxs sayılırım və ayrıca şəxs kim sayılır?",
  answer: "A)	Vergi Məcəlləsinin 137-ci maddəsinə uyğun olaraq hüquqi şəxs yaratmadan göstərilən birgə sahibkarlıq fəaliyyəti ƏDV-nin məqsədləri üçün ayrıca şəxs sayılır və ayrıca şəxs dedikdə birgə sahibkarlıq fəaliyyətinin uçotunu aparan şəxs nəzərdə tutulur",
  options: [
    "A)	Vergi Məcəlləsinin 137-ci maddəsinə uyğun olaraq hüquqi şəxs yaratmadan göstərilən birgə sahibkarlıq fəaliyyəti ƏDV-nin məqsədləri üçün ayrıca şəxs sayılır və ayrıca şəxs dedikdə birgə sahibkarlıq fəaliyyətinin uçotunu aparan şəxs nəzərdə tutulur",
    "B)	Hüquqi şəxs yaradaraq göstərilən birgə sahibkarlıq fəaliyyəti sayılır",
    "C)	Birgə sahibkarlıq fəaliyyəti iştirakçılarının istəyi ilə sayılır",
    "D)	Vergi Məcəlləsinin 137-ci maddəsinə uyğun olaraq hüquqi şəxs yaradaraq göstərilən birgə sahibkarlıq fəaliyyəti ƏDV-nin məqsədləri üçün ayrıca şəxs sayılır və ayrıca şəxs dedikdə birgə sahibkarlıq fəaliyyətinin uçotunu aparan şəxs nəzərdə tutulur"
  ]
},
  {
  numb: 8,
  question: "Aşağıdakılardan hansı doğru olmayanlara aid deyil?",
  answer: "D)	Aksizli, məcburi nişanlama ilə nişanlanmalı malların istehsalçıları və bina tikintisi fəaliyyəti ilə məşğul olan şəxslər ƏDV-nin ödəyiciləri sayılır",
  options: [
    "A)	Aksizli, məcburi nişanlama ilə nişanlanmalı malların istehsalçıları və sadələşdirilmiş verginin ödəyicisi olmaq hüququndan istifadə etməyən bina tikintisi fəaliyyəti ilə məşğul olan şəxslər ƏDV-nin ödəyiciləri sayılır",
    "B)	Aksizli, məcburi nişanlama ilə nişanlanmalı malların istehsalçıları, idxal olunan əmlak istisna olmaqla müəssisənin nizamnamə fonduna (kapitalına) pay şəklində hər hansı əmiakm qoyulması və bina tikintisi fəaliyyəti ilə məşğul olan şəxslər ƏDV-nin ödəyiciləri sayılır",
    "C)	Aksizli, məcburi nişanlama ilə nişanlanmalı malların istehsalçıları, nəşriyyat və poliqrafiya fəaliyyəti (reklam xidmətləri istisna olmaqla) və bina tikintisi fəaliyyəti ilə məşğul olan şəxslər ƏDV-nin ödəyiciləri sayılır",
    "D)	Aksizli, məcburi nişanlama ilə nişanlanmalı malların istehsalçıları və bina tikintisi fəaliyyəti ilə məşğul olan şəxslər ƏDV-nin ödəyiciləri sayılır"
  ]
},
  {
  numb: 9,
  question: "Bir əqd və ya müqavilə üzrə əməliyyatın ümumi dəyəri neçə manatdan artıq ol¬duqda, həmin əməliyyat ƏDV tutulan əməliyyat sayılır?",
  answer: "C) 200.000 manatdan",
  options: [
    "A) 60.000 manatdan",
    "B) 90.000 manatdan",
    "C) 200.000 manatdan",
    "D) 150.000 manatdan"
  ]
},
  {
  numb: 10,
  question: "Bir əqd və ya müqavilə üzrə əməliyyatın ümumi dəyəri 200.000 manatdan artıq olduqda, həmin əməliyyatı həyata keçirən şəxs nə vaxt ƏDV-nin məqsədləri üçün qeydiyyata dair ərizə verməyə borcludur?",
  answer: "A)	Həmin əməliyyatın aparıldığı günədək",
  options: [
    "A)	Həmin əməliyyatın aparıldığı günədək",
    "B)	Əməliyyatın baş verdiyi aydan sonra 10 gün ərzində",
    "C)	Əməliyyatın baş verdiyi tarixdən 10 gün ərzində",
    "D)	Əqdin və ya müqavilənin bağlandığı günədək"
  ]
},
  {
  numb: 11,
  question: "Qeyri-sahibkarlıq fəaliyyəti göstərən fiziki şəxslər ƏDV-ni necə hesablayırlar?",
  answer: "D)	Qeyri-sahibkarlıq fəaliyyətindən gəlirlər ƏDV-nə cəlb olunmur.",
  options: [
    "A)	Ardıcıl 12 aylıq dövrün istənilən ayında vergi tutulan əməliyyatlarının həcmi 200.000 manatdan artıq olduqda",
    "B)	Bir əqd və ya müqavilə üzrə əməliyyatın ümumi dəyəri 200.000 manatdan artıq olduqda",
    "C)	Ümumi qaydada",
    "D)	Qeyri-sahibkarlıq fəaliyyətindən gəlirlər ƏDV-nə cəlb olunmur."
  ]
},
  {
  numb: 12,
  question: "Sahibkarlıq fəaliyyəti göstərən və ardıcıl 12 aylıq dövrün istənilən ayında (ayların¬da) vergi tutulan əməliyyatlarının həcmi ən azı hansı məbləğdən artıq olan şəxslər, ƏDV-nin məqsədləri üçün qeydiyyata dair ərizə verməlidir?",
  answer: "B) 200.000 manatdan",
  options: [
    "A) 90.000 manatdan",
    "B) 200.000 manatdan",
    "C) 150.000 manatdan",
    "D) 120.000 manatdan"
  ]
},
  {
  numb: 13,
  question: "Qeyri-sahibkarlıq fəaliyyəti göstərən fiziki şəxslər hansı halda ƏDV ödəyicisi sayılırlar?",
  answer: "C)	Heç bir halda ƏDV ödəyicisi sayılmır",
  options: [
    "A)	Ardıcıl 12 aylıq dövrün istənilən ayında vergi tutulan əməliyyatlarının həcmi 120.000 manatdan artıq olduqda",
    "B)	Bir əqd və ya müqavilə üzrə əməliyyatın ümumi dəyəri 120.000 manatdan artıq olduqda",
    "C)	Heç bir halda ƏDV ödəyicisi sayılmır",
    "D)	Ardıcıl 12 aylıq dövrün istənilən ayında vergi tutulan əməliyyatlarının həcmi 200.000 manatdan artıq olduqda"
  ]
},
  {
  numb: 14,
  question: "Ardıcıl on iki aylıq dövrün istənilən ayında (aylarında) vergi tutulan əməliyyat¬larının həcmi 200.000 manatdan artıq olan şəxslər həmin ay (aylar) başa çatdıqdan sonra neçə gün ərzində vergi orqanına ƏDV-nin məqsədləri üçün qeydiyyata dair ərizə verməyə borcludur?",
  answer: "C) 10 gün",
  options: [
    "A) 2 gün",
    "B) 5 gün",
    "C) 10 gün",
    "D) 15 gün"
  ]
},
  {
  numb: 15,
  question: "Aksizli, məcburi nişanlama ilə nişanlanmalı malların istehsalçıları və bina tikintisi fəaliyyəti ilə məşğul olan şəxslər ƏDV məqsədləri üçün qeydiyyata dair ərizəni hansı qaydada verməyə borcludurlar?",
  answer: "A)	Dövlət qeydiyyatına və ya vergi orqanında uçota alınmaq üçün ərizə ilə birlikdə, bu fəaliyyətlə sonradan məşğul olduqları halda isə həmin fəaliyyəti həyata keçirməyə başladığı günədək",
  options: [
    "A)	Dövlət qeydiyyatına və ya vergi orqanında uçota alınmaq üçün ərizə ilə birlikdə, bu fəaliyyətlə sonradan məşğul olduqları halda isə həmin fəaliyyəti həyata keçirməyə başladığı günədək",
    "B)	Dövlət qeydiyyatına və ya vergi orqanında uçota alınmaq üçün ərizə ilə birlikdə, bu fəaliyyətlə sonradan məşğul olduqları halda isə həmin fəaliyyəti həyata keçirməyə başladığı tarixdən 10 gün ərzində",
    "C)	Dövlət qeydiyyatına və ya vergi orqanında uçota ahnmaq üçün ərizə ilə birlikdə, bu fəaliyyətlə sonradan məşğul olduqları halda isə həmin fəaliyyəti həyata keçirməyə başladığı tarixdən 3 gün ərzində",
    "D)	Dövlət qeydiyyatına və ya vergi orqanında uçota alınmaq üçün ərizə ilə birlikdə, bu fəaliyyətlə sonradan məşğul olduqları halda isə həmin fəaliyyəti həyata keçirməyə başladığı tarixdən 3 iş günü ərzində"
  ]
},
  {
  numb: 16,
  question: "ƏDV-nin məqsədləri üçün vergi tutulan əməliyyatların ümumi dəyəri müəyyən edilərkən qeyri-rezidentin mallar göndərməsi, İşlər görməsi və xidmətlər göstərməsi hansı halda nəzərə almır?",
  answer: "A)	Malların göndərilməsi, işlərin görülməsi və xidmətlərin göstərilməsi qeyri-rezidentin Azərbaycan Respublikasındakı daimi nümayəndəliyi vasitəsilə həyata keçirildikdə",
  options: [
    "A)	Malların göndərilməsi, işlərin görülməsi və xidmətlərin göstərilməsi qeyri-rezidentin Azərbaycan Respublikasındakı daimi nümayəndəliyi vasitəsilə həyata keçirildikdə",
    "B)	Malların göndərilməsi, işlərin görülməsi və xidmətlərin göstərilməsi qeyri-rezidentin Azərbaycan Respublikasındakı daimi nümayəndəliyi olmadan həyata keçirildikdə",
    "C)	Malların göndərilməsi, işlərin görülməsi və xidmətlərin göstərilməsi Azərbaycan Respublikasında ƏDV-nin ödəyicisi kimi qeydiyyatdan keçməmiş qeyri-rezidentin qeyri-rezident agenti vasitəsilə həyata keçirildikdə",
    "D)	Heç bir halda nəzərə ahnmır"
  ]
},
  {
  numb: 17,
  question: "Birgə sahibkarlıq fəaliyyəti ilə məşğul olan şəxs hansı halda ƏDV-nin məqsədləri üçün qeydiyyata dair ərizə verməyə borcludur?",
  answer: "D)	Birgə sahibkarlıq fəaliyyəti iştirakçılarından biri ƏDV ödəyicisi olduqda, birgə sahibkarlıq fəaliyyətinin uçotunu aparan şəxs qeydiyyata alınmaq üçün ərizə verməyə borcludur.",
  options: [
    "A)	Belə şəxslər həmişə ƏDV ödəyicisidir",
    "B)	Birgə sahibkarlıq fəaliyyətində vergi tutulan əməliyyatlarının həcmindən asılı olmayaraq ƏDV ödəyicisi ola bilməzlər",
    "C)	Birgə sahibkarlıq fəaliyyəti iştirakçıları hüquqi şəxs olduqda",
    "D)	Birgə sahibkarlıq fəaliyyəti iştirakçılarından biri ƏDV ödəyicisi olduqda, birgə sahibkarlıq fəaliyyətinin uçotunu aparan şəxs qeydiyyata alınmaq üçün ərizə verməyə borcludur."
  ]
},
  {
  numb: 18,
  question: "Birgə sahibkarlıq fəaliyyəti ilə məşğul olan şəxs aşağıda göstərilən hansı hallardan biri olduqda ƏDV-nin məqsədləri üçün qeydiyyata dair ərizə verməyə borcludur?",
  answer: "B)	Birgə sahibkarlıq fəaliyyəti iştirakçılarının ardıcıl on iki aylıq dövrün istənilən ayında (aylarmda) vergi tutulan əməliyyatlarının həcmi 200.000 manatdan artıq olduqda",
  options: [
    "A)	Birgə sahibkarlıq fəaliyyəti iştirakçıları ƏDV məqsədləri üçün qeydiyyata alınmaq üçün ərizə vermirlər",
    "B)	Birgə sahibkarlıq fəaliyyəti iştirakçılarının ardıcıl on iki aylıq dövrün istənilən ayında (aylarmda) vergi tutulan əməliyyatlarının həcmi 200.000 manatdan artıq olduqda",
    "C)	Birgə sahibkarlıq fəaliyyəti iştirakçılarının sayı üç və ya daha çox şəxs olduqda",
    "D)	Birgə sahibkarlıq fəaliyyəti iştirakçıları hər biri ƏDV qeydiyyatı məqsədilə vergi orqanında ayrıca qeydiyyata ahnmaq üçün ərizə verirlər"
  ]
},
  {
  numb: 19,
  question: "Qeydiyyatdan keçməli olmayan sahibkarlıq fəaliyyəti göstərən şəxs vergi orqanına ƏDV-nin məqsədləri üçün qeydiyyat haqqında könüllü ərizə verə bilərmi?",
  answer: "A)	Verə bilər",
  options: [
    "A)	Verə bilər",
    "B)	Yalnız ardıcıl 12 aylıq dövrün istənilən ayında vergi tutulan əməliyyatlarının həcmi 200.000 manatdan artıq olduqda verə bilər",
    "C)	Yalnız ardıcıl 12 ayhq dövrün istənilən ayında vergi tutulan əməliyyatlarının həcmi 100.000 manatdan artıq olduqda verə bilər",
    "D)	Verə bilməz"
  ]
},
  {
  numb: 20,
  question: "20.	Mülkiyyətində və ya istifadəsində olan avtonəqliyyat vasitələri ilə Azərbaycan Respublikasının ərazisində sərnişin və yük daşımalarını (o cümlədən taksi ilə) və yaxud həmin daşımaları müqavilə əsasında digər şəxslər vasitəsi ilə həyata keçirən və aşağıdakı tələblərdən hansına cavab verən şəxslər ƏDV-nin məqsədləri üçün qeydiyyat alma bilər: 1.	göstərilən xidmətlərin dəyərini və alınmış malların (işlərin və xidmətlərin) dəyərini nağdsız qaydada əldə edən və ödəyən 2.	digər vergi ödəyicilərinə göstərilən xidmətlər üzrə əldə edilən gəlirlərini və gəlirlərin əldə edilməsi üzrə çəkilən xərclərini qaimə-faktura ilə rəsmiləşdirən 3.	göstərilən xidmətlərin dəyərini və alınmış malların (işlərin və xidmətlərin) dəyərini nağd və nağdsız qaydada əldə edən və ödəyən 4.	göstərilən xidmətlər üzrə əməliyyatların uçotunu vahid mərkəzləşdirilmiş elektron sistem üzərində aparan və vergi orqanının həmin sistemə məsafədən çıxış imkanını təmin edən 5.	digər vergi ödəyicilərinə göstərilən xidmətlər üzrə əldə edilən gəlirlərini və gəlirlərin əldə edilməsi üzrə çəkilən xərclərini elektron qaimə-faktura ilə rəsmiləşdirən",
  answer: "C) 1,4,5",
  options: [
    "A) 1,2,5",
    "B) 1,2,3",
    "C) 1,4,5",
    "D) 2,3,4"
  ]
},
  {
  numb: 21,
  question: "Mülkiyyətində və ya istifadəsində olan avtonəqliyyat vasitələri ilə Azərbaycan Respublikasının ərazisində sərnişin və yük daşımalarını (o cümlədən taksi ilə) və yaxud həmin daşımaları müqavilə əsasında digər şəxslər vasitəsi ilə həyata keçirən şəxslər hansı tarixdən ƏDV məqsədləri üçün qeydiyyata alınmasına dair ərizəni uçotda olduğu vergi orqanına təqdim edir və ƏDV məqsədləri qeydiyyatı hansı tarixdən qüvvəyə minir. ",
  answer: "A)	Hər il yanvar ayının 31 -dən gec olmayaraq, ƏDV məqsədləri üçün qeydiyyata alınmasına dair ərizəni uçotda olduğu vergi orqanına təqdim edir və həmin şəxslərin ƏDV məqsədləri qeydiyyatı həmin ayın birinci günündən qüvvəyə minir.",
  options: [
    "A)	Hər il yanvar ayının 31 -dən gec olmayaraq, ƏDV məqsədləri üçün qeydiyyata alınmasına dair ərizəni uçotda olduğu vergi orqanına təqdim edir və həmin şəxslərin ƏDV məqsədləri qeydiyyatı həmin ayın birinci günündən qüvvəyə minir.",
    "B)	Hər il yanvar ayının 01-dən gec olmayaraq, ƏDV məqsədləri üçün qeydiyyata alınmasına dair ərizəni uçotda olduğu vergi orqanına təqdim edir və həmin şəxslərin ƏDV məqsədləri qeydiyyatı həmin ayın birinci günündən qüvvəyə minir.",
    "C)	Hər il yanvar ayının 31-dən gec olmayaraq, ƏDV məqsədləri üçün qeydiyyata alınmasına dair ərizəni uçotda olduğu vergi orqanına təqdim edir və həmin şəxslərin ƏDV məqsədləri qeydiyyatı növbəti ayın birinci günündən qüvvəyə minir.",
    "D)	Hər il yanvar ayının 15-dən gec olmayaraq, ƏDV məqsədləri üçün qeydiyyata alınmasına dair ərizəni uçotda olduğu vergi orqanına təqdim edir və həmin şəxslərin ƏDV məqsədləri qeydiyyatı həmin ayın birinci günündən qüvvəyə minir."
  ]
},
  {
  numb: 22,
  question: "ƏDV-nin məqsədləri üçün məcburi və ya könüllü qeydiyyat haqqında ərizə hansı dövlət orqanının müəyyən etdiyi forma üzrə verilməlidir?",
  answer: "A)	Dövlət Vergi Xidmətinin",
  options: [
    "A)	Dövlət Vergi Xidmətinin",
    "B)	Maliyyə Nazirliyinin",
    "C) Nazirlər Kabinetinin",
    "D) İqtisadiyyat Nazirliyinin"
  ]
},
  {
  numb: 23,
  question: "ƏDV ödəyicisinin qeydiyyat bildirişi itirildikdə və ya yararsız hala düşdükdə ona hansı sənəd verilir?",
  answer: "A)	vergi ödəyicisinin müraciəti əsasında ona bildirişin surəti verilir",
  options: [
    "A)	Vergi ödəyicisinin müraciəti əsasında ona bildirişin surəti verilir",
    "B)	Vergi ödəyicisinin müraciəti əsasında ona bildirişin dublikatı verilir",
    "C)	Heç bir sənəd verilmir",
    "D)	Vergi ödəyicisi məsuliyyətə cəlb olunur"
  ]
},
  {
  numb: 24,
  question: "Şəxs ƏDV-nin məqsədləri üçün qeydiyyatdan keçərkən vergi orqanı həmin şəxsi ƏDV ödəyicilərinin qeydiyyat reystrində qeydə almağa və ərizə verildikdən sonra neçə iş günündən gec olmayaraq ona Dövlət Vergi Xidmətinin müəyyən etdiyi forma üzrə qeydiyyat bildirişi verməyə borcludur?",
  answer: "D) 5 iş günü",
  options: [
    "A) 10 iş günü",
    "B) 5 gün",
    "C) 20 gün",
    "D) 5 iş günü"
  ]
},
  {
  numb: 25,
  question: "Şəxs ƏDV-nin məqsədləri üçün qeydiyyatdan keçərkən vergi orqanının həmin şəxsə Dövlət Vergi Xidmətinin müəyyən etdiyi forma üzrə verməyə borclu olduğu qeydiyyat bildirişində aşağıdakı hansı məlumat yer almır?",
  answer: "C) Ehtimal edilən rüblük dövriyyə",
  options: [
    "A) Qeydiyyatın qüvvəyə mindiyi tarix",
    "B) Vergi ödəyicisinin VÖEN-i",
    "C) Ehtimal edilən rüblük dövriyyə",
    "D) Vergi ödəyicisinin adı və ona aid olan digər məlumat"
  ]
},
  {
  numb: 26,
  question: "26.	ƏDV-nin məqsədləri üçün qeydiyyat hansı tarixin əvvəl başlanmasından asılı olaraq aşağıdakı tarixlərin birində qüvvəyə minir: 1.	məcburi qeydiyyat zamanı - ardıcıl 12 aylıq dövrün istənilən ayında (aylarında) vergi tutulan əməliyyatların həcmi 200.000 manatdan artıq olduqda - növbəti ayın birinci günündə; 2.	könüllü qeydiyyat zamanı - qeydiyyat haqqında ərizənin verildiyi aydan sonrakı hesabat dövrünün birinci günündə; 3.	Vergi Məcəlləsinin 85.4-cü maddəsi ilə müəyyən edilmiş 3 il müddətindən çox olmamaqla, vergi ödəyicisinin qeydiyyat haqqındakı ərizəsində göstərilən tarixdə; 4.	vergi orqanının təşəbbüsü ilə müəyyən edilən tarixdə; 5.	vergi ödəyicisinin ərizəsinin təqdim edildiyi tarixdə.",
  answer: "B) 1,2,3",
  options: [
    "A) 1,2,5",
    "B) 1,2,3",
    "C) 1,4,5",
    "D) 2,3,4"
  ]
},
  {
  numb: 27,
  question: "Aksizli, məcburi nişanlama ilə nişanlanmalı malların istehsalçıları və bina tikintisi fəaliyyəti ilə məşğul olan şəxslər ƏDV məqsədləri üçün məcburi qeydiyyat zamanı ərizəni hansı qaydada verməyə borcludurlar?",
  answer: "D)	Dövlət qeydiyyatına və ya vergi orqanında uçota alındığı gündə, bu fəaliyyətlə sonradan məşğul olduqları halda isə həmin fəaliyyəti həyata keçirməyə başladığı gündə",
  options: [
    "A)	Dövlət qeydiyyatına və ya vergi orqanında uçota alınmaq üçün ərizə ilə birlikdə, bu fəaliyyətlə sonradan məşğul olduqda isə həmin fəaliyyəti həyata keçirməyə başladığı günədək",
    "B)	Dövlət qeydiyyatına və ya vergi orqanında uçota alındığı günədək, bu fəaliyyətlə sonradan məşğul olduqları halda isə həmin fəaliyyəti həyata keçirməyə başladığı gündə",
    "C)	Dövlət qeydiyyatına və ya vergi orqanında uçota alınmaq üçün ərizə ilə birlikdə, bu fəaliyyətlə sonradan məşğul olduqları halda isə həmin fəaliyyəti həyata keçirməyə başladığı tarixdən 1 gün ərzində",
    "D)	Dövlət qeydiyyatına və ya vergi orqanında uçota alındığı gündə, bu fəaliyyətlə sonradan məşğul olduqları halda isə həmin fəaliyyəti həyata keçirməyə başladığı gündə"
  ]
},
  {
  numb: 28,
  question: "Vergiyə cəlb edilən hesabat dövrü bitdikdən sonra hansı müddətdə vergi ödəyicisi tərəfindən ƏDV-nin dəqiqləşdirilməsinə və əvəzləşdirilməsinə yol verimlir?",
  answer: "C) 3 il ərzində",
  options: [
    "A) 1 il ərzində",
    "B) 2 il ərzində",
    "C) 3 il ərzində",
    "D) 5 il ərzində"
  ]
},
  {
  numb: 29,
  question: "ƏDV-nin ödəyicilərinin reyestri hansı orqan tərəfindən aparılır?",
  answer: "A)	Dövlət vergi orqanı",
  options: [
    "A)	Dövlət vergi orqanı",
    "B)	Dövlət gömrük orqanı",
    "C) Maliyyə orqanı",
    "D) Heç bir orqan tərəfindən aparılmır"
  ]
},
  {
  numb: 30,
  question: "Hansı vergi ödəyicisini vergi orqanı ƏDV məqsədləri üçün öz təşəbbüsü ilə qeydiyyata alır və ona müvafiq qeydiyyat bildirişi göndərir?",
  answer: "A)	ƏDV-nin məqsədləri üçün qeydiyyatdan keçməyə borclu olan, lakin qeydiyyat üçün ərizə verməyən",
  options: [
    "A)	ƏDV-nin məqsədləri üçün qeydiyyatdan keçməyə borclu olan, lakin qeydiyyat üçün ərizə verməyən",
    "B)	Qeyri-sahibkarlıq fəaliyyəti ilə məşğul olan rezident şəxsləri",
    "C)	Qeyri sahibkarlıq fəaliyyəti ilə məşğul olan qeyri-rezident şəxsləri",
    "D) ƏDV-nin məqsədləri üçün qeydiyyat haqqında öhdəliyi yaranmayan və ərizə verməyən"
  ]
},
  {
  numb: 31,
  question: "Hansı halda ƏDV ödəyicilərinin dövlət reyestrində müvafiq düzəlişlər edilir?",
  answer: "A)	ƏDV ödəyicilərinin məlumatlarında dəyişikliklər baş verdikdə",
  options: [
    "A)	ƏDV ödəyicilərinin məlumatlarında dəyişikliklər baş verdikdə",
    "B)	ƏDV ödəyicisi vergi borcunu ödəmədikdə",
    "C)	Heç bir halda",
    "D)	Verilmiş qeydiyyat bildirişi itdikdə"
  ]
},
  {
  numb: 32,
  question: "Vergi Məcəlləsi ilə müəyyən olunmuş hallarda ƏDV ödəyicisi haqqında rəsmi sor-ğulara əsasən sorğu edənə hansı sənəd verilir?",
  answer: "A)	ƏDV ödəyicilərinin reyestrindən çıxarış",
  options: [
    "A)	ƏDV ödəyicilərinin reyestrindən çıxarış",
    "B)	Qeydiyyata alınmadan imtina barədə bildiriş",
    "C)	Qeydiyyat bildirişi",
    "D)	Rəsmi sorğunun nəticələri üzrə tərtib olunan akt"
  ]
},
  {
  numb: 33,
  question: "Vergi ödəyicisi tərəfindən əlavə dəyər vergisinə cəlb olunan əməliyyatlar dayandırıl-dıqda əlavə dəyər vergisinin məqsədləri üçün qeydiyyatın ləğv olunması nə vaxt qüvvəyə minir?",
  answer: "C)	əməliyyatın tam dayandırıldığı gündən",
  options: [
    "A)	Ərizədə göstərilən tarixdən",
    "B)	Ərizənin verildiyi andan sonrakı hesabat dövrünün birinci günündə",
    "C)	Əməliyyatın tam dayandırıldığı gündən",
    "D)	Əməliyyatın dayandırıldığı andan sonrakı hesabat dövrünün birinci günündə"
  ]
},
  {
  numb: 34,
  question: "ƏDV ödəyicisi sahibkarlıq fəaliyyətini müvəqqəti dayandırdıqda ƏDV-nin məqsədləri üçün qeydiyyatın ləğv olunmasına dair ərizə verə bilərmi?",
  answer: "D)	Qanunvericilik buna icazə vermədiyi üçün verə bilməz",
  options: [
    "A)	ƏDV-yə cəlb olunan əməliyyatlar aparmağı dayandırdığına görə verə bilər",
    "B)	ƏDV-nin məqsədləri üçün son qeydiyyatın qüvvəyə mindiyi tarixdən etibarən bir il keçmişdirsə verə bilər",
    "C)	Əgər fəaliyyətini 1 ildən artıq müddətə dayandırırsa verə bilər",
    "D)	Qanunvericilik buna icazə vermədiyi üçün verə bilməz"
  ]
},
  {
  numb: 35,
  question: "35.	Mülkiyyətində və ya istifadəsində olan avtonəqliyyat vasitələri ilə Azərbaycan Respublikasının ərazisində sərnişin və yük daşımalarını və yaxud həmin daşımaları müqa¬vilə əsasında digər şəxslər hansı tarixdən qeydiyyatın ləğv olunmasına dair ərizə verə bilər.",
  answer: "C)	ƏDV-nin məqsədləri üçün son qeydiyyatın qüvvəyə mindiyi tarixdən etibarən 3 il keçdikdən sonrakı istənilən vaxt qeydiyyatın ləğv olunmasına dair ərizə verə bilər",
  options: [
    "A)	Əməliyyatlarım tam dayandırıldığı gündən",
    "B)	ƏDV-nin məqsədləri üçün son qeydiyyatın qüvvəyə mindiyi tarixdən etibarən 6 ay keçdikdən sonrakı istənilən vaxt qeydiyyatın ləğv olunmasına dair ərizə verə bilər",
    "C)	ƏDV-nin məqsədləri üçün son qeydiyyatın qüvvəyə mindiyi tarixdən etibarən 3 il keçdikdən sonrakı istənilən vaxt qeydiyyatın ləğv olunmasına dair ərizə verə bilər",
    "D)	ƏDV-nin məqsədləri üçün son qeydiyyatın qüvvəyə mindiyi tarixdən etibarən 1 il keçdikdən sonrakı istənilən vaxt qeydiyyatın ləğv olunmasına dair ərizə verə bilər"
  ]
},
  {
  numb: 36,
  question: "Vergi ödəyicisinin vergiyə cəlb olunan əməliyyatlarının ümumi məbləği əvvəlki tam 12 təqvim ayı ərzində 100.000 manatdan çox olmadığı halda vergi ödəyicisi son qeydiyyatın qüvvəyə mindiyi tarixdən etibarən neçə il keçdikdən sonra qeydiyyatın ləğv olunması barədə ərizə verə bilər?",
  answer: "В) 1 il",
  options: [
    "A) 3 il",
    "В) 1 il",
    "C) 2 il",
    "D) il yarım"
  ]
},
  {
  numb: 37,
  question: "Vergi ödəyicisinin vergiyə cəlb olunan əməliyyatlarının ümumi məbləği əvvəlki tam 12 təqvim ayı ərzində hansı məbləğdən çox olmadığı halda vergi ödəyicisi son qeydiyyatın qüvvəyə IHİndİyİ tarixdən etibarən bir il keçdikdən sonra qeydiyyatın ləğv olunması barədə ərizə verə bilər?",
  answer: "C) 100 000 manatdan",
  options: [
    "A) 120 000 manatdan",
    "B) 75 000 manatdan",
    "C) 100 000 manatdan",
    "D) 90 000 manatdan"
  ]
},
  {
  numb: 38,
  question: "ƏDV-nin məqsədləri üçün qeydiyyatın ləğv olunması nə vaxt qüvvəyə minir?",
  answer: "B)	Qeydiyyatın ləğv edilməsinə dair ərizənin verildiyi gün",
  options: [
    "A)	Qeydiyyatın ləğv edilməsinə dair ərizənin verildiyi aydan sonrakı ayın 1 -ci günündə",
    "B)	Qeydiyyatın ləğv edilməsinə dair ərizənin verildiyi gün",
    "C)	Qeydiyyatın ləğv edilməsinə dair ərizənin verildiyi ayın 1-ci günü",
    "D)	Vergi orqanı tərəfindən müəyyənləşdirilən gün"
  ]
},
  {
  numb: 39,
  question: "Vergi orqanı şəxsin ƏDV qeydiyyatının ləğv edilməsi barədə məlumatı neçə gün müddətində Azərbaycan Respublikasının Maliyyə Nazirliyinə göndərməlidir?",
  answer: "C) 1 iş günü",
  options: [
    "A) 3 iş günü",
    "B) 2 iş günü",
    "C) 1 iş günü",
    "D) 5 gün"
  ]
},
];
