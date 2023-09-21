// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Aşağıda göstərilən şəxslərdən kimlər yol vergisinin ödəyiciləridirlər?",
  answer: "A)	Azərbaycan Respublikasının ərazisinə daxil olan və həmin ərazidən sərnişin və yük daşınması üçün istifadə edən avtonəqliyyat vasitələrinin sahibləri olan qeyri-rezident şəxslər, habelə Azərbaycan Respublikasının ərazisində avtomobil benzininin, dizel yanacağının və maye qazın istehsalı və ya idxalı ilə məşğul olan şəxslər yol vergisinin ödəyiciləridir.",
  options: [
    "A)	Azərbaycan Respublikasının ərazisinə daxil olan və həmin ərazidən sərnişin və yük daşınması üçün istifadə edən avtonəqliyyat vasitələrinin sahibləri olan qeyri-rezident şəxslər, habelə Azərbaycan Respublikasının ərazisində avtomobil benzininin, dizel yanacağının və maye qazın istehsalı və ya idxalı ilə məşğul olan şəxslər yol vergisinin ödəyiciləridir.",
    "B)	Azərbaycan Respublikasının ərazisində mülkiyyətində və ya istifadəsində minik avtomobilləri, avtobuslar olan şəxslər",
    "C)	Azərbaycan Respublikasının ərazisində mülkiyyətində traktorlar, kombayn və yığım maşınları olan şəxslər",
    "D)	Azərbaycan Respublikasının ərazisində istifadəsində kənd təsərrüfatı məhsullarının istehsalında istifadə olunan kənd təsərrüfatı texnikası olan şəxslər"
  ]
},
{
  numb: 2,
  question: "Aşağıdakılardan hansı yol vergisinin ödəyicisidir?",
  answer: "D)	Azərbaycan Respublikasının ərazisinə daxil olan və həmin ərazidən sərnişin və yük daşınması üçün istifadə edən avtonəqliyyat vasitələrinin sahibləri olan qeyri-rezident şəxslər",
  options: [
    "A)	Azərbaycan Respublikasının ərazisinə daxil olan və həmin ərazidən sərnişin və yük daşınması üçün istifadə edən avtonəqliyyat vasitələrinin sahibləri olan rezident şəxslər",
    "B)	Azərbaycan respublikasının ərazisində mülkiyyətində və ya istifadəsində avtonəqliyyat vasitələri olan hüquqi şəxslər",
    "C)	Azərbaycan Respublikasının ərazisində mülkiyyətində və ya istifadəsində avtonəqliyyat vasitələri olan fiziki şəxslər",
    "D)	Azərbaycan Respublikasının ərazisinə daxil olan və həmin ərazidən sərnişin və yük daşınması üçün istifadə edən avtonəqliyyat vasitələrinin sahibləri olan qeyri-rezident şəxslər"
  ]
},
{
  numb: 3,
  question: "Aşağıdakılardan hansı yol vergisinin vergitutma obyekti deyildir?",
  answer: "C)	Azərbaycan Respublikasının ərazisinə idxal edilən daş kömür",
  options: [
    "A)	Azərbaycan Respublikasının ərazisinə idxal edilən avtomobil benzini",
    "B)	Azərbaycan Respublikasının ərazisinə idxal edilən dizel yanacağı",
    "C)	Azərbaycan Respublikasının ərazisinə idxal edilən daş kömür",
    "D)	Azərbaycan Respublikasının ərazisində istehsal edilən maye qaz"
  ]
},
{
  numb: 4,
  question: "Azərbaycan Respublikasının ərazisində istehsal edilərək daxili istehlaka yönəldilən (topdan satılan) avtomobil benzininə, dizel yanacağına və maye qaza görə hesablanmış yol vergisinə nəzarəti hansı dövlət qurumu həyata keçirir",
  answer: "B) Dövlət vergi orqanları",
  options: [
    "A) Gömrük orqanları ",
    "B) Dövlət vergi orqanları",
    "C) Tarif Şurası",
    "D) Energetika Nazirliyi "
  ]
},
{
  numb: 5,
  question: "Aşağıda göstərilənlərdən hansılar yol vergisinin vergitutma obyektidir?",
  answer: "D) Azərbaycan Respublikasının ərazisinə daxil olan və Azərbaycan Respublikasının ərazisini tərk edən zaman yol vergisinə cəlb olunmalı olan xarici dövlətlərin avtonəqliyyat vasitələri, habelə Azərbaycan Respublikasının ərazisində istehsal edilərək daxili istehlaka yönəldilən (topdan satılan) və Azərbaycan Respublikasının ərazisinə idxal edilən avtomobil benzini, dizel yanacağı və maye qaz yol vergisinin vergitutma obyektidir.",
  options: [
    "A)	Azərbaycan Respublikas ərazisinə daxil olan xarici dövlətlərin avtonəqliyyat vasitələri",
    "B)	Azərbaycan Respublikasının hüdudlarından kənarda rezident fiziki şəxslərin mülkiy-yətində olan avtonəqliyyat vasitələri",
    "C)	Azərbaycan Respublikasının ərazisində şəxslərin mülkiyyətində və ya istifadəsində olan avtonəqliyyat vasitələri",
    "D) Azərbaycan Respublikasının ərazisinə daxil olan və Azərbaycan Respublikasının ərazisini tərk edən zaman yol vergisinə cəlb olunmalı olan xarici dövlətlərin avtonəqliyyat vasitələri, habelə Azərbaycan Respublikasının ərazisində istehsal edilərək daxili istehlaka yönəldilən (topdan satılan) və Azərbaycan Respublikasının ərazisinə idxal edilən avtomobil benzini, dizel yanacağı və maye qaz yol vergisinin vergitutma obyektidir."
  ]
},
{
  numb: 6,
  question: "Müəssisənin mülkiyyətində və ya istifadəsində olan avtomobil nəqliyyatı vasitələrinə görə illik yol vergisi hesablanarkən vergi dərəcəsi hansı göstəriciyə tətbiq olunur?",
  answer: "D)	Müəssisələrin mülkiyyətində və ya istifadəsində olan avtonəqliyyat vasitələrindən yol ver¬gisi hesablanmır.",
  options: [
    "A)	Avtonəqliyyat vasitəsinin ilin sonuna olan qalıq dəyərinə ",
    "B)	Avtonəqliyyat vasitəsinin bazar qiymətinə",
    "C)	Avtonəqliyyat vasitəsinin oxlarının sayma",
    "D)	Müəssisələrin mülkiyyətində və ya istifadəsində olan avtonəqliyyat vasitələrindən yol ver¬gisi hesablanmır."
  ]
},
{
  numb: 7,
  question: "Hansı amillər nəzərə alınaraq avtonəqliyyat vasitələrinə görə yol vergisinin dərəcəsi müəyyən edilir? 1)	avtonəqliyyat vasitələrinin növündən, oturacaqların sayından 2)	Azərbaycan Respublikasının ərazisində şəxslərin mülkiyyətində və ya istifadəsində olan avtonəqliyyat vasitələrinə görə yol vergisi hesablanmır. 3)	avtonəqliyyat vasitələrinin oxlarının sayından və Azərbaycan Respublikasının ərazisində qaldığı müddətdən 4)	heç bir amil nəzərə alınmır",
  answer: "A) 2,3",
  options: [
    "A) 2,3",
    "B) 1,4",
    "C) 2,3,4",
    "D) 1,2,4"
  ]
},
{
  numb: 8,
  question: "Xarici dövlətlərin avtonəqliyyat vasitələrindən Vergi Məcəlləsində müəyyən edilmiş vergi hansı dövlət orqanı tərəfindən tutulur?",
  answer: "A)	Gömrük orqanları",
  options: [
    "A)	Gömrük orqanları",
    "B)	Dövlət vergi orqanları",
    "C) Maliyyə orqanları",
    "D) Dövlət sərhəd xidməti"
  ]
},
{
  numb: 9,
  question: "Xarici dövlətlərin Azərbaycan Respublikasının ərazisinə daxil olan və Vergi Məcəl-ləsinin 211.1.1-ci maddəsinə uyğun olaraq Azərbaycan Respublikasının ərazisini tərk edən zaman yol vergisinə cəlb olunmalı hallarda minik avtomobilləri üçün yol vergisi hansı göstə-ricilər əsasında hesablanır?",
  answer: "A)	Mühərriklərinin həcmindən və Azərbaycan Res. ərazisində qaldığı müddətdən asılı olaraq",
  options: [
    "A)	Mühərriklərinin həcmindən və Azərbaycan Res. ərazisində qaldığı müddətdən asılı olaraq",
    "B)	Mühərriklərinin həcmindən və minik avtomobilinin markasından asılı olaraq",
    "C)	Mühərriklərinin həcmindən və Azərbay. Res. ərazisində qət edilən məsafədən asılı olaraq",
    "D)	Mühərriklərinin həcmindən, Azərbaycan Respublikasının ərazisində qaldığı müddətdən və Azərbaycan Respublikası ərazisində qət edilən məsafədən asılı olaraq"
  ]
},
{
  numb: 10,
  question: "Azərbaycan Respublikasının ərazisinə daxil olan və bir ay müddətində qalan, mühərrikinin həcmi 2.000 kub santimetrədək olan xarici dövlətlərin minik avtomobilləri üçün yol vergisinin məbləği nə qədərdir?",
  answer: "B) 15 ABŞ dolları",
  options: [
    "A) 20 ABŞ dolları",
    "B) 15 ABŞ dolları",
    "C) 40 ABŞ dolları",
    "D) 20 ABŞ dolları"
  ]
},
{
  numb: 11,
  question: "Azərbaycan Respublikasının ərazisinə daxil olan və üç ay müddətində qalan, mühərrikinin həcmi 2.000 kub santimetrdən 4.000 kub santimetrədək olan xarici dövlətlərin minik avtomobilləri üçün yol vergisinin məbləği nə qədərdir?",
  answer: "C) 40 ABŞ dolları",
  options: [
    "A) 20 ABŞ dolları",
    "B) 15 ABŞ dolları",
    "C) 40 ABŞ dolları",
    "D) 20 ABŞ dolları"
  ]
},
{
  numb: 12,
  question: "Azərbaycan Respublikasının ərazisinə daxil olan və bir il müddətində qalan, mühərrikinin həcmi 2.000 kub santimetrdən 4.000 kub santimetrədək olan xarici dövlətlərin minik avtomobilləri üçün yol vergisinin məbləği nə qədərdir?",
  answer: "D) 80 ABŞ dolları",
  options: [
    "A) 40 ABŞ dolları",
    "B) 20 ABŞ dolları",
    "C) 120 ABŞ dolları",
    "D) 80 ABŞ dolları"
  ]
},
{
  numb: 13,
  question: "Azərbaycan Respublikasının ərazisinə daxil olan və üç ay müddətində qalan, mühərrikinin həcmi 4.000 kub santimetrdən çox olan xarici dövlətlərin minik avtomobilləri üçün yol vergisinin məbləği nə qədərdir?",
  answer: "C) 60 ABŞ dolları",
  options: [
    "A) 80 ABŞ dolları",
    "B) 65 ABŞ dolları",
    "C) 60 ABŞ dolları",
    "D) 120 ABŞ dolları"
  ]
},
{
  numb: 14,
  question: "Azərbaycan Respublikasının ərazisinə daxil olan və bir il müddətində qalan, mühərrikinin həcmi 4.000 kub santimetrdən çox olan xarici dövlətlərin minik avtomobilləri üçün yol vergisinin məbləği nə qədərdir?",
  answer: "D) 120 ABŞ dolları",
  options: [
    "A) 80 ABŞ dolları",
    "B) 65 ABŞ dolları",
    "C) 60 ABŞ dolları",
    "D) 120 ABŞ dolları"
  ]
},
{
  numb: 15,
  question: "Xarici dövlətlərin Azərbaycan Respublikasının ərazisinə daxil olan və Vergi Məcəl-ləsinin 211.1.1-ci maddəsinə uyğun olaraq Azərbaycan Respublikasının ərazisini tərk edən zaman yol vergisinə cəlb olunmalı hallarda avtobuslar üçün yol vergisi hansı göstəricilər əsasında hesablanır?",
  answer: "D)	Oturacaq yerlərinin sayından və Azərbaycan Respublikasının ərazisində qaldığı müddət-dən asılı olaraq",
  options: [
    "A)	Mühərriklərinin həcmindən və Azərb. Resp. ərazisində qaldığı müddətdən asılı olaraq",
    "B)	Mühərriklərinin həcmindən və avtomobilinin markas ından asılı olaraq",
    "C)	Oturacaq yerlərinin sayından və Azərb. Resp. ərazisində qət edilən məsafədən asılı olaraq",
    "D)	Oturacaq yerlərinin sayından və Azərbaycan Respublikasının ərazisində qaldığı müddət-dən asılı olaraq"
  ]
},
{
  numb: 16,
  question: "Azərbaycan Respublikasının ərazisinə daxil olan və bir həftə müddətində qalan, oturacaq yerlərinin sayı 12-dək olan xarici dövlətlərin avtobusları üçün yol vergisinin məbləği nə qədərdir?",
  answer: "D) 30 ABŞ dolları",
  options: [
    "A) 50 ABŞ dolları",
    "B) 60 ABŞ dolları",
    "C) 45 ABŞ dolları",
    "D) 30 ABŞ dolları"
  ]
},
{
  numb: 17,
  question: "Azərbaycan Respublikasının ərazisinə daxil olan və bir ay müddətində qalan, oturacaq yerlərinin sayı 12-dək olan xarici dövlətlərin avtobusları üçün yol vergisinin məbləği nə qədərdir?",
  answer: "B) 100 ABŞ dolları",
  options: [
    "A) 70 ABŞ dolları",
    "B) 100 ABŞ dolları",
    "C) 120 ABŞ dolları",
    "D) 90 ABŞ dolları"
  ]
},
{
  numb: 18,
  question: "Azərbaycan Respublikasının ərazisinə daxil olan və üç ay müddətində qalan, oturacaq yerlərinin sayı 13-dən 30-dək olan xarici dövlətlərin avtobusları üçün yol vergisinin məbləği nə qədərdir?",
  answer: "C) 400 ABŞ dolları",
  options: [
    "A) 250 ABŞ dolları",
    "B) 150 ABŞ dolları",
    "C) 400 ABŞ dolları",
    "D) 300 ABŞ dolları"
  ]
},
{
  numb: 19,
  question: "Azərbaycan Res ərazisinə daxil olan və bir il müddətində qalan, oturacaq yerlərinin sayı 13-dən 30-dək olan xarici dövlətlərin avtobusları üçün yol vergisinin məblə nə qədərdir?",
  answer: "D) 1400 ABŞ dolları",
  options: [
    "A) 750 ABŞ dolları",
    "B) 900 ABŞ dolları",
    "C) 1250 ABŞ dolları",
    "D) 1400 ABŞ dolları"
  ]
},
{
  numb: 20,
  question: "Azərbaycan Respublikasının ərazisinə daxil olan və bir il müddətində qalan, oturacaq yerlərinin sayı 31 və çox olan xarici dövlətlərin avtobusları üçün yol vergisinin məbləği nə qədərdir?",
  answer: "B) 1750 ABŞ dolları",
  options: [
    "A) 750 ABŞ dolları",
    "B) 1750 ABŞ dolları",
    "C) 2250 ABŞ dolları",
    "D) 1450 ABŞ dolları"
  ]
},
{
  numb: 21,
  question: "Oturacaq yerlərinin sayı 31 və çox olan Azərbaycan Respublikasının ərazisinə daxil olan xarici dövlətlərin avtobusları üçün ölkə ərazisində qaldıqları 1 günə görə hansı məbləğdə yol vergisi ödəyirlər?",
  answer: "B) 25 ABŞ dolları",
  options: [
    "A) 30 ABŞ dolları",
    "B) 25 ABŞ dolları",
    "C) 40 ABŞ dolları",
    "D) 20 ABŞ dolları"
  ]
},
{
  numb: 22,
  question: "Oturacaq yerlərinin sayı 31 və çox olan Azərbaycan Respublikasının ərazisinə daxil olan xarici dövlətlərin avtobusları üçün ölkə ərazisində qaldıqları 1 həftəyədək olan müddətə görə hansı məbləğdə yol vergisi ödəyirlər?",
  answer: "C) 50 ABŞ dolları",
  options: [
    "A) 40 ABŞ dolları",
    "B) 45 ABŞ dolları",
    "C) 50 ABŞ dolları",
    "D) 60 ABŞ dolları"
  ]
},
{
  numb: 23,
  question: "Xarici dövlətlərin Azərbaycan Respublikasının ərazisinə daxil olan və Vergi Məcəl-ləsinin 211.1.1-ci maddəsinə uyğun olaraq Azərbaycan Respublikasının ərazisini tərk edən zaman yol vergisinə cəlb olunmalı hallarda yük avtomobilləri, qoşqulu və yarımqoşqulu avtonəqliyyat vasitələri üçün yol vergisi hansı göstəricilər əsasında hesablanır?",
  answer: "D)	Oxların sayından və Azərbaycan Resp ərazisində qaldığı müddətdən asılı olaraq",
  options: [
    "A)	Mühərriklərinin həcmindən və Azərbaycan Resp ərazisində qaldığı müddətdən asılı olaraq",
    "B)	Mühərriklərinin həcmindən və avtomobilinin markasından asılı olaraq",
    "C)	Oxların sayından və Azərbaycan Resp ərazisində qət edilən məsafədən asılı olaraq",
    "D)	Oxların sayından və Azərbaycan Resp ərazisində qaldığı müddətdən asılı olaraq"
  ]
},
{
  numb: 24,
  question: "Azərbaycan Respublikasının ərazisinə daxil olan və iki həftə müddətində qalan, oxlarının sayı 4-dək olan xarici dövlətlərin yük avtomobilləri, qoşqulu və yarımqoşqulu avtonəqliyyat vasitələri üçün yol vergisinin məbləği nə qədərdir?",
  answer: "D) 40 ABŞ dolları",
  options: [
    "A) 45 ABŞ dolları",
    "B) 70 ABŞ dolları",
    "C) 120 ABŞ dolları",
    "D) 40 ABŞ dolları"
  ]
},
{
  numb: 25,
  question: "Azərbaycan Respublikasının ərazisinə daxil olan və üç ay müddətində qalan, oxla-rının sayı 4-dək olan xarici dövlətlərin yük avtomobilləri, qoşqulu və yarımqoşqulu avtonəq-liyyat vasitələri üçün yol vergisinin məbləği nə qədərdir?",
  answer: "B) 400 ABŞ dolları",
  options: [
    "A) 275 ABŞ dolları",
    "B) 400 ABŞ dolları",
    "C) 375 ABŞ dolları",
    "D) 850 ABŞ dolları"
  ]
},
{
  numb: 26,
  question: "Azərbaycan Respublikasının ərazisinə daxil olan və bir ii müddətində qaian, oxla-rının sayı 4 və daha çox olan xarici dövlətlərin yük avtomobilləri, qoşqulu və yarımqoşqulu avtonəqliyyat vasitələri üçün yol vergisinin məbləği nə qədərdir?",
  answer: "A) 2800 ABŞ dolları",
  options: [
    "A) 2800 ABŞ dolları",
    "B) 1400 ABŞ dolları",
    "C) 1700 ABŞ dolları",
    "D) 1250 ABŞ dolları"
  ]
},
{
  numb: 27,
  question: "Azərbaycan Respublikasının ərazisinə daxil olan və bəyan edilmiş müddətdən artıq ölkə ərazisində qalan xarici dövlətlərin avtonəqliyyat vasitələri üçün Azərbaycan Respublikasının ərazisini tərk edən zaman yol vergisi necə hesablanır?",
  answer: "B)	Ölkə ərazisində artıq qaldığı müddətdən asılı olaraq ödənilməli olan yol vergisinin yekun məbləği hesablanmış yol vergisinin məbləğindən ölkə ərazisinə daxil olarkən ödənilmiş yol vergisinin məbləği çıxılmaqla hesablanır",
  options: [
    "A)	Mühərriklərinin həcmindən və Azərbaycan Resp ərazisində qaldığı müddətdən asıh olaraq",
    "B)	Ölkə ərazisində artıq qaldığı müddətdən asılı olaraq ödənilməli olan yol vergisinin yekun məbləği hesablanmış yol vergisinin məbləğindən ölkə ərazisinə daxil olarkən ödənilmiş yol vergisinin məbləği çıxılmaqla hesablanır",
    "C)	Ölkə ərazisində artıq qaldığı müddətdən asılı olaraq ödənilməli olan yol vergisinin yekun məbləği hesablanmış yol vergisinin məbləğindən ölkə ərazisindən çıxarkən ödənilmiş yol vergisinin məbləği çıxılmaqla hesablanır",
    "D)	Öxların sayından və Azərbaycan Resp ərazisində qaldığı müddətdən asılı olaraq"
  ]
},
{
  numb: 28,
  question: "Azərbaycan Respublikası ilə xarici dövlətlər arasında qüvvədə olan beynəlxalq avtomobil əlaqələri haqqında hökumətlərarası sazişlərə əsasən kvotalar çərçivəsində mübadilə edilmiş İcazə blankları ilə Azərbaycan Respublikasının ərazisinə daxil olan xarici ölkələrin avtonəqliyyat vasitələri üçün yol vergisi ödəmələrində azadolmalar nəzərdə tutulduğu hallarda daxil olduqları andan neçə gün sonra ölkədə əlavə qaldıqları müddətdən asıh olaraq, Vergi Məcəlləsinin 211.1.1.2-ci və 211.1.1.3-cü maddələrinə uyğun olaraq yol vergisinə cəlb edilirlər?",
  answer: "C) 30 gün ",
  options: [
    "A) 7 gün",
    "B) 14 gün",
    "C) 30 gün",
    "D) 90 gün"
  ]
},
{
  numb: 29,
  question: "Azərbaycan Respublikasının ərazisində istehsal edilərək daxili istehlaka yönəldilən (topdan satılan) avtomobil benzininə, dizel yanacağına və maye qaza görə yol vergisi necə hesablanır?",
  answer: "D) Onların hər litrinin topdans qiymət. (ƏDV və aksiz daxil olmaq) 0,02 man əlavə edilməklə",
  options: [
    "A)	Onların hər litrinin topdansat qiymətinə (ƏDV və aksiz çıxılm) 0,2 manat əlavə edilməklə ",
    "B)	Onların hər litrinin topdans qiymət. (ƏDVvə aksiz daxil olmaq) 0,2 man əlavə edilməklə ",
    "C)	Onların hər litrinin topdansat qiymət. (ƏDV və aksiz çıxılm) 0,02 manat əlavə edilməklə",
    "D) Onların hər litrinin topdans qiymət. (ƏDV və aksiz daxil olmaq) 0,02 man əlavə edilməklə"
  ]
},
{
  numb: 30,
  question: "Azərbaycan Respublikasının Vergi Məcəlləsinin 211.1.1.3-cü maddəsində göstərilən verginin məbləği ağır çəkili avtonəqliyyat vasitələri ilə yüklərin daşınmasına görə nəqliyyat vasitələrinin yüklə birlikdə ümumi çəkisi 38-41 ton olduqda Azərbaycan Respublikasının ərazisində qət edilən yolun hər kilometri üçün nə qədər artırılır?",
  answer: "D) 0,15 ABŞ dolları",
  options: [
    "A) 0,40 ABŞ dolları",
    "B) 0,20 ABŞ dolları",
    "C) 0,25 ABŞ dolları",
    "D) 0,15 ABŞ dolları"
  ]
},
{
  numb: 31,
  question: "Azərbaycan Respublikasının Vergi Məcəlləsinin 211.1.1.3-cü maddəsində göstərilən verginin məbləği ağır çəkili avtonəqliyyat vasitələri ilə yüklərin daşınmasına görə nəqliyyat vasitələrinin yüklə birlikdə ümumi çəkisi 51-61 ton olduqda Azərbaycan Respublikasının ərazisində qət edilən yolun hər kilometri üçün nə qədər artırılır?",
  answer: "C) 0,45 ABŞ dolları",
  options: [
    "A) 0,40 ABŞ dolları",
    "B) 0,50 ABŞ dolları",
    "C) 0,45 ABŞ dolları",
    "D) 0,35 ABŞ dolları"
  ]
},
{
  numb: 32,
  question: "Azərbaycan Respublikasının Vergi Məcəlləsinin 211.1.1.3-cü maddəsində göstərilən verginin məbləği ağır çəkili avtonəqliyyat vasitələri ilə yüklərin daşınmasına görə nəqliyyat vasitələrinin yüklə birlikdə ümumi çəkisi 71-81 ton olduqda Azərbaycan Respublikasının ərazisində qət edilən yolun hər kilometri üçün nə qədər artırılır?",
  answer: "D) 0,75 ABŞ dolları",
  options: [
    "A) 0,55 ABŞ dolları",
    "B) 0,80 ABŞ dolları",
    "C) 0,45 ABŞ dolları",
    "D) 0,75 ABŞ dolları"
  ]
},
{
  numb: 33,
  question: "Azərbaycan Respublikasının Vergi Məcəlləsinin 211.1.1•3-cü maddəsində göstərilən verginin məbləği ağır çəkili avtonəqliyyat vasitələri ilə yüklərin daşınmasına görə nəqliyyat vasitələrinin yüklə birlikdə ümumi çəkisi 81 tondan ağır olduqda Azərbaycan Respub¬likasının ərazisində qət edilən yolun hər kilometri üçün nə qədər artırılır?",
  answer: "B) 1,80 ABŞ dolları",
  options: [
    "A) 0,90 ABŞ dolları",
    "B) 1,80 ABŞ dolları",
    "C) 2 ABŞ dolları",
    "D) 0,95 ABŞ dolları"
  ]
},
{
  numb: 34,
  question: "34.	Azərbaycan Respublikasının Vergi Məcəlləsinin 211.1.1.3-cü maddəsində göstərilən verginin məbləği ağır çəkili avtonəqliyyat vasitələri ilə xüsusi təhlükəli yüklərin daşınmasına görə oxlarının sayı dördə qədər olduqda və Azərbaycan Respublikasının ərazisində qaldığı bir gün üçün nə qədər artırılır?",
  answer: "D) 80 ABŞ dolları",
  options: [
    "A) 90 ABŞ dolları",
    "B) 20 ABŞ dolları",
    "C) 30 ABŞ dolları",
    "D) 80 ABŞ dolları"
  ]
},
{
  numb: 35,
  question: "Azərbaycan Respublikasının Vergi Məcəlləsinin 211.1.1.3-cü maddəsində göstərilən verginin məbləği ağır çəkili avtonəqliyyat vasitələri ilə xüsusi təhlükəli yüklərin daşınmasına görə oxlarının sayı dördə qədər olduqda və Azərbaycan Respublikasının ərazisində bir aya qədər qaldığda nə qədər artırılır?",
  answer: "C) 560 ABŞ dolları",
  options: [
    "A) 350 ABŞ dolları",
    "B) 420 ABŞ dolları",
    "C) 560 ABŞ dolları",
    "D) 1600 ABŞ dolları"
  ]
},
{
  numb: 36,
  question: "Azərbaycan Respublikasının Vergi Məcəlləsinin 211.1.1.3-cü maddəsində göstərilən verginin məbləği ağır çəkili avtonəqliyyat vasitələri ilə az təhlükəli yüklərin daşınmasına görə oxlarının sayı dördə qədər olduqda və Azərbaycan Respublikasının ərazisində üç aya qədər qaldığda nə qədər artırılır?",
  answer: "B) 400 ABŞ dolları",
  options: [
    "A) 350 ABŞ dolları",
    "B) 400 ABŞ dolları",
    "C) 560 ABŞ dolları",
    "D) 175 ABŞ dolları"
  ]
},
{
  numb: 37,
  question: "Azərbaycan Respublikasının Vergi Məcəlləsinin 211.1.1.3-cü maddəsində göstərilən verginin məbləği ağır çəkili avtonəqliyyat vasitələri ilə təhlükəli yüklərin daşınmasına görə oxlarının sayı dördə qədər olduqda və Azərbaycan Respublikasının ərazisində iki həftəyə qədər qaldığda nə qədər artırılır?",
  answer: "A) 80 ABŞ dolları",
  options: [
    "A) 80 ABŞ dolları",
    "B) 120 ABŞ dolları",
    "C) 250 ABŞ dolları",
    "D) 145 ABŞ dolları"
  ]
},
{
  numb: 38,
  question: "Azərbaycan Respublikasının Vergi Məcəlləsinin 211.1.1.3-cü maddəsində göstərilən verginin məbləği ağır çəkili avtonəqliyyat vasitələri ilə az təhlükəli yüklərin daşınmasına görə oxlarının sayı dördə qədər olduqda və Azərbaycan Respublikasının ərazisində bir ildən yuxan qaldığda nə qədər artırılır?",
  answer: "D)	1400	ABŞ dolları	+1	ildən artıq qaldığı hər gün	üçün 15 ABŞ dolları",
  options: [
    "A)	1200	ABŞ dolları	+1	ildən artıq qaldığı hər gün	üçün 15 ABŞ dolları",
    "B)	1500	ABŞ dolları	+1	ildən artıq qaldığı hər gün	üçün 12 ABŞ dolları",
    "C)	1400	ABŞ dolları	+1	ildən artıq qaldığı hər gün	üçün 25 ABŞ dolları",
    "D)	1400	ABŞ dolları	+1	ildən artıq qaldığı hər gün	üçün 15 ABŞ dolları"
  ]
},
{
  numb: 39,
  question: "Azərbaycan Respublikasının ərazisində istehsal edilərək daxili istehlaka yönəldilən (topdan satılan) avtomobil benzininə, dizel yanacağına və maye qaza görə hesablanmış yol vergisinə nəzarət hansı orqan tərəfindən həyata keçirilir?",
  answer: "A) Dövlət vergi orqanları",
  options: [
    "A) Dövlət vergi orqanları",
    "B) Gömrük orqanları",
    "C) Maliyyə orqanları",
    "D) Dövlət sərhəd xidməti"
  ]
},
{
  numb: 40,
  question: "Azərbaycan Respublika ərazisinə idxal edilən avtomobil benzininə, dizel yanacağına və maye qaza görə yol vergisinin hesablanmasına və ödənilməsinə hansı orqan nəzarət edir?",
  answer: "B) Gömrük orqanları",
  options: [
    "A) Maliyyə orqanları",
    "B) Gömrük orqanları",
    "C) Dövlət vergi orqanları",
    "D) Dövlət sərhəd xidməti"
  ]
},
{
  numb: 41,
  question: "Xarici dövlətlərin avtonəqliyyat vasitələrindən Vergi Məcəlləsi ilə müəyyən edilmiş yol vergisi nə vaxt tutulur?",
  answer: "A)	Həmin avtonəqliyyat vasitələri Azərbaycan Respublikasının gömrük ərazisinə daxil olan zaman və Vergi Məcəlləsinin 211.1.1-ci maddəsinə uyğun olaraq Azərbaycan Respublikasının ərazisini tərk edərkən yol vergisinə cəlb olunmalı hallarda",
  options: [
    "A)	Həmin avtonəqliyyat vasitələri Azərbaycan Respublikasının gömrük ərazisinə daxil olan zaman və Vergi Məcəlləsinin 211.1.1-ci maddəsinə uyğun olaraq Azərbaycan Respublikasının ərazisini tərk edərkən yol vergisinə cəlb olunmalı hallarda",
    "B)	Həmin avtonəqliyyat vasitələri Azərbaycan Respublikasının gömrük ərazisinə daxil olan zaman və Vergi Məcəlləsinin 218.1.1-ci maddəsinə uyğun olaraq Azərbaycan Respublikasının ərazisini tərk edərkən yol vergisinə cəlb olunmalı hallarda",
    "C)	Vergi Məcəlləsinin 211.1.1-ci maddəsinə uyğun olaraq Azərbaycan Respublikasının ərazisini tərk edərkən yol vergisinə cəlb olunmalı hallarda",
    "D)	Həmin avtonəqliyyat vasitələri Azərbaycan Respublikasının gömrük ərazisinə daxil olduq¬dan sonra istənilən vaxt"
  ]
},
{
  numb: 42,
  question: "Xarici dövlətlərin avtonəqliyyat vasitələrindən Vergi Məcəlləsində müəyyən edilmiş vergi tutulduqdan sonra nə vaxt büdcəyə keçirilir?",
  answer: "A)	Bir bank günü müddətində",
  options: [
    "A)	Bir bank günü müddətində",
    "B)	Tutulduqdan sonra dərhal",
    "C) Bir həftə müddətində",
    "D) İki bank günü müddətində"
  ]
},
{
  numb: 43,
  question: "Azərbaycan Respublikasının ərazisində avtomobil benzininin, dizel yanacağının və maye qazın istehsalı ilə məşğul olan şəxslər yol vergisinin bəyannaməsini nə vaxt vergi orqa-nına təqdim edirlər?",
  answer: "A)	Hesabat ayından sonrakı aym 20-dən gec olmayaraq",
  options: [
    "A)	Hesabat ayından sonrakı aym 20-dən gec olmayaraq",
    "B)	Hesabat ayının 20-dən gec olmayaraq",
    "C)	Hesabat ayından sonrakı aym 25-dən gec olmayaraq",
    "D)	Hesabat ayından sonrakı ayın 10-dan gec olmayaraq"
  ]
},
{
  numb: 44,
  question: "Azərbaycan Resp. ərazisində avtomobil benzininin, dizel yanacağının və maye qazın istehsalı ilə məşğul olan şəxslər üçün yol vergisinin hesabat dövrü aşağıdakılardan hansıdır.",
  answer: "D) Ay",
  options: [
    "A) Dekada",
    "B) Həftə",
    "C) Rüb ",
    "D) Ay"
  ]
},
{
  numb: 45,
  question: "Avtonəqliyyat vasitələrinin dövlət qeydiyyatını aparan müvafiq dövlət orqanı nə vaxt yeni qeydiyyata alınmış və qeydiyyatdan çıxarılmış avtonəqliyyat vasitələri barədə müəyyən edilmiş formada məlumatı Dövlət Vergi Xidmətinə təqdim edir?",
  answer: "A)	Hesabat rübündən sonrakı ayın 20-dən gec olmayaraq",
  options: [
    "A)	Hesabat rübündən sonrakı ayın 20-dən gec olmayaraq",
    "B)	Hesabat rübündən sonrakı ayın 15-dən gec olmayaraq",
    "C)	Hesabat ayından sonrakı ayın 20-dən gec olmayaraq",
    "D)	Hesabat ilindən sonrakı ayın sonunadək"
  ]
},
{
  numb: 46,
  question: "Xarici dövlətlərin yük avtomobilləri, qoşqulu və yarımqoşqulu avtonəqliyyat vasi-tələri hansı müddətə yol vergisindən azaddır?",
  answer: "A)	2016-cı ilin iyun ayının 1-dən etibarən 3 (üç) il müddətinə yol vergisindən azaddır",
  options: [
    "A)	2016-cı ilin iyun ayının 1-dən etibarən 3 (üç) il müddətinə yol vergisindən azaddır",
    "B)	2016-cı ilin iyul ayının 1-dən etibarən 3 (üç) il müddətinə yol vergisindən azaddır",
    "C)	2016-cı ilin iyun ayının 1-dən etibarən 2 (iki) il müddətinə yol vergisindən azaddır",
    "D)	2016-cı ilin iyun ayının 1-dən etibarən 5 (beş) il müddətinə yol vergisindən azaddır"
  ]
},
{
  numb: 47,
  question: "Xarici dövlətlərin yük avtomobilləri, qoşqulu və yarımqoşqulu avtonəqliyyat vasi-tələri hansı hallarda yol vergisindən azaddır?",
  answer: "D)	Dəmir yolu ilə nəql edilən yüklər Azərbaycan Respublikası ərazisindəki müvafiq icra hakimiyyəti orqanının müəyyən etdiyi son dəmiryolu stansiyasmda xarici dövlətlərin yük avtomobillərinə, qoşqulu və yarım-qoşqulu avtonəqliyyat vasitələrinə aşırılaraq ən yaxın gömrük sərhəd buraxılış məntəqəsindən keçirilməklə digər dövlətə daşındıqda",
  options: [
    "A)	Dəmir yolu ilə nəql edilən yüklər Azərbaycan Respublikası ərazisindəki müvafiq icra hakimiyyəti orqanının müəyyən etdiyi ilk dəmiryolu stansiyasında xarici dövlətlərin yük avtomobillərinə, qoşqulu və yarım-qoşqulu avtonəqliyyat vasitələrinə aşırılaraq birinci gömrük sərhəd buraxılış məntəqəsindən keçirilməklə digər dövlətə daşındıqda",
    "B)	Dəmir yolu ilə nəql edilən yüklər Azərbaycan Respublikası ərazisindəki müvafiq icra hakimiyyəti orqanının müəyyən etdiyi son dəmiryolu stansiyasında xarici dövlətlərin yük avtomobillərinə, qoşqulu və yarım-qoşqulu avtonəqliyyat vasitələrinə aşırılaraq axırıncı gömrük sərhəd buraxılış məntəqəsindən keçirilməklə digər dövlətə daşındıqda",
    "C)	Dəmir yolu ilə nəql edilən yüklər Azərbaycan Respublikası ərazisindəki müvafiq icra hakimiyyəti orqanının müəyyən etdiyi ilk dəmiryolu stansiyasında xarici dövlətlərin yük avtomobillərinə, qoşqulu və yarım-qoşqulu avtonəqliyyat vasitələrinə aşırılaraq axırıncı gömrük sərhəd buraxılış məntəqəsindən keçirilməklə digər dövlətə daşındıqda",
    "D)	Dəmir yolu ilə nəql edilən yüklər Azərbaycan Respublikası ərazisindəki müvafiq icra hakimiyyəti orqanının müəyyən etdiyi son dəmiryolu stansiyasmda xarici dövlətlərin yük avtomobillərinə, qoşqulu və yarım-qoşqulu avtonəqliyyat vasitələrinə aşırılaraq ən yaxın gömrük sərhəd buraxılış məntəqəsindən keçirilməklə digər dövlətə daşındıqda"
  ]
},
{
  numb: 48,
  question: "Xarici dövlətlərin yük avtomobilləri, qoşqulu və yarımqoşqulu avtonəqliyyat vasi-tələri hansı hallarda yol vergisindən azaddır?",
  answer: "B)	Xarici dövlətlərin yük avtomobilləri, qoşqulu və yarımqoşqulu avtonəqliyyat vasitələri ilə yüklər digər dövlətin ərazisindən Azərbaycan Respublikası ərazisindəki müvafiq icra hakimiyyəti orqanının müəyyən etdiyi ilk dəmir yolu stansiyasına ən yaxın gömrük sərhəd buraxılış məntə-qəsindən keçirilməklə daşındıqda.",
  options: [
    "A)	Dəmir yolu ilə nəql edilən yüklər Azərbaycan Respublikası ərazisindəki müvafiq icra hakimiyyəti orqanının müəyyən etdiyi ilk dəmiryolu stansiyasmda xarici dövlətlərin yük avtomobillərinə, qoşqulu və yarım-qoşqulu avtonəqliyyat vasitələrinə aşırılaraq axırıncı gömrük sərhəd buraxılış məntəqəsindən keçirilməklə digər dövlətə daşındıqda",
    "B)	Xarici dövlətlərin yük avtomobilləri, qoşqulu və yarımqoşqulu avtonəqliyyat vasitələri ilə yüklər digər dövlətin ərazisindən Azərbaycan Respublikası ərazisindəki müvafiq icra hakimiyyəti orqanının müəyyən etdiyi ilk dəmir yolu stansiyasına ən yaxın gömrük sərhəd buraxılış məntə-qəsindən keçirilməklə daşındıqda.",
    "C)	Dəmir yolu ilə nəql edilən yüklər Azərbaycan Respublikası ərazisindəki müvafiq icra hakimiyyəti orqanının müəyyən etdiyi ilk dəmiryolu stansiyasmda xarici dövlətlərin yük avtomobillərinə, qoşqulu və yarım-qoşqulu avtonəqliyyat vasitələrinə aşırılaraq birinci gömrük sərhəd buraxılış məntəqəsindən keçirilməklə digər dövlətə daşındıqda",
    "D)	Dəmir yolu ilə nəql edilən yüklər Azərbaycan Respublikası ərazisindəki müvafiq icra hakimiyyəti orqanının müəyyən etdiyi son dəmiryolu stansiyasmda xarici dövlətlərin yük avtomobillərinə, qoşqulu və yarım-qoşqulu avtonəqliyyat vasitələrinə aşırılaraq ən yaxın gömrük sərhəd buraxılış məntəqəsindən keçirilməklə digər dövlətə daşındıqda"
  ]
},
];
