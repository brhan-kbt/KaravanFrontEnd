
export interface Product {
  
  
    productId: number;
    
    quantity:number;
    productName: string;
    productCode:string;
    productDescription: string;
    imagePath: string;
    productSubCategory: string;
    productCategory: string;
    active:boolean;
    requireExtra:boolean;
    totalOrdered:number;
    unitPrice:number;
    mainIngredients: string;
    rating: number;
    discount:number;
    productPoint: number;
}
export interface Product2 {
  
    id:number;
    description:string;
    title:string;
    price:number;
    productCode:string;
    imageUrl:string;
    chef:string;
    quantity:number;
    type:string;
    category:string;
}

