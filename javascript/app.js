	//The global variables are stored here:

	var number = 75;
  var winCounter = 0;
  var lossCounter = 0;

  function run(){
        counter = setInterval(decrement, 1000);
        }

  // The decrement function.
    function decrement(){
        // Decrease number by one.
        number--;
        
       $('#display').html(number);
        // Once number hits zero...
        if (number === 0){
            // ...run the stop function.
            stop();
            // Alert the user that time is up.
            alert('Time Up!')
        }
    }
    
    function stop(){
            // Clears our "counter" interval, and the win/loss counters
            // We just pass the name of the interval
            // to the clearInterval function.
            clearInterval(counter);
            document.getElementById("winCounter").innerHTML= winCounter;
            document.getElementById("lossCounter").innerHTML= lossCounter;
    }

	//The following eight functions interrogate the player's guesses and increment the win/loss counters appropriately

  function checkRadio1() 	{
			$('.radio1all').click(function () {
          var checkedradio = $('[name="b1"]:radio:checked').val();
          if (checkedradio == "Wild Turkey") {
        	 winCounter++;
          }
          else {
           lossCounter++;
          }

        })	
     }

    function checkRadio2() 	{
     	$('.radio2all').click(function () {
          var checkedradio = $('[name="b2"]:radio:checked').val();
          if (checkedradio == "Wolverine") {
          	winCounter++;
          }
          else {
            lossCounter++;
          }
      	})	
    }

    function checkRadio3()  {
      $('.radio3all').click(function () {
          var checkedradio = $('[name="b3"]:radio:checked').val();
          if (checkedradio == "7ft") {
            winCounter++;
          }
          else {
           lossCounter++;
          //return;
        }

        })  
     }

    function checkRadio4()  {
      $('.radio4all').click(function () {
          var checkedradio = $('[name="b4"]:radio:checked').val();
          if (checkedradio == "Hands") {
            winCounter++;
          }
          else {
            lossCounter++;
          }
        })  
    }

     function checkRadio5()  {
      $('.radio5all').click(function () {
          var checkedradio = $('[name="b5"]:radio:checked').val();
            if (checkedradio == "Bison") {
            winCounter++;
          }
          else {
            lossCounter++;
         }

        })  
     }

    function checkRadio6()  {
      $('.radio6all').click(function () {
          var checkedradio = $('[name="b6"]:radio:checked').val();
          if (checkedradio == "Pass") {
            winCounter++;
          }
           else {
            lossCounter++;
          }
        })  
    }

     function checkRadio7()  {
      $('.radio7all').click(function () {
          var checkedradio = $('[name="b7"]:radio:checked').val();
            if (checkedradio == "Possum") {
            winCounter++;
          }
          else {
            lossCounter++;
          }
        })  
     }

    function checkRadio8()  {
      $('.radio8all').click(function () {
          var checkedradio = $('[name="b8"]:radio:checked').val();
          if (checkedradio == "Diam") {
            winCounter++;
          }
          else {
            lossCounter++;
          }
        })  
    }

//The functions are stored here:

    run();
    checkRadio1();
    
    checkRadio2();
    checkRadio3();
    checkRadio4();
    checkRadio5();
    checkRadio6();
    checkRadio7();
    checkRadio8();


	


