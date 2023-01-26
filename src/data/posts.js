const posts = [
    {
        destinationId : 1,
        posts: 
        [
            {
                id: 1,
                title: 'Roma - Santa Maria Maggiore si San Giovanni',
                date: 'Noiembrie 5, 2021',
                description: [
                    'Timpul trece repede la Roma, un oras urias si plin de tentatii la fiecare pas. Dupa primele zile in care am batut in lung si in lat orasul, tot au ramas cateva obiective majore de vizitat,       printre care si catedrala Romei, San Giovanni in Laterano, Sfanta Scara, Santa Maria Maggiore, biserica sperantei si o vizita in faimosul si boemul cartier Trastevere.',
                    'Santa Maria Maggiore - Localizata in Piata Esquilino, foarte aproape de Statia Termini este una dintre cele 4 mari bazilici patriarhale ale Romei. Este totodata si cea mai mare biserica din Roma inchinata Sfintei Maria. A fost construita in anul 420, in urma unui fapt neobisnuit, respectiv o ninsoare cazuta in mijlocul verii, în 358, cand zapada a trasat perimetrul pe care avea sa fie ridicata biserica.',
                    'San Giovanni in Leterano si Santa Scala - Catedrala Romei, dar si capul tuturor bisericilor din oras si din lume, cum sts scris pe fatada, biserica ecumenica mama in randul catolicilor. Este o intrare separata in baptiserul octagonal, primul de acest fel din lume si devenit model pentru toate celelalte fiind si singura parte pastrata din biserica originala, care de-a lungul timpului a fost afectata de incendii, cutremure, timp cunoscand renovari multiple. Langa San Giovanni in Laterano se afla o alta constructie care adaposteste Scala Santa, scara casei lui Pillat din Pont pe care a urcat Iisus pentru a fi judecat. Se poate urca pe doua parti, pe una in picioare in timp ce pe cealalta multi credinciosi urca in genunchi cele 28 de trepte.',
                    'Trastevere - Trastevere inseamna peste Tibru si este fostul ghetou muncitoresc. Este acum o zona foarte animata, cu multe restaurante, baruri si multe magazine dar totodata aerul medieval este extrem de bine conservat. Este foarte aproape de Prati, deci de Vatican, Castelul Sa Angelo, asa ca daca doriti puteti combina obiectivele. In Trastevere se regaseste acea atmosfera de Italia veche, cu totul alta decat cea din mijlocul Romei. Parca ma plimbam printr-un oras micut, nu la doi pasi de cea mai faimoasa biserica a crestinatatii.'
                ],
                image: 'https://celemaifrumoasecapitale.files.wordpress.com/2016/02/roma.jpg',
                since: 14.0,
                recommended: false

            },
            {
                id: 2,
                title: 'Schönenbach Vorarlberg - Cel mai bun Käsespätzle',
                date: 'Iunie 10, 2021',
                description: [
                    'Schönbach este unul dintre cele mai frumoase sate austriece. Nu are niciun magazin, nici o bodeguta, nimic in afara de un han cu restaurant. Și cateva case, iar numarul nu creste pentru ca este interzis: cine vrea sa construiasca, trebuie sa darame o alta casa, pentru a pastra tinutul nealterat, a-i pastra farmecul pur. Aaa ca Schönenbach Vorarlberg - Austria este atemporal, totul pare inghetat in timp, mai putin masinile moderne, pentru ca aici fiecare fermier are desigur, pe langa multe vacute, tractor si casa din lemn obligatorii si o masina sau mai multe.',
                    'Drumul a fost spectaculos si Schönenbach m-a impresionat extem de tare, asa că doresc sa va port pe aripile fanteziei catre acest taram de poveste. Totul incepe cand… cand vezi acest catun, an sfarsit! Munti majestuosi, pajisti de un verde crud si sute de vacute. Peste tot se aud numai mugete si sunetul talangilor. Intram in catun, ne invartim un pic si realizam ca da! In sfarsit am ajuns! Si ca acesta este tot! Schönenbach este un sat iubit mult de tot de catre austrieci, care vin des aici pentru a lua cina, sau pranzul in aceasta feerie. Efectiv te plimbi pe cele cateva ulite alaturi de sutele de vacute curioase. Ati auzit bine: sunt foarte curioase vacutele de aici, aveam impresia ca ma studiau sa vada cine sunt, de unde si ce caut acolo.'
                ],
                image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/2008Sch%C3%B6nebach16.JPG',
                since: 19.0,
                recommended: false
            },
            {
                id: 3,
                title: 'Indragosteste-te din nou de Paris',
                date: 'August 10, 2021',
                description: [ 
                    '"Je vois la vie en rose". Am inceput plimbarea cu cea mai emblematica imagine a Parisului: Turnul Eiffel vazut de pe terasele Trocadero. Am continuat agale apoi pe malul Senei, oprindu-ne la terase plutitoare pentru pranz si un pahar de rose, am trecut pe sub elegantul Pont Alexandre III, am aruncat un ochi spre Petit Palais, Les Invalides, Louvre, Musee Orsay si Conciergerie, si am poposit cateva momente in fata la Notre Dame, la doi ani de la incendiul devastator din aprilie 2019, unde acum se turna fix un film despre acest episod tragic. Pentru a intra in atmosfera Parisului sufletelor noastre, dincolo de problemele migratiei, magazine indiene si fast fooduri. Parisul are acelasi farmec dintotdeauna, un aer boem si multa frumusete. Stiti cum se spune: vom avea mereu Parisul, fie doar ca pe un vis frumos.',
                    'Ce mi-a placut mult la acest oras? Simteam ca imi lipsesc rolele sau o bicicleta, sau ceva. Oamenii par ca fac sport, dar nu la modul - ne chinuim si ne e greu si nici nu prea ne place ci mai mult la modul - orasul asta are vremea perfecta pentru diverse activitati in aer liber si avem si spatiile necesare unde sa o facem, asa ca iesim si ne simtim bine facand miscare in aer liber.'
                ],
                image: 'https://media.istockphoto.com/id/505494768/photo/eiffel-tower-blue-lights.jpg?s=612x612&w=0&k=20&c=bEYohhJ0qocgUMm1qpkKQxOdxrUzd6AOK2FBWTZ6OiE=',
                since: 17.0,
                recommended: true
            },
            {
                id: 4,
                title: 'Side - traditie si istorie',
                date: 'Septembrie 15, 2021',
                description: [
                    'Side, anticul oras grecesc de pe coasta Mediteranei este actualmente una dintre statiunile turcesti cele mai solicitate, fiind o alegere foarte inspirata daca doriti sa iesiti din resort: o scurta plimbare si ajungeti la terasele de pe malul marii, in cafenelele de pe langa Bazaar sau la ruine. Totodata in Side se poate admira una dintre cele mai cunoscute cascade din Turcia, cascada Manavgat. Este total turistic, cu toate cele ce decurg de aici: unii vizitatori sunt dezamagiți cand isi dau seama ca au fost mai mult sau mai putin pacaliti la diferite achizitii si de calitatea produselor, altii se bucura de experienta negocierilor si a varietatii de produse de aici. Am petrecut ceva timp printre ruinele vechiului oras, am admirat amfiteatrul urias care putea adaposti 15000-20000 de oameni, zidurile orasului, care s-au pastrat intr-o forma foarte buna, strada colonadelor, fantana nimfelor, apeductul, Agora, Arcul de Triumf, Templul lui Dionisos, Templul lui Apollo, Templul zeitei Fortuna, a zeitei Athena, bazilica bizantina, spitalul bizantin si multe altele.',
                    'Ca de obicei m-a cuprins visarea, imaginandu-mi cum era viata intr-un oras antic, regretand iar ca nu exista o masina a timpului sa putem sa pasim eventual nevazuti pe strazile pietruite, in forfota pe care ne-o imaginam si tabieturile de demult. Mi-a placut si acest restaurant, Tiyatro, amplasat desupra ruinelor vechiului oras, cu o gradina incapatoare si plina de verdeata.'
                ],
                image: 'https://travelplanner.ro/blog/wp-content/uploads/2021/11/side-centrul-statiunii.jpg',
                since: 16.5,
                recommended: false
            },
            {
                id: 5,
                title: 'Indragosteste-te din nou de Lisabona',
                date: 'Octombrie 21, 2021',
                description: [
                    'Lisabona nu mai are nevoie de nicio introducere. Este una dintre cele mai iubite capitale europene și una în care mereu mă întorc cu drag. Deși am fost deja de mai multe ori aici, nu am apucat să scriu atît de mult despre acest oraș minunat, deoarece l-am simțit mai mult decât l-am descris. Clădiri frumoase, piețe superbe, străzi încântătoare. Lisabona este un spectacol în sine, deși orașul a fost distrus în timpul cutremurului din 1755, unul dintre cele mai devastatoare din istoria umanității prin numărul de victime și magnitudine. S-au pierdut multe comori, dar orașul a renăscut, fiind complet reconstruit și azi ne putem bucura de bulevardele frumoase, de liniile clare, de unitatea sa. Îmi place marea, oceanul, plaja și din Lisabona ajungi foarte repede și la plaje întinse, o condiție esențială pentru un oraș să îl consider exact pe sufletul meu. Plaja Adraga de exemplu, deși nu cea mai apropiată de oraș, arată de parcă ar fi de pe altă planetă. Se poate merge de dimineață și întors seara.',
                    'Lisabona este frumoasa. Atat de frumoasa si cu atat de multe locuri de vazut ai de experimentat. Energia orasului este si ea una speciala. Insa si in jur sunt multe locuri fantastice, pe care ne dorim sa le vizitam. Printre ele, Sintra, Cascais si Cabo de Roca, cel mai vestic punct al Europei continentale. Si se pot vizita Intr-o singura zi, daca nu aveti foarte multe zile la dispozitie in capitala Portugaliei.'
                ],
                image: 'http://tourex.ro/wp-content/uploads/2015/07/Lisabona-Portugalia-2.jpg',
                since: 15.0,
                recommended: false
            },
            {
                id: 6,
                title: 'Las Palmas De Gran Canaria',
                date: 'Septembrie 7, 2021',
                description: [
                    'Las Palmas de Gran Canaria este un oras minunat, ideal pentru nomazii digitali, multi dintre ei alegand acest oras al primaverii eterne ca o noua casa. Care sunt avantajele acestui oras, pentru ce anume l-ar alege cineva dintre atat de multe altele si de ce atat de multi nomazi digitali si expati au ales sa stea aici. Gran Canaria face parte din arhipelagul insulelor Canare, o regiune autonoma a Spaniei, parte din Uniunea Europeana. Este considerata o insula mini-continent, pentru ca are un climat variat (desi cu temperaturi relativ constante pe tot parcursul anului) si un relief absolut uimitor: are si desert si dune și munsi, plaje, rezervatii marine, de toate!',
                    'Insula este sigura, curata, iar sansele ca cineva sa se confrunte cu situatii dificile este minima. Aici puteti vedea rata de criminalitate din diferite orase si regiuni din toata lumea. In ultimul an insulele Canare s-au confruntat cu valuri de migranti din Africa, dornici sa ajunga in Europa, insa situatia a fost gestionata deocamdata foarte bine. Sistemul sanitar este excelent, scolile sunt bune, infrastructura de vis.',
                    'Cladiri colorate, strazi pietonale, muzee, sali de sport, Las Palmas are de toate. Este un oras bijuterie, pe care iti recomand calduros sa il vizitezi in timpul calatoriei in Gran Canaria. Las Palams este un oras boem, sunt multe ateliere locale, pe langa magazinele care tin de branduri internationale. Sunt multe zone pietonale impanzite cu cafenele, baruri de tot felul, mici restaurante. Si totul este impecabil. De-a lungul oceanului este o promenada pietonala uriasa! Sunt si piste de biciclete, este sigur pentru familiile care vin la plimbare cu carucioarele cu bebelusi, spatiul fiind separat de sosea. Revin cu acest aspect si la categoria infrastructura.'
                ],
                image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/43/e7/las-palmas-de-gran-canaria.jpg?w=700&h=500&s=1',
                since: 16.8,
                recommended: true
            }
        ]
    },
    {
        destinationId : 2,
        posts: 
        [
            {
                id: 1,
                title: 'Chiang Mai Thailanda - Te Îndrăgostești De Acest Loc',
                date: 'Martie 5, 2021',
                description: [
                    'Chiang Mai este… altceva. Fosta capitala a regatului Lanna, devenit Regatul Chiang Mai, tributar Siamului (Thailanda de astazi) pastreaza multe vestigii ale trecutului. Aici vei putea vizita temple cu sute de ani mai vechi decat cele din Bangkok de exemplu. Dar te vei bucura si de o vegetatie luxurianta, cu cascade, palmieri mai inalti decat cladirile, multe sanctuare de elefanti, sate care pastreaza mestesugurile stravechi. Si de un oras foarte modern si uber chic, totul in acelasi loc. A… si fara mare. Nu te astepta sa vezi plaje exotice in Chiang Mai, pentru ca esti la munte. Ceea ce inseamna ca da, umiditatea nu este deloc atat de mare ca in alte parti ale Thailandei. Intre noi fie vorba, ador umiditatea ridicata, cu cat mai mare cu atat mai bine, dar stiu ca asta este o ciudatenie si ca in general nu este atat de dorita.',
                    'Umiditatea scazuta fata de restul Thailandei, sa ne intelegem, este motivul pentru care va recomand ca in periplul prin Thailanda sa ajungeti intai aici. Mai ales daca aveti si o schimbare de temperatura cum am avut eu, de la -15 la +37, este mai usor pentru organism sa se acomodeze cu caldura, ulteriror si cu umezeala. Asa ca uitati ce veti vedea daca dati o raita prin Chiang Mai, urmata eventual de o evadare la plaja si de cateva zile in Bangkok.',
                ],
                image: 'https://travelator.ro/wp-content/uploads/2017/10/Chiang-Mai-Thailanda-850x450.jpg',
                since: 22.9,
                recommended: true
            },
            {
                id: 2,
                title: 'Indonezia',
                date: 'Februarie 12, 2021',
                description: [
                    'Indonezia este spectaculoasa. 17 000 de insule, unele uriase, altele care se pot inconjura in 10 minute pe jos. Cu nisip alb si palmieri si inconjurate de ape turcoaz. Si vulcani, vegetatie luxurianta si temple, obiceiuri, dragoni Komodo si cea mai mare biodiversitate marina din lume in Raja Ampat (inca pe lista de vazut). Insula Bali este frumoasa, dar in comparatie cu celelalte, nu impresioneaza prea mult. Este mai turistica si sunt multe facilitati, dar pierde din autenticitate si din farmec. Plus ca sunt foarte multe droguri, riminalitatea este cea mai ridicata din Indonezia si locul atrage multi oameni nu tocmai placuti. Cu toate acestea este frumos. Insa daca va place aventura si sunteti dispusa sa luati Indonezia la pas, incet, o sa fiti coplesiti.',
                    'Indonezia nu este o destinatie foarte usoara, aca mergi pe cont propriu si fara tururi, dar este spectaculoasa. te schimba, te fascineaza, te supara uneori. Te lasa mut de uimire. Pentru a intelege Indonezia si ce inseamna ea pentru mine, vedeti cateva dintre articolele de mai jos, care nu sunt despre atractii in primul rand (desi am lasat cateva) ci mai mult despre ce inseamna sa experimentezi aeasta tara singura si fara ghizi, tururi s chiar fara planuri.'
                ],
                image: 'https://xplorer.ro/wp-content/uploads/2022/10/Obiective-turistice-Indonezia.webp',
                since: 23.6,
                recommended: false
            },
            {
                id: 3,
                title: '7 Lucruri De Făcut În Thiruvananthapuram',
                date: 'August 8, 2019',
                description: [
                    'La ce va ganditi cand spuneti Thiruvananthapuram? La comoara a carei valoare este etimata ca depaseste 21 de miliarde de dolari a templului Sree Anantha Padmanabha, cel mai bogat templu din lume? Sau la Ashramuri? Orasul este foarte cautat printre cei care apreciaza o sedere la un astfel de centru de relaxare, chiar de la noi din tara. Trivandrum este un oras pe care nu il pot descrie intr-un fel anume. Asta pentru ca nu are o unitate, este in transformare. Mi-a adus aminte de Kuala Lumpur: are atat cartiere sarace, cat si Malluri Noi, infrastructura in dezvoltare. Vezi magazine luxoase si moderne langa maghernite. Si are cateva locuri pentru care merita sa dai o fuga.',
                    'Cartiere vechi si traditionale isi pierd usor, usor din ”habitat” in favoarea cladirilor moderne, curate, luminoase. Cu toate acestea, sunt multe locuri unde vezi tot felul de maghernite, vanzatori stradali de mancare. Apropo de mancarea de pe strada: nu as incerca asta in India, numai pentru cum am vazut ci la peste 35 de grade stau bucatele expuse in praful strazii si diferiti musterii vin si incearca o gramada de preparate (le pipaie cu mana) pana ce isi aleg una. Nu este ca in alte parti din Asia, unde totul este curat si se prepara pe loc.',
                    'Trivandrum este o optiune excelenta pentru cumparaturi. Am fost in cateva Malluri numai cu saree-uri si rochii si bluze indiene. Fantastic de frumoase, pot fi adaptate si pentru tinute de purtat pe la noi, unele fuste sunt spectaculoase. Pe langa acestea, aici este locul potrivit sa iti faci stocul de masti si creme BIO pentru orice problema a tenului. Foarte ieftine si de o calitate exceptionala, adica la noi aceeasi calitate costa si de 20 de ori mai mult. Tot aici se gasesc fel de fel de creioane kohl foarte bune, produse pentru par, betisoare parfumate, jucarii, mirodenii de tot felul. Si suveniruri diverse, Chalai market fiind cea mai potrivita optiune pentru asa ceva.',
                ],
                image: 'https://res.cloudinary.com/cdn-connections/image/upload/v1642069288/Destinations/Asia/India/TOURS/Kerala/Header_Kerala.jpg',
                since: 41.0,
                recommended: false
            },
            {
                id: 4,
                title: 'Aberdeen, Hong Kong',
                date: 'Februarie 6, 2021',
                description:[
                    'Multi turisti vin aici pentru a lua masa la unul dintre giganticele restaurante plutitoare, precum Jumbo Kingdom - cel mai cunoscut, un adevarat colos. Pentru a ajunge la el sunt curse gratuite cu feribotul de pe cheiul din Aberdeen.M-am plimbat in sus si in jos pe chei, nu eram chiar imbracata sa ma duc la restaurant mai ales ca toata ziua fusesem pe drumuri. Am privit mult portul, barcile, viata de aici, desi nu prea mai aduce cu vremurile de inceput, cand locul era un satuc de pescari, raiul piratilor si al contrabandistilor. Asta inainte de venirea englezilor.',
                    'Dupa chei am luat-o inspre oras unde la fel m-am plimbat, am contemplat, m-am relaxat in centrul vechi, mancat diferite delicatese locale, la un moment dat chiar am ajuns intr-un loc unde erau numai localncii si totul in chineza, nimeni nu stia o iota engleza, m-am tot uitat in farfuriile oamenilor si ma agitam pe acolo, incercam sa vad cum as putea comanda si eu ceva. In Asia multa lume mananca afara, nu tine de conditie sociala sau bani, este incredibil de ieftin - pentru ei, in locurile date. La fel cu a gati acasa aproape, plus ca a gati solicita mult timp.',
                ],
                image: 'https://i.natgeofe.com/n/cb873b6f-18ff-4647-8dc0-82b62e9d5849/hong-kong-travel.jpg?w=2520&h=1680',
                since: 23.8,
                recommended: false
            },
            {
                id: 5,
                title: 'TOP 10 Obiective Turistice Din Kuala Lumpur, Malaezia',
                date: 'Octombrie 28, 2020',
                description: [
                    'In Kuala Lumpur impresioneaza amalgamul de vechi si nou, infrastructura dezvoltata, zumzetul strazii, galagia din unele zone. O plimbare pe strazile acestei capitale nu este o poezie serena, dar reprezinta ceva unic. Desi nu este un oras extrem de bogat in atractii, sunt destule obiective care fac o oprire aici una de tinut minte. Asiaticii vin aici des pentru mancare si cumparaturi, dar noi de la atata distanta ne dorim mai mult.',
                    'Iata mai jos TOP 10 atractii din perspectiva proprie: Turnurile Petronas, Turnul KL Menara, Bukit Bintang, Jalan Alor, Mica Indie, Piata Centrala/Pasar Seni, Cartierul Chinezesc, Sky Bar - Traders, Batu Caves,Moscheea Nationala- Masjid Negara',
                
                ],
                image: 'https://a.cdn-hotels.com/gdcs/production150/d1027/53d84813-85cf-49fb-bc55-4d708c32933e.jpg?impolicy=fcrop&w=800&h=533&q=medium',
                since: 26.0,
                recommended: false
            },
        ]
    },
    {
        destinationId : 3,
        posts: 
        [
            {
                id: 1,
                title: 'Oaza Siwa Egipt: comoara neatinsă din trecut',
                date: 'Martie 21, 2021',
                description: [
                    'Oaza Siwa: cat poate fi de ciudat ca locul care cea mai mare rezerva subterana de apa din Egipt sa fie in mijlocul desertului? Ce-i drept, este vorba despre o oaza cu zeci de mii de maslini, cu palmieri, caisi, flori, plante medicinale. Si multe lacuri sarate, Al-Zaitoun avand una dintre cele mai mari salinitati din lume. Si sute de izvoare, chiar la poarta marii de nisip.',
                    'Iar ca tabloul sa fie complet, Oaza Siwa adaposteste adevarate comori, precum Templul Oracolului, unde Alexandru cel Mare a fost declarat semizeu. Fiul  lui Amon-Ra, Zeul Zeilor, Zeus la greci. Si multe alte situri arheologice fantastice. Haideti sa va arat ce anume face oaza Siwa unul dintre cele mai frumoase locuri din Egipt si din lume!',
                    'Lacurile sarate din Siwa si cele peste 200 de izvoare fac acest loc recomandat si pentru o cura de frumusete si de sanatate. Apele lacurilor sunt tamaduitoare pentru sinusuri, piele, ochi. Pentru relaxare si recreere. Localnicii isi tratau din vechi timpuri aici reumatismul, scapau de durerile de spate, de incheieturi, de psoriazis. Izvoarele sulfuroase au si ele proprietati uimitoare. Cu apa calda si fierbinte, mineralele prezente sunt similare cu cele mai renumite izvoare de wellness din lume. Dupa o baie intr-un lac sarat efectiv te simti renascut.',
            ],
                image: 'https://live.staticflickr.com/819/40811630914_19571404ce_b.jpg',
                since: 22.7,
                recommended: false
            },
            {
                id: 2,
                title: 'Cum a fost la un Safari in Africa de Sud?',
                date: 'Februarie 19, 2021',
                description: [
                    'Am decis sa mergem in Cape Town de Revelion, dar ma atragea ca un magnet si Sun City, opulentul resort de vacanta de care auzisem intr-un film, si care imi ramasese fixatie ca trebuie sa ajung cu copiii la el. Si ce mai faceau Drew Barrymore si Adam Sandler in film, in afara de distractii in Sun City? Mergeau in apropiere la un safari sa vada elefanti, lei si girafe, bineinteles. Asa ca atunci cand am decis sa mergem pana in Sun City, automat am decis sa facem, in premiera, si un safari african.',
                    'Am ajuns pe dupa amiaza la portile Madikwe, dupa ce ne-am grabit putin, pentru ca dupa lasarea intunericului portile se inchid, si mai poti intra doar cu escorta armata (animalele de prada sunt active noaptea). Dupa inca 6km prin rezervatie, timp in care am vazut deja o gramada de tot soiul de antilope, am ajuns la podul cu balans care leaga salbaticia de lodge-ul in care urma sa ne cazam. Dupa cateva formalitati scurte, am sarit insa in o alta masina, pentru un prim safari scurt, sa ne familiarizam cu regulile si experienta, pentru apus. Safari-urile africane sunt in masini mari, descoperite, insa blindate bine (rinocerii negri mai au uneori obiceiul sa se ia la lupta cu masinile). Trebuie sa iti pui centura, nu ai voie sa te ridici in picioare sau sa incepi sa atragi prin gesturi sau sunete atentia animalelor. Si bineinteles, jos din masina te dai doar daca iti spune rangerul ca poti.',
                    'La nici 300m de la lodge, am dat peste 3 rinoceri, o prima experienta fabuloasa, care pasteau linistiti si complet dezinteresati de noi. Erau insa rinoceri albi, care nu au temperamentul agresiv al celor negri, asa ca am stat cuminti in masina la nici 3 metri de ei, si i-am admirat pe indelete. Apoi am dat peste girafe, zebre, elefanti. Fara numar, dupa cum spunea Lucas cand se declara invins ca nu mai poate sa le numere pana la capat.',
            ],
                image: 'https://strapi-imaginary.weroad.it/resource/medium/1933/viaggio-sudafrica-tanzania-safari-elefante-weroad.jpg',
                since: 23.4,
                recommended: true
            },
            {
                id: 3,
                title: 'Ghid Vizitare Maroc: o țară de poveste sau nu?',
                date: 'Iulie 19, 2020',
                description: [
                    'Pentru mine Marocul a fost una dintre cele mai frumoase experiente pe care le-am trait. Spun experienta, deoarece a fost cu mult mai mult decat o vacanta. Marocul m-a schimbat si m-a facut sa studiez despre cultura si despre traditiile de aici, m-am simtit ca intr-o poveste si in fiecare moment cu inima usoara. Mai mult, aici am invatat ca pot calatori si independent, adica fara agentie. Nimic nu mi-a deranjat starea de spirit, dimpotriva, orice provocare m-a amuzat, m-a facut curioasa, asa ca am putut admira pe deplin frumusetea acestor locuri si categoric o sa ma intorc.',
                    'Intoarsa in tara si discutand cu alte cunostinte despre acest loc, am vazut ca nu toata lumea imi impartaseste parerile din cauza unor inconveniente care tin uneori exclusiv de confort. Chiar daca nu te regasesti 100% in una dintre cele doua de mai jos, iti poti face o idee si alege in cunostinta de cauza. Daca sa vizitezi Marocul sau cum sa privesti experienta.', 
                    'Iti plac senzatiile tari: o sa iubesti si urasti Marocul in acelasi timp, proportiile dintre aceste doua stari difera in functie de fiecare persoana! Iti place sa descoperi noi culturi si nu iti este frica de necunoscut. Marocul este o alta cultura, oamenii interactioneaza un pic altfel decat la noi, dar daca ignori aceste aspecte si ai mintea deschisa o sa ai o experienta de neuitat.',
                ],
                image: 'https://www.acs-ami.com/fr/blog/wp-content/uploads/2015/06/Expatriation-Maroc-Rabat.jpg',
                since: 31.0,
                recommended: false

            },
            {
                id: 4,
                title: 'Atractii turistice in Tanzania',
                date: 'Iulie 6, 2022',
                description: [
                    'Tanzania este una dintre cele mai populare destinatii din Africa. Aceasta tara ofera lucruri care vor fi indragite de toti turistii care o viziteaza: peisaje fantastice, excursii de tip safari care iti taie rasuflarea si captivante aventuri in aer liber.',
                    'Atractiile sunt pentru toate buzunarele. Intrucat aceasta tara este una dintre cele mai mari de pe continentul african, e foarte posibil ca dorinta de a explora tot ceea ce ea are de oferit, sa nu poata fi indeplinita – mai ales in cazul celor presati de timp. Ca sa ai parte de o excursie reusita, poti sa te rezumi la atractiile principale din Tanzania sau sa le alegi pe cele care te intereseaza mai mult.', 
                    'Daca nu esti pasionat de o astfel de plimbare extenuanta, dar iti surade ideea de a trai o stare de beatitudine intr-un paradis tropical, atunci o vizita in insula Zanzibar este obligatorie. Poti sa trandavesti pe plajele cu nisip de un alb stralucitor, unde te poti bronza sau poti inota in apele caldute ale Oceanului Indian.',
                    'Poti aranja chiar o excursie in care ai sansa de a te zbengui in valuri alaturi de delfini. Explorarea gradinilor subacvatice, de o frumusete rara, nu trebuie nici ea ratata. Ca alternativa, hoinareste in jurul Orasului din piatra, obiectiv inclus in Patrimoniul Mondial al UNESCO, unde nici nu simti cand trece timpul.'
            ],
                image: 'https://lp-cms-production.imgix.net/2021-12/Balloon%20ride%20over%20the%20Serengeti%2C%20Tanzania.jpg?auto=format&w=3840&q=75',
                since: 6.0,
                recommended: false

            }
        ]
    },
    {
        destinationId : 4,
        posts: 
        [
            {
                id: 1,
                title: 'De ce Arizona e de neratat in vacanta ta din SUA?',
                date: 'Aprilie 21, 2021',
                description: [
                    'Am petrecut o saptamana aici si cu timpul, temperatura s-a dovedit a fi destul de prietenoasa cu noi. Dimineti si seri racoroase, foarte placute, soare arzator si aer uscat pe timpul zilei.',
                    'In SUA nu vezi oameni pe strazi, iar Arizona nu face exceptie. Toata lumea se deplaseaza cu masina, de aceea, pe freeways exista banda speciala pentru cei ce sunt singuri in masina si banda pentru cei ce sunt mai mult de unul. Iar daca nu respecti regula asta, platesti amenzi ursturatoare.',
                    'Ei bine, distantele sunt foarte mari, intr-adevar si nu pot fi parcurse pe jos, mai ales cand afara sunt temperaturi atat de ridicate. In schimb, au Wallmart-uri, de unde iti poti achizitiona, lejer, arme. E ca si cum ai cumpara carne de la Raionul Carmangerie. Libertate deplina.',
                    'Arizona inseamna cactusi. Asta e prima imagine care-mi vine in minte. Asadar, asta am vrut sa vedem prima oara aici, motiv pentru care ne-am lasat pe mana prietenilor nostri si am vizitat White Tanks Mountains, o zona a muntilor din piatra, cu specii de cactusi - de-o parte si de alta a aleilor ce traverseaza parcul - inalti de cativa metri, inconjurati de flori salbatice si multe plante desertice, de jur-imprejur. Parcul are o suprafata de 45 mile si pentru o vizita completa este nevoie de 2 zile. Stiai ca in Arizona, cactusii sunt protejati prin lege si risti inchisoare daca intervii asupra lor? Ei bine, da. Parcul e impartit in mai multe zone, cu activitati diverse, insa noi am optat pentru varianta family pentru aveam un toddler cu noi. Dorinta noastra s-a implinit si ne-am clatit ochii privind - indeaproape - cactusii in toata maretia lor.',
                ],
                image: 'https://www.andrewshoemaker.com/images/480/horseshoe-bend-colorado-river-arizona.jpg',
                since: 21.7,
                recommended: false
            },
            {
                id: 2,
                title: 'Panama City',
                date: 'Mai 19, 2021',
                description: [
                    'Prima destinatie in care am pasit in America Centrala, acea fasie de pamant ce separa doua oceane si uneste doua continente a fost Panama si a sa vibranta capitala, Panama City.',
                    'Zgarie norii aliniati de-a lungul marii sunt primii pe care ii remarci in Panama pe cand avionul este pe cale sa aterizeze. Insa cel mai celebru loc al acestei tari ce incepe din partea sudica fasia de pamant ce uneste cele doua Americi este un canal, celebrul Canal Panama, ce uneste doua oceane. Asa ca fix de acolo ne-am inceput vizita de o zi prin Panama City. Cel mai bun loc pentru a vizita Canalul Panama daca nu ai 5-7ore la dispozitie pentru o croaziera intre cele doua oceane, prin toate ecluzele canalului, este la ecluza Miraflores, de unde ai o panorama cu canalul in ambele directii, dar si poti afla informatii interesante despre istoria acestui loc, in cadrul muzeului interactiv deschis aici.',
                    'O alta fila din istoria Panama este in capatul celalalt al actulului oras, in sit-ul arheologic Panama Vieja, fostul oras din secolul 16, incendiat si parasit, acum important vestigiu istoric. Faleza lunga a orasului, impanzita de parcuri si locuri urbane de relaxare, este perfecta pentru o plimbare la apus, urmata de o balaceala in una din multele piscine ce servesc hotelurile din zona centrala a orasului. Am stat doar o zi in Panama, si ne-am plimbat doar prin Panama City; planuim insa sa revenim, cu alta ocazie in America de Sud, dar si pentru a explora fantastica flora si fauna a Americii Centrale, prin jungla si vaile dintre oceane',
                ],
                image: 'https://www.telegraph.co.uk/content/dam/Travel/2018/November/panama-city-panama-skyline.jpg',
                since: 20.0,
                recommended: false
            },
            {
                id: 3,
                title: 'Puerto Vallarta - Vacanta mexicana la malul pacificului',
                date: 'Iulie 21, 2021',
                description: [
                    'Puerto Vallarta este una din numeroasele statiuni turistice mexicane, in care relaxarea si buna dispozitie sunt la ele acasa, loc bun de o vacanta exotica. Situata in golful Banderas, la malul Pacificului, isi imparte punctele de atractie intre nisipurile aurii de la malul marii si misterioasa Sierra Madre, jungla tropicala ce te indeamna la aventuri.',
                    'Dintre multitudinea de excursii cu barca oferite, cateva sunt obligatorii pentru orice turist. Las Caletas este o plaja retrasa, multa vreme in proprietatea privata a regizorului John Houston, poate cea mai frumoasa din zona, la o ora distanta de centrul orasului, iar o zi aici inseamna relaxare totala. Seara ambianta se schimba, cei care opteaza sa vina aici in acest moment au parte de un spectacol inedit de arta pre-hispanica (Rythms of the Night) si de o cina la lumina lumanarii intr-o adevarata atmosfera tropicala.', 
                    'Tot la capitolul obligatoriu de vizitat sunt si plajele din imediata vecinatate: Las Animas si Quimixto. In cea de-a doua poti alege intre un bronz la malul oceanului, sau o vizita la o cascada din padure, vizita ce poti sa o efectuezi calare pe unul din caii ce se pot inchiria pentru aproximativ 15$ de aici. Micul bazin natural in care se varsa cascada este suficient de adanc pentru a permite salturi spectaculoase de pe unul din peretii din stanca, iar copii localnici vor fi bucurosi sa iti dea o adevarata lectie de maiestrie. Daca esti suficient de curajos, incearca si tu, dar atentie, stancile sunt umede si extrem de alunecoase. Alte distractii acvatice sunt experiente de sailing, pescuit in ocean, snorkelling sau scuba diving.',
                ],
                image: 'https://img.texasmonthly.com/2022/10/Caballito-letras-pv-scaled.jpg?auto=compress&crop=faces&fit=fit&fm=pjpg&ixlib=php-3.3.1&q=45',
                since: 18.0,
                recommended: false

            },
            {
                id: 4,
                title: 'Aruba - o insula vesela',
                date: 'August 26, 2020',
                description: [
                    'Am avut in total 9 nopti pe Aruba, si nu am ales, din dorinta de a vedea cat mai mult din aceasta insula vesela, sa le petrecem pe toate in acelasi loc. Asa ca le-am impartit in 3, si am petrecut cate 3 zile la cate un hotel, mai multe parti si pe plaje diferite ale Arubei. Oriunde am fi stat insa, apusurile au fost mereu un deliciu!',
                    'Palm Beach este o fasie lunga de nisip fin si alb, cu intrare lina in apa, unde ceea ce se numeste „high rise hotels” se gaseste. High Rise, adica hoteluri inalte: aici sunt construite, in linie, hotelurile all inclusive mari, cu sute de camere. Desi credeam ca nu o sa ne placa, si probabil in afara pandemiei e mult mai aglomerat, pentru noi acum a fost o alegere buna sa stam si aici. Am rezervat bineinteles un hotel in prima linie, cu o camera cu vedere frontala la marea turcoaz. Plaja nu era foarte aglomerata, iar apa era absolut minunata. Plus piscina la 2 pasi de mare.', 
                    'Daca ai vazut poze din Aruba, cu siguranta ai vazut si faimosii flamingo pe plaja! Ei sunt rezidentii uneia dintre insulele mici de langa Aruba, Renaissance Island, o insula privata, ce apartine de hotelul Renaissance. Drumul pana la insula dureaza 10 minute cu o barca rapida, si accesul este permis si celor ce nu sunt clientii hotelului, contra platii unui bilet, in numar limitat si cu rezervare prealabila.',
                    'Plaja, de fapt plajele, pentru ca pe insula sunt doua, sunt foarte frumoase, cu apa turcoaz, flamingo si iguane cat cuprinde. Pe insula vei mai gasi si un restaurant, dar si cateva trasee printre mangrove. Pe plaja cu flamingo copiii au acces doar de dimineata, de la 9 la 10, in restul zilei putind sa se distreze in voie pe Iguana Beach, alaturi. Iguana Beach este, dupa cum ii spune numele, plina de iguane, dar si are cativa rezidenti roz, puii de flamingo plimbindu-se printre sezlonguri.',
                ],
                image: 'https://www.islands.com/wp-content/uploads/sites/13/2021/09/renaissance-flamingo-beach-aruba-shutterstock-1.jpg',
                since: 29.0,
                recommended: true

            },
            {
                id: 5,
                title: 'Exploreaza Mexico City',
                date: 'Mai 26, 2020',
                description: [
                    'Imensa metropola de peste ocean, cu aproximativ 20 de milioane de locuitori, Mexico City impresioneaza din primul moment inocentul turist european. Imediat dupa ce parasesti aeroportul, cea mai rea fata a capitalei Mexicului ti se arata: trafic infernal, case inghesuite si o permanenta impresie de lipsa de aer (datorata in mare parte si temperaturilor inalte obisnuite aici).',
                    'Iti recomand sa incepi plimbarea prin centrul Mexico City-ului cat mai de dimineata, pentru a prinde doar pentru tine strazile la acel moment al zilei libere. Da o raita pe aleile parcului Alameda Central, si apoi opreste-te la Palacio de Bellas Artes, un centru al artelor si culturii mexicane, o cladire impresionanta in sil Art Nouveau, cu un interior Art Deco la fel de impresionant. Continua plimbarea pe langa Torre LatinoAmericana, intr-o vreme cea mai inalta cladire din America Latina, acum doar pe locul 4, construit in 1956 cu tehnologie anti-seismica.', 
                    'Chiar peste drum de turnul de la inaltimea caruia poti vedea intreg Mexico City este Casa de los Azulejos (casa cu gresie), a carei legenda este faimoasa si in prezent. Este vorba de un tanar delasator, al carui tata i-a spus ca din cauza atitudinii sale nu va reusi sa puna 2 caramizi una peste alta niciodata in viata. Ambitionindu-se, tanarul a construit o intreaga casa, pe care, in semn de ironie, a pavat-o in intregime cu caramizi de gresie. ',
                    'Continua plimbarea printre diferite temple (biserici) pana in Piata Constitutiei (Plaza de la Constitucion). Aici, daca este matinal, asa cum ti-am recomandat deja sa fii, poti avea parte de un spectacol inedit: ceremonia militara de arborare a steagului. O vizita in Catedrala Metropolitana este obligatorie, un adevarat muzeu de picturi si scultpuri religioase, unde sunt adapostite moastele Sfantului Augusti de Iturbide. La capatul aleii se regaseste Templo Mayor, ruinele unei mari piramide Aztece, inchinate zeilor ploii si a soarelui.',
                ],
                image: 'https://www.fodors.com/wp-content/uploads/2021/05/UltimateMexicoCity__HERO_shutterstock_1058054480.jpg',
                since: 32.0,
                recommended: true

            }
        ]
    }
];

