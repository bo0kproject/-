// создание вопросов и ответов
let questions = [
    {
    numb: 1,
    question: "Aksiz nədir?",
    answer: "C)	Aksizli malların satış qiymətinə daxil edilən vergidir",
    options: [
      "A)	Aksizli malların gəlirdən çıxılmayan xərclərinə aid edilməyən və müəssisənin mənfə-ətindən ödənilən vergidir",
      "B)	Aksizli malların idxalına görə ödənilən xüsusi rüsumlardır",
      "C)	Aksizli malların satış qiymətinə daxil edilən vergidir",
      "D)	Aksizli malların maya dəyərinə daxil edilən vergidir"
    ]
  },
    {
    numb: 2,
    question: "Hansı mallar istisna olunmaqla Azərbaycan Respublikasının ərazisində istehsal edi-lən, yaxud idxal olunan aksizli mallardan aksiz tutulur?",
    answer: "A)	Vergidən azad edilən mallar",
    options: [
      "A)	Vergidən azad edilən mallar",
      "B)	ƏDV-yə sıfır (0) dərəcə ilə cəlb edilən mallar",
      "C)	Vergi ödəyicisinin müəyyənləşdirdiyi mallar",
      "D)	ƏDV-yə cəlb edilən mallar"
    ]
  },
    {
    numb: 3,
    question: "Aşağıda göstərilən şəxslərdən hansı aksiz vergisinin ödəyicisi deyildir?",
    answer: "D)	Aksizli malların satışı ilə məşğul olan şəxs",
    options: [
      "A)	Aksizli malları istehsal edən müəssisələr",
      "B)	Aksizli malları idxal edən şəxs",
      "C)	Aksizli malları istehsal edən fiziki şəxs",
      "D)	Aksizli malların satışı ilə məşğul olan şəxs"
    ]
  },
    {
    numb: 4,
    question: "4.	Sİfarişçinin göndərdiyi xammaldan Azərbaycan Respublikası ərazisində mallar isteh¬sal edildiyi hallarda aksizin ödəyicisi kimdir?",
    answer: "C)	Malların istehsalçısı [podratçı]",
    options: [
      "A)	Sifarişçi",
      "B)	Malların mülkiyyətçisi",
      "C)	Malların istehsalçısı [podratçı]",
      "D)	Malların son istehlakçıları"
    ]
  },
    {
    numb: 5,
    question: "Aksizli malların istehsalçısı və sifarişçisi qarşılıqlı surətdə asılı olan rezident şəxslər olduqda, aksizin ödəyicisi kimdir?",
    answer: "D)	Malın sahibi (sifarişçi)",
    options: [
      "A)	Sifarişçi",
      "B)	Malların mülkiyyətçisi",
      "C)	Malların istehsalçısı [podratçı]",
      "D)	Malın sahibi (sifarişçi)"
    ]
  },
  {
    numb: 6,
    question: "Aşağıdakı əməliyyatlardan hansı aksiz vergisinin məqsədləri üçün vergitutma obyek-tidir?",
    answer: "C)	Azərbaycan Respublikasının ərazisində istehsal edilən aksizli malların istehsal binasının hüdudlarından kənara buraxılması",
    options: [
      "A)	Malların Azərbaycan Respublikası ərazisinə müvəqqəti idxalı",
      "B)	Tranzitlə daşman malların təkrar ixracı",
      "C)	Azərbaycan Respublikasının ərazisində istehsal edilən aksizli malların istehsal binasının hüdudlarından kənara buraxılması",
      "D)	Tranzitlə daşınan malların ixracı"
    ]
  },
    {
    numb: 7,
    question: "İdxal malları üçün aksizin vergitutma obyekti aşağıdakılardan hansıdır?",
    answer: "A)	Gömrük Məcəlləsi uyğun olaraq aksizli malların gömrük xidmətinin nəzarətindən çıxması",
    options: [
      "A)	Gömrük Məcəlləsi uyğun olaraq aksizli malların gömrük xidmətinin nəzarətindən çıxması",
      "B)	Gömrük Məcəll uyğun olaraq aksizli malların gömrük xidmətinin nəzarətinə daxil olması",
      "C)	İdxal mallarının gömrük dəyəri",
      "D)	İdxal "
    ]
  },
  {
    numb: 8,
    question: "Aksizin vergitutma obyektinin məqsədləri üçün istehsal binasına aşağıdakılardan hansı daxildir?",
    answer: "A)	İstehsalın olduğu ərazidə yerləşən anbarlar, köməkçi anbar sahələri və digər oxşar binalar",
    options: [
      "A)	İstehsalın olduğu ərazidə yerləşən anbarlar, köməkçi anbar sahələri və digər oxşar binalar",
      "B)	İstehsalın olduğu ərazidə yerləşən anbarlar və ticarət obyektləri",
      "C)	Aksizli malları istehsal edən şəxslərin aksizli malları saxladığı anbarlar",
      "D)	İstehsalın olduğu ərazidən kənr yerləşən anbarlar, köməkçi anbar sahələri və digər binalar"
    ]
  },
  {
    numb: 9,
    question: "Azərbaycan Respublikası ərazisində istehsal olunan neft məhsulları üçün aksizlər üzrə vergi tutulan əməliyyatın məbləği dedikdə nə başa düşülür?",
    answer: "C)	Müştəridən ahnan və ya alınmah olan haqqın topdansatış bazar qiymətindən [aksiz, yol vergisi və ƏDV çıxılmaqla] aşağı olmayan məbləğ",
    options: [
      "A)	Müştəridən alman və ya alınmalı olan haqqın topdansatış bazar qiymətindən [ƏDV çıxılmadan] aşağı olmayan məbləğ",
      "B)	Müştəridən alınan və ya alınmah olan haqqın topdansatış bazar qiymətindən [ƏDV çıxılmaqla] aşağı olmayan məbləğ",
      "C)	Müştəridən ahnan və ya alınmah olan haqqın topdansatış bazar qiymətindən [aksiz, yol vergisi və ƏDV çıxılmaqla] aşağı olmayan məbləğ",
      "D)	Müştəridən alman və ya alınmalı olan haqqın topdansatış bazar qiymətindən [aksiz çıxılmaqla] aşağı olmayan məbləğ"
    ]
  },
  {
    numb: 10,
    question: "Neft məhsulları istisna olmaqla, Azərbaycan Respublikası ərazisində istehsal olunan digər aksizli mallar üçün vergi tutulan əməliyyat nə hesab olunur?",
    answer: "D)	İstehsal olunan malların miqdarı",
    options: [
      "A)	İstehsal olunan malların pərakəndəsatış bazar qiyməti",
      "B)	İstehsal olunan malların topdansatış bazar qiyməti",
      "C)	İstehsal olunan malların maya dəyəri",
      "D)	İstehsal olunan malların miqdarı"
    ]
  },
  {
    numb: 11,
    question: "İdxal malları üçün (platin, qızıl, ondan hazırlanmış zərgərlik və digər məişət məmu-latları, emal olunmuş, çeşidlənmiş, çərçivəyə salınmış və bərkidilmiş almaz istisna olmaqla) aksiz tutulan əməliyyatın məbləği dedikdə nə başa düşülür?",
    answer: "B)	Azərbaycan Respublikasının Gömrük Məcəlləsinə uyğun olaraq müəyyən edilən, lakin topdansatış bazar qiymətindən aşağı olmayan malların gömrük dəyəri [ƏDV və aksiz çıxılmaqla]",
    options: [
      "A)	Azərb. Respub. Gömrük Məcəlləsinə uyğun olaraq müəyyən edilən, lakin pərakəndəsatış bazar qiymətindən aşağı olmayan malların gömrük dəyəri [ƏDV və aksiz çıxılmaqla]",
      "B)	Azərbaycan Respublikasının Gömrük Məcəlləsinə uyğun olaraq müəyyən edilən, lakin topdansatış bazar qiymətindən aşağı olmayan malların gömrük dəyəri [ƏDV və aksiz çıxılmaqla]",
      "C)	Azərbaycan Respublikasının Vergi Məcəlləsinə uyğun olaraq müəyyən edilən, lakin topdansatış bazar qiymətindən aşağı olmayan malların satış dəyəri [ƏDV və aksiz çıxılmaqla]",
      "D)	Azərbaycan Respublikasının Gömrük Məcəlləsinə uyğun olaraq müəyyən edilən, lakin topdansatış bazar qiymətindən yuxarı olmayan malların gömrük dəyəri [ƏDV və aksiz çıxılmaqla]"
    ]
  },
  {
    numb: 12,
    question: "İdxal olunan avtobuslar, minik avtomobilləri, istirahət və ya idman üçün yaxtalar və bu məqsədlər üçün nəzərdə tutulan digər üzən vasitələrə görə vergi tutulan əməliyyat üçün aksiz üzrə vergi tutulan əməliyyatın məbləği nədir?",
    answer: "B)	Onların mühərrikinin həcmi",
    options: [
      "A)	Onların topdansatış bazar qiyməti ",
      "B)	Onların mühərrikinin həcmi",
      "C) İdxal olunan malların miqdarı",
      "D) Həmin vasitələrin gömrük dəyəri"
    ]
  },
  {
    numb: 13,
    question: "İdxal olunan platinə, qızıla, ondan hazırlanmış zərgərlik və digər məişət məmulat-larına görə vergi tutulan əməliyyat üçün aksiz üzrə vergi tutulan əməliyyatın məbləği nədir?",
    answer: "B)	Platinin hər qramı, qızıla, ondan hazırlanmış zərgərlik və digər məişət məmulatlarına görə - qızılın min çəki vahidindəki miqdarı",
    options: [
      "A)	Platin, qızıl və ondan hazırlanmış zərgərlik və digər məişət məmulatlarına görə - platin və qızılın min çəki vahidindəki miqdarı",
      "B)	Platinin hər qramı, qızıla, ondan hazırlanmış zərgərlik və digər məişət məmulatlarına görə - qızılın min çəki vahidindəki miqdarı",
      "C)	İdxal olunan malların miqdarı",
      "D) Həmin vasitələrin gÖmrÜK UƏYƏI İ"
    ]
  },
  {
    numb: 14,
    question: "Azərbaycan Respublikası ərazsində istehsal olunan aksizli mallar üçün vergi tutu¬lan əməliyyatın vaxtı necə müəyyən edilir?",
    answer: "C)	Malların istehsal binasının hüdudlarından kənara buraxıldığı vaxt",
    options: [
      "A)	Malların alıcıya verildiyi vaxt",
      "B)	Malların təqdim edildiyi vaxt",
      "C)	Malların istehsal binasının hüdudlarından kənara buraxıldığı vaxt",
      "D)	Malların istehsalının başa çatdığı vaxt"
    ]
  },
  {
    numb: 15,
    question: "Aksizli malların istehsalçısı tərəfindən malların istehsal binasının hüdudlarından kənara buraxılmasına görə vergi hesablanmışdırsa, həmin malların xarab olması, yaxud istifadə müddətinin bitməsi və ya digər səbəblərdən geri qaytarılması zamanı hesablanmış aksiz nə vaxt azaldılır?",
    answer: "D)	Malların qaytarıldığı hesabat dövründə",
    options: [
      "A)	Azaldılmır",
      "B)	Malların qaytarıldığı hesabat dövründə sonrakı ay",
      "C)	Malların istehsal binasının hüdudlarından kənara buraxıldığı dövrdə",
      "D)	Malların qaytarıldığı hesabat dövründə"
    ]
  },
  {
    numb: 16,
    question: "Aksizli malların istehsalçısı tərəfindən malların istehsal binasının hüdudlarından kənara özünə məxsus obyektlərə buraxılmasından sonra həmin malların xarab olması, yaxud istifadə müddətinin bitməsi səbəbindən geri qaytarılması zamanı vergi ödəyicisi vergi orqanına nə üçün müraciət edir?",
    answer: "D)	Həmin malların aktlaşdırılması və hesablanmış verginin azaldılması üçün",
    options: [
      "A)	Vergi orqanını məlumatlandırmaq üçün",
      "B)	Həmin malların məsul saxlamaya götürülməsi üçün",
      "C)	Həmin mallar barədə protokol yazılması üçün",
      "D)	Həmin malların aktlaşdırılması və hesablanmış verginin azaldılması üçün"
    ]
  },
  {
    numb: 17,
    question: "Müraciət edilmə tarixindən neçə gün müddətində vergi orqanının məsul şəxslərinin iştirakı ilə həmin mallar aktlaşdırılır?",
    answer: "A) 5 iş günü",
    options: [
      "A) 5 iş günü",
      "B) 5 gün",
      "C) 3 iş günü",
      "D) 10 gün"
    ]
  },
  {
    numb: 18,
    question: "Xarab olmuş, yaxud istifadə müddəti bitmiş məhsullara görə aksizin azaldılması nə vaxt həyata keçirilir?",
    answer: "A)	Müvafiq aktın tərtib edildiyi hesabat dövründə",
    options: [
      "A)	Müvafiq aktın tərtib edildiyi hesabat dövründə",
      "B)	Malların qaytarıldığı hesabat dövründə sonrakı ay",
      "C)	Müvafiq aktın tərtib edildiyi hesabat dövründən sonrakı ay",
      "D)	Vergi orqanının müvafiq qərarının verildiyi hesabat dövründə"
    ]
  },
  {
    numb: 19,
    question: "Vergi hesabatı təqdim edilərkən vergi orqanına nə təqdim edilir?",
    answer: "B)	Akt",
    options: [
      "A)	Qərar",
      "B)	Qkt",
      "C)	Protokol",
      "D)	Qrayış"
    ]
  },
  {
    numb: 20,
    question: "Hansı halda xarab olmuş, yaxud istifadə müddəti bitmiş məhsulların istehsalı zamanı əvəzləşdirilmiş aksizin büdcəyə hesablanması həyata keçirilir?",
    answer: "B)	Həmin məhsullar məhv edildikdə",
    options: [
      "A)	Heç bir halda",
      "B)	Həmin məhsullar məhv edildikdə",
      "C)	Vergi orqanı qərar verdikdə",
      "D)	Həmin mallar məsul saxlamaya verildikdə"
    ]
  },
  {
    numb: 21,
    question: "Aksizli malların idxalı zamanı aksiz tutulan əməliyyatın vaxtı hansı qanunvericilik aktına uyğun olaraq müəyyən edilir?",
    answer: "C) Gömrük Məcəlləsinə",
    options: [
      "A)	Vergi Məcəlləsinə",
      "B)	Mülki Məcəlləyə",
      "C) Gömrük Məcəlləsinə",
      "D) Mülki-Prosessual Məcəlləyə"
    ]
  },
  {
    numb: 22,
    question: "İdxal olunan aksizli mallar üçün vergi tutulan əməliyyatın vaxtı necə müəyyən edi-lir?",
    answer: "A) Aksizli malların gömrük xidmətinin nəzarətindən çıxdığı vaxt",
    options: [
      "A) Aksizli malların gömrük xidmətinin nəzarətindən çıxdığı vaxt",
      "B)	Aksizli malların gömrük xidmətinin nəzarətinə daxil olduğu vaxt",
      "C)	Aksizli malların satışa çıxarıldığı vaxt",
      "D)	Aksizli malların təqdim edildiyi vaxt"
    ]
  },
  {
    numb: 23,
    question: "Aksizli malların ixracı hansı dərəcə ilə vergiyə cəlb olunur?",
    answer: "D)	Sıfır [0] dərəcə ilə",
    options: [
      "A)	Vergidən azaddır",
      "B)	Gömrük orqanının müəyyən etdiyi dərəcə ilə",
      "C)	Qanunvericiliklə müəyyən edilən dərəcənin 50 faizi məbləğində",
      "D)	Sıfır [0] dərəcə ilə"
    ]
  },
  {
    numb: 24,
    question: "Fiziki şəxs fərdi istehlakı üçün neçə ədəd siqareti aksiz vergisi ödəmədən idxal edə bilər?",
    answer: "C) 200 ",
    options: [
      "A) 300",
      "B) 60",
      "C) 200",
      "D) Heç nə qədər"
    ]
  },
  {
    numb: 25,
    question: "Fiziki şəxs fərdi istehlakı üçün neçə litr alkoqollu içkini aksiz vergisi ödənilmədən idxal edə bilər?",
    answer: "C) 1,5 litr ",
    options: [
      "A) 7 litr",
      "B) 10 litr",
      "C) 1,5 litr",
      "D) 5 litr"
    ]
  },
  {
    numb: 26,
    question: "Fiziki şəxs fərdi istehlakı üçün neçə qram qızılı, ondan hazırlanım? zərgərlik və digər məişət məmulatlarının, emal olunmuş, çeşidlənmiş, çərçivəyə salınmış və bərkidilmiş neçə karat almazı aksiz vergisi ödənilmədən idxal edə bilər?",
    answer: "A)	20 qram qızıl, 0.5 karat almaz",
    options: [
      "A)	20 qram qızıl, 0.5 karat almaz",
      "B)	30 qram qızıl, 0.5 karat almaz",
      "C)	20 qram qızıl, 1 karat almaz",
      "D)	10 qram qızıl, 0.5 karat almaz"
    ]
  },
  {
    numb: 27,
    question: "Azərbaycan Respublikasına avtomobillərlə gələn şəxslər nə qədər yanacağı aksiz vergisi ödəmədən ölkəyə gətirə bilər?",
    answer: "A)	Həmin avtomobilin texniki pasportu ilə nəzərdə tutulmuş bakının həcmi qədər (bakın həcmi üçün məhdudiyyət yoxdur)",
    options: [
      "A)	Həmin avtomobilin texniki pasportu ilə nəzərdə tutulmuş bakının həcmi qədər (bakın həcmi üçün məhdudiyyət yoxdur)",
      "B)	Həmin avtomobilin texniki pasportu ilə nəzərdə tutulmuş bakının həcmi qədər (əgər bakın həcmi 40 litrdən çox deyilsə)",
      "C)	Həmin avtomobilin texniki pasportu ilə nəzərdə tutulmuş bakının həcmi qədər (əgər bakın həcmi 50 litrdən çox deyilsə)",
      "D)	Həmin avtomobilin texniki pasportu ilə nəzərdə tutulmuş bakının həcmi qədər (əgər bakın həcmi 60 litrdən çox deyilsə)"
    ]
  },
  {
    numb: 28,
    question: "Azərbaycan Respublikası ərazisindən tranzitlə daşınan aksizli mallar aksiz vergisi¬nə hansı qaydada cəlb olunur?",
    answer: "B)	Vergidən azaddır",
    options: [
      "A)	Sıfır [0] dərəcə ilə",
      "B)	Vergidən azaddı",
      "C)	Ümumi qaydada vergiyə cəlb olunur",
      "D)	Gömrük orqanının müəyyən etdiyi dərəcə ilə vergiyə cəlb olunur"
    ]
  },
  {
    numb: 29,
    question: "Azərbaycan Respublikası ərazisinə müvəqqəti idxal edilən mallar aksizə necə cəlb edilir?",
    answer: "B) Vergidən azaddır",
    options: [
      "A) Ümumi qaydada",
      "B) Vergidən azaddır",
      "C) Sıfır (0) dərəcə ilə",
      "D) Gömrük qanunvericiliyində nəzərdə tutulan qaydada"
    ]
  },
  {
    numb: 30,
    question: "Azərbaycan Respublikası Mərkəzi Bankının aktivlərində yerləşdirilmək üçün idxal olunan platin, qızıl və emal olunmuş, çeşidlənmiş, çərçivəyə salınmış və bərkidilmiş almaz, Azərbaycan Respublikası Dövlət Neft Fondunun aktivlərində yerləşdirilmək üçün idxal olunan qızıl aksizə necə cəlb edilir?",
    answer: "B) Vergidən azaddır",
    options: [
      "A) Ümumi qaydada",
      "B) Vergidən azaddır",
      "C) Sıfır (0) dərəcə ilə",
      "D) Gömrük qanunvericiliyində nəzərdə tutulan qaydada"
    ]
  },
  {
    numb: 31,
    question: "Fiziki şəxsin fərdi istehlakı üçün 1,5 litr alkoqollu içki və 200 ədəd siqaret idxal edi-lərkən aksizdən azadolmalar hansı halda tətbiq edilir?",
    answer: "A)	Gömrük rüsumlarından azadolmaların şərtlərinə əməl edilmiş olduqda",
    options: [
      "A)	Gömrük rüsumlarından azadolmaların şərtlərinə əməl edilmiş olduqda",
      "B)	Bütün hallarda",
      "C)	Əlavə dəyər vergisindən azadolmaların şərtlərinə əməl edilmiş olduqda",
      "D)	Nazirlər Kabinetinin sərəncamına əsasən"
    ]
  },
  {
    numb: 32,
    question: "Əgər gömrük rüsumu tutulması məqsədləri üçün idxal, rüsumun geri qaytarılması rejiminin təsiri altına düşürsə və ya azadolmanm şərtləri pozulduğu üçün gömrük rüsu¬munun ödənilməsi tələb edilirsə, həmin rejim aksizin tutulmasına da tətbiq olunurmu?",
    answer: "C) Tətbiq olunur",
    options: [
      "A) Tətbiq olunmur",
      "B) Müstəsna hallarda tətbiq olunur",
      "C) Tətbiq olunur",
      "D) Gömrük orqanının qərarından asılıdır"
    ]
  },
  {
    numb: 33,
    question: "Aksizli malları alan və bu malları vergi tutulan digər aksizli malların istehsalı üçün istifadə edən şəxs malları alarkən ödənilmiş aksiz məbləğini hansı qaydada əvəzləşdirir?",
    answer: "C)	Ödənilmiş məbləğ tam həcmdə əvəzləşdirilir",
    options: [
      "A)	Ödənilmiş məbləğ əvəzləşdirilmir",
      "B)	Ödənilmiş məbləğin 50 faizi əvəzləşdirilir",
      "C)	Ödənilmiş məbləğ tam həcmdə əvəzləşdirilir",
      "D)	Ödənilmiş məbləğin malm maya dəyərinə aid edilməyən hissəsi əvəzləşdirilir"
    ]
  },
  {
    numb: 34,
    question: "İdxal mallarına görə aksizlər nə vaxt əvəzləşdirilir?",
    answer: "A)	İdxalda aksizin ödənildiyini təsdiq edən müvafiq sənədlər vergi orqanına verildiyi zaman",
    options: [
      "A)	İdxalda aksizin ödənildiyini təsdiq edən müvafiq sənədlər vergi orqanına verildiyi zaman",
      "B)	İdxahn baş verdiyi aydan əvvəlki ay",
      "C)	İdxalı təsdiq edən müvafiq sənədlər vergi orqanına verildiyi aydan sonrakı ay",
      "D)	Ödənilən aksizlər əvəzləşdirilmir"
    ]
  },
  {
    numb: 35,
    question: "İstehsal ehtiyacları üçün aksizlərin əvəzləşdirilməsinə uyğun olaraq, xammal və materiallar idxal edildikdə, tutulmuş aksiz məbləği müvafiq sənədlər vergi orqanına veril-dikdən sonra neçə gün ərzində vergi ödəyicisinə qaytarılmalıdır?",
    answer: "C) 45 gün",
    options: [
      "A) 15 gün",
      "B) 30 gün",
      "C) 45 gün",
      "D) 10 gün"
    ]
  },
  {
    numb: 36,
    question: "Aksizli malları göstərin. 1. spirtli içkilər 2. tütün məmulatları 3. qənnadı məmulatları 4.	neft məhsulları 5. zinət əşyaları 6. idxal olunan xəz-dəri məmulatları",
    answer: "C) 1,2,4,6",
    options: [
      "A) 1,2,3,6",
      "B) 2,3,4,6",
      "C) 1,2,4,6",
      "D) 3,4,5,6"
    ]
  },
  {
    numb: 37,
    question: "Aşağıdakı mallardan hansı aksizli mallara aid deyildir?",
    answer: "D) Maya",
    options: [
      "A) İçməli spirt",
      "B) Neft məhsulları",
      "C) Tütün məmulatları ",
      "D) Maya"
    ]
  },
  {
    numb: 38,
    question: "Aksizli malları göstərin. 1.	birdəfəlik istifadə üçün elektron siqaret, qəlyan və onların əvəzediciləri 2. avtobuslar (sıxılmış qazla işləyən avtobuslar istisna olmaqla) 3. qənnadı məmulatları 4. energetik içkilər 5. zinət əşyaları 6. elektron siqaretlər üçün maye",
    answer: "C) 1,2,4,6",
    options: [
      "A) 1,2,3,6",
      "B) 2,3,4,6",
      "C) 1,2,4,6",
      "D) 3,4,5,6"
    ]
  },
  {
    numb: 39,
    question: "Azərbaycan Respublikasına idxal edilən aksizli mallara (avtobuslar, minik avto-mobilləri, istirahət və ya idman üçün yaxtalar və bu məqsədlər üçün nəzərdə tutulan digər üzən vasitələr, habelə platin, qızıl, ondan hazırlanmış zərgərlik və digər məişət məmu-latlan, emal olunmuş, çeşidlənmiş, çərçivəyə salınmış və bərkidilmiş almaz, xəz-dəri məmulatları istisna olmaqla) aksizlərin dərəcələri hansı dövlət orqanı tərəfindən müəyyən edilir?",
    answer: "D) Nazirlər Kabineti",
    options: [
      "A) Maliyyə Nazirliyi",
      "B) İqtisadiyyat Nazirliyi",
      "C) Dövlət Vergi Xidməti",
      "D) Nazirlər Kabineti"
    ]
  },
  {
    numb: 40,
    question: "Azərb Resp istehsal olunan içməli spirtə tətbiq olunan aksizin dərəcəs nə qədərdir?",
    answer: "C) Hər litrinə 4,0 manat",
    options: [
      "A) Hər litrinə 1 manat",
      "B) Hər litrinə 12,5 manat",
      "C) Hər litrinə 4,0 manat",
      "D) Hər litrinə 0,5 manat"
    ]
  },
  ];
