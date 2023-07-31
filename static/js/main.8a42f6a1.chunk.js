(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var a,n=i(8),c=i.n(n),s=(i(16),i(11)),l=i(2),r=i(1),d=(i(17),i(18),i(19),i(0)),o=function(e){var t=e.movie;return Object(d.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-left",children:Object(d.jsx)("figure",{className:"image is-48x48",children:Object(d.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(d.jsx)("div",{className:"media-content",children:Object(d.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(d.jsxs)("div",{className:"content",children:[t.description,Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},m=function(e){var t=e.movies;return Object(d.jsx)("div",{className:"movies",children:t.map((function(e){return Object(d.jsx)(o,{movie:e},e.imdbId)}))})},b=i(5),j=i(7),h=i(9),u=i.n(h);!function(e){e.ImgUrl="imgUrl",e.ImdbUrl="imdbUrl"}(a||(a={}));var g=function(e){var t=e.name,i=e.value,n=e.label,c=void 0===n?t:n,s=e.placeholder,o=void 0===s?"Enter ".concat(c):s,m=e.required,b=void 0!==m&&m,j=e.onChange,h=void 0===j?function(){}:j,g=Object(r.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),O=Object(l.a)(g,1)[0],p=Object(r.useState)(!1),v=Object(l.a)(p,2),f=v[0],w=v[1],x=!1,M="";t!==a.ImgUrl&&t!==a.ImdbUrl||(x=f&&b&&!/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/.test(i),M="Please enter valid URL for ".concat(c)),i.trim()||(x=f&&b&&!i,M="".concat(c," is required"));return Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{className:"label",htmlFor:O,children:c}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{type:"text",id:O,name:t,onChange:function(e){w(!0),h(e)},"data-cy":"movie-".concat(t),className:u()("input",{"is-danger":x}),placeholder:o,value:i,onBlur:function(){return w(!0)}})}),x&&Object(d.jsx)("p",{className:"help is-danger",children:M})]})},O=function(e){var t=e.onAdd;function i(e){return e.trim()}var a=Object(r.useState)(0),n=Object(l.a)(a,2),c=n[0],s=n[1],o=Object(r.useState)({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),m=Object(l.a)(o,2),h=m[0],u=m[1],O=!i(h.title)||!i(h.imgUrl)||!i(h.imdbUrl)||!i(h.imdbId),p=function(e){var t=e.target,i=t.value,a=t.name;u(Object(j.a)(Object(j.a)({},h),{},Object(b.a)({},a,i)))},v=function(e){e.preventDefault(),h.title&&h.imgUrl&&h.imdbUrl&&h.imdbId&&(t(h),u({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),s(c+1))};return Object(d.jsxs)("form",{className:"NewMovie",onSubmit:function(e){return v(e)},children:[Object(d.jsx)("h2",{className:"title",children:"Add a movie"}),Object(d.jsx)(g,{name:"title",label:"Title",value:h.title,onChange:p,required:!0}),Object(d.jsx)(g,{name:"description",label:"Description",value:h.description,onChange:p}),Object(d.jsx)(g,{name:"imgUrl",label:"Image URL",value:h.imgUrl,onChange:p,required:!0}),Object(d.jsx)(g,{name:"imdbUrl",label:"Imdb URL",value:h.imdbUrl,onChange:p,required:!0}),Object(d.jsx)(g,{name:"imdbId",label:"Imdb ID",value:h.imdbId,onChange:p,required:!0}),Object(d.jsx)("div",{className:"field is-grouped",children:Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:O,children:"Add"})})})]},c)},p=i(10),v=function(){var e=Object(r.useState)(p),t=Object(l.a)(e,2),i=t[0],a=t[1];return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"page-content",children:Object(d.jsx)(m,{movies:i})}),Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsx)(O,{onAdd:function(e){a((function(t){return[].concat(Object(s.a)(t),[e])}))}})})]})};c.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.8a42f6a1.chunk.js.map