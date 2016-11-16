app.controller('MainCtrl',['$scope',function($scope){
		$scope.step = "mandeep";
		$scope.hint = "You can start by entering an expression over the input line.";

		/**
		*	The function shows the hints
		*
		*
		**/
		$scope.showHint = function(){
			//toggle the appearance of the hint modules
			$(".hints").toggle("drop",{direction: "right"});
			$("#our-hero").toggle("drop",{direction: "down"});

			//hide the hint modules after some time
			setInterval(function() {
                $( ".hints" ).hide( "drop",{direction: "right"} );
                $("#our-hero").hide("drop",{direction: "down"});
          	},10000);
		}

		/**
		*	The function checks for the brackets
		*
		*
		**/
		$scope.checkIfValid = function($event){
			// console.log($event.keyCode);
			// console.log($event.shiftKey);

			var input = $("#input").val();
			var i = input.length;
			var count1=0,count2=0;
			while (i--) {
				if(input[i]=='(')
					count1++;
				else if(input[i]== ')')
					count2++;
			}

			if(count2!=count1){
				$("#input").css({'background-color':'#ff0000'});
				$scope.hint = "Check for the brackets.";
			}else{
				$("#input").css({'background-color':'#fff'});
				$scope.hint = "You are going good.";
				$(".steps").append('<div class="step">'+input+'</div>');
			}

		}


}]);