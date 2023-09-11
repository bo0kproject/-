// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Azərbaycan Respublikasının Prezidentinin qərarı ilə vəzifəyə təyin olunan Azərbaycan Respublikasının icra hakimiyyəti və digər dövlət orqanlarının (təsisatlarının), Azərbaycan Respublikasının Mərkəzi Bankının və dövlətin adından yaradılan publik hüquqi şəxslərin rəhbər işçilərinə səlahiyyətlərinin icrası ilə bağlı təmsilçilik xərclərinin ödənilməsi üçün verilən vəzifə maaşlarına aylıq əlavə pul təminatından gəlir vergisi necə tutulur? ",
  answer: "B)	Vergi tutulmur",
  options: [
    "A)	Gəlirin 50 faizindən vergi tutulur",
    "B)	Vergi tutulmur",
    "C) 400 manatdan çox olan hissəsi cəlb edilir",
    "D) 200 manatdan çox olan hissəsi cəlb edilir"
  ]
},
  {
  numb: 2,
  question: "Aşağıda göstərilənlərdən hansı gəlir vergisindən azaddır ?",
  answer: "A)	Torpaqların dövlət ehtiyacları üçün alınmasına görə fiziki şəxslərə ödənilən kompensasiya",
  options: [
    "A)	Torpaqların dövlət ehtiyacları üçün alınmasına görə fiziki şəxslərə ödənilən kompensasiya",
    "B)	Elektron ticarətin həyata keçirilməsindən əldə olunan gəlirlər",
    "C)	Əmək qabiliyyətinin müvəqqəti itirilməsinə görə ödənilən müavinətlər",
    "D)	Əntiq əşyaların təqdim edilməsindən əldə olunan gəlirlər"
  ]
},
  {
  numb: 3,
  question: "Azərbaycan Respublikasının Prezidentinə və onun ailə üzvlərinə ödənilən əmək haqqı və digər ödənişlərin məbləği gəlir vergisinə necə cəlb edilir ?",
  answer: "A)	Ümumi qaydada ",
  options: [
    "A)	Ümumi qaydada ",
    "B)	Gəlir vergisindən azaddır ",
    "C) Ödəmə mənbəyində 10% dərəcə ilə",
    "D) Digər ödənişlər istisna olmaqla əmək haqqı gəlir vergisindən azaddır"
  ]
},
  {
  numb: 4,
  question: "Hüquqi şəxs yaratmadan sahibkarlıq fəaliyyəti həyata keçirən fiziki şəxslərin sənaye və texnologiyalar parkındakı fəaliyyətdən əldə etdikləri gəlir (əmək haqqından tutulan gəlir vergisi istisna olmaqla) qanunvericiliyə uyğun olaraq sənaye və texnologiyalar parkında qeydiyyata alındıqları hesabat ilindən başlayaraq neçə il müddətinə gəlir vergisin¬dən azaddır ?",
  answer: "D) 10 il",
  options: [
    "A) 3 il",
    "B) 5 il",
    "C) 7 il",
    "D) 10 il"
  ]
},
  {
  numb: 5,
  question: "Hüquqi şəxs yaratmadan sahibkarlıq fəaliyyətini həyata keçirən fiziki şəxslərin sənaye və texnologiyalar parkındakı muzdlu işlə əlaqədar əldə etdikləri gəlir - qanun¬vericiliyə uyğun olaraq sənaye və texnologiyalar parkında qeydiyyata alındıqları hesabat ilindən başlayaraq neçə il müddətinə gəlir vergisindən azaddır ?",
  answer: "D) Gəlir vergisindən azad deyil",
  options: [
    "A) 3 il",
    "B) 5 il",
    "C) 10 il",
    "D) Gəlir vergisindən azad deyil"
  ]
},
{
  numb: 6,
  question: "Yerli bank və xarici bankın Azərbaycan Respublikasında fəaliyyət göstərən filialı tərəfindən fiziki şəxslərin əmanəti üzrə ödənilən illik faiz gəlirləri, habelə emitent tərəfindən investisiya qiymətli kağızları üzrə ödənilən dividend, diskont (istiqrazların nominalından aşağı yerləşdirilməsi nəticəsində yaranmış fərq) və faiz gəlirləri 2016-cı il fevralın 1-dən etibarən neçə il müddətinə gəlir vergisindən azaddır ?",
  answer: "C) 7 il ",
  options: [
    "A) 3 il",
    "B) 2 il",
    "C) 7 il",
    "D) 5 il"
  ]
},
  {
  numb: 7,
  question: "Vergi Məcəlləsi ilə müəyyən olunmuş qaydada gəlirlərin və xərclərin uçotunu aparan, ƏDV-nin məqsədləri üçün qeydiyyata alınmayan və əməliyyatlarının həcmi ardıcıl 12 ayhq dövrün istənilən ayında (aylarında) 200.000 manatadək olan rezident müəssisənin təsisçisi və yaxud səhmdarları olan fiziki şəxslərin dividend gəlirlərindən vergi necə tutlur?",
  answer: "C) Vergidən azaddır",
  options: [
    "A)	Ümumi qaydada ",
    "B)	10 faiz",
    "C) Vergidən azaddır",
    "D)	14 faiz"
  ]
},
  {
  numb: 8,
  question: "Kütləvi təklif edilmiş və tənzimlənən bazarda ticarətə buraxılmış səhmlər və istiqrazlar üzrə ödənilən dividend, diskont (istiqrazların nominalından aşağı yerləşdirilməsi nəticəsində yaranmış fərq) və faiz gəlirləri 2023-cü il fevralın 1-dən etibarən neçə il müddətinə gəlir vergisindən azaddır ?",
  answer: "A) 5 il",
  options: [
    "A) 5 il",
    "B) 3 il",
    "C) 7 il",
    "D) 2 il"
  ]
},
  {
  numb: 9,
  question: "İnvestisiya təşviqi sənədini almış fərdi sahibkar həmin sənədi aldığı tarixdən əldə etdiyi gəliri hansı qaydada gəlir vergisinə cəlb olunur?",
  answer: "D)	İnvestisiya təşviqi sənədini aldığı tarixdən əldə etdiyi gəlirin 50 faizi - 7 il müddətinə",
  options: [
    "A)	İnvestisiya təşviqi sənədini aldığı tarixdən əldə etdiyi gəlirin 50 faizi - 10 il müddətinə",
    "B)	İnvestisiya təşviqi sənədini aldığı tarixdən əldə etdiyi gəliri 7 il müddətinə",
    "C)	Vergidən azaddır",
    "D)	İnvestisiya təşviqi sənədini aldığı tarixdən əldə etdiyi gəlirin 50 faizi - 7 il müddətinə"
  ]
},
  {
  numb: 10,
  question: "İnvestisiya təşviqi sənədini almış fərdi sahibkar əldə etdiyi gəlirin neçə faizini gəlir vergisinə cəlb etmir?",
  answer: "D) 50 faiz",
  options: [
    "A) 40 faiz ",
    "B) 20 faiz ",
    "C) 75 faiz ",
    "D) 50 faiz"
  ]
},
  {
  numb: 11,
  question: "Pərakəndə ticarət fəaliyyəti və (və ya) İctimai iaşə fəaliyyəti ilə məşğul olan fərdi sahibkar tərəfindən büdcəyə ödənilməli olan gəlir vergisinin məbləği hansı qaydada müəy¬yən olunur?",
  answer: "D)	Büdcəyə ödənilməli olan gəlir vergisinin məbləği vergi orqanında uçotda olmayan şəxslər tərəfindən POS-terminal vasitəsilə nağdsız qaydada aparılan ödənişlərin ümumi gəlirdəki xüsusi çəkisinə uyğun müəyyən edilən verginin 25 faizi həcmində azaldılır.",
  options: [
    "A)	Büdcəyə ödənilməli olan gəlir vergisinin məbləği POS-terminal vasitəsilə nağdsız qaydada aparılan ödənişlərin ümumi gəlirdəki xüsusi çəkisinə uyğun müəyyən edilən verginin 25 faizi həcmində azaldılır",
    "B)	Büdcəyə ödənilməli olan gəlir vergisinin məbləği POS-terminal vasitəsilə nağdsız qaydada aparılan ödənişlərin ümumi gəlirdəki xüsusi çəkisinə uyğun müəyyən edilən verginin 50 faizi həcmində azaldılır.",
    "C)	Büdcəyə ödənilməli olan gəlir vergisinin məbləği vergi orqanında uçotda olan şəxslər tərəfindən POS-terminal vasitəsilə nağdsız qaydada aparılan ödənişlərin ümumi gəlirdəki xüsusi çəkisinə uyğun müəyyən edilən verginin 25 faizi həcmində azaldılır.",
    "D)	Büdcəyə ödənilməli olan gəlir vergisinin məbləği vergi orqanında uçotda olmayan şəxslər tərəfindən POS-terminal vasitəsilə nağdsız qaydada aparılan ödənişlərin ümumi gəlirdəki xüsusi çəkisinə uyğun müəyyən edilən verginin 25 faizi həcmində azaldılır."
  ]
},
  {
  numb: 12,
  question: "Pərakəndə satış qaydasında malların satışının həyata keçirilməsi üzrə ticarət fəaliyyəti və (və ya) ictimai iaşə fəaliyyəti ilə məşğul olan fərdi sahibkarlara POSterminal vasitəsilə nağdsız qaydada aparılan ödənişlərə görə güzəşt neçə il müddətinə nəzərdə tutulub?",
  answer: "D) 2019-cu il yanvarın 1-dən 3 il müddətinə",
  options: [
    "A)	2019-cu il yanvarın 1-dən 5 il müddətinə",
    "B)	2019-cu il yanvarın 1-dən 10 il müddətinə",
    "C) Müddətsiz",
    "D) 2019-cu il yanvarın 1-dən 3 il müddətinə"
  ]
},
  {
  numb: 13,
  question: "Qanuna uyğun olaraq dövlət büdcəsinə olan vergi borclarının silinməsindən əldə olunan gəlir vergiyə necə cəlb olunur?",
  answer: "C)	Vergidən azaddır",
  options: [
    "A)	Ümumi qaydada",
    "B)	Gəlirin 50 faizindən vergi tutulur",
    "C)	Vergidən azaddır",
    "D)	1.000 manatdan çox hissəsindən vergi tutulur"
  ]
},
  {
  numb: 14,
  question: "Vətən müharibəsi iştirakçılarının və Vətən müharibəsində, habelə Vətən müharibəsindən sonra Azərbaycan Respublikasının ərazi bütövlüyü uğrunda döyüş əməliyyatları və hərbi təxribatlar nəticəsində şəhid ailəsi statusu almış və əlilliyi müəyyən edilmiş şəxslərin banklara və digər kredit təşkilatlarına olan borclarının silinməsindən əldə olunan gəlirləri gəlir vergiyə necə cəlb olunur?",
  answer: "C)	Vergidən azaddır",
  options: [
    "A)	Ümumi qaydada",
    "Gəlirin 50 faizindən vergi tutulur",
    "C)	Vergidən azaddır",
    "D)	1.000 manatdan çox hissəsindən vergi tutulur"
  ]
},
  {
  numb: 15,
  question: "Lotereya təşkilatçısı tərəfindən keçirilən lotereyalardan və idman mərc oyunları operatoru tərəfindən keçirilən idman mərc oyunlarından pul şəklində əldə edilən uduşların neçə manatadək olan hissəsi vergidən azaddır?",
  answer: "C) 500 manatadək",
  options: [
    "A)	100 manatadək",
    "B)	10 manatadək",
    "C) 500 manatadək",
    "D) tam azaddır"
  ]
},
  {
  numb: 16,
  question: "Vergi ödəyicisinin azı 3 (üç) il ərzində mülkiyyətində olan iştirak payının və ya səhmin təqdim edilməsindən əldə olunan gəlirlərindən vergi necə tutulur?",
  answer: "B)	Gəlirin 50 faizi vergidən azaddır",
  options: [
    "A)	Vergidən azaddır",
    "B)	Gəlirin 50 faizi vergidən azaddır",
    "C)	Ümumi qaydada",
    "D)	Gəlirin 40 faizindən vergi tutulur"
  ]
},
  {
  numb: 17,
  question: "Mənəvi Dəyərlərin Təbliği Fondu tərəfindən ödənilən maddi yardımdan (dəstək¬dən) gəlir vergisi necə hesablanır?",
  answer: "A)	Vergidən azaddırergidən azaddır",
  options: [
    "A)	Vergidən azaddır",
    "B)	Gəlirin 50 faizi vergidən azaddır",
    "C)	Ümumi qaydada",
    "D)	Gəlirin 40 faizindən vergi tutulur"
  ]
},
  {
  numb: 18,
  question: "Azərbaycan Respublikasının İpoteka və Kredit Zəmanət Fondu tərəfindən zəmanət verilmiş kredit üzrə ödəniş edilməsi hallarında borcalanların borclarının ödənilməsinin nəticəsi kimi əldə edilən gəlirlərdən gəlir vergisi necə hesablanır?",
  answer: "A)	Vergidən azaddı",
  options: [
    "A)	Vergidən azaddı",
    "B)	Gəlirin 50 faizi vergidən azaddır",
    "C)	Ümumi qaydada",
    "D)	Gəlirin 10 faizindən vergi tutulur"
  ]
},
  {
  numb: 19,
  question: "Vergi Məcəlləsi ilə müəyyən olunmuş qaydada gəlirlərin və xərclərin uçotunu aparan mikro sahibkarlıq subyekti olan fərdi sahibkarların sahibkarlıq fəaliyyətindən gəlirinə neçə faiz azadolma tətbiq edilir?",
  answer: "B) 75% ",
  options: [
    "A) Tam azaddır ",
    "B) 75% ",
    "C) 50%",
    "D) 20%"
  ]
},
  {
  numb: 20,
  question: "Mikro və ya kiçik sahibkarlıq subyekti olan və fərdi sahibkar kimi fəaliyyət göstərən startaplarm “Startap” şəhadətnaməsi aldığı tarixdən innovasiya fəaliyyətindən əldə etdikləri gəlir neçə il müddətinə vergidən azaddır?",
  answer: "D) 3 il",
  options: [
    "A)	Müddətsiz azaddır",
    "B)	5 il",
    "C) 7 il",
    "D) 3 il"
  ]
},
  {
  numb: 21,
  question: "KOB klasterin iştirakçısı olan fərdi sahibkarın KOB klaster şirkəti ilə bağlanmış müqavilə əsasında təqdim etdiyi mal (iş, xidmət) üzrə əldə etdiyi gəlirin kapital xarakterli xərclərin çəkilməsinə yönəldilən hissəsi hansı müddətə vergidən azaddır?",
  answer: "B)	7 il",
  options: [
    "A)	3 il",
    "B)	7 il",
    "C) Müddətsiz azaddır",
    "D) 5 il"
  ]
},
  {
  numb: 22,
  question: "“Məşğulluq haqqında” Azərbaycan Respublikasının Qanununa uyğun olaraq Azərbaycan Respublikası Əmək və Əhalinin Sosial Müdafiəsi Nazirliyinin tabeliyində Dayanıqlı və Operativ Sosial Təminat Agentliyinin haqqı ödənilən ictimai işlərə cəlb etdiyi işçilərinin bu fəaliyyətlə əlaqədar gəlirlərinə neçə faiz azadolma tətbiq edilir?",
  answer: "B)	Tam azaddır",
  options: [
    "A)	75%",
    "B)	Tam azaddır",
    "C)	50%",
    "D)	10%"
  ]
},
  {
  numb: 23,
  question: "Müvafıq icra hakimiyyəti orqanının müəyyən etdiyi orqan (qurum) tərəfindən müəyyən olunmuş qaydada dövlət büdcəsinin vəsaiti hesabına ödənilən ixrac təşviqi gəlir vergisinə hansı qaydada cəlb olunur?",
  answer: "B)	Tam azaddır",
  options: [
    "A)	75% vergiyə cəlb olunur",
    "B)	Tam azaddır",
    "C)	50% vergiyə cəlb olunur",
    "D)	Ümumi qaydada"
  ]
},
  {
  numb: 24,
  question: "Lotereya biletlərinin satıcısı ilə bağlanmış müqavilə əsasında və ya onun tapşırığı əsasında lotereya biletlərinin bütün mərhələlərdə agent qaydasında satışının həyata keçirilməsi üzrə göstərilən xidmətlərdən əldə olunan gəlirlər gəlir vergisinə hansı qaydada cəlb olunur?",
  answer: "B)	Azaddır",
  options: [
    "A)	75% vergiyə cəlb olunur",
    "B)	Azaddır",
    "C)	50% vergiyə cəlb olunur",
    "D)	Ümumi qaydada"
  ]
},
  {
  numb: 25,
  question: "Aşağıdakı hansı fiziki şəxslərin hər hansı muzdlu işdən vergi tutulmalı olan aylıq gəliri 400 manat məbləğində azaldılır:1.	həlak olmuş, yaxud sonralar vəfat etmiş döyüşçülərin valideynləri, habelə vəzifələrinin icrası zamanı həlak olmuş dövlət qulluqçularının valideynləri və arvadları (ərləri). Bu şəxslərin arvadlarına (ərlərinə) güzəşt o halda verilir ki, onlar təkrar nikaha girmiş olmasınlar 2.	Azərbaycan Respublikasının Milli Qəhrəmanlarının 3.	Əfqanıstana və döyüş əməliyyatları aparılan başqa ölkələrə göndərilmiş hərbi qulluqçular və təlim-yoxlama toplanışlarına çağırılmış hərbi vəzifəlilər 4.	Sovet İttifaqı və Sosialist Əməyi Qəhrəmanlarının 5.	həlak olmuş, yaxud sonralar vəfat etmiş döyüşçülərin dul arvadlarının və övladlarının",
  answer: "D) 2,4,5",
  options: [
    "A) 1,2,3 ",
    "B) 1,2,4 ",
    "C) 3,4,5 ",
    "D) 2,4,5"
  ]
},
  {
  numb: 26,
  question: "Müharibə ilə əlaqədar əlilliyi olan şəxslərin hər hansı muzdlu işdən əldə etdikləri aylıq gəlirinin hansı məbləğindən vergi tutulur?",
  answer: "C)	400 manatdan çox olan hissəsindən",
  options: [
    "A)	Bütün məbləğdən vergi tutulmur",
    "B)	Gəlirin 30 faizi vergiyə cəlb olunur",
    "C)	400 manatdan çox olan hissəsindən",
    "D)	100 manatdan çox olan hissəsindən"
  ]
},
  {
  numb: 27,
  question: "Həlak olmuş, yaxud sonralar vəfat etmiş döyüşçülərin övladlarına hansı məbləğdə güzəşt hüququ verilir?",
  answer: "C)	400 manat",
  options: [
    "A)	Güzəşt verilmir",
    "B)	200 manat",
    "C)	400 manat",
    "D)	100 manat"
  ]
},
  {
  numb: 28,
  question: "1941-1945-ci illərdə arxa cəbhədə fədakar əməyinə görə medallar ilə təltif edilmiş şəxslərin hər hansı muzdlu işdən əldə etdikləri gəlirləri gəlir vergisinə necə cəlb olunur?",
  answer: "C)	400 manatdan çox olan hissəsi cəlb edilir",
  options: [
    "A)	Gəlirin 50 faizindən vergi tutulur",
    "B)	Vergi tutulmur",
    "C)	400 manatdan çox olan hissəsi cəlb edilir",
    "D)	200 manatdan çox olan hissəsi cəlb edilir"
  ]
},
  {
  numb: 29,
  question: "Müharibə veteranı adı almış şəxslərin hər hansı muzdlu işdən əldə etdikləri ayhq gəlirin hansı məbləğindən vergi tutulur?",
  answer: "D)	400 manatdan çox olan hissəsindən",
  options: [
    "A)	Şərti maliyyə vahidinin 300 mislindən çox olan hissəsindən",
    "B)	Gəlirin 50 faizindən",
    "C)	Bütün məbləğdən vergi tutulmur",
    "D)	400 manatdan çox olan hissəsindən"
  ]
},
  {
  numb: 30,
  question: "Çernobıl AES-də qəza nəticəsində şüa xəstəliyinə tutulmuş şəxslərin hər hansı muzdlu işdən əldə etdikləri aylıq gəlirinin hansı məbləğindən vergi tutulur?",
  answer: "D)	400 manatdan çox olan hissəsindən vergi tutulur",
  options: [
    "A)	Şərti maliyyə vahidinin 300 mislindən çox olan hissəsindən",
    "B)	Gəlirin 50 faizindən",
    "C)	Bütün məbləğdən vergi tutulmur",
    "D)	400 manatdan çox olan hissəsindən vergi tutulur"
  ]
},
  {
  numb: 31,
  question: "Orqanizmin funksiyalarının 61-100 faiz pozulmasına görə əlilliyi olan şəxslərin [müharibə ilə əlaqədar əlilliyi olan şəxslərdən başqa] hər hansı muzdlu işdən əldə etdikləri ayhq gəlirinin hansı məbləğindən vergi tutulur?",
  answer: "D)	200 manatdan çox olan hissəsindən vergi tutulur",
  options: [
    "A)	400 manatdan çox olan hissəsindən vergi tutulur",
    "B)	100 manatdan çox olan hissəsindən vergi tutulur",
    "C)	Gəlirin tam məbləği vergiyə cəlb olunur",
    "D)	200 manatdan çox olan hissəsindən vergi tutulur"
  ]
},
  {
  numb: 32,
  question: "122.	Aşağıdakı hansı fiziki şəxslərin hər hansı muzdlu işdən vergi tutulmalı olan ayhq gəliri 100 manat məbləğində azaldılır? 1.	həlak olmuş, yaxud sonralar vəfat etmiş döyüşçülərin valideynləri, habelə vəzifələrinin icrası zamanı həlak olmuş dövlət qulluqçularının valideynləri və arvadları [ərləri]. [Bu şəxslərin arvadlarına [ərlərinə] güzəşt o halda verilir ki, onlar təkrar nikaha girmiş olmasınlar] 2.	müharibə əlilləri 3.	sağlamlığının 75%-i pozulmuş əlil olan şəxslər [müharibə ilə əlaqədar əlilliyi olan şəxslərdən başqa] 4.	1990-cı il yanvarın 20-də SSRİ qoşunlarının müdaxiləsi nəticəsində, habelə Azərbaycan Res. ərazi bütövlüyünün müdafiəsi zamanı həlak olmuş şəxslərin valideynləri və arvadları [ərləri]. [Bu şəxslərin arvadlarına [ərlərinə] güzəşt o halda verilir ki, onlar təkrar nikaha girmiş olmasınlar] 5.	Əfqanıstana və döyüş əməliyyatları aparılan başqa ölkələrə göndərilmiş hərbi qulluqçular və təlim-yoxlama toplanışlarına çağırılmış hərbi vəzifəlilər",
  answer: "D) 1,4,5",
  options: [
    "A) 1,3,5",
    "B) 2,3,4",
    "C) 2,4,5",
    "D) 1,4,5"
  ]
},
  {
  numb: 33,
  question: "Daimi qulluq tələb edən sağlamlıq imkanları məhdud uşağa və ya Orqanizmin funksiyalarının 81-100 faiz pozulmasına görə əlilliyi olan şəxsə baxan və onunla yaşayan valideynlərdən birinin [özlərinin istəyi ilə], arvad [ər], himayəçi və ya qəyyumun hər hansı muzdlu işdən vergi tutulmalı olan aylıq gəliri hansı məbləğdə azaldılır?",
  answer: "B) 200 manat",
  options: [
    "A) 100 manat",
    "B) 200 manat",
    "C) 50 manat",
    "D) 400 manat"
  ]
},
  {
  numb: 34,
  question: "Məcburi köçkünlərin və onlara bərabər tutulan şəxslərin hər hansı muzdlu işdən əldə etdikləri aylıq gəlirinin hansı məbləğindən vergi tutulur",
  answer: "D)	100 manatdan çox olan hissəsindən",
  options: [
    "A)	200 manatdan çox olan hissəsindən",
    "B)	50 manatdan çox olan hissəsindən",
    "C)	Gəlirin tam məbləği vergiyə cəlb olunur",
    "D)	100 manatdan çox olan hissəsindən"
  ]
},
  {
  numb: 35,
  question: "Qohumluq dərəcəsindən asılı olmayaraq himayəsində azı 3 nəfər, o cümlədən gün-düz təhsil alan 23 yaşınadək şagirdlər və tələbələr olan ər və ya arvaddan birinin vergi tutul-malı olan aylıq gəliri nə qədər azaldılır?",
  answer: "C) 50 manat ",
  options: [
    "A) 400 manat ",
    "B) 200 manat ",
    "C) 50 manat ",
    "D) 100 manat"
  ]
},
  {
  numb: 36,
  question: "50 manat məbləğində güzəşt uşaqların 18 yaşa, tələbələrin və şagirdlərin 23 yaşa çatdığı ilin hansı dövrünədək verilir?",
  answer: "D)	Uşaqların 18 yaşa, tələbələrin və şagirdlərin 23 yaşa çatdığı ilin sonunadək",
  options: [
    "A)	Uşaqların 18 yaşa, tələbələrin və şagirdlərin 23 yaşa çatdığı aydan sonrakı ayın 1-dək",
    "B)	Uşaqların 18 yaşa, tələbələrin və şagirdlərin 23 yaşa çatdığı aydan sonrakı ayın sonunadək",
    "C)	Uşaqların 18 yaşa, tələbələrin və şagirdlərin 23 yaşa çatdığı aym sonunadək",
    "D)	Uşaqların 18 yaşa, tələbələrin və şagirdlərin 23 yaşa çatdığı ilin sonunadək"
  ]
},
  {
  numb: 37,
  question: "Uşaqların və himayədəkilərin öldüyü hallarda güzəşt hansı müddətə verilir?",
  answer: "A)	Ölüm ilinin sonunadək saxlanılır",
  options: [
    "A)	Ölüm ilinin sonunadək saxlanılır",
    "B)	Ölüm ayından sonrakı ayadək",
    "C)	Ölüm aymadək",
    "D)	Ölüm ayından 3 ay müddətində"
  ]
},
  {
  numb: 38,
  question: "Himayədə olanların sayı il ərzində azaldıqda (uşaqların ölüm halları istisna olmaq-la) hansı dövrdən başlayaraq onların saxlanması üçün məbləğin çıxılmasına xitam verilir",
  answer: "D)	Himayədə olanların sayının azaldığı ilin sonunadək güzəşt hüququ saxlanılır.",
  options: [
    "A)	Himayədə olanların sayının azaldığı aydan sonrakı aydan başlayaraq",
    "B)	Himayədə olanların sayının azaldığı aydan başlayaraq",
    "C)	Himayədə olanların sayının azaldığı aydan sonrakı 3 ay müddətiə",
    "D)	Himayədə olanların sayının azaldığı ilin sonunadək güzəşt hüququ saxlanılır."
  ]
},
  {
  numb: 39,
  question: "Aşağıdakı şəxslərdən kim vergi ödəyicisinin himayəsində olanlara aid edilmir?",
  answer: "C)	Vergi ödəyicisinin qiyabi təhsil alan 20 yaşlı uşağı",
  options: [
   "A)	Vergi ödəyicisinin işsizlik müavinəti almayan arvadı [əri]"
   "B)	Vergi ödəyicisinin gündüz təhsil alan 23 yaşınadək olan uşağı"
   "C)	Vergi ödəyicisinin qiyabi təhsil alan 20 yaşlı uşağı"
   "D)	Vergi ödəyicisinin 17 yaşlı uşağı"

  ]
},
  {
  numb: 40,
  question: "Təqaüd, pensiya və işsizlik müavinəti alan şəxslər (uşaqlardan başqa) vergi ödəyicisinin himayəsində olanlara aid edilirlərmi?",
  answer: "B)	Aid edilmirlər ",
  options: [
    "A)	Aid edilirlər ",
    "B)	Aid edilmirlər ",
    "C) Belə bir hal nəzərdə tutulmayıb",
    "D) Müstəsna hallarda aid edilə bilərlər"
  ]
},
   {
  numb: 41,
  question: "Aşağıdakı şəxslərdən kim vergi ödəyicisinin himayəsində olanlara aid edilmir?",
  answer: "A)	Dövlət təminatında olan şəxslər (pensiya alanlar, uşaq və körpə evlərində tərbiyə alanlar)",
  options: [
    "A)	Dövlət təminatında olan şəxslər (pensiya alanlar, uşaq və körpə evlərində tərbiyə alanlar)",
    "B)	Vergi ödəyicisinin gündüz təhsil alan 23 yaşınadək olan uşağı",
    "C)	Dövlət təminatında olan şəxslər (xəstələr, uşaq və körpə evlərində tərbiyə alanlar)",
    "D)	Vergi ödəyicisinin 17 yaşlı uşağı"
  ]
},
   {
  numb: 42,
  question: "Dövlət təminatında olan şəxslər ( uşaq və körpə evlərində tərbiyə alanlar) vergi ödəyicisinin himayəsində olanlara aid edilirlərmi?",
  answer: "B)	Aid edilmirlər ",
  options: [
    "A)	Aid edilirlər ",
    "B)	Aid edilmirlər ",
    "C) Belə bir hal nəzərdə tutulmayıb",
    "D) Müstəsna hallarda aid edilə bilərlər"
  ]
},
   {
  numb: 43,
  question: "Xüsusi məktəblərin şagirdləri və internat evlərində olan, saxlanmasına görə qəyyumlardan haqq alınmayan uşaqlar, habelə tam dövlət təminatındakı məktəblər yanında internatlarda olan uşaqlar vergi ödəyicisinin himayəsində olanlara aid edilirlərmi?",
  answer: "C) Aid edilmirlər",
  options: [
    "A)	Aid edilirlər",
    "B)	Belə bir hal nəzərdə tutulmayıb",
    "C) Aid edilmirlər",
    "D) Müstəsna hallarda aid edilə bilərlər"
  ]
},
   {
  numb: 44,
  question: "Fiziki şəxsin Məcəllənin 102.2-ci, 102.3-cü və 102.4-cü maddələri üzrə güzəşt hüququ olduqda, ona bu güzəştlərdən hansı verilir?",
  answer: "B)	Məbləğcə ən böyük olanı verilir",
  options: [
    "A)	Məbləğcə ən kiçik olanı verilir",
    "B)	Məbləğcə ən böyük olanı verilir",
    "C)	Fiziki şəxsin istəyinə görə verilir",
    "D)	Hamısı verilir"
  ]
},
   {
  numb: 45,
  question: "Əmək haqqından tutulan vergi hesablanarkən fiziki şəxslərin vergi güzəştləri hüququ nə vaxtdan tətbiq edilir?",
  answer: "C)	Azərbaycan Respublikasının Nazirlər Kabineti tərəfindən müəyyənləşdirilmiş sənədlərin təqdim edildiyi andan",
  options: [
    "A)	Güzəşt almaq üçün vergi ödəyicisi tərəfindən ərizənin verildiyi andan",
    "B)	Fiziki şəxsin işə başladığı gündən",
    "C)	Azərbaycan Respublikasının Nazirlər Kabineti tərəfindən müəyyənləşdirilmiş sənədlərin təqdim edildiyi andan",
    "D)	Bu vaxt işəgötürən tərəfindən müəyyənləşdirilir."
  ]
},
  {
  numb: 46,
  question: "Fiziki şəxsin bu maddədə sadalanan vergi güzəştlərini əldə etməyə əsas verən statusu olduğu, lakin güzəşt hüququnu təsdiq edən müvafiq sənədləri əmək müqaviləsi (kontraktı) hüquqi qüvvəyə mindikdən sonra təqdim etdiyi halda vergi güzəşti hansı tarixdən hesablanır?",
  answer: "B)	Həmin fiziki şəxsin əmək müqaviləsi (kontraktı) hüquqi qüvvəyə mindiyi tarixdən",
  options: [
    "A)	Güzəşt almaq üçün vergi ödəyicisi tərəfindən ərizənin verildiyi andan",
    "B)	Həmin fiziki şəxsin əmək müqaviləsi (kontraktı) hüquqi qüvvəyə mindiyi tarixdən",
    "C)	Azərbaycan Respublikasının Nazirlər Kabineti tərəfindən müəyyənləşdirilmiş sənədlərin təqdim edildiyi andan",
    "D)	Bu vaxt işəgötürən tərəfindən müəyyənləşdirilir."
  ]
},
];
