// Select color input
var color = $('#colorPicker').val();
// Select size input

// When size is submitted by the user, call makeGrid()

const table = $("#pixel_canvas");

function makeGrid() {
    var height = $("#input_height").val();
    var width = $("#input_width").val();
    table.empty();
    for(var i=0; i<height; i++){
        let row = $('<tr></tr>');
        for(var j=0; j <width; j++){
            let cell = $("<td></td>");
            row.append(cell);
            cell.hide();
            setTimeout(() => {
                cell.fadeIn();
            }, 30*i + 30*j);
        }
        $("#pixel_canvas").append(row);    
    }
    
}

$("#submitBtn").on("click",function(event){
    event.preventDefault();
    makeGrid();
})



