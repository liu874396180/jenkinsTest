import Vue from "vue"

const viewImage = Vue.directive("lpd-image",{
    inserted:function(el,binding){
        el.style.cursor = 'pointer';
        el.title = '点击可查看大图';
        // 放大倍数
        let allowScale = (binding.value && binding.value.scale) || 1;
        // 图片
        let img = document.createElement('img');
        // 图片外壳
        let imgBox = document.createElement('div');
        // 这个查看图片包含框
        let divBox = document.createElement('div');
        let closeBox = document.createElement('span');
        // 查看大图的关闭按钮
        closeBox.innerText = '×';
        closeBox.className = 'close';

        divBox.className = 'view-image-container';
        imgBox.id = 'imgBox';
        
        imgBox.appendChild(img);
        // imgBox.appendChild(closeBox);
        divBox.appendChild(imgBox);
        
        divBox.style.display = 'none';

        // document.body.appendChild(divBox);
        document.getElementById("app").appendChild(divBox);

        el.addEventListener('click', function () {
            img.src = el.src;
            // divBox.style.display = 'block';
            divBox.style.cssText = 'display: block;position: fixed;top: 0;bottom: 0;left: 0;right: 0;background: rgba(0,0,0,.5);height: 100%;'
            // 设置图片居中
            let imgBoxH = imgBox.offsetHeight/2 + 'px';
            let clientH = divBox.offsetHeight/2  + 'px'
            imgBox.style.cssText = `position: relative;bottom: 0;right: 0;left: 0;margin: auto;top:calc(${clientH} - ${imgBoxH});transform: scale(${allowScale});`;
            // 设置关闭样式
            closeBox.style.cssText = `border: 1px solid #ccc;
            border-radius: 50%;
            display: inline-block;
            height: 22px;
            width: 22px;
            line-height: 22px;
            text-align: center;
            font-size: 16px;
            color: red;`;
        });

        // 点击关闭按钮隐藏查看大图
        closeBox.addEventListener('click', function () {
            divBox.style.display = 'none';
        });
        divBox.addEventListener('click', function () {
            divBox.style.display = 'none';
        });
    }
})

export {viewImage}



// https://www.jianshu.com/p/6cd4deb554ce