function clearData() {
    document.getElementById("width").value = "";
    document.getElementById("color").value = "";
    document.getElementById("color").value = "";
    document.getElementById("textile").value = "0";
    document.getElementById("gwidth").value = "";
    document.getElementById("height").value = "";
    document.getElementById("height_tool").value = "";
    total_price.innerHTML = 0;
    document.querySelector("#textile").selected = true;
}

export default clearData;