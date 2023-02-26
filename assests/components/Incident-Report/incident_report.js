function showNextPage() {
    let nextView = `                    
            <h1>Incident Details</h1>
            <div class="inputs injury-type">
                <label for="injury-type">Injury Type</label>
                <input type="text" id="injury-type" name="injury-type" required/>
            </div>
            <div class="inputs days-injured">
                <label for="daysinjured">Days Injured</label>
                <input type="number" id="daysinjured" placeholder="28"/>
            </div>
            
            <fieldset class="status">
                <legend> Still Injured?</legend>
                <div class="checkbox">
                    <label for="yes">yes</label>
                    <input type="radio" title="Please click the box if you are still injured" id="yes" aria-required="true" required name="response" checked/>
                </div>
                <div class="checkbox">
                    <label for="no">no</label>
                    <input type="radio" title="Please click the box if you are still injured" id="no" aria-required="true"  name="response"/>
                </div>
                <p class="error"> Can't be unchecked </p>
            </fieldset>
            <button type="submit" class="btn" onclick="success()"> Submit </button>`;
    document.querySelector('form').innerHTML = nextView;
    document.querySelector('form').classList.add('updateView');
}

const getErrorElement = (el) => {
    const displayError = document.querySelector('.error');
    if(el.nextElementSibiling === displayError){
        return displayError;
    }
    //return getErrorElement(el)
}
function validateForm (){
    const formElements = {
        form: document.querySelector('form'),
        errorElement : document.querySelector('.error'),
        errorMessage: {
            required: "Can't Be Blank",
            formatError: "Wrong Format",
        }
    };
    formElements.form?.addEventListener('submit', e => {
        e.preventDefault();
        const target = e.target;
        const fields = target.querySelectorAll('input');
        let isValid = true;
        fields.forEach( field => {
            const validity = field.validity;
            const errormesage = formElements.errorMessage;
            const errorElement = getErrorElement(field);
            
            if(validity.valid){
                field.classList.remove('error');
                formElements.errorElement.textContent = errorElement.textContent = '';
                return;
            }
            isValid = false;
            field.classList.add('error');
            formElements.errorElement.textContent = errorElement.textContent = validity.valueMissing ? errormesage.required : errormesage.formatError;
        });
    })
}
validateForm();
