// ==========================================
// SUFFA KÜLLİYATI - VERİ DEPOSU (veri.js)
// Kitap: Kur'ân Bilinci Dersleri
// Yazar: Muhammed Emin Yıldırım
// ==========================================

window.QUOTES = [
    {
        tr: "İhlas, aradan dünyayı çıkarıp sadece O'nu (cc) görmektir...",
        ing: "Ikhlas is removing the Dunya from between and seeing only Him (cc)...",
        alm: "Ikhlas bedeutet, die Dunya dazwischen zu entfernen und nur Ihn (cc) zu sehen...",
        arp: "الإخلاص هو إزالة الدنيا من البين ورؤيته سبحانه وتعالى فقط..."
    },
    {
        tr: "Beşerin derdine derman olur ancak Kur'ân; onsuz artık canavardan da beterdir insan.",
        ing: "Only the Quran can be the remedy for humanity's pain; without it, man is worse than a beast.",
        alm: "Nur der Koran kann das Heilmittel für den Schmerz der Menschheit sein; ohne ihn ist der Mensch schlimmer als ein Biest.",
        arp: "القرآن هو دواء آلام البشر؛ وبدونه يصبح الإنسان أسوأ من الوحش."
    }
];

window.KULLIYAT_VERISI = {
    kuran: { 
        title: "Kur'ân Bilinci", 
        subtitle: "Hayat Kitabımız", 
        symbol: '✧', 
        chapters: [
            {
                id: 'k0',
                title: 'Önsöz: Genişletilmiş Yeni Baskı İçin',
                tr: "Rabb'imize sonsuz hamdler olsun Kur'ân Bilinci Dersleri kitabımızın yeni ve genişletilmiş baskısı ile yeniden huzurlarınızdayız. 2015 yılında ilk olarak sizlerle buluşan bu çalışmamız, sizlerden çok yoğun bir şekilde karşılık gördü. Ümit ediyoruz ki bu yeni hâli de hepimizin Kur'ân bilincinin tesisine ve muhafazasına biraz olsun katkı sağlayacaktır.\n\nKur'ân öyle muhteşem bir kitaptır ki onun hakkında ne yazarsanız yazın, yine eksik kalacaktır. Tek temennimiz, aziz kitabımızın değer ve kıymetini fark etmeye biraz olsun vesile olmaktır. Çaba ve gayret bizden, netice ve mükafat Rabb'imizdendir.",
                ing: "Infinite praise be to our Rabb, we are here again with the new and expanded edition of our Quran Consciousness Lessons book. This work, which first met you in 2015, received an intense response. We hope that this new version will contribute a little to the establishment and preservation of our Quran consciousness.\n\nThe Quran is such a magnificent book that no matter what you write about it, it will still be incomplete. Our only wish is to be a means to realize the value and worth of our beloved book. The effort and struggle are from us, the result and reward are from our Rabb.",
                alm: "Unendliches Lob gebührt unserem Rabb, wir sind wieder hier mit der neuen und erweiterten Ausgabe unseres Buches Koran-Bewusstseins-Lektionen. Diese Arbeit, die Ihnen 2015 zum ersten Mal begegnet ist, stieß auf eine intensive Resonanz. Wir hoffen, dass diese neue Version ein wenig zur Etablierung und Bewahrung unseres Koran-Bewusstseins beitragen wird.\n\nDer Koran ist ein so großartiges Buch, dass es immer unvollständig bleiben wird, egal was man darüber schreibt. Unser einziger Wunsch ist es, ein Mittel zu sein, um den Wert und die Kostbarkeit unseres geliebten Buches zu erkennen. Die Anstrengung und der Kampf kommen von uns, das Ergebnis und die Belohnung kommen von unserem Rabb.",
                arp: "الحمد لله رب العالمين، نلتقي بكم مجدداً مع الطبعة الجديدة والموسعة من كتاب دروس وعي القرآن. هذا العمل، الذي التقى بكم لأول مرة في عام 2015، حظي باستجابة واسعة جداً. نأمل أن تساهم هذه النسخة الجديدة ولو قليلاً في ترسيخ وحفظ وعينا بالقرآن.\n\nالقرآن كتاب عظيم لدرجة أنه مهما كتبت عنه، سيظل ناقصاً. أملنا الوحيد هو أن نكون وسيلة لإدراك قدر وقيمة كتابنا العزيز. الجهد والسعي منا، والنتيجة والمكافأة من ربنا."
            },
            { 
                id: 'k1', 
                title: '1. Ders: Kur\'ân, Allah\'ın (cc) Kelâmıdır', 
                tr: "İlâhî vahiy, yüce otoriteden bize süzülüp gelen kelâm-ı ezelîdir. Kur'ân'ın, Allah'ın (cc) kelâmı olduğu gerçeği Kur'ân'a muhatap olan zihinlerden hiçbir zaman çıkmamalıdır. Muhatap, karşısına oturduğu kitabın sıradan bir kitap olmadığını bilmeli ve o metnin sahibinin yüceliğinin bilincinde olmalıdır.\n\nKur'ân sıradan bir roman değil, bir hikâye veya tarih kitabı değil, bir bilim veya coğrafya kitabı da değildir. Bu yüce kitap, Allah'ın (cc) kelâmıdır. Bir hikmet ve maksat için yeryüzüne indirilmiştir. Öyleyse Kur'ân-ı Kerîm, her daim Allah'ın (cc) kelâmı olduğu bilinciyle okunmalı, saygıda kusur edilmemelidir.",
                ing: "Divine Wahy is the Eternal Kalam filtering down to us from the Supreme Authority. The reality that the Quran is the Kalam of Allah (cc) must never depart from the minds of those who engage with it. The addressee must realize that the book before them is not an ordinary book, and they must be profoundly conscious of the majesty of its Owner.\n\nThe Quran is not an ordinary novel, nor a storybook, nor a history book; neither is it a book of science or geography. This exalted book is the Kalam of Allah (cc). It was revealed for a profound wisdom and purpose.",
                alm: "Die göttliche Wahy ist der ewige Kalam, der von der Höchsten Autorität zu uns herabfließt. Die Realität, dass der Koran der Kalam Allahs (cc) ist, darf niemals aus den Köpfen derer verschwinden, die sich ihm zuwenden. Der Adressat muss erkennen, dass das Buch, das vor ihm liegt, kein gewöhnliches Buch ist.\n\nDer Koran ist kein gewöhnlicher Roman, kein Geschichten- oder Geschichtsbuch; er ist auch kein Buch über Wissenschaft oder Geografie. Dieses erhabene Buch ist der Kalam Allahs (cc).",
                arp: "إن الوحي الإلهي هو الكلام الأزلي الذي يتنزل إلينا من السلطة العليا. إن حقيقة كون القرآن كلام الله (عز وجل) يجب ألا تغيب أبدًا عن أذهان المخاطبين به. يجب على المخاطب أن يدرك أن الكتاب الذي يجلس أمامه ليس كتابًا عاديًا، وعليه أن يكون واعيًا بعظمة صاحبه.\n\nالقرآن ليس رواية عادية، ولا كتاب قصص أو تاريخ، ولا هو كتاب علوم أو جغرافيا. هذا الكتاب الجليل هو كلام الله (عز وجل)."
            },
            {
                id: 'k2',
                title: '2. Ders: Kur\'ân, Allah\'ın (cc) İnsan ile Diyaloğudur',
                tr: "Efendimiz (sas) der ki: 'Sizden her kim Rabb'i ile konuşmak isterse hemen Kur'ân okusun.' Kur'ân, Allah'ın insanla ve insanın Allah'la kurduğu diyalogları dile getiren bir kitaptır. Vahyin karşısına oturan muhatap, karşısında eli dili bağlı bir metin değil, onunla konuşan bir metin olduğunu öğrendiği zaman, o okumadan hem büyük bir zevk almaya hem de mesajlarından istifade etmeye başlayacaktır.",
                ing: "Our Master (pbuh) says: 'Whoever among you wishes to converse with his Rabb, let him read the Quran.' The Quran is a book that articulates the dialogues established between Allah and humanity. When the addressee sitting before the Wahy realizes that they are facing a living text that speaks to them, they will begin to derive immense spiritual delight and benefit.",
                alm: "Unser Meister (saw) sagt: 'Wer von euch mit seinem Rabb sprechen möchte, der soll den Koran lesen.' Der Koran ist ein Buch, das die Dialoge zwischen Allah und dem Menschen zum Ausdruck bringt. Wenn der Adressat erkennt, dass er einem lebendigen Text gegenübersteht, der zu ihm spricht, wird er beginnen, immense spirituelle Freude daraus zu ziehen.",
                arp: "يقول سيدنا (صلى الله عليه وسلم): 'من أراد منكم أن يناجي ربه فليقرأ القرآن'. القرآن كتاب يعبر عن الحوارات التي يقيمها الله مع الإنسان. عندما يدرك المخاطب الجالس أمام الوحي أنه أمام نص ناطق يتحدث إليه، فإنه سيبدأ في تذوق متعة روحية عظيمة والاستفادة من رسائله."
            },
            {
                id: 'k3',
                title: '3. Ders: Kur\'ân, İnsanlığa Takdim Edilen İlâhî Bir Sofradır',
                tr: "Allah (cc) insanlığa bir kurtuluş reçetesi olarak gönderdiği vahyini 'nüzûl' kelimesiyle ifade ederek, vahyin insanlığa takdim edilmiş bir sofra olduğu bilincini yerleştirmek istemektedir. Bu sofra öyle bir sofradır ki doyumu olmayan, yedikçe insanı rahatsız etmeyen, tadı ve güzelliği geçici değil sürekli olan, sahibine şifa ve rahmet olan bir sofradır.",
                ing: "Allah (cc), by expressing the Wahy He sent as a prescription for salvation with the word 'Nuzul', desires to establish the consciousness that the Wahy is a divine table spread out for mankind. This is such a feast that it never satiates in a burdensome way; its taste and beauty are eternal, serving as Shifa (healing) and Rahmah (mercy) for the one who partakes.",
                alm: "Allah (cc) möchte das Bewusstsein verankern, dass die Wahy ein für die Menschheit gedeckter göttlicher Tisch ist. Dies ist ein solches Festmahl, das niemals auf belastende Weise sättigt; sein Geschmack und seine Schönheit sind ewig und dienen als Shifa (Heilung) und Rahmah (Barmherzigkeit) für denjenigen, der daran teilnimmt.",
                arp: "إن الله (عز وجل)، من خلال التعبير عن الوحي الذي أرسله كوصفة نجاة للبشرية بكلمة 'النُّزُل'، يريد أن يرسخ الوعي بأن الوحي هو مائدة إلهية قُدمت للبشرية. هذه المائدة لا تُشبع بطريقة مزعجة، وطعمها وجمالها ليسا مؤقتين بل دائمين، وهي شفاء ورحمة لمن يأكل منها."
            },
            {
                id: 'k4',
                title: '4. Ders: Kur\'ân, Zamanlar ve Mekânlar Üstü Bir Kitaptır',
                tr: "Kur'ân-ı Kerîm, belli bir zaman diliminde inmiş olsa da, zamanlar üstü mesajıyla evrenselliğini hep muhafaza etmiştir. 'Sebebin hususiliği, hükmün umumiliğine mâni değildir.' kuralınca, inen âyet özel bir sebebe bağlı olsa da içindeki mesaj genel bir hüküm taşır. Bu kitap 14 asır evvel Mekke'deki Mus'ab'a hitap ettiği gibi, bugün İstanbul'daki Ahmet'e de hitap etmektedir.",
                ing: "Although the Noble Quran was revealed within a specific timeframe, it has always preserved its universality with its timeless message. According to the rule 'The specificity of the cause does not prevent the universality of the ruling,' even if a verse was revealed for a specific reason, its message carries a general ruling. Just as it addressed Mus'ab in Mecca 14 centuries ago, it addresses Ahmet in Istanbul today.",
                alm: "Obwohl der Edle Koran in einem bestimmten Zeitrahmen offenbart wurde, hat er seine Universalität durch seine zeitlose Botschaft stets bewahrt. Gemäß der Regel 'Die Spezifität der Ursache hindert nicht die Universalität des Urteils' trägt die Botschaft eines Verses ein allgemeines Urteil. So wie er vor 14 Jahrhunderten Mus'ab in Mekka ansprach, spricht er heute Ahmet in Istanbul an.",
                arp: "على الرغم من نزول القرآن الكريم في فترة زمنية معينة، إلا أنه حافظ دائماً على عالميته برسالته التي تتجاوز الأزمان. وبحسب قاعدة 'العبرة بعموم اللفظ لا بخصوص السبب'، فإن الرسالة تحمل حكماً عاماً حتى لو نزلت لسبب خاص. هذا الكتاب يخاطب 'أحمد' في إسطنبول اليوم كما خاطب 'مصعب بن عمير' في مكة قبل 14 قرناً."
            }
        ] 
    },
    sunnet: { title: "Sünnet Bilinci", subtitle: "Nebevi Rehberlik", symbol: '☀', chapters: [] },
    siyer: { title: "Siyer Bilinci", subtitle: "Hz. Muhammed'in (sav) İzinde", symbol: '☾', chapters: [] },
    sahabe: { title: "Sahâbe Bilinci", subtitle: "Yıldız Nesil", symbol: '★', chapters: [] }
};

