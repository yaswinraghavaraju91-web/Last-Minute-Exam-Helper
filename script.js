function generatePlan() {
    const subject = document.getElementById("subject").value;
    const topics = document.getElementById("topics").value;
    const hours = document.getElementById("hours").value;
    const mode = document.getElementById("mode").value;

    let output = `<b>Subject:</b> ${subject}<br><br>`;
    output += `<b>Recommended Plan:</b><br>`;

    if (hours == 2) {
        output += "- Revise definitions and formulas only.<br>";
    } else if (hours == 6) {
        output += "- Focus on important topics and examples.<br>";
    } else {
        output += "- Complete structured revision with practice questions.<br>";
    }

    if (mode === "pass") {
        output += "- Pass Mode: Study minimum required topics.<br>";
    } else {
        output += "- Score Mode: Focus on high-weightage questions.<br>";
    }

    output += `<br><b>Topics Entered:</b> ${topics}<br>`;
    output += `<br><b>Expected Questions:</b><br>`;
    output += "- Explain key concepts with examples.<br>";
    output += "- Write short notes on important topics.<br>";

    output += `<br><i>Tip:</i> Avoid starting new topics at the last minute.`;

    document.getElementById("output").innerHTML = output;
}
