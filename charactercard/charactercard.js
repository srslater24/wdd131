const aCard = {
    level: 5,
    health: 100
};

function levelUpOrAttack(event) {
    const level = document.querySelector("#level");
    const health = document.querySelector("#health");
    if (event.target.id === "atkButton") {
        if (aCard.health === 0)
            alert("Card is dead already!");
        else
            aCard.health = aCard.health - 20;
            health.innerHTML = `<b>Health:</b> ${aCard.health}`;
    } else {
        aCard.level++;
        level.innerHTML = `<b>Level:</b> ${aCard.level}`;
    }
};

document.querySelector("#atkButton").addEventListener("click", levelUpOrAttack);
document.querySelector("#lvlButton").addEventListener("click", levelUpOrAttack);