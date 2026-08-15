function doMath() {
        // 1. Grab the mumbers from the input boxes
        let rMean = document.getElementById("meanBox").value;
        let rResult = document.getElementById("resultBox").value;
        let RZScore = document.getElementById("zScoreBox").value;

        if(rMean === "" || rResult === "" || RZScore === ""){alert("Dont let it empty"); return;}

        // if done
        let mean = Number(rMean)
        let result = Number(rResult)
        let zScore = Number(RZScore)
        
        // 2. Claculate the 1SD value
        let sd = (result - mean) / zScore;
        // 3. Calculate 2SD Range
        let lower2SD = mean - (2 * sd);
        let upper2SD = mean + (2 *sd);
        // 4. Calculate 3SD Range
        let lower3SD = mean - (3 * sd);
        let upper3SD = mean + (3 *sd);
        // 5. Inject the final answar
        document.getElementById("answerArea").innerHTML = "2SD range :" + lower2SD.toFixed(2) + " to " + upper2SD.toFixed(2) + "<br> 3SD range :" + lower3SD.toFixed(2) + " to " + upper3SD.toFixed(2);
      }
