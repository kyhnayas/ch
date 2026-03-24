import simg from '/public/images/practice/img-1.jpg'
import simg2 from '/public/images/practice/img-2.jpg'
import simg3 from '/public/images/practice/img-3.jpg'
import simg4 from '/public/images/practice/img-4.jpg'
import simg5 from '/public/images/practice/img-5.jpg'
import simg6 from '/public/images/practice/img-6.jpg'

const Practices = [
    {
        Id: '1',
        sImg: simg,
        sTitle: 'Aile Hukuku',
        slug: 'Family-Law',
        description: 'Boşanma, nafaka, velayet ve mal paylaşımı gibi aile hukuku konularında yanınızdayız.',
        des2: 'Tüm yasal süreçleriniz titizlikle takip edilmektedir.',
        des3: 'Müvekkillerimizin hukuki haklarını en üst seviyede koruma odaklı çalışıyoruz.',
        icon: 'flaticon-parents',
    },
    {
        Id: '2',
        sImg: simg2,
        sTitle: 'Tazminat Hukuku',
        slug: 'Personal-Injury',
        description: 'Maddi ve manevi tazminat davalarınızda profesyonel destek sağlıyoruz.',
        des2: 'Hukuki haklarınızı güvence altına alıyoruz.',
        des3: 'Sürecin her aşamasında şeffaflıkla bilgilendirme yapıyoruz.',
        icon: 'flaticon-wounded',
    },
    {
        Id: '3',
        sImg: simg3,
        sTitle: 'Şirketler Hukuku',
        slug: 'Business-Law',
        description: 'Ticari sözleşmeler, şirket kuruluşları ve uyuşmazlıklarda hukuki danışmanlık.',
        des2: 'Ticari hayatınızın güvenliği bizim önceliğimizdir.',
        des3: 'İşçi-işveren uyuşmazlıkları ve kurumsal danışmanlık hizmeti.',
        icon: 'flaticon-employee',
    },
    {
        Id: '4',
        sImg: simg4,
        sTitle: 'Ceza Hukuku',
        slug: 'Criminal-Law',
        description: 'Soruşturma ve kovuşturma aşamalarında ceza avukatlarımızla etkin savunma.',
        des2: 'Adil yargılanma hakkınızın teminatı.',
        des3: 'Alanında uzman avukat kadromuzla yanınızdayız.',
        icon: 'flaticon-thief',
    },
    {
        Id: '5',
        sImg: simg5,
        sTitle: 'Eğitim Hukuku',
        slug: 'Education-Law',
        description: 'Eğitim alanında karşılaşılan idari ve hukuki problemlere çözüm üretiyoruz.',
        des2: 'Hukuki sürecin başından sonuna kadar destek.',
        des3: 'Kapsamlı analiz ve strateji oluşturma.',
        icon: 'flaticon-university-graduate-hat',
    },
    {
        Id: '6',
        sImg: simg6,
        sTitle: 'Gayrimenkul Hukuku',
        slug: 'Real-Estate-Law',
        description: 'Tapu iptal, tescil ve kiralama gibi gayrimenkul hukuku süreçlerinde uzman destek.',
        des2: 'Hak kayıplarını önleyici stratejiler.',
        des3: 'Tapu, sözleşme ve dava aşamalarında etkili danışmanlık.',
        icon: 'flaticon-house',
    },
]
export default Practices;