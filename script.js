//your JS code here. If required.
 function isLeapYear(year) {
            // Check if the year is a leap year
            if (year % 4 === 0) {
                if (year % 100 === 0) {
                    if (year % 400 === 0) {
                        return true; // Divisible by 400
                    }
                    return false; // Divisible by 100 but not by 400
                }
                return true; // Divisible by 4 but not by 100
            }
            return false; // Not divisible by 4
        }

        function calculateDays() {
            // Get the year from the user
            const year = parseInt(prompt('Enter a year:', ''), 10);
            
            // Check if the input is a valid number
            if (isNaN(year)) {
                alert('Please enter a valid year.');
                return;
            }
            
            // Determine the number of days in the year
            const days = isLeapYear(year) ? 366 : 365;
            
            // Display the result
            document.getElementById('result').textContent = `daysofAyear ${year}  ${days} days.`;
        }
  