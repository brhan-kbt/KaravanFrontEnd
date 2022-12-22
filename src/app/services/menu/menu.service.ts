import { Injectable } from '@angular/core';
import { Menu } from 'src/app/models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu:Menu[]=[
    //Breafast
  {
     header:"Grass Beef Fillet",
    description:"Lorem ipsum dolor sit",
    price:9,
    imageUrl:"image Url",
    type:'bf'
  },
  {
    header:"Deboned King quail",
    description:"sunt in culpa qui deserunt",
    price:10,
    imageUrl:"Image Url",
    type:"bf",
  },
  {
    header:"Confit of lamp",
    description:"Excepteur sint occaecat cupidatat non proident",
    price:15,
    imageUrl:"Image Url",
    type:"bf",
  },
  
  {
    header:"Twice cooked duck",
    description:"Lorem ipsum dolor sit amet consectetur adipiscing elit",
    price:21,
    imageUrl:"Image Url",
    type:"bf",
  },
  {
    header:"Roast partridge",
    description:"Lorem ipsum dolor sit",
    price:9,
    imageUrl:"Image Url",
    type:"bf",
  },
  {
    header:"Salad of shaved fenne",
    description:"sunt in culpa qui officia",
    price:10,
    imageUrl:"Image Url",
    type:"bf",
  },
  {
    header:"Beetroot cured kingfish",
    description:"Excepteur sint occaecat non proident",
    price:10,
    imageUrl:"Image Url",
    type:"bf",
  },
  {
    header:"Wild mushroom ragout",
    description:"Lorem ipsum dolor sit amet consectetur adipsing elit",
    price:21,
    imageUrl:"Image Url",
    type:"bf",
  },
  {
    header:"Deboned King quail",
    description:"sunt in culpa qui deserunt",
    price:10,
    imageUrl:"Image Url",
    type:"bf",
  },
  {
    header:"Deboned King quail",
    description:"sunt in culpa qui deserunt",
    price:10,
    imageUrl:"Image Url",
    type:"bf",
  },
  {
    header:"Deboned King quail",
    description:"sunt in culpa qui deserunt",
    price:10,
    imageUrl:"Image Url",
    type:"bf",
  },
  {
    header:"Deboned King quail",
    description:"sunt in culpa qui deserunt",
    price:10,
    imageUrl:"Image Url",
    type:"bf",
  },
    ];
  
    bf:Menu[]=[];
    di:Menu[]=[];
    de:Menu[]=[];
    lu:Menu[]=[];
  
    constructor() { }
  
    getAll(){
      return this.menu;
    }
  
    getBreakFast(){
      return this.menu.filter(t=>t.type='bf');
    }
    getLunch(){
      return this.menu.filter(t=>t.type='lu');
    }
    getDinner(){
      return this.menu.filter(t=>t.type='di');
    }
    getDessert(){
      return this.menu.filter(t=>t.type='de');
    }
}
