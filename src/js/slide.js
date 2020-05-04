document.addEventListener("DOMContentLoaded", () => {

    let change;
    let index = 0;
    const gallery = ["speaker_1", "speaker_2", "speaker_3", "speaker_4", "speaker_5"];
    const text = ["Pro_ject_Debut_3_bl", "Pro_ject_Debut_III_red_1", "Pro_ject_Debut_III_yellow_1", "Pro_Ject_rpm_5", "Pro_Ject_rpm10"];

    document.querySelector(".fa-chevron-left").addEventListener("click", back);
    document.querySelector(".fa-chevron-right").addEventListener("click", next);


    function next(){
        if(index<gallery.length-1){
            index++;
        }else{
            index=0;
        }
        newPhoto();
    }
    
    function back(){
        
        if(index>0){
            index--;
        }else{
            index=gallery.length-1;
        }
        newPhoto();
    }
    
    function newPhoto(){
        change="/assets/img/billeder/"+gallery[index]+".jpg";
        document.querySelector(".slide__image").setAttribute("src", change);
        //TEXT
	    change=text[index];
	    document.querySelector(".slide__title").textContent=change;
    }

    //Timer

    setInterval(next, 5000);

    let diasChange;
    
    function diasshow(){
	diasChange=setInterval(newDias, 2000);
    }

    function newDias(){
	    if(index<gallery.length-1){
		    index++;
	    }else{
		    index=0;
	    }
        newPhoto(); 
    }

    
        


    
});