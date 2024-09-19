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

    let animationInitiale = gsap.timeline({ paused: true });

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
    animationInitiale.progress(1);

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

            if (projet.querySelector('section').classList.contains('hidden')) {
                listeProjets.forEach(projet2 => {
                    projet2.querySelector('h2').classList.remove('hidden');
                    projet2.querySelector('section').classList.add('hidden');
                    projet2.querySelector('section').addEventListener('mouseover', function () {
                        projet2.querySelector('img').classList.remove('grayscale-0')
                        projet2.querySelector('img').classList.add('grayscale')
                        projet2.querySelector('p').classList.remove('opacity-0')
                    })
                    projet2.querySelector('section').addEventListener('mouseleave', function () {
                        projet2.querySelector('img').classList.remove('grayscale')
                        projet2.querySelector('img').classList.add('grayscale-0')
                        projet2.querySelector('p').classList.add('opacity-0')
                    })
                })
                projet.querySelector('h2').classList.add('hidden');
                projet.querySelector('section').classList.remove('hidden');
                gsap.fromTo(projet.querySelector('section'), {
                    opacity: 0,
                }, {
                    opacity: 1,
                    duration: 1,
                    ease: 'power1.inOut',
                })
            }
        });
    });

    const ouvrirBtn = document.getElementById('ouvrirThemePickerSliderBtn');
    const ouvrirInfo = document.getElementById('ouvrirThemePickerSliderInfo');
    const fermerBtn = document.getElementById('fermerThemePickerSliderBtn');
    const fermerInfo = document.getElementById('fermerThemePickerSliderInfo');
    const sliderContainer = document.getElementById('ThemePickerSliderContainer');
    const contactezMoiPopupContainer = document.getElementById('contactezMoiPopupContainer');
    const contactezMoiPopup = document.getElementById('contactezMoiPopup');
    const closeContactezMoiPopup = document.getElementById('closeContactezMoiPopup');
    let contactezPopupOuvert = false;

    function closePopup() {
        gsap.to(contactezMoiPopup, {
            y: "-100%",
            duration: 1.5,
            ease: "power3.inOut"
        });
        setTimeout(() => {
            contactezMoiPopupContainer.classList.remove('pointer-events-auto');
            contactezMoiPopup.classList.remove('pointer-events-auto');
            contactezMoiPopupContainer.classList.add('pointer-events-none');
            contactezMoiPopup.classList.add('pointer-events-none');
            contactezMoiPopupContainer.classList.remove('bg-gray-900/60');
            contactezPopupOuvert = false;
        }, 1000);
    }

    closeContactezMoiPopup.addEventListener('click', closePopup);

    document.addEventListener('click', function (event) {
        if (contactezPopupOuvert && !contactezMoiPopup.contains(event.target)) {
            closePopup();
        }
    });

    contact.addEventListener('click', function (event) {
        event.stopPropagation();
        gsap.to(contactezMoiPopup, {
            y: "0%",
            duration: 1.5,
            ease: "power3.inOut"
        });
        contactezMoiPopupContainer.classList.add('pointer-events-auto');
        contactezMoiPopup.classList.add('pointer-events-auto');
        contactezMoiPopupContainer.classList.remove('pointer-events-none');
        contactezMoiPopup.classList.remove('pointer-events-none');
        contactezMoiPopupContainer.classList.add('bg-gray-900/60');

        contactezPopupOuvert = true;
    });

    const boutonCurseur = document.getElementById('bouton-curseur');
    const conteneurCurseur = document.getElementById('conteneur-curseur');
    const elementBody = document.querySelector('body');

    let estEnTrainDeGlisser = false;

    boutonCurseur.addEventListener('mousedown', (e) => {
        e.preventDefault();
        estEnTrainDeGlisser = true;
        document.body.style.cursor = 'grabbing';
    });

    document.addEventListener('mouseup', () => {
        estEnTrainDeGlisser = false;
        document.body.style.cursor = 'default';
    });

    document.addEventListener('mousemove', (e) => {
        if (estEnTrainDeGlisser) {
            const positionConteneur = conteneurCurseur.getBoundingClientRect();
            let offsetY = e.clientY - positionConteneur.top;

            offsetY = Math.max(0, Math.min(offsetY, positionConteneur.height - boutonCurseur.clientHeight));
            boutonCurseur.style.top = `${offsetY}px`;

            const pourcentage = offsetY / (positionConteneur.height - boutonCurseur.clientHeight);
            const valeurCouleur = Math.round(pourcentage * 255);
            const couleurInversee = 255 - valeurCouleur;
            elementBody.style.backgroundColor = `rgb(${valeurCouleur}, ${valeurCouleur}, ${valeurCouleur})`;
            conteneurCurseur.style.backgroundColor = `rgb(${couleurInversee}, ${couleurInversee}, ${couleurInversee})`;
            conteneurCurseur.style.boxShadow = `0 0 10px 2px rgb(${couleurInversee}, ${couleurInversee}, ${couleurInversee})`;
            if(pourcentage > 0.5){
                header.classList.add('bg-slate-300');
                experience.classList.add('bg-slate-300');
                projets.classList.add('bg-slate-300');
                propos.classList.add('bg-slate-300');
                liens.classList.add('bg-slate-300');
                ouvrirBtn.classList.add('bg-gray-900');
                ouvrirInfo.classList.add('bg-gray-900');
                ouvrirInfo.querySelector('p').classList.add('text-white');
            }else {
                header.classList.remove('bg-slate-300');
                experience.classList.remove('bg-slate-300');
                projets.classList.remove('bg-slate-300');
                propos.classList.remove('bg-slate-300');
                liens.classList.remove('bg-slate-300');
                ouvrirBtn.classList.remove('bg-gray-900');
                ouvrirInfo.classList.remove('bg-gray-900');
                ouvrirInfo.querySelector('p').classList.remove('text-white');
            }
        }
    });

    ouvrirBtn.addEventListener('mouseenter', () => {
        ouvrirInfo.classList.remove('opacity-0');
    });

    ouvrirBtn.addEventListener('mouseleave', () => {
        ouvrirInfo.classList.add('opacity-0');
    });

    fermerBtn.addEventListener('mouseenter', () => {
        fermerInfo.classList.remove('opacity-0');
    });

    fermerBtn.addEventListener('mouseleave', () => {
        fermerInfo.classList.add('opacity-0');
    });

    ouvrirBtn.addEventListener('click', () => {
        sliderContainer.classList.remove('translate-x-full');
        ouvrirBtn.classList.add('opacity-0');
        ouvrirInfo.classList.add('opacity-0');
    });

    fermerBtn.addEventListener('click', () => {
        sliderContainer.classList.add('translate-x-full');
        ouvrirBtn.classList.remove('opacity-0');
        fermerInfo.classList.add('opacity-0');
    });


    sectionAccueilConnita.click();
});