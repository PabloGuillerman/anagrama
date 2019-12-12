        <script>

        var N ="hola, que buena ola Laomir";
        var M ="OAL";
    
        solution(N.toLowerCase(), M.toLowerCase());
    
        function solution(A,B)
        {
            var coincidencia = 0; 
            var anagrama = 0;
            var busca = true;
            var caracterEncontrado = false;
    
            for (i = 0; i < A.length ;i++)
            {
                var caracter = A.charAt(i);
    
                busca = true;
                caracterEncontrado = false;
    
                for (j = 0; j <=(B.length); j++)
                { 
                    if(caracter == B[j] && busca)
                    {
                        coincidencia++;
                        caracterEncontrado = true;
                        busca = false;
                    }
                }
    
                if (caracterEncontrado == false) coincidencia=0;
    
                if(coincidencia==B.length)
                {
                    anagrama++;
                    coincidencia=0;
                }
            }
    
         console.log("la cantidad de anagramas encontrados son: " + anagrama);
        }
    </script>
    