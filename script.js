
function  LoadingScreen () {

    const buttons = document.querySelectorAll('.forms');
    var url = './assests/components/TopForm/The_odin_project_form.html'
    buttons.forEach( el => el.addEventListener('click', ()=>{
        //create view
        let svg = document.querySelector('.liquid');
        let loader = document.createElement('div');
        let container = document.createElement('div');
        let spinner_container = document.createElement('span');
        let spinner = document.createElement('img');
        let drops = document.createElement('div');
        let drop1 = document.createElement('div');
        let drop2 = document.createElement('div');
        
        //Attach each child to parent
        container.appendChild(spinner_container);
        spinner_container.appendChild(spinner);
        drops.append(drop1,drop2);
        loader.append(container,drops);
        document.querySelector('section').insertBefore(loader,svg );
    
        //Give each component a identifier
        loader.classList.add('modal');
        container.classList.add('modal-bg');
        spinner.className="kuhl";
        drops.classList.add('drops');
        drop1.className = 'drop1';
        drop2.className = 'drop2';
    
    
        //set the loading image
        spinner.src = './assests/images/gif-loader-13.gif';
        spinner.alt = "Loader";
        
        //make svg visible
        svg.style.display = "block";


        //Load screen
        setTimeout(()=>{
            console.log("started");
            const navigationTarget = document.querySelector('.content').href = url;
            window.open(navigationTarget,target="_self");
            console.log("finished");
        }, 3800);
    }));
    
    
}

function Loading(){
    LoadingScreen();
}

    
    //Show loading screen first then wait then navigate to screen

    Loading();

/*
function myFunc() {
    var url = './assests/components/TopForm/The_odin_project_form.html'
    
    //Show loading screen first then wait then navigate to screen
    setTimeout(()=>{
        console.log("started");
        document.querySelector('.content').href = url;
        console.log("finished");
    }, 3800);
    LoadingScreen();
    /*setTimeout(() => {
        document.querySelector('.content').href = url;
        /*(function() {
            setTimeout(,500);
        })();
    }, 5000);
}*/
