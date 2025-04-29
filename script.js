navigator.getBattery().then(battery => {
  function updateStatus() {
    const level = Math.round(battery.level * 100);
    document.getElementById('status').textContent = Battery Level: ${level}%;
    
    if (battery.charging && level < 100 && battery.chargingTime !== Infinity) {
      document.getElementById('time').textContent = Time to full charge: ${Math.round(battery.chargingTime / 60)} minutes;
    } else if (level === 100) {
      alert("Battery is fully charged!");
      document.getElementById('time').textContent = "Battery is full.";
    } else {
      document.getElementById('time').textContent = "";
    }
  }

  updateStatus();
  battery.addEventListener('chargingchange', updateStatus);
  battery.addEventListener('levelchange', updateStatus);
  battery.addEventListener('chargingtimechange', updateStatus);
});