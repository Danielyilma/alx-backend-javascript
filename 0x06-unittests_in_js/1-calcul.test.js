const assert = require("assert")
const calculateNumber = require("./1-calcul")

describe('testing calculateNumber function', () => {
    describe('calculateNumber function', () => {
        it('test type SUM ', () => {
            let result = calculateNumber('SUM', 0, 0)
            assert.equal(result, 0)
        })

        it('test type SUM ', () => {
            let result = calculateNumber('SUM', 0.2, 0)
            assert.equal(result, 0)
        })

        it('test type SUM ', () => {
            let result = calculateNumber('SUM', 1, 0)
            assert.equal(result, 1)
        })

        it('test type SUM ', () => {
            let result = calculateNumber('SUM', -1, 0)
            assert.equal(result, -1)
        })

        it('test type SUM ', () => {
            let result = calculateNumber('SUM', 1, 1)
            assert.equal(result, 2)
        })

        it('test type SUM ', () => {
            let result = calculateNumber('SUM', 1, 1.0)
            assert.equal(result, 2)
        })

        it('test type SUM ', () => {
            let result = calculateNumber('SUM', 3.51, 2.46)
            assert.equal(result, 6)
        })

        it('test type SUBTRACT ', () => {
            let result = calculateNumber('SUBTRACT', 0, 0)
            assert.equal(result, 0)
        })

        it('test type SUBTRACT ', () => {
            let result = calculateNumber('SUBTRACT', 1, 1)
            assert.equal(result, 0)
        })

        it('test type SUBTRACT ', () => {
            let result = calculateNumber('SUBTRACT', 1.9, 2.4)
            assert.equal(result, 0)
        })

        it('test type SUBTRACT ', () => {
            let result = calculateNumber('SUBTRACT', 1.9, -2.4)
            assert.equal(result, 4)
        })

        it('test type SUBTRACT ', () => {
            let result = calculateNumber('SUBTRACT', 0, -2.4)
            assert.equal(result, 2)
        })

        it('test type SUBTRACT ', () => {
            let result = calculateNumber('SUBTRACT', -1, -1)
            assert.equal(result, 0)
        })

        it('test type SUBTRACT ', () => {
            let result = calculateNumber('DIVIDE', 1, 1)
            assert.equal(result, 1)
        })

        it('test type DIVIDE ', () => {
            let result = calculateNumber('DIVIDE', 0, 0)
            assert.equal(result, 'Error')
        })

        it('test type DIVIDE ', () => {
            let result = calculateNumber('DIVIDE', 1.5, 1.4)
            assert.equal(result, 2)
        })

        it('test type DIVIDE ', () => {
            let result = calculateNumber('DIVIDE', -2.5, -1.1)
            assert.equal(result, 2)
        })

        it('test type DIVIDE ', () => {
            let result = calculateNumber('DIVIDE', 1, -0.5)
            assert.equal(result, 'Error')
        })

        it('test type DIVIDE ', () => {
            let result = calculateNumber('DIVIDE', -1, -1)
            assert.equal(result, 1)
        })
    })
})