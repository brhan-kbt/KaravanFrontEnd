
export interface Product {
  
  
    productId: number;
    quantity:number;
    productName: string;
    productCode:string;
    productDescription: string;
    imagePath: string;
    productSubCategory: string;
    productCategory: string;
    categoryId:number;
    subCategoryId:number;
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


export interface Product3{
  
    id:number;
    description:string;
    title:string;
    price:number;
    image:string;
    rating:[
        rate:DoubleRange,
        count:DoubleRange
    ];
}


export interface ProductToBeOrdered{
  
    
    message:string;
    statusCode:number;
    data:{

    };
}

export interface Prod{
    products:Product,
    index:number
}
