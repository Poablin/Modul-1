function show() {
    let disabled = selectedId == null ? 'disabled' : '';
    let selectedShow = selectedId == null ? 'ingen' : selectedId;
    let svgInnerHtml = '';
    let errorMessage = error == true ? 'Du har valgt ugyldig nummer' : '';

    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }

    contentDiv.innerHTML = `
        <svg id="chart" width="500" viewBox="00 00 80 60">
            ${svgInnerHtml}
        </svg><br/>
        Valgt stolpe: <i>${selectedShow}</i>
        <br />
        Verdi:
        <input type="number" min="1" max="10" oninput="inputValue = this.value" placeholder="1 - 10" />
        <button onclick="addBar()">Legg til stolpe</button>
        <button ${disabled} onclick="changeBar()">Endre valgt stolpe</button>
        <button ${disabled} onclick="deleteBar(inputValue)">Fjerne valgt stolpe</button>
        <div>${errorMessage}</div>
        `;

}

function createBar(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 6;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    let selectable = selectedId == barNo == true ? 'class="selected"' : '';
    return `<rect ${selectable} onclick="selectBar(this.id)" id="${barNo}" width="${width}" height="${height}"
                        x="${x}" y="${y}" fill="${color}"></rect>`;
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}