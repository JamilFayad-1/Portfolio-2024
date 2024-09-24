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
    const ThemePickerLayout = document.getElementById('ThemePickerLayout');

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
        .fromTo(ThemePickerLayout, {
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

    const imageNombre1 = document.getElementById('nombre1Propos');
    const imageNombre2 = document.getElementById('nombre2Propos');
    const imageNombre3 = document.getElementById('nombre3Propos');

    const proposSection1Indicateur = document.getElementById('proposSection1Indicateur');
    const proposSection2Indicateur = document.getElementById('proposSection2Indicateur');
    const proposSection3Indicateur = document.getElementById('proposSection3Indicateur');

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
            gsap.to(imageNombre3, {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.inOut'
            })
            gsap.to(imageNombre1, {
                opacity: 0.2,
                duration: 0.8,
                ease: 'power2.inOut'
            })
            setTimeout(() => {
                proposSection3Indicateur.classList.remove('bg-gray-900/70');
                    proposSection3Indicateur.classList.add('bg-gray-900/20');
                    proposSection1Indicateur.classList.remove('bg-gray-900/20');
                    proposSection1Indicateur.classList.add('bg-gray-900/70');
            }, 600)
            
        } else if (texteIndex == 1) {
            gsap.to(textAProposDeMoi, {
                speed: 1,
                text: "Mon parcours m'a permis de développer une approche rigoureuse qui combine créativité et expertise technique. Mon objectif est de transformer des idées en interfaces élégantes et fonctionnelles, tout en veillant à l’optimisation des performances.",
                ease: "power3.inOut",
                preserveSpaces: true,
            });
            gsap.to(imageNombre1, {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.inOut'
            })
            gsap.to(imageNombre2, {
                opacity: 0.2,
                duration: 0.8,
                ease: 'power2.inOut'
            })
            setTimeout(() => {
                proposSection1Indicateur.classList.remove('bg-gray-900/70');
                    proposSection1Indicateur.classList.add('bg-gray-900/20');
                    proposSection2Indicateur.classList.remove('bg-gray-900/20');
                    proposSection2Indicateur.classList.add('bg-gray-900/70');
            }, 600)
        } else {
            gsap.to(textAProposDeMoi, {
                speed: 1,
                text: "Je suis à la recherche d’un stage qui me permettra de mettre en pratique mes compétences, d'acquérir de l’expérience professionnelle, et de continuer à évoluer. Je suis prêt à collaborer avec des équipes dynamiques pour créer des solutions qui font la différence.",
                ease: "power3.inOut",
                preserveSpaces: true,
            });
            gsap.to(imageNombre2, {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.inOut'
            })
            gsap.to(imageNombre3, {
                opacity: 0.2,
                duration: 0.8,
                ease: 'power2.inOut'
            })
            setTimeout(() => {
                proposSection2Indicateur.classList.remove('bg-gray-900/70');
                    proposSection2Indicateur.classList.add('bg-gray-900/20');
                    proposSection3Indicateur.classList.remove('bg-gray-900/20');
                    proposSection3Indicateur.classList.add('bg-gray-900/70');
            }, 600)
            texteIndex = -1;
        }
    })

    const sectionAccueilConnita = document.getElementById('projetConnita');
    const sectionAccueilWonders = document.getElementById('projetWonders');
    const sectionAccueilJSP = document.getElementById('projetJSP');

    const listeProjets = [];
    let currentIndexProjetBoucles = 0;
    let intervalId;
    listeProjets.push(sectionAccueilConnita, sectionAccueilWonders, sectionAccueilJSP);
    listeProjets.forEach((projet, index) => {
        projet.addEventListener('click', function () {
            currentIndexProjetBoucles = index;

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

            resetInterval();

        });
    });

    sectionAccueilConnita.click();

    function projetsBoucle() {
        listeProjets[currentIndexProjetBoucles].click();
        currentIndexProjetBoucles++;

        if (currentIndexProjetBoucles >= listeProjets.length) {
            currentIndexProjetBoucles = 0;
        }
    }

    function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(projetsBoucle, 6000);
    }
    
    resetInterval();

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
        contactezPopupOuvert = false;
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
        }, 1000);
    }

    closeContactezMoiPopup.addEventListener('click', closePopup);

    document.addEventListener('click', function (event) {
        if (window.innerWidth > 640) {
            if (contactezPopupOuvert && !contactezMoiPopup.contains(event.target)) {
                closePopup();
            }
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

    /* Mouse move pour le slider de couleur */
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
            if (pourcentage > 0.5) {
                header.classList.add('bg-slate-300');
                experience.classList.add('bg-slate-300');
                projets.classList.add('bg-slate-300');
                propos.classList.add('bg-slate-300');
                liens.classList.add('bg-slate-300');
                ouvrirBtn.classList.remove('bg-white');
                ouvrirBtn.classList.add('bg-gray-900');
                ouvrirInfo.classList.remove('bg-white');
                ouvrirInfo.classList.add('bg-gray-900');
                ouvrirInfo.querySelector('p').classList.remove('text-black');
                ouvrirInfo.querySelector('p').classList.add('text-white');
                sliderContainer.classList.remove('bg-amber-50/40');
                sliderContainer.classList.add('bg-slate-300');
            } else {
                header.classList.remove('bg-slate-300');
                experience.classList.remove('bg-slate-300');
                projets.classList.remove('bg-slate-300');
                propos.classList.remove('bg-slate-300');
                liens.classList.remove('bg-slate-300');
                ouvrirBtn.classList.remove('bg-gray-900');
                ouvrirBtn.classList.add('bg-white');
                ouvrirInfo.classList.remove('bg-gray-900');
                ouvrirInfo.classList.add('bg-white');
                ouvrirInfo.querySelector('p').classList.remove('text-white');
                ouvrirInfo.querySelector('p').classList.add('text-black');
                sliderContainer.classList.remove('bg-slate-300');
                sliderContainer.classList.add('bg-amber-50/40');
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
});