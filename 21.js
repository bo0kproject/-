// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Əmlak vergisinin ödəyicisi kimlərdir?",
  answer: "C)	Vergi Məcəllə ilə müəyyən edilən vergitutma obyektləri olan fiziki şəxslər və müəssisələr",
  options: [
    "A)	Vergi Məcəlləsi ilə müəyyən edilən vergitutma obyektləri olan yalnız qeyri-rezident fiziki şəxslər və müəssisələr",
    "B)	Vergi Məcəllə ilə müəyyən edilən vergitutma obyektləri olan yalnız rezident fiziki şəxslər",
    "C)	Vergi Məcəllə ilə müəyyən edilən vergitutma obyektləri olan fiziki şəxslər və müəssisələr",
    "D)	Vergi Məcəlləsi ilə müəyyən edilən vergitutma obyektləri olan yalnız rezident fiziki şəxslər və rezident müəssisələr"
  ]
},
  {
  numb: 2,
  question: "Fiziki şəxslər üçün əmlak vergisi üzrə vergitutma obyekti aşağıdakılardan hansıdır?",
  answer: "B)	Rezident və qeyri-rezident fiziki şəxslərin xüsusi mülkiyyətində olan və Azərbaycan Respublikasının ərazisində yerləşən tikililəri və ya onların hissələri, həmçinin yerindən və istifadə edilib-edilməməsindən asılı olmayaraq rezident fiziki şəxsi məxsus su və hava nəqliyyatı vasitələri",
  options: [
    "A)	Yalnız rezident və qeyri-rezident fiziki şəxslərin xüsusi mülkiyyətində olan və Azərbaycan Respublikasının ərazisində yerləşən tikililəri və ya onların hissələri",
    "B)	Rezident və qeyri-rezident fiziki şəxslərin xüsusi mülkiyyətində olan və Azərbaycan Respublikasının ərazisində yerləşən tikililəri və ya onların hissələri, həmçinin yerindən və istifadə edilib-edilməməsindən asılı olmayaraq rezident fiziki şəxsi məxsus su və hava nəqliyyatı vasitələri",
    "C)	Yerindən və istifadə edilib-edilməməsindən asılı olmayaraq yalnız rezident fiziki şəxslərə məxsus su və hava nəqliyyatı vasitələri",
    "D)	Qeyri-rezident fiziki şəxslərə məxsus su və hava nəqliyyatı vasitələri və rezident fiziki şəxslərə məxsus avtonəqliyyat vasitələri"
  ]
},
  {
  numb: 3,
  question: "Müəssisələr üçün əmlak vergisi üzrə vergitutma obyekti aşağıdakılardan hansıdır?",
  answer: "A)	Müəssisənin balansında olan əsas vəsaitlər",
  options: [
    "A)	Müəssisənin balansında olan əsas vəsaitlər",
    "B)	Müəssisənin balansında olan əsas vəsaitlərin bazar dəyəri",
    "C)	Müəssisənin balansında olan əsas və dövriyyə vəsaitlərinin orta illik dəyəri",
    "D)	Müəssisənin balansında olan avtonəqliyyat vasitələrinin orta illik dəyəri"
  ]
},
  {
  numb: 4,
  question: "Fərdi sahibkarlar üçün əmlak vergisi üzrə vergitutma obyekti aşağıdakılardan hansıdır?",
  answer: "A)	Fərdi sahibkarların balansmda olan əsas vəsaitlər (Məcəllənin 197.1.1-ci maddəsində göstərilən aktivlər istisna olmaqla);",
  options: [
    "A)	Fərdi sahibkarların balansmda olan əsas vəsaitlər (Məcəllənin 197.1.1-ci maddəsində göstərilən aktivlər istisna olmaqla);",
    "B)	Rezident və qeyri-rezident fiziki şəxslərin xüsusi mülkiyyətində olan və Azərbaycan Respublikasının ərazisində yerləşən tikililəri və ya onların hissələri, həmçinin yerindən və istifadə edilib-edilməməsindən asılı olmayaraq rezident fiziki şəxslərə məxsus su və hava nəqliyyatı vasitələri",
    "C)	Rezident və qeyri-rezident fiziki şəxslərin xüsusi mülkiyyətində olan və Azərbaycan Respublikasının ərazisində yerləşən tikililərin və ya onların hissələrinin, həmçinin yerindən və istifadə edilib-edilməməsindən asılı olmayaraq rezident fiziki şəxslərə məxsus su və hava nəqliyyatı vasitələri də daxil olmaqla fərdi sahibkarların balansmda olan əsas vəsaitlər",
    "D)	Rezident və qeyri-rezident fiziki şəxslərin xüsusi mülkiyyətində olan və Azərbaycan Respublikasının ərazisində yerləşən tikililərin və ya onların hissələrinin, həmçinin yerindən və istifadə edilib-edilməməsindən asılı olmayaraq rezident fiziki şəxslərə məxsus su və hava nəqliyyatı vasitələri istisna olmaqla fərdi sahibkarların balansında olan əsas vəsaitlər"
  ]
},
  {
  numb: 5,
  question: "Azərbaycan Respublikasında özünün daimi nümayəndəliyi vasitəsi ilə sahibkarlıq fəaliyyətini həyata keçirən şəxslər üçün əmlak vergisi üzrə vergitutma obyekti aşağıdakılar-dan hansıdır?",
  answer: "D)	Yalnız daimi nümayəndəliklə bağlı olan əsas vəsaitlər (Məcəllənin 197.1.1-ci maddəsində göstərilən aktivlər istisna olmaqla)",
  options: [
    "A)	Rezident və qeyri-rezident fiziki şəxslərin xüsusi mülkiyyətində olan və Azərbaycan Respublikasının ərazisində yerləşən tikililərin və ya onların hissələrinin (binalarının), həmçinin yerindən və istifadə edilib-edilməməsindən asılı olmayaraq rezident fiziki şəxslərə məxsus su və hava nəqliyyatı vasitələri istisna olmaqla yalnız daimi nümayəndəliklə bağlı olan əsas vəsaitlər",
    "B)	Rezident və qeyri-rezident fiziki şəxslərin xüsusi mülkiyyətində olan və Azərbaycan Respublikasının ərazisində yerləşən tikililərin və ya onların hissələrinin (binalarının), həmçinin yerindən və istifadə edilib-edilməməsindən asılı olmayaraq rezident fiziki şəxslərə məxsus su və hava nəqliyyatı vasitələri də daxil olmaqla yalnız daimi nümayəndəliklə bağlı olan əsas vəsaitlər",
    "C)	Yalnız daimi nümayəndəliklə bağlı olan əsas vəsaitlər ( Məcəllənin 197.1.1-ci maddəsində göstərilən aktivlər də daxil olmaqla)",
    "D)	Yalnız daimi nümayəndəliklə bağlı olan əsas vəsaitlər (Məcəllənin 197.1.1-ci maddəsində göstərilən aktivlər istisna olmaqla)"
  ]
},
{
  numb: 6,
  question: "Vergitutma obyekti olan müəssisələrin hüquqi şəxs yaratmadan birgə fəaliyyət aparmaq üçün birləşdirilən əsas vəsaitlərin dəyəri əmlak vergisinə necə cəlb olunur?",
  answer: "A)	Bu əsas vəsaitləri birləşdirən birgə fəaliyyət iştirakçıları tərəfindən vergiyə cəlb edilməsi məqsədləri üçün bəyannaməyə daxil olunur",
  options: [
    "A)	Bu əsas vəsaitləri birləşdirən birgə fəaliyyət iştirakçıları tərəfindən vergiyə cəlb edilməsi məqsədləri üçün bəyannaməyə daxil olunur",
    "B)	Brgə fəaliyyət aparmaq üçün yaradılan şəxs tərəfindən ödənilir",
    "C)	Birgə fəaliyyət iştirakçı! qarşılıqlı razılığına əsasən yalnız onlardan biri tərəfindən ödənilir",
    "D)	Bu əsas vəsaitlərin dəyəri əmlak vergisindən azaddır"
  ]
},
  {
  numb: 7,
  question: "Vergitutma obyekti olan fərdi sahibkarların hüquqi şəxs yaratmadan birgə fəaliyyət aparmaq üçün birləşdirilən əsas vəsaitlərin dəyəri əmlak vergisinə necə cəlb olunur?",
  answer: "C)	Fərdi sahibkarlar tərəfindən hüquqi şəxs yaratmadan birgə fəaliyyət aparmaq üçün birləşdirilən əsas vəsaitlərin dəyəri (Məcəllənin 197.1.1-ci maddəsində göstərilən aktivlər istisna olmaqla) bu əsas vəsaitləri birləşdirən birgə fəaliyyət iştirakçıları tərəfindən vergiyə cəlb edilməsi məqsədləri üçün bəyannaməyə daxil olunur",
  options: [
    "A) Rezident və qeyri-rezident fiziki şəxslərin xüsusi mülkiyyətində olan və Azərbaycan Respublikasının ərazisində yerləşən tikililərin və ya onların hissələrinin (binalarının), həmçinin yerindən və istifadə edilib-edilməməsindən asılı olmayaraq rezident fiziki şəxslərə məxsus su və hava nəqliyyatı vasitələri istisna olmaqla bu əsas vəsaitləri birləşdirən birgə fəaliyyət iştirakçıları tərəfindən vergiyə cəlb edilməsi məqsədləri üçün bəyannaməyə daxil olunur",
    "B)	Fərdi sahibkarlar tərəfindən hüquqi şəxs yaratmadan birgə fəaliyyət aparmaq üçün birləşdirilən əsas vəsaitlərin dəyəri (Məcəllənin 197.1.1-ci maddəsində göstərilən aktivlər də daxil olmaqla) bu əsas vəsaitləri birləşdirən birgə fəaliyyət iştirakçıları tərəfindən vergiyə cəlb edilməsi məqsədləri üçün bəyannaməyə daxil olunur",
    "C)	Fərdi sahibkarlar tərəfindən hüquqi şəxs yaratmadan birgə fəaliyyət aparmaq üçün birləşdirilən əsas vəsaitlərin dəyəri (Məcəllənin 197.1.1-ci maddəsində göstərilən aktivlər istisna olmaqla) bu əsas vəsaitləri birləşdirən birgə fəaliyyət iştirakçıları tərəfindən vergiyə cəlb edilməsi məqsədləri üçün bəyannaməyə daxil olunur",
    "D)	Bu əsas vəsaitlərin dəyəri əmlak vergisindən azaddır"
  ]
},
{
  numb: 8,
  question: "Birgə fəaliyyət nəticəsində yaradılmış [alınmış] əsas vəsaitlərin dəyəri əmlak vergisi-nə hansı qaydada cəlb olunur?",
  answer: "B)	Birgə fəaliyyət nəticəsində yaradılmış (alınmış) əsas vəsaitlərin dəyəri (Məcəllənin 197.1.1-ci maddəsində göstərilən aktivlər istisna olmaqla) isə birgə fəaliyyətin iştirakçıları tərəfindən müqavilə üzrə mülkiyyətdə müəyyən olunmuş pay haqqına müvafiq olaraq bəyannaməyə daxil edilir.",
  options: [
    "A)	Bu əsas vəsaitlərin dəyərindən əmlak vergisi tutulmur",
    "B)	Birgə fəaliyyət nəticəsində yaradılmış (alınmış) əsas vəsaitlərin dəyəri (Məcəllənin 197.1.1-ci maddəsində göstərilən aktivlər istisna olmaqla) isə birgə fəaliyyətin iştirakçıları tərəfindən müqavilə üzrə mülkiyyətdə müəyyən olunmuş pay haqqına müvafiq olaraq bəyannaməyə daxil edilir.",
    "C)	Birgə fəaliyyət nəticəsində yaradılmış (alınmış) əsas vəsaitlərin dəyəri (Məcəllənin 197.1.1-ci maddəsində göstərilən aktivlər də daxil olmaqla) isə birgə fəaliyyətin iştirakçıları tərəfindən müqavilə üzrə mülkiyyətdə müəyyən olunmuş pay haqqına müvafiq olaraq bəyannaməyə daxil edilir.",
    "D)	Birgə fəaliyyətin iştirakçıları arasında bağlanmış müqaviləyə əsasen mülkiyyətdə daha az paya malik iştirakçı tərəfindən ödənilir"
  ]
},
{
  numb: 9,
  question: "Fiziki şəxslərin xüsusi mülkiyyətində olan binaların sahəsinin ( yaşayış sahələrinə münasibətdə) neçə kvadratmetrdən artıq olmadıqda əmlak vergisi tutulmur?",
  answer: "B) 30 kvadratmetrdən ",
  options: [
    "A) 20 kvadratmetrdən",
    "B) 30 kvadratmetrdən ",
    "C) 10 kvadratmetrdən",
    "D) 35 kvadratmetrdən"
  ]
},
{
  numb: 10,
  question: "Bakı şəhərində yerləşən fiziki şəxslər xüsusi mülkiyyətində olan binaların hər kvadratmetrinə görə görə əmlak vergisini hansı dərəcə ilə ödəyirlər?",
  answer: "A)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,4 manat (bina Bakı şəhərində yerləşdikdə, həmin dərəcələrə müvafiq icra hakimiyyəti orqanının müəyyən etdiyi 0,7-dən aşağı və 1,5-dən yuxarı olmayan əmsallar tətbiq edilməklə)",
  options: [
    "A)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,4 manat (bina Bakı şəhərində yerləşdikdə, həmin dərəcələrə müvafiq icra hakimiyyəti orqanının müəyyən etdiyi 0,7-dən aşağı və 1,5-dən yuxarı olmayan əmsallar tətbiq edilməklə)",
    "B)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,3 manat (bina Bakı şəhərində yerləşdikdə, həmin dərəcələrə müvafiq icra hakimiyyəti orqanının müəyyən etdiyi 0,7-dən aşağı və 1,5-dən yuxarı olmayan əmsallar tətbiq edilməklə)",
    "C)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,3 manat",
    "D)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 20 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,4 manat (bina Bakı şəhərində yerləşdikdə, həmin dərəcələrə müvafiq icra hakimiyyəti orqanının müəyyən etdiyi 0,7-dən aşağı və 1,5-dən yuxarı olmayan əmsallar tətbiq edilməklə)"
  ]
},
{
  numb: 11,
  question: "Gəncə şəhərində yerləşən fiziki şəxslər xüsusi mülkiyyətində olan binaların hər kvadratmetrinə görə görə əmlak vergisini hansı dərəcə ilə ödəyirlər?",
  answer: "D)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,3 manat",
  options: [
    "A)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,4 manat",
    "B)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,5 manat",
    "C)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,2 manat",
    "D)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,3 manat"
  ]
},
{
  numb: 12,
  question: "Digər şəhərlər (rayon tabeliyində olan şəhərlər istisna olmaqla), rayon mərkəz¬lərində yaşayan fiziki şəxslər xüsusi mülkiyyətində olan binaların hər kvadratmetrinə görə görə əmlak vergisini hansı dərəcə ilə ödəyirlər?",
  answer: "D)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,2 manat",
  options: [
    "A)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,3 manat",
    "B)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,1 manat",
    "C)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,4 manat",
    "D)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,2 manat"
  ]
},
{
  numb: 13,
  question: "Rayon tabeliyində olan şəhərlərdə, qəsəbələrdə və kəndlərdə (Bakı və Sumqayıt şəhərlərinin, habelə Abşeron rayonunun qəsəbə və kəndləri istisna olmaqla) yerləşən fiziki şəxslər xüsusi mülkiyyətində olan binaların hər kvadratmetrinə görə görə əmlak vergisini hansı dərəcə ilə ödəyirlər?",
  answer: "C)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,1 manat",
  options: [
    "A)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,2 manat ",
    "B)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,4 manat",
    "C)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,1 manat",
    "D)	Binaların sahəsinin (yaşayış sahələrinə münasibətdə - onların 30 kvadratmetrdən artıq olan hissəsinin) hər kvadratmetrinə görə 0,3 manat"
  ]
},
{
  numb: 14,
  question: "Fiziki şəxslər mühərriki olan su nəqliyyatı vasitəsinə görə əmlak vergisini hansı qaydada və dərəcələrlə ödəyirlər?",
  answer: "A)	Mühərrikin 1 kub santimetri üçün 0,02 manat",
  options: [
    "A)	Mühərrikin 1 kub santimetri üçün 0,02 manat",
    "B)	Mühərrikin 1 kub santimetri üçün 0,1 manat",
    "C)	Mühərrikin 1 kub santimetri üçün 0,2 manat",
    "D)	Mühərrikin 1 kub santimetri üçün 0,3 manat"
  ]
},
{
  numb: 15,
  question: "Fiziki şəxslər mühərriki olan hava nəqliyyatı vasitəsinə görə əmlak vergisini hansı qaydada və dərəcələrlə ödəyirlər?",
  answer: "C)	Mühərrikin 1 kub santimetri üçün 0,02 manat",
  options: [
    "A)	Mühərrikin 1 kub santimetri üçün 0,2 manat",
    "B)	Mühərrikin 1 kub santimetri üçün 0,1 manat",
    "C)	Mühərrikin 1 kub santimetri üçün 0,02 manat",
    "D)	Mühərrikin 1 kub santimetri üçün 0,05 manat"
  ]
},
{
  numb: 16,
  question: "Fiziki şəxslər mühərriki olmayan su və hava nəqliyyatı vasitələrinə görə əmlak vergisini hansı qaydada və dərəcələrlə ödəyirlər?",
  answer: "A)	Onların bazar qiymətinin 1 faizi",
  options: [
    "A)	Onların bazar qiymətinin 1 faizi",
    "B)	Onların inventar dəyərinin 1 faizi	",
    "C) Onların orta illik qalıq dəyərinin 0,1 faizi",
    "D) Bu əsas vəsaitlərdən əmlak vergisi tutulmur"
  ]
},
{
  numb: 17,
  question: "Müəssisələr əsas vəsaitlərə görə əmlak vergisini hansı dərəcə ilə ödəyirlər?",
  answer: "A)	Onların vergi tutulan dəyərindən 1 faiz dərəcəsi ilə",
  options: [
    "A)	Onların vergi tutulan dəyərindən 1 faiz dərəcəsi ilə",
    "B)	Onların vergi tutulan dəyərindən 0,05 faiz dərəcəsi ilə",
    "C)	Onların vergi tutulan dəyərindən 2 faiz dərəcəsi ilə",
    "D)	Onların vergi tutulan dəyərindən 0,2 faiz dərəcəsi ilə"
  ]
},
{
  numb: 18,
  question: "D)	Onların vergi tutulan dəyərindən 1 faiz dərəcəsi ilə",
  answer: "1",
  options: [
    "A)	Onların vergi tutulan dəyərindən 0,2 faiz dərəcəsi ilə",
    "B)	Onların vergi tutulan dəyərindən 0,05 faiz dərəcəsi ilə",
    "C)	Onların vergi tutulan dəyərindən 2 faiz dərəcəsi ilə",
    "D)	Onların vergi tutulan dəyərindən 1 faiz dərəcəsi ilə"
  ]
},
{
  numb: 19,
  question: "Dövlət hakimiyyəti orqanları və yerli özünü idarəetmə orqanları əmlak vergisini hansı faiz dərəcəsi ilə ödəyirlər?",
  answer: "A)	Əmlak vergisini ödəməkdən azaddırlar",
  options: [
    "A)	Əmlak vergisini ödəməkdən azaddırlar",
    "B)	Əsas vəsaitlərin orta illik qalıq dəyərindən 1 faiz dərəcəsi ilə",
    "C)	Əsas vəsaitlərin orta illik qalıq dəyərindən 0,1 faiz dərəcəsi ilə",
    "D)	Əsas vəsaitlərin orta illik qalıq dəyərindən 2 faiz dərəcəsi ilə"
  ]
},
{
  numb: 20,
  question: "Büdcə təşkilatları əmlak vergisini hansı faiz dərəcəsi ilə ödəyirlər?",
  answer: "B)	Əmlak vergisi ödəməkdən azaddırlar",
  options: [
    "A)	balansında olan əsas vəsaitlərinin orta illik qalıq dəyərinin 1 faizi miqdarında",
    "B)	Əmlak vergisi ödəməkdən azaddırlar",
    "C)	balansında olan əsas vəsaitlərinin ilkin dəyərin 1 faizi miqdarında",
    "D)	balansmda olan əsas vəsaitlərinin balans dəyərinin 0,1 faizi miqdarında"
  ]
},
{
  numb: 21,
  question: "Azərbaycan Respublikasının Mərkəzi Bankı və onun qurumları əmlak vergisini hansı faiz dərəcəsi ilə ödəyirlər?",
  answer: "C)	Əmlak vergisi ödəməkdən azaddırlar",
  options: [
    "A)	Balansında olan əsas vəsaitlərinin orta illik qalıq dəyərinin 1 faizi miqdarında",
    "B)	Balansında olan əsas vəsaitlərinin ilkin dəyərinin 1 faizi miqdarında",
    "C)	Əmlak vergisi ödəməkdən azaddırla",
    "D)	Balansında olan əsas vəsaitlərinin balans dəyərinin 0,1 faizi miqdarında"
  ]
},
{
  numb: 22,
  question: "Dövlət fondları əmlak vergisini hansı faiz dərəcəsi ilə ödəyirlər?",
  answer: "B)	Əmlak vergisi ödəməkdən azaddırla",
  options: [
    "A)	Balansında olan əsas vəsaitlərinin orta illik qalıq dəyərinin 1 faizi miqdarında",
    "B)	Əmlak vergisi ödəməkdən azaddırla",    
    "C)	balansında olan əsas vəsaitlərinin ilkin dəyərin 1 faizi miqdarında",
    "D)	balansmda olan əsas vəsaitlərinin balans dəyərinin 0,1 faizi miqdarında"
  ]
},
{
  numb: 23,
  question: "Əlilliyi olan şəxslərin qeyri-hökumət təşkilatlan əmlak vergisini hansı faiz dərəcəsi ilə ödəyirlər?",
  answer: "D)	Əmlak vergisi ödəməkdən azaddırlar",
  options: [
    "A)	Balansında olan əsas vəsaitlərinin orta illik qalıq dəyərinin 1 faizi miqdarında",
    "B)	Balansında olan əsas vəsaitlərinin balans dəyərinin 0,1 faizi miqdarında",
    "C)	Balansında olan əsas vəsaitlərinin ilkin dəyərinin 1 faizi miqdarında",
    "D)	Əmlak vergisi ödəməkdən azaddırlar"
  ]
},
{
  numb: 24,
  question: "Dövlətin adından yaradılan publik hüquqi şəxslər əmlak vergisini hansı qayda ilə ödəyirlər?",
  answer: "A)	Sahibkarlıq fəaliyyəti məqsədləri üçün istifadə olunan əmlaka görə ödənilməli əmlak vergisi istisna olmaqla, əmlak vergisi ödəməkdən azaddırlar",
  options: [
    "A)	Sahibkarlıq fəaliyyəti məqsədləri üçün istifadə olunan əmlaka görə ödənilməli əmlak vergisi istisna olmaqla, əmlak vergisi ödəməkdən azaddırlar",
    "B)	Balansında olan əsas vəsaitlərinin balans dəyərinin 0,1 faizi miqdarında",
    "C)	Əmlak vergisi ödəməkdən azaddırlar",
    "D)	Balansında olan əsas vəsaitlərinin orta illik qalıq dəyərinin 1 faizi miqdarında"
  ]
},
{
  numb: 25,
  question: "Misgərlik, qalayçılıq və saxsı məmulatlarının, təsərrüfat müxəlləfatının, bağçılıq- bostançılıq alətlərinin, xalq musiqi alətlərinin hazırlanması sahəsində hüquqi şəxs yaratma¬dan sahibkarlıq fəaliyyəti ilə məşğul olan fiziki şəxslərin sənətkarlıq emalatxanalarının binaları əmlak vergisinə hansı qaydada cəlb edilir?",
  answer: "B)	Əmlak vergisinə cəlb edilmir",
  options: [
    "A)	Ümumi qaydada əmlak vergisi tutulur",
    "B)	Əmlak vergisinə cəlb edilmir",
    "C) 50 faiz güzəşt verilir",
    "D) Hesablanmış əmlak vergisinin 1/4 hissəsi tutulur"
  ]
},
{
  numb: 26,
  question: "Hansı hallarda müharibə əlillərinin binalara görə ödəməli olduğu əmlak vergisinin məbləği 30 manat azaldılmır?",
  answer: "A)	Binaların icarəyə, kirayəyə verildiyi, habelə sahibkarlıq və ya kommersiya fəaliyyəti ilə məşğul olmaq üçün istifadə edildiyi hallarda",
  options: [
    "A)	Binaların icarəyə, kirayəyə verildiyi, habelə sahibkarlıq və ya kommersiya fəaliyyəti ilə məşğul olmaq üçün istifadə edildiyi hallarda",
    "B)	İstənilən halda",
    "C) Yalnız binaların icarəyə, kirayəyə verildiyi hallarda",
    "D) Yalnız binaların sahibkarlıq və ya kommersiya fəaliyyəti ilə məşğul olmaq üçün istifadə edildiyi hallarda"
  ]
},
{
  numb: 27,
  question: "Binaların icarəyə, kirayəyə verildiyi, habelə sahibkarlıq və ya kommersiya fəaliyyəti ilə məşğul olmaq üçün istifadə edildiyi hallar istisna olmaqla, müharibə əlillərinin binalara görə ödəməli olduqları əmlak vergisinin məbləği nə qədər azaldılır?",
  answer: "C) 30 manat",
  options: [
    "A) 10 manat",
    "B) 20 manat",
    "C) 30 manat",
    "D) Güzəşt nəzərdə tutulmayıb"
  ]
},
{
  numb: 28,
  question: "Pensiya alan şəxslərin binalara görə ödəməli olduqları əmlak vergi-sinin məbləği nə qədər azaldılır?",
  answer: "A)	30 manat ",
  options: [
    "A)	30 manat ",
    "B)	55 manat",
    "C) Güzəşt nəzərdə tutulmayıb",
    "D) Aylıq gəlirin vergi tutulmayan məbləğinin 10 misli"
  ]
},
{
  numb: 29,
  question: "Məcburi köçkünlərin binalara görə ödəməli olduqları əmlak vergisinin məbləği nə qədər azaldılır?",
  answer: "B)	Güzəşt nəzərdə tutulmayıb",
  options: [
    "A)	55 manat",
    "B)	Güzəşt nəzərdə tutulmayıb",
    "C) 30 manat",
    "D) Aylıq gəlirin vergi tutulmayan məbləğinin 10 misli"
  ]
},
{
  numb: 30,
  question: "Həlak olmuş döyüşçülərin valideynlərinin binalara görə ödəməli olduqları əmlak vergisinin məbləği nə qədər azaldılır?",
  answer: "C) Güzəşt nəzərdə tutulmayıb",
  options: [
    "A)	55 manat",
    "B) 30 manat",
    "C) Güzəşt nəzərdə tutulmayıb",
    "D) Aylıq gəlirin vergi tutulmayan məbləğinin 10 misli"
  ]
},
{
  numb: 31,
  question: "Həlak olmuş döyüşçülərin dul arvadlarının binalara görə ödəməli olduqları əmlak vergisinin məbləği nə qədər azaldılır?",
  answer: "A)	30 manat",
  options: [
    "A)	30 manat",
    "B)	Güzəşt nəzərdə tutulmayıb",
    "C) 55 manat",
    "D) Aylıq gəlirin vergi tutulmayan məbləğinin 10 misli"
  ]
},
{
  numb: 32,
  question: "Çernobıl AES-də şüa xəstəliyinə tutulmuş şəxslərin icarəyə verdikləri binalara görə ödəməli olduqları əmlak vergisinin məbləği nə qədər azaldılır?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
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
  question: "?",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
];
