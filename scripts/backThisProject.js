function backThisProject() {
    const windowBackProject = document.querySelector('#backProject')
    windowBackProject.innerHTML = `
    <div class="thanksWindow">
    
        <img src="https://raw.githubusercontent.com/elvisgannem/crowfunding-landing/3255aa0a1851970267d4bf74c892edd3b5009582/images/icon-check.svg" alt="Icon Check" class="thanksImg"/>
        <h3 class="thanksTitle">Thanks for your support!</h3>
        <p class="thanksParagraph">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get and email once our campaign is completed.</p>
        <button class="buttons__button hovBtn" onclick="closeThanksWindow()">Got it!</button>

    </div>
    `
}