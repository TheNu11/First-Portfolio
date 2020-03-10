
    var count = 0;

function postFunction(){
    
    var write = document.getElementById("text1");

    
    if(count == 0){
        var firstPost = document.getElementById("post1");
        firstPost.innerHTML = write.value;
        count++;
    }
    else if(count == 1){
        var firstReply = document.getElementById("reply1");
        firstReply.innerHTML = write.value;
        count++;

    }
    else if (count == 2){
        var secondReply = document.getElementById("reply2");
        secondReply.innerHTML = write.value;
        count++
    }
    else{
        alert("Not Enough Space!")
    }

}

function clearFunction(){
    
    var firstPost = document.getElementById("post1");
    var firstReply = document.getElementById("reply1");
    var secondReply = document.getElementById("reply2");


    firstPost.innerHTML = null;
    firstReply.innerHTML = null;
    secondReply.innerHTML = null;
    count = 0;
}