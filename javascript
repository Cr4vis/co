const templates = [
    "Bir ay boyunca günlük gazeteleri biriktir, büyük bir leğen ve çamaşır deterjanı al, biriktirdiğin tüm gazeteleri leğende çamaşır yıkar gibi yıka.",
    "Sevdiğin bir kitaptan 10 cümlelik bir yazı seç, büyük boyutlu bir lahana al, lahanayı yere koyup üzerine çık ve dengede durarak seçtiğin metni okumaya çalış. Her dengeni kaybedip düştüğünde metne baştan başla.",
    "İçinde bulunduğun yıl boyunca kadın cinayetlerinde en çok kullanılan ilk beş sıradaki silahı öğren. Bu silahların her birini ördüğün dantellerle kapla ve duvarda sergile.",
    "Metal, kumaş, tuğla gibi endüstriyel atıkları topla, bunları yaratıcı bir biçimde bir araya getirerek antroposen çağın kalıntıları adında bir enstalasyon kur.",
    "Bulunduğun şehrin sokaklarında dolaşarak elle yazılmış duvar yazılarını fotoğrafla. Bu yazıları veri olarak kullanarak şehrinin adını taşıyan bir duvar yazısı fontu oluştur.",
    "Bir cinayet ile ilgili olay yeri fotoğraflarını bul, bu fotoğraflardan ceset, kan gibi cinayete doğrudan referans veren öğeleri kaldırarak mekanı resmet.",
    "Rutin olarak vakit geçirdiğin bir mekandaki bir günlük hareketini ve yer değişikliklerini harita üzerinde kaydet, bu hareketi bilardo masasındaki bir bilardo topuna tekrar ettiğin bir video oluştur.",
    "Bulunduğun şehirde sana en yakın lokasyonda bir doğa yürüyüşü yap, yürüyüşün esnasında o bölgeyi temsil ettiğini düşündüğün taş, toprak, bitki vb. Doğal materyalleri topla, bu malzemeleri almadan önce yerlerinde fotoğraflarını çek, topladığın malzemeleri sadece nesne görünecek şekilde ayrı ayrı kağıtlara suluboya ile resmet.",
    "Dilimize dahil olmuş Latince kökenli bir sözcük seç ve etimolojik kökenini detaylı şekilde araştır, bu sözcüğün ilk kullanıldığı yerden başlayarak günümüze kadar coğrafi yolculuğunu hangi bölgelerde, hangi dillerde ve hangi anlamlarda kullanıldığını gösteren bir harita ya da diyagram oluştur.",
    "Belirli bir kültüre ait ve sosyal sınıf göstergesi (reverans gibi) bedensel bir hareket seç, bu hareketi kendini oluşturan beş beden duruşuna böl, bu duruşları geometrik formlar biçiminde soyutla. Soyutlanmış formları kilden yeniden üret.",
    "Kendini bir beden olarak değil bir mekan olarak düşün, kişiliğini temsil ettiğini düşündüğün ya da kişisel tarihinde dönüm noktası olan nesneleri kullanarak bu mekanı bir otoportre olarak tasarla.",
    "Bir filmden bir sahne ve başka bir filmden bir diyalog seç. Bir kağıda sahneye karakalem ile resmet diğer kağıdı ise siyaha boyayıp beyaz kalemle alt yazı şeklinde diyaloğu yaz, yan yana sergile."
];

function generateArtProject() {
    const randomIndex = Math.floor(Math.random() * templates.length);
    const project = templates[randomIndex];
    document.getElementById('project').innerText = project;
}
