import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/holidays', (request, response) => {

  const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "17/4/2022", name: "Páscoa" },
    { date: "21/4/2022", name: "Tiradentes" },
    { date: "1/5/2022", name: "Dia do trabalho" },
    { date: "16/6/2022", name: "Corpus Christi" },
    { date: "7/9/2022", name: "Independência do Brasil" },
    { date: "12/10/2022", name: "Nossa Senhora Aparecida" },
    { date: "2/11/2022", name: "Finados" },
    { date: "15/11/2022", name: "Proclamação da República" },
    { date: "25/12/2022", name: "Natal" }
  ];

  response.send(holidays);
});

app.get('/is-today-holiday', (request, response) => {
  const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "17/4/2022", name: "Páscoa" },
    { date: "21/4/2022", name: "Tiradentes" },
    { date: "1/5/2022", name: "Dia do trabalho" },
    { date: "16/6/2022", name: "Corpus Christi" },
    { date: "7/9/2022", name: "Independência do Brasil" },
    { date: "12/10/2022", name: "Nossa Senhora Aparecida" },
    { date: "2/11/2022", name: "Finados" },
    { date: "15/11/2022", name: "Proclamação da República" },
    { date: "25/12/2022", name: "Natal" }]
;
  let nome = ""
  const hoje = new Date();
  for(let i = 0; i < holidays.length; i++){
    if(holidays[i].date.includes(hoje.toLocaleDateString())){
      response.send(`Sim, hoje é ${holidays[i].name}.`)
    }}
    response.send("Não, hoje não é feriado.");
})

app.get('/holidays/:idMes', (request, response) => {
  const id = request.params.idMes;
  let feriadoMes = "Esse mês não tem feriado! 😭"
  if(id === "1") feriadoMes = ["1/1/2022", "3/1/2022"]
  if(id === "4") feriadoMes = ["17/4/2022", "21/4/2022"]
  if(id === "5") feriadoMes = ["1/5/2022"]
  if(id === "6") feriadoMes = ["16/6/2022"]
  if(id === "9") feriadoMes = ["7/9/2022"]
  if(id === "10") feriadoMes = ["12/10/2022"]
  if(id === "11") feriadoMes = ["2/11/2022", "15/11/2022"]
  if(id === "12") feriadoMes = ["25/12/2022"]

  response.send(feriadoMes)
})
app.listen(5000, () => {
  console.log("Deu bom!")
});