import { nanoid } from "nanoid";

export const railwaySignals = [
  {
    name: "Sygnał S1  „Stój”",
    code: [0, 1, 0, 0],
    descryption:
      "Sygnał S1 nakazuje zatrzymanie pociągu oraz manewrów przed tym semaforem.",
    id: nanoid(),
    correct: null,
  },
  {
    name: "Sygnał S2  „Jazda z największą dozwoloną prędkością”",
    code: [2, 0, 0, 0],
    descryption:
      "Sygnał S2 zezwala na jazdę z największą dozwoloną prędkością i informuje, że na następnym semaforze,jeżeli semafor nadający sygnał S2 jest z nim uzależniony, nadawany jest sygnał zezwalający na jazdę z największą dozwoloną prędkością;",
    id: nanoid(),
    correct: null,
  },
  {
    name: "Sygnał S3  „Jazda z największą dozwoloną prędkością  wprzodzie są dwa odstępy blokowe wolne  albo przynastępnym semaforze z prędkością nie większą niż 100 km/h”",
    code: [5, 0, 0, 0],
    descryption:
      "Semafor półsamoczynny lub ostatni semafor samoczynny blokady liniowej informuje, że następny semafor może nadawać sygnał zezwalający na jazdę z prędkością niewiększą niż 100 km/h; Semafor samoczynny blokady liniowej lub semafor wyjazdowy na szlak wyposażony w samoczynną blokadę liniową informuje, że dwa kolejne odstępy blokowe zatym semaforem są wolne",
    id: nanoid(),
    correct: null,
  },
  {
    name: "Sygnał S4  „Następny semafor wskazuje sygnał zezwalający na jazdę z prędkością zmniejszoną do 40 lub 60 km/h”",
    code: [6, 0, 0, 0],
    descryption:
      "Sygnał S4 zezwala na jazdę z największą prędkością dozwoloną dla danego pociągu na danym odcinku linii kolejowej wskazaną w WRJ i informuje, że następny semafor nadaje sygnał zezwalający na jazdę z prędkością nieprzekraczającą 40 lub 60 km/h;",
    id: nanoid(),
    correct: null,
  },
  {
    name: "Sygnał S5  „Następny semafor nadaje sygnał Stój",
    code: [3, 0, 0, 0],
    descryption:
      "Sygnał S5 informuje, że następny semafor nadaje sygnał „Stój”, maszynista powinien tak regulować prędkość jazdy, aby mógł zatrzymać pociąg przed następnym semaforem wskazującym sygnał „Stój”.",
    id: nanoid(),
    correct: null,
  },
  {
    name: "Sygnał S6  Jazda z prędkością nieprzekraczającą 100 km/h - a potem z największą dozwoloną prędkością",
    code: [2, 0, 3, 2],
    descryption:
      "Sygnał S6 zezwala na jazdę z prędkością nie większą niż 100 km/h i informuje, że na następnym semaforze, jeżeli semafor nadający sygnał S6 jest z nim uzależniony, nadawany jest sygnał zezwalający na jazdę z największą dozwoloną prędkością. Jeżeli nie ma takiego uzależnienia to o sygnale na następnym semaforze informuje tarcza ostrzegawcza.",
    id: nanoid(),
    correct: null,
  },
  {
    name: "Sygnał S7  Jazda z prędkością nieprzekraczającą 100 km/h przy tym i następnym semaforze",
    code: [5, 0, 3, 2],
    descryption:
      "Sygnał S7 zezwala na jazdę z prędkością nie większą niż 100 km/h i informuje, że następny semafor nadaje sygnał zezwalający na jazdę z prędkością nie większą niż 100 km/h;",
    id: nanoid(),
    correct: null,
  },
  {
    name: "Sygnał S8  Jazda z prędkością nieprzekraczającą 100 km/h a przy następnym semaforze z prędkością zmniejszoną do 40 lub 60 km/h”",
    code: [6, 0, 3, 2],
    descryption:
      "Sygnał S8 zezwala na jazdę z prędkością nie większą niż 100 km/h i informuje, że następny semafor nadaje sygnał zezwalający na jazdę z prędkością nie większą niż 40 lub 60 km/h;",
    id: nanoid(),
    correct: null,
  },
  {
    name: "Sygnał S9  Jazda z prędkością nieprzekraczającą 100 km/h,a przy następnym semaforze - Stój",
    code: [3, 0, 3, 2],
    descryption:
      "Sygnał S9 zezwala na jazdę z prędkością nie większą niż 100 km/h i informuje, że następny semafor nadaje sygnał „Stój”;",
    id: nanoid(),
    correct: null,
  },
  {
    name: "Sygnał S10 Jazda z prędkością nieprzekraczającą 40 km/h a potem z największą dozwoloną prędkością",
    code: [2, 0, 3, 0],
    descryption:
      "Sygnał S10 zezwala na jazdę z prędkością nie większą niż 40 km/h i informuje, że na następnym semaforze, jeżeli semafor nadający sygnał S10 jest z nim uzależniony, nadawany jest sygnał zezwalający na jazdę z największą dozwoloną prędkością. Jeżeli nie ma takiego uzależnienia to o sygnale na następnym semaforze informuje tarcza ostrzegawcza.",
    id: nanoid(),
    correct: null,
  },
  {
    name: "Sygnał S10 a Jazda z prędkością nieprzekraczającą 60 km/h a potem z największą dozwoloną prędkością",
    code: [2, 0, 3, 3],
    descryption:
      "Sygnał S10a zezwala na jazdę z prędkością nie większą niż 60 km/h i informuje, że na następnym semaforze, jeżeli semafor nadający sygnał S10a jest z nim uzależniony, nadawany jest sygnał zezwalający na jazdę z największą dozwoloną prędkością. Jeżeli nie ma takiego uzależnienia to o sygnale na następnym semaforze informuje tarcza ostrzegawcza.",
    id: nanoid(),
    correct: null,
  },
  {
    name: "Sygnał S11 Jazda z prędkością nieprzekraczająca 40 km/h a przy następnym semaforze z prędkością nieprzekraczającą 100 km/h",
    code: [5, 0, 3, 0],
    descryption:
      "Sygnał S11 zezwala na jazdę z prędkością nie większą niż 40 km/h i informuje, że następny semafor nadaje sygnał zezwalający na jazdę z prędkością nie większą niż 100 km/h;",
    id: nanoid(),
    correct: null,
  },
  {
    name: "Sygnał s11a Jazda z prędkością nieprzekraczającą 60 km/h, a przy następnym semaforze - z prędkością nieprzekraczającą 100km/h",
    code: [5, 0, 3, 3],
    descryption:
      "Sygnał S11a zezwala na jazdę z prędkością nie większą niż 60 km/h i informuje, że następny semafor nadaje sygnał zezwalający na jazdę z prędkością nie większą niż 100 km/h;",
    id: nanoid(),
    correct: null,
  },
  {
    name: "Sygnał S12 jazda z prędkością nieprzekraczającą 40 km/h, a przy następnym semaforze - z prędkością nieprzekraczającą 40 lub 60 km/h",
    code: [6, 0, 3, 0],
    descryption:
      "Sygnał S12 zezwala na jazdę z prędkością nie większą niż 40 km/h i informuje, że następny semafor nadaje sygnał zezwalający na jazdę z prędkością nie większą niż 40 lub 60 km/h;",
    id: nanoid(),
    correct: null,
  },
  {
    name: "Sygnał S12a Jazda z prędkością nieprzekraczającą 60 km/h, a przy następnym semaforze - z prędkością zmniejszoną do 40 lub 60km/h”",
    code: [6, 0, 3, 3],
    descryption:
      "Sygnał S12a zezwala na jazdę z prędkością nie większą niż 60 km/h i informuje, że następny semafor nadaje sygnał zezwalający na jazdę z prędkością nie większą niż 40 lub 60 km/h;",
    id: nanoid(),
    correct: null,
  },
  {
    name: "Sygnał S13 Jazda z prędkością nieprzekraczającą 40 km/h, a przy następnym semaforze - Stój”",
    code: [3, 0, 3, 0],
    descryption:
      "Sygnał S13 zezwala na jazdę z prędkością nie większą niż 40 km/h i informuje, że następny semafor nadaje sygnał „Stój”;",
    id: nanoid(),
    correct: null,
  },
  {
    name: "Sygnał S13a Jazda z prędkością nieprzekraczającą 60 km/h, a przy następnym semaforze - Stój”:",
    code: [3, 0, 3, 3],
    descryption:
      "Sygnał S13a zezwala na jazdę z prędkością nie większą niż 60 km/h i informuje, że następny semafor nadaje sygnał „Stój”;",
    id: nanoid(),
    correct: null,
  },
  {
    name: "Sygnał zastępczy Sz „Można przejechać obok semafora wskazującego sygnał „Stój” albo sygnał wątpliwy, albo też semafora nieoświetlonego lub przejechać obok sygnalizatora sygnału zastępczego, mającego wyłącznie latarnię ze światłem białym - bez rozkazu pisemnego”",
    code: [1, 0, 4, 0],
    descryption:
      "Jazdę, obok semafora z prędkością nie większą niż 40 km/h i nie wymaga zatrzymania się przed nim jazdę do następnego semafora, tarczy zaporowej, miejsca ustawienia tarczy zatrzymania D 1 Sygnał zastępczy Sz zezwala na: przy wyjeździe na szlak z PBL jazda z prędkością do 40 km/h obowiązuje w granicach posterunku ruchu. Przy wyjeździe na szlak z SBL – 20km/h",
    id: nanoid(),
    correct: null,
  },
];
