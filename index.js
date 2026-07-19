
        // --- JAVASCRIPT ---

        // 1. Teny miafina mialoha (Azonao ovaina eto araka izay tianao)
        const Mdp = "3242871530"; 
        const nom = "Miangaly" ;
        //3242871530
        // 2. Andalana fitoriam-pitiavana (Miseho tsikelikely)
        const message = [
            "✨Ho an'i "+"💕"+ nom+ "🥰",
            "✨Olona sariaka , tsara toetra , tsaran-tarehy amam-bika ✨,",
            "✨Tena oe meva sy kanto , mahafatifaty kely 🥰,",
            "😿Mifona aloha zah fa holazaiko amndry amzay ngamba fa 🙏😥,",
            "Hatramzay nahafantarako andry zay dia mieritreritra andry fona zah isanandro, isan'ora, isan-tsegondra🥺, 🙀ay mbola misy isa-minitra kay aloha😊🙈;",
            "Tsy mahita tory mintsy aza mo ndraindray 😥,",
            "@fotoana amakiandry an'ity dia te ilaza amndry zah fa misy toerana lehibe ho andry ato am-poko 💖😽.",
            "Fantatro oe sarotra be le izy fa lazaiko ihany nefa satria tsisy mahalala ny ao am-po tsy miloaka hoy ny fitenenana zay🥺,",
            "✨Tiako be ndry!🥺🥰",
            "Tsy biscuit tsony 🙈 fa Bisouuu 💋😽",

        ];

        // Mampiasa 'Enter' raha handefa
        function checkEnter(event) {
            if (event.key === "Enter") {
                verifyPassword();
            }
        }

        // Fanamarinana ny MDP
        function verifyPassword() {
            const input = document.getElementById("pwd-input").value;
            const error = document.getElementById("error-msg");

            if (input.toLowerCase() === Mdp.toLowerCase()) {
                const screen = document.getElementById("password-screen");
                screen.style.opacity = "0";
                
                setTimeout(() => {
                    screen.style.display = "none";
                    
                    const main = document.getElementById("main-content");
                    main.style.display = "block";
                    
                    // Transition Douce 
                    setTimeout(() => {
                        main.style.opacity = "1";
                        createHearts(); // mipoitra miadana ny coeur
                        startLoveLetter(); // manoratra tsikelikely
                        createFlowers(); // fleurs
                    }, 200);
                }, 1000);
            } else {
                error.style.display = "block";
            }
        }

        // display step-by-step
        function startLoveLetter() {
            const container = document.getElementById("letter-content");
            let index = 0;

            function showNextLine() {
                if (index < message.length) {
                    const p = document.createElement("p");
                    p.className = "letter-line";
                    p.innerText = message[index];
                    container.appendChild(p);

                    // debut animation apres creation
                    setTimeout(() => {
                        p.classList.add("show");
                    }, 100);

                    index++;
                    // Intervalle de temps isaky ny 3 segondra (3000ms)
                    setTimeout(showNextLine, 3000); 
                } else {
                    // Signature farany (show)
                    setTimeout(() => {
                        const sig = document.getElementById("signature");
                        sig.style.opacity = "1";
                    }, 1500);
                }
            }

            showNextLine();
        }

        // Creation des coeurs
        function createHearts() {
            // 1 isaky ny 2 segondra (2000ms)
            setInterval(() => {
                const heart = document.createElement("div");
                heart.className = "heart";
                heart.innerHTML = ["❤️"];
                
                // Aparitaka manerana ny efijery (0% ka hatramin'ny 95%)
                heart.style.right = Math.random() * 100 + "vw";
                // Habeny samihafa
                heart.style.fontSize = (Math.random() * 30 + 30) + "px";
                // Hafainganam-pandeha tena miadana (8s ka hatramin'ny 12s)
                heart.style.animationDuration = (Math.random() * 4 + 8) + "s";
                
                document.body.appendChild(heart);

                // Fafana rehefa mivoaka ny efijery
                setTimeout(() => {
                    heart.remove();
                }, 20000);
            }, 2100); 

        }

       // Creation_fleurs
        function createFlowers() {
            // 1 isaky ny 2 segondra (2000ms)
            setInterval(() => {
                const fleur = document.createElement("div");
                fleur.className = "fleur";
                fleur.innerHTML = ["🌹"];
                
                // Aparitaka manerana ny cadre (0% ka hatramin'ny 95%)
                fleur.style.left = Math.random() * 100 + "vw";
                // Habeny samihafa
                fleur.style.fontSize = (Math.random() * 40 + 40) + "px";
                // Hafainganam-pandeha tena miadana (8s ka hatramin'ny 12s)
                fleur.style.animationDuration = (Math.random() *4 + 8) + "s";
                
                document.body.appendChild(fleur);

                // Fafana rehefa mivoaka ny cadre
                setTimeout(() => {
                    fleur.remove();
                }, 20000);
            }, 2100);
        }       
