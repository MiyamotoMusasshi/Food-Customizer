import Cookies from "js-cookie";

export default function managingIngredientQuantities(ingredient:string,isAdd:boolean){
    let price = Cookies.get('price') ?? '0'
    const ingredientCount = Cookies.get(ingredient) ?? '0'  

    if(!Number.isFinite(Number(price))){
        price = '0'
    }
    if(price == '0' && isAdd==false){
        price = '20';
    }

    if(ingredientCount == '0'){
        Cookies.set(ingredient,isAdd ? '1' : '0')
    }else{
        Cookies.set(ingredient,isAdd ? String(Number(ingredientCount)+1) : String(Number(ingredientCount)-1))        
    }

    Cookies.set('price',isAdd ? String(Number(price)+20) : String(Number(price)-20))
}