class Customer {
    constructor(id, name, purchaseDate, billAmount) {
      this.id = id;
      this.name = name;
      this.purchaseDate = purchaseDate;
      this.billAmount = billAmount;
      this.next = null;
    }
  }
  
  class CustomerList {
    constructor() {
      this.head = null;
    }
  
    add(customer) {
      if (this.head === null) {
        this.head = customer;
      } else if (customer.billAmount < this.head.billAmount) {
        customer.next = this.head;
        this.head = customer;
      } else {
        let current = this.head;
        while (current.next !== null && current.next.billAmount < customer.billAmount) {
          current = current.next;
        }
        customer.next = current.next;
        current.next = customer;
      }
    }
  
    totalAmountForYear(year) {
      let current = this.head;
      let total = 0;
      while (current !== null) {
        const purchaseYear = Number(current.purchaseDate.split('/')[2]);
        if (purchaseYear === year) {
          total += current.billAmount;
        }
        current = current.next;
      }
      return total;
    }
  
    findByCustomerName(name) {
      let current = this.head;
      while (current !== null) {
        if (current.name.toLowerCase() === name.toLowerCase()) {
          return current;
        }
        current = current.next;
      }
      return null;
    }
  
    print() {
      let current = this.head;
      console.log('Customer data:');
      while (current !== null) {
        console.log(`Customer ID: ${current.id}`);
        console.log(`Customer Name: ${current.name}`);
        console.log(`Purchase Date: ${current.purchaseDate}`);
        console.log(`Bill Amount: ${current.billAmount}`);
        console.log('-------------------------');
        current = current.next;
      }
    }
  }
  
  const customerList = new CustomerList();
  

  while (true) {
    const id = prompt('Enter customer id (type "exit" to stop):');
    if (id === "exit") {
      break;
    }
    const name = prompt('Enter customer name:');
    const purchaseDate = prompt('Enter purchase date (dd/mm/yy):');
    const billAmount = Number(prompt('Enter bill amount:'));
    const customer = new Customer(id, name, purchaseDate, billAmount);
    customerList.add(customer);
  }
  
 
  while (true) {
    const choice = prompt('Enter your choice:\n1. View all customer data in sorted order based on bill amount\n2. View the total purchase amount for a specific year\n3. View details of a specific customer based on name\n4. Exit');
    if (choice === '1') {
      customerList.print();
    } else if (choice === '2') {
      const year = Number(prompt('Enter year:'));
      const totalAmount = customerList.totalAmountForYear(year);
      console.log(`Total purchase amount for ${year}: ${totalAmount}`);
    } else if (choice === '3') {
      const name = prompt('Enter customer name:');
      const customer = customerList.findByCustomerName(name);
      if (customer !== null) {
        console.log(`Customer ID: ${customer.id}`);
        console.log(`Customer Name: ${customer.name}`);
        console.log(`Purchase Date: ${customer.purchaseDate}`);
        console.log(`Bill Amount: ${customer.billAmount}`);
      } else {
        console.log('Customer not found.');
      }
    }
}