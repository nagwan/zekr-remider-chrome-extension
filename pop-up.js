const azkar = [
    "الْحَمْدُ لِلَّهِ",
    "لا إلهَ إلاّ الله",
    "رَبِّ أسْأَلُكَ خَيرَ ما في هذا اليوم وَخَيرَ مابَعْدَه",
    " حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ",
    "رَضيتُ بِالله رَبًّا، وَبِالإسْلامِ دينًا، وَبِمُحَمَّدٍ صلي الله عليه وسلم نَبِيًّا",
    "أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّةِ مِنْ شَرِّ مَا خَلَقَ",
    "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلا تَكِلْنِي إِلَى نَفْسِي طَرَفَةَ عَيْنٍ",
    "لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ",
    "أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ",
    "سُبْحـانَ اللهِ وَبِحَمْـدِهِ",
    "لا حَولَ وَلا قوّة إلاّ باللّهِ",
    " سُبْحَانَ اللهِ",
    "اللَّهُ أَكْبَرُ",
    "لَا إِلَهَ إِلَّا اللَّهُ",
]

const zekr = azkar[Math.floor(Math.random() * azkar.length)];
document.getElementById("zekr").innerHTML = zekr;
