// создание вопросов и ответов
let questions = [
    {
    numb: 1,
    question: "Azərbaycan Respublikasında gəlir vergisinin ödəyicisi kimlərdir?",
    answer: "C)   Rezident və qeyri-rezident fiziki şəxslər",
    options: [
      "A)   Yalnız rezident fiziki şəxslər",
      "B)   Yalnız qeyri-rezident fiziki şəxslər",
      "C)   Rezident və qeyri-rezident fiziki şəxslər",
      "D)   Fərdi sahibkarlar"
    ]
  },
    {
    numb: 2,
    question: "Rezident fiziki şəxslərin gəlirləri üzrə vergitutma obyekti nədir?",
    answer: "C)	Vergi ili üçün rezidentlərin bütün gəliri ilə həmin dövr üçün Vergi Məcəlləsi ilə müəyyən-ləşdirilən gəlirdən çıxılan məbləğ arasındakı fərqdən ibarət olan vergiyə cəlb edilən gəlirdir.",
    options: [
      "A)	Vergi ili üçün rezidentlərin yalnız Azərbaycan mənbəyindən əldə etdiyi gəliri ilə həmin dövr üçün Vergi Məcəlləsi ilə müəyyənləşdirilən gəlirdən çıxılan məbləğ arasındakı fərqdən ibarət olan vergiyə cəlb edilən gəlirdir.",
      "B)	Vergi ili üçün rezidentlərin bütün gəliri ilə həmin dövr üçün Vergi Məcəlləsi ilə müəyyənləşdirilən gəlirdən çıxılan məbləğ nəzərə alınmadan vergiyə cəlb edilən gəlirdir.",
      "C)	Vergi ili üçün rezidentlərin bütün gəliri ilə həmin dövr üçün Vergi Məcəlləsi ilə müəyyən-ləşdirilən gəlirdən çıxılan məbləğ arasındakı fərqdən ibarət olan vergiyə cəlb edilən gəlirdir.",
      "D)	Dövlət Vergi Xidməti tərəfindən müəyyənləşdirilən dövr üçün rezidentlərin bütün gəliri ilə həmin dövrdə Vergi Məcəlləsi ilə müəyyənləşdirilən gəlirdən çıxılan məbləğ arasındakı fərqdən ibarət olan vergiyə cəlb edilən gəlirdir."
    ]
  },
    {
    numb: 3,
    question: "Fiziki şəxslərdən ödəmə mənbəyində vergi tutulduğu halda vergiyə cəlb olunan gəlir vergitutma obyekti hesab edilə bilərmi?",
    answer: "B)	Hesab edilə bilər ",
    options: [
      "A)	Hesab edilə bilməz ",
      "B)	Hesab edilə bilər ",
      "C)   Bu Nazirlər Kabinetinin qərarı ilə müəyyənləşdirilir",
      "D)   Bu Dövlət Vergi Xidməti tərəfindən müəyyənləşdirilir"
    ]
  },
    {
    numb: 4,
    question: "Azərbaycan Respublikasında daimi nümayəndəlik vasitəsilə fəaliyyət göstərən qeyri- rezident fiziki şəxsin daimi nümayəndəliyi ilə əlaqədar olan gəlirindən vergi necə tutulur??",
    answer: "B)	Gəlirdən gəlirin əldə edilməsi ilə bağlı xərclər çıxılmaqla",
    options: [
      "A)	Ödəmə mənbəyində gəlirdən xərclər çıxılmamaqla",
      "B)	Gəlirdən gəlirin əldə edilməsi ilə bağlı xərclər çıxılmaqla",
      "C)	Ödəmə mənbəyində gəlirdən xərclər çıxılmaqla",
      "D)	Gəlirdən Azərbaycan Respublikasının hüdudlarından kənarda çəkilən xərclər çıxılmaqla"
    ]
  },
    {
    numb: 5,
    question: "Azərbaycan Respublikasında daimi nümayəndəlik vasitəsilə fəaliyyət göstərən qeyri- rezident vergi ödəyicisi hansı gəlirləri üzrə gəlir vergisinin ödəyicisidir?",
    answer: "A)	Daimi nümayəndəliyi ilə əlaqədar olan vergiyə cəlb edilən gəlirləri üzrə",
    options: [
      "A)	Daimi nümayəndəliyi ilə əlaqədar olan vergiyə cəlb edilən gəlirləri üzrə",
      "B)	Bütün gəlirləri üzrə",
      "C)	yalnız Azərbaycan Respublikasının hüdudlarından kənarda əldə etdiyi gəlirləri üzrə",
      "D)	daimi nümayəndəliyi ilə əlaqədar olmayan vergiyə cəlb edilən gəlirləri üzrə",
    ]
  },
  {
    numb: 6,
    question: "Qeyri-rezident fiziki şəxsin ödəmə mənbəyində vergiyə cəlb edilməsi nəzərdə tutulan ümumi gəliri hansı qaydada vergitutma obyektidir?",
    answer: "A)	Gəlirdən çıxılan məbləğ nəzərə alınmadan ödəniş yerində vergitutma obyektidir",
    options: [
      "A)	Gəlirdən çıxılan məbləğ nəzərə alınmadan ödəniş yerində vergitutma obyektidir",
      "B)	Vergitutma obyekti deyil",
      "C)	Gəlirdən çıxılan məbləğ nəzərə alınmaqla ödəniş yerində vergitutma obyektidir",
      "D)	Əgər fiziki şəxsin vergiyə cəlb edilməsi ödəmə mənbəyində nəzərdə tutulan ümumi gəliri, yalnız sahibkarlıq fəaliyyətindən əldə edilmişdirsə, vergitutma obyektidir"
    ]
  },
{
    numb: 7,
    question: "Məşğulluqdan və ya əmlakın təqdim edilməsindən gəlir əldə edən qeyri-rezident fizi¬ki şəxs hansı gəlirləri üzrə gəlir vergisinin ödəyicisidir?",
    answer: "A)	Azərbaycan mənbəyindən təqvim ili ərzində əldə etdiyi bu növ ümumi gəlirin V.Məcəllə- sinə əsasən, həmin dövrdə bu gəlirə aid olan və ondan çıxılan xərclər qədər azaldılan məbləği üzrə",
    options: [
      "A)	Azərbaycan mənbəyindən təqvim ili ərzində əldə etdiyi bu növ ümumi gəlirin V.Məcəllə- sinə əsasən, həmin dövrdə bu gəlirə aid olan və ondan çıxılan xərclər qədər azaldılan məbləği üzrə",
      "B)	Azərbaycan mənbəyindən təqvim ili ərzində əldə etdiyi bütün növ ümumi gəlirləri üzrə",
      "C)	Azərbaycan mənbəyindən və onun hüdudlarından kənarda təqvim ili ərzində əldə etdiyi bu növ ümumi gəlirin Vergi Məcəlləsində müəyyənləşdirilən, həmin dövrdə bu gəlirə aid olan və ondan çıxılan xərclər qədər azaldılan məbləği üzrə",
      "D)	Yalnız Azərbaycan Respublikasının hüdudlarından kənarda təqvim ili ərzində əldə etdiyi bütün növ ümumi gəliri məbləği üzrə"
    ]
  },
    {
    numb: 8,
    question: "Hüquqi şəxsin nizamnamə kapitalındakı iştirak payı və ya səhmlər xalis aktivlərin iştirak payı və ya səhmlərə mütənasib dəyərindən yuxan qiymətə təqdim edildikdə vergiyə cəlb edilən gəlir necə müəyyən olunur?",
    answer: "D)	Hüquqi şəxsin nizamnamə kapitalındakı iştirak payı və ya səhmlər xalis aktivlərin iştirak payı Və ya Səhmlərə mütənasib dəyərindən yuxarı qiymətə təqdim edildikdə faktiki təqdimetmə qiyməti ilə nizamnamə kapitalındakı iştirak payınm və ya səhmin nominal dəyəri arasındakı fərq",
    options: [
      "A)	Hüquqi şəxsin nizamnamə kapitalındakı iştirak payı və ya səhmlər xalis aktivlərin iştirak payı və ya səhmlərə mütənasib dəyərindən yuxarı qiymətə təqdim edildikdə səhmin nominal dəyəri vergiyə cəlb olunan gəlirdir",
      "B)	Səhmlərin bazar qiyməti ilə nominal dəyəri arasındakı fərq",
      "C)	Hüquqi şəxsin nizamnamə kapitalındakı iştirak payı və ya səhmlər xalis aktivlərin iştirak payı və ya səhmlərə mütənasib dəyərindən yuxarı qiymətə təqdim edildikdə faktiki təqdimetmə qiyməti",
      "D)	Hüquqi şəxsin nizamnamə kapitalındakı iştirak payı və ya səhmlər xalis aktivlərin iştirak payı Və ya Səhmlərə mütənasib dəyərindən yuxarı qiymətə təqdim edildikdə faktiki təqdimetmə qiyməti ilə nizamnamə kapitalındakı iştirak payınm və ya səhmin nominal dəyəri arasındakı fərq"
    ]
  },
    {
    numb: 9,
    question: "Hüquqi şəxsin nizamnamə kapitalındakı iştirak payı və ya səhmlər xalis aktivlərin iştirak payı və ya səhmlərə mütənasib dəyərindən aşağı qiymətə (güzəştli qiymətlə) təqdim edildikdə vergiyə cəlb edilən gəlir necə müəyyən olunur?",
    answer: "A)	Hüquqi şəxsin nizamnamə kapitalındakı iştirak payı və ya səhmlər xalis aktivlərin iştirak payı və ya səhmlərə mütənasib dəyərindən aşağı qiymətə (güzəştli qiymətlə) təqdim edildikdə alqı-satqı müqaviləsinin bağlandığı tarixə xalis aktivlərin mütənasib dəyəri ilə nizamnamə kapitalındakı iştirak payının nominal dəyəri arasındakı fərq vergiyə cəlb edilən gəlirdir",
    options: [
      "A)	Hüquqi şəxsin nizamnamə kapitalındakı iştirak payı və ya səhmlər xalis aktivlərin iştirak payı və ya səhmlərə mütənasib dəyərindən aşağı qiymətə (güzəştli qiymətlə) təqdim edildikdə alqı-satqı müqaviləsinin bağlandığı tarixə xalis aktivlərin mütənasib dəyəri ilə nizamnamə kapitalındakı iştirak payının nominal dəyəri arasındakı fərq vergiyə cəlb edilən gəlirdir",
      "B)	Hüquqi şəxsin nizamnamə kapitalındakı iştirak payı və ya səhmlər xalis aktivlərin iştirak payı və ya səhmlərə mütənasib dəyərindən aşağı qiymətə (güzəştli qiymətlə) təqdim edildikdə xalis aktivlərin mütənasib dəyəri ilə nizamnamə kapitalındakı iştirak payının nominal dəyəri arasındakı fərq vergiyə cəlb edilən gəlirdir",
      "C)	Hüquqi şəxsin nizamnamə kapitalındakı iştirak payı və ya səhmlər xalis aktivlərin iştirak payı və ya səhmlərə mütənasib dəyərindən aşağı qiymətə (güzəştli qiymətlə) təqdim edildikdə faktiki təqdimetmə qiyməti",
      "D)	Hüquqi şəxsin nizamnamə kapitalındakı iştirak payı və ya səhmlər xalis aktivlərin iştirak payı və ya səhmlərə mütənasib dəyərindən aşağı qiymətə (güzəştli qiymətlə) təqdim edildikdə faktiki təqdimetmə qiyməti ilə nizamnamə kapitalındakı iştirak payının və ya səhmin nominal dəyəri arasındakı fərq"
    ]
  },
        {
    numb: 10,
    question: "10.	İştirak payları və ya səhmlər nominal qiymətdən yuxan qiymətə alınmışdırsa, hə¬min iştirak paylarının və ya səhmlərin təqdim edilməsi zamanı gəlirdən çıxılan xərclər necə müəyyən olunur?",
    answer: "C)	İştirak payları və ya səhmlər nominal qiymətdən yuxarı qiymətə alınmışdırsa, həmin iştirak paylarının və ya səhmlərin təqdim edilməsi zamanı gəlirdən çıxılan xərclər bu aktivlərin faktiki satınalma qiyməti ilə nəzərə alınır",
    options: [
      "A)   İştirak payları və ya səhmlər nominal qiymətdən yuxarı qiymətə alınmışdırsa, həmin iştirak paylarının və ya səhmlərin təqdim edilməsi zamanı gəlirdən çıxılan xorclsi1 bil üktİVİSTİH faktiki bazar qiyməti ilə nəzərə alınır",
      "B)	İştirak payları və ya səhmlər nominal qiymətdən yuxarı qiymətə alınmışdırsa, həmin iştirak paylarının və ya səhmlərin təqdim edilməsi zamanı gəlirdən çıxılan xərclər bu aktivlərin nominal qiyməti ilə nəzərə ahnır",
      "C)	İştirak payları və ya səhmlər nominal qiymətdən yuxarı qiymətə alınmışdırsa, həmin iştirak paylarının və ya səhmlərin təqdim edilməsi zamanı gəlirdən çıxılan xərclər bu aktivlərin faktiki satınalma qiyməti ilə nəzərə alınır",
      "D)	İştirak payları və ya səhmlər nominal qiymətdən yuxarı qiymətə alınmışdırsa, həmin iştirak paylarının və ya səhmlərin təqdim edilməsi zamanı gəlirdən çıxılan xərclər bu aktivlərin faktiki təqdim edilmə qiyməti ilə nəzərə alınır"
    ]
  },
            {
    numb:11,
    question: "Vergitutma məqsədləri üçün rezident fiziki şəxsin gəliri dedikdə hansı gəlir başa dü¬şülür?",
    answer: "C)	Azərb. Resp.-da və Azərbaycan Respublikasının hüdudlarından kənarda əldə etdiyi gəlir",
    options: [
      "A)	Ancaq Azərbaycan Respublikasında əldə etdiyi gəlir",
      "B)	Ancaq Azərbaycan Respublikasının hüdudlarından kənarda əldə etdiyi gəlir",
      "C)	Azərb. Resp.-da və Azərbaycan Respublikasının hüdudlarından kənarda əldə etdiyi gəlir",
      "D)	Yalnız sahibkarlıq fəaliyyətindən əldə edilən gəlir"
    ]
  },
    {
    numb: 12,
    question: "Vergitutma məqsədləri üçün qeyri-rezident fiziki şəxsin gəliri dedikdə hansı gəlir başa düşülür?",
    answer: "A)	Azərbaycan Respublikası mənbələrindən əldə edilən gəlir",
    options: [
      "A)	Azərbaycan Respublikası mənbələrindən əldə edilən gəlir",
      "B)	Azərbaycan Respublikasından kənarda əldə edilən gəlir",
      "C)	Azərbaycan Res mənbələrindən və Respublika hüdudlarından kənarda əldə edilən gəlir.",
      "D)	Rezidenti olduğu ölkədə əldə etdiyi gəlir"
    ]
  },
    {
    numb: НомерВопроса,
    question: "Самвопрос",
    answer: "ОтветПравильный",
    options: [
      "1ответ",
      "2 ответ",
      "3 ответ",
      "4 ответ"
    ]
  },
    {
    numb: НомерВопроса,
    question: "Самвопрос",
    answer: "ОтветПравильный",
    options: [
      "1ответ",
      "2 ответ",
      "3 ответ",
      "4 ответ"
    ]
  },
    {
    numb: НомерВопроса,
    question: "Самвопрос",
    answer: "ОтветПравильный",
    options: [
      "1ответ",
      "2 ответ",
      "3 ответ",
      "4 ответ"
    ]
  },
  ];
