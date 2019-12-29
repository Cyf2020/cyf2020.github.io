const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "城南花已开",
        artist: '三亩地',
        url: './1.mp3',
        cover: '',
      },
    ]
});