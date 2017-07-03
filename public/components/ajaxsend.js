var AJAX = {
  send: function(url, sData) {
    let data = {'data': sData};
    // 객체를 스트링 형식으로 변환하여 서버에 제공
    data = JSON.stringify(data);
    // XML 리퀘스트 서블릿 객체 생성
    let xhr = new XMLHttpRequest();
    // url 정보를 포스트 객체에 알맞은 형태로 저장
    xhr.open('POST', url);
    // 모르겠다
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data);

    xhr.addEventListener('load', () => {
      // String 형식으로 오는 응답 정보를 객체 형식으로 저장
      var response = JSON.parse(xhr.responseText);
      console.log(response.result);
      var listItem = `<li class="list-group-item">${response.data}</li>`;
      addList += listItem;

      document.querySelector('.list-group').innerHTML = addList;
    });
  }
}
