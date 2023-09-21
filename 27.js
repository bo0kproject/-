// создание вопросов и ответов
let questions = [
    {
    numb: 1,
    question: "ƏDV məqsədləri üçün qeydiyyata alınmamış və ardıcıl on iki aylıq dövrün istənilən ayında (aylarında) vergi tutulan əməliyyatlarının həcmi ən azı hansı məbləğlərdən az olan hüquqi və fiziki şəxslər sadələşdirilmiş vergi ödəyicisi ola bilərlər?",
    answer: "A)	200000 manat və ondan az",
    options: [
      "A)	200000 manat və ondan az",
      "B)	210000 manat və ondan az",
      "C) 150000 manat və ondan az",
      "D) 90000 manat və ondan az"
    ]
  },
  {
    numb: 2,
    question: "Vergi tutulan əməliyyatlarının həcmi ardıcıl 12 aylıq dövrün istənilən ayında 200.000 manatdan artıq olan hansı şəxslər sadələşdirilmiş verginin ödəyiciləridirlər?",
    answer: "B)	Vergi tutulan əməliyyatlarının həcmi ardıcıl 12 aylıq dövrün istənilən ayında (aylarında) 200.000 manatdan artıq olan ictimai iaşə fəaliyyəti ilə məşğul olan şəxslər",
    options: [
      "A)	Vergi tutulan əməliyyatlarının həcmi ardıcıl 12 aylıq dövrün istənilən ayında (aylarında) 200.000 manatdan artıq olan ticarət və (və ya) ictimai iaşə fəaliyyəti ilə məşğul olan şəxslər",
      "B)	Vergi tutulan əməliyyatlarının həcmi ardıcıl 12 aylıq dövrün istənilən ayında (aylarında) 200.000 manatdan artıq olan ictimai iaşə fəaliyyəti ilə məşğul olan şəxslər",
      "C)	Vergi tutulan əməliyyatlarının həcmi ardıcıl 12 aylıq dövrün istənilən ayında (aylarında) 200.000 manatdan artıq olan ticarət fəaliyyəti ilə məşğul olan şəxslər",
      "D)	Vergi tutulan əməliyyatlarının həcmi ardıcıl 12 aylıq dövrün istənilən ayında (aylarında) 200.000 manatdan artıq olan hansı şəxslər sadələşdirilmiş verginin ödəyiciləri ola bilməz"
    ]
  },
  {
    numb: 3,
    question: "Sadələşdirilmiş vergi ödəyicisi olmaq hüququna malik olan vergi ödəyiciləri müvafiq bəyannaməni və ya bu hüquqdan istifadə etməyəcəyi barədə yazılı məlumatı hansı müddətdə uçotda olduğu vergi orqanına təqdim etməlidirlər?",
    answer: "B)	Hər il aprel ayının 20-dən gec olmayaraq",
    options: [
      "A)	Hesabat dövründən sonrakı ayın 20-dən gec olmayaraq",
      "B)	Hər il aprel ayının 20-dən gec olmayaraq",
      "C)	Hər il aprel ayının 20-dək",
      "D)	Hesabat dövründün sonrakı aym 31 -dən gec olmayaraq"
    ]
  },
  {
    numb: 4,
    question: "Mülkiyyətində və ya istifadəsində olan avtonəqliyyat vasitələri ilə [beynəlxalq yük və sərnişin daşımaları istisna olmaqla] Azərb. Resp. ərazisində sərnişin və yük daşımalarını [o cümlədən taksi ilə] həyata keçirən şəxslər sadələşdirilmiş verginin ödəyicisi ola bilərlərmi?",
    answer: "B)	Vergi Məcəlləsinin 156-cı maddəsinin müddəaları nəzərə alınmaqla ola bilərlər",
    options: [
      "A)	Ola bilməzlər",
      "B)	Vergi Məcəlləsinin 156-cı maddəsinin müddəaları nəzərə alınmaqla ola bilərlər",
      "C)	Mənfəət vergisinin ödəyicisi ola bilərlər",
      "D) Əmlak vergisinin ödəyicisi ola bilərlər"
    ]
  },
  {
    numb: 5,
    question: "Aşağıda göstərilən şəxslərin hansının sadələşdirilmiş vergi ödəyicisi olmaq hüququ vardır?",
    answer: "C)	İdman mərc oyunlarının operatoru və idman mərc oyunlarının satıcıları, habelə lotereya təşkilatçısı və lotereya biletlərinin satıcıları olan şəxslər",
    options: [
      "A)	Yalnız idman mərc oyunlarının operatoru və idman mərc oyunlarının satıcıları, habelə lotereya biletlərinin satıcıları olan şəxslər",
      "B)	Yalnız lotereya təşkilatçısı və lotereya biletlərinin satıcıları olan şəxslər",
      "C)	İdman mərc oyunlarının operatoru və idman mərc oyunlarının satıcıları, habelə lotereya təşkilatçısı və lotereya biletlərinin satıcıları olan şəxslər",
      "D)	Lombardların"
    ]
  },
  {
    numb: 6,
    question: "Aşağıda göstərilən şəxslərin hansının sadələşdirilmiş vergi ödəyicisi olmaq hüququ vardır?",
    answer: "A)	mülkiyyətində olan yaşayış və qeyri-yaşayış sahələrinin təqdim edilməsini həyata keçirən fiziki şəxslər",
    options: [
      "A)	Mülkiyyətində olan yaşayış və qeyri-yaşayış sahələrinin təqdim edilməsini həyata keçirən fiziki şəxslər",
      "B)	Mülkiyyətində olan yaşayış və qeyrİ-yaşayiŞ Sahələrinin təqdim edilməsini həyata keçirən hüquqi və fiziki şəxslər",
      "C)	Mülkiyyətində olan yaşayış və qeyri-yaşayış sahələrinin təqdim edilməsini həyata keçirən hüquqi şəxslər ",
      "D)	Lombardların"
    ]
  },
  {
    numb: 7,
    question: "Aşağıda göstərilən şəxslərdən hansı sadələşdirilmiş verginin ödəyicisi ola bilər?",
    answer: "D)	Toylarda, şənliklərdə və digər tədbirlərdə aparıcıhq, çalğıçılıq, rəqqaslıq, aşıqlıq, məzhə-kəçilik və digər oxşar fəaliyyət məşğul olan şəxslər",
    options: [
      "A)	Ardıcıl 12 aylıq dövrün istənilən ayında (aylarında) vergi tutulan əməliyyatlarının həcmi 200.000 manatdan az olan investisiya fondları",
      "B)	Aksizli malları istehsal edən və ardıcıl 12 aylıq dövrün istənilən ayında (aylarında) vergi tutulan əməliyyatlarının həcmi 200.000 manatdan az olan şəxslər",
      "C)	Ardıcıl 12 aylıq dövrün istənilən ayında (aylarında) vergi tutulan əməliyyatlarının həcmi 200.000 manatdan az olan sığorta təşkilatları",
      "D)	Toylarda, şənliklərdə və digər tədbirlərdə aparıcıhq, çalğıçılıq, rəqqaslıq, aşıqlıq, məzhə-kəçilik və digər oxşar fəaliyyət məşğul olan şəxslər"
    ]
  },
  {
    numb: 8,
    question: "Aşağıda göstərilən şəxslərdən hansı sadələşdirilm verginin ödəyicisi ola bilər?",
    answer: "A)	Fərdi foto, audio-video xidmətləri (foto studiyalar istisna olmaqla) sahəsində fəaliyyətlə, çəkməçi, pinəçi, saat, televizor, soyuducu və digər məişət cihazlarının təmiri ilə məşğul olan şəxsi",
    options: [
      "A)	Fərdi foto, audio-video xidmətləri (foto studiyalar istisna olmaqla) sahəsində fəaliyyətlə, çəkməçi, pinəçi, saat, televizor, soyuducu və digər məişət cihazlarının təmiri ilə məşğul olan şəxsi",
      "B)	Aksizli malları istehsal edən və ardıcıl 12 aylıq dövrün istənilən ayında (aylarında) vergi tutulan əməliyyatlarının həcmi 200.000 manatdan az olan şəxslər",
      "C)	Ardıcıl 12 aylıq dövrün istənilən ayında (aylarında) vergi tutulan əməliyyatlarının həcmi 200.000 manatdan az olan sığorta təşkilatları",
      "D)	Toylarda, şənliklərdə və digər tədbirlərdə aparıcıhq, çalğıçılıq, rəqqaslıq, aşıqlıq, məzhə-kəçilik və digər oxşar fəaliyyət məşğul olan və ardıcıl 12 aylıq dövrün istənilən ayında (aylarmda) vergi tutulan əməliyyatlarının həcmi 200.000 manatdan az olan şəxslər"
    ]
  },
  {
    numb: 9,
    question: "Nəqqaşlıq emalatxanalarının fəaliyyətini həyata keçirən şəxslər sadələşdirilmiş ver-ginin ödəyicisi ola bilərlərmi?",
    answer: "B)	Ola bilərlər",
    options: [
      "A)	Ola bilməzlər",
      "B)	Ola bilərlər",
      "C) Mənfəət vergisinin ödəyicisi ola bilərlər",
      "D) Əmlak vergisinin ödəyicisi ola bilərlər"
    ]
  },
  {
    numb: 10,
    question: "Aşağıdakı şəxslərin hansının sadələşdirilmiş vergi ödəyicisi olmaq hüququ vardır? 1)	fərdi yaşayış evlərində və mənzillərdə ev qulluqçusu, xəstələrə, qocalara və uşaqlara qulluq xidməti, dayə, fərdi sürücülük, ev təsərrüfatında təmizlik, bağban, aşbaz, gözətçi və digər analoji işlərlə məşğul olan şəxslər 2)	mülkiyyətində olan torpaq sahələrinin təqdim edilməsini həyata keçirən fiziki şəxslər 3)	kredit təşkilatlarının 4)	lombardların",
    answer: "A) 1,2",
    options: [
      "A) 1,2",
      "B) 1,3",
      "C) 1,3,4",
      "D) heç birinin"
    ]
  },
  {
    numb: 11,
    question: "Aşağıda göstərilən şəxslərdən hansıların sadələşdirilmiş vergi ödəyicisi olmaq hüqu-qu yoxdur:",
    answer: "A)	Məcburi nişanlama ilə nişanlanmalı olan mallar istehsal edən, kredit təşkilatları, sığorta bazarının peşəkar iştirakçıları, investisiya fondları və bu fondların idarəçiləri, qiymətli kağızlar bazarında lisenziyalaşdırılan şəxslər, lombardlar",
    options: [
      "A)	Məcburi nişanlama ilə nişanlanmalı olan mallar istehsal edən, kredit təşkilatları, sığorta bazarının peşəkar iştirakçıları, investisiya fondları və bu fondların idarəçiləri, qiymətli kağızlar bazarında lisenziyalaşdırılan şəxslər, lombardlar",
      "B)	Məcburi nişanlama ilə nişanlanmalı olan mallar istehsal edən, icbari sığorta müqavilələri üzrə xidmət göstərən sığorta agentləri",
      "C)	Əmlakın icarəyə verilməsindən və royaltidən gəlir əldə edən, vergi tutulan əməliyyatları¬nın həcmi ardıcıl 12 aylıq dövrün istənilən aymda (aylarında) 200.000 manatdan artıq olan ictimai iaşə fəaliyyəti ilə məşğul olan şəxslər",
      "D)	Dövlət pensiya fondları, mülkiyyətində olan əsas vəsaitlərin ilin əvvəlinə (Vergi Məcəl-ləsinin 218.1.2-ci, 218.1.3-cü və 218.4-cü maddələrində göstərilən şəxslər istisna olmaqla) qahq dəyəri 1.000.000 manatdan artıq olan şəxslər"
    ]
  },
  {
    numb: 12,
    question: "Aşağıda göstərilən şəxslərin hansının sadələşdirilmiş vergi ödəyicisi olmaq hüququ vardır? 1)	publik hüquqi şəxslər 2)	rüb ərzində işçilərinin (faktiki işə cəlb edilən) orta sayı 10 nəfərdən çox olan istehsal fəaliyyətini həyata keçirən şəxslər 3)	topdansatış ticarət fəaliyyəti qaydasında malların təqdim edilməsini həyata keçirən şəxslər ,	4) vergi ödəyicisi kimi vergi orqanında uçotda olmayan şəxslərə (əhaliyə) göstərilən xidmətlərdən başqa, xidmətlərin göstərilməsini həyata keçirən şəxslər",
    answer: "D) Heç birinin",
    options: [
      "A) 1,2",
      "B) 1,3",
      "C) 1,3,4",
      "D) Heç birinin"
    ]
  },
  {
    numb: 13,
    question: "Aşağıda göstərilən şəxslərin hansının sadələşdirilmiş vergi ödəyicisi olmaq hüququ yoxdur? 1)	qızıl, ondan hazırlanmış zərgərlik və digər məişət məmulatlarının, habelə almazm (emal olunmuş, çeşidlənmiş, çərçivəyə salınmış və bərkidilmiş və emal olunmamış, çeşidlənməmiş, çərçivəyə salınmamış və bərkidilməmiş almaz) satışını həyata keçirən şəxslər 2)	taksi fəaliyyəti ilə məşğul olan şəxslər 3)	bina tikintisi fəaliyyəti ilə məşğul olan şəxslər, lisenziya tələb olunan fəaliyyət növü ilə məşğul olan şəxslər 4)	xəz-dəri məmulatlarının satışını həyata keçirən şəxslər",
    answer: "A) 1,3,4",
    options: [
      "A) 1,3,4",
      "B) 1,2",
      "C) 1,2,4",
      "D) Heç birinin"
    ]
  },
  {
    numb: 14,
    question: "Aksizli və məcburi nişanlama ilə nişanlanmalı olan mallar istehsal edən şəxslərin ardıcıl 12 aylıq dövrün istənilən ayında (aylarında) vergi tutulan əməliyyatların həcmi neçə manatdan çox olduqda sadələşdirilmiş verginin ödəyicisi ola bilərlər?",
    answer: "A)	Heç vaxt ola bilməzlər",
    options: [
      "A)	Heç vaxt ola bilməzlər",
      "B)	Bu fəaliyyətlə yanaşı beynəlxalq yük və sərnişin daşımaları ilə məşğul olduqda",
      "C)	Ardıcıl 12 aylıq vergi tutulan əməliyyatların həcmi 200.000 manatdan az olduqda",
      "D)	Ardıcıl 12 aylıq vergi tutulan əməliyyatların həcmi 120.000 manatdan az olduqda"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  {
    numb: 1,
    question: "",
    answer: "1",
    options: [
      "1",
      "2",
      "2",
      "3"
    ]
  },
  ];
