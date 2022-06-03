function countWord() {
    var words = document
        .getElementById("text").value;
    var count = 0;
    var split = words.split(' ');
    for (var i = 0; i < split.length; i++) {
        if (split[i] != "") {
            count += 1;
        }
    }
    document.getElementById("show")
        .innerHTML = count+" words";
    document.getElementById("she")
        .innerHTML = words.length+" characters";
}// word counter finish
var doc, bod, I, StateMaker;
addEventListener('load', function () {
    doc = document; bod = doc.body;
    I = function (id) {
        return doc.getElementById(id);
    }
    StateMaker = function (initialState) {
        var o = initialState;
        if (o) {
            this.initialState = o; this.states = [o];
        }
        else {
            this.states = [];
        }
        this.savedStates = []; this.canUndo = this.canRedo = false; this.undoneStates = [];
        this.addState = function (state) {
            this.states.push(state); this.undoneStates = []; this.canUndo = true; this.canRedo = false;
            return this;
        }
        this.undo = function () {
            var sl = this.states.length;
            if (this.initialState) {
                if (sl > 1) {
                    this.undoneStates.push(this.states.pop()); this.canRedo = true;
                    if (this.states.length < 2) {
                        this.canUndo = false;
                    }
                }
                else {
                    this.canUndo = false;
                }
            }
            else if (sl > 0) {
                this.undoneStates.push(this.states.pop()); this.canRedo = true;
            }
            else {
                this.canUndo = false;
            }
            return this;
        }
        this.redo = function () {
            if (this.undoneStates.length > 0) {
                this.states.push(this.undoneStates.pop()); this.canUndo = true;
                if (this.undoneStates.length < 1) {
                    this.canRedo = false;
                }
            }
            else {
                this.canRedo = false;
            }
            return this;
        }
        this.save = function () {
            this.savedStates = this.states.slice();
            return this;
        }
        this.isSavedState = function () { // test to see if current state in use is a saved state
            if (JSON.stringify(this.states) !== JSON.stringify(this.savedStates)) {
                return false;
            }
            return true;
        }
    }
    var text = I('text'), val, wordCount = 0, words = 0, stateMaker = new StateMaker, save = I('save');
    text.onkeyup = function (e) {
        save.className = undefined; val = this.value.trim(); wordCount = val.split(/\s+/).length;
        if (wordCount === words && stateMaker.states.length) {
            stateMaker.states[stateMaker.states.length - 1] = val;
        }
        else {
            stateMaker.addState(val); words = wordCount;
        }
    }
    I('undo').onclick = function () {
        stateMaker.undo(); val = text.value = (stateMaker.states[stateMaker.states.length - 1] || '').trim();
        text.focus();
        save.className = stateMaker.isSavedState() ? 'saved' : undefined;
    }
    I('redo').onclick = function () {
        stateMaker.redo(); val = text.value = (stateMaker.states[stateMaker.states.length - 1] || '').trim();
        text.focus();
        save.className = stateMaker.isSavedState() ? 'saved' : undefined;
    }
    save.onclick = function () {
        stateMaker.save(); text.focus(); this.className = 'saved';
    }
});