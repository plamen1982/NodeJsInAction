$(()=> {
    let $h1 = $('h1');
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
            $h1.html(`It is ${temperature} &#176 in ${zipCode}.`);
        });

        request.fail(() => {
            $h1.text("Error");
        });
    });
});