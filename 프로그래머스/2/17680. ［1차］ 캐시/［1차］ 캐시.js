function solution(cacheSize, cities) {
    // const upperCities = cities.map((el)=>el.toUpperCase());
    // const cache = [];
    // let runTime = 0;
    // for(let i=0;i<upperCities.length;i++){
    //     if(cacheSize===0){
    //         runTime+=5;
    //     }
    //     else if(cache.includes(upperCities[i])){
    //         cache.splice(cache.indexOf(upperCities[i]),1);
    //         cache.unshift(upperCities[i]);
    //         runTime++;
    //     }
    //     else{
    //         if(cache.length===cacheSize){
    //             cache.pop();
    //         }
    //         cache.unshift(upperCities[i]); 
    //         runTime+=5;
    //     }
    // }
    // return runTime;
    
    if(cacheSize===0) return cities.length*5;
    const cacheArr = [];
    let time = 0;
    const city = cities.map((el)=>el.toLowerCase());
    for(let i=0;i<city.length;i++){
        let idx = cacheArr.indexOf(city[i])
        if(idx!==-1){
            time+=1;
            cacheArr.splice(idx,1);
            cacheArr.push(city[i]);
        }
        else{
            if(cacheArr.length<cacheSize){
                cacheArr.push(city[i]);
                time+=5;
            }
            else{
                cacheArr.shift();
                cacheArr.push(city[i]);
                time+=5;
            }
        }
    }
    return time;
}

