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
  numb: 21,
  question: "Agent malların [işlərin, xidmətlərin] alıcısına [sifarişçisinə] elektron qaimə-faktura verə bilərmi?",
  answer: "B)	Agent ƏDV-nin məqsədləri üçün qeydiyyatda olduğu halda digər şəxsdən (vəkalət verəndən) qəbul etdiyi mallar (işlər, xidmətlər) üçün həmin malların (işlərin, xidmətlərin) alıcılarına Vergi Məcəlləsinin 71-1.5.5-ci maddəsində nəzərdə tutulan elektron qaimə-faktura verir",
  options: [
    "A)	Agent ƏDV-nin məqsədləri üçün qeydiyyatda olub-olmamasından asılı olmayaraq digər şəxsdən (vəkalət verəndən) qəbul etdiyi mallar (işlər, xidmətlər) üçün həmin malların (işlərin, xidmətlərin) alıcılarına elektron qaimə-faktura verə bilməz",
    "B)	Agent ƏDV-nin məqsədləri üçün qeydiyyatda olduğu halda digər şəxsdən (vəkalət verəndən) qəbul etdiyi mallar (işlər, xidmətlər) üçün həmin malların (işlərin, xidmətlərin) alıcılarına Vergi Məcəlləsinin 71-1.5.5-ci maddəsində nəzərdə tutulan elektron qaimə-faktura verir",
    "C)	Agent ƏDV-nin məqsədləri üçün qeydiyyatda olduğu halda digər şəxsdən (vəkalət verəndən) qəbul etdiyi mallar (işlər, xidmətlər) üçün həmin malların (işlərin, xidmətlərin) alıcılarına istənilən növ elektron qaimə-faktura verir",
    "D)	Agent ƏDV-nin məqsədləri üçün qeydiyyatda olub-olmamasından asılı olmayaraq digər şəxsdən (vəkalət verəndən) qəbul etdiyi mallar (işlər, xidmətlər) üçün həmin malların (işlərin, xidmətlərin) alıcılarına Vergi Məcəlləsinin 71-1.5.5-ci maddəsində nəzərdə tutulan elektron qaimə-faktura verir"
  ]
},
{
  numb: 22,
  question: "Agent [vəkalət alan] digər şəxsə [vəkalət verənə] elektron qaimə-faktura verə bilər-mi?",
  answer: "A)	Agent ƏDV məqsədləri üçün qeydiyyatdadırsa, göstərdiyi xidmətlərə görə verə bilər",
  options: [
    "A)	Agent ƏDV məqsədləri üçün qeydiyyatdadırsa, göstərdiyi xidmətlərə görə verə bilər",
    "B)	Agentin ƏDV məqsədləri üçün qeydiyyatından asılı olmayaraq verə bilər",
    "C)	Agentin ƏDV məqsədləri üçün qeydiyyatından asılı olmayaraq verə bilməz",
    "D)	Malların [işlərin, xidmətlərin] tərkibinə ƏDV daxil edilmişdirsə, elektron qaimə-faktura verə bilər"
  ]
},
{
  numb: 23,
  question: "Aşağıda göstərilənlərdən hansı doğrudur? 1.	malların (işlərin, xidmətlərin) alıcısı agentdən aldığı elektron qaimə-faktura əsasında digər şəxsə (vəkalət verənə) malların (işlərin, xidmətlərin) dəyərini nağdsız qaydada, ƏDV məbləğini ƏDV-nin depozit hesabına ödəməklə ödənilmiş ƏDV məbləğini əvəzləşdirir" 2.	agent ƏDV-nin məqsədləri üçün qeydiyyatda olmadıqda, alıcı tərəfindən alınmış malların (işlərin, xidmətlər) dəyəri digər şəxsin (vəkalət verənin) hesabına nağdsız qaydada, ƏDV məbləği ƏDV-nin depozit hesabına ödənilsədə, agent tərəfindən həmin malların (işlərin, xidmətlərin) alıcısına verilmiş elektron qaimə-faktura ödənilmiş ƏDV-nin əvəzləşdirilməsinə əsas vermir. 3.	agent ƏDV-nin məqsədləri üçün qeydiyyatda olmadıqda, ahcı tərəfindən alınmış malların (işlərin, xidmətlərin) dəyəri digər şəxsin (vəkalət verənin) hesabına nağdsız qaydada, ƏDV məbləği ƏDV-nin depozit hesabına ödənildiyi halda agent tərəfindən həmin malların (işlərin, xidmə) alıcısına verilmiş elektron qaimə-faktura ödənilmiş ƏDV-nin əvəzləşdirilməsinə əsas verir. 4.	agent ƏDV-nin məqsədləri üçün qeydiyyatda olduğu halda digər şəxsdən (vəkalət verəndən) qəbul etdiyi mallar (işlər, xidmətlər) üçün həmin malların (işlərin, xidmətlərin) alıcılarına Vergi Məcəlləsinin 71-1.5.5-ci maddəsində nəzərdə tutulan elektron qaimə-faktura verir. Həmin elektron qaimə-faktura ödənilmiş ƏDV-nin əvəzləşdirilməsinə əsas vermir 5.	agent ƏDV-nin məqsədləri üçün qeydiyyatda olduğu halda digər şəxsdən (vəkalət verəndən) qəbul etdiyi mallar (işlər, xidmətlər) üçün həmin malların (işlərin, xidmətlərin) alıcılarına Vergi Məcəlləsinin 71-1.5.5-ci maddəsində nəzərdə tutulan elektron qaimə-faktura verir. Həmin elektron qaimə-faktura Vergi Məcəlləsinin 175-ci maddəsinə uyğun olaraq ödənilmiş ƏDV-nin əvəzləşdirilməsinə əsas verir",
  answer: "D) 1,3,5",
  options: [
    "A) 1,2,5",
    "B) 2,3,4",
    "C) 1,3,4",
    "D) 1,3,5"
  ]
},
{
  numb: 24,
  question: "Agent üçün ƏDV üzrə vergitutma bazası necə müəyyənləşdirilir?",
  answer: "A)	digər şəxslərə malların təqdim edilməsi (işlərin görülməsi, xidmətlərin göstərilməsi) üzrə göstərdiyi xidmətlərin dəyəri agentin vergitutma bazasını təşkil edir",
  options: [
    "A)	Digər şəxslərə malların təqdim edilməsi (işlərin görülməsi, xidmətlərin göstərilməsi) üzrə göstərdiyi xidmətlərin dəyəri agentin vergitutma bazasını təşkil edir",
    "B)	Agentin təqdim etdiyi malların tam dəyəri onun vergitutma bazasını təşkil edir",
    "C)	Agentin təqdim etdiyi mallara görə ona ödənilən haqlar [mükafatlar] onun vergitutma bazasına aid edilmir.",
    "D)	Agent tərəfindən digər şəxslərə göstərilən xidmətlərə görə agent üçün vergitutma bazası yaranmır"
  ]
},
{
  numb: 25,
  question: "Agent üçün vergi tutulan əməliyyatların dəyəri necə müəyyənləşdirilir?",
  answer: "D)	Onun digər şəxsdən almalı olduğu (aldığı) haqdır (mükafatdır).",
  options: [
    "A)	Digər şəxslərə malların təqdim edilməsi (işlərin görülməsi, xidmətlərin göstərilməsi) üzrə göstərdiyi xidmətlərin ƏDV-siz dəyəri",
    "B)	Agentin təqdim etdiyi malların tam dəyəri",
    "C)	Digər şəxslərə malların təqdim edilməsi (işlərin görülməsi, xidmətlərin göstərilməsi) üzrə göstərdiyi xidmətlərin ƏDV-li dəyəri",
    "D)	Onun digər şəxsdən almalı olduğu (aldığı) haqdır (mükafatdır)."
  ]
},
{
  numb: 26,
  question: "Lotereyaların keçirilməsi şərtlərinə uyğun olaraq uduş fondu tam və ya qismən mallardan ibarət olduqda, lotereya keçirən şəxs tərəfindən uduş fondu üçün alınmış mallara görə ödənilmiş ƏDV-nin məbləği əvəzləşdirilirmi?",
  answer: "C)	Əvəzləşdirilmir",
  options: [
    "A)	Hər bir halda əvəzləşdirilir",
    "B)	Uduş fondu üçün alınmış mallara görə ƏDV ödənilmir",
    "C)	Əvəzləşdirilmir",
    "D)	ƏDV lotereyanı udmuş şəxs tərəfindən ödənilir"
  ]
},
{
  numb: 27,
  question: "Azərbaycan Respublikası ərazisindən digər ölkələrə keçən marşrutlar üzrə turist xidmətləri göstərən şəxslər üçün ƏDV üzrə vergitutma bazası nədir?",
  answer: "C)	Turist xidmətlərinin (Azərbaycan Respublikası ərazisindən kənarda göstərilən xidmətlər istisna olmaqla) dəyəri",
  options: [
    "A)	Turist xidmətlərinin dəyəri [komisyon haqları çıxılmadan]",
    "B)	Turist vərəqələrinin dəyəri",
    "C)	Turist xidmətlərinin (Azərbaycan Respublikası ərazisindən kənarda göstərilən xidmətlər istisna olmaqla) dəyəri",
    "D)	Turist xidmətlərinin (Azərbaycan Respublikası ərazisindən kənarda göstərilən xidmətlər də daxil olmaqla) dəyəri"
  ]
},
{
  numb: 28,
  question: "Turist vərəqələrini təqdim edən şəxslər (agentlər) üçün vergitutma bazası nədir?",
  answer: "A)	Təqdimetmə üzrə göstərilən xidmətlərin dəyəri",
  options: [
    "A)	Təqdimetmə üzrə göstərilən xidmətlərin dəyəri",
    "B)	Turist vərəqələrinin dəyəri",
    "C)	Turist xidmətlərinin (Azərbaycan Respublikası ərazisindən kənarda göstərilən xidmətlər istisna olmaqla) dəyəri ",
    "D)	Turist xidmətlərinin (Azərbaycan Respublikası ərazisindən kənarda göstərilən xidmətlər də daxil olmaqla) dəyəri"
  ]
},
{
  numb: 29,
  question: "Malların komisyon qaydada satışı zamanı komitent üçün ƏDV üzrə vergitutma bazası nədir?",
  answer: "A)	Komisyonçuya verilmiş malların dəyəri [komisyon haqları çıxılmadan]",
  options: [
    "A) Komisyonçuya verilmiş malların dəyəri [komisyon haqları çıxılmadan]",
    "B)	Komisyonçuya verilmiş malların dəyəri [komisyon haqları çıxılmaqla]",
    "C)	Komitentin müəyyən etdiyi satış qiyməti [ƏDV ilə birlikdə]",
    "D)	Komisyon qaydada malların satışından ƏDV hesablanmır"
  ]
},
{
  numb: 30,
  question: "Komisyonçunun komitentden aldığı elektron qaimə-faktura komisyonçuya ƏDV məbləğini əvəzləşdirmək hüququ verirmi?",
  answer: "C)	Komisyonçunun ƏDV ödəyicisi olub-olmamasından asılı olmayaraq əvəzləşdirmək hüququ vermir",
  options: [
    "A)	Komisyonçu ƏDV ödəyicisi olduqda əvəzləşdirmək hüququ verir",
    "B)	Komisyonçu ƏDV ödəyicisi olmadıqda əvəzləşdirmək hüququ verir",
    "C)	Komisyonçunun ƏDV ödəyicisi olub-olmamasından asılı olmayaraq əvəzləşdirmək hüququ vermir",
    "D)	Komissiya qaydasında malların satışı ƏDV-yə cəlb edilmir"
  ]
},
{
  numb: 31,
  question: "Komitent qeyri-rezident olduqda malların komissiya qaydasında satışı üzrə ƏDV məqsədləri üçün əməliyyatlar kimin apardığı əməliyyatlar hesab edilir?",
  answer: "D)	Agentin, yəni komisyonçunun apardığı əməliyyatlar",
  options: [
    "A)	Komitentin apardığı əməliyyatlar",
    "B)	Bu halda malların komisyon qaydada satışı ƏDV məqsədləri üçün əməliyyatlar hesab edilmir",
    "C)	Komitentlə komisyonçunun razılığı ilə müəyyənləşdirilir",
    "D)	Agentin, yəni komisyonçunun apardığı əməliyyatlar"
  ]
},
{
  numb: 32,
  question: "Komitent qeyri-rezident olduqda, ƏDV məqsədləri üçün komisyonçunun vergi tutulan əməliyyatının vaxtı hansı vaxt sayılır?",
  answer: "A)	Vergi Məcəlləsinin 166-cı maddəsi ilə müəyyən edilən vaxt",
  options: [
    "A)	Vergi Məcəlləsinin 166-cı maddəsi ilə müəyyən edilən vaxt",
    "B)	Malların komitent tərəfindən komisyonçuya göndərildiyi vaxt",
    "C)	Əməliyyatın baş verdiyi rübün son günü",
    "D)	Əməliyyatın baş verdiyi ayın son günü"
  ]
},
{
  numb: 33,
  question: "Komisyonçu idxal olunmuş mallara görə gömrük orqanlarına ƏDV ödəmişdirsə, bu ödəmənin yerinə yetirildiyini təsdiq edən sənədlər ƏDV ödəyicisi olan komisyonçuya həmin ƏDV məbləğinin əvəzləşdirmək hüququ verirmi?",
  answer: "B) Verir",
  options: [
    "A) Heç bir halda vermir",
    "B) Verir",
    "C)	Komitentlə komisyonçunun razılığı əsasında müəyyənləşdirilir",
    "D)	Əvəzləşdirməni ancaq komitent apara bilər"
  ]
},
{
  numb: 34,
  question: "Komisyon qaydasında idxal olunmuş mallar ƏDV ödəyicisi olan komisyonçc tərəfindən satılmadan tam və ya qismən komitentin tapşırığı ilə Azərbaycan Respublikas ərazisində başqa şəxsə verildikdə	",
  answer: "C)	Gömrük orqanlarına ödənilmiş ƏDV-nin əvəzləşdirilən məbləğinin malların satılmasa. hissəsinə düşən məbləği komisyonçu tərəfindən büdcəyə hesablanmalıdır.",
  options: [
    "A)	Gömrük orqanlarına ödənilmiş ƏDV-nin əvəzləşdirilən məbləğinin malların satıla. hissəsinə düşən məbləği komisyonçu tərəfindən büdcəyə hesablanmalıdır.",
    "B)	Komisyonçunun büdcə qarşısında ƏDV öhdəliyi yaranmır",
    "C)	Gömrük orqanlarına ödənilmiş ƏDV-nin əvəzləşdirilən məbləğinin malların satılmasa. hissəsinə düşən məbləği komisyonçu tərəfindən büdcəyə hesablanmalıdır.",
    "D)	ƏDV öhdəliyi komitentin üzərinə düşür"
  ]
},
{
  numb: 35,
  question: "ƏDV ödəyicisi olan şəxslər tərəfindən Vergi Məcəlləsinin 172-ci maddəsində göstərilən əməliyyatlardan başqa digər əməliyyatlar da həyata keçirildikdə	",
  answer: "A)	Həmin əməliyyatların uçotu ayrıca aparılır",
  options: [
    "A)	Həmin əməliyyatların uçotu ayrıca aparılır",
    "B)	Əməliyyatların uçotu birlikdə aparılır",
    "C)	Digər əməliyyatların uçotu aparılmır",
    "D)	Yalnız ƏDV-yə cəlb olunan əməliyyatların uçotu aparılır"
  ]
},
{
  numb: 36,
  question: "ƏDV-yə cəlb edilən malların idxalı zamanı ƏDV hansı faiz dərəcəsi ilə tutulur?",
  answer: "C) 18 faiz",
  options: [
    "A) sıfır [0] faiz",
    "B) 15 faiz",
    "C) 18 faiz",
    "D) 20 faiz"
  ]
},
{
  numb: 37,
  question: "ƏDV-nin dərəcəsi vergi tutulan əməliyyatin və idxalın dəyərinin neçə faizidir?",
  answer: "B)	Vergi tutulan əməliyyatın və idxalın dəyərinin 18 faizi",
  options: [
    "A)	Vergi tutulan əməliyyatın dəyərinin 10 faizi",
    "B)	Vergi tutulan əməliyyatın və idxalın dəyərinin 18 faizi",
    "C) Vergi tutulan idxalın 0 faizi",
    "D) Vergi tutulan idxalın 15 faizi"
  ]
},
{
  numb: 38,
  question: "Hesabat dövrü ərzində ƏDV-nin məqsədləri üçün vergi tutulan dövriyyə necə müəyyənləşdirilir?",
  answer: "C)	Vergi tutulan əməliyyatların ümumi dəyərinə görə",
  options: [
    "A)	Yalnız verilən elektron qaimə-fakturaları əsasında təqdim olunmuş malların [görülmüş işlərin və göstərilmiş xidmətlərin] dəyərinə görə",
    "B)	Təqdim olunmuş malların [görülmüş işlərin və göstərilmiş xidmətlərin] ahş və təqdimetmə qiymətləri arasındakı fərqə görə",
    "C)	Vergi tutulan əməliyyatların ümumi dəyərinə görə",
    "D Elektron qaimə-faktura vermədən aparılan əməliyyatların dəyərinə görə"
  ]
},
{
  numb: 39,
  question: "Hesabat dövrü ərzində vergi tutulan dövriyyədən büdcəyə ödənilməli olan ƏDV- nin məbləği necə müəyyənləşdirilir ?",
  answer: "B)	Vergi tutulan dövriyyəyə vergi dərəcəsinin tətbiqi ilə hesablanan verginin məbləği ilə əvəzləşdirilməli olan verginin məbləği arasında olan fərq kimi",
  options: [
    "A)	Vergi tutulan dövriyyəyə vergi dərəcəsinin tətbiqi ilə hesablanan verginin məbləği kimi",
    "B)	Vergi tutulan dövriyyəyə vergi dərəcəsinin tətbiqi ilə hesablanan verginin məbləği ilə əvəzləşdirilməli olan verginin məbləği arasında olan fərq kimi",
    "C)	Malların [işlərin və xidmətlərin] alış qiymətləri ile təqdimetmə qiymətləri arasındakı fərqdən hesablanan məbləği kimi",
    "D)	Vergi qanunvericiliyinə müvafiq olaraq əvəzləşdirilməli olan verginin məbləği kimi"
  ]
},
{
  numb: 40,
  question: "Azərbaycan Respublikası ərazisində istehsal olunan kənd təsərrüfatı məhsul¬larının pərakəndə satışı zamanı tətbiq olunmuş ticarət əlavəsindən ƏDV hesablamaq üçün hansı qaydaya əməl etməlidir?",
  answer: "A)	Satıcılar belə malların uçotunu ayrıca aparmalıdır.",
  options: [
    "A)	Satıcılar belə malların uçotunu ayrıca aparmalıdır.",
    "B)	Ödənişlər nağdsız olmalıdır",
    "C)	Alqı-satqı əməliyyatları yalnız elektron qaimə-faktura əsasında olmalıdır",
    "D)	Vergi Məcəlləsinin digər maddələrində göstərilən müddəalardan asılı olmayaraq həmin malların pərakəndə satışı zamanı ƏDV ümumi dövriyyədən hesablanır."
  ]
},
];
