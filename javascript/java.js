let celsius = document.getElementById('celsius');
        let fahrenheit = document.getElementById('fahrenheit');
        let kelvin = document.getElementById('kelvin');
        celsius.oninput = function () {
            let f = (parseFloat(celsius.value) * 9) / 5 + 32;
            fahrenheit.value = parseFloat(f.toFixed(2));
          
            let k = (parseFloat(celsius.value) + 273.15);
            kelvin.value = parseFloat(k.toFixed(2));
        }
        fahrenheit.oninput = function () {
            let c = ((parseFloat(
                fahrenheit.value) - 32) * 5) / 9;
            celsius.value = parseFloat(c.toFixed(2));
          
            let k = (parseFloat(
                fahrenheit.value) - 32) * 5 / 9 + 273.15;
            kelvin.value = parseFloat(k.toFixed(2));
        }
        kelvin.oninput = function () {
            let f = (parseFloat(
                kelvin.value) - 273.15) * 9 / 5 + 32;
            fahrenheit.value = parseFloat(f.toFixed(2));
          
            let c = (parseFloat(kelvin.value) - 273.15);
            celsius.value = parseFloat(c.toFixed(2));
        }

        /*--------------------------------------------------------------------------*/

        function calcResistance(input) {
            msv = document.colorSelect.band1.value;
            lsv = document.colorSelect.band2.value;
            mult = document.colorSelect.band3.value;
            tol = document.colorSelect.band4.value;
            var bgColors = new Array(
              "black",
              "#583030",
              "red",
              "orange",
              "yellow",
              "green",
              "blue",
              "purple",
              "gray",
              "white",
              "gold",
              "silver"
            );
            var fgColors = new Array(
              "white",
              "white",
              "white",
              "black",
              "black",
              "white",
              "white",
              "white",
              "black",
              "black",
              "black",
              "black"
            );
            resistText = msv + lsv; // Appends two strings
            for (var i = 0; i < mult; i++) {
              resistText += "0"; // Append some 0's
            }
            resistText = addCommas(resistText); // Insert commas
            resistText += " \u2126 \u00B1"; // Add ohm, space, plus/minus sign
            if (tol == "10") resistText += "5%";
            else if (tol == "11") resistText += "10%";
          
            // Set pull-down menu bg and fg colors:
            document.colorSelect.band1.style.background = bgColors[parseInt(msv)];
            document.colorSelect.band1.style.color = fgColors[parseInt(msv)];
            document.colorSelect.band2.style.background = bgColors[parseInt(lsv)];
            document.colorSelect.band2.style.color = fgColors[parseInt(lsv)];
            document.colorSelect.band3.style.background = bgColors[parseInt(mult)];
            document.colorSelect.band3.style.color = fgColors[parseInt(mult)];
            document.colorSelect.band4.style.background = bgColors[parseInt(tol)];
            document.colorSelect.band4.style.color = fgColors[parseInt(tol)];
          
            // Update the text box
            document.getElementById("resistorValue").innerHTML = resistText;
          }
          
          function addCommas(x) {
            // This handy function found here:
            // http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
            return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
          
        /*--------------------------------------------------------------------------*/
        
  