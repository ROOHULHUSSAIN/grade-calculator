let grades = "";
const res = document.querySelector('.result');
var btn = document.querySelector('.btn');
let finalgrade ;

btn.addEventListener('click', show);

function show() {
  let eng = document.querySelector('#english').value;
  let phy = document.querySelector('#phy').value;
  let chem = document.querySelector('#chem').value;
  let maths = document.querySelector('#maths').value;
  let total = parseFloat(eng) + parseFloat(phy) + parseFloat(chem) + parseFloat(maths);
  let perc = parseFloat((total/400)*100);

  if(eng === '' ||phy === '' || chem === '' || maths === '')
  {
    alert("Enter the Values");
  }
  else{
    // Grade
  if(perc <= 100 && perc >= 80)
  {
    grades = "A+";
  }else if(perc <= 79 && perc >= 70)
  {
    grades = "A";
  }else if(perc <= 69 && perc >= 60)
  {
    grades = "B";
  }else if(perc <= 59 && perc >= 50)
  {
    grades = 'C';
  } else if(perc <= 49 && perc >= 40)
  {
    grades = 'D';
  }
  else {
    grades = 'F';
  }

  // Result
  if(grades == 'F')
  {
    finalgrade = "Fail";
    color = "red";
  } else {
    finalgrade = "Pass";
    color = "green";
  }

  finalResult(finalgrade,color,perc,grades,total);
  }
}

function finalResult(finalgrade,color,perc,grades,total)
{
    const p = document.createElement("p");
    let txt = document.createTextNode(`Out of 400, your total is ${total} and percentage ${perc}. Your grade is ${grades}. You are ${finalgrade}`); 
    p.appendChild(txt);
    p.style.color = `${color}`;
    res.appendChild(p);
}