// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "Azərbaycan Respublikasında istehsal olunan arağa [vodkaya], tündləşdirilmiş içki-lərə və tündləşdirilmiş içki materiallarına, likyor və likyor məmulatlarına tətbiq olunan aksi-zin dərəcəsi nə qədərdir?",
  answer: "A)	Hər litrinə 4,0 manat",
  options: [
    "A)	Hər litrinə 4,0 manat",
    "B)	Hər litrinə 0,8 manat",
    "C) Hər dekalitrinə 0,2 manat",
    "D) Hər litrinə 1,5 manat"
  ]
},
  {
  numb: 2,
  question: "Azərbaycan Respublikasında istehsal olunan konyak və konyak materiallarına aşa-ğıdakılardan hansı aksiz dərəcəsi tətbiq olunur?",
  answer: "A)	Hər litrinə 4,0 manat",
  options: [
    "A)	Hər litrinə 4,0 manat",
    "B)	Hər litrinə 0,8 manat",
    "C) Hər dekalitrinə 0,2 manat",
    "D) Hər litrinə 1,5 manat"
  ]
},
  {
  numb: 3,
  question: "Azərbaycan Respublikasında istehsal olunan şampan şərabına tətbiq olunan aksi¬zin dərəcəsi aşağıdakılardan hansıdır?",
  answer: "A)	Hər litrinə 2,6 manat",
  options: [
    "A)	Hər litrinə 2,6 manat",
    "B)	Hər litrinə 2 manat",
    "C) Topdansatış qiymətinin 0,2 faizi",
    "D) Topdansatış qiymətinin 0,5 faizi"
  ]
},
  {
  numb: 4,
  question: "Azərbaycan Respublikasında istehsal olunan şərablara və şərab materiallarına tət-biq olunan aksiz vergisinin dərəcəsi nə qədərdir?",
  answer: "B) Hər litrinə 0,2 man",
  options: [
    "A) Hər litrinə 0,5 man ",
    "B) Hər litrinə 0,2 man",
    "C) Hər litrinə 0,8 man",
    "D) Hər litrinə 0,4 man "
  ]
},
  {
  numb: 5,
  question: "Azərbaycan Respublikasında istehsal olunan pivə (alkoqolsuz pivə istisna olmaqla) və pivə tərkibli digər içkilərə tətbiq edilən aksizin dərəcəsi nə qədərdir?",
  answer: "B)	Hər litrinə 0,4 manat",
  options: [
    "A)	Hər litrinə 0,04 manat",
    "B)	Hər litrinə 0,4 manat",
    "C) Hər litrinə 0,1 manat",
    "D) Hər litrinə 0,05 manat"
  ]
},
{
  numb: 6,
  question: "Azərbaycan Respublikasında istehsal olunan siqarilla (nazik siqarlar) tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "A)	1000 ədədinə 43,0 manat",
  options: [
    "A)	1000 ədədinə 43,0 manat",
    "B)	Topdansatış bazar qiymətinin 0,15 faizi",
    "C) Topdansatış bazar qiymətinin 12,5 faizi",
    "D) Hər ədədinə 0,1 manat"
  ]
},
  {
  numb: 7,
  question: "Azərbaycan Respublikasında istehsal olunan tütündən hazırlanan siqaretlərə və onun əvəzedicilərinə tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "D)	1000 ədədinə 38,5 manat",
  options: [
    "A)	1000 ədədinə 10,0 manat",
    "B)	Topdansatış bazar qiymətinin 0,15 faizi",
    "C)	Topdansatış bazar qiymətindən aşağı olmayan təqdimolunma qiymətinin 12,5 faizi",
    "D)	1000 ədədinə 38,5 manat"
  ]
},
{
  numb: 8,
  question: "Azərbaycan Respublikasında istehsal olunan qəlyan üçün tütünə tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "D) Kiloqramına 30,0 manat",
  options: [
    "A)	Hər kiloqramına 50,0 manat",
    "B)	Hər kiloqramına 10,0 manat",
    "C) Kiloqramına 20.0 manat",
    "D) Kiloqramına 30,0 manat"
  ]
},
{
  numb: 9,
  question: "Azərbaycan Respublikasında istehsal olunan alkoqolsuz energetik içkilərə tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "C) Hər litrinə 3,1 manat",
  options: [
    "A)	Hər litrinə 4,0 manat",
    "B)	Topdansatış bazar qiymətinin 20 faizi",
    "C) Hər litrinə 3,1 manat",
    "D) Hər litrinə 2,0 manat"
  ]
},
{
  numb: 10,
  question: "Azərbaycan Respublikasında istehsal olunan siqarlar, o cümlədən ucları kəsilən siqarlar tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "B)	Hər bir ədədinə 1,0 manat",
  options: [
    "A)	Hər bir ədədinə 0,1 manat",
    "B)	Hər bir ədədinə 1,0 manat",
    "C) Hər bir ədədinə 0,5 manat",
    "D) Hər bir ədədinə 2,0 manat"
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
{
  numb: 31,
  question: "Azərbaycan Respublikasına idxal olunan mühərrikin həcmi 5000 kubsantimetrdən və istehsal tarixi 3 ildən çox olan minik avtomobillərinə görə aksiz vergisi necə hesablanır?",
  answer: "B)	60600 manat + mühərrikinin həcminin 5000 kubsantimetrdən çox hissəsi üçün hər kubsantimetrə görə - 80 manat",
  options: [
    "A)	60600 manat + mühərrikinin həcminin 5000 kubsantimetrdən çox hissəsi üçün hər kubsantimetrə görə - 60 manat",
    "B)	60600 manat + mühərrikinin həcminin 5000 kubsantimetrdən çox hissəsi üçün hər kubsantimetrə görə - 80 manat",
    "C)	60600 manat + mühərrikinin həcminin 5000 kubsantimetrdən çox hissəsi üçün hər kubsantimetrə görə - 100 manat",
    "D)	60600 manat + mühərrikinin həcminin 5000 kubsantimetrdən çox hissəsi üçün hər kubsantimetrə görə - 50 manat"
  ]
},
{
  numb: 32,
  question: "Azərbaycan Respublikasına idxal olunan minik avtomobillərinin istehsal tarixi 7 ildən artıq olduqda, aksiz Vergi Məcəlləsinin 190.4.1-ci və 190.4.1-3-cü maddələrinə əsasən hesablanmış məbləğə benzin mühərrikli minik avtomobillərinə neçə yüksəldici əmsal tətbiq edilməklə hesablanır?",
  answer: "C) 1,2 ",
  options: [
    "A) 1,5",
    "B) l,0 ",
    "C) 1,2 ",
    "D) 1,3"
  ]
},
{
  numb: 33,
  question: "Azərbaycan Resp. idxal olunan minik avtomobillərinin istehsal tarixi 7 ildən artıq olduqda, aksiz Vergi Mə. 190.4.1-ci və 190.4.1-3-cü maddələrinə əsasən hesablanmış məbləğə dizel mühərrikli minik avtomobillərinə neçə yüksəldici əmsal tətbiq edilməklə hesablanır’",
  answer: "A) 1,5",
  options: [
    "A) 1,5",
    "B) l,0",
    "C) 1,2",
    "D) 1,3"
  ]
},
{
  numb: 34,
  question: "Azərbaycan Respublikasına idxal olunan platinin hər qramına görə tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "A)	İdxal olunan platinin hər qramına görə - 4,0 manat",
  options: [
    "A)	İdxal olunan platinin hər qramına görə - 4,0 manat",
    "B)	İdxal olunan platinin hər qramına görə - 3,0 manat",
    "C)	İdxal olunan platinin hər qramına görə - 2,5 manat",
    "D)	İdxal olunan platinin hər qramına görə - 1,5 manat"
  ]
},
{
  numb: 35,
  question: "Azərbaycan Respublikasına idxal olunan qızılın min çəki vahidindəki miqdarı 375 (üç yüz yetmiş beş) olduqda, hər qramına görə tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "B)	Qızılın min çəki vahidindəki miqdarı 375 olduqda, hər qramına görə - 1,5 manat;",
  options: [
    "A)	Qızılın min çəki vahidindəki miqdarı 375 olduqda, hər qramına görə - 0,6 manat;",
    "B)	Qızılın min çəki vahidindəki miqdarı 375 olduqda, hər qramına görə - 1,5 manat;",
    "C)	Qızılın min çəki vahidindəki miqdarı 375 olduqda, hər qramına görə - 0,5 manat;",
    "D)	Qızılın min çəki vahidindəki miqdarı 375 olduqda, hər qramına görə - 1,0 manat;"
  ]
},
{
  numb: 36,
  question: "Azərbaycan Respublikasına idxal olunan qızılın min çəki vahidindəki miqdarı 500 (beş yüz) olduqda, hər qramına görə tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "D)	Qızılın min çəki vahidindəki miqdarı 500 olduqda, hər qramına görə - 2,0 manat;",
  options: [
    "A)	Qızıhn min çəki vahidindəki miqdarı 500 olduqda, hər qramına görə - 1,2 manat;",
    "B)	Qızılın min çəki vahidindəki miqdarı 500 olduqda, hər qramına görə - 0,8 manat;",
    "C)	Qızılın min çəki vahidindəki miqdarı 500 olduqda, hər qramına görə - 1,5 manat;",
    "D)	Qızılın min çəki vahidindəki miqdarı 500 olduqda, hər qramına görə - 2,0 manat;"
  ]
},
{
  numb: 37,
  question: "Azərbaycan Respublikasına idxal olunan qızılın min çəki vahidindəki miqdarı 585 (beş yüz səksən beş) olduqda, hər qramına görə tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "A)	Qızılın min çəki vahidindəki miqdarı 585 olduqda, hər qramına görə - 2,4 manat;",
  options: [
    "A)	Qızılın min çəki vahidindəki miqdarı 585 olduqda, hər qramına görə - 2,4 manat;",
    "B)	Qızılın min çəki vahidindəki miqdarı 585 olduqda, hər qramına görə - 0,8 manat;",
    "C)	Qızılın min çəki vahidindəki miqdarı 585 olduqda, hər qramına görə -1,5 manat;",
    "D)	Qızıhn min çəki vahidindəki miqdarı 585 olduqda, hər qramına görə -1,7 manat;"
  ]
},
{
  numb: 38,
  question: "Azərbaycan Respublikasına idxal olunan qızılın min çəki vahidindəki miqdarı 750 (yeddi yüz əlli) olduqda, hər qramına görə tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "C) Qızılın min çəki vahidindəki miqdarı 750 olduqda, hər qramına görə - 3,0 manat;",
  options: [
    "A)	Qızılın min çəki vahidindəki miqdarı 750 olduqda, hər qramına görə - 1,3 manat;",
    "B)	Qızılın min çəki vahidindəki miqdarı 750 olduqda, hər qramına görə - 1,8 manat;",
    "C)	Qızılın min çəki vahidindəki miqdarı 750 olduqda, hər qramına görə - 3,0 manat;",
    "D)	Qızılın min çəki vahidindəki miqdarı 750 olduqda, hər qramına görə -1,7 manat;"
  ]
},
{
  numb: 39,
  question: "Azərbaycan Resp. idxal olunan qızılın min çəki vahidindəki miqdarı 958 (doqquz yüz əlli səkkiz) olduqda, hər qramına görə tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "B)	Qızılın min çəki vahidindəki miqdarı 958 olduqda, hər qramına görə - 5,0 manat;",
  options: [
    "A)	Qızılın min çəki vahidindəki miqdarı 958 olduqda, hər qramına görə - 1,4 manat;",
    "B)	Qızılın min çəki vahidindəki miqdarı 958 olduqda, hər qramına görə - 5,0 manat;",
    "C)	Qızılın min çəki vahidindəki miqdarı 958 olduqda, hər qramına görə - 1,5 manat;",
    "D)	Qızılın min çəki vahidindəki miqdarı 958 olduqda, hər qramına görə - 2,0 manat;"
  ]
},
{
  numb: 40,
  question: "Azərbaycan Respublikasına idxal olunan qızılın min çəki vahidindəki miqdarı 999 (doqquz yüz doxsan doqquz) olduqda, hər qramına görə tətbiq olunan aksizin dərəcəsi nə qədərdir?",
  answer: "D)	Qızılın min çəki vahidindəki miqdarı 999 olduqda, hər qramına görə - 6,0 manat;",
  options: [
    "A)	Qızılın min çəki vahidindəki miqdarı 999 olduqda, hər qramına görə - 2,2 manat;",
    "B)	Qızılın min çəki vahidindəki miqdarı 999 olduqda, hər qramına görə - 1,8 manat;",
    "C)	Qızılın min çəki vahidindəki miqdarı 999 olduqda, hər qramına görə - 2,5 manat;",
    "D)	Qızılın min çəki vahidindəki miqdarı 999 olduqda, hər qramına görə - 6,0 manat;"
  ]
},
];