window.ENCYCLOPEDIA = {
    'Bedir': 'Hakkı batıldan ayıran "Yevmü\'l-Furkan" (Furkan Günü) olarak anılan ilk büyük savaştır. [İbn Kesîr, Tefsir, 3/424]',
    'Uhud': 'Müslümanların Mekkeli müşriklerle yaptığı ikinci büyük savaştır. İtaat sınavının verildiği yerdir. [Vâkidî, Megâzî, 1/199]',
    'Suffa': 'Mescid-i Nebevi\'nin bitişiğinde, ilim tahsil eden yoksul sahabelerin kaldığı gölgelik. [İbn Sa\'d, Tabakât, 1/255]',
    'Wahy': 'Allah\'ın emir ve yasaklarını peygamberlerine bildirmesidir. İlahi iletişim aracıdır.',
    'Kalamullah': 'Allah\'ın kelâmı, sözü. Kur\'ân-ı Kerîm\'in en temel isimlerinden biridir.',
    'Sünnetullah': 'Allah\'ın kâinata ve toplumlara koyduğu değişmez kanunlar, yasalar bütünü.',
    'Itminan': 'Kalbin şüphelerden arınarak tam bir huzur ve sükûna ermesi hâli.'
};

window.ASSISTANT_DB = {
    'ihlas': "Kıymetli kardeşlerim, ihlas demek; ameli işlerken aradan dünyayı ve insanları çıkarıp sadece Allah'ın rızasını gözetmek demektir.",
    'sabr': "Sabır, musibetin ilk anındaki duruştur. Vahyin gölgesinde direnmek ve teslimiyeti kuşanmaktır.",
    'kuran': "Kur'ân, kalplerin ilacı, zihinlerin dermanı, dillerin ise fermanıdır. O, Allah ile dertleşmenin en yüce makamıdır."
};
