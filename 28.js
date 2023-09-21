// создание вопросов и ответов
let questions = [
    {
    numb: 1,
    question: "Vergi M. 218.4.5.-Cİ maddəsində göstərilən şəxslər üçün vergitutma obyekti nədir?",
    answer: "B)	Mülkiyyətində olan torpaq sahələri",
    options: [
      "A)	Mülkiyyətində olan torpaq sahələri və təqdim edilmiş mallara görə gəlirlər",
      "B)	Mülkiyyətində olan torpaq sahələri",
      "C)	Yalnız təqdim edilmiş əmlaka görə gəlirlər",
      "D)	Təqdim edilmiş mallara [işlərə, xidmətlərə] və əmlaka görə əldə edilmiş ümumi hasilat, habelə satışdankənar gəlirlər (ödəmə mənbəyində vergi tutulmuş gəlirlər istisna edilməklə)"
    ]
  },
  {
    numb: 2,
    question: "İdman mərc oyunlarının operatoru üçün sadələşdirilmiş verginin vergitutma obyek-ti nədir?",
    answer: "C)	Bütün oyun iştirakçılarından qəbul edilmiş pul vəsaiti",
    options: [
      "A)	Qalib gəlmiş iştirakçılardan qəbul edilmiş pul vəsaiti",
      "B)	Məğlub olmuş iştirakçılardan qəbul edilmiş pul vəsaiti",
      "C)	Bütün oyun iştirakçılarından qəbul edilmiş pul vəsaiti",
      "D)	Bütün oyun iştirakçılarından qəbul edilmiş pul vəsaiti ilə qalib gəlmiş iştirakçılardan qəbul edilmiş pul vəsaiti arasındakı fərq"
    ]
  },
  {
    numb: 3,
    question: "İdman mərc oyunlarının satıcısı üçün sadələşdirilmiş verginin vergitutma obyekti nədir?",
    answer: "B)	Operatorun ona verdiyi komisyon haqq",
    options: [
      "A)	Oatorun ona verdiyi əmək haqqı",
      "B)	Operatorun ona verdiyi komisyon haqq",
      "C)	Oyun iştirakçılarından qəbul edilmiş pul vəsaiti",
      "D)	Bütün oyun iştirakçılarından qəbul edilmiş pul vəsaiti ilə qalib gəlmiş iştirakçılardan qəbul edilmiş pul vəsaiti arasındakı fərq"
    ]
  },
  {
    numb: 4,
    question: "Lotereya təşkilatçısı üçün sadələşdirilmiş verginin vergitutma obyekti nədir?",
    answer: "D)	Lotereya biletlərinin satışından əldə edilmiş vəsait",
    options: [
      "A)	Bütün oyun iştirakçılarından qəbul edilmiş pul vəsaiti",
      "B)	Operatorun ona verdiyi komisyon haqq",
      "C)	Oyun iştirakçılarından qəbul edilmiş pul vəsaiti",
      "D)	Lotereya biletlərinin satışından əldə edilmiş vəsait"
    ]
  },
  {
    numb: 5,
    question: "Lotereya biletlərinin satıcısı üçün sadələşdirilmiş verginin vergitutma obyekti nədir?",
    answer: "D)	Lotereya təşkilatçısının ona verdiyi haqq (mükafat)",
    options: [
      "A)	Lotereya biletlərinin satışından əldə edilmiş vəsait",
      "B)	Operatorun ona verdiyi komisyon haqq",
      "C)	Oyun iştirakçılarından qəbul edilmiş pul vəsaiti",
      "D)	Lotereya təşkilatçısının ona verdiyi haqq (mükafat)"
    ]
  },
  {
    numb: 6,
    question: "Sadələşdirilmiş vergini ödəyən hüquqi şəxslər hansı vergilərin ödəyicisi sayılmırlar?",
    answer: "A)	ƏDV, mənfəət vergisinin",
    options: [
      "A)	ƏDV, mənfəət vergisinin",
      "B)	Torpaq, yol vergisinin",
      "C) ƏDV, mənfəət vergisinin və əmlak vergisinin",
      "D) Əmlak vergisinin və mənfəət vergisinin"
    ]
  },
  {
    numb: 7,
    question: "Sadələşdirilmiş vergini ödəyən hüquqi şəxs yaratmadan sahibkarlıq fəaliyyətini həyata keçirən fiziki şəxslər hansı vergilərin ödəyicisi sayılmırlar?",
    answer: "A)	Gəlir vergisinin və ƏDV-nin",
    options: [
      "A)	Gəlir vergisinin və ƏDV-nin",
      "B)	ƏDV, əmlak vergisinin",
      "C) Gəlir vergisinin, torpaq vergisinin",
      "D) Gəlir vergisinin, əmlak vergisinin"
    ]
  },
  {
    numb: 8,
    question: "Sadələşdirilmiş verginin ödəyicisi olan şəxs aşağıda göstərilən vergilərdən hansını ödəməkdən azaddır?",
    answer: "D) Mənfəət vergisi",
    options: [
      "A) Torpaq vergisi",
      "B) Yol vergisi",
      "C) Mədən vergisi",
      "D) Mənfəət vergisi"
    ]
  },
  {
    numb: 9,
    question: "Sadələşdirilmiş verginin ödəyicisi olan fiziki şəxs aşağıda göstərilən vergilərdən han¬sını ödəməkdən azaddır?",
    answer: "B)	Gəlir vergisinin və ƏDV-nin",
    options: [
      "A)	Əmlak vergisinin və torpaq vergisinin",
      "B)	Gəlir vergisinin və ƏDV-nin",
      "C) Torpaq vergisinin və ƏDV-nin",
      "D) Əmlak vergisinin və ƏDV-nin"
    ]
  },
  {
    numb: 10,
    question: "Sadələşdirilmiş vergi (Vergi Məcəlləsinin 218.4-cü maddəsində nəzərdə tutulmuş fəaliyyətlə məşğul olan və 218.1.2-ci maddəsində göstərilən vergi ödəyiciləri istisna olmaqla) neçə faiz dərəcə ilə hesablanır?",
    answer: "C) 2 faiz dərəcəsi ilə",
    options: [
      "A) 4 faiz dərəcəsi ilə",
      "B) Bakı şəhəri istisna olmaqla 2 faiz dərəcəsi ilə",
      "C) 2 faiz dərəcəsi ilə",
      "D) 6 faiz dərəcəsi ilə"
    ]
  },
  {
    numb: 11,
    question: "Vergi tutulan əməliyyatlarının həcmi ardıcıl 12 aylıq dövrün istənilən ayında (aylarında) 200.000 manatdan artıq olan ictimai iaşə fəaliyyəti ilə məşğul olan şəxslərdə sadələşdirilmiş vergi neçə faiz dərəcə ilə hesablanır?",
    answer: "D) 8 faiz dərəcəsi ilə",
    options: [
      "A)	18 faiz dərəcəsi ilə",
      "B)	2 faiz dərəcəsi ilə",
      "C) 4 faiz dərəcəsi ilə",
      "D) 8 faiz dərəcəsi ilə"
    ]
  },
  {
    numb: 12,
    question: "Taksi ilə sərnişin daşınmasına görə 1 ədəd nəqliyyat vasitəsi üçün sadələşdirilmiş verginin aylıq məbləği nə qədərdir?",
    answer: "D) 9 manat",
    options: [
      "A) 3 manat",
      "B) 5 manat",
      "C) 8 manat",
      "D) 9 manat"
    ]
  },
  {
    numb: 13,
    question: "Avtomobil nəqliyyatı vasitələri ilə yük daşınarkən 1 ton yük götürmə qabiliyyətinə görə sadələşdirilmiş verginin aylıq məbləği nə qədərdir?",
    answer: "A) 1 manat",
    options: [
      "A) 1 manat",
      "B) 2 manat",
      "C) 3 manat",
      "D) 4 manat"
    ]
  },
  {
    numb: 14,
    question: "Avtomobil nəqliyyatı vasitələri ilə Azərbaycan Respublikasının ərazisində sərnişin [taksi istisna olmaqla] daşımalarını həyata keçirən şəxslər üçün sadələşdirilmiş vergi hansı göstəriciyə əsasən müəyyən edilir?",
    answer: "A)	Oturacaq yerlerinin sayma görə",
    options: [
      "A)	Oturacaq yerlerinin sayma görə",
      "B)	Yük götürmə qabiliyyətinə görə",
      "C) Nəqliyyat vasitələrinin sayma görə",
      "D) Mühərrikin həcminə görə"
    ]
  },
  {
    numb: 15,
    question: "Avtomobil nəqliyyatı vasitələri ilə Azərbaycan Respublikasının ərazisində yük daşı-malarını həyata keçirən şəxslər üçün sadələşdirilmiş vergi nəyə əsasən müəyyən edilir?",
    answer: "A)	Yükgötürmə qabiliyyətinə görə (hər tona)",
    options: [
      "A)	Yükgötürmə qabiliyyətinə görə (hər tona)",
      "B)	Mühərrikinin həcminə görə",
      "C)	Mühərrikin gücünə görə",
      "D)	Avtonəqliyyat vasitəsinin buraxılış ilinə görə"
    ]
  },
  {
    numb: 16,
    question: "Avtomobil nəqliyyatı vasitələri ilə Azərbaycan Respublikasının ərazisində sərnişin və yük [taksi istisna olmaqla] daşımalarını həyata keçirən şəxslər üçün sadələşdirilmiş verginin dərəcəsi hansı göstərici ilə ifadə olunur?",
    answer: "A)	Manatla",
    options: [
      "A)	Manatla",
      "B)	Aylıq gəlirin vergi tutulmayan məbləğinin mİSİİ İlə",
      "C)	Nəqliyyat vasitəsinin sayma əsasən",
      "D)	Şərti maliyyə vahidinin misli ilə"
    ]
  },
  {
    numb: 17,
    question: "Bakı şəhəri ilə ölkənin digər yaşayış məntəqələri arasında həyata keçirilən yük və sərnişin daşınmasına görə sadələşdirilmiş verginin məbləğinə hansı əmsal tətbiq edilir?",
    answer: "A) 2",
    options: [
      "A) 2",
      "B) 1,5",
      "C) 1,0",
      "D) 4"
    ]
  },
  {
    numb: 18,
    question: "Abşeron rayonu ilə ölkənin digər yaşayış məntəqələri arasında (Bakı şəhəri istisna olmaqla) həyata keçirilən yük və sərnişin daşınmasına görə sadələşdirilmiş verginin məbləği¬nə hansı əmsal tətbiq edilir?",
    answer: "D) 1,5",
    options: [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 1,5"
    ]
  },
  {
    numb: 19,
    question: "Sumqayıt şəhəri ilə ölkənin digər yaşayış məntəqələri arasında (Bakı şəhəri istisna olmaqla) həyata keçirilən yük və sərnişin daşınmasına görə sadələşdirilmiş verginin məbləği¬nə hansı əmsal tətbiq edilir?",
    answer: "B) 1,5",
    options: [
      "A) 1",
      "B) 1,5",
      "C) 2",
      "D) 3"
    ]
  },
  {
    numb: 20,
    question: "Gəncə şəhəri ilə ölkənin digər yaşayış məntəqələri arasında (Bakı şəhəri istisna olmaqla) həyata keçirilən yük və sərnişin daşınmasına görə sadələşdirilmiş verginin məblə¬ğinə hansı əmsal tətbiq edilir?",
    answer: "A) 1,5",
    options: [
      "A) 1,5",
      "B) 2",
      "C) 1",
      "D) 3"
    ]
  },
  {
    numb: 21,
    question: "Digər şəhər və rayonlarda və həmin şəhər və rayonlarla digər yaşayış məntəqələri arasında (Bakı şəhəri, Abşeron rayonu, Sumqayıt, və Gəncə şəhərləri istisna olmaqla) həyata keçirilən yük və sərnişin daşınmasına görə sadələşdirilmiş verginin məbləğinə hansı əmsal tətbiq edilir?",
    answer: "C) 1",
    options: [
      "A) 1,5",
      "B) 2",
      "C) 1",
      "D) 3"
    ]
  },
  {
    numb: 22,
    question: "Avtomobil nəqliyyatı vasitələrində [taksi istisna olmaqla] oturacaq yerlərinin sayı və ya yük götürmə qabiliyyəti nəyə əsasən müəyyən edilir?",
    answer: "A)	Avtomobil nəqliyyatı vasitələrinin qeydiyyat şəhadətnaməsinə əsasən",
    options: [
      "A)	Avtomobil nəqliyyatı vasitələrinin qeydiyyat şəhadətnaməsinə əsasən",
      "B)	Faktiki oturacaq yerlərinin sayma əsasən",
      "C)	Sürücünün müəyyənləşdirdiyi qaydaya əsasən",
      "D)	Avtonəqliyyat vasitəsinin texniki pasportuna əsasən"
    ]
  },
  {
    numb: 23,
    question: "Avtomobil nəqliyyatı vasitələrindəki (taksi istisna olmaqla) oturacaq yerlərinin sayı və ya yükgötürmə qabiliyyəti avtomobil nəqliyyatı vasitələrinin qeydiyyat şəhadətnaməsində göstərilmədikdə, həmin göstəricilər hansı sənədə əsasən müəyyən edilir?",
    answer: "B)	Daxili İşlər Nazirliyi tərəfindən vergi orqanlarına verilmiş arayışlar əsasında",
    options: [
      "A)	İcra hakimiyyəti tərəfindən verilmiş arayışlar əsasında",
      "B)	Daxili İşlər Nazirliyi tərəfindən vergi orqanlarına verilmiş arayışlar əsasında",
      "C)	Bələdiyyə orqanlarına verilmiş arayışlar əsasında",
      "D)	Gömrük orqanı tərəfindən verilmiş arayış əsasında"
    ]
  },
  {
    numb: 24,
    question: "Oturacaq yerlərinin sayını avtomobil nəqliyyatı vasitələrinin qeydiyyat şəhadət-naməsi və ya Daxili İşlər Nazirliyi tərəfindən verilmiş arayışlar əsasında müəyyən etmək mümkün olmadıqda, sadələşdirilmiş verginin məbləği necə müəyyən edilir?",
    answer: "A)	Yerlərin faktiki sayına görə",
    options: [
      "A)	Yerlərin faktiki sayına görə",
      "B)	Mühərrikinin həcminə görə",
      "C) Vergi ödəyicisinin müəyyən etdiyi qaydada",
      "D) Vergi orqanının müəyyən etdiyi qaydada"
    ]
  },
  {
    numb: 25,
    question: "Vergi Məcəlləsinin 218.4.5-ci maddəsində göstərilən şəxslər üçün sadələşdirilmiş vergi Vergi Məcəlləsinin 206.3-cü maddəsində nəzərdə tutulmuş torpaq sahələrinin hər kvadratmetri üçün neçə manatdır?",
    answer: "C)	Mülkiyyətində olan toıpaq sahəsinin hər kvadratmetri üçün 0,5 manat",
    options: [
      "A)	Mülkiyyətində olan torpaq sahəsinin hər 100 kvadratmetrə üçün 0,5 manat ",
      "B)	Torpaq sahəsinin hər 100 kvadratmetrinə görə 2 manat müəyyən edilir.",
      "C)	Mülkiyyətində olan toıpaq sahəsinin hər kvadratmetri üçün 0,5 manat",
      "D)	Torpaq sahəsinin hər 100 kvadratmetrinə görə 1 manat müəyyən edilir"
    ]
  },
  {
    numb: 26,
    question: "Mülkiyyətində olan yaşayış və qeyri-yaşayış sahələrinin təqdim edilməsini həyata keçirən fiziki şəxslər vergini hansı qaydada hesablayılar?",
    answer: "B)	Vergi Məcəlləsinin 219.3-1-ci maddəsində göstərilən vergitutma obyektinin hər kvadrat-metri üçün 15 manat olmaqla Vergi Məcəlləsinin 220.8-ci maddəsi ilə müəyyən edilmiş qaydada hesablanır.",
    options: [
      "A)	Mənzillərin satışından əldə edilmiş vəsaitin 4 faizi həcmində",
      "B)	Vergi Məcəlləsinin 219.3-1-ci maddəsində göstərilən vergitutma obyektinin hər kvadrat-metri üçün 15 manat olmaqla Vergi Məcəlləsinin 220.8-ci maddəsi ilə müəyyən edilmiş qaydada hesablanır.",
      "C)	Vergitutma obyektinin hər kvadrat metri üçün 10 manat məbləğinə vergi tətbiq etməklə",
      "D)	Vergi Məcəlləsinin 219.3-cü maddəsində göstərilən vergitutma obyektinin hər kvadratmetri üçün 45 manat"
    ]
  },
  {
    numb: 27,
    question: "Kənd təsərrüfatı təyinatlı torpaqlara görə sadələşdirilmiş vergi hesablanarkən tor-paq sahəsinin yerləşdiyi ərazi üzrə zona əmsalları necə tətbiq olunur?",
    answer: "A)	Zona əmsalları tətbiq olunmur",
    options: [
      "A)	Zona əmsalları tətbiq olunmur",
      "B)	Yalnız torpaqların keyfiyyət qrupuna görə tətbiq olunur.",
      "C)	Vergi Məcəlləsi ilə müəyyən olunmuş sadələşdir, vergi məbləğinə 1,5 əmsal tətbiq olunur",
      "D)	Vergi Məcəlləsi ilə müəyyən olunmuş sadələşdir, vergi məbləğinə 2 əmsal tətbiq olunur"
    ]
  },
  {
    numb: 28,
    question: "Vergi Məcəlləsinin 218.4.5-ci maddəsində göstərilən şəxslər üçün kənd təsərrüfatı təyinatlı torpaqlar üzrə sadələşdirilmiş vergi necə müəyyən olunur?",
    answer: "D)	Vergi Məcəlləsinin 206.1-1-ci maddəsinə uyğun olaraq hesablanmış torpaq vergisinin 2 misli məbləğində hesablanır.",
    options: [
      "A)	Vergi Məcəlləsinin 206.1-1-ci maddəsinə uyğun olaraq hesablanmış torpaq vergisinin 3 misli məbləğində hesablanır.",
      "B)	Torpaq sahəsinin hər 100 kvadratmetrinə görə 2 manat müəyyən edilir.",
      "C)	Mülkiyyətində olan torpaq sahəsinin hər kvadratmetri üçün 0,5 manat",
      "D)	Vergi Məcəlləsinin 206.1-1-ci maddəsinə uyğun olaraq hesablanmış torpaq vergisinin 2 misli məbləğində hesablanır."
    ]
  },
  {
    numb: 29,
    question: "Aşağıdakılardan hansı doğrudur? 1)	bina və torpaq sahəsi Bakı şəhəri, habelə onun qəsəbə və kəndlərində yerləşdikdə sadələş-dirilmiş vergi məbləğinə 1-ci zona üzrə 4,0 əmsal, 2-ci zona üzrə isə 3,0 əmsal tətbiq olunur 2)	bina və torpaq sahəsi Bakı şəhəri, habelə onun qəsəbə və kəndlərində yerləşdikdə sadələş-dirilmiş vergi məbləğinə 1-ci zona üzrə 3,0 əmsal, 2-ci zona üzrə isə 2,0 əmsal tətbiq olunur 3)	bina və torpaq sahəsi Bakı şəhəri, habelə onun qəsəbə və kəndlərində yerləşdikdə sadələş-dirilmiş vergi məbləğinə 3 və 4-cü zona üzrə 2,1 əmsal, 5 və 6-cı zona üzrə isə 1,5 əmsal tətbiq olunur 4)	bina və torpaq sahəsi Bakı şəhəri, habelə onun qəsəbə və kəndlərində yerləşdikdə sadələş-dirilmiş vergi məbləğinə 3 və 4-cü zona üzrə 2,2 əmsal, 5 və 6-cı zona üzrə isə 1,8 əmsal tətbiq olunur 5)	bina və torpaq sahəsi Bakı şəhəri, habelə onun qəsəbə və kəndlərində yerləşdikdə sadələş¬dirilmiş vergi məbləğinə 7,8,9-cu zona üzrə 1,2 əmsal, 10,11,12-ci zona üzrə isə 1,0 əmsal tətbiq olunur 6)	bina və torpaq sahəsi Bakı şəhəri, habelə onun qəsəbə və kəndlərində yerləşdikdə sadələş-dirilmiş vergi məbləğinə 7,8,9-cu zona üzrə 1,5 əmsal, 10,11,12-ci zona üzrə isə 1,2 əmsal tətbiq olunur",
    answer: "A) 1,4,6",
    options: [
      "A) 1,4,6",
      "B) 2,3,5",
      "C) 1,3,4",
      "D) 3,5,6"
    ]
  },
  {
    numb: 30,
    question: "Aşağıdakılardan hansı doğru olmayanlara aid deyil? 1)	bina və torpaq sahəsi digər rayon (şəhər) və qəsəbələrdə (kəndlərdə) yerləşdikdə, sadələş-dirilmiş vergi məbləğinə 0,2 əmsal tətbiq olunur 2)	bina və torpaq sahəsi Gəncə, Sumqayıt və Xırdalan şəhərlərində yerləşdikdə, sadələş¬dirilmiş vergi məbləğinə 1,3 əmsal tətbiq olunur 3)	bina və torpaq sahəsi Gəncə, Sumqayıt və Xırdalan şəhərlərində yerləşdikdə, sadələş¬dirilmiş vergi məbləğinə 1,5 əmsal tətbiq olunur 4)	bina və torpaq sahəsi Abşeron rayonunun qəsəbə və kəndləri (Xırdalan şəhəri istisna olmaqla), Şirvan, Mingəçevir, Naxçıvan, Lənkəran, Yevlax, Şəki və Naftalan şəhərlərində yerləş¬dikdə, sadələşdirilmiş vergi məbləğinə 1,0 əmsal tətbiq olunur 5)	bina və torpaq sahəsi Abşeron rayonunun qəsəbə və kəndləri (Xırdalan şəhəri istisna olmaqla), Şirvan, Mingəçevir, Naxçıvan, Lənkəran, Yevlax, Şəki və Naftalan şəhərlərində yerləş¬dikdə, sadələşdirilmiş vergi məbləğinə 1,2 əmsal tətbiq olunur 6)	bina və torpaq sahəsi digər rayon (şəhər) və qəsəbələrdə (kəndlərdə) yerləşdikdə, sadələş-dirilmiş vergi məbləğinə 0,3 əmsal tətbiq olunur",
    answer: "D) 3,5,6",
    options: [
      "A) 1,4,6",
      "B) 2,3,5",
      "C) 1,3,4",
      "D) 3,5,6"
    ]
  },
  {
    numb: 71,
    question: "Vergi Məcəlləsinin 218.4.3-cü maddəsində göstərilən şəxslər üçün binaların qeyri- yaşayış sahələrinin təqdim edilməsi üzrə sadələşdirilmiş vergi hansı qaydada vergiyə cəlb olunur?",
    answer: "A)	Vergi Məcəlləsinin 220.8-ci maddəsi ilə hesablanmış məbləğə 1,5 əmsal tətbiq edilməklə hesablanır.",
    options: [
      "A)	Vergi Məcəlləsinin 220.8-ci maddəsi ilə hesablanmış məbləğə 1,5 əmsal tətbiq edilməklə hesablanır.",
      "B)	Vergi Məcəlləsinin 219.3-1-Cİ maddəsində göstərilən vergitutma obyektinin hər kvadrat-metri üçün 15 manat olmaqla, bu maddə ilə müəyyən edilmiş qaydada hesablanır.",
      "C)	Vergitutma obyektinin hər kvadrat metri üçün 10 manat məbləğinə vergi tətbiq etməklə",
      "D)	Vergi Məcəlləsinin 219.3-cü maddəsində göstərilən vergitutma obyektinin hər kvadratmetri üçün 45 manat"
    ]
  },
  {
    numb: 72,
    question: "Sənaye, tikinti, nəqliyyat, rabitə, ticarət-məişət xidməti və digər xüsusi təyinatlı tor-paqları təqdim edən şəxslər üçün sadələşdirilmiş vergi necə hesablanır?",
    answer: "B)	Vergi Məcəlləsinin 220.8-ci maddəsinin ikinci abzası ilə hesablanmış məbləğə Bakı şəhəri, habelə onun qəsəbə və kəndlərində 1,5 əmsal, Gəncə, Sumqayıt, Xırdalan şəhərlərində 1,3 əmsal, Abşeron rayonunun qəsəbə və kəndləri, Şirvan, Mingəçevir, Naxçıvan, Lənkəran, Yevlax, Şəki və Naftalan şəhərlərində 1,2 əmsal və digər rayon (şəhər) və qəsəbələrdə (kəndlərdə) 1,1 əmsal tətbiq edilməklə hesablanır.",
    options: [
      "A)	Vergi Məcəlləsinin 220.8-ci maddəsinin ikinci abzası ilə hesablanmış məbləğin Bakı şəhəri, habelə onun qəsəbə və kəndlərində 1,5 misli, Gəncə, Sumqayıt, Xırdalan şəhərlərində 1,3 misli, Abşeron rayonunun qəsəbə və kəndləri, Şirvan, Mingəçevir, Naxçıvan, Lənkəran, Yevlax, Şəki və Naftalan şəhərlərində 1,2 misli və digər rayon (şəhər) və qəsəbələrdə (kəndlərdə) 1,1 misli miqdarmda hesablanır.",
      "B)	Vergi Məcəlləsinin 220.8-ci maddəsinin ikinci abzası ilə hesablanmış məbləğə Bakı şəhəri, habelə onun qəsəbə və kəndlərində 1,5 əmsal, Gəncə, Sumqayıt, Xırdalan şəhərlərində 1,3 əmsal, Abşeron rayonunun qəsəbə və kəndləri, Şirvan, Mingəçevir, Naxçıvan, Lənkəran, Yevlax, Şəki və Naftalan şəhərlərində 1,2 əmsal və digər rayon (şəhər) və qəsəbələrdə (kəndlərdə) 1,1 əmsal tətbiq edilməklə hesablanır.",
      "C)	Vergi Məcəlləsinin 220.8-ci maddəsinin ikinci abzası ilə hesablanmış məbləğə 2 əmsal tətbiq edilir",
      "D)	Vergi Məcəlləsinin 206.1-1-ci maddəsinə uyğun olaraq hesablanmış torpaq vergisinin 2 misli məbləğində hesablanır."
    ]
  },
  {
    numb: 73,
    question: "İdman mərc oyunlarının operatoru tərəfindən idman mərc oyunları biletlərinin satışından əldə edilmiş vəsaitdən neçə faiz dərəcəsi ilə sadələşdirilmiş vergi hesablanır?",
    answer: "C) 6%",
    options: [
      "A) 2%",
      "B) 4%",
      "C) 6%",
      "D) 8%"
    ]
  },
  {
    numb: 74,
    question: "İdman mərc oyunlarının satıcısı tərəfindən idman mərc oyunlarının operatorunun ona verdiyi haqdan (mükafatdan) neçə faiz dərəcə ilə sadələşdirilmiş vergi hesablanır?",
    answer: "B) 4%",
    options: [
      "A) 2%",
      "B) 4%",
      "C) 6%",
      "D) 8%"
    ]
  },
  {
    numb: 75,
    question: "Lotereya təşkilatçısı tərəfindən lotereya biletlərinin satışından əldə edilmiş vəsaitdən neçə faiz dərəcə ilə sadələşdirilmiş vergi hesablanır?",
    answer: "A) 6%",
    options: [
      "A) 6%",
      "B) 4% ",
      "C) 2%",
      "D) 8%"
    ]
  },
  {
    numb: 76,
    question: "Lotereya biletlərinin satıcısı tərəfindən isə lotereya təşkilatçısının ona verdiyi haqdan (mükafatdan) neçə faiz dərəcə ilə sadələşdirilmiş vergi hesablanır",
    answer: "D) 4%",
    options: [
      "A) 6%",
      "B) 2%",
      "C) 8%",
      "D) 4%"
    ]
  },
  {
    numb: 77,
    question: "Toylarda, şənliklərdə və digər tədbirlərdə aparıcılıq, çalğıçılıq, rəqqaslıq, aşıqlıq, məzhəkəçilik və digər oxşar fəaliyyətlə məşğul olan fiziki şəxslər üçün sadələşdirilmiş vergi¬nin məbləği nə qədərdir?",
    answer: "C) 20",
    options: [
      "A) 15",
      "B) 50",
      "C) 20",
      "D) 30"
    ]
  },
  {
    numb: 78,
    question: "Fərdi foto, audio-video xidmətləri (foto studiyalar istisna olmaqla) sahəsində fəaliyyətlə məşğul olan fiziki şəxslər üçün sadələşdirilmiş verginin məbləği nə qədərdir?",
    answer: "A) 15",
    options: [
      "A) 15",
      "B) 50",
      "C) 20",
      "D) 30"
    ]
  },
  {
    numb: 79,
    question: "Fərdi yaşayış evlərində Və mənzillərdə ev qulluqçusu, xəstələrə, qocalara və uşaq-lara qulluq xidməti, dayə, fərdi sürücülük, ev təsərrüfatında təmizlik, bağban, aşbaz, gözətçi və iaşə obyektlərində müştərilərə xidmət göstərən fiziki şəxslər (ofisiant) ilə məşğul olan fiziki şəxslər üçün sadələşdirilmiş verginin məbləği nə qədərdir?",
    answer: "A) 10",
    options: [
      "A) 10",
      "B) 15",
      "C) 20",
      "D) 30"
    ]
  },
  {
    numb: 80,
    question: "Saat, televizor, soyuducu və digər məişət cihazlarının təmiri ilə məşğul olan fiziki şəxslər üçün sadələşdirilmiş verginin məbləği nə qədərdir?",
    answer: "A) 10",
    options: [
      "A) 10",
      "B) 15",
      "C) 20",
      "D) 30"
    ]
  },
  ];
