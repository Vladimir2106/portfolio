var lang = {
'LNG1':{
    "ua":'Робота, яка вам подобається, перестає бути роботою',
    "eng":'Work that you like ceases to be work',
    "de": 'Arbeit, die dir gefällt, hört auf, Arbeit zu sein',
    },
'LNG2':{
    "ua":'про мене',
    "eng":'about me',
    "de": 'über mich',
},
'LNG3':{
    "ua":'пропозиції',
    "eng":'offers',
    "de": 'bietet an',
},
'LNG4':{
    "ua":'контакти',
    "eng":'contacts',
    "de": 'kontakte',
},
'LNG5':{
    "ua":'Володимир Петрукович',
    "eng":'Volodimir Petrykovich',
    "de": 'Wolodimir Petrykowitsch',
},
'LNG6':{
    "ua":'портфоліо',
    "eng":'portfolio',
    "de": 'portfolio',
},
'LNG7':{
    "ua":'Я спеціалізуюся на розробці персональних сайтів, сайтів для компаній або бізнесу. Моя робота – це хобі, яке приносить задоволення. У кожному проекті я намагаюся максимально задовольнити вимоги замовника та відтворити очікування в результатах роботи.',
    "eng":'I specialize in the development of personal websites, websites for companies or businesses. For me, my work is a hobby that brings pleasure. In each project, I try to satisfy the customers requirements as much as possible and reproduce the expectations as a result of the work',
    "de": 'Ich bin spezialisiert auf die Entwicklung von persönlichen Websites, Websites für Unternehmen oder Unternehmen. Meine Arbeit ist für mich ein Hobby, das Freude bereitet. In jedem Projekt versuche ich, die Anforderungen des Kunden so weit wie möglich zu erfüllen und die Erwartungen als Ergebnis der Arbeit zu reproduzieren.',
},
'LNG8':{
    "ua":'Робити те, що робить вас щасливим',
    "eng":'Do what makes you happy',
    "de": 'Tu, was dich glücklich macht',
},
'LNG9':{
    "ua":'Кожен проект – це індивідуальний підхід до потреб клієнта. Моя робота є продовженням мого бажання творити новий продукт, який принесе користь замовнику та задоволення користувачам. Я працюю в цьому напрямку роботи не так давно та кожен новий проект вважаю розвитком для себе.',
    "eng":'Each project is an individual approach to the clients needs. My work is a continuation of my desire to create a new product that will benefit the customer and satisfy users. I have been working in this line of work for not so long and I consider each new project a development for myself.',
    "de": 'Jedes Projekt ist ein individueller Ansatz für die Bedürfnisse des Kunden. Meine Arbeit ist eine Fortsetzung meines Wunsches, ein neues Produkt zu schaffen, das dem Kunden zugute kommt und die Benutzer zufriedenstellt. Ich arbeite noch nicht so lange in diesem Bereich und betrachte jedes neue Projekt als eine Weiterentwicklung für mich.',
},
'LNG10':{
    "ua":'Найкраща робота - це високооплачуване хобі',
    "eng":'The best job is a high paying hobby',
    "de": 'Der beste Job ist ein hochbezahltes Hobby',
},
'LNG11':{
    "ua":'Портфоліо - це персональний сайт, презентація, візитівка власника, який відображає індивідуальність та професійні досягнення його власника.',
    "eng":'Portfolio - it is a personal site, presentation, business card of the owner, which reflects the individuality and professional achievements of its owner.',
    "de": 'Portfolio -  es handelt sich um eine persönliche Website, präsentation, geschäftsstil des eigentümers, der die individualität und beruflichen leistungen seines eigentümers widerspiegelt.',
},
'LNG12':{
    "ua":'Інтернет-магазин – це електронний ресурс, сайт з певним каталогом товарів або послуг, за допомогою якого здійснюється їх продаж безпосередньо споживачеві. При цьому розміщення інформації, замовлення товарів та транзакція відбуваються безпосередньо на сайті магазину.',
    "eng":'Internet-shop is an electronic resource, a site with a certain catalog of goods or services, with the help of which they are sold directly to the consumer. At the same time, posting of information, ordering goods and transactions take place directly on the stores website.',
    "de": 'Ein Online-Shop ist eine elektronische Ressource, eine Website mit einem bestimmten Katalog von Waren oder Dienstleistungen, mit deren Hilfe sie direkt an den Verbraucher verkauft werden. Gleichzeitig finden das Posten von Informationen, die Bestellung von Waren und Transaktionen direkt auf der Website des Geschäfts statt.',
},
'LNG13':{
    "ua":'Цільова сторінка – це остання сторінка стовпця продажів або веб-сторінка, яка відкривається, коли ви натискаєте на рекламу чи посилання.',
    "eng":'landing page is the final page of the sales column, also a web page that opens when you click on an advertisement or link.',
    "de": 'Zielseite ist die letzte Seite der Verkaufsspalte, ebenfalls eine Webseite, die geöffnet wird, wenn Sie auf eine Anzeige oder einen Link klicken.',
},
'LNG14':{
    "ua":'Україна, Київ, вул. Велика Житомирська 52/8',
    "eng":'Ukraine, Kyiv, str. Velika Zhytomyrska 52/8',
    "de": 'Ukraine, Kiew, Str. Velika Schytomyrska 52/8',
},
'LNG15':{
    "ua":'контакти',
    "eng":'contacts',
    "de": 'kontakte',
},
'LNG16':{
    "ua":'інтернет магазин',
    "eng":'internet-shop',
    "de": 'internetshop',
},
'LNG17':{
    "ua":'цільова сторінка',
    "eng":'landing page',
    "de": 'zielseite',
},
'LNG18':{
    "ua":'пропозиції',
    "eng":'offers',
    "de": 'bietet an',
},
'LNG19':{
    "ua":'про мене',
    "eng":'about me',
    "de": 'über mich',
},
'LNG20':{
    "ua":'ЗАЛИШИТИ ЗАЯВКУ',
    "eng":'SUBMIT AN APPLICATION',
    "de": 'EINEN ANTRAG STELLEN',
},
}


