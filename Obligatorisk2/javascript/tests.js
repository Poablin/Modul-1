QUnit.test("Selecter en stolpe om den får inn ID", function (assert) {
    selectBar('3');
    assert.equal(chosenBar, '3');
    reset()
});

QUnit.test("Deselecter stolpe om den får inn samme ID", function (assert) {
    selectBar('1');
    selectBar('1');
    assert.equal(chosenBar, 'ingen');
    reset()
});

QUnit.test("Velger annen stolpe om den får in ny ID", function (assert) {
    selectBar('1')
    selectBar('4');
    assert.equal(chosenBar, '4');
    reset()
});

QUnit.test("Den valgte stolpa blir sletta", function (assert) {
    selectBar('3')
    deleteBar()
    assert.equal(numbers.length, 4);
    reset()
});

QUnit.test("Den valgte stolpa blir endra", function (assert) {
    selectBar('3')
    inputValue = 6;
    changeBar()
    assert.equal(numbers[2], 6);
    reset()
});

QUnit.test("Stolpe blir lagt til", function (assert) {
    inputValue = 6;
    addBar()
    assert.equal(numbers.length, 6);
    reset()
});