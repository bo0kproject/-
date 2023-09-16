// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "İşin və xidmətin alıcısı, lotereya (o cümlədən virtual lotereyaların), idman mərc oyunlarının, digər yarış və müsabiqənin iştirakçısı vergi ödəyicisi olduqda ƏDV hansı qaydada hesablanır?",
  answer: "B)	İşin və xidmətin alıcısı, lotereya, digər yarış və müsabiqənin iştirakçısı vergi ödəyicisi olduqda ƏDV-ni həmin şəxs özü hesablayır və büdcəyə ödədikdən sonra Vergi Məcəlləsinin tələblərinə riayət etmək şərti ilə ödənilmiş məbləği əvəzləşdirə bilir.",
  options: [
    "A)	ƏDV-dən azaddır",
    "B)	İşin və xidmətin alıcısı, lotereya, digər yarış və müsabiqənin iştirakçısı vergi ödəyicisi olduqda ƏDV-ni həmin şəxs özü hesablayır və büdcəyə ödədikdən sonra Vergi Məcəlləsinin tələblərinə riayət etmək şərti ilə ödənilmiş məbləği əvəzləşdirə bilir.",
    "C)	İşin və xidmətin ahcısı, lotereya, digər yarış və müsabiqənin iştirakçısı vergi ödəyicisi olduqda ƏDV-ni həmin şəxs özü hesablayır və büdcəyə ödədikdən sonra Vergi Məcəlləsinin tələblərinə riayət etmək şərti ilə ödənilmiş məbləği əvəzləşdirə bilmir.",
    "D)	Sıfır (0) dərəcə ilə hesablayır"
  ]
},
  {
  numb: 2,
  question: "İşin və xidmətin ahcısı, lotereya (o cümlədən virtual lotereyaların), idman mərc oyunlarının, digər yarış və müsabiqənin iştirakçısı vergi ödəyicisi olmadıqda ƏDV hansı qaydada hesablanır?",
  answer: "D)	İşin və xidmətin alıcısı, lotereya, digər yarış və müsabiqənin iştirakçısı vergi ödəyicisi olmadıqda isə ödənişi aparan yerli bank və ya xarici bankın respublikadakı filialı ƏDV-ni hesablayaraq alıcının vəsaiti hesabına büdcəyə ödəyir, tutulmuş ƏDV isə bank və ya filial tərəfindən əvəzləşdirilmir.",
  options: [
    "A)	ƏDV-dən azaddır",
    "B)	İşin və xidmətin ahcısı, lotereya, digər yarış və müsabiqənin iştirakçısı vergi ödəyicisi olduqda ƏDV-ni həmin şəxs özü hesablayır və büdcəyə ödədikdən sonra Vergi Məcəlləsinin tələblərinə riayət etmək şərti ilə ödənilmiş məbləği əvəzləşdirə bilir.",
    "C)	İşin və xidmətin ahcısı, lotereya, digər yarış və müsabiqənin iştirakçısı vergi ödəyicisi olduqda ƏDV-ni həmin şəxs özü hesablayır və büdcəyə ödədikdən sonra Vergi Məcəlləsinin tələblərinə riayət etmək şərti ilə ödənilmiş məbləği əvəzləşdirə bilmir.",
    "D)	İşin və xidmətin alıcısı, lotereya, digər yarış və müsabiqənin iştirakçısı vergi ödəyicisi olmadıqda isə ödənişi aparan yerli bank və ya xarici bankın respublikadakı filialı ƏDV-ni hesablayaraq alıcının vəsaiti hesabına büdcəyə ödəyir, tutulmuş ƏDV isə bank və ya filial tərəfindən əvəzləşdirilmir."
  ]
},
  {
  numb: 3,
  question: "İşlərin görülməsi Və xidmətlərin göstərilməsi zamanı qeyri-rezidentə ödənilən məb- ləğə ƏDV necə tətbiq edilir ?",
  answer: "B)	Ödənilməli olan məbləğə [ƏDV nəzərə alınmadan] 18 faiz vergi dərəcəsini tətbiq etməklə",
  options: [
    "A)	Ödənilməli olan məbləğə [ƏDV ilə birlikdə] sıfır [0] faiz vergi dərəcəsini tətbiq etməklə",
    "B)	Ödənilməli olan məbləğə [ƏDV nəzərə alınmadan] 18 faiz vergi dərəcəsini tətbiq etməklə",
    "C)	Qeyri-rezidentə ƏDV hesablanmır",
    "D)	Ödənilməli olan məbləğə [ƏDV ilə birlikdə] 5 faiz vergi dərəcəsini tətbiq etməklə"
  ]
},
  {
  numb: 4,
  question: "ƏDV-nin məqsədləri üçün qeydiyyata alınmayan qeyri-rezident Azərbaycan Respublikası ərazisində xidmət göstərirsə və ya iş görürsə, ƏDV-yə hansı dərəcə ilə cəlb olunur?",
  answer: "B) 18 faiz",
  options: [
    "A) sıfır [0] dərəcə ilə",
    "B) 18 faiz",
    "C) Vergidən azaddır",
    "D) 10 faiz"
  ]
},
  {
  numb: 5,
  question: "Vergi agenti ƏDV-nin məqsədləri üçün qeydiyyatdan keçməmişdirsə, (sadələş-dirilmiş vergi ödəyicisidirsə) qeyri - rezidentə ödənilən məbləğə ƏDV-ni necə hesabla¬malıdır?",
  answer: "A)	Qeyri-rezidentə ödənilməli olan məbləğə (ƏDV nəzərə alınmadan) 18 faiz dərəcəsi tətbiq etməklə",
  options: [
    "A)	Qeyri-rezidentə ödənilməli olan məbləğə (ƏDV nəzərə alınmadan) 18 faiz dərəcəsi tətbiq etməklə",
    "B)	Qeyri-rezidentə ödənilməli olan məbləğə (ƏDV nəzərə alınmadan) sıfır (0) faiz dərəcəsi tətbiq etməklə",
    "C)	Vergi agenti ƏDV məqsədləri üçün qeydiyyatdan keçməmişdirsə, ƏDV hesablanmır",
    "D)	Vergi agenti ƏDV məqsədləri üçün qeydiyyatdan keçməmişdirsə, qeyri -rezidentə ödənilən məbləğə sadələşdirilmiş vergi hesablayır"
  ]
},
{
  numb: 6,
  question: "Vergi agenti ƏDV-nin məqsədləri üçün qeydiyyatdan keçmişdirsə, qeyri- rezidentdən hesablanan ƏDV nə vaxt büdcəyə ödənilir?",
  answer: "C)	Ödəmənin verildiyi ay üçün ƏDV-nin bəyannaməsi verilərkən",
  options: [
    "A)	Ödəmə verildiyi gün ərzində",
    "B)	Ödəmə verildiyi gündən sonrakı 5 gün ərzində ",
    "C)	Ödəmənin verildiyi ay üçün ƏDV-nin bəyannaməsi verilərkən",
    "D)	Ödəmə verildiyi gündən sonrakı 7 gün ərzində"
  ]
},
  {
  numb: 7,
  question: "Vergi agenti ƏDV-nin məqsədləri üçün qeydiyyatdan keçmişdirsə, qeyri-rezidentə hesablanan verginin ödənilməsini təsdiq edən ödəmə sənədi vergi agentinə ƏDV-nin məbləğini əvəzləşdirmək hüququnu verirmi?",
  answer: "A)	ödənişin formasından asılı olmayaraq əvəzləşdirmək hüququ verir",
  options: [
    "A)	Ödənişin formasından asılı olmayaraq əvəzləşdirmək hüququ verir",
    "B)	Ödənişin formasından asılı olmayaraq əvəzləşdirmək hüququ vermir",
    "C)	Ödəniş nağd qaydada aparıldıqda vermir",
    "D)	Elektron qaimə faktura əldə edildikdə verir"
  ]
},
{
  numb: 8,
  question: "Vergi agenti ƏDV-nin məqsədləri üçün qeydiyyatdan keçməmişdirsə, o qeyri- rezidentdən hesablanan ƏDV-ni nə vaxt büdcəyə ödəməyə borcludur?",
  answer: "D)	Ödəmə verildiyi gündən sonrakı 7 gün ərzində",
  options: [    
    "A)	Ödəmə verildiyi gün ərzində",
    "B)	Ödəmə verildiyi gündən sonrakı 5 gün ərzində ",
    "C)	Ödəmənin verildiyi ay üçün ƏDV-nin bəyannaməsi verilərkən",
    "D)	Ödəmə verildiyi gündən sonrakı 7 gün ərzində"
  ]
},
{
  numb: 9,
  question: "Qeyri-rezidentə məxsus əmlak vergi agentinə icarəyə verilmək üçün idxal edildikdə, hansı şərt daxilində vergi agenti idxaldan ödənilmiş vergidən ƏDV-nin məbləğinin əvəzləşdirilməsini tələb edə bilər?",
  answer: "C)	Əmlakın sahibi olan qeyri-rezidentin icazəsi olduqda",
  options: [
    "A)	Vergi orqanının icazəsi olduqda",
    "B)	Gömrük orqanının icazəsi olduqda",
    "C)	Əmlakın sahibi olan qeyri-rezidentin icazəsi olduqda",
    "D)	Maliyyə orqanının icazəsi olduqda"
  ]
},
{
  numb: 10,
  question: "Malların idxalı zamanı ƏDV üzrə vergi tutulan əməliyyatın aparıldığı vaxt hansı vaxt sayılır ?",
  answer: "B)	Gömrük qanunvericiliyinə uyğun olaraq gömrük rüsumlarının tutulduğu vaxt",
  options: [
    "A)	İdxal mallarının təqdim edildiyi vaxt",
    "B)	Gömrük qanunvericiliyinə uyğun olaraq gömrük rüsumlarının tutulduğu vaxt",
    "C)	Gömrük xidməti nəzarətindən çıxdıqdan sonrakı ayın 1-ci günü",
    "D)	Mallar idxal ediləndən 5 gün sonra"
  ]
},
{
  numb: 11,
  question: "Əgər idxal olunan mallar gömrük rüsumlarından azad edilirsə, ƏDV tutulan əmə-liyyatın vaxtı necə müəyyənləşdirilir?",
  answer: "B)	Malların gömrük xidməti nəzarətindən çıxdığı vaxt",
  options: [
    "A)	İdxal mallarının təqdim edildiyi vaxt",
    "B)	Malların gömrük xidməti nəzarətindən çıxdığı vaxt",
    "C)	Malların gömrük xidməti nəzarətindən çıxdıqdan sonrakı ayın 1 -ci günü",
    "D)	Mallar idxal ediləndən 5 gün sonra"
  ]
},
{
  numb: 12,
  question: "Aşağıdakılardan hansı dorudur?",
  answer: "A)	Mallar göndərilməsinə, işlər görülməsinə və ya xidmətlər göstərilməsinə yardımçı xarak¬ter daşıyan mallar göndərilməsi, işlər görülməsi, xidmətlər göstərilməsi onların bir hissəsi sayılır",
  options: [
    "A)	Mallar göndərilməsinə, işlər görülməsinə və ya xidmətlər göstərilməsinə yardımçı xarak¬ter daşıyan mallar göndərilməsi, işlər görülməsi, xidmətlər göstərilməsi onların bir hissəsi sayılır",
    "B)	Mallar göndərilməsinə, işlər görülməsinə və ya xidmətlər göstərilməsinə yardımçı xarak¬ter daşıyan mallar göndərilməsi, işlər görülməsi, xidmətlər göstərilməsi onların bir hissəsi sayılmır",
    "C)	Ayrı-ayrı əməliyyatlar kimi baxılır",
    "D)	Əməliyyatlara ayrılmır"
  ]
},
{
  numb: 13,
  question: "Aşağıdakılardan hansı doğru olmayanlara aid deyil?",
  answer: "B)	İxracatçının malların idxalına yardımçı xarakter daşıyan işlər görməsi və ya xidmətlər göstərməsi malların idxalının bir hissəsi sayılır",
  options: [
    "A)	İxracatçının malların idxalına yardımçı xarakter daşıyan işlər görməsi və ya xidmətlər göstərməsi malların idxalının bir hissəsi sayılmır",
    "B)	İxracatçının malların idxalına yardımçı xarakter daşıyan işlər görməsi və ya xidmətlər göstərməsi malların idxalının bir hissəsi sayılır",
    "C)	Ayrı-ayrı əməliyyatlar kimi baxıhr",
    "D)	İxracatçının malların idxalına yardımçı xarakter daşıyan işlər görməsi və ya xidmətlər göstərməsi malların ixracının bir hissəsi sayılır"
  ]
},
{
  numb: 14,
  question: "Müstəqil elementlərdən ibarət əməliyyat bölünərkən vergiyə cəlb edilən və ƏDV- dən azad olan əməliyyatlara aynlırsa, onlara necə baxılır?",
  answer: "C)	Ayrı-ayrı əməliyyatlar kimi baxılır",
  options: [
    "A)	Bir əməliyyat kimi baxılır",
    "B)	Yalnız vergi orqanının razılığı ilə bir əməliyyatlar kimi baxılır",
    "C)	Ayrı-ayrı əməliyyatlar kimi baxılır",
    "D)	Əməliyyatlara ayrılmır"
  ]
},
{
  numb: 15,
  question: "ƏDV məqsədləri üçün digər şəxsin (vəkalət verən) agenti (vəkalət alan) olan şəxs tərəfindən mallar göndərilməsi, işlər görülməsi və ya xidmətlər göstərilməsi kimin həyata keçirdiyi əməliyyat sayılır?",
  answer: "A)	Vəkalət verənin ",
  options: [
    "A)	Vəkalət verənin ",
    "B)	Vəkalət alanm ",
    "C) Hər ikisinin",
    "D) Vəkalət verənlə vəkalət alanın razılığı ilə müəyyənləşdirilir"
  ]
},
{
  numb: 16,
  question: "Rezident olmayan və Azərbaycan Respublikasında ƏDV-nin ödəyicisi kimi qeydiyyatdan keçməmiş şəxsin rezident agentinin Azərbaycan Respublikasına mallar göndərməsi ƏDV-nin məqsədləri üçün kim tərəfindən həyata keçirilən əməliyyat sayılır?",
  answer: "B)	Rezident olmayan və Azərbaycan Respublikasında ƏDV-nin ödəyicisi kimi qeydiyyatdan keçməmiş şəxsin agenti tərəfindən",
  options: [
    "A)	Rezident olmayan və Azərbaycan Respublikasında ƏDV-nin ödəyicisi kimi qeydiyyatdan keçməmiş şəxs tərəfindən",
    "B)	Rezident olmayan və Azərbaycan Respublikasında ƏDV-nin ödəyicisi kimi qeydiyyatdan keçməmiş şəxsin agenti tərəfindən",
    "C)	Hər ikisi tərəfindən",
    "D) Belə əməliyyatlara icazə verilmir"
  ]
},
{
  numb: 17,
  question: "Agent ƏDV üzrə vergi ödəyicisi olduqda, agentin digər şəxsdən [vəkalət verəndən) aldığı elektron qaimə-faktura ona ƏDV məbləğini əvəzləşdirmək hüququ verirmi?",
  answer: "B)	Digər şəxsdən alınmış elektron qaimə-faktura agentə ƏDV əvəzləşdirmək hüququ vermir",
  options: [
    "A)	Elektron qaimə-faktura əldə edildikdə əvəzləşdirmək hüququ verir",
    "B)	Digər şəxsdən alınmış elektron qaimə-faktura agentə ƏDV əvəzləşdirmək hüququ vermir",
    "C)	Elektron qaimə-faktura üzrə ödəniş nağdsız qaydada aparıldıqd əvəzləşdirmək hüququ verir",
    "D)	Agentin heç bir halda ƏDV əvəzləşdirmək hüququ yoxdur"
  ]
},
{
  numb: 18,
  question: "Aşağıdakılardan hansı doğrudur?",
  answer: "D)	Agent tərəfindən göstərilən xidmətlərə görə ona ödənilən haqlar (mükafatlar) agentin vergi tutulan əməliyyatlarına daxil edilməklə yanaşı, digər şəxsin gəlirdən çıxılan xərclərinə aid edilir",
  options: [
    "A)	Agent tərəfindən göstərilən xidmətlərə görə ona ödənilən haqların (mükafatların) 50 faizi agentin vergi tutulan əməliyyatlarına daxil edilməklə yanaşı, digər şəxsin gəlirdən çıxılan xərclərinə aid edilir",
    "B)	Agent tərəfindən göstərilən xidmətlərə görə ona ödənilən haqlar (mükafatlar) agentin vergi tutulan əməliyyatlarına daxil edilir, lakin digər şəxsin gəlirdən çıxılan xərclərinə aid edilmir",
    "C)	Agent tərəfindən göstərilən xidmətlərə görə ona ödənilən haqlar (mükafatlar) agentin vergi tutulan əməliyyatlarına daxil edilmir, lakin digər şəxsin gəlirdən çıxılan xərclərinə aid edilir",
    "D)	Agent tərəfindən göstərilən xidmətlərə görə ona ödənilən haqlar (mükafatlar) agentin vergi tutulan əməliyyatlarına daxil edilməklə yanaşı, digər şəxsin gəlirdən çıxılan xərclərinə aid edilir"
  ]
},
{
  numb: 19,
  question: "Digər şəxs (vəkalət verən) üçün vergi tutulan əməliyyatların vaxtı necə müəyyən edilir?",
  answer: "A)	Vergi Məcəlləsinin 166-cı maddəsi ilə",
  options: [
    "A)	Vergi Məcəlləsinin 166-cı maddəsi ilə",
    "B)	Mallar (işlər, xidmətlər) agentə tam verildikdən sonra müəyyən edilir",
    "C)	Mal alanın müəyyən etdiyi qaydada",
    "D)	Agent tərəfindən sərbəst müəyyən edilir"
  ]
},
{
  numb: 20,
  question: "Digər şəxs (vəkalət verən) tərəfindən malların agentə təhvil verilməsi hansı sənəd ilə rəsmiləşdirilir?",
  answer: "B)	Bu məqsəd üçün nəzərdə tutulan elektron qaimə-faktura ilə",
  options: [
    "A)	İstənilən növ elektron qaimə-faktura ilə",
    "B)	Bu məqsəd üçün nəzərdə tutulan elektron qaimə-faktura ilə",
    "C)	Qəbzlə",
    "D)	Qaimə-faktura ilə"
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
];
