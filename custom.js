  function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
     return false;
   }else{
     return true;
   }
 }

 function IsMobile(mobile) {
  var regex = /^[6-9]\d{9}$/;
  if(!regex.test(mobile)) {
   return false;
 }else{
   return true;
 }
}

function IsVehicleNumber(vehicle_number) {
  var regex = /^[A-Za-z]{2}[0-9]{1,2}[A-Za-z]{1,2}[0-9]{3,4}$/;
  if(!regex.test(vehicle_number)) {
   return false;
 }else{
   return true;
 }
}

function IsValidDate(date) {
  var regex = /^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d$/;
  if(!regex.test(date)) {
   return false;
 }else{
   return true;
 }
}

function IsOnlyDigit(num) {
  var regex = /^[1-9][0-9]*$/;
  if(!regex.test(num)) {
   return false;
 }else{
   return true;
 }
}

function IsOnlyDigitWithZeroAccept(num) {
  var regex = /^[0-9]*$/;
  if(!regex.test(num)) {
   return false;
 }else{
   return true;
 }
}
function IsFloat(num) {
  var regex =/^-?(?:\d+|\d*\.\d+)$/;
  if(!regex.test(num)) {
   return false;
 }else{
   return true;
 }
}
function IsPincode(num) {
  var regex =/^[1-9][0-9]{5}$/;
  if(!regex.test(num)) {
   return false;
 }else{
   return true;
 }
}
function IsDate(num) { //d-m-Y (21-02-1998)
  var regex =/^(0[1-9]|1\d|2\d|3[01])\-(0[1-9]|1[0-2])\-(19|20)\d{2}$/;
  if(!regex.test(num)) {
   return false;
 }else{
   return true;
 }
}
function scroll_to_id(id){
    //alert(id);
    $('html, body').animate({
      scrollTop: $(id).offset().top-100
    }, 1000);
    jQuery(id).focus();
  }