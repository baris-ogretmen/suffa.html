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
                title: '1. Bölüm: Vahyin Gölgesinde', 
                tr: "Kur'an bilinci, satırları okumaktan öte, hayatı o ayetlerin ışığında yeniden inşa etme davasıdır...", 
                ing: "Quran consciousness is the sacred endeavor of rebuilding life itself under the divine light of its verses...", 
                alm: "Das Koranbewusstsein ist das heilige Bestreben, das Leben selbst unter dem göttlichen Licht seiner Verse neu aufzubauen...", 
                arp: "وعي القرآن هو السعي المقدس لإعادة بناء الحياة ذاتها تحت النور الإلهي لآياته..." 
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
    'Furkan': { title: 'Furkan', arabic: 'الفرقان', desc: 'Hak ile batılı, doğru ile yanlışı birbirinden ayıran, ilahi ölçü.' }
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
