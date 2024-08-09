document.getElementById("userForm").addEventListener("submit", function(e){
    e.preventDefault();
    
    let idNumber = '#' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    document.getElementById("outputId").innerText = idNumber;

    let name = document.getElementById("name").value;
    document.getElementById("outputName").innerText = name;
    
    let rank = document.getElementById("rank").value;
    document.getElementById("outputRank").innerText = rank;
    document.getElementById("outputRankBold").innerText = rank;
 
    let photo = document.getElementById("photo").files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("outputPhoto").src = e.target.result;
    }
    reader.readAsDataURL(photo);

    document.getElementById("output").style.display = 'block';
});