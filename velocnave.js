let spaceship = {
    name: function() {
        prompt("Informe o nome da nave: ")
    },
    type: function() {
        prompt("Informe o tipo da nave: ")
    },
    velocity = 0,
    velocMax: function() {
        prompt("Informe a velocidade máxima: ")
    },
    accelerationMenu: function() {
       let choose = prompt("Deseja acelerar a nave? ")
       if (choose == "sim") {
          value = prompt("Informe o valor da aceleração: ")
          this.velocity+=value         
       }
       else{
           alert("A nave ",this.name," do tipo ",this.type," estava na velocidade ",this.velocity,".")
       }

    }
}