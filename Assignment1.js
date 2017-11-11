function Vehicle(name, description, type, cost_per_km) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.cost_per_km = cost_per_km;
}

function TwoWheeler() {}

TwoWheeler.prototype = Object.create(Vehicle.prototype);
TwoWheeler.prototype.constructor = TwoWheeler;

function FourWheeler() {}

FourWheeler.prototype = Object.create(Vehicle.prototype);
FourWheeler.prototype.constructor = FourWheeler;

var vehicleObject;

var displayContent = function (vehicleObject, type) {
    document.getElementById('displayForm').style.display = 'none';
    var displaycontainer = document.getElementById('displayContent');
    displaycontainer.style.display = 'block';
    if (type == '4') {
        document.getElementById('header').innerText = 'Four Wheeler Details';
    } else {
        document.getElementById('header').innerText = 'Two Wheeler Details';
    }
    document.getElementById('content_name').innerText = "Name: " + vehicleObject.name;
    document.getElementById('content_desc').innerText = "Description: " + vehicleObject.description;
    document.getElementById('cost').innerText = "Cost per Km: " + vehicleObject.cost_per_km;
    document.getElementById('content_type').innerText = "Vehicle type- " + vehicleObject.type + "Wheeler";

    if (type == '4') {
        var paragraph = document.createElement('p');
        paragraph.innerText = "Fuel Type- " + vehicleObject.fuelType;
        displaycontainer.appendChild(paragraph);
    }
};

vehicleBtn.addEventListener('click', function(e){
    e.preventDefault();
    var vehicleBtn = document.getElementById('vehicleBtn');
    var name = document.getElementById('name').value;
    var description = document.getElementById('desc').value;
    var type = document.getElementById('type').value;
    var cost_per_km = document.getElementById('cost_per_km').value;
    
    if (type == '4') {
        vehicleObject = new FourWheeler();
        vehicleObject.name = name;
        vehicleObject.description = description;
        vehicleObject.type = type;
        vehicleObject.cost_per_km = cost_per_km;

        document.getElementById('fuelForm').style.display = 'block';

        var fuelSubmitBtn = document.getElementById('fuelSubmitBtn');
        fuelSubmitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            var fuel_type = document.getElementById('fuelType').value;
            vehicleObject.fuelType = fuel_type;
            displayContent(vehicleObject, '4');
        });

    } else {
        vehicleObject = new TwoWheeler();
        vehicleObject.name = name;
        vehicleObject.description = description;
        vehicleObject.type =type;
        vehicleObject.cost_per_km = cost_per_km;
        displayContent(vehicleObject, '2');
    }
});