/*УКР*/
const q3=document.querySelectorAll('.leng')[0]
console.log(q3)

q3.addEventListener('click',function(){
    if(q3.click=true){
        document.querySelector('.LNG1').innerHTML=lang['LNG1']['ua'];
        document.querySelector('.LNG2').innerHTML=lang['LNG2']['ua'];
        document.querySelector('.LNG3').innerHTML=lang['LNG3']['ua'];
        document.querySelector('.LNG4').innerHTML=lang['LNG4']['ua'];
        document.querySelector('.LNG5').innerHTML=lang['LNG5']['ua'];
        document.querySelector('.LNG6').innerHTML=lang['LNG6']['ua'];
        document.querySelector('.LNG7').innerHTML=lang['LNG7']['ua'];
        document.querySelector('.LNG8').innerHTML=lang['LNG8']['ua'];
        document.querySelector('.LNG9').innerHTML=lang['LNG9']['ua'];
        document.querySelector('.LNG10').innerHTML=lang['LNG10']['ua'];
        document.querySelector('.LNG11').innerHTML=lang['LNG11']['ua'];
        document.querySelector('.LNG12').innerHTML=lang['LNG12']['ua'];
        document.querySelector('.LNG13').innerHTML=lang['LNG13']['ua'];
        document.querySelector('.LNG14').innerHTML=lang['LNG14']['ua'];
        document.querySelector('.LNG15').innerHTML=lang['LNG15']['ua'];
        document.querySelector('.LNG16').innerHTML=lang['LNG16']['ua'];
        document.querySelector('.LNG17').innerHTML=lang['LNG17']['ua'];
        document.querySelector('.LNG18').innerHTML=lang['LNG18']['ua'];
        document.querySelector('.LNG19').innerHTML=lang['LNG19']['ua'];
        document.querySelector('.LNG20').innerHTML=lang['LNG20']['ua'];
    }
    else('жопа')
}
)

