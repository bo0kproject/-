// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Torpaq vergisi torpaq mülkiyyətçilərinin və ya torpaqdan icarə və ya digər əsaslarla istifadə edən şəxslərin təsərrüfat fəaliyyətinin nəticələrindən asılı olmayaraq hansı qaydada hesablanır?",
  answer: "A)	Torpaq sahəsinə görə hər il sabit tədiyə şəklində",
  options: [
    "A)	Torpaq sahəsinə görə hər il sabit tədiyə şəklində",
    "B)	Torpağın təyinatı və coğrafi yerləşməsindən asılı olaraq hər il müxtəlif məbləğlərdə",
    "C)	Torpaq sahələrinə görə hər il dəyişkən tədiyə şəklində",
    "D)	Ilin sonunda təsərrüfat fəaliyyətinin nəticəsi zərərli olduqda torpaq vergisi hesablanmır."
  ]
},
  {
  numb: 2,
  question: "Rezident və qeyri-rezident müəssisələr torpaq sahələri barədə özlərinin mülkiyyət və istifadə hüquqlarını təsdiq edən sənədləri aldıqdan sonra torpaq vergisinin məqsədləri üçün 1 ay müddətində harada uçota durmalıdırlar?",
  answer: "A)	Dövlət vergi orqanlarında",
  options: [
    "A)	Dövlət vergi orqanlarında",
    "B)	Bələdiyyələrdə",
    "C) Dövlət xəzinədarlıq orqanlarında",
    "D) Dövlət statistika orqanlarında"
  ]
},
  {
  numb: 3,
  question: "Bələdiyyə müəssisələri və fiziki şəxslər torpaq sahələri barədə özlərinin mülkiyyət və istifadə hüquqlarını təsdiq edən sənədləri aldıqdan sonra torpaq vergisinin məqsədləri üçün 1 ay müddətində harada uçota durmalıdırlar?",
  answer: "A)	Bələdiyyələrdə",
  options: [
    "A)	Bələdiyyələrdə",
    "B)	Dövlət vergi orqanlarında",
    "C) Maliyyə orqanlarında",
    "D) Statistika orqanlarında"
  ]
},
  {
  numb: 4,
  question: "Fiziki şəxslər və müəssisələr hansı sənədləri aldıqdan sonra torpaq vergisinin məq-sədləri üçün 1 ay ərzində uçota durmalıdırlar?",
  answer: "A)	Torpaq sahələri barədə özlərinin mülkiyyət və istifadə hüquqlarını təsdiq edən sənədləri",
  options: [
    "A)	Torpaq sahələri barədə özlərinin mülkiyyət və istifadə hüquqlarını təsdiq edən sənədləri",
    "B)	Torpaq sahələri barədə yalnız özlərinin mülkiyyət hüquqlarını təsdiq edən sənədləri",
    "C)	Torpaq sahələri barədə yalnız özlərinin istifadə hüquqlarını təsdiq edən sənədləri",
    "D)	Torpaq sahələri barədə sərəncamvermə hüquqlarını təsdiq edən sənədləri aldıqdan sonra"
  ]
},
  {
  numb: 5,
  question: "Vergi ödəyiciləri torpaq sahələri barədə özlərinin mülkiyyət və istifadə hüquqlarını təsdiq edən sənədləri aldıqdan sonra hansı müddət ərzində vergi orqanında uçota durma-lıdırlar?",
  answer: "C) 1 ay ",
  options: [
    "A) 2 ay",
    "B) 3 ay",
    "C) 1 ay ",
    "D) 15 gün müddətində"
  ]
},
{
  numb: 6,
  question: "Qeyri-rezident fiziki şəxslər torpaq sahələri barədə istifadə hüquqlarını təsdiq edən sənədləri aldıqdan sonra torpaq vergisinin məqsədləri üçün 1 ay müddətində hansı orqanda uçota durmalıdırlar?",
  answer: "B)	Bələdiyyələrdə",
  options: [
    "A)	Dövlət vergi orqanında",
    "B)	Bələdiyyələrdə",
    "C) Həmin ölkənin konsulluğunda",
    "D) Həmin müəssisənin daimi nümayəndəliyində"
  ]
},
  {
  numb: 7,
  question: "Torpaq vergisinin ödəyiciləri kimlərdir?",
  answer: "A)	Azərbaycan Respublikasının ərazində mülkiyyətində və ya icarə və ya digər əsaslarla istifadəsində torpaq sahələri olan, o cümlədən dövlət və bələdiyyə mülkiyyətində olan torpaq sahələrini icarə və digər əsaslarla istifadə edən fiziki şəxslər və müəssisələr",
  options: [
    "A)	Azərbaycan Respublikasının ərazində mülkiyyətində və ya icarə və ya digər əsaslarla istifadəsində torpaq sahələri olan, o cümlədən dövlət və bələdiyyə mülkiyyətində olan torpaq sahələrini icarə və digər əsaslarla istifadə edən fiziki şəxslər və müəssisələr",
    "B)	Azərbaycan Respublikasının hüdudlarından kənarda mülkiyyətində torpaq sahələri olan fiziki şəxslər və müəssisələr",
    "C)	Azərbaycan Respublikasının ərazisində mülkiyyətində və istifadəsində torpaq sahələri olan yalnız qeyri-rezident fiziki şəxslər və müəssisələr",
    "D)	Yalnız rezident müəssisələr və rezident fiziki şəxslər"
  ]
},
{
  numb: 8,
  question: "Fiziki şəxslər üçün torpaq vergisinin vergitutma obyekti dedikdə nə başa düşülür?",
  answer: "A)	Azərbaycan Respublikasının qanunvericiliyinə müvafiq qaydada mülkiyyətə və ya icarə və ya digər əsaslarla istifadəyə verilən torpaq sahələri",
  options: [
    "A)	Azərbaycan Respublikasının qanunvericiliyinə müvafiq qaydada mülkiyyətə və ya icarə və ya digər əsaslarla istifadəyə verilən torpaq sahələri",
    "B)	Ancaq fiziki şəxslərin tikililəri altında olan torpaq sahələri",
    "C)	Ancaq həyətyanı sahələrdə olan torpaq sahələri",
    "D)	Sahibkarlıq məqsədi üçün istifadə edilən torpaq sahələri"
  ]
},
{
  numb: 9,
  question: "Müəssisələr üçün torpaq vergisinin vergitutma obyekti dedikdə nə başa düşülür?",
  answer: "C)	Azərbaycan Resp ərazisində mülkiyyətində və ya icarə və ya digər əsaslarla istifadəsində olan torpaq sahələri",
  options: [
    "A)	Azərbaycan Respublikası hüdudlarından kənarda mülkiyyətində və ya istifadəsində olan torpaq sahələri",
    "B)	Azərbaycan Respublikası hüdudlarından kənarda yalnız istifadəsində olan torpaq sahələri",
    "C)	Azərbaycan Resp ərazisində mülkiyyətində və ya icarə və ya digər əsaslarla istifadəsində olan torpaq sahələri",
    "D)	Azərbaycan Respublikasının ərazisində yalnız mülkiyyətində olan torpaq sahələri"
  ]
},
{
  numb: 10,
  question: "Təyinatı üzrə istifadə edilməyən kənd təsərrüfatı torpaqları üzrə torpaq vergisinin dərəcəsi necə müəyyən olunur?",
  answer: "A)	Torpaq sahəsinin hər 100 kvadratmetrinə görə 2 manat müəyyən edilir",
  options: [
    "A)	Torpaq sahəsinin hər 100 kvadratmetrinə görə 2 manat müəyyən edilir",
    "B)	mülkiyyətində olan torpaq sahəsinin hər 100 kvadratmetrə görə 10 manat",
    "C)	mülkiyyətində olan torpaq sahəsinin hər 100 kvadratmetrə görə 5 manat",
    "D)	mülkiyyətində olan torpaq sahəsinin hər 1 kvadratmetrə görə 2 manat"
  ]
},
{
  numb: 11,
  question: "Kənd təsərrüfatı torpaqları üçün torpaq vergisinin dərəcəsi nə qədər təşkil edir?",
  answer: "A)	1 şərti bal üçün 0,06 manat",
  options: [
    "A)	1 şərti bal üçün 0,06 manat",
    "B)	1 şərti bal üçün 0,05 manat",
    "C) 1 şərti bal üçün 0,6 manat",
    "D) 1 şərti bal üçün 0,5 manat"
  ]
},
{
  numb: 12,
  question: "Kadastr qiymət rayonları və ora daxil olan inzibati rayonlar üzrə kənd təsərrüfatı torpaqlarının təyinatı, coğrafi yerləşməsi və keyfiyyəti nəzərə alınmaqla şərti ballar hansı dövlət orqanı tərəfindən müəyyən edilir?",
  answer: "A)	Nazirlər Kabineti",
  options: [
    "A)	Nazirlər Kabineti",
    "B)	Kənd Təsərrüfatı Nazirliyi",
    "C) İqtisadiyyat və Sənaye Nazirliyi",
    "D) Ədliyyə Nazirliyi"
  ]
},
{
  numb: 13,
  question: "Kadastr qiymət rayonları və ora daxil olan inzibati rayonlar üzrə kənd təsərrüfatı torpaqlarının şərti balları hansı amillər nəzərə alınmaqla müəyyənləşdirilir?",
  answer: "A)	Təyinatı, coğrafi yerləşməsi və keyfiyyəti",
  options: [
    "A)	Təyinatı, coğrafi yerləşməsi və keyfiyyəti",
    "B)	Iqlim şəraiti və torpağın sahəsi",
    "C)	Torpağın mülkiyyət mənsubiyyəti və istehsal fəaliyyətinə cəlb edilib-edilməməsi",
    "D)	Torpaq sahəsinin münbitliyi"
  ]
},
{
  numb: 14,
  question: "Aşağıdakı yaşayış məntəqələrində yerləşən sənaye, tikinti, nəqliyyat, rabitə, ticarət- məişət xidməti və digər xüsusi təyinatlı torpaqlar üzrə torpaq sahəsi 10000 m2- dək olduqda torpaq sahəsinin hər 100 kvadrat metrinə görə torpaq vergisinin dərəcələrindən hansılar doğrudur? 1)	Bakı - 10 manat; 2)	Gəncə, Sumqayıt şəhərləri və Abşeron rayonu - 6 manat; 3)	Digər şəhərlər [rayon tabeliyində olan şəhərlər istisna olmaqla], rayon mərkəzləri - 4 man 4)	Rayon tabeliyində olan şəhərlərdə, qəsəbələrdə və kəndlərdə [Bakı və Sumqayıt şəhərlərinin, habelə Abşeron rayonunun qəsəbə və kəndləri istisna olmaqla] - 2 manat.",
  answer: "A) l;3;4",
  options: [
    "A) l;3;4",
    "В) 1;2;3",
    "C) 2;3;4",
    "D) l;2;4"
  ]
},
{
  numb: 15,
  question: "Aşağıdakı yaşayış məntəqələrində yerləşən sənaye, tikinti, nəqliyyat, rabitə, ticarət- məişət xidməti və digər xüsusi təyinatlı torpaqlar üzrə torpaq sahəsi 10000 mz- dən yuxan olan hissə üçün torpaq sahəsinin hər 100 kvadrat metrinə görə torpaq vergisinin dərəcələrin¬dən hansılar doğrudur? 1)	Bakı - 20 manat; 2)	Gəncə, Sumqayıt şəhərləri və Abşeron rayonu - 16 manat; 3)	Digər şəhərlər [rayon tabeliyindəki şəhərlər istisna olmaqla], rayon mərkəzləri - 4 manat; 4)	Rayon tabeliyində olan şəhərlərdə, qəsəbələrdə və kəndlərdə [Bakı və Sumqayıt şəhərlərinin, habelə Abşeron rayonunun qəsəbə və kəndləri istisna olmaqla] - 4 manat.",
  answer: "D) 1;2;4",
  options: [
    "A) l;3;4",
    "B) l;2;3",
    "C) 2;3;4",
    "D) 1;2;4"
  ]
},
{
  numb: 16,
  question: "Aşağıdakı yaşayış məntəqələrində yerləşən yaşayış fondlarının, həyətyanı sahələrinin torpaqları və vətəndaşların bağ sahələrinin tutduğu torpaqlar üzrə torpaq sahəsi 10000 m2- dək olduqda torpaq sahəsinin hər 100 kvadrat metrinə görə torpaq vergisinin dərəcələrindən hansılar doğrudur? 1)	Bakı - 0,8 manat; 2)	Gəncə, Sumqayıt şəhərləri və Abşeron rayonu - 0,45 manat; 3)	Digər şəhərlər [rayon tabeliyindəki şəhərlər istisna olmaqa], rayon mərkəzləri - 0,3 manat 4)	rayon tabeliyində olan şəhərlərdə, qəsəbələrdə və kəndlərdə [Bakı və Sumqayıt şəhərlərinin, habelə Abşeron rayonunun qəsəbə və kəndləri istisna olmaqla]) - 0,1 manat.",
  answer: "A) 3;4",
  options: [
    "A) 3;4",
    "B) 1;3",
    "C) 2;4",
    "D) 1;4"
  ]
},
{
  numb: 17,
  question: "Aşağıdakı yaşayış məntəqələrində yerləşən yaşayış fondlarının, həyətyanı sahə-lərinin torpaqları və vətəndaşların bağ sahələrinin tutduğu torpaqlar üzrə 10000 m2- dən yuxan olan hissə üçün torpaq sahəsinin hər 100 kvadrat metrinə görə torpaq vergisinin dərəcələrindən hansılar doğrudur? 1)	Bakı - 1,2 manat; 2)	Gəncə, Sumqayıt şəhərləri və Abşeron rayonu - 0,45 manat; 3)	Digər şəhərlər [rayon tabeliyindəki şəhərlər istisna olmaqa], rayon mərkəzləri - 0,6 manat; 4)	rayon tabeliyində olan şəhərlərdə, qəsəbələrdə və kəndlərdə [Bakı və Sumqayıt şəhərlərinin, habelə Abşeron rayonunun qəsəbə və kəndləri istisna olmaqla]) - 0,1 manat.",
  answer: "В) 1;3",
  options: [
    "A) 3;4",
    "В) 1;3",
    "C) 2;4",
    "D) 1;4"
  ]
},
{
  numb: 18,
  question: "Yaşayış fondlarının tutduğu torpaqların torpaq sahəsi 10000 m2- dək olduqda, torpaq sahəsinin hər 100 kvadrat metrinə görə Bakı şəhəri üçün torpaq vergisinin dərəcəsi nə qədər təşkil edir?",
  answer: "C) 0,6 manat",
  options: [
    "A) 0,5 manat",
    "B) 0,4 manat",
    "C) 0,6 manat",
    "D) 0,8 manat"
  ]
},
{
  numb: 19,
  question: "Bakı şəhəri ərazisində yerləşən sənaye, tikinti, nəqliyyat, rabitə, ticarət-məişət xidməti və digər xüsusi təyinatlı torpaqlar üzrə torpaq sahəsi 10000 m2- dək olduqda, torpaq sahəsinin hər 100 kvadrat metrinə görə torpaq vergisinin dərəcəsi nə qədər təşkil edir?",
  answer: "D) 10 manat",
  options: [
    "A) 4 manat",
    "B) 6 manat",
    "C) 8 manat",
    "D) 10 manat"
  ]
},
{
  numb: 20,
  question: "Bakı şəhəri ərazisində yaşayış fondlarının, həyətyanı sahələrinin torpaqları və və-təndaşların bağ sahələrinin tutduğu torpaqlar üzrə 10000 m2- dən yuxarı olan hissə üçün tor-paq sahəsinin hər 100 kvadrat metrinə görə torpaq vergisinin dərəcəsi nə qədər təşkil edir?",
  answer: "D) 1,2 manat",
  options: [
    "A) 4 manat",
    "B) 0,3 manat",
    "C) 2 manat",
    "D) 1,2 manat"
  ]
},
{
  numb: 21,
  question: "Gəncə, Sumqayıt şəhərləri və Abşeron rayonu ərazisində yerləşən sənaye, tikinti, nəqliyyat, rabitə, ticarət-məişət xidməti və digər xüsusi təyinatlı torpaqlar üzrə torpaq sahəsi 10000 m2- dək olduqda, torpaq sahəsinin hər 100 kvadrat metrinə görə torpaq vergisinin dərəcəsi nə qədər təşkil edir?",
  answer: "C) 8 manat",
  options: [
    "A) 4 manat",
    "B) 3 manat",
    "C) 8 manat",
    "D) 2 manat"
  ]
},
{
  numb: 22,
  question: "Gəncə, Sumqayıt şəhərləri və Abşeron rayonu ərazisində yerləşən yaşayış fondlarının, həyətyanı sahələrinin torpaqları və vətəndaşların bağ sahələrinin tutduğu torpaqlar üzrə torpaq sahəsi 10000 m2- dək olduqda, torpaq sahəsinin hər 100 kvadrat metrinə görə torpaq vergisinin dərəcəsi nə qədər təşkil edir?",
  answer: "D) 0,5 manat",
  options: [
    "A) 4 manat",
    "B) 0,1 manat",
    "C) 0,6 manat ",
    "D) 0,5 manat"
  ]
},
{
  numb: 23,
  question: "Gəncə, Sumqayıt şəhərləri və Abşeron rayonu ərazisində yerləşən yaşayış fond-larının, həyətyanı sahələrinin torpaqları və vətəndaşların bağ sahələrinin tutduğu torpaqlar üzrə 10000 m2- dən yuxan olan hissə üçün, torpaq sahəsinin hər 100 kvadrat metrinə görə torpaq vergisinin dərəcəsi nə qədər təşkil edir?",
  answer: "A) 1 manat",
  options: [
    "A) 1 manat",
    "B) 0,1 manat",
    "C) 0,6 manat",
    "D) 0,5 manat"
  ]
},
{
  numb: 24,
  question: "Gəncə, Sumqayıt şəhərləri və Abşeron rayonu ərazisində yerləşən sənaye, tikinti, nəqliyyat, rabitə, ticarət-məişət xidməti və digər xüsusi təyinatlı torpaqlar üzrə 10000 m2- dəü yuxan olan hissə uçün, torpaq sahəsinin hər 100 kvadrat metrinə görə torpaq vergisinin dərəcəsi nə qədər təşkil edir?",
  answer: "A) 16 manat",
  options: [
    "A) 16 manat",
    "B) 13 manat",
    "C) 8 manat",
    "D) 12 manat"
  ]
},
{
  numb: 25,
  question: "Bakı, Gəncə, Sumqayıt şəhərləri, Abşeron rayonu və rayon tabeliyində olan şəhərlər istisna olmaqla, digər şəhərlərin rayon mərkəzlərinin ərazisində yerləşən sənaye, tikinti, nəqliyyat, rabitə, ticarət-məişət xidməti və digər xüsusi təyinatlı torpaqlar üzrə torpaq sahəsi 10000 m2- dək olduqda, torpaq sahəsinin hər 100 kvadrat metrinə görə torpaq vergisinin dərəcəsi nə qədər təşkil edir?",
  answer: "B) 4 manat",
  options: [
    "A) 6 manat",
    "B) 4 manat",
    "C) 2 manat",
    "D) 5 manat"
  ]
},
{
  numb: 26,
  question: "Bakı, Gəncə, Sumqayıt şəhərləri, Abşeron rayonu və rayon tabeliyində olan şəhərlər istisna olmaqla, digər şəhərlərin rayon mərkəzlərinin ərazisində yerləşən sənaye, tikinti, nəqliyyat, rabitə, ticarət-məişət xidməti və digər xüsusi təyinatlı torpaqlar üzrə 10000 m2- dən yuxarı olan hissə üçün, torpaq sahəsinin hər 100 kvadrat metrinə görə torpaq vergisinin dərəcəsi nə qədər təşkil edir?",
  answer: "B) 8 manat",
  options: [
    "A) 10 manat",
    "B) 8 manat",
    "C) 6 manat",
    "D) 5 manat"
  ]
},
{
  numb: 27,
  question: "Bakı, Gəncə, Sumqayıt şəhərləri, Abşeron rayonu və rayon tabeliyində olan şəhərlər istisna olmaqla, digər şəhərlərin rayon mərkəzlərinin ərazisində yerləşən yaşayış fondla¬rının, həyətyanı sahələrinin torpaqları və vətəndaşların bağ sahələrinin tutduğu torpaqlar üzrə torpaq sahəsi 10000 m2- dək olduqda, torpaq sahəsinin hər 100 kvadrat metrinə görə torpaq vergisinin dərəcəsi nə qədər təşkil edir?",
  answer: "D) 0,3 manat",
  options: [
    "A) 0,4 manat",
    "B) 0,5 manat",
    "C) 2 manat",
    "D) 0,3 manat"
  ]
},
{
  numb: 28,
  question: "Bakı, Gəncə, Sumqayıt şəhərləri, Abşeron rayonu və rayon tabeliyində olan şəhərlər istisna olmaqla, digər şəhərlərin rayon mərkəzlərinin ərazisində yerləşən yaşayış fondla¬rının, həyətyanı sahələrinin torpaqları və vətəndaşların bağ sahələrinin tutduğu torpaqlar üzrə 10.000 m2- dən yuxarı olan hissə üçün, torpaq sahəsinin hər 100 kvadrat metrinə görə torpaq vergisinin dərəcəsi nə qədər təşkil edir?",
  answer: "A) 0,6 manat",
  options: [
    "A) 0,6 manat",
    "B) 0,5 manat",
    "C) 2 manat",
    "D) 0,3 manat"
  ]
},
{
  numb: 29,
  question: "Rayon tabeliyində olan şəhərlərdə, qəsəbələrdə və kəndlərdə (Bakı və Sumqayıt şəhərlərinin, habelə Abşeron rayonunun qəsəbə, kəndləri istisna olmaqla) yerləşən sənaye, tikinti, nəqliyyat, rabitə, ticarət-məişət xidməti və digər xüsusi təyinatlı torpaqlar üzrə torpaq sahəsi 10000 m2- dək olduqda, torpaq sahəsinin, hər 100 kvadrat metrinə görə torpaq vergisinin dərəcəsi nə qədər təşkil edir?",
  answer: "D) 2 manat",
  options: [    
    "A) 4 manat",
    "B) 3 manat",
    "C) 6 manat",
    "D) 2 manat"
  ]
},
{
  numb: 30,
  question: "Rayon tabeliyində olan şəhərlərdə, qəsəbələrdə və kəndlərdə (Bakı və Sumqayıt şəhərlərinin, habelə Abşeron rayonunun qəsəbə, kəndləri istisna olmaqla) yerləşən sənaye, tikinti, nəqliyyat, rabitə, ticarət-məişət xidməti və digər xüsusi təyinatlı torpaqlar üzrə 10000 m2- dən yuxarı olan hissə üçün, torpaq sahəsinin hər 100 kvadrat metrinə görə torpaq vergisinin dərəcəsi nə qədər təşkil edir?",
  answer: "A) 4 manat",
  options: [
    "A) 4 manat",
    "B) 3 manat",
    "C) 6 manat",
    "D) 8 manat"
  ]
},
{
  numb: 31,
  question: "Rayon tabeliyində olan şəhərlərdə, qəsəbələrdə və kəndlərdə (Bakı və Sumqayıt şəhərlərinin, habelə Abşeron rayonunun qəsəbə, kəndləri istisna olmaqla) yerləşən yaşayış fondlarının, həyətyanı sahələrinin torpaqları və vətəndaşların bağ sahələrinin tutduğu torpaqlar üzrə torpaq sahəsi 10000 m2- dək olduqda, torpaq sahəsinin hər 100 kvadrat metrinə görə torpaq vergisinin dərəcəsi nə qədər təşkil edir?",
  answer: "C) 0,1 manat",
  options: [
    "A) 0,2 manat",
    "B) 0,3 manat",
    "C) 0,1 manat",
    "D) 2 manat"
  ]
},
];