function compare( a, b ) {
    if ( a.since < b.since ){
      return -1;
    }
    if ( a.since > b.since ){
      return 1;
    }
    return 0;
}

export const getRecommendedPosts = () => {
    let recommendedPosts = [];

    posts.forEach(destinationPosts => {
        destinationPosts.posts.forEach((post) => {
            if(post.recommended === true) {
                recommendedPosts = recommendedPosts.concat(post);
            }
        })
    });

    return recommendedPosts.sort( compare );
}

export function getPostsFromDestination(destinationId) {
    const destination = posts.find((destination) => destination.destinationId === parseInt(destinationId));
    return destination.posts.sort( compare );
}

export function getAllPostOrderedByDate() {
    let allPosts = [];

    posts.forEach(destinationPosts => {
        allPosts = allPosts.concat(destinationPosts.posts);
    });

    return allPosts.sort( compare )
}

export function getDestinationIdForPost( currentPost ) {
    let destination = [];

    posts.forEach(destinationPosts => {
        const isFound = destinationPosts.posts.some(post => {
            if (post === currentPost) {
              return true;
            }
        
            return false;
        });

        if(isFound) {
            destination = destinationPosts;
        }
    });

    return destination.destinationId;
}

export function getPostByDestinationIdAndPostId(destinationId, postId) {
    const destination = posts.find((destination) => destination.destinationId === parseInt(destinationId));
    return destination.posts.find((posts) => posts.id === parseInt(postId));
}

export default posts;