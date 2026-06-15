function atualizarTransportadora() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const abaControle = ss.getSheetByName("Controle");
  const abaTransportadora = ss.getSheetByName("Transportadora");

  const controle = abaControle.getDataRange().getValues();
  const transp = abaTransportadora.getDataRange().getValues();

  const cabTransp = transp[0];

  const colNF = cabTransp.indexOf("NOTA FISCAL");
  const colPrevOrig = cabTransp.indexOf("PREVISÃO DE ENTREGA ORIGINAL");
  const colPrev = cabTransp.indexOf("PREVISÃO DE ENTREGA");
  const colStatus = cabTransp.indexOf("STATUS");
  const colOcorrencia = cabTransp.indexOf("ULTIMA OCORRÊNCIA");
  const colData = cabTransp.indexOf("DATA OCORRÊNCIA");

  const mapa = {};

  for (let i = 1; i < transp.length; i++) {

    const notas = String(transp[i][colNF])
  .split(",")
  .map(n => n.replace(/[^0-9]/g, ""))
  .filter(n => n !== "");

notas.forEach(nf => {

  mapa[nf] = {
    status: transp[i][colStatus],
    prevOrig: transp[i][colPrevOrig],
    prev: transp[i][colPrev],
    ocorrencia: transp[i][colOcorrencia],
    data: transp[i][colData]
  };

});
  }

  for (let i = 1; i < controle.length; i++) {

    const nf = String(controle[i][0])
  .replace(/[^0-9]/g, "");

    if (mapa[nf]) {

      controle[i][4] = mapa[nf].status;
      controle[i][5] = mapa[nf].prevOrig;
      controle[i][6] = mapa[nf].prev;
      controle[i][7] = mapa[nf].ocorrencia;
      controle[i][8] = mapa[nf].data;
    }
  }

  abaControle
    .getRange(1, 1, controle.length, controle[0].length)
    .setValues(controle);

  SpreadsheetApp.getUi().alert("Atualização concluída!");
}
