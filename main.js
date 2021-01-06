class Menu{
  constructor(){
  this.DOM={};
  this.DOM.body=document.querySelector("body");
  this.DOM.button=document.querySelector(".menu__button");
  this.DOM.cover=document.querySelector(".menu__cover");
  this.DOM.menu=document.querySelector(".menu");
  this.eventType=this._eventType();
  this._addEvent();
  }

  _eventType(){
    return window.ontouchstart?"touchstart":"click";
  }

  _menuOpen(){
    this.DOM.body.classList.toggle("menu-open");
    this.DOM.body.classList.remove("menu-close");
  } 

  _menuClose(){
    this.DOM.body.classList.remove("menu-open");
    this.DOM.body.classList.toggle("menu-close");
  }

  _addEvent(){
    this.DOM.button.addEventListener(this.eventType,this._menuOpen.bind(this));
    this.DOM.cover.addEventListener(this.eventType,this._menuClose.bind(this));
    this.DOM.menu.addEventListener(this.eventType,this._menuClose.bind(this));
  }
}

new Menu();