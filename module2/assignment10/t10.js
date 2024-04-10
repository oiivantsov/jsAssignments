"use strict";

function elections() {

    const candidates = [];
    const candidatesNames = [];
    const numberOfCandidates = parseInt(prompt("Enter the number of candidates."));

    for (let i = 1; i <= numberOfCandidates; i++) {

        let candidateName;
        let candidateExists = false;

        do {

            candidateName = toCapCase(prompt(`Enter the name for candidate ${i}.`));

            if (candidatesNames.includes(candidateName)) {
                alert("A candidate with that name is already registered, try again.");
            }
            else {

                candidatesNames.push(candidateName);

                candidates.push({
                    name: candidateName,
                    votes: 0,
                });

                candidateExists = true;

            }

        } while (!candidateExists);
    }

    const numberOfVoters = parseInt(prompt("Enter the number of voters."));

    for (let i = 1; i <= numberOfVoters; i++) {

        const voteName = toCapCase(prompt(`Voter ${i}, please enter the name of your candidate.`));

        if (candidatesNames.includes(voteName)) {

            for (let candidate of candidates) {
                if (candidate.name === voteName) {
                    candidate.votes++;
                }
            }

        }

    }

    candidates.sort((a, b) => b.votes - a.votes);

    if (candidates[0].votes !== candidates[1].votes) {
        console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} vote(s).`);
    }

    else {
        console.log(`We need a second round! Several candidates received the same number of votes.`);
    }

    console.log("Results:");
    for (let candidate of candidates) {
        console.log(candidate.name + ": " + candidate.votes + " votes");
    }

}

function toCapCase(myString) {
    const firstLetter = myString.charAt(0).toUpperCase();
    const remainingLetters = myString.slice(1).toLowerCase();
    return firstLetter + remainingLetters;

}

document.getElementById("startButton").addEventListener("click", () => {
    console.clear();
    document.getElementById("target").innerHTML = "Check the console for results";
    elections();
});