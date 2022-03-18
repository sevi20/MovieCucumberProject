$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/reservation/reservation.feature");
formatter.feature({
  "line": 1,
  "name": "Създаване на резервация за кино прожекция",
  "description": "",
  "id": "създаване-на-резервация-за-кино-прожекция",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Резервация за кино прожекция",
  "description": "",
  "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за резервация",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име: \"\u003cиме\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда телефонен номер: \"\u003cтелефон\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда прожекция: \"\u003cфилм\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда време на прожекция: \"\u003cвреме\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда място за сядане: \"\u003cмясто\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне бутона за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение: \"\u003cСъобщение\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;",
  "rows": [
    {
      "cells": [
        "име",
        "телефон",
        "филм",
        "време",
        "място",
        "Съобщение"
      ],
      "line": 14,
      "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;1"
    },
    {
      "cells": [
        "Ivan",
        "0887684445",
        "Harry Potter",
        "2022-22-20 20:20",
        "5",
        "Успешна резервация!"
      ],
      "line": 15,
      "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;2"
    },
    {
      "cells": [
        "Alex",
        "0887682567",
        "Harry Potter",
        "2022-22-20 20:20",
        "1",
        "Мястото е заето!"
      ],
      "line": 16,
      "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;3"
    },
    {
      "cells": [
        "",
        "0887656570",
        "Harry Potter",
        "2022-22-20 20:20",
        "2",
        "Моля въведете име!"
      ],
      "line": 17,
      "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;4"
    },
    {
      "cells": [
        "Tanya",
        "",
        "Harry Potter",
        "2022-22-20 20:20",
        "3",
        "Моля въведете номер!"
      ],
      "line": 18,
      "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;5"
    },
    {
      "cells": [
        "Maria",
        "0887698676",
        "Harry Potter",
        "",
        "4",
        "Моля въведете време!"
      ],
      "line": 19,
      "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;6"
    },
    {
      "cells": [
        "Dimitar",
        "0887681238",
        "Harry Potter",
        "2022-22-20 20:20",
        "",
        "Моля въведете място!"
      ],
      "line": 20,
      "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;7"
    },
    {
      "cells": [
        "Petya",
        "0887683563",
        "",
        "2022-22-20 20:20",
        "6",
        "Моля въведете прожекция!"
      ],
      "line": 21,
      "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;8"
    },
    {
      "cells": [
        "",
        "0887682912",
        "Harry Potter",
        "",
        "7",
        "Моля въведете име и време!"
      ],
      "line": 22,
      "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;9"
    },
    {
      "cells": [
        "",
        "",
        "Harry Potter",
        "2022-22-20 20:20",
        "8",
        "Моля въведете име и телефон!"
      ],
      "line": 23,
      "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;10"
    },
    {
      "cells": [
        "Anita",
        "0887682241",
        "",
        "2022-22-20 20:20",
        "",
        "Моля въведете прожекция и място!"
      ],
      "line": 24,
      "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Резервация за кино прожекция",
  "description": "",
  "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за резервация",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име: \"Ivan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда телефонен номер: \"0887684445\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда прожекция: \"Harry Potter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда време на прожекция: \"2022-22-20 20:20\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда място за сядане: \"5\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне бутона за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение: \"Успешна резервация!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 189475100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ivan",
      "offset": 14
    }
  ],
  "location": "ReservationSteps.addName(String)"
});
formatter.result({
  "duration": 2838500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0887684445",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addPhone(String)"
});
formatter.result({
  "duration": 108300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 20
    }
  ],
  "location": "ReservationSteps.addFilm(String)"
});
formatter.result({
  "duration": 104500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-22-20 20:20",
      "offset": 29
    }
  ],
  "location": "ReservationSteps.addTime(String)"
});
formatter.result({
  "duration": 113400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addSeat(String)"
});
formatter.result({
  "duration": 92400,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 3129900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешна резервация!",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 2205300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Резервация за кино прожекция",
  "description": "",
  "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за резервация",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име: \"Alex\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда телефонен номер: \"0887682567\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда прожекция: \"Harry Potter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда време на прожекция: \"2022-22-20 20:20\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда място за сядане: \"1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне бутона за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение: \"Мястото е заето!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 95200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alex",
      "offset": 14
    }
  ],
  "location": "ReservationSteps.addName(String)"
});
formatter.result({
  "duration": 64100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0887682567",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addPhone(String)"
});
formatter.result({
  "duration": 62800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 20
    }
  ],
  "location": "ReservationSteps.addFilm(String)"
});
formatter.result({
  "duration": 71500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-22-20 20:20",
      "offset": 29
    }
  ],
  "location": "ReservationSteps.addTime(String)"
});
formatter.result({
  "duration": 55800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addSeat(String)"
});
formatter.result({
  "duration": 53600,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 61400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Мястото е заето!",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 67600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Резервация за кино прожекция",
  "description": "",
  "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за резервация",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име: \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда телефонен номер: \"0887656570\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда прожекция: \"Harry Potter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда време на прожекция: \"2022-22-20 20:20\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда място за сядане: \"2\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне бутона за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение: \"Моля въведете име!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 114000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    }
  ],
  "location": "ReservationSteps.addName(String)"
});
formatter.result({
  "duration": 107800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0887656570",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addPhone(String)"
});
formatter.result({
  "duration": 83300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 20
    }
  ],
  "location": "ReservationSteps.addFilm(String)"
});
formatter.result({
  "duration": 79700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-22-20 20:20",
      "offset": 29
    }
  ],
  "location": "ReservationSteps.addTime(String)"
});
formatter.result({
  "duration": 82300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addSeat(String)"
});
formatter.result({
  "duration": 87500,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 76600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете име!",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 81900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Резервация за кино прожекция",
  "description": "",
  "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за резервация",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име: \"Tanya\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда телефонен номер: \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда прожекция: \"Harry Potter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда време на прожекция: \"2022-22-20 20:20\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда място за сядане: \"3\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне бутона за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение: \"Моля въведете номер!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 304500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tanya",
      "offset": 14
    }
  ],
  "location": "ReservationSteps.addName(String)"
});
formatter.result({
  "duration": 98700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addPhone(String)"
});
formatter.result({
  "duration": 86400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 20
    }
  ],
  "location": "ReservationSteps.addFilm(String)"
});
formatter.result({
  "duration": 63400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-22-20 20:20",
      "offset": 29
    }
  ],
  "location": "ReservationSteps.addTime(String)"
});
formatter.result({
  "duration": 53700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addSeat(String)"
});
formatter.result({
  "duration": 61500,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 76700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете номер!",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 64900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Резервация за кино прожекция",
  "description": "",
  "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за резервация",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име: \"Maria\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда телефонен номер: \"0887698676\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда прожекция: \"Harry Potter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда време на прожекция: \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда място за сядане: \"4\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне бутона за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение: \"Моля въведете време!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 135700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maria",
      "offset": 14
    }
  ],
  "location": "ReservationSteps.addName(String)"
});
formatter.result({
  "duration": 85800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0887698676",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addPhone(String)"
});
formatter.result({
  "duration": 91600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 20
    }
  ],
  "location": "ReservationSteps.addFilm(String)"
});
formatter.result({
  "duration": 82900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "ReservationSteps.addTime(String)"
});
formatter.result({
  "duration": 89300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addSeat(String)"
});
formatter.result({
  "duration": 101700,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 120900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете време!",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 136400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Резервация за кино прожекция",
  "description": "",
  "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за резервация",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име: \"Dimitar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда телефонен номер: \"0887681238\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда прожекция: \"Harry Potter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда време на прожекция: \"2022-22-20 20:20\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда място за сядане: \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне бутона за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение: \"Моля въведете място!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 125800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dimitar",
      "offset": 14
    }
  ],
  "location": "ReservationSteps.addName(String)"
});
formatter.result({
  "duration": 95400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0887681238",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addPhone(String)"
});
formatter.result({
  "duration": 101200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 20
    }
  ],
  "location": "ReservationSteps.addFilm(String)"
});
formatter.result({
  "duration": 106600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-22-20 20:20",
      "offset": 29
    }
  ],
  "location": "ReservationSteps.addTime(String)"
});
formatter.result({
  "duration": 89100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addSeat(String)"
});
formatter.result({
  "duration": 82700,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 79100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете място!",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 85700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Резервация за кино прожекция",
  "description": "",
  "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за резервация",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име: \"Petya\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда телефонен номер: \"0887683563\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда прожекция: \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда време на прожекция: \"2022-22-20 20:20\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда място за сядане: \"6\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне бутона за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение: \"Моля въведете прожекция!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 89700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Petya",
      "offset": 14
    }
  ],
  "location": "ReservationSteps.addName(String)"
});
formatter.result({
  "duration": 87900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0887683563",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addPhone(String)"
});
formatter.result({
  "duration": 125000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "ReservationSteps.addFilm(String)"
});
formatter.result({
  "duration": 70700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-22-20 20:20",
      "offset": 29
    }
  ],
  "location": "ReservationSteps.addTime(String)"
});
formatter.result({
  "duration": 64700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addSeat(String)"
});
formatter.result({
  "duration": 75400,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 65400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете прожекция!",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 61200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Резервация за кино прожекция",
  "description": "",
  "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за резервация",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име: \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда телефонен номер: \"0887682912\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда прожекция: \"Harry Potter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда време на прожекция: \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда място за сядане: \"7\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне бутона за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение: \"Моля въведете име и време!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 146000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    }
  ],
  "location": "ReservationSteps.addName(String)"
});
formatter.result({
  "duration": 86000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0887682912",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addPhone(String)"
});
formatter.result({
  "duration": 75000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 20
    }
  ],
  "location": "ReservationSteps.addFilm(String)"
});
formatter.result({
  "duration": 90800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "ReservationSteps.addTime(String)"
});
formatter.result({
  "duration": 65600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addSeat(String)"
});
formatter.result({
  "duration": 69200,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 71700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете име и време!",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 86300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Резервация за кино прожекция",
  "description": "",
  "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за резервация",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име: \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда телефонен номер: \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда прожекция: \"Harry Potter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда време на прожекция: \"2022-22-20 20:20\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда място за сядане: \"8\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне бутона за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение: \"Моля въведете име и телефон!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 120100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    }
  ],
  "location": "ReservationSteps.addName(String)"
});
formatter.result({
  "duration": 80800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addPhone(String)"
});
formatter.result({
  "duration": 77300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 20
    }
  ],
  "location": "ReservationSteps.addFilm(String)"
});
formatter.result({
  "duration": 71300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-22-20 20:20",
      "offset": 29
    }
  ],
  "location": "ReservationSteps.addTime(String)"
});
formatter.result({
  "duration": 54500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addSeat(String)"
});
formatter.result({
  "duration": 54000,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 60100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете име и телефон!",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 62800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Резервация за кино прожекция",
  "description": "",
  "id": "създаване-на-резервация-за-кино-прожекция;резервация-за-кино-прожекция;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Потребителя отваря екрана за резервация",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда име: \"Anita\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въвежда телефонен номер: \"0887682241\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Въвежда прожекция: \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Въвежда време на прожекция: \"2022-22-20 20:20\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Въвежда място за сядане: \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натисне бутона за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение: \"Моля въведете прожекция и място!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 135400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anita",
      "offset": 14
    }
  ],
  "location": "ReservationSteps.addName(String)"
});
formatter.result({
  "duration": 60800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0887682241",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addPhone(String)"
});
formatter.result({
  "duration": 50400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "ReservationSteps.addFilm(String)"
});
formatter.result({
  "duration": 47700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-22-20 20:20",
      "offset": 29
    }
  ],
  "location": "ReservationSteps.addTime(String)"
});
formatter.result({
  "duration": 47500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "ReservationSteps.addSeat(String)"
});
formatter.result({
  "duration": 56300,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 52000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля въведете прожекция и място!",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 77600,
  "status": "passed"
});
});