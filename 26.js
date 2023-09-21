// создание вопросов и ответов
let questions = [
    {
    numb: 1,
    question: "Mədən vergisi nəyə görə tutulur?",
    answer: "C)	Azərbaycan Respublikasının ərazisində, o cümlədən Xəzər dənizinin (gölünün) Azərbay-can Respublikasına mənsub olan sektorunda faydalı qazıntıların çıxarılmasına görə",
    options: [
      "1A)	Azərbaycan Respublikasının ərazisində, o cümlədən Xəzər dənizinin (gölünün) Azərbay-can Respublikasına mənsub olan sektorunda yalnız neft hasilatına görə",
      "B)	Azərbaycan Respublikasının ərazisində, o cümlədən Xəzər dənizinin (gölünün) Azərbay-can Respublikasına mənsub olan sektorunda yalnız qaz hasilatına görə",
      "C)	Azərbaycan Respublikasının ərazisində, o cümlədən Xəzər dənizinin (gölünün) Azərbay-can Respublikasına mənsub olan sektorunda faydalı qazıntıların çıxarılmasına görə",
      "D)	Yalnız Xəzər dənizinin (gölünün) Azərbaycan Respublikasına mənsub olan sektorunda faydalı qazıntıların çıxarılmasına görə"
    ]
  },
  {
    numb: 2,
    question: "Mədən vergisinin ödəyiciləri kimlərdir?",
    answer: "A)	Azərbaycan Respublikasının ərazisində yerin təkindən faydalı qazıntıları çıxaran fiziki şəxslər və müəssisələr",
    options: [
      "A)	Azərbaycan Respublikasının ərazisində yerin təkindən faydalı qazıntıları çıxaran fiziki şəxslər və müəssisələr",
      "B)	Azərbaycan Respublikasının ərazisində yerin təkindən faydalı qazıntıları çıxaran yalnız fiziki şəxslər",
      "C)	Azərbaycan Respublikasının hüdudlarından kənarda yerin təkindən faydalı qazıntıları çıxaran müəssisələr",
      "D)	Azərbaycan Respublikasının hüdudlarından kənarda yerin təkindən faydalı qazıntıları çıxaran fiziki şəxslər və müəssisələr"
    ]
  },
  {
    numb: 3,
    question: "Mədən vergisinin vergitutma obyekti nədir?",
    answer: "A)	Azərbaycan Respublikasının ərazisində (Xəzər dənizinin (gölünün) Azərbaycan Respublikasına mənsub olan sektoru da daxil olmaqla) yerin təkindən çıxarılan faydalı qazıntılar",
    options: [
      "A)	Azərbaycan Respublikasının ərazisində (Xəzər dənizinin (gölünün) Azərbaycan Respublikasına mənsub olan sektoru da daxil olmaqla) yerin təkindən çıxarılan faydalı qazıntılar",
      "B)	Azərbaycan Respublikasının xammal şəklində idxal etdiyi faydalı qazıntılar",
      "C)	Yalnız Xəzər dənizinin (gölünün) Azərbaycan Respublikasına mənsub olan sektoru da daxil olmaqla yerin təkindən çıxarılan faydalı qazıntılar",
      "D)	Yalnız Azərbaycan Respublikasının ərazisində yerin təkindən çıxarılan faydalı qazıntılar"
    ]
  },
  {
    numb: 4,
    question: "Mədən vergisinin dərəcələri hansı normativ sənədlə müəyyən edilir?",
    answer: "C)	Vergi Məcəlləsi ilə",
    options: [
      "A)	Nazirlər Kabinetinin qərarı ilə",
      "B)	Vergilər Nazirinin əmri ilə",
      "C)	Vergi Məcəlləsi ilə",
      "D)	Maliyyə Nazirliyinin əmri ilə"
    ]
  },
  {
    numb: 5,
    question: "Aşağıda göstərilən faydalı qazıntılardan hansılara mədən vergisinin dərəcəsi onların topdansatış qiymətinə tətbiq edilir? 1)	xam neft 2)	təbii qaz 3)	filiz faydalı qazıntılar 4)	qeyri-filiz faydalı qazıntılar",
    answer: "A) 1,2,3",
    options: [
      "A) 1,2,3",
      "B) 1,2,4",
      "C) 2,3,4",
      "D) 1,3,4"
    ]
  },
  {
    numb: 6,
    question: "Xam neft üçün mədən vergisi onun topdansatış qiymətinin neçə faizidir?",
    answer: "D) 26 %",
    options: [
      "A) 15%",
      "B) 25 %",
      "C) 20%",
      "D) 26 %"
    ]
  },
  {
    numb: 7,
    question: "Təbii qaz üçün mədən vergisi onun topdansatış qiymətinin neçə faizidir?",
    answer: "A) 20%",
    options: [
      "A) 20%",
      "B) 18%",
      "C) 15%",
      "D) 10%"
    ]
  },
  {
    numb: 8,
    question: "Filiz faydalı qazıntılar (bütün növ metallar) üçün mədən vergisi onların topdansatış qiymətinin neçə faizidir?",
    answer: "B) 3%",
    options: [
      "A) 2%",
      "B) 3%",
      "C) 1%",
      "D) 0,5%"
    ]
  },
  {
    numb: 9,
    question: "Yerin təkindən çıxarılan xam neft, təbii qaz və filiz faydalı qazıntılarına mədən ver-gisi hansı göstəriciyə tətbiq edilməklə müəyyənləşdirilir?",
    answer: "D)	Faydalı qazıntıların topdansatış qiymətinə",
    options: [
      "A)	Faydalı qazıntıların bazar qiymətinə",
      "B)	Faydalı qazıntıların tənzimlənən qiymətlərə",
      "C)	Faydalı qazıntıların pərakəndə satış qiymətinə",
      "D)	faydalı qazıntıların topdansatış qiymətinə"
    ]
  },
  {
    numb: 10,
    question: "Yerin təkindən çıxarılan seolitə görə mədən vergisinin dərəcəsi nə qədər təşkil edir?",
    answer: "B)	Hər kub metr üçün 1 manatx",
    options: [
      "A)	Hər kub metr üçün 0,5 manat",
      "B)	Hər kub metr üçün 1 manat",
      "C) Hər kub metr üçün 4 manat",
      "D) Hər kub metr üçün 6 manat"
    ]
  },
  {
    numb: 11,
    question: "Yerin təkindən çıxarılan barıta görə mədən vergisinin dərəcəsi nə qədər təşkil edir?",
    answer: "B) Hər kub metr üçün 1 manat",
    options: [
      "A) Hər kub metr üçün 0,5 manat",
      "B) Hər kub metr üçün 1 manat",
      "C) Hər kub metr üçün 4 manat",
      "D) Hər kub metr üçün 6 manat"
    ]
  },
  {
    numb: 12,
    question: "Yerin təkindən çıxarılan mişar daşlarına görə mədən vergisinin dərəcəsi nə qədər təşkil edir?",
    answer: "D) Hər kub metr üçün 2,0 manat",
    options: [
      "A)	Hər kub metr üçün 0,5 manat",
      "B)	Hər kub metr üçün 1 manat",
      "C) Hər kub metr üçün 4 manat",
      "D) Hər kub metr üçün 2,0 manat"
    ]
  },
  {
    numb: 13,
    question: "Yerin təkindən çıxarılan çınqıl xammalına görə mədən vergisinin dərəcəsi nə qədər təşkil edir?",
    answer: "B)	Hər kub metr üçün 1 manat",
    options: [
      "A)	Hər kub metr üçün 6 manat",
      "B)	Hər kub metr üçün 1 manat",
      "C) Hər kub metr üçün 4 manat",
      "D) Hər kub metr üçün 0,5 manat"
    ]
  },
  {
    numb: 14,
    question: "Yüngül doldurucular (keramzit, aqloporit) istehsalı üçün gillərə görə mədən vergi-sinin dərəcəsi nə qədər təşkil edir?",
    answer: "C) Hər kub metr üçün 1 manat",
    options: [
      "A)	Hər kub metr üçün 0,5 manat",
      "B)	Hər kub metr üçün 4 manat",
      "C) Hər kub metr üçün 1 manat",
      "D) Hər kub metr üçün 6 manat"
    ]
  },
  {
    numb: 15,
    question: "Yerin təkindən çıxarılan bentonit gillərinə görə mədən vergisinin dərəcəsi nə qədər təşkil edir?",
    answer: "B)	Hər kub metr üçün 1 manat",
    options: [
      "A)	Hər kub metr üçün 0,5 manat",
      "B)	Hər kub metr üçün 1 manat",
      "C) Hər kub metr üçün 4 manat",
      "D) Hər kub metr üçün 6 manat"
    ]
  },
  {
    numb: 16,
    question: "Yerin təkindən çıxarılan kərpic-kirəmit gillərinə görə mədən vergisinin dərəcəsi nə qədər təşkil edir?",
    answer: "D) Hər kub metr üçün 1 manat",
    options: [
      "A)	Hər kub metr üçün 6 manat",
      "B)	Hər kub metr üçün 0,5 manat",
      "C) Hər kub metr üçün 4 manat",
      "D) Hər kub metr üçün 1 manat"
    ]
  },
  {
    numb: 17,
    question: "Yerin təkindən çıxarılan kvars qumlarına görə mədən vergisinin dərəcəsi nə qədər təşkil edir?",
    answer: "B)	Hər kub metr üçün 1 manat",
    options: [
      "A)	Hər kub metr üçün 0,5 manat",
      "B)	Hər kub metr üçün 1 manat",
      "C) Hər kub metr üçün 4 manat",
      "D) Hər kub metr üçün 6 manat"
    ]
  },
  {
    numb: 18,
    question: "Yerin təkindən çıxarılan tikinti qumlarına görə mədən vergisinin dərəcəsi nə qədər təşkil edir?",
    answer: "A)	Hər kub metr üçün 1 manat",
    options: [
      "A)	Hər kub metr üçün 1 manat",
      "B)	Hər kub metr üçün 0,5 manat",
      "C) Hər kub metr üçün 4 manat",
      "D) Hər kub metr üçün 6 manat"
    ]
  },
  {
    numb: 19,
    question: "Yerin təkindən çıxarılan sement xammalına (əhəng daşı, meqrel, gil, vulkan külü) görə mədən vergisinin dərəcəsi nə qədər təşkil edir?",
    answer: "B)	Hər kub metr üçün 1 manat",
    options: [
      "A)	Hər kub metr üçün 0,5% manat",
      "B)	Hər kub metr üçün 1 manat",
      "C) Hər kub metr üçün 4 manat",
      "D) Hər kub metr üçün 6 manat"
    ]
  },
  {
    numb: 20,
    question: "Yerin təkindən çıxarılan gips və gəcə görə mədən vergisinin dərəcəsi nə qədər təşkil edir?",
    answer: "C) Hər kub metr üçün 1 manat",
    options: [
      "A)	Hər kub metr üçün 0,5 manat",
      "B)	Hər kub metr üçün 2 manat",
      "C) Hər kub metr üçün 1 manat",
      "D) Hər kub metr üçün 3 manat"
    ]
  },
  {
    numb: 21,
    question: "Yerin təkindən çıxarılan üzlük daşlarına (mərmər, qabbro, tuftlar, travertin, mər- mərləşdirilmiş əhəng daşı) görə mədən vergisinin dərəcəsi nə qədər təşkil edir?",
    answer: "C) Hər kub metr üçün 1 manat",
    options: [
      "A)	Hər kub metr üçün 0,5 manat",
      "B)	Hər kub metr üçün 2 manat",
      "C) Hər kub metr üçün 1 manat",
      "D) Hər kub metr üçün 3 manat"
    ]
  },
  {
    numb: 22,
    question: "Yerin təkindən çıxarılan qiymətli və yanmqiymətli bəzək daşlarına görə mədən ver-gisinin dərəcəsi nə qədər təşkil edir?",
    answer: "A)	Hər kub metr üçün 6 manat",
    options: [
      "A)	Hər kub metr üçün 6 manat",
      "B)	Hər kub metr üçün 1 manat",
      "C) Hər kub metr üçün 0,5 manat",
      "D) Hər kub metr üçün 4 manat"
    ]
  },
  {
    numb: 23,
    question: "23.	Yerin təkindən çıxarılan duza görə mədən vergisinin dərəcəsi nə qədər təşkil edir?",
    answer: "A)	Hər kub metr üçün 6 manat",
    options: [
      "A)	Hər kub metr üçün 6 manat",
      "B)	Hər kub metr üçün 1 manat",
      "C) Hər kub metr üçün 0,5 manat",
      "D) Hər kub metr üçün 4 manat"
    ]
  },
  {
    numb: 24,
    question: "Yerin təkindən çıxarılan yodlu-bromlu sulara görə mədən vergisinin dərəcəsi nə qədər təşkil edir?",
    answer: "C) Hər kub metr üçün 0,04 manat",
    options: [
      "A)	Hər kub metr üçün 0,05 manat",
      "B)	Hər kub metr üçün 0,02 manat",
      "C) Hər kub metr üçün 0,04 manat",
      "D) Hər kub metr üçün 0,6 manat"
    ]
  },
  {
    numb: 25,
    question: "Vergitutma məqsədləri üçün mədən vergisinin dərəcəsi aşağıda göstərilən hansı fay-dalı qazıntıların fiziki həcminə [kub metrinə] tətbiq edilir? 1)	xam neft	2) bütün növ filiz faydalı qazıntı materialları 3) mineral sular 4) yodlu-bromlu sular 5] mişar daşlan",
    answer: "A) 3,4,5",
    options: [
      "A) 3,4,5",
      "B) 1,2,4",
      "C) 1,3,5",
      "D) 2,3,4"
    ]
  },
  {
    numb: 26,
    question: "Yerin təkindən çıxarılan mineral sulara görə mədən vergisinin dərəcəsi nə qədər təşkil edir?",
    answer: "A)	Hər kub metr üçün 10 manat",
    options: [
      "A)	Hər kub metr üçün 10 manat",
      "B)	Hər kub metr üçün 1 manat",
      "C) Hər kub metr üçün 4 manat",
      "D) Hər kub metr üçün 6 manat"
    ]
  },
  {
    numb: 27,
    question: "Vergitutma məsədləri üçün mədən vergisinin dərəcəsi hansı göstəricyə tətbiq edilir?",
    answer: "A)	faydah qazıntının növündən asılı olaraq onun topdansatış qiymətinə və ya fiziki həcminə",
    options: [
      "A)	Faydah qazıntının növündən asılı olaraq onun topdansatış qiymətinə və ya fiziki həcminə",
      "B)	Faydah qazıntının növündən asılı olaraq bazar qiymətinə",
      "C)	Faydalı qazıntının maya dəyərinə ",
      "D)	Faydalı qazıntının növündən asılı olaraq istehsal maya dəyərinə"
    ]
  },
  {
    numb: 28,
    question: "Hesabat ayı üçün mədən vergisinin məbləği nə vaxt büdcəyə ödənilir?",
    answer: "C)	Faydah qazıntının çıxarıldığı aydan sonrakı aym 20-dən gec olmayaraq",
    options: [
      "A)	Faydalı qazıntının çıxarıldığı aydan sonrakı aym 15-dən gec olmayaraq",
      "B)	Faydah qazıntının çıxarıldığı aydan sonrakı aym 10-dan gec olmayaraq",
      "C)	Faydah qazıntının çıxarıldığı aydan sonrakı aym 20-dən gec olmayaraq",
      "D)	Faydalı qazıntının çıxarıldığı aydan sonrakı ayın 25-dən gec olmayaraq"
    ]
  },
  {
    numb: 29,
    question: "Mədən vergisinin bəyannaməsi nə vaxt vergi orqanına təqdim edilir?",
    answer: "A)	Hesabat ayından sonrakı aym 20-dən gec olmayaraq",
    options: [
      "A)	hesabat ayından sonrakı aym 20-dən gec olmayaraq",
      "B)	hesabat ayının 20-dən gec olmayaraq",
      "C)	hesabat ayından sonrakı ayın 25-dən gec olmayaraq",
      "D)	hesabat ayından sonrakı aym 10-dan gec olmayaraq"
    ]
  },
  {
    numb: 30,
    question: "Mədən vergisinin ödəyiciləri mədən vergisinin hesabatını hansı orqana təqdim edir?",
    answer: "B)	Yerləşdiyi ərazinin vergi orqanma",
    options: [
      "A)	Yerləşdiyi ərazinin maliyyə orqanına",
      "B)	Yerləşdiyi ərazinin vergi orqanma",
      "C) Yerləşdiyi ərazinin bələdiyyəsinə",
      "D) Yerləşdiyi ərazinin icra hakimiyyətinə"
    ]
  },
  {
    numb: 31,
    question: "Hesablanmış mədən vergisinin məbləği hansı qaydada gəlirdən çıxılmalara aid edi-lir?",
    answer: "A)	Vergi Məcəlləsi ilə məhdudlaşdırılmayan gəlirdən çıxılmalara aid edilir",
    options: [
      "A)	Vergi Məcəlləsi ilə məhdudlaşdırılmayan gəlirdən çıxılmalara aid edilir",
      "B)	Vergi Məcəlləsi ilə məhdudlaşdırılan gəlirdən çıxılmalara aid edilir",
      "C)	Gəlirdən çıxılmır",
      "D)	Vergi ödəyicisinin sərəncamında qalan xalis vəsait hesabma aid edilir"
    ]
  },
  {
    numb: 32,
    question: "Mədən vergisi hansı büdcəyə ödənilir?",
    answer: "C) Dövlət büdcəsinə",
    options: [
      "A)	Maliyyə orqanlarının xüsusi hesablarına",
      "B)	Yerli büdcəyə [bələdiyyə büdcəsinə]",
      "C) Dövlət büdcəsinə",
      "D) Düdcədənkənar dövlət fondlarına"
    ]
  },
  {
    numb: 33,
    question: "Xam neftin və qazın hasilatı zamanı mədən vergisi hesablanarkən texnoloji proseslə əlaqədar quyuya geri vurulan neftin və qazın normativləri hansı dövlət, təsisatı tərəfindən müəyyən edilir?",
    answer: "C) Nazirlər Kabineti",
    options: [
      "A) Dövlət Vergi Xidməti",
      "B) Dövlət Neft Fondu",
      "C) Nazirlər Kabineti",
      "D) Maliyyə Nazirliyi"
    ]
  },
  {
    numb: 34,
    question: "Neft və qaz istisna olmaqla, digər faydalı qazıntılara görə vergi ödəyicisi tərəfindən təqvim ili üzrə hesablanmış mədən vergisinin məbləği həmin faydalı qazıntıların çıxarıldığı torpaq sahələrinə görə onun tərəfindən həmin təqvim ili üzrə hesablanmış və ödənilmiş torpaq vergisiə münasibətdə necə azaldılır?",
    answer: "B)	Hesablanmış və ödənilmiş torpaq vergisinin məbləğindən çox olmamaqla",
    options: [
      "A)	hesablanmış və ödənilmiş torpaq vergisinin 50 faizi miqdarında",
      "B)	hesablanmış və ödənilmiş torpaq vergisinin məbləğindən çox olmamaqla",
      "C)	hesablanmış və ödənilmiş torpaq vergisinin 75 faizi miqdarında",
      "D)	azaldılmır"
    ]
  },
  {
    numb: 35,
    question: "Mədən vergisinin azaldılması nə vaxt həyata keçirilir?",
    answer: "B)	Təqvim ilinin sonuncu hesabat ayında",
    options: [
      "A)	Hesabat ilindən sonrakı ilin yanvar ayının 31 -dən gec olmayaraq",
      "B)	Təqvim ilinin sonuncu hesabat ayında",
      "C)	Müvafiq məlumat formasının təqdim edildiyi aydan sonrakı ayda",
      "D)	Hesabat ilindən sonrakı ilin mart ayının 31 -dək"
    ]
  },
  ];
