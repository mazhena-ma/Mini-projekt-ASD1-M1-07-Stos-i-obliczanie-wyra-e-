# StosONP — ASD1-M1-07

Autor: **DO UZUPEŁNIENIA**  
Numer indeksu: **DO UZUPEŁNIENIA**  
Algorytmy i struktury danych I, semestr I, 2026/2027.

## Uruchomienie
Otwórz **index.html** dwukrotnym kliknięciem w aktualnej przeglądarce z JavaScript. Zachowaj wszystkie pliki obok siebie. Bez serwera, API, płatnych usług, kont i połączenia z internetem.

Tryby: samodzielny stos, nawiasy, konwersja wyrażenia do ONP z obliczaniem, obliczanie własnego ONP. Wybierz scenariusz albo wpisz dane. Krok, Start/Pauza, Reset i tempo sterują historią rzeczywistego wykonania. Zmiana danych resetuje przebieg. W trybie ręcznego stosu operacje wykonuje się przyciskami push/pop/peek; odtwarzanie automatyczne nie ma zastosowania.

## Testy
# Próba obrony — plan do samodzielnego wykonania

Nie przeprowadzono próby ustnej za studenta. Poniższy scenariusz służy ćwiczeniu.

## 1. Prezentacja (około 6 minut)
Otwórz presentation.html. Przejdź dokładnie 10 slajdów. Nie odczytuj raportu. Na slajdzie 8 wyjaśnij różnicę pomiędzy liczbą operacji a maksymalną wysokością. Na slajdzie 9 uczciwie powiedz, co zrobiło AI, a co rzeczywiście zrobiłaś samodzielnie.

