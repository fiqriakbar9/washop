$(window).bind('load', function () {

  $("#menulis").delay(2000).fadeOut(0);
  $("#status").delay(2000).fadeIn(0);

  $(".c1").delay(2000).animate({opacity: "1"},0);
  var notif = document.getElementById("my_audio"); setTimeout(function() { notif.play(); }, 2000);

  $("#menulis").delay(1000).fadeIn(0);
  $("#status").delay(1000).fadeOut(0);

  $("#menulis").delay(3000).fadeOut(0);
  $("#status").delay(3000).fadeIn(0);

  $(".c2").delay(4000).animate({opacity: "1"},0);
  var notiff = document.getElementById("my_audio"); setTimeout(function() { notiff.play(); }, 6000);
  
  $(".c3").delay(6000).animate({opacity: "1"},0);
  var notifff = document.getElementById("my_audio"); setTimeout(function() { notiff.play(); }, 8000);
  
  $(".c4").delay(8000).animate({opacity: "1"},0);
  var notifff = document.getElementById("my_audio"); setTimeout(function() { notiff.play(); }, 10000);

});

$('#pesan').focus(function(){
  $('#wafield .field div.option').fadeIn();
  $('html, body').animate({scrollTop: $('#option').offset().top}, 500);
});

$('a.kirimwa').click(function(){
  if ($('#layanan').val() == 'pilihLayanan'){
    alert('Silahkan "Pilih Layanan" sebelum mengirim pesan...');
    $('#pesan').focus();
    return false;
  } else if ($('#jumlah').val() == '') {
    alert('Alamat E-mail dibutuhkan...');
    $('#pesan').focus();
    return false;
  } else if ($('#nama').val() == '') {
    alert('Silahkan Tulis "Nama Lengkap Anda" sebelum mengirim pesan...');
    $('#pesan').focus();
    return false;
  } else if ($('#pesan').val() == '') {
    alert('Silahkan tulis pesan...');
    $('#pesan').focus();
    return false;
  } else if ($('#layanan1').val() == 'pilihBayar') {
    alert('Silahkan "Pilih Metode Pembayaran" sebelum mengirim pesan...');
    $('#pesan').focus();
    return false;
  } else {
    $(this).attr('href','https://api.whatsapp.com/send?phone=' + $('#tel').val() + '&text=Hallo All In One Shop, ' + '%0A%0A-%0A%0AUsername/Link : ' + $('#nama').val() + '%0A%0ALayanan : ' + $('#layanan').val() + '%0A%0ADengan Jumlah Pesanan : ' + $('#jumlah').val() + '%0A%0APembayaran Melalui : ' + $('#layanan1').val() +  '%0A%0A-%0A%0A' + $('#pesan').val());
    $(this).attr('target','_blank');
  }
});

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes('ms');
var dateTime = date + ' ' + time;

document.getElementById('dateTime').innerHTML = dateTime;
document.getElementById('chatTime').innerHTML = time;