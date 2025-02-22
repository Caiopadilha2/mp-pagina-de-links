import profileData from '../profile.json'

document.title = 'Links de ' + profileData.name + ' ' + profileData.lastName

window.onload = () => {
  const avatarImg = document.querySelector('.card-header__profile-image')
  const name = document.querySelector('.card-header__name')
  const lastName = document.querySelector('.card-header__last-name')
  const description = document.querySelector('.card-header__description')

  const linksList = document.querySelector('.card__links')
  const socialList = document.querySelector('.card__social-links')

  avatarImg.src = profileData.avatar
  name.textContent = profileData.name
  lastName.textContent = profileData.lastName
  // console.log(profileData)
  description.textContent = profileData.description

  name.appendChild(lastName)

  profileData.links.forEach(link => {
    const linkItem = document.createElement('li')
    const linkAnchor = document.createElement('a')

    linkAnchor.href = link.href
    linkAnchor.textContent = link.text
    linkItem.appendChild(linkAnchor)

    linksList.appendChild(linkItem)
  })

  profileData.socialLinks.forEach(socialLink => {
    const socialLinkItem = document.createElement('li')
    const socialLinkIcon = document.createElement('a')
    const img = document.createElement('img')

    img.src = socialLink.icon
    socialLinkIcon.href = socialLink.href
    socialLinkIcon.target = '_blank'

    socialLinkIcon.appendChild(img)
    socialLinkItem.appendChild(socialLinkIcon)

    socialList.appendChild(socialLinkItem)
  })
}
