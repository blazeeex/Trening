// Przepisy ruchu drogowego — opracowanie do nauki (kategoria B).
// Wymaga wcześniejszego załadowania znaki.js (funkcja ZNAK).
// Opracowanie edukacyjne: wiążący jest zawsze aktualny tekst ustaw (isap.sejm.gov.pl).
(function () {
  const Z = window.ZNAK;
  const signs = (...items) => `<div class="signs">${items.map(([c, t]) => Z(c, t)).join('')}</div>`;

  window.PRZEPISY = [
    {
      id: 'wstep', icon: '📘', title: 'Źródła prawa i jak czytać ten rozdział',
      sub: 'Ustawy, rozporządzenia, hierarchia przepisów',
      html: `
<p class="lead">Najważniejszym aktem jest <b>ustawa z 20 czerwca 1997 r. – Prawo o ruchu drogowym</b> (w skrócie PoRD). Określa zasady ruchu, obowiązki kierujących i pieszych, warunki dopuszczenia pojazdów oraz kontrolę ruchu.</p>
<h3>Pozostałe ważne akty</h3>
<ul>
<li><b>Ustawa o kierujących pojazdami</b> (5 stycznia 2011 r.): kategorie prawa jazdy, szkolenie, egzaminy, okres próbny, punkty karne i cofanie uprawnień.</li>
<li><b>Rozporządzenie w sprawie znaków i sygnałów drogowych</b>: znaczenie każdego znaku, sygnału świetlnego i polecenia osoby kierującej ruchem.</li>
<li><b>Kodeks wykroczeń</b>: wykroczenia drogowe, np. przekroczenie prędkości, jazda po użyciu alkoholu.</li>
<li><b>Kodeks karny</b>: przestępstwa, m.in. spowodowanie wypadku (art. 177), jazda w stanie nietrzeźwości (art. 178a), ucieczka przed kontrolą (art. 178b).</li>
<li><b>Taryfikator mandatów</b> i <b>taryfikator punktów karnych</b>: wysokość grzywien i liczba punktów za poszczególne naruszenia.</li>
</ul>
<div class="box warn"><b>Stan prawny.</b> Opracowanie obejmuje zasady utrwalone w przepisach i w egzaminie państwowym. Przepisy często się zmieniają. Szczegóły dotyczące młodych kierowców, punktów karnych, wysokości mandatów, parkowania na chodnikach i prawa jazdy dla 17-latków sprawdzaj na bieżąco w Internetowym Systemie Aktów Prawnych (isap.sejm.gov.pl) i na stronach gov.pl.</div>
<h3>Kolejność stosowania się do poleceń (art. 5)</h3>
<p>Gdy różne źródła „mówią” coś innego, obowiązuje ta kolejność, od najważniejszego:</p>
<ol class="steps">
<li><b>Polecenia i sygnały osoby kierującej ruchem</b> (policjant, osoba nadzorująca przejście dzieci, pracownik kolei na przejeździe itp.).</li>
<li><b>Sygnały świetlne</b> (sygnalizacja).</li>
<li><b>Znaki drogowe</b>: pionowe przed poziomymi, a tymczasowe (na żółtym tle) przed stałymi.</li>
<li><b>Ogólne przepisy</b> ustawy, np. zasada prawej ręki.</li>
</ol>
<div class="box tip">Przykład: na skrzyżowaniu jest znak „ustąp pierwszeństwa”, ale policjant daje Ci sygnał do jazdy. <b>Jedziesz</b>, bo polecenie policjanta jest najważniejsze.</div>
`
    },
    {
      id: 'ogolne', icon: '⚖️', title: 'Zasady ogólne i definicje',
      sub: 'Ostrożność, ograniczone zaufanie, pojęcia z art. 2',
      html: `
<h3>Zasada ostrożności (art. 3)</h3>
<div class="box law">Uczestnik ruchu i inna osoba znajdująca się na drodze są obowiązani zachować ostrożność albo, gdy ustawa tego wymaga, szczególną ostrożność, unikać wszelkiego działania, które mogłoby spowodować zagrożenie bezpieczeństwa lub porządku ruchu drogowego, ruch ten utrudnić albo w związku z ruchem zakłócić spokój lub porządek publiczny oraz narazić kogokolwiek na szkodę.</div>
<p><b>Szczególna ostrożność</b> to ostrożność polegająca na zwiększeniu uwagi i dostosowaniu zachowania do warunków i sytuacji zmieniających się na drodze, w stopniu umożliwiającym odpowiednio szybkie reagowanie. Przepisy wymagają jej m.in. przy włączaniu się do ruchu, zmianie pasa, wyprzedzaniu, cofaniu, zbliżaniu się do skrzyżowania, przejścia dla pieszych i przejazdu kolejowego.</p>
<h3>Zasada ograniczonego zaufania (art. 4)</h3>
<p>Możesz liczyć, że inni uczestnicy ruchu przestrzegają przepisów, <b>chyba że okoliczności wskazują, że mogą zachować się inaczej</b>. Takie okoliczności to np. dzieci bawiące się przy jezdni, osoba starsza lub niepełnosprawna, pieszy zapatrzony w telefon, rowerzysta oglądający się do tyłu albo kierowca jadący zygzakiem.</p>
<h3>Uczestnicy ruchu</h3>
<p><b>Uczestnik ruchu</b> to pieszy, kierujący, a także inne osoby przebywające w pojeździe lub na pojeździe znajdującym się na drodze.</p>
<p><b>Pieszy</b> to osoba znajdująca się poza pojazdem na drodze, która nie wykonuje na niej robót. Za pieszego uważa się też osobę, która <b>prowadzi, ciągnie lub pcha</b> rower, motorower, motocykl, hulajnogę elektryczną, urządzenie transportu osobistego, wózek dziecięcy lub inwalidzki. Pieszym jest również osoba poruszająca się na wózku inwalidzkim oraz <b>dziecko do 10 lat jadące rowerem pod opieką osoby dorosłej</b>.</p>
<h3>Najważniejsze definicje</h3>
<dl class="defs">
<dt>Droga</dt><dd>Wydzielony pas terenu: jezdnia, pobocze, chodnik, droga dla pieszych lub dla rowerów, łącznie z torowiskiem tramwajowym w jej obrębie.</dd>
<dt>Jezdnia</dt><dd>Część drogi przeznaczona do ruchu pojazdów. Torowisko wydzielone z jezdni nie jest jezdnią.</dd>
<dt>Pas ruchu</dt><dd>Podłużny pas jezdni wystarczający do ruchu jednego rzędu pojazdów wielośladowych, oznaczony lub nieoznaczony.</dd>
<dt>Pobocze</dt><dd>Część drogi przyległa do jezdni, która może być przeznaczona do ruchu pieszych lub niektórych pojazdów, do postoju lub do zatrzymania.</dd>
<dt>Skrzyżowanie</dt><dd>Przecięcie się w jednym poziomie dróg mających jezdnię, ich połączenie lub rozwidlenie, łącznie z powierzchniami utworzonymi przez te przecięcia. <b>Wyjazd z posesji, stacji paliw czy drogi wewnętrznej nie jest skrzyżowaniem.</b> Taki wyjazd jest włączaniem się do ruchu.</dd>
<dt>Obszar zabudowany</dt><dd>Obszar zabudowany oznaczony znakami D-42 (początek) i D-43 (koniec). O obszarze decyduje znak, a nie to, czy wokół stoją budynki.</dd>
<dt>Strefa zamieszkania</dt><dd>Obszar oznaczony znakami D-40/D-41. Pieszy korzysta z całej szerokości drogi i ma pierwszeństwo przed pojazdami. Prędkość wynosi najwyżej 20 km/h, a postój jest dozwolony tylko w wyznaczonych miejscach.</dd>
<dt>Strefa ruchu</dt><dd>Obszar obejmujący co najmniej jedną drogę wewnętrzną (np. parking centrum handlowego), oznaczony znakami D-52/D-53. Obowiązują w nim przepisy ruchu drogowego.</dd>
<dt>Droga wewnętrzna</dt><dd>Np. osiedlowa lub zakładowa, oznaczona znakami D-46/D-47. Wyjazd z niej na drogę publiczną jest włączaniem się do ruchu.</dd>
<dt>Pojazd uprzywilejowany</dt><dd>Pojazd uprzywilejowany wysyła <b>jednocześnie</b> niebieskie sygnały świetlne błyskowe i sygnały dźwiękowe o zmiennym tonie oraz jedzie z włączonymi światłami mijania lub drogowymi. Same niebieskie światła bez dźwięku nie czynią pojazdu uprzywilejowanym. Wyjątkiem jest kolumna pojazdów uprzywilejowanych.</dd>
<dt>Wyprzedzanie</dt><dd>Przejeżdżanie obok pojazdu lub uczestnika ruchu, który porusza się w tym samym kierunku.</dd>
<dt>Wymijanie</dt><dd>Przejeżdżanie obok uczestnika ruchu, który porusza się w kierunku przeciwnym.</dd>
<dt>Omijanie</dt><dd>Przejeżdżanie obok pojazdu lub uczestnika ruchu, który się nie porusza, albo obok przeszkody.</dd>
<dt>Zatrzymanie</dt><dd>Unieruchomienie pojazdu niewynikające z warunków lub przepisów ruchu na czas <b>nie dłuższy niż 1 minuta</b>. Każde unieruchomienie wynikające z warunków lub przepisów ruchu (korek, czerwone światło) też jest zatrzymaniem.</dd>
<dt>Postój</dt><dd>Unieruchomienie pojazdu niewynikające z warunków lub przepisów ruchu, trwające <b>dłużej niż 1 minutę</b>.</dd>
<dt>Ustąpienie pierwszeństwa</dt><dd>Powstrzymanie się od ruchu, jeżeli mógłby on zmusić innego kierującego do zmiany kierunku lub pasa ruchu albo do istotnej zmiany prędkości, a pieszego do zatrzymania się, zwolnienia lub przyspieszenia kroku.</dd>
<dt>Dopuszczalna masa całkowita (DMC)</dt><dd>Największa masa pojazdu z ładunkiem i osobami, dopuszczona do ruchu. Jest wpisana w dowodzie rejestracyjnym.</dd>
<dt>Rzeczywista masa całkowita</dt><dd>Masa pojazdu z ładunkiem i osobami w danej chwili.</dd>
<dt>Hulajnoga elektryczna</dt><dd>Jednośladowy pojazd z kierownicą i silnikiem elektrycznym, którego konstrukcja ogranicza prędkość do 20 km/h.</dd>
<dt>Urządzenie transportu osobistego (UTO)</dt><dd>Np. deskorolka elektryczna, segway, monocykl. Pojazd bez siedzenia i pedałów, z napędem elektrycznym, o konstrukcyjnej prędkości do 20 km/h.</dd>
</dl>
`
    },
    {
      id: 'kierujacy', icon: '🪪', title: 'Prawa i obowiązki kierującego',
      sub: 'Uprawnienia, dokumenty, stan pojazdu, kontrola drogowa',
      html: `
<h3>Kto może kierować samochodem (kat. B)</h3>
<ul>
<li>Osoba z <b>prawem jazdy kategorii B</b>. Kategorię B można uzyskać od 18 lat. Zasady dotyczące 17-latków jeżdżących z opiekunem sprawdzaj w aktualnych przepisach.</li>
<li>Kategoria B uprawnia do kierowania:
<ul>
<li>samochodem o DMC do 3,5 t (z wyjątkiem autobusu i motocykla), z przyczepą lekką o DMC do 750 kg;</li>
<li>zespołem z cięższą przyczepą, jeśli łączna DMC zespołu nie przekracza 3,5 t;</li>
<li>ciągnikiem rolniczym, pojazdem wolnobieżnym, motorowerem i czterokołowcem.</li>
</ul></li>
<li>Kod <b>96</b> w prawie jazdy pozwala prowadzić zespół o łącznej DMC do 4,25 t. Do cięższych zespołów potrzebna jest kategoria <b>B+E</b>.</li>
<li>Po co najmniej 3 latach posiadania kat. B możesz w Polsce prowadzić motocykl do 125 cm³, mocy 11 kW i stosunku mocy do masy 0,1 kW/kg.</li>
</ul>
<h3>Okres próbny (młody kierowca)</h3>
<ul>
<li>Trwa <b>2 lata</b> od wydania pierwszego prawa jazdy.</li>
<li>Przez pierwsze <b>8 miesięcy</b> obowiązują niższe limity prędkości: <b>50 km/h</b> w obszarze zabudowanym, <b>80 km/h</b> poza nim, <b>100 km/h</b> na autostradzie i drodze ekspresowej.</li>
<li>Przez pierwsze 8 miesięcy samochód trzeba oznaczyć znakiem <b>„zielony listek”</b>.</li>
<li>W pierwszym roku limit punktów karnych wynosi <b>20</b> (zamiast 24). Jego przekroczenie oznacza cofnięcie uprawnień.</li>
<li>Popełnienie poważnych naruszeń w okresie próbnym skutkuje m.in. kursem reedukacyjnym, przedłużeniem okresu próbnego albo cofnięciem uprawnień.</li>
</ul>
<div class="box warn">Szczegóły obowiązków w okresie próbnym (dodatkowe szkolenia, ograniczenia) były w ostatnich latach zmieniane. Sprawdź aktualne brzmienie ustawy o kierujących pojazdami.</div>
<h3>Dokumenty</h3>
<ul>
<li>Od 2018 r. <b>nie musisz wozić dowodu rejestracyjnego ani polisy OC</b>. Policja sprawdza te dane w Centralnej Ewidencji Pojazdów (CEP) i w Ubezpieczeniowym Funduszu Gwarancyjnym (UFG).</li>
<li>Uprawnienia Policja sprawdza w Centralnej Ewidencji Kierowców (CEK). Możesz też okazać <b>mPrawo jazdy</b> w aplikacji mObywatel. Za granicą potrzebny jest fizyczny dokument.</li>
<li>Gdy przepisy tego wymagają, musisz mieć przy sobie dokumenty dotyczące przewozu, np. ładunku nienormatywnego.</li>
</ul>
<h3>Obowiązki wobec pojazdu</h3>
<ul>
<li>Pojazd musi być <b>sprawny technicznie</b>, mieć ważne <b>badanie techniczne</b> i <b>obowiązkowe ubezpieczenie OC</b>. Kara za brak OC jest wysoka i zależy od płacy minimalnej.</li>
<li>Badania techniczne samochodu osobowego: pierwsze przed upływem <b>3 lat</b> od pierwszej rejestracji, drugie przed upływem <b>2 lat</b> od niego, potem <b>co roku</b> (schemat 3-2-1). Samochód z instalacją gazową bada się <b>co roku</b>.</li>
<li>Obowiązkowe wyposażenie samochodu osobowego: <b>gaśnica</b> i <b>trójkąt ostrzegawczy</b>. Apteczka nie jest obowiązkowa w samochodzie prywatnym, ale bardzo ją zalecamy. Obowiązkowa jest w autobusach, taksówkach i samochodach nauki jazdy.</li>
<li>Minimalna głębokość bieżnika opony samochodu osobowego to <b>1,6 mm</b>. Na jednej osi muszą być opony tego samego rozmiaru i rodzaju bieżnika. Opony zimowe w Polsce nie są obowiązkowe, ale znak C-18 może nakazać łańcuchy przeciwśnieżne.</li>
<li>Szyby nie mogą ograniczać widoczności. Tablice rejestracyjne muszą być czytelne, a światła sprawne.</li>
</ul>
<h3>Zakazy dla kierującego (art. 45 i inne)</h3>
<ul>
<li>Kierowanie pojazdem w stanie <b>po użyciu alkoholu</b>, w stanie nietrzeźwości lub pod wpływem środka działającego podobnie do alkoholu.</li>
<li>Korzystanie podczas jazdy z <b>telefonu wymagającego trzymania słuchawki lub mikrofonu w ręku</b>. Zestaw głośnomówiący jest dozwolony.</li>
<li>Kierowanie pojazdem, gdy stan zdrowia, zmęczenie lub leki mogą zagrażać bezpieczeństwu.</li>
<li>Pozostawianie w pojeździe <b>dziecka do lat 7</b> bez opieki osoby w wieku powyżej 7 lat.</li>
<li>Pozostawianie <b>pracującego silnika na postoju</b> w obszarze zabudowanym dłużej niż 1 minutę. Dotyczy też zbędnej emisji spalin i nadmiernego hałasu.</li>
<li>Otwieranie drzwi pojazdu, pozostawianie ich otwartych lub wysiadanie bez upewnienia się, że nie spowoduje to zagrożenia.</li>
<li>Pozostawianie pojazdu bez zabezpieczenia przed uruchomieniem przez osobę niepowołaną.</li>
</ul>
<h3>Kontrola drogowa — Twoje prawa i obowiązki</h3>
<ul>
<li>Musisz się <b>zatrzymać na sygnał</b> osoby uprawnionej. Sygnał może być dany ręką, tarczą do zatrzymywania, latarką z czerwonym światłem, z radiowozu (sygnały świetlne i dźwiękowe) albo napisem „STOP POLICJA”. Ucieczka przed kontrolą jest <b>przestępstwem</b> (art. 178b kk).</li>
<li>Masz prawo poznać <b>tożsamość kontrolującego</b> (stopień, nazwisko, legitymacja służbowa) oraz <b>przyczynę kontroli</b>.</li>
<li>Gdy zostaniesz zatrzymany, pozostań w pojeździe, chyba że kontrolujący poleci inaczej. Na jego polecenie wyłącz silnik. Trzymaj ręce widoczne.</li>
<li>Możesz <b>odmówić przyjęcia mandatu</b>. Wtedy sprawa trafia do sądu jako wniosek o ukaranie. Przyjęty mandat staje się prawomocny. Sąd może go uchylić na wniosek złożony w ciągu <b>7 dni</b>, jeśli czyn nie był wykroczeniem.</li>
<li>Na polecenie Policji musisz poddać się badaniu na zawartość alkoholu lub środków odurzających.</li>
</ul>
`
    },
    {
      id: 'predkosc', icon: '🚦', title: 'Prędkość i odległość między pojazdami',
      sub: 'Limity prędkości, prędkość bezpieczna, odstęp',
      html: `
<h3>Prędkość bezpieczna (art. 19)</h3>
<p>Kierujący musi jechać z prędkością, która zapewnia <b>panowanie nad pojazdem</b>, uwzględniając:</p>
<ul>
<li>rzeźbę terenu;</li>
<li>stan i widoczność drogi;</li>
<li>stan i ładunek pojazdu;</li>
<li>warunki atmosferyczne i natężenie ruchu.</li>
</ul>
<p>Limit ze znaku to <b>górna granica</b>, a nie prędkość zalecana. We mgle czy na oblodzonej jezdni prędkość bezpieczna może być dużo niższa.</p>
<p>Nie wolno też <b>bez uzasadnionej przyczyny jechać tak wolno</b>, że utrudnia to jazdę innym. Nie wolno gwałtownie hamować, jeśli nie wymaga tego bezpieczeństwo.</p>
<h3>Dopuszczalne prędkości (art. 20): samochód osobowy, motocykl, samochód ciężarowy do 3,5 t</h3>
<table class="tbl">
<tr><th>Gdzie</th><th>Limit</th></tr>
<tr><td>Obszar zabudowany (całą dobę)</td><td><b>50 km/h</b></td></tr>
<tr><td>Strefa zamieszkania</td><td><b>20 km/h</b></td></tr>
<tr><td>Autostrada</td><td><b>140 km/h</b></td></tr>
<tr><td>Droga ekspresowa dwujezdniowa</td><td><b>120 km/h</b></td></tr>
<tr><td>Droga ekspresowa jednojezdniowa</td><td><b>100 km/h</b></td></tr>
<tr><td>Droga dwujezdniowa z co najmniej 2 pasami ruchu w każdym kierunku (poza obszarem zabudowanym)</td><td><b>100 km/h</b></td></tr>
<tr><td>Pozostałe drogi poza obszarem zabudowanym</td><td><b>90 km/h</b></td></tr>
</table>
<h3>Inne pojazdy i sytuacje</h3>
<table class="tbl">
<tr><th>Pojazd / sytuacja</th><th>Limit poza obszarem zabudowanym</th></tr>
<tr><td>Samochód osobowy z przyczepą</td><td>80 km/h na autostradzie i drodze ekspresowej, 70 km/h na pozostałych drogach</td></tr>
<tr><td>Samochód ciężarowy o DMC &gt; 3,5 t</td><td>80 km/h na autostradzie i drodze ekspresowej, 70 km/h na pozostałych drogach</td></tr>
<tr><td>Holowanie pojazdu</td><td>60 km/h (w obszarze zabudowanym 30 km/h)</td></tr>
<tr><td>Motorower</td><td>45 km/h</td></tr>
<tr><td>Ciągnik rolniczy, pojazd wolnobieżny</td><td>30 km/h</td></tr>
<tr><td>Młody kierowca (pierwsze 8 miesięcy)</td><td>80 km/h, na autostradzie i drodze ekspresowej 100 km/h, w obszarze zabudowanym 50 km/h</td></tr>
</table>
<div class="box rule"><b>Znak B-33</b> (ograniczenie prędkości) obowiązuje od miejsca ustawienia do <b>najbliższego skrzyżowania</b>. Wcześniej może go odwołać znak B-34, B-42 albo inny znak B-33. Znaki B-43/B-44 wyznaczają <b>strefę</b> ograniczonej prędkości, która obowiązuje na całym obszarze strefy.</div>
${signs(['B-33', 'ograniczenie prędkości'], ['B-34', 'koniec ograniczenia prędkości'], ['B-42', 'koniec zakazów'], ['D-42', 'obszar zabudowany'], ['D-43', 'koniec obszaru zabudowanego'])}
<h3>Odległość od poprzedzającego pojazdu</h3>
<ul>
<li>Utrzymuj <b>odstęp niezbędny do uniknięcia zderzenia</b>, gdy pojazd przed Tobą zahamuje lub się zatrzyma.</li>
<li>Na <b>autostradzie i drodze ekspresowej</b> odstęp w metrach musi wynosić co najmniej <b>połowę prędkości</b> w km/h. Przy 120 km/h to co najmniej 60 m.</li>
<li>Praktyczna metoda to reguła <b>2 sekund</b>, a na mokrej lub śliskiej nawierzchni co najmniej 3–4 sekund. Wybierz punkt odniesienia i policz czas od chwili, gdy minie go poprzedzający pojazd.</li>
</ul>
<h3>Fizyka hamowania</h3>
<ul>
<li><b>Droga zatrzymania</b> = droga przebyta w czasie reakcji + droga hamowania.</li>
<li>Czas reakcji wypoczętego kierowcy to ok. <b>1 sekundy</b>. Przy 90 km/h przejedziesz w tym czasie 25 m, zanim w ogóle zaczniesz hamować.</li>
<li>Droga hamowania rośnie z <b>kwadratem prędkości</b>. Dwa razy większa prędkość oznacza około cztery razy dłuższą drogę hamowania.</li>
<li>Na mokrej nawierzchni droga hamowania jest wyraźnie dłuższa. Na lodzie może być kilkukrotnie dłuższa niż na suchym asfalcie.</li>
</ul>
`
    },
    {
      id: 'manewry', icon: '↪️', title: 'Włączanie się do ruchu, pasy i manewry',
      sub: 'Ruch prawostronny, zmiana pasa, suwak, korytarz życia, zawracanie, cofanie',
      html: `
<h3>Ruch prawostronny i wybór pasa</h3>
<ul>
<li>Jedź <b>możliwie blisko prawej krawędzi jezdni</b>.</li>
<li>Na jezdni z co najmniej dwoma pasami w jednym kierunku:
<ul>
<li><b>poza obszarem zabudowanym</b> jedź prawym pasem, a pozostałe wykorzystuj do wyprzedzania, omijania i skrętu w lewo;</li>
<li><b>w obszarze zabudowanym</b> możesz jechać dowolnym pasem.</li>
</ul></li>
<li>Jeśli pasy są wyznaczone, jedź <b>w obrębie pasa</b>. Nie jedź po linii rozdzielającej pasy.</li>
<li>Linii ciągłej (P-2) nie wolno przekraczać ani po niej jechać. Linię przerywaną (P-1) można przekraczać.</li>
</ul>
${signs(['P-1', 'linia przerywana – wolno przekraczać'], ['P-2', 'linia ciągła – nie wolno przekraczać'], ['P-3a', 'linia jednostronnie przekraczalna'], ['P-4', 'linia podwójna ciągła'])}
<div class="box tip">Linia jednostronnie przekraczalna (P-3a/P-3b): możesz ją przekroczyć tylko wtedy, gdy <b>przerywana część jest po Twojej stronie</b>.</div>
<h3>Włączanie się do ruchu (art. 17)</h3>
<p>Kierujący włączający się do ruchu musi zachować <b>szczególną ostrożność</b> i <b>ustąpić pierwszeństwa</b> pieszym, pojazdom i innym uczestnikom ruchu. Włączanie się do ruchu to m.in.:</p>
<ul>
<li>ruszanie po postoju lub zatrzymaniu, które nie wynikało z warunków ruchu, np. z miejsca parkingowego, z pobocza lub z zatoki;</li>
<li>wjazd na drogę z posesji (nieruchomości), z drogi wewnętrznej, ze stacji paliw, z pola, z obiektu przydrożnego;</li>
<li>wyjazd ze strefy zamieszkania.</li>
</ul>
<h3>Zmiana pasa ruchu i kierunku jazdy (art. 22)</h3>
<ul>
<li>Zmieniając pas, <b>ustąp pierwszeństwa pojazdom jadącym po pasie, na który wjeżdżasz</b>.</li>
<li>Jeśli dwa pojazdy z sąsiednich pasów jednocześnie zmieniają pas na ten sam, <b>ustępujesz pojazdowi znajdującemu się po Twojej prawej stronie</b>.</li>
<li>Zamiar zmiany kierunku lub pasa sygnalizuj <b>zawczasu</b> kierunkowskazem i wyłącz go zaraz po manewrze.</li>
<li><b>Skręt w prawo</b>: trzymaj się możliwie blisko prawej krawędzi jezdni.</li>
<li><b>Skręt w lewo</b>: zbliż się do środka jezdni, a na drodze jednokierunkowej do lewej krawędzi. Ustąp pojazdom jadącym z przeciwka na wprost lub skręcającym w prawo.</li>
<li>Skręcając, ustąp pierwszeństwa <b>pieszym</b> przechodzącym przez jezdnię, w którą wjeżdżasz, oraz <b>rowerom</b> jadącym na wprost po jezdni, pasie dla rowerów lub drodze dla rowerów.</li>
</ul>
<h3>Jazda „na suwak”</h3>
<div class="box rule">Gdy zmniejsza się liczba pasów albo pas jest zajęty przez przeszkodę, kierujący na pasie bez przeszkód musi <b>bezpośrednio przed zwężeniem</b> umożliwić jazdę na przemian pojazdom z kończącego się pasa. Pojazdy na kończącym się pasie dojeżdżają do samego końca pasa, a nie zjeżdżają wcześniej.</div>
<h3>Korytarz życia</h3>
<p>Gdy na drodze z co najmniej dwoma pasami w jednym kierunku tworzy się <b>zator</b>, kierujący muszą utworzyć korytarz dla pojazdów uprzywilejowanych, nawet jeśli jeszcze ich nie widać:</p>
<ul>
<li>na <b>skrajnie lewym pasie</b> zjedź możliwie blisko <b>lewej</b> krawędzi;</li>
<li>na <b>pozostałych pasach</b> zjedź możliwie blisko <b>prawej</b> krawędzi.</li>
</ul>
<p>Wolna przestrzeń powstaje między skrajnie lewym pasem a pasem sąsiednim. Na drodze z jednym pasem w danym kierunku zjedź jak najbardziej w prawo, w razie potrzeby na pobocze. Nie wjeżdżaj w korytarz za pojazdem uprzywilejowanym.</p>
<h3>Zawracanie</h3>
<ul>
<li>Zawracając, ustąp pierwszeństwa innym pojazdom i uczestnikom ruchu.</li>
<li>Zawracanie jest zabronione m.in. na <b>autostradzie</b>, na <b>drodze ekspresowej</b> i w <b>tunelu</b>. Zabrania go też znak B-23.</li>
</ul>
<h3>Cofanie</h3>
<ul>
<li>Cofając, musisz <b>ustąpić pierwszeństwa</b> innemu pojazdowi lub uczestnikowi ruchu. Zachowaj szczególną ostrożność i upewnij się, że nie spowodujesz zagrożenia.</li>
<li>Jeśli nie widzisz, co jest za pojazdem, zapewnij sobie pomoc innej osoby.</li>
<li>Cofanie jest zabronione m.in. na <b>autostradzie</b>, na <b>drodze ekspresowej</b> i w <b>tunelu</b>.</li>
</ul>
${signs(['B-21', 'zakaz skręcania w lewo'], ['B-22', 'zakaz skręcania w prawo'], ['B-23', 'zakaz zawracania'], ['C-2', 'nakaz jazdy w prawo za znakiem'], ['C-4', 'nakaz jazdy w lewo za znakiem'], ['C-5', 'nakaz jazdy prosto'], ['C-9', 'nakaz jazdy z prawej strony znaku'], ['D-3', 'droga jednokierunkowa'], ['D-4a', 'droga bez przejazdu'])}
`
    },
    {
      id: 'pierwszenstwo', icon: '✋', title: 'Pierwszeństwo i skrzyżowania',
      sub: 'Prawa ręka, tramwaj, ronda, sygnalizacja, policjant, pojazdy uprzywilejowane',
      html: `
<h3>Zasady na skrzyżowaniu (art. 25)</h3>
<ul>
<li>Zbliżając się do skrzyżowania, zachowaj <b>szczególną ostrożność</b>.</li>
<li><b>Skrzyżowanie równorzędne</b> (bez znaków i sygnalizacji): ustąp pierwszeństwa pojazdom <b>nadjeżdżającym z prawej strony</b>.</li>
<li>Skręcając w lewo, ustąp też pojazdom jadącym <b>z przeciwka na wprost lub w prawo</b>.</li>
<li><b>Tramwaj</b> na skrzyżowaniu równorzędnym ma pierwszeństwo przed pojazdami bezszynowymi, bez względu na to, z której strony nadjeżdża. Znaki mogą to zmienić, np. gdy tramwaj jedzie drogą podporządkowaną.</li>
<li>Wjeżdżając z <b>drogi gruntowej na drogę o nawierzchni twardej</b>, ustępujesz pojazdom na tej drodze.</li>
<li><b>Nie wjeżdżaj na skrzyżowanie</b>, jeśli za nim nie ma miejsca na kontynuowanie jazdy, nawet przy zielonym świetle.</li>
</ul>
<h3>Znaki regulujące pierwszeństwo</h3>
${signs(['A-7', 'ustąp pierwszeństwa'], ['B-20', 'stop – zatrzymaj się i ustąp'], ['D-1', 'droga z pierwszeństwem'], ['D-2', 'koniec drogi z pierwszeństwem'], ['A-5', 'skrzyżowanie dróg (równorzędne)'], ['A-6a', 'skrzyżowanie z drogą podporządkowaną'])}
<ul>
<li><b>A-7 „ustąp pierwszeństwa”</b>: ustąp pierwszeństwa na najbliższym skrzyżowaniu. Zatrzymaj się tylko wtedy, gdy to konieczne.</li>
<li><b>B-20 „stop”</b>: zawsze <b>zatrzymaj się całkowicie</b> przed linią zatrzymania (P-12), a gdy jej nie ma, w miejscu, z którego widać drogę. Następnie ustąp pierwszeństwa.</li>
<li><b>D-1 „droga z pierwszeństwem”</b>: masz pierwszeństwo na skrzyżowaniach do znaku D-2. Poza obszarem zabudowanym na drodze oznaczonej D-1 obowiązuje <b>zakaz postoju</b>.</li>
<li>Znaki A-6a–A-6e ostrzegają przed skrzyżowaniem z drogą podporządkowaną. Jedziesz drogą z pierwszeństwem: <b>grubsza linia</b> to Twoja droga.</li>
</ul>
${signs(['P-12', 'linia zatrzymania (przy STOP i światłach)'], ['P-13', 'linia warunkowego zatrzymania (trójkąty, przy A-7)'])}
<h3>Skrzyżowanie o ruchu okrężnym (rondo)</h3>
${signs(['C-12', 'ruch okrężny'], ['A-8', 'skrzyżowanie o ruchu okrężnym'])}
<ul>
<li>Rondo to <b>skrzyżowanie</b>. Gdy wjazd oznaczony jest znakiem <b>A-7 i C-12</b>, wjeżdżający ustępuje pojazdom na rondzie.</li>
<li>Gdy przy wjeździe <b>nie ma znaku A-7</b>, rondo jest <b>skrzyżowaniem równorzędnym</b>. Pierwszeństwo ma wtedy pojazd <b>wjeżdżający z prawej strony</b>, a pojazdy na rondzie muszą mu ustąpić.</li>
<li>Zjeżdżając z ronda, włącz <b>prawy kierunkowskaz</b>. Zmieniając pas na rondzie, sygnalizuj to i ustąp pojazdom na pasie, na który wjeżdżasz.</li>
<li>Na rondzie wolno wyprzedzać. To wyjątek od zakazu wyprzedzania na skrzyżowaniach.</li>
<li>Znaki poziome (strzałki P-8) na pasach przed rondem określają, w jakim kierunku możesz jechać z danego pasa.</li>
</ul>
<h3>Sygnalizacja świetlna</h3>
<table class="tbl">
<tr><th>Sygnał</th><th>Znaczenie</th></tr>
<tr><td>🔴 czerwony</td><td>Zakaz wjazdu za sygnalizator. Zatrzymaj się przed linią P-12, a gdy jej nie ma, przed sygnalizatorem.</td></tr>
<tr><td>🔴🟡 czerwony + żółty</td><td>Za chwilę zapali się zielony. <b>Nadal nie wolno ruszać.</b></td></tr>
<tr><td>🟢 zielony</td><td>Wolno jechać, o ile za skrzyżowaniem jest miejsce. Skręcając, ustąp pieszym i rowerzystom, którzy mają zielone światło.</td></tr>
<tr><td>🟡 żółty</td><td>Zakaz wjazdu za sygnalizator, chyba że jesteś tak blisko, że zatrzymanie wymagałoby gwałtownego hamowania.</td></tr>
<tr><td>🟡 żółty migający</td><td>Zachowaj szczególną ostrożność. Pierwszeństwo regulują znaki, a gdy ich nie ma, zasada prawej ręki.</td></tr>
</table>
<div class="box rule"><b>Zielona strzałka na tabliczce</b> obok czerwonego światła pozwala skręcić w kierunku strzałki. Najpierw jednak musisz się <b>zatrzymać</b> przed sygnalizatorem i <b>ustąpić pierwszeństwa</b> pieszym, rowerzystom i pojazdom, które mają zielone światło.</div>
<p><b>Sygnalizator kierunkowy</b> (z sygnałami w kształcie strzałek) dotyczy tylko kierunku wskazanego strzałką. Zielona strzałka w sygnalizatorze kierunkowym zwykle oznacza, że jazda w tym kierunku jest <b>bezkolizyjna</b>. Mimo to obserwuj drogę.</p>
${signs(['A-29', 'sygnały świetlne'])}
<h3>Polecenia policjanta (osoby kierującej ruchem)</h3>
<ul>
<li>Policjant stoi <b>przodem lub tyłem</b> do Ciebie: znaczy to tyle co <b>czerwone światło</b>, czyli „stój”.</li>
<li>Policjant stoi <b>bokiem</b> do Ciebie: znaczy to tyle co <b>zielone światło</b>, czyli możesz jechać. Skręcając w lewo, ustąp jadącym z przeciwka.</li>
<li><b>Ręka podniesiona pionowo w górę</b>: „uwaga”, tak jak żółte światło. Zaraz zmieni się sygnał.</li>
<li>Polecenia osoby kierującej ruchem są <b>ważniejsze</b> niż światła i znaki.</li>
</ul>
<h3>Pojazdy uprzywilejowane (art. 9)</h3>
<ul>
<li>Na sygnał pojazdu uprzywilejowanego (niebieskie światła i syrena) musisz <b>ułatwić mu przejazd</b>. W razie potrzeby zjedź na prawo, nawet na pobocze, i się zatrzymaj.</li>
<li>Ten obowiązek obowiązuje także wtedy, gdy masz zielone światło lub pierwszeństwo.</li>
<li>Nie jedź bezpośrednio za pojazdem uprzywilejowanym.</li>
</ul>
<h3>Zwężenia i pierwszeństwo przejazdu</h3>
<ul>
<li><b>B-31</b> „pierwszeństwo dla nadjeżdżających z przeciwka”: na zwężonym odcinku <b>ustępujesz</b> pojazdom z przeciwka.</li>
<li><b>D-5</b> „pierwszeństwo na zwężonym odcinku drogi”: to <b>Ty masz pierwszeństwo</b> przed pojazdami z przeciwka.</li>
</ul>
${signs(['D-5', 'pierwszeństwo na zwężonym odcinku'], ['A-20', 'odcinek jezdni o ruchu dwukierunkowym'])}
`
    },
    {
      id: 'wyprzedzanie', icon: '⏩', title: 'Wyprzedzanie, wymijanie, omijanie',
      sub: 'Warunki, zakazy, obowiązki wyprzedzanego',
      html: `
<h3>Zanim zaczniesz wyprzedzać (art. 24)</h3>
<p>Musisz się upewnić, że:</p>
<ul>
<li>masz <b>dostateczną widoczność</b> i <b>wolną przestrzeń</b> do wyprzedzania, bez utrudniania jazdy komukolwiek;</li>
<li>kierujący jadący za Tobą <b>nie rozpoczął już wyprzedzania</b>;</li>
<li>kierujący jadący przed Tobą <b>nie sygnalizował zamiaru wyprzedzania</b> ani zmiany pasa na lewy;</li>
<li>po wyprzedzeniu zdołasz <b>wrócić na pas</b> bez utrudniania jazdy wyprzedzanemu.</li>
</ul>
<ul>
<li>Wyprzedzając, zachowaj <b>bezpieczny odstęp</b> od wyprzedzanego.</li>
<li>Gdy wyprzedzasz <b>rower, motorower, motocykl, hulajnogę elektryczną, UTO lub kolumnę pieszych</b>, odstęp boczny musi wynosić <b>co najmniej 1 m</b>.</li>
</ul>
<h3>Którą stroną</h3>
<ul>
<li>Co do zasady wyprzedzasz <b>lewą stroną</b>.</li>
<li><b>Prawą stroną</b> wolno wyprzedzać pojazd, który sygnalizuje skręt w lewo i zbliża się do środka jezdni (lub do lewej krawędzi na drodze jednokierunkowej).</li>
<li>Prawą stroną wolno też wyprzedzać na drogach z wyznaczonymi pasami ruchu w jednym kierunku: w obszarze zabudowanym na jezdni wielopasowej, a poza nim na drodze jednokierunkowej lub dwujezdniowej z co najmniej 2 pasami w każdą stronę.</li>
<li><b>Pojazd szynowy</b> (tramwaj) wyprzedza się z prawej strony. Na jezdni jednokierunkowej wolno go wyprzedzić także z lewej.</li>
</ul>
<h3>Obowiązki kierującego wyprzedzanym pojazdem</h3>
<ul>
<li><b>Nie wolno zwiększać prędkości.</b></li>
<li>Zjedź możliwie najbardziej w prawo, gdy jest to potrzebne do bezpiecznego wyprzedzania.</li>
</ul>
<h3>Kiedy wyprzedzanie jest zabronione</h3>
<div class="box warn">
<ul>
<li>Przy <b>dojeżdżaniu do wierzchołka wzniesienia</b> i na <b>zakrętach oznaczonych znakami ostrzegawczymi</b>, gdy chodzi o wyprzedzanie pojazdu silnikowego.</li>
<li><b>Na przejściu dla pieszych i bezpośrednio przed nim</b>, z wyjątkiem przejścia, na którym ruch jest kierowany.</li>
<li><b>Na przejeździe dla rowerzystów i bezpośrednio przed nim</b>, z wyjątkiem przejazdu, na którym ruch jest kierowany.</li>
<li><b>Na skrzyżowaniu</b>, z wyjątkiem skrzyżowania o ruchu okrężnym i skrzyżowania, na którym ruch jest kierowany.</li>
<li><b>Na przejeździe kolejowym i tramwajowym oraz bezpośrednio przed nimi</b>.</li>
<li>Gdy obowiązuje znak <b>B-25 „zakaz wyprzedzania”</b>. Zakazuje on wyprzedzania pojazdów silnikowych wielośladowych. Rower, motocykl czy furmankę wolno wyprzedzić. Znak <b>B-26</b> zakazuje wyprzedzania samochodom ciężarowym.</li>
<li>Gdy wymagałoby to przekroczenia <b>linii ciągłej</b> albo wjazdu na nią.</li>
</ul>
</div>
${signs(['B-25', 'zakaz wyprzedzania'], ['A-1', 'niebezpieczny zakręt w prawo'], ['A-2', 'niebezpieczny zakręt w lewo'])}
<p>Znaki B-25 i B-26 obowiązują do <b>najbliższego skrzyżowania</b>, chyba że wcześniej je odwołano znakiem B-27, B-28 lub B-42.</p>
<h3>Wymijanie</h3>
<ul>
<li>Wymijając, zachowaj <b>bezpieczny odstęp</b> i w razie potrzeby zjedź na prawo.</li>
<li>Jeśli wymijanie nie jest możliwe bez zagrożenia, zwolnij, a w razie potrzeby się zatrzymaj.</li>
<li>Od zmierzchu do świtu, gdy oślepiają Cię światła z przeciwka, zwolnij i patrz na prawą krawędź jezdni.</li>
</ul>
<h3>Omijanie</h3>
<ul>
<li>Omijając przeszkodę lub stojący pojazd na swoim pasie, <b>ustąp pierwszeństwa</b> pojazdom jadącym z przeciwka.</li>
<li>Zachowaj bezpieczny odstęp od omijanego pojazdu. Ktoś może z niego wysiadać.</li>
<li><b>Nie wolno omijać pojazdu, który zatrzymał się, aby ustąpić pierwszeństwa pieszemu</b> (art. 26).</li>
</ul>
`
    },
    {
      id: 'piesi', icon: '🚶', title: 'Piesi, rowerzyści i inni niechronieni',
      sub: 'Przejścia, przejazdy, dzieci, hulajnogi, obowiązki pieszych',
      html: `
<h3>Obowiązki kierującego wobec pieszych (art. 26)</h3>
<div class="box rule">Zbliżając się do przejścia dla pieszych, zachowaj <b>szczególną ostrożność</b> i zmniejsz prędkość tak, aby nie narazić pieszego na niebezpieczeństwo. Ustąp pierwszeństwa pieszemu <b>znajdującemu się na przejściu</b> albo <b>wchodzącemu na nie</b>.</div>
<ul>
<li>Nie wolno <b>wyprzedzać pojazdu</b> na przejściu i bezpośrednio przed nim, poza przejściem z ruchem kierowanym.</li>
<li>Nie wolno <b>omijać pojazdu, który jechał w tym samym kierunku i zatrzymał się</b>, aby ustąpić pierwszeństwa pieszemu.</li>
<li>Skręcając w drogę poprzeczną, <b>ustąp pierwszeństwa pieszemu</b> przechodzącemu przez jezdnię drogi, w którą wjeżdżasz, także poza wyznaczonym przejściem.</li>
<li>Przejeżdżając przez <b>chodnik lub drogę dla pieszych</b>, np. przy wjeździe do bramy, ustąp pieszemu.</li>
<li>Przejeżdżając obok <b>stojącego autobusu szkolnego</b> lub pojazdu przewożącego dzieci (oznaczonego tablicą „autobus szkolny” z włączonymi światłami awaryjnymi), zachowaj szczególną ostrożność.</li>
<li>W <b>strefie zamieszkania</b> pieszy może iść całą szerokością drogi i ma pierwszeństwo przed pojazdami.</li>
<li><b>Osoba niewidoma</b> (z białą laską lub z psem przewodnikiem) wymaga szczególnej ostrożności. Gdy wchodzi na jezdnię, zatrzymaj się.</li>
</ul>
${signs(['P-10', 'przejście dla pieszych (zebra)'])}
<h3>Rowerzyści (art. 27)</h3>
<ul>
<li>Zbliżając się do <b>przejazdu dla rowerzystów</b>, zachowaj szczególną ostrożność i ustąp pierwszeństwa rowerowi, który jest na przejeździe.</li>
<li>Skręcając w drogę poprzeczną, ustąp pierwszeństwa rowerowi jadącemu na wprost: po jezdni, pasie ruchu dla rowerów, drodze dla rowerów lub innej części drogi, którą zamierzasz opuścić.</li>
<li>Wyprzedzając rowerzystę, zachowaj odstęp co najmniej <b>1 m</b>.</li>
<li>Rowerzysta może wyprzedzać wolno jadące pojazdy <b>prawą stroną</b>. Pamiętaj o tym, skręcając w prawo, i spójrz w lusterko.</li>
<li><b>Śluza rowerowa</b> to pole przed linią zatrzymania przeznaczone dla rowerów. Samochodem zatrzymuj się przed nią.</li>
</ul>
<h3>Hulajnogi elektryczne i UTO</h3>
<ul>
<li>Prędkość konstrukcyjna wynosi najwyżej <b>20 km/h</b>. Nie wolno przewozić innej osoby ani ładunku.</li>
<li>Osoba w wieku <b>10–18 lat</b> musi mieć kartę rowerową lub prawo jazdy kat. AM, A1, B1 albo T. Dziecko poniżej 10 lat może jechać hulajnogą tylko w strefie zamieszkania pod opieką osoby dorosłej.</li>
<li>Hulajnoga jeździ drogą dla rowerów, gdy taka jest. Gdy jej nie ma, jeździ jezdnią, jeśli limit prędkości wynosi tam do 30 km/h. W pozostałych przypadkach jeździ chodnikiem z prędkością zbliżoną do pieszego i ustępuje pieszym.</li>
</ul>
<h3>Obowiązki pieszych (dla kierowcy też ważne)</h3>
<ul>
<li>Pieszy korzysta z chodnika lub drogi dla pieszych. Gdy ich nie ma, idzie <b>lewą stroną drogi</b> (poboczem lub jezdnią), twarzą do nadjeżdżających pojazdów.</li>
<li><b>Poza obszarem zabudowanym</b> pieszy idący po drodze <b>po zmierzchu</b> musi używać <b>elementów odblaskowych</b> widocznych dla innych. Nie dotyczy to drogi przeznaczonej tylko dla pieszych ani chodnika.</li>
<li>Pieszy nie może wchodzić na jezdnię bezpośrednio przed jadący pojazd, także na przejściu. Na przejściu nie może <b>korzystać z telefonu</b> ani innego urządzenia w sposób, który ogranicza obserwację drogi.</li>
<li>Pieszemu nie wolno przechodzić przez jezdnię w miejscu o ograniczonej widoczności ani zza pojazdu lub przeszkody.</li>
</ul>
<h3>Dzieci</h3>
<ul>
<li>Dziecko <b>do 7 lat</b> może korzystać z drogi tylko pod opieką osoby, która ukończyła 10 lat. Nie dotyczy to strefy zamieszkania ani drogi przeznaczonej tylko dla pieszych.</li>
<li>Widząc dzieci przy drodze, stosuj zasadę <b>ograniczonego zaufania</b>, bo mogą zachować się nieprzewidywalnie.</li>
<li>Znak A-17 „dzieci” ostrzega przed miejscem, gdzie dzieci często przebywają, np. przed szkołą.</li>
</ul>
`
    },
    {
      id: 'kolej', icon: '🚂', title: 'Przejazdy kolejowe i tramwaje',
      sub: 'Zapory, sygnały, unieruchomienie na torach, torowiska',
      html: `
<h3>Zbliżanie się do przejazdu kolejowego (art. 28)</h3>
<ul>
<li>Zachowaj <b>szczególną ostrożność</b>. Przed przejazdem bez zapór lub półzapór upewnij się, że nie zbliża się pociąg ani inny pojazd szynowy.</li>
<li>Jeśli z jakiegoś powodu nie widzisz, czy jedzie pociąg, musisz się zatrzymać.</li>
<li>Przy znaku <b>B-20 STOP</b> przed przejazdem zawsze zatrzymaj się całkowicie.</li>
<li>Nie wolno <b>wyprzedzać</b> na przejeździe ani bezpośrednio przed nim. Nie wolno się <b>zatrzymywać</b> na przejeździe ani w odległości mniejszej niż <b>10 m</b> od niego.</li>
</ul>
<h3>Zakaz wjazdu na przejazd</h3>
<div class="box warn">
<ul>
<li>Gdy <b>zapory lub półzapory są opuszczone</b>, gdy zaczęło się ich opuszczanie lub gdy podnoszenie się nie zakończyło.</li>
<li>Gdy sygnalizator nadaje <b>czerwone migające światła</b> (dwa światła migające na przemian).</li>
<li>Gdy pracownik kolei daje sygnał do zatrzymania.</li>
<li>Gdy po drugiej stronie przejazdu <b>nie ma miejsca</b>, żeby zjechać z niego i jechać dalej.</li>
</ul>
</div>
<h3>Oznakowanie</h3>
<ul>
<li><b>A-9</b> ostrzega przed przejazdem kolejowym <b>z zaporami</b>, a <b>A-10</b> przed przejazdem <b>bez zapór</b>.</li>
<li><b>G-1a–G-1f</b> to słupki wskaźnikowe przed przejazdem: z trzema, dwiema i jedną kreską. Pokazują, ile zostało do przejazdu.</li>
<li><b>G-3</b> to krzyż św. Andrzeja przed przejazdem jednotorowym, a <b>G-4</b> przed wielotorowym. Stoją bezpośrednio przed przejazdem bez zapór.</li>
<li>Na krzyżu św. Andrzeja jest żółta naklejka z <b>indywidualnym numerem przejazdu</b> i numerem alarmowym 112. Podaj ten numer, gdy zgłaszasz zagrożenie na przejeździe.</li>
</ul>
<h3>Unieruchomienie pojazdu na przejeździe</h3>
<ol class="steps">
<li>Natychmiast <b>usuń pojazd</b> z torów. Jeśli to niemożliwe, <b>wyprowadź pasażerów</b> w bezpieczne miejsce.</li>
<li><b>Zadzwoń pod 112</b> i podaj numer z naklejki na krzyżu św. Andrzeja. Dyżurny może wstrzymać ruch pociągów.</li>
<li>W miarę możliwości ostrzeż maszynistę, idąc wzdłuż torów naprzeciw nadjeżdżającemu pociągowi.</li>
</ol>
<h3>Tramwaje</h3>
<ul>
<li>Na skrzyżowaniu równorzędnym tramwaj ma <b>pierwszeństwo</b> przed pojazdami bezszynowymi.</li>
<li>Tramwaj wyprzedza się z <b>prawej strony</b>. Nie wolno wyprzedzać na przejeździe tramwajowym ani bezpośrednio przed nim.</li>
<li>Przejeżdżając obok <b>przystanku tramwajowego bez wysepki</b>, przy którym stoi tramwaj, <b>ustąp pierwszeństwa pieszym</b> idącym do tramwaju lub od niego.</li>
<li>Po torowisku wydzielonym z jezdni nie wolno jeździć, poza przejazdem przez nie.</li>
</ul>
`
    },
    {
      id: 'postoj', icon: '🅿️', title: 'Zatrzymanie, postój, parkowanie',
      sub: 'Gdzie nie wolno stanąć, parkowanie na chodniku, znaki',
      html: `
<h3>Zasady ogólne (art. 46)</h3>
<ul>
<li>Zatrzymanie i postój są dozwolone tylko tam, gdzie nie spowodują zagrożenia ani utrudnienia ruchu, a pojazd będzie <b>widoczny z dostatecznej odległości</b>.</li>
<li>Stań <b>możliwie blisko prawej krawędzi jezdni</b> i równolegle do niej. Na drodze jednokierunkowej możesz stanąć także przy lewej krawędzi.</li>
<li>Poza obszarem zabudowanym zatrzymuj się poza jezdnią, jeśli to możliwe.</li>
<li>Opuszczając pojazd, <b>wyłącz silnik</b>, zaciągnij hamulec postojowy i zabezpiecz pojazd przed uruchomieniem. Na pochyłości dodatkowo włącz bieg i skręć koła.</li>
</ul>
<h3>Zakaz zatrzymania (art. 49 ust. 1)</h3>
<div class="box warn">
<ul>
<li>Na <b>przejeździe kolejowym</b>, <b>przejeździe tramwajowym</b>, <b>skrzyżowaniu</b> oraz w odległości <b>mniejszej niż 10 m</b> od nich. Wyjątek: pojazd oczekuje na wjazd lub przejazd.</li>
<li>Na <b>przejściu dla pieszych</b>, <b>przejeździe dla rowerzystów</b> oraz <b>mniej niż 10 m przed nimi</b>. Na drodze dwukierunkowej o dwóch pasach ruchu zakaz obowiązuje także <b>za</b> nimi.</li>
<li>W <b>tunelu</b>, na <b>moście</b> lub <b>wiadukcie</b>.</li>
<li>Na jezdni wzdłuż <b>linii ciągłej</b> i w pobliżu jej końców, jeśli inni musieliby na nią najeżdżać.</li>
<li>W odległości <b>mniejszej niż 10 m</b> od przedniej strony znaku lub sygnalizatora, jeśli pojazd by go zasłonił.</li>
<li>W odległości <b>mniejszej niż 15 m</b> od słupka lub tablicy oznaczającej <b>przystanek</b>. Na przystanku z zatoką zakaz obejmuje całą długość zatoki.</li>
<li>Na <b>drodze dla rowerów</b>, na pasie ruchu dla rowerów i na pasie między jezdniami.</li>
<li>Na <b>autostradzie</b> i <b>drodze ekspresowej</b> poza miejscami do tego przeznaczonymi.</li>
</ul>
</div>
<h3>Zakaz postoju (wybrane przypadki)</h3>
<ul>
<li>Poza obszarem zabudowanym na drodze oznaczonej znakiem <b>D-1</b> (droga z pierwszeństwem).</li>
<li>W <b>strefie zamieszkania</b> poza miejscami wyznaczonymi.</li>
<li>Przed wjazdem do bramy, garażu lub na drogę wewnętrzną oraz w miejscu utrudniającym wjazd lub wyjazd.</li>
<li>W miejscu, w którym utrudniałoby to wyjazd innemu prawidłowo zaparkowanemu pojazdowi.</li>
<li>W miejscu oznaczonym <b>kopertą</b> dla osoby niepełnosprawnej (P-24), jeśli nie masz karty parkingowej.</li>
</ul>
<h3>Parkowanie na chodniku (art. 47)</h3>
<p>Na chodniku można zatrzymać się lub stanąć częściowo lub w całości samochodem o <b>DMC do 2,5 t</b>, jeśli spełnione są wszystkie warunki:</p>
<ul>
<li>na danym odcinku nie obowiązuje zakaz zatrzymania lub postoju;</li>
<li>dla pieszych zostaje co najmniej <b>1,5 m</b> szerokości chodnika i pojazd nie utrudnia im ruchu;</li>
<li>parkujesz <b>kołami jednego boku</b> lub <b>przedniej osi</b> przy krawędzi jezdni. Całym pojazdem możesz stanąć tylko przy krawędzi chodnika dalszej od jezdni, gdy szerokość chodnika na to pozwala.</li>
</ul>
<div class="box warn">Zasady parkowania na chodnikach są przedmiotem prac legislacyjnych. W wielu miastach parkowanie na chodniku dopuszczają tylko znaki. Sprawdzaj oznakowanie i aktualny stan prawny.</div>
<h3>Znaki zakazu zatrzymywania i postoju</h3>
${signs(['B-36', 'zakaz zatrzymywania się'], ['B-35', 'zakaz postoju'], ['B-37', 'zakaz postoju w dni nieparzyste'], ['B-38', 'zakaz postoju w dni parzyste'])}
<ul>
<li><b>B-36</b> zabrania zatrzymania i postoju, a <b>B-35</b> tylko postoju. Pod B-35 zatrzymanie do 1 minuty jest dozwolone.</li>
<li>Oba znaki dotyczą <b>strony drogi, po której stoją</b>, i obowiązują do najbliższego skrzyżowania, chyba że tabliczka wskazuje inaczej.</li>
<li>Tabliczka <b>T-24</b> (z holownikiem) informuje, że pojazd może zostać <b>usunięty na koszt właściciela</b>.</li>
<li>Znaki <b>B-39/B-40</b> wyznaczają <b>strefę ograniczonego postoju</b>, np. postój tylko w wyznaczonych miejscach.</li>
</ul>
`
    },
    {
      id: 'swiatla', icon: '💡', title: 'Światła i sygnały pojazdu',
      sub: 'Mijania, drogowe, przeciwmgłowe, awaryjne, sygnał dźwiękowy',
      html: `
<h3>Światła podczas jazdy (art. 51)</h3>
<ul>
<li><b>Przez całą dobę</b> jedź na włączonych <b>światłach mijania</b>.</li>
<li>W dzień, przy normalnej przejrzystości powietrza, zamiast świateł mijania możesz używać <b>świateł do jazdy dziennej</b>. Pamiętaj, że zwykle nie zapalają one świateł z tyłu pojazdu.</li>
<li>W tunelu i przy pogorszonej widoczności (deszcz, zmierzch) włącz światła mijania.</li>
</ul>
<h3>Światła drogowe („długie”)</h3>
<ul>
<li>Od zmierzchu do świtu na <b>nieoświetlonej drodze</b> możesz używać świateł drogowych zamiast mijania lub razem z nimi, jeśli nie oślepiają innych.</li>
<li>Przełącz na mijania, gdy zbliżasz się do <b>pojazdu z przeciwka</b>, jedziesz <b>bezpośrednio za innym pojazdem</b> lub zbliżasz się do pieszych.</li>
<li>Krótkie <b>mignięcie</b> światłami drogowymi może zastąpić sygnał dźwiękowy, np. ostrzegając przed wyprzedzaniem.</li>
</ul>
<h3>Światła przeciwmgłowe</h3>
<ul>
<li><b>Przednie</b>: możesz ich używać przy <b>zmniejszonej przejrzystości powietrza</b> (mgła, opady). Możesz też włączyć je od zmierzchu do świtu na drodze krętej oznaczonej znakami.</li>
<li><b>Tylne</b>: włącz je, gdy przejrzystość powietrza jest ograniczona <b>poniżej 50 m</b>, i wyłącz niezwłocznie, gdy widoczność się poprawi. Inaczej oślepiasz jadących za Tobą.</li>
<li>We mgle nie używaj świateł drogowych. Odbijają się od kropelek wody i pogarszają widoczność.</li>
</ul>
<h3>Światła awaryjne</h3>
<ul>
<li>Włącz je, gdy pojazd jest unieruchomiony z powodu <b>awarii lub wypadku</b>, a zwłaszcza w miejscu, gdzie zatrzymanie jest zabronione.</li>
<li>Używa się ich też w <b>pojeździe holowanym</b> i w <b>autobusie szkolnym</b>, gdy dzieci wsiadają i wysiadają.</li>
<li>Krótkie włączenie awaryjnych, by ostrzec jadących z tyłu o nagłym zatorze, jest dobrą praktyką.</li>
</ul>
<h3>Światła pozycyjne i postojowe</h3>
<p>Gdy zatrzymasz się lub staniesz na <b>nieoświetlonej</b> drodze od zmierzchu do świtu albo w tunelu, pojazd musi być oznaczony <b>światłami pozycyjnymi</b> lub postojowymi.</p>
<h3>Sygnał dźwiękowy</h3>
<p>W <b>obszarze zabudowanym</b> sygnał dźwiękowy wolno stosować <b>tylko w razie niebezpieczeństwa</b>. Poza obszarem zabudowanym możesz go użyć także, by ostrzec wyprzedzanego.</p>
`
    },
    {
      id: 'autostrady', icon: '🛣️', title: 'Autostrady i drogi ekspresowe',
      sub: 'Kto może wjechać, zakazy, odstępy, awaria',
      html: `
${signs(['D-3', 'droga jednokierunkowa'])}
<h3>Kto może korzystać</h3>
<ul>
<li>Tylko <b>pojazdy samochodowe</b>, które z uwagi na konstrukcję mogą jechać z prędkością co najmniej <b>40 km/h</b>, oraz zespoły pojazdów spełniające ten warunek.</li>
<li>Zakaz ruchu dotyczy <b>pieszych, rowerów, hulajnóg elektrycznych, UTO, motorowerów, ciągników rolniczych</b> i pojazdów zaprzęgowych.</li>
</ul>
<h3>Zakazy na autostradzie i drodze ekspresowej</h3>
<ul>
<li>Zakaz <b>zawracania</b> i <b>cofania</b>.</li>
<li>Zakaz wjeżdżania na <b>pas dzielący</b> jezdnie i przejeżdżania przez niego.</li>
<li>Zakaz <b>zatrzymania i postoju</b> poza miejscami do tego przeznaczonymi (MOP, parkingi). Wyjątek: unieruchomienie z przyczyn technicznych.</li>
<li>Nie wjeżdżaj na pas awaryjny, jeśli nie masz awarii i nie musisz zrobić miejsca dla służb.</li>
</ul>
<h3>Jazda</h3>
<ul>
<li>Na autostradę wjeżdżaj <b>pasem rozbiegowym</b>. Rozpędź się na nim do prędkości zbliżonej do ruchu i ustąp pierwszeństwa pojazdom jadącym pasem, na który wjeżdżasz.</li>
<li>Jedź <b>prawym pasem</b>, a lewe wykorzystuj do wyprzedzania.</li>
<li>Utrzymuj odstęp co najmniej <b>połowy prędkości w metrach</b>, np. przy 140 km/h co najmniej 70 m.</li>
<li>W zatorze twórz <b>korytarz życia</b>.</li>
<li>Zjazd przygotuj zawczasu: zjedź na prawy pas, a potem na <b>pas wybiegowy</b> i tam zwalniaj.</li>
<li>Gdy przegapisz zjazd, jedź do następnego. Nigdy nie cofaj i nie zawracaj.</li>
</ul>
<h3>Awaria na autostradzie</h3>
<ol class="steps">
<li>Włącz <b>światła awaryjne</b> i zjedź jak najdalej w prawo, najlepiej na pas awaryjny lub pobocze.</li>
<li>Pasażerowie wychodzą od strony pobocza i czekają <b>za barierami ochronnymi</b>.</li>
<li>Ustaw <b>trójkąt ostrzegawczy 100 m</b> za pojazdem.</li>
<li>Wezwij pomoc drogową lub zadzwoń pod 112. Podaj kierunek jazdy i kilometr z najbliższego słupka pikietażowego.</li>
</ol>
`
    },
    {
      id: 'awaria', icon: '⚠️', title: 'Awaria, holowanie, przewóz osób i ładunku',
      sub: 'Trójkąt ostrzegawczy, hol, foteliki, ładunek',
      html: `
<h3>Unieruchomienie pojazdu – trójkąt ostrzegawczy (art. 50)</h3>
<table class="tbl">
<tr><th>Miejsce</th><th>Gdzie ustawić trójkąt</th></tr>
<tr><td>Obszar zabudowany</td><td>Bezpośrednio za pojazdem lub na nim, na wysokości nie większej niż 1 m</td></tr>
<tr><td>Poza obszarem zabudowanym</td><td><b>30–50 m</b> za pojazdem</td></tr>
<tr><td>Autostrada, droga ekspresowa</td><td><b>100 m</b> za pojazdem</td></tr>
</table>
<p>Jeśli pojazd stoi w miejscu, w którym zatrzymanie jest zabronione, włącz też <b>światła awaryjne</b>. Gdy pojazd nie ma świateł awaryjnych lub są niesprawne, od zmierzchu do świtu oznacz go światłami pozycyjnymi.</p>
<h3>Holowanie (art. 31)</h3>
<ul>
<li>Pojazd holowany <b>musi mieć kierującego</b> z uprawnieniami. Wyjątek: holowanie na sztywnym holu z częściowym uniesieniem pojazdu lub na lawecie.</li>
<li>Odległość między pojazdami przy <b>połączeniu giętkim</b> (linka) wynosi <b>4–6 m</b>. Linkę trzeba oznaczyć, np. chorągiewką, żeby była widoczna.</li>
<li>Przy <b>połączeniu sztywnym</b> (hol sztywny) odległość wynosi <b>do 3 m</b>.</li>
<li>Pojazd z <b>niesprawnym układem kierowniczym</b> holuje się tylko z przednią osią uniesioną lub na lawecie.</li>
<li>Pojazd holowany oznacza się <b>trójkątem ostrzegawczym</b> z tyłu, po lewej stronie.</li>
<li>Prędkość przy holowaniu wynosi najwyżej <b>30 km/h</b> w obszarze zabudowanym i <b>60 km/h</b> poza nim.</li>
</ul>
<h3>Pasy bezpieczeństwa i przewóz dzieci (art. 39)</h3>
<ul>
<li>Kierujący i <b>wszyscy pasażerowie</b> pojazdu wyposażonego w pasy bezpieczeństwa muszą mieć je zapięte podczas jazdy.</li>
<li>Kierujący <b>odpowiada za przewóz dzieci</b> zgodnie z przepisami.</li>
<li>Dziecko o wzroście <b>poniżej 150 cm</b> przewozi się w <b>foteliku bezpieczeństwa</b> lub innym urządzeniu przytrzymującym, dostosowanym do jego masy i wzrostu.</li>
<li>Dziecko o wzroście co najmniej <b>135 cm</b> może jechać na <b>tylnym siedzeniu</b> zapięte pasami, jeśli ze względu na masę i wzrost nie da się przewieźć go w foteliku.</li>
<li>Dziecko w wieku <b>co najmniej 3 lat</b> może jechać zapięte pasami na tylnym siedzeniu, jeśli z powodu fotelików dla dwóch innych dzieci nie mieści się trzeci fotelik.</li>
<li><b>Zakaz</b>: dziecka w foteliku <b>tyłem do kierunku jazdy</b> nie wolno przewozić na przednim siedzeniu, przed którym jest <b>aktywna poduszka powietrzna</b>.</li>
<li>Z obowiązku zapinania pasów zwolnione są m.in. osoby z zaświadczeniem lekarskim o przeciwwskazaniach, taksówkarz przewożący pasażera oraz instruktor i egzaminator podczas szkolenia i egzaminu.</li>
</ul>
<h3>Przewóz osób</h3>
<ul>
<li>Liczba przewożonych osób nie może przekroczyć liczby <b>miejsc w dowodzie rejestracyjnym</b>.</li>
<li>Przekroczenie liczby miejsc o <b>co najmniej 3 osoby</b> oznacza zatrzymanie prawa jazdy na 3 miesiące.</li>
<li>Nie wolno przewozić osób w przyczepie ani w części pojazdu nieprzeznaczonej do przewozu osób, z wyjątkami określonymi w przepisach.</li>
</ul>
<h3>Przewóz ładunku (art. 61)</h3>
<ul>
<li>Ładunek musi być <b>rozmieszczony i zabezpieczony</b> tak, żeby nie zagrażał bezpieczeństwu, nie przesuwał się, nie zakrywał świateł ani tablic rejestracyjnych i nie naruszał stateczności pojazdu.</li>
<li>Ładunek nie może wystawać <b>z tyłu</b> pojazdu więcej niż <b>2 m</b> poza tylną płaszczyznę pojazdu.</li>
<li>Ładunek wystający z tyłu o <b>ponad 0,5 m</b> trzeba oznaczyć <b>czerwoną chorągiewką</b> (ok. 50×50 cm). Od zmierzchu do świtu i w tunelu potrzebne są też czerwone światło i czerwone światło odblaskowe.</li>
<li>Rowery na bagażniku dachowym lub tylnym nie mogą zasłaniać świateł ani tablicy rejestracyjnej. Jeśli zasłaniają, potrzebna jest trzecia tablica i przeniesione oświetlenie.</li>
</ul>
`
    },
    {
      id: 'alkohol', icon: '🍺', title: 'Alkohol, narkotyki, zmęczenie',
      sub: 'Progi stężeń, kary, konfiskata, środki odurzające',
      html: `
<h3>Progi stężenia alkoholu</h3>
<table class="tbl">
<tr><th>Stan</th><th>We krwi</th><th>W wydychanym powietrzu</th><th>Kwalifikacja</th></tr>
<tr><td><b>Po użyciu alkoholu</b></td><td>0,2–0,5‰</td><td>0,1–0,25 mg/dm³</td><td><b>Wykroczenie</b> (art. 87 kw)</td></tr>
<tr><td><b>Nietrzeźwość</b></td><td>powyżej 0,5‰</td><td>powyżej 0,25 mg/dm³</td><td><b>Przestępstwo</b> (art. 178a kk)</td></tr>
</table>
<h3>Konsekwencje</h3>
<ul>
<li><b>Stan po użyciu</b>: areszt lub grzywna (nie niższa niż 2500 zł) oraz <b>obowiązkowy zakaz prowadzenia pojazdów</b> od 6 miesięcy do 3 lat.</li>
<li><b>Stan nietrzeźwości</b>: grzywna, kara ograniczenia albo pozbawienia wolności, zakaz prowadzenia pojazdów na co najmniej <b>3 lata</b> oraz świadczenie pieniężne. Przy wyższych stężeniach (od 1,5‰) lub gdy nietrzeźwy kierowca spowoduje wypadek, sąd co do zasady orzeka także <b>przepadek (konfiskatę) pojazdu</b> albo jego równowartości.</li>
<li>Prawo jazdy zatrzymuje się na miejscu, a pojazd może zostać usunięty z drogi.</li>
<li>Kierowanie pod wpływem <b>środka działającego podobnie do alkoholu</b> (narkotyki, niektóre leki) traktuje się tak samo jak kierowanie po alkoholu.</li>
</ul>
<div class="box tip"><b>Alkohol a organizm.</b> Alkohol pogarsza widzenie (zawęża pole widzenia, osłabia ocenę odległości), wydłuża czas reakcji i zwiększa skłonność do ryzyka. Organizm spala średnio ok. 0,1–0,15‰ na godzinę. Kawa, zimny prysznic ani sen nie przyspieszają trzeźwienia. „Rano po imprezie” często nadal jesteś w stanie po użyciu albo nietrzeźwości.</div>
<h3>Leki i zmęczenie</h3>
<ul>
<li>Czytaj ulotki. Leki oznaczone <b>trójkątem ostrzegawczym</b> mogą upośledzać zdolność prowadzenia pojazdów, np. leki nasenne, uspokajające, niektóre przeciwalergiczne i przeciwbólowe.</li>
<li><b>Zmęczenie</b> działa podobnie jak alkohol. Rób przerwy co ok. <b>2 godziny</b> jazdy.</li>
<li>Objawy senności to ziewanie, ciężkie powieki, „ucieczki” z pasa i niepamiętanie ostatnich kilometrów. Wtedy <b>zatrzymaj się</b> w bezpiecznym miejscu i odpocznij. Otwarte okno i głośna muzyka nie pomagają na długo.</li>
<li>Silne emocje (złość, stres) też pogarszają koncentrację i skłaniają do ryzyka.</li>
</ul>
`
    },
    {
      id: 'wypadek', icon: '🚑', title: 'Wypadek, kolizja i pierwsza pomoc',
      sub: 'Obowiązki uczestnika zdarzenia, oświadczenie, RKO, pozycja boczna',
      html: `
<h3>Kolizja a wypadek</h3>
<p><b>Kolizja</b> (zdarzenie drogowe) to zdarzenie, w którym są tylko szkody materialne. <b>Wypadek</b> to zdarzenie, w którym ktoś został ranny lub zginął.</p>
<h3>Obowiązki uczestnika zdarzenia (art. 44)</h3>
<ol class="steps">
<li><b>Zatrzymaj pojazd</b> w miejscu, gdzie nie spowodujesz zagrożenia.</li>
<li><b>Zabezpiecz miejsce</b>: włącz światła awaryjne i ustaw trójkąt ostrzegawczy.</li>
<li>Gdy są <b>ranni lub zabici</b>:
<ul>
<li>udziel <b>pierwszej pomocy</b>;</li>
<li>wezwij <b>pogotowie i Policję</b>;</li>
<li>pozostań na miejscu i nie zmieniaj położenia pojazdów ani śladów, chyba że trzeba ratować ludzi lub przywrócić ruch;</li>
<li>możesz się oddalić tylko po to, by wezwać pomoc, i musisz niezwłocznie wrócić.</li>
</ul></li>
<li>Gdy są <b>tylko szkody materialne</b>:
<ul>
<li>niezwłocznie <b>usuń pojazdy</b> z miejsca zdarzenia, żeby nie tamowały ruchu;</li>
<li>podaj pozostałym uczestnikom <b>swoje dane</b> (imię, nazwisko, adres) i dane ubezpieczyciela OC.</li>
</ul></li>
</ol>
<div class="box warn">Ucieczka z miejsca wypadku, jazda w stanie nietrzeźwości i nieudzielenie pomocy powodują <b>surowsze kary</b>. Nieudzielenie pomocy człowiekowi w niebezpieczeństwie jest przestępstwem (art. 162 kk).</div>
<h3>Kolizja bez Policji – oświadczenie</h3>
<p>Gdy uczestnicy są zgodni co do przebiegu zdarzenia, mogą spisać <b>oświadczenie sprawcy</b>. Powinno zawierać:</p>
<ul>
<li>dane osobowe i numery prawa jazdy uczestników;</li>
<li>numery rejestracyjne pojazdów;</li>
<li>numery polis OC i nazwy ubezpieczycieli;</li>
<li>datę, godzinę i miejsce zdarzenia;</li>
<li>opis i szkic sytuacji;</li>
<li>przyznanie się do winy i podpisy.</li>
</ul>
<p>Zrób zdjęcia miejsca i uszkodzeń. Gdy jest spór, ktoś jest pod wpływem alkoholu lub pojazd nie ma OC, <b>wezwij Policję</b>.</p>
<h3>Numery alarmowe</h3>
<p><b>112</b> to numer ogólny, działający w całej UE. Działają też <b>999</b> (pogotowie), <b>998</b> (straż pożarna) i <b>997</b> (Policja). Zgłaszając zdarzenie, podaj:</p>
<ul>
<li><b>co</b> się stało;</li>
<li><b>gdzie</b> (droga, kilometr, kierunek jazdy, charakterystyczne punkty);</li>
<li>ilu jest poszkodowanych i w jakim są stanie;</li>
<li>swoje dane.</li>
</ul>
<p>Nie rozłączaj się pierwszy.</p>
<h3>Pierwsza pomoc – schemat postępowania</h3>
<ol class="steps">
<li><b>Bezpieczeństwo</b>: najpierw własne, potem poszkodowanego. Zabezpiecz miejsce, wyłącz zapłon w rozbitym pojeździe i załóż rękawiczki.</li>
<li><b>Oceń przytomność</b>: podejdź, delikatnie potrząśnij za ramiona i głośno zapytaj: „Czy wszystko w porządku?”.</li>
<li>Gdy poszkodowany nie reaguje, <b>zawołaj o pomoc</b>, ułóż go na plecach i <b>udrożnij drogi oddechowe</b> (odchyl głowę, unieś żuchwę).</li>
<li><b>Oceń oddech</b> przez <b>do 10 sekund</b>: patrz, słuchaj, wyczuwaj. Pojedyncze westchnienia to nie jest prawidłowy oddech.</li>
<li><b>Brak prawidłowego oddechu</b>: wezwij pomoc (112) lub poproś kogoś, żeby to zrobił, i przyniósł <b>AED</b>. Rozpocznij <b>RKO</b>.</li>
<li><b>Oddech prawidłowy</b>: ułóż poszkodowanego w <b>pozycji bezpiecznej (bocznej ustalonej)</b>, wezwij pomoc i regularnie sprawdzaj oddech.</li>
</ol>
<h3>Resuscytacja krążeniowo-oddechowa (RKO) u dorosłego</h3>
<ul>
<li><b>30 uciśnięć</b> klatki piersiowej i <b>2 oddechy ratownicze</b>, na zmianę.</li>
<li>Uciskaj <b>środek klatki piersiowej</b> (dolną połowę mostka) na głębokość <b>5–6 cm</b>, w tempie <b>100–120 uciśnięć na minutę</b>.</li>
<li>Gdy nie możesz lub nie chcesz robić wdechów, wykonuj <b>same uciśnięcia</b>, bez przerw.</li>
<li><b>AED</b> (defibrylator) podłącz jak najszybciej i wykonuj jego polecenia głosowe.</li>
<li>Nie przerywaj RKO, dopóki nie przyjadą służby, poszkodowany nie zacznie normalnie oddychać albo nie opadniesz z sił.</li>
<li><b>U dzieci</b> wykonaj na początku <b>5 oddechów ratowniczych</b>, potem 15 uciśnięć i 2 oddechy. Osoba nieprzeszkolona może stosować schemat 30:2. Uciskaj na głębokość ok. 1/3 klatki piersiowej.</li>
</ul>
<h3>Inne sytuacje</h3>
<ul>
<li><b>Ranny w pojeździe</b>: nie wyciągaj go, chyba że grozi mu niebezpieczeństwo (pożar, wybuch) albo trzeba rozpocząć RKO. Przy podejrzeniu urazu kręgosłupa stabilizuj głowę.</li>
<li><b>Kask motocyklisty</b>: zdejmij go, gdy poszkodowany nie oddycha lub wymiotuje i trzeba udrożnić drogi oddechowe. Najlepiej zrobić to we dwie osoby, stabilizując głowę i szyję.</li>
<li><b>Krwotok zewnętrzny</b>: uciśnij ranę bezpośrednio i załóż <b>opatrunek uciskowy</b>. Jeśli przesiąka, dołóż kolejną warstwę. Opaska uciskowa (staza) to ostateczność przy masywnym krwotoku z kończyny. Zanotuj godzinę jej założenia.</li>
<li><b>Oparzenie</b>: chłodź czystą, chłodną wodą przez co najmniej 10–20 minut i zdejmij biżuterię. Nie przekłuwaj pęcherzy, a przylegającego ubrania nie odrywaj.</li>
<li><b>Złamanie</b>: unieruchom dwa sąsiednie stawy, a przy złamaniu stawu dwie sąsiednie kości. Nie nastawiaj kości.</li>
<li><b>Wstrząs</b> (bladość, zimny pot, szybkie tętno): ułóż poszkodowanego, okryj <b>folią NRC</b> lub kocem, uspokój i nie podawaj picia.</li>
<li><b>Zadławienie</b> u przytomnego: zachęcaj do kaszlu. Potem wykonaj 5 uderzeń między łopatki i 5 uciśnięć nadbrzusza (rękoczyn Heimlicha), na zmianę.</li>
</ul>
`
    },
    {
      id: 'znaki', icon: '🛑', title: 'Znaki i sygnały drogowe',
      sub: 'Kategorie znaków, odległości, najważniejsze znaki',
      html: `
<h3>Kategorie znaków</h3>
<table class="tbl">
<tr><th>Grupa</th><th>Kształt / kolor</th><th>Rola</th></tr>
<tr><td><b>A</b> – ostrzegawcze</td><td>Trójkąt, żółte tło, czerwona obwódka</td><td>Ostrzegają o miejscu niebezpiecznym</td></tr>
<tr><td><b>B</b> – zakazu</td><td>Koło z czerwoną obwódką</td><td>Zabraniają określonych zachowań</td></tr>
<tr><td><b>C</b> – nakazu</td><td>Niebieskie koło</td><td>Nakazują określone zachowanie</td></tr>
<tr><td><b>D</b> – informacyjne</td><td>Najczęściej niebieski prostokąt</td><td>Informują o drodze, obiektach, zasadach</td></tr>
<tr><td><b>E</b> – kierunku i miejscowości</td><td>Zielone, niebieskie, białe tablice</td><td>Drogowskazy, nazwy miejscowości, numery dróg</td></tr>
<tr><td><b>F</b> – uzupełniające</td><td>Różne</td><td>Np. objazdy, zmiany organizacji ruchu</td></tr>
<tr><td><b>G</b> – dodatkowe przed przejazdami kolejowymi</td><td>Słupki, krzyże św. Andrzeja</td><td>Oznaczają przejazd kolejowy</td></tr>
<tr><td><b>T</b> – tabliczki</td><td>Białe tabliczki pod znakiem</td><td>Uściślają znaczenie znaku (odległość, czas, kogo dotyczy)</td></tr>
<tr><td><b>P</b> – poziome</td><td>Linie i symbole na jezdni (białe, tymczasowe żółte)</td><td>Pasy ruchu, przejścia, linie zatrzymania</td></tr>
<tr><td><b>S</b> – sygnały świetlne</td><td>Sygnalizatory</td><td>Kierowanie ruchem światłami</td></tr>
</table>
<h3>Odległość znaków ostrzegawczych od miejsca niebezpiecznego</h3>
<ul>
<li><b>W obszarze zabudowanym</b> ustawia się je bezpośrednio przed miejscem niebezpiecznym, do <b>100 m</b>.</li>
<li><b>Poza obszarem zabudowanym</b> ustawia się je w odległości <b>150–300 m</b>.</li>
<li><b>Na autostradzie i drodze ekspresowej</b> ustawia się je w odległości <b>300–500 m</b>.</li>
<li>Gdy odległość jest inna, podaje ją tabliczka <b>T-1</b>.</li>
</ul>
<h3>Znaki ostrzegawcze (A) – wybrane</h3>
${signs(['A-1', 'niebezpieczny zakręt w prawo'], ['A-2', 'niebezpieczny zakręt w lewo'], ['A-5', 'skrzyżowanie dróg'], ['A-6a', 'skrzyżowanie z drogą podporządkowaną występującą po obu stronach'], ['A-7', 'ustąp pierwszeństwa'], ['A-8', 'skrzyżowanie o ruchu okrężnym'], ['A-11a', 'próg zwalniający'], ['A-20', 'odcinek jezdni o ruchu dwukierunkowym'], ['A-29', 'sygnały świetlne'], ['A-30', 'inne niebezpieczeństwo'])}
<p>Inne ważne znaki ostrzegawcze:</p>
<ul>
<li>A-9 przejazd kolejowy z zaporami;</li>
<li>A-10 przejazd kolejowy bez zapór;</li>
<li>A-11 nierówna droga;</li>
<li>A-12a zwężenie jezdni – dwustronne;</li>
<li>A-14 roboty na drodze;</li>
<li>A-15 śliska jezdnia;</li>
<li>A-16 przejście dla pieszych;</li>
<li>A-17 dzieci;</li>
<li>A-18b zwierzęta dzikie;</li>
<li>A-21 tramwaj;</li>
<li>A-24 rowerzyści;</li>
<li>A-32 oszronienie jezdni.</li>
</ul>
<h3>Znaki zakazu (B) – wybrane</h3>
${signs(['B-1', 'zakaz ruchu w obu kierunkach'], ['B-2', 'zakaz wjazdu'], ['B-20', 'stop'], ['B-21', 'zakaz skręcania w lewo'], ['B-23', 'zakaz zawracania'], ['B-25', 'zakaz wyprzedzania'], ['B-33', 'ograniczenie prędkości'], ['B-35', 'zakaz postoju'], ['B-36', 'zakaz zatrzymywania się'], ['B-42', 'koniec zakazów'])}
<ul>
<li><b>B-1</b> zabrania ruchu wszystkich pojazdów w obu kierunkach.</li>
<li><b>B-2</b> zabrania wjazdu wszystkim pojazdom od strony znaku. Najczęściej oznacza wyjazd z drogi jednokierunkowej.</li>
<li>Znaki <b>B-25, B-26, B-33, B-35, B-36</b> obowiązują do <b>najbliższego skrzyżowania</b>, chyba że wcześniej je odwołano.</li>
<li><b>B-42 „koniec zakazów”</b> odwołuje zakazy wprowadzone wcześniej znakami zakazu, m.in. B-25, B-26 i B-33.</li>
</ul>
<h3>Znaki nakazu (C) – wybrane</h3>
${signs(['C-2', 'nakaz jazdy w prawo za znakiem'], ['C-5', 'nakaz jazdy prosto'], ['C-9', 'nakaz jazdy z prawej strony znaku'], ['C-12', 'ruch okrężny'])}
<p>Inne ważne znaki nakazu:</p>
<ul>
<li>C-13 droga dla rowerów;</li>
<li>C-16 droga dla pieszych;</li>
<li>C-13/16 droga dla pieszych i rowerów;</li>
<li>C-18 nakaz używania łańcuchów przeciwśnieżnych.</li>
</ul>
<p>Znaki nakazu kierunku jazdy dotyczą miejsca ustawienia znaku albo najbliższego skrzyżowania.</p>
<h3>Znaki informacyjne (D) – wybrane</h3>
${signs(['D-1', 'droga z pierwszeństwem'], ['D-2', 'koniec drogi z pierwszeństwem'], ['D-3', 'droga jednokierunkowa'], ['D-4a', 'droga bez przejazdu'], ['D-5', 'pierwszeństwo na zwężonym odcinku'], ['D-42', 'obszar zabudowany'], ['D-43', 'koniec obszaru zabudowanego'])}
<p>Inne ważne znaki informacyjne:</p>
<ul>
<li>D-6 przejście dla pieszych;</li>
<li>D-6a przejazd dla rowerzystów;</li>
<li>D-7 droga ekspresowa;</li>
<li>D-9 autostrada;</li>
<li>D-15 przystanek autobusowy;</li>
<li>D-18 parking;</li>
<li>D-40 strefa zamieszkania;</li>
<li>D-46 droga wewnętrzna;</li>
<li>D-52 strefa ruchu.</li>
</ul>
<h3>Znaki poziome (P) – wybrane</h3>
${signs(['P-1', 'linia pojedyncza przerywana'], ['P-2', 'linia pojedyncza ciągła'], ['P-3a', 'linia jednostronnie przekraczalna'], ['P-4', 'linia podwójna ciągła'], ['P-10', 'przejście dla pieszych'], ['P-12', 'linia zatrzymania'], ['P-13', 'linia warunkowego zatrzymania z trójkątów'])}
<ul>
<li><b>Linia przerywana z krótkimi odstępami</b> (P-6, „ostrzegawcza”) zapowiada linię ciągłą. Nie rozpoczynaj już wyprzedzania.</li>
<li><b>Żółte linie i symbole</b> to oznakowanie tymczasowe, np. przy robotach drogowych. Jest ważniejsze niż białe.</li>
<li><b>P-21 „powierzchnia wyłączona”</b> (ukośne pasy) to obszar, na który nie wolno wjeżdżać.</li>
</ul>
`
    },
    {
      id: 'kary', icon: '💸', title: 'Punkty karne i mandaty',
      sub: 'Limit punktów, taryfikator, zatrzymanie prawa jazdy, recydywa',
      html: `
<h3>Punkty karne</h3>
<ul>
<li>Limit wynosi <b>24 punkty</b>. Młody kierowca w pierwszym roku od uzyskania pierwszego prawa jazdy ma limit <b>20 punktów</b>.</li>
<li>Gdy kierowca przekroczy limit, starosta kieruje go na <b>kontrolne sprawdzenie kwalifikacji</b> (egzamin teoretyczny i praktyczny). Młody kierowca traci uprawnienia.</li>
<li>Punkty są usuwane po upływie <b>1 roku</b> od dnia zapłaty grzywny nałożonej mandatem albo od uprawomocnienia się orzeczenia.</li>
<li>Raz na 6 miesięcy można odbyć <b>szkolenie w WORD</b>, które zmniejsza liczbę punktów o 6. Nie przysługuje kierowcy w okresie próbnym.</li>
<li>Za jedno naruszenie można dostać od 1 do 15 punktów.</li>
</ul>
<h3>Przekroczenie prędkości – taryfikator</h3>
<table class="tbl">
<tr><th>Przekroczenie</th><th>Grzywna</th><th>Punkty</th></tr>
<tr><td>do 10 km/h</td><td>50 zł</td><td>1</td></tr>
<tr><td>11–15 km/h</td><td>100 zł</td><td>2</td></tr>
<tr><td>16–20 km/h</td><td>200 zł</td><td>3</td></tr>
<tr><td>21–25 km/h</td><td>300 zł</td><td>5</td></tr>
<tr><td>26–30 km/h</td><td>400 zł</td><td>7</td></tr>
<tr><td>31–40 km/h</td><td>800 zł</td><td>9</td></tr>
<tr><td>41–50 km/h</td><td>1000 zł</td><td>11</td></tr>
<tr><td>51–60 km/h</td><td>1500 zł</td><td>13</td></tr>
<tr><td>61–70 km/h</td><td>2000 zł</td><td>14</td></tr>
<tr><td>powyżej 70 km/h</td><td>2500 zł</td><td>15</td></tr>
</table>
<h3>Wybrane naruszenia</h3>
<table class="tbl">
<tr><th>Naruszenie</th><th>Grzywna</th><th>Punkty</th></tr>
<tr><td>Nieustąpienie pierwszeństwa pieszemu na przejściu</td><td>1500 zł</td><td>15</td></tr>
<tr><td>Wyprzedzanie na przejściu dla pieszych lub bezpośrednio przed nim</td><td>1500 zł</td><td>15</td></tr>
<tr><td>Omijanie pojazdu, który zatrzymał się, by przepuścić pieszego</td><td>1500 zł</td><td>15</td></tr>
<tr><td>Wjazd na czerwonym świetle</td><td>500 zł</td><td>15</td></tr>
<tr><td>Korzystanie z telefonu trzymanego w ręku</td><td>500 zł</td><td>12</td></tr>
<tr><td>Jazda bez zapiętych pasów bezpieczeństwa</td><td>100 zł</td><td>5</td></tr>
</table>
<p class="small mut">Kwoty według taryfikatora obowiązującego od 2022 r. Grzywny i punkty mogą się zmieniać, więc sprawdzaj aktualny taryfikator.</p>
<h3>Recydywa</h3>
<p>Gdy w ciągu <b>2 lat</b> ponownie popełnisz to samo poważne wykroczenie, mandat jest <b>podwójny</b>. Dotyczy to np. przekroczenia prędkości o ponad 30 km/h, nieustąpienia pierwszeństwa pieszemu i wyprzedzania na przejściu.</p>
<h3>Zatrzymanie prawa jazdy na 3 miesiące</h3>
<ul>
<li>Przekroczenie prędkości o <b>ponad 50 km/h w obszarze zabudowanym</b>.</li>
<li>Przewożenie osób w liczbie przekraczającej liczbę miejsc o <b>co najmniej 3</b>.</li>
<li>Gdy kierujący prowadzi mimo zatrzymania prawa jazdy, okres przedłuża się do 6 miesięcy. Przy kolejnym naruszeniu uprawnienia zostają cofnięte.</li>
</ul>
<div class="box warn">W ostatnich latach przygotowywano rozszerzenie tej sankcji m.in. na drogi jednojezdniowe poza obszarem zabudowanym. Sprawdź aktualne przepisy.</div>
<h3>Przestępstwa drogowe (Kodeks karny)</h3>
<ul>
<li><b>Art. 177</b>: spowodowanie wypadku, w którym ktoś odniósł obrażenia ciała na ponad 7 dni lub zginął.</li>
<li><b>Art. 178a</b>: prowadzenie pojazdu w stanie nietrzeźwości lub pod wpływem środka odurzającego.</li>
<li><b>Art. 178b</b>: niezatrzymanie się do kontroli i ucieczka.</li>
<li><b>Art. 180a</b>: prowadzenie pojazdu mimo cofnięcia uprawnień.</li>
<li><b>Art. 244</b>: niestosowanie się do sądowego zakazu prowadzenia pojazdów.</li>
</ul>
`
    },
    {
      id: 'technika', icon: '🛞', title: 'Technika jazdy i eko-jazda',
      sub: 'Pozycja za kierownicą, poślizgi, ABS, warunki zimowe, ekonomia',
      html: `
<h3>Pozycja za kierownicą</h3>
<ul>
<li>Plecy powinny przylegać do oparcia. Przy wciśniętym do końca sprzęgle noga ma być lekko zgięta w kolanie.</li>
<li>Gdy wyprostujesz ręce, nadgarstki powinny opierać się na górze koła kierownicy. Trzymaj kierownicę oburącz, w pozycji „za piętnaście trzecia”.</li>
<li><b>Zagłówek</b>: jego górna krawędź powinna być na wysokości czubka głowy, a co najmniej oczu. Chroni kręgosłup szyjny przy uderzeniu w tył pojazdu.</li>
<li>Pas biodrowy prowadź nisko, na kościach miednicy, a pas barkowy przez środek obojczyka. Pas nie może być skręcony.</li>
<li>Ustaw lusterka przed jazdą. Mimo to sprawdzaj „martwe pole”, patrząc przez ramię.</li>
</ul>
<h3>Poślizgi</h3>
<ul>
<li><b>Podsterowność</b> (przód „ucieka” na zewnątrz zakrętu): zdejmij nogę z gazu i lekko zmniejsz skręt kół, aż odzyskają przyczepność.</li>
<li><b>Nadsterowność</b> (tył „ucieka”): wykonaj kontrę, czyli skręć koła w kierunku, w którym ucieka tył. Nie hamuj gwałtownie.</li>
<li><b>Aquaplaning</b> (koła tracą kontakt z jezdnią na wodzie): zdejmij nogę z gazu, trzymaj kierownicę prosto i nie hamuj gwałtownie, dopóki koła nie odzyskają przyczepności.</li>
</ul>
<h3>Hamowanie</h3>
<ul>
<li><b>ABS</b> zapobiega blokowaniu kół i pozwala <b>skręcać podczas hamowania</b>. Przy hamowaniu awaryjnym wciśnij pedał hamulca <b>mocno i do końca</b> i trzymaj. Pulsowanie pedału jest normalne.</li>
<li>Bez ABS hamuj pulsacyjnie, żeby koła się nie blokowały, bo zablokowane koła nie skręcają.</li>
<li><b>ESP</b> pomaga utrzymać tor jazdy w poślizgu, ale nie zmienia praw fizyki.</li>
<li>Na długich zjazdach hamuj <b>silnikiem</b> (niższy bieg). Ciągłe hamowanie hamulcem roboczym przegrzewa go i osłabia jego działanie.</li>
</ul>
<h3>Warunki trudne</h3>
<ul>
<li><b>Zimą</b> zwiększ odstępy kilkukrotnie. Ruszaj i hamuj łagodnie. Oszronienie częściej pojawia się na mostach, wiaduktach i w zacienionych miejscach.</li>
<li><b>Po pierwszym deszczu</b> po suchych dniach jezdnia jest szczególnie śliska (pył, olej).</li>
<li><b>Silny boczny wiatr</b> jest groźny na mostach, przy wyjeździe z lasu i przy wyprzedzaniu ciężarówek. Trzymaj kierownicę pewnie.</li>
<li><b>Oślepienie</b> światłami z przeciwka: zwolnij i patrz na prawą krawędź jezdni.</li>
<li><b>Zwierzę na drodze</b>: hamuj i jedź prosto. Gwałtowny skręt przy dużej prędkości grozi wypadnięciem z drogi.</li>
</ul>
<h3>Eko-jazda</h3>
<ul>
<li>Jedź płynnie, przewiduj sytuację i unikaj zbędnego hamowania i przyspieszania.</li>
<li>Wcześnie zmieniaj bieg na wyższy. Podczas hamowania silnikiem na biegu z zamkniętą przepustnicą nowoczesne silniki nie zużywają paliwa.</li>
<li>Utrzymuj właściwe <b>ciśnienie w oponach</b>. Za niskie zwiększa zużycie paliwa i opon oraz pogarsza prowadzenie.</li>
<li>Zdejmuj niepotrzebne bagażniki dachowe i wyrzucaj zbędny ładunek. Klimatyzacja i otwarte okna przy dużej prędkości zwiększają zużycie paliwa.</li>
<li>Wyłączaj silnik podczas dłuższego postoju.</li>
</ul>
<h3>Usterki – co oznaczają kontrolki</h3>
<ul>
<li><b>Czerwona kontrolka ciśnienia oleju lub temperatury</b>: zatrzymaj się możliwie szybko i wyłącz silnik.</li>
<li><b>Kontrolka ładowania</b> (akumulator): możliwa awaria alternatora lub paska. Pojazd jedzie tylko na akumulatorze.</li>
<li><b>Kontrolka hamulców</b>: niski poziom płynu lub zaciągnięty hamulec postojowy.</li>
<li><b>Pomarańczowa kontrolka silnika</b>: usterka układu silnika lub wydechowego. Jedź do serwisu.</li>
</ul>
`
    },
    {
      id: 'egzamin', icon: '📝', title: 'Jak wygląda egzamin teoretyczny',
      sub: 'Liczba pytań, punktacja, czas, próg zaliczenia',
      html: `
<h3>Struktura egzaminu</h3>
<ul>
<li><b>32 pytania</b> losowane z oficjalnej bazy pytań Ministerstwa Infrastruktury, dla Twojej kategorii.</li>
<li><b>20 pytań z części podstawowej</b>: odpowiedzi TAK / NIE, zwykle ze zdjęciem lub filmem.</li>
<li><b>12 pytań z części specjalistycznej</b>: trzy odpowiedzi A / B / C, z których jedna jest prawidłowa.</li>
<li>Pytania są warte <b>1, 2 lub 3 punkty</b> w zależności od tego, jak ważne są dla bezpieczeństwa.</li>
</ul>
<table class="tbl">
<tr><th>Część</th><th>3 pkt</th><th>2 pkt</th><th>1 pkt</th><th>Razem</th></tr>
<tr><td>Podstawowa (20)</td><td>10</td><td>6</td><td>4</td><td>46 pkt</td></tr>
<tr><td>Specjalistyczna (12)</td><td>6</td><td>4</td><td>2</td><td>28 pkt</td></tr>
<tr><td><b>Razem</b></td><td></td><td></td><td></td><td><b>74 pkt</b></td></tr>
</table>
<div class="box rule">Egzamin zdajesz, gdy uzyskasz <b>co najmniej 68 punktów na 74</b>.</div>
<h3>Czas</h3>
<ul>
<li><b>Część podstawowa</b>: masz <b>20 sekund</b> na zapoznanie się z pytaniem. Następnie wyświetla się zdjęcie albo odtwarza film (tylko raz). Potem masz <b>15 sekund</b> na odpowiedź.</li>
<li><b>Część specjalistyczna</b>: masz <b>50 sekund</b> na przeczytanie pytania i udzielenie odpowiedzi.</li>
<li>Cały egzamin trwa ok. <b>25 minut</b>.</li>
<li><b>Nie można wrócić</b> do poprzedniego pytania. Brak odpowiedzi liczy się jak odpowiedź błędna.</li>
</ul>
<h3>Wskazówki</h3>
<ul>
<li>Czytaj pytanie do końca. Słowa „<b>wyłącznie</b>”, „<b>zawsze</b>” i „<b>w tej sytuacji</b>” zmieniają sens.</li>
<li>Odpowiadaj na podstawie tego, co <b>widać na zdjęciu lub filmie</b>, i ostatniego kadru filmu. Nie dopowiadaj sobie sytuacji.</li>
<li>Przy filmach zwracaj uwagę na znaki, które mijasz po drodze, bo mogą odwołać się do nich pytania.</li>
<li>W aplikacji ćwicz w trybie <b>Egzamin próbny</b>, który ma te same limity czasu i punktację. Wracaj do pytań z <b>powtórek</b>.</li>
</ul>
<h3>Oficjalna baza pytań</h3>
<p>Baza pytań egzaminacyjnych jest <b>publiczna</b>. Ministerstwo Infrastruktury udostępnia ją na stronie gov.pl (sekcja „Prawo jazdy”) jako plik arkusza z treścią pytań oraz osobną paczkę zdjęć i filmów. Aplikacja może <b>zaimportować ten plik</b> (Więcej → Baza pytań).</p>
`
    }
  ];
})();