## 2. Produkt (około 6 minut)
- Stos: wyczyść dane. Pokaż zablokowane pop/peek. Push 2, push 7, peek 7, pop 7. Wyjaśnij LIFO.
- Nawiasy: x{a[b(c)]}, potem ([)]. Dwa pierwsze otwarcia tworzą stos [( @0, [ @1]. Zamknięcie ) jest błędne na pozycji 2.
- Konwersja: 2+3*4. Przejdź Krok: liczba 2 do wyjścia, + na stos, 3 do wyjścia, * na stos. Zadaj pytanie o następny stos. Pokaż opróżnianie: najpierw *, potem +.
- Ewaluacja: wartości 2,3,4, potem pop 4, pop 3, push 12; następnie 2+12=14.
- Zmień dane na (2+3)*4. Pokaż nowy przebieg, Start/Pauza, zmianę tempa i Reset. Wynik 20, nie 14.
- Porównanie: konwersja ma 5 vs 9 wywołań P+Z+O; ewaluacja po 10, lecz wysokości 3 vs 2.
- Własne ONP: 2 7 - daje -5. Pierwszy zdjęty operand jest prawy.
- Przypadek brzegowy: 3/(2-2) oraz ONP 1 +. Pokaż komunikaty.
- Uruchom testy i pokaż stany pośrednie w tabeli.

## 3. Pytania do przećwiczenia
1. Dlaczego porównanie priorytetów zawiera równość? — Lewostronność +,-,*,/.
2. Dlaczego dwie pętle nie oznaczają O(n²)? — Każdy operator push/pop najwyżej raz.
3. Co kosztuje O(n²)? — Kopie stanów i tekstu do historii, nie operacje rdzenia.
4. Dlaczego kontroler nawiasów akceptuje litery, a kalkulator nie? — Różne kontrakty wejścia.
5. Co oznacza size? — Liczbę elementów; indeks wierzchołka to size−1.
6. Jak znaleźć pierwszy błąd? — Zatrzymać się na pierwszym konflikcie; po końcu pokazać pozostałe otwarcia.
7. Przewidź 9-3-2 i 9-(3-2) bez uruchamiania. — 4 i 8.
8. Czy testy dowodzą poprawności każdego wejścia? — Nie; łączymy testy z analizą niezmienników.

## 4. Checklista próby
Zaznacz dopiero po rzeczywistym wykonaniu:
- [ ] Bez pomocy wyjaśniłam Stack, convert, evaluate.
- [ ] Przewidziałam stany dla nowych danych.
- [ ] Przeprowadziłam całość po 10 slajdach na komputerze obrony.
- [ ] Potrafię pokazać test, który wykryje odwrócenie operandów.
- W aplikacji kliknij **Uruchom testy**: tabela wejście/oczekiwane/uzyskane/status.
- Opcjonalnie w terminalu otwartym w folderze projektu uruchom: `node tests.js` (wymaga Node.js).
- Wyniki CLI: test-results.json. Porównania: node comparison.cjs.
- Wykonano 36/36 testów rdzenia, także w rzeczywistym Edge, oraz 19/19 kontroli przeglądarkowych (w tym uruchomienie zestawu 36 testów). Dowody: test-results.json, browser-results.json, comparison-results.json.
- local-browser-check.cjs i build-pdf.cjs to pomocnicze skrypty stanowiska przygotowania. Wymagają istniejącego Edge i Playwright Core wskazanego w kodzie; nie są potrzebne odbiorcy. Nie instaluj płatnych narzędzi.

## Pliki do obrony
1. **presentation.html** — dokładnie 10 slajdów, klawisze ←/→; obraz screenshot-app.png musi być obok.
2. **index.html** — produkt do pokazu po slajdach.
3. **documentation.pdf** — raport 10 stron, źródło documentation.html.
4. **defense.md** — scenariusz ćwiczenia, nie deklaracja wykonanej próby.
5. algorithms.js, app.js, tests.js — kod do wyjaśnienia.

## Ograniczenia
Kalkulator 0–99 (1–2 cyfry), + − * /, (), do 60 tokenów. Bez funkcji, potęg i minusa jednoargumentowego. Number może zaokrąglać; wyniki ujemne i ułamkowe są dozwolone. Kontroler nawiasów ignoruje inne znaki i podaje indeks UTF-16 od 0. Interfejs ogranicza tekst do 500 znaków. Historia klatek jest kosztem dodatkowym, do kwadratowego; nie należy przypisywać jej rdzeniowi liniowemu.

## Autorstwo i AI
Kod, testy i materiały przygotowano z pomocą OpenClaw / OpenAI GPT-6 Astra. Nie deklarujemy samodzielnego napisania kodu przez studenta. **Własny wkład studenta: DO UZUPEŁNIENIA zgodnie z faktyczną pracą**. Student powinien samodzielnie przejrzeć kod, powtórzyć testy, wprowadzić świadome poprawki i umieć przewidzieć kroki na nieznanych danych.
Źródła: karta zadania; materiały do nauki Princeton (https://algs4.cs.princeton.edu/13stacks/) i Emory Shunting Yard wymienione w karcie. Dokładny link Emory należy uzupełnić z Dziennika; nie zmyślono adresu ani deklaracji konsultacji strony.

## GitHub i oddanie — jeszcze do wykonania
Nie opublikowano repozytorium. Po decyzji właściciela utwórz repozytorium GitHub, dodaj pliki projektu (można użyć bezpłatnego interfejsu Upload files), sprawdź dostęp prowadzącego i otwieranie README. Nie zamieszczaj sekretów ani danych innych osób. Dodaj osobny link repozytorium w polu **Linki** Dziennika; link nie zastępuje plików.

- [ ] Uzupełnij autora i indeks w README, prezentacji, raporcie i stopce aplikacji.
- [ ] Uzupełnij rzeczywisty własny wkład i dokładny link źródła Emory.
- [ ] Wykonaj testy na komputerze obrony i przećwicz defense.md.
- [ ] Po zmianach raportu ponownie wydrukuj PDF (A4, skala 100%, bez nagłówków/stopki przeglądarki), sprawdź 10 stron.
- [ ] Opublikuj GitHub i podaj link w Dzienniku.
- [ ] Oddaj pliki do 26.10.2026 23:59. Obrona 28.10.2026 08:30–11:40.
