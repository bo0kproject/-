// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Qrant müqaviləsi (qərarı) əsasında xaricdən alınan qrantlar hesabına malların idxalı, qrant üzrə resipiyentlərə malların təqdim edilməsi, işlərin göstərilməsi və xidmətlərin göstərilməsi hansı dərəcə ilə ƏDV-yə cəlb olunur?",
  answer: "B) Sıfır [0] dərəcə ilə ",
  options: [
    "A) ƏDV-dən azaddır",
    "B) Sıfır [0] dərəcə ilə",
    "C) 18 faiz",
    "D) 20 faiz"
  ]
},
  {
  numb: 2,
  question: "Malların ixracı ƏDV-yə hansı dərəcə ilə cəlb olunur?",
  answer: "C) Sıfır [0] dərəcə ilə ",
  options: [
    "A) Malların ixracı vergidən azaddır",
    "В) 18 faiz",
    "C) Sıfır [0] dərəcə ilə",
    "D) 20 faiz"
  ]
},
  {
  numb: 3,
  question: "Beynəlxalq poçt xidmətləri istisna olmaqla, beynəlxalq və tranzit yük və sərnişin daşınması, habelə tranzit yük daşınması ilə bilavasitə bağh yük aşırılma xidməti. Beynəlxalq və tranzit uçuşlarla bilavasitə bağh olan işlərin görülməsi, xidmətlərin göstərilməsi, habelə beynəlxalq və tranzit yük daşınması ilə bağlı ekspeditor xidmətlərinin göstərilməsi hansı faiz dərəcəsi ilə ƏDV-yə cəlb olunur?",
  answer: "A) Sıfır [0] dərəcə ilə ",
  options: [
    "A) Sıfır [0] dərəcə ilə",
    "B) 18% dərəcə ilə",
    "C) Vergidən azaddır",
    "D) 20% dərəcə ilə"
  ]
},
  {
  numb: 4,
  question: "Aşağıdakı əməliyyatlardan hansı ƏDV-dən azad deyil?",
  answer: "A)	Aksizli malların istehsalı",
  options: [
    "A)	Aksizli malların istehsalı",
    "B)	Hüquqi Şəxsin iştirak paylarının və ya səhmlərinin təqdim edilməsi",
    "C)	Az.Res Döv Neft Fondunun aktivlərində yerləşdirilməsi üçün nəzərdə tutulan qızılın idxaix",
    "D)	Xüsusi notariusların aldığı haqlar (notariat hərəkətlərinin aparılmasına və notariat hərəkətləri ilə əlaqədar göstər xidmətə görə) və onların tutulması müqabilində göstərdiyi xidmətlər"
  ]
},
  {
  numb: 5,
  question: "Azərbaycan Respublikasının Mərkəzi Bankına qızıl və digər qiymətlilərin göndə-rilməsi ƏDV-yə hansı dərəcə ilə cəlb edilir?",
  answer: "A) Sıfır (0) dərəcə ilə ",
  options: [
    "A) Sıfır (0) dərəcə ilə",
    "B) ƏDV-dən azaddır",
    "C) 20 faiz dərəcə ilə",
    "D) 18 faiz dərəcə ilə"
  ]
},
{
  numb: 6,
  question: "Azərbaycan Respublikasının Prezidentinin müəyyən etdiyi fəaliyyətlə məşğul olan sənaye parkının rezidentinə podratçı tərəfindən, podratçıya isə onunla birbaşa müqavilə bağlamış subpodratçı tərəfindən həmin fəaliyyətin məqsədləri üçün malların təqdim edilməsi, işlərin görülməsi və xidmətlərin göstərilməsi hansı qayda ilə ƏDV-yə cəlb olunur?",
  answer: "D) 2016-cı il maym 1-dən 5 il müddətinə sıfır [0] dərəcə ilə",
  options: [
    "A) 2016-cı il maym 1-dən 3 il müddətinə sıfır [0] dərəcə ilə",
    "В) 18% dərəcə ilə",
    "C) Bu əməliyyatlar 2016-cı il maym 1-dən 5 il müddətinə vergidən azaddır",
    "D) 2016-cı il maym 1-dən 5 il müddətinə sıfır [0] dərəcə ilə"
  ]
},
  {
  numb: 7,
  question: "Azərbaycan Res. akkreditə edilmiş beynəlxalq təşkilatların və xarici ölkələrin dip-lomatik və konsulluq nümayəndəliklərin rəsmi istifadəsi, həmçinin bu nüma-yəndəliklərin müvafiq statuslu Azərbaycan Respublikasının vətəndaşı olmayan diplomatik, inzibati və texniki işçilərinin, o cümlədən onlarla yaşayan ailə üzvlərinin şəxsi istifadəsi üçün nəzərdə tutulan mal və xidmətlərə sıfır [0] dərəcə ilə ƏDV hansı ölkələrə münasibətdə tətbiq edilir?",
  answer: "D) Ölkələrə münasibətdə tətbiq edilir ki, həmin ölkələrdə göstərilən əməliyyatlara görə ƏDV sıfır [0] dərəcə ilə tətbiq olunsun",
  options: [
    "A)	Avropa İttifaqına üzv ölkələrə tətbiq edilir",
    "B)	Bu cür əməliyyatlar bütünlüklə ƏDV-dən azad əməliyyatlardır",
    "C)	MDB-yə üzv olan ölkələrə münasibətdə tətbiq edilir",
    "D)	Ölkələrə münasibətdə tətbiq edilir ki, həmin ölkələrdə göstərilən əməliyyatlara görə ƏDV sıfır [0] dərəcə ilə tətbiq olunsun"
  ]
},
{
  numb: 8,
  question: "Əcnəbilər və vətəndaşlığı olmayan şəxslər tərəfindən Azərbaycan Respublikasının ərazisində alınmış, istehsal yaxud kommersiya məqsədləri üçün nəzərdə tutulmayan mallara görə ödənilmiş ƏDV-nin qaytarılması qaydası hansı orqan tərəfindən müəyyən edilir?",
  answer: "B)	Azərbaycan Respublikasının Prezidenti ",
  options: [
    "A)	Mədəniyyət və Turizm Nazirliyi",
    "B)	Azərbaycan Respublikasının Prezidenti ",
    "C) Nazirlər Kabineti",
    "D) Maliyyə Nazirliyi"
  ]
},
{
  numb: 9,
  question: "Fiziki şəxs olan istehlakçılar tərəfindən Azərbaycan Respublikasının ərazisində pərakəndə ticarət və ya ictimai iaşə fəaliyyəti göstərən şəxslərdən alınmış mallara (neft və qaz məhsulları, avtomobillər, alkoqollu içkilər və tütün məmulatları istisna olmaqla) habelə tibb müəssisələri tərəfindən göstərilən tibbi xidmətlərə görə ödənilmiş ƏDV-nin qaytarılması hecə həyata keçirilir?",
  answer: "B)	Qaytarılan məbləğ nağdsız qaydada ödənilmiş ƏDV-nin 15 faizini, nağd qaydada ödənilmiş ƏDV-nin 10 faizini təşkil edir",
  options: [
    "A)	Qaytarılan məbləğ nağdsız qaydada ödənilmiş ƏDV-nin 10 faizini, nağd qaydada ödənilmiş ƏDV-nin 15 faizini təşkil edir",
    "B)	Qaytarılan məbləğ nağdsız qaydada ödənilmiş ƏDV-nin 15 faizini, nağd qaydada ödənilmiş ƏDV-nin 10 faizini təşkil edir",
    "C)	Qaytarılan məbləğ nağdsız qaydada ödənilmiş ƏDV-nin 50 faizini, nağd qaydada ödənilmiş ƏDV-nin 20 faizini təşkil edir",
    "D)	Ödənilmiş ƏDV geri qaytarılmır"
  ]
},
{
  numb: 10,
  question: "Fiziki şəxs olan istehlakçılar tərəfindən Azərbaycan Res. ərazisində bina tikintisi fəaliyyəti ilə məşğul olan şəxslərdən nağdsız qaydada alınmış yaşayış və qeyri-yaşayış sahələ-rinə görə ödənilmiş ƏDV-nin qaytarılması şərtlərini və qaydasını hansı orqan təsdiq edir?",
  answer: "D) Azərbaycan Respublikasının Prezidenti",
  options: [
    "A)	Dövlət Vergi Xidməti ",
    "B)	Maliyyə Nazirliyi",
    "C) Nazirlər Kabineti",
    "D) Azərbaycan Respublikasının Prezidenti"
  ]
},
{
  numb: 11,
  question: "Vergi Məcəlləsinin 165.6-cı maddəsinə uyğun olaraq qaytarılan məbləğ ödənilmiş ƏDV-nin neçə faizini təşkil edir?",
  answer: "C) 30% ",
  options: [
    "A) 10%",
    "B) 50%",
    "C) 30%",
    "D) 80%"
  ]
},
{
  numb: 12,
  question: "Fiziki şəxs olan istehlakçılar eyni binadan bir və ya bir neçə yaşayış və (və ya) qeyri-yaşayış sahələrini aldıqda, ƏDV-nin qaytarılması alınmış yaşayış sahəsinin neçə kvadratmetr və qeyri-yaşayış sahəsinin neçə kvadratmetrdən çox olmayan hissəsinə mütənasib ödənilmiş ƏDV-yə tətbiq edilir?",
  answer: "A)	Alınmış yaşayış sahəsinin 500 kvadratmetr və qeyri-yaşayış sahəsinin 500 kvadratmetrdən çox olmayan hissəsinə",
  options: [
    "A)	Alınmış yaşayış sahəsinin 500 kvadratmetr və qeyri-yaşayış sahəsinin 500 kvadratmetrdən çox olmayan hissəsinə",
    "B)	Ahnmış yaşayış sahəsinin 500 kvadratmetr və qeyri-yaşayış sahəsinin 300 kvadratmetrdən çox olmayan hissəsinə",
    "C)	Alınmış yaşayış sahəsinin 300 kvadratmetr və qeyri-yaşayış sahəsinin 500 kvadratmetrdən çox olmayan hissəsinə",
    "D)	Alınmış yaşayış sahəsinin 300 kvadratmetr və qeyri-yaşayış sahəsinin 300 kvadratmetrdən çox olmayan hissəsinə"
  ]
},
{
  numb: 13,
  question: "Vergi tutulan əməliyyatın vaxtı hansı vaxtdır?",
  answer: "B)	Təqdim edilən mallar (işlər və xidmətlər) üçün ödəmənin aparıldığı vaxtdır",
  options: [
    "A)	Elektron qaimə-fakturanın faktiki verildiyi vaxt",
    "B)	Təqdim edilən mallar (işlər və xidmətlər) üçün ödəmənin aparıldığı vaxtdır",
    "C)	Ödəmə 30 gün müddətində həyata keçirildikdə ödəmənin həyata keçirildiyi vaxtda, 30 gündən sonra həyata keçirildikdə isə malların göndərildiyi və ya təqdim edildiyi, işlərin görüldüyü və xidmətlərin göstərildiyi vaxtda ",
    "D)	Ödəmə 30 gün müddətində həyata keçirildikdə malların göndərildiyi və ya təqdim edildiyi, işlərin görüldüyü və xidmətlərin göstərildiyi vaxtda, 30 gündən sonra həyata keçirildikdə isə ödəmənin həyata keçirildiyi vaxtda"
  ]
},
{
  numb: 14,
  question: "Aşağıdakılardan hansı ödəmənin vaxtı sayılır? 1.	nağd pul vəsaitini aldığı, nağdsız ödəmədə isə pul vəsaitinin bankda onun hesabına və ya sərəncamçısı ola biləcəyi hesaba, yaxud göstərilən vəsaiti almaq hüququna malik olacağı hesaba daxil olduğu vaxt 2.	qarşılıqlı hesablaşmalar aparıldıqda öhdəliyin ləğv edildiyi və ya ödənildiyi vaxt 3.	maliyyə öhdəliyinin ləğv edildiyi və ya ödənildiyi halda (qarşılıqlı hesablaşmalar aparıldıqda və sair bu kimi hallar istisna olmaqla) öhdəliyin ləğv edildiyi və ya ödənildiyi vaxt 4.	malların (işlərin, xidmətlərin) təqdim edilməsi üzrə yaranan debitor borclar Üzrə - iddia müddətinin bitdiyi vaxt 5.	natura şəklində aparıldıqda, habelə barter edildikdə - aktivlərin əldə edildiyi (barter edildiyi) vaxt",
  answer: "C) 1,2,4.5",
  options: [
    "A) 1,2,3,4",
    "B) 2,3,4,5",
    "C) 1,2,4.5",
    "D) 1,3,4,5"
  ]
},
{
  numb: 15,
  question: "Aşağıdakılardan hansı doğrudur?",
  answer: "A)	Əvəzsiz təqdim edildiyi hallarda təqdimetmənin həyata keçirildiyi vaxt",
  options: [
    "A)	Əvəzsiz təqdim edildiyi hallarda təqdimetmənin həyata keçirildiyi vaxt",
    "B)	Əvəzsiz təqdim edildiyi hallarda təqdimetmənin həyata keçirildiyi vaxtadək",
    "C)	Tələb hüququ güzəşt edildikdə - güzəşt edilən məbləğ üzrə tələb hüququnun güzəşt edildiyi vaxtadək",
    "D)	Natura şəklində aparıldıqda, habelə barter edildikdə - aktivlərin əldə edildiyi (barter edildiyi) vaxtadək"
  ]
},
{
  numb: 16,
  question: "Aşağıdakılardan hansı doğrudur?",
  answer: "A)	Tələb hüququ güzəşt edildikdə - güzəşt edilən məbləğ üzrə tələb hüququnun güzəşt edildiyi vaxt",
  options: [
    "A)	Tələb hüququ güzəşt edildikdə - güzəşt edilən məbləğ üzrə tələb hüququnun güzəşt edildiyi vaxt",
    "B)	Malların (işlərin, xidmətlərin) təqdim edildiyi vaxt",
    "C)	Mallar (işlər, xidmətlər) təqdim edildikdən sonra verilmiş borclar üzrə - malların təqdim edildiyi vaxt, mallar təqdim edilənədək verilmiş borclar üzrə isə - borcun verildiyi vaxt",
    "D)	Mallar (işlər, xidmətlər) təqdim edildikdən sonra verilmiş borclar üzrə - borcun verildiyi vaxt, mallar (işlər, xidmətlər) təqdim edilənədək verilmiş borclar üzrə isə - malların (işlərin, xidmətlərin) təqdim edildiyi vaxt"
  ]
},
{
  numb: 17,
  question: "Aşağıdakılardan hansı doğrudur?",
  answer: "C)	Vergi Məcəlləsinin 159.5-ci maddəsi tətbiq edildikdə, malların (işlərin, xidmətlərin) qeyri-kommersiya məqsədləri üçün verildiyi vaxt, malların itməsi, əskik gəlməsi, xarab olması, tam amortizasiya olunmadan uçotdan silinməsi və ya oğurlanması baş verdiyi vaxt (gün) vergi tutulan əməliyyatın vaxtı sayılır",
  options: [
    "A)	Vergi Məcəlləsinin 159.5-ci maddəsi tətbiq edildikdə, malların (işlərin, xidmətlərin) qeyri-kommersiya məqsədləri üçün verildiyi vaxt, malların itməsi, əskik gəlməsi, xarab olması, tam amortizasiya olunmadan uçotdan silinməsi və ya oğurlanması baş verdiyi vaxt (ay) vergi tutulan əməliyyatın vaxtı sayılır",
    "B)	Vergi Məcəlləsinin 159.5-ci maddəsi tətbiq edildikdə, malların (işlərin, xidmətlərin) qeyri-kommersiya məqsədləri üçün verildiyi vaxt, malların itməsi, əskik gəlməsi, xarab olması, tam amortizasiya olunaraq uçotdan silinməsi və ya oğurlanması baş verdiyi vaxt (gün) vergi tutulan əməliyyatın vaxtı sayılır",
    "C)	Vergi Məcəlləsinin 159.5-ci maddəsi tətbiq edildikdə, malların (işlərin, xidmətlərin) qeyri-kommersiya məqsədləri üçün verildiyi vaxt, malların itməsi, əskik gəlməsi, xarab olması, tam amortizasiya olunmadan uçotdan silinməsi və ya oğurlanması baş verdiyi vaxt (gün) vergi tutulan əməliyyatın vaxtı sayılır",
    "D)	Vergi Məcəlləsinin 159.5-ci maddəsi tətbiq edildikdə, malların (işlərin, xidmətlərin) kommersiya məqsədləri üçün verildiyi vaxt, malların itməsi, əskik gəlməsi, xarab olması, tam amortizasiya olunmadan uçotdan silinməsi və ya oğurlanması baş verdiyi vaxt (gün) vergi tutulan əməliyyatın vaxtı sayılır"
  ]
},
{
  numb: 18,
  question: "Vergi ödəyicisinin qeydiyyatı ləğv edilirsə, vergi tutulan əməliyyatın vaxtı aşağıda-kılardan hansıdır?",
  answer: "C)	Ləğvetmənin qüvvəyə minməsindən bilavasitə əvvəlki vaxt (gün) vergi tutulan əməliyyatın vaxtı sayılır.",
  options: [
    "A)	Ləğvetmənin qüvvəyə mindiyi vaxt (gün) vergi tutulan əməliyyatın vaxtı sayılır.",
    "B)	Ləğvetmənin qüvvəyə minməsindən bilavasitə əvvəlki vaxt (ay) vergi tutulan əməliyyatın vaxtı sayılır.",
    "C)	Ləğvetmənin qüvvəyə minməsindən bilavasitə əvvəlki vaxt (gün) vergi tutulan əməliyyatın vaxtı sayılır.",
    "D)	Ləğvetmənin qüvvəyə mindiyi vaxtdan (gündən) sonrakı gün vergi tutulan əməliyyatm vaxtı sayılır."
  ]
},
{
  numb: 19,
  question: "Vergi ödəyicisi tərəfindən təqdim edilən və dəyəri ödənilməyən mallar (işlər, xidmətlər) üzrə həmin malların (işlərin, xidmətlərin) alıcısı tərəfindən malları (işləri, xidmətləri) təqdim edən vergi ödəyicisinə borc vəsait verildikdə, ƏDV tutulan əməliyyatın vaxtı necə müəyyən olunur?",
  answer: "C)	Mallar təqdim edildikdən sonra verilmiş borclar üzrə (kredit təşkilatları və bank əməliyyatları aparan şəxslər tərəfindən verilmiş borclar istisna olmaqla) - borcun verildiyi vaxt",
  options: [
    "A)	Mallar təqdim edildikdən sonra verilmiş borclar üzrə (kredit təşkilatları və bank əməliyyatları aparan şəxslər tərəfindən verilmiş borclar da daxil olmaqla) - borcun verildiyi vaxt",
    "B)	Mallar təqdim edilənədək verilmiş borclar üzrə (kredit təşkilatları və bank əməliyyatları aparan şəxslər tərəfindən verilmiş borclar istisna olmaqla) - borcun verildiyi vaxt",
    "C)	Mallar təqdim edildikdən sonra verilmiş borclar üzrə (kredit təşkilatları və bank əməliyyatları aparan şəxslər tərəfindən verilmiş borclar istisna olmaqla) - borcun verildiyi vaxt",
    "D)	Mallar təqdim edilənədək verilmiş borclar üzrə (kredit təşkilatları və bank əməliyyatları aparan şəxslər tərəfindən verilmiş borclar da daxil olmaqla) - borcun verildiyi vaxt"
  ]
},
{
  numb: 20,
  question: "Vergİ ÖdəyİCİSİ tərəfindən təqdim edilən və dəyəri ödənilməyən mallar (işlər, xidmətlər) üzrə həmin malların (işlərin, xidmətlərin) alıcısı tərəfindən malları (işləri, xidmətləri) təqdim edən vergi ödəyicisinə borc vəsait verildikdə, ƏDV tutulan əməliyyatın vaxtı necə müəyyən olunur?",
  answer: "D)	Mallar (işlər, xidmətlər) təqdim edilənədək verilmiş borclar üzrə (kredit təşkilatları və bank əməliyyatları aparan şəxslər tərəfindən verilmiş borclar istisna olmaqla) - malların (işlərin, xidmətlərin) təqdim edildiyi vaxt",
  options: [
    "A)	Mallar (işlər, xidmətlər) təqdim edilənədək verilmiş borclar üzrə (kredit təşkilatları və bank əməliyyatları aparan şəxslər tərəfindən verilmiş borclar da daxil olmaqla) - malların (işlərin, xidmətlərin) təqdim edildiyi vaxt",
    "B)	Mallar (işlər, xidmətlər) təqdim edilənədək verilmiş borclar üzrə (kredit təşkilatları və bank əməliyyatları aparan şəxslər tərəfindən verilmiş borclar istisna olmaqla) - malların (işlərin, xidmətlərin) təqdim edildiyi vaxtadək",
    "C)	Mallar (işlər, xidmətlər) təqdim edildikdən sonra verilmiş borclar üzrə (kredit təşkilatları və bank əməliyyatları aparan şəxslər tərəfindən verilmiş borclar istisna olmaqla) - malların (işlərin, xidmətlərin) təqdim edildiyi vaxt",
    "D)	Mallar (işlər, xidmətlər) təqdim edilənədək verilmiş borclar üzrə (kredit təşkilatları və bank əməliyyatları aparan şəxslər tərəfindən verilmiş borclar istisna olmaqla) - malların (işlərin, xidmətlərin) təqdim edildiyi vaxt"
  ]
},
{
  numb: 21,
  question: "Vergi tutulan əməliyyat üzrə iki və ya daha çox ödəmə aparılırsa, vergi tutulan əməliyyatın vaxtı necə müəyyən olunur?",
  answer: "D)	Hər ödəmə ödəniş miqdarmda ayrıca əməliyyat sayılır",
  options: [
    "A)	Ödəmələr tam qurtardıqdan sonra əməliyyat bitmiş sayılır",
    "B)	Hər ödəmə ödəniş miqdarında ayrıca əməliyyat sayılmır",
    "C)	Hər ödəmə ödəniş miqdarında bir əməliyyat sayılır",
    "D)	Hər ödəmə ödəniş miqdarmda ayrıca əməliyyat sayılır"
  ]
},
{
  numb: 22,
  question: "Ödəmə malların (işlərin, xidmətlərin) təqdim edilməsinədək həyata keçirildikdə, vergi tutulan əməliyyatın vaxtı necə müəyyən olunur?",
  answer: "B)	Ödəmənin həyata keçirildiyi vaxt vergi tutulan əməliyyatın vaxtı sayılır",
  options: [
    "A)	Ödəmələr tam qurtardıqdan sonra əməliyyat bitmiş sayılır",
    "B)	Ödəmənin həyata keçirildiyi vaxt vergi tutulan əməliyyatın vaxtı sayılır",
    "C)	Ödəmə həyata keçirilənədək vergi tutulan əməliyyatın vaxtı sayılır",
    "D)	Ödəmənin həyata keçirildiyi gündən sonra vergi tutulan əməliyyatın vaxtı sayılır"
  ]
},
{
  numb: 23,
  question: "Alınmış avans ödəmələri üzrə elektron qaimə-faktura verilə bilərmi?",
  answer: "B)	Verilə bilməz ",
  options: [
    "A)	Verilə bilər ",
    "B)	Verilə bilməz",
    "C) Vergi ödəyicisinin tələbi ilə verilə bilər",
    "D) Vergi orqanının qərarı əsasında verilə bilər"
  ]
},
{
  numb: 24,
  question: "Vergi Məc. 166-cı maddəsinin məqsədləri üçün ödəmə dedikdə nə nəzərdə tutulur?",
  answer: "A)	Təqdim edilmiş malların (işlərin, xidmətlərin) ƏDV-siz dəyərinin ödənilməsi",
  options: [
    "A)	Təqdim edilmiş malların (işlərin, xidmətlərin) ƏDV-siz dəyərinin ödənilməsi",
    "B)	Təqdim edilmiş malların (işlərin, xidmətlərin) ƏDV-li dəyərinin ödənilməsi",
    "C)	Təqdim edilmiş malların (işlərin,xidmətlərin) ƏDV-siz dəyərinin ən azı 50%-nin ödənməsi",
    "D)	Təqdim edilmiş malların (işlərin,xidmətlərin) ƏDV-li dəyərinin ən azı 50%-nin ödənməsi"
  ]
},
{
  numb: 25,
  question: "Malların göndərilməsi şərtlərində malların yola salınması və ya nəql edilməsi [onları mal alıcısında quraşdırmamaqla] nəzərdə tutulursa, ƏDV məqsədləri üçün maiiarm təqdim edilməsi yeri hansı yer sayılır?",
  answer: "C)	Malların yola salınmasına və ya nəql edilməsinə başlandığı yer",
  options: [
    "A)	Malların alıcıya təqdim edildiyi yer",
    "B)	Malların nəql edilməsinin başa çatdırıldığı yer",
    "C)	Malların yola salınmasına və ya nəql edilməsinə başlandığı yer",
    "D)	Malları təqdim edənin olduğu yer"
  ]
},
{
  numb: 26,
  question: "Malların göndərilməsi şərtlərində malların yola salınması və ya nəql edilməsi [onları mal alıcısında quraşdırmaqla) nəzərdə tutulursa, ƏDV məqsədləri üçün malların təqdim edilməsi yeri hansı yer sayılır?",
  answer: "C) Malların qurulduğu və ya quraşdırıldığı yer",
  options: [
    "A)	Malların nəqlinin başlandığı yer	",
    "B)	Malların təqdim edildiyi yer",
    "C) Malların qurulduğu və ya quraşdırıldığı yer",
    "D) Malların nəqlinin başa çatdığı "
  ]
},
{
  numb: 27,
  question: "İşlər (xidmətlər) bilavasitə daşınmaz əmlakla bağlı olduqda, ƏDV məqsədləri üçün işlərin görüldüyü, yaxud xidmətlərin göstərildiyi yer hansı yer sayılır?",
  answer: "C)	Daşınmaz əmlakın olduğu yer",
  options: [
    "A)	İşləri görən və xidmətləri göstərən şəxsin fəaliyyət göstərildiyi yer",
    "B)	İşlərin və xidmətlərin alıcısının yerləşdiyi yer",
    "C)	Daşınmaz əmlakın olduğu yer",
    "D)	İşləri görən şəxsin qeydiyyatda olduğu yer"
  ]
},
{
  numb: 28,
  question: "İşlərin görüldüyü yer daşınan əmlakla bağlıdırsa, ƏDV məqsədləri üçün işlərin görüldüyü yer hansı yer saydır?",
  answer: "A)	İşlərin faktiki görüldüyü yer",
  options: [
    "A)	İşlərin faktiki görüldüyü yer",
    "B)	İşlərin alıcısının yerləşdiyi yer ",
    "C) Daşınan əmlakın mülkiyyətçisinin olduğu yer",
    "D) İşləri görən şəxsin qeydiyyatda olduğu yer "
  ]
},
{
  numb: 29,
  question: "Xidmətlər mədəniyyət, incəsənət, təhsil, bədən tərbiyəsi və ya idman sahəsində göstərilirsə, ƏDV məqsədləri üçün xidmətlərin göstərildiyi yer hansı yer sayılır?",
  answer: "B)	Xidmətlərin faktiki göstərildiyi yer",
  options: [
    "A)	Xidmət göstərən şəxsin olduğu yer",
    "B)	Xidmətlərin faktiki göstərildiyi yer",
    "C)	Xidmət göstərən şəxsin qeydiyyatda olduğu yer",
    "D)	Xidmətlərin alıcısının təsis edildiyi yer"
  ]
},
{
  numb: 30,
  question: "ƏDV-nin məqsədləri üçün nəqliyyatın həyata keçirildiyi yer [işlər, xidmətlər bu nəqletmə ilə bağlı olduqda] hara sayılır?",
  answer: "D)	c faktiki həyata keçirildiyi yer",
  options: [
    "A)	Nqliyyat vasitəsinin qeydiyyatda olduğu yer",
    "B)	Nəqliyyat xidmətinin faktiki ödənildiyi yer",
    "C)	Nəqliyyat xidmətindən istifadə edən şəxsin olduğu yer",
    "D)	Nəqliyyatın faktiki həyata keçirildiyi yer"
  ]
},
{
  numb: 31,
  question: "ƏDV-nin məqsədləri üçün işlərin və ya xidmətlərin alıcısının yerləşdiyi və ya qeydiyyatda olduğu, təsis edildiyi, işlərin və ya xidmətlərin alıcının daimi nümayəndəliyi ilə bilavasitə bağlı olduğu halda həmin daimi nümayəndəliyin olduğu yer aşağıdakı hansı xidmətlərə tətbiq edilir? 1.	tentlərin, lisenziyaların, ticarət markalarının, müəlliflik və digər analoji hüquqların mülkiyyətə verilməsi və ya güzəşt edilməsi, o cümlədən istifadəyə verilməsi 2.	sləhət, hüquq, mühasibat, mühəndis və ya reklam xidmətlərinin, həmçinin məlumatların işlənilməsi üzrə xidmətlərin və digər analoji xidmətlərin göstərilməsi 3.	çi qüvvəsinin təchiz edilməsi üzrə xidmətlərin göstərilməsi (işçilər bu xidmətlərin alıcısının fəaliyyət göstərdiyi yerdə işlədikləri halda) 4. radio və televiziya yayımı, poçt rabitəsi xidmətlərinin göstərilməsi 5. daşınmaz əmlakın icarəyə verilməsi",
  answer: "A) 1,2,3,4",
  options: [
    "A) 1,2,3,4",
    "B) 2,3,4,5",
    "C) 1,2,4.5",
    "D) 1.3,4,5"
  ]
},
{
  numb: 32,
  question: "Kompüter, internet və digər elektron şəbəkələr, elektron poçt və digər oxşar vasitələrlə xidmətlərin göstərilməsi, yaxud bu cür şəbəkələrdən və ya xidmətlərdən istifadə hüququnun verilməsi xidmətləri üzrə işlərin görüldüyü və ya xidmətlərin göstərildiyi yer (ƏDV məqsədləri üçün) aşağıdakılardan hansıdır?",
  answer: "A)	İşlərin və ya xidmətlərin alıcısının yerləşdiyi və ya qeydiyyatda olduğu, təsis edildiyi, işlər və ya xidmətlər alıcının daimi nümayəndəliyi ilə bilavasitə bağlı olduğu halda həmin daimi nümayəndəliyin olduğu yer",
  options: [
    "A)	İşlərin və ya xidmətlərin alıcısının yerləşdiyi və ya qeydiyyatda olduğu, təsis edildiyi, işlər və ya xidmətlər alıcının daimi nümayəndəliyi ilə bilavasitə bağlı olduğu halda həmin daimi nümayəndəliyin olduğu yer",
    "B)	İşlərin faktiki görüldüyü (xidmətlərin faktiki göstərildiyi) yer",
    "C)	Daşınmaz əmlakın olduğu yer",
    "D) Nəqliyyatın faktiki həyata keçirildiyi yer"
  ]
},
{
  numb: 33,
  question: "Elektron ticarətin satıcıları tərəfindən işlərin və xidmətlərin təqdim edilməsi, habelə elektron qaydada təşkil olunan lotereyaların (o cümlədən virtual lotereyaların),idman mərc oyunlarının, digər yarışların və müsabiqələrin keçirilməsi xidmətləri üzrə işlərin görül-düyü və ya xidmətlərin göstərildiyi yer (ƏDV məqsədləri üçün) aşağıdakılardan hansıdır?",
  answer: "C)	İş və xidmət təqdim edildikdə və ya lotereya, digər yarış və müsabiqə keçirildikdə vergi tutulan əməliyyatın yeri kimi xidmətlərin alıcısının və lotereya, yarış və müsabiqənin iştirakçısının olduğu yer müəyyən olunur və həmin dövlətdə də ƏDV tətbiq olunur.",
  options: [
    "A)	İşlərin və ya xidmətlərin satıcısının yerləşdiyi və ya qeydiyyatda olduğu, təsis edildiyi, işlər və ya xidmətlər alıcının daimi nümayəndəliyi ilə bilavasitə bağh olduğu halda həmin daimi nümayəndəliyin olduğu yer,",
    "B)	İşlərin faktiki görüldüyü (xidmətlərin faktiki göstərildiyi) yer",
    "C)	İş və xidmət təqdim edildikdə və ya lotereya, digər yarış və müsabiqə keçirildikdə vergi tutulan əməliyyatın yeri kimi xidmətlərin alıcısının və lotereya, yarış və müsabiqənin iştirakçısının olduğu yer müəyyən olunur və həmin dövlətdə də ƏDV tətbiq olunur.",
    "D) Nəqliyyatın faktiki həyata keçirildiyi yer"
  ]
},
{
  numb: 34,
  question: "Aşağıdakılardan hansı ƏDV-nin məqsədləri üçün işlərin görüldüyü və ya xidmətlərin göstərildiyi yer sayılır?",
  answer: "A)	İşi yerinə yetirən və ya xidmət göstərən şəxsin fəaliyyəti həyata keçirdiyi yer",
  options: [
    "A)	İşi yerinə yetirən və ya xidmət göstərən şəxsin fəaliyyəti həyata keçirdiyi yer",
    "B)	İş görülən və ya xidmət göstərilən şəxsin olduğu yer",
    "C)	Daşınmaz əmlakın olduğu yer",
    "D)	Dşi yerinə yetirən və ya xidmət göstərən şəxsin uçotda olduğu yer"
  ]
},
{
  numb: 35,
  question: "Vergi Məcəlləsinin 168.1-ci maddəsi tətbiq edildikdə, birdən çox maddədə sadala-nan işlərin görüldüyü və ya xidmətlərin göstərildiyi yer necə müəyyən olunur?",
  answer: "D)	Maddələrin sıra üzrə birincisi ilə müəyyənləşdirilir",
  options: [
    "A)	Hər bir maddə üzrə müəyyənləşdirilir",
    "B)	Maddələrin sıra üzrə axırıncısı ilə müəyyənləşdirilir",
    "C)	İşi görən və xidməti göstərənin isəyi ilə müəyyənləşdirilir",
    "D)	Maddələrin sıra üzrə birincisi ilə müəyyənləşdirilir"
  ]
},
{
  numb: 36,
  question: "ƏDV-nin məqsədləri üçün qeydiyyata alınmayan qeyri-rezident Azərbaycan Res. ərazisində işlərin görülməsi və ya xidmətlərin göstərilməsi üzrə vergiyə cəlb olunurmu?",
  answer: "D)	Qeyri-rezidentə ödənilməli olan məbləğə [ƏDV nəzərə alınmadan] 18 faiz vergi dərəcə¬sini tətbiq etməklə cəlb olunur",
  options: [
    "A)	Qeyri-rezidentə ödənilməli olan məbləğə sıfır [0] faiz vergi dərəcəsini tətbiq etməklə cəlb olunur",
    "B)	Qeyri-rezidentə ödənilməli olan məbləğə [ƏDV ilə birlikdə] 18 faiz vergi dərəcəsini tətbiq etməklə olunur",
    "C)	Qeyri-rezidentə ödənilməli olan məbləğə ƏDV hesablanmır",
    "D)	Qeyri-rezidentə ödənilməli olan məbləğə [ƏDV nəzərə alınmadan] 18 faiz vergi dərəcə¬sini tətbiq etməklə cəlb olunur"
  ]
},
{
  numb: 37,
  question: "Aşağıdakılardan hansı doğrudur?",
  answer: "C)	ƏDV-nin məqsədləri üçün qeydiyyata alınan hər hansı şəxs qeyri-rezidentə ödəmə edər¬kən vergi agenti sayılır",
  options: [
    "A)	ƏDV-nin məqsədləri üçün qeydiyyata alman hər hansı şəxs qeyri-rezidentə ödəmə edər¬kən vergi agenti sayılmır",
    "B)	İstənilən şəxs qeyri-rezidentə ödəmə edərkən vergi agenti sayılmır",
    "C)	ƏDV-nin məqsədləri üçün qeydiyyata alınan hər hansı şəxs qeyri-rezidentə ödəmə edər¬kən vergi agenti sayılır",
    "D)	Yalnız ƏDV-nin məqsədləri üçün qeydiyyata alınmayan hər hansı şəxs qeyri-rezidentə ödəmə edərkən vergi agenti sayılır"
  ]
},
{
  numb: 38,
  question: "ƏDV-nin məqsədləri üçün qeydiyyata alınmayan qeyri-rezident Azərbaycan Respublikasının ərazisində vergi agenti üçün xidmət göstərirsə və ya iş görürsə, vergi tutulan əməliyyatın vaxtı necə müəyyən olunur?",
  answer: "A)	Vergi tutulan əməliyyat ödəmənin həyata keçirildiyi vaxt sayılır, ödəmə əməliyyatın həyata keçirilməsinədək aparıldıqda isə, vergi tutulan əməliyyat ödəmə həyata keçirildikdə aparılmış sayılır",
  options: [
    "A)	Vergi tutulan əməliyyat ödəmənin həyata keçirildiyi vaxt sayılır, ödəmə əməliyyatın həyata keçirilməsinədək aparıldıqda isə, vergi tutulan əməliyyat ödəmə həyata keçirildikdə aparılmış sayılır",
    "B)	Vergi tutulan əməliyyatın vaxtı xidmət və ya işin başa çatdığı vaxt sayılır",
    "C)	Elektron qaimə-fakturanm verildiyi vaxt vergi tutulan əməliyyatın vaxtı sayılır",
    "D)	Vergi tutulan əməliyyat ödəmənin həyata keçirildiyi gündən sonrakı gün sayılır, ödəmə əməliyyatın həyata keçirilməsinədək aparıldıqda isə, vergi tutulan əməliyyat ödəmə həyata keçirildikdə aparılmış sayılır"
  ]
},
{
  numb: 39,
  question: "Qeyri-rezidentə ödənməli olan məbləğə ƏDV necə hesablanır?",
  answer: "D)	Vergi dərəcəsinin qeyri-rezidentə ödənməli olan məbləğə (ƏDV nəzərə alınmadan) tətbiq edilməsi yolu ilə müəyyənləşdirilir",
  options: [
    "A)	Vergi dərəcəsinin qeyri-rezidentə ödənməli olan məbləğə (ƏDV nəzərə alınmaqla) tətbiq edilməsi yolu ilə müəyyənləşdirilir",
    "B)	ƏDV hesablanmır",
    "C)	(0) dərəcə ilə hesablanır",
    "D)	Vergi dərəcəsinin qeyri-rezidentə ödənməli olan məbləğə (ƏDV nəzərə alınmadan) tətbiq edilməsi yolu ilə müəyyənləşdirilir"
  ]
},
];
