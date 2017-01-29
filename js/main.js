// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',
  data: {

    todoTitle: '',
    todoContent: '',
    card: 'card',
    editingItem: 'Edit',

    items: [

      {
        titleContent: "Todo Title",
        cardContent: "My First Todo Item",

      },

    ]
  },

  methods: {

    newToDo: function() {

    this.items.push ({
      titleContent: this.todoTitle,
      cardContent: this.todoContent,

    })

    this.todoTitle=''
    this.todoContent=''


  },

  remove: function(doneItem) {

    var index = this.items.indexOf(doneItem);
    this.items.splice(index,1);

  },

    cancel: function() {

      this.todoTitle='';
      this.todoContent='';

    },

  edit: function() {

    this.editingItem = 'Save';



  },


  },
});
