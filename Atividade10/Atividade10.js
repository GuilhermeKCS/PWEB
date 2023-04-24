let Aluno1 = {
    RA: "0030482121023",
    Nome: "Lucas Rossi"
  };
  alert(" RA: " + Aluno1.RA + " Nome: " + Aluno1.Nome);
  

  let Aluno2 = {};
Aluno2.RA = "0030482121004";
Aluno2.Nome = "GuilhermeKCS";
alert(" RA: " + Aluno2.RA + " Nome: " + Aluno2.Nome);


let Aluno3 = {};
Aluno3["RA"] = "0030482121018";
Aluno3["Nome"] = "Gabriel Leite";
alert(" RA: " + Aluno3.RA + " Nome: " + Aluno3.Nome);

function Aluno(ra,nome){
    this.ra = ra;
    this.nome = nome;

    this.MostraDados = function(){
       return  alert(" RA: " + this.ra + " Nome:" + this.nome)
    }
}

let Aluno4 = new Aluno("1234 ","Carlos Tijolinho ");
let x = Aluno4.MostraDados();
