// ==========================================
// SUFFA KÜLLİYATI - VERİ DEPOSU (veri.js)
// Sadece 1. Ders ile Test Versiyonu
// ==========================================

const QUOTES = [
    {
        tr: "İhlas, aradan dünyayı çıkarıp sadece O'nu (cc) görmektir...",
        ing: "Sincerity is removing the world from between and seeing only Him (cc)...",
        alm: "Aufrichtigkeit bedeutet, die Welt dazwischen zu entfernen und nur Ihn (cc) zu sehen...",
        arp: "الإخلاص هو إزالة الدنيا من البين ورؤيته سبحانه وتعالى فقط..."
    }
];

const KULLIYAT_VERISI = {
    kuran: { 
        title: "Kur'ân Bilinci", 
        subtitle: "Hayat Kitabımız", 
        symbol: '✧', 
        chapters: [
            { 
                id: 'k1', 
                title: '1. Ders: Kur\'ân, Allah\'ın (cc) Kelâmıdır', 
                tr: "İlâhî vahiy, yüce otoriteden bize süzülüp gelen kelâm-ı ezelîdir. Kur'ân'ın, Allah'ın (cc) kelâmı olduğu gerçeği Kur'ân'a muhatap olan zihinlerden hiçbir zaman çıkmamalıdır. Muhatap, karşısına oturduğu kitabın sıradan bir kitap olmadığını bilmeli ve o metnin sahibinin yüceliğinin bilincinde olmalıdır.\n\nKur'ân sıradan bir roman değil, bir hikâye veya tarih kitabı değil, bir bilim veya coğrafya kitabı da değildir. Bu yüce kitap, Allah'ın (cc) kelâmıdır. Bir hikmet ve maksat için yeryüzüne indirilmiştir. Öyleyse Kur'ân-ı Kerîm, her daim Allah'ın (cc) kelâmı olduğu bilinciyle okunmalı, saygıda kusur edilmemelidir. Ama bu saygı vahyi hayatın dışında bırakarak, saygı göstereceğiz diye ona el sürmeyecek bir hâle dönüştürmemelidir. Ona yapılacak saygı yine onun kendisinden öğrenilerek yapılmalıdır.\n\nKelâmın Allah'a ait olduğu bilinci, muhataba çok önemli bir derinlik, teslimiyet ve itminan kazandırır. Çünkü Kelâmullah kalplerin ilacı, zihinlerin dermanı, dillerin ise fermanıdır.", 
                ing: "Divine Wahy is the Eternal Kalam filtering down to us from the Supreme Authority. The reality that the Quran is the Kalam of Allah (cc) must never depart from the minds of those who engage with it. The addressee must realize that the book before them is not an ordinary book, and they must be profoundly conscious of the majesty of its Owner.\n\nThe Quran is not an ordinary novel, nor a storybook, nor a history book; neither is it a book of science or geography. This exalted book is the Kalam of Allah (cc). It was revealed to the earth for a profound wisdom and purpose. Therefore, the Noble Quran must always be read with the consciousness that it is the Word of Allah (cc), and there must be no shortcoming in reverence towards it. However, this reverence should not turn into isolating the Wahy from life, leaving it untouched under the guise of showing respect. The true reverence to be shown to it must be learned from the Quran itself.", 
                alm: "Die göttliche Wahy (Offenbarung) ist der ewige Kalam (das Wort), der von der Höchsten Autorität zu uns herabfließt. Die Realität, dass der Koran der Kalam Allahs (cc) ist, darf niemals aus den Köpfen derer verschwinden, die sich ihm zuwenden. Der Adressat muss erkennen, dass das Buch, das vor ihm liegt, kein gewöhnliches Buch ist, und er muss sich der Majestät seines Besitzers zutiefst bewusst sein.\n\nDer Koran ist kein gewöhnlicher Roman, kein Geschichten- oder Geschichtsbuch; er ist auch kein Buch über Wissenschaft oder Geografie. Dieses erhabene Buch ist der Kalam Allahs (cc). Er wurde für eine tiefe Weisheit und einen bestimmten Zweck auf die Erde herabgesandt. Daher muss der Edle Koran immer mit dem Bewusstsein gelesen werden, dass er das Wort Allahs (cc) ist, und es darf kein Mangel an Ehrfurcht ihm gegenüber bestehen.", 
                arp: "إن الوحي الإلهي هو الكلام الأزلي الذي يتنزل إلينا من السلطة العليا. إن حقيقة كون القرآن كلام الله (عز وجل) يجب ألا تغيب أبدًا عن أذهان المخاطبين به. يجب على المخاطب أن يدرك أن الكتاب الذي يجلس أمامه ليس كتابًا عاديًا، وعليه أن يكون واعيًا بعظمة صاحبه.\n\nالقرآن ليس رواية عادية، ولا كتاب قصص أو تاريخ، ولا هو كتاب علوم أو جغرافيا. هذا الكتاب الجليل هو كلام الله (عز وجل). لقد أُنزل إلى الأرض لحكمة وغاية عظيمة. لذلك، يجب قراءة القرآن الكريم دائمًا بوعي تام بأنه كلام الله، ولا ينبغي التقصير في احترامه وتوقيره. ولكن، لا ينبغي لهذا الاحترام أن يتحول إلى عزل الوحي عن الحياة، وتركه مهجورًا بحجة التوقير." 
            }
        ] 
    },
    sunnet: { title: "Sünnet Bilinci", subtitle: "Nebevi Rehberlik", symbol: '☀', chapters: [] },
    siyer: { title: "Siyer Bilinci", subtitle: "Hz. Muhammed'in (sav) İzinde", symbol: '☾', chapters: [] },
    sahabe: { title: "Sahâbe Bilinci", subtitle: "Yıldız Nesil", symbol: '★', chapters: [] }
};

const ENCYCLOPEDIA = {
    'Bedir': 'Hakkı batıldan ayıran "Yevmü\'l-Furkan" (Furkan Günü) olarak anılan ilk büyük savaştır.',
    'Uhud': 'Müslümanların Mekkeli müşriklerle yaptığı ikinci büyük savaştır. İtaat sınavının verildiği yerdir.',
    'Suffa': 'Mescid-i Nebevi\'nin bitişiğinde, ilim tahsil eden yoksul sahabelerin kaldığı gölgelik.'
};

const ASSISTANT_DB = {
    'ihlas': "Kıymetli kardeşlerim, ihlas demek; ameli işlerken sadece ve sadece Allah'ın rızasını gözetmek demektir."
};

// BAĞLANTI KODLARI (Sitenin çalışması için hayati önem taşır)
window.QUOTES = QUOTES;
window.KULLIYAT_VERISI = KULLIYAT_VERISI;
window.ENCYCLOPEDIA = ENCYCLOPEDIA;
window.ASSISTANT_DB = ASSISTANT_DB;
