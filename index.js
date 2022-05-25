/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-05-25 19:39:57
 * @LastEditTime: 2022-05-25 20:00:23
 * @LastEditors: PhilRandWu
 */
let topPosition, left, bottom, right;
function beginRecord(event) {
    topPosition = document.body.scrollTop + event.clientY;
    left = document.body.scrollLeft + event.clientX;
}
function endRecord(event) {
    right = document.body.scrollLeft + event.clientX;
    bottom = document.body.scrollTop + event.clientY;
    let cbks = document.getElementsByTagName("input");
    for (let i = 0; i < cbks.length; i++) {
        console.log(cbks[i].type)
        if (cbks[i].type === "checkbox") {
            let cbk = cbks[i];
            if (cbk.offsetTop >= topPosition && 
                (cbk.offsetTop + cbk.clientHeight <= bottom) && 
                cbk.offsetLeft >= left && 
                (cbk.offsetLeft + cbk.clientWidth) <= right) {
                cbk.checked = true;
            }
        }
    }
}
document.onmouseup = endRecord;
document.onmousedown = beginRecord;
