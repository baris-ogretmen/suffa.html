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
                title_tr: "Önsöz: Genişletilmiş Yeni Baskı İçin",
                title_ing: "Foreword: For the Expanded New Edition",
                title_alm: "Vorwort: Für die erweiterte Neuauflage",
                title_arp: "مقدمة: للطبعة الجديدة الموسعة",
                tr: "Rabb'imize sonsuz hamdler olsun Kur'ân Bilinci Dersleri kitabımızın yeni ve genişletilmiş baskısı ile yeniden huzurlarınızdayız. 2015 yılında ilk olarak sizlerle buluşan bu çalışmamız, sizlerden çok yoğun bir şekilde karşılık gördü. Ümit ediyoruz ki bu yeni hâli de hepimizin Kur'ân bilincinin tesisine ve muhafazasına biraz olsun katkı sağlayacaktır.\n\nKur'ân öyle muhteşem bir kitaptır ki onun hakkında ne yazarsanız yazın, yine eksik kalacaktır. Tek temennimiz, aziz kitabımızın değer ve kıymetini fark etmeye biraz olsun vesile olmaktır. Çaba ve gayret bizden, netice ve mükafat Rabb'imizdendir.",
                ing: "Infinite Hamd be to our Rabb, we are once again in your presence with the new and expanded edition of our Quran Consciousness Lessons book. This work, which first met you in 2015, received an intense response. We hope that this new version will contribute to the establishment and preservation of our Quran consciousness.\n\nThe Quran is such a magnificent book that no matter what you write about it, it will still be incomplete. Our only wish is to be a means to realize the value and worth of our beloved book. The effort and struggle are from us, the result and reward are from our Rabb.",
                alm: "Unendlicher Hamd gebührt unserem Rabb; wir sind mit der neuen und erweiterten Ausgabe unseres Buches 'Koranbewusstsein-Lektionen' wieder in Ihrer Mitte. Diese Arbeit, die Ihnen 2015 zum ersten Mal begegnete, stieß auf eine intensive Resonanz. Wir hoffen, dass diese neue Version zur Etablierung und Bewahrung unseres Koranbewusstseins beitragen wird.\n\nDer Koran ist ein so großartiges Buch, dass es immer unvollständig bleiben wird, egal was man darüber schreibt. Unser einziger Wunsch ist es, ein Mittel zu sein, um den Wert und die Kostbarkeit unseres geliebten Buches zu erkennen. Die Anstrengung und der Kampf kommen von uns, das Ergebnis und die Belohnung kommen von unserem Rabb.",
                arp: "الحمد لله رب العالمين حمداً لا يتناهى، نلتقي بكم مجدداً مع الطبعة الجديدة والموسعة من كتاب دروس وعي القرآن. هذا العمل، الذي التقى بكم لأول مرة في عام 2015، حظي باستجابة واسعة جداً. نأمل أن تساهم هذه النسخة الجديدة في ترسيخ وحفظ وعينا بالقرآن.\n\nالقرآن كتاب عظيم لدرجة أنه مهما كتبت عنه، سيظل ناقصاً. أملنا الوحيد هو أن نكون وسيلة لإدراك قدر وقيمة كتابنا العزيز. الجهد والسعي منا، والنتيجة والمكافأة من ربنا."
            },
            { 
                id: 'k1', 
                title_tr: "1. Ders: Kur'ân, Allah'ın (cc) Kelâmıdır", 
                title_ing: "Lesson 1: The Quran is the Word of Allah",
                title_alm: "Lektion 1: Der Koran ist das Wort Allahs",
                title_arp: "الدرس ١: القرآن كلام الله",
                tr: "İlâhî vahiy, yüce otoriteden bize süzülüp gelen kelâm-ı ezelîdir. Kur'ân'ın, Allah'ın (cc) kelâmı olduğu gerçeği Kur'ân'a muhatap olan zihinlerden hiçbir zaman çıkmamalıdır. Muhatap, karşısına oturduğu kitabın sıradan bir kitap olmadığını bilmeli ve o metnin sahibinin yüceliğinin bilincinde olmalıdır.\n\nKur'ân sıradan bir roman değil, bir hikâye veya tarih kitabı değil, bir bilim veya coğrafya kitabı da değildir. Bu yüce kitap, Allah'ın (cc) kelâmıdır. Bir hikmet ve maksat için yeryüzüne indirilmiştir. Öyleyse Kur'ân-ı Kerîm, her daim Allah'ın (cc) kelâmı olduğu bilinciyle okunmalı, saygıda kusur edilmemelidir.\n\nKelâmın Allah'a ait olduğu bilinci, muhataba çok önemli bir derinlik, teslimiyet ve itminan kazandırır. Çünkü Kelâmullah kalplerin ilacı, zihinlerin dermanı, dillerin ise fermanıdır.",
                ing: "Divine Wahy is the Eternal Kalam filtering down to us from the Supreme Authority. The reality that the Quran is the Kalam of Allah (cc) must never depart from the minds of those who engage with it. The addressee must realize that the book before them is not an ordinary book, and they must be profoundly conscious of the majesty of its Owner.\n\nThe Quran is not an ordinary novel, nor a storybook, nor a history book; neither is it a book of science or geography. This exalted book is the Kalam of Allah (cc). It was revealed for a profound wisdom and purpose. Therefore, the Noble Quran must always be read with the consciousness that it is the Word of Allah (cc), and there must be no shortcoming in reverence towards it.\n\nThe consciousness that this Kalam belongs to Allah grants the addressee a profound depth, absolute submission, and Itminan (tranquility). For Kalamullah is the cure for hearts, the remedy for minds, and the divine edict for tongues.",
                alm: "Die göttliche Wahy ist der ewige Kalam, der von der Höchsten Autorität zu uns herabfließt. Die Realität, dass der Koran der Kalam Allahs (cc) ist, darf niemals aus den Köpfen derer verschwinden, die sich ihm zuwenden. Der Adressat muss erkennen, dass das Buch, das vor ihm liegt, kein gewöhnliches Buch ist, und er muss sich der Majestät seines Besitzers zutiefst bewusst sein.\n\nDer Koran ist kein gewöhnlicher Roman, kein Geschichten- oder Geschichtsbuch; er ist auch kein Buch über Wissenschaft oder Geografie. Dieses erhabene Buch ist der Kalam Allahs (cc). Er wurde für eine tiefe Weisheit und einen bestimmten Zweck auf die Erde herabgesandt. Daher muss der Edle Koran immer mit dem Bewusstsein gelesen werden, dass er das Wort Allahs (cc) ist, und es darf kein Mangel an Ehrfurcht ihm gegenüber bestehen.\n\nDas Bewusstsein, dass dieser Kalam Allah gehört, verleiht dem Adressaten eine enorme Tiefe, absolute Hingabe (Taslim) und Itminan (innere Ruhe). Denn Kalamullah ist die Heilung für die Herzen, das Heilmittel für den Verstand und das göttliche Edikt für die Zungen.",
                arp: "إن الوحي الإلهي هو الكلام الأزلي الذي يتنزل إلينا من السلطة العليا. إن حقيقة كون القرآن كلام الله (عز وجل) يجب ألا تغيب أبدًا عن أذهان المخاطبين به. يجب على المخاطب أن يدرك أن الكتاب الذي يجلس أمامه ليس كتابًا عاديًا، وعليه أن يكون واعيًا بعظمة صاحبه.\n\nالقرآن ليس رواية عادية، ولا كتاب قصص أو تاريخ، ولا هو كتاب علوم أو جغرافيا. هذا الكتاب الجليل هو كلام الله (عز وجل). لقد أُنزل لحكمة وغاية عظيمة. لذلك، يجب قراءة القرآن الكريم دائمًا بوعي تام بأنه كلام الله، ولا ينبغي التقصير في احترامه وتوقيره.\n\nإن الوعي بأن هذا الكلام لله يمنح المخاطب عمقًا كبيرًا، وتسليمًا مطلقًا، واطمئنانًا. لأن كلام الله هو دواء القلوب، وبلسم العقول، وفرمان الألسنة."
            },
            {
                id: 'k2',
                title_tr: "2. Ders: Kur'ân, Allah'ın (cc) İnsan ile Diyaloğudur",
                title_ing: "Lesson 2: The Quran is Allah's Dialogue with Humanity",
                title_alm: "Lektion 2: Der Koran ist Allahs Dialog mit dem Menschen",
                title_arp: "الدرس ٢: القرآن حوار الله مع الإنسان",
                tr: "Efendimiz (sas) der ki: 'Sizden her kim Rabb'i ile konuşmak/dertleşmek isterse hemen Kur'ân okusun.' Kur'ân, Allah'ın insanla ve insanın Allah'la kurduğu diyalogları dile getiren bir kitaptır. Vahyin karşısına oturan muhatap, karşısında eli dili bağlı bir metin değil, onunla konuşan bir metin olduğunu öğrendiği zaman, o okumadan hem büyük bir zevk almaya hem de mesajlarından istifade etmeye başlayacaktır.\n\nVahyin kendisini dinlediğinin farkına varan; hüznünü ona açacak, sevincini onunla paylaşacak, sıkıntısını onunla giderecek, şükrünü onunla yerine getirecek, hacetini onunla isteyecek, belalarını onunla defedecek ve rahmeti onunla üzerine celbedecektir. Bunun farkına varan, o kelâm-ı ezelîyi okuyunca Allah'ın (cc) huzurunda olduğunu fark edecek, söylediklerine karşılık geleceğini bilecek ve Allah (cc) ile konuşmaya, dertleşmeye başlayacaktır.",
                ing: "Our Master (pbuh) says: 'Whoever among you wishes to converse and confide in his Rabb, let him read the Quran.' The Quran is a book that articulates the dialogues established between Allah and humanity. When the addressee sitting before the Wahy realizes that they are facing a living text that speaks to them, they will begin to derive immense spiritual delight and benefit from its messages.\n\nThe one who becomes aware that the Wahy is actually listening to them will pour out their sorrow to it, share their joy with it, cure their distress through it, fulfill their Shukr (gratitude) with it, ask for their needs through it, repel their calamities with it, and attract divine Rahmah (mercy) upon themselves through it. Realizing this, when they recite that Eternal Kalam, they will perceive that they are in the majestic presence of Allah (cc), knowing that their words will be answered.",
                alm: "Unser Meister (saw) sagt: 'Wer von euch mit seinem Rabb sprechen und sich Ihm anzuvertrauen möchte, der soll den Koran lesen.' Der Koran ist ein Buch, das die Dialoge zwischen Allah und dem Menschen zum Ausdruck bringt. Wenn der Adressat erkennt, dass er einem lebendigen Text gegenübersteht, der zu ihm spricht, wird er beginnen, immense spirituelle Freude daraus zu ziehen und tief von seinen Botschaften zu profitieren.\n\nDerjenige, der sich bewusst wird, dass die Wahy ihm tatsächlich zuhört, wird ihr seinen Kummer ausschütten, seine Freude mit ihr teilen, seine Not durch sie heilen, seinen Shukr (Dankbarkeit) mit ihr erfüllen, um seine Bedürfnisse durch sie bitten, seine Katastrophen mit ihr abwehren und durch sie die göttliche Rahmah (Barmherzigkeit) auf sich ziehen. Wenn er dies erkennt und jenen Ewigen Kalam rezitiert, wird er spüren, dass er sich in der majestätischen Gegenwart Allahs (cc) befindet.",
                arp: "يقول سيدنا (صلى الله عليه وسلم): 'من أراد منكم أن يناجي ربه فليقرأ القرآن'. القرآن كتاب يعبر عن الحوارات التي يقيمها الله مع الإنسان. عندما يدرك المخاطب الجالس أمام الوحي أنه أمام نص ناطق يتحدث إليه، فإنه سيبدأ في تذوق متعة روحية عظيمة والاستفادة من رسائله.\n\nمن يدرك أن الوحي يستمع إليه حقًا؛ سيبث إليه حزنه، ويشاركه فرحه، ويزيل به ضيقه، ويؤدي شكره به، ويطلب حاجته من خلاله، ويدفع به بلاءه، ويستجلب به رحمة الله عليه. من يدرك هذا، عندما يتلو ذلك الكلام الأزلي، سيشعر بأنه في حضرة الله (عز وجل)، وسيعلم أن كلماته ستُجاب، وسيبدأ حقًا في مناجاة الله."
            },
            {
                id: 'k3',
                title_tr: "3. Ders: Kur'ân, İnsanlığa Takdim Edilen İlâhî Bir Sofradır",
                title_ing: "Lesson 3: The Quran is a Divine Feast Presented to Humanity",
                title_alm: "Lektion 3: Der Koran ist ein göttliches Festmahl für die Menschheit",
                title_arp: "الدرس ٣: القرآن مائدة إلهية قُدمت للبشرية",
                tr: "Allah (cc) insanlığa bir kurtuluş reçetesi olarak gönderdiği vahyini 'nüzûl' kelimesiyle ifade ederek, vahyin insanlığa takdim edilmiş bir sofra olduğu bilincini yerleştirmek istemektedir. Bu sofra öyle bir sofradır ki doyumu olmayan, yedikçe insanı rahatsız etmeyen, tadı ve güzelliği geçici değil sürekli olan, sahibine şifa ve rahmet olan bir sofradır. Tam da bu konuda Efendimiz'in (sas) bir hadisini hatırlayalım: \"Şüphesiz bu Kur'ân Allah'ın ziyafet yemeğidir. O ziyafet yemeğini yiyen kimse açlık çekmez ve her türlü endişeden emin olur.\"\n\nBu ilâhî sofraya karşı insanlığın takındığı tavırları üç başlık altında ele alabiliriz: Sofraya sırt dönenler, sofraya oturduğunu zannedip yemeyi bilmeyenler ve sofraya doğru oturup yemesini bilenler. Bizim gayemiz bu sofranın edebini bilip ondan kana kana nasiplenmektir.",
                ing: "Allah (cc), by expressing the Wahy He sent as a prescription for salvation with the word 'Nuzul', desires to establish the consciousness that the Wahy is a divine table spread out for mankind. This is such a feast that it never satiates in a burdensome way; its taste and beauty are eternal, serving as Shifa (healing) and Rahmah (mercy) for the one who partakes. Let us remember a Hadith of our Master (pbuh): 'Verily, this Quran is the banquet of Allah. Whoever partakes in this banquet shall not suffer hunger and shall be safe from every anxiety.'\n\nWe can examine the attitudes humanity has adopted towards this divine feast under three headings: Those who turn their backs on the feast, those who assume they are sitting at it but do not know how to partake, and those who sit correctly and know its Adab. Our goal must be to learn the etiquette of this feast and benefit from it endlessly.",
                alm: "Allah (cc) möchte durch die Verwendung des Wortes 'Nuzul' für die Offenbarung das Bewusstsein verankern, dass die Wahy ein für die Menschheit gedeckter göttlicher Tisch ist. Dies ist ein solches Festmahl, das niemals auf belastende Weise sättigt; sein Geschmack und seine Schönheit sind ewig und dienen als Shifa (Heilung) und Rahmah (Barmherzigkeit) für denjenigen, der daran teilnimmt. Erinnern wir uns an einen Hadith unseres Meisters (saw): 'Wahrlich, dieser Koran ist das Festmahl Allahs. Wer an diesem Festmahl teilnimmt, wird keinen Hunger leiden und vor jeder Angst sicher sein.'\n\nWir können die Haltung der Menschheit zu diesem Festmahl in drei Gruppen einteilen: Diejenigen, die dem Tisch den Rücken kehren, diejenigen, die glauben, daran zu sitzen, aber nicht wissen, wie man isst, und diejenigen, die richtig sitzen und sein Adab kennen. Unser Ziel muss es sein, die Etikette dieses Festmahls zu erlernen und endlos davon zu profitieren.",
                arp: "إن الله (عز وجل)، من خلال التعبير عن الوحي بكلمة 'النُّزُل'، يريد أن يرسخ الوعي بأن الوحي هو مائدة إلهية قُدمت للبشرية. هذه المائدة لا تُشبع بطريقة مزعجة، وطعمها وجمالها ليسا مؤقتين بل دائمين، وهي شفاء ورحمة لمن يأكل منها. ولنتذكر حديثاً لسيدنا (صلى الله عليه وسلم): 'إن هذا القرآن مأدبة الله، فمن أكل من هذه المأدبة لم يجع وأمن من كل خوف'.\n\nيمكننا دراسة المواقف التي تتخذها البشرية تجاه هذه المائدة تحت ثلاثة عناوين: الذين يديرون ظهورهم للمائدة، والذين يظنون أنهم جالسون إليها ولكنهم لا يعرفون كيف يأكلون، والذين يجلسون بشكل صحيح ويعرفون أدبها. غايتنا يجب أن تكون تعلم أدب هذه المائدة والاستفادة منها بلا انقطاع."
            },
            {
                id: 'k4',
                title_tr: "4. Ders: Kur'ân, Zamanlar ve Mekânlar Üstü Bir Kitaptır",
                title_ing: "Lesson 4: The Quran is a Book Beyond Time and Space",
                title_alm: "Lektion 4: Der Koran ist ein Buch jenseits von Zeit und Raum",
                title_arp: "الدرس ٤: القرآن كتاب لا تحده زمان ولا مكان",
                tr: "Kur'ân-ı Kerîm, belli bir zaman diliminde inmiş olsa da, zamanlar üstü mesajıyla evrenselliğini hep muhafaza etmiştir. 'Sebebin hususiliği, hükmün umumiliğine mâni değildir.' kuralınca, inen âyet özel bir sebebe bağlı olsa da içindeki mesaj genel bir hüküm taşır.\n\nZamana ve Mekâna Hapsolmayan Bir Kitap: Kur'ân-ı Kerîm, içerisinde barındırdığı evrensel mesajlarıyla hiçbir zaman ne bir mekâna, ne özel muhataplara ne de belli bir zamana sıkışmıştır. Bu kitap 14 asır evvel Mekke'deki Mus'ab'a hitap ettiği gibi, bugün İstanbul'daki Ahmet'e de hitap etmektedir. O, kâinatın sonuna kadar rehberliğini sürdürecek olan ilâhî bir pusuladır.",
                ing: "Although the Noble Quran was revealed within a specific timeframe, it has always preserved its universality with its timeless message. According to the rule 'The specificity of the cause does not prevent the universality of the ruling,' even if a verse was revealed for a specific reason, its message carries a general ruling.\n\nA Book Not Confined by Time or Space: With the universal messages it contains, the Noble Quran has never been confined to a specific place, specific addressees, or a specific time. Just as it addressed Mus'ab in Mecca 14 centuries ago, it addresses Ahmet in Istanbul today. It is a divine compass that will continue its guidance until the end of the universe.",
                alm: "Obwohl der Edle Koran in einem bestimmten Zeitrahmen offenbart wurde, hat er seine Universalität durch seine zeitlose Botschaft stets bewahrt. Gemäß der Regel 'Die Spezifität der Ursache hindert nicht die Universalität des Urteils' trägt die Botschaft eines Verses ein allgemeines Urteil, auch wenn er aus einem bestimmten Grund herabkam.\n\nEin Buch, das nicht an Zeit oder Raum gebunden ist: Mit den universellen Botschaften, die er enthält, war der Edle Koran nie an einen bestimmten Ort, bestimmte Adressaten oder eine bestimmte Zeit gebunden. So wie er vor 14 Jahrhunderten Mus'ab in Mekka ansprach, spricht er heute Ahmet in Istanbul an. Er ist ein göttlicher Kompass, der seine Führung bis zum Ende des Universums fortsetzen wird.",
                arp: "على الرغم من نزول القرآن الكريم في فترة زمنية معينة، إلا أنه حافظ دائماً على عالميته برسالته التي تتجاوز الأزمان. وبحسب قاعدة 'العبرة بعموم اللفظ لا بخصوص السبب'، فإن الرسالة تحمل حكماً عاماً حتى لو نزلت لسبب خاص.\n\nكتاب لا تحده زمان ولا مكان: بفضل الرسائل العالمية التي يتضمنها، لم ينحصر القرآن الكريم يوماً في مكان معين، أو مخاطبين محددين، أو زمان محدد. هذا الكتاب يخاطب 'أحمد' في إسطنبول اليوم كما خاطب 'مصعب بن عمير' في مكة قبل 14 قرناً. إنه بوصلة إلهية ستستمر في إرشادها حتى نهاية الكون."
            }
        ] 
    },
    sunnet: { title: "Sünnet Bilinci", subtitle: "Nebevi Rehberlik", symbol: '☀', chapters: [] },
    siyer: { title: "Siyer Bilinci", subtitle: "Hz. Muhammed'in (sav) İzinde", symbol: '☾', chapters: [] },
    sahabe: { title: "Sahâbe Bilinci", subtitle: "Yıldız Nesil", symbol: '★', chapters: [] }
};

