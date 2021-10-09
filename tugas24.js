// Buatlah sorting dan reverse dari deret angka array ini :
// 32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66

function panggilArray(){
    let angka = [32,33,16,40,9,7,11,2,4,1,66];
    console.log(`Sebelumnya : ${angka}`);
    angka = angka.sort();
    console.log(`Ascendiing : ${angka}`);
    angka = angka.reverse();

    return angka;
}

console.log(`Descending : ${panggilArray()}`)