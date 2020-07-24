$("#burger-form").on("submit", function(event){
    event.preventDefault();
    var isEaten = false;
    console.log("CHECK");
    

    var newBurger = {
        name: $("#burger-input").val().trim(),
        devoured: isEaten,
      };

      console.log(newBurger);
    
      // Send an AJAX POST-request with jQuery
      $.post("/api/burger", newBurger)
        // On success, run the following code
        .then(function() {
            $("#burger-input").val("");
            $.get("/api/burgers", function(data) {
                console.log("DATALENGTH", data.length);
                  $(".prepared-list").append($("<li>").attr("class", "prepared-burger").text(newBurger.name).val(data.length).append($("<button>").val(data.length).text("DEVOUR THIS BURGER").attr("class", "btn")));
            });
         
        })
      // Empty each input box by replacing the value with an empty string
  
      
         
    
    });
//Get method to initialize page w DB data
$.get("/api/burgers", function(data) {
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
        
        if(data[i].devoured === false){
            $(".prepared-list").append($("<li>").attr("class", "prepared-burger").val(data[i].id).text(data[i].name).append($("<button>").val(data[i].id).text("DEVOUR THIS BURGER").attr("class", "btn")));
        }
        else{
            $(".devoured-list").append($("<li>").attr("class", "devoured-burger").val(data[i].id).text(data[i].name));

        }
  
      }
  
    }
  
  });

  $(".prepared-list").on("click", function(event){
      event.preventDefault();
    if(event.target.matches(".btn")){
        var btnVal = $(event.target).val();
        var brgrName, brgrVal;
        console.log(btnVal);
        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + btnVal
          })
            // On success, run the following code
            .then(function() {
              console.log("Updated Successfully!");
              $(event.target).remove();
              $( ".prepared-burger" ).each(function(index) {
                 if(parseInt(btnVal) === parseInt($(this).val())){
                     brgrVal = $(this).val();
                     brgrName = $(this).text();
                     $(this).remove();
                     
                 } 
              });
              $(".devoured-list").append($("<li>").attr("class", "devoured-burger").text(brgrName).val(brgrVal));
            });

        }     
    });

