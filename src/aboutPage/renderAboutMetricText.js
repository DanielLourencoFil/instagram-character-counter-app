export function renderABoutMetricText(dataText){
    const metricsWrapper = document.querySelector('.metrics-wrapper')
    
    metricsWrapper.innerHTML = dataText.map(item =>{
        const {title, textBody} = item;
        return `
          <div class="metric-sigle-wrapper">
            <h2 class="metric-title">${title}<i class="fas fa-plus metric-plus-btn"></i></h2>
            <p class="metric-text ">${textBody}</p>
        </div>
        `
    }).join('')
}

/*
<div class="metric-sigle-wrapper">
            <h2 class="metric-title">${title}<span class="metric-plus-btn"><i class="fas fa-plus"></i></span></h2>
            <p class="metric-text ">${textBody}</p>
        </div>
*/