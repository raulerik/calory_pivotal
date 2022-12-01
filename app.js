const ItemCtrl = (function (){
    // private
    // ItemCtrl module construct
    const Item = function (id, name, calories){
        this.id = id
        this.name = name
        this.calories = calories
    }
    // data structure
    const data = {
        items: [
            new Item(0, 'Steak Dinner', 1200),
            new Item(1, 'Cookie', 200),
            new Item(0, 'Eggs', 300)
        ],
        total: 0
    }

    // public methods
    return {
        logData: function (){
            return data
        },
        getTotalCalories: function (){
            let total = 0
            data.items.forEach(function (item){
                total = total + item.calories
            })
            data.total = total
            return data.total
        },
        getItems: function (){
            return data.items
        }
    }
})();

const UICtrl = (function (){
    return{
        populateItemList: function (items){
            let html = ''
            items.forEach(function (item){
                html += `<li id="item-${item.id}"><strong>${item.name}: </strong><em>${item.calories}</em>Calories</li>`
            })
            document.querySelector('ul').innerHTML = html
        },
        showTotalCalories: function (totalCalories){
            document.querySelector('.total-calories').textContent = totalCalories
        }
    }
})()

const App = (function (){
    return{
        init: function (){
            const items = ItemCtrl.getItems()
            console.log(items)
            UICtrl.populateItemList(items)
            const totalCalories = ItemCtrl.getTotalCalories()
            UICtrl.showTotalCalories(totalCalories)
        }
    }
})(ItemCtrl, UICtrl)

App.init()