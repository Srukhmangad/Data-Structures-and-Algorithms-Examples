class stackLinkedList{

    Constructor(value){
        
        this.head = {value: value, next: null};
        this.tail = this.head;
        this.length = 1;
    }

    add(value){
        const newNode = new Node();
        if(this.head ===null){
            this.head = this.tail = value;
        }
        else{
            temp = this.head;
            this.head = newNode;
            this.head.next = temp;
        }
        this.length++;
        return this;
    }

    remove(value){
        if(this.head ===null){
            return null;
        }
        else{
            this.head
        }
    }
}