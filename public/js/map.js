let map = {};
let isslocation = {}; 
let isspos = []; 
let startEndLocationIss = []; 
let lines = [];
let startpos = 0; 
let init = true; 
let end = 0; 
let secondspassed = 0; 
let distance = 0;
window.onload = function mapsetup()
{ 
    // x y pixel coordinates on map 
    document.getElementById('map').addEventListener('click', (e) => {
        console.log('px X:' + e.clientX);
        console.log('\npx Y:' + e.clientY);
    });
    // map creation
    map = L.map('map').setView([10, 0], 2.5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
        maxZoom: 18,
        minZoom: 2
    }).addTo(map);
    // L is defined, marker for iss icon can be created. 
    var issicon = L.icon({
        iconUrl: '../images/fighter-jet-solid.svg',
        iconSize: [20, 20],
    })
    //Creating marker with the iss icon
    isslocation = L.marker([0,0],{icon: issicon}).addTo(map);
    //adding various eventlisterns to the map contianer
    const mapcontainer = document.getElementById('map');
    mapcontainer.onwheel = (event) => { console.log('\nevent: ' + event + '\nZoom: ' + map.getZoom() + "\n" + map.getCenter()); };
    mapcontainer.onclick = (event) => toConsole(event);
    mapcontainer.onauxclick = (event) => toConsole(event);
    //click to map will console log lat long and place marker, 
    // also storing coordinates into lines array, redraws every refresh
    map.on('click', function (ev) {
        var latlng = map.mouseEventToLatLng(ev.originalEvent);
        console.log(latlng.lat + ', ' + latlng.lng);
        var m = ({
            title: toString(latlng.lat),
            alt: toString(latlng.lat)
        });
        L.marker([latlng.lat, latlng.lng], { m }).addTo(map);
        lines.push([latlng.lat, latlng.lng]);
        drawline(lines);
    });
    //polygon around Colorado, for fun
    L.polygon([
        [37.0151883, -109.0052589],
        [40.9461775, -109.0361338],
        [40.9311264, -102.0108871],
        [36.7867375, -102.0511498]
    ]).addTo(map);
  
}
//TRACKING OF ISS
//calls to an api, response is JSON object, parsed to lat long location
//To find distance :
//in startEndLocationIss, stores starting location of iss when tracking started, updated lat,long 
//location and stores into index 1 of startEndLocationIss the ending location.

function fetchjson()
{  
     fetch('http://api.open-notify.org/iss-now.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not OK');
          }else
            return response.json()})
    .then(location => {
        handleposition(location); 
      });
}

var followbool = false; 
function handleposition(data)
{
        ++secondspassed; 
        isspos = [data.iss_position.latitude,data.iss_position.longitude]
        console.log(isspos);
        if(init){
            startEndLocationIss.push(isspos)
            startpos = startEndLocationIss[0]; 
            init = false; 
        }else
        {
            end = startEndLocationIss[1] = isspos;
        }
        //console.log(map.distance([alloctions[0],alloctions[1]]));  
        if(startEndLocationIss.length > 1){
            distance = map.distance(startpos,end); 
        }
        let miles = (distance * 3.28084) /5280;
        let mpersec = (miles/secondspassed) * 3600
        lines.push(isspos)
        drawline(lines,'blue'); 
        document.getElementById('latlng').innerText = isspos;
        document.getElementById('distance').innerText = miles
        document.getElementById('dur').innerText = `${secondspassed} seconds`;
        document.getElementById('speed').innerHTML = `${mpersec} miles per second`;
        isslocation.setLatLng(isspos)
        if(followbool)
        {
        map.setView(isspos)    
        }
        

}


async function getissposition()
{  
    fetch('http://api.open-notify.org/iss-now.json')  
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not OK');
          }
         return response.json()
    })
    .then(data => {
        ++secondspassed; 
        isspos = [data.iss_position.latitude,data.iss_position.longitude]
        console.log(isspos);
        if(init){
            startEndLocationIss.push(isspos)
            startpos = startEndLocationIss[0]; 
            init = false; 
        }else
        {
            end = startEndLocationIss[1] = isspos;
        }
        //console.log(map.distance([alloctions[0],alloctions[1]]));  
        if(startEndLocationIss.length > 1){
            distance = map.distance(startpos,end); 
        }
        let miles = (distance * 3.28084) /5280;
        let mpersec = (miles/secondspassed) * 3600
        lines.push(isspos)
        drawline(lines,'blue'); 
        document.getElementById('latlng').innerText = isspos;
        document.getElementById('distance').innerText = miles
        document.getElementById('dur').innerText = `${secondspassed} seconds`;
        document.getElementById('speed').innerHTML = `${mpersec} miles per second`;
        isslocation.setLatLng(isspos)
        map.setView(isspos)
    });
    console.log(data); 
}

    function drawline(lines,color = 'red')
    {
        L.polyline(lines,{color:color}).addTo(map); 
    }
    //debug info
    function toConsole()
    {
        const {lat,lng} = map.getCenter() 
        console.log('center lat: ' + lat + '\ncenter lng: ' + 
        lng +'\nevent: ' +event+'\nZoom:'+map.getZoom()+ 
        "\n" + map.getCenter())

    }
//interval variable to start/stop interval updates of iss location,
//make avaiable to DOM
var set; 
var running = false; 
var followbtn = document.getElementById('follow'); 
window.start = function start(time)
{
   
     set = setInterval(fetchjson,time)
     running = true; 
     followbtn.style.backgroundColor = 'white';

}
window.stop = function stop()
{
    
    clearInterval(set)
    followbool = false
    followbtn.style.backgroundColor = '#cccccc';
}
window.follow = function follow(state)
{
    followbool = !followbool;
    if(followbool)
    {
        followbtn.style.backgroundColor = '#0099cc';
        map.setView(isspos);    
    }else
        followbtn.style.backgroundColor = '#efefef';
        console.log(followbool)

}

window.countries = function countries()
{
    fetch('https://restcountries.com/v3.1/name/japan')
    .then(response => response.json())
    .then(data => {console.log(data[0].flags.png)
        document.body.append(data[0].flags.png); 
    
    }); 
    
}


