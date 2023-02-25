class queue{
    constructor(){
        this.elements = [];
    }
    enqueue(item){
        this.elements.push(item);

    }
    dequeue(){
        return this.elements.shift();

    }
    
}

const  s = new queue();
s.enqueue(1);
s.enqueue(2);
s.enqueue(3);
s.enqueue(4);
console.log(s);
s.dequeue()
console.log(s);
