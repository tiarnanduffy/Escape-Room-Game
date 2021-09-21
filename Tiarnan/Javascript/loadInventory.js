function loadInventoryFunction(){
console.log("inventory loaded");
 for(i = 0; i<inventoryItems.length; i++){
//                     console.log(inventoryItems[i]);
    var inventorySlot = "slot" + (i+1) + "Pic";

    var domInvSlot = document.getElementById(inventorySlot);

    if(inventoryItems[i] == "Pickaxe"){
        domInvSlot.src = "images/pickaxe.png";
    }

    if(inventoryItems[i] == "Sword"){
        domInvSlot.src = "images/sword.png";
    }

    if(inventoryItems[i] == "Keys"){
        domInvSlot.src = "images/House_Key.png";
    } 

    if(inventoryItems[i] == "Battery"){
        domInvSlot.src = "images/battery.jpg";
    } 
 }
}