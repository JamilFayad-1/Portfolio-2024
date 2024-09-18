gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(Flip);

document.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById('header');
    const experience = document.getElementById('experience');
    const image = document.getElementById('image');
    const projets = document.getElementById('projets');
    const propos = document.getElementById('propos');
    const contact = document.getElementById('contact');
    const liens = document.getElementById('liens');
    const welcomeMessage = document.getElementById('welcomeMessage');

    gsap.fromTo(welcomeMessage.querySelector('h1'), {
        text: '',
    }, {
        duration: 1,
        text: 'bienvenue',
        preserveSpaces: true,
        ease: 'power1.inOut'
    })

    gsap.to(welcomeMessage, {
        opacity: 0,
        duration: 1,
        ease: 'power1.inOut',
        delay: 1
    })
    
    gsap.fromTo(header, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
        delay: 2.2
    })

    gsap.fromTo(experience, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
        delay: 2.4
    })

    gsap.fromTo(image, {
        scale: 0.9,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
        delay: 2
    })

    gsap.fromTo(projets, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
        delay: 2.6
    })

    gsap.fromTo(propos, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
        delay: 2.2
    })

    gsap.fromTo(contact, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
        delay: 2.4
    })

    gsap.fromTo(liens, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
        delay: 2.5
    })


    const btnProchainTexte = document.getElementById('btnProchainTexte');
    const textAProposDeMoi = document.getElementById('texteAProposAccueil');

    let texteIndex = 0;
    /* Event listener pour le bouton click next sur la section a propos dans la page accueil */
    btnProchainTexte.addEventListener('click', function () {
        texteIndex++;

        textAProposDeMoi.classList.add('animate-pulse');
        gsap.to(textAProposDeMoi, {
            delay: 1,
            onComplete: () => {
                textAProposDeMoi.classList.remove('animate-pulse');
            }
        })

        if (texteIndex == 0) {
            gsap.to(textAProposDeMoi, {
                speed: 1,
                text: "Je suis un développeur web passionné par la création d'expériences numériques intuitives et performantes. Actuellement étudiant en développement web, je suis toujours en quête de nouvelles connaissances et de défis à relever.",
                ease: "power3.inOut",
                preserveSpaces: true,
            });
        } else if (texteIndex == 1) {
            gsap.to(textAProposDeMoi, {
                speed: 1,
                text: "Mon parcours m'a permis de développer une approche rigoureuse qui combine créativité et expertise technique. Mon objectif est de transformer des idées en interfaces élégantes et fonctionnelles, tout en veillant à l’optimisation des performances.",
                ease: "power3.inOut",
                preserveSpaces: true,
            });
        } else {
            gsap.to(textAProposDeMoi, {
                speed: 1,
                text: "Je suis à la recherche d’un stage qui me permettra de mettre en pratique mes compétences, d'acquérir de l’expérience professionnelle, et de continuer à évoluer. Je suis prêt à collaborer avec des équipes dynamiques pour créer des solutions qui font la différence.",
                ease: "power3.inOut",
                preserveSpaces: true,
            });
            texteIndex = -1;
        }
    })


    const sectionAccueilConnita = document.getElementById('projetConnita');
    const sectionAccueilWonders = document.getElementById('projetWonders');
    const sectionAccueilJSP = document.getElementById('projetJSP');

    const listeProjets = [];
    listeProjets.push(sectionAccueilConnita, sectionAccueilWonders, sectionAccueilJSP);
    listeProjets.forEach(projet => {
        projet.addEventListener('click', function() {

            if(projet.querySelector('img').classList.contains('hidden')){
                listeProjets.forEach(projet2 => {
                    projet2.querySelector('h2').classList.remove('hidden');
                    projet2.querySelector('img').classList.add('hidden');
                })
                projet.querySelector('h2').classList.add('hidden');
                projet.querySelector('img').classList.remove('hidden');
                gsap.fromTo(projet.querySelector('img'), {
                    opacity: 0,
                }, {
                    opacity: 1,
                    duration: 1,
                    ease: 'power1.inOut',
                })
            }
        });
    });


    sectionAccueilConnita.click();
});