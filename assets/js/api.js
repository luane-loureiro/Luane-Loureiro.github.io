fetchProfileData()
async function fetchProfileData() {
    const response = await fetch('https://raw.githubusercontent.com/luane-loureiro/Luane-Loureiro.github.io/refs/heads/main/data/profile.json')
    let profileData = await response.json()
    return(profileData)
}