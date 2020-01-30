//biến
var firstname = 'hau';
firstname = 8;
firstname = "Hau";
var age =25;
const gioiTinh = 'nam ';    

console.log("Bien gioiTinh = ",gioiTinh)    ;
console.log("Bien firstname = ",firstname);
console.log("Bien age = ",age);


var isMarried = true;
var job = 'engineer';
// alert(firstname+'is a: '+age +'years old'+job+ 'Is he married?'+ isMarried)
console.log("Bien job = ",job);
console.log("Bien isMarried = ",isMarried);


var temp1 = 0.2;
var temp2 = "String";

console.log("Bien temp = ",temp1); 
console.log("temp2 has the length is: "+temp2.length); 
var bien1,bien2,bien3;
bien1 = 1;
bien2 = 2;
bien3 = 3;
function nameFunction(bien1,bien2,bien3)
{
    return bien1+bien2+bien3; 
}
console.log(nameFunction(bien1,bien2,bien3) + " là giá trị của hàm nameFunction với đầu vào biến 1 = " + bien1 +" ,biến 2 = "+bien2 + ",biến 3 = "+bien3);
console.log("kiểu trả về của hàm là "+ typeof(nameFunction(bien1,bien2,bien3)));

var mang1 = ['hau',23];
console.log(mang1[0]);
mang1.push('gtthem1',12);//push này là thêm giá trị vào cuối mảng
console.log(mang1);
mang1.push(['A','B']);//có thể thêm 1 mảng khác vào cuối mảng đã có
console.log(mang1);

var mangNhieuChieu = [[12,'hau'],[23,'Minh'],[21,'Duc']];
console.log("Giá trị của mangNhieuChieu[0][0]:" + mangNhieuChieu[0][0]);// mảng đa chiều
mangNhieuChieu.pop();//pop là xóa bỏ phần tử cuối cùng của mảng
console.log(mangNhieuChieu);
 console.log(mangNhieuChieu.shift());//xóa phần tử đầu tiên của mảng và trả về nó
console.log(mangNhieuChieu.pop());// xóa phần tử cuối cùng của mảng và trả về nó
console.log("Giá trị của mảng bây giờ là:"+mangNhieuChieu);
mangNhieuChieu.unshift('Phần tử thêm vào đầu');// Chèn 1 phần tử vào đầu mảng
console.log(mangNhieuChieu);
