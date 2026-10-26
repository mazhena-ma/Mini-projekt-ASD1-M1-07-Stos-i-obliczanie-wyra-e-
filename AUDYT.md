# Audyt końcowy — ASD1-M1-07
Data: 13.10.2026. Projekt: C:\OpenClawProjects\StosONP.

## Wynik ogólny
Aplikacja przeszła wykonane testy; materiały istnieją i mają wymaganą objętość. Nie jest to deklaracja ukończonego oddania: pozostają dane autora, rzeczywisty wkład, dokładny odnośnik Emory, GitHub i próba obrony. Nie wykonano publikacji, wysyłki, zakupów ani uruchomienia dodatkowych agentów.

## Kontrola punkt po punkcie
1. Stos: własne push/pop/peek/isEmpty w algorithms.js, obiekt indeksowany i size, LIFO, widok podstawa–wierzchołek. Ochrona pustego stosu w klasie i interfejsie. PASS testów.
2. Nawiasy: (), [], {}, ignorowanie pozostałych znaków, zapis znaku i pozycji, pierwszy konflikt ([)] na pozycji 2, lista pozostałych otwarć a([ na pozycjach 1 i 2. PASS. Indeksy UTF-16 od 0 są jawnie opisane.
3. Tokenizacja/walidacja: 0–99, spacje, 60 tokenów, +/−/*// i (), priorytety i lewostronność. Odrzucane puste dane, sąsiednie operatory, brak operatora, unary minus, funkcje/znaki spoza gramatyki, niedomknięcia. Testy obejmują odrzucenie 61 tokenów i przyjęcie 59 tokenów; nie deklarujemy osobnego testu dokładnie 60 tokenów.
4. Konwersja: własny algorytm stosowy; poprawne oba przykłady kontrolne, widok reszty tekstu, stosu, wyjścia i przyczyny. Poprawiono pierwszą klatkę: oznaczenie start i pozycja 0 zamiast koniec i końcowej pozycji.
5. Ewaluacja: bez eval, kolejność prawy=pop, lewy=pop, ujemne/ułamkowe wyniki, zero i błędna liczba operandów wykrywane. PASS.
6. Interakcja: Krok, Start/Pauza, Reset, zmiana danych, zmiana tempa w trakcie i utrzymanie pauzy sprawdzone w Edge. Tryb ręcznego stosu używa push/pop/peek, a nie automatycznego odtwarzania (Krok/Start są w tym trybie wyłączone, zgodnie z README). To świadoma granica realizacji; jeśli prowadzący wymaga automatycznego scenariusza również w samodzielnym stosie, trzeba go rozszerzyć.
7. Rzeczywiste kroki: emit jest wywoływane podczas obliczeń i kopiuje stany; interfejs odtwarza wynik tego wykonania, nie ręcznie zapisaną animację. Aktywny token, zmienne, pseudokod, przyczyna i legenda są obecne. Oznaczenia ▲, ▶, ∅ nie zależą wyłącznie od koloru.
8. Scenariusze: po co najmniej trzy w każdym trybie, własne wejście. Sprawdzono definicje i obsługę w kodzie; nie klikano każdego scenariusza osobno.
9. Edukacja: trzy pytania z odpowiedziami/wyjaśnieniami, jedno dynamiczne sprawdzone w Edge. Opisy celów, zastosowań i ograniczeń obecne w aplikacji i raporcie.
10. Porównanie: ponownie wykonano comparison.cjs. Wyniki pięciu wyrażeń: 14,20,21,24,32. Liczniki zgodne z tabelami materiałów i tymi samymi funkcjami użytymi przez app.js. Pierwsza para: konwersja P/Z/O/H 2/2/1/2 i 3/3/3/2; ewaluacja 5/4/1/3 i 5/4/1/2. Jawnie nierównoważne wyrażenia. Zdefiniowano n, m, liczniki i rozdzielono koszt algorytmów, walidacji, historii i animacji. Brak wymyślonych benchmarków czasu.
11. Testy: 36/36 PASS w Node.js (ponownie także po poprawce) i ten sam zestaw w Edge. Trzy konkretne stany pośrednie: nawiasy, operatory i wartości. Dane, oczekiwanie, wynik i status są w test-results.json oraz tabeli aplikacji.
12. Dodatkowy skrypt przeglądarkowy: 19/19 PASS; liczba ta obejmuje jedną zbiorczą kontrolę zestawu 36 testów, sześć dodatkowych kontroli algorytmicznych i pozostałe kontrole interfejsu/błędów. Nie jest to 19 niezależnych testów wyłącznie UI. Rozszerzenia: start klatki, 59 tokenów, tekst błędu zera, drugie kontrolne ONP, lewostronne odejmowanie, pusty kontroler, zmiana tempa i stabilna pauza. Brak pageerror.
13. Prezentacja: dokładnie 10 sekcji/slajdów, przejście do 10/10 sprawdzone. Treść obejmuje tytuł, cel, zakres, mechanizmy, struktury, architekturę, interfejs, testy/porównanie, wnioski/AI/źródła, pokaz. Dodano opis etapów realizacji oraz mechanizmu kontroli nawiasów. Dane autora i indeksu nadal do uzupełnienia.
14. PDF: po aktualizacji ponownie wygenerowano documentation.pdf. Wygenerowany plik ma 10 obiektów stron PDF; sprawdzono układ źródła każdej strony i brak nachodzenia na stopki. Treść wszystkich dziesięciu części przejrzana w documentation.html. Nie jest to pełna ręczna inspekcja każdego piksela PDF. Są numeracja, podpisy, odwołania, architektura, koszty, testy, źródła i uczciwy opis AI.
15. README: uruchomienie lokalne, testy, kod tematu, pliki obrony, ograniczenia i publikacja opisane. Autor/indeks celowo pozostają puste. Skrypty Edge/Playwright zależą od lokalnej instalacji narzędzi; produkt nie ma takiej zależności.
16. Źródła: wskazano kartę, Princeton i Emory. Nie weryfikowano dostępności stron internetowych w tym audycie; dokładny URL Emory nie został dostarczony. Nie wymyślono adresu.
17. Technologia: klasyczne lokalne HTML/CSS/JS, brak kont/API/CDN i eval; badane algorytmy są w projekcie. Odświeżono rzeczywisty screenshot-app.png z wykonania Edge.
18. GitHub i oddanie: NIE WYKONANE — wymagają decyzji użytkowniczki. Próba samodzielnej obrony również nie została wykonana za studentkę.

## Faktycznie uruchomione polecenia
- node tests.js — dwukrotnie podczas audytu, końcowo 36/36 PASS.
- node local-browser-check.cjs — 19/19 PASS, rzeczywisty lokalny Edge headless; odświeżony screenshot.
- node comparison.cjs — pięć wyników i liczniki odtworzone.
- node build-pdf.cjs — PDF 10 stron, slajdy 10, brak nachodzenia treści na stopki.
Wszystkie polecenia zakończone kodem 0.

## Zmienione istniejące pliki
algorithms.js; local-browser-check.cjs; presentation.html; documentation.html; README.md. Ponownie wygenerowano documentation.pdf, screenshot-app.png i pliki wynikowe JSON. Dodano jedynie ten raport audytu, nie nowy projekt.

## Przed oddaniem
- Uzupełnić prawdziwe imię/nazwisko i indeks we wszystkich materiałach.
- Wpisać rzeczywisty własny wkład po wykonanej przez studentkę pracy.
- Uzupełnić dokładny link Emory z Dziennika.
- Ponownie wygenerować PDF po tych zmianach i sprawdzić 10 stron.
- Przećwiczyć defense.md i sprawdzić aplikację na komputerze obrony.
- Po zgodzie opublikować GitHub, przekazać link w Dzienniku i oddać wymagane pliki.
