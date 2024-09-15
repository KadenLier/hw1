function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!
    const JOBS = document.getElementsByName('job');
    let selectedJob = "";
    for (let job in JOBS) {
        if (JOBS[job].checked) {
            selectedJob = JOBS[job].value;
        }
    }
    // TODO: Alert the user of the job that they applied for!
    alert(`Thank you for applying to be a ${selectedJob}`);
    //small change
    
}