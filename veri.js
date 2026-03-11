// ==========================================
// SUFFA KÜLLİYATI - VERİ DEPOSU (veri.js)
// Bu dosya index.html tarafından otomatik olarak çekilecektir.
// Sadece bu dosyanın içine PDF'lerden kopyaladığınız metinleri yapıştırın.
// ==========================================

const QUOTES = [
    "İhlas, aradan dünyayı çıkarıp sadece O'nu (cc) görmektir...",
    "Siyer okumak, Asr-ı Saadet'e gitmek değil, Asr-ı Saadet'i kendi asrımıza, kendi evimize ve kendi yüreğimize taşımaktır.",
    "Sahabe olmak, O'nun (sav) etrafında pervane olup, ateşe atılmaktan korkmamaktır.",
    "Okçular Tepesi, kıyamete kadar her Müslümanın nöbet tutması gereken manevi bir zirvedir.",
    "Bedir, sayıların ve imkanların değil, samimiyetin ve Allah'a tam teslimiyetin zaferidir."
];

// KİTAPLARIN SIRALAMASI VE İÇERİĞİ
const KULLIYAT_VERISI = {
    kuran: { 
        title: "Kur'ân Bilinci", 
        subtitle: "Hayat Kitabımız", 
        symbol: '✧', 
        chapters: [
            { 
                id: 'k1', 
                title: '1. Ders: Kur\'ân, Allah\'ın (cc) Kelâmıdır', 
                tr: "İlâhî vahiy, yüce otoriteden bize süzülüp gelen kelâm-ı ezelîdir. Kur'ân'ın, Allah'ın (cc) kelâmı olduğu gerçeği Kur'ân'a muhatap olan zihinlerden hiçbir zaman çıkmamalıdır. Muhatap, karşısına oturduğu kitabın sıradan bir kitap olmadığını bilmeli ve o metnin sahibinin yüceliğinin bilincinde olmalıdır.\n\nKur'ân sıradan bir roman değil, bir hikâye veya tarih kitabı değil, bir bilim veya coğrafya kitabı da değildir. Bu yüce kitap, Allah'ın (cc) kelâmıdır. Bir hikmet ve maksat için yeryüzüne indirilmiştir. Öyleyse Kur'ân-ı Kerîm, her daim Allah'ın (cc) kelâmı olduğu bilinciyle okunmalı, saygıda kusur edilmemelidir. Ama bu saygı vahyi hayatın dışında bırakarak, saygı göstereceğiz diye ona el sürmeyecek bir hâle dönüştürmemelidir. Ona yapılacak saygı yine onun kendisinden öğrenilerek yapılmalıdır.\n\nKelâmın Allah'a ait olduğu bilinci, muhataba çok önemli bir derinlik, teslimiyet ve itminan kazandırır. Çünkü Kelâmullah kalplerin ilacı, zihinlerin dermanı, dillerin ise fermanıdır.\n\nKur'ân, ilk muhatapları olan sahâbenin üzerinde derin değişimler meydana getirmiştir. Ancak ilâhî bir kitap insanı bu derecede değiştirir ve dönüştürür. Kur'ân-ı Kerîm'in, nâzil olduğu ilk andan itibaren imana kapılarını açmış muhatabının kalbine, ahlâkına, duruşuna çok farklı etkileri olmuştur.", 
                ing: "Divine Wahy is the Eternal Kalam filtering down to us from the Supreme Authority. The reality that the Quran is the Kalam of Allah (cc) must never depart from the minds of those who engage with it. The addressee must realize that the book before them is not an ordinary book, and they must be profoundly conscious of the majesty of its Owner.\n\nThe Quran is not an ordinary novel, nor a storybook, nor a history book; neither is it a book of science or geography. This exalted book is the Kalam of Allah (cc). It was revealed to the earth for a profound wisdom and purpose. Therefore, the Noble Quran must always be read with the consciousness that it is the Word of Allah (cc), and there must be no shortcoming in reverence towards it. However, this reverence should not turn into isolating the Wahy from life, leaving it untouched under the guise of showing respect. The true reverence to be shown to it must be learned from the Quran itself.\n\nThe consciousness that this Kalam belongs to Allah grants the addressee a profound depth, absolute submission, and Itminan (tranquility). For Kalamullah is the cure for hearts, the remedy for minds, and the divine edict for tongues.\n\nThe Quran brought about profound transformations upon its first addressees, the noble Sahaba. Only a divine book can change and transform a human being to such a degree. From the very first moment it was revealed, the Noble Quran has had remarkably distinct effects on the heart, the Akhlaq (character), and the stance of the addressee who has opened their doors to Iman.", 
                alm: "Die göttliche Wahy (Offenbarung) ist der ewige Kalam (das Wort), der von der Höchsten Autorität zu uns herabfließt. Die Realität, dass der Koran der Kalam Allahs (cc) ist, darf niemals aus den Köpfen derer verschwinden, die sich ihm zuwenden. Der Adressat muss erkennen, dass das Buch, das vor ihm liegt, kein gewöhnliches Buch ist, und er muss sich der Majestät seines Besitzers zutiefst bewusst sein.\n\nDer Koran ist kein gewöhnlicher Roman, kein Geschichten- oder Geschichtsbuch; er ist auch kein Buch über Wissenschaft oder Geografie. Dieses erhabene Buch ist der Kalam Allahs (cc). Er wurde für eine tiefe Weisheit und einen bestimmten Zweck auf die Erde herabgesandt. Daher muss der Edle Koran immer mit dem Bewusstsein gelesen werden, dass er das Wort Allahs (cc) ist, und es darf kein Mangel an Ehrfurcht ihm gegenüber bestehen. Diese Ehrfurcht darf jedoch nicht dazu führen, dass die Wahy aus dem Leben verbannt wird und man sie unter dem Deckmantel des Respekts unberührt lässt. Die wahre Ehrfurcht, die ihm entgegenzubringen ist, muss aus dem Koran selbst erlernt werden.\n\nDas Bewusstsein, dass dieser Kalam Allah gehört, verleiht dem Adressaten eine enorme Tiefe, absolute Hingabe (Taslim) und Itminan (innere Ruhe). Denn Kalamullah ist die Heilung für die Herzen, das Heilmittel für den Verstand und das göttliche Edikt für die Zungen.\n\nDer Koran bewirkte tiefgreifende Veränderungen bei seinen ersten Adressaten, den edlen Sahaba. Nur ein göttliches Buch kann einen Menschen in einem solchen Maße verändern und transformieren. Vom ersten Moment seiner Offenbarung an hatte der Edle Koran bemerkenswert unterschiedliche Auswirkungen auf das Herz, den Akhlaq (Charakter) und die Haltung des Adressaten, der seine Türen für den Iman geöffnet hat.", 
                arp: "إن الوحي الإلهي هو الكلام الأزلي الذي يتنزل إلينا من السلطة العليا. إن حقيقة كون القرآن كلام الله (عز وجل) يجب ألا تغيب أبدًا عن أذهان المخاطبين به. يجب على المخاطب أن يدرك أن الكتاب الذي يجلس أمامه ليس كتابًا عاديًا، وعليه أن يكون واعيًا بعظمة صاحبه.\n\nالقرآن ليس رواية عادية، ولا كتاب قصص أو تاريخ، ولا هو كتاب علوم أو جغرافيا. هذا الكتاب الجليل هو كلام الله (عز وجل). لقد أُنزل إلى الأرض لحكمة وغاية عظيمة. لذلك، يجب قراءة القرآن الكريم دائمًا بوعي تام بأنه كلام الله، ولا ينبغي التقصير في احترامه وتوقيره. ولكن، لا ينبغي لهذا الاحترام أن يتحول إلى عزل الوحي عن الحياة، وتركه مهجورًا بحجة التوقير. إن الاحترام الحقيقي الذي يجب أن يُقدم للقرآن يجب أن يُتعلم من القرآن نفسه.\n\nإن الوعي بأن هذا الكلام لله يمنح المخاطب عمقًا كبيرًا، وتسليمًا مطلقًا، واطمئنانًا. لأن كلام الله هو دواء القلوب، وبلسم العقول، وفرمان الألسنة.\n\nلقد أحدث القرآن تغييرات عميقة في أوائل مخاطبيه، وهم الصحابة الكرام. فقط كتاب إلهي يمكنه أن يغير الإنسان ويحوله إلى هذا الحد. منذ اللحظة الأولى لنزوله، كان للقرآن الكريم تأثيرات استثنائية على قلب وخلق وموقف المخاطب الذي فتح أبوابه للإيمان." 
            },
            { 
                id: 'k2', 
                title: '2. Ders: Kur\'ân, Allah\'ın (cc) İnsan ile Diyaloğudur', 
                tr: "Efendimiz (sas), kutlu beyânlarının birinde der ki: 'Sizden her kim Rabb'i ile konuşmak/dertleşmek isterse hemen Kur'ân okusun.' [Deylemi, Firdevs, 1/302]. Bu hadisten de anlaşılacağı gibi Kur'ân, Allah'ın insanla ve insanın Allah'la kurduğu diyalogları dile getiren bir kitaptır. Bazen ilâhî vahiy peygamberlerle Allah arasında, bazense insanlıkla Allah arasındaki diyaloglara yer vererek ilişkinin canlılığını gözler önüne serer.\n\nKur'ân-ı Kerîm ile ilişki kurmak isteyen muhatap, ilâhî vahyin bu yönünü iyi kavrarsa çok büyük bir kazanım elde eder. Vahyin karşısına oturan muhatap, karşısında eli dili bağlı bir metin değil, onunla konuşan bir metin olduğunu öğrendiği zaman, o okumadan hem büyük bir zevk almaya hem de mesajlarından istifade etmeye başlayacaktır.\n\nVahyin kendisini dinlediğinin farkına varan; hüznünü ona açacak, sevincini onunla paylaşacak, sıkıntısını onunla giderecek, şükrünü onunla yerine getirecek, hacetini onunla isteyecek, belalarını onunla defedecek ve rahmeti onunla üzerine celbedecektir. Bunun farkına varan, o kelâm-ı ezelîyi okuyunca Allah'ın (cc) huzurunda olduğunu fark edecek, söylediklerine karşılık geleceğini bilecek ve Allah (cc) ile konuşmaya, dertleşmeye başlayacaktır.", 
                ing: "Our Master (pbuh) says in one of his blessed statements: 'Whoever among you wishes to converse and confide in his Rabb, let him immediately read the Quran.' As understood from this Hadith, the Quran is a book that articulates the dialogues established between Allah and humanity, and humanity and Allah. Sometimes the Divine Wahy presents dialogues between the Prophets and Allah, and sometimes between humanity and Allah, thereby revealing the vitality of this relationship.\n\nThe addressee who wishes to establish a profound connection with the Noble Quran will attain a tremendous spiritual gain if they truly comprehend this aspect of the Divine Wahy. When the addressee sitting before the Wahy realizes that they are not facing a mute and bound text, but rather a living text that speaks directly to them, they will begin to derive immense spiritual delight (zawq) from that reading and deeply benefit from its messages.\n\nThe one who becomes aware that the Wahy is actually listening to them will pour out their sorrow to it, share their joy with it, cure their distress through it, fulfill their Shukr (gratitude) with it, ask for their needs through it, repel their calamities with it, and attract divine Rahmah (mercy) upon themselves through it. Realizing this, when they recite that Eternal Kalam, they will perceive that they are in the majestic presence of Allah (cc), knowing that their words will be answered, and they will truly begin to converse and confide in Allah (cc).", 
                alm: "Unser Meister (saw) sagt in einer seiner gesegneten Aussagen: 'Wer von euch sich wünscht, mit seinem Rabb (Herrn) zu sprechen und sich Ihm anzuvertrauen, der soll sofort den Koran lesen.' Wie aus diesem Hadith hervorgeht, ist der Koran ein Buch, das die Dialoge zwischen Allah und den Menschen sowie zwischen den Menschen und Allah zum Ausdruck bringt. Manchmal präsentiert die göttliche Wahy (Offenbarung) Dialoge zwischen den Propheten und Allah und manchmal zwischen der Menschheit und Allah, wodurch die Lebendigkeit dieser Beziehung offenbart wird.\n\nDer Adressat, der eine tiefe Verbindung mit dem Edlen Koran aufbauen möchte, wird einen enormen spirituellen Gewinn erlangen, wenn er diesen Aspekt der göttlichen Wahy wirklich versteht. Wenn der Adressat, der vor der Wahy sitzt, erkennt, dass er keinem stummen und gebundenen Text gegenübersteht, sondern einem lebendigen Text, der direkt zu ihm spricht, wird er beginnen, immense spirituelle Freude (Zawq) aus dieser Lesung zu ziehen und tief von ihren Botschaften zu profitieren.\n\nDerjenige, der sich bewusst wird, dass die Wahy ihm tatsächlich zuhört, wird ihr seinen Kummer ausschütten, seine Freude mit ihr teilen, seine Not durch sie heilen, seinen Shukr (Dankbarkeit) mit ihr erfüllen, um seine Bedürfnisse durch sie bitten, seine Katastrophen mit ihr abwehren und durch sie die göttliche Rahmah (Barmherzigkeit) auf sich ziehen. Wenn er dies erkennt und jenen Ewigen Kalam rezitiert, wird er spüren, dass er sich in der majestätischen Gegenwart Allahs (cc) befindet, in dem Wissen, dass seine Worte beantwortet werden, und er wird wahrhaftig beginnen, mit Allah (cc) zu sprechen und sich Ihm anzuvertrauen.", 
                arp: "يقول سيدنا (صلى الله عليه وسلم) في أحد بياناته المباركة: 'من أراد منكم أن يناجي ربه ويتحدث إليه فليقرأ القرآن فورًا'. كما يُفهم من هذا الحديث، فإن القرآن كتاب يعبر عن الحوارات التي يقيمها الله مع الإنسان، والإنسان مع الله. أحيانًا يعرض الوحي الإلهي حوارات بين الأنبياء والله، وأحيانًا بين البشرية جمعاء والله، مما يبرز حيوية هذه العلاقة.\n\nإن المخاطب الذي يرغب في إقامة علاقة مع القرآن الكريم سيحقق مكسبًا روحيًا عظيمًا إذا أدرك هذا الجانب من الوحي الإلهي جيدًا. عندما يدرك المخاطب الجالس أمام الوحي أنه لا يواجه نصًا صامتًا مقيدًا، بل نصًا ناطقًا يتحدث إليه، فإنه سيبدأ في تذوق متعة روحية عظيمة من تلك القراءة ويستفيد بعمق من رسائلها.\n\nمن يدرك أن الوحي يستمع إليه حقًا؛ سيبث إليه حزنه، ويشاركه فرحه، ويزيل به ضيقه، ويؤدي شكره به، ويطلب حاجته من خلاله، ويدفع به بلاءه، ويستجلب به رحمة الله عليه. من يدرك هذا، عندما يتلو ذلك الكلام الأزلي، سيشعر بأنه في حضرة الله (عز وجل)، وسيعلم أن كلماته ستُجاب، وسيبدأ حقًا في مناجاة الله والتحدث إليه." 
            }
        ] 
    },
    sunnet: { 
        title: "Sünnet Bilinci", 
        subtitle: "Nebevi Rehberlik", 
        symbol: '☀', 
        chapters: [
            { 
                id: 'sn1', 
                title: '1. Bölüm: Yaşayan Kur\'an', 
                tr: "Sünnet bilinci, Hz. Aişe annemizin ifadesiyle 'Yaşayan Kur'an' olan Efendimizin (sav) ahlakını kuşanmaktır...", 
                ing: "Sunnah consciousness is embodying the profound character of our Master (pbuh), who was, in the words of our mother Aisha, the 'Walking Quran'...", 
                alm: "Das Sunnah-Bewusstsein ist die Verkörperung des tiefgründigen Charakters unseres Meisters (sav), der, in den Worten unserer Mutter Aisha, der 'wandelnde Koran' war...", 
                arp: "وعي السنة هو التخلق بالأخلاق العظيمة لسيدنا (صلى الله عليه وسلم)، الذي كان، بتعبير أمنا عائشة، 'قرآنًا يمشي'..." 
            }
        ] 
    },
    siyer: {
        title: "Siyer Bilinci", 
        subtitle: "Hz. Muhammed'in (sav) İzinde", 
        symbol: '☾',
        chapters: [
            {
                id: 's1', 
                title: '1. Bölüm: Mekke Dönemi ve Darül Erkam',
                tr: "Mekke dönemi, sadece tarihte yaşanmış bir zaman dilimi değil, her Müslümanın kendi iç dünyasında inşa etmesi gereken temel bir 'tevhid' sürecidir. O dar ve çileli sokaklarda kurulan Darül Erkam, bugünün modern dünyasında her eve, her kalbe taşınması gereken nebevi bir mekteptir.",
                ing: "The Meccan epoch is not a mere historical parenthesis; it is the fundamental process of 'Tawhid'...",
                alm: "Die mekkanische Epoche ist keine bloße historische Klammer...",
                arp: "إن العهد المكي ليس مجرد حقبة تاريخية مضت؛ بل هو عملية 'التوحيد' الأساسية التي يجب على كل مؤمن أن يحييها في محراب قلبه."
            }
        ]
    },
    sahabe: { 
        title: "Sahâbe Bilinci", 
        subtitle: "Yıldız Nesil", 
        symbol: '★', 
        chapters: [
            { 
                id: 'sh1', 
                title: '1. Bölüm: Gökteki Yıldızlar', 
                tr: "Sahâbe bilinci, gökteki yıldızlar gibi yolumuzu aydınlatan asil neslin izinden gitmektir. Siyeri anlamak için önce o kutlu elçinin etrafında pervaneye dönen bu yıldız nesli iyi kavramak gerekir. Onlar, iman davası uğruna mallarını, canlarını ve sevdiklerini feda etmekten bir an bile geri durmadılar.\n\nBugün bizim için en büyük rehberlik, onların o muazzam teslimiyetini ve ihlasını kendi çağımıza taşıyabilmektir. Sahâbe olmak, Asr-ı Saadet'te yaşamak değil, Asr-ı Saadet'in ruhunu kendi evimizde, kendi sokağımızda yaşatabilmektir.", 
                ing: "Sahaba consciousness is traversing the precise footsteps of that noble generation, who illuminate our treacherous paths much like the guiding stars in the darkest night...", 
                alm: "Das Sahaba-Bewusstsein bedeutet, genau in die Fußstapfen jener edlen Generation zu treten...", 
                arp: "إن وعي الصحابة هو اقتفاء أثر ذلك الجيل النبيل الذي يضيء دروبنا المظلمة كنجوم السماء الهادية..." 
            }
        ] 
    }
};

