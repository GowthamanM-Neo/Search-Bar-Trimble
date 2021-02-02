let items = [
    {
        "name":"Banana",
        "price":"₹40"
    },
    {
        "name":"Apple",
        "price":"₹80"
    },
    {
        "name":"Orange",
        "price":"₹70"
    },
    {
        "name":"Milk",
        "price":"₹20"
    },
    {
        "name":"Biscuits",
        "price":"₹10"
    },
    {
        "name":"Butter",
        "price":"₹40"
    },
    {
        "name":"Cheese",
        "price":"₹60"
    },
    {
        "name":"Rice 10kg",
        "price":"₹500"
    },
    {
        "name":"Rice 1kg",
        "price":"₹60"
    },
    {
        "name":"Rice 25kg",
        "price":"₹1250"
    },
    {
        "name":"Wheat",
        "price":"₹50"
    },
    {
        "name":"Bathing soap",
        "price":"₹25"
    },
    {
        "name":"Colin",
        "price":"₹100"
    },
    {
        "name":"Tomato 1 kg",
        "price":"₹30"
    },
    {
        "name":"Carrot 1 kg",
        "price":"₹40"
    },
    {
        "name":"Onion 1 kg",
        "price":"₹60"
    },
    {
        "name":"Knife",
        "price":"₹30"
    },
    {
        "name":"Shaving gel",
        "price":"₹70"
    }
];
function renderFunction(){

    for(var i=0;i<items.length;i++){
        var node = document.createElement("div");
        node.setAttribute("id","box"); 
        var head = document.createElement("h4");
        head.setAttribute("class","text-center");
        head.setAttribute("id","itemName");
        var price = document.createElement("h1");
        price.setAttribute("class","text-center");
        price.setAttribute("id","itemPrice");               
        var namenode = document.createTextNode(items[i].name);       
        head.appendChild(namenode);
        var pricenode = document.createTextNode(items[i].price);
        price.appendChild(pricenode);
        node.appendChild(head);      
        node.appendChild(price);                    
        document.getElementById("row").appendChild(node);
    }
    
}


function searchItem(){
    document.getElementById("row").innerHTML = "";
    var text = document.getElementById("searchName").value.toLowerCase();
    console.log(text);
    const check = new RegExp(`^${text}[a-z]*`);
    for(var i=0;i<items.length;i++){
        if(check.test(items[i].name.toLowerCase())){
            var node = document.createElement("div");
            node.setAttribute("id","box"); 
            var head = document.createElement("h4");
            head.setAttribute("class","text-center");
            head.setAttribute("id","itemName");
            var price = document.createElement("h1");
            price.setAttribute("class","text-center");
            price.setAttribute("id","itemPrice");               
            var namenode = document.createTextNode(items[i].name);       
            head.appendChild(namenode);
            var pricenode = document.createTextNode(items[i].price);
            price.appendChild(pricenode);
            node.appendChild(head);      
            node.appendChild(price);                    
            document.getElementById("row").appendChild(node);
        }
    }
}