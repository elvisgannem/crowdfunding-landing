function rewardWindow() {

    const rewardWindow = document.querySelector('#rewardWindow')
    rewardWindow.innerHTML =`

        <div class="rewardWindow">
            <img src=".././images/icon-close-modal.svg" class="rewardImg" onclick="closeRewardWindow()"/>
            <h3 class="rewardTitle">Back this project</h3>
            <p class="rewardDescription">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        
<form>
        <div class="rewardWindow__card">
            <input type="radio" name="reward" class="radioInput" id="rewardOne" onclick="selectReward()"></input>

            <div class="rewardWindowCard__content">
                <p class="rewardChoice">Pledge with no reward</p>
                <p class="rewardWindow__card__p">Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>

                
                
            </div>

            <div class="pledgeDivSeparator"></div>
                <div class="pledgeDiv"></div>
            
        </div>

        <div class="rewardWindow__card">
            <input type="radio" name="reward" class="radioInput" onclick="selectReward()" id="rewardTwo"></input>

            <div class="rewardWindowCard__content">
        
                <p class="rewardChoice block">Bamboo Stand</p>
                <p class="rewardPrice block">Pledge $25 or more</p>
                <p class="leftRewardItems"><strong class="numberRewardItems">101</strong> left</p>
                <p class="rewardWindow__card__p">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list</p>
            </div>
        </div>

        <div class="rewardWindow__card">
            <input type="radio" name="reward" class="radioInput" id="rewardThree" onclick="selectReward()"></input>

            <div class="rewardWindowCard__content">
        
                <p class="rewardChoice block">Black Edition Stand</p>
                <p class="rewardPrice block">Pledge $75 or more</p>
                <p class="leftRewardItems"><strong class="numberRewardItems">64</strong> left</p>
                <p class="rewardWindow__card__p">You get two Special Edition Mahogany stands, a Backet T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
            </div>
        </div>

        <div class="rewardWindow__card opacity">
            <input type="radio" name="reward" class="radioInput" disabled></input>

            <div class="rewardWindowCard__content">
        
                <p class="rewardChoice block">Mahogany Special Edition</p>
                <p class="rewardPrice block">Pledge $200 or more</p>
                <p class="leftRewardItems"><strong class="numberRewardItems">0</strong> left</p>
                <p class="rewardWindow__card__p">You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
            </div>
        </div>
        </form>

        </div>

        `

        
}
