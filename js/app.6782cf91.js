(function(e){function a(a){for(var o,i,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6"}[e]||e)+"."+{actividad:"c85d08a8","chunk-0206bfa0":"33b2cffd","chunk-0c047e41":"c61d009d","chunk-13a6037e":"4d890c69","chunk-18f95272":"2871605f","chunk-25b302c8":"804a6761","chunk-26fc7596":"765ac14d","chunk-2c06842c":"8553dda8","chunk-2d0e96ec":"0844d392","chunk-2d208d90":"6633f55c","chunk-2d21d0e2":"c6a4953b","chunk-2d22c123":"7a1cf630","chunk-2d2747e2":"2461f288","chunk-2e80bb9a":"3a8ecb43","chunk-319206de":"71e3f41f","chunk-32334cb6":"1e79774a","chunk-3c57cd7b":"a43f933e","chunk-3d6834f6":"b9b42b3b","chunk-4cdd78c0":"1dfd999e","chunk-4f2d402a":"870f0f03","chunk-4fde0a08":"8974f44f","chunk-515a8379":"cd6ba34a","chunk-53ccb27e":"fdfad1f7","chunk-55d286b8":"cc611637","chunk-59974754":"6e3bdef8","chunk-6e1e538a":"a6682555","chunk-766a929b":"b6ace251","chunk-c796899c":"c45914a8","chunk-e8a7823a":"16a1610c","chunk-f2df7d2c":"8c414e7f","chunk-fde47172":"07019240",comple:"604ce25e",creditos:"da62fe44",glosario:"04255345",intro:"b13845f9",referencias:"01f42188",sintesis:"0a75e8d6",tema1:"5bbc1902",tema2:"2cde3158",tema3:"29d95cac",tema4:"cbc3fcd7",tema5:"83711252",tema6:"4c525a7b"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"14d1f3e8","chunk-515a8379":"b1efe33c","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"7de72064","chunk-6e1e538a":"126808df","chunk-766a929b":"89685081","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"7448390c",creditos:"de1eff41",glosario:"d7192255",intro:"31d6cfe0",referencias:"a8056419",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0",tema6:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===o||d===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"51b8":function(e,a,n){e.exports=n.p+"img/img-ani-2.d38f0ac8.png"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),l=Object(s["a"])(c,i,t,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");u["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}},{path:"tema6",name:"tema6",component:function(){return n.e("tema6").then(n.bind(null,"92ea"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"ef72"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Fundamentos de impresión 3D",descripcionCurso:"Este componente introduce a las actividades necesarias para poder imprimir en 3D. Partiendo de un diseño modelado en CAD y llegando hasta la impresión.",imagenBannerPrincipal:n("e319"),fondoBannerPrincipal:n("6d95"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("ccb8")},{clases:["banner-principal-decorativo-2"],imagen:n("51b8")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Introducción a la impresión 3D",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Tipos de tecnologías de impresión 3D",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"<em>Software</em> para impresión 3D",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Programas de modelización 3D",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"<em>Software slicers</em> 3D y programas reparadores de archivos STL",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Otros <em>softwares</em>",hash:"t_3_3"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Configuración de impresoras 3D",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Alistamiento de impresoras 3D",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Transferencia de archivos a impresoras 3D",hash:"t_4_2"}]},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Operación de impresoras 3D",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"5.1",titulo:"Materiales e insumos para impresión 3D",hash:"t_5_1"},{icono:"far fa-file-alt",numero:"5.2",titulo:"Generación de prototipos 3D",hash:"t_5_2"},{icono:"far fa-file-alt",numero:"5.3",titulo:" Acabados superficiales a prototipos 3D",hash:"t_5_3"}]},{nombreRuta:"tema6",icono:"far fa-file-alt",numero:"6",titulo:"Mantenimiento de impresoras 3D",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Tecnologías de impresión 3D",referencia:"Leister, D. (2020). <em>Impresión 3D: ¿ya no es una amenaza para la fabricación tradicional de plástico?</em> ThermoFisherScientific.",tipo:"Articulo",link:"https://www.thermofisher.com/blog/cienciaacelerada/materiales/impresion-3d-ya-no-es-una-amenaza-para-la-fabricacion-tradicional-de-plastico/"},{tema:"Tecnologías de impresión 3D",referencia:"Millholland, C. (2021). <em>Soluciones de Fabricación Aditiva</em>.ThermoFisherScientific.",tipo:"Articulo",link:"https://www.thermofisher.com/blog/cienciaacelerada/materiales/soluciones-de-fabricacion-aditiva/"},{tema:"Seguridad y salud en el trabajo",referencia:"<em>Biblioteca virtual especializada en Seguridad y salud para el trabajo</em>. (2020).",tipo:"Normas",link:"https://deseguridadysalud.com/matriz-legal-sst-2020/"},{tema:"Software 3D",referencia:"Contreras, L (2022), <em>Los mejores Softwares CAD para todos los niveles</em>. 3D Natives.",tipo:"Articulo",link:"https://www.3dnatives.com/es/mejores-Softwares-cad-programa-180320192/#"},{tema:"Impresoras 3D",referencia:"Cults 3D. (s/f).<em> Como-configurar-impresora-3d-4-pasos</em>.",tipo:"Blog",link:"https://cults3d.com/es/blog/articles/como-configurar-impresora-3d-4-pasos"},{tema:"Materiales",referencia:"Adeva, R. (2022). <em>Todo lo que debes saber sobre la impresión 3D y sus utilidades</em>. Azadslzone.",tipo:"Articulo",link:"https://www.adslzone.net/reportajes/tecnologia/impresion-3d/#554745-materiales"},{tema:"Acabados superficiales",referencia:"de Haro, M (2020). <em>Tipos de acabados en impresiones 3D</em>. Intellyblog.",tipo:"Blog",link:"https://intelligy.com/blog/2020/09/15/tipos-de-acabados-en-impresiones-3d/#:~:text=Suavizado%20por%20lija,limas%2C%20mini%20pulidoras%2C%20etc."},{tema:"Mantenimiento",referencia:"Rec-line (2020) <em>Guía de buen mantenimiento de mi impresora 3D</em>.",tipo:"Blog",link:"https://rec-line.com/blog/guia-de-buen-mantenimiento-de-mi-impresora-3d/"}],glosario:[{termino:"CAD",significado:"<em>Computer Added Design</em> o Diseño Asistido por Computador"},{termino:"CAE",significado:"<em>Computer Added Enginnering</em> o Ingeniería Asistida por Computador"},{termino:"CAM",significado:"<em>Computer Added Manufacture</em> o Fabricación Asistida por Computador"},{termino:"DWG",significado:"<em>Software</em> Extensión de archivo de dibujo 2D y 3D del programa AutoCad"},{termino:"Slicer 3D",significado:"<em>Software</em> que envía todas las instrucciones que debe seguir la impresora, que generalmente están escritas en un lenguaje llamado <em>Gcode</em>"},{termino:"Termoestables",significado:"Son los polímeros que se transforman con éxito una sola vez, luego tienden a incinerarse. "},{termino:"Termoplasticos",significado:"Son los polímeros que permiten ser transformados más de una vez. "},{termino:"PLM",significado:"Del inglés <em>Product Life Cycle</em>, o gestión del ciclo de vida del producto."},{termino:"Sand Blast",significado:"Proceso de abrasión superficial mediante la aplicación de un material particulado con aire a alta presión."},{termino:"STL",significado:"Se refiere al proceso de impresión y al archivo en 3D llamado esteréo litografía."}],referencias:[{referencia:"Adeva, R (2022). Todo lo que debes saber sobre la impresión 3D y sus utilidades.",link:"https://www.adslzone.net/reportajes/tecnologia/impresion-3d/"},{referencia:"Contreras, L (2022). Los mejores <em>Softwares</em> CAD para todos los niveles. ",link:"https://www.3dnatives.com/es/mejores-Softwares-cad-programa-180320192/"},{referencia:"Cults 3D. (2020), Como configurar impresoras 3D.",link:"https://cults3d.com/es/blog/articles/como-configurar-impresora-3d-4-pasos"},{referencia:"de Haro, M. (2020). Tipos de acabados en impresiones 3D.",link:"https://intelligy.com/blog/2020/09/15/tipos-de-acabados-en-impresiones-3d/"},{referencia:"Filament2print (2018) Riesgos al imprimir en 3D.",link:"https://filament2print.com/es/blog/37_riesgos-imprimir-3d.html "},{referencia:"Millholland, C. (2021), Soluciones de Fabricación Aditiva 2021.",link:"https://www.thermofisher.com/blog/cienciaacelerada/materiales/soluciones-de-fabricacion-aditiva/"},{referencia:"Rec-line. (2020) Guía de buen mantenimiento de mi impresora 3D.",link:"https://rec-line.com/blog/guia-de-buen-mantenimiento-de-mi-impresora-3d/"},{referencia:"Regidor, A. (2021). Como pasar archivos a tu impresora 3D.",link:"https://www.impresion3daily.es/como-pasar-el-archivo-3d-a-tu-impresora-de-resina/"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:b,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},"6d95":function(e,a,n){e.exports=n.p+"img/banner.4ebceeac.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@vue/cli":"^5.0.8","ecored-base-pkg":"5.3.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},ccb8:function(e,a,n){e.exports=n.p+"img/img-ani-1.53ea24c2.png"},e319:function(e,a,n){e.exports=n.p+"img/img-1.b27c6ca9.png"}});
//# sourceMappingURL=app.6782cf91.js.map