// SÖZLÜK (ALTIN HARFLER VE BİLGİ KARTLARI İÇİN)
const ENCYCLOPEDIA = {
    'Bedir': { title: 'Bedir Gazvesi', arabic: 'غزوة بدر', desc: 'Hakkı batıldan ayıran "Yevmü\'l-Furkan" (Furkan Günü) olarak anılan ilk büyük savaştır.' },
    'Uhud': { title: 'Uhud Gazvesi', arabic: 'غزوة أحد', desc: 'İtaatin ve sabrın önemini öğreten eşsiz bir mekteptir.' },
    'Sahabe': { title: 'Sahâbe-i Kirâm', arabic: 'الصحابة', desc: 'Hz. Peygamber\'i (s.a.v) iman etmiş olarak gören ve bu iman üzere vefat eden nesil.' },
    'Darül Erkam': { title: 'Dârül Erkam', arabic: 'دار الأرقم', desc: 'Mekke döneminde ilk Müslümanların yetiştiği nebevi mektep.' },
    'Furkan': { title: 'Furkan', arabic: 'الفرقان', desc: 'Hak ile batılı, doğru ile yanlışı birbirinden ayıran, ilahi ölçü.' },
    'Vahiy': { title: 'Vahiy', arabic: 'وحي', desc: 'Allah\'ın (cc) emir ve yasaklarını peygamberlerine bildirmesi.' }
};

