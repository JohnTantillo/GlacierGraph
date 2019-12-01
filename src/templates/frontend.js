function ajaxGetRequest(path, callback) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState===4 && this.status ===200) {
            callback(this.response);
        }
    };
    request.open("GET", path);
    request.send();
}

function displayGraph(jstring){
    console.log("begin");
    let z_data = JSON.parse(jstring);

    let data = [{
        z: z_data,
        type: 'surface'
    }];

    let layout = {
        title: 'Surge Glacier Slice Model',
        autosize: true,
        width: 1400,
        height: 700,
        margin: {
            l: 65,
            r: 50,
            b: 65,
            t: 90,
        }
    };
    console.log("Plotting");
    Plotly.newPlot('elevation', data, layout);
    console.log("Plotted!")
}

function displayLine(jstring){
    let lineData = JSON.parse(jstring);

    let trace = {
        x: lineData['x'],
        y: lineData['y'],
        type: 'scatter'
    };

    let layout = {
        title: 'Surge Glacier Elevation',
        autosize: true,
        width: 1200,
        height: 600,
    };

    let data = [trace];
    Plotly.newPlot('line', data, layout);
}

function getData() {
    ajaxGetRequest('/lineData', displayLine );
    ajaxGetRequest('/glacierData', displayGraph );
}