window.ENCYCLOPEDIA = {
    'Bedir': 'Hakkı batıldan ayıran "Yevmü\'l-Furkan" (Furkan Günü) olarak anılan ilk büyük savaştır. [İbn Kesîr, Tefsir, 3/424]',
    'Uhud': 'Müslümanların Mekkeli müşriklerle yaptığı ikinci büyük savaştır. İtaat sınavının verildiği yerdir.',
    'Suffa': 'Mescid-i Nebevi\'nin bitişiğinde, ilim tahsil eden yoksul sahabelerin kaldığı gölgelik.',
    'Wahy': 'Allah\'ın emir ve yasaklarını peygamberlerine bildirmesidir. İlahi iletişim aracıdır.',
    'Kalamullah': 'Allah\'ın kelâmı, sözü. Kur\'ân-ı Kerîm\'in en temel isimlerinden biridir.',
    'Sünnetullah': 'Allah\'ın kâinata ve toplumlara koyduğu değişmez kanunlar, yasalar bütünü.',
    'Itminan': 'Kalbin şüphelerden arınarak tam bir huzur ve sükûna ermesi hâli.',
    'Ikhlas': 'Ameli işlerken dünyayı ve gösterişi aradan çıkarıp sadece Allah rızasını gözetmek.'
};

window.ASSISTANT_DB = {
    'ihlas': "Kıymetli kardeşlerim, ihlas demek; ameli işlerken aradan dünyayı ve insanları çıkarıp sadece Allah'ın rızasını gözetmek demektir.",
    'sabr': "Sabır, musibetin ilk anındaki duruştur. Vahyin gölgesinde direnmek ve teslimiyeti kuşanmaktır.",
    'kuran': "Kur'ân, kalplerin ilacı, zihinlerin dermanı, dillerin ise fermanıdır. O, Allah ile dertleşmenin en yüce makamıdır."
};
