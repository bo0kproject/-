// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Kənd təsərrüfatı məhsullarının alışı elektron qaimə-faktura, idxal gömrük bəyan-naməsi və bu bəyannamə ilə bağlı hesab-faktura (invoys), habelə elektron alış aktı ilə, topdan və pərakəndə satışı müvafiq olaraq elektron qaimə-faktura və nəzarət kassa-aparatmın çeki ilə rəsmiləşdirilmədikdə, ƏDV necə hesablanır?",
  answer: "A)	Ümumi dövriyyədən",
  options: [
    "A)	Ümumi dövriyyədən",
    "B)	Alış və satış arasındakı fərqdən",
    "C) Ümumi dövriyyədən 20%-lə",
    "D) Ümumi dövriyyədən 10%-lə"
  ]
},
  {
  numb: 2,
  question: "Hansı halda ödənilmiş ƏDV-nin məbləği əvəzləşdirilə bilər?",
  answer: "A)	Bu maddədə başqa hallar nəzərdə tutulmamışdırsa, ƏDV tutulan əməliyyatlar üçün malların (işlərin, xidmətlərin) alışı zamanı ödənilmiş ƏDV məbləği əməliyyatın dəyəri alıcının bank hesabından həmin malları (işləri, xidmətləri) təqdim edən şəxsin bank hesabına, ƏDV məbləği ƏDV-nin depozit hesabına ödənildikdə əvəzləşdirilir.",
  options: [
    "A)	Bu maddədə başqa hallar nəzərdə tutulmamışdırsa, ƏDV tutulan əməliyyatlar üçün malların (işlərin, xidmətlərin) alışı zamanı ödənilmiş ƏDV məbləği əməliyyatın dəyəri alıcının bank hesabından həmin malları (işləri, xidmətləri) təqdim edən şəxsin bank hesabına, ƏDV məbləği ƏDV-nin depozit hesabına ödənildikdə əvəzləşdirilir.",
    "B)	Mlların (işlərin, xidmətlərin) alışı sahibkarlıq fəaliyyəti və ƏDV tutulan əməliyyatların məqsədləri üçün olsun, əməliyyatın dəyəri bank hesabından həmin malları (işləri, xidmətləri) təqdim edən şəxsin bank hesabına köçürülsün, ƏDV məbləği ƏDV-nin depozit hesabına ödənilsin",
    "C)	Vergi ödəyicisinə verilmiş elektron qaimə-fakturalar üzrə nağdsız qaydada (mal, iş və xidmət təqdim edənin bank hesabına birbaşa nağd qaydada ödənişlər də daxil edilməklə) ödəmələr üzrə mallar alınarkən ƏDV-nin məbləği ƏDV-nin depozit hesabı vasitəsilə ödənildikdə",
    "D)	Vergi ödəyicisinə verilmiş elektron qaimə-fakturalar üzrə nağdsız qaydada (mal, iş və xidmət təqdim edənin bank hesabına birbaşa nağd qaydada ödənişlər istisna edilməklə) ödəmələr üzrə mallar (işlər, xidmətlər) alınarkən ƏDV-nin məbləği də nağdsız ödənildikdə"
  ]
},
  {
  numb: 3,
  question: "Aşağıdakılardan hansı doğrudur?",
  answer: "D)	Malların (işlərin, xidmətlərin) barter edilməsi həmin əməliyyatın ƏDV-siz dəyərinin malları (işləri, xidmətləri) təqdim edən şəxsin bank hesabına ödənilməsinə bərabər tutulur.",
  options: [
    "A)	Malların (işlərin, xidmətlərin) barter edilməsi həmin əməliyyatın ƏDV-li dəyərinin malları (işləri, xidmətləri) alan şəxsin bank hesabına ödənilməsinə bərabər tutulur.",
    "B)	Malların (işlərin, xidmətlərin) barter edilməsi həmin əməliyyatın ƏDV-siz dəyərinin malları (işləri, xidmətləri) alan şəxsin bank hesabına ödənilməsinə bərabər tutulur.",
    "C)	Malların (işlərin, xidmətlərin) barter edilməsi həmin əməliyyatın ƏDV-li dəyərinin malları (işləri, xidmətləri) təqdim edən şəxsin bank hesabına ödənilməsinə bərabər tutulur.",
    "D)	Malların (işlərin, xidmətlərin) barter edilməsi həmin əməliyyatın ƏDV-siz dəyərinin malları (işləri, xidmətləri) təqdim edən şəxsin bank hesabına ödənilməsinə bərabər tutulur."
  ]
},
  {
  numb: 4,
  question: "Hesabat dövrü ərzində həyata keçirilmiş sayılan mal göndərilməsini, iş görül¬məsini, yaxud xidmət göstərilməsini nəzərdə tutan əməliyyatlar üzrə ödənilmiş ƏDV məbləği nə vaxt əvəzləşdirilir?",
  answer: "C)	Alınmış elektron qaimə-faktura üzrə malların (işlərin, xidmətlərin) dəyərinin və ona mütənasib ƏDV məbləğinin tam ödənildiyi vaxt ",
  options: [
    "A)	Alınmış elektron qaimə-faktura üzrə malların (işlərin, xidmətlərin) dəyərinin və ƏDV məbləğinin ən azı 80 faizinin ödənildiyi vaxt",
    "B)	Alınmış elektron qaimə-faktura üzrə malların (işlərin, xİdmötbrİn) (ЬуЭППШ Y0 ÖDY məbləğinin ən azı 50 faizinin ödənildiyi vaxt",
    "C)	Alınmış elektron qaimə-faktura üzrə malların (işlərin, xidmətlərin) dəyərinin və ona mütənasib ƏDV məbləğinin tam ödənildiyi vaxt ",
    "D)	Alınmış elektron qaimə-faktura üzrə malların (işlərin, xidmətlərin) dəyərinin və ƏDV məbləğinin tam ödənildiyi vaxt"
  ]
},
  {
  numb: 5,
  question: "Vergi ödəyicisinə verilmiş elektron qaimə-faktura üzrə alınmış malların (iş və xid-mətlərin) dəyəri ödənilərkən, malların (iş və xidmətlərin) dəyəri üzrə iki və ya daha çox ödəmə aparılarsa, ƏDV-nin məbləği necə ödənilməlidir?",
  answer: "A)	Vergi ödəyicisinə verilmiş elektron qaimə-faktura üzrə alınmış malların (iş və xidmətlərin) dəyəri ödənilən gündən gec olmayaraq, ƏDV-nin məbləği aparılmış ödəniş məbləğinə uyğun olaraq ƏDV-nin depozit hesabı vasitəsilə ödənilməlidir.",
  options: [
    "A)	Vergi ödəyicisinə verilmiş elektron qaimə-faktura üzrə alınmış malların (iş və xidmətlərin) dəyəri ödənilən gündən gec olmayaraq, ƏDV-nin məbləği aparılmış ödəniş məbləğinə uyğun olaraq ƏDV-nin depozit hesabı vasitəsilə ödənilməlidir.",
    "B)	Aparılmış ödəniş məbləğinə uyğun olaraq bank hesabı vasitəsilə ödənilməlidir.",
    "C)	Vergi ödəyicisinə verilmiş elektron qaimə-faktura üzrə alınmış malların (iş və xidmətlərin) dəyəri ödənilən gündən gec olmayaraq, ƏDV-nin məbləği aparılmış ödəniş məbləğindən asılı olmayaraq ƏDV-nin depozit hesabı vasitəsilə ödənilməlidir.",
    "D)	Ümumi ödəniş məbləğinə uyğun olaraq birinci ödəmə zamanı ƏDV-nin depozit hesabı vasitəsilə ödənilməlidir"
  ]
},
{
  numb: 6,
  question: "Bir hissəsi vergi ödəyicisinin sahibkarlıq fəaliyyəti, digər hissəsi isə başqa məqsədlər üçün nəzərdə tutulan vergiyə cəlb edilən əməliyyatlara görə nağdsız qaydada ƏDV-nin depozit hesabı vasitəsilə ödənilmiş (mal, iş və xidmət təqdim edənin bank hesabına birbaşa nağd qaydada ödənişlər istisna edilməklə) və malların idxalı üçün, o cümlədən ƏDV tutulmayan əməliyyatlar üçün vergi ödəyicisinə verilmiş elektron qaimə-fakturaları üzrə onun tərəfindən ödənilmiş ƏDV-nin məbləği hansı qaydada əvəzləşdirilir?",
  answer: "A)	Sahibkarlıq fəaliyyəti üçün istifadə olunan malların (işlərin, xidmətlərin) xüsusi çəkisinə görə müəyyənləşdirilən ƏDV-nin məbləği qədər əvəzləşdirilir",
  options: [
    "A)	Sahibkarlıq fəaliyyəti üçün istifadə olunan malların (işlərin, xidmətlərin) xüsusi çəkisinə görə müəyyənləşdirilən ƏDV-nin məbləği qədər əvəzləşdirilir",
    "B)	Əvəzləşdirməyə yol verilmir",
    "C)	Başqa məqsədlər üçün istifadə olunan malların (işlərin, xidmətlərin) xüsusi çəkisinə görə müəyyənləşdirilən ƏDV-nin məbləği qədər əvəzləşdirilir",
    "D)	Ödənilmiş ƏDV tam məbləğdə əvəzləşdirilir"
  ]
},
  {
  numb: 7,
  question: "Əyləncə və yemək xərclərinin, habelə işçilərin mənzil və digər sosial xarakterli xərclərinin çəkilməsi nəticəsində ödənilmiş ƏDV necə əvəzləşdirilir?",
  answer: "B)	Ödənişin formasından asıh olmayaraq əvəzləşdirilmir",
  options: [
    "A)	Nağdsız ödəmələr olduqda ",
    "B)	Ödənişin formasından asıh olmayaraq əvəzləşdirilmir",
    "C) Ödənişin 50 faizi həcmində əvəzləşdirilir",
    "D) Nağd ödəmələr olduqda əvəzləşdirilir"
  ]
},
{
  numb: 8,
  question: "Vergi ödəyicisi tərəfindən əyləncə və yemək xərcləri, habelə işçilərin mənzil və digər sosial xarakterli xərcləri çəkiləndə ƏDV-nin əvəzləşdirilməsinə yol verilirmi?",
  answer: "A)	Yol verilmir",
  options: [
    "A)	Yol verilmir",
    "B) Yol verilir",
    "C)	Yalnız əyləncə və yemək xərclərinə görə ƏDV-nin əvəzləşdirilməsinə yol verilir",
    "D)	Yalnız işçilərin mənzil və digər sosial xarakterli xərclərinə görə ƏDV-nin əvəzləşdiril¬məsinə yol verilir"
  ]
},
{
  numb: 9,
  question: "Sahibkarlıq fəaliyyəti əyləncə və ya sosial xarakteri daşıyan vergi ödəyicisinin xərcləri bu cür fəaliyyət çərçivəsində çəkilirsə, ƏDV-nin əvəzləşdirilməsinə yol verilirmi?",
  answer: "B) Yol verilir",
  options: [
    "A)	Yol verilmir",
    "B) Yol verilir",
    "C)	Yalnız əyləncə və yemək xərclərinə görə ƏDV-nin əvəzləşdirilməsinə yol verilir",
    "D)	Yalnız işçilərin mənzil və digər sosial xarakterli xərclərinə görə ƏDV-nin əvəzləşdiril¬məsinə yol verilir"
  ]
},
{
  numb: 10,
  question: "Vergi ödəyicisi vergi tutulan əməliyyatlar və ƏDV-dən azad edilmiş əməliyyatlar aparırsa, ƏDV üzrə əvəzləşdirmə hansı qaydada həyata keçirilir?",
  answer: "D)	Vergi tutulan dövriyyənin ümumi dövriyyədəki xüsusi çəkisinə uyğun olaraq müəyyən edilən nağdsız qaydada ödənilən ƏDV-nin məbləği əvəzləşdirilir",
  options: [
    "A)	Heç bir əvəzləşdirməyə yol verilmir",
    "B)	Bu əməliyyatlar nəticəsində nağsız qaydada ödənilən ƏDV tam məbləğdə əvəzləşdirilir",
    "C)	Bu əməliyyatlar nəticəsində nağdsız qaydada ödənilən ƏDV 50% həcmində əvəzləşdirilir",
    "D)	Vergi tutulan dövriyyənin ümumi dövriyyədəki xüsusi çəkisinə uyğun olaraq müəyyən edilən nağdsız qaydada ödənilən ƏDV-nin məbləği əvəzləşdirilir"
  ]
},
{
  numb: 11,
  question: "Vergi ödəyicisi tərəfindən ƏDV-yə cəlb edilən əməliyyatlarla yanaşı, ƏDV-dən azad olunan əməliyyatlar aparılarkən, bu əməliyyatlara aid olan mallar (işlər, xidmətlər) üzrə sənədləşdirilmiş məlumatlar əsasında ƏDV ödənilməklə və ƏDV-dən azad edilməklə mədaxil edilən malların (işlərin, xidmətlərin) ayrı-ayrılıqda uçotu aparıldığı halda, ƏDV tutulan əməliyyatlar üçün alınmış mallara (işlərə, xidmətlərə) görə ödənilmiş ƏDV-nin məbləği hansı qaydada əvəzləşdirilir?",
  answer: "A)	Vergi Məcəlləsinin 175.1-ci maddəsinə uyğun olaraq tam məbləğdə əvəzləşdirilir.",
  options: [
    "A)	Vergi Məcəlləsinin 175.1-ci maddəsinə uyğun olaraq tam məbləğdə əvəzləşdirilir.",
    "B)	50 faizi əvəzləşdirilir",
    "C)	Vergi tutulan dövriyyənin ümumi dövriyyədəki xüsusi çəkisinə uyğun olaraq müəyyən edilən nağdsız qaydada ödənilən ƏDV-nin məbləği əvəzləşdirilir",
    "D)	Əvəzləşdiməyə yol verilmir"
  ]
},
{
  numb: 12,
  question: "Vergi tutulan dövriyyənin dəqiqləşdirilməsi zamanı bəyannamədə büdcəyə çatası ƏDV-nin məbləği düzgün göstərilməmişdirsə, büdcəyə ödənilməli olan ƏDV-nin məbiəgı hansı dövr üzrə vergi ödəyicisi tərəfindən təqdim edilmiş bəyannamədə dəqiqləşdirilir?",
  answer: "A)	Həmin halların yarandığı hesabat dövrü üzrə",
  options: [
    "A)	Həmin halların yarandığı hesabat dövrü üzrə",
    "B)	ƏDV üçün elektron qaimə-faktura verildiyi və ƏDV-nin məbləğini həmin elektron qaimə- faktura düzgün göstərildiyi dövr üzrəB)	ƏDV üçün elektron qaimə-faktura verildiyi və ƏDV-nin məbləğini həmin elektron qaimə- faktura düzgün göstərildiyi dövr üzrə",
    "C)	Vergi tutulan dövriyyə dəqiqləşdirilmir",
    "D)	Mallar, işlər və xidmətlərlə bağlı ödəmə aparılan dövr üzrə"
  ]
},
{
  numb: 13,
  question: "Əlavə dəyər vergisindən azad olunan, yaxud ƏDV-yə cəlb edilməyən əməliyyatlar aparan şəxslər tərəfindən mallar, işlər, xidmətlər alınarkən Vergi Məcəlləsi ilə müəyyən edilmiş qaydada ödənilmiş ƏDV məbləği hansı qaydada əvəzləşdirilir?",
  answer: "A)	Əvəzləşdirilmir",
  options: [
    "A)	Əvəzləşdirilmir",
    "B)	50 faiz əvəzləşdirilir ",
    "C)	100 faiz əvəzləşdirilir ",
    "D) Vergi ödəyicisinə qaytarılır"
  ]
},
{
  numb: 14,
  question: "Sıfır [0] dərəcəsi ilə ƏDV tutulan əməliyyatlar aparan şəxslər tərəfindən mallar, işlər, xidmətlər alınarkən nağdsız qaydada ƏDV-nin depozit hesabı vasitəsilə ödənilmiş ƏDV-nin məbləği hansı qaydada əvəzləşdirilir?",
  answer: "C) Ümumi qaydada əvəzləşdirilir",
  options: [
    "A)	50 faiz əvəzləşdirilir",
    "B)	Əvəzləşdirilmir",
    "C) Ümumi qaydada əvəzləşdirilir",
    "D)	30 faiz əvəzləşdirilir"
  ]
},
{
  numb: 15,
  question: "Azərbaycan Respublikasının tərəfdar çıxdığı beynəlxalq müqaviləyə uyğun olaraq beynəlxalq təşkilatın, yaxud xarici hüquqi və ya fiziki şəxsin əvəzsiz köçürmələri ilə ödənilmiş malları alan və yaxud işlərin və ya xidmətlərin nəticələrini həmin əsaslarla əldə edən şəxs vergi orqanına elektron qaimə-fakturaları verərkən, həmin mallara, işlərə və ya xidmətlərə görə ödənilmiş ƏDV-ni vergi orqanına ərizə verdiyi vaxtdan hansı müddət ərzində geri almaq hüququna malikdir?",
  answer: "D) 45 gün",
  options: [
    "A) 10 gün",
    "B) 20 gün",
    "C) 30 gün",
    "D) 45 gün"
  ]
},
{
  numb: 16,
  question: "Hansı halda ödənilmiş ƏDV-nin məbləği əvəzləşdirilə bilər?",
  answer: "C)	Sıfır (0) dərəcəsi ilə ƏDV tutulan əməliyyatlar aparan şəxslər tərəfindən mallar (işlər, xidmətlər) elektron qaimə-fakturaları üzrə nağdsız qaydada (mal, iş və xidmət təqdim edənin bank hesabına birbaşa nağd qaydada ödənişlər istisna edilməklə) alındıqda ƏDV-nin məbləği ƏDV-nin depozit hesabı vasitəsilə ödənildikdə",
  options: [
    "A)	"Büdcə sistemi haqqında" Azərbaycan Respublikası Qanununun 1.1.17-ci maddəsində nəzərdə tutulmuş subsidiyalar istisna olmaqla, dövlət büdcəsindən müxtəlif mənbələr üzrə dövlət əsaslı vəsait qoyuluşu (investisiya xərcləri) hesabına mallar (işlər, xidmətlər) alındıqda",
    "B)	ƏDV-dən azad olunan, yaxud ƏDV-yə cəlb edilməyən əməliyyatlar aparan şəxslər tərəfindən mallar (işlər, xidmətlər) alındıqda",
    "C)	Sıfır (0) dərəcəsi ilə ƏDV tutulan əməliyyatlar aparan şəxslər tərəfindən mallar (işlər, xidmətlər) elektron qaimə-fakturaları üzrə nağdsız qaydada (mal, iş və xidmət təqdim edənin bank hesabına birbaşa nağd qaydada ödənişlər istisna edilməklə) alındıqda ƏDV-nin məbləği ƏDV-nin depozit hesabı vasitəsilə ödənildikdə",
    "D)	Vergi ödəyicisinə verilmiş elektron qaimə-fakturaları üzrə mal, iş və xidmət təqdim edənin bank hesabına birbaşa nağd qaydada ödənişlər edildikdə"
  ]
},
{
  numb: 17,
  question: "Hansı şəxslər tərəfindən mallar, xidmətlər (işlər) alınarkən onlara verilmiş elek¬tron qaimə-fakturalar üzrə ƏDV-nin məbləği ƏDV-nin depozit hesabına köçürülməli-dir?",
  answer: "A)	ƏDV ödəyiciləri, ƏDV-nin məqsədləri üçün qeydiyyatda olmayan, səhmlərinin və paylarının 50 faizindən çoxu dövlətə məxsus olan hüquqi şəxslər və büdcə təşkilatları, habelə bina tikintisi fəaliyyəti ilə məşğul olan şəxslərdən yaşayış və qeyri-yaşayış sahələri alan şəxslər",
  options: [
    "A)	ƏDV ödəyiciləri, ƏDV-nin məqsədləri üçün qeydiyyatda olmayan, səhmlərinin və paylarının 50 faizindən çoxu dövlətə məxsus olan hüquqi şəxslər və büdcə təşkilatları, habelə bina tikintisi fəaliyyəti ilə məşğul olan şəxslərdən yaşayış və qeyri-yaşayış sahələri alan şəxslər",
    "B)	ƏDV ödəyiciləri, habelə ƏDV-nin məqsədləri üçün qeydiyyatda olmayan, səhmlərinin və paylarının 50 faizindən çoxu dövlətə məxsus olan hüquqi şəxslər və yerli özünü idarəetmə orqanları",
    "C)	ƏDV ödəyiciləri, habelə kredit və sığorta təşkilatları, investisiya fondları və büdcə təşkilatları",
    "D)	ƏDV ödəyiciləri, habelə ƏDV-nin məqsədləri üçün qeydiyyatda olmayan hüquqi şəxslər və dövlət fondları"
  ]
},
{
  numb: 18,
  question: "Qəbzlər, çeklər və nağd qaydada aparılan əməliyyatların rəsmiləşdirildiyi sənədlər, habelə müvafiq icra hakimiyyəti orqanının müəyyən etdiyi orqan (qurum) tərəfindən təsdiq edilən qaydada tərtib edilməyən elektron qaimə-fakturalar verginin əvəzləşdirilməsinə əsas verirmi?",
  answer: "B)	Vemir",
  options: [
    "A)	Verir",
    "B)	Vermir",
    "C) 50%-i əvəzləşdirilir",
    "D) Nazirlər Kabinetinin qərarı əsasında əvəzləşdirilir"
  ]
},
{
  numb: 19,
  question: "Aşağıdakılardan hansı doğru olmayanlara aid deyil?",
  answer: "B)	Gömrük orqanları tərəfindən verilmiş idxalda ƏDV-nin ödənildiyini göstərən idxal sənədləri ödənişin formasından asılı olmayaraq verginin əvəzləşdirilməsinə əsas verir",
  options: [
    "A)	Gömrük orqanları tərəfindən verilmiş idxalda ƏDV-nin ödənildiyini göstərən idxal sənədləri ödənişin formasından asılı olaraq verginin əvəzləşdirilməsinə əsas verir",
    "B)	Gömrük orqanları tərəfindən verilmiş idxalda ƏDV-nin ödənildiyini göstərən idxal sənədləri ödənişin formasından asılı olmayaraq verginin əvəzləşdirilməsinə əsas verir",
    "C)	Gömrük orqanları tərəfindən verilmiş idxalda ƏDV-nin ödənildiyini göstərən idxal sənədləri ödənişin formasından asılı olmayaraq verginin əvəzləşdirilməsinə əsas vermir",
    "D)	Gömrük orqanları tərəfindən verilmiş idxalda ƏDV-nin ödənildiyini göstərən idxal sənədləri ödənişin formasından asılı olaraq verginin əvəzləşdirilməsinə müəyyən hallarda əsas verir"
  ]
},
{
  numb: 20,
  question: "Düzgün olanı göstərin",
  answer: "A)	Müvəqqəti idxal şəklində Azərbaycan Respublikasının ərazisinə buraxılan və müvəqqəti idxal xüsusi gömrük proseduru altında yerləşdirilmiş mallar sonradan sərbəst dövriyyə üçün buraxılış gömrük proseduru altında yerləşdirildiyi halda idxal əməliyyatı üzrə ödənilmiş ƏDV məbləğləri malların sərbəst dövriyyəyə buraxıldığı hesabat ayında əvəzləşdirilir.",
  options: [
    "A)	Müvəqqəti idxal şəklində Azərbaycan Respublikasının ərazisinə buraxılan və müvəqqəti idxal xüsusi gömrük proseduru altında yerləşdirilmiş mallar sonradan sərbəst dövriyyə üçün buraxılış gömrük proseduru altında yerləşdirildiyi halda idxal əməliyyatı üzrə ödənilmiş ƏDV məbləğləri malların sərbəst dövriyyəyə buraxıldığı hesabat ayında əvəzləşdirilir.",
    "B)	Müvəqqəti idxal şəklində Azərbaycan Respublikasının ərazisinə buraxılan və müvəqqəti idxal xüsusi gömrük proseduru altında yerləşdirilmiş mallar sonradan sərbəst dövriyyə üçün buraxılış gömrük proseduru altında yerləşdirildiyi halda idxal əməliyyatı üzrə ödənilmiş ƏDV məbləğləri malların sərbəst dövriyyəyə buraxıldığı aydan sonrakı hesabat ayında əvəzləşdirilir.",
    "C)	Müvəqqəti idxal şəklində Azərbaycan Respublikasının ərazisinə buraxılan mallar sonradan sərbəst dövriyyə üçün buraxılış gömrük proseduru altında yerləşdirildiyi halda idxal əməliyyatı üzrə ödənilmiş ƏDV məbləğləri malların sərbəst dövriyyəyə buraxıldığı hesabat ayında əvəzləşdirilir.",
    "D)	Gömrük orqanları tərəfindən verilmiş idxalda ƏDV-nin ödənildiyini göstərən idxal sənədləri ödənişin formasından asılı olaraq verginin əvəzləşdirilməsinə müəyyən hallarda əsas verir"
  ]
},
{
  numb: 21,
  question: "Doğru olan hansıdır?",
  answer: "D)	Əmtəəsiz və (və ya) riskli əməliyyatların rəsmiləşdirildiyi sənədlər verginin əvəzləşdiril- .məsinə əsas vermir",
  options: [
    "A)	Riskli vergi ödəyicisindən əldə edilmiş elektron qaimə-faktura verginin əvəzləşdirilməsinə qismən əsas verir",
    "B)	Əmtəəsiz və (və ya) riskli əməliyyatların rəsmiləşdirildiyi sənədlər istisna olmaqla, riskli vergi ödəyicisindən əldə edilmiş elektron qaimə-faktura verginin əvəzləşdirilməsinə əsas verir",
    "C)	Əmtəəsiz və (VƏ ya) riskli əməliyyatların rəsmiləşdirildiyi sənədlər, habelə riskli vergi ödəyicisindən əldə edilmiş elektron qaimə-faktura verginin əvəzləşdirilməsinə qismən əsas verir",
    "D)	Əmtəəsiz və (və ya) riskli əməliyyatların rəsmiləşdirildiyi sənədlər verginin əvəzləşdiril- .məsinə əsas vermir"
  ]
},
{
  numb: 22,
  question: "Kənd təsərrüfatı məhsullarının topdan və pərakəndə satışı ilə məşğul olan vergi ödəyiciləri tərəfindən 2022-ci il yanvarın 1-dən əldə edilmiş kənd təsərrüfatı məhsullarına görə neçə il müddətində ödənilmiş ƏDV məbləğləri əvəzləşdirilmir?",
  answer: "C) 3 il",
  options: [
    "A) 2 il",
    "B) 5 il",
    "C) 3 il",
    "D) 1 il"
  ]
},
{
  numb: 23,
  question: "ƏDV-nin büdcəyə ödənilmə müddəti dedikdə, nə başa düşülür?",
  answer: "B)	ƏDV-nin bəyannaməsinin verilməsi üçün müəyyən edilən müddət",
  options: [
    "A)	ƏDV-nin müştəridən alındığı vaxt",
    "B)	ƏDV-nin bəyannaməsinin verilməsi üçün müəyyən edilən müddət",
    "C)	Malın [işin, xidmətin] təqdim edildiyi vaxt",
    "D)	ƏDV elektron qaimə-fakturasının müştəriyə verildiyi vaxt"
  ]
},
{
  numb: 24,
  question: "Vergi ödəyicisi olan hüquqi şəxs ləğv edildikdə və ya hüquqi şəxs yaratmadan sahibkarlıq fəaliyyətini həyata keçirən fiziki şəxsin fəaliyyətinə xitam verildikdə, ƏDV bəyannaməsi Vergi Məcəlləsində nəzərdə tutulmuş müddətdən gec olmamaq şərti ilə neçə gün müddətində vergi orqanına təqdim edilməlidir?",
  answer: "A) 30 gün",
  options: [
    "A) 30 gün",
    "B) 15 gün",
    "C) 7 gün",
    "D) 2 gün"
  ]
},
{
  numb: 25,
  question: "Vergi ödəyicisi olan hüquqi şəxs ləğv edildikdə və ya hüquqi şəxs yaratmadan sahibkarlıq fəaliyyətini həyata keçirən fiziki şəxsin fəaliyyətinə xitam verildikdə ƏDV məqsədləri üçün vergi dövrü hansı dövrü əhatə edir?",
  answer: "A)	Hesabat dövrü sayılan müddətin əvvəlindən vergi ödəyicisi fəaliyyətini dayandırdığı günə qədər olan dövrü",
  options: [
    "A)	Hesabat dövrü sayılan müddətin əvvəlindən vergi ödəyicisi fəaliyyətini dayandırdığı günə qədər olan dövrü",
    "B)	Vergi ödəyicisinin fəaliyyətini dayandırdığı gündən hesabat dövrü sayılan müddətin sonuna qədər olan dövrü",
    "C)	Vergi ödəyicisinin fəaliyyət göstərdiyi hesabat dövrünü",
    "D)	Bəyannamənin verilməsi üçün müəyyən edilən müddəti"
  ]
},
{
  numb: 26,
  question: "ƏDV-nin bəyannaməsi hər hesabat dövrü üçün hesabat dövründən sonra hansı müddətdə vergi orqanına təqdim olunur?",
  answer: "C)	Hesabat dövründən sonrakı ayın 20-dən gec olmayaraq",
  options: [
    "A)	Hesabat dövründən sonrakı ayın 10-dan gec olmayaraq",
    "B)	Hesabat dövründən sonrakı ayın 15-dən gec olmayaraq",
    "C)	Hesabat dövründən sonrakı ayın 20-dən gec olmayaraq",
    "D)	Hesabat dövründən sonrakı aym 25-dən gec olmayaraq"
  ]
},
{
  numb: 27,
  question: "Yalnız malların idxalı üzrə ƏDV ödəyicisi sayılan şəxslər ƏDV bəyannaməsini nə vaxt vergi orqanına təqdim edirlər?",
  answer: "D)	Bəyannamə təqdim etmirlər",
  options: [
    "A)	Malların idxalı rəsmləşdirildiyi aydan sonrakı ayın 20-dən gec olmayaraq",
    "B)	Malların idxalı rəsmləşdirildiyi aydan sonrakı ayın 15-dən gec olmayaraq",
    "C)	Malların idxalı rəsmləşdirildiyi gün",
    "D)	Bəyannamə təqdim etmirlər"
  ]
},
{
  numb: 28,
  question: "Vergi tutulan idxal üzrə ƏDV Vergi Məcəlləsinə və gömrük qanunvericiliyinə uyğun olaraq gömrük rüsumlarının ödənilməsi üçün nəzərdə tutulan qaydada hansı dövlət orqanı tərəfindən hesablanır və alınır?",
  answer: "D) Gömrük orqanları tərəfindən",
  options: [
    "A)	Vergi orqanları tərəfindən ",
    "B)	Bələdiyyələr tərəfindən ",
    "C) Məhkəmə orqanları tərəfindən",
    "D) Gömrük orqanları tərəfindən"
  ]
},
{
  numb: 29,
  question: "ƏDV üzrə qeydiyyat keçmiş tarixlə aparıldıqda, keçmiş hesabat dövrləri üçün bəyannamə necə təqdim olunur?",
  answer: "C)	Keçmişdə aparılan əməliyyatlar vergi ödəyicisi tərəfindən verilən birinci bəyannamədə əks etdirilir və bu əməliyyatlar bəyannamə verildiyi ay ərzində baş vermiş əməliyyatlar sayılır",
  options: [
    "A)	Keçmiş hər bir hesabat dövrü üçün ayrıca bəyannamə təqdim edilir",
    "B)	Keçmiş hesabat dövrləri üçün ümumilikdə bir bəyannamə təqdim edilir",
    "C)	Keçmişdə aparılan əməliyyatlar vergi ödəyicisi tərəfindən verilən birinci bəyannamədə əks etdirilir və bu əməliyyatlar bəyannamə verildiyi ay ərzində baş vermiş əməliyyatlar sayılır",
    "D)	Keçmiş hesabat dövrləri üçün bəyannamə təqdim edilmir"
  ]
},
{
  numb: 30,
  question: "Naxçıvan MR-da tutulan ƏDV hansı büdcəyə ödənilir?",
  answer: "A)	Naxçıvan MR-nın büdcəsinə",
  options: [
    "A)	Naxçıvan MR-nın büdcəsinə",
    "B)	Respublika büdcəsinə",
    "C)	Yerli icra hakimiyyətinin büdcədənkənar fonduna",
    "D)	Bələdiyyə büdcəsinə"
  ]
},
{
  numb: 31,
  question: "ƏDV üzrə hesabat dövrü hansı dövr sayıhr?",
  answer: "D) Təqvim ayı",
  options: [
    "A) Təqvim ili",
    "B) Rüb",
    "C) Hesabat dövrü müəyyənləşdirilməyib",
    "D) Təqvim ayı"
  ]
},
{
  numb: 32,
  question: "Hesabat dövründə vergi tutulan dövriyyəsinin azı neçə faizi sıfır [0] dərəcəsi ilə vergi cəlb olunan vergi ödəyicisinə ƏDV-nin artıq ödənilmiş məbləği onun ərizəsinin verildiyi vaxtdan 20 gün ərzində qaytarılır?",
  answer: "B) 50 faizi",
  options: [
    "A) 45 faizi",
    "B) 50 faizi",
    "C) 75 faizi",
    "D) 25 faizi"
  ]
},
{
  numb: 33,
  question: "Hesabat dövründə vergi tutulan dövriyyəsinin azı 50 faizi sıfır [0] dərəcəsi ilə vergi cəlb olunan vergi ödəyiciləri istisna olmaqla, digər vergi ödəyiciləri üçün əvəzləşdirilən vergi məbləğinin hesabat dövrü ərzində hesablanmış vergi məbləğindən artıq olan hissəsi vergi ödəyicisinin vergi və gömrük orqanlarına ərizəsini verdiyi vaxtdan hansı müddətə büdcədən qaytarılır?",
  answer: "C)	Ödəyicinin vergi və gömrük orqanlarına ərizəsini verdiyi vaxtdan 4 aydan gec olmayaraq qaytarılır",
  options: [
    "A)	Artıq olan məbləğ qaytarılmır",
    "B)	Ödəyicinin vergi və gömrük orqanlarına ərizəsini verdiyi vaxtdan 20 gün ərzində qaytarılır",
    "C)	Ödəyicinin vergi və gömrük orqanlarına ərizəsini verdiyi vaxtdan 4 aydan gec olmayaraq qaytarılır",
    "D)	Ödəyicinin vergi və gömrük orqanlarına elektron formada ərizəsini verdiyi vaxtdan 3 aydan gec olmayaraq qaytarılır"
  ]
},
{
  numb: 34,
  question: "Müəyyən məbləğlərin vergi ödəyicisinə səhvən qaytarıldığı hansı hallarda vergi və ya gömrük orqanları həmin məbləğlərin vergilərin tutulması üçün müəyyən edilmiş qaydada qaytarılmasını tələb etməlidir?",
  answer: "A)	Bütün hallarda",
  options: [
    "A)	Bütün hallarda",
    "B)	Heç bir halda",
    "C) Səhvən qaytaran orqandan tutulur",
    "D) Xüsusi hallarda"
  ]
},
{
  numb: 35,
  question: "Riskli vergi ödəyiciləri tərəfindən artıq ödəmənin qaytarılması ilə bağlı müraciət edildikdə nə edilməlidir?",
  answer: "C)	Vergi Məcəlləsinin 179-cu maddəsi ilə müəyyən edilən müddətlər onların fəaliyyəti üzrə kameral və ya səyyar vergi yoxlamaları və operativ vergi nəzarəti tədbirləri tam başa çatdıqdan sonra tətbiq edilir",
  options: [
    "A)	Riskli vergi ödəyiciləri tərəfindən artıq ödənilmiş məbləğər geri qaytarılmır",
    "B)	Onların fəaliyyəti üzrə kameral vergi yoxlamaları tam başa çatdıqdan sonra Vergi Məcəlləsinin 179-cu maddəsi ilə müəyyən edilən müddətlər tətbiq edilir",
    "C)	Vergi Məcəlləsinin 179-cu maddəsi ilə müəyyən edilən müddətlər onların fəaliyyəti üzrə kameral və ya səyyar vergi yoxlamaları və operativ vergi nəzarəti tədbirləri tam başa çatdıqdan sonra tətbiq edilir",
    "D)	Vergi Məcəlləsinin 179-cu maddəsi ilə müəyyən edilən müddətlər tətbiq edilir"
  ]
},
{
  numb: 36,
  question: "ƏDV-nin düzgün hesablanması və vaxtında ödənilməsinə kim məsuliyyət daşıyır?",
  answer: "A)	vergi ödəyiciləri və onun vəzifəli şəxsləri",
  options: [
    "A)	vergi ödəyiciləri və onun vəzifəli şəxsləri",
    "B)	Gömrük orqanları və onların vəzifəli şəxsləri",
    "C)	Gömrük orqanları və onların vəzifəli şəxsləri",
    "D)	Maliyyə orqanları və onların vəzifəli şəxsləri"
  ]
},
{
  numb: 37,
  question: "ƏDV bəyannaməsinin vaxtında təqdim edilməsi üçün kim məsuliyyət daşıyır?",
  answer: "D)	Vergi ödəyicisi və onun vəzifəli şəxsləri",
  options: [
    "A)	Vergi orqanları və onların vəzifəli şəxsləri",
    "B)	Gömrük orqanları və onların vəzifəli şəxsləri",
    "C)	Maliyyə orqanları və onların vəzifəli şəxsləri",
    "D)	Vergi ödəyicisi və onun vəzifəli şəxsləri"
  ]
},
{
  numb: 38,
  question: "Malların idxalı zamanı ƏDV-nin tutulmasına kim məsuliyyət daşıyır?",
  answer: "B)	Gömrük orqanları və onların vəzifəli şəxsləri",
  options: [
    "A)	Vergi orqanları və onların vəzifəli şəxsləri",
    "B)	Gömrük orqanları və onların vəzifəli şəxsləri",
    "C)	Maliyyə orqanları və onların vəzifəli şəxsləri",
    "D)	Vergi ödəyicisi və onun vəzifəli şəxsləri"
  ]
},
{
  numb: 39,
  question: "Vergitutmanın idarə edilməsi hansı orqan tərəfindən həyata keçirilir?",
  answer: "A)	Vergi Məcəlləsinə və Azərbaycan Respublikasının gömrük qanunvericiliyinə uyğun olaraq vergi orqanları və gömrük orqanları tərəfindən öz səlahiyyətləri daxilində həyata keçirilir.",
  options: [
    "A)	Vergi Məcəlləsinə və Azərbaycan Respublikasının gömrük qanunvericiliyinə uyğun olaraq vergi orqanları və gömrük orqanları tərəfindən öz səlahiyyətləri daxilində həyata keçirilir.",
    "B)	Vergi Məcəlləsinə uyğun olaraq vergi orqanları və onların vəzifəli şəxsləri tərəfindən öz səlahiyyətləri daxilində həyata keçirilir.",
    "C)	Vergi Məcəlləsinə uyğun olaraq vergi və maliyyə orqanları və onların vəzifəli şəxsləri tərəfindən öz səlahiyyətləri daxilində həyata keçirilir.",
    "D)	Vergi ödəyicisi və onun vəzifəli şəxsləri tərəfindən həyata keçirilir."
  ]
},
];
