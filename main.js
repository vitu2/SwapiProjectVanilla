var emailArray=[];
        var passwordArray=[];

        var loginBox = document.getElementById("login");
        var regBox = document.getElementById("register");
        var forgetBox = document.getElementById("forgot");

        var loginTab = document.getElementById("lt");
        var regTab = document.getElementById("rt");

        function regTabFun(){
            event.preventDefault();

            regBox.style.visibility="visible";
            loginBox.style.visibility="hidden";
            forgetBox.style.visibility="hidden";

        }
        function loginTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="visible";
            forgetBox.style.visibility="hidden";

        }
        function forTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="hidden";
            forgetBox.style.visibility="visible";


        }


        function register(){
            event.preventDefault();

            var email = document.getElementById("re").value;
            var password = document.getElementById("rp").value;
            var passwordRetype = document.getElementById("rrp").value;

            if (email == ""){
                alert("Necessario o email");
                return ;
            }
            else if (password == ""){
                alert("Necessario a senha");
                return ;
            }
            else if (passwordRetype == ""){
                alert("Necessario a senha");
                return ;
            }
            else if ( password != passwordRetype ){
                alert("A senha não corresponde digite novamente.");
                return;
            }
            else if(emailArray.indexOf(email) == -1){
                emailArray.push(email);
                passwordArray.push(password);

                alert(email + "  obrigado por si registrar \ntente logar agora");

                document.getElementById("re").value ="";
                document.getElementById("rp").value="";
                document.getElementById("rrp").value="";
            }
            else{
                alert(email + " já existe");
                return ;
            }
        }
        function login(){
            event.preventDefault();

            var email = document.getElementById("se").value;
            var password = document.getElementById("sp").value;

            var i = emailArray.indexOf(email);

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Necessario o email");
                    return ;
                }
                alert("O email não existe.");
                return ;
            }
            else if(passwordArray[i] != password){
                if (password == ""){
                    alert("Necessario a senha");
                    return ;
                }
                alert("Senha não corresponde.");
                return ;
            }
            else {
                window.location.href = 'https://apistarwars.vercel.app/';

                document.getElementById("se").value ="";
                document.getElementById("sp").value="";
                return ;
            }

        }
        function forgot(){
            event.preventDefault();

            var email = document.getElementById("fe").value;

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Necessario o email");
                    return ;
                }
                alert("O email não existe.");
                return ;
            }

            alert("Enviado para o seu e-mail, verifique em 24 horas. \n Obrigado");
            document.getElementById("fe").value ="";
        }