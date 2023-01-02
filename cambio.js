
<script type="text/javascript">
   
    function convertir() {
        var valore = parseInt (document.getElementById ("valor").value);
        var resultado = 0;
        var dolar = 4.11;
        var euro = 4.85;
        if (document.getElementById("uno") .checked) {
            resultado = valore / dolar;
            alert ( "El cambio de Pesos a Dolares es: $" + resultado.toFixed (2));
        }

         if (document.getElementById ("dos").checked){
            resultado = valore / euro;
            alert ("El cambio de Pesos a Euro es: " + resultado.toFixed(2));
        }

        if {
            alert ("Tenes que completar todos los requerimientos");
        }
            
    }
</script>