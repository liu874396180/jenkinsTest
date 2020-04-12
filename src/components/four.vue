<template>
    <div>
    	<p>box</p>
       <input type="checkbox" name="" id="checkbox1">
      	<label for="checkbox1" class="ui-checkbox"></label><label for="checkbox1">duo选项1</label>
       <input type="checkbox" name="">
       <br>
       <br>
       <br>
       <text-over :textContent="textContent" :campNum="campNum"></text-over>
       <text-over :textContent="textContent" :campNum="1"></text-over>
       <text-over :textContent="textContent" :campNum="2"></text-over>
       <text-over :textContent="textContent" :campNum="4"></text-over>
       <text-over :textContent="textContent" :campNum="7"></text-over>

       <br>
       <br>
       <br>
       <br>
    </div>
</template>
<script>
import textOver from './text'
export default {
    data(){
    	return{
    		textContent:"我应该是的高考分数来电管家分数来电管家分数来电AAAA我应该是的高考分数来电管家分数来电管家分数来电AAAA我应该是的高考分数来电管家分数来电管家分数来电AAAA",
    		campNum:2
    	}
    },
    components:{
        textOver
    },
    mounted(){}
}
</script>
<style type="text/css">
	/*@charset "UTF-8";*/
/**
 *
 * @Checkbox.css
 * @author zhangxinxu
 * @create 15-06-18
 * @edit 17-06-14  focusable
**/
input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 20px;
  height: 20px;
  filter: alpha(opacity=0);
  cursor: pointer;
  z-index: -1; }

/* 无绝对定位的模拟生成实现 */
.ui-checkbox {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: inset 0 1px, inset 1px 0, inset -1px 0, inset 0 -1px;
  background-color: #fff;
  background-clip: content-box;
  color: #d0d0d5;
  -webkit-transition: color .2s, background-color .1s;
  transition: color .2s, background-color .1s;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: -5px;
  *vertical-align: 0;
  overflow: hidden; }

:not(:disabled) + .ui-checkbox:hover,
:disabled + .ui-checkbox {
  color: #ababaf; }

:focus + .ui-checkbox {
  color: #2486ff; }

:checked:focus + .ui-checkbox {
  color: #0057c3;
  background-color: #0057c3; }

:checked + .ui-checkbox,
:checked + .ui-checkbox:hover {
  color: #2486ff;
  background-color: #2486ff; }

.ui-checkbox::after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNDcuNTY3LDY3LjU3NWMtMy45NzgtMy4yNDEtNC4zNTYtMy4zMzctOC45LTUuNjM5Yy0yLjA0NC0xLjA0NC01LjA1NywxLjY0NS02LjUzLDMuNjM1TDkyLDExNy43MjgNCglMNjUuODUxLDgzLjk3M2MtMS40NzktMS45ODgtNC4yMDYtMi43Mi02LjI1MS0xLjc4MmMtNC42NTgsMi40MDctNC4xODksMi4zMjYtOC4xNjgsNS40NjZjLTEuODE3LDEuNDY2LTEuOTMyLDQuMDgyLTAuNDU2LDYuMDY1DQoJYzAsMCwyOC4xODMsMzYuNDk5LDMxLjU5Miw0MC44OTZjNC45OTksNi4yNzUsMTQuMDksNS45NjUsMTguODY0LDBjMy41Mi00LjQ5OCw0Ni41OS02MS4wNzgsNDYuNTktNjEuMDc4DQoJQzE0OS40OTksNzEuNTQ5LDE0OS4zODUsNjguOTM3LDE0Ny41NjcsNjcuNTc1eiIvPg0KPC9zdmc+DQo=) no-repeat center;
  background-size: 20px 20px;
  visibility: hidden; }

:checked + .ui-checkbox::after {
  visibility: visible;
  -webkit-animation: bounceIn .2s;
  animation: bounceIn .2s; }

:disabled + .ui-checkbox {
  opacity: .38; }

/* error */
.error.ui-checkbox {
  color: #f4615c; }

/*IE7, IE8 使用图片作UI*/


</style>