/*анг*/
const q4=document.querySelectorAll('.leng')[1]
q4.addEventListener('click',function(){
    if(q4.click=true){
        document.querySelector('.LNG1').innerHTML=lang['LNG1']['eng'];
        document.querySelector('.LNG2').innerHTML=lang['LNG2']['eng'];
        document.querySelector('.LNG3').innerHTML=lang['LNG3']['eng'];
        document.querySelector('.LNG4').innerHTML=lang['LNG4']['eng'];
        document.querySelector('.LNG5').innerHTML=lang['LNG5']['eng'];
        document.querySelector('.LNG6').innerHTML=lang['LNG6']['eng'];
        document.querySelector('.LNG7').innerHTML=lang['LNG7']['eng'];
        document.querySelector('.LNG8').innerHTML=lang['LNG8']['eng'];
        document.querySelector('.LNG9').innerHTML=lang['LNG9']['eng'];
        document.querySelector('.LNG10').innerHTML=lang['LNG10']['eng'];
        document.querySelector('.LNG11').innerHTML=lang['LNG11']['eng'];
        document.querySelector('.LNG12').innerHTML=lang['LNG12']['eng'];
        document.querySelector('.LNG13').innerHTML=lang['LNG13']['eng'];
        document.querySelector('.LNG14').innerHTML=lang['LNG14']['eng'];
        document.querySelector('.LNG15').innerHTML=lang['LNG15']['eng'];
        document.querySelector('.LNG16').innerHTML=lang['LNG16']['eng'];
        document.querySelector('.LNG17').innerHTML=lang['LNG17']['eng'];
        document.querySelector('.LNG18').innerHTML=lang['LNG18']['eng'];
        document.querySelector('.LNG19').innerHTML=lang['LNG19']['eng'];
        document.querySelector('.LNG20').innerHTML=lang['LNG20']['eng'];
    }
    else('жопа')
}
)

/*немец*/
const q5=document.querySelectorAll('.leng')[2]
q5.addEventListener('click',function(){
    if(q5.click=true){
        document.querySelector('.LNG1').innerHTML=lang['LNG1']['de'];
       
        document.querySelector('.LNG2').innerHTML=lang['LNG2']['de'];
        document.querySelector('.LNG3').innerHTML=lang['LNG3']['de'];
        document.querySelector('.LNG4').innerHTML=lang['LNG4']['de'];
        document.querySelector('.LNG5').innerHTML=lang['LNG5']['de'];
        document.querySelector('.LNG6').innerHTML=lang['LNG6']['de'];
        document.querySelector('.LNG7').innerHTML=lang['LNG7']['de'];
        document.querySelector('.LNG8').innerHTML=lang['LNG8']['de'];
        document.querySelector('.LNG9').innerHTML=lang['LNG9']['de'];
        document.querySelector('.LNG10').innerHTML=lang['LNG10']['de'];
        document.querySelector('.LNG11').innerHTML=lang['LNG11']['de'];
        document.querySelector('.LNG12').innerHTML=lang['LNG12']['de'];
        document.querySelector('.LNG13').innerHTML=lang['LNG13']['de'];
        document.querySelector('.LNG14').innerHTML=lang['LNG14']['de'];
        document.querySelector('.LNG15').innerHTML=lang['LNG15']['de'];
        document.querySelector('.LNG16').innerHTML=lang['LNG16']['de'];
        document.querySelector('.LNG17').innerHTML=lang['LNG17']['de'];
        document.querySelector('.LNG18').innerHTML=lang['LNG18']['de'];
        document.querySelector('.LNG19').innerHTML=lang['LNG19']['de'];
        document.querySelector('.LNG20').innerHTML=lang['LNG20']['de'];

    }
    else('жопа')
}
)

function transl(){
    const f=document.querySelector('form')
    let f1=f.querySelectorAll('input')[0]
    let f21=f1.getAttribute('placeholder')

    let f2=f.querySelectorAll('input')[1]
    let f22=f2.getAttribute('placeholder')

    let f3=f.querySelectorAll('input')[2]
    let f23=f3.getAttribute('placeholder')

    let f5=f.querySelectorAll('input')[4].value
   /*console.log(f5)*/

    q4.onclick=function(){
        f21=f1.setAttribute('placeholder','YOUR NAME');
        f22=f2.setAttribute('placeholder','ORDER DESCRIPTION');
        f23=f3.setAttribute('placeholder','YOUR @MAIL');
        f5=f.querySelectorAll('input')[4].value="SEND";
    }
    q3.onclick=function(){
        f21=f1.setAttribute('placeholder','ВАШЕ ІМЯ');
        f22=f2.setAttribute('placeholder','ОПИС ЗАМОВЛЕННЯ');
        f23=f3.setAttribute('placeholder','ВАШ @MAIL');
        f5=f.querySelectorAll('input')[4].value="ВІДПРАВИТИ";
        
    }
    q5.onclick=function(){
        f21=f1.setAttribute('placeholder','IHREN NAMEN');
        f22=f2.setAttribute('placeholder','BESTELLBESCHREIBUNG');
        f23=f3.setAttribute('placeholder','IHRE E-MAIL');
        f5=f.querySelectorAll('input')[4].value="SENDEN";
    }
 }

transl();
