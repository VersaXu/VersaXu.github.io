let btn_record = document.querySelector(".btn-record");

btn_record.addEventListener("click", async function() {
    let stream = await navigator.mediaDevices.getDisplayMedia({
        video: true
    })

    // 以下我们选择更好的浏览器支持
    const mine = MediaRecorder.isTypeSupported("video/webm; codecs=vp9")
                    ? "video/webm; codecs=vp9"
                    : "video/webm"
    let mediaRecorder = new MediaRecorder(stream, {
        mimeType: mine
    })

    //当我们的屏幕被录制下来的时候，浏览器会分给我们一个块(block),我们将其储存在变量中
    let chunks = [];
    mediaRecorder.addEventListener('dataavailable', (e) => {
        chunks.push(e.data);
    })

    // 当点击暂停按钮时，系统停止像chunks中传递块，则录制终止
    mediaRecorder.addEventListener('stop', () => {
        let blob = new Blob(chunks, {
            type: chunks[0].type
        })

        let url = URL.createObjectURL(blob);

        let video = document.querySelector(".video");
        video.src = url;

        let a = document.createElement('a')
        a.href = url
        a.download = 'video.webm'
        a.click()
    })
    // 手动启动
    mediaRecorder.start()
});