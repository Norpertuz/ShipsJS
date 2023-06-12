# ShipsJS
Battleship game in Javascript, using jQuery

Instrukcja:
Klasyczna gra w statki. Wygrywa ta osoba co zestrzeli statki drugiej osoby jako pierwsza.
Sterowanie:
PPM - wybieranie kwadratu
LPM - anulowanie wyboru
G - wymazywanie
S - ustawianie statkow
Z - zaznaczanie statków zatopionych
Tylko dla planszy bardzo dużej:
V - Zmiana widoku
L - wyświetlenie logów/menu
Wersja Manualna: (Wersja wolna od błędów)
1.Dana jest liczba niebieskich kwadratów,która rózni się zależnie od rozmiaru planszy.
2.Jest również dane jakie statki można ułożyc z dostępnych niebieskich kwadratów. Np. trzy statki "dwukwadratowe" (2x3).
3.Podana jest liczba ułożonych kwadratów niebieskich oraz pozostałych kwadratów niebieskich przeciwnika.
4.Przegrywa ta osoba, której nie zostały żadne niebieskie kwadraty.
5.Na większych planszach zaleca się dopuszczenie większej liczby strzałów przy posiadaniu największych statków
np. trzy jeśli gracz nie stracił jeszcze statku siedmiokwadratowego, a gdy go straci to dwa strzały, jeśli nie stracił statków sześciokwadratowych

Wersja Automatyczna (beta) <br>
1.Po wybraniu kwadratu należy nacisnąć przycisk zatwierdz.
2.Następnie czekać na odpowiedź kilkając przycisk odpowiadający za sprawdzenie czy udało się trafić.
3.Potem oczekiwać na ruch przeciwnika klikając przycisk,<br> sprawdzający czy druga osoba wykonała ruch.

Changelog:
21/11/2018 - Początek. 
Stworzono prototypową planszę dla jednego z graczy.
Stworzono dwie plansze: strzelania i plansze na statki dla jednego gracza.
Dodano obslugę plików .txt służących do przechowywania informacji o strzelaniu i trafieniach.
22/11/2018
Poprawiono graficzną część strony.
Dodano stronę główną z instrukcją oraz wyborem gracza.
Dodano obsługę dodatkowych plików .txt.
Przeprowadzono testu funkcjonalności gracza pierwszego.
Dodano drugiego gracza.
01/12/2018
Dodano większe plansze
18/11/2019
Poprawiono błędy, wersja manualna działa bez problemu, została ona ulepszona, wersja na plikach posiada błędy na niektorych przeglądarkach. Czasem infromacje z plików nie chcą się wczytać.
08/08/2020
Poprawiono kolorystkę oraz naprawiono związane z nią błędy.
Dodano informacje o kwadratach przeciwnika w wersji manualnej.
Poprawiono błąd - nie można już ustawiać niebieskich kwadratów na planszy przeciwnika w manualnej wersji.
16/08/2020
Zaimplementowano bardzo dużą planszę do wersji manualnej, z osobną funkcjonalnością.
