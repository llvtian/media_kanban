window.addEventListener("load", () => {
    "use strict";

    if (!CSS.supports("clip-path", "circle(120px at center)")) {
        document.getElementById("stage").innerHTML = '<img src="https://cdn.jsdelivr.net/gh/llvtian/media_kanban@main/cdnjsdelivrMedia/assets/screenshot-1.png">';
        return;
    }

    // const apiPath = "https://live2d.fghrsh.net/api";
    const apiPath = "/";
    let state = 0, loading = false,
        modelId = localStorage.getItem("modelId"),
        modelTexturesId = localStorage.getItem("modelTexturesId");
    if (modelId === null) {
        modelId = 1;
        modelTexturesId = 53;
    }
    loadModel(modelId, modelTexturesId);

    function loadModel(modelId, modelTexturesId) {
        localStorage.setItem("modelId", modelId);
        if (modelTexturesId === undefined) modelTexturesId = 0;
        localStorage.setItem("modelTexturesId", modelTexturesId);
        loadlive2d("live2d", `https://cdn.jsdelivr.net/gh/llvtian/media_kanban@main/cdnjsdelivrMedia/json/index_2.json?id=${modelId}-${modelTexturesId}`, null);
        console.log("live2d", `模型 ${modelId}-${modelTexturesId} 加载完成`);
        setTimeout(() => {
            coverPosition("80%");
            state = 2;
        }, 2000);
    }

    // function loadRandModel() {
    //     const modelId = localStorage.getItem("modelId"),
    //         modelTexturesId = localStorage.getItem("modelTexturesId");
    //     fetch(`${apiPath}/rand_textures/?id=${modelId}-${modelTexturesId}`)
    //         .then(response => response.json())
    //         .then(result => {
    //             loadModel(modelId, result.textures.id);
    //             setTimeout(() => {
    //                 state = 2;
    //                 coverPosition("80%");
    //                 loading = false;
    //             }, 1000);
    //         });
    // }

    // function loadOtherModel() {
    //     const modelId = localStorage.getItem("modelId");
    //     fetch(`${apiPath}/switch/?id=${modelId}`)
    //         .then(response => response.json())
    //         .then(result => {
    //             loadModel(result.model.id);
    //         });
    // }

    function coverPosition(pos) {
        document.getElementById("cover").style.bottom = pos;
    }

    document.getElementById("handle").addEventListener("click", () => {
        if (state === 1) {
            state = 2;
            coverPosition("80%");
        }
        else if (state === 2) {
            state = 1;
            coverPosition("20%");
        }
    });

});