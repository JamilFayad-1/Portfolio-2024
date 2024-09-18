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

    let animationInitiale = gsap.timeline({ paused: false });

    animationInitiale.fromTo(welcomeMessage.querySelector('h1'), {
        text: '',
    }, {
        duration: 1,
        text: 'bienvenue',
        preserveSpaces: true,
        ease: 'power1.inOut'
    })
        .to(welcomeMessage, {
            opacity: 0,
            duration: 1,
            ease: 'power1.inOut',
            delay: 1
        })
        .fromTo(header, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1.5,
            ease: 'power2.inOut'
        },)
        .fromTo(experience, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1.5,
            ease: 'power2.inOut'
        }, "<")
        .fromTo(image, {
            scale: 0.9,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: 'power2.inOut'
        }, "<")
        .fromTo(projets, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1.5,
            ease: 'power2.inOut'
        }, "<0.2")
        .fromTo(propos, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1.5,
            ease: 'power2.inOut'
        }, "<0.2")
        .fromTo(contact, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1.5,
            ease: 'power2.inOut'
        }, "<")
        .fromTo(liens, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1.5,
            ease: 'power2.inOut'
        }, "<");

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
        projet.addEventListener('click', function () {

            if (projet.querySelector('img').classList.contains('hidden')) {
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


    const contactezMoiPopupContainer = document.getElementById('contactezMoiPopupContainer');
    const contactezMoiPopup = document.getElementById('contactezMoiPopup');
    const closeContactezMoiPopup = document.getElementById('closeContactezMoiPopup');

    contact.addEventListener('click', function(){
        contactezMoiPopupContainer.classList.add('pointer-events-auto');
        contactezMoiPopup.classList.add('pointer-events-auto');
        contactezMoiPopupContainer.classList.add('bg-gray-900/60');
        gsap.to(contactezMoiPopup, {
            y: 0,
            duration: 1.5,
            ease: 'power3.inOut'
        })
    })

    closeContactezMoiPopup.addEventListener('click', function(){
        gsap.to(contactezMoiPopup, {
            y: "-100%",
            duration: 1.5,
            ease: "power3.inOut"
        })
        setTimeout(() => {
            contactezMoiPopupContainer.classList.remove('pointer-events-auto');
        contactezMoiPopup.classList.remove('pointer-events-auto');
        contactezMoiPopupContainer.classList.add('pointer-events-none');
        contactezMoiPopup.classList.add('pointer-events-none');
        contactezMoiPopupContainer.classList.remove('bg-gray-900/60');
        }, 1000)
    })


    sectionAccueilConnita.click();
});