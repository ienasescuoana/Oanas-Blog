const utilities = [
    {
        id: 1,
        title: 'Asigurarea de calatorie: asigurarea medicala',
        description: 'Ei bine, aici e vorba despre acoperirea riscurilor la care esti tu si cei ce calatoresc cu tine predispusi in timpul calatoriei, precum asistenta medicala de urgenta. In caz ca ai nevoie de asa ceva nu trebuie decat sa contactezi reprezentantul companiei de asigurari si acesta te va directiona catre cea mai apropiata unitate medicala agreeata de asigurator fie din sistem privat, fie din sistemul public de sanatate al tarii de destinatie. Inainte de a semna o astfel de polita de asigurare, intereseaza-te ca asiguratorul sa deconteze direct unitătilor medicale cheltuielile cu ingrijirile medicale, altfel vei fi nevoit sa platesti direct in propriul buzunar, ca mai apoi, cu toate documentele necesare, sa deschizi un dosar de dauna la asigurator. O alternativa la asigurarea de calatorie este Cardul European de Sanatate, valabil 6 luni de la data emiterii de catre case de asigurari la care esti asigurat, asta daca ai minim 5 ani de contributii la asigurarile sociale de sanatate. Cardul este recunoscut doar in unitatile medicale de stat din destinatia ta (europeana).',
        image: 'https://tcv.com.ro/wp-content/uploads/2021/02/Asigurare-medicala-de-calatorie.jpg'
    },
    {
        id: 2, 
        title: 'Asigurarea de calatorie: asigurarea pentru bagaje', 
        description: 'Asigurarea pentru bagaje acopera deterioarea, distrugerea sau disparitia bunurilor ca urmare a unui accident, calamităti sau furt. De obicei, vine la pachet cu asigurarea medicala de calatorie si asigurarea de raspundere civila individuala. Ultimul incident acoperit de extra optiunea pentru bagaje a fost cel in urma caruia troller-ului cu care am calatorit in India i s-a rupt o roata. Desi companiile aeriene te pot despagubi in astfel de situatii, se mai intampla sa nu poti reactiona in timp util, asa cum a fost si cazul meu. Cei de la AIG au reactionat pozitiv si mi-au acoperit costurile pagubei fara sa fie nevoie sa merg eu initial la un service de trollere.',
        image: 'https://assets-eu-01.kc-usercontent.com/65b2eb68-cf8e-0106-94e7-7fcbfbaa6c5e/585b289d-f018-4df8-9848-3f02a63b8db4/11a.png?w=600'
    },
    {
        id: 3, 
        title: 'Rezerva-ti cazarea prin Revolut Sejururi si beneficiaza de cashback de pana la 10%', 
        description: 'Daca ești posesor de card Revolut, incepand cu luna octombrie ai acces si la produsul Revolut Sejururi direct din aplicatia mobila Revolut. Tarifele pentru serviciile de cazare sunt tarife exclusive pentru utilizatorii aplicatiei Revolut, iar la fiecare rezervare se obtine un cashback de pana la 10% din valoarea serviciului de cazare, fara taxe si comisioane locale. Cashback-ul este primit in contul tau Revolut la checkout. Pentru produsul Revolut Standard vei beneficia de un cashback de 7.5%.',
        image: 'https://aventurescu.ro/wp-content/uploads/2019/08/revolut2.jpg'
    },
    {
        id: 4, 
        title: 'Opteaza pentru plata online cu cardul de vacanta', 
        description: 'Indiferent ca lucrezi la stat (in sectorul public), si primesti vouchere de vacanta pe card asigurate din bugetul public, sau la privat, si primesti astfel de beneficii din bugetul companiei angajatoare, poti face plata online cu cardul de vacanta pe orice site de turism sau platforma online de rezervari ce vinde pachete turistice cu cel puțin o noapte de cazare. Voucherele de vacanta pe card (cardurile de vacanta) se folosesc exclusiv pentru vacante pe teritoriul Romaniei. Voucherele de vacanta sunt scutite de plata CAS și CASS.',
        image: 'https://calatoruldigital.ro/wp-content/uploads/2022/07/vouchere-vacanta-format-electronic-800x500.png'
    },
    {
        id: 5, 
        title: 'Cand sa nu cumperi bilete de avion', 
        description: 'In general, cea mai scumpa luna din an pentru achizitia biletelor de avion este luna iulie, in care preturile sunt cu peste 50% mai mari decat in luna ianuarie. Spre Roma preturile cresc cu peste 50% in iunie, iulie, noiembrie si decembrie (data cumpararii biletului de avion). Cele mai bune preturi sunt disponibile in lunile ianuarie - februarie si septembrie- octombrie. Spre Bruxelles, in lunile mai, iunie, iulie dar si octombrie, noiembrie, decembrie, diferenta fata de pretul in ianuarie este de peste 55%. Spre Londra preturile biletelor de avion sunt mai echilibrate pe parcursul anului. In lunile februarie, martie, aprilie si august - septembrie, preturile sunt cu pana la 25% mai mari decat in luna ianuarie. Pentru Milano in perioada martie - mai si septembrie, preturile pot fi cu pana la 29% mai mari decat in ianuarie. Preturile pentru biletele de avion catre Paris pot fi cu pana la 41% mai mari decat in ianuarie in perioada martie - iulie. Si ultima pe lista, Barcelona cu preturi la biletele de avion cu pana la 47% mai mari in perioada iulie - august decat in ianuarie.',
        image: 'https://www.impact.ro/wp-content/uploads/2022/04/Zilele-in-care-gasesti-cele-mai-ieftine-bilete-de-avion.-Un-insotitor-de-zbor-a-dezvaluit-secretul.jpg'
    },
];

export function getUtilsPostByPostId(postId) {
    return utilities.find((post) => post.id === parseInt(postId));
}

export default utilities;