function updateProfileInfo(profileData) {
    const email = document.getElementById('email')
    email.innerHTML = `
         <button class="btn btn--primary">
            <i class="bi bi-envelope-fill"></i>
            <p id="email">${profileData.email}</p>
          </button>`
    email.href = `mailto:${profileData.email}`

    const photo = document.getElementById('foto')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.querySelector('.name__profile')
    name.innerText = profileData.name

    const job = document.querySelector('.job__profile')
    job.innerText = profileData.job

    const sobre = document.querySelector('.about__profile')
    sobre.innerText = profileData.sobre

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerHTML = `
         <button class="btn btn--primary">
            <i class="bi bi-telephone-fill"></i>
            <p id="email">${profileData.phone}</p>
          </button>`
    phone.href = `tel:${profileData.phone}`

}

function updateconect(profileData) {
    const conect = document.getElementById('conect__profile');
    const linkedin = profileData.social[0]; // Pega o primeiro elemento
        conect.innerHTML = `
            <a class="menu__link" href="${linkedin.link}" target="_blank">
                <button class="btn btn--primary">
                    <span>Conecte comigo</span>
                    <i class="bi bi-arrow-up-right"></i>
                </button>
            </a>`
}

function updateRedesSociais(profileData) {
    const redes = document.getElementById('title__network')
    redes.innerHTML = profileData.social.map(rede => `
        <li class="title__network__item">
            <a class="menu__link" href="${rede.link}" target="_blank">
                <img class="skills__logo" src="${rede.image}" alt="${rede.name}" />
            </a>
        </li>`
).join('')
}

function updateContact(profileData) {
    const redes = document.getElementById('contact_network')
    redes.innerHTML = profileData.social.map(rede => `
        <li class="title__network__item">
            <a class="menu__link" href="${rede.link}" target="_blank">
                <img class="skills__logo" src="${rede.image}" alt="${rede.name}" />
            </a>
        </li>`
).join('')
}


 function updateHardSkills(profileData) {
     const hardSkills = document.getElementById('skills__hardSkills')
     hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `
            <ul>
                <li class="skills__item">
                    <img class="skills__logo" src="${skill.logo}" alt="${skill.name}">
                    <span class="skills__nome">${skill.name}</span>
                </li>
            </ul>
     `).join('')
 }

function updateSoftSkills(profileData) {
     const softSkills = document.getElementById('skills__softSkills')
     softSkills.innerHTML = profileData.skills.softSkills.map(skill => `
     <ul>
         <li class="skills__item" >
            <img class="skills__logo" id="soft" src="${skill.logo}" alt="${skill.name}" >
            <span class="skills__nome">${skill.name}</span>

         </li>
     </ul>
 `).join('')

  }

function updateHobbies(profileData) {
    const hobbies = document.getElementById('skills__hobbies')
    hobbies.innerHTML = profileData.skills.hobbies.map(hobby => `
    <ul>
        <li class="skills__item" >
            <img class="skills__logo" src="${hobby.logo}" alt="${hobby.name}">
            <span class="skills__nome">${hobby.name}</span>

        </li>
    </ul>

  `).join('')
}

 
 function updateCertificacoes(profileData) {
     const certificacoes = document.getElementById('certificacao')
     certificacoes.innerHTML = profileData.certificacao.map(cert => `
     <ul>
        <a href="${cert.link}">
        <li class="certificacao__item">
                 <img class="certificacao__logo" src="${cert.image}">
                 <span>
                     ${cert.name}
                 </span>          
         </li>          
     </ul>
 </a>
    
     `).join('')
 }

function updateFormacao(profileData) {
    const formacao = document.getElementById('academic__courses')
    formacao.innerHTML = profileData.formacao.map(curso => `
            <h4>${curso.curso}</h4>
                    <div class="about__icons">
                        <i class="bi bi-bank"></i>
                        <span>
                            ${curso.name}
                        </span>
                    </div>
                    <div class="about__icons">
                        <i class="bi bi-mortarboard"></i>
                        <span>${curso.descricao}</span>
                    </div>


 `).join('<br><br>')
}

function updateCourses(profileData) {
    const courses = document.querySelector('.courses')
    courses.innerHTML = profileData.cursos.map(courses => `
        <details class="accordion__item">
            <summary class="accordion__header">
                <p>${courses.name}</p>
                <i class="bi bi-caret-down-fill"></i>
            </summary>
            <div class="accordion__body">
                <h4>${courses.curso}</h4>
                <p>${courses.descricao}</p>
                <p>carga horaria: ${courses.carga}</p>
                <p>Conclusão: ${courses.conclusao} </p>
            </div>
        </details>
`).join('')}


function updateLanguages(profileData) {
    const languages = document.getElementById('lang__profile')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
 }

  function updatePortfolio(profileData) {
      const portfolio = document.getElementById('projects')
      portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <div class="project__card">
                <img class="card__cover" src="${project.image}" alt="${project.name}"/>
                
                <div class="card__body">
                <div class="card__text">
                    <h3 class="card__title">
                        ${project.name}
                    </h3>

                    <p class="card__description">
                        ${project.descricao}
                    </p>

                    <ul class="card__list">
                        <li>
                            ${project.lista.join('<br>')}  
                        </li>
                    </ul>

                    <ul class="card__tec">
                        ${project.tecnologias.map(tecnologias =>{
                            return`
                                <li>
                                    <img class="skills__logo" src="${tecnologias.logo}" alt="${tecnologias.name}"/>
                                </li>
                            `
                        }).join("")}
                    </ul>
                    </div>


                    <div class="card__buttons">
                        <a href="${project.vercel_url}">
                            <button class="btn btn--primary">
                                <span>Prévia</span>
                                <i class="bi bi-arrow-up-right"></i>
                            </button>
                        </a>
                        <a href="${project.git_url}"> 
                            <button class="btn btn--primary">
                                <span>repositório</span>
                                <i class="bi bi-arrow-up-right"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        `}).join('<br>')

        
  }


function updateProfessionalExperience(profileData) {
     const professionalExperience = document.getElementById('experience')
     professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
         return `
            <div class="experiende__list">  
                    <h2 class="experience__title">
                        ${experience.name}
                    </h2>
                    <h5 class="date">
                        ${experience.period}
                    </h5>

                    <li class="experience__list">
                        <p class="description">${experience.description.join('<br>')}</p>
                    </li>
            </div>

         `}).join('<br><br>')
     }

(async () => {
    const profileData = await fetchProfileData()
    updateconect(profileData)
    updateProfileInfo(profileData)
    updateLanguages(profileData)
    updateRedesSociais(profileData)
    updateHardSkills(profileData)
    updateSoftSkills(profileData)
    updateHobbies(profileData)
    updateCertificacoes(profileData)
    updatePortfolio(profileData)
    updateFormacao(profileData)
    updateCourses(profileData)
    updateProfessionalExperience(profileData)
    updateContact(profileData)

})()