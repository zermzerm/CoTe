function solution(cacheSize, cities) {
    const upperCities = cities.map((el)=>el.toUpperCase());
    const cache = [];
    let runTime = 0;
    for(let i=0;i<upperCities.length;i++){
        if(cacheSize===0){
            runTime+=5;
        }
        else if(cache.includes(upperCities[i])){
            cache.splice(cache.indexOf(upperCities[i]),1);
            cache.unshift(upperCities[i]);
            runTime++;
        }
        else{
            if(cache.length===cacheSize){
                cache.pop();
            }
            cache.unshift(upperCities[i]); 
            runTime+=5;
        }
    }
    return runTime;
}

