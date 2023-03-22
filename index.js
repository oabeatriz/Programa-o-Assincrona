// estudo sobre as funções await e async - prog assíncrona.

function novoUsuario(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var erro = false;
      if(!erro){
        resolve({ mensagem: "Sucesso."});
         }else{
        reject();
         }
        
    }, 2000)
  });
}
// await é um comando pro javascript aguardar a resposta da promise antes de executar o programa. apenas para resolve!! (erro igual a false.)
async function main(){
  var dados = await novoUsuario();
  console.log(dados);
  
}
main();

// tratando um erro utilizando async e await (caso o erro seja true.)

async function main(){

try{
   var dados = await novoUsuario();
  console.log(dados);
}catch(erro){
  console.log("Erro.")
}

}
main();