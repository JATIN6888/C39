class Form{
    constructor(){ 
        this.input=createInput("Name")
        this.greeting=createElement('h2');
        this.button=createButton("play")
    }
        hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement('h2')
        title.html("Car Racing Game");
        title.position(500,100);


       
        this.input.position(500,200);

      //  var AGE=createInput("Age")
      //      AGE.position(500,400);


       
        this.button.position(500,300);

        //title.position(500,100);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
         //   AGE.hide();
            player.name=this.input.value();
            playerCount=playerCount+1
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hello "+player.name);
            this.greeting.position(500,400);


            
            

        })


    }

}