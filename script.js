new fullpage("#fullpage", {
    autoScrolling: true,
    scrollHorizontally: true
});


$(document).ready(function(){
    
    var loading = new TimelineMax();
    loading.fromTo(".upper h2", .6, {
        autoAlpha: 0,
        y: 20
    }, {
        autoAlpha: 1,
        y: 0
    },"+=1")
    .fromTo(".upper p", .6, {
        autoAlpha: 0
        // y: 20
    }, {
        autoAlpha: 1
        // y: 0
    })
    .fromTo(".btn1", .6, {
        autoAlpha: 0,
        x: -20
    }, {
        autoAlpha: 1,
        x: 0
    },"-=0.6")
    .fromTo(".btn2", .6, {
        autoAlpha: 0,
        x: 20
    }, {
        autoAlpha: 1,
        x: 0
    },"-=0.6")
    .fromTo(".lower .arrow", .6, {
        autoAlpha: 0,
        y: 20
    }, {
        autoAlpha: 1,
        y: 0
    })
});