function createGame(player1, hour, player2, name1, name2) {
  return `
    <li>
    <div class="name_caixa">
      <img src="./assets/${player1}.svg" alt="Bandeira do ${player1}">
      
      <p class="name_time">${name1}</p>
      </div>
      <strong>${hour}</strong>
      <div class="name_caixa">
      <img src="./assets/${player2}.svg" alt="Bandeira do ${player2}">
      
      <p class="name_time">${name2}</p>
      </div>
    </li>
    `;
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
    `;
}

document.querySelector("#app").innerHTML = `
        <header>
            <img src="./assets/logo.svg" alt="">
        </header>
        <main id="cards">
        ${createCard(
          "20/11",
          "domingo",
          createGame("qatar", "13:00", "ecuador", "qatar", "ecuador")
        )}
        ${createCard(
          "21/11",
          "segunda",
          createGame("england", "10:00", "wales", "england", "wales") +
            createGame(
              "senegal",
              "13:00",
              "netherlands",
              "senegal",
              "netherlands"
            ) +
            createGame(
              "united states",
              "16:00",
              "wales",
              "united states",
              "wales"
            )
        )}
        ${createCard(
          "22/11",
          "terça",
          createGame(
            "argentina",
            "07:00",
            "saudi arabia",
            "argentina",
            "saudi arabia"
          ) +
            createGame("denmark", "10:00", "tunisia", "denmark", "tunisia") +
            createGame("mexico", "13:00", "poland", "mexico", "poland") +
            createGame("france", "16:00", "australia", "france", "australia")
        )}
        ${createCard(
          "23/11",
          "quarta",
          createGame("morocco", "07:00", "croatia", "morocco", "croatia") +
            createGame("germany", "10:00", "japan", "germany", "japan") +
            createGame("spain", "13:00", "costa rica", "spain", "costa rica") +
            createGame("belgium", "16:00", "canada", "belgium", "canada")
        )}
        ${createCard(
          "24/11",
          "quinta",
          createGame(
            "switzerland",
            "07:00",
            "cameroon",
            "switzerland",
            "cameroon"
          ) +
            createGame(
              "uruguay",
              "10:00",
              "south korea",
              "uruguay",
              "south korea"
            ) +
            createGame("portugal", "13:00", "ghana", "portugal", "ghana") +
            createGame("brazil", "16:00", "serbia", "brazil", "serbia")
        )}
        ${createCard(
          "25/11",
          "sexta",
          createGame("wales", "07:00", "iran", "wales", "iran") +
            createGame("qatar", "10:00", "senegal", "qatar", "senegal") +
            createGame(
              "netherlands",
              "13:00",
              "ecuador",
              "netherlands",
              "ecuador"
            ) +
            createGame(
              "england",
              "16:00",
              "united states",
              "england",
              "united states"
            )
        )}
        ${createCard(
          "26/11",
          "sábado",
          createGame("tunisia", "07:00", "australia", "tunisia", "australia") +
            createGame(
              "poland",
              "10:00",
              "saudi arabia",
              "poland",
              "saudi arabia"
            ) +
            createGame("france", "13:00", "denmark", "france", "denmark") +
            createGame("argentina", "16:00", "mexico", "argentina", "mexico")
        )}
        ${createCard(
          "27/11",
          "domingo",
          createGame("japan", "07:00", "costa rica", "japan", "costa rica") +
            createGame("belgium", "10:00", "morocco", "belgium", "morocco") +
            createGame("croatia", "13:00", "canada", "croatia", "canada") +
            createGame("spain", "16:00", "germany", "spain", "germany")
        )}
        ${createCard(
          "28/11",
          "segunda",
          createGame("cameroon", "07:00", "serbia", "cameroon", "serbia") +
            createGame(
              "south korea",
              "10:00",
              "ghana",
              "south korea",
              "ghana"
            ) +
            createGame(
              "brazil",
              "13:00",
              "switzerland",
              "brazil",
              "switzerland"
            ) +
            createGame("portugal", "16:00", "uruguay", "portugal", "uruguay")
        )}
        ${createCard(
          "29/11",
          "terça",
          createGame("ecuador", "07:00", "senegal", "ecuador", "senegal") +
            createGame(
              "netherlands",
              "10:00",
              "qatar",
              "netherlands",
              "qatar"
            ) +
            createGame(
              "iran",
              "13:00",
              "united states",
              "iran",
              "united states"
            ) +
            createGame("wales", "16:00", "england", "wales", "england")
        )}
        ${createCard(
          "30/11",
          "quarta",
          createGame("tunisia", "12:00", "france", "tunisia", "france") +
            createGame(
              "australia",
              "12:00",
              "denmark",
              "australia",
              "denmark"
            ) +
            createGame("poland", "16:00", "argentina", "poland", "argentina") +
            createGame(
              "saudi arabia",
              "16:00",
              "mexico",
              "saudi arabia",
              "mexico"
            )
        )}
        ${createCard(
          "01/12",
          "quinta",
          createGame("croatia", "12:00", "belgium", "croatia", "belgium") +
            createGame("canada", "12:00", "morocco", "canada", "morocco") +
            createGame("japan", "16:00", "spain", "japan", "spain") +
            createGame(
              "costa rica",
              "16:00",
              "germany",
              "costa rica",
              "germany"
            )
        )}
        ${createCard(
          "02/12",
          "sexta",
          createGame(
            "south korea",
            "12:00",
            "portugal",
            "south korea",
            "portugal"
          ) +
            createGame("ghana", "12:00", "uruguay", "ghana", "uruguay") +
            createGame(
              "serbia",
              "16:00",
              "switzerland",
              "serbia",
              "switzerland"
            ) +
            createGame("cameroon", "16:00", "brazil", "cameroon", "brazil")
        )}
        </main>
`;
