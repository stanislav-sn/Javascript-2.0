{esversion: 6}

const options = document.getElementById('city-select').options;


document.querySelector('.button-primary').onclick = select;

function data(data) {
            console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
    document.querySelector('.features').innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    }

function select() {
    
    if (options.selectedIndex === 1) {
        // Kyiv
        fetch('https://api.openweathermap.org/data/2.5/weather?id=703447&units=metric&appid=6b62e85776c3f9b9d61c4ad586e62467')
        .then(function (resp) { return resp.json() })
        .then (data)
        .catch(function () {
            // catch any errors
        });
    } else
    
    if (options.selectedIndex === 2) {
        // Kharkiv

        fetch('https://api.openweathermap.org/data/2.5/weather?id=706483&units=metric&appid=6b62e85776c3f9b9d61c4ad586e62467')
        .then(function (resp) { return resp.json() })
        .then (data)
        .catch(function () {
            // catch any errors
        });
    } else
        
    if (options.selectedIndex === 3) {
        // Poltava

        fetch('https://api.openweathermap.org/data/2.5/weather?id=696643&units=metric&appid=6b62e85776c3f9b9d61c4ad586e62467')
        .then(function (resp) { return resp.json() })
        .then (data)
        .catch(function () {
            // catch any errors
        });
    } else {
        console.log('Ничего не выбрано');
            }
    
    console.log(options.selectedIndex);
}




