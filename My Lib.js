function isTouching(R1,L1){
    if(L1.x-R1.x<= L1.width/2+R1.width/2
      && R1.x-L1.x<=L1.width/2+R1.width/2
      && L1.y-R1.y<= L1.height/2+R1.height/2
      && R1.y-L1.y<=L1.height/2+R1.height/2
      ){
      return true;
    }
    else{
      return false;
    }
   
  }