
    
    
    let localidades = {
         SaoPaulo : [
            'Santa cruz do rio pardo'
        ]}

        let selectCidade;

      function showCity(){
         estadoSelecionado = document.querySelector('#estado')
         console.log(estadoSelecionado.value);
         
        selectCidade = this.document.querySelector('#cidade')
        if(estadoSelecionado.value == 'São Paulo'){
        for(i in localidades.SaoPaulo){
            selectCidade.innerHTML += `<option value='${localidades.SaoPaulo[i]}'>${localidades.SaoPaulo[i]}</option>`
          }
        } 
      }
