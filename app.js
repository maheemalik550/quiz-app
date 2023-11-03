
var questions = [
    {
        question:"Algorithm is a type of",
        option1:"Rule of thumb",
        option2:"Mechanical solution",
        option3:"Means-end analysis",
        correctAns:"Mechanical solution"
    },
    {
        question:"Which keys are used to switch between programs in windows?",
        option1:"Ctrl+TAB",
        option2:"Alt+TAB",
        option3:"Shift+TAB",
        correctAns:"Alt+TAB"
    },{
        question:" Multimedia contains?",
        option1:"Audio",
        option2:"Video",
        option3:"Both 1 and 2",
        correctAns:"Both 1 and 2"
    },{
        question:" Which key of the keyboard is mainly used to cancel the program?",
        option1:"Del Key",
        option2:"Enter Key",
        option3:"Esc Key",
        correctAns:"Esc Key"
    },{
        question:"With reference to the Internet, what is the full form of IP??",
        option1:"Internet Protocol",
        option2:"Intra propaganda",
        option3:"Intra protocol",
        correctAns:"Internet Protocol"
    }
    ,{
        question:"The first computer to be used commercially was?",
        option1:"Manic (MANIAC)",
        option2:"ENIAC",
        option3:"UNIVAC",
        correctAns:"UNIVAC"
    },
    {
        question:"What is the full form of ISDN?",
        option1:"Input Service Digital Network",
        option2:"Integrated Services Digital Network",
        option3:"Integrated Switch Digital Network",
        correctAns:"Integrated Services Digital Network"
    }


]
    var currentQues = document.getElementById("currentQues");
    var totalQues = document.getElementById("totalQues");
    var para = document.getElementById("ques");
    var opt1 = document.getElementById("opt1");
    var opt2 = document.getElementById("opt2");
    var opt3 = document.getElementById("opt3");
    var button = document.getElementById("btn");
    var timer = document.getElementById("timer")
    var index = 0;
    var score = 0;
    var min = 1;
    var sec = 59;
    
    
    
    setInterval(function(){
        timer.innerHTML = `${min}:${sec}`;
        sec--
        if(sec<0){
            min--;
            sec = 59    
        }
        if(min<0){
            min= 1;
            sec = 59;
            nextQuestion()
        }
    },1000)
    
    
    function nextQuestion(){
        min= 1;
        sec = 59;
        var getOptions = document.getElementsByName("options");
        currentQues.innerHTML = index+1;
        totalQues.innerHTML =  questions.length+1;
        for(var i = 0;i<getOptions.length;i++)
        {
            // currentQues.innerHTML = index;
           
        // totalQues.innerHTML =  questions.length;
            if(getOptions[i].checked){
                var selectedValue = getOptions[i].value;
       
                // console.log(selectedValue)
                var selectedQues = questions[index-1]["question"];
                var selectedAns = questions[index-1][`option${selectedValue}`]
                var correctAns = questions[index-1]["correctAns"]
                if(selectedAns == correctAns){
                    score++
                }
            }
            getOptions[i].checked = false
        }
    
        button.disabled = true
    
        if(index >questions.length - 1){
    
            Swal.fire(
                'Good job!',
            `Your percentage is ${((score / questions.length)*100).toFixed(2)}`,
                'success'
              )
            // console.log("your percentage is " + ((score / questions.length)*100).toFixed(2))
        }
        else{
    
            
            para.innerHTML = questions[index].question;
            opt1.innerText = questions[index].option1;
            opt2.innerText = questions[index].option2;
            opt3.innerText = questions[index].option3;
            index++
        }
    }
    
    // nextQuestion()
    
    
    function clicked()
    {
        button.disabled = false
    }
