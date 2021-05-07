function selectReward() {

    const rbs = document.querySelectorAll('input[name="reward"]')
    // console.log(rbs)

    var id = []

    for (i=0; i<rbs.length; i++){
        id.push(rbs[i].id)
    }
    
    const rewardOne = rbs[0].id
    const rewardTwoID = rbs[1].id
    const rewardThreeID = rbs[2].id
    
// CHECK IF THE RADIO BUTTON IS CHECKED/UNCHECKED

    if (rbs[0].checked){
        
        const rewardOne = document.querySelector('#rewardOne')
        const pledgeDiv = document.querySelector('.pledgeDiv')
        const pledgeDivSeparator = document.querySelector('.pledgeDivSeparator')

        const rewardCard = rewardOne.parentElement
        rewardCard.style = 'border: 1px solid hsl(176, 50%, 47%);'

        // pledgeDivSeparator.style = 'margin-top: 1.5rem; border-top: 1px solid gray; width: 100%; opacity: 0.5'

        // pledgeDiv.innerHTML = `

        
        //     <p class="pledgeText">Enter your pledge</p>
        //     <div class="pledgeButtons">
        //         <input type="text" placeholder="$" class="pledgeQnt"/>
        //         <input type="submit" value="Continue" class="pledgeContinueBtn"/>
        //     </div>
        
        // `

        // pledgeDiv.style = 'display:flex; justify-content: space-between; margin-top: 1.5rem; font-size: 0.8rem;'
        
    } else {
        const rewardOne = document.querySelector('#rewardOne')
        const rewardCard = rewardOne.parentElement
        rewardCard.style = ''
    }

    // ---------

    if (rbs[1].checked){
        
        const rewardTwo = document.querySelector('#rewardTwo')
        const rewardCard = rewardTwo.parentElement
        rewardCard.style = 'border: 1px solid hsl(176, 50%, 47%);'
    } else {
        const rewardTwo = document.querySelector('#rewardTwo')
        const rewardCard = rewardTwo.parentElement
        rewardCard.style = ''
    }

    // ----------------
    
    if (rbs[2].checked){
        
        const rewardThree = document.querySelector('#rewardThree')
        const rewardCard = rewardThree.parentElement
        rewardCard.style = 'border: 1px solid hsl(176, 50%, 47%);'
    } else {
        const rewardThree = document.querySelector('#rewardThree')
        const rewardCard = rewardThree.parentElement
        rewardCard.style = ''
    }
    
}