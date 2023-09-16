// создание вопросов и ответов
let questions = [
  {
  numb: 1,
  question: "İşin və xidmətin alıcısı, lotereya (o cümlədən virtual lotereyaların), idman mərc oyunlarının, digər yarış və müsabiqənin iştirakçısı vergi ödəyicisi olduqda ƏDV hansı qaydada hesablanır?",
  answer: "B)	İşin və xidmətin alıcısı, lotereya, digər yarış və müsabiqənin iştirakçısı vergi ödəyicisi olduqda ƏDV-ni həmin şəxs özü hesablayır və büdcəyə ödədikdən sonra Vergi Məcəlləsinin tələblərinə riayət etmək şərti ilə ödənilmiş məbləği əvəzləşdirə bilir.",
  options: [
    "A)	ƏDV-dən azaddır",
    "B)	İşin və xidmətin alıcısı, lotereya, digər yarış və müsabiqənin iştirakçısı vergi ödəyicisi olduqda ƏDV-ni həmin şəxs özü hesablayır və büdcəyə ödədikdən sonra Vergi Məcəlləsinin tələblərinə riayət etmək şərti ilə ödənilmiş məbləği əvəzləşdirə bilir.",
    "C)	İşin və xidmətin ahcısı, lotereya, digər yarış və müsabiqənin iştirakçısı vergi ödəyicisi olduqda ƏDV-ni həmin şəxs özü hesablayır və büdcəyə ödədikdən sonra Vergi Məcəlləsinin tələblərinə riayət etmək şərti ilə ödənilmiş məbləği əvəzləşdirə bilmir.",
    "D)	Sıfır (0) dərəcə ilə hesablayır"
  ]
},
  {
  numb: 2,
  question: "İşin və xidmətin ahcısı, lotereya (o cümlədən virtual lotereyaların), idman mərc oyunlarının, digər yarış və müsabiqənin iştirakçısı vergi ödəyicisi olmadıqda ƏDV hansı qaydada hesablanır?",
  answer: "D)	İşin və xidmətin alıcısı, lotereya, digər yarış və müsabiqənin iştirakçısı vergi ödəyicisi olmadıqda isə ödənişi aparan yerli bank və ya xarici bankın respublikadakı filialı ƏDV-ni hesablayaraq alıcının vəsaiti hesabına büdcəyə ödəyir, tutulmuş ƏDV isə bank və ya filial tərəfindən əvəzləşdirilmir.",
  options: [
    "A)	ƏDV-dən azaddır",
    "B)	İşin və xidmətin ahcısı, lotereya, digər yarış və müsabiqənin iştirakçısı vergi ödəyicisi olduqda ƏDV-ni həmin şəxs özü hesablayır və büdcəyə ödədikdən sonra Vergi Məcəlləsinin tələblərinə riayət etmək şərti ilə ödənilmiş məbləği əvəzləşdirə bilir.",
    "C)	İşin və xidmətin ahcısı, lotereya, digər yarış və müsabiqənin iştirakçısı vergi ödəyicisi olduqda ƏDV-ni həmin şəxs özü hesablayır və büdcəyə ödədikdən sonra Vergi Məcəlləsinin tələblərinə riayət etmək şərti ilə ödənilmiş məbləği əvəzləşdirə bilmir.",
    "D)	İşin və xidmətin alıcısı, lotereya, digər yarış və müsabiqənin iştirakçısı vergi ödəyicisi olmadıqda isə ödənişi aparan yerli bank və ya xarici bankın respublikadakı filialı ƏDV-ni hesablayaraq alıcının vəsaiti hesabına büdcəyə ödəyir, tutulmuş ƏDV isə bank və ya filial tərəfindən əvəzləşdirilmir."
  ]
},
  {
  numb: 3,
  question: "İşlərin görülməsi Və xidmətlərin göstərilməsi zamanı qeyri-rezidentə ödənilən məb- ləğə ƏDV necə tətbiq edilir ?",
  answer: "B)	Ödənilməli olan məbləğə [ƏDV nəzərə alınmadan] 18 faiz vergi dərəcəsini tətbiq etməklə",
  options: [
    "A)	Ödənilməli olan məbləğə [ƏDV ilə birlikdə] sıfır [0] faiz vergi dərəcəsini tətbiq etməklə",
    "B)	Ödənilməli olan məbləğə [ƏDV nəzərə alınmadan] 18 faiz vergi dərəcəsini tətbiq etməklə",
    "C)	Qeyri-rezidentə ƏDV hesablanmır",
    "D)	Ödənilməli olan məbləğə [ƏDV ilə birlikdə] 5 faiz vergi dərəcəsini tətbiq etməklə"
  ]
},
  {
  numb: 4,
  question: "ƏDV-nin məqsədləri üçün qeydiyyata alınmayan qeyri-rezident Azərbaycan Respublikası ərazisində xidmət göstərirsə və ya iş görürsə, ƏDV-yə hansı dərəcə ilə cəlb olunur?",
  answer: "B) 18 faiz",
  options: [
    "A) sıfır [0] dərəcə ilə",
    "B) 18 faiz",
    "C) Vergidən azaddır",
    "D) 10 faiz"
  ]
},
  {
  numb: 5,
  question: "Vergi agenti ƏDV-nin məqsədləri üçün qeydiyyatdan keçməmişdirsə, (sadələş-dirilmiş vergi ödəyicisidirsə) qeyri - rezidentə ödənilən məbləğə ƏDV-ni necə hesabla¬malıdır?",
  answer: "A)	Qeyri-rezidentə ödənilməli olan məbləğə (ƏDV nəzərə alınmadan) 18 faiz dərəcəsi tətbiq etməklə",
  options: [
    "A)	Qeyri-rezidentə ödənilməli olan məbləğə (ƏDV nəzərə alınmadan) 18 faiz dərəcəsi tətbiq etməklə",
    "B)	Qeyri-rezidentə ödənilməli olan məbləğə (ƏDV nəzərə alınmadan) sıfır (0) faiz dərəcəsi tətbiq etməklə",
    "C)	Vergi agenti ƏDV məqsədləri üçün qeydiyyatdan keçməmişdirsə, ƏDV hesablanmır",
    "D)	Vergi agenti ƏDV məqsədləri üçün qeydiyyatdan keçməmişdirsə, qeyri -rezidentə ödənilən məbləğə sadələşdirilmiş vergi hesablayır"
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
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
  question: "Вопрос",
  answer: "1",
  options: [
    "1",
    "2",
    "3",
    "4"
  ]
},
];
