function calculate() {
    try {
        var value1 = parseInt(validate(document.getElementById("value1").value.trim()));
        var units_in = document.getElementById('units_in').value;
        var units_out = document.getElementById('units_out').value;
        document.getElementById("result").value = convert(value1, units_in, units_out);

    } catch (err) {
        alert("There was a problem: " + err.messaqge);
    }
}


function convert(value1, units_in, units_out) {
    if (units_out == 'seconds') {
        c_fac = 365.25*24*60*60; // conversion factor
    } else if (units_out == 'minutes') {
        c_fac = 365.25*24*60;
    } else if (units_out == 'hours') {
        c_fac = 365.25*24;
    } else if (units_out == 'days') {
        c_fac = 365.25;
    } else if (units_out == 'years') {
        c_fac = 1;
    }

    if (units_in == 'tonnes C/yr') {
        return c_fac * value1 / 10200000000; // using units of [metric] tonnes
    } else if (units_in == 'tonnes CO2/yr') {
        return c_fac * value1 / 37400000000; 
    } else if (units_in == 'trees') {
        return c_fac * value1 / 37400000000 * (25/1000);
    } 
}

function validate(value) {
    if (value == null || value == "") {
        alert("Required Field");
        return 0;
    } else if (isNaN(value)) {
        alert("Must be a Number Field");
        return 0;
    } else return value;
}