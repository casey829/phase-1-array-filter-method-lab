// Code your solution here
function findMatching(drivers,sameName) {
    return drivers.filter((driverElement) => driverElement.toLowerCase().includes(sameName.toLowerCase()));
}


function fuzzyMatch(drivers,letterMatch) {
    return drivers.filter((driverElement) => driverElement.toLowerCase().startsWith(letterMatch.toLowerCase()));
}


function matchName(drivers,nameMatch) {
    return drivers.filter((driverElement) => driverElement.name.includes(nameMatch));
}