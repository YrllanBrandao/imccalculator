const inputAltura = document.querySelector('#inputAltura');
const inputPeso = document.querySelector('#inputPeso');
const botaoCalc = document.querySelector('#calcular');
const botaoLimp = document.querySelector('#limpar');
const divImc = document.querySelector('#imc');


botaoCalc.addEventListener('click', () => {
  
  showImc(calculoImc());
 
})
botaoLimp.addEventListener('click', () => {
  
  inputPeso.value = "";
  inputAltura.value = "";
  const row = document.querySelector('.linha1');
  const row1 = document.querySelector('.linha2');
  const row2 = document.querySelector('.linha3');
  const row3 = document.querySelector('.linha4');
  const row4 = document.querySelector('.linha5');
  row.style.background = "none";
  row1.style.background = "none";
  row2.style.background = "none";
  row3.style.background = "none";
  row4.style.background = "none";
  
  divImc.innerHTML = "SEU IMC";
  
})

function calculoImc()
{
  
  
  if(inputPeso.value.length > 0 && inputAltura.value.length > 0)
  {
   
  const alt = inputAltura.value.replace(',','.');
  const alturaPow =Number(alt)**2;
  const pes = inputPeso.value.replace(',','.');
  const peso = Number(pes);
  const imc = peso / alturaPow;
  


  
  return imc;
  }
  else
  {
    alert("preencha todos os dados")
  }
}

function showImc (imc)
{
  
  divImc.innerHTML = `SEU IMC: ${imc.toFixed(2)}`;
  
  const row = document.querySelector('.linha1');
  const row1 = document.querySelector('.linha2');
  const row2 = document.querySelector('.linha3');
  const row3 = document.querySelector('.linha4');
  const row4 = document.querySelector('.linha5');
  row.style.background = "none";
  row1.style.background = "none";
  row2.style.background = "none";
  row3.style.background = "none";
  row4.style.background = "none";
  if (imc < 18.5)
  {
    row.style.background = "#FFBD35";
   
  }
  else if (imc >18.5 && imc < 24.9)
  {
    row1.style.background = "#FFD574";
  }
  else if (imc > 24.9 && imc < 29.9 )
  {
    row2.style.background = "#FFD574";
  }
  else if (imc > 29.9 && imc <= 39.9)
  {
    row3.style.background = "#FFD574";
  }
  else if (imc > 39.9)
  {
  
  
    row4.style.background = "#FF5D73";
  }
}