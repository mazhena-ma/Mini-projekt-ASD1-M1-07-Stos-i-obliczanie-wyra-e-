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
