$('.btn').click(function () {
    //x - char on pressed btn
    let x = $(this).html();

    if(
        ($('#current').html().length < 14 &&
        ['+', '-', '*', '/', '&lt;=', 'C', '='].indexOf(x) == -1) ||
        ['+', '-', '*', '/', '&lt;=', 'C', '='].indexOf(x) != -1
    )
    switch (x) {
        case '+':
        case '-':
        case '*':
        case '/': {
            // if x is equal to +, -, *, /
            let old = $('#old').html();
            if (old == '') {
                $('#old').html($('#current').html());
                $('#current').html('');
                $('#char').html(x);
            } else {
                if ($('#current').html() != '')
                    calculateToOld(x);
                else
                    $('#char').html(x);
            }

            break;
        }

        case '.': {
            let current = $('#current').html();
            if(current != '' && current.indexOf('.') == -1){
                current = current + '.';
                $('#current').html(current);
            }
            
            break;
        }

        case '&lt;=': {
            sstr = $('#current').html();
            sstr = sstr.substring(0, sstr.length-1);
            $('#current').html(sstr);

            break;
        }

        case 'C': {
            $('#old').html('');
            $('#current').html('');
            $('#char').html('');
            break;
        }

        case '0': {
            if($('#current').html()[0] == '0'){
                if($('#current').html()[1] == '.'){
                    $('#current').html($('#current').html() + x);
                }   
            }else{
                $('#current').html($('#current').html() + x);
            }

            break;
        }

        case '=': {
            calculateToCurrent($('#char').html());
            break;
        }

        default:
            $('#current').html($('#current').html() + x);
            break;
    }

})

let result;
function calculateToOld(x) {
    switch (x) {
        case '+':
            result = ($('#old').html() / 1) + ($('#current').html() / 1);
            break;

        case '-':
            result = ($('#old').html() / 1) - ($('#current').html() / 1);
            break;

        case '*':
            result = ($('#old').html() / 1) * ($('#current').html() / 1);
            break;

        case '/':
            result = ($('#old').html() / 1) / ($('#current').html() / 1);
            break;
    }

    $('#old').html(toRep(result));
    $('#char').html(x);
    $('#current').html('');

}

function calculateToCurrent(x) {
    switch (x) {
        case '+':
            result = ($('#old').html() / 1) + ($('#current').html() / 1);
            break;

        case '-':
            result = ($('#old').html() / 1) - ($('#current').html() / 1);
            break;

        case '*':
            result = ($('#old').html() / 1) * ($('#current').html() / 1);
            break;

        case '/':
            result = ($('#old').html() / 1) / ($('#current').html() / 1);
            break;
    }

    $('#current').html(toRep(result));
    $('#char').html('');
    $('#old').html('');

}


// return str without 0 at the end
// toRep - toRepresentative
function toRep(str){

    str = str.toFixed(12);
    str = (str/1).toPrecision(14);

    while( (str[str.length-1] == '0' || str[str.length-1] == '.') && str.length > 1){
        str = str.substring(0, str.length-1);
    }


    return str;
}