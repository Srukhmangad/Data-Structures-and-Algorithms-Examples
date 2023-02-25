class queue{
    constructor(){
        this.insertionStack = [];
        this.deletionStack = [];
    }
    enqueue(value){
        return this.insertionStack.push(value);
    }
    dequeue(){
        if(this.deletionStack.length===0){
            while(this.insertionStack.length>0){
                var temp = this.insertionStack.pop();
                this.deletionStack.push(temp);
            }
            var popped = this.deletionStack.pop();
            while(this.deletionStack.length>0){
                var temp = this.deletionStack.pop();
                this.insertionStack.push(temp);
            }
        }
        return popped;
    }
}

const s = new queue();
s.enqueue(11);
s.enqueue(22);
s.enqueue(33);
s.enqueue(44);
s.enqueue(55);
console.log(s.dequeue());
console.log(s)
