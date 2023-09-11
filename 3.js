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
  numb: 6,
  question: "Вопрос номер 1?",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
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
  numb: 6,
  question: "Вопрос номер 1?",
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
  question: "Вопрос номер 1?",
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
  question: "Вопрос номер 1?",
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
  question: "Вопрос номер 1?",
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
  question: "Вопрос номер 1?",
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
  question: "Вопрос номер 1?",
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
  question: "Вопрос номер 1?",
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
  question: "Вопрос номер 1?",
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
  question: "Вопрос номер 1?",
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
  question: "Вопрос номер 1?",
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
  question: "Вопрос номер 1?",
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
  question: "Вопрос номер 1?",
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
  question: "Вопрос номер 1?",
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
  question: "Вопрос номер 1?",
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
  question: "Вопрос номер 1?",
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
  question: "Вопрос номер 1?",
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
  question: "Вопрос номер 1?",
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
  question: "Вопрос номер 1?",
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
  question: "Вопрос номер 1?",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
];