// SİYER ASİSTANI (TEFEKKÜR METİNLERİ)
const ASSISTANT_DB = {
    'ihlas': "Kıymetli kardeşlerim, ihlas demek; ameli işlerken sadece ve sadece Allah'ın rızasını gözetmek demektir. Sahabenin o amansız çöllerde destan yazmasının tek sırrı yüreklerindeki bu muazzam ihlastı.",
    'tevekkül': "Kardeşlerim, tevekkül; deveyi sağlam kazığa bağladıktan sonra Allah'a tam teslim olmaktır.",
    'mus\'ab': "Kıymetli kardeşlerim, Mus'ab demek, dünyayı elinin tersiyle itip Medine'yi Kur'an'la fethedebilmek demektir.",
    'uhud': "Uhud... Bize itaatin ve sabrın bedelini öğreten o kutlu dağ. Bugün bizim Okçular Tepemiz neresidir, bunu tefekkür etmeliyiz.",
    'darül erkam': "Darül Erkam, o daracık sokaklarda kurulan dünyaya meydan okuyan nebevi mekteptir.",
    'bedir': "Bedir, sayılara takılmadan, mutlak ihlasla Allah'a yöneldiğinde meleklerin yardıma ineceği o muazzam Furkan günüdür.",
    'sahabe': "Kıymetli kardeşlerim, sahabe demek gökteki yıldızlar demektir. Onlar mallarını, canlarını feda ettiler. Bizim de onlardan alacağımız en büyük ders, bu sarsılmaz teslimiyet olmalıdır."
};

// HTML ARayüzünün (React) verilere kusursuz ulaşabilmesi için:
window.QUOTES = QUOTES;
window.KULLIYAT_VERISI = KULLIYAT_VERISI;
window.ENCYCLOPEDIA = ENCYCLOPEDIA;
window.ASSISTANT_DB = ASSISTANT_DB;
