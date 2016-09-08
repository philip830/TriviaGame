function triviaN1() {
		alert('You lose')
		stop();
	}

	function run(){
        counter = setInterval(decrement, 1000);
        }

	// The decrement function.
    function decrement(){
        // Decrease number by one.
        console.log(number);

        number--;
        // Show the number in the #show-number tag.
       // $('#show-number').html('<h2>' + number + '</h2>');
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
            // Clears our "counter" interval.
            // We just pass the name of the interval
            // to the clearInterval function.
            clearInterval(counter);
    }

    run();

    //********************************
    //*****************
function checkRadio() {
        var payment="";
        var len = document.frmOne.payment.length;
        var i;  

        for (i=0; i<len; i++) {
            if (document.frmOne.payment[i].checked) {
                payment = document.frmOne.payment[i].value;
                console.log(payment);
                    break;
            }
        }

        if (payment = "") {
            document.getElementById("radio_error").innerHTML = "please take a guess"
        }
        else {
            document.getElementById("radio_error").innerHTML = "";
            console.log("guess made")
                return true;    
        }
    }
        
        checkRadio();
        //****************************

        <input type="radio" name="b1" value="Wild Turkey"
                checked="checked" /> Turkey <br />

    //******************
      $('.radio2all').click(function ()  {