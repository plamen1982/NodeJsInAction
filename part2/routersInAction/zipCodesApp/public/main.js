$(()=> {
    let $h1 = $('h1');
    let $h2 = $('h2');
    let $h3 = $('h3');
    let $zip = $("input[name='zip']");

    $("form").on("submit", (event) => {
        event.preventDefault();

        let zipCode = $.trim($zip.val());
        $h1.text("Loading...");

        let request = $.ajax({
            url: `/${zipCode}`,
            dataType: "json"
        });

        request.done((data) => {
            let temperature = data.temperature;
            let zip = data.zipcode;
            let city = data.city;
            let state = data.state;
            let windSpeed = data.windSpeed;
            let dailySummary = data.dailySummary;

            $h1.html(`It is ${temperature} &#176 F in ${zip}. State: ${state}, city: ${city}`);
            $h2.html(`Windspeed: ${windSpeed} mph`);
            $h3.html(`Description: ${dailySummary}`);
        });

        request.fail(() => {
            $h1.text("Error");
        });
    });
});