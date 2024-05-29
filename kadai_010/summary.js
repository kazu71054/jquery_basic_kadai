$(function(){
  //ボタンをクリックすると文字色を変更
  $('#change-color').on('click',function(){
    $('p').css('color','red');
  });

  //ボタンをクリックすると文字内容を変化
  $('#change-text').on('click',function(){
    $('p').text('Hello!');
  });

  //フェードアウト
  $('#fade-out').on('click',function(){
    $('#target').fadeOut();
  });

  //フェードイン
  $('#fade-in').on('click',function(){
    $('#target').fadeIn();
  });
});