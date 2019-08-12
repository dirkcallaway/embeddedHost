const divContainer = document.createElement('div')
const frameBox = document.createElement('iframe')
frameBox.setAttribute("src", "https://pponboardingembeded.herokuapp.com/")
frameBox.setAttribute("scrolling", "no")
frameBox.setAttribute("id", "onboardwidget")
frameBox.style.border = 'none'
frameBox.style.width = '450px'
frameBox.style.height = '600px'
divContainer.appendChild(frameBox)
divContainer.style.zIndex = '2'
divContainer.style.position = 'absolute'
divContainer.style.top = '40px'
divContainer.style.right = '0px'



window.onload = function () {
    document.getElementById(OnBoard_config.selector).appendChild(divContainer)
    let checklistOpened = false;
    const openBtn = document.getElementById('onboard-btn')
    const frame = document.getElementById('onboardwidget').contentWindow
    const sendMessage = (event) => {
        event.preventDefault();

        console.log("Button Pushed!")
        
        frame.postMessage(OnBoard_config.userVID, 'https://pponboardingembeded.herokuapp.com/')

    }
    openBtn.addEventListener("click", sendMessage)
}
