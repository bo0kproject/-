// создание вопросов и ответов
let questions = [
    {
    numb: 1,
    question: "Nəqqaşlıq emalatxanalarının fəaliyyəti ilə məşğul olan fiziki şəxslər üçün sadələşdi-rilmiş verginin məbləği nə qədərdir?",
    answer: "C) 20",
    options: [
      "A) 10",
      "B) 15",
      "C) 20",
      "D) 30"
    ]
  },
  {
    numb: 2,
    question: "Çəkməçi, pinəçi fəaliyyəti ilə məşğul olan fiziki şəxslər üçün sadələşdirilmiş vergi¬nin məbləği nə qədərdir?",
    answer: "B) 5",
    options: [
      "A) 10",
      "B) 5",
      "C) 20",
      "D) 30"
    ]
  },
  {
    numb: 3,
    question: "Fərdi yaşayış evlərində və mənzillərdə ev qulluqçusu, xəstələrə, qocalara və uşaq-lara qulluq xidməti, dayə, fərdi sürücülük, ev təsərrüfatında təmizlik, bağban, aşbaz, gözətçi və iaşə obyektlərində müştərilərə xidmət göstərən fiziki şəxslər (ofisiant) ilə məşğul olan fiziki şəxslər üçün sadələşdirilmiş verginin məbləği nə qədərdir?",
    answer: "D) 10",
    options: [
      "A) 30",
      "B) 5",
      "C) 20",
      "D) 10"
    ]
  },
  {
    numb: 4,
    question: "Fərdi qaydada bərbər fəaliyyəti ilə məşğul olan şəxslər üçün sadələşdirilmiş vergi-nin məbləği nə qədərdir?",
    answer: "B) 15",
    options: [
      "A) 30",
      "B) 15",
      "C) 20",
      "D) 10"
    ]
  },
  {
    numb: 5,
    question: "Fərdi qaydada dərzi fəaliyyəti ilə məşğul olan şəxslər üçün sadələşdirilmiş verginin məbləği nə qədərdir?",
    answer: "C) 10",
    options: [
      "A) 30",
      "B) 15",
      "C) 10",
      "D) 5"
    ]
  },
  {
    numb: 6,
    question: "Vergi Məcəlləsinin 220.10-cu maddəsində nəzərdə tutulan fəaliyyət növləri ilə məşğul olan fiziki şəxslər üçün aylıq verginin məbləğinə tətbiq edilən əmsal Bakı şəhəri üzrə neçədir?",
    answer: "A) 2",
    options: [
      "A) 2",
      "B) 1,5",
      "C) 1,1",
      "D) 3"
    ]
  },
  {
    numb: 7,
    question: "Vergi Məcəlləsinin 220.10-cu maddəsində nəzərdə tutulan fəaliyyət növləri ilə məş-ğul olan fiziki şəxslər üçün aylıq verginin məbləğinə tətbiq edilən əmsal Gəncə, Sumqayıt və Xırdalan şəhərləri üzrə neçədir?",
    answer: "B) 1,5",
    options: [
      "A) 2",
      "B) 1,5",
      "C) 1,1",
      "D) 3"
    ]
  },
  {
    numb: 8,
    question: "Vergi Məcəlləsinin 220.10-cu maddəsində nəzərdə tutulan fəaliyyət növləri ilə məşğul olan fiziki şəxslər üçün aylıq verginin məbləğinə tətbiq edilən əmsal Abşeron rayonunun qəsəbə və kəndləri (Xırdalan şəhəri istisna olmaqla), Şirvan, Mingəçevir, Naxçı¬van, Lənkəran, Yevlax, Şəki və Naftalan şəhərləri üzrə neçədir?",
    answer: "C) 1",
    options: [
      "A) 2",
      "B) 1,5",
      "C) 1",
      "D) 3"
    ]
  },
  {
    numb: 9,
    question: "Vergi Məcəlləsinin 220.10-cu maddəsində nəzərdə tutulan fəaliyyət növləri ilə məş-ğul olan fiziki şəxslər üçün aylıq verginin məbləğinə tətbiq edilən əmsal digər rayon (şəhər) və qəsəbələrdə (kəndlərdə) neçədir?",
    answer: "D) 0,5",
    options: [
      "A) 2",
      "B) 1,5",
      "C) 1",
      "D) 0,5"
    ]
  },
  {
    numb: 10,
    question: "Hüquqi şəxslər və fərdi sahibkarlar tərəfindən pul vəsaitlərinin nağd qaydada bank hesablarından çıxarılmasına görə neçə faiz dərəcəsi ilə sadələşdirilmiş vergi hesablanır?",
    answer: "C)	1 faiz dərəcəsi ilə sadələşdirilmiş vergi hesablanır",
    options: [
      "A)	Vergi hesablanmır",
      "B)	2 faiz dərəcəsi ilə sadələşdirilmiş vergi hesablanır",
      "C)	1 faiz dərəcəsi ilə sadələşdirilmiş vergi hesablanır",
      "D)	Yalnız hüquqi şəxslərdən 1 faiz dərəcəsi ilə sadələşdirilmiş vergi hesablanır"
    ]
  },
  {
    numb: 11,
    question: "Hesabat dövrü üçün sadələşdirilmiş verginin məbləği (Vergi Məcəlləsinin 218.4-cü maddəsində nəzərdə tutulmuş vergi ödəyiciləri istisna olmaqla) vergi dərəcəsini hansı göstə-riciyə tətbiq etməklə hesablanır?",
    answer: "B)	Hesabat dövrünün ümumi hasilatının həcminə",
    options: [
      "A)	Hesabat dövrünün mənfəətinin ümumi həcminə",
      "B)	Hesabat dövrünün ümumi hasilatının həcminə",
      "C)	Hesabat ilində ümumi dövriyyənin həcminə",
      "D)	Hesabat ilində gəlirin həcminə"
    ]
  },
  {
    numb: 12,
    question: "Sadələşdirilmiş vergi üçün hansı dövr hesabat dövrü sayılır?",
    answer: "B) Rüb",
    options: [
      "A) Ay",
      "B) Rüb",
      "C) 6 ay",
      "D) İl"
    ]
  },
  {
    numb: 13,
    question: "Sadələşdirilmiş vergi ödəyicisi fəaliyyətini dayandırdıqda, habelə sadələşdirilmiş verginin ödəyicisi olan hüquqi şəxs ləğv edildikdə və ya hüquqi şəxs yaratmadan sahibkarlıq fəaliyyətini həyata keçirən fiziki şəxsin fəaliyyətinə xitam verildikdə hansı müddətdən gec olmamaq şərtilə vergi orqanına bəyannamə təqdim edilməlidir?",
    answer: "C) Vergi Məcəlləsində müəyyən olunmuş müddətdən",
    options: [
      "A)	30 gündən",
      "B)	15 gündən",
      "C) Vergi Məcəlləsində müəyyən olunmuş müddətdən",
      "D) 20 gündən"
    ]
  },
  {
    numb: 14,
    question: "Sadələşdirilmiş verginin bəyannaməsi nə vaxt vergi orqanına təqdim edilir?",
    answer: "C)	Hesabat rübündən sonrakı ayın 20-dən gec olmayaraq",
    options: [
      "A)	Hesabat ayından sonrakı ayın 25-dək",
      "B)	Hesabat ayından sonrakı ayın 15-dək",
      "C)	Hesabat rübündən sonrakı ayın 20-dən gec olmayaraq",
      "D)	Hesabat ayından sonrakı ayın 1 O-dan gec olmayaraq"
    ]
  },
  {
    numb: 15,
    question: "İdman mərc oyunlarının operatoru və satıcıları olan şəxslər sadələşdirilmiş verginin bəyannaməsini nə vaxt vergi orqanına təqdim edirlər?",
    answer: "B)	Hər rübdən sonrakı aym 20-dən gec olmayaraq",
    options: [
      "A)	Hər aydan sonra növbəti ayın 20-dən gec olmayaraq",
      "B)	Hər rübdən sonrakı aym 20-dən gec olmayaraq",
      "C)	Hesabat ilindən sonra növbəti ilin yanvar ayının 31 -dən gec olmayaraq",
      "D)	Hesabat ilindən sonra növbəti ilin mart ayının 31 -dən gec olmayaraq"
    ]
  },
  {
    numb: 16,
    question: "Lotereya təşkilatçıları və lotereya biletlərinin satıcıları olan şəxslər sadələşdirilmiş verginin bəyannaməsini nə vaxt vergi orqanına təqdim edirlər?",
    answer: "B)	Hər rübdən sonrakı aym 20-dən gec olmayaraq",
    options: [
      "A)	Hər aydan sonra növbəti ayın 20-dən gec olmayaraq",
      "B)	Hər rübdən sonrakı aym 20-dən gec olmayaraq",
      "C)	Hesabat ilindən sonra növbəti ilin yanvar ayının 31 -dən gec olmayaraq",
      "D)	Hesabat ilindən sonra növbəti ilin mart ayının 31 -dən gec olmayaraq"
    ]
  },
  {
    numb: 17,
    question: "Sərnişin və yük daşımalarını həyata keçirən vergi ödəyicisinin hər ыг avtomobil nəqliyyatı vasitəsi üçün sadələşdirilmiş verginin məbləği necə hesablanır?",
    answer: "B)	Sadələşdirilmiş verginin tətbiq edildiyi ölçü vahidini onun aylıq məbləğinə və müəyyən edilmiş əmsallara vurmaqla hesablanır",
    options: [
      "A)	Sadələşd. verginin tətbiq edildiyi ölçü vahidini onun aylıq məbləğinə vurmaqla hesablanır",
      "B)	Sadələşdirilmiş verginin tətbiq edildiyi ölçü vahidini onun aylıq məbləğinə və müəyyən edilmiş əmsallara vurmaqla hesablanır",
      "C)	Sad. verginin tətbiq edildiyi ölçü vahidini müəyyən edilmiş əmsallara vurmaqla hesablanır",
      "D)	Sadələşdirilmiş verginin məbləğini müəyyən edilmiş əmsallara vurmaqla hesablanır"
    ]
  },
  {
    numb: 18,
    question: "Aşağıdakılardan hansı düzgündür?",
    answer: "A)	Sərnişin və yük daşımalarını həyata keçirən vergi ödəyiciləri avtomobil nəqliyyatı vasitələrinin qeydiyyata alındığı yerdən asıh olmayaraq sərnişin və yük daşımalarının faktiki həyata keçirildiyi ərazi üçün sadələşdirilmiş vergini ödəyirlər",
    options: [
      "A)	Sərnişin və yük daşımalarını həyata keçirən vergi ödəyiciləri avtomobil nəqliyyatı vasitələrinin qeydiyyata alındığı yerdən asıh olmayaraq sərnişin və yük daşımalarının faktiki həyata keçirildiyi ərazi üçün sadələşdirilmiş vergini ödəyirlər",
      "B)	Sərnişin və yük daşımalarını həyata keçirən vergi ödəyiciləri avtomobil nəqliyyatı vasitələrinin qeydiyyata alındığı yerdən asılı olaraq sərnişin və yük daşımalarının faktiki həyata keçirildiyi ərazi üçün sadələşdirilmiş vergini ödəyirlər",
      "C)	Sərnişin və yük daşımalarını həyata keçirən vergi ödəyiciləri avtomobil nəqliyyatı vasitələrinin qeydiyyata alındığı yerdən asıh olmayaraq yalnız yük daşımalarının faktiki həyata keçirildiyi ərazi üçün sadələşdirilmiş vergini ödəyirlər",
      "D)	Sərnişin və yük daşımalarını həyata keçirən vergi ödəyiciləri avtomobil nəqliyyatı vasitələrinin qeydiyyata alındığı yerdən asılı olmayaraq yalnız sərnişin daşımalarının faktiki həyata keçirildiyi ərazi üçün sadələşdirilmiş vergini ödəyirlər"
    ]
  },
  {
    numb: 19,
    question: "Vəkalətnamə (etibarnamə) əsasında istifadə edilən avtomobil nəqliyyatı vasitələri ilə sərnişin və yük daşımaları həyata keçirildikdə sadələşdirilmiş verginin ödənilməsinə harçşı şəxs (sahib və ya etibarnamə ilə idarə edən) məsuliyyət daşıyır?",
    answer: "C)	Etibarnamə ilə idarə edən şəxs",
    options: [
      "A)	Avtomobil nəqliyyatı vasitəsinin sahibi və etibarnamə ilə idarə edən (hər ikisi)",
      "B)	Avtomobil nəqliyyatı vasitəsinin sahibi",
      "C)	Etibarnamə ilə idarə edən şəxs",
      "D)	Həmin şəxslərdən heç biri"
    ]
  },
  {
    numb: 20,
    question: "İcarə müqaviləsi ilə istifadə edilən avtomobil nəqliyyatı vasitələri ilə sərnişin və yük daşımaları həyata keçirildikdə sadələşdirilmiş verginin ödənilməsinə hansı şəxs (sahib və ya icarə müqaviləsi ilə idarə edən) məsuliyyət daşıyır?",
    answer: "D)	İcarə müqaviləsi ilə idarə edən şəxs",
    options: [
      "A)	Avtomobil nəqliyyatı vasitəsinin sahibi",
      "B)	Avtomobil nəqliyyatı vasitəsinin sahibi və icarə müqaviləsi ilə idarə edən (hər ikisi)",
      "C)	Həmin şəxslərdən heç biri",
      "D)	İcarə müqaviləsi ilə idarə edən şəxs"
    ]
  },
  {
    numb: 21,
    question: "Hüquqi şəxsin balansında olan avtomobil nəqliyyatı vasitələri ilə sərnişin və yük daşımaları hüquqi şəxsin özü tərəfindən həyata keçirildikdə, sadələşdir, vergini kim ödəyir?",
    answer: "B)	Həmin hüquqi şəxs",
    options: [
      "A)	Avtomobil nəqliyyatı vasitəsini idarə edən şəxs",
      "B)	Həmin hüquqi şəxs",
      "C) Bu halda vergi ödənilmir",
      "D) İstənilən şəxs"
    ]
  },
  {
    numb: 22,
    question: "Avtomobil nəqliyyatı vasitələri ilə Azərbaycan Respublikasının ərazisində sərnişin və yük daşımalarını həyata keçirən sadələşdirilmiş verginin ödəyiciləri bu fəaliyyətə görə vergi orqanlarına bəyannamə təqdim etməlidirlərmi?",
    answer: "B)	Təqdim etməməlidirlər",
    options: [
      "A)	Təqdim etməlidirlər",
      "B)	Təqdim etməməlidirlər",
      "C) Bu vergi orqanının qərarına əsasən müəyyən edilir",
      "D) Bələdiyyə orqanlarının qərarına əsasən müəyyən edilir"
    ]
  },
  {
    numb: 23,
    question: "Avtomobil nəqliyyatı vasitələri ilə sərnişin və yük daşımaları həyata keçirən vergi ödəyiciləri tərəfindən sadələşdirilmiş verginin düzgün hesablanmasına və vaxtında dövlət büdcəsinə ödənilməsinə hansı orqan nəzarət edir?",
    answer: "D) Dövlət vergi orqanları",
    options: [
      "A)	Dövlət nəqliyyat orqanları",
      "B)	Dövlət maliyyə orqanları",
      "C) Dövlət statistika orqanları",
      "D) Dövlət vergi orqanları"
    ]
  },
  {
    numb: 24,
    question: "Fərqlənmə nişanı vergi ödəyicisinin ərizəsinə əsasən hansı sənəd əsasında verilir?",
    answer: "B)	Sadələşdirilmiş verginin, məcburi dövlət sosial sığorta və icbari tibbi sığorta haqqının ödənilməsini təsdiq edən bank ödəniş sənədinə əsasən",
    options: [
      "A)	Avtomobil nəqliyyatının texniki pasportuna əsasən",
      "B)	Sadələşdirilmiş verginin, məcburi dövlət sosial sığorta və icbari tibbi sığorta haqqının ödənilməsini təsdiq edən bank ödəniş sənədinə əsasən",
      "C)	Sürücünün pasportuna əsasən",
      "D)	Qət edilən yola əsasən"
    ]
  },
  {
    numb: 25,
    question: "«Fərqlənmə nişanı»nın və «Xüsusi fərqlənmə nişanı»nın formaları hansı mərkəzi icra hakimiyyəti orqanı tərəfindən müəyyən edilir?",
    answer: "B)	Azərbaycan Respublikası Nəqliyyat Nazirliyi",
    options: [
      "A)	Azərbaycan Respublikası Dövlət Vergi Xidməti",
      "B)	Azərbaycan Respublikası Nəqliyyat Nazirliyi",
      "C)	Azərbaycan Respublikası Maliyyə Nazirliyi",
      "D)	Sərnişin və yük daşımasını həyata keçirən özəl şirkətlər"
    ]
  },
  {
    numb: 26,
    question: "«Fərqlənmə nişanı»nın və «Xüsusi fərqlənmə nişanı»nın formalarında hansı məlu-matlar əks etdirilir? 1)	vergi ödəyicisi olan hüquqi şəxsin tam adı və ya fiziki şəxsin adı, atasının adı, soyadı; 2)	vergi ödəyicisinin bank hesabları; 3)	nişanın qüvvədə olma müddəti; 4)	avtonəqliyyat vasitəsinin markası və dövlət qeydiyyatı nişanı; 5)	təsisçi haqqında məlumat; 6)	vergi ödəyicisinin qeydiyyata alındığı vergi orqanı haqqında məlumat;",
    answer: "C) 1,3,4",
    options: [
      "A) 1,4,6",
      "B) 2,3,5",
      "C) 1,3,4",
      "D) 3,5,6"
    ]
  },
  {
    numb: 27,
    question: "Xüsusi fərqlənmə nişanı hansı hallarda alınır?",
    answer: "A)	Öz istehsal fəaliyyətini təmin etmək üçün işçilərinin və özünə məxs. yükl. daşınm. zamanı",
    options: [
      "A)	Öz istehsal fəaliyyətini təmin etmək üçün işçilərinin və özünə məxs. yükl. daşınm. zamanı",
      "B)	Nəqliyyat vasitələrini satan zaman",
      "C)	Başqa müəssisəyə icarəyə verilərkən",
      "D)	Təhlükəli yüklərin daşınması zamanı"
    ]
  },
  {
    numb: 28,
    question: "Vergi ödəyicisinin işçi heyətinin və özünə məxsus yüklərin daşınmasında istifadə edilən yeni avtomobil nəqliyyatı vasitələri müvafiq qaydada qeydiyyata alındıqdan sonra həmin avtomobil nəqliyyatı vasitələrinin sahibləri neçə gün ərzində müvafiq icra hakimiyyəti orqanına bu barədə müəyyən edilmiş formada məlumat təqdim edirlər?",
    answer: "C) 5 gün ərzində",
    options: [
      "A) 15 gün ərzində",
      "B) 30 gün ərzində",
      "C) 5 gün ərzində",
      "D) 20 gün ərzində"
    ]
  },
  {
    numb: 29,
    question: "Hansı avtonəqliyyat vasitələri üçün «Fərqlənmə nişanı» və ya «Xüsusi fərqlənmə nişanı» alınmır? 1)	Dövlət fondlarının, xarici ölkələrin diplomatik və konsulluq nümayəndəliklərinin nəqliy-yat vasitələri üçün 2)	xüsusi nişan və avadanlıqlarla təchiz olunmuş xüsusi təyinatlı, habelə dövlət hakimiyyəti orqanlarının, büdcə təşkilatlarının və yerli özünüidarəetmə orqanlarının, Azərbaycan Respublikası Mərkəzi Bankının nəqliyyat vasitələri üçün 3)	sahibkarlıq fəaliyyətini göstərən şəxslərin balansında olan avtomobil nəqliyyatı vasitələri ilə öz istehsal fəaliyyətini təmin etmək üçün 4)	sahibkarlıq fəaliyyətini göstərən şəxslərin öz işçilərinin və özünə məxsus yüklərin daşınmasında istifadə olunan avtomobil nəqliyyat vasitələri üçün 5)	hasilatın pay bölgüsü, əsas ixrac boru kəməri haqqında və bu qəbildən olan digər sazişlər çərçivəsində fəaliyyət göstərən xarici podratçıların və subpodratçıların nəqliyyat vasitələri üçün 6)	beynəlxalq təşkilatların nümayəndəliklərinin rəsmi istifadəsi üçün nəzərdə tutulan avtomobil nəqliyyatı vasitələri üçün",
    answer: "C) 1,2,5,6",
    options: [
      "A) 1,3,4,6",
      "B) 2,4,5,6",
      "C) 1,2,5,6",
      "D) 3,4,5,6"
    ]
  },
  {
    numb: 30,
    question: "Mülkiyyətində və ya istifadəsində olan avtonəqliyyat vasitələri ilə [beynəlxalq yük və sərnişin daşımaları istisna olmaqla) Azərb. Resp. ərazisində sərnişin və yük daşımalarını [o cümlədən taksi ilə] həyata keçirən şəxslər digər fəaliyyət növü üzrə əldə etdikləri gəlirlərin və xərclərin uçotunu necə aparırlar?",
    answer: "D) Hər bir fəaliyyət növü üzrə ayrılıqda aparırlar",
    options: [
      "A)	Bir yerdə aparırlar",
      "B)	Vergi ödəyicisi istədiyi kimi apara bilər",
      "C) Yalnız xərcləri ayrılıqda aparırlar",
      "D) Hər bir fəaliyyət növü üzrə ayrılıqda aparırlar"
    ]
  },
  {
    numb: 31,
    question: "Əmlakın icarəyə verilməsindən və royaltidən gəlir əldə edən şəxslər bu fəaliyyətlə yanaşı, digər fəaliyyət növləri ilə məşğul olduqda, əmlakın icarəyə verilməsi, royalti və digər fəaliyyət növləri üzrə əldə edilən gəlirlərin və xərclərin uçotu necə aparılmalıdır?",
    answer: "D)	Hər bir fəaliyyət növü üzrə ayrılıqda aparırlar",
    options: [
      "A)	Bir yerdə aparırlar",
      "B)	Vergi ödəyicisi istədiyi kimi apara bilər",
      "C)	Yalnız xərcləri ayrılıqda aparırlar",
      "D)	Hər bir fəaliyyət növü üzrə ayrılıqda aparırlar"
    ]
  },
  {
    numb: 32,
    question: "Fiziki şəxs eyni dövr ərzində Vergi Məcəlləsinin 220.11-ci maddəsində nəzərdə tutulan müxtəlif əmsallar tətbiq olunan ərazilərdə fəaliyyət göstərərsə, bu zaman sabit vergi məbləği necə müəyyən olunur?",
    answer: "C)	Sabit vergi məbləği ən yüksək əmsal tətbiq edilən ərazi üzrə müəy. olun əmsala vurulur. ",
    options: [
      "A)	Orta əmsal çıxarılır və ərazi üzrə müəyyən olunmuş sabit vergi məbləğinə vurulur",
      "B)	Vergi Məcəlləsinin 220.11.2-ci maddəsində göstərilən əmsallara vurulur",
      "C)	Sabit vergi məbləği ən yüksək əmsal tətbiq edilən ərazi üzrə müəy. olun əmsala vurulur. ",
      "D)	Sabit vergi məbləği hər əraziyə uyğun əmsala vurulur"
    ]
  },
  {
    numb: 33,
    question: "Sadələşdirilmiş vergi üzrə aylıq sabit məbləğ ödəyən fiziki şəxslər bu faliyyətlə bağlı sadələşədirilmiş verginin bəyannaməsini nə vaxt vergi orqanına təqdim edirlər?",
    answer: "D)	Fiziki şəxslər bu fəaliyyətə görə vergi orqanlarına bəyannamə vermirlər.",
    options: [
      "A)	Hər aydan sonra növbəti ayın 20-dən gec olmayaraq",
      "B)	Hər rübdən sonrakı aym 20-dən gec olmayaraq",
      "C)	Hesabat ilindən sonra növbəti ilin yanvar ayının 31 -dən gec olmayaraq",
      "D)	Fiziki şəxslər bu fəaliyyətə görə vergi orqanlarına bəyannamə vermirlər."
    ]
  },
  {
    numb: 34,
    question: "Vergi Məcəlləsinin 218.4.4-cü maddəsində göstərilən fiziki şəxslər tərəfindən sadə-ləşdirilmiş verginin düzgün hesablanmasına və vaxtında dövlət büdcəsinə ödənilməsinə hansı orqan nəzarət edir?",
    answer: "A)	Dövlət Vergi Xidməti",
    options: [
      "A)	Dövlət Vergi Xidməti",
      "B)	Azərbaycan Respublikası Nəqliyyat Nazirliyi",
      "C)	Azərbaycan Respublikası Maliyyə Nazirliyi",
      "D)	Azərbaycan Respublikası Nazirlər Kabineti"
    ]
  },
  {
    numb: 35,
    question: "Fiziki şəxslər “Sadələşdirilmiş vergi üzrə sabit məbləğin və məcburi dövlət sosial sığorta haqqının ödənilməsi haqqında qəbz”i hansı orqandan və nə vaxtadək almalıdırlar?",
    answer: "A)	Dövlət Vergi Xidmətindən Vergi Məcəlləsinin 220.10-cu maddəsində nəzərdə tutulan fəaliyyəti həyata keçirməyə başlayanadək",
    options: [
      "A)	Dövlət Vergi Xidmətindən Vergi Məcəlləsinin 220.10-cu maddəsində nəzərdə tutulan fəaliyyəti həyata keçirməyə başlayanadək",
      "B)	Dövlət Vergi Xidmətindən Vergi Məcəlləsinin 220.10-cu maddə-sində nəzərdə tutulan fəaliyyətə başladığı gündən",
      "C)	Azərbaycan Respublikası Maliyyə Nazirliyindən Vergi Məcəlləsinin 220.10-cu maddə- Sİndd llƏZƏrdƏ tutulan fəaliyyəti həyata keçirməyə başlayanadək",
      "D)	Dövlət Vergi Xidmətindən Vergi Məcəlləsinin 220.10-cu maddə-sində nəzərdə tutulan fəaliyyətə başladığı gündən 3 gün sonra"
    ]
  },
  {
    numb: 36,
    question: "“Sadələşdirilmiş vergi üzrə sabit məbləğin və məcburi dövlət sosial sığorta haqqının ödənilməsi haqqında qəbz” vergi ödəyicisi yazılı müraciət etdikdə hansı müddətə, elektron qaydada müraciət etdikdə hansı müddətə verilir?",
    answer: "D)	“Sadələşdirilmiş vergi üzrə sabit məbləğin və məcburi dövlət sosial sığorta haqqınm ödənilməsi haqqında qəbz” vergi ödəyicisi yazılı müraciət etdikdə iki iş günündən gec olmayaraq, elektron qaydada müraciət etdikdə isə real vaxt rejimində verilir.",
    options: [
      "A)	“Sadələşdirilmiş vergi üzrə sabit məbləğin və məcburi dövlət sosial sığorta haqqının ödənilməsi haqqında qəbz” vergi ödəyicisi yazılı müraciət etdikdə bir iş günündən gec olmayaraq, elektron qaydada müraciət etdikdə isə real vaxt rejimində verilir.",
      "B)	Dövlət Vergi Xidmətindən Vergi Məcəlləsinin 220.10-cu maddə-sində nəzərdə tutulan fəaliyyətə başladığı gündən",
      "C)	“Sadələşdirilmiş vergi üzrə sabit məbləğin və məcburi dövlət sosial sığorta haqqının ödənilməsi haqqında qəbz” vergi ödəyicisi yazılı müraciət etdikdə üç iş günündən gec olmayaraq, elektron qaydada müraciət etdikdə müraciət etdiyi tarixdən bir gün sonra verilir.",
      "D)	“Sadələşdirilmiş vergi üzrə sabit məbləğin və məcburi dövlət sosial sığorta haqqınm ödənilməsi haqqında qəbz” vergi ödəyicisi yazılı müraciət etdikdə iki iş günündən gec olmayaraq, elektron qaydada müraciət etdikdə isə real vaxt rejimində verilir."
    ]
  },
  {
    numb: 37,
    question: "“Sadələşdirilmiş vergi üzrə sabit məbləğin, məcburi dövlət sosial sığorta və icbari tibbi sığorta haqqının ödənilməsi haqqında qəbz” almaq üçün vergi ödəyicisi sadələşdirilmiş vergini nə vaxtadək dövlət büdcəsinə ödəməlidir?",
    answer: "C)	“Sadələşdirilmiş vergi üzrə sabit məbləğin məcburi dövlət sosial sığorta və icbari tibbi sığorta haqqının ödənilməsi haqqında qəbz” alındığı günədək",
    options: [
      "A)	“Sadələşdirilmiş vergi üzrə sabit məbləğin və məcburi dövlət sosial sığorta haqqınm ödənilməsi haqqında qəbz” alındıqdan üç gün sonra",
      "B)	“Sadələşdirilmiş vergi üzrə sabit məbləğin və məcburi dövlət sosial sığorta haqqının ödənilməsi haqqında qəbz” almdığı gün",
      "C)	“Sadələşdirilmiş vergi üzrə sabit məbləğin məcburi dövlət sosial sığorta və icbari tibbi sığorta haqqının ödənilməsi haqqında qəbz” alındığı günədək",
      "D)	“Sadələşdirilmiş vergi üzrə sabit məbləğin və məcburi dövlət sosial sığorta haqqının ödənilməsi haqqında qəbz” alındıqdan bir ay sonra"
    ]
  },
  {
    numb: 38,
    question: "Vergi ödəyicisi bir il müddətinə qüvvədə olan “Sadələşdirilmiş vergi üzrə sabit məbləğin, məcburi dövlət sosial sığorta və icbari tibbi sığorta haqqının ödənilməsi haqqında qəbz” almış və iki ay sonra fəaliyyətini dayandırmışdır. Fiziki şəxs tərəfindən ödənilmiş vergi hansı müddətə ona geri qaytarılmalı və ya növbəti dövrlərin (ay, rüb, yarım il və il) vergiləri ilə əvəzləşdiril-məlidir?",
    answer: "A)	Fiziki şəxs tərəfindən ödənilmiş vergi məcburi dövlət sosial sığorta və icbari tibbi sığorta haqqı geri qaytarılmır və ya növbəti dövrlərin (ay, rüb, yarım il və il) vergiləri ilə əvəzləşdirilmir.",
    options: [
      "A)	Fiziki şəxs tərəfindən ödənilmiş vergi məcburi dövlət sosial sığorta və icbari tibbi sığorta haqqı geri qaytarılmır və ya növbəti dövrlərin (ay, rüb, yarım il və il) vergiləri ilə əvəzləşdirilmir.",
      "B)	Fiziki şəxs tərəfindən ödənilmiş vergi sığorta məcburi dövlət sosial sığorta və icbari tibbi haqqı 3 ay müddətinə geri qaytarılır və ya növbəti dövrlərin (ay, rüb, yarım il və il) vergiləri ilə əvəzləşdirilir.",
      "C)	Fiziki şəxs tərəfindən ödənilmiş vergi və məcburi dövlət sosial sığorta haqqı 1 ay müddətinə geri qaytarılır və ya növbəti dövrlərin (ay, rüb, yarım il və il) vergiləri ilə əvəzləşdirilir.",
      "D)	Fiziki şəxs tərəfindən ödənilmiş verginin 50%-i onun müraciət etdiyi gündən 3 gün müddətinə geri qaytarılır və ya növbəti dövrlərin (ay, rüb, yarım il və il) vergiləri ilə əvəzləşdirilir."
    ]
  },
  {
    numb: 39,
    question: "Vergi Məcəlləsinin 218.4.4-cü maddəsində göstərilən fəaliyyətlə məşgui oian fiziki şəxslərin Azərbaycan Respublikasının hüdudlarından kənarda bu fəaliyyət üzrə göstərilən xidmətlərə görə əldə etdiyi gəlirləri vergiyə necə cəlb olunur?",
    answer: "B)	Ümumi qaydada müvafiq vergilərə cəlb edilir",
    options: [
      "A)	Vergidən azaddır",
      "B)	Ümumi qaydada müvafiq vergilərə cəlb edilir",
      "C)	Gəlirlərin 50 faizi vergiyə cəlb olunur",
      "D)	Hər bir fəaliyyət növü üçün ayrılıqda vergiyə cəlb olunur."
    ]
  },
  {
    numb: 40,
    question: "Vergi ödəyiciləri Vergi Məcəlləsinin 220.10-cu maddəsində müəyyən olunan fəaliy-yət növlərindən bir neçəsi ilə məşğul olduğu halda “Sadələşdirilmiş vergi üzrə sabit məbləğin, məcburi dövlət sosial sığorta və icbari tibbi sığorta haqqının ödənilməsi haqqında qəbz”-i necə almalıdır?",
    answer: "D)	Hər bir fəaliyyət növü üçün ayrılıqda alırlar.",
    options: [
      "A)	Hamısına bir qəbz alırlar",
      "B)	Qəbz almırlar",
      "C)	Sadələşdirilmiş vergi üzrə sabit məbləğin ödənilməsi qaydası ilə alırlar",
      "D)	hər bir fəaliyyət növü üçün ayrılıqda alırlar."
    ]
  },
  {
    numb: 41,
    question: "“Sadələşdirilmiş vergi üzrə sabit məbləğin, məcburi dövlət sosial sığorta və icbari tibbi sığorta haqqının ödənilməsi haqqında qəbz”-i əldə edən vergi ödəyiciləri nağd pul hesablaşmaları zamanı alıcıya qəbz və digər ciddi hesabat blankları təqdim etməlidirlərmi?",
    answer: "D)	Vergi Məcəllsiənin 16.1.9-cu maddəsində nəzərdə tutulmuş müvafiq qəbz və digər ciddi hesabat blanklarını təqdim etməlidirlər",
    options: [
      "A)	Xeyr",
      "B)	Yalnız nəzarət-kassa aparatı çeki təqdim etməlidir",
      "C)	Yalnız qəbz təqdim etməlidir",
      "D)	Vergi Məcəllsiənin 16.1.9-cu maddəsində nəzərdə tutulmuş müvafiq qəbz və digər ciddi hesabat blanklarını təqdim etməlidirlər"
    ]
  },
  ];
