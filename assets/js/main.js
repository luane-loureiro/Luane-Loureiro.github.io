function updateProfileInfo(profileData) {
    // const email = document.getElementById('profile.email')
    // email.innerText = profileData.email
    // email.href = `mailto:${profileData.email}`

    // const photo = document.getElementById('title__profile')
    // photo.src = profileData.photo
    // photo.alt = profileData.name

    const name = document.querySelector('.name__profile')
    name.innerText = profileData.name

    const job = document.querySelector('.job__profile')
    job.innerText = profileData.job

    // const sobre = document.querySelector('.about__paragraph')
    // sobre.innerText = profileData.sobre

    // const location = document.getElementById('profile.location')
    // location.innerText = profileData.location

    // const phone = document.getElementById('profile.phone')
    // phone.innerText = profileData.phone
    // phone.href = `tel:${profileData.phone}`

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

//  function updateFormacao(profileData) {
//     const formacao = document.getElementById('academic__courses')
//     formacao.innerHTML = profileData.formacao.map(curso => `
//     <div class="academic__courses__box">
//         <ul class="academic__courses__list">
//             <li class="academic__courses__item__img">
//                 <img src="${curso.logo}" >
//             </li>
//             <div class="text">    
//                 <div class="academic__courses__item__title">
//                     <h4>${curso.name}</h4>
//                     <li>
//                         ${curso.curso}
//                     </li>
//                     <li class="academic__courses__item__subtitle">
//                         <p>
//                             ${curso.descricao}
//                         </p>
//                     </li>
//                 </div>
//             </div>
//         </ul>
//     </div>
// `).join('')
// }



// function updateLanguages(profileData) {
//     const languages = document.getElementById('profile.languages')
//     languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
// }

  function updatePortfolio(profileData) {
      const portfolio = document.getElementById('projects')
      portfolio.innerHTML = profileData.portfolio.map(project => {
          return `
          <div class="project__card">
             <img class="card__cover" src="${project.image}" alt="${project.name}">
                 <h3 class="card__title">${project.name}</h3>
                 <p class="card__description">${project.descricao}</p>
                 <ul>
                    <li>
                        <p>${project.lista}</p>    
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="${project.tecnologias}"/>
                    </li>

                 <div class="experience__description">
                     <span class="experience__repo">
                         <a href="${project.git_url}">
                             <button class="experiencia__botao--repo">
                             Repositório                             </button>
                         </a>
                     </span>
                     <span class="experience__demo"><a href="${project.vercel_url}"><button class="experiencia__botao--demo">Ver demo</button></a></span>
                </div>
             </div>
         </div> 
          `}).join('<br>')
  }

// function updateProfessionalExperience(profileData) {
//     const professionalExperience = document.getElementById('job__experience')
//     professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
//         return `
//         <div class="jobs__box">
//         <di class="jobs__list">
//             <li class="jobs__item__img">
//                 <img src="${experience.logo}" ></li>
//             <div class="text">    
//                 <li class="jobs__item__title">
//                     <h4 class="title">
//                         ${experience.name}
//                     </h4>
//                 </li>
//                 <li class="jobs__item__subtitle">
//                 <h4 class="date">${experience.period}</h4>
//                 <p class="description">${experience.description.join('<br><br>')}</p>
//                 </li>
//             </div>
//         </di>
//     </div>
//     <br><br>
//         `}).join('')
//     }

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateRedesSociais(profileData)
    updateHardSkills(profileData)
    updateSoftSkills(profileData)
    updateHobbies(profileData)
    // updateFormacao(profileData)
    updateCertificacoes(profileData)
    updatePortfolio(profileData)
    // updateProfessionalExperience(profileData)
})()