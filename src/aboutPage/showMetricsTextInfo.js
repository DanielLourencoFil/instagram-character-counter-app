export function showMetricsTextInfo(){
    // const metricsBtns = document.querySelectorAll('.metric-plus-btn i')
    const metricsBtns = document.querySelectorAll('.metric-plus-btn')
    const metricsText = document.querySelectorAll('.metric-text')

    metricsBtns.forEach((btn, index) =>{
        
        if(btn.classList.contains('metric-plus-btn-onshow')){
            metricsText[index].classList.remove('show-metric-text')
            btn.classList.remove('metric-plus-btn-onshow')
        }
        btn.addEventListener('click', (e)=>{
            metricsText[index].classList.toggle('show-metric-text')
            btn.classList.toggle('metric-plus-btn-onshow')
        })
    });
}