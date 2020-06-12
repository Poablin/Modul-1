QUnit.test("Random Number funksjonen tar nummer fra 0 til 2", function (assert) {
    let maxNum = 3;
    let test = randomNum() < maxNum ? true : false;
    assert.equal(test, true);
});

QUnit.test("CPU velger rock, scissors eller paper", function (assert) {
    let test = cpuChoose();
    let testResult = false;
    switch (test) {
        case 'rock':
            testResult = true;
            break;
        case 'scissors':
            testResult = true;
            break;
        case 'paper':
            testResult = true;
            break;
    };
    assert.equal(testResult, true);
});

QUnit.test(" CPU Genererer ett Tilfeldig Tall", function (assert) {
    let veldigSant = randomNum();

    assert.equal((veldigSant < 3 && veldigSant > -1), true);
});