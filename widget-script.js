//Create the iframe inside a widget-box div
const divContainer = document.createElement('div')
divContainer.setAttribute('id', 'widget-box')
const frameBox = document.createElement('iframe')
frameBox.setAttribute('src', 'http://localhost:8080/')
frameBox.setAttribute('scrolling', 'no')
frameBox.setAttribute('id', 'onboardwidget')
frameBox.style.border = 'none'
frameBox.style.width = '450px'
frameBox.style.height = '500px'
divContainer.appendChild(frameBox)
divContainer.style.zIndex = '2'
divContainer.style.position = 'absolute'
divContainer.style.top = '40px'
divContainer.style.right = '0px'
divContainer.style.visibility = 'hidden'



window.onload = function () {
    document.getElementById(OnBoard_config.selector).appendChild(divContainer)
    //Function to open and close iframe
    let isFrameOpen = false
    const toggleFrame = () => {
        if(!isFrameOpen) {
            // document.getElementById(OnBoard_config.selector).appendChild(divContainer)
            document.getElementById('widget-box').style.visibility = 'visible'
            isFrameOpen = true
            sendMessage()
        } else {
            // let frame = document.getElementById('widget-box')
            // frame.parentNode.removeChild(frame)
            document.getElementById('widget-box').style.visibility = 'hidden'
            isFrameOpen = false
        }
    }

    //Event Listener when Selector is clicked
    document.getElementById(OnBoard_config.selector).addEventListener('click', () => {
        toggleFrame()
    })

    //Function to send message to ifram with user VID (from config)
    const sendMessage = (event) => {
        // event.preventDefault();
        const frame = document.getElementById('onboardwidget').contentWindow

        console.log("Button Pushed!")
        
        frame.postMessage(OnBoard_config.userVID, 'http://localhost:8080/')

    }

    // Button to test functionality of message sent
    const openBtn = document.getElementById('onboard-btn')
    openBtn.addEventListener("click", sendMessage)

    //Set up a MutationsObserver to fire message when ifram is created

    // Select the node that will be observed for mutations
    const targetNode = document.getElementById(OnBoard_config.selector)

    // Options for the observer (which mutations to observe)
    const config = { childList: true }

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(sendMessage);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